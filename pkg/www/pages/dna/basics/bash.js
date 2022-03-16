import * as _jquery from 'jquery';
import Layout from '../../../components/layout.js';
import anchorific from '../../../components/anchorific.js';
import {dna_style} from '../../../components/style.js';
import {H1, H2, H3} from '../../../components/anchor.js';
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
<Layout title='LIF DNA' desc='Bash Basics' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>bash Basics</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h1 id=basic_help text="Bash basics help">Bash rescue</h1>
<p>Tips that helps you getting started.</p>
<p>
  <kbd>history</kbd>: print commands history. When a veteran come to your
  computer and does a lot of 'black magic', or you remember that you did
  something somehow, and not sure exacly how, or if you did something wrong and
  not sure what, this will help you understand, <kbd>history</kbd> can come in
  handy.
</p>
<p><a href=mailto:dna@holaspark.com>contribution welcome!</a></p>
<h1 id=shortcuts text="Bash Keyboard shortcuts">Bash Keyboard
  shortcuts</h1>
<h3 id=glossary text="Glossary">Glossary</h3>
<li>
  <kbd>KEY1</kbd>+<kbd>KEY2</kbd>: Press KEY1, add KEY2 before releasing KEY1,
  release both
</li>
<li>
  <kbd>KEY1</kbd>, <kbd>KEY2</kbd>: Press KEY1, release KEY1, press KEY2,
  release KEY2
</li>
<h3 id=shortcuts_keys text="Shortcuts">Shortcuts</h3>
<p>
  <kbd>Esc</kbd>, <kbd>B</kbd> - move one word backwards<br>
  <kbd>Esc</kbd>, <kbd>F</kbd> - move one word forward<br>
  <kbd>Esc</kbd>, <kbd>Delete</kbd> (backspace) - delete one word backwards<br>
  <kbd>Esc</kbd>, <kbd>D</kbd> - delete one word forward<br>
  <kbd>Ctrl</kbd>+<kbd>Y</kbd> - insert last deleted word<br>
  <kbd>Ctrl</kbd>+<kbd>A</kbd> - move to beginning of line<br>
  <kbd>Ctrl</kbd>+<kbd>E</kbd> - move to end of line<br>
  <kbd>Ctrl</kbd>+<kbd>U</kbd> - kill back to beginning of line<br>
  <kbd>Ctrl</kbd>+<kbd>K</kbd> - kill forward to end of line<br>
  <br>
  <kbd>Esc</kbd>, <kbd>/</kbd> - complete as filename<br>
  <kbd>Ctrl</kbd>+<kbd>X</kbd>, / - list possible filename<br>
  <br>
  <kbd>Esc</kbd>, <kbd>~</kbd> - complete as user<br>
  <kbd>Ctrl</kbd>+<kbd>X</kbd>, <kbd>~</kbd> :- list possible user<br>
  <br>
  <kbd>Esc</kbd>, <kbd>$</kbd> - complete as variable<br>
  <kbd>Ctrl</kbd>+<kbd>X</kbd>, <kbd>$</kbd> :- list possible variable<br>
  <br>
  <kbd>Esc</kbd>, <kbd>@</kbd> - complete as hostname<br>
  <kbd>Ctrl</kbd>+<kbd>X</kbd>, <kbd>@</kbd> :- list possible hostname<br>
  <br>
  <kbd>Esc</kbd>, <kbd>!</kbd> - complete as command<br>
  <kbd>Ctrl</kbd>+<kbd>X</kbd>, <kbd>!</kbd> :- list possible command<br>
  <br>
  <kbd>Esc</kbd>, <kbd>C</kbd> - capitalize word<br>
  <kbd>Esc</kbd>, <kbd>U</kbd> - all cap (upper-case) word<br>
  <kbd>Esc</kbd>, <kbd>L</kbd> - all low-case word<br>
  <kbd>ESC</kbd>, <kbd>.</kbd> - insert last killed word<br>
  <br>
  <kbd>Ctrl</kbd>+<kbd>L</kbd>(ell) - clear screen (not in CRT)<br>
  <kbd>Ctrl</kbd>+<kbd>T</kbd> - transpose char ("swap")<br>
  <kbd>Ctrl</kbd>+<kbd>V</kbd> - quoted insert (next char is "quoted")<br>
  <br>
  <kbd>Alt</kbd>+<kbd>.</kbd> - retrieve last word from the previous executed
  command<br>
  <kbd>Esc</kbd>, <kbd>.</kbd> - retrieve last word from the previous executed
  command
</p>

<h1 id=techniques text="Bash useful techniques">Bash useful
  techniques</h1>
<h2 id=techniques-search_text text="Text in all sub dirs">Search for text
  in all files in the current directory and below</h2>
<p>
  (this example searches for all .c files for the text my_func)<br>
  <code>find . | grep [.]c | xargs grep my_func</code><br>
  or better:<br>
  <code>find . -name "*.c" | xargs grep my_func</code><br>
  or:<br>
  <code>find . -name "*.c" -exec grep -Hn my_func {} \;</code>
</p>

<h2 id=techniques-function text="Function with space">Searching for
  my_func in files that might include a space in the name</h2>
<p><code>find . -printf "\"%p\" " | xargs grep my_func</code></p>

<h2 id=techniques-utility text="Send all files to a utility">Sending all
  files to a utility one by one</h2>
<p>
  edit a file run_dos2unix:<br>
  <code>for filename in "$@" ; do dos2unix $filename ; done</code><br>
  execute in the bash:<br>
  <code>
    $ chmod +x run_dos2unix<br>
    $ find . -name "*.c" | xargs ./run_dos2unix
  </code>
</p>

<h2 id=techniques-utility_one text="Send all files to a utility">
  Sending all files to a utility one by one, but in one line</h2>
<p><code>find . -name '*.c' | xargs -n 1 dos2unix</code></p>

<h2 id=techniques-workset text="Defining a 'workset'">Defining a "workset"
  of files you usually work on</h2>
<p>
  edit file with names of files you work on, one on a line.<br>
  then run <code>gvim \`cat workset\`</code> to load them all into gvim.
</p>

<h2 id=techniques-capture_terminal text="Capture all terminal output">
  Capture all terminal output into file using script</h2>
<p>
  <code>
    $ script my_output_file<br>
    :<br>
    : some commands & stuff here<br>
    : (e.g., make)<br>
    :<br>
    $ exit<br>
  </code>
  now all the output you saw between <code>script</code> and
  <code>exit</code> is in my_output_file
</p>
</div>`;
