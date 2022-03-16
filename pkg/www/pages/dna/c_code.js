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
<Layout title='LIF DNA' desc='C Coding Convention' style={dna_style} dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>C Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:dna@holaspark.com>dna@holaspark.com</a>
  </p>
</div>
<div class=content>
<h3 id=overview-consistent_minimal text="Consistent and Minimal">Consistent
  and Minimal</h3>
<p>
  Most important rules:
  <a href=/dna/js_code#overview-consistent>Be consistent</a>.
  <a href=/dna/js_code#overview-minimal>Be minimal</a>.
  Read these sections carefully.
</p>

<h3 id=overview-text_layout text="Text file layout">Text file layout</h3>
<p>
  Tab size is 8 spaces.<br>
  Shift width (indentation) is 4 spaces.<br>
  Column width 79 char, so it fits well with 80 col terminal.<br>
  Indentation is always one shift-width(4):<br>
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      printf("closing file %s on server\n",
              file_name);
  </xmp>
  <xmp cat=good>
      printf("closing file %s on server\n",
          file_name);
  </xmp>
</div>

<h2 id=braces text="Braces">Braces</h2>
<p>open and close braces of a section should be on the same level.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (close_files) {
          fclose(fp1);
          fclose(fp2);
      }
  </xmp>
  <xmp cat=good>
      if (close_files)
      {
          fclose(fp1);
          fclose(fp2);
      }
  </xmp>
</div>

<h2 id=break_line text="Breaking a long line">Breaking a long line</h2>
<p>when breaking up a long line, it should continue with one shift-width for
  indentation</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (line_length>1 && (screen->sz->vertical<buffer->sz->vertical
                            || explicit_lines))
      {
          printf("this is a test section that will show how to handle "
                 "long lines, such as %s which is %d lines long",
                 "this", 2);
          SetWindowText( hWnd,
                         "Button Name" );
      }
  </xmp>
  <xmp cat=good>
      if (line_length>1 && (screen->sz->vertical<buffer->sz->vertical
          || explicit_lines))
      {
          printf("this is a test section that will show how to handle "
              "long lines, such as %s which is %d lines long", "this", 2);
          SetWindowText(hWnd, "Button Name");
      }
  </xmp>
</div>

<h2 id=if_for_while text="if/for/while statement"><code>if</code>
  <code>for</code> <code>while</code> statement</h2>
<p>if/for/while statement that takes more than one line should always have
  braces; same thing goes when the then/loop part is more than one line</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      for (ret=0; ret<pciScan.dwCards;ret++)
          if (slot.dwBus==pciScan.cardSlot[ret].dwBus &&
              slot.dwSlot==pciScan.cardSlot[ret].dwSlot &&
              slot.dwFunction==pciScan.cardSlot[ret].dwFunction)
              break;
  </xmp>
  <xmp cat=good>
      if (slot.dwBus==pciScan.cardSlot[ret].dwBus &&
          slot.dwSlot==pciScan.cardSlot[ret].dwSlot &&
          slot.dwFunction==pciScan.cardSlot[ret].dwFunction)
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
</div>

<h2 id=functions_prototypes text="Functions prototypes space">Functions
  prototypes space</h2>
<p>function prototypes should be spaced like function calls</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      void do_keyboard_input( int key,
                              char *name,
                              int list_box,
                              BOOL is_read,
                              BOOL is_password )
      {
          // functions code
      }
  </xmp>
  <xmp cat=bad>
      void do_keyboard_input(int key, char *name, int list_box, BOOL
          is_read, BOOL is_password);
  </xmp>
  <xmp cat=good>
      // in header file
      void do_keyboard_input(int key, char *name, int list_box,
          BOOL is_read, BOOL is_password);

      // in code file
      void do_keyboard_input(int key, char *name, int list_box,
          BOOL is_read, BOOL is_password)
      {
          // functions code
      }

      // if you need to comment parameters
      void do_keyboard_input(
          int key, // Encryption key
          char *name, // encrypted user name
          int list_box, // list of destinations to choose from
          BOOL is_read,
          BOOL is_password) // destination specific psw
      {
          // functions code
      }
  </xmp>
</div>

<h2 id=dont_cast text="Unneeded casting">Unneeded casting</h2>
<h3 id=void_cast text="Do not cast void *">do not cast void *, this is
  unneeded in C.</h3>
<div class=bad_good_bind>
  <xmp cat=bad>
      estream = (estream_t *)malloc(sizeof(*estream));
  </xmp>
  <xmp cat=good>
      estream = malloc(sizeof(*estream));
  </xmp>
</div>

<h3 id=prototypes_cast text="Do not cast function prototypes">Do not cast
  function prototypes</h3>
<p>
  do not cast function prototypes - if the implementation changes in the
  future, it will be hard to discover. the only exception is typecasting
  xxx_free() functions (functions from type void xxx_close(xxx_t *xxx)).
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      typedef void (*etimer_func_t)(void *);
      void event_timer_set(double ms, etimer_func_t func, void *data);

      void estream_read(estream_t *estream)
      {
          read(estream->fd);
      }

      void do_something(void)
      {
          estream_t *estream;
          event_timer_set(0, (etimer_func_t) estream_read, estream);
      }
  </xmp>
  <xmp cat=good>
      void estream_read(estream_t *estream)
      {
          read(estream->fd);
      }

      void estream_read_et(void *o)
      {
          estream_read((estream_t *)o);
      }

      void do_something(void)
      {
          estream_t *estream;
          event_timer_set(0, estream_read_et, estream);
      }
  </xmp>
  <xmp cat=good>
      void estream_read(void *o)
      {
          estream_t *estream = o;
          read(estream->fd);
      }

      void do_something(void)
      {
          estream_t *estream;
          event_timer_set(0, estream_read, estream);
      }
  </xmp>
</div>

<h2 id=switch_statement text="switch statement"><code>switch</code> statement
</h2>
<p>
  switch statements should have the case on the same level, no space before ':'.
  <br>
  if the case is one line, then one space after ':'.<br>
  never 'break' in 'default'.<br>
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      switch (selection)
      {
          case KEY_UP :
              x--;
              break;
          case KEY_DOWN :
              x++;
              break;
      }
  </xmp>
  <xmp cat=good>
      switch (selection)
      {
      case KEY_UP:
          x--;
          break;
      case KEY_DOWN:
          x++;
          break;
      }
  </xmp>
  <xmp cat=good>
      switch (selection)
      {
      case KEY_UP: x--; break;
      case KEY_DOWN: x++; break;
      }
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      switch (selection)
      {
      case KEY_UP: x--; break;
      case KEY_DOWN: x++; break;
      default: invalid = 1; break;
      }
  </xmp>
  <xmp cat=good>
      switch (selection)
      {
      case KEY_UP: x--; break;
      case KEY_DOWN: x++; break;
      default: invalid = 1;
      }
  </xmp>
  <xmp cat=good>
      switch (selection)
      {
      case KEY_UP: key = UP; break;
      case KEY_DOWN: key = DN; break;
      case KEY_LEFT: key = LEFT; break;
      case KEY_RIGHT: key = RIGHT; break;
      default: key = NONE;
      }
  </xmp>
</div>

<h2 id=spaces text="Spacing">Spaces</h2>
<p>
  no space between function name and opening parenthesis<br>
  no space between opening parenthesis and first parameter<br>
  one space after comma:
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      printf ("hello %s\n", "world");
      printf( "hello world\n" );
      printf("hello world\n","world");
  </xmp>
  <xmp cat=good>
      printf("hello %s\n", "world");
  </xmp>
</div>

<p>one space after reserved words before the opening parenthesis:</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if(close_file)
  </xmp>
  <xmp cat=good>
      if (close_file)
  </xmp>
</div>

<h2 id=then_after_if text="'then' part of if statement">'then' part of if
  statement</h2>
<p>'then' part of if statement should be in a separete line:<br>
  reason: allows to debug the if and see when it is run.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (close_file) fclose(fp);
  </xmp>
  <xmp cat=good>
      if (close_file)
          fclose(fp);
  </xmp>
</div>

<h2 id=else_if text="else if"><code>else if</code></h2>
<p><code>else if</code> statements should be on the same level at the starting
  if reason: this is similar to switch statement</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (!strcmp(argv[1],"--help")) print_usage();
      else if (!strcmp(argv[1], "--run")) {
          run_application();
          print_results();
      } else print_error();
  </xmp>
  <xmp cat=good>
      if (!strcmp(argv[1], "--help"))
          print_usage();
      else if (!strcmp(argv[1], "--run"))
      {
          run_application();
          print_results();
      }
      else
          print_error();
  </xmp>
</div>

<h2 id=return text="return"><code>return</code></h2>
<p>return statements should not have parentheses and should not have a space
  after them:</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      return (0);
  </xmp>
  <xmp cat=good>
      return 0;
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      return ;
  </xmp>
  <xmp cat=good>
      return;
  </xmp>
</div>

<h2 id=unneeded_parentheses text="Unneeded parentheses">do not use unneeded
  parentheses in expressions</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      if ((a!=b) || (c!=d))
          ...
  </xmp>
  <xmp cat=good>
      if (a!=b || c!=d)
          ...
  </xmp>
</div>

<h2 id=unneeded_return text="Unneeded return">do not call return at the end of
  a function returning void</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      void f(void)
      {
          printf("hello");
          return;
      }
  </xmp>
  <xmp cat=good>
      void f(void)
      {
          printf("hello");
      }
  </xmp>
</div>

<h2 id=blank_line text="Black line">should not separate with more than one
  blank line between sections, functions etc.</h2>

<h2 id=structures_enum text="structures and enum">structure and enum
  definitions</h2>
<p>
  structure and enum definitions, itializations should open { at the same line.
  it is recommended that the name will end with a _t. typedef the struct,
  to make it easy to use later on.
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      typedef struct _WD_INTERNAL    {
          int setup;
          int offset;
      } WD_INTERNAL;
      typedef struct
      {
          int setup;
          int offset;
      } wd_internal_t;
      struct wd_internal_t {
          int setup;
          int offset;
      };
  </xmp>
  <xmp cat=good>
      // when forward structure definition needed:
      typedef struct wd_internal_t {
          struct wd_internal_t *next;
          int setup;
          int offset;
      } wd_internal_t;
  </xmp>
  <xmp cat=good>
      typedef struct {
          int setup;
          int offset;
      } wd_internal_t;
  </xmp>
  <xmp cat=good>
      wd_internal_t wd_initial = {
          8,
          16,
      };
  </xmp>
</div>

<h2 id=comment text="Comments">Comments</h2>
<h3 id=comment-prefer text="prefer C++ comments to C comments">prefer C++
  comments to C comments</h3>
<xmp cat=good>
    /* close all files */
    fclose(fp);
</xmp>
<xmp cat=good>
    // close all files
    fclose(fp);
</xmp>

<h3 id=comment-aligned text="Comments aligned">Comments aligned</h3>
<p>comments should be aligned as the code they comment, or one space after
  the end of the line.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      /*
       * close all files
       */
      fclose(fp);
  </xmp>
  <xmp cat=bad>
      //
      // close all files
      //
      fclose(fp);
  </xmp>
  <xmp cat=good>
      /* close all files */
      fclose(fp);
  GOOD better:
      // close all files
      fclose(fp);
  </xmp>
  <xmp cat=good>
      fclose(fp); // close all files
  </xmp>
</div>

<h3 id=comment-multiline text="Multiline comments">Multiline comments</h3>
<p>comments which occupy more than one line should adhere to the following
  guidline</p>
<div class=bad_good_bind>
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
</div>

<h3 id=comment-ident text="Comments ident">Comments ident</h3>
<p>Comment should never be ident more the 4 spaces even in structures.<br>
  If longer, put the comment at the line above.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      typedef struct {
          isa_pnp_id search_id; /* if search_id.vendor[0]==0 - scan all vendor
                                 * IDs
                                 * if searchId.dwSerial==0 - scan all serial
                                 * numbers */
          int cards; /* number of cards found */
          isa_pnp_card card[ISAPNP_CARDS]; /* cards found */
      } wd_isapnp_scan_cards_t;
  </xmp>
  <xmp cat=bad>
      typedef struct {
          isa_pnp_id search_id;            /* if search_id.vendor[0]==0 - scan
                                            * all vendor IDs
                                            * if searchId.dwSerial==0 - scan all
                                            * serial numbers */
          int cards;                       /* number of cards found */
          isa_pnp_card card[ISAPNP_CARDS]; /* cards found */
      } wd_isapnp_scan_cards_t;
  </xmp>
  <xmp cat=good>
      typedef struct {
          /* if search_id.vendor[0]==0 - scan all vendor IDs
           * if searchId.dwSerial==0 - scan all serial numbers */
          isa_pnp_id search_id;
          int cards; /* number of cards found */
          isa_pnp_card card[ISAPNP_CARDS]; /* cards found */
      } wd_isapnp_scan_cards_t;
  </xmp>
  <xmp cat=good>
      typedef struct {
          // if search_id.vendor[0]==0 - scan all vendor IDs
          // if searchId.dwSerial==0 - scan all serial numbers
          isa_pnp_id search_id;
          int cards; // number of cards found
          isa_pnp_card card[ISAPNP_CARDS]; // cards found
      } wd_isapnp_scan_cards_t;
  </xmp>
</div>

<h3 id=comment-xxx text="Comments of XXX">Comments of XXX</h3>
<p>Comments of XXX should be &lt;keywords&gt;: &lt;comment&gt;. multiple names
  should be separated with a '/':</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      XXX: derry: move to compat
      XXX derry: ANDROID move to compat
      XXX derry: arik: move to compat
  </xmp>
  <xmp cat=good>
      XXX: move to compat
      XXX derry: move to compat
      XXX derry ANDROID: move to compat
      XXX derry/arik: move to compat
  </xmp>
</div>

<h2 id=for_while_loop text="for or while loop"><code>for</code> or
  <code>while</code> loop</h2>
<p>common sense should come into play when deciding whether to use
  <code>for</code> or <code>while</code> loops</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      i = 0;
      while (i<10)
      {
           ...
           i++;
      }
  </xmp>
  <xmp cat=good>
      for (i = 0; i<10; i++)
          ...;
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      for (p = p->next; p; p = p->next)
          ...;
  </xmp>
  <xmp cat=good>
      while (p = p->next)
         ...;
  </xmp>
</div>

<h2 id=while_for_if text="hile for if</code> without a statement">
  <code>while for if</code> without a statement</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      while(pop_first(list))
          ;
  </xmp>
  <xmp cat=good>
      while(pop_first(list));
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      for(i=0; i<*p; i++)
          ;
  </xmp>
  <xmp cat=good>
      for (i=0; i<*p; i++);
  </xmp>
</div>
<div class=bad_good_bind>
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
</div>

<h2 id=spacing text="Spacing">Spacing</h2>
<h3 id=spacing_assignment text="One space after assignment">One space after
  assignment</h3>
<p>put one space before and after an assignment.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      int a=0;

      x= x+1;
      bits|=BIT5;
  </xmp>
  <xmp cat=good>
      int a = 0;

      x = x+1;
      bits |= BIT5;
  </xmp>
</div>

<h3 id=spacing_assignment_in_for text="Assignment in for loop">Assignment in
  for loop</h3>
<p>if it is in a <code>for</code> loop, you can skip the spaces. if you skip
  one of the spaces, skip both</p>
<div class=bad_good_bind>
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
</div>

<h3 id=spacing_seperator text="No space before statement seperator">No space
  before statement seperator</h3>
<p>don't put a space before a statement seperator, put one after it</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      for (i=0 ;i ;i--, j*=2) ;
  </xmp>
  <xmp cat=good>
      for (i=0; i; i--, j*=2);
  </xmp>
  <xmp cat=good>
      for (i = 0; i; i--, j *= 2);
  </xmp>
</div>

<h3 id=spacing_increment_decrement text="No space after increment/decrement">No
  space after increment/decrement</h3>
<p>don't put a space after increment and decrement. increment after the value,
  not before.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      i --;
      ++j;
  </xmp>
  <xmp cat=good>
      i--;
      j++;
  </xmp>
</div>

<h2 id=change_value text="Function call value">Don't increment, set or change
  value of variable inside a function call</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      calc_x_y(i++, 2);
  </xmp>
  <xmp cat=good>
      // if i is not a global:
      calc_x_y(i, 2);
      i++;
  </xmp>
  <xmp cat=good>
      // if i is a global that calc_x_y() uses:
      i++;
      calc_x_y(i-1, 2);
  </xmp>
  <xmp cat=good>
      if (i++)
          a[i++] = 4;
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      set_x(i=3);
  </xmp>
  <xmp cat=good>
      // if i is not a global:
      i = 3;
      set_x(i);
  </xmp>
</div>

<h2 id=for_assign_statement text="for loops assign inside a statement">
  <code>for</code> loops assign inside a statement</h2>
<p>
  in for loops, when there is a function that gets the next element, it should
  be done once (inside the step condition):<br>
  assign inside a statement:
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      for (i = 0, result = get_char(); result=='\r'; result = get_char(), i++)
          handle_result(result);
  </xmp>
  <xmp cat=good>
      for (i = 0; (result = get_char())=='\r'; i++)
          handle_result(result);
  </xmp>
</div>

<h2 id=truth_vlaue text="truth value in if/for/while">truth value in
  <code>if/for/while</code></h2>
<p>when assigning in a truth value (if for while), use parentheses. This helps
  eliminating compilation warnings.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      for (i = 0; result = get_result(); i++)
          handle_result(result);
      if (x = compute_num())
          return x;
  </xmp>
  <xmp cat=good>
      for (i = 0; (result = get_result()); i++)
          handle_result(result);
      if ((x = compute_num()))
          return x;
  </xmp>
</div>

<h2 id=string_initialization text="string initialization and zero termination">
  string initialization and zero termination</h2>
<p>in string initialization and zero termination, you must use 0</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      string[0] = '\0';
      if (string[3]=='\0')
          ...
  </xmp>
  <xmp cat=good>
      *string = 0;
      if (!string[3])
          ....
  </xmp>
</div>

<h2>function return values</h2>
<ul>
  <li>in functions returning a pointer, return NULL on fail.</li>
  <li>in functions that only have success/fail, use 0 for success and -1 for
    failure (instead of TRUE and FALSE).</li>
  <li>in functions with many error reasons, use negative values for the
    reason.</li>
  <li>
    functions returning and integer that is "small" and positive, return -1 if
    fails. if 0 is an invalid success value, then you may choose to return 0
    for failure.
  </li>
  <li>
    in functions that can return any integer, you have two options:
    <ul>
      <li>if its error is not important, then check if you can logically return
        0 or anything else that will bring desired behaviour.</li>
      <li>if the error indication is important, then add another parameter to
        pass the error.</li>
    </ul>
  </li>
  <li>
    functions that return boolean values (is_big, is_directory, is_download)
    should return 0 for false and non 0 for true, according to standard K&R C.
    (not to use FALSE and TRUE).
  </li>
</ul>
<div class=bad_good_bind>
  <xmp cat=bad>
      int do_load(void)
      {
          if (ioctl(image_fd, SIOC_LOAD, 1)<0)
              return FALSE;
          return TRUE; // action executed
      }
  </xmp>
  <xmp cat=good>
      int do_load(void)
      {
          if (ioctl(image_fd, SIOC_LOAD, 1)<0)
              return -1;
          return 0; // action executed
      }
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      int is_loaded(void)
      {
          if (in_memory_count>=1)
              return TRUE;
          return FALSE;
      }
  </xmp>
  <xmp cat=good>
      int is_loaded(void)
      {
          if (in_memory_count>=1)
              return 1;
          return 0;
      }
  </xmp>
  <xmp cat=good>
      int is_loaded(void)
      {
          return in_memory_count>=1;
      }
  </xmp>
  <xmp cat=good>
      return ok ? (device_t *) ptr : NULL;
  </xmp>
  <xmp cat=good>
      #define EFLASH_READ 1
      #define EFLASH_WRITE 2
      return -EFLASH_WRITE;
  </xmp>
</div>

<h2 id=error_handling_once text="implement error handling only once">implement
  error handling only once</h2>
<p>
  implement error handling only once, by setting all variables to zero at the
  begining, and performing a goto to exit the function. If no error handling is
  required (i.e. no memory to release, no files to close, etc) - plain return
  should be used
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      device_t *open_device(char *dev_name)
      {
          device_t *dev;
          file *fp;

          dev = malloc(sizeof(*dev));
          if (!dev)
              return null;
          bzero(*dev);
          dev->name = strdup(dev_name);
          if (!dev->name)
          {
              free(dev);
              return null;
          }
          dev->fp = fopen(dev->name);
          if (!dev->fp)
          {
              free(dev->name);
              free(dev);
              return null;
          }
          fp = fopen(std_name)
          if (!fp)
          {
              fclose(dev->fp);
              free(dev->name);
              free(dev);
              return null;
          }
          fclose(fp);
          return dev;
      }
  </xmp>
  <xmp cat=good>
      device_t *open_device(char *dev_name)
      {
          device_t *dev;
          file *fp = null;

          dev = malloc(sizeof(*dev));
          if (!dev)
              return NULL; // no error handling required
          BZERO(*dev);
          dev->name = strdup(dev_name);
          if (!dev->name)
              goto Error;
          dev->fp = fopen(dev->name);
          if (!dev->fp)
              goto Error;
          fp = fopen(std_name)
          if (!fp)
              goto Error;

          goto Exit;

      Error:
          if (dev->name)
              free(dev->name);
          if (dev->fp)
              fclose(fp);
          free(dev);
          dev = NULL;
      Exit:
          if (fp)
              fclose(fp);
          return dev;
      }
  </xmp>
</div>

<h2 id=goto text="goto only for error handling">Do not use goto for anything
  other then error handling.</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
          for (cnt = 0; cnt < sizeof(index_names)/sizeof(char *); cnt++)
          {
              struct stat sb;
              strcpy(index_name + filename_len, index_names[cnt]);

              // Check if the index file exists
              if (stat(index_name, &sb)>=0)
              {
                  ...
                  hc->sb = sb;
                  goto Next;
              }
          }
          return http_dir_handler(hc);
      }
      Next:
      ....
  </xmp>
  <xmp cat=good>
          for (cnt = 0; cnt < sizeof(index_names)/sizeof(char *); cnt++)
          {
              struct stat sb;
              strcpy(index_name + filename_len, index_names[cnt]);

              // Check if the index file exists
              if (stat(index_name, &sb)>=0)
              {
                  ...
                  hc->sb = sb;
                  break;
              }
          }
          if (S_ISDIR(hc->sb.st_mode))
              return http_dir_handler(hc);
      }
      ....
  </xmp>
</div>

<h2 id=naming text="naming conventions">naming conventions</h2>
<p>code will be in UNIX notation. UNIX names should not include the data type,
  rather the meaning of the information in the data.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
    int iCount;
    char *szName;
  </xmp>
  <xmp cat=good>
    int is_completed;
    int8 data;
    int16 vendor_id;
    uint count;
    void *buffer;
    char *new_name;
    char *name;
    typedef struct {...} device_t;
    int read_data_block(void);
    void pci_detection(void);
  </xmp>
</div>

<h2>checking function return values</h2>
<p>functions that return int or a pointer will be checked without comparing, if
  they return 0 or non 0.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (strcmp(str, "exit")==0)
          run_app();
  </xmp>
  <xmp cat=good>
      if (!strcmp(str, "exit"))
          run_app();
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (quit_app()==TRUE)
          SendMessage(WM_QUIT);
  </xmp>
  <xmp cat=good>
      if (quit_app())
          SendMessage(WM_QUIT);
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      fp = fopen("test");
      if (fp==NULL)
          return NULL;
  </xmp>
  <xmp cat=good>
      fp = fopen("test");
      if (!fp)
          return NULL;
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      char *buffer = locate_buffer();
      if (buffer!=NULL)
          fill_buffer(buffer);
  </xmp>
  <xmp cat=good>
      char *buffer = locate_buffer();
      if (buffer)
          fill_buffer(buffer);
  </xmp>
</div>

<h2 id=static_when_possible text="Static when possible">static
  functions when possible</h2>
<h3 id=static_when_possible_functions text="functions">functions</h3>
<p>
  when possible use static when declaring functions which are only in scope
  for the file they're in. functions which are not declared static are
  considered a part of the API. if init() is the only function calling
  calc_init_time() then:
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      int init(void)
      {
          return calc_init_time();
      }

      int calc_init_time()
      {
          return 5;
      }
  </xmp>
  <xmp cat=good>
      int init(void)
      {
          return calc_init_time();
      }

      static int calc_init_time()
      {
          return 5;
      }
  </xmp>
</div>

<h3 id=static_when_possible_variables text="variables">variables</h3>
<div class=bad_good_bind>
  <xmp cat=bad>
      // inside c file
      struct cmd {
          char *name;
          int param_num;
      };

      struct cmd commands[] = {
           {"init", 1},
           {"shutdown", 0},
      };
  </xmp>
  <xmp cat=good>
      // inside c file
      struct cmd {
          char *name;
          int param_num;
      };

      static struct cmd commands[] = {
           {"init", 1},
           {"shutdown", 0},
      };
  </xmp>
</div>

<h2 id=allocating text="allocating">allocating</h2>
<p>
  when allocating or using a structre, use ZALLOC/calloc or BZERO its
  elements.<br>
  try using BZERO instead of memset().
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      dev_t *dev = malloc(sizeof(dev_t));
      locate_t locate;
      memset(dev, 0, sizeof *dev);
      memset(&locate, 0, sizeof locate);
  </xmp>
  <xmp cat=good>
      dev_t *ZALLOC(dev);
      locate_t locate;
      if (!dev)
          goto Error;
      BZERO(locate);
  </xmp>
</div>

<h2 id=check_constructor text="Check constructor initing">Check constructor
  initing</h2>
<p>
  perfer to check constructor initing in same line of calling the constructor.
  this allows variable re-use, and makes it more obvious the constructor may
  fail.
</p>
<div class=bad_good_bind>
  <xmp>
      // GOOD but not prefered:
      FILE *fp;
      if (!(fp = fopen("data"))
          goto Exit;
  </xmp>
  <xmp cat=good>
      // better:
      FILE *fp = fopen("data");
      if (!fp)
          goto Exit;
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp>
      // GOOD but not prefered:
      char *s = strstr(list, "hello");
      if (!s)
          ...;
  </xmp>
  <xmp cat=good>
      // better:
      char *s;
      if (!(s = strstr(list, "hello")))
          ...;
  </xmp>
</div>

<h2 id=macros text="macros">macros</h2>
<h3 id=macros_functions text="functions instead of macros">functions instead of
  macros</h3>
<p>try using functions instead of macros. in most cases there is no performance
  problem.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #define CONVERT_TIME_TO_MILLI(t) \
          (((t)->days*24*3600 + (t)->sec) * 1000)
  </xmp>
  <xmp cat=good>
      int convert_time_to_milli(time_struct *t)
      {
          return (t->days*24*3600 + t->sec) * 1000;
      }
  </xmp>
</div>

<h3 id=macros_names text="macro names">macro names</h3>
<p>macro names should normally be all upper case, with normal spacing as rest
  of code</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #define CONVERT_TIME_TO_MILLI( t )  (((t)->days*24*3600 + (t)->sec) * 1000)
      #define CONVERT_TIME_TO_MILLI(t) \
              (((t)->days*24*3600 + (t)->sec) * 1000)
  </xmp>
  <xmp cat=good>
      #define CONVERT_TIME_TO_MILLI(t) (((t)->days*24*3600 + (t)->sec) * 1000)
  </xmp>
  <xmp cat=good>
      #define CONVERT_TIME_TO_MILLI(t) \
          (((t)->days*24*3600 + (t)->sec) * 1000)
  </xmp>
</div>

<h2 id=macros_multi_args text="macro multi arguments">macro multi arguments</h2>
<p>using ## for macro multi arguments (x...) will result in a compilation error
  when using gcc 3.3.x and up</p>
<div class=bad_good_bind>
  <xmp cat=bad>
  #define IOW(func,a...) wfs_##func(##a)
  </xmp>
  <xmp cat=good>
  #define IOW(func,a...) wfs_##func(a)
  </xmp>
</div>

<h3 id=macros_multi_statments text="macros with more than one statement">macros
  with more than one statement</h3>
<p>macros that are more than one statement long should be encapsulated by
  do-while(0). this enables using them inside if-else statements:</p>
<xmp>
    // example usage:
    if (cond)
        DO_A_AND_B;
    else
        do_something_else();
</xmp>
<div class=bad_good_bind>
  <xmp cat=bad>
      #define DO_A_AND_B() \
      { \
          do_a(); \
          do_b(); \
      }
  </xmp>
  <xmp cat=good>
      #define DO_A_AND_B() \
      do { \
          do_a(); \
          do_b(); \
      } while (0)
  </xmp>
</div>

<h3 id=macros_static_functions>static functions in header instead of macros</h3>
<p>if you need a function, but you don't want a library to link with, then you
  can use static functions in the header file instead of macros</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #define CREATE_HANDLE() \
          (handle_t h, h = wd_open(), h==-1 ? NULL : h)
  </xmp>
  <xmp cat=good>
      static handle_t create_handle(void)
      {
          handle_t h = wd_open();
          if (h==-1)
              return NULL;
          return h;
      }
  </xmp>
  <xmp cat=good>
      static handle_t create_handle(void)
      {
          handle_t h;
          if ((h = wd_open())==-1)
              return NULL;
          return h;
      }
  </xmp>
</div>

<h2 id=forward_declarations text="Don't use forward declarations">Don't use
  forward declarations</h2>
<p>don't use forward declarations unless they are necessary. Instead change the
  order so the caller is below the callee.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      void callee(...);
      void caller(...)
      {
          callee();
      }
      void callee(...)
      {
      }
  </xmp>
  <xmp cat=good>
      void callee(...)
      {
      }
      void caller(...)
      {
          callee();
      }
  </xmp>
</div>

<h2 id=native_c_types text="Prefer native c data types">Prefer native c data
  types instead of OS specific data types.</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      BYTE b;
      DWORD w;
  </xmp>
  <xmp cat=good>
      unsigned char b;
      unsigned long b;
  </xmp>
</div>

<h2 id=inclusion_protection text="Double inclusion protection">Double inclusion protection</h2>
<p>
  at the begining of a file, add double inclusion protection, where the file
  path and name is surrounted by two underscores before and after; a slash and
  a dot are translated to an underscore.
</p>
<xmp cat=good>
    #ifndef __UTIL_ZERR_H__
    #define __UTIL_ZERR_H__

    // the pkg/util/zerr.h content comes here

    #endif
</xmp>

<h2 id=files_terminate text="Files terminate">Files terminate</h2>
<p>files should terminate with a carriage return<br>
  reason: compilers can ignore lines that are not terminated by a CR.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #endif<EOF>
  </xmp>
  <xmp cat=good>
      #endif
      <EOF>
  </xmp>
</div>

<h2 id=nested_if text="Nested #if">Nested <code>#if</code></h2>
<p>nested #if directives should not be indented (neither the # character nor
  the directive itself, regardless of how complex they are).</p>
<div class=bad_good_bind>
  <xmp cat=good>
      #include <stdio.h>
      #ifdef UNIX
      #include <unistd.h>
      #else
      #include <windows.h>
      #ifdef WINCE
      #include <wince.h>
      #endif
      #endif
  </xmp>
  <xmp cat=bad>
      #include <stdio.h>
      #ifdef UNIX
          #include <unistd.h>
      #else
          #include <windows.h>
          #ifdef WINCE
              #include <wince.h>
          #endif
      #endif
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=good>
      void sleep_ms(int ms)
      {
      #ifdef WINDOWS
          Sleep(ms);
      #else
          sleep(ms);
      #endif
      }
  </xmp>
  <xmp cat=bad>
      void sleep_ms(int ms)
      {
          #ifdef WINDOWS
              Sleep(ms);
          #else
              sleep(ms);
          #endif
      }
  </xmp>
</div>

<h2 id=endif_comments text="#endif comments"><code>#endif</code> comments</h2>
<p>You can put an #endif a comment telling to what if it belongs if there is
  a large gap between the #if and its corresponding #endif.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #ifdef WINDOWS
      int htonl(int i)
      {
          return (i << 16) & 0xffff0000 | (i >> 16) & 0xffff;
      }
      #endif // WINDOWS
  </xmp>
  <xmp cat=good>
      #ifdef WINDOWS
      int htonl(int i)
      {
          return (i << 16) & 0xffff0000 | (i >> 16) & 0xffff;
      }
      #endif
  </xmp>
  <xmp cat=good>
      #ifdef CONFIG_RG_FIREWALL
      // Lots of firewall code, that you really have to scroll down
      // to see all of it.
      #endif // CONFIG_RG_FIREWALL
  </xmp>
</div>

<h2 id=enum text="enum">enum</h2>
<h3 id=enum_short text="Very short enum"><code>enum</code> should be in the
  same line if they are very short</h3>
<xmp cat=good>
    enum {STATUS_OK=DEVIOCTL_NOERROR, STATUS_FAIL=-1};
</xmp>
<xmp cat=good>
    enum {
        CMD_NONE=0,
        CMD_END=1,
        WP_WORD=14,
    };
</xmp>
<xmp cat=good>
    enum {
        CMD_NONE = 0,
        CMD_END = 1,
        WP_WORD = 14,
    };
</xmp>

<h3 id=enum_values text="enums should have values attached">enums should have
  values attached</h3>
<div class=bad_good_bind>
  <xmp cat=bad>
      enum {
          DO_RESET = 1,
          DO_LOAD,
          DO_SAVE,
      };
  </xmp>
  <xmp cat=good>
      enum {
          DO_RESET = 1,
          DO_LOAD = 2,
          DO_SAVE = 3,
      };
  </xmp>
  <xmp cat=good>
      enum {
          DO_RESET = 10,
          DO_LOAD = 20,
          DO_SAVE = 30,
      };
  </xmp>
</div>

<h3 id=enum_comma text="all enum lines be comma terminated">all enum lines be
  comma terminated</h3>
<p>all enum lines be comma terminated - this makes the enum extensible.<br>
  only separate the last line, if it is meant to never be surpassed.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      enum {
          DO_RESET = 1,
          DO_LOAD = 2,
          DO_SAVE = 3
      };
  </xmp>
  <xmp cat=good>
      enum {
          DO_RESET = 1,
          DO_LOAD = 2,
          DO_SAVE = 3,
      };
  </xmp>
  <xmp cat=good>
      enum {
          BANDIT1 = 1,
          BANDIT2 = 2,
          ALI_BABA = 41
      };
  </xmp>
</div>

<h3 id=enum_spaces text="Spaces only after commas">Spaces only after commas</h3>
<p>enum in same line should have spaces only after commas</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      enum { DO_RESET = 1, DO_LOAD = 2, DO_SAVE = 3 };
  </xmp>
  <xmp cat=good>
      enum {DO_RESET=1, DO_LOAD=2, DO_SAVE=3};
  </xmp>
</div>

<h2 id=pointer text="Pointer next to the variable">Put the pointer next to the
  variable</h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      char* strrev(char* s);
  </xmp>
  <xmp cat=good>
      char *strrev(char *s);
  </xmp>
</div>

<h2 id=dynamic_allocation text="Dynamic allocation only when needed">Dynamic
  allocation only when needed</h2>
<p>use stack allocation for local variables of const size. use dynamic
  allocation only when needed.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      type_t *o = malloc(sizeof(*o));
      ...
      free(o);
  </xmp>
  <xmp cat=good>
      type_t o;
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      type_t *ZALLOC(o);
      ...
      free(o);
  </xmp>
  <xmp cat=good>
      // if possible:
      type_t o = {0};
  </xmp>
  <xmp cat=good>
      type_t o;
      MZERO(o);
  </xmp>
</div>

<h2 id=defined text="defined()">defined()</h2>
<p>
  only use the defined() macro when you have a complex expression or in
  #elif.<br>
  If you find that you do need to use the defined() macro for more than one
  flag, see if the 2 flags can be grouped under another one new flag.
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #ifdef CONFIG_CRAMFS_FS
      #ifndef CONFIG_ARCH_IXP22X
          cramfs_init();
      #endif
      #endif
  </xmp>
  <xmp cat=bad>
      #if defined(CONFIG_CRAMFS_FS)
          cramfs_init();
      #endif
  </xmp>
  <xmp cat=good>
      #ifdef CONFIG_CRAMFS_FS
          cramfs_init();
      #endif
  </xmp>
  <xmp cat=good>
      // since you really need both flags:
      #if defined(CONFIG_CRAMFS_FS) || defined(CONFIG_NFS_FS)
          cramfs_to_nfs_copy();
      #endif
  </xmp>
  <xmp cat=good>
      #ifdef CONFIG_CRAMFS_FS
          cramfs_init();
      #elif defined(CONFIG_NFS_FS)
          nfs_init();
      #endif
  </xmp>
</div>

<h2 id=ifdef_specific_os text="#ifdef SPECIFIC_OS order"><code>#ifdef SPECIFIC_OS</code> order</h2>
<p>how to do and <code>#ifdef SPECIFIC_OS</code> what comes first, the right
  order is</p>
<xmp cat=good>
    #ifdef LINUX
        .....
    #elif defined(SOLARIS)
        .....
    #elif defined(VXWORKS)
        .....
    #elif defined(OS2)
        .....
    #elif defined(WIN95)
        .....
    #elif defined(WINNT)
        .....
    #elif defined(WINCE)
        .....
    #endif
</xmp>

<h2 id=cpp_members_name text="C++ data members names">C++ data members
  names</h2>
<p>in C++ classes give data members names starting with m_</p>
<xmp cat=good>
    class find_t
    {
        int m_index;
        char *m_text;
    };
</xmp>

<h2 id=functions text="functions">functions</h2>
<p>
  functions used in one C file: should be implemented static, and a
  declaration in the C file should only be added if used before implemented.
  (example: queue_locate_any()).<br>
  functions used out of the C file ('global'): should be declared in the H
  file. (example: queue_locate_item() and queue_activate_operation()).
  structures used in one C file: should be declared inside the C file.
  (example: sched_operation_t).<br>
  a pointer to the structure is needed out of the C file: a forward
  declaration should be in the H file, and the full decleration in the C file.
  (example: sched_queue_t).<br>
  the structure's members are needed out of the C file: declare it in the H
  file. (no example below).
</p>
<xmp cat=good>
    // in H file
    typedef struct sched_queue_t sched_queue_t;
    sched_queue_t *queue_locate_item(char *name);
    void queue_activate_operation(sched_queue_t *sched);

    // in C file
    typedef struct {
        char *operation;
        char *user;
    } sched_operation_t;
    sched_operation_t valid_operations[] = {
        {"ls", "root"},
        {"rm", "anonymous"},
        {NULL, NULL}
    };
    struct sched_queue_t {
        struct sched_queue_t *next;
        char *name;
        char *operation;
        int expire;
    };
    sched_queue_t *the_queue;
    static sched_queue_t *queue_locate_any(char *name)
    {
        sched_queue_t *search;
        for (search = the_queue; search && strcmp(search->name, name);
            search = search->next);
        return search;
    }

    sched_queue_t *queue_locate_item(char *name)
    {
        sched_queue_t *search = queue_locate_any(name);
        // check if already expired
        if (expire>get_current_time())
        {
            queue_remove(search);
            return NULL;
        }
        return search;
    }
</xmp>

<h2 id=oo_naming text="object oriented naming">object oriented naming</h2>
<p>
  the data structure should be the name of the object with _t at the end.<br>
  functions should all start with the object name, then operation starting
  with a verb.
</p>
<xmp cat=good>
    typedef struct {
        the_objects_data_members;
    } xxx_t;

    // use _alloc and _free if it only allocates memory, and does not do
    // "active" operations
    xxx_t *xxx_alloc(initialization_param);
    void xxx_free(xxx_t *xxx);

    // use _open and _close if it does active stuff like call many functions,
    // register events, IOCTLs etc...
    xxx_t *xxx_open(initialization_param);
    void xxx_close(xxx_t *xxx);

    // use _init and _uninit if it does not allocate the xxx_t structure, only
    // its sons - i.e. xxx_alloc can be a simple zalloc() while xxx_init
    // can be a simple ZEROM(). xxx_uninit frees data structures that the xxx_t
    // points to, without freeing xxx_t itself
    void xxx_init(xxx_t *xxx, initialization_param);
    void xxx_uninit(xxx_t *xxx);

    // methods on the xxx object
    char *xxx_get_by_index(xxx_t *xxx, int index);
    int xxx_get_by_name(xxx_t *xxx, char *name);
    char **xxx_get_name_list(xxx_t *xxx);
    void xxx_set(xxx_t *xxx, char *name);
    void xxx_set_nofail(xxx_t *xxx, char *name);
</xmp>
<div class=bad_good_bind>
  <xmp cat=bad>
      in_addr dev_if_ip_get(dev_if_t *dev);
  </xmp>
  <xmp cat=good>
      // operation ('get_ip') must start with a verb ('get')
      in_addr dev_if_get_ip(dev_if_t *dev);
  </xmp>
</div>

<h2 id=linked_lists text="linked lists">linked lists</h2>
<p>simple linked lists always have a 'next' variable as the first structure
  member.</p>

<h3 id=linked_lists-functions text="functions for list">functions for list are
  xxx_free() and xxx_list_free()</h3>
<p>
  the xxx_yyy (xxx is object name and yyy is function name), for functions on
  the object, NOT on list of objects.<br>
  the xxx_list_yyy is for functions on the list of objects (such as
  xxx_list_add, xxx_list_remove).
</p>
<xmp cat=good>
    // sample functions:
    xxx_t *xxx_dup(xxx_t *p); // retunes a duplicated object
    void xxx_copy(xxx_t *dst, xxx_t *src); // copy object's data
    void xxx_free(xxx_t *p); // free the object
    xxx_t *xxx_alloc(init_data....); // creates a new initialized object
    void xxx_init(xxx_t *p, init_data....); // initializes an object
    void xxx_uninit(xxx_t *p, init_data....); // un-initializes an object
    // frees the list. list now is destroyed
    void xxx_list_free(xxx_t *xxx_list);
    // adds an object to the list
    void xxx_list_add(xxx_t **xxx_list, xxx_t *new_elem);
</xmp>

<h3 id=linked_lists-add_remove text="Don't implement add and remove functions">
  Don't implement add and remove functions</h3>
<p>
  normally, we should not implement add and remove functions (xxx_list_add and
  xxx_list_remove). these should only be implemented if there is specific added
  value (specific code) that needs to be done in addition to adding to the
  list.<br>
  when scanning lists in order to add/remove elements, a pointer to pointer
  should be used.
</p>
<xmp cat=good>
    typedef struct file_t {
        struct file_t *next;
        char *name;
    } file_t;

    // frees a single file object
    file_free(file_t *p)
    {
        if (p->name)
            free(p->name);
        free(p);
    }

    // frees the whole list of object
    file_list_free(file_t *p)
    {
        while (p)
        {
            file_t *tmp = p->next;
            file_free(p);
            p = tmp;
        }
    }
</xmp>

<h2 id=free text="free() handles NULL"><code>free()</code> handles
  <code>NULL</code></h2>
<p>free() also handles NULL, so no need for 'if ()' before it</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (str)
          free(str);
  </xmp>
  <xmp cat=good>
      free(str);
  </xmp>
</div>

<h2 id=exit_negative_value text="exit a function with a negative value">exit a
  function with a negative value</h2>
<p>to exit a function with a negative value, to indicate an error, and send a
  log message, you may use the fact that zerr() returns negative value</p>
<xmp cat=good>
    // GOOD but a little long:
    if (ioctl()<0)
    {
        zerr_f(LERR, "failed ioctl()");
        return -1;
    }
</xmp>
<xmp cat=good>
    // GOOD short and neat:
    if (ioctl()<0)
        return zerr_f(LERR, "failed ioctl()");
</xmp>

<h2 id=long_strings text="constant strings longer than one line">constant
  strings longer than one line</h2>
constant strings longer than one line should be closed on each line by a quote
and opened again on the next line. words should have the space after them on
the same line.
<div class=bad_good_bind>
  <xmp cat=bad>
      printf("Hello world, this is a long string that we want to print and \
  is more than 80 chars long so we need to split it");
  </xmp>
  <xmp cat=bad>
      printf("Hello world, this is a long string that we want to print"
          " and is more than 80 chars long so we need to split it");
  </xmp>
  <xmp cat=good>
      printf("Hello world, this is a long string that we want to print "
          "and is more than 80 chars long so we need to split it");
  </xmp>
</div>

<h2 id=const_char text="Don't use 'const char *'">Dont use <code>const char *</code></h2>
<p>Don't use 'const char *' (or 'char const *') in code. It is impossible to
  integrate code written with consts into a large system.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      const char *gen_token(const char *seed);
  </xmp>
  <xmp cat=good>
      // Return a static buffer - don't change.
      char *gen_token(char *seed);
  </xmp>
</div>

<h2 id=zero_prams_func text="Zero parameters functions">Zero parameters
  functions</h2>
<p>Functions that accept zero parameters should be defined as accepting
  void</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      double get_time_ms();
  </xmp>
  <xmp cat=good>
      double get_time_ms(void);
  </xmp>
</div>

<h2 id=compile_time_arrays text="Compile time arrays">Compile time arrays</h2>
<p>Compile time arrays should be terminated with a NULL (or -1 when 0 is valid)
  element, and not by calculating the size of the the array using sizeof.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      name_val_t arr[] = {
          {"PPPoA", 1},
          {"ETHoA", 2},
      };
      for (i = 0; i < sizeof(arr) / sizeof(arr[0]; i++)
          elem_print(arr + i);
  </xmp>
  <xmp cat=good>
      name_val_t arr[] = {
          {"PPPoA", 1},
          {"ETHoA", 2},
          {NULL}
      };
      for (i = 0; arr[i].name; i++)
          elem_print(arr + i);
  </xmp>
</div>

<h2 id=trivial text="Trivial expressions">Trivial</h2>
<p>
  Trivial <code>&gt; &gt;= &lt; &lt;= == !=</code> expressions should not have
  spaces around them.<br>
  Trivial expressions examples: <code>a_var, array[3].var[1], sizeof(xxx), (x +
  1)</code> Pointers <code>-&gt;</code> are not counted as trivial
  expressions for <code>&gt; &gt;= &lt; &lt;=</code>, since its hard to read
  <code>x-&gt;y&gt;z</code>, while its not hard to read
  <code>x-&gt;y==z</code>.
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (x > 5)
  </xmp>
  <xmp cat=good>
      if (x>5)
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (x+1>5)
  </xmp>
  <xmp cat=good>
      if (x+1 > 5)
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (f(x, y) > g(y, z))
  </xmp>
  <xmp cat=good>
      if (f(x, y)>g(y, z))
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (x->y == 5)
  </xmp>
  <xmp cat=good>
      if (x->y==5)
  </xmp>
</div>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (x->y>=5)
  </xmp>
  <xmp cat=good>
      if (x->y >= 5)
  </xmp>
</div>
<h2 id=empty_lines text="Empty lines">Empty lines</h2>
<p>Don't put empty lines between code inside functions. If you want to separate
  code fragments, put a comment line.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      for (i=0; i<5; i++)
          printf(do_stuff);

      if (x>5)
          zerr(LERR, ...);
  </xmp>
  <xmp cat=good>
      for (i=0; i<5; i++)
          printf(do_stuff);
      // check for invalid results
      if (x>5)
          zerr(LERR, ...);
  </xmp>
</div>

<h2 id=templates temp=Templates>Templates</h2>
<p>
  Module foo in pkg/bar/foo.c & foo.h. All files should follow
  this exact example.<br>
  #include "config.h" must be first in the *.c file to make sure the features
  configuration affect all the rest of the files.<br>
  Header files must be self contained, i.e. - they must be able to compile
  without relying on another include line to come before them.<br>
  Therefore #include "foo.h" must be immediately after to make sure foo.h
  compiles stand alone without any dependency on includes before it.<br>
  _BEGIN_EXTERN_C and _END_EXTERN_C allow the code to link to C++.
</p>

<h3 id=templates_c_file text="pkg/bar/foo.c template">pkg/bar/foo.c
  template</h3>
<xmp cat=good>
// LICENSE_CODE ZON
#include "config.h"
#include "foo.h"
... put here minimal includes required by foo.c ...

... put here your code ...
</xmp>

<h3 id=templates_h_file text="pkg/bar/foo.h template">pkg/bar/foo.h
  template</h3>
<xmp cat=good>
// LICENSE_CODE ZON
#ifndef __BAR_FOO_H__
#define __BAR_FOO_H__
#include "config.h"

... put here minimal includes required by foo.h ...

_BEGIN_EXTERN_C

... put here functions, structures and other definitions ...

_END_EXTERN_C
#endif
</xmp>

<h2 id=include_h text='#include "foo.h"'><code>#include "foo.h"</code></h2>
<p>
  Use #include "foo.h" for headers in the same directory as the source
  including them.<br>
  Use #include "path_to_foo/foo.h" for headers in other directories, where
  path_to_foo is relative to root pkg directory.<br>
  Use <code>#include &lt;foo.h&gt;</code> for external system files.
</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      #include "stdio.h"
      #include <dhcp_lease.h>
      #include "hash.h"
  </xmp>
  <xmp cat=good>
      #include <stdio.h>
      #include "dhcp_lease.h" // we are in pkg/dhcp directory
      #include "util/hash.h" // from pkg/util/hash.h
  </xmp>
</div>

<h2 id=disable_test text="Temporary disabling test">Temporary disabling
  test</h2>
<p>When temporary disabling test code that fail:<br>
  Do not indent the code of the disabled tests.</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (!running_on_valgrind) // XXX: yoni: fails on BAT
          jtest_eq(...);
  </xmp>
  <xmp cat=good>
      if (!running_on_valgrind) // XXX: yoni: fails on BAT
      jtest_eq(...);
  </xmp>
</div>

<h3 id=disable_test_only_one text="If it is only one test">If it is only one
  test</h3>
<p>If it is only one test (one statement), then don't use <code>{ }</code> even
  if the statement is written in 2 lines</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if (!running_on_valgrind) // XXX: yoni: fails on BAT
      {
      jtest_run(xxx, yyy,
          zzz);
      }
  </xmp>
  <xmp cat=good>
      if (!running_on_valgrind) // XXX: yoni: fails on BAT
      jtest_run(xxx, yyy,
          zzz);
  </xmp>
</div>

<h3 id=if_braces text="Open '{' on the same if() line">Open <code>{</code> on
  the same if() line</h3>
<div class=bad_good_bind>
  <xmp cat=bad>
      // XXX: yoni: fails on BAT
      if (!running_on_valgrind)
      {
      jtest_run(xxx, yyy, zzz);
      jtest_run(xxx, yyy, zzz);
      }
  </xmp>
  <xmp cat=good>
      if (!running_on_valgrind) { // XXX: yoni: fails on BAT
      jtest_run(xxx, yyy, zzz);
      jtest_run(xxx, yyy, zzz);
      }
  </xmp>
</div>
</div>`;
