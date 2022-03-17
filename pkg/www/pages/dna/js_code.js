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
<Layout title='LIF DNA' desc='JS Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>JS Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
  <p>
    Coding conventions used by other companies:
    <a href=https://github.com/airbnb/javascript>AirBNB</a> |
    <a href=https://google.github.io/styleguide/javascriptguide.xml>google</a> |
    <a href=http://javascript.crockford.com/code.html>crockford</a> |
    <a href=https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/>wordpress</a> |
    <a href=https://www.drupal.org/node/172169>drupal</a> |
    <a href=https://github.com/weflex/javascript>weflex</a>
  </p>
</div>
<div class=content>
<h1 id=overview text="Overview">Overview: consistent & minimal</h1>
<h2 id=overview-consistent text="Be consistent">Be consistent</h2>
<p>
  If there is no specific rule in this document -
  <a href=/dna#dna-consistent>be consistent with existing codebase</a>
  (use <a href=/dna/dict#rgrep>rgrep</a>).<br>
  If you're editing code, take a few minutes to look at the code around you
  and determine its style.<br>
  If it prints error messages starting with a capital letter, you should too.
  If it put spaces around complex expressions but not around simple
  expressions, your complex expressions should also have spaces around
  them.<br>
  The point of having style guidelines is to have a common vocabulary of
  coding, so people can concentrate on what you're saying rather than on
  how you're saying it.<br>
  If code you add to a file looks drastically different from the existing code
  around it, it throws readers out of their rhythm when they go to read it.<br>
  Avoid this.
</p>
<h2 id=overview-minimal text="Minimalistic">Minimalistic and Condense</h2>
<p>
  Wherever there is no specific rule,
  <a href=/dna#effective-minimal>always prefer minimalism</a>.<br>
  Less tokens, higher condensity: get as much code as possible visible within
  the screen, so less scrolling is needed.<br>
  Sparse, elaborate, defensive code is not appreciated.<br>
  <a href=https://chaosinmotion.blog/2011/01/25/how-not-to-write-factorial-in-java>An example of absurd over-engineering</a>.
  Although it's for Java, but the general idea holds for JS.
</p>
<h2 id=overview-tool text="Tools">Tools</h2>
<p>
  We write code by hand, line-by-line. We do have tools to assist us
  locating conventions mistakes <code>zlint -c</code>, but they are just a
  'helpers'.<br>
  The tools match our conventions only <b>95%</b>, so its still our personal
  responsibility to manually make sure line-by-line the code we write matches
  the conventions <b>100%</b>, whether the tool finds the mistakes or not.
</p>
<h2 id=overview-text_layout text="Text file layout">Text file layout</h2>
<p>
  Tab size is 8 spaces.<br>
  Shift width (indentation) is 4 spaces.<br>
  Column width 79 char, so it fits well with 80 col terminal.<br>
  Indentation is always one shift-width(4):<br>
</p>
<xmp cat=bad>
    open_msg_box("closing file %s on server\n",
                 file_name);
</xmp>
<xmp cat=good>
    open_msg_box("closing file %s on server\n",
        file_name);
</xmp>

<h1 id=format text="Formatting and naming">Formatting and naming</h1>
<h2 id=format-block text="Code blocks and statements">
  Code blocks and statements</h2>
<ul>
  <li>
    <code>if</code> <code>for</code> <code>while</code>
    don't require a code block for 0 or 1 statements:
    open <code>{</code> on next line. only use a block for multiline blocks.
  </li>
  <li><code>try</code> <code>catch</code> <code>function</code>
    require a code block in all cases:
    open <code>{</code> on the same line.
  </li>
</ul>
<h3 id=format-block-if_for_while text="if/for/while">
  <code>if</code>/<code>for</code>/<code>while</code></h3>
<h4 id=format-block-if_for_while-block text="block">
  <code>if</code>/<code>for</code>/<code>while</code> block</h4>
<p><code>if</code> <code>for</code> <code>while</code> open and close braces
  of a section should be on the same level.</p>
<xmp cat=bad>
    if (pkt) {
        pkt.close();
        pkt.uninit();
    }
</xmp>
<xmp cat=good>
    if (pkt)
    {
        pkt.close();
        pkt.uninit();
    }
</xmp>
<p>
  <code>if</code> <code>for</code> <code>while</code> statement that takes
  more than one line should always have braces<br>
  same thing goes when the then/loop part is more than one line
</p>
<xmp cat=good>
    if (slot.dw_bus==pci_scan.card_slot[ret].dw_bus &&
        slot.dw_slot==pci_scan.card_slot[ret].dw_slot &&
        slot.dw_function==pci_scan.card_slot[ret].dw_function)
    {
        break;
    }
</xmp>
<xmp cat=good>
    if (x==y)
    {
        my_func(param1, param2, param3, param4, param5, param6,
            param7);
    }
</xmp>
<xmp cat=bad>
    for (ret=0; ret<pci_scan.dw_cards; ret++)
        if (slot.dw_bus==pci_scan.card_slot[ret].dw_bus &&
            slot.dw_slot==pci_scan.card_slot[ret].dw_slot &&
            slot.dw_function==pci_scan.card_slot[ret].dw_function)
            break;
</xmp>
<xmp cat=good>
    for (ret=0; ret<pci_scan.dw_cards; ret++)
    {
        if (slot.dw_bus==pci_scan.card_slot[ret].dw_bus &&
            slot.dw_slot==pci_scan.card_slot[ret].dw_slot &&
            slot.dw_function==pci_scan.card_slot[ret].dw_function)
        {
            break;
        }
    }
</xmp>
<h4 id=format-if_for_while-no_statement
  text="if/for/while without a statement">
  <code>if</code>/<code>for</code>/<code>while</code> without a statement
</h4>
<xmp cat=bad>
    while(pop_first(list))
        ;
</xmp>
<xmp cat=good>
    while (pop_first(list));
</xmp>
<xmp cat=bad>
   for(i=0; i<10; i++)
       ;
</xmp>
<xmp cat=good>
   for (i=0; i<10; i++);
</xmp>
<xmp cat=bad>
    if (a>b+10)
        ;
    else if (a>b+5)
        do_x();
    else if (a>b+2)
        ;
    else
        do_y();
</xmp>
<xmp cat=good>
    if (a>b+10);
    else if (a>b+5)
        do_x();
    else if (a>b+2);
    else
        do_y();
</xmp>
<h4 id=format-block-then text="Then">Then</h4>
<p>
  'then' part of <code>if</code> statement should be in a separate line.
</p>
<xmp cat=bad>
    if (close_file) fclose(fp);
</xmp>
<xmp cat=good>
    if (close_file)
        fclose(fp);
</xmp>
<h4 id=format-block-else_if text="else if"><code>else if</code></h4>
<p>
  <code>else if</code> statements should be on the same level at the starting
  <code>if</code> reason: this is similar to <code>switch</code> statement
</p>
<xmp cat=bad>
    if (argv[1]==="--help") print_usage();
    else if (argv[1]==="--run") {
        run_application();
        print_results();
    } else print_error();
</xmp>
<xmp cat=good>
    if (argv[1]==="--help")
        print_usage();
    else if (argv[1]==="--run")
    {
        run_application();
        print_results();
    }
    else
        print_error();
</xmp>
<h3 id=format-block-func text="Functions">Functions</h3>
<p>
  Tiny functions: same line.<br>
  One-liner: body in second line.<br>
  Two lines and above: a proper block. if anon <code>function</code>:
  block open in same line.<br>
</p>
<xmp cat=bad>
    var tiny = function(){code;};
    var tiny = function() { code; };
</xmp>
<xmp cat=good>
    var tiny = function(){ code; };
</xmp>
<xmp cat=bad>
    var tiny = function()
    {
        code;
    };
</xmp>
<xmp cat=good>
    var tiny = function(){
        code; };
    var tiny = function(){
        code;
    };
</xmp>
<xmp cat=bad>
    function tiny(){code;};
    function tiny() { code; };
    function tiny()
    {
        code;
    }
</xmp>
<xmp cat=good>
    function tiny(){ code; }
    function tiny(){
        code; }
    function tiny(){
        code;
    }
</xmp>
<xmp cat=bad>
    function long(args){
        code;
        code; }
    function long(args)
    {
        code;
        code;
    }
</xmp>
<xmp cat=good>
    function long(args){
        code;
        code;
    }
</xmp>
<xmp cat=bad>
    function long_args(a1, a2, a3,
        a4){
        code;
        code;
    }
</xmp>
<xmp cat=good>
    function long_args(a1, a2, a3,
        a4)
    {
        code;
        code;
    }
</xmp>
<h4 id=format-block-func-inline text="Inline functions">Inline functions</h4>
<p>Function definition that fits the line:</P>
<xmp cat=good>
    let x = parse_args(...args, function(line){
        let escaped = E.escape(line);
        ...
    });
</xmp>
<p>Function definition that does not fit the line:</p>
<xmp cat=bad>
    let x = parse_args(a, b, c, d, e,
    function(line, err)
    {
        let escaped = E.escape(line);
        ...
    });
</xmp>
<xmp cat=good>
    let x = parse_args(a, b, c, d, e, function(line,
        err)
    {
        let escaped = E.escape(line);
        ...
    });
</xmp>
<xmp cat=good>
    let x = parse_args(a, b, c, d, e,
        function(line, err){
            let escaped = E.escape(line);
            ...
        });
</xmp>
<xmp cat=good>
    let x = parse_args(a, b, c, d, e,
        function(line, err)
    {
        let escaped = E.escape(line);
        ...
    });
</xmp>
<h4 id=format-block-func-spacing text="Functions spacing">Functions spacing</h4>
<p>
  No space between function name and opening parenthesis<br>
  No space between opening parenthesis and first parameter<br>
  One space after comma:
</p>
<xmp cat=bad>
    printf ("hello %s\n", "world");
    printf( "hello world\n" );
    printf("hello world\n","world");
</xmp>
<xmp cat=good>
    printf("hello %s\n", "world");
</xmp>
<h3 id=format-block-break_line
  text="Breaking a long line">Breaking a long line</h3>
<p>When breaking up a long line, it should continue with one shift-width for
  indentation</p>
<xmp cat=bad>
    if (line_length>1 && (screen.sz.vertical<buffer.sz.vertical
                          || explicit_lines))
    {
        console.log("this is a test section that will show how to handle "+
                    "long lines, such as this one which is 2 lines long");
    }
</xmp>
<xmp cat=good>
    if (line_length>1 && (screen.sz.vertical<buffer.sz.vertical
        || explicit_lines))
    {
        console.log('this is a test section that will show how to handle '+
            'long lines, such as this one which is 2 lines long');
    }
</xmp>
<h3 id=format-block-switch text="Switch statement">
  <code>switch</code> statements</h3>
<p>
  <code>switch</code> statements should have <code>case</code>
  on the same level, no space before <code>:</code>.<br>
</p>
<xmp cat=bad>
    switch (key)
    {
        case KEY_UP :
            key = UP;
            break;
        case KEY_DOWN :
            key = DN;
            break;
        default :
            key = NONE;
    }
</xmp>
<xmp cat=good>
    switch (key)
    {
    case KEY_UP:
        key = UP;
        break;
    case KEY_DOWN:
        key = DN;
        break;
    default:
        key = NONE;
    }
</xmp>
<xmp cat=good>
    switch (key)
    {
    case KEY_UP: key = UP; break;
    case KEY_DOWN: key = DN; break;
    default: key = NONE;
    }
</xmp>
<p>
  1-liner <code>case</code>: with single statement plus <code>break</code>,
  or a <code>return</code> statement.
</p>
<xmp cat=bad>
    switch (key)
    {
    case KEY_UP:
        line--;
        break;
    case KEY_DOWN:
        for (x=line; x; x--)
            line++;
        break;
    case KEY_ESC:
        return;
    default:
        bubble = true;
    }
</xmp>
<xmp cat=good>
    switch (key)
    {
    case KEY_UP: line--; break;
    case KEY_DOWN:
        for (x=line; x; x--)
            line++;
        break;
    case KEY_ESC: return;
    default: bubble = true;
    }
</xmp>
<p>Never <code>break</code> after <code>return</code></p>
<xmp cat=bad>
    switch (key)
    {
    case KEY_UP: line--; break;
    case KEY_ESC: return; break;
    }
</xmp>
<xmp cat=good>
    switch (key)
    {
    case KEY_UP: line--; break;
    case KEY_ESC: return;
    }
</xmp>
<p>Never <code>break</code> at end of <code>default</code></p>
<xmp cat=bad>
    switch (key)
    {
    case KEY_UP: line--; break;
    default: line++; break;
    }
</xmp>
<xmp cat=good>
    switch (key)
    {
    case KEY_UP: line--; break;
    default: line++;
    }
</xmp>
<h3 id=format-block-reserved text="Reserved words">Reserved words</h3>
<p>
  One space after reserved words before the opening parenthesis, except
  for <code>function</code> and <code>catch</code> (which is function like):
</p>
<xmp cat=bad>
    if(close_file)
</xmp>
<xmp cat=good>
    if (close_file)
</xmp>
<xmp cat=bad>
    for(i=0; !is_last(i); i++);
</xmp>
<xmp cat=good>
    for (i=0; !is_last(i); i++);
</xmp>
<xmp cat=bad>
    try{ code; } catch (e) { code; }
</xmp>
<xmp cat=good>
    try { code; } catch(e){ code; }
</xmp>
<xmp cat=bad>
    var t = function (api) { api('test'); };
</xmp>
<xmp cat=good>
    var t = function(api){ api('test'); };
</xmp>
<h3 id=format-block-try_catch text="try-catch">
  <code>try</code>-<code>catch</code></h3>
<p>
  Multiline <code>try</code>: close block on <code>catch</code> line
  (like <code>do-while</code>):
</p>
<xmp cat=good>
    try { short_code; } catch(e){ code; }
</xmp>
<xmp cat=good>
    try {
        longer_code; }
    catch(e){ code; }
</xmp>
<xmp cat=good>
    try {
        and_even;
        longer_code;
    } catch(e){ code; }
</xmp>
<p>Catch variable should be named 'e'</p>
<xmp cat=bad>
    try { res = yield etask.nfn_apply(zmongo.collection, '.save', [obj]); }
    catch(error){ handle_error(zmongo, 'save', error, obj); }
</xmp>
<xmp cat=good>
    try { res = yield etask.nfn_apply(zmongo.collection, '.save', [obj]); }
    catch(e){ handle_error(zmongo, 'save', e, obj); }
</xmp>
<h3 id=format-block-operator text="Operator spacing">Operator spacing</h3>
<p>
  both sides should be equal: either space before and after, or no spaces
  at all.
</p>
<h4 id=format-block-operator-trivial text="Trivial expressions">
  Trivial <code>&gt; &gt;= &lt; &lt;= == !=</code> expressions</h4>
<p>
  Trivial <code>&gt; &gt;= &lt; &lt;= == !=</code> expressions should
  not have spaces around them: <code>a_var</code>.
</p>
<xmp cat=bad>
    if (x> 5)
    if (x >5)
    if (x > 5)
</xmp>
<xmp cat=good>
    if (x>5)
</xmp>
<p>
  Nearly-trivial expressions can be with or without
  spaces: <code>a[3]</code>, <code>f(x)</code>, <code>x.y.z</code>,
  <code>a.b.c(x, y, z)</code>.
</p>
<xmp cat=good>
    if (f(x, y) > g(y, z))
    if (f(x, y)>g(y, z))
    if (x.y == 5)
    if (x.y==5)
    if (x.y>=5)
    if (x.y >= 5)
</xmp>
<p>
  We consider simple short arithmetics also as nearly-trivial expressions:
  <code>x+1</code>, <code>2*x</code>.
</p>
<xmp cat=good>
    if (x+1>5)
    if (x+1 > 5)
</xmp>
<p>if one side is not trivial, then must have spaces.</p>
<xmp cat=good>
  if (a&&a.b)
  if (a && a.b)
</xmp>
<xmp cat=bad>
  if (!a&&a.b)
</xmp>
<xmp cat=good>
  if (!a && a.b)
</xmp>
<p>if one side is long, then prefer to have spaces.</p>
<xmp cat=ok>
  if (a&&Array.isArray(a))
</xmp>
<xmp cat=good>
  if (a && Array.isArray(a))
</xmp>
<h4 id=format-block-operator-assign text="Assignments spaces">
  Assignments spaces</h4>
<p>
  Spaces around assignments <code>= += -= *= /= &= |=</code>
  are not mandatory in <code>for()</code> loops.
</p>
<xmp cat=bad>
    a=b;
    d+=x;
</xmp>
<xmp cat=good>
    a = b;
    d += x;
</xmp>
<xmp cat=good>
    for (i=0; i<10; i+=4);
    for (i = 0; i<10; i += 4);
</xmp>
<h4 id=format-block-operator-unary text="Unary operators">Unary operators</h4>
<p>
  Don't put a space after <code>++</code> <code>--</code> <code>!</code>,
  and other unary operators.
  increment after the value, not before.
</p>
<xmp cat=bad>
    i --;
    ++j;
</xmp>
<xmp cat=good>
    i--;
    j++;
</xmp>
<xmp cat=bad>
    if (! i)
</xmp>
<xmp cat=good>
    if (!i)
</xmp>
<xmp cat=bad>
    var speed_int = + speed_str;
</xmp>
<xmp cat=good>
    var speed_int = +speed_str;
</xmp>
<h4 id=format-block-operator-multi text="Multiple +">
  Multiple <code>+</code></h4>
<p>
  Multiple <code>+</code> operators are trivial expressions, and thus
  we prefer not to put spaces around them (such as string concatenation).
</p>
<xmp cat=bad>
    msg = 'hello ' + name + '!';
</xmp>
<xmp cat=good>
    msg = 'hello '+name+'!';
    msg = 'hello '+get_my_name()+'!';
    msg = 'hello ' + get_my_name()+'!';
</xmp>
<h4 id=format-block-operator-cond text="Conditionals">
  Conditionals <code>? :</code></h4>
<p><code>? :</code> should have spaces all around them.</p>
<xmp cat=bad>
    var msg = login_ok?'Welcome':'Please login';
</xmp>
<xmp cat=good>
    var msg = login_ok ? 'Welcome' : 'Please login';
</xmp>

<h2 id=format-minimal text="Minimal code">Minimalism</h2>
<h3 id=format-minimal-unneeded_parentheses text="Unneeded parentheses">
  Do not use unneeded parentheses in expressions:</h3>
<xmp cat=bad>
    if ((a!=b) || (c!=d))
        ...
</xmp>
<xmp cat=good>
    if (a!=b || c!=d)
        ...
</xmp>
<h3 id=format-minimal-empty_line text="Avoid empty lines">
  Avoid empty lines</h3>
<p>
  Never in any case have two empty lines together.<br>
  A single empty line is allowed in global scope and between functions,
  but use it sparsely.<br>
</p>
<h3 id=format-minimal-separate_line text="Separate line">
  Separate line</h3>
<p>
  Should not separate with more than one blank line between sections,
  functions etc.
</p>
<xmp cat=bad>
    function init(){ ...; };


    function end(){ ...; };
</xmp>
<xmp cat=good>
    function init(){ ...; };

    function end(){ ...; };
</xmp>
<xmp cat=good>
    function init(){ ...; };
    function end(){ ...; };
</xmp>
<p>
  Inside functions, should never have an empty line. Use comments to separate.
</p>
<xmp cat=bad>
    function setup_conn(orig){
        var conn = net.connect(dst);
        conn.pipe(orig);

        conn.set_speed('fast');
        if (conn.rx>MAX_SPEED)
            conn.set_speed('medium');
        return conn;
    }
</xmp>
<xmp cat=ok>
    function setup_conn(orig){
        var conn = net.connect(dst);
        conn.pipe(orig);
        // setup speed
        conn.set_speed('fast');
        if (conn.rx>MAX_SPEED)
            conn.set_speed('medium');
        return conn;
    }
</xmp>
<xmp cat=good>
    function setup_conn(orig){
        var conn = net.connect(dst);
        conn.pipe(orig);
        conn.set_speed('fast');
        if (conn.rx>MAX_SPEED)
            conn.set_speed('medium');
        return conn;
    }
</xmp>
<h4 id=format-minimal-arrow_func text="Arrow function short syntax">
  Arrow function short syntax</h4>
<p>When possible, use arrow function short syntax</p>
<xmp cat=bad>
    let t = data=>{ return do_something(data); }
</xmp>
<xmp cat=good>
    let t = data=>do_something(data);
</xmp>
<h3 id=format-minimal-separate_line-return
  text="return statements"><code>return</code> statements</h3>
<h4 id=format-minimal-separate_line-return-min
  text="Minimal return statement">Minimal <code>return</code> statement</h4>
<p><code>return</code> statements should not have parentheses and should not
  have a space after them:</p>
<xmp cat=bad>
    return (0);
</xmp>
<xmp cat=good>
    return 0;
</xmp>
<xmp cat=bad>
    return ;
</xmp>
<xmp cat=good>
    return;
</xmp>
<h4 id=format-minimal-separate_line-return-undefined
  text="return undefined"><code>return</code> <code>undefined</code></h4>
<p>For <code>return undefined</code>, just do <code>return</code>,
  <code>undefined</code> is the default of JS.</p>
<p>If a function returns <code>undefined</code> at exit, you don't need to
  call <code>return</code>.</p>
<xmp cat=bad>
    function x(x){
        if (!x)
            return undefined;
        ...;
        if (x_is_valid(x))
            return x+5;
        ...;
    }
</xmp>
<xmp cat=good>
    function x(x){
        if (!x)
            return;
        ...;
        if (x_is_valid(x))
            return x+5;
        ...;
    }
</xmp>

<h4 id=format-minimal-return-assign text="return an assignment">
  <code>return</code> an assignment</h4>
<p>You may return an assignment in order to merge assignment and return
  statments. Do not add unneeded brackets</p>
<xmp cat=bad>
    return (a = b);
</xmp>
<xmp cat=good>
    return a = b;
</xmp>

<h4 id=format-minimal-return-void_cast
  text="Cast to void">Cast to <code>void</code></h4>
<p>You may 'cast' to <code>void</code> in order to merge an action and
  <code>return undefined</code> into a single line.</p>
<xmp cat=good>
    return void sock.close();
</xmp>
<xmp cat=good>
    if (ret)
        return void (cache[id] = ret);
</xmp>
<xmp cat=good>
    if (clock)
        clock = void clock.restore();
</xmp>

<h3 id=format-minimal-eqal-zero text="compare to 0">Compare to 0</h3>
<p>When 0 stands as non valid or empty option, avoid comparing to 0</p>
<xmp cat=bad>
    if (total==0)
        return 'NA';
</xmp>
<xmp cat=good>
    if (!total)
        return 'NA';
</xmp>

<h2 id=format-long_string text="Long strings">Long strings</h2>
<p>
  Breaking up long strings: no space around <code>+</code>, and prefer
  <code>+</code> at beginning of next line.
</p>
<xmp cat=bad>
    msg = 'this ' +
        'is a long string.';
    msg = 'this '
        + 'is a long string.';
</xmp>
<xmp cat=ok>
    msg = 'this '+
        'is a long string.';
    msg = 'this '
        +'is a long string.';
</xmp>
<xmp cat=good>
    msg = 'this '
    +'is a long string.';
</xmp>
<p>Space, if needed should be at the end of each line and not at the beginning
  of the next line</p>
<xmp cat=bad>
    msg = 'this'
    +' is a long string';
</xmp>
<xmp cat=good>
    msg = 'this '
    +'is a long string';
</xmp>

<h2 id=format-file_lvl_closure text="File-level closures">
  File-level closures</h2>
<p>File-level closures: do not indent the whole file. leave a space after the
  opening, and before the closing:</p>
<xmp cat=bad>
    (function($, chrome, console){
        code;
        code;
    })(jQuery, chrome, console);
</xmp>
<xmp cat=good>
    (function($, chrome, console){

    code;
    code;

    })(jQuery, chrome, console);
</xmp>

<h2 id=format-file_template text="JS file template">JS file template</h2>
<h3 id=format-file_template-browser text="IE/Chrome/FF template">
  IE/Chrome/FF template</h3>
<xmp>
    // LICENSE_CODE ZON
    'use strict'; /*jslint browser:true*/
</xmp>

<h3 id=format-file_template-nodejs_app
  text="NodeJS application template">NodeJS application template</h3>
<xmp>
    #!/usr/bin/env node
    // LICENSE_CODE ZON
    'use strict'; /*jslint node:true*/
    require('util/config.js');
</xmp>

<h3 id=format-file_template-nodejs_mod text="NodeJS module template">
  NodeJS module template</h3>
<xmp>
    // LICENSE_CODE ZON
    'use strict'; /*jslint node:true*/
    require('util/config.js');
</xmp>

<h2 id=format-require text="require()"><code>require()</code></h2>
<p>
  Local packages should include <code>.js</code> in the name.
  Global packages
  should be the package name only (<code>NODE_PATH</code> environment
  variable should be defined).
</p>
<xmp cat=bad>
    const express = require('/usr/lib/node_modules/express');
</xmp>
<xmp cat=good>
    const express = require('express');
</xmp>
<xmp cat=bad>
    const get_rules = require('./get_rules');
</xmp>
<xmp cat=good>
    const get_rules = require('./get_rules.js');
</xmp>
<p><code>require</code> should be called at the top of the file, not locally,
  so that unit-tests will surface all the problems.</p>
<xmp cat=bad>
    function readconf(){
        return require('fs').readFileSync('conf'); }
</xmp>
<xmp cat=good>
    // top of file...
    const fs = require('fs');
    // later down in the file...
    function f(){
        return fs.readFileSync('conf'); }
</xmp>
<p>Constants and variable names of required modules should normally
  be the same, according to the module name.</p>
<xmp cat=bad>
    const rules = require('./get_rules.js'); // in foo.js
    const actions = require('./get_rules.js'); // in bar.js
</xmp>
<xmp cat=good>
    const get_rules = require('./get_rules.js'); // in foo.js and bar.js
</xmp>
<p>Use <code>_</code> instead of <code>-</code> <code>/</code></p>
<xmp cat=good>
    const node_getopt = require('node-getopt');
    const svc_reconf = require('../svc/reconf.js');
</xmp>
<p>
  Always prepend <code>z</code> to variable names for the following modules
  from <code>pkg/util</code>, and, when necessary, for other modules that
  clash with global packages.
</p>
<xmp cat=good>
    const zconf = require('util/config.js');
    const zconf = require('util/config_int.js');
    const zescape = require('util/escape.js');
    const zhttp = require('util/zhttp.js');
    const zhttp = require('util/http.js');
    const zurl = require('util/url.js');
    const zutil = require('util/util.js');
    const zos = require('util/os.js');
</xmp>
<p>You may drop the <code>node-</code> prefix, or <code>-js</code> suffix. </p>
<xmp cat=good>
    const getopt = require('node-getopt');
    const uglify = require('uglify-js');
</xmp>
<p>Special modules with short names: jquery and underscore.</p>
<xmp cat=good>
    var $ = require('jquery');
    var _ = require('underscore');
</xmp>

<h2 id=format-comment text="Comments">Comments</h2>
<h3 id=format-comment-comment_cpp text="Prefer C++ comment over C comments.">
  Prefer C++ comment over C comments.</h3>
<xmp cat=bad>
    /* close all files */
    fclose(fp);
</xmp>
<xmp cat=good>
    // close all files
    fclose(fp);
</xmp>
<xmp cat=bad>
    /* multi
     * line
     * comment */
</xmp>
<xmp cat=good>
    // multi
    // line
    // comment
</xmp>
<h3 id=format-comment-aligned text="Comments aligned">Comments aligned</h3>
<p>Comments should be aligned as the code they comment, or one space after
  the end of the line.</p>
<xmp cat=bad>
    /*
     * close all files
     */
    fclose(fp);
</xmp>
<xmp cat=good>
    /* close all files */
    fclose(fp);
</xmp>
<xmp cat=good>
    fclose(fp); /* close all files */
</xmp>
<h3 id=format-comment-long text="Long comments">Long comments</h3>
<p>Comments which occupy more than one line should adhere to the following
  guideline:</p>
<xmp cat=bad>
    //
    // close all the files that were opened before the function was called
    // and send them to the output file
    //
    fclose(fp);
</xmp>
<xmp cat=good>
    // close all the files that were opened before the function was called
    // and send them to the output file
    fclose(fp);
</xmp>
<h3 id=format-comment-multiline text="Multiline comments">
  Multiline comments</h3>
<p>Multiline comments should always be on their own, not continue on existing
  statements. If longer, put the comment at the line above.</p>
<xmp cat=bad>
    var isa_pnp_scan = {
        search_id: 'a-test', // if search_id.vendor[0]==0 - scan all vendor
                             // IDs
                             // if searchId.dwSerial==0 - scan all serial
                             // numbers
        cards: 2, // number of cards found
        card: [card1, card2], // cards found
    };
</xmp>
<xmp cat=bad>
    var isa_pnp_scan = {
        search_id: 'a-test',  // if search_id.vendor[0]==0 - scan
                              // all vendor IDs
                              // if searchId.dwSerial==0 - scan all
                              // serial numbers
        cards: 2,             // number of cards found
        card: [card1, card2]; // cards found
    };
</xmp>
<xmp cat=good>
    var isa_pnp_scan = {
        // if search_id.vendor[0]==0 - scan all vendor IDs
        // if searchId.dwSerial==0 - scan all serial numbers
        search_id: 's-test',
        cards: 2, // number of cards found
        card: [card1, card2], // cards found
    };
</xmp>
<h3 id=format-comment-xxx text="XXX - todo mark"><code>XXX</code> - todo mark</h3>
<p>
  Comments of <code>XXX</code> should be used for temporary code, that would
  be changed in the future: hack, quick workaround, non-elegant code, bug.
  They should be <code>XXX [login]: COMMENT</code>, multiple names should be
  separated with <code>/</code>.
</p>
<xmp cat=bad>
    XXX derry: ANDROID move to compat
    XXX derry: arik: move to compat
    XXX derry arik: move to compat
</xmp>
<xmp cat=good>
    XXX derry: move to compat
    XXX derry ANDROID: move to compat
    XXX derry/arik: move to compat
</xmp>
<p>
  <code>XXX</code> comments are tasks, so they should always have someone
  assigned. <a href=/dna#individual-solve>Preferably yourself</a>!
</p>
<xmp cat=bad>
    XXX: move to compat
</xmp>
<xmp cat=bad>
    XXX some-other-developer: move to compat
</xmp>
<xmp cat=good>
    XXX derry: move to compat
</xmp>
<p>
  Using XXX comments can be used, when needed, to override any possible rules!
</p>
<xmp cat=bad>
    if (0)
    it('pause_disconnect', ()=>etask(function*(){
</xmp>
<xmp cat=good>
    if (0) // XXX sergey: lots of sporadic failues
    it('pause_disconnect', ()=>etask(function*(){
</xmp>
<xmp cat=good>
    // XXX derry: copied urgent gist as-is to hack around a bug from angular
    // http://github.com/....
    // will fix by 8-Nov-2016
</xmp>

<h2 id=format-loop text="Loops">Loops</h2>
<h3 id=format-loop-for_vs_while text="for vs while">
  <code>for</code> vs <code>while</code></h3>
<p>
  If a <code>while</code> loop has an <code>init</code> and/or
  <code>next</code> expression, then use a <code>for</code> loop:
</p>
<xmp cat=bad>
    i = 0;
    while (i<10)
    {
         ...;
         i++;
    }
</xmp>
<xmp cat=good>
    for (i = 0; i<10; i++)
        ...;
</xmp>
<p>
  If a <code>for</code> loop has only a <code>condition</code>, then use
  <code>while</code>:
</p>
<xmp cat=bad>
    for (; have_more();)
        ...;
</xmp>
<xmp cat=good>
    while (have_more())
        ...;
</xmp>
<p>
  If no <code>init</code>/<code>condition</code>/<code>next</code>,
  then any option is ok:
</p>
<xmp cat=good>
    for (;;)
        do_endless_work();
</xmp>
<xmp cat=good>
    while (1)
        do_endless_work();
</xmp>

<h3 id=format-loop-for text="for loops"><code>for</code> loops</h3>
<p>
  In <code>for</code> loops, when there is a function that gets the next
  element, it should be done once (inside the step condition):<br>
  assign inside a statement:
</p>
<xmp cat=bad>
    for (i = 0, result = get_char(); result=='\r'; result = get_char(), i++)
        handle_result(result);
</xmp>
<xmp cat=good>
    for (i = 0; (result = get_char())=='\r'; i++)
        handle_result(result);
</xmp>
<h3 id=format-loop-do_while text="do-while">
  <code>do</code>-<code>while</code></h3>
<p>
  <code>do-while</code>: long <code>do</code> block should be closed on
  <code>while</code> line:
</p>
<xmp cat=good>
    do add_item();
    while (have_items);
</xmp>
<xmp cat=good>
    do
        add_item();
    while (have_items);
</xmp>
<xmp cat=good>
    do {
        add_item();
        another_action();
    } while (have_items);
</xmp>

<h2 id=format-spacing text="Spacing">Spacing</h2>
<p>Put one space before and after an assignment.</p>
<xmp cat=bad>
    var a=0;
    x= x+1;
    bits|=BIT5;
</xmp>
<xmp cat=good>
    var a = 0;
    x = x+1;
    bits |= BIT5;
</xmp>
<p>If it is in a <code>for</code> loop, you can skip the spaces.
  if you skip one of the spaces, skip both:</p>
<xmp cat=bad>
    for (i= 0; i; i--)
        printf("%d", i);
</xmp>
<xmp cat=good>
    for (i=0; i; i--)
        printf("%d", i);
</xmp>
<xmp cat=good>
    for (i = 0; i; i--)
        printf("%d", i);
</xmp>
<p>Don't put a space before a statement separator, put one after it:</p>
<xmp cat=bad>
    for (i=0 ;i ;i--, j*=2) ;
</xmp>
<xmp cat=good>
    for (i=0; i; i--, j*=2);
</xmp>
<xmp cat=good>
    for (i = 0; i; i--, j *= 2);
</xmp>

<h2 id=format-callfail text="Check fail in same line of call">
  Check fail in same line of call</h2>
<p>
  Prefer to check for failures in same line of calling the function.
</p>
<xmp cat=not_preferred>
    i = str.indexOf("\r\n");
    if (i<0)
        return;
</xmp>
<xmp cat=good>
    if ((i = str.indexOf("\r\n"))<0)
        return;
</xmp>
<xmp cat=not_preferred>
    m = str.match("EOF");
    if (!m)
        return;
</xmp>
<xmp cat=good>
    if (!(m = str.match("EOF")))
        return;
</xmp>

<h2 id=format-object text="Object notation">Object notation</h2>
<xmp cat=bad>
    var node =
    {
        name: 'server',
        port: 42,
        status: 'updated',
        setup_time: 10*1000,
    };
</xmp>
<xmp cat=good>
    var node = {
        name: 'server',
        port: 42,
        status: 'updated',
        setup_time: 10*1000,
    };
</xmp>
<p>Multiline objects: should have a comma after last property.</p>
<xmp cat=bad>
    var node = {
        name: 'server',
        status: 'updated',
        setup_time: 10*1000
    };
</xmp>
<xmp cat=good>
    var node = {
        name: 'server',
        status: 'updated',
        setup_time: 10*1000,
    };
</xmp>
<p>Short objects: should be in a single line if they are very short.</p>
<xmp cat=bad>
    var node = {name: 'server', port: 42,};
</xmp>
<xmp cat=ok>
    var node = {
        name: 'server',
        port: 42,
    };
</xmp>
<xmp cat=good>
    var node = {name: 'server', port: 42};
</xmp>
<p>Object contains short object: should be in a single line.</p>
<xmp cat=bad>
    var node = {info: {name: 'server', port: 42},
    };
</xmp>
<xmp cat=ok>
    var node = {
        info: {name: 'server', port: 42},
    };
</xmp>
<xmp cat=good>
    var node = {info: {name: 'server', port: 42}};
</xmp>

<p>Objects spacing:</p>
<ul>
  <li>before <code>,</code> and <code>:</code> signs, there should not be a
    space, while after those signs, space is required.</li>
  <li>after <code>{</code> and before <code>}</code> signs, there should not
    be a space.</li>
</ul>
<xmp cat=good>
    var node = {name: 'server', port: 42};
</xmp>
<xmp cat=bad>
    var node = {name: 'server' , port: 42};
</xmp>
<xmp cat=bad>
    var node = {name : 'server', port : 42};
</xmp>
<xmp cat=bad>
    var node = { name: 'server', port: 42 };
</xmp>

<h2 id=format-casting text="Casting">Casting</h2>
<p>
  Convert to number: <code>+val</code><br>
  Convert to signed 32bit int: <code>val|0</code><br>
  Convert to unsigned 32bit int: <code>val&gt;&gt;&gt;0</code><br>
  Convert to Boolean: <code>!!val</code><br>
  Convert Boolean to 0/1: <code>+bool_val</code> or
  <code>+!!any_val</code><br>
  <br>
  String literals: prefer <code>'single quotes'</code> over
  <code>"double quotes"</code><br>
</p>
<xmp cat=ok>
    "I am the walrus."
</xmp>
<xmp cat=good>
    'I am the walrus.'
</xmp>
<xmp cat=good>
    "I'm the walrus."
</xmp>

<h2 id=format-export text="exports"><code>exports</code></h2>
<h3 id=format-export-e text="exports E">
  Use variable E as alias to <code>exports</code>.</h3>
<xmp cat=bad>
    exports.foo = function(){ ... };
</xmp>
<xmp cat=good>
    const E = exports;
    E.foo = function(){ ... };
</xmp>
<h3 id=format-export-function text="Export functions">
  Export functions</h3>
<p>
  Only export functions which are used outside of the module,
  keep everything else local.
</p>
<xmp cat=bad>
    E.internal_helper = function(){ ... };
    ...
    E.internal_helper();
</xmp>
<xmp cat=good>
    function internal_helper(){ ... }
    ...
    internal_helper();
</xmp>
<h3 id=format-export-test text="Unit-test exports">
  Unit-test exports</h3>
<p>
  Use variable <code>E.t</code> for exports
  only used in tests, give the function name to use inside module.
</p>
<xmp cat=bad>
    // in foo.js
    E.internal_function = function(){ ... };
    ...
    E.internal_function();

    // in test.js
    foo.internal_function();
</xmp>
<xmp cat=good>
    // in foo.js
    const E = exports;
    ...
    function internal_function(){ ... }
    ...
    internal_function();
    ...
    E.t = {internal_function: internal_function, ...};
    // in test.js
    foo.t.internal_function();
</xmp>

<h2 id=format-continuation_method text="Continuation .method()">
  Continuation <code>.method()</code>
</h2>
<p>Continuation <code>.method()</code> or <code>+'str'</code>
  on next line can be same indentation as
  parent line. Same goes for single <code>var</code> definition, and
  <code>return</code>.
</p>
<xmp cat=bad>
    $('<h1>', $('<div>')
    .append('<span>'));
</xmp>
<xmp cat=good>
    $('<h1>', $('<div>')
        .append('<span>'));
</xmp>
<xmp cat=ok>
    $('<div>')
        .append('<span>');
</xmp>
<xmp cat=good>
    $('<div>')
    .append('<span>');
</xmp>
<xmp cat=good>
    elm = $('<span>')
    .append('<span>');
</xmp>
<xmp cat=good>
    var elm = $('<span>')
    .append('<span>');
</xmp>
<xmp cat=bad>
    var e1 = $('<div>'), e2 = $('<span>')
    .append('<span>');
</xmp>
<xmp cat=good>
    var e1 = $('<div>');
    var e2 = $('<span>')
    .append('<span>');
</xmp>
<xmp cat=good>
    return $('<div>')
    .append('<span>');
</xmp>
<xmp cat=bad>
    return $('<h2>', $('<div>')
    .append('<span>'));
</xmp>
<xmp cat=good>
    return $('<h2>', $('<div>')
        .append('<span>'));
</xmp>
<xmp cat=good>
    var s = '<div>'
    +'<span>';
</xmp>
<xmp cat=bad>
    s = x ? '<child>' : '<nothing>'
    +'<span>';
</xmp>
<xmp cat=good>
    s = '<div>'
    +'<span>';
</xmp>
<xmp cat=good>
    return '<div>'
    +'<span>';
</xmp>

<h2 id=format-dot_method text=". of .method()">
  <code>.</code> of <code>.method()</code></h2>
<p>
  <code>.</code> of <code>.method()</code> MUST be the first
  character on a method call continuation line.
</p>
<xmp cat=bad>
  set_user(db.open('users').
    get$(user));
</xmp>
<xmp cat=good>
  set_user(db.open('users')
    .get$(user));
</xmp>
<xmp cat=bad>
    $('<h1>', $('<div>').
        append('<span>'));
</xmp>
<xmp cat=good>
    $('<h1>', $('<div>')
        .append('<span>'));
</xmp>

<h2 id=format-var_declaration text="Variable declarations">
  Variable declarations</h2>
<p>
  <code>var</code> declarations longer than one line must have their own
  <code>var</code>.
</p>
<xmp cat=bad>
    var a = 'test',
        b = f('another', 'test'),
        c = 'yet another';
</xmp>
<xmp cat=good>
    var a = 'test';
    var b = f('another', 'test');
    var c = 'yet another';
</xmp>
<xmp cat=good>
    var a = 'test';
    var b = f('another', 'test'), c = 'yet another';
</xmp>
<xmp cat=good>
    var a = 'test', b = f('another', 'test'), c = 'yet another';
</xmp>
<xmp cat=bad>
    var a = 'test', b = f('another',
        'test');
    var c = 'yet another';
</xmp>
<xmp cat=good>
    var a = 'test';
    var b = f('another',
        'test');
    var c = 'yet another';
</xmp>

<h2 id=format-var_compare text="Comparing variables">Comparing variables</h2>
<p>
  When comparing to <code>undefined</code> use <code>===</code> and
  <code>!==</code>
  On any other case, use <code>==</code> and <code>!=</code>
</p>
<xmp cat=bad>
    if (a==='OK')
</xmp>
<xmp cat=bad>
    if (typeof a==='undefined')
</xmp>
<xmp cat=good>
    if (a=='OK')
</xmp>
<xmp cat=good>
    if (a===undefined)
</xmp>

<h2 id=format-use_bind text="Use bind().">
  Prefer <code>.bind()</code> over <code>this</code></h2>
<p>
  When assigning functions that depend on <code>this</code>,
  use <code>bind()</code>.
</p>
<xmp cat=bad>
    var log = console.log;
    log('a'); // TypeError: Illegal invocation
</xmp>
<xmp cat=good>
    var log = console.log.bind(console);
    log('a');
</xmp>

<h2 id=format-locality text="Locality">
  Shorten using locality</h2>
<p>
  Use locality to shorten names, relying on the contexts of the local code
  scope.
</p>
<xmp cat=bad>
    for (let opration_idx=0; operation_idx<operations.length; operation_idx++)
        ...;
</xmp>
<xmp cat=good>
    for (let i=0; i<operations.length; i++)
        ...;
</xmp>
<xmp cat=bad>
    for (let allowed_customer in allowed_customers)
        ...;
</xmp>
<xmp cat=good>
    for (let c in allowed_customers)
        ...;
</xmp>
<h2 id=format-notation text="UNIX notation naming">
  UNIX notation naming</h2>
<p>Code will be in UNIX notation. UNIX names should not include the data type,
  rather the meaning of the information in the data.</p>
<xmp cat=bad>
    var bIsCompleted;
    var iCount;
</xmp>
<xmp cat=good>
    var is_completed, data, vendor_id, count, buffer, new_name, name;
    function read_data_block(){}
    const MS_PER_SEC = 1000;
</xmp>
<h3 id=format-notation-neg text="positive naming">Positive naming</h3>
<p>Default to using positive naming, rather than negative
  (no/not/disable...). This helps avoid double negation (not not).</p>
<xmp cat=bad>
    if (!not_customer(customer))
        disable_customer(customer, false);
</xmp>
<xmp cat=good>
    if (is_customer(customer))
        enable_customer(customer, true);
</xmp>
<xmp cat=bad>
    var no_rule = lookup_rule(rule)<0;
    if (!no_rule)
        rm_rule();
    else
        add_rule();
</xmp>
<xmp cat=good>
    var have_rule = lookup_rule(rule)>=0;
    if (have_rule)
        rm_rule();
    else
        add_rule();
</xmp>
<h3 id=format-simplicity_usability text="simplicity and usability">Simplicity
  and usability</h3>
<p>Command line options, or option variable (opt), use common usage as default
  even if negative</p>
<xmp cat=bad>
    zlxc --browser
</xmp>
<xmp cat=good>
    zlxc --no-browser
</xmp>
<xmp cat=bad>
    opt = {exit_on_err: 1};
</xmp>
<xmp cat=good>
    opt = {no_exit: 1};
</xmp>
<h3 id=format-default_value text="default value">Default value</h3>
<p>Using implicit <code>undefined</code> as default value</p>
<xmp cat=bad>
    let need_reconf = false;
    if (is_host(':servers'))
        need_reconf = true;
</xmp>
<xmp cat=bad>
    let need_reconf = undefined
    if (is_host(':servers'))
        need_reconf = true;
</xmp>
<xmp cat=good>
    let need_reconf;
    if (is_host(':servers'))
        need_reconf = true;
</xmp>

<h2 id=format-poly_func text="Multi-signature functions">
  Multi-signature functions</h2>
<p>
  For functions that have multiple signatures or where there is an optional
  (not last) argument, you may optionally add the different possible signatures
  as a comment, in the nodejs signature documentation style.
</p>
<xmp cat=good>
    // _apply(opt, func[, _this], args)
    // _apply(opt, object, method, args)
    E._apply = function(opt, func, _this, args){
        ...
    };
</xmp>

<h2 id=format-this_value text="Saving the value of 'this'">
  Saving the value of <code>this</code></h2>
<p>
  When saving the value of <code>this</code> for use in lexically nested
  functions, use <code>_this</code> as the variable name.
</p>
<xmp cat=bad>
    var self = this;
</xmp>
<xmp cat=good>
    var _this = this;
</xmp>
<xmp cat=good>
    function on_end(opt){
        var _this = this;
        return function on_end_cb(msg){
            if (_this.socket)
                 return 'socket';
        };
    }
</xmp>
<p>Use <code>__this</code> and <code>___this</code>... for deep code.</p>
<xmp cat=good>
    function on_end(opt){
        var _this = this;
        return function(msg){
            if (_this.socket)
                 return 'socket';
            var __this = this;
            setTimeout(function(){ __this.socket = undefined; }, 1000);
        };
    }
</xmp>

<h2 id=format-function_classes text="Functions as class definition">
  Functions as class definition</h2>
<p>When a function is a class definition, e.g. needs <code>new</code> in order
  to use it, it should start with capital letter</p>
<xmp cat=bad>
function etask(opt, states){
    ...
}
</xmp>
<xmp cat=good>
function Etask(opt, states){
    ...
}
</xmp>
<h2 id=format-es6 text="ES6">ES6</h2>
<h3 id=format-es6-arrow text="Arrow functions">Arrow functions</h3>
<p>
  No spaces around <code>=&gt;</code>.
  Prefer to drop <code>()</code>
</p>
<xmp cat=bad>
    e.on('play', () => {
        player.start();
        started = 1;
    }
</xmp>
<xmp cat=good>
    e.on('play', ()=>{
        player.start();
        started = 1;
    }
</xmp>
<xmp cat=bad>
    socket.on('connect', ()=> state = 'CONNECTED' );
</xmp>
<xmp cat=good>
    socket.on('connect', ()=>state = 'CONNECTED');
</xmp>
<xmp cat=bad>
    docs.forEach(doc => add(doc));
</xmp>
<xmp cat=good>
    docs.forEach(doc=>add(doc));
</xmp>
<xmp cat=good>
    docs.forEach((doc, index)=>{
        if (index)
            add(doc, index);
    });
</xmp>
<p>Drop <code>()</code> around single argument.</p>
<xmp cat=bad>
    docs.forEach((doc)=>add(doc));
</xmp>
<xmp cat=good>
    docs.forEach(doc=>add(doc));
</xmp>
<p>Prefer to drop <code>{}</code> around single short statement.</p>
<xmp cat=ok>
    docs.forEach((doc)=>{ add(doc); });
</xmp>
<xmp cat=good>
    docs.forEach(doc=>add(doc));
</xmp>
<h3 id=format-es6-preferred_method text="Preferred Methods">
  Preferred Methods</h3>
<p>
  never use <code>.indexOf()</code> for arrays/strings when
  <code>.includes()</code> fits.
</p>
<xmp cat=bad>
    if (apps.indexOf(zserver_match[1])<0)
        apps.push(zserver_match[1]);
</xmp>
<xmp cat=good>
    if (!apps.includes(zserver_match[1]))
        apps.push(zserver_match[1]);
</xmp>
<p>
  never user <code>.indexOf()</code> for strings when
  <code>.startsWith()</code> fits.
</p>
<xmp cat=bad>
    return !patch[0].indexOf(changed_file)
        || !patch[1].indexOf(changed_file);
</xmp>
<xmp cat=good>
    return patch[0].startsWith(changed_file)
        || patch[1].startsWith(changed_file);
</xmp>
<h3 id=format-es6-generator text="Generators">Generators</h3>
<p>No spaces around <code>*</code>.</p>
<xmp cat=bad>
    etask(function* (){
        ...
    });
</xmp>
<xmp cat=good>
    etask(function*(){
        ...
    });
</xmp>
<xmp cat=bad>
    etask(function * get_request(){
        ...
    });
</xmp>
<xmp cat=good>
    etask(function*get_request(){
        ...
    });
</xmp>
<h3 id=format-es6-class text="Class definition">Class definition</h3>
<p>Class name start with capital leter</p>
<xmp cat=bad>
    class SimpleView {}
</xmp>
<xmp cat=bad>
    class simple_view {}
</xmp>
<xmp cat=good>
    class Simple_view {}
</xmp>
<p>Add space between class name and <code>{</code></p>
<xmp cat=bad>
    class A{}
</xmp>
<xmp cat=good>
    class A {}
</xmp>

<h3 id=format-es6-class-etask text="Etask methods">Etask methods</h3>
<p>Indentation reducing is allowed, but class methods should be indented</p>
<xmp cat=good>
    class A {
        prop(){
            return etask(function*(){
                code;
            });
        }
    }
</xmp>
<xmp cat=ok>
    class A {
        prop(){ return etask(function*(){
            code;
        }); }
    }
</xmp>
<xmp cat=bad>
    class A {
    prop(){
        let _this = this;
    return etask(function*(){
        code;
        });
    }
    }
</xmp>
<xmp cat=good>
    class A {
        prop(){
            let _this = this;
        return etask(function*(){
            code;
        }); }
    }
</xmp>

<h1 id=prog_tech text="Programming technique">Programming technique</h1>

<h2 id=prog_tech-generic text="Generic code">Generic code</h2>
<p>
  Code should be written generically only if during the time you are writing
  it, it is called at least twice, if not more, and save code in the
  caller.<br>
  Generic code need a deeper unit-tests then regular code.
</p>
<xmp cat=bad>
    E.first_weekday_of_month = function(wd, d){
        ...
    };
</xmp>
<xmp cat=good>
    E.strftime = function(fmt, d, opt){
        ...
    };
</xmp>

<h2 id=prog_tech-early_return text="Early return">
  Early <code>return</code></h2>
<p>Avoid <code>if()</code> on 50% or more of a function.</p>
<xmp cat=bad>
    let inited;
    E.init = ()=>{
        if (!inited)
        {
            inited = true;
            register_app();
            set_timers();
        }
    };
</xmp>
<xmp cat=good>
    let inited;
    E.init = ()=>{
        if (inited)
            return;
        inited = true;
        register_app();
        set_timers();
    };
</xmp>

<h2 id=prog_tech-defensive_code text="No defensive code">No defensive code</h2>
<p>No function argument validation</p>
<xmp cat=bad>
    function send_msg(client, msg, opt){
        if (client===undefined || msg===undefined)
            throw new Error('send_msg: wrong params');
        opt = opt||{};
        msg = prepare_msg(msg);
        ...
    }
</xmp>
<xmp cat=good>
    function send_msg(client, msg, opt){
        opt = opt||{};
        msg = prepare_msg(msg);
        ...
    }
</xmp>

<h2 id=prog_tech-assign_truth text="Assigning in a truth value">
  Assigning in a truth value (if or while)</h2>
<p>
  Assigning truth value in <code>if</code> <code>while</code> <code>for</code>
  helps shorten and simplify code.
</p>
<xmp cat=bad>
    for (i = 0; get_result(i); i++)
        handle_result(get_result(i));
</xmp>
<xmp cat=bad>
    for (i = 0;; i++)
    {
        result = get_result(i);
        if (!result)
            break;
        handle_result(result);
    }
</xmp>
<xmp cat=good>
    for (i = 0; result = get_result(i); i++)
        handle_result(result);
</xmp>
<xmp cat=bad>
    if (compute_num())
        return compute_num();
</xmp>
<xmp cat=good>
    if (x = compute_num())
        return x;
</xmp>
<xmp cat=bad>
    while (1)
    {
        i = input();
        if (!i)
            break;
        handle_input(i);
    }
</xmp>
<xmp cat=good>
    while (i = input())
        handle_input(i);
</xmp>

<h2 id=prog_tech-diable_test text="Temporary disable test">
  Temporary disabling a test</h2>
<p>
  When temporary disabling test code that fail:<br>
  Do not indent the code of
  the disabled tests.
</p>
<xmp cat=bad>
    if (0) // XXX yoni: fails on BAT
        jtest_eq(...);
    if (0) // XXX derry: need fix for Ubuntu
    {
        jtest1();
        jtest2();
    }
</xmp>
<xmp cat=good>
    if (0) // XXX yoni: fails on BAT
    jtest_eq(...);
    if (0){ // XXX derry: need fix for Ubuntu
    jtest1();
    jtest2();
    }
</xmp>
<p>If it is only one test (one statement), then don't use <code>{ }</code>
  even if the statement is written in 2 lines:</p>
<xmp cat=bad>
    if (0) // XXX: yoni: fails on BAT
    {
    jtest_run(xxx, yyy,
        zzz);
    }
</xmp>
<xmp cat=good>
    if (0) // XXX: yoni: fails on BAT
    jtest_run(xxx, yyy,
        zzz);
</xmp>
<p>Open '{' on the same if() line:</p>
<xmp cat=bad>
    // XXX: yoni: fails on BAT
    if (0)
    {
    jtest_run(xxx, yyy, zzz);
    jtest_run(xxx, yyy, zzz);
    }
</xmp>
<xmp cat=good>
    if (0){ // XXX: yoni: fails on BAT
    jtest_run(xxx, yyy, zzz);
    jtest_run(xxx, yyy, zzz);
    }
</xmp>

<h2 id=prog_tech-perf text="Performance">Performance</h2>
<p>
  99% of the code is not performance critical. So always try to write shorter,
  simpler, more natural and modern code.
  If ES6 gives nicer simpler constructs - we use them.<br>
  But, in the rare 1% of the code that performs tight loops, we deviate
  from 'nice simple code', and write a little longer code, to avoid
  <a href=http://www.incaseofstairs.com/2015/06/es6-feature-performance/>
    JS VM JIT in-efficiencies</a>.<br>
  We normally check V8, and re-check check these issues periodically as
  newer versions of JS VM's come out.
</p>

<h3 id=prog_tech-perf-for_of text="for..of">
  <code>for</code>..<code>of</code>: 3x-20x slower</h3>
<xmp cat=bad>
    for (let p of patterns)
        add_pattern(p);
</xmp>
<xmp cat=good>
    for (let i=0; i<patterns.length; i++)
        add_pattern(patterns[i]);
</xmp>

<h2 id=prog_tech-wrong_perf text="Wrong performance assumptions">
  Wrong performance assumptions</h2>
<p>
  We list here commonly mistaken performance assumptions. They might have
  been correct in the past, but JS VMs get better and better - so these
  performance improvement assumptions are not longer correct.
</p>

<h3 id=prog_tech-wrong_perf-map text="Map vs Object">
  <code>Map</code> is faster than Object</h3>
<p>
  For keys that are plain positive numbers, Object may be faster due to
  Array optimizations in the VM. But for keys that are strings - Map
  is faster.
</p>
<xmp cat=bad>
    let cache = {};
    cache[key] = value;
</xmp>
<xmp cat=good>
    let cache = new Map();
    cache.set(key, value);
</xmp>

<h2 id=deep_fix>Deep Fix</h2>
<div>
  When you (or someone else) find a coding mistake in your code:
  <div class=bad>BAD: just fixing that specific mistake you found</div>
  <div class=good>OK: fixing also all such mistakes you made in your own
    code</div>
  <div class=good>GOOD: fixing all such mistakes, in the whole codebase, using
    smart rgrep's to find them.</div>
  <div class=good>GREAT: if this is a common mistake people tend to repeat, then
    once a month repeat the search to find such NEW mistakes.</div>
  <div class=good>EXCELLENT: add a rule to zlint to auto detect and if possible
    auto fix the mistake.</div>
</div>

<h1 id=hola text="Spark specific API">Spark specific API</h1>
<h2 id=hola-disable-feature text="Disable feature">Disable feature</h2>
<li>dynamic using reconf: preferred</li>
<li>env: usually when needed in init, for example port numbers</li>
<li>if (0): unittests and non production code</li>
<p>TBA: code examples</p>

<h2 id=hola-etask text="etask"><code>etask</code></h2>
<h3 id=hola-etask-overview text=Overview>Overview</h3>
<p>
  <code>etask</code> is Spark's library for writing asynchronous code in a
  concise synchronous like manner.
</p>
<h3 id=hola-etask-why-etask text="Why etask?">Why <code>etask</code>?</h3>
<p>
  Promises/async functions don't support structured cancelation, and callbacks
  are difficult to coordinate/compose.<br>
  <code>etask</code> supports cancelation by default and can manage
  callback and promise driven subtasks easily.<br>
  For example, if we wanted to find a specific user from the DB,
  the simplest synchronous code would look like this:
</p>
<xmp>
  function user_find_sync(){
      let conn = mongodb.connect();
      let iter = mongodb.find(conn.users, {});
      let u;
      while ((u = mongodb.get_next(iter)))
      {
          if (correct_user(u))
              break;
      }
      mongodb.close(conn);
      return u && u.username;
  }
</xmp>
<p>
  But this is synchronous, blocking code. JavaScript is async and single
  threaded, so blocking calls are a huge performance problem.<br>
  So lets see how to port the sync code to async code. Lets start with
  the ideal solution, using Spark's <code>etask</code>s and ES6 generators.
</p>
<p>etask ES6 (perfect!):</p>
<xmp cat=good>
    let user_find_es6 = ()=>etask(function*(){
        let conn = yield mongodb.connect();
        let iter = yield mongodb.find(conn.users, {});
        let u;
        while (u = yield mongodb.find_next(iter))
        {
            if (yield correct_user(u))
                break;
        }
        yield mongodb.close(conn);
        return u && u.username;
    }
</xmp>
<p>Compare this with other possible approaches:</p>
<p>callbacks (<a href=http://callbackhell.com/>callback-hell...</a>):</p>
<xmp cat=bad>
    let conn, iter;
    function user_find_cbs(cb){
        mongodb.connect(mongo_connected_cb, cb);
    }

    function mongo_connected_cb(cb){
        mongodb.find(conn.users, {}, users_find_cb, cb);
    }

    function users_find_cb(iter, cb){
        mongodb.get_next(iter, filter_users_cb);
    }

    function filter_users_cb(u, cb){
        if (!u)
            return mongo_disconnect(cb);
        correct_user(correct_user_cb, u, cb);
    }

    function correct_user_cb(u, is_correct, cb){
        if (is_correct)
            return mongo_disconnect(cb, u.username);
        mongo_connected_cb(cb);
    }

    function mongo_disconnect(cb, username){
        mongodb.close(conn, disconnected_cb, cb, username);
    }

    function disconnected_cb(cb, username){
        cb(username);
    }
</xmp>
<p>promise (includes ugly recursion to emulate a loop, nested
  <code>then</code>, and obscure execution flow):</p>
<xmp cat=bad>
    function user_find(){
        return mongodb.connect()
        .then(function(conn){ return mongodb.find(conn.users, {}); })
        .then(function filter(){
             return mongodb.find_next(iter).then(function(u){
                if (!u)
                {
                    return mongodb.close(conn)
                    .then(function(){ return cb(); });
                }
                return correct_user(u).then(function(is_correct){
                    if (is_correct)
                    {
                        return mongodb.close(conn).then(function(){
                            user_find_end(user.username); });
                    }
                    return filter(iter);
                });
            });
        });
    }
</xmp>
<p><code>async function</code> (no support for cancelation if the parent
  function exits early):</p>
<xmp cat=bad>
  async function user_find(){
        let conn = await mongodb.connect();
        let iter = await mongodb.find(conn.users, {});
        let u;
        while (u = await mongodb.find_next(iter))
        {
            if (await correct_user(u))
                break;
        }
        await mongodb.close(conn);
        return u && u.username;
    }
</xmp>
<!-- TODO josh: check if we still have environments where generators are not
  available. Remove if no -->
<p>etask ES5 (when generators are not available):</p>
<xmp cat=good>
    function user_find(){
        return etask([function(){
            return mongodb.connect();
        }, function(conn){
            return mongodb.find(conn.users, {});
        }, function(iter){
            return etask.while([function(){
                return mongodb.find_next(iter);
            }, function(u){
                if (!u)
                    return this.break();
                return correct_user(u);
            }, function(is_correct){
                if (is_correct)
                    this.break(u.username);
            }]);
        }, function(u){
            username = u;
            return mongodb.close(conn);
        }, function(){
            return username;
        }]);
    }
</xmp>
<h3 id=hola-etask-cheat_sheet text="Cheat sheet">Cheat sheet</h3>
<table>
  <tr>
    <td>synchronous</td>
    <td>etask ES5</td>
    <td>etask ES6</td>
  </tr>
  <tr>
    <td><code>for</code></td>
    <td><code>this.for()</code></td>
    <td><code>for</code></td>
  </tr>
  <tr>
    <td><code>continue</code></td>
    <td><code>this.continue()</code></td>
    <td><code>continue</code></td>
  </tr>
  <tr>
    <td><code>return</code></td>
    <td><code>this.return()</code></td>
    <td><code>return</code></td>
  </tr>
</table>
<h3 id=hola-etask-usage>Usage examples</h3>
<p>Simple calls to etask or promise returning functions:</p>
<xmp cat=good>
    let process_items = ()=>etask(function*(){
        let items = yield get_items();
        for (let item of items)
        {
            if (!(yield item_valid(item))
                return false;
        }
        return true;
    });
</xmp>
<p>Call a callback driven function:</p>
<xmp cat=good>
    let make_request = url=>etask(function*(){
        return yield etask.nfn_apply(request, [url]);
    });
</xmp>
<p>Wait on an event emitter:</p>
<xmp cat=ok>
    let save_request = (req, file)=>etask(function*(){
        req.pipe(file)
        .on('end', ()=>this.continue())
        .on('error', e=>this.throw(e));
        return yield this.wait();
    });
</xmp>
<xmp cat=good>
    let save_request = (req, file)=>etask(function*(){
        req.pipe(file)
        .on('end', this.continue_fn())
        .on('error', this.throw_fn());
        return yield this.wait();
    });
</xmp>
<p>Scheduled resource cleanup (like Go's <code>defer</code> statement):</p>
<xmp cat=good>
    let do_something = ()=>etask(function*(){
        let temp_dir = yield make_temp_dir();
        // temp dir will be cleaned up whether the function succeeds or throws
        this.finally(()=>unlink(temp_dir));
        yield do_step1();
        yield do_step2();
        return yield do_step3();
    });
</xmp>
<h3 id=hola-etask-coding text=Coding>Coding</h3>
<p>When possible, use ES6 arrow function with no brackets and no
  <code>return</code></p>
<xmp cat=bad>
    let t = function(fn, domain, expected){
        let i = 7;
        return etask(function*(){
            ...
        };
    });
</xmp>
<xmp cat=good>
    let t = (fn, domain, expected)=>etask(function*(){
        let i = 7;
        ...
    });
</xmp>
<p>
  <code>return etask()</code> in the middle of a function should be
  indented to the function level. Should be used rarely, only when fast
  path needed
</p>
<xmp cat=bad>
    let get_headers = req=>{
        let cache;
        if (cache = cache_getreq)
            return cache;
        return etask(function*get_headers(){
            ...
    }); }
</xmp>
<xmp cat=good>
    let get_headers = req=>{
        let cache;
        if (cache = cache_get(req))
            return cache;
    return etask(function*get_headers(){
        ...
    }); }
</xmp>
<p>etask class indentation</p>
<xmp cat=bad>
    class Read_client {
    search(q){
        let _this = this;
    return etask(function*(){
        ...
    }); }
    }
</xmp>
<xmp cat=ok>
    class Read_client {
        search(q){
            let _this = this;
            return etask(function*(){
                ...
            });
        }
    }
</xmp>
<xmp cat=good>
    class Read_client {
        search(q){
            let _this = this;
        return etask(function*(){
            ...
        }); }
    }
</xmp>
<xmp cat=good>
    class Read_client {
        search(q){ let _this = this; return etask(function*(){
            ...
        }); }
    }
</xmp>
<p>No hidden (automatic) <code>yield</code> in return.</p>
<xmp cat=bad>
    let insert_cid_to_mongo = cid=>etask(function*(){
        let client = yield mongodb.findOne(...cid...);
        return mongodb.update(...client...);
    });
</xmp>
<xmp cat=good>
    let insert_cid_to_mongo = cid=>etask(function*(){
        let client = yield mongodb.findOne(...cid...);
        return yield mongodb.update(...client...);
    });
</xmp>
<p>etask name for lib API</p>
<xmp cat=bad>
    E.find_all = (zmongo, selector, opt)=>etask(function*(){
        ...
    });
</xmp>
<xmp cat=good>
    E.find_all = (zmongo, selector, opt)=>etask(function*mongo_find_all(){
        ...
    });
</xmp>
<p>No etask name for internal functions</p>
<xmp cat=bad>
    let generate_daily = user=>etask(function*generate_daily(){
        ...
    });
</xmp>
<xmp cat=good>
    let generate_daily = user=>etask(function*(){
        ...
    });
</xmp>
<p>
  Avoid enclosing a large portion of a function in a try block.<br>
  Prefer this.on('uncaught', ...) and this.finally when applicable.
  (<a class=why data-why-popup popup=why_no_try_catch>why?</a>)
</p>
<div id=why_no_try_catch class=why_popup>
  Code is shorter and the indentation reduce readability.
</div>
<xmp cat=bad>
    let get_zone_bw = config=>(req, res)=>etask(function*(){
        let zone = yield check_zone(config, req, res);
        try {
            let data = yield get_graphite_bw(req, zone.customer, [zone.name]);
            res.json(data);
        } catch(e){
            zerr(zerr.e2s(e));
            return void res.status(500).send('err');
        }
    });
</xmp>
<xmp cat=good>
    let get_zone_bw = config=>(req, res)=>etask(function*(){
        let zone = yield check_zone(config, req, res);
        this.on('uncaught', err_handler(res));
        let data = yield get_graphite_bw(req, zone.customer, [zone.name]);
        res.json(data);
    });
</xmp>
<h2 id=hola-react text="React code">React code</h2>
<p>
  Read <a href=https://reactjs.org/docs/getting-started.html>React docs</a>
  and follow guidlines and recommendations unless they conflict with Spark
  React conventions.
</p>
<h3 id=hola-react-dry>Use Components to stay DRY</h3>
<p>
  Use the same guidlines for code repetition as regular functions:
  <a href=http://holaspark.com/dna/tree_code#lift-tdry>Try not repeat yourself</a>.
</p>
<p>Move shared JSX to a util component to repeat markup</p>
<xmp mode=jsx cat=bad>
    <div className="feature">
      <h3>title1</h3>
      <p>text</p>
    </div>
    <div className="feature">
      <h3>title2</h3>
      <p>text2</p>
    </div>
</xmp>
<xmp mode=jsx cat=good>
    let Feature = props=>
        <div className="feature">
          <h3>{props.title}</h3>
          <p>{props.children}</p>
        </div>;
    <Feature title="title1">text1</Feature>
    <Feature title="title2">text2</Feature>
</xmp>
<h3 id=hola-react-jsx>JSX</h3>
<p>
  JSX coding convention follows <a href=/dna/html_code>HTML coding</a>.
  When switching from JS code to JSX code use 4 chars indentation on the first.
  Rest follow HTML convention of 2 chars indentation.
</p>
<xmp mode=jsx cat=bad>
    return <View>
      </View>;
</xmp>
<xmp mode=jsx cat=good>
    return <View></View>;
</xmp>
<xmp mode=jsx cat=good>
    return <View>
        </View>;
</xmp>
<xmp mode=jsx cat=good>
    return <View>
          <Button/>
        </View>;
</xmp>
<xmp mode=jsx cat=bad>
    return (
        <View>
          <Button/>
        </View>);
</xmp>
<xmp mode=jsx cat=good>
    return (
        <View>
          <Button/>
        </View>
    );
</xmp>
<xmp mode=jsx cat=bad>
    return (
        <View>
          {show_panel &&
              <Panel/>}
        </View>)
    );
</xmp>
<xmp mode=jsx cat=good>
    return (
        <View>
          {show_panel &&
            <Panel/>}
        </View>
    );
</xmp>
<h3 id=hola-react-css>CSS</h3>
<p>Use <a href=/dna/css_code#react>CSS conventions for react</a></p>
<h2 id=hola-unittest text="unittest">Unittest</h2>
<p>TBD</p>
</div>`;
