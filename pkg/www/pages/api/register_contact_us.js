const {MongoClient} = require('mongodb');
import mongo from '../../../util/mongo.js';

export default async (req, res)=>{
    let doc = {...req.body, ts: Date.now()};
    await mongo.insert('contact_us', doc);
    res.status(200).json({done: 1});
};
