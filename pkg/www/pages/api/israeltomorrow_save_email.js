import mongo from '../../../util/mongo.js';

export default async (req, res)=>{
  let email = (''+(req.body && req.body.email)).substr(0, 256);
  await mongo.insert('israeltomorrow_emails', {ts: new Date(),
    email: email, user_agent: req.headers['user-agent']});
  res.setHeader('Access-Control-Allow-Origin',
    'https://israeltomorrow.co.il');
  res.status(200).json({done: 1});
};
