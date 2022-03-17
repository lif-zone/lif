import * as _jquery from 'jquery';
import Layout from '../../components/layout.js';
import anchorific from '../../components/anchorific.js';
import {dna_style} from '../../components/style.js';
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
<Layout title='LIF DNA' desc='Communication Guide' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Communication Guide</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class="content code_page">
<h1 id=consistent text="Consistent">Consistent</h1>
<p>
  <a href=/dna#dna-consistent>Be consistent</a> with the style of communication
  you receive from veterans in the company.
  <a class="why hideme" popup=why_consistent>Why?</a>
</p>

<div id=why_consistent class=popup>
  Text
</div>

<h1 id=email text="Email">Email</h1>

<h2 id=email-effective text="Effective handling">Effective handling</h2>
<p>
  We adopted several email guidelines from
  <a href=http://fortune.com/2014/09/25/googles-eric-schmidt-has-these-9-rules-for-emailing>Eric Schmidt's 9 rules for emailing</a>:
  <a class="why" popup=why-effective>Why?</a>
</p>
<div id=why-effective class="popup">
  <div class=h1>Why effective email is important?</div>
  <p>
    We minimize the amount of tools used at Spark. Email serves as bug
    tracking tool, assignment management tool and as various other tools.<br>
    Bug tracking:
  </p>
  <div class=email cat=bad>
    What seems to be the problem?

    On 19-Mar-16 08:35 AM, Uzi wrote:
    | On the CVS Search, when clicking on the changeset hyperlink - there
    | is a problem.
  </div>
  <div class=email cat=good>
    Fixed

    On 19-Mar-16 08:35 AM, Uzi wrote:
    | On the CVS Search, when clicking on the changeset hyperlink of any
    | diff - you get an error message. Please fix.
  </div>
  <p>Task Assignment:</p>
  <div class=email cat=bad>
    Let's brainstorm about it tomorrow

    On 22-Mar-2016 11:22 AM Eli wrote
    | What can we do about people not attaching tiny screenshot of their work?
  </div>
  <div class=email cat=good>
    Will be completed by this evening.

    On 22-Mar-2016 11:22 AM Eli wrote
    | Please add the tiny screenshot section to the DNA html.
  </div>
</div>
<ul>
  <li>Respond quickly</li>
  <li>When writing an email, every word matters, and useless prose
    doesn't</li>
  <li>Clean out your inbox constantly</li>
  <li>Handle email in LIFO order (Last In First Out)</li>
  <li>When you get a note with useful information, consider who else would
    find it useful</li>
  <li>When you use the Bcc (blind copy) feature, ask yourself why</li>
  <li>
    Make it easy to follow up on requests. When you send a note to someone
    with an action item that you want to track, copy yourself, then label the
    note "follow up."
  </li>
  <li>Help your future self search for stuff. Forward yourself emails along
    with a few keywords that describe its content</li>
</ul>

<h2 id=email-inbox text="Inbox">Manage your inbox</h2>
<p>
  Email responsiveness and never loosing an email (forgetting to respond)
  is critical for efficient and reliable email communication with our peers.
</p>

<h3 id=email-inbox-quick text="Respond quickly">Respond quickly</h3>
<p>
  Respond quickly to email. Many times a day check your inbox,
  and handle the 'tiny' emails immediately.
  Handle the new email in LIFO order: this improves responsiveness -
  one 'heavy' email will not block responding to 20 'tiny' emails
  coming after it.
  Also if there are many emails on the same subject (email chain),
  its easier to read them from the end-backwards.
</p>

<h3 id=email-inbox-empty text="Empty out inbox">Empty out your inbox</h3>
<a class="why" popup=why-empty>Why?</a>
<p>
  Empty out your inbox constantly: never end your day with more
  than 10 emails in your inbox.<br>
  What if you have 'heavy' email - email that requires a lot
  of work (e.g. writing a complex module), or cannot be handled immediately
  (e.g. switching hosting provider next month)?
  Move it to long-term task queues, such as
  <a href=/dna/dict#version_plan>version plan</a> or your calendar.
  In such cases email the requestor the target date you planned for
  completing this task, and when that date arrives - send a completion
  email (or a postponing email, if you decided you would like to postpone).
</p>
<div id=why-empty class="popup">
  <div class=h1>Why keep the inbox empty?<br>
    Why not use colors/unread?</div>
  <p>
    Managing the inbox by colors and by read vs. unread messages is error
    prone.<br>
    In such an inbox it is sometimes hard to see what was dealt with,
    what is more important and what can be completely discarded.
  </p>
  <div cat=bad>
    <table class=inbox_xmp>
      <tr class=green_bold>
        <td>Re: Following out talk from today, please suggest a new</td>
        <td>Ziv Perry</td>
        <td>22-Mar-2016 9:22</td>
      </tr>
      <tr class=red_normal>
        <td>Re: "jwplayer bw saving": is this section in your VP</td>
        <td>Arik Gilad</td>
        <td>21-Mar-2016 6:22</td>
      </tr>
      <tr class=blue_bold>
        <td>"Following out talk from today, please suggest a new"</td>
        <td>Derry Shribman</td>
        <td>21-Mar-2016 20:46</td>
      </tr>
      <tr>
        <td>Re: loader show data progress: done</td>
        <td>Boyang Wang</td>
        <td>21-Mar-2016 13:44</td>
      </tr>
      <tr class=green_normal>
        <td>Re: CVS Search -> CVS Diff -> changeset hyperlink doe</td>
        <td>Nir Borenshtein</td>
        <td>21-Mar-2016 10:36</td>
      </tr>
      <tr class=blue_normal>
        <td>Re: CVS Search -> CVS Diff -> changeset hyperlink doe</td>
        <td>Nir Borenshtein</td>
        <td>21-Mar-2016 10:30</td>
      </tr>
      <tr class=red_bold>
        <td>Re: Spark support for chromeOS</td>
        <td>Derry Shribman</td>
        <td>20-Mar-2016 16:24</td>
      </tr>
      <tr class=orange_normal>
        <td>Re: Spark support for chromeOS</td>
        <td>Moshe Belostotsky</td>
        <td>20-Mar-2016 16:19</td>
      </tr>
      <tr class=orange_bold>
        <td>Fwd: Re: Fwd: ready for commit: loader</td>
        <td>Boyang Wang</td>
        <td>20-Mar-2016 15:15</td>
      </tr>
    </table>
  </div>
  <p>Emptying the inbox leaving only items to be dealt with makes things
    easy</p>
  <div cat=good>
    <table class=inbox_xmp>
      <tr>
        <td>"Following out talk from today, please suggest a new"</td>
        <td>Derry Shribman</td>
        <td>21-Mar-2016 20:46</td>
      </tr>
      <tr>
        <td>Re: "jwplayer bw saving": is this section in your VP</td>
        <td>Arik Gilad</td>
        <td>21-Mar-2016 6:22</td>
      </tr>
      <tr>
        <td>Re: Rapid increment - email part</td>
        <td>Nir Borenshtein</td>
        <td>16-Mar-2016 14:18</td>
      </tr>
    </table>
  </div>
</div>

<h3 id=email-inbox-read text="Don't rely on 'read'">Archive. Don't rely on
  'read' status</h3>
<p>
  Move emails from inbox to Archive (or Trash) after handling.
  Don't rely on 'read' status (or any other tags or labels) to
  mark which email you handled and which not.
  GMail and Thunderbird have a 1-click "Send+Archive" button to
  make this easy.<br>
  Why? Every time we investigate the root cause of email loss
  (someone missing out an email - forgetting to respond on it),
  we found the cause was relying on the 'read' status or some label
  inside the inbox as an indicator for handled email.
</p>

<h3 id=email-inbox-sort>Archive. Don't sort.</h3>
<p>
  Don't sort mail into folders for easing later lookups and searchs.
  Just click Archive - so it all goes into one large Archive folder.
  Just like in GMail: archive all handled email to Archive folder, and
  if-and-when you need to lookup an email, use the powerful search capability.
</p>

<h3 id=email-inbox-filters>No filters</h3>
<p>
  Instead of filtering incoming email, just remove yourself from notifications
  that are not relevant to you. If you don't know how to un-subscribe from
  a certain system, ask the IT team to un-subscribe you.
</p>

<h3 id=email-inbox-online>Online. No local folders</h3>
<p>
  Email must all be online, available from all devices.
  Therefore never use local storage folders - which are offline and not
  available from all devices.
</p>

<h2 id=email-minimal text="Minimal">Minimal</h2>
<p>
  <a href=/dna#effective-minimal>Be minimal</a>:
  shorter emails, less emails, and prevent email threads by writing
  better emails.
</p>

<h3 id=email-minimal-style text="No styling">No styling - pure plain text</h3>
<p>
  Do not send 'rich' HTML emails: no fonts, no colors, no
  bold/italic/underlines. Nothing. Just plain text (attachments are ok).<br>
  Styling makes the emails easily corrupt and un-viewable on different
  email clients, and also shift the focus from content to presentation.
  At Spark we try to focus purly on content and value.
</p>

<h3 id=email-minimal-recipients text="Minimal recipients">Minimal
  recipients</h3>
<p>
  Before sending an email, go through the <code>To</code> and <code>Cc</code>,
  validate minimal list of people in <code>To</code>
  (best if only one person with the action item), and minimal
  people in <code>Cc</code>.<br>
  If it is a reply, rethink before sending: do all these
  people have to be included?<br>
  Just about to send a mass email out to an 'all' mailing list? Think again;
  can you avoid it by sending to only specific people?. Is the info really
  needed by everyone? Perhaps you can provide the info 'on-demand' by putting
  comments in code, explanations in web pages where relevant, or adding info
  to a howto.
</p>

<h3 id=email-minimal-to text="Single To">Single <code>To</code></h3>
<p>
  Generally avoid sending an email with more than one person in
  <code>To</code>. If the email contains action items for multiple people (and
  thus multiple people in <code>To</code>) - then clearly mark on every AI who
  is the relevant person who needs to act/respond on that item.
</p>

<h4 id=email-minimal-recipients-filter text="Subject filter">Subject
  filter</h4>
<p>
  If the email is not relevant to all, but you don't know exactly to who - so
  you cannot reduce the recipient list, add a "filter" (who should read/ignore
  this email) message in the Subject, or the first line of the email, before
  the "Hi".<br>
  Example of a filter:
</p>
<div class=email cat=good>
  Subject: Israelis only: Changes in office parking
</div>

<h3 id=email-minimal-simplified>Simplified technical English</h3>
<p>
  Use only
  <a href=https://en.wikipedia.org/wiki/Simplified_Technical_English>simple technical English</a>.
  Avoid using "political" English. Excessive use of words, explanations that
  refer to the emotions and beliefs are making your arguments obscure and might
  turn the discussion to a long and tedious one.<br>
  This statement:
</p>
<div class=email cat=bad>
  As a total we are talking about $5000 monthly.
</div>
<p>Should be written like this:</p>
<div class=email cat=good>
  Total earn: $5000 monthly.
</div>
<p>These should not be written at all:</p>
<div class=email cat=bad>
  I see your point and the need of numbers, but I don't have exact numbers.
</div>
<div class=email cat=bad>
  I feel we are on the right track with this activity.
</div>

<h2 id=email-attach>Attachments summary</h2>
<p>
  Whenever attaching a document (text, spreadsheet or presentation), write in
  the email a tiny summary. The recipient then has the choice not to open the
  attachment.
</p>
<div class=email cat=bad>
  See attached document with site click rate results.
</div>
<div class=email cat=good>
  we are up from 30%->35% in "install" click rate. See attached.
</div>

<h2 id=email-action text="Action items">Action items (AI)</h2>

<h3 id=email-action-discuss text="Discussion to Action">Make discussions
  actionable</h3>
<p>
  Briefly state what the information is, what you learn from it, and what your
  next action will be.
  Don't:
</p>
<div cat=bad>
  According to Google Analytics, our traffic on the index.html
  went up 20% and so did the bounce rate.
</div>
<p>
  Do:
</p>
<div cat=good>
  According to Google Analytics, our traffic on the index.html
  went up 20% and so did the bounce rate.
  I will work on reducing our bounce rate.
  Avi: please find the root cause of the traffic increase so that we can
  learn how to leverage it further.
</div>

<h3 id=email-action-mark text="Mark action items">Mark & clarify action items</h3>
<p>
  If the email has no AI, state that at the top (e.g.
  <a href=#word-kw-fyi>FYI</a>).
  If there are AIs to only a part of the receivers, put those people in
  the 'To' and state at the top of the email who has the actions.
  If there multiple AIs or multiple AI owners, list the AIs each with the
  schedule and owner name.
</p>
<div class=email cat=good>
  Hi,

  Country selector had a bug. We reverted it. This is what we need
  to do to fix it today and re-release:
  - Natan: Fix the performance bug by this afternoon.
  - Moshe: Add the unit test for the country selector feature by noon.
  - Natan: Measure the performance after bug fix and feature are ready,
    by this evening - Natan Deploy feature today.

  Natan
</div>

<h3 id=email-action-immediate text="Immediate action">Immediate action</h3>
<p>
  If the action requested can be done immediately, do it and reply with a
  one-liner email as soon as it is completed.
  <a href=#reply-feedback>Send a diff URL</a> (or attach a tiny screenshot if
  applicable) in order to receive immediate feedback.
</p>
<div class=email cat=good>
  From: eli
  To: mike
  Subject: Re: issue with your last commit

  FIXED
  http://web.holaspark.com/cvs/zon/pkg/www/hola/pub/dna/dict.html?r1=1.12&r2=1.13

  On 12-Mar-16 08:35 AM, Mike wrote:
  | Hi,
  |
  | Your last commit fails the unittest.
  |
  | Mike
</div>

<h3 id=email-action-delayed text="Delayed action">Delayed action</h3>
<p>
  If the action requested is not to be done immediately, respond quickly with
  the <a href=/dna#immediate-priorities>expected time of completion</a> and if
  possible with a partial solution or response.<br>
  Log the action in your version plan. Make sure to track it. If you will not
  be able to complete it on time send an email updating with the new
  expected time. Once you've completed - send an email notifying the requester
</p>
<div class=email cat=good>
  From: eli
  To: mike
  Subject: Re: Resource graph

  Completed and deployed.

  |On 13-Mar-16 14:29 PM Eli wrote:
  | Hi,
  |
  | I've got delayed. Expecting to finish it by noon tomorrow.
  |
  | Eli
  |
  ||On 12-Mar-16 08:40 AM Eli wrote:
  || Hi,
  ||
  || I'll finish it by tomorrow evening.
  ||
  || Eli
  ||
  ||On 12-Mar-16 08:35 AM, Mike wrote:
  ||| Hi,
  |||
  ||| Please give priority to the resource graph. I need it urgently.
  |||
  ||| Mike
</div>

<h3 id=email-action-partial text="Partial completion">Partial completion</h3>
<p>
  If the action requested was partially completed, reply with the status and
  notify the requester of the full completion time. Continue the request
  handling the same as you would with a
  <a href=#email-action-delayed>delayed action item</a>.
</p>

<h2 id=email-new text="New email">New email</h2>

<h3 id=email-new-template text="Template">Template</h3>
<p>
  Always include a <code>Hi</code> opening and sign your first name at the
  end, give meaningful subject, and concise body.<br>
</p>
<div class=email cat=bad>
  From: nir
  To: derry
  Subject: urgent!

  Good morning Derry!
  Could it be that there was a problem in your commit that somehow
  caused memory to increased on zs-main server group?

  You are welcome to come and discuss.
  Best regards,
  Nir Sagiv
  R&D, Spark
  Mobile +972-54-5551212
  Skype: nirsagiv
  Hangouts: nir.sagiv@gmail.com
</div>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: Reverted your commit due to CRIT zs-main.mem_usage

  Hi,

  Please see what caused it, fix, and re-commit.
  If this commit was not the cause, please find what was the cause.

  Nir
</div>

<h3 id=email-new-subject text="Informative subject">Informative clear
  subject</h3>
<p>
  Give an informative, short and concise subject to the email.<br>
  The subject should briefly describe the contents of the email. If the email
  is a little long, use the first line to explain it in one sentence.
  Never send an email without a subject.
  If you received an email with a bad or missing subject, modify the
  subject when you respond.
</p>
<div class=email cat=bad>
  Subject:
</div>
<div class=email cat=bad>
  Subject: URGENT!
</div>
<div class=email cat=good>
  Subject: Improving the install flow
</div>
<div class=email cat=good>
  Subject: Reverted your commit due to CRIT zs-main.mem_usage
</div>
<p>
  If it might not relate to all people, explain in the
  subject or first line
  <a href=#email-minimal-recipients-filter>who should not read it</a>.
</p>

<h3 id=email-new-greeting text="Tiny Greeting">Tiny Greeting</h3>
<p>
  Always include a <code>Hi</code> opening, and a spacing line after it.
  Why so short? <a href=/dna#effective-minimal>Minimalism</a>.
  Why always include a greeting?
  in long email threads
  the <b>greeting/signature</b> are used as <b>begin/end</b>
  markers to know where each email begins and ends, and who wrote what.
</p>
<div class=email cat=bad>
  Good morning,
</div>
<div class=email cat=bad>
  How are you doing?
</div>
<div class=email cat=bad>
  Hello,
</div>
<div class=email cat=bad>
  hi,
</div>
<div class=email cat=good>
  Hi,
</div>
<p>
  If the email has more than one person on <code>To</code>, but you want
  major attention from one of the people out of the <code>To</code> list,
  you can add his name in the greeting.
</p>
<div class=email cat=good>
  Derry,
</div>
<div class=email cat=good>
  Hi Derry,
</div>

<h3 id=email-new-tiny text="Tiny one line">Tiny one line emails</h3>
<p>
  If your whole email content can fit one line, then just send it in
  the <code>Subject</code>, with and empty body.
</p>
<div class=email cat=bad>
  From: nir
  To: derry
  Subject: I will be on vacation tomorrow

  Hi Derry,

  I will be on vacation tomorrow.

  Nir
</div>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: I will be on vacation tomorrow
</div>
<p>
  If you have 1 line of content, you can skip the <code>Hi</code> greeting.
</p>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: I will be on vacation tomorrow

  Hi Derry,

  I will be back in the office on Sunday morning. Available on phone+email.

  Nir
</div>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: I will be on vacation tomorrow

  I will be back in the office on Sunday morning. Available on phone+email.
</div>

<h3 id=email-new-list text="Simple lists">Simple lists</h3>
<p>Use '-' by default for bullets. Don't number bullets unless you specifically
  refer to them.</p>
<div class=email cat=bad>
  Hi,

  Here are the files I've modified:
  1. dna.html
  2. email.html
  3. dict.html

  Haim
</div>
<p>If the bullets are "status report" of tasks, use the style defined for
  <a href=/dna/plan_code#vp-legend>version plan</a>.</p>
<div class=email cat=bad>
  Hi,

  I've almost completed the task.
  I've completed:
  - API changes to the module
  - Database functionality changes
  I've still got to do:
  - GUI enhancement

  Jim
</div>
<div class=email cat=good>
  Hi,

  Here is what I've captured from the call with the customer:

  - They would like to start the trial next week
  - They currently do not require any changes
  - If the trial is successful - they plan to deploy in two months

  Benny
</div>

<h3 id=email-new-subject_only text="Subject only email">Subject only email</h3>
<p>When possible to compose a clear email without a body - do it.</p>
<div class=email cat=bad>
  From: joe
  To: jake
  Subject: Vacation

  Hi,

  I'll be taking tomorrow off.

  Joe
</div>
<div class=email cat=good>
  From: joe
  To: jake
  Subject: I'll be taking tomorrow off
</div>

<h3 id=email-new-signature text="Signature">Signature</h3>
<p>
  <a href=/dna#effective-minimal>Short emails are much appreciated</a>.
  Long multi-line HTML signature, with fonts
  and lots of info and links just make email threads overly long and hard to
  read.
</p>

<h4 id=email-signature-short text="Short signature">Short signature</h4>
<p>
  Just your personal name. Nothing else!<br>
  Use this for 99% of your emails: all internal communications,
  and external communications which are 2nd and onwards email with that
  customer, such as in replies to email threads.
</p>
<div class=email cat=bad>
  Best regards,

  Nir
</div>
<div class=email cat=good>
  Nir
</div>

<h4 id=email-signature-long text="Long signature">Long signature - avoid
  it!</h4>
<p>
  Try to avoid it. In any case, never use long signatures in internal
  emails.<br>
  Use long signatures when this is your first communications with an external
  contact, since we try to give direct personal contact details to
  external people we communicate with (such as phone, IM...).
  For repeating communications with the same external contact, switch to
  the short signature.<br>
  Create your long signature using the
  <a href=http://web.holaspark.com/email_signature>signature designer</a>.
  This validates it matches our well-defined format of one single long
  line.
</p>
<div class=email cat=good>
  Nir Sagiv | R&D, Spark | +972-54-5551212 | Skype: nirsagiv | Hangouts: nir.sagiv@gmail.com
</div>

<h3 id=email-new-external text="External template">External template</h3>
<p>
  External emails may have a little more relaxed greeting: you may
  replace <code>Hi</code> with <code>Hi Brad</code>.
  You may also decide to insert your
  <a href=#email-signature-long>Long signature</a> instead of the
  <a href=#email-signature-short>short signature</a>.
  We recommend to normally use the long signature in the initial communication
  with that recipient, and later on move to short signatures for same
  recipient.
  Be personal: If further vocal communication needed, give them your personal
  mobile number/Skype/hangouts/etc so that they can contact you directly.
</p>
<div class=email cat=good>
  From: nir
  To: brad@out-there.com
  Subject: reduce json config size

  Hi Brad,

  ...
  ...

  Regards,
  Nir
  --
  Nir Sagiv | R&D, Spark | +972-54-5551212 | Skype: nirsagiv | Hangouts: nir.sagiv@gmail.com
</div>

<h3 id=email-new-action_template text="Action required template">Action
  required email template</h3>
<p>
  Email subject should contain "ACTION REQUIRED:" in capital letters.<br>
  Email should contain defined steps to achieve the action.<br>
  Email should contain a deadline to complete the action.
</p>
<div class=email cat=good>
  From: ran
  To: all
  Subject: ACTION REQUIRED: changing your password

  Hi,

  Please change your password on your PC/Laptop and virtual machine once
  receiving this email, and no later than 18:00 today.
  Notify me/Derry immediately if you encounter any password related
  issues.

  - open up cygwin
  - type the following:
    $ net user $USERNAME &lt;password&gt;
  - execute the following and provide the new password for any password request:
    $ cvs login

  Ran
</div>

<h3 id=email-new-incident_template text="Incident report template">Incident
  report email template</h3>
<p>
  Email subject should clearly summarize the incident.<br>
  Email should contain a full timeline of relevant events.<br>
  Email should state the full impact of the incident
  (servers/customers/downtime).<br>
  Email should identify all the problems that lead to the incident, and
  suggested solutions.
</p>
<div class=email cat=good>
  From: josh
  To: nir
  Subject: Incident report: summary of incident

  Hi,

  Short summary describing what happened at a high level, what actions were
  taken, and the current status of the issue.

  Timeline UTC (2019-05-19):
  - 12:47:51 - commit
  - 13:15:34 - servers released
  - 13:27:23 - noticed problems
  - 13:29:56 - checking dashboard
  - 13:39:00 - ask for rollback
  - 13:49:23 - rollback done
  - total outage: 34m

  Affected customers: ...

  AIs: list of remaining problems if the issue is not fully resolved

  Suggestions for improvements:
  - Detail all the ways this could have been prevented this from happening.
  - Any other improvements to prevent similar incidents from happening again.

  Josh
</div>

<h2 id=email-reply text="Replies">Replies</h2>

<h3 id=email-reply-untouched text="Untouched original">Untouched original</h3>
<p>
  Leave the original message untouched, at the end of the email, after your
  signature. If this reply turns into an email thread, everyone will have full
  information. Make sure you are using <dfn>Reply All</dfn> keeping everybody
  in the loop.
</p>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: reduce json config size

  Hi,

  ...
  ...

  Nir

  On 02-Nov-15 10:15 AM, Derry wrote:
  | Hi,
  |
  | What are the files you have modified?
  | ...
  | ...
  |
  | Derry
</div>

<h3 id=email-reply-quotation text="Email reply quotation">Email reply
  quotation</h3>
<p>
  When you use quotation in reply to emails,
  <u>leave a line between the quotation and your answer</u>
  <a class="why" popup=why-one-line>(Why?)</a>.
  When answering a question: feel free to
  <u>minimize or rephrase the quotation</u> to focus and improve clarity.
</p>
<div id=why-one-line class="popup">
  <div class=h1>Why one line between quotation and answer is important?</div>
  <p>
    We keep one line space between quotation and answer in order to prevent
    mixing between the two when viewed in a small window.
  </p>
</div>
<p>BAD example of NOT leaving en empty line between the quote and your answer:</p>
<div class=email cat=bad>
  From: mohammad
  To: derry
  Subject: Re: email responses

  Hi,

  | I looked at the commit log. What are the files
  | you have modified? I think its urgent to release them. When will
  I modified all of the files related to email quotation.

  | you have modified? I think its urgent to release them. When will
  | this happen?
  In the next 30 minutes. I will update you once released.

  Mohammad

  On 16-Dec-15 05:15 PM, Derry wrote:
  | Hi,
  |
  | I looked at the commit log. What are the files
  | you have modified? I think its urgent to release them. When will
  | this happen?
  |
  | Derry
</div>
<p>BAD example of putting your name before your answer:</p>
<div class=email cat=bad>
  From: mohammad
  To: derry
  Subject: Re: email responses

  Hi,

  | I looked at the commit log. What are the files
  | you have modified? I think its urgent to release them. When will

  [mohammad]: I modified all of the files related to email quotation.

  | you have modified? I think its urgent to release them. When will
  | this happen?

  [mohammad]: In the next 30 minutes. I will update you once released.

  Mohammad

  On 16-Dec-15 05:15 PM, Derry wrote:
  | Hi,
  |
  | I looked at the commit log. What are the files
  | you have modified? I think its urgent to release them. When will
  | this happen?
  |
  | Derry
</div>
<p>GOOD example of how quote and answer should look like. A quote then empty
  line, then your answer:</p>
<div class=email cat=good>
  From: mohammad
  To: derry
  Subject: Re: email responses

  Hi,

  | What files have you modified?

  I modified all of the files related to email quotation.

  | When will you release them?

  In the next 30 minutes. I will update you once released.

  Mohammad

  On 16-Dec-15 05:15 PM, Derry wrote:
  | Hi,
  |
  | I looked at the commit log. What are the files
  | you have modified? I think its urgent to release them. When will
  | this happen?
  |
  | Derry
</div>

<h4 id=email-reply-answer text="Answering questions">Answering questions</h4>
<p>
  When you have received several questions on an email, give an answer to all
  of them. Answer each question separately - quoting the original question.
</p>
<div class=email cat=bad>
  From: itzik
  To: natan
  Subject: Re: MP changes

  Hi,

  I added AVI streaming capability. Already deployed.

  Itzik

  On 14-Mar-16 06:12 PM, Natan wrote:
  | Hi,
  |
  | What were the changes you've made to the MP? Did you test it for
  | performance? When will it be deployed?
  |
  | Natan
</div>
<div class=email cat=good>
  From: itzik
  To: natan
  Subject: Re: MP Changes

  Hi,

  | What were the MP changes?

  I've added AVI streaming capability.

  | Did you test for performance?

  Yes, the results were as expected.

  | When will it be deployed?

  Already deployed.

  itzik

  On 14-Mar-16 06:12 PM, Natan wrote:
  | Hi,
  |
  | What were the changes you've made to the MP? Did you test it for
  | performance? When will it be deployed?
  |
  | Natan
</div>

<h4 id=email-reply-referencing text="Referencing">Referencing</h4>
<p>
  When referencing previous items from the current or from a different email
  thread, quote the original item to spare the recipients the search for that
  item.
</p>
<div class=email cat=good>
  From: efi
  To: yossi
  Subject: Answer to the customer

  Hi,

  With regards to Dhinakarraj's question:

  | When will Spark be able to provide the lower latency feature?

  We will be able to provide this two days from now.

  Efi
</div>

<h3 id=email-reply-one text="One line replies">One line replies</h3>
<p>Single line emails do not require <code>Hi</code> and signature.</p>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: Re: reduce json config size

  Task was assigned to vladimir.

  On 02-Nov-15 10:15 AM, Derry wrote:
  | ...
  | ...
</div>

<h3 id=email-reply-done>DONE replies</h3>
<p>
  We usually using such replies to tasks we received,
  <a href=#word-kw-done>done</a>/<a href=#word-kw-fixed>fixed/implemented</a>
  and deployed.
</p>
<div class=email cat=bad>
  From: nir
  To: derry
  Subject: Re: reduce json config size

  Done

  On 02-Nov-15 10:15 AM, Derry wrote:
  | ...
  | ...
</div>
<div class=email cat=bad>
  From: nir
  To: derry
  Subject: Re: mdoc build is broken

  Fixed

  ... orig email ...
</div>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: Re: reduce json config size

  DONE

  On 02-Nov-15 10:15 AM, Derry wrote:
  | ...
  | ...
</div>
<div class=email cat=good>
  Subject: RE: mdoc build is broken

  FIXED
  http://web.holaspark.com/cvs/zon/pkg/svc/mdoc/pub/deploy/www_cdn_b.html?r1=1.28&r2=1.29

  ... orig email ...
</div>

<h3 id=email-reply-add_to_vp>Added to VP replies</h3>
<p>
  Sometimes, you cannot act immediately.<br>
  In such cases log it in your version plan and provide a tentative optimistic
  quick 10 seconds estimation, when will you handle it and when it will be
  <a href=#email-reply-done>DONE</a>.
</p>
<div class=email cat=good>
  From: natan
  To: nir
  Subject: Re: change in DNA email

  Added to VP. Will start next Sun, and finish by Mon.

  On 15-Nov-16 10:15 AM, Nir wrote:
  | ...
  | ...
</div>

<h3 id=email-reply-why>Why replies</h3>
<p>
  Once getting a 'why' email you need first to understand whether it was a
  mistake or not - this is the first step to take a productive action, and it
  should be the first line in your reply. e.g. <code>NOT A MISTAKE</code> or
  <code>MISTAKE</code>.<br>
  In case you think it was not a mistake, explain why makes you think this way
  - <a href=/dna#transparent-precise-data>provide facts and data</a>.
  In case you understood it was a mistake, explain how you are going to fix it
  as well as prevent others from doing the same.
</p>
<div class=email cat=bad>
  From: nir
  To: natan
  Subject: Re: No personal greeting
  Hi,

  The demo video was prepared just before deciding on adding a personal greeting.

  Adding a personal greeting now to be added to the video for next times.

  Nir

  On 15-Nov-16 10:15 AM, Nir wrote:
  | Hi
  |
  | Please explain why you sent email to T1 customer without personal greeting?
  |
  | Natan
</div>
<div class=email cat=good>
  From: nir
  To: natan
  Subject: Re: No personal greeting
  Hi,

  MISTAKE.

  I did not understand correctly what "highly personalized content" really
  means, and choose to use an old video, without a personal greeting.
  I added a personal greeting to this video as well as to all other existing T1
  videos I prepared in the past.

  I've talked to all the leadgens that deal with T1 customers and told them
  my mistake asking them to fix all their existing videos as well.
  BTW, the new record video procedure already contains instructions to record a
  personal greeting so it won't happen with new recorded videos.

  Nir

  On 15-Nov-16 10:15 AM, Nir wrote:
  | Hi
  |
  | Please explain why you sent email to T1 customer without personal greeting?
  |
  | Natan
</div>

<h3 id=email-reply-feedback text="Reply for feedback">Reply for feedback</h3>
<p>
  When you've received an action item and you're email reporting on its
  completion or progress, attach a visual aid to receive immediate feedback on
  the result.
</p>
<ul>
  <li>
    When reporting on completion or progress of a GUI change, create a
    <a href=/dna/dict#capture>tiny screenshot or animated GIF</a> of the
    result, highlight your modifications (if needed) and attach it to your
    response.
  </li>
  <li>When reporting on completion of code modification - send a diff URL of
    this code.</li>
</ul>
<p>
  This will
  <a href=/dna#incremental-feedback>minimize the iterations and will speedup process</a>.
</p>
<div class=email cat=good>
  From: mike
  To: derry
  Hi,

  Attached is the screenshot of the change. Requested to release it now.

  Mike

  On 15-Mar-16 2:12 AM, Derry wrote:
  | Hi,
  |
  | See how in /dashboard the 'contents' is very close to the navbar.
  | Please also make the BAT pages that the content is much closer to the
  | navbar. In the main page also make the table much closer to the filters.
  |
  | Derry
</div>
<p>
  Choose
  <a href=/dna#transparent-precise>specific wording</a> and provid ETAs for
  tasks you do rather than using vague time frame.
</p>
<div cat=bad>
  I'm investigating it now and will report back soon.
</div>
<p>
  "Soon" is hard to work with. We give ETAs, and later update if we are not
  delivering on time to advise of the new ETA.
</p>
<div cat=good>
  I'm investigating it now and will report back on 17:00.
</div>

<h3 id=email-reply-cc text="To vs. Cc recipients">To vs. Cc recipients</h3>
<p>
  If the email is mainly to one person, but there is AIs for other, anyone with
  AI must be on the <code>To</code> list (never <code>Cc</code>).
  In such a case add to the <code>Hi</code> the name of the main
  recipient.
</p>
<div class=email cat=good>
  From: derry
  To: avi, or
  Cc: nir
  Subject: Re: comments from my un-install / re-install of Spark

  Hi Avi, (Or - one AI for you too)

  Overall the new installation is very smooth.  Nice work.
  ...
  ...
</div>

<h3 id=email-reply-add text="Adding people to the discussion">Adding people to
  the discussion</h3>
<p>
  In case you would like to add more people to the discussion (email thread),
  use 'Reply All' and add them to the
  <a href=#reply-cc>Cc or To</a> as well as notify everybody on
  their addition.
</p>
<div class=email cat=good>
  From: nir
  To: derry
  Cc: romank
  Subject: Re: reduce json config size

  +romank

  On 02-Nov-15 10:15 AM, Derry wrote:
  | ...
  | ...
</div>
<p>
  Or answering, while adding to the discussion:
</p>
<div class=email cat=good>
  From: nir
  To: derry
  Cc: romank
  Subject: Re: reduce json config size

  Hi, (+romank)

  ...
  ...

  Nir

  On 02-Nov-15 10:15 AM, Derry wrote:
  | ...
  | ...
</div>

<h3 id=email-reply-remove text="Removing people from the discussion">Removing
  people from the discussion</h3>
<p>
  If you would like to remove non-relevant people from the discussion, use
  'Reply All' and remove them from Cc. Then add to the email that they were
  removed.
</p>
<div class=email cat=good>
  From: nir
  To: derry
  Subject: Re: reduce json config size

  Hi, (-romank)

  ...
  ...

  Nir

  On 02-Nov-15 10:15 AM, Derry wrote:
  | ...
  | ...
</div>

<h1 id=im text="Instant Messaging">Instant messaging</h1>
<p>
  IM is an interactive way to communicate remotely. You need to respond fast
  and be <a href=/dna#transparent-precise>precise and specific</a> to allow a
  fast flow of conversation.
</p>

<h2 id=im-fast_response text="Fast response">Fast response</h2>
<p>
  Respond fast, like you are talking f2f to your peer. Remember he cannot see
  you, so any other reaction but text message is not acceptable.<br>
  So, possible reactions to several scenarios:
</p>
<ul>
  <li>Do not know the answer to a question, text "do not know"</li>
  <li>Need some time to look for an answer, text "looking"</li>
  <li>Need to search the Internet to bring some data, text "searching"</li>
  <li>Got a task and you are going to do it, text "ok" or "added to VP"</li>
</ul>

<h2 id=im-meaningful text="Meaningful">Meaningful and actionable</h2>
<p>
  Don't just say 'hi' as first message. Say what you want!
</p>
<div cat=bad>
  me: Hi<br>
  arik: Hi - what do you want?<br>
  me: Can you check broken link on BAT?
</div>
<div cat=good>
  me: Hi - can you check broken link on BAT?<br>
  arik: checking
</div>

<h2 id=im-short_text text="Short text">Short text</h2>
<p>
  Minimize your text to include only relevant data. Be
  <a href=/dna#transparent-clarity>accurate and clear</a>.
</p>
<div cat=bad>
  me: Hi Arik, r u there?<br>
  arik: what's wrong?<br>
  me: batlinux642<br>
  arik: what happened?<br>
  me: batlinux642 is broken. did you break it?
</div>
<div cat=good>
  me: batlinux642 is broken. did you break it?<br>
  arik: checking<br>
  arik: yes it's me. fixing it in 2 min.
</div>
<div cat=bad>
  arik: I need you to do some testing<br>
  arik: It is blocking me<br>
  me: few minutes
</div>
<div cat=good>
  arik: I need you to do some testing<br>
  arik: It is blocking me<br>
  me: talking to roman, few minutes
</div>

<h2 id=im-identify text="Identify yourself">Identify yourself</h2>
<p>
  We are using different messaging tools that cover our identity, e.g using
  WhatsApp from an on-call phone, using single Skype account by several people
  etc. Since we're <a href=/dna#individual-p2p-direct>working p2p</a> it is
  important to identify yourself.
</p>
<div cat=bad>
  deploy: batlinux642 is broken. did you break it?<br>
  arik: who is it?<br>
  deploy: nir<br>
  arik: checking<br>
  arik: yes it's me. fixing it in 2 min.
</div>
<div cat=good>
  deploy: it's nir. batlinux642 is broken. did you break it?<br>
  arik: checking<br>
  arik: yes it's me. fixing it in 2 min.<br>
  arik: fixed
</div>

<h2 id=im-notifications text="Notifications">Notifications</h2>
<p>
  Set your skype 'mood' according to your current status. This way, it will be
  easier for your peers to know if you are available.
</p>
<p>
  Update with an away status
</p>
<div cat=good>
  Away till 16:00
</div>
<p>
  Update that you are on a vacation
</p>
<div cat=good>
  Vacation till 29-Aug-2016
</div>
<p>
  Update that you are at lunch
</p>
<div cat=good>
  At lunch
</div>
<p>
  Update if you are working from home
</p>
<div cat=good>
  WFH
</div>

<h1 id=task text="Tasks">Tasks</h1>
<p>
  Being productive remotely (alone, no one sitting next to you)
  is much harder than in the office (together with your peers).
  Due to this, very few companies work completely distributed,
  where every developer is in his home, in a different city and country.
  To be able to succeed in being productive, in spite remoteness,
  requires meticulous communications of tasks, during the complete
  task life span.<br>
  You have a small question? You cannot just turn around and ask
  your peer a question (... which happens to also be your office-mate) -
  your peer may be 10 timezones away from you.
  So you must reduce round-trips, increase transparency by sending
  many regular updates, and be quick on feedback.
</p>

<h2 id=task-headsup text="Heads up">Heads up</h2>
<p>
  Planning on starting a new task? Try to think who may be
  relevant/interested, and email them a heads up about the task,
  and when you plan to actually start working on it, and when you
  plan to complete it.
</p>

<h2 id=task-delay text="Delays and cancellation">Delays and
  cancellation</h2>
<p>
  You told you will do something and you decided to delay the start
  of the task or you decided to cancel? email the relevant people on
  this change.
</p>

<h2 id=task-start text="Started working on it">Started working on it</h2>
<p>
  Email relevant people that you started, and your updated estimation
  of when you plan to complete.
</p>

<h2 id=task-incremental text="Incremental/partial results">
  Incremental/partial results</h2>
<p>
  You have something basically working - email a screenshot!
  Offer people to connect up with screen-sharing and play around with
  it.
  Even before its fully written, passes unit-tests, ready for commit...
  You will receive feedback eariler this way.
</p>

<h2 id=task-completed text="Completed">Completed</h2>
<p>
  Once the task is completed and deployed, email relevant peers
  send some screenshots, link to commit, the URL they can see this
  feature and play around with it.
</p>

<h1 id=word text="Wording">Wording</h1>
<p>
  Use simplified technical english, not 'political english'.
</p>

<h2 id=word-kw text="Keywords">Keywords</h2>

<h3 id=word-kw-urgent text="URGENT">URGENT</h3>
<p>
  Should normally be 1st word in subject, for things that require an
  action that same day.
  Typically we also call the person up directly on phone/im.
</p>
<div class=email cat=bad>
  Subject: There is an URGENT problem with stats
</div>
<div class=email cat=good>
  Subject: URGENT: stats not working - needs to be fixed now
</div>

<h3 id=word-kw-ai text="AI">AI (action item)</h3>
<p>
  See the <a href=#email-action>AI</a> section for examples.
</p>

<h3 id=word-kw-ar text="ACTION REQUIRED">ACTION REQUIRED</h3>
<p>
  When there is a tiny specific & immediate action that needs to be done.
</p>
<div class=email cat=bad>
  Subject: Please change your passwords today
</div>
<div class=email cat=good>
  Subject: ACTION REQUIRED: change today your passwords
</div>
<div class=email cat=bad>
  Subject: You wont be able to build the tree unless you update VM
</div>
<div class=email cat=good>
  Subject: ACTION REQUIRED: run 'zupdate' to update your VM (tree build change)
</div>
<div class=email cat=bad>
  Subject: There is a new parking RFID sticker. You can come to me to get it.
</div>
<div class=email cat=good>
  Subject: ACTION REQUIRED: There is a new parking RFID - come to me to get it
</div>

<h3 id=word-kw-done text="DONE">DONE</h3>
<p>
  Normally as a response to an action item email. Can be used as a single
  word response.
</p>
<div class=email cat=good>
  Subject: RE: improve flow of install

  DONE

  ... orig email ...
</div>

<h3 id=word-kw-fixed text="FIXED">FIXED</h3>
<p>
  Similar to <a href=#word-kw-done>DONE</a>, but refers to a problem that
  was fixed.
</p>
<div class=email cat=good>
  Subject: RE: mdoc build is broken

  FIXED
  http://web.holaspark.com/cvs/zon/pkg/svc/mdoc/pub/deploy/www_cdn_b.html?r1=1.28&r2=1.29

  ... orig email ...
</div>

<h3 id=word-kw-fyi text="FYI">FYI (for your information)</h3>
<p>
  Informs the recipients that this email (or a section of it) is not critical,
  and nothing 'bad' will happen if they will skip it/ignore it/read it later.
  This helps the recipient to prioritize his inbox.
</p>

<h2 id=word-date text="Date">Date format</h2>
<p>
  Use only  or DD-Mmm-YYYY (or DD-Mmm-YY), or just DD-Mmm to
  <a href=#email-minimal>keep it short</a>.<br>
  This format is clearly understood by all, regardless of locale.
</p>
<xmp cat=bad>
  15/1/16
</xmp>
<xmp cat=bad>
  2016-15-01
</xmp>
<xmp cat=good>
  15-Jan
</xmp>
<xmp cat=good>
  15-Jan-16
</xmp>
<xmp cat=good>
  15-Jan-2016
</xmp>

<h2 id=word-time text="Time">Time format</h2>
<p>
  Never use AM/PM.
</p>
<xmp cat=bad>
  9:30pm IST
</xmp>
<xmp cat=good>
  21:30 IST
</xmp>
<p>
  Always 2 digits for hours.
</p>
<xmp cat=bad>
  9:30 IST
</xmp>
<xmp cat=good>
  09:30 IST
</xmp>
<p>
  Timezones: Technical (commits, releases, deploy, server events...) - UTC
</p>
<xmp cat=bad>
  12:30
</xmp>
<xmp cat=good>
  12:30 UTC
</xmp>
<p>
  Timezones: Human (meetings...) - Local time of the person
  you are communicating with.
</p>
<xmp cat=bad>
  12:30
</xmp>
<xmp cat=good>
  12:30 IST
</xmp>

<h2 id=word-grammar text=Grammar>Grammar</h2>

<h3 id=questions>Questions</h3>
<p>Questions need to end with a question mark.</p>
<xmp cat=bad>
  Has your team decided yet.
</xmp>
<xmp cat=good>
  Has your team decided yet?
</xmp>

<h3 id=punctuation>Punctuation</h3>
<p>
  Punctuation marks like <code>!</code> <code>?</code> <code>.</code> and
  <code>,</code> always come directly after the word and have a
  space or new line after it.
</p>
<xmp cat=bad>
  Has your team decided yet ?
</xmp>
<xmp cat=good>
  Has your team decided yet?
</xmp>
<xmp cat=bad>
  I'll explain,shortly, about Spark
</xmp>
<xmp cat=good>
  I'll explain, shortly, about Spark
</xmp>
<p>
  When <code>&</code> replaces a word, it should have spaces around it.
  Better yet, use <code>and</code> instead.<br>
  It is OK to use <code>&</code> in company names like <code>AT&T</code> or
  common short forms like <code>R&D</code>, but most communcation should use
  <code>and</code>.
</p>
<xmp cat=bad>
  I'm free today&tomorrow.
</xmp>
<xmp cat=ok>
  I'm free today & tomorrow.
</xmp>
<xmp cat=good>
  I'm free today and tomorrow.
</xmp>
<xmp cat=good>
  We will need a day of R&D to make it work.
</xmp>

<h3 id=capitalization>Capitalization</h3>
<p>Capitalize the beginning word of a sentence.</p>
<xmp cat=bad>
  we will handle it soon.
</xmp>
<xmp cat=good>
  We will handle it soon.
</xmp>
<p>Capitalize proper nouns (like the names of people, places, companies,
  holidays).</p>
<xmp cat=ok>
  I will touch base with nir after christmas.
</xmp>
<xmp cat=good>
  I will touch base with Nir after Christmas.
</xmp>
<xmp cat=good>
  I have a call scheduled on Tuesday
</xmp>
<p>Don't capitalize <code>yesterday</code>, <code>today</code>, or
  <code>tomorrow</code> unless they come at the beginning of a sentence.</p>
<xmp cat=bad>
  We'll talk Tomorrow
</xmp>
<xmp cat=good>
  We'll talk tomorrow
</xmp>
<p>If you're not sure whether to capitalize or not, don't.
  An incorrect capital looks worse than an incorrect lowercase.</p>

<h3 id=short>Short forms</h3>
<p>Only use short forms if it is common and the original word
  is long. Often short forms are hard to understand.</p>
<xmp cat=bad>
   We'll talk tmrw.
</xmp>
<xmp cat=good>
  We'll talk tomorrow.
</xmp>
<xmp cat=ok>
  It will take approx. 2 days.
</xmp>
<xmp cat=ok>
  It will take approx 2 days.
</xmp>
<xmp cat=good>
  It will take approximately 2 days.
</xmp>
<p>Never replace a word with a number or a letter.</p>
<xmp cat=bad>
  I'll send it 2 u.
</xmp>
<xmp cat=good>
  I'll send it to you.
</xmp>
</div>`;
