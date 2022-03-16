import {useEffect} from 'react';
import Layout from '../components/layout.js';
import {H1, H2, H3} from '../components/anchor.js';
import {Primary_button, Footer, Video} from '../components/common.js';
const NL = '\n';

// XXX: mv to css
const page_style=<style>{`
.dna-page h1 {padding-top: 1.2rem; padding-bottom: 0.5rem;}
.dna-page h2 {padding-top: 1.2rem; padding-bottom: 0.2rem;}
.dna-page h3 {padding-top: 1.2rem; padding-bottom: 0.1rem;}
.dna-page p {padding-top: 0.1rem; padding-bottom: 0.1rem}
.dna-page ul {padding-top: 0.1rem; padding-bottom: 0.1rem; margin: 0;}
.dna-page li {list-style-position: outside; margin-left: 1rem;}
.dna-page .bad, .dna-page [cat=bad] {background-color: rgba(255,0,0,0.1);
  border-color: rgba(255,0,0,0.7);}
.dna-page .ok, .dna-page[cat=ok] {background-color: rgba(0,255,0,0.1);
  border-color: rgba(48,48,48,0.7);}
.dna-page .good, .dna-page [cat=good] {background-color: rgba(0,255,0,0.1);
  border-color: rgba(0,255,0,0.7);}
.dna-page .better, .dna-page [cat=better]{
  background-color: rgba(0,255,0,0.25); border-color: rgba(0,255,0,0.7);}
.dna-page .ok,[cat=ok], .dna-page .good, .dna-page [cat=good],
  .dna-page .better, .dna-page [cat=better], .dna-page .bad,
  .dna-page [cat=bad] {
  padding: 4px; margin-bottom: 10px; border-width: 0 3px;
  border-style: solid; border-radius: 4px; position: relative;}
.dna-page th, .dna-page td {border: 1px solid black;
  border-collapse: collapse;}
.dna-page table {background-color: transparent;}
.dna-page table {border-spacing: 0; border-collapse: collapse;}
.dna-page pre {overflow: auto;}
`}</style>;

export default function DNA(){
  let current;
  useEffect(()=>{
    let hash = location.hash, timer, timer2;
    if (hash && current!=hash){
      current = hash;
      clearTimeout(timer);
      clearTimeout(timer2);
      let id = hash.replace('#', '');
      let el = document.getElementById(id);
      if (el){
        el.scrollIntoView({behavior: 'smooth'});
        timer = setTimeout(()=>el.scrollIntoView(), 100);
        timer2 = setTimeout(()=>el.scrollIntoView(), 250);
        current = hash;
      }
    }
  });
  return (
    <Layout title='LIF DNA' desc='LIF DNA'>
{page_style}
<div className="dna-page max-w-6xl mx-auto px-6 pb-10">

<h1>The DNA</h1>
<div>XXX - Add missing header</div>
<div>XXX - Fix From: and new line in sections</div>
<H1 id="dna" text="DNA">DNA-like culture</H1>
<p>
  <b>Continuously learning and evolving</b><br/>
  Creating great products that will impact every person in the world
  is an immense task.
  Succeeding requires a culture of professionalism, consistency, learning
  and rapid change.
  We imitate this culture from nature -- we define our DNA,
  and we change it as we learn new and better things. Our DNA is our shared
  memory for how to do things right.
</p>

<H2 id="dna-consistent" text="Consistent">Be consistent</H2>
<p>
  The DNA is our shared memory of how to do things right, so work according to
  that DNA. If you find a way to improve on our DNA, share that with
  {' '}<a href="mailto:dna@hola-org.com">dna@hola-org.com</a> and influence change in our DNA.
</p>
<ul>
  <li>with yourself</li>
  <li>with your peers</li>
  <li>with existing work methods</li>
  <li>with existing codebase</li>
  <li>with the industry, if no Hola internal method exists</li>
</ul>

<H3 id="dna-consistent-code" text="Code style">Code style</H3>
<p>
  We are highly pedantic in keeping our codebase perfectly
  consistent with our <a href="/dna/dict#coding">coding conventions</a>.
  When none exist, or the specific case is not covered, we use the existing
  current codebase style as a guide.
</p>

<H3 id="dna-consistent-email" text="Email style">Email style</H3>
<p>
  Email consistency, just like source code consistency, helps handle large
  amounts of email efficiently in our team.<br/>
  That's why we keep our email styling consistent with our
  {' '}<a href="/dna/comm#email"> email style guide</a>, and look out for unwritten
  conventions in the way <a href="/dna/dict#veteran"> Veterans</a> communicate in
  the company, and follow their style.
</p>

<H3 id="dna-consistent-create" text="Create procedures">Create procedures</H3>
<p>
  When we do something new, or something un-documented, we improve our
  consistency by creating a procedure.
  This documents the task we are doing, to ensure better consistency next time
  this task is carried out.
</p>

<H2 id="dna-learn" text="Learn">Learn</H2>
<p>
  When we do a task which is not standardized, we find out how it was done
  previously by others. We also provide you with
  {' '}<a href="/dna/basics"> general knowledge</a> you need to have while doing
  specific roles in Hola. If more information is needed,
  {' '}<a href="/dna#individual-mindful-google"> ask Google</a>.
</p>

<H3 id="dna-learn-defacto" text="De-facto standards">Learn from unwritten de
  facto standards</H3>
<p>
  If you are doing a task which is not standardized, look how it was done
  before.<br/>
  Not all aspects of tasks you do have a written standard or procedure. So how
  do you learn how to do them? By seeing how it was done previously
  by others, and learning from them.
</p>

<H3 id="dna-learn-imitate" text="Imitate">Learn by imitation</H3>
<p>
  Imitation is a very powerful learning tool. Look at the highly productive
  {' '}<a href="/dna/dict#veteran"> veterans</a> in the company, and try to imitate
  their working habits, large and small.<br/>
  If you choose to imitate the veterans who better fit your character and style
  of work, you will quickly improve your efficiency and productivity.
</p>

<H2 id="dna-teach" text="Teach">Teach</H2>
<p>
  Be an enthusiastic agent of the DNA - spread the word, refer to it in your
  communication, ensure that your daily activities are in line with our DNA, teach others about the
  DNA, and help new employees get to know the DNA.
</p>

<H2 id="dna-obsolete" text="Obsolete">Kill obsolete features</H2>
<p>
  Old features keep us behind. They prevent us from moving fast into the
  future.<br/>
  If you see procedures that are no longer needed, features in the
  product that are no longer in use, or no longer bring us value, obsolete
  documents etc. - remove them! Removing obsolete procedures/code/features
  greatly simplifies our product and daily work, makes it easier to change
  things going forward, makes us leaner and more efficient!<br/>
  At Hola, we try to get rid of outdated and unused stuff, be it big modules
  and services that no longer add value or small pieces of code.<br/>
  We go the extra mile to remove code/modules/features that are obsolete and
  no longer in use, as well as 'future use' code that was never used.<br/>
  If 'future use' code is still unused, with no signs of anyone working on it
  for the past two weeks, why is it still there? We either
  {' '}<a href="#immediate"> release it</a> or remove it from our source code. We
  don't accumulate things that may be useful someday; either use them
  now or forget about them.
</p>

<H2 id="dna-users" text="Users first">Our users come first</H2>
<p>
  Our users and customers are the reason for our existence. We try to
  constantly understand their needs, find out their pain points and solve them.
  We constantly evolve, improving our services, features, and products - we do
  everything we can to bring them significant value as they are our most
  valuable asset.<br/>
  {' '}<a href="http://smartbusinesstrends.com/why-it-is-essential-to-put-customers-first-and-how-organizations-do-it/"> Why it is essential to put customers first</a>
</p>

<H2 id="dna-mindfulness" text="Mindfulness">Mindfulness: think before you act</H2>
<p>
  We strive to be unswervingly self-aware, which facilitates being intentional
  about how we act, what we do, and how to constantly improve.<br/>
  Our behavior and actions should have a cause. A reason. Well-thought from
  beginning on the full flow and the end result.<br/>
  Having a well thought-of reason in advance helps us make our actions more
  consistent, and if the action is later found out to be incorrect, allows us
  to find the root-cause in the mistaken reasoning that was used and improve
  the reasoning for in future actions.<br/>
  Mindless actions do not allow improvement in the future, because they were
  not derived from a systematic well-thought of reasoning:
  if they had a positive outcome - we cannot repeat them, if they had
  a negative outcome - we cannot avoid them repeating.
</p>

<H3 id="dna-mindfulness-hacks" text="Hacks">Even hacks should be well thought
  of</H3>
<p>
  Even hacks should be well thought of in advance. Especially hacks!<br/>
  Hacks are a very powerful tool of quickly solving real problems, and
  implementing real features with great value, in a short time. But in
  return, they require you to think it out well through in advance, to make
  sure the hack is worthwhile, and is not going to cause more damage
  than its value.
</p>

<H2 id="dna-team" text="Team">We are a professional team</H2>
<p>
  We're a team - like a pro sports team, not a kid's recreational team.
  Hola hires and develops smartly, so we have stars in every position.
</p>

<H3 id="dna-team-members" text="Members">Who we recruit to join the team</H3>
<p>
  We look for people who share similar values to ours: They are pros,
  ambitious, they love to <a href="#action-gtd"> get stuff done</a>,
  love to <a href="#dna-learn"> learn</a> and love
  {' '}<a href="#individual-p2p"> working with similar such people</a>.
  They are also smart, and
  {' '}<a href="#incremental-pragmatic"> masters of their domain</a>.
  Having these types of 'stars' in every position makes it a pleasure
  to work together.
  We typically need to interview 250 people to find someone like you.
  Congrats!<br/>
  However, any interview process is limited and cannot be fully predictive.
  We hire a candidate that shows traits of being a star.
  If we are not 100% sure that they are a perfect DNA fit,
  we let that person know of our concerns, and we go ahead and hire for
  the <a href="/dna/bootcamp"> bootcamp</a>
  to give that person a chance to learn the company DNA and
  become a productive member of the team.
  The first weeks of our work together serve as a mutual get to know period.<br/>
  At your first 3 weeks at Hola you are a temp employee for a period of
  mutual 'get to know', with the intention of making the transition into a full
  hire during that time.<br/>
  We rarely let people go after the initial temp period, because by then
  the person has shown great capabilities and ability to let them flourish
  at Hola through the DNA. We don't believe in 'cutting the
  bottom 10%' or similar concepts.<br/>
  Our best new employees were those who made an effort to learn and implement
  the "Hola way", on their own and with the assistance of their mentors.<br/>
  They later also had a great influence in improving and evolving our DNA.
</p>

<H3 id="dna-team-bootcamp" text="Bootcamp">Joining the team - Bootcamp</H3>
<p>
  Congratulations on being selected to join the team!
  Professionals like you are rare, and are what excites the rest of the
  team here. We are looking forward to you becoming an integral part of
  our professional team.
  The <b><a href="/dna/bootcamp"> 3 week Hola bootcamp</a></b>
  is your first step from candidate to
  {' '}<a href="/dna/dict#noob"> Hola Noob</a>,
  where your <a href="/dna/dict#mentor"> mentor</a> will guide you to success.
  You will learn the workflows, start with simple tasks and move up to mini
  projects.
  Initially you will receive tasks that don't require background knowledge of
  our products, allowing you to focus on the workflows, make your first commit
  in the first day, and start contributing from day one!
  Your first day at work will include developing a small feature and
  releasing it to millions of Hola users!
  The tasks will get deeper into our technology as you advance.<br/>
  We will provide you with a list of things to review prior to bootcamp,
  including: information about the company,
  {' '}<a href="/dna/dict#products"> products</a>,
  {' '}<a href="/dna"> DNA</a>, <a href="/dna/dict#coding"> coding conventions</a>,
  basic tools and methods of work, and access to your mentor for any
  questions you may have in advance.
</p>

<H3 id="dna-team-veteran" text="Veteran">Becoming a team veteran</H3>
<p>
  Congratulations on successfully completing the bootcamp! You are now on your
  journey from <a href="/dna/dict#noob"> Hola Noob</a> to
  {' '}<a href="/dna/dict#veteran"> Hola Veteran</a>. The goal of this process is for
  you to evolve from someone who <b>can</b> be part of the pro team, to
  someone who <b>is</b> an integral part of the team. Here's the process
  you'll be going through:
</p>
<ul className="rank_list">
  <li>
    <div className="rank_sm rank_noob pull-left"></div>
    <b><a href="/dna/dict#noob"> Hola Noob</a> (first 3 months)</b>:
    During this period, you will be assigned larger tasks, that will allow you
    to make a significant contribution while actively learning about the
    company's DNA, software architectures, and work methods. You will still
    have <a href="/dna/dict#review-sync"> code reviews</a>
    for most of your commits, while in some cases you will be approved to
    commit
    {' '}<a href="/dna/dict#review-async"> without a pre-commit review session</a> -
    your code will only be reviewed after the commit, and sometimes even only
    after deployment.
  </li>
  <li>
    <div className="rank_sm rank_junior pull-left"></div>
    <b><a href="/dna/dict#junior"> Hola Junior</a> (first 1 to 2 years)</b>:
    Now you are becoming a major contributor to Hola's
    products, developing specific domain knowledge in fields that are of
    interest to you within Hola. You may commit directly to the product tree
    without prior review, and you will see your contributions going live to
    millions of users within hours of being developed. At this phase you are
    still internalizing Hola's DNA and best practices, and will need to be open
    to comments about your commits from other Hola Veterans.
  </li>
  <li>
    <div className="rank_sm rank_veteran pull-left"></div>
    <b><a href="/dna/dict#veteran"> Hola Veteran</a> (after 1 to 2 years)</b>:
    Congratulations! You are now a Hola Veteran - an integral part of
    the Hola Family. You are a major contributor, a knowledge center, and a
    person who can help Noobs and Juniors get up to speed on the Hola DNA and
    best practices through <a href="/dna/dict#mentor"> mentoring</a>,
    and <a href="/dna/dict#review"> code reviews</a>.
    You've made a long way!
  </li>
</ul>
<p>
  Hola Veterans are the core of the team. You will make immense contributions
  to our products, our business and our values.<br/>
  We will make your work environment the best it can be, we will care for your
  work/life balance, your compensation, your happiness and your career,
  allowing you to move between tech groups to work on things you care about. We
  will do everything we can to make Hola the best place for you.<br/>
  If you choose in the future to check out other opportunities outside of Hola,
  we will always welcome you back as we've done in the past.<br/>
  Hola developer Veterans are typically not let go from Hola.
</p>

<H1 id="transparent" text="Transparent">Transparent</H1>
<p>
  <b>We communicate
    {' '}<a href="#transparent-open">openly</a>,
    {' '}<a href="#transparent-clarity">clearly</a>,
    {' '}<a href="#truthful">truthfully</a>
    {' '}and with
    {' '}<a href="#transparent-precise">precision</a>
  </b>
  <br/>
  Open knowledge facilitates free information exchange, allowing us to learn
  from each other and make smarter decisions.
  We share all information within our team, as well
  as in our ecosystem (customers, partners, market)
  - unless there is a compelling reason not to.
</p>

<H2 id="transparent-open" text="Open">All open, no secrets</H2>
<p>
  Except for compensation packages, all work-related information
  is open to everyone at Hola;
  from source codes and
  {' '}<a href="/dna/dict#online">working hours</a>,
  to
  {' '}<a href="/dna/dict#daily">project status and reports</a>,
  and
  {' '}<a href="/dna/dict#version_plan">future plans</a>.
</p>

<H3 id="transparent-open-bcc" text="Avoid BCC">Avoid BCC in emails</H3>
<p>
  Try to avoid adding BCC (blind copy) recipients - it is usually a sign of
  non-transparency.
</p>

<H3 id="transparency-open-blackbox" text="No black-boxes">No black-boxes:
  Share all info!</H3>
<p>
  We each provide clear information on areas of responsibility and expertise,
  our current tasks and activities. We do so, to allow anyone to get the full
  'raw data' and to be able to question our decisions and actions in our area.
</p>
<div cat="bad">
  Q: What did you do today?<br/>
  A: Helped customer integration.
</div>
<div cat="good">
  Q: What did you do today?<br/>
  A: Helped customer 'greatprice.com' integrate python code snippet version
  2.7.5. It took around 3 hours.
</div>
<div cat="bad">
  Q: Why did the site go down?<br/>
  A: Sorry, my mistake. Won't do it again.
</div>
<div cat="good">
  Q: Why did the site go down?<br/>
  A: I deployed code that caused DB to be 30% slower, making the site to go
  down.<br/>
  I reverted it already, and now it is all OK.<br/>
  Site downtime during this was 2 minutes.<br/>
  To prevent this happening in the future, I added metrics and alerts on DB
  response times. I also added a unit-test to validate DB performance, and in
  the future I will also test in small scale DB schema changes that may cause
  performance problems.
</div>
<div cat="bad">
  Q: Do you have the list of people which were migrated already to Windows
  10?<br/>
  A: Sure. I have the list on my laptop, I can show you.
</div>
<div cat="good">
  Q: Do you have the list of people which were migrated already to Windows
  10?<br/>
  A: Sure. The file is located in our shared IT folder. I'll send you the
  direct link. Around 65% were already upgraded.
</div>
<div cat="bad">
  Q: Let's add an 'invite a friend' feature.<br/>
  A: It complex to implement, and will bring little value.
</div>
<div cat="good">
  Q: Let's add an 'invite a friend' feature.<br/>
  A: It's complex to implement: I estimate it will take me around 2 weeks,
  because the tracking DB module will need adjustments.
  On the other hand, I think it will bring little value:
  I estimate its response rate will be 2% or less - which is not
  significant.
</div>

<H2 id="transparent-privacy">Privacy</H2>
<p>
  Information is open to everyone at Hola. This transparency is provided to
  allow you to get your work done without requiring permissions, which slow you
  down. However, accessing information which is not directly required for your
  work is forbidden. Also, to protect our user's privacy and our trade secrets,
  it is absolutely forbidden to share internal Hola information with anyone
  outside of Hola. Any such sharing of internal information will lead to
  immediate termination and additional consequences.
</p>

<H2 id="transparent-clarity" text="Communication">Communication should focus on
  clarity, not politeness</H2>
<p>
  It's important for us to communicate clearly, delivering direct feedback.
  Critiques allow for self-improvement.
  Political correctness prohibits conveying messages successfully.
</p>

<H3 id="transparent-clarity-feedback">Feedback</H3>
<p>
  We provide direct feedback. People who are not accustomed to it, may consider
  it blunt and possibly even hurtful. Remember that this is not a reflection
  on your abilities but on the specific result, and that the goal of this
  feedback is to allow you to learn. When Steve Jobs was asked about his
  sometimes "harsh" feedback, this was his response:
</p>
<div className="good">
  When you've got really good people, they know they're really good, and you
  don't have to baby people's egos so much. And what really matters is the
  work. And everybody knows that: That's all that matters is the work.... And
  the most important thing, I think, you can do for somebody who's really good
  and who's really being counted on is to point out to them when their work
  isn't good enough.
</div>
<p>
  So we provide feedback about the work itself, not about the person doing it.
</p>
<div cat="bad">
  You do lousy work!
</div>
<div cat="good">
  This report is useless because you did not make the connection between the
  clicks on our PPC campaign to the actual product sales we made as a result.
</div>
<p>
  We do not use cynicism or sarcasm in our communication. We do talk about the
  problem directly, with clear facts.
</p>
<div cat="bad">
  Is this because you didn't bother to do any QA?
</div>
<div cat="good">
  Finding out these problems in production shows that proper QA was not done.
  You should check all relevant sites on production after deploy.
</div>

<H2 id="transparent-precise" text="Precise">Be precise, clear, and specific</H2>
<p>
  Be exact in your communication; avoid vagueness and jargon. If you are too
  generic, you leave too much space to ambiguity; specific communication
  ensures messages are conveyed correctly and expectations are met. High level
  terminology or jargon, moreover, are often used as an excuse not to make an
  all-out effort for handling a difficult issue.
</p>

<H3 id="transparent-precise-specific" text="Specific">Specific</H3>
<p>
  We communicate precisely, with specific details:
</p>
<p>Easier for the writer</p>
<div cat="bad">
  Hey guys - take a look at fast-stream.com
</div>
<p>Easier for the readers</p>
<div cat="good">
  Hey guys - take a look at fast-stream.com.<br/>
  It's a review of the video streaming market, showing that
  P2P tech is taking off in APAC. Consider if and when this gets added to
  our offering.
</div>
<ul>
  <li>
    Save reader's time
    (<a href="#individual-mindful">Mindful of coworker's time</a>)
    - provide a summary:
    <span className="good">It's a review of the video streaming market</span>
  </li>
  <li>
    Point readers to what's interesting in the article:
    <span className="good">showing that P2P tech is taking off in APAC</span>
  </li>
  <li>
    Specify actions (<a href="#action">Action-oriented</a>)
    you want them to take:
    <span className="good">Consider if and when this gets added to
      our offering</span>
  </li>
</ul>
<p>
  Another vice to look out for is high-level terminology.
  Sometimes high-level terms are only used as an excuse for not making an
  all-out effort to handle a difficult issue:
</p>
<div cat="bad">
  We must make our users happier
</div>
<p>while we prefer a more specific wording; in this case:</p>
<div cat="good">
  I saw a 3.5% decline in daily usage. I checked it out, and it correlates
  with a 23% increase in response time. I will work on fixing this issue
  tomorrow, and update once fixed.
</div>
<p>
  At Hola we make a special effort to always be specific when we communicate.
  Here's an example of an email that we may want to send, and how we can
  improve it:
</p>
<div cat="bad">
  I'll be happy to hear more about the things you have written.
</div>
<p>
  At Hola, the email we would send would be:
</p>
<div cat="good">
  Please share with me the unique visitor data for October/15 which led
  you to this conclusion. I'd like to publish that data in our next blog.
</div>
<p>
  This email is more precise and specific, resulting in better communication.
</p>

<H3 id="transparent-precise-accurate" text="Accurate">Accurate</H3>
<p>
  Explain your idea accurately and get to the point;
  your messages should be supported by good reasoning.
</p>

<H3 id="transparent-precise-data" text="Data & facts">Provide data, facts and
  specific use-cases</H3>
<p>
  {' '}<a href="http://www.wallstreetandtech.com/compliance/in-god-we-trust-all-others-bring-data/a/d-id/1268616">
    In God We Trust. All others bring Data</a>
  <br/>
  The decisions we make are based on real world data.
  When communicating, the use of data helps our peers understand the exact
  issues you are trying to solve,
  and why we are trying to solve it.
  We focus on real issues, not on theoretical problems or rare use-cases.
  This principle is called
  {' '}<a href="https://en.wikipedia.org/wiki/Genchi_Genbutsu">Genchi
    Genbutsu ("go and see")</a> in Toyota Production System.<br/>
  We try to make <a href="#dna-mindfulness">mindful</a> rational decisions,
  based on real world data, facts and use cases.
</p>
<ul>
  <li>
    <span className="bad">"Better design"</span>:
    With such a statement you need concrete
    facts on why is the design better, what exactly does it solve, is
    what it solves really important enough to be solved, how much value
    will it bring, how much work and effort is required to implement
    this design change...
  </li>
  <li>
    <span className="bad">"Very dangerous code"</span>:
    Will it really cause a bug?
    How often? And if it does cause a bug - will the bug not be detected and
    fixed very quickly? How severe would the theoretical damage of such a bug
    be?
  </li>
  <li>
    <span className="bad">"But what if the user clicked here, and then here?"</span>:
    Give a use case on how and why this could happen.
    Is it really common for the users to do this?
    And if they did, how bad would the negative impact be?
  </li>
</ul>
<p>
  Providing concrete data will give your colleagues a firm basis for either
  agreeing or disagreeing with your idea. This scientific scrutiny approach
  improves the quality and assurance in your ideas and suggestions, once they
  passed the healthy questioning.
</p>

<H3 id="transparent-precise-gossip" text="Deep thinking">
  Think - don't brainstorm</H3>
<p>
  Think deeply about the subject, form a viewpoint,
  and present it as an actionable plan.
  This process leads to concrete action.
  Brainstorming is the opposite of constructive thinking.
</p>

<H3 id="transparent-precise-disagree" text="Disagree - yet execute">
  Dispute if you don't agree; yet focus on getting things done</H3>
<p>
  Stand up for your beliefs: dispute tasks that you
  believe are wrong or can be improved, even if its from the CEO!<br/>
  But, this should not come at the expense of
  {' '}<a href="#action-gtd">getting things done (GTD)</a>.<br/>
  How to dispute while <a href="#action-gtd">staying productive</a>:
</p>
<ul>
  <li>Give your negative feedback immediately</li>
  <li>
    Before you express your objection,
    {' '}<a href="#transparent-precise-gossip">think deeply</a>
    - to make sure your objection has sound reasoning.
  </li>
  <li>
    Be <a href="#transparent-precise-specific">specific</a> and
    {' '}<a href="#transparent-precise-accurate">accurate</a> in your reasoning.
  </li>
  <li>
    Try to in the meantime implement what you partially agree upon, or
    something minimal that will partially please the requestor, and complete
    it once the dispute is cleared.
  </li>
  <li>
    If the requestor did not agree with your reasoning - then do
    as requested.
  </li>
</ul>

<H1 id="immediate" text="Immediate">Immediate</H1>
<p>
  <b>We do things immediately, so that we can evolve and improve faster</b><br/>
  A startup's engine for creating better products is a constant
  {' '}<a href="http://theleanstartup.com/principles">Learn-Build-Measure</a> loop.
  It's unlikely to succeed on the first try; so we iterate on the product
  until it's fit.
  The more responsive we are, the faster our products will
  {' '}<a href="#incremental">evolve and improve</a>.
</p>

<H2 id="immediate-smalltasks" text="Small tasks">Do small tasks immediately</H2>
<p>
  We do quick tasks immediately, even when they're not particularly important,
  to avoid the overhead of prioritizing and of reopening their context.
</p>

<H2 id="immediate-delegation" text="Delegating small tasks">Do small tasks
  yourself - don't delegate</H2>
<p>
  Quick tasks are not worth delegating.
  The communication and management involved in the delegation process take
  more effort than the task itself.
  If you have received a small task that does not require
  any technical skills (for example, typo corrections),
  help the sender learn how to fix it himself.
</p>

<H2 id="immediate-decide" text="Decide fast">Decide fast</H2>
<p>
  We discard promptly new ideas that appear to be flawed, and adopt brilliant
  ideas as soon as possible.
  If a new idea presents multiple pros and cons, and we don't find
  it brilliant after a short discussion, we put it on hold or discard it.
</p>

<H2 id="immediate-inbox" text="Inbox">Manage your inbox</H2>
<p>
  Email responsiveness and never losing an email (forgetting to respond)
  is critical for efficient and reliable email communication with our peers.
  So we strictly follow the
  {' '}<a href="/dna/comm#email">email handling guidelines</a>, that include rules
  such as:
</p>
<ul>
  <li>Respond quickly to email - handle email in LIFO order</li>
  <li>Clean out your inbox constantly - never end your day with more
    than 10 emails in your inbox</li>
  <li>
    Move emails out of inbox (to Archive/Trash) after handling -
    "Read" status should not be used as an indicator for
    handled emails.
  </li>
</ul>

<H2 id="immediate-priorities" text="Task priority">Prioritizing incoming
  tasks</H2>
<p>
  What's a small task and what's not?<br/>
  When to act immediately and when to postpone?<br/>
  The timetable below can help you determine your actions according to the task
  you are handling:
</p>
<table>
  <tbody>
    <tr>
      <td>Time to complete</td>
      <td>What to do?</td>
    </tr>
    <tr>
      <td>Up to 10 min.</td>
      <td>
        Do it immediately, to avoid the overhead of postponing and reopening the
        task later and
        {' '}<a href="/dna/comm#email-reply-done">respond to the requester</a>.
      </td>
    </tr>
    <tr>
      <td>10-60 min.</td>
      <td>
        If possible, try to give immediate partial solution/responses.<br/>
        Log it in your <a href="/dna/dict#version_plan">version plan</a>
        and <a href="/dna/comm#email-reply-add_to_vp">respond to the requester</a>
        that it will be done within the next 1-3 days.<br/>
        Notify the requester as soon as you complete the task, or if it gets
        delayed again.
      </td>
    </tr>
    <tr>
      <td>More than 60 min.</td>
      <td>
        If possible, try to give immediate partial solution/responses.<br/>
        Log it in your <a href="/dna/dict#version_plan">version plan</a>
        and <a href="/dna/comm#email-reply-add_to_vp">update the requester</a>
        on when you plan to implement it.<br/>
        Mark it in your calendar, and update again the requester if you decide to
        delay once more.
      </td>
    </tr>
  </tbody>
</table>
<p>
  {' '}<a href="#truthful-change">It's OK to change a schedule</a> if other tasks come
  up or take longer than expected, but we update the requester with the new
  schedule.
</p>

<H2 id="immediate-answer" text="Immediate Answers">Immediate Answers</H2>
<p>
  Discussions with questions left unanswered
  {' '}<a href="#action">lead to other discussions</a>. To end discussions with
  results, all questions should be answered, even if the answer is an
  estimation. Estimations allow us to proceed with the discussion and take
  action. The actions can be adjusted later with the accurate answers.
</p>
<div cat="bad">
  Q: How many clients didn't manage to download our extension?<br/>
  A: Let me check and get back to you.
</div>
<div cat="good">
  Q: How many clients didn't manage to download our extension?<br/>
  A: About 1K.
</div>

<H2 id="provide-eta" text="Provide ETA">Provide ETA</H2>
<p>
  When asked to do a task, provide the requester with an ETA. This helps
  the requester plan his other activities.<br/>
  If you see you will not be able to meet the original ETA,
  {' '}<a href="#truthful-change">it's OK to change it</a>,  but update the
  requester with a new ETA as soon as you know you will miss the original one.
</p>
<div cat="bad">
  Q: Write a case study for our new customer, XYZ media inc.<br/>
  A: Will do.
</div>
<div cat="good">
  Q: Write a case study for our new customer, XYZ media inc.<br/>
  A: Will do, ETA for 1st draft end of day tommorrow.
</div>


<H1 id="incremental" text="Incremental">Incremental and evolutionary</H1>
<p>
  <b>We split large tasks into small tasks that give immediate value, so that
  we can make quick incremental improvements</b><br/>
  We've learned the hard way that you do not know how a product works for
  customers, until they've been using it. The biggest waste of our time has
  been when we put major efforts on a tangent, only to find the whole
  direction was wrong for a reason we could have detected earlier. We learned
  that you should release very early, and make incremental improvements.
</p>

<H2 id="incremental-mvp" text="MVP">Minimal Viable Product (MVP)</H2>
<p>
  When you work on a product, feature, document, graphic design
  or any form of delivery
  (even a bug fix!), one of the most
  creative and important parts of the design are to design the smallest
  conceivable delivery, that brings some initial value. Design it, release
  it quickly (hours?) and then iterate on improving it.
</p>

<H2 id="incremental-experiment" text="Rapid experimentation">Rapid
  experimentation</H2>
<p>
  Fast evolution requires rapid experimentation.<br/>
  We love experimenting with new ideas/features/technologies/solutions.
  We measure the experiment worthiness by the cost (building it,
  deploying it, cost of failure) and by the expected outcome.
  If the cost is too high, or the best expected outcome too low,
  the experiment is probably not worth doing.<br/>
  We love cheap experiments that can lead to high outcomes.
</p>

<H2 id="incremental-feedback" text="Fast feedback loop">Fast feedback loop</H2>
<p>
  Fast feedback loop reduces the time it takes to build a feature as originally
  intended, by getting the feedback on a wrong direction early on, before
  completing the whole feature.
</p>
<ul>
  <li>
    {' '}<a href="#incremental-task-split">Split up</a>
    the feature into as many committable subtasks as you can, so that each
    subtask gets its own incremental feedback early.
  </li>
  <li>
    Done some initial UI?
    Even if the feature is not working,
    {' '}<a href="/dna/comm#email-reply-feedback">send a screenshot or animated GIF</a>
    to demonstrate how it will look, to get early UI feedback.
  </li>
  <li>
    Basically working?
    Even if the feature is only partially working, call in the requestor
    to play around with it (or remotely via screenshare).
  </li>
  <li>
    Completed (deployed)?
    Send the requestor a link to the feature,
    and <a href="/dna/comm#email-reply-feedback">a diff URL</a> to show what
    has been done.
  </li>
</ul>
<p>
  All examples cited above minimize iteration time and bring value almost
  immediately.
</p>

<H2 id="incremental-done" text="DONE, not PERFECT">DONE is better than
  PERFECT</H2>
<p>
  "A good plan violently executed now is better than a perfect plan
  executed next week"
  {' '}<a href="http://www.brainyquote.com/quotes/authors/g/george_s_patton.html">
    George S. Patton</a>
  <br/>
  Getting things DONE has a very high value. It solves the problem, and allows
  learning which additional improvement iterations are required.<br/>
  PERFECT is the biggest single enemy of DONE: trying to do a task perfectly
  will in most cases prevent us from completing it.
  {' '}<a href="http://blogstatic.freemake.com/wp-content/uploads/2013/04/facebook-sign-at-office.png">Sign
    at Facebook</a><br/>
  <img src="/img/done_is_better.png"/>
</p>

<H2 id="incremental-pragmatic" text="Pragmatic Craftsmanship">Pragmatic
  Craftsmanship</H2>
<p>
  We take pride in our work, and invest time to produce a quality outcome.
  However, we also take pride in continual progress and moving fast,
  so we make sure not to take craftsmanship too far before shipping.
</p>

<H2 id="incremental-fast" text="Fast">Move fast and break things</H2>
<p>
  Moving fast ultimately will be why we succeed.<br/>
  Yes - we break things while moving fast, but we fix it even faster!
  {' '}<a href="http://blogstatic.freemake.com/wp-content/uploads/2013/04/facebook-sign-at-office.png">Sign
    at Facebook</a><br/>
  <img src="/img/move_fast.jpg"/>
</p>

<H2 id="incremental-little_better">Little better every day</H2>
<p>
  Do only a little better every day, and you are 37x better by the end of the
  year.<br/>
  <img src="/img/little_better.jpg"/>
</p>
<H2 id="incremental-task" text="Tasks">Incremental task handling</H2>
<p>
  When starting a new task, we break it down to smaller tasks that can be
  released on their own, and can bring value on their own.
  A good size increment is a few hours of work.<br/>
  An example of that principle is this DNA document itself!
  When we understood that we want to formally define our DNA,
  a quick doc was written up in a couple of hours, with many naively stated
  points, and 'please contribute more here' types of ideas.
  That document was uploaded to our website under
  {' '}<a href="/dna">http://hola-org.com/dna</a> for everyone to see,
  immediately and transparently.
  From that point on, many people read and improved, erased, and added to make
  this document better with every iteration.
  Even today, it is still work in progress...
</p>

<H3 id="incremental-task-results" text="Immediate results">Give immediate partial
  results/response/value</H3>
<p>
  Often, a question or call to action may be stuck in your inbox for a
  long time because you are not sure of the complete answer, and do not have
  the time to work on the whole 'project'. It's better to give immediate
  partial results/response/value, and email the full results later. This
  enables the other party to start with something, and possibly shed light
  on the rest (for example, the rest might not be needed for the other person
  to make progress).
</p>

<H3 id="incremental-task-split" text="Split">Split up large tasks</H3>
<p>
  Split up large tasks into smaller tasks that give immediate value even before
  the large task is completed. Example: When developing a large new feature
  such as the stats dashboard for the CDN, define a small set that brings value
  that you can commit in one day (such as only start time and only for past 24
  hours), go live, and improve iteratively from there with more commits every
  day.<br/>
  You cannot complete the task within a day? work is still in progress? No
  problem, just do a commit and state it's "Work In Progress" (WIP), so your
  code will be added to the codebase and some progress will be made.
</p>

<H3 id="incremental-task-everyday" text="DONE every day">Get something small DONE
  every single day</H3>
<p>
  We make sure every day we personally get some task (big or small) completely
  DONE: do a commit, close a deal, solve a real problem...<br/>
  Even if it looks like a small progress, it will ensure your incremental
  {' '}<a href="#individual">contribution</a>.
</p>

<H2 id="incremental-nobranches" text="No branches">No branches</H2>
<p>
  At Hola we deliberately avoid branches as a means of improving
  {' '}<a href="#transparent">transparency</a>.<br/>
  Branches hurt transparency, because there is no single shared view of all the
  info, since lots of info gets hidden into many branches that are not viewable
  in a plain simple view. For example: try viewing videojs project in GitHub
  with all its 2900+ branches (forks), concurrently. You will not manage.
  If all forks were merged into one single top-of-branch best-of-all, all
  possible features of videojs & its branches (forks) would be easily available
  to all.<br/>
  Branches contradict two other core DNA values:
  {' '}<a href="#incremental">incremental</a> and
  {' '}<a href="#immediate">immediate</a>:
</p>
<ul>
  <li><b>Immediate</b>: We do continuous deployment, so commits are (nearly)
    immediately deployed. Branching contradicts it, because the commit is not
    immediately deployed (only if-and-when the branch is merged).
    Also, if we have branches, the commit is not immediately deployed.
  </li>
  <li><b>Incremental</b>: Instead of having every commit incrementally modify our
    product, branches make 'bulks' of changes at the time the branch is
    merged back into the product.
  </li>
</ul>

<H1 id="action" text="Action-oriented">Action-oriented</H1>
<p>
  <b>We choose to solve a problem over stating that one exists. Prefer actions
    over words</b><br/>
  We can only bring more value to our customers and to each other through
  actions. Offering new, well thought-out ideas is great, but must be followed
  with an action plan of how you get it done, so that your ideas turn into
  products.
</p>

<H2 id="action-gtd" text="Get things done">Get things done</H2>
<p>
  See David Allen's
  {' '}<a href="http://gettingthingsdone.com">Getting Things Done</a>
  (<a href="https://hamberg.no/gtd/">online introduction</a>)
  system:
  every commitment should be clarified until it is actionable, any project can
  only be completed by taking appropriate actions until it is complete, planning
  is a support tool for getting concrete, physical actions done.
</p>

<H2 id="action-issues" text="Issues">Issues, Problems and Bugs</H2>
<p>
  Problems are everywhere. Anything we see is something that can be improved.
  Every product has an endless number of bugs and points to improve. Many things
  need to be changed. Just stating that a problem exists does not bring
  value -- solving the problem does!
</p>

<H2 id="action-translate" text="Translate">Translate issues solutions</H2>
<p>
  Translate issues/opinions/suggestions/problems into actionable solutions.
</p>
<div cat="bad">
  I think those guys are doing a great job on their onboarding
</div>
<p>
  is just an actionless opinion.
  An actionable version of could be
</p>
<div cat="good">
  Those guys let the customer
  experience the value of their product within one click and 10 seconds
  of site landing.<br/>
  We can have a similar effect by putting an action bar in our home page.
  I will create a mockup for an MVP, and test it out.
</div>

<H2 id="action-reality" text="Reality, not theory">Reality, not theory</H2>
<p>
  We focus only on reality: on real customers, real use cases,
  problems that actually happened, and our actions are based
  on these real immediate issues.
  We avoid future planning, or solving problems that did not yet happen.
  Our experience showed us that any work we spent on theoretical issues
  always turned up in the end to be a waste of time.
  Actions based on future theoretical issues are called at Hola 'over engineering'.
  By handling only today's problems, we place our trust in
  {' '}<a href="#incremental">evolution</a> to guide us to a successful future.
</p>

<H2 id="action-research" text="Research by delivery">Research by delivery</H2>
<p>
  Researching and learning in Hola is always carried out by action, by doing,
  by implementing, by delivery.
</p>
<ul>
  <li>
    New to <a href="http://nodejs.org">nodejs</a>?
    you will learn it in Hola by actually writing code in nodejs.
  </li>
  <li>
    Need to learn how to deliver code contiguously, over 20 versions a day?
    In <a href="/dna/dict#bootcamp">bootcamp</a> you will deliver your own code
    and learn by doing it yourself.
  </li>
  <li>
    Want to research on whether to create a new product? Just create an
    {' '}<a href="/dna/dict#mvp">MVP</a>, release it, and learn from the reactions
    of the customers.
  </li>
  <li>
    Researching on right architecture to solve a performance problem?
    Just experiment by trying out small changes in the existing code, and see
    how they improve.
  </li>
</ul>
<p>
  We research via real life experimentation, and by incremental steps to
  see if the direction of our solution is correct.
  We don't just sit, think, and fill our heads with thoughts for a month.
  Instead, we implement many small ideas in different directions and see
  what works and what doesn't. This way, once we solve the problem, it
  will be a field-tested solution, already implemented and delivered in
  the real world.
</p>

<H2 id="action-solve" text="Solve it">Solve it</H2>
<p>
  If you encounter a problem, do not suggest how to solve it - solve
  it!
</p>

<H3 id="action-solve-done">Make sure it is really solved!</H3>
<p>
  You have resolved a problem or finished a task - great work and well done!<br/>
  However, it is not DONE until you have communicated with your customer
  directly, and received his feedback.<br/>
  Note that it can be an Hola customer or an internal one (one of Hola
  employees), for whom the task was done.
</p>

<H2 id="action-do" text="Do, don't talk">Do, don't talk</H2>
<p>
  {' '}<a href="https://www.youtube.com/watch?v=DZXlhSgq7us">"When you have to shoot,
    shoot - don't talk"</a><br/>
  Hola'ers are <b><a href="#action-gtd">doers</a></b>, not <b>talkers</b>.
  Actions, not words.<br/>
  Products don't get created out of talking. They are created out of
  coding.
</p>

<H3 id="action-do-yourself" text="Do yourself">Do yourself</H3>
<p>
  The best work is done alone, or one on one, not in meetings.
  The only scheduled meetings we have at Hola are the 'all hands' meetings
  every two weeks, and they are limited to 10 minutes after lunch.
  Other than that, we don't have meetings.
  We believe that while sometimes they may be productive, they are typically
  a waste of time for most of the participants,
  and above 2 participants ego overcomes logic.
  We prefer to do one on one ad-hoc meetings in person or by video,
  pulling in an extra person when really needed.<br/>
  What about situations where multiple stakeholders are required to
  completely solve a problem?
  We've found that the deepest solutions, which are also usually most
  time-efficient, involve only one-on-one meetings.
  Here's how: The owner of creating a comprehensive solution creates on his
  own what he finds to be the best overall solution.
  Then he <a href="#incremental">incrementally iterates</a>
  on it with each stakeholder separately,
  considering the new feedback received each time to make a better
  and better plan.
</p>

<H3 id="action-do-meeting" text="Avoid meetings">Avoid meetings</H3>
<p>
  Meetings are the opposite of doing. When you are hosting a meeting with your
  peers, you are not: writing code, debugging, finding and solving
  problems, talking to customers...
  We don't have a meeting room.
  Avoid meetings - just talk to whoever you need
  ad-hoc, over lunch etc. And never set recurring meetings.
</p>

<H3 id="action-do-discussion" text="Convert discussion into action">Convert
  discussion into action</H3>
<p>
  After discussion summarize to your peer the main points you had, which next
  actions needs to be taken, and who is responsible for each action. Actions should
  be recorded in <a href="/dna/dict#version_plan">version plan</a>
  to make sure nothing is forgotten.
  See <a href="#action-gtd">GTD</a>.
</p>

<H2 id="action-communication" text="Actionable communication">Actionable
  communication</H2>
<p>
  Our communication is actionable, and the action is preferably for
  ourselves!<br/>
  We don't just email:
</p>
<div cat="bad">
  Take a look at these conversion numbers
</div>
<p>
  rather we email:
</p>
<div cat="good">
  I saw the conversion dropped two weeks ago (see attached graph).
  I am now checking which change that took place two weeks ago could cause it.
  Do you know of any such change? In any case, I will take charge
  of fixing this issue.
</div>

<H1 id="individual" text="Individual contributor">Individual contributor</H1>
<p>
  <b>Those who complete tasks on their own from start to finish create the
    largest impact</b><br/>
  The people with the largest impact are those who do complete tasks on their
  own, from start to finish. Each manager at Hola spends at least 50% of
  his/her time on getting real tasks done.
</p>

<H2 id="individual-p2p" text="Collective of Peers">Company as a collective of
  Peers</H2>
<p>
  Hola is the sum of its employees. Each person brings a real tangible self
  contribution to the final product.<br/>
  Something you can point out proudly to your mother and say "I did that!".
</p>

<H2 id="individual-p2p-direct" text="Work P2P directly">Work Peer to Peer
  directly</H2>
<p>
  Hola is a P2P company. But not only our products are P2P, so is also our
  daily work method: people in the company work directly with their peers.
  We do not pass things through "Managers" (a.k.a. "central servers"...),
  rather if you want to get something done, you just go directly to the
  relevant person who is responsible for that domain.<br/>
  No managers needed!
</p>

<H2 id="individual-solve" text="Solve yourself">
  Solve yourself, don't create work for others</H2>
<p>
  Each of us solves problems and tasks independently, from start to finish.
  If you did some work and passed it on, then just the overhead of
  the context switch within the company probably wasn't worth it. Prefer to do
  the complete task. If you believe you will not be able to do it from start
  to end on your own, pass it on in its entirety to someone who can.
</p>

<H3 id="individual-solve-pass" text="Don't pass on subtasks">Don't pass on
  subtasks</H3>
<p>
  We avoid passing on subtasks - namely, smaller parts of a bigger task - to
  others: it's <a href="#individual-mindful">unfair to your peers</a>
  and the overhead of context switch within the company makes it
  inefficient:
</p>
<ul>
  <li>Involving another person</li>
  <li>Describing the task again</li>
  <li>Passing on all relevant information</li>
  <li>Explaining the full context of the task</li>
  <li>Validating on completion that it was done as originally intended</li>
</ul>

<H3 id="individual-solve-half" text="No 'half' tasks">No 'half' tasks</H3>
<p>
  When each of us does a task, we do it end-to-end. No 'half-baked' tasks.
  No 'helper' to clean up after us.
  Even doing 80% of a task, and passing on to a peer the remaining
  20%, will sum up to <b>200%</b>, double than the original task size:
</p>
<ul>
  <li>You <b>80%</b>: your original <b>80%</b> work</li>
  <li>You <b>20%</b>: preparing a good email to your peer describing
    the task</li>
  <li>Peer <b>15%</b>: context switch time, learning the email, the task,
    understanding what's needed and the background</li>
  <li>Peer <b>5%</b>: asking you back some clarifications</li>
  <li>You <b>20%</b>: giving him the clarifications</li>
  <li>Peer <b>20%</b>: peer's <b>20%</b> work (what you passed on to him)</li>
  <li>You <b>20%</b>: checking the task as a whole and seeing it still
    has a problem</li>
  <li>You+Peer <b>10%+10%</b>: closing the final issues to get the task
    perfect</li>
</ul>
<p>
  Total sum of 200%, instead of 100% due to the
  context switch and communications cost.
  The overhead of incomplete work is much higher that you would expect -
  that's why we avoid it.
</p>

<H2 id="individual-mindful" text="Mindful of coworker's time">Be mindful of
  your coworker's time</H2>
<p>
  It's easy to feel like you deserve the time of your coworkers.<br/>
  For example, when you're trying to improve a certain aspect of the
  company, and your coworker can help out with that, it means the whole
  company is better off. But every interaction comes with a cost: <b>your
  coworker's time</b>.<br/>
  This fact is dramatically more important in creative and problem solving
  fields like computer science, where being in the 'zone' can mean the
  difference between a really productive day and a day where every line of code
  is a struggle to write.<br/>
  Getting pulled out of the 'zone' can be jarring, and getting back into that
  mental mindset can take a frustratingly long time.<br/>
  This goes doubly so for companies with remote workers. It's easy to notify a
  coworker through chat or text message or IM that you need their help with
  something. Maybe a server went down, or you're having a tough problem with a
  bug in code you're unfamiliar with. If you're in a global company, time zones
  can become a factor too.<br/>
  Your coworker may be at home with his kids, or otherwise enjoying his
  non-work life.<br/>
  Consider keeping a list of issues you'd like to discuss, and lumping them
  into one discussion to respect your colleagues' time.<br/>
  Before asking colleagues questions, try to find the answer yourself.
  You will find that in many cases, reading the source code,
  {' '}<a href="#individual-mindful-grep">grep</a>,
  {' '}<a href="#individual-mindful-google">google</a> and our
  {' '}<a href="http://web.hola-org.com">Intranet</a> are your friends.<br/>
  For example: Don't ask a fellow engineer "What is David's mobile number?" -
  look it up in the <a href="http://web.hola-org.com/users">contact list</a>.<br/>
</p>

<H3 id="individual-mindful-google" text="Let me google that for you">Let me
  google that for you</H3>
<p>
  We avoid asking our peers questions we can ask Google:
  {' '}<a href="http://lmgtfy.com/">Let me google that for you</a>
</p>

<H3 id="individual-mindful-grep" text="Let me grep that for you">Let me
  grep that for you</H3>
<p>
  Just like Google is great at answering questions of public info,
  grep is an amazing at answering questions about our source code.
  The right grep can immediately give great answers.<br/>
  We made it even easier to grep by our usability wrapper above it:
  {' '}<a href="/dna/dict#rgrep">rgrep</a>!<br/>
  If you can grep, grep - don't ask!
</p>

<H3 id="mindful-emails" text="Mindful emails">Writing mindful emails - taking
  time to save others' time</H3>
<p>
  We optimize emails we write for making them simple to understand and act on
  for the other side. We take time to write the email carefully and review and
  modify before sending out, to make sure we are
  {' '}<a href="#individual-mindful">mindful of our co-workers' time</a>.
</p>
<pre cat="bad">
  check out this interesting article:{NL}
  https://www.smashingmagazine.com/2016/04/html5-media-source-extensions-bringing-production-video-web/"
</pre>
<p>
  This email would require all readers to open the article, even if the article
  does not concern or interest them, and the message's wording does not focus
  the readers on what is interesting about the article.
</p>
<pre cat="good">
  FYI: this article explains well for those who don't yet know enough about
  MSE technology:{NL}
  https://www.smashingmagazine.com/2016/04/html5-media-source-extensions-bringing-production-video-web/"
</pre>
<p>
  Don't have the time to write a great email? Better not to write it at all.
</p>

<H2 id="individual-noharm" text="Do no harm">Do no harm</H2>
<p>
  How do we move forward fast? by never going backwards!<br/>
  When every single peer in the company contributes value every single day,
  a lot, or a little, the company as a whole will move forward rapidly.
</p>

<H3 id="individual-noharm-degrade" text="Avoid degradation">
  Avoid degradation</H3>
<p>
  Implementing a new feature? Trying to fix a bug? Modifying code?
  Improving the installation flow? Suggesting to add a new tool?
  Whatever you do, just make sure you do not degrade the existing
  situation.
</p>
<ul>
  <li>Every new version of the product must in the very least not degrade the
      product.</li>
  <li>Every commit must keep the build tree 'green'.</li>
  <li>Every new tool must not degrade current ease of development.</li>
</ul>

<H3 id="individual-noharm-peer" text="Wasting peer's time">
  Wasting peer's time</H3>
<p>
  A great company is combined of individuals who, on the one hand, are super
  productive and contributing on their own, and on the other hand do not set
  back other colleagues in the course of their own work.<br/>
  You should bring value to Hola - at the very least, do no harm:
</p>
<ul>
  <li>Losing a customer</li>
  <li>Releasing a bad feature</li>
  <li>Degrading the product</li>
  <li><a href="#individual-mindful">Wasting other people's time</a></li>
</ul>
<p>
  The last item - wasting your peer's time - is the most significant!<br/>
  If you commit code that breaks the tree, other developers cannot check out
  and commit their own work.<br/>
  If you code a great feature, but in the process you consumed peer's time by
  asking for help, you prevented your peers from progressing in their own
  features.<br/>
  <b>Our peer's time is always more valuable than our own.</b>
</p>
<ul>
  <li>Be mindful of your coworker's time</li>
  <li>Don't do half tasks and leave the rest to others</li>
  <li>Don't write code that will require others to fix</li>
  <li>
    If asking for help, provide all information in summarized form, without
    requiring your colleague to search for more details. Make sure this
    assistance session does not pass the 5 minute mark.
  </li>
  <li>If sharing information, provide it in full and concise form in a short
    text
  </li>
  <li>You're a <a href="/dna/dict#noob">noob</a>?
    Don't ask <a href="/dna/dict#veteran">veterans</a> noob's questions.</li>
</ul>

<H2 id="individual-owner" text="Owner, not Renter">Be an Owner, not a Renter</H2>
<p>
  Revolutions aren't won by paid soldiers; they're won by true believers
  in the cause, patriots.
  A home owner treats his house better than a home renter.
  Whereas renters are mercenaries, focused on short-term personal gain
  not deeply vested into that the house (next year they will be renting
  a different house), owners optimize for long-term outcomes,
  bridge gaps in organizations, think and act beyond their job description.
  They care deeply about their home - their workplace.
  In Hola, we are all owners and not renters.<br/>
  Introduced any new feature or application? Take full ownership of
  it by adding yourself to the <code><a href="/dna/dict#jdoc">jdoc</a></code>, and
  by monitoring and influencing its progress.<br/>
</p>

<H3 id="individual-owner-complain" text="Don't complain - solve!">
  We don't complain - we solve!
</H3>
<p>
  Complaints are words. Solutions are actions. Only actions make a change.<br/>
  Take ownership of problems, don't hope someone else will solve them
  for you.
</p>

<H2 id="individual-manager" text="Manager? do yourself!">
  Manager? Do it on your own first!</H2>
<p>
  If you need to instruct the sales team how to sell the product, first
  sell it yourself.
  By doing a task first yourself you will know it better, and be able
  to give better instructions to others on how it should be done.
</p>

<H2 id="individual-hire" text="When to hire">
  When to hire additional people to your team?</H2>
<p>
  Hire additional person to your team for a specific function only once that
  function is already working well in your team, and you just need one more
  person to do it. This function should have already been proven to work well
  by one of your existing team members.<br/>
  <b>Do not</b> hire additional people to
  your team if you are hoping that an additional person will bring new value
  that your team is not yet bringing.<br/>
  For example: You manage a marketing team, and you want to generate content
  for press, but have never made a real 'machine' that can generate content and
  get it published.<br/>
  <b>Do not</b> hire a person to do this before proving it can
  work with the existing team. Rather, one of the team members should create a
  small machine that makes content (by writing it himself), getting interest
  from publishers (by contacting them himself), and getting the piece
  published. This experiment will teach the team if its at all possible to
  create such a machine, what is needed to create such a machine, and what are
  the exact requirements of the person to be hired.
</p>

<H2 id="individual-oncall" text="On-call">On-call</H2>
<p>
  Hola is a global company that provides mission-critical services for
  countless customers and users. Therefore, we must ensure a very high level of
  reliability. Each engineer shares responsibility for keeping our services
  running smoothly 24/7/365.<br/>
  Once you are familiar with the Hola infrastructure, you will join the on-call
  rotation for your team. Each shift has a 2nd and 3rd line engineer, so there
  is always help available if the problem is really serious.<br/>
  We strive to make on-call incidents rare: once every few months, per
  engineer. When possible, non-critical issues are handled in the next work
  day.
</p>

<H2 id="individual-craftsmanship" text="Craftsmanship">Craftsmanship</H2>
<p>
  Each of us strives to be the best in our field, and reach perfection,
  make the smartest best possible decisions, and create the best products
  possible.<br/>
</p>

<H3 id="individual-craftsmanship-egolessness" text="Egolessness">Egolessness</H3>
<p>
  Achieving a high level of craftsmanship requires complete egolessness;
  focusing on the search for the 'truth', and understanding that our own ideas
  might not always be the best ideas around. We should be open to accept
  quickly any other, better idea, no matter who suggested it.<br/>
  Great craftsmanship focuses on creating best results, not whether it was
  our own idea.
</p>

<H3 id="individual-craftsmanship-quality" text="Quality">Quality</H3>
<p>
  We strive to produce great products. If we see a glitch, we don't just
  refresh the browser's display and sit, self-content, to view the result - we
  dig in to find what happened, even if the problem seems to have disappeared.<br/>
  We try to re-create the problem, digging deeper until we find the root cause.
  Problems don't just go away - they come back, more severe, at the worst
  possible time. Finding and fixing problems early makes our products great.
</p>

<H2 id="individual-starting" text="Starting out">Starting out at Hola, or in a
  new role at Hola</H2>
<p>
  From a Google VP on starting off on the right foot in a new role:
  "The advice I give to everybody coming in, is whatever your first project is,
  no matter how much you hate it, spend your first six months executing
  flawlessly on whatever you do. Don't pontificate. Don't go for the bigger
  thing. Don't go for the grand, strategic objective. That stuff can wait six
  months. Jump in with both feet. Respect the fact that your team has been
  around forever and don't question everything. Figure out how they operate.
  Treat them all with respect. Learn as much as you can and execute like crazy,
  and that will buy you the option value to do whatever you want next.<br/>
  Because, if people see you execute one thing, they'll think that you can
  execute another thing, and another thing, and another good thing. There are
  very few people who come in and do that truly professionally, but the people
  who do end up setting themselves up super well."
</p>

<H2 id="individual-amazing" text="Amazing Team">Amazing Team</H2>
<ul>
  <li>The more top talent we have, the more we can accomplish.</li>
  <li>
    If the company is trying to solve the right set of problems,
    then it can create an environment that is challenging to top talent,
    and is able to provide these talents top of the market salaries and
    bonuses.
  </li>
  <li>
    We look for these top talents wherever they may be. We are not limited to
    geography, race, or religion. In fact, some of Hola's top contributing
    employees today are based outside of our main office in Israel.
  </li>
  <li>
    We look for people that:
    <ul>
      <li>Share much of our DNA, and are open to figuring it out and
        adopting it.</li>
      <li>Accomplish amazing amounts of important work</li>
      <li>Focus on great results that are important to Hola</li>
      <li>Exhibit bias to action over analysis</li>
      <li>Don't wait to be told what to do</li>
    </ul>
  </li>
  <li>A great workplace can only be great if you are surrounded by stunning
    colleagues.</li>
</ul>

<H1 id="effective" text="Effective and productive">Effective and productive</H1>
<p>
  <b>Each of us chooses the tasks that bring the most value, and chooses the
    most productive way to get them done</b><br/>
  We measure the effectiveness of an action in whether it contributed to the
  company's core - creating products that WOW our customers.
  We measure our productivity in how fast and often we can be effective.
</p>
<ul>
  <li>
    Consider an employee who is proud of a report that he generated and
    distributed amongst 10 other employees.
    Was that effective? no! The product did not change - products are built
    from code, not spreadsheets, emails and presentations.
    It was even counter-productive:
    {' '}<a href="#individual-mindful">it wasted time of his 10 peers</a>!
  </li>
  <li>
    Consider an employee who saw his relative use a Hola product with
    difficulty, created a quick mockup by drawing it on paper,
    estimating that it would take less than an hour to implement,
    so he quickly implemented it, and deployed it, and checked with his
    relative whether it made it easier to use.
    Was that effective? Definitely yes!
  </li>
</ul>
<p>
  Work is only effective if it directly changed how we make a better product.
</p>

<H2 id="effective-productive" text="Productive">Productive</H2>
<p>
  A good start to measuring our own productivity is whether we were able to
  complete tasks (big or small), deliver and deploy something every single
  day.
  Delivery and task completion are good signs for productivity.
</p>

<H3 id="effective-productive-impact" text="Maximize impact">Maximize impact</H3>
<p>
  As technology workers, we have the opportunity to affect positive change at
  an unprecedented scale and rate.
  We have that opportunity because our individual work can impact millions
  of users within hours of being committed.
  At Hola we strive to make the most of that opportunity.
</p>

<H3 id="effective-productive-value" text="Bring value">Bring value</H3>
<p>
  Choose tasks that bring great value. Prioritize your tasks based on the
  value they bring.<br/>
  If you think you have a task that will not improve the customer value of
  Hola's products, do not do this task.
</p>

<H3 id="effective-productive-capabilities" text="Capabilities">Capabilities</H3>
<p>
  If a task does not match your capabilities, and someone else can do it
  faster, try to have him take ownership.
</p>

<H3 id="effective-productive-hours" test="Sane work hours">Sane work hours</H3>
<p>
  We do not believe in 'crazy startup work' - while the difference between
  10 to 11 hours per day is 10%, the job burnout caused by working this extra
  hour results in more than 10% ineffectiveness, and a single mistaken
  decision will lead to 100% ineffectiveness.<br/>
  This policy is based on our very personal experience: in Jungo and the first
  year in Hola we believed that long work hours bring success.<br/>
  After the first year in Hola, we decided we are completely different: No
  working at night, no working on weekends, everybody needs to choose a
  personally defined number of hours he feels comfortable with, a number that matches
  his perception about the work-life balance required in order to enjoy life!<br/>
  Don't work crazy hours at Hola, but during the hours that you do work, work
  with 100% focus and dedication. Less hours, more focus.<br/>
  We make HUGE efforts so that people do not have to work like in startup
  world. We therefore expect that in the very very rare occasions where working
  crazy hours is essential for solving an urgent customer problem, our
  employees take up the challenge and put the necessary amount of work.<br/>
  To summarize: We don't measure people by how many hours they work --
  we do care about accomplishing great work.
</p>

<H2 id="effective-cost" text="Cost effective">Cost effective</H2>
<p>
  When suggesting a change/improvement, look for the 'total overall cost'.
  For example, consider our DB has performance problems, and a developer
  may suggest to move to a different DB engine to solve the performance issues.
  When suggesting to move to a new DB, due to the suggested DB's 'pros',
  developers don't always take into account all its 'cons'.
  The old DB may have problems, but the new DB may also have a different
  set of its own issues. The old DB may also have features we rely on,
  which are unsupported by the new DB.
  At Hola, we always try to look at the big picture, and we prefer
  {' '}<a href="#incremental">evolution</a> where possible, instead of
  'out with the old, in with the new'; namely, evolution instead of revolution.
  Back to the DB example, many times a small configuration change, patch,
  or schema change can solve performance issues, being a quick
  cost-effective solution to the problem.
</p>

<H3 id="effective-cost-suggest" text="Negative ROI">Do not suggest to change
  things that have negative ROI</H3>
<p>
  It's the responsibility of the developer who suggests the change
  to work out the 'total overall cost' of the change, and to validate that
  the suggestion has a large positive ROI, and that no
  simpler/quicker/cheaper/faster options can solve the issue at hand.
  We avoid implementing changes when the cost of the change is higher than
  the eventual positive outcome.
</p>

<H2 id="effective-ssf" text="Short Simple Fast">Short Simple Fast</H2>
<p>
  Rule of thumb when evaluating any action/task/solution/code/document...:
</p>
<ul>
  <li><a href="#effective-minimal">Short is better than Long</a></li>
  <li><a href="#effe">Simple is better than Complex</a></li>
  <li><a href="#incremental-fast">Fast is better than Slow</a></li>
</ul>

<H2 id="effective-minimal" text="Minimalism">Minimalism</H2>
<p>
  We love extreme minimalism.
</p>
<ul>
  <li>We implement only what is really needed</li>
  <li>Work with tools only if they really help</li>
  <li>Ask questions only if we are really stuck</li>
  <li>Write code only if it solves a real problem</li>
  <li>Solve a problem only if it brings value</li>
  <li>Avoid over-engineering</li>
</ul>
<p>
  This minimalism is deeply embedded in our daily work, and DNA:
</p>
<ul>
  <li>
    {' '}<a href="/dna/comm#email">Email</a>:
    {' '}<a href="/dna/comm#email-minimal-recipients">Minimal recipients</a>,
    {' '}<a href="/dna/comm#email-signature-short">Minimal signature</a>,
    {' '}<a href="/dna/comm#email-new-greeting">Avoid greetings</a>,
    {' '}<a href="/dna/comm#email-reply-one">Single line emails where possible</a>
  </li>
  <li>
    {' '}<a href="/dna/js_code#overview-minimal">Code minimalism and condensity</a>:
    removing every possible redundant token, spacing, comment, unless
    it's really needed. Choosing short concise names.
    Always favoring shorter code.
  </li>
  <li>
    {' '}<a href="#incremental-mvp">Minimal Viable Product</a>:
    implement minimal features to create a viable product.
  </li>
  <li><a href="#action-do-meeting">Meet only if needed</a></li>
</ul>

<H2 id="effective-email" text="Email">Email</H2>
<p>
  Email is a mission-critical tool for us - that's why we prepared
  {' '}<a href="/dna/comm#email">very detailed strict guidelines</a> on how emails
  should be written, sent, received, and handled.<br/>
  Here are some highlights from our
  {' '}<a href="/dna/comm#email">Email guidelines</a>:
</p>
<ul>
  <li><a href="http://fortune.com/2014/09/25/googles-eric-schmidt-has-these-9-rules-for-emailing">Eric
    Schmidt's 9 rules for emailing</a>: Respond quickly, minimal words,
    clear inbox constantly, handle LIFO order, share if useful,
    don't BCC, BCC yourself for followup, forward yourself with search keywords.
  </li>
  <li><a href="/dna/comm#email-minimal-recipients">Minimal recipients</a></li>
  <li><a href="/dna/comm#email-new-subject">Clear subject</a></li>
  <li><a href="/dna/comm#email-new-greeting">Avoid greetings</a></li>
  <li><a href="/dna/comm#email-signature-short">Minimal signature</a></li>
  <li><a href="/dna/comm#email-reply-one">Single line emails where
      possible</a></li>
  <li><a href="/dna/comm#email-action-discuss">Make discussions
      actionable</a></li>
  <li><a href="/dna/comm#email-action">Clarify action items</a></li>
</ul>

<H2 id="effective-important" text="Important discussions">Summarize important discussions</H2>
<p>
  When action items come up in a discussion with someone, or very important
  information is conveyed - immediately after the discussion send a summary
  email to that person (or make sure he sends to you), so that:
</p>
<ul>
  <li> you can make sure that you both understood it in the same way, and;</li>
  <li> so that you have reference for the future on what was agreed</li>
</ul>
<p>
  The time it takes you to write this summary will allow you to consider which
  additional actions this requires, and who else needs to know about it.
</p>

<H2 id="effective-organized" text="Task organization">Task organization</H2>
<p>
  Don't trust your memory.
  Carry a pad and write things down.
  Systematically go over your list - you will see it's very satisfying to
  cross things off that list.
  At the end of a meeting or skype call, send a short summary email with action
  items.
</p>

<H2 id="effective-example">"By example" design</H2>
<p>
  We use specific examples rather than formal specification to define
  tasks and design features: mockups, wireframes, and textual examples.
</p>
<div cat="bad">
  definition: break is a color turning "darker". E.g. moving from green
  to orange is a break
</div>
<div cat="good">
  "break": green&rarr;yellow, yellow&rarr;orange, orange&rarr;red, etc...
</div>
<div cat="bad">
  Add control with payment plan options: $5 a month, $25 for 6 months, $45 for
  1 year. Also emphasize that the 1 year option saves 20%.
</div>
<pre cat="good">
  Select payment plan{NL}
  (o) $5  monthly{NL}
  ( ) $25 every 6 month{NL}
  ( ) $45 a year (save 20%!)
</pre>

<H1 id="autonomous" text="Autonomous and responsible">Autonomous and responsible
</H1>
<p>
  We love working with people who can manage themselves and their tasks on
  their own.
  We find that a management style where micro-management is required,
  guiding the individual contributor in many steps of the way and tracking
  working hours and micro tasks kills our productivity and our
  creativeness.<br/>
  Thus, the perfect Hola'er is the person who finds his own tasks by
  understanding his surroundings and deciding what would be of maximal value,
  creating an MVP, sharing that with his supervisor and OK'ing the direction,
  and then getting that done productively.<br/>
  We find that this is more productive, and more enjoyable for all.
</p>

<H2 id="autonomous-responsible" text="Responsible">Responsible</H2>
<p>
  {' '}<a href="http://blog.cleancoder.com/uncle-bob/2015/10/05/WattsLine54.html">
  Take responsibility and ownership</a> for the problems and solve them on
  your own.
  Responsibility means that you are going ahead with a change and seeing it
  through, while understanding the risks and making sure that they are worth
  the outcome.
</p>

<H3 id="autonomous-responsible-involved" text="No one gets involved">No need for
  others to fix</H3>
<p>
  A great delivery is one that does not require anyone else to get involved in
  your tasks.
</p>

<H3 id="autonomous-responsible-check" text="Check your work">Check your work</H3>
<p>No one will check your work - so do it well first time</p>

<H3 id="autonomous-responsible-review" text="No code reviews">You review your own
  code</H3>
<p>We do not do code reviews (... except for new people, and they must very
  quickly do perfect commits, so we can stop doing their reviews).</p>

<H3 id="autonomous-responsible-workflow" text="Workflow">Workflow: Write, Test,
  Review, Commit, Build, Deploy, Monitor</H3>
<p>The flow of adding a feature/modification/bugfix is:</p>
<ul>
  <li><b>Write</b>: fully implemented change consists of
    <ul>
      <li>code of the change itself</li>
      <li>unit tests</li>
      <li>deploy procedures</li>
      <li><a href="/dna/dict#zcounter">zcounters</a>
        and alerts for monitoring</li>
    </ul>
    Not every change requires every item from the list above, but it is the
    implementor's responsibility to do as much as the change warrants.
  </li>
  <li><b>Test</b>: emulate the product by using zlxc, and test your changes</li>
  <li><b>Review</b>: do the following before commit:
    <ul>
      <li>Run <a href="/dna/dict#zlint">zlint</a> on your code</li>
      <li>Run <a href="/dna/dict#zmocha">zmocha</a> on your code</li>
      <li>Read full diff of your changes</li>
      <li><a href="/dna/dict#noob">Hola Noobs</a>
        Ask for a <a href="/dna/dict#review-sync">review</a> from a peer
      </li>
    </ul>
  </li>
  <li><b>Commit</b>: concisely describe "what" and "why" in the commit message,
    and commit.
  </li>
  <li><b>Build</b>: if <a href="/dna/dict#bat">BAT</a> breaks - revert
    your change or fix it immediately.<br/>
    You already wrote the unit-tests for <a href="/dna/dict#bat">BAT</a>
    during the <b>Write</b> phase.
  </li>
  <li><b>Deploy</b>: get your code to the field ASAP<br/>
    You have already updated procedures for the deploy team during
    the <b>Write</b> phase.
  </li>
  <li><b>Monitor</b>: keep an eye on a monitoring system.<br/>
    You have already added zcounters and alerts during the <b>Write</b> phase.
  </li>
</ul>

<H3 id="autonomous-responsible-forget" text="Never 'lose' tasks">Never
  'lose' emails, tasks & AIs</H3>
<p>
  We are each totally responsible for our own tasks, nobody will follow us
  up.
  So we can't let tasks get 'lost'. We don't 'forget' things.<br/>
  How? With tools:
</p>
<ul>
  <li>
    <b><a href="/dna/comm#email-inbox-read">Manage your inbox</a></b>:
    this prevents emails from getting lost - minimal inbox, and
    archiving/deleting emails only when handling.
  </li>
  <li>
    <b>Use <a href="/dna/dict#version_plan">version_plan</a> & calendar for long
      term AIs</b>: these are 'long term' memory tools, so that tasks are never
    forgotten.
  </li>
  <li>
    <b>Pen & paper in customer meetings</b>: always having a pen & paper
    whenever meeting a customer on skype, video call or face to face, will
    prevent forgetting meeting AIs.
    Do this also when you come to get feedback
    or advice from a peer inside the company - you are taking up your
    peer's time for your own personal task,
    so don't miss any of the things you learned just because you
    didn't write them down.
    Transfer AIs you don't immediately implement to your 'long term
    memory' tools (<a href="/dna/dict#version_plan">version plan</a>,
    calendar...).
  </li>
</ul>

<H2 id="autonomous-judgement" text="Judgement over rules">Trust judgement over
  rules</H2>
<p>
  Rather than rely on hard rules that dictate behavior, we give ourselves the
  flexibility to apply judgment at the time a decision is being made.
  This allows us to incorporate more context about what is happening,
  enabled by the trust we share in the decision-making abilities of our
  teammates.
</p>

<H1 id="truthful" text="Truthful">Truthful</H1>
<p>
  <b>Communicate, look at problems and evaluate ourselves truthfully</b><br/>
  We seek truth: What does the user really want? What is the
  best way to solve a problem? How can we make our customers happy?<br/>
  When facing these questions, we put workplace politics and
  {' '}<a href="#individual-craftsmanship-egolessness">personal egos</a>
  aside, and focus on the search for the best, most truthful, and
  correct answers.<br/>
  We believe that seeking the real truth will contribute to make better
  products and a better workplace.
</p>

<H2 id="truthful-mistakes" text="Pride in mistakes">Pride in mistakes</H2>
<p>
  Everyone makes mistakes, especially
  {' '}<a href="#action-gtd">people who get a lot done</a>.<br/>
  Therefore, we're constantly on the look for our own mistakes. Once we detect
  and fix them, we are on a better trajectory, personally and as a group.
  Finding our own mistakes is an "AHA!" moment. We take pride in it, and we
  share it - along with the new conclusion - with our peers, since some of them
  are probably in the same, wrong mindset in which we were before.<br/>
  We learn the most from the mistakes we make: Let's share them so that we
  don't make them again, but rather improve as a group. We can share our own
  mistakes by sending a case study to all that are relevant. If you make a
  mistake, don't try to hide it. On the contrary, understand what happened, fix the
  mistake, as well as the flaws in the system that made the mistake possible.
  Mistakes are a great learning opportunity that allows for improvement.
</p>

<H3 id="truthful-mistakes-correcting" text="Correcting mistakes">Correcting
  mistakes</H3>
<p>
  Making mistakes is part of the culture of running fast, and we all make
  them.
  If our goal was to be 100% mistake-free, we would be slowing our progress
  at Hola to a halt.
  Imagine a waiter who has to make sure 100% that he never breaks any dishes
  he carries.
  He will carry less dishes, and walk very slowly - not very productive!
  If he were to be only 99% break-free,
  breaking a dish once in a while, he would be 10x more productive: carrying
  more dishes, and walking much faster.
  We prefer to be of the second sort.<br/>
  When identifying that a mistake has been made we need to apply some deep
  thinking to figure out other areas that this mistake may have affected.
  Back to the waiter example, once a glass breaks you need to consider what
  the consequences are - where may have the glass shreds ended up,
  do you need to put in an order for a new glass,
  are there other repercussions?<br/>
  An example from our work; a Biz Dev (BD) person signs up a new customer,
  and in the internal email misspells the name of the customer.
  Not a problem, but requires some thinking now - what are the actions that
  need to be done? Send a corrective email, go to finance department and ensure
  that the customer was not entered in the financial systems incorrectly
  (to avoid mismatches down the road), go to IT to make sure that the
  customer was not activated under the wrong name, etc.
  The next step after correcting the immediate results is finding how to
  improve the overall system, to prevent these mistakes from happening again.
  In the waiter example, after a few dishes dropped he offered to have a
  rubber mat on the tray to avoid much of the jiggle, resulting in
  less broken dishes and even faster possible walking speeds.
</p>

<H3 id="truthful-mistakes-5solutions" text="5 Solutions">
  "5 Solutions": Solve problems in 5 ways</H3>
<p>
  Every problem or mistake that we investigate is a side effect of a bigger,
  deeper problem.<br/>
  We <a href="#effective-minimal">avoid solving problems in advance</a>, but once
  a problem does happen, we make sure to thoroughly solve it in 5 different
  ways, with 5 different solutions, thereby preventing the future occurrence of
  not only this specific type of problem, but also of many other, related
  problems.<br/>
  This is originally based on Toyota's
  {' '}<a href="https://en.wikipedia.org/wiki/5_Whys">Ask "Why?" 5 times</a>,
  but adapted to our <a href="#action">action-oriented</a> DNA of
  {' '}<a href="#individual-owner-complain">'solving' rather than 'complaining'</a>.
  <br/>
  We have in place many systems and procedures to prevent mistakes and to
  catch them once they happen - all built as solutions for past mistakes. If a
  bug/mistake slipped through all traps, the purpose of the '5 Solutions'
  is to create new mechanisms and work methods that will prevent the future
  occurrence of such bugs.<br/>
  Most <b>'solutions'</b> we implement are <b>'traps'</b> that help us
  trap/catch/prevent the bug/problem/mistake:
</p>
<ul>
  <li>linter: will trap bugs even before you first run the code</li>
  <li>unittest: will trap bugs before commit, or in the
    {' '}<a href="/dna/dict#bat">BAT</a></li>
  <li>test procedures: will trap problems before release, in the deploy
    stage</li>
  <li>
    {' '}<a href="/dna/dict#zcounter">zcounters</a>: will trap after deploy, but will
    minimize the impact, by alerting - thus it will quickly be reverted.
  </li>
  <li>procedures: modifying a procedure in a way that will better trap new
    kind of mistakes. Such as the developer
    {' '}<a href="#autonomous-responsible-workflow">workflow procedure</a> that we
    modify constantly to help trap more and more different kinds of common
    mistakes.<br/>
    The <a href="/dna/comm#email">email procedure</a> was also written as
    a result of mistakes in email handling - thus helping the rest of the
    team avoid those mistakes.
  </li>
</ul>
<p>
  <b>5</b> sounds too many?<br/>
  Too hard to find many ways to address the same problem?<br/>
  The number <b>5</b> is not a strict rule. The quality of doing 5-Solutions
  is by the quality of the solutions and action items, not the number.<br/>
  Even if you only have <b>2</b> solutions for the incident, but the solutions
  suggested and implemented give great value for the company - then <b>2</b>
  solutions is enough!<br/>
  Here are questions that will help you find more root causes, and
  thus more possible solutions:
</p>
<ul>
  <li><b>Why</b> didn't the current procedures/work methods/tools prevent this
    problem?</li>
  <li><b>What</b> procedure/tool should I modify to prevent this in the
    future?</li>
  <li><b>Do</b> others also make this kind of mistake?</li>
  <li><b>How</b> can I help my peers avoid it?</li>
  <li>Even if one trap didn't catch this mistake, <b>what</b> additional traps
    could I add that would have caught it from a different direction?</li>
  <li>
    Even if all traps didn't catch this bug, <b>what</b> post-release
    monitor/alerting trap can I add to detect the bug in the field, enabling
    early detection and minimizing the bug's impact?
  </li>
  <li><b>Why</b> did this happen again? Why wasn't the previous fix thorough
    enough?</li>
  <li><b>Why</b> do my peers tend to repeat doing this mistake?<br/></li>
  <li><b>How</b> can I teach my peers how to avoid this kind of mistake?</li>
  <li><b>Why</b> did people not follow the existing procedures that prevent
    this mistake from happening?</li>
  <li><b>How</b> to make it easier for others to avoid such mistakes?</li>
  <li><b>What</b> tools are missing that would help find/solve/prevent
    this?</li>
</ul>
<h4 id="truthful-mistakes-5solutions-process">Initiate '5 Solutions' process</h4>
<p>
  Problems and mistakes can happen in your domain, for which you have to
  execute a '5 solutions' process, immediately once found, to resolve them.<br/>
  It is also quite often that a <a href="/dna/dict#veteran">veteran</a>, who was
  an eyewitness to a problem or mistake in your domain, will ask you to
  consider initiating such a process. In such a case, our Hola way of thinking
  is also investigate ourselves by asking 'How come I did not see it before?'
</p>
<h4 id="truthful-mistakes-5solutions-timeline">'5 Solutions' time line</h4>
<p>
  Once initiating a '5 Solution' process, it should end in a timely manner, so
  such a problem or mistake will not reoccur.<br/>
  Your actions should be <a href="#incremental-fast">fast</a>:
</p>
<ul>
  <li>Invest 10 minutes to understand what happened and provide an initial
    feedback to all concerns. Then,</li>
  <li>
    Invest 1-2 hours to deeply understand the problem,
    {' '}<a href="#action-gtd">provide a solution</a> and
    {' '}<a href="#transparent">report to all concerns</a> about your findings,
    solution and execution
  </li>
</ul>
<h4 id="truthful-mistakes-5solutions-example">'5 Solutions' example</h4>
<p>
  'cdn bytes' metric did not notify a critical problem - here is a '5
  Solutions' process description:
</p>
<div className="email" cat="good">
  From: arik<br/>
  To: niv<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
Yesterday Nir did a commit and didn't check it out.<br/>
No CRIT jumped and no one noticed till I saw it today (screenshot enclosed).<br/>
<br/>
What was done on it?<br/>
<br/>
Arik<br/>
</div>
<div className="email" cat="bad">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
Sorry, my bad.<br/>
<br/>
Niv
</div>

<div className="email" cat="bad">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
Sorry, will not happen again.<br/>
<br/>
Niv
</div>

<div className="email" cat="bad">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
It is because of Yuval's code, talk with him.<br/>
<br/>
Niv
</div>

<div className="email" cat="bad">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
You are looking who to blame. I worked and sometime when you work, things are<br/>
broken.<br/>
<br/>
Niv
</div>

<div className="email" cat="good">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
Here is my 5 solutions:<br/>
<br/>
- Why the crit was not seen?<br/>
<br/>
cdn_bytes' crit_min and crit_max were not adjusted per customer traffic<br/>
behavior but set globally.<br/>
<br/>
Solution: Will go over all cdn_bytes limits and set it according to<br/>
their customer's traffic behavior.<br/>
<br/>
- Do we have other metrics which are set the same?<br/>
<br/>
Yes! origin_downloaded_bytes, zone_init and many more.<br/>
<br/>
Solution: Will go over all other important metrics and set it according to<br/>
their customer's traffic behavior.<br/>
<br/>
- If this metric was set correctly, was it handled correctly by our critical<br/>
procedures?<br/>
<br/>
No! Deploy would have avoided it since the website actually worked as<br/>
expected.<br/>
<br/>
Solution: Add to the 'Handle' procedure instructions to check pattern and<br/>
verify it looks the same.<br/>
<br/>
I'm starting the cdn_bytes adjustments - I'll report once finished.<br/>
I'll come over to verify the list of important metrics to adjust as well.<br/>
'Handle' procedure will be adjusted by the end of the day.<br/>
<br/>
Niv<br/>
<br/>
| From: arik<br/>
| To: niv<br/>
| Subject: crit system did not work<br/>
|<br/>
| Hi,<br/>
|<br/>
| Yesterday Nir did a commit and didn't check it out.<br/>
| No CRIT jumped and no one noticed till I saw it today.<br/>
|<br/>
| What was done on it?<br/>
| Consider have 5 solutions on this incident.<br/>
|<br/>
| Arik
</div>
<div className="email" cat="good">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
| - Why the crit was not seen?<br/>
|<br/>
|  cdn_bytes' crit_min and crit_max were not adjusted per customer traffic<br/>
|  behavior but set globally.<br/>
|<br/>
|  Solution: Will go over all cdn_bytes limits and set it according to<br/>
|  their customer's traffic behavior.<br/>
<br/>
Done.<br/>
Continuing with the procedure.
</div>
<div className="email" cat="good">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
| - If this metric was set correctly, was it handled correctly by our critical<br/>
|   procedures?<br/>
|<br/>
| No! Deploy would have avoided it since the website actually worked as<br/>
| expected.<br/>
|<br/>
| Solution: Add to the 'Handle' procedure instructions to check pattern and<br/>
| verify it looks the same.<br/>
<br/>
Done.<br/>
Continuing with all other metrics.
</div>
<div className="email" cat="good">
  From: niv<br/>
  To: arik<br/>
  Subject: crit system did not work<br/>
<br/>
Hi,<br/>
<br/>
All other metrics were set.<br/>
Below is a link to my commit:<br/>
http://web.hola-org.com/cvs/zon/pkg/system/db/monitor_rules.js?r1=1.11&r2=1.12<br/>
<br/>
Niv
</div>
<p>
  This thorough handling of a problem will not only fix the specific problem
  that occurred, but will also prevent/fix many related future problems of
  various types.
</p>

<H3 id="truthful-mistakes-why_email">Answering 'why?'</H3>
<p>
  Sometimes you will be asked to explain why did you take a certain action.
  Such a process of answering 'why?' give us an opportunity to either enhance
  our procedures, in case it was good idea, or fix completely an identified
  problem, in case it was a mistake.<br/>
  In case a mistake was identified, you wil be asked not only to fix this
  specific one but also taking all required actions preventing others from
  doing the same mistake again (e.g. executing
  {' '}<a href="#truthful-mistakes-5solutions">5 solutions</a> report).<br/>
  Check our email conventions to see how to
  {' '}<a href="/dna/comm#email-reply-why">answer a why email</a>.
</p>

<H3 id="truthful-mistakes-cleanup" text="Clean up yourself">Clean up yourself</H3>
<p>
  Sometimes our peers discover our mistakes. In such cases we should be
  thankful for the time and effort they spent on finding mistakes.
  As part of good peer relationship, and
  {' '}<a href="#individual-mindful">honoring our peer's time</a>, we try to
  acknowledge the mistake as quickly as possible and "clean up the mess"
  ourselves - releasing our peer from any further involvement:
</p>
<ul>
  <li>
    We immediately email: <span className="good">"Thanks. FIXED"</span>
    if possible to fix immediately,
    or <span className="good">"Thanks. Will be fixed by tomorrow"</span>
    if the fix takes time
  </li>
  <li>
    We think whether this mistake might have been repeated by us or others
    in the codebase, and we <a href="/dna/dict#rgrep">rgrep</a> and fix
    all mistakes of the same class as this one.
    In our email back to our peer we will add
    <span className="good">
      "I rgrep'ed and found mistakes of this type made by me in 5 other places,
      plus 20 more mistakes of this type made by others, and I FIXED them all".
    </span><br/>
    This will put your peer's mind at rest that you made a thorough fix, not
    a shallow one, thus preventing him from having to send you an email such as
    <span className="bad">
      "OK - you fixed this specific bug occurrence, but did you check the
      whole codebase for additional appearances of such a bug?"
    </span>
  </li>
  <li>
    Once the fix is deployed, send another email updating your peer that the
    fix is live, so that he now has a chance to see if the fix puts his mind
    at rest.
  </li>
  <li>
    Prepare by yourself, on your own initiative, a
    {' '}<a href="#truthful-mistakes-5solutions">5 solutions</a> report.
    This gives your peer additional confidence that you carried out an
    extensive fix of the root cause of the mistake he found, and keeps his
    mind at rest.
  </li>
</ul>
<p>
  It's very common that when someone points out a mistake, the receiver tries
  to explain why the mistake was done, why it's not such a big mistake, that
  such things happen and so on.
  However, at Hola we thrive on running fast and recognize that mistakes
  happen, so responses of this type become irrelevant and a sheer waste of time.
  We acknowledge making a mistake, thank him for finding it, fix the mistake and
  move on to the next big thing!
</p>

<H3 id="truthful-mistakes-badnews" text="'bad news'? Learn!">'bad news'? Learn
  from it!</H3>
<p>
  There is no 'bad news'. News makes us learn.
  Consider that if we've done good so far, and now we know something
  that we're not doing well (such as a bug, or a mistake in our strategy),
  then once we fix that problem we are on an even better path.
  Don't categorize news into 'good news' and 'bad news'.
  It's all good news, because we learn from it.<br/>
  For example; a customer tells us he is switching from Hola to a competitor.
  Is that bad news? No "this is a great opportunity to learn about where our
  service is not good enough for this customer and to improve it.
  Consider that after this our service will be better"
  we will retain more customers, and sign up new customers at a faster pace!
  If we hid this important information, for example by saying
</p>
<div cat="bad">
  the customer is switching to another vendor for internal
  political reasons which we cannot influence
</div>
<p>
  (for guys not in sales, this is a common excuse...),
  then we are losing important information that could allow us to learn and
  improve!
</p>

<H2 id="truthful-trust" text="Trustworthiness">Trustworthiness</H2>
<p>
  Every company says that trustworthiness is key in its employees.
  But why is it important to us?<br/>
  Our basic premise is that we each work independently on our tasks,
  with P2P communications between us.
  There is no manager looking over the shoulder (and if there is, then
  something is not working right).
  Therefore, we have complete trust in all of us to be doing what's right
  for the company, for carrying the company's DNA into whatever task we
  have (remember that our success is a byproduct of our DNA),
  and for identifying mistakes and issues and fixing them at a DNA level.<br/>
  Let's take that example of the salesperson who lost a customer.
  If that salesperson is untrustworthy and wants to look good by stating
  that he lost the customer due to "Internal customer politics",
  then he sets the whole company back by hiding important information,
  thereby preventing us from producing the best possible product.
  Let's also take a look at what will happen when another person from Hola
  revisits that customer and finds out the real reason why the customer left
  us. It will reflect on our communication, which from that point will be more
  cautious and less trusting. This is intolerable from a DNA perspective.<br/>
  There are second level aspects of trustworthiness and truthfulness that are
  not as apparent: read about them in the next sections on Debating and mind
  change.
</p>

<H3 id="truthful-trust-debate" text="Debating">Debating</H3>
<p>
  It's human nature to try to convince that your position is the right one.
  However, in a productive environment you need to ensure that you are
  not 'overselling' your solution and in the process are 'hiding' some of its
  pitfalls and some of the merits of the alternative.
  In our environment, presenting a view that is not neutral (for example, by not
  showing the real downsides of your proposed solution) will typically
  not convince your peers of your solution.
  It's more important you focus on the cons of your own suggestions and
  the pros of your peer's suggestions, to make your suggestion more credible:
  A good scientific theory is one that suggests an experiment to
  disprove the theory.<br/>
  At Hola, finding out the true reason for something, and fixing it,
  will result in success as a "side effect".
  Therefore, when debating an issue, show the arguments for both sides,
  as well as your conclusion.
  Your peer in the debate may show more arguments for the other side and
  eventually cause you to tilt back to the other position.
  Tilt to that other position with pride!
</p>

<H2 id="truthful-change" text="Changing our mind">Proud of changing our mind</H2>
<p>
  {' '}<a href="http://wiki.lesswrong.com/wiki/Litany_of_Tarski">Litany of Tarski</a>:
</p>
<div className="ok">
  If the sky is blue - I desire to believe that the sky is blue<br/>
  If the sky is not blue - I desire to believe that the sky is not blue.<br/>
</div>
<p>
  What seemed correct yesterday may not seem correct today.
  We commit to tracking the truth, changing as new data becomes available.
  This way progress is not stifled by yesterday's 'truth'.
  We try to have a strong opinion, but are always ready to switch it fast
  when we have new data, taking pride in changing our mind.
</p>
<p>
  In a super-fast work environment, we learn new things frequently,
  and must therefore adapt our opinions accordingly,
  fully aware that evolution brings success.
</p>

<H2 id="truthful-value" text="Customer Value">Choose to bring value to our
  customers</H2>
<p>
  There are various ways for a company to succeed, for example: by doing great
  marketing for mediocre products.<br/>
  We choose to succeed by creating products that bring great value to our
  customers (typically through technological disruptions). When considering
  our roadmap, we choose to do things that make our products bring higher value
  to the customer, rather than things that bring us shorter-term profit. Why?
  Because that's how we can succeed over the long term - by having products that
  are difficult to compete with, and customers who trust us. We are marathon
  runners, not sprinters.<br/>
  Discussions around product features should be about the value they bring to
  the customer, not the value they bring to Hola.
</p>
<div cat="good">
  Let's provide our customers with a bandwidth saving feature. They'll love it
  because it saves them money on their monthly CDN bill.
</div>
<div cat="bad">
  Let's not do this bandwidth saving feature. Our competitors don't have it,
  and it will cause our customers to stream less and us to make less revenues.
</div>

</div></Layout>
    );
}
