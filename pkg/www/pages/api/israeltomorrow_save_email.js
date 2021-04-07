import mongo from '../../../util/mongo.js';

export default async (req, res)=>{
  await mongo.insert('israeltomorrow_emails', {ts: new Date(),
    email: doc.email, user_agent: req.headers['user-agent']});
  res.setHeader('Access-Control-Allow-Origin',
    'https://israeltomorrow.co.il');
  res.status(200).json({done: 1});
};
