import * as _jquery from 'jquery';
import Layout from '../../../components/layout.js';
import anchorific from '../../../components/anchorific.js';
import {dna_style} from '../../../components/style.js';
import etask from '../../../../util/etask.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
const NL = '\n';
const $ = jquery__WEBPACK_IMPORTED_MODULE_1__;
anchorific.init($);

export const getStaticProps = ({locale})=>etask(function*(){
  return {props: yield serverSideTranslations(locale, ['common'])}; });

export default function DNA(){
  Layout.use_scroll_to_hash($);
return (
<Layout title='LIF DNA' desc='CVS Basics' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>cvs Basics</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=minimal text="Minimal Info">Minimal Info</h1>
<p>
  update: (<code>cvsup</code> is equal to <code>cvs -q up -dP</code>)<br>
  <code>cvsup</code><br>
  edit/modify the file:<br>
  <code>g the_file.txt</code><br>
  see changes:<br>
  <code>cvs di the_file.txt</code><br>
  if ok, then commit (make sure first all editors are closed!):<br>
  <code>cvs ci the_file.txt</code><br>
  update-edit-view-diff-commit in one command using Spark's cvsed tool:<br>
  <code>cvsed doc/procedure/support.txt</code><br>
</p>

<h1 id=basic text="Basic Info">Basic Info</h1>
<h2>checkout</h2>
<p>checkout whole ZON tree into sub-directory '.zon':<br>
  <code>cvs co -d .zon zon</code>:
</P>
<p>checkout whole ZON tree into sub-directory 'zon2':<br>
  <code>cvs co -d zon2 zon</code><br>
</p>
<p>faster, (but not garenteed clean) if you already have a checked out tree:
  <br>
  <code>rm -rf .zon/build.*</code><br>
  <code>cp -a .zon zon2</code><br>
  <code>cd zon2</code><br>
  <code>zcvs purge</code> remove local modifications<br>
  <code>cvsup</code>
</p>
<p>checkout just specific sub-tree
  to checkout zon/pkg/main into my_dir:<br>
  <code>cvs co -d my_dir zon/pkg/main</code><br>
</p>
<h2>update</h2>
<p>check if we are updated with the server, without actually updating local
  file<br>
  <code>cvs -n update</code><br>
  <br>
</p>
<p>update local files from the server<br>
  <code>cvs update</code> (better: <code>cvsup</code>, faster-offline
  <code>zcvs update</code>)<br>
  possible results:<br>
  <code>?</code> unknown file - not in server, not in .cvsignore and not
  scheduled for add<br>
  <code>M</code> Modified<br>
  <code>C</code> (Conflict) Modified locally and on the server<br>
  <code>U</code> Updated on the server<br>
  <code>P</code> (Patched) Updated on the server (like U)<br>
  <code>A</code> scheduled for add<br>
  <code>R</code> scheduled for remove<br>
  better (does <code>cvs -q up -dP</code>): <code>cvsup</code><br>
  fast offline: <code>zcvs udate</code><br>
  <br>
  update a specific file<br>
  <code>cvs update my_app.c</code><br>
  better: <code>cvsup my_app.c</code><br>
</p>
<h2>diff</h2>
<p>
  see differences between local file and server file<br>
  <code>cvs diff my_app.c</code><br>
  better (<code>g -d my_app.c</code>): <code>cvsdiff my_app.c</code><br>
  <br>
  see differences between two versions on the server<br>
  <code>cvs diff -r tag-0_1_10 -r tag-0_1_12 my_app.c</code><br>
</p>
<h2 text="commit">commit - Save your changes to the cvs repository</h2>
<h3>How to commit</h3>
<p>
  first, update the file to make sure you are working on the latest copy the
  result of the update should be M on the file if the result is C then resolve
  the conflicts manually<br>
  <code>cvs update my_app.c</code><br>
  make sure that only the lines you want to be commited will be commited<br>
  <code>cvs diff my_app.c</code><br>
  commit the file, and write a short description of the change, for the other
  users to understand at a glance<br>
  <code>cvs commit my_app.c</code><br>
  make sure that following the commit, the command line responds with success
  message<br>
  <br>
  adding a new file<br>
  <code>cvs add my_app.c<br>
    cvs commit my_app.c</code><br>
  or<br>
  <code>cvs ci my_app.c</code><br>
  <br>
  removing a file<br>
  <code>rm my_app.c<br>
    cvs remove my_app.c</code><br>
  or<br>
  <code>cvs rm my_app.c<br>
    cvs ci my_app.c</code><br>
  <br>
  moving a file<br>
  There is no native move. A move is done by removing and adding the file
  again. The first line of the log message should be 'MOVED old --&gt; new' and
  the file names should include the full path (include the repository
  name).<br>
  <code>
    mv .zon/doc/design/db_design.txt .zon/doc/requirements/db.txt<br>
    cvs rm .zon/doc/design/db_design.txt<br>
    cvs add .zon/doc/requirements/db.txt<br>
    cvs ci .zon/doc/requirements/db.txt .zon/doc/design/db_design.txt<br>
  </code>
  <br>
  <code>
    -----------------------------------------------------------<br>
    MOVED zon/doc/design/db_design.txt --&gt; zon/doc/requirements/db.txt<br>
    moved documetation from design to requirements dir.<br>
    CVS:<br>
    CVS: Adding<br>
    CVS:   new/new_name.txt<br>
    CVS: Removing:<br>
    CVS:   old/old_name.txt<br>
    -----------------------------------------------------------<br>
  </code>
  <br>
  checking status of a file<br>
  gets local version of the file, and the server version<br>
  <code>cvs stat my_app.c</code><br>
  <br>
  see the list of commits to a file<br>
  <code>cvs log my_app.c</code><br>
  <br>
  see part of log relating to specific tag/branch:<br>
  <code>cvs log -N -rTAG my_app.c</code><br>
  <br>
  see who when and where a line was added/modified<br>
  # this will detect when the call to <code>my_func()</code> was added to the
  file<br>
  <code>cvs annotate my_app.c | grep "my_func()"</code><br>
  <br>
  adding a lot of new files and directories:<br>
  DO NOT USE <code>cvs import</code>! IT IS BROKEN.<br>
  See 'importing 3rd party code' section below.<br>
</p>
<h3>Code commit message</h3>
<p>
  All code commits must have informative commit massage. The message should
  contain the 'why' while the diff is the what.
</p>
<div cat=bad>
  disable chrome
</div>
<div cat=good>
  temporary disabling chrome testing while debugging sporadic BAT errors
</div>
<h3>Plan file commit message</h3>
<p>
  <!-- XXX yuval: cvsed is internal tool and this is in DNA -->
  Commit message for tasks file such as version_plan.txt can be just
  <code>updated</code> when doing day-to-day updates. You can use
  <code>cvsed vp -M</code> for doing that.<br>
  When doing doing non trivial changes, write meaningful commit massage such
  as <code>remove obsolete tasks</code>.
</p>

<h1 id=advanced text="Advanced Info">Advanced Info</h1>
<p>
  to take out admin files<br>
  <code>cvs checkout CVSROOT</code><br>
  <br>
  to change an admin file<br>
  <code>cvs commit cvswrappers</code><br>
  <br>
  to checkout Zon V0.1.12 to zon_0_1_12 directory<br>
  <code>cvs co -d zon_0_1_12 -r tag-0_1_12 wd</code><br>
  <br>
  to add a binary:<br>
  <code>cvs add -kb the_file<br>
    cvs commit the_file</code><br>
  <br>
  to change an already committed ascii file to binary:<br>
  <code>rm the_file<br>
    cvs admin -kb the_file<br>
    cvs update -A the_file</code><br>
  <br>
  to change an already committed file that has -kk (or other keywords) to
  binary:<br>
  <code>rm the_file<br>
    cvs up -kb the_file<br>
    cvs commit the_file</code><br>
  <br>
  to branch a new version ('code freeze' for V1.0):<br>
  make sure everything is updated before tagging:<br>
  if the branch is from the main dev trunk, then: (this is the normal case)<br>
  <code>cvs update -A -d</code><br>
  if the branch is from another branch, then:<br>
  <code>cvs update -r branch-0_5 -d</code><br>
  add the tag to the repository:<br>
  <code>cvs tag -c -b branch-1_0<br>
    cvs tag -c tag-1_0_0</code><br>
  now make the local copy use the tag:<br>
  <code>cvs update -r branch-1_0</code><br>
  <br>
  add a tag without a brach:<br>
  <code>cvs tag -c tag-0_1_12</code><br>
  <br>
  renaming a tag:<br>
  do not use tag use rtag, since tag does work on Attic files.<br>
  <code>cvs rtag -r OLD_TAG NEW_TAG .zon/pkg/util<br>
    cvs rtag -d OLD_TAG .zon/pkg/util</code><br>
  <br>
  renaming a branch tag:<br>
  On the repository itself perform the following:<br>
  <code>for xx in \`find . -type f\` ; do rcs -nNEW_TAG:OLD_TAG $xx ; done</code><br>
  It should be done on the repository itself since "cvs admin -n" do not<br>
  perform the action on files in the Attic.<br>
  The last operation crated a new tag, now actually remove the old tag:<br>
  <code>for xx in \`find . -type f\` ; do rcs -nOLD_TAG $xx ; done</code><br>
  <br>
  search logs between dates in a specific branch into a file :<br>
  <code>cvs log -Nd"01Jul2001&lt;24Sep2001" -rbranch-10 &gt; file_name
    2&gt;&1</code><br>
  <br>
  listing the changes from date until date:<br>
  <code>cvs log -d "8 days ago&lt;0 days ago" * &gt; changes.txt</code><br>
  now edit the file changes.txt and search for the word "revision " (the space
  is important)<br>
  <br>
  updating a branch for a specific date and time:<br>
  <code>cvs up -r branch-3_3 -D"2003-10-21 12:30"</code><br>
  This will NOT put a sticky date (see cvs stat) but will update the files
  on the branch for the specified date and time.<br>
  <br>
  importing changes from a modified tree to a tree just checked out (without
  committing)<br>
  assume the product is named zon, then:<br>
  <code>~/zon.mod$ cvs diff -c &gt; mod.diff<br>
    ~/zon.mod$ cd ..<br>
    ~$ cvs co -d zon.new zon<br>
    ~$ cd zon.new<br>
    ~/zon.new$ patch -p0 -d . &lt; ../zon.mod/mod.diff</code><br>
  <br>
  NEVER use a pipe when doing cvs ci:<br>
  wanted to commit a lot of newly added files so<br>
  <code>~$ cvs -q up | grep "^A " &gt; x</code><br>
  went over x and saw that those are the files that should be commited<br>
  <code>~$ cat x | xargs cvs ci</code><br>
  this is WRONG since a pipe is used before xargs. this pipe messes cvs ci up,
  since cvs ci exects to use stdin for vi for log message editing. The CORRECT
  way to do it is hence:<br>
  <code>~$ cvs ci 'cat x'</code><br>
  <br>
  Listing all available modules on remote CVS for checkout (cvs co):<br>
  <code>~$ cvs -d :pserver:anoncvs@anoncvs.FreeBSD.org:/home/ncvs co
    -c</code><br>
  this particular CVS has many ports which are not included by default into
  checkout of FreeBSD itself.<br>
  <br>
  changing a file to binary:<br>
  <code>cvs admin -kb drawing.bmp</code><br>
  <br>
  changing a file back to regular text:<br>
  <code>cvs admin -kkv listing.txt</code><br>
  <br>
  canceling keyword substitution, but leaving crlf expantion:<br>
  <code>cvs admin -ko file.cmd</code><br>
</p>

<h1 id=real_life text="Real Life Examples">Real Life Examples</h1>
<p>
  checking out a new copy of the dev tree:<br>
  <code>cvs co -d src.dev wd</code><br>
  <br>
  checking out a new copy of the v4.00 tree:<br>
  <code>cvs co -d zon_1_0 -r branch-1_0 zon</code><br>
  <br>
  creating a tag WITHOUT a branch:<br>
  <code>c:\src.dev&gt; cvs tag -c tag-1_0_1</code><br>
  <br>
  move a tag for a certain file from one version to another (force):<br>
  <code>cvs tag -c -F beta_qa-intel_ixp-15oct01-100-rel
    make_dist.sh</code><br>
  <br>
  alternate more correct way to mark branches<br>
  tag the tree<br>
  <code>cvs tag -c V_430</code><br>
  mark the branch point<br>
  <code>cvs tag -c -b V_430_branch_yymmdd</code><br>
  or if you don't have a working copy<br>
  <code>cvs rtag -c -b -r V_440 V_430_branch_yymmdd</code><br>
  <br>
  creating V4.10 branch from dev tree:<br>
  make sure the files in dev are updated:<br>
  <code>cvs update</code><br>
  create the V4.10 branch:<br>
  <code>cvs tag -c -b V_410</code><br>
  checkout the V4.10 to be able to work on it:<br>
  <code>cvs co -d src.410 -r V_410 zon</code>
</p>

<h1 id=merging text="Merging Info">Merging Info</h1>
<p>
  No need to do before/after tags for merges!<br>
  Use branch+date if there is no tags available.<br>
  revisions between which to merge can be referenced tags (either textual or
  numeric), both static and dynamic (branches). one can merge between dates on
  a branch where no static tags are available by using the ":" operator.<br>
  example: to merge change which occured on branch-20 between the beginning of
  july and the end of september of 2001 we need to use:<br>
  <code>cvs up -kk -j branch-20:02-Jul-01 -j branch-20:01-Oct-01</code><br>
  <br>
  merging branch fixes with dev:<br>
  first, tag the merge location:<br>
  <code>src.dev$ cvs up -d -r V_432<br>
    src.dev$ cvs tag -c V_432_MERGE_2MAY00_DEV</code><br>
  now, get back to the dev tree:<br>
  <code>src.dev$ cvs up -A -d</code>
  add changes from branch (this example adds change from V_431 to V_432 to
  the dev branch)<br>
  <code>src.dev$ cvs up -d -kk -j V_431_MERGE_4APR00_DEV -j
    V_432_MERGE_2MAY00_DEV</code><br>
  now solve conflicts, and check the modification in the files.<br>
  you can take a look at the list of changed files again using:<br>
  <code>src.dev$ cvs up</code><br>
  you can take a look at the list of changes inside the files using:<br>
  <code>src.dev$ cvs diff</code><br>
  now commit the changes:<br>
  <code>src.dev$ cvs commit</code><br>
  the remark should note the parameters of the diff. e.g.: "merge from
  V_431_MERGE_4APR00_DEV till V_432_MERGE_2MAY00_DEV into dev"<br>
  Update merges.csv.
</p>

<!-- obsolete howto, need to update --!>
<!-- XXX yuval: This is internal howto. Should not be here. --!>
<h1 id=cvs_lock text="Releasing CVS Locks">Releasing CVS Locks</h1>
<p>
  If you get the following CVS lock:<br>
  cvs tag: [06:32:24] waiting for noam's lock in<br>
  /arch/cvs/rg/os/linux-2.4/arch/arm/boot/bootp<br>
  <br>
  then telnet cvs, find the locks, kill the processes locking and remove the
  locks. You do not need to be super-user on cvs to remove the locks.<br>
  <br>
  <code>
    telnet cvs<br>
    fs$ cd /mnt/ram/cvslock/rg<br>
    fs$ find | grep "#cvs"<br>
    ./os/linux-2.4/arch/m68k/sun3/#cvs.rfl.cvs.home.jungo.com.14392<br>
    fs$ ps auxw | grep 14392<br>
    \.\.\.<br>
    fs$ kill 14392<br>
    fs$ rm -rf os/linux-2.4/arch/m68k/sun3<br>
  </code>
  <br>
  <br>
  If there are many locks, then you can do the following:<br>
  <code>$ killall cvs<br>
    $ rm -rf /mnt/ram/cvslock/*</code><br>
  <br>
  Notice that you will be killing all active CVS connections.
</p>

<h1 id=branch_tag text="Creating a new branch or tag">Creating a new branch
  or tag</h1>
<p>
  Any tag/branch on CVS trees (e.g. rg, wd, uw, ut, project) should be documented
  in versions.csv. Virtually all tags are now created as soft-tags, which means
  committing them in versions.csv is all you need to do!!
</p>
<p>
  Updating versions.csv: one of the following options:
</p>
<ul>
  <li>
    Creating a new official WinDriver branch (V_620) or tag (R_622) should
    be done according to &lt;ilya - please point to the relevant
    document!&gt;
  </li>
  <li>
    Creating a new official Spark branch (3.10.x branch or 3.10.4.1.x branch),
    or a new official Spark tag (3.10.4 or 3.10.4.1.6), should be done with
    zversion only! (see [1]).
  </li>
  <li>
    Spark development branches for BIG features: if this development branch
    will have a long life time, and many developers will be working on it,
    and a lot of Bugzilla and QA work will be done on the branch, then
    consider opening it as a customer branch (see above).
  </li>
  <li>
    any other tag/branch: use 'cvs tag' for initial creation in
    versions.csv. After running 'cvs tag', you can later return to
    versions.csv and chang any further settings as required - see
    explanations below.
  </li>
</ul>
<p>
  Use of 'cvs tag':<br>
  (Example: tag-4_7_11 on branch-4_7)<br>
  <code>$ cvs tag -v 4_7_11 -o branch-4_7 -m "product tag for 4.7.11"
    tag-4_7_11</code><br>
  (add <code>-b</code> for branches)<br>
  You can use the <code>-n</code> option (of <code>cvs</code>, so it comes
  after <code>cvs</code>) to prevent the changes from being committed to
  versions.csv.<br>
  <br>
  Additional options:<br>
</p>
<ul>
  <li>
    <code>-r DIR</code> defines the repository location for which the tag
    applies.<br>
    default: current location in tree (e.g. 'rg' when you're at the
    top of an RG CVS tree).
  </li>
  <li><code>-b</code>designates that this is a branch</li>
  <li><code>-g</code> mergeto - for branches only;
  designates the branch to which this branch will be auto-merged.</li>
  <li>
    <code>-t</code> time of tag - default: NOW. If you want an earlier time,
    put the time of the last commit that applies to the tag you're adding.<br>
    MAKE SURE TO USE UTC TIME (as it appears in 'CVS Search').
  </li>
  <li><code>-h</code> adds this as a hard-tag to CVS (come to yarony/derry
    first to explain why you need this!)</li>
  <li><code>-f</code> force - allows moving of existing tags.</li>
  <li><code>-c MSG</code> specifies the CVS commit message (default: same text
    given with -m)</li>
  <li><code>-d</code> display in Bugzilla - should usually be used only with
    tags/branches added using jversion, or for ST tags.</li>
  <li><code>rtag</code> used instead of 'tag', if you want to do the tagging
    on CVS without having a checked-out repository.</li>
</ul>
<br>
<p>
  Please look further at the <code>cvs</code> usage message for a full
  description of options to this command:<br>
  <code>$ cvs | grep -A25 "cvs tag"</code>
  Explanation of versions.csv fields:
</p>
<ul>
  <li>symbol: name of symbol (tag or branch) as it appears in CVS</li>
  <li>version: name of version as known by Spark users</li>
  <li>
    repository: location in CVS repository.<br>
    usually it is on top of one of our trees: ut, uw, wd, rg, etc. can be in
    lower points in trees for cases like vendor branches.
  </li>
  <li>isbranch: is the symbol a branch ?</li>
  <li>onsymbol: location point of symbol in CVS tree: either tag the the
    symbol was placed on, or parent branch.</li>
  <li>owner: owner of branch (responsible for code on it)</li>
  <li>creator: who actually created it</li>
  <li>
    tag_date: when was the tagging done - in UTC (GMT) time. for soft tags you
    can put the time of the latest commit that this branch/tag is based on.
  </li>
  <li>mergeto: for branches - what branch will this branch auto-merge
    into?</li>
  <li>description: textual description</li>
  <li>
    pl_owner: for customer branches/tags - the PL responsible for it. used by
    bugzilla to automatically assign R&D owner of bugs/enhancements, where
    this is applicable.
  </li>
  <li>qa_owner: QA owner. used in customer branches to automatically determine
    QA owner for bugzilla issues.</li>
  <li>
    soft_tag: is this a soft tag/branch?<br>
    (should usually be 1, unless you have a good reason for using a hard-tag)
  </li>
  <li>
    allow_manual_tag: should usually be <code>0</code>, unless you have a VERY good reason
    for moving the tag on some files. usually it's better to just add a new tag
    in such cases.
  </li>
  <li>
    allow_commit: allow commit in this symbol?<br>
    should always be <code>0</code> for tags.<br>
    for branches, it allows to close the branch for committing. generally only
    active branches should have this field set to <code>1</code>.
  </li>
  <li>
    display_in_bugzilla: is this a tag/branch we want to display in the
    Bugzilla versions tree and accept it in the version fields?
  </li>
</ul>

<h1 id=diff_ignore_keywords text="Diff files and ignore CVS keywords">Diff
  files and ignore CVS keywords</h1>
<p>
  Use the following diff command to exclude CVS directories and CVS keywords:
</p>
<code>
  diff -uNbNr --exclude="CVS" --exclude=".dist" -I
  "\$Id\|\$Author\|\$Date\|\$Header\|\$Locker\|\$Log\|\$RCSfile\|\$Revision\|\$Source\|\$State"
  rg_dir/ rg_dir1/
</code>
</div>`;
