require('../util/config.js');
const etask = require('../util/etask.js');
const {MongoClient} = require('mongodb');

let E = module.exports;

let client, init_et;
let init_client = ()=>etask(function*(){
    if (client)
        return client;
    if (init_et)
        return yield etask.wait_ext(init_et);
    init_et = this;
    this.finally(()=>init_et = null);
    client = new MongoClient(process.env.MONGO_URI||'mongodb://mongo',
        {useNewUrlParser: true, useUnifiedTopology: true});
    yield client.connect();
    return client;
});

E.get_collection = coll_name=>etask(function*(){
    const client = yield init_client();
    const database = client.db('db');
    return database.collection(coll_name);
});

E.find_one = (coll_name, selector, sort)=>etask(function*(){
    const collection = yield E.get_collection(coll_name);
    let opt = {};
    selector = selector||{};
    if (sort)
        opt.sort = sort;
    return yield collection.findOne(selector, opt);
});

E.find_all = (coll_name, selector, opt)=>etask(function*(){
    const collection = yield E.get_collection(coll_name);
    selector = selector||{};
    opt = opt||{};
    let cursor = collection.find(selector);
    if (opt.hint)
        cursor.hint(opt.hint);
    if (opt.projection)
        cursor.project(opt.projection);
    if (opt.sort)
        cursor.sort(opt.sort);
    if (opt.limit)
        cursor.limit(opt.limit);
    if (opt.skip)
        cursor.skip(opt.skip);
    if (opt.maxTimeMS)
        cursor.maxTimeMS(opt.maxTimeMS);
    if (opt.batchSize)
        cursor.batchSize(opt.batchSize);
    return yield cursor.toArray();
});

E.insert = (coll_name, doc)=>etask(function*(){
    const collection = yield E.get_collection(coll_name);
    return yield collection.insertOne(doc);
});
