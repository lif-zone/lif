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
<Layout title='LIF DNA' desc='Shell Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>Shell Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
  <p>
    Coding conventions used by other companies:
    <a href=https://google.github.io/styleguide/shell.xml>google</a>
  </p>
</div>
<div class=content>
<h2 id=general text="General">General</h2>
<p>
  In general, most of C coding convention apply to Bash coding convention,
  for example:
</p>
<ul>
  <li>- Indentation is always one shift-width(4):</li>
  <li>- case has the same indentatio level and switch</li>
  <li>- ...</li>
</ul>

<h2 id=function_params text="Function parameters">Function parameters</h2>
<p>Function parameters should define local their names, not use $1, $2...</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      foo()
      {
          cp $1 $2
      }
  </xmp>
  <xmp cat=good>
      foo()
      {
          local src=$1 dst=$2
          cp $src $dst
      }
  </xmp>
</div>

<h2 id=return_string text="returning a string">returning a string value:
  <code>RS="the value"</code></h2>
<div class=bad_good_bind>
  <xmp cat=bad>
      install_dir()
      {
          echo "/usr/local/bin"
      }

      install app.sh \`install_dir\`
  </xmp>
  <xmp cat=good>
      install_dir()
      {
          RS="/usr/local/bin"
      }

      install_dir
      install app.sh $RS
  </xmp>
</div>

<h2 id=return_array text="returning an array">returning an array value:
  <code>RA=(the values...)</code></h2>
<xmp cat=good>
    install_paths()
    {
        RA=(/usr/local/bin /usr/local /etc)
    }

    install_paths
    for p in "\${RA[@]}"; do try_install "$p"; done
</xmp>

<h2 id=return_multi text="returning multiple string/array values">
  returning multiple string/array values</h2>
<p>returning multiple string/array values use <code>RS_{name}</code> or
  <code>RA_{name}:</code></p>
<xmp cat=good>
    install_app()
    {
        RS_dir=/usr/local/bin
        RA_paths=(/usr/local/bin /usr/local /etc)
    }

    install_app
    try_install "$RS_dir" "\${RA_paths[@]}"
</xmp>

<h2 id=argv_handling text="argv handling">argv handling and usage()</h2>
<p>argv handling and usage(): use shift to process, and always have usage()
  function:</p>
<xmp cat=good>
    usage()
    {
        echo "usage: ..."
        exit 1
    }
    while [ "\${1:0:1}" = - ]; do
        case "$1" in
        --option)
            ... set option ...
            ;;
        --option-with-arg)
            shift
            if [ -z "$1" ]; then
                usage
            fi
            ... use *argv to set option ...
            ;;
        *)
            usage
            ;;
        esac
        shift
    done
    ... handle arguments left in argv ...
    if [ -n "$1" ]; then
        usage
    fi
    ... start working ...
</xmp>

<h2 id=int_operations text="Where integer operations are relevant">Where
  integer operations are relevant</h2>
<p>Where integer operations are relevant, use ((C_EXPRESSION)) instead of
  [SHELL_EXPRESSION]:</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if [ "$prep_inc" == 1 ]; then
          enable_prep
      fi
  </xmp>
  <xmp cat=good>
      if ((prep_inc)); then
          enable_prep
      fi
  </xmp>
</div>

<h2 id=shell_expressions text="SHELL EXPRESSIONS">SHELL EXPRESSIONS</h2>
<p>In SHELL EXPRESSIONS use <code>[[ ]]</code> instead of <code>[ ]</code>
  when AND/OR is needed:</p>
<div class=bad_good_bind>
  <xmp cat=bad>
      if [ -z "$install_dir" -o ! -d "$install_dir" ]; do
          install_the_dir
      fi
  </xmp>
  <xmp cat=good>
      if [[ -z "$install_dir" || ! -d "$install_dir" ]]; do
          install_the_dir
      fi
  </xmp>
</div>

<h2 id=script_included text="Script included">When the script is included in
  other scripts</h2>
<p>When the script is included in other scripts, use the following method to
  avoid multiple includes:</p>
<xmp cat=good>
    if ((__FULL_PATH_FROM_PGK_FILENAME__)); then
        return 0
    fi
    __FULL_PATH_FROM_PGK_FILENAME__=1

  example:
    if ((__SYSTEM_SCRIPTS_JTOOLS_FUNCTIONS_SH__)); then
        return 0
    fi
    __SYSTEM_SCRIPTS_JTOOLS_FUNCTIONS_SH__=1
</xmp>

<h2>Quotation:</h2>
<p>
  the sign <code>$@</code> is a special sign for all the parameters passed to
  the function.<br>
  when quoting it <code>"$@"</code> bash will quote each parameter seperatly.
  <br>
  if you want to use all the parameters, you should use an array:<br>
  <code>cmd=("$@")</code><br>
  <code>cmd=("\${cmd[@]}" "some other text")</code><br>
  <code>"\${cmd[@]}"</code><br>
  The above three lines, save the parameters into an array, adds to it
  another<br>
  value and then us it as a bash command.<br>
  <br>
  Quotation should always take under consideration when passing vars and
  arrays to other functions or when excecuted as a command.<br>
</p>
</div>`;
