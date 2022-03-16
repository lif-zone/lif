import * as _jquery from 'jquery';
import Layout from '../../../components/layout.js';
import anchorific from '../../../components/anchorific.js';
import {dna_style} from '../../../components/style.js';
import {H1, H2, H3} from '../../../components/anchor.js';
import etask from '../../../../util/etask.js';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
const $ = jquery__WEBPACK_IMPORTED_MODULE_1__;
anchorific.init($);

export const getStaticProps = ({locale})=>etask(function*(){
  return {props: yield serverSideTranslations(locale, ['common'])}; });

export default function DNA(){
  Layout.use_scroll_to_hash($);
return (
<Layout title='LIF DNA' desc='VI Basics' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>vi Basics</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h1 id=minimal text="Minimal">Minimal</h1>
<h2 id=hola text="Spark's shortcuts">Spark's shortcuts</h2>
<p><kbd>g</kbd> - Open gvim (from bash)</p>
<h2 id=minimal-files text="Files">Files</h2>
<p>
  <kbd>:</kbd><code>q</code> - quit<br>
  <kbd>:</kbd><code>w</code> - save<br>
  <kbd>:</kbd><code>x</code> - save and quit<br>
  <kbd>:</kbd><code>wqa</code> - save and quit on all open windows
</p>

<h2 id=minimal-jump text="Jumping to lines">Jumping to lines</h2>
<p>
  <code>401gg</code> - line 401<br>
  <code>gg</code> - begining of file<br>
  <kbd>Shift</kbd>+<kbd>G</kbd> - end of file<br>
</p>

<h2 id=minimal-editing text="Editing">Editing</h2>
<p>
  <kbd>I</kbd> - insert mode (to add the word <code>hello</code> at the
  possition of the cursor type <code>ihello</code><kbd>ESC</kbd>)<br>
  <kbd>Shift</kbd>+<kbd>A</kbd> - add text at the end of the line (add
  <code>;</code> at the
  end of this line: <code>A;</code><kbd>ESC</kbd>)<br>
  <kbd>Shift</kbd>+<kbd>I</kbd> - adds at beginning of line<br>
  <kbd>O</kbd> - add a new line and goto insert mode
  (<kbd>Shift</kbd>+<code>O</code> add above the cursor)<br>
  <kbd>ESC</kbd> - exit edit mode<br>
  <kbd>x</kbd> - delete a char<br>
  <code>dd</code> - delete a line (<code>dw</code> delete a word)<br>
  <code>yy</code> - copy a line into buffer (<code>yw</code> copy a word)<br>
  <kbd>p</kbd> - paste buffer (<kbd>Shift</kbd>+<kbd>P</kbd> paste before
  cursor)<br>
</p>

<h1 id=basics text="Basics">Basics</h1>
<h2 id=basics-editing text="Editing">Editing</h2>
<p>
  <code>"*y</code> - copy to Windows buffer yunk<br>
  <code>"*p</code> - paste from Windows buffer<br>
  <code>&gt;&gt;</code> - indent section one tab (<code>&lt;&lt;</code>
  unindent)<br>
  <kbd>=</kbd> - automatically indent section according to language rules<br>
</p>

<h2 id=basics-movement text="Movement">Movement</h2>
<p>
  <kbd>W</kbd> - next word (<kbd>Shift</kbd>+<kbd>W</kbd> search for
  whitespace), b and B for back word, e - end of word (E search for
  whitespace)<br>
  <code>]]</code> - next function (<code>[[</code> back)<br>
  <code>][</code> - end of function (<code>[]</code> back)<br>
  <kbd>F</kbd>+<code>&lt;char&gt;</code> - next char
  (<kbd>Shift</kbd>+<kbd>F</kbd> back), <kbd>T</kbd> and
  <kbd>Shift</kbd>+<kbd>T</kbd> to get to before next char
</p>

<h2 id=basics-visual text="Visual">Visual</h2>
<p>
  <kbd>V</kbd> - select area<br>
  <kbd>Ctrl</kbd>+<kbd>V</kbd> - select area in column mode<br>
  <br>
  after area is selected:<br>
  <kbd>D</kbd> - delete<br>
  <code>&gt;&gt;</code> - indent section<br>
  <kbd>Y</kbd> - copy to buffer (yunk)<br>
  <kbd>Ctrl</kbd>+<kbd>C</kbd> - copy to Windows Buffer (you can paste with
  Windows applications)
</p>

<h2 id=basics-formatting text="Formatting">Formatting</h2>
<p>
  <code>gq</code> - format (wrap text) selected area<br>
  <code>gqq</code> - format (wrap text) current line<br>
  <code>gqap</code> - format current paragraph<br>
  <kbd>Shift</kbd>+<kbd>J</kbd> - merge current line with the following
  line<br>
</p>

<h2 id=basics-macro_misc text="'Macro' like and misc">'Macro' like and
  misc</h2>
<p>
  <code>[n][operation]</code> - perform an operation n times<br>
  examples:<br>
  <code>5dd</code> - delete 5 lines<br>
  <code>29[down arrow]</code> - go down 29 lines<br>
  <kbd>U</kbd> - undo<br>
  <kbd>Ctrl</kbd>+<kbd>R</kbd> - redo
</p>

<h2 id=basics-telnet text="Using VIM from telnet">Using VIM from telnet</h2>
<p>
  <kbd>H</kbd> <kbd>J</kbd> <kbd>K</kbd> <kbd>L</kbd> - left down up right<br>
  <kbd>Ctrl</kbd>+<kbd>F</kbd> - page down (<kbd>Ctrl</kbd>+<kbd>B</kbd> -
  page up)
</p>

<h2 id=basics-search_replace text="Search and Replace">Search and
  Replace</h2>
<p>
  <kbd>*</kbd> - search for the current word the cursor is on (same as
  <kbd>Ctrl</kbd>+<kbd>F3</kbd> in MSDEV)<br>
  <kbd>N</kbd> - find next (<kbd>Shift</kbd>+<kbd>N</kbd> back)<br>
  <kbd>/</kbd><code>main</code> - search for main (such as main_app)<br>
  <kbd>/</kbd><code>\\&lt;main\\&gt;</code> - search for main as whole word<br>
  <kbd>/</kbd><code>\\&lt;print</code> - search for words starting with print
  (such as printf)<br>
  <kbd>:</kbd><code>se ic</code> - set the option of ignorecase<br>
  <kbd>/</kbd><code>main</code> - after the set option, search for main and
  ignore case (such as Main) (<kbd>:</kbd><code>se noic</code> - this
  option is: no ignorecase)<br>
  <kbd>:</kbd><code>%s/printf/kprintf/g</code> - search in all file
  (<code>%</code> - all the file) for printf, replace with kprintf, replace
  all occurrences (<code>g</code>) - without the <code>g</code> option, if
  there are some occurrences in the same line - only the first one will be
  changed.<br>
  other options: ignore case (<code>i</code>), conditional - ask yes/no
  (<code>c</code>).<br>
  <kbd>:</kbd><code>%s/add(a,\\([a-z]\\+\\))/add(a, \\1)/g</code> - search in all
  file all occurrences of the 'add()' function and make sure it's second
  variable has a space after the comma. <code>\\(</code> and <code>\\)</code>
  group the second variable pattern and refer to it inside the replacement
  pattern by its special number <code>\\1</code>.
</p>

<h1 id=advanced text="Advanced">Advanced</h1>
<h2 id=advanced-insert_mode text="In insert mode">In insert mode</h2>
<p>
  <kbd>Ctrl</kbd>+<kbd>X</kbd> - auto completion.<br>
  <kbd>Ctrl</kbd>+<kbd>P</kbd> - complete word from current file and included
  files (<kbd>Ctrl</kbd>+<kbd>N</kbd> same but without included files)<br>
  <kbd>Ctrl</kbd>+<kbd>D</kbd> definition of macro<br>
  <kbd>Ctrl</kbd>+<kbd>F</kbd> file name<br>
</p>

<h2 id=advanced-buffers text="Buffers">Buffers</h2>
<p>
  <kbd>:</kbd><code>e app.c</code> - open app.c in a new buffer<br>
  <code>gf</code> - when standing on a file-name, opens the file in a new
  buffer<br>
  <kbd>:</kbd><code>b 2</code> - goto buffer number 2<br>
  <kbd>:</kbd><code>buffers</code> - list open buffers<br>
  <kbd>:</kbd><code>bd</code> - close buffer<br>
  <kbd>:</kbd><code>b#</code> - goto last buffer<br>
  <kbd>Ctrl</kbd>+<code>6</code> - goto last buffer<br>
  <kbd>:</kbd><code>set hidden</code> - Allow switching buffers without
  saving.<br>
</p>

<h2 id=advanced-compiling text="Compiling and handling errors (IDE like)">
  Compiling and handling errors</h2>
<p>
  <kbd>Shift</kbd>+<kbd>K</kbd> - show the man page for current word (same as
  <kbd>F1</kbd> in Windows)<br>
  <kbd>:</kbd><code>make</code> - run make (gmake), and show results<br>
  <kbd>:</kbd><code>cc</code> - goto source of current error (:cn next error,
  :cp previous error)<br>
  <kbd>:</kbd><code>cl</code> - list the<br>
</p>

<h2 id=advanced-gdiff text="Graphical diff">Graphical diff</h2>
<p>
  startup:<br>
  <code>gvim -d FILE1 unknown</code><br>
  <br>
  <kbd>Ctrl</kbd>+<kbd>W</kbd>+<kbd>W</kbd> - toggle between windows<br>
  <br>
  Make the current window part of the diff windows:<br>
  <kbd>:</kbd><code>diffthis main.c~</code><br>
  <br>
  View the same buffer in diff mode in one window and "normal" in another:<br>
  <kbd>:</kbd><code>:!cp % tempfile</code><br>
  <kbd>:</kbd><code>:diffsplit tempfile</code><br>
  <br>
  To force the differences to be updated use:
  <kbd>:</kbd><code>diffupdate</code><br>
  <br>
  Jumping to diffs:<br>
  <kbd>[</kbd>+<kbd>C</kbd> (or <kbd>shift</kbd>+<kbd>tab</kbd>)- Jump
  backwards to the previous start of a change.<br>
  <kbd>]</kbd>+<kbd>C</kbd> (or <kbd>tab</kbd>) - Jump forwards to the next
  start of a change.<br>
  <br>
  Diff copying:<br>
  <kbd>:</kbd><code>[range]diffget</code> - Modify the current buffer to undo
  diff with another buffer.<br>
  <kbd>:</kbd><code>[range]diffput</code> - Modify another buffer to undo diff
  with the current buffer.
</p>

<h2 id=advanced-hola_spec text="Spark specific extensions">Spark specific
  extensions (after installing vimrc_zon)</h2>
<p>
  bash alias gvim-&gt;g: <code>$ g a_file.txt</code><br>
  <code>zdiff</code>: executing <code>cvsdiff</code> on all modified (M) files
</p>
</div>`;
