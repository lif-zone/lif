import mongo from '../../../util/mongo.js';

export default async (req, res)=>{
  let path = (''+(req.body && req.body.path)).substr(0, 128);
  let event = (''+(req.body && req.body.event)).substr(0, 128);
  await mongo.update_one('israeltomorrow_log', {path, event},
    {$inc: {counter: 1}}, {upsert: true});
  res.status(200).json({done: 1, event, path});
};
