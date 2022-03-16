import * as _jquery from 'jquery';
import Layout from '../../components/layout.js';
import anchorific from '../../components/anchorific.js';
import {dna_style} from '../../components/style.js';
import {H1, H2, H3} from '../../components/anchor.js';
import etask from '../../../util/etask.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
const NL = '\n';
const $ = jquery__WEBPACK_IMPORTED_MODULE_1__;
anchorific.init($);

export const getStaticProps = ({locale})=>etask(function*(){
  return {props: yield serverSideTranslations(locale, ['common'])}; });

export default function DNA(){
  Layout.use_scroll_to_hash($);
return (
<Layout title='LIF DNA' desc='Bootcamp'
  style={dna_style} dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Bootcamp</div>
  <p><b>Bootcamp 3 week program</b></p>
  <p>Improvements? Suggestions? email
    <a href=mailto:dna@holaspark.com>dna@holaspark.com</a></p>
</div>
<div class=content>
<h1 id=rnd>R&D</h1>
<h2 id=rnd-pre text="Before the bootcamp">Prior to joining - preparing for
  bootcamp</h2>
<p>
  Prior to joining Spark and coming to the bootcamp, we will provide you by
  email with information <a href=/about>about Spark</a>, our
  <a href=/dna>DNA</a> and <a href=/dna/dict>internal dictionary</a>,
  <a href=/dna/dict#products>products</a>,
  <a href=/dna/dict#coding>coding conventions</a> and
  <a href=/dna/basics#rnd>basic tools and methods of work</a>.<br>
  We will schedule 3 online sessions for you with your
  <a href=/dna/dict#mentor>mentor</a>, prior to start of camp, to answer your
  questions, and to provide a few short tasks, based on these materials, to
  help you ensure that you have them covered well.
</p>

<h3 id=rnd-pre-learn>Learning starts at home</h3>
<p>
  Your first days in the bootcamp significantly impact your pace in Spark.
  Since we truly believe in <a href=/dna#effective-productive>productivity</a>
  from the very first day, it is strongly recommended to invest the time,
  <b>learn</b> and <b>practice</b> the
  <a href=/dna/basics>technical materials</a>
  provided by your mentor. Note that failure in these online sessions can end
  with cancellation of your bootcamp.<br>
  Also note that you are expected to act according to our <a href=/dna>DNA</a>
  from day-1. Invest time <b>learning</b> it.
</p>
<p>
  This bootcamp is for developers.<br>
  Bootcamps for other positions (Sales, Success, Deploy, Graphic Designers,
  Product and Project Managers...) are
  <a href=http://web.holaspark.com/proc/bootcamp>here</a>.
</p>

<h2 id=rnd-day1>Day 1</h2>
<h4 id=rnd-day1-goal text="Goal">Goal: Get to know the Spark work flows, and
  deploy your first code to millions of users!</h4>
<p>
  During your first day, you will learn the basic work flow in the Spark
  development team. You will learn how we deploy our products to the field, the
  tools and flows of our working environment and all other surroundings, so
  that you can become productive on day 1.<br>
  Today you will deploy your first code to millions of Spark users!
</p>
<h4 id=rnd-day1-schedule>Schedule</h4>
<table>
  <tr>
    <td>09:00</td>
    <td>
      Welcome to Spark - a session with your
      <a href=/dna/dict#mentor>mentor</a>, explaining Spark's organization,
      roles and responsibilities
    </td>
  </tr>
  <tr>
    <td>10:00</td><td>Get to know your workstation: get your
      username/email/laptop</td>
  </tr>
  <tr>
    <td>11:00</td><td>Deploy team session - working in the Deploy team,
      deploying real code to the field</td>
  </tr>
  <tr>
    <td>13:00</td><td><a href=/dna/dict#chef>Chef</a> lunch together with the
      team</td>
  </tr>
  <tr>
  <td>13:30</td>
  <td><a href=/dna/dict#workstation>Workstation</a> best practices with your
    mentor</td>
  </tr>
  <tr>
    <td>13:45</td>
    <td>Get your
      <a href=http://web.holaspark.com/dict#1st_task>first engineering task</a>
    </td>
  </tr>
  <tr>
    <td>15:30</td><td>Debug your code and run unit-tests</td>
  </tr>
  <tr>
    <td>16:00</td>
    <td>
      Do your first commit session with your mentor.<br>
      In this session we will practice for the first time the
      <a href=/dna/dict#review-sync>Blocking sync Review</a>
    </td>
  </tr>
  <tr>
    <td>17:00</td><td>Deploy your code to the Spark user base (!)</td>
  </tr>
  <tr>
    <td>17:30</td><td>Test your code on the web</td>
  </tr>
  <tr>
    <td>18:00</td><td>Go home! 50M users have your code</td>
  </tr>
</table>

<h2 id=rnd-day2>Day 2</h2>
<h4 id=rnd-day2-goal text="Goal">Goal: Deploy your second task to the world,
  and understand the reporting procedures in Spark</h4>
<p>
  Now that you have already deployed your first engineering task, you will be
  introduced to how progress is communicated at Spark. You will also receive
  your second task that will likely take you the entire rest of the day. In
  this second task you will dive deeper into the Spark way of writing code.
  You'll understand the mechanism of testing it, and again you will deploy it
  to the Spark user base.
</p>
<h4 id=rnd-day2-schedule>Schedule</h4>
<table>
  <tr>
    <td>09:00</td><td>Get your second engineering task</td>
  </tr>
  <tr>
    <td>13:00</td><td>Chef lunch together with the team</td>
  </tr>
  <tr>
    <td>16:30</td><td>Commit session together with your mentor</td>
  </tr>
  <tr>
    <td>17:00</td><td>Deploy your code</td>
  </tr>
  <tr>
    <td>17:30</td><td>Test your code on the Internet</td>
  </tr>
</table>

<h2 id=rnd-day3>Day 3</h2>
<h4 id=rnd-day3-goal text="Goal">Goal: Your first mini-project</h4>
<p>
  After two days at Spark, you are now very familiar with how things are done at
  Spark and with the (hopefully few) procedures in getting them done. This is
  the time to start doing more complicated things. Today, if no bugs were found
  with your deployed code, you will start your first mini-project. Together
  with your mentor you will define this mini-project, break it into sub-tasks,
  and discuss the design and unit-tests that you will implement.<br>
  This task should take till the end of the week, split into small incremental daily
  commitable sub-tasks. You will go through the full development cycle of
  writing unit-tests, wring your code, debugging, commit session and deploy.
</p>

<h2 id=rnd-day5>Day 5</h2>
<h4 id=rnd-day5-goal text="Goal">Goal: Going through some DNA trainings</h4>
<p>
  You are towards completing your first project, as well as finishing your
  first week at Spark.<br>
  It's time to take a short break and dive into our DNA fundamentals together
  with the DNA Manager.
</p>

<h4 id=rnd-day5-schedule>Schedule</h4>
<table>
  <tr>
    <td>10:00</td>
    <td>
      Handling your email - an email training, based on our
      <a href=/dna/comm#email>Email Style Guide</a>, provided by the DNA
      Manager
    </td>
  </tr>
  <tr>
    <td>13:00</td><td>Chef lunch together with the team</td>
  </tr>
  <tr>
    <td>16:00</td><td>Final commit session together with your mentor</td>
  </tr>
  <tr>
    <td>17:00</td><td>Deploy your code</td>
  </tr>
  <tr>
    <td>17:30</td><td>Test your code on the Internet</td>
  </tr>
</table>

<h2 id=rnd-week2 text="Week 2">Week 2</h2>
<h4 id=rnd-week2-goal text="Goal">Goal: Swimming (almost) on your own</h4>
<p>
  Time flies when you're having fun!<br>
  You have finished your first week diving into the code, implementing your
  first mini-project, learning the internals and getting to know the team
  around you. If you have finished your work, and no bugs were found, it's
  time to take a deep breath and dive into more complicated tasks.<br>
  At this stage you are expected to be swimming smoothly almost on your own.
  You'll receive another task, but this time you are expected to go through the
  development cycle almost on your own. Your mentor is still here for you, but
  now he is your resource to use when you have questions, or when you call him
  for doing a commit session.<br>
  During this week, you will begin to learn about our products' internals
  using our videos.<br>
  Below is a list of videos which is recommended to watch during the week:<br>
</p>
<ul>
  <li>
    <a href=https://drive.google.com/open?id=0B8xxJRRVoIhBek9sUVRwY3V0TFE>Spark VPN network explanation</a>
  </li>
  <li>
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9UbGw4ZUdEUi1BRnM>CDN technical explanation</a>
    (seek to 03:30)
  </li>
</ul>

<h2 id=rnd-week3 text="Week 3">Week 3</h2>
<h4 id=rnd-week3-goal text="Goal">Goal: Swimming on your own</h4>
<p>
  You are almost there, finishing your first project on your own, as well as
  start doing commits on your own
  (<a href=/dna/dict#review-async>Non-blocking asynchronous Review</a>),
  receiving remarks from your peers, as well as start receiving more tasks
  which will be logged in your version plan.<br>
  For this week we have prepared some more videos which are recommended for
  watching:<br>
</p>
<ul>
  <li>
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark overview</a>
  </li>
  <li>
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9UNUFyLXNJNmJwT1E>Rapid integration</a>
  </li>
</ul>

<h2 id=rnd-done text="Bootcamp completed!">Bootcamp completed! What's next?</h2>
<p>
  Congratulations, you are now officially a
  <a href=/dna/dict#noob>Spark Noob</a>!!<br>
  Few things to know and remember before you start your journey:<br>
  During the bootcamp you have modified several files and even wrote some
  code from scratch.<br>
  It's time to step forward and assume responsibility on the code you wrote.
  <br>
  You'll review your commits together with your mentor (using
  <a href=/dna/dict#cvs-search>CVS Search</a>), and take co-ownership of
  significant modules/files you wrote using the <a href=/dna/dict#jdoc>jdoc</a>
  system.<br>
  One more thing; Remember your version plan? This is the place from where you
  start.  By now it should have all the information you need for your near
  future tasks and the details of what you are about to do, typically for the
  upcoming month or two.<br>
  Welcome to Spark
</p>
<h1 id=sales>Sales</h1>
<h2 id=sales-pre text="Before the bootcamp">Prior to joining - preparing for
  bootcamp</h2>
<p>
  Prior to joining Spark and coming to the bootcamp, we will provide you by
  email with information <a href=/about>about Spark</a>, <a href=/dna>DNA</a>,
  <a href=/dna/basics#spark-general>general</a> and
  <a href=/dna/basics#spark-sales>specific</a> knowledge materials we would
  like you to learn.<br>
  We will schedule an online sessions for you with your
  <a href=/dna/dict#mentor>mentor</a>, prior to start of camp, to answer your
  questions, and to provide a few short tasks, based on these materials, to
  help you ensure that you have them covered well.
</p>

<h3 id=sales-pre-learn>Learning starts at home</h3>
<p>
  Your first days in the bootcamp significantly impact your pace in Spark.
  Since we truly believe in
  <a href=/dna#effective-productive>productivity</a> from the
  very first day, it is strongly recommended to invest the time,
  <b>learn</b> and <b>practice</b> the
  <a href=/dna/basics#spark>technical materials</a> provided by
  your mentor.
</p>

<h2 id=sales-day1>Day 1</h2>
<h3 id=sales-day1-goal text="Goal">Goal: Generating your first 5 leads</h3>
<p>
  During your first day, you will review the basic sales processes, methods and
  tools.<br>
  Once ready, you will start generating your first 5 new leads and adding them
  to <a href=/dna/dict#mdoc>mdoc</a>.
</p>

<h3 id=sales-day1-schedule>Schedule</h3>
<table>
  <tr>
    <td>09:00</td>
    <td>
      Open your
      <a href=http://mdoc.holaspark.com/cdn/first_day/new?create=1>First day procedure</a>
      and execute it step-by-step.<br>
      This procedure will guide you through all the tools, services and methods
      you need to know in order to run a successful sales process.
    </td>
  </tr>
  <tr>
    <td>11:00</td>
    <td>
      Welcome to Spark - a session with your
      <a href=/dna/dict#mentor>mentor</a>, explaining Spark's organization,
      roles and responsibilities
    </td>
  </tr>
  <tr>
    <td>13:00</td>
    <td>Lunch break</td>
  </tr>
  <tr>
    <td>13:30</td>
    <td>
      Create your first 5 new leads in the system
    </td>
  </tr>
  <tr>
    <td>18:00</td>
    <td>
      Review your performance with your mentor
    </td>
  </tr>
</table>

<h2 id=sales-day2>Day 2</h2>
<h3 id=sales-day2-goal text="Goal">Goal: Send your first emails/invitations to
  customers and generate 15 new leads</h3>
<p>
  Today you will approach for the first time the customers (leads) you
  have generated yesterday and get to know the methods we use to do it. You
  will continue generating new leads (15 more) and improving your skills doing
  so.<br>
  Hopefully you will get lucky and handle new leads that responded, trying to
  convince them going to a call.
</p>

<h3 id=sales-day2-schedule>Schedule</h3>
<table>
  <tr>
    <td>09:00</td>
    <td>
      Open your
      <a href=http://mdoc.holaspark.com/cdn/second_day/new?create=1>Second day procedure</a>
      and execute it step-by-step.<br>
      This procedure will guide you through all the daily actions (e.g. manage
      your mails) as well as send your first emails and invitations to potential customers.
    </td>
  </tr>
  <tr>
    <td>10:30</td>
    <td>
      Reach out to 7 new prospects
    </td>
  </tr>
  <tr>
    <td>13:00</td>
    <td>Lunch break</td>
  </tr>
  <tr>
    <td>13:30</td>
    <td>
      Reach out to 8 new prospects
    </td>
  </tr>
  <tr>
    <td>18:00</td>
    <td>
      Review your performance with your mentor
    </td>
  </tr>
</table>

<h2 id=sales-day3>Day 3</h2>
<h3 id=sales-day3-goal text="Goal">Goal: Generate 15 new leads</h3>
<p>
  Today, you will continue your prospects search, increasing your portfolio and
  do your best to schedule a call with one of them.
</p>

<h3 id=sales-day3-schedule>Schedule</h3>
<table>
  <tr>
    <td>09:00</td>
    <td>
      Open your
      <a href=http://mdoc.holaspark.com/cdn/day3/new?create=1>Third day procedure</a>
      and execute it step-by-step.<br>
    </td>
  </tr>
  <tr>
    <td>10:00-18:00</td>
    <td>
      Continue reaching out to new prospects and schedule a call with one of
      them
    </td>
  </tr>
</table>

<h2 id=sales-day4>Day 4</h2>
<h3 id=sales-day4-goal text="Goal">Goal - Schedule your first call with a
  customer</h3>
<h3 id=sales-day4-schedule>Schedule</h3>
<table>
  <tr>
    <td>09:00</td>
    <td>
      <a href=/dna#immediate-inbox>Manage your Inbox</a>
    </td>
  </tr>
  <tr>
    <td>10:00-18:00</td>
    <td>
      Continue reaching out to new prospects and schedule your first sales call
    </td>
  </tr>
</table>

<h2 id=sales-day5>Day 5 - Business Dev. Manager</h2>
<h3 id=sales-day5-goal text="Goal">Goal: Do your first sales call</h3>
<p>
  Today you are expected to get your first sales call appointment with one of
  the customers you have approached in the last 3 days.<br>
  Once getting it, you will start preparing yourself for this event.
</p>
<h3 id=sales-day5-schedule>Schedule</h3>
<table>
  <tr>
    <td>09:00</td>
    <td>
      <a href=/dna#immediate-inbox>Manage your Inbox</a>
    </td>
  </tr>
  <tr>
    <td>10:00</td>
    <td>
      Prepare yourself to the call using the
      <a href=http://mdoc.holaspark.com/cdn/first_call/new?create=1>First call procedure</a>
    </td>
  </tr>
  <tr>
    <td>15:00</td>
    <td>
      Do your first sales call with the customer
    </td>
  </tr>
  <tr>
    <td>15:30-18:00</td>
    <td>
      Continue reaching out to new prospects and schedule more calls
    </td>
  </tr>
</table>

<h2 id=sales-week2 text="Week 2">Week 2</h2>
<h3 id=sales-week2-goal text="Goal">Goal: Swimming (almost) on your own</h3>
<p>
  Time flies when you're having fun!<br>
  You have finished your first week diving into our sales processes, systems
  and methods of finding new leads and also schedule/having a call with one of
  them.<br>
  While last week you were still learning, this week it's time to shift into
  gear!<br>
  <b>Sales Dev. Representative</b> is expected to schedule
  <b>2 sales calls</b> (move lead to stage 'C') and add
  <b>45 new leads</b>.<br>
  <b>Business Dev. Manager</b> is expected to do at least
  <b>1 sales call</b> and add 25 new leads.
</p>

<h2 id=sales-week3 text="Week 3">Week 3</h2>
<h3 id=sales-week3-goal text="Goal">Goal: Swimming on your own</h3>
<p>
  You are almost there! By now you already familiar with Spark's day-to-day
  way of life, working with different departments (e.g. deploy) as well as
  strive for being efficient (onboard new customers).<br>
  <b>Business Dev. Manager</b> is expected to <b>bring the first deal!!</b> as
  well as continue building their portfolio and add <b>35 new leads</b>.<br>
  <b>Sales Dev. Representative</b> is expected to schedule <b>3 sales calls</b>
  as well as continue building their portfolio and add <b>45 new leads</b>.
</p>
</div>`;
