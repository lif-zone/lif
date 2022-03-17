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
<Layout title='LIF DNA' desc='LIF DNA' style={dna_style} dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <h1>Spark Dictionary</h1>
  <p>
    <b>What does XXX mean?</b>
    On your way becoming <a href=#veteran>Spark Veteran</a>
    you will hear many terms, see many systems, have to understand
    a lot of Spark internal lingo.<br>
    What does 'fix the <a href=#bat>BAT</a>' mean?
    What is 'request a ccgi-b <a href=#deploy>deploy</a>'?
    Here are the answers!
  </p>
  <p>
    Improvements? Suggestions?
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h1 id=bat text="BAT">Build and Test (BAT): continuous integration</h1>
<p>
  <a href=http://web.holaspark.com/bat>BAT webpage</a><br>
  Originally built at <a href=#jungo>Jungo</a> in 2001, and has been
  constantly upgraded and improved ever since.
</p>
<ul>
  <li>checkout: cvs co</li>
  <li>make: jake build system, compiling and building images</li>
  <li>lint: <a href=#zlint>js/json/perl/html/css</a></li>
  <li>unit-test: <a href=#zmocha>js (zmocha)</a>/C (jtest)</li>
  <li>upload: uploading results and images to <a href=#fs>fs</a></li>
</ul>

<h2 id=bat-colors text="BAT colors">BAT colors</h2>
<ul>
  <li>GREEN - build and unit-tests passed successfully</li>
  <li>ORANGE - build passed, but unit-test failed</li>
  <li>YELLOW - build passed, but unit-test identified memory leak</li>
  <li>RED - build failed</li>
  <li>White strips background indicates a BAT request cycle</li>
</ul>

<h2 id=bat-broken text="BAT is broken">What happen when BAT is broken?</h2>
<ul>
  <li>
    You don't necessarily have to fix it yourself;<br>
    If possible, find out whose commit broke it and get them to fix it.<br>
    Don't assume they already know it's broken.<br>
    If it's a simple fix - fix it yourself
  </li>
  <li>If you have to fix after someone else broke BAT, add that person
    to the commit message using <dfn>NOTIFY:</dfn></li>
  <li>If it's not easy to fix (requires thinking/debugging/cannot be fixed in
    1 minute), revert the offending commit and notify whoever made it</li>
  <li>
    Alternatively, if unit-test fails, disable the individual test using
    <code>if (0) // XXX person</code>.<br>
    Use your judgment as to when to revert and when to disable the test.<br>
    Disable when you know that the test itself is the problem, or that the
    breakage is not mission-critical. Always notify the person responsible for
    fixing the test.
  </li>
</ul>

<h1 id=mdoc text="Mdoc">Mongo Documents (Mdoc): our crm</h1>
<p>
  <a href=http://mdoc.holaspark.com>Mdoc webpage</a><br>
  Originally built to control the <a href=#deploy>Deploy</a> work
  flow, it quickly expanded to hold most of our procedures for R&D, Deploy,
  sales, IT and HR.<br>
  The system is based on a mongo collection that stores data per every
  procedure. This allows us to control, verify, and investigate procedures,
  which we do daily.
</p>
<h2 id=mdoc-worlds>Mdoc worlds</h2>
<ul>
  <li>Deploy - holds all the deploy procedures related to deploying new
    versions of our products and servers</li>
  <li>CDN/Lum - holds all the CDN/Luminati customers leads and specific
    procedures executed in this department</li>
  <li>R&D - holds all the R&D training procedures</li>
  <li>IT - holds all the IT installation procedures</li>
  <li>HR - holds all our candidates files</li>
</ul>

<h1 id=jdoc text="Jdoc">Jdoc notification system</h1>
<p>
  Jdoc stands for 'Jungo documents', and was originally built at
  <a href=#jungo>Jungo</a> in 2001.<br>
  The jdoc mechanism allows you, or anyone interested, to register
  notifications for a specific file or directory's content, based on our
  <a href=#cvs>CVS</a>, and review every single commit.<br>
  The jdoc file is located at the root directory of our development tree.<br>
  This notification mechanism is being used to implement our
  <a href=#review-async>async Review</a> and to support the co-ownership of a
  module or a file, by sending emails for every modification made to the file or
  directory's content.
  Note that you may use the <code>NOTIFY:</code> statement, in every commit you
  do, to manually activate this notification system for specific logins (people
  in Spark) you want to notify.
</p>
<xmp cat=bad>
  NOTIFY: colin
  added 'eval' to dropdown list
</xmp>
<xmp cat=good>
  added 'eval' to dropdown list
  NOTIFY: colin
</xmp>
<p>
  In case you would like to cancel the notification for the commit you are
  about to do, since your change is cosmetic or not important, use
  <code>NOTIFY: cancel</code> in the commit message.
</p>

<h1 id=review text="Review">Peer Review: keeping our code quality
  top-notch</h1>
<p>
  Writing code is our profession, keeping it top-notch is our pleasure!<br>
  As it's the main form of communication between the team, having our codebase
  perfectly consistent in style makes it easy for developers to read and modify
  each other's code.<br>
  So, to increase the team's efficiency, we invest time in teaching everyone how
  to write code. The review process is our main tool for doing so.
</p>

<h2 id=review-sync text="Sync">Blocking sync Review: first review, then
  commit</h2>
<p>
  During the <a href=#bootcamp>bootcamp</a> and even few weeks after, your code
  will be reviewed by your <a href=#mentor>mentor</a> in order to
  provide you with all the tools and guidelines on how we write our code.
  During this period, you'll do commit sessions together with your mentor
  until he is fully convinced you are prepared to write code like everybody
  else in Spark and commit it on your own.<br>
  It's your responsibility to commit your code, and hence, you will probably
  call your mentor for a commit session once you are done with your task.<br>
</p>

<h3 id=review-sync-precommit text="Pre-commit checklist">Pre-commit
  checklist</h3>
<p>
  You probably ask yourself what the mentor is checking during this session and
  whether your code is ready?<br>
  Below is the checklist you need to do before answering yourself if your
  code is ready for a commit session:
</p>
<ul>
  <li>Verify that all editors are closed before committing the code</li>
  <li>Do <code>cvsup -A</code> on the root directory</li>
  <ul>
    <li>
      Make sure all new files were added to the cvs using
      <code>cvs add FILENAME</code> (verify no new files marked with
      <code>?</code> exist).<br>
    </li>
    <li>
      Verify that all modified (<code>M</code>) files are files you want
      to commit.<br>
      If there are files you want to commit later, duplicate the tree
      <code>cp -a zon1 zon1.new</code>, and make the current tree include
      exactly what you are going to commit.
    </li>
  </ul>
  <li>
    Run <code>zlint -m</code> from the root directory (use <code>cdr</code> to
    move to the root directory).
  </li>
  <li>
    <a href=#coding>Coding conventions</a>: re-read the code, and validate it
    is compliant.
    Noobs can use <code>zlint -cm</code> tool to assist
    <a href=/dna/js_code#overview-tool>locating convention mistakes</a>
    (the tool is only 95% accurate - so you still must know all the rules!).
  </li>
  <li>
    Run <code>zdiff</code> and re-check all your changes. Validate there are no
    'debug leftovers' (console.log()...).
  </li>
  <li>
    Its OK to do a
    <a href=/dna#incremental-mvp>partial solution/implementation</a>,
    but in such cases
    <a href=/dna/js_code#comment-xxx>comment in the code</a>,
    or add to the <a href=#version_plan>version_plan</a>
    a description of what
    <a href=/dna#individual-solve-half>you will do later</a>.
  </li>
  <li>If this is a modification/removal, <a href=#rgrep>rgrep</a> the whole
    tree to validate all related code is modified accordingly</li>
  <li>Run all the <a href=#zmocha>unit-tests</a> from the root directory</li>
  <li>Make sure the tree can compile (<code>jmake cm release</code>)</li>
  <li>Test the feature and play with it in <a href=#zlxc>zlxc</a></li>
  <li>
    Open questions? not perfect? not 100% ready for commit as-is? then
    <a href=/dna#individual-noharm-peer>don't call your mentor for a commit session</a>.<br>
    Rather, prepare all the list of questions in an editor, with your
    <a href=/dna#individual-owner-complain>suggested solutions</a>,
    and call your mentor for a Q&A session.<br>
    Later on, once your questions have been answered, and you code is perfect,
    call your mentor for a commit session.
  </li>
</ul>

<h3 id=review-sync-committing>Committing</h3>
<p>Commit only the files you want to commit</p>
<xmp cat=bad>
  cvs ci
</xmp>
<xmp cat=good>
  cvs ci file1.js file2.js file3.js
</xmp>

<h3 id=review-sync-commit_msg>Commit message</h3>
<p>Short, simple and descriptive -
  <a href=/dna#effective-minimal>be minimalistic</a></p>
<xmp cat=bad>
  fix mistake in passing of video url in opts from zone_init to zone_find
  and converting opt.url to opt.video_url
</xmp>
<xmp cat=ok>
  move zone_init to zone_find and convert opt.url to opt.video_url
</xmp>
<xmp cat=good>
  zone_init -> zone_find
  opt.url -> opt.video_url
</xmp>
<p>Start with small letter</p>
<xmp cat=bad>
  Update tasks
</xmp>
<xmp cat=good>
  update tasks
</xmp>
<p>When doing a sync review add your reviewer login in brackets</p>
<xmp cat=good>
  fixed conventions (nir)
</xmp>
<p>Do not include the filename you committed to in the message - it is
  redundant</p>
<xmp cat=bad>
  fixed conventions in agent_conf.js
</xmp>
<xmp cat=good>
  fixed conventions
</xmp>

<h3 id=review-sync-redo text="Redo commit">Redo your code for a commit
  session</h3>
<p>
  You may call your mentor for questioning session. This is more than welcome
  and even recommended during the bootcamp. However, once calling your mentor
  for a commit session the expectation is that you did your best to comply with
  <b>ALL</b> <a href=#review-sync-precommit>pre-commit checks</a>. It means
  that all open questions have been looked up deeply and resolved, and your
  code is bright and shining, waiting to be sent out to our million of
  users.<br>
  In Spark we <a href=/dna#individual-mindful>respect other's time</a>, calling
  your mentor for a commit session which ended up with a "redo", is a
  completely waste of time.<br>
  Make sure you meet this expectation. Take very seriously the remarks you
  received, and try to find out how to improve your personal commit procedures
  not to repeat these mistakes next time.
</p>

<h3 id=review-sync-postcommit text="Post-commit checklist">Post-commit
  checklist</h3>
<p>Now, after you have committed your code, below is the checklist you need to
  do after your commit:</p>
<ul>
  <li>Run <code>cvsup</code> and make sure the tree is fully committed (no
    <code>M</code>, nor <code>?</code> files)</li>
  <li>Check <a href=#bat>BAT</a> until you see your commit got compiled and
    tested green</li>
  <li>If BAT is broken, <a href=#bat-broken>make it green again</a> by fixing
    the problem</li>
  <li>Deploy your code - bring value!</li>
  <ul>
    <li>
      Deploy your code immediately. Worse case, in case it is after
      <a href=#attendance>working hours</a>, ask for a pending release in the
      morning
    </li>
    <li>Track it immediately, or after deployment (60 seconds manual test after
      deployment, kibana, stats)</li>
  </ul>
</ul>

<h2 id=review-async text="Async">Non-blocking async Review: first commit, and
  later others will review</h2>
<p>
  Once passing the stage of <a href=#review-sync>blocking review</a> you'll
  start committing your code on your own.<br>
  This time, the review will be done by co-owners of the code you changed or
  by other engineers who are registered on the files you have modified (using
  the <a href=#jdoc>jdoc</a> system).
</p>

<h1 id=fs text="FS">FS: Central shared filesystem</h1>
<p><a href=mailto:dna@holaspark.com>text missing: contribution welcome!</a></p>

<h1 id=jungo text="Jungo">Jungo: Our origin: Passion for complex networking
  and a love for Open Source</h1>
<p><a href=mailto:dna@holaspark.com>text missing: contribution welcome!</a></p>

<h1 id=rgrep text="rgrep">rgrep: recursive grep</h1>
<p>
 grep is an amazing tool. Just like you google the Internet for answers on
 public info, you grep source code for answers on our private tree.<br>
 <code>rgrep</code> is our recursive grep, with a few little usability
 improvements:
</p>
<ul>
  <li>Scans by default all files in the tree, recursively</li>
  <li>Skips version controlled meta-files, editor temporary files
    (swp, bak, ...), and build output directory</li>
  <li>Allows language selection, such as <code>rgrep --js send_msg</code> will
    only search *.js files for send_msg string</li>
</ul>
<p>
  We recommended to always <code>rgrep</code> from the root directory.
  This will ensure you never miss a reference.<br>
  <code>rgrep</code> is installed on your machine as part of our development
  environment.
</p>

<h1 id=zlint text="zlint">zlint: general purpose linter</h1>
<p>
  Can lint many types of files: js, json, perl, html, css and more.
  Always run it before commit.<br>
  <code>zlint</code> is installed on your machine as part of our development
  environment.
</p>

<h1 id=capture>Screen capture</h1>
<p>
  When reporting bugs, requesting UI related tasks, or completing UI related
  tasks, add a minimal (cropped) screen capture or animated GIF to your report
  demonstrating the item or modification you did. Also, mark in it where the
  change is so it will be easy for the other side reviewing it and respond
  quickly.<br>
</p>
<p>
  Implementing the above can be done by using applications such as
  <a href=http://www.faststone.org/FSCapturerDownload.htm>FastStone</a> for
  static screenshots, or <a href=http://www.screentogif.com/>ScreenToGIF</a>
  for animated GIFs.
</p>
<h1 id=zmocha text="zmocha">zmocha: mocha based JS unit-testing tool</h1>
<p>
  Our unit-test framework is based on <a href=https://mochajs.org>mocha</a>.
  Every new function deserves a unit-test to make sure further development will
  not affect current behavior.<br>
  One of the most efficient ways of testing your code modifications is running
  unit-tests on the whole development tree by executing
  <code>jmake run_tests</code>.<br>
  Running tests on a specific directory can be done by running
  <code>zmocha</code> within the directory.<br>
  Running specific test in a specific directory can be done by
  <code>zmocha -g [test]</code>
</p>

<h1 id=zupdate text="zupdate">zupdate: Updating your development environment
  and tools</h1>
<p>
  <code>zupdate</code> is a command line that will install and update your
  development environment, based on your <code>.zon</code> tree (this is the
  reason why we keep <code>.zon</code> untouched and unmodified).<br>
  The development environment holds the <a href=#gvim>gvim</a> definition and
  themes, VM look&feel and all required development tools.<br>
  It is recommended to run <code>zupdate</code> every day, as our codebase is
  changing rapidly together with our development environment and tools.<br>
</p>

<h1 id=gvim text="gVim">gVim: text editor</h1>
<p>
  Our common text editor based on
  <a href=http://www.vim.org/about.php>Vim</a>, powered with many vim plugins
  that enhance our development productivity, and used as our code IDE.<br>
  Why are we using gVim?<br>
  Because it is tidily connected to our development environment and tools.<br>
  Can I use any other IDE instead?<br>
  Sure! You may use any IDE you like, just keep in mind that our gVim is
  already adjusted to our coding conventions and has many features to support
  our way of development. Your IDE should be adjusted as well.<br>
  Moreover, when working with other developers, they mostly would like to work
  on  gVim, so you'll have to adjust yourself to it.<br>
  Do you have a shortcut for using gVim in your development environment?<br>
  Just use <code>g</code>. It will open the gVim editor on your machine.
  More shortcuts and useful commands are in our
  <a href=/dna/basics/vi>vi Basic</a> page.
</p>

<h1 id=cvs text="CVS">CVS: Concurrent Version System</h1>
<p>
  Our source control plays a major role in daily inter-developer communication
  tool in the company.<br>
  Commits are also a form of email, being one of the core engines behind our
  module ownership and <a href=#review-async>code reviews</a>.<br>
  Our version of CVS, originally based on the open source CVS, has been greatly
  enhanced and improved over the years to provide:
</p>
<ul>
  <li>transparent offline support (via local smart cache proxy)</li>
  <li>instant checkout and update (via background prefetching)</li>
  <li>remote web interface, GitHub like</li>
  <li>local web interface, similar to other version control GUI clients</li>
  <li>
    MD5_CDN signature based smart annotate: find out who <b>really</b> originally
    wrote a function, no matter if it was copied, or indentation has been
    changed.
  </li>
  <li>commit hooks: committing directly activates many different deployment
    tasks, updating thousands of servers, configuration, and code - instantly.
  </li>
</ul>
<p>For a quick start, look at
  <a href=/dna/basics/cvs#basic>CVS basic command</a></p>

<h1 id=cvsed text="cvsed">cvsed: utility for editing and committing common
  files</h1>
<p>
  An editor tool which combines editing a file using <a href=#gvim>gvim</a>,
  and committing capabilities, using <a href=#cvs>cvs</a> update and
  commit commands.<br>
  <code>cvsed</code> has shortcuts to our most common used files, which can
  be seen by executing <code>cvsed --help</code>.<br>
  You may use this tool for editing your <a href=#daily>daily</a> file
  (<code>cvsed daily</code>) or your <a href=#version_plan>version plan</a>
  (<code>cvsed vp</code>) or simply open both (<code>cvsed vpd</code>).
</p>

<h1 id=zlxc text="zlxc">zlxc: emulate everything in your PC</h1>
<p>
  A staging environment is a great tool for developers: they can play around
  with the feature they developed in a 'full system', with all the hundreds of
  computers, IPs and route tables, frontend and backend web servers, databases,
  message queues etc... and validate that everything works well together.<br>
  In Spark we wanted every developer to own a complete staging environment of
  his own, so we used <a href=https://linuxcontainers.org>LXC</a> technology to
  power it.<br>
  In a single command we manage to start up in <b>under 6 seconds</b> a full
  emulation of hundreds of NodeJS/C/C++ based servers with different IP
  addresses and complex route tables, multiple MongoDB and NGINX servers,
  graphite, elasticsearch, and many other servers and services.<br>
  Now every developer can fully test the complete product, inside his own
  laptop, <b>even before the commit</b> and see how everything plays well
  together.<br>
  Give the developers great testing and emulation tools, and they will deliver
  great quality products.<br>
  Full description of <code>zlxc</code> can be found once running
  <code>zlxc --help</code>, however some <code>zlxc</code> most common commands
  and usage are:
</p>
<ul>
  <li><code>zlxc run [group]</code> - runs specific servers (saves booting
    time)</li>
  <li><code>zlxc relink</code> - relink modified files to the zlxc
    container</li>
  <li><code>zlxc windows</code> - runs zlxc and enable connecting external
    Windows VM to the zlxc environment</li>
  <li><code>cvsup -A && jmake cm release && zlxc run [group] --purge</code> -
    run an up-to-date clean zlxc instance from scratch</li>
</ul>

<h1 id=workstation text="Workstation">Workstation</h1>
<p>
  Your work station enables you to be efficient. At Spark we invest a lot of
  efforts making it best configured and efficient as possible.<br>
  To keep it up-to-date, make sure to run
  <a href=#zupdate><code>zupdate</code></a> every day. It will make sure all
  your development tools (<a href=#gvim>gvim</a>, <a href=#zlxc>zlxc</a>,
  <a href=#cvsed>cvsed</a>, <a href=#zlint>zlint</a>,
  <a href=#capture>FastStone</a>, etc.) and look&feel are kept configured and
  updated.<br>
  It could happen that you'll feel the way your workstation is configured is
  not your style, and you would like to change it to suit you best. You may
  freely change it, once you are <a href=#noob>fully independent</a> and can
  work on your own. Therefore, to
  <a href=/dna#individual-mindful>save your colleague's time</a> (as they are
  used to this environment), work with the current configuration and suggest
  any environment enhancements to your <a href=#mentor>mentor</a>.<br>
  Our development tree is called <a href=#zon>zon</a>. While the environment
  and tools are being installed by <a href=#zupdate>zupdate</a> on the
  <code>.zon</code> tree, you may duplicate it for development purposes to
  <code>zon1</code> and/or <code>zon2</code>, by simply execute
  <code>cp -a .zon zon1</code> or <code>cvs co -d zon2 zon</code>. This will
  give you the ability to work on one task in <code>zon1</code>, while doing
  other tasks on <code>zon2</code>.<br>
  Moreover, doing your <a href=#daily>daily</a> and updating your
  <a href=#version_plan>version plan</a> can be done very easily by executing
  <code>cvsed daily</code> (to update your daily), or <code>cvsed vp</code> to
  update your version plan's section, or <code>cvsed vpd</code> to update both
  daily and version plan at the end of the day.
</p>

<h1 id=monitor text="Monitor">Monitor and alerts</h1>
<p>
  We use graphite as the base of our monitoring and alerting system.
  We add many <a href=#zcounter>zcounters</a> in our code to send stats
  to our servers, and aggregate them up on a realtime monitoring
  and alerting dashboard.
  That's how we keep our services up and running 24/7/365.
</p>

<h1 id=zcounter text="zcounter">zcounter: monitor your code</h1>
<p>
  To validate your code runs well in the real world, add zcounters
  inside your code - count and measure events, and use our
  <a href=#monitor>graphite based dashboard</a> to monitor their
  values, and alert when something goes wrong.
</p>

<h1 id=perr text="perr">perr: collect errors and other reports</h1>
<p>
  The idea of "perr" was so that clients (initially is was for Spark
  Accelerator) could submit crashes and other runtime errors. Submission of
  perr reports is open to the outside world, and the system is built to handle
  a very large incoming flow.
</p>
<p>
  These days, the technology has been repurposed to collect reports about
  events other than errors, too. For instance, our Spark loader and player send
  reports that include a lot of stats like how long it took to start playing,
  whether there were buffering events and how many, and so on. Our browser
  extensions, Android apps etc send reports on events such as
  "authentication", "first use" and so on.
</p>
<p>
  The perr servers receive these reports over HTTP. Then they do several
  things:
</p>
<ol>
  <li>
    Report <a href=#zcounter>zcounters</a> about certain types of perr or
    their properties. Most, if not all, perr types produce a zcounter
    <code>stats.glob.perr.$ID</code> just to count them. Also, CDN reports
    produce many zcounters that are specific to particular customers/zones,
    based on individual events mentioned in the report. In fact, most of the
    CDN world in the dashboard is produced this way by the perr servers.
  </li>
  <li>
    Drop certain reports. The server can be configured to drop reports
    according to specific rules. This is done so that the database does not get
    flooded with millions of identical reports when we only need a few to
    diagnose problems. Note that the zcounter submission above happens before
    the dropping.
  </li>
  <li>
    Forward remaining reports to the database where their bodies will be
    stored.
  </li>
</ol>
<p>
  There are different perr servers for the same reason as why there are
  different www servers. Better distribution of load, separation of code (for
  example, zs-perr-hola-b does not need the code that processes CDN player
  reports), separate releases.
</p>
<p>
  Different kinds of clients use different URLs to submit their perr reports,
  although the format is the same. For example, the CDN player submits to
  https://perr.h-cdn.com/client_cgi/perr (I think), while the browser extension
  submits to https://perr.holaspark.com/client_cgi/perr. These domains are served
  by nginx on zs-client-hola-f* and zs-client-spark-f*, which then forwards these
  requests to zs-perr-spark-b* and zs-perr-hola-b*, respectively (with load balancing).
</p>

<h2 id=perr-visualization text="perr visualization">perr data
  visualization</h2>
<p>
  ElasticSearch is the specialized database to which the perr service submits
  the reports on step 3 above. In fact, the full data flow is like this:
</p>
<p>
  <code>
    (client) -&gt; zs-client-*-f -&gt; zs-perr-*-b -&gt; zs-log -&gt;
    zs-elasticsearch -&gt; (kibana)
  </code>
</p>
<p>
  (The zs-log server does little more than just forward the reports. These
  days, its presence is mostly historical.)
</p>
<p>
  Kibana is a web application that lets you explore the ElasticSearch database.
  It is to ElasticSearch what our dashboard is to metricdb.
</p>



<h1 id=deploy text="Deploy">Deploy: shipping your code to millions of
  users</h1>
<p>
  Deployment is putting your work out for everyone to use. The deploy team
  will take your request, and will follow a detailed procedure that will label,
  test and eventually release your code.<br>
  If an issue occurs during this process, the deploy team will notify you - so
  you will be able to quickly fix it.<br>
  The deploy team is available to receive your requests and is responsible for
  <a href=http://web.holaspark.com/proc/deploy#dashboard>monitoring dashboard</a>
  24/7/365
</p>

<h1 id=bootcamp text="Bootcamp">
  <div class="rank rank_boot pull-left"></div>
  Bootcamp: your first days at Spark
</h1>
<p>
  A <a href=/dna/bootcamp>3 week training program</a>, in which you are
  introduced to the way we work, communicate and collaborate with each
  other.<br>
  It's time to learn! and adopt our <a href=/dna>DNA</a>, as well as perform
  your profession skills.<br>
</p>

<h1 id=noob text="Spark Noob">
  <div class="rank rank_noob pull-left"></div>
  Spark Noob: start doing real stuff, but still a lot of questions
</h1>
<p>
   Larger tasks, significant contribution while actively learning about the
   company's DNA, software architectures and work methods.
   <a href=/dna/dict#review-sync>Code reviews</a> for most commits, some
   <a href=/dna/dict#review-async>without a pre-commit review session</a>,
   and sometimes even only after deployment.
</p>

<h1 id=junior text="Spark Junior">
  <div class="rank rank_junior pull-left"></div>
  Spark Junior: on your way to being part of the family!
</h1>
<p>
  A major contributor to Spark's products, developing specific domain knowledge
  in fields that are of interest to you within Spark. Commit directly to the
  product tree without prior review, and see your contributions going live to
  millions of users within hours of being developed. Still internalizing Spark's
  DNA and best practices, and open to comments about commits from other Spark
  Veterans.
</p>

<h1 id=veteran text="Spark Veteran">
  <div class="rank rank_veteran pull-left"></div>
  Spark Veteran: A 'did-it-all' Veteran at Spark
</h1>
<p>
  An integral part of the Spark Family. A major contributor, knowledge center,
  and a person who can help Noobs and Juniors get up to speed on the Spark DNA
  and best practices through  <a href=/dna/dict#mentor>mentoring</a>, and
  <a href=/dna/dict#review>code reviews</a>.
</p>

<h1 id=chef text="Spark Chef">Spark Chef</h1>
<p>
  We truly believe that eating healthy and good food should be part of having
  fun at work, while being creative and productive when creating fantastic
  products!<br>
  Our in-house chefs are responsible for those great meals we have every day.
</p>

<h1 id=mentor text="Mentor">Mentor: Your Spark veteran buddy</h1>
<p>
  The Spark mentors are selected <a href=#veteran>Veterans</a> that embody the
  Spark DNA and have the ability to help <a href=#noob>Noobs</a> learn to
  become great contributing team members.<br>
  Every Noob is assigned a mentor -- a Veteran who helps to progress from
  <a href=#noob>noob</a> to <a href=#junior>junior</a> to
  <a href=#veteran>veteran</a> status.
  It's up to you, the Noob, to get as much face time with the Veteran and ask
  any question, so that you can learn as much as possible. The Mentor is busy
  with his tasks, but will take the time to help you as much as you need when
  you ask for it.<br>
  What's the best way to learn from a mentor? One very effective way is plain
  old imitation -- looking at his practices, daily routines, time and task
  management, email styling, at how he communicates with colleagues. These are
  all great practices to take on until you create your own style at Spark.
</p>
<ul>
  <li>
    At <a href=#bootcamp>Bootcamp</a> stage mentor helps how to find what
    is necessary for fulfilling tasks: documentation, code, people. He also
    reviews your code.
  </li>
  <li>Mentor of a <a href=#noob>Noob</a> helps learning company's DNA, and
    still does the code reviews.</li>
  <li>Mentor of a <a href=#junior>Junior</a> is a go-to person to understand
    how the company and procedures work in detail.</li>
</ul>

<h1 id=mvp text="MVP">MVP: Minimal Viable Product</h1>
<p>
  In any task/feature/product we build at Spark, we try to progress
  incrementally, by building a Minimal Viable Product (or minimal viable
  task/feature) that brings value to the end user. This allows testing whether
  the solution is in the right direction. It also brings immediate value to
  the end user, or if it is an internal task - brings an immediate solution to
  a real problem. If the MVP works out well, additional incremental
  improvements will be done. If not, a different direction (thus a different
  MVP) will be tried out to solve the same problem.<br>
  This is a core concept in modern
  <a href=http://theleanstartup.com/principles>Lean Startups</a>.
  We highly recommend you read <b>The Lean Startup</b> book.
  See also <a href=https://en.wikipedia.org/wiki/Minimum_viable_product>Wiki</a>.
</p>
<h1 id=zon text="Zon">ZON: appears in the code - but what is it?</h1>
<p>
  Spark was founded in 2008, and sticking to the <a href=#mvp>MVP</a> method,
  our 0.1 version of the company name was ZON. This gave us time to find a
  name that best represents our values: simplicity, directness, friendly,
  welcoming. By the beginning of 2009 we found it: "Spark", coupled with is
  friendly smiley :-)<br>
  So our source tree directory is still '.zon', and our internal tools and
  functions many times have a 'z' prefix, and our P2P protocol is called zmsg.
</p>

<h1 id=coding text="Coding conventions">Coding conventions (Style Guides)</h1>
<p>
  Source Code is the main produce of software developers. It's most of what we
  read and write at all day - even more than the time we spend reading and
  writing emails (... we also have <a href=/dna/comm#email>email style guide</a> to
  make them consistent!)<br>
  It's the main form of communication between the team, and therefore its
  consistency is highly important.<br>
  Having our codebase perfectly consistent in style makes it easy for
  developers to read and modify each other's code. We try to express our
  individuality and personal great engineering skills, not by spacing and
  indenting our code differently than others, rather by finding simple
  solutions to complex problems, great algorithms, original and efficient
  designs.<br>
  There's no 'right' or 'wrong' in coding conventions - any coding convention
  chosen can be 'right', as long as it exists, and is strictly followed by all
  of us - thus achieving consistency.
</p>
<ul>
  <li><a href=/dna/tree_code>Tree structure</a></li>
  <li><a href=/dna/js_code>JS</a></li>
  <li><a href=/dna/css_code>CSS</a></li>
  <li><a href=/dna/html_code>HTML</a></li>
  <li><a href=/dna/c_code>C/C++</a></li>
  <li><a href=/dna/perl_code>Perl</a></li>
  <li><a href=/dna/java_code>Java</a></li>
  <li><a href=/dna/cs_code>C#</a></li>
  <li><a href=/dna/shell_code>Shell</a></li>
  <li><a href=/dna/sheet_code>Google Sheets/Excel</a></li>
</ul>

<h1 id=email text="Email">Email</h1>
<p>
  Emails is our primary way of communicating within the team, as we appreciate each
  other's time.<br>
  We use it to discuss issues offline, to
  notify about code modifications (<a href=#jdoc>jdoc</a>), as well as provide
  tasks to each other and share useful information.<br>
  Since this interface is central to the way we work, just like with
  <a href=#coding>coding conventions</a>, we also adopted an
  <a href=/dna/comm#email>email style guide</a> to speak the same language, and be
  more efficient while handling it as part of our regular tasks.
</p>

<h1 id=version_plan text="version_plan">version_plan: Open planning for the
  near and far future</h1>
<p>
  The version plan can be found in <code>doc/design/version_plan.txt</code>.<br>
  Each engineer will have a section with his login and username, holding his
  future and current tasks.
  The version plan holds the R&D planned tasks. It is the engineer's
  responsibility to update his progress in this file once a day.<br>
  Updating this file can be done easily with <a href=#cvsed>cvsed</a>.
  Writing guidelines can be found in the
  <a href=/dna/plan_code#vp>Version plan code</a>.
</p>

<h1 id=daily text="Daily">daily: Open reporting of daily achievements</h1>
<p>
  Your daily file is a text file, located under your name in
  <code>.zon/doc/report</code> directory.<br>
  The goal of this file is to report your daily achievements, describe your
  commitment (tasks you will complete for sure in the next day) and state your
  next planned task/s (tasks your are about to start after completing your
  commitment).<br>
  This daily report, makes our development
  <a href=/dna#transparentall>transparent</a> and let everybody understand what
  everybody does, as well as let everybody comment or suggest what is best to
  do next (you may use the <a href=/dna/dict#jdoc>NOTIFY</a> to let specific
  people know about your progress).<br>
  Updating this file is done every day, usually at the end of it (you may
  choose to update it at the beginning of the work day, summarizing your
  previous working day) using our <a href=#cvsed>cvsed</a> tool.<br>
  What should be reported?<br>
  In general, every task that took you more than half a day, should be
  reported.<br>
  What kind of tasks should I report?<br>
  The file actually describes your working progress, according to the plan
  described in <a href=#version_plan>version_plan.txt</a>.
  Writing guidelines can be found in the
  <a href=/dna/plan_code#daily>Daily code</a>.
</p>

<h1 id=prod_weekly text="Product weekly report">Product weekly report</h1>
<p>
  A weekly executive summary, generated by product or project owners, to their
  team, managers and stake holders, to be send by the end of the week,
  spreading the news about weekly accomplishments.<br>
  What should be reported?<br>
  In general, every achievement accrued and completed during the last week
  (with respect to a specific product/responsibility) should be reported as
  well as relating to the activities and goals to be carried out the
  following week.<br>
  Be <a href=/dna#transparent-precise>precise</a>. Write down numbers. Compare
  to previous weeks and explain the growth/regression, success/failure.
</p>
<xmp cat=bad>
  Was a great week: we reached 95% success rate in install flow, so
  our installs improved dramatically.
  we have many ideas we will work on next week to continue improving it.
  Also the homepage changes helped to get the numbers up.
</xmp>
<xmp cat=good>
  Improved number of downloads on hola homepage
  as a result of improving the user flow during installation.
  Completed:
  + web installer - increase the installs from 65% to 95% by
    fixing technical bugs during installation flow.
  Planned:
  * Design and implement the main view in hola homepage to increase the first
    click on the main button from 35% to 70% (attached first version of the
    new design.  we will run a test during the weekend).
</xmp>

<h1 id=online text="Online">Online</h1>
<p>
  The working hours of everyone, including management, are all open for the
  whole company to see - enabling real time peer collaboration.<br>
  This allows the company's R&D to be spread out in 20+ cities, over 15 time
  zones, and still be an efficient and productive development team.
</p>

<h1 id=dna_mgr text="DNA Manager">DNA Manager</h1>
<p>
  Spark is a <a href=/dna#dna>DNA company</a><br>
  To keep our DNA, which is critical to our success, the DNA manager
  overlooks all activities in the company, and makes sure they are compliant
  with our DNA, which we all participated in creating.<br>
  This includes activities such as:
</p>
<ul>
  <li><a href=#version_plan>version plan</a></li>
  <li><a href=#daily>daily</a> report</li>
  <li>attendance: hours, vacations, leave, sick, holiday...</li>
  <li><a href=/dna/comm>emails and communications</a></li>
  <li>R&D and Deploy shifts</li>
  <li>DNA training sessions in <a href=/dna/bootcamp>bootcamp</a></li>
  <li><a href=/dna#dna-team-veteran>Spark ranks</a></li>
  <li>... and generally looking out for any deviation from our DNA</li>
</ul>

<h1 id=attendance text="Attendance">Attendance</h1>
<p>
  At Spark you may choose to work from any location you prefer to be as
  productive and effective as you can.<br>
  We find that working in the office with your peers is typically the most
  productive environment and most fun to work at. This is the reason we have
  several offices worldwide, allowing our employees to spend their day
  with their peers. So while working from our offices, we usually work for 9.5
  hours a day (working hours are usually 09:00-18:30), out of which 30 minutes
  is our <a href=#chef>lunch break</a>. Minimum working day is usually 4-5h a
  day.<br> But some of us live far from the office or in countries where Spark
  does not have an office and so must work from
  <a href=/dna/cloud>home (cloud office)</a>.
</p>

<h2 id=attendance-report>Reporting attendance</h2>
<p>
  We have several interfaces to report attendance:
</p>
<ul>
  <li>
    <b>attendance clock</b><br>
    When working from the office, use your card or your fingerprint on the
    attendance clock, at the entrance, to login / logout upon entering and
    leaving the office.
  </li>
  <li>
    <b>web</b><br>
    <a href=http://web.holaspark.com/timesheet>Timesheet</a> web interface (requires
    VPN connection), which enables you to login and logout while defining your
    work location:
    <ul>
      <li><dfn>At home</dfn> - When working from home or hotel</li>
      <li>
        <dfn>In Office</dfn> - When working from Spark's office only if the
        attendance clock is not working or available
      </li>
      <li>
        <dfn>On Road</dfn> - Used by sales people, going to meetings outside
        their home or hotel
      </li>
    </ul>
  </li>
  <li>
    <b>email</b> (sales team only)<br>
    Send an email to <code>login@holaspark.com</code> with your location
    in the subject (<code>home</code>, <code>office</code>,
    <code>meeting</code>, <code>on the road</code>...):
    <div class=email cat=good>
      From: nir@holaspark.com
      To: login@holaspark.com
      Subject: meeting
    </div>
    to logout, send:
    <div class=email cat=good>
      From: nir@holaspark.com
      To: logout@holaspark.com
    </div>
  </li>
  <li>
    <b>command line</b><br>
    <code>daily login</code> / <code>daily logout</code> - which enable you
    to login and logout respectively from within your Ubuntu VM (usually being
    used by the R&D)
  </li>
</ul>

<h2 id=attendance-absence>Reporting absence</h2>
<p>
  If you have a planned absence - report it in advance on your
  <a href=#daily>daily</a> report. Unplanned absence (e.g. sick leave) should
  be reported on the daily report as well.<br>
  If you plan to work less hours a day for a given period of time, notify your
  manager - to set expectation of your progress correctly. Your daily report
  for such days should also indicate it.
</p>

<h1 id=suggest text="Suggest">Suggest</h1>
<p>
  When making an improvement suggestion, whether of an internal tool or of a
  new design to replace an existing one, the suggestion needs to be well
  thought of before. The responsibility for thinking it out over, and bringing
  well-prepered suggestions are on the one who is suggesting it.<br>
  The <a href=/dna#effective-cost>cost-effectiveness</a> of the proposed
  solution should be the main factor.
</p>

<h2 id=suggest-checklist text="Suggestion checklist">Suggestion checklist</h2>
<ul>
  <li>How much time is spent today due to the existing design?</li>
  <li>How much time will be saved after the implementation?</li>
  <li>
    How much Total Cost Ownership is the change (preparing suggestion,
    discussion time, agreeing on it, coding, debugging, deploying, finding all
    the edge cases)?
  </li>
  <li>Do we lose any features? Are you fully aware that these features are
    not required?</li>
  <li>Do you have a full idea on how to implement it, on all its technical
    aspects and details, and there are no 'black holes'?</li>
  <li>What are the cheaper/quicker ways to solve the same problem?</li>
</ul>
</div>`;
