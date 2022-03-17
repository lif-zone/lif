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
<Layout title='LIF DNA' desc='Plan Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Plan Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=vp-consistent_minimal>Consistent and Minimal</h1>
<p>
  Most important rules:<br>
  <a href=/dna/js_code#overview-consistent>Be consistent</a>.<br>
  <a href=/dna/js_code#overview-minimal>Be minimal</a>.<br>
  Read these sections carefully.
</p>
<h1 id=vp>Version plan</h1>
<p>
  The version plan goal is to report your progress during the day.
  Your current task should be shortly described in the version plan
  <a href=#vp-header>header</a>. All other tasks in the
  <a href=#vp-body>body</a> of the version plan should be according
  to the version plan <a href=#vp-legend>legend</a>.
</p>
<h2 id=vp-header>Header</h2>
<p>
  The current task should be logged in the version plan header,
  together with a rough estimation of the task's duration.
</p>
<xmp cat=bad>
  stanislav (Stanislav Klyukin) infra/nir: show loading in graph header
</xmp>
<xmp cat=bad>
  stanislav (Stanislav Klyukin) infra/nir: show loading in graph header 5d
</xmp>
<xmp cat=bad>
  stanislav (Stanislav Klyukin) infra/nir: show loading in all graphs 5D
</xmp>
<xmp cat=good>
  stanislav (Stanislav Klyukin) infra/nir: show loading in graph header 1D
</xmp>
<p>
  In case the task is less than a day, include your next task.
</p>
<xmp cat=bad>
  ekaterina (Ekaterina Perepelitsa) design/nir: lum icon 2H
</xmp>
<xmp cat=good>
  ekaterina (Ekaterina Perepelitsa) design/nir: lum icon 2H then hola icon 1D
</xmp>
<p>
  In case the line is too long, make sure to add two (2) spaces at the start of
  the next line.
</p>
<xmp cat=bad>
  ekaterina (Ekaterina Perepelitsa) design/nir: hola cdn android and ios sdk
  pages redesign 2H then hola cdn banners redesign 1D
</xmp>
<xmp cat=good>
  ekaterina (Ekaterina Perepelitsa) design/nir: hola cdn android and ios sdk
    pages redesign 2H then hola cdn banners redesign 1D
</xmp>
<p>
  Report the day you will come back from your vacation
</p>
<xmp cat=bad>
  niv (Niv Shimoni) infra/nir: 05-Nov-2017 - 10-Nov-2017: vacation
</xmp>
<xmp cat=good>
  niv (Niv Shimoni) infra/nir: vacation till 10-Nov-2017
</xmp>
<h2 id=vp-task_header>Task header</h2>
<p>First line of a task should contain the product and a short
  description</p>
<xmp cat=bad>
  - change icon
</xmp>
<xmp cat=good>
  - mdoc.holaspark.com/cdn/lead: change activities add icon
</xmp>
<p>
  If the requester is not you mentor, you should add him in
  brackets<br>
  When finishing the task, the
  <a href=/dna/comm#email-reply-done>'Done' email</a> should be sent
  to the requester and a CC to your mentor
</p>
<xmp cat=bad>
  - a task from derry: mdoc.holaspark.com/cdn/lead: change activities add icon
</xmp>
<xmp cat=good>
  - mdoc.holaspark.com/cdn/lead: change activities add icon (derry)
</xmp>
<p>
  When task is from another tasks file, you should add that file, short
  version name for cvsed in square brackets.<br>
  You should add your name in brackets as the begining of the task in the task
  file and mark it with *<br>
  When done, you should mark + in both version_plan.txt and the task file.
  <a href=/dna/comm#email-reply-done>'Done' email</a>
</p>
<xmp cat=good>
  - mdoc.holaspark.com/cdn/lead: change activities add icon (derry) [mt]
</xmp>
<h2 id=vp-legend>Legend</h2>
<ul>
  <li><code>-</code> Planned task</li>
  <li><code>*</code> In progress task</li>
  <li><code>+</code> Done</li>
  <li><code>o</code> On hold task</li>
  <li><code>?</code> Decision pending task</li>
  <li><code>c</code> Canceled task</li>
</ul>
<h2 id=vp-body>Body</h2>
<p>
  The body of the version plan should contain all <code>-</code> (Planned),
  <code>*</code> (In progress) tasks:
</p>
<xmp cat=ok>
  * c/pl -> js
    * system/host/stored_hashes.c
    * convert to js (create a file called store_hashes.js)
    - system/host/create_user.pl -> js
    - system/vpn/connect_to_vpn.c -> js
    - more from move_to_js.txt
  - upgrade mongo 3.0 -> 3.2
</xmp>
<p>
  Tasks that were requested by other then your regular mentor, should
  have the mentor name in brackets
</p>
<xmp cat=bad>
  - for omri: holaspark.com top headers are not aligned
</xmp>
<xmp cat=good>
  - holaspark.com top headers are not aligned (omri)
</xmp>
<p>
  Do not use uppercase as first letter
</p>
<xmp cat=bad>
  * C/pl -> js
    * System/host/stored_hashes.c
</xmp>
<p>
  Only tasks that benefit customers should be listed, typically tasks
  that:
</p>
<ul>
  <li>end with a commit</li>
  <li>end with a deployment</li>
  <li>fix a bug</li>
  <li>improve the product</li>
  <li>solve a problem for a customer</li>
</ul>
<p>Learning is by-product of doing.</p>
<xmp cat=bad>
  - get forms from IT
  * c/pk -> js
    - convert system/host/create_user.pl -> js
      - learn perl
      - convert to js (create file called create_user.js)
      - unit-test
</xmp>
<xmp cat=good>
  * c/pk -> js
    - convert system/host/create_user.pl -> js
      - convert to js (create file called create_user.js)
      - unit-test
</xmp>
<h2 id=vp-priorities>Priorities</h2>
<p>
  Tasks are sorted according to their priority (top-to-bottom).<br>
  <code>*</code> (In progress) tasks are usually very few (1-2), not more,
  representing your current work effort and should be added to the header of
  the version plan.<br>
  Tasks which started (code was partially written/committed) and then stopped,
  should be marked with <code>o</code> (On hold).
</p>
<h2 id=vp-work_in_prog>Work in progress</h2>
<div class=bad_good_bind>
  <p>
    In progress (<code>*</code>) subtasks: at least one of them must be in
    <code>*</code> status.
  </p>
  <xmp cat=bad>
    * system/host/store_hashes.c
       * convert to js (create a file called store_hashes.js)
         + convert read_hash
         - convert validate_hash
         - convert invalid_hash
  </xmp>
  <xmp cat=good>
    * system/host/store_hashes.c
       * convert to js (create a file called store_hashes.js)
         + convert read_hash
         * convert validate_hash
         - convert invalid_hash
  </xmp>
</div>
<div class=bad_good_bind>
  <p>
    Subtasks of a completed main task, cannot be in progress.
  </p>
  <xmp cat=bad>
    dekel (Dekel Cohen) cdn/ariel: search network ppc 5H
    + Google
      * search network ppc
      + display network ppc
      + remarketing
  </xmp>
  <xmp cat=good>
    dekel (Dekel Cohen) cdn/ariel: search network ppc 5H
    * Google
      * search network ppc
      + display network ppc
      + remarketing
  </xmp>
</div>
<div class=bad_good_bind>
  <p>
    Canceled task can be a subtask of a complete task.
  </p>
  <xmp cat=good>
    dekel (Dekel Cohen) cdn/ariel: proxy-review.com (happening, not enough) 3H
    + Google
      + search network ppc
      c display network ppc
      + remarketing
  </xmp>
</div>
<h2 id=vp-incremental>Incremental</h2>
<p>
  Tasks longer than 1 day must be divided to committable subtasks
</p>
<xmp cat=bad>
  - system/host/store_hashes.c
    - convert to js (create a file called store_hashes.js)
    - unit-test
    - test&debug
</xmp>
<xmp cat=good>
  * system/host/store_hashes.c
     * convert to js (create a file called store_hashes.js)
       * convert read_hash
       - convert validate_hash
     - unit-test
     - test&debug
</xmp>
<h2 id=vp-update>Updates</h2>
<p>
  The version plan should be updated once a day, reflecting the current tasks
  you are dealing with.<br>
  Updating this file can be done easily with <a href=/dna/dict#cvsed>cvsed</a>.
</p>

<h2 id=vp-history text="History">History: completed tasks</h2>
<p>
  Done (<code>+</code>) and canceled (<code>c</code>) tasks are being cleaned
  automatically from the version plan every Sunday.<br>
  These tasks can be found in the <code>doc/design/version_history.txt</code>
  file.
</p>

<h1 id=daily>Daily file</h1>
<p>
  The goal of the daily file is to report your daily achievements, describe
  your <code>commitment</code> and state your next <code>planned</code>
  tasks.<br>
  In the <code>commitment</code> section, write the tasks you plan to
  finish tomorrow. In the <code>planned</code> section, write the task you will
  start after the tasks in the <code>commitment</code> section are done.<br>
  Update this file every day, usually at the end of the day (you may choose to
  update it in the beginning of the work day, summarizing your previous working
  day).
</p>
<h2 id=daily-update>Updates</h2>
<p>
  The daily should be updated at least once a day, reflecting the current tasks
  you are dealing with, as well as explaining what you are going to do
  next.<br>
  Updating this file can be done easily with
  <a href=/dna/dict#cvsed>cvsed</a>.<br>
  People in Spark like to use <code>cvsed vpd</code> to constantly update their
  daily with every task they start or finish so everybody will be updated with
  their progress, as well as it won't take them long to update it at the end of
  the day.
</p>

<h2 id=daily-legend>Legend</h2>
<p>We are using the same <a href=#vp-legend>version plan legend</a>.</p>
<h2 id=daily-template>Template</h2>
<p>
  Report your daily achievements, describe the tasks you will complete for sure
  in the next day (<code>commitment:</code>), and the task/s your are about to
  start once completing your commitment (<code>planned:</code>).
</p>
<xmp cat=bad>
  01-Dec-2015:
  * GIF generation for hola homepage
  + fixed a bug in hola homepage
</xmp>
<xmp cat=bad>
  01-dec-2015:
  * GIF generation for hola homepage
  + fixed a bug in hola homepage
</xmp>
<xmp cat=good>
  01-Dec-2015:
  + fixed a bug in hola homepage
  * GIF generation for hola homepage
  commitment:
  * GIF generation for hola homepage
  - complete (commit and deploy) phase 1 of GIF generation
  - continue work on rest of GIF generation - expected to be around 3 days
  planned:
  - implement new signup wizard
</xmp>
<h2 id=daily-uppercase>No uppercase as first letter</h2>
<p>
  Do not use uppercases as first letters in the body of the daily
  file.<br>
  Uppercase as first letter is used only for the month in the header
  of the daily file.
</p>
<xmp cat=bad>
  13-Oct-2016:
  + Optimize lum/cdn top bar loading
  * Lum customer selector out of sync
  Commitment:
  * Lum customer selector out of sync
  Planned:
  - Unsubscribe from evaluation emails
</xmp>
<xmp cat=good>
  13-Oct-2016:
  + optimize lum/cdn top bar loading
  * lum customer selector out of sync
  commitment:
  * lum customer selector out of sync
  planned:
  - unsubscribe from evaluation emails
</xmp>

<h2 id=daily-order>Descending order</h2>
<p>
  Your latest report should be the first one in the file.
</p>
<xmp cat=bad>
  13-Oct-2016:
  + optimize lum/cdn top bar loading
  * lum customer selector out of sync
  commitment:
  * lum customer selector out of sync
  planned:
  - unsubscribe from evaluation emails

  14-Oct-2016:
  + lum customer selector out of sync
  * unsubscribe from evaluation emails
    + add unsubscribe token generation
    * build unsubscription front-end logic
  commitment:
  * build unsubscription front-end logic
  planned:
  - add eremind pagination
</xmp>
<xmp cat=good>
  14-Oct-2016:
  + lum customer selector out of sync
  * unsubscribe from evaluation emails
    + add unsubscribe token generation
    * build unsubscription front-end logic
  commitment:
  * build unsubscription front-end logic
  planned:
  - add eremind pagination

  13-Oct-2016:
  + optimize lum/cdn top bar loading
  * lum customer selector out of sync
  commitment:
  * lum customer selector out of sync
  planned:
  - unsubscribe from evaluation emails
</xmp>
<h2 id=daily-work_week text="Work week">Work week definition</h2>
<p>
  State you usual working week days and hours, so everybody will know when to
  reach you. Include both your local time and IL time.
</p>
<xmp cat=bad>
  WORK_WEEK: Mon-Fri 11:00-18:00
</xmp>
<xmp cat=good>
  WORK_WEEK: Mon-Fri 11:00-18:00 (14:00-21:00 YEKT)
</xmp>
<h2 id=daily-absence>Absence</h2>
<p>
  Vacations and other <a href=/dna/dict#attendance>out-of-office cases</a>
  should be reported (in advance if possible).
</p>
<xmp cat=good>
  23-Mar-2016: sick
</xmp>
<xmp cat=good>
  23-Mar-2016: miluim
</xmp>
<xmp cat=good>
  23-Mar-2016: day off
</xmp>
<xmp cat=good>
  23-Mar-2016: 0.5 vacation
</xmp>
<xmp cat=bad>
  23-Mar-2016: 0.5 day vacation
</xmp>
<xmp cat=bad>
  23-Mar-2016:
  miluim
</xmp>

<p>State if you worked only part of the day.</p>
<xmp cat=good>
  01-Dec-2015: 0.5 day off
  + optimize lum/cdn top bar loading
  * GIF generation for hola homepage
  commitment:
  * GIF generation for hola homepage
  - complete (commit and deploy) phase 1 of GIF generation
</xmp>
<p>
  State planned vacations ahead of time.
</p>
<xmp cat=good>
  23-Mar-2016 - 29-Mar-2016: vacation
</xmp>
<h2 id=daily-support>Support</h2>
<p>
  Support fill out every issue they work on in their daily file so we can see
  the big picture of what is bothering our customers and improve.
</p>
<p>Format:</p>
<xmp cat=good>
  23-Mar-2016: HOURS_WORKED
  + HOURS CUSTOMER TOPIC: DESCRIPTION
</xmp>
<xmp cat=good>
  23-Mar-2016: 0.15
  + 0.05 adverif billing: did not receive invoice
  * 0.1 carrentals lpm: docker lpm crash over 100req/s
</xmp>
<p>Hour notation is 0.1 = 1H:</p>
<xmp cat=good>
  + 0.05 adverif billing: did not receive invoice
</xmp>
<xmp cat=bad>
  + 0.5H adverif billing: did not receive invoice
</xmp>
<xmp cat=bad>
  + 30min adverif billing: did not receive invoice
</xmp>
<p>Only mention tasks above 0.05 (30min):</p>
<xmp cat=good>
  + 0.05 adverif billing: did not receive invoice
</xmp>
<xmp cat=bad>
  + 0.005 adverif billing: sent link to faq
</xmp>
<p>Break tasks by topic:</p>
<xmp cat=bad>
  + 0.5 monitor: call with customers
</xmp>
<xmp cat=good>
  + 0.05 adverif billing: too many cc
  + 0.15 giboo blocked: trouble scraping buy.com/prod/123
  + 0.1 dounut cp: buttons don't work on firefox
  + 0.1 cashflow billing: account susp[eneded for late payment
  + 0.1 bighat lpm: link tester crash on centos 5
</xmp>
<p>
  Use standard topics so we can grep issues by topic.<br>
  Topics: mdoc, billing, lpm, bext, google, unblocker, cp, blocked
</p>
<xmp cat=bad>
  + 0.05 adverif safecharge: too many cc
</xmp>
<xmp cat=good>
  + 0.05 adverif billing: too many cc
</xmp>
<h1 id=design>Design documents</h1>
<p>
  We write designs for specific features to usually coordinate between several
  programmers and to layout the way we would like it to be created.<br>
  The document will hold a technical description of the feature as well as a
  list of prioritized tasks. We are using <a href=/dna/dict#jdoc>Jdoc</a> to
  notify the relevant people on the status of the document as well the progress
  of every task.
</p>
<h2 id=design-legend>Legend</h2>
<p>We are using the same <a href=#vp-legend>version plan legend</a>.</p>
<h2 id=design-prio>Priorities</h2>
<p>
  Since we believe in <a href=/dna#incremental>incremental development</a> most
  likely the newly feature will be deployed very soon and a list of tasks will
  start to be piled up. To coordinate between several people working on the
  same feature the below defines handling priorities:
</p>
<ul>
  <li><b>P0</b>: Critical functionality is completely broken. Stop everything
    you do and handle this task</li>
  <li><b>P1</b>: A specific feature is broken or partially working. Handle
    top-to-bottom</li>
  <li><b>P2</b>: Enhancement to be added. Handle top-to-bottom</li>
  <li><b>P3</b>: A nice to have feature. Handle top-to-bottom</li>
  <li><b>P?</b>: Not decided yet - task is waiting to be classified by the
    OWNER</li>
</ul>
<xmp cat=bad>
 - P1 bug: session_duration is broken. Should be fixed and add
   unit testing.
</xmp>
<xmp cat=good>
 - P1: session_duration is broken. Add unitest.
</xmp>
<h2 id=design-assign>Assignments</h2>
<p>Once the task is assigned, the developers login will be added to the
  task</p>
<xmp cat=bad>
 - P1: session_duration is broken. Should be fixed and add
   unit testing. (alex)
</xmp>
<xmp cat=good>
 - P1 alex: session_duration is broken. Add unitest.
</xmp>
<h2 id=design-info>Task info</h2>
<p>The requester should be added in brackets at the end of the task.</p>
<xmp cat=good>
 - P1 alex: session_duration is broken. Add unitest. (niv)
</xmp>
<p>In case the task came from a customer, add him after the requester's
  login.</p>
<xmp cat=good>
 - P1 alex: session_duration is broken. Add unitest. (niv cust_id)
</xmp>
<p>Once the task is completed, notify the requester and the customer.</p>
</div>`;
