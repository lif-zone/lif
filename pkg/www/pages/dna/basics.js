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
<Layout title='LIF DNA' desc='Basic Technical Knowledge Center'
  style={dna_style} dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <h1>Basic Technical Knowledge Center</h1>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=rnd text="R&D developer">R&D developer</h1>
<h2 id=rnd-read>Reading materials</h2>
<ul>
  <li>Read thoroughly the <a href=/dna>Spark DNA</a>, and a peek at the
    <a href=/dna/dict>Spark dictionary</a></li>
  <li>Test yourself. Do the <a href=/dna/test>DNA test</a>.</li>
</ul>
<h2 id=rnd-unix>Basic UNIX</h2>
<p>
  Practice the below items (excluding cvs), using this
  <a href=https://s-macke.github.io/jor1k/>web-based Linux shell</a>.
</p>
<ul>
  <li>bash</li>
  <ul>
    <li><a href=/dna/basics/bash>bash Basics</a></li>
    <li>
      <a href=https://learncodethehardway.org/unix/bash_cheat_sheet.pdf>bash cheat sheet</a>
    </li>
  </ul>
  <li>vi/vim/gvim</li>
  <ul>
    <li>vimtutor (run /usr/bin/vimtutor)</li>
    <li><a href=/dna/basics/vi>gvim</a></li>
  </ul>
  <li>tar/gz/patch (<a href=/dna/basics/gzip>zip_and_patch</a>)</li>
  <li>Regular expressions (man 7 regex)</li>
  <li>
    grep & sed (<a href=http://www.unix.com.ua/orelly/unix2.1/sedawk/index.htm>Sed & Awk</a>
    chapter 2)
  </li>
  <li>cvs ("Basic Info" section only from
    <a href=/dna/basics/cvs#basic>cvs_info</a>)</li>
</ul>
<h2 id=rnd-js text="JS Language">JS Language</h2>
<ul>
  <li>
    These 3 pages discuss EXACTLY how JavaScript works internally.
    Know this perfectly, so your understanding of scoping, stacks,
    variables, context, closures, object&arrays, functions 100% accurate.
    We strongly suggest reading these articles a few times,
    ensuring complete understanding of JS core.
  </li>
  <ul>
    <li>
      <!-- original url: https://howtonode.org/object-graphs -->
      <a href=http://web.archive.org/web/20161227031529/http://howtonode.org/object-graphs>
        Learning Javascript with Object Graphs
      </a>
    </li>
    <li>
      <!-- original url: https://howtonode.org/object-graphs-2 -->
      <a href=http://web.archive.org/web/20161227031529/http://howtonode.org/object-graphs-2>
        Learning Javascript with Object Graphs (Part II)
      </a>
    </li>
    <li>
      <!-- original url: https://howtonode.org/object-graphs-3 -->
      <a href=http://web.archive.org/web/20161227031529/http://howtonode.org/object-graphs-3>
        Learning Javascript with Object Graphs (Part III)
      </a>
    </li>
  </ul>
  <li>Types conversions</li>
  <ul>
    <li><a href=http://jibbering.com/faq/notes/type-conversion>
      Type conversion table</a></li>
  </ul>
  <li>Once you feel you are strong on the two core JS items above,
    go through this list
    of quirks to validate you really know it all:
    <a href=http://bonsaiden.github.io/JavaScript-Garden/>Javascript quirks</a>
  </li>
  <li>The new <a href=https://github.com/lukehoban/es6features>ES6 features</a>
    </li>
  <li>NodeJS: <a href=https://blog.codeship.com/node-js-tutorial/>
      an absolute beginner's intro</a></li>
  <li>Spark's <a href=/dna/js_code>JS Coding conventions</a></li>
</ul>
<h2 id=rnd-html_css text="HTML5/CSS3">HTML5/CSS3</h2>
<ul>
  <li>
    This might sound terribly basic, but these short videos from
    Google University are helpful in a understanding how to nicely
    separate code, and avoid spaghetti:<br>
    <a href=http://www.youtube.com/watch?v=60O1CJqh8IM&list=PLDE314C0C8581E8BA>
      Google HTML/CSS/Javascript from the Ground Up Class: Introduction
    </a>
    (No need to watch the JS videos)
  </li>
  <li>
    A great, advanced and interesting presentation: GRITS game
    (also talks about JS):<br>
    <a href=http://www.youtube.com/watch?v=Prkyd5n0P7k>
      Google I/O 2012 - GRITS: PvP Gaming with HTML5
    </a>
  </li>
  <li>
    The web can do that?:<br>
    <a href=http://www.youtube.com/watch?v=X_ek1wSe66o>
      Google I/O 2012 - The Web Can Do That!?
    </a>
  </li>
  <li>
    Web tooling:<br>
    <a href=http://www.youtube.com/watch?v=Mk-tFn2Ix6g>
      Google I/O 2012 - Better Web App Development Through Tooling
    </a>
  </li>
</ul>
<h2 id=rnd-react text="ReactJS">ReactJS</h2>
<ul>
  <li>
    Go through <a href=https://reactjs.org/tutorial/tutorial.html>
      ReactJS tutorial</a>
  </li>
</ul>
<h2 id=rnd-jquery text="jQuery">jQuery</h2>
<ul>
  <li>
    Read DataTables' source code, it's not short, but one of the nicest pieces
    of code; very objected oriented, highly extensible and programmable.<br>
    Line-by-line reading will advance your understanding of how good jQuery
    plugin code should be written, how it should be used, and how to write
    real world generic object oriented code
  </li>
</ul>

<h1 id=pm text="Project manager">Project manager</h1>
<h2 id=pm-unix>Basic UNIX</h2>
<p>
  Practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://www.physics.louisville.edu/williger/Astronomybootcamp/Unix_tutorials/Tenminuteunix/tenminuteunix.pdf>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>
<h2 id=pm-html_css text="HTML/CSS">Basic HTML/CSS</h2>
<ul>
  <li>
    Although quite long, if you are not familiar with HTML/CSS, or if you
    need refreshment, this
    <a href=https://www.youtube.com/watch?v=y3UH2gAhwPI>HTML and CSS Tutorial</a>
    provides the basics; how to build a web page and how to design it using
    simple CSS.
  </li>
  <li>
    A More in-depth <a href=https://www.youtube.com/watch?v=mzlqjRYszoI&index=1&list=PLEAFE1C118B3ED6AE>HTML and CSS tutorial for beginners</a>
    (contains 47 short videos).
  </li>
</ul>
<h2 id=pm-read>Reading materials</h2>
<ul>
  <li>Read thoroughly the <a href=/dna>Spark DNA</a> and the
    <a href=/dna/dict>Spark dictionary</a></li>
  <li>Test yourself. Do the <a href=/dna/test>DNA test</a>.</li>
  <li>
    Watch
    <a href=https://www.youtube.com/watch?v=fEvKo90qBns>Eric Ries talks about the "Lean Startup" at Google</a>.
    ("The Lean Startup" book, by Eric Ries, exists in our library. It is
    recommended to read it cover-to-cover once you started at Spark)
  </li>
</ul>
<h2 id=pm-prod>Spark products knowledge</h2>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
</ul>

<h3 id=lum-general-read>Reading materials</h3>
<ul>
  <li>Read thoroughly the <a href=/dna>Spark DNA</a> and the
    <a href=/dna/dict>Spark dictionary</a></li>
  <li>Test yourself. Do the <a href=/dna/test>DNA test</a>.</li>
  <li>
    Watch
    <a href=https://www.youtube.com/watch?v=fEvKo90qBns>Eric Ries talks about the "Lean Startup" at Google</a>.
    ("The Lean Startup" book, by Eric Ries, exists in our library. It is
    recommended to read it cover-to-cover once you started at Spark)
  </li>
</ul>
<h3 id=lum-general-hola>Spark products knowledge</h3>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
</ul>

<h2 id=lum-support text="Support manager">Support manager</h2>
<h3 id=lum-support-unix>Basic UNIX</h3>
<p>
  Practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://mally.stanford.edu/~sr/computing/basic-unix.html>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>
<h3 id=lum-support-regex>Basic regex</h3>
<ul>
  <li><a href=https://regexone.com/>Practice the basics of regex</a></li>
</ul>
<h3 id=lum-leadgen-unix>Basic UNIX</h3>
<p>
  Practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://mally.stanford.edu/~sr/computing/basic-unix.html>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>

<h2 id=lum-sales>Sales</h2>
<p>
  Watch
  <a href=https://www.youtube.com/watch?v=JOPDk0yLOMQ&feature=youtu.be>Matthew Dixon talks about the "The Challenger Sale"</a>.<br>
  "The Challenger Sale" book, by Matthew Dixon & Brent Adamson, exists in our
  library. It is recommended to read it cover-to-cover once you started at
  Spark.
</p>

<h1 id=spark>Spark Spark sales</h1>
<h2 id=spark-general>General Knowledge</h2>
<h3 id=spark-general-materials>Spark Spark materials</h3>
<ul>
  <li><a href=https://holaspark.com>Spark Spark website</a></li>
  <li>
    <a href=https://holaspark.com/#understand-in-3-min>Spark Spark video</a>
  </li>
  <li><a href=https://holaspark.com/faq>Spark Spark FAQ</a></li>
  <li><a href=https://holacdn.com>HolaCDN website</a></li>
</ul>
<h3 id=spark-general-knowledge>Spark products knowledge</h3>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
</ul>
<h3 id=spark-general-read>Reading materials</h3>
<ul>
  <li>Read thoroughly the <a href=/dna>Spark DNA</a> and the
    <a href=/dna/dict>Spark dictionary</a></li>
  <li>Test yourself. Do the <a href=/dna/test>DNA test</a>.</li>
  <li>
    Watch
    <a href=https://www.youtube.com/watch?v=fEvKo90qBns>Eric Ries talks about the "Lean Startup" at Google</a>.
    ("The Lean Startup" book, by Eric Ries, exists in our library. It is
    recommended to read it cover-to-cover once you started at Spark)
  </li>
  <li>
    Watch
    <a href=https://www.youtube.com/watch?v=JOPDk0yLOMQ&feature=youtu.be>Matthew Dixon talks about the "The Challenger Sale"</a>.<br>
    "The Challenger Sale" book, by Matthew Dixon & Brent Adamson, exists in our
    library. It is recommended to read it cover-to-cover once you started at
    Spark.
  </li>
</ul>
<h2 id=spark-tools>Searching tools</h2>
<p>
  Get to know the following seaching tools we use:
</p>
<ul>
  <li>Useful websites</li>
  <ul>
    <li>
      <a href=https://www.whois.com>Whois</a>: identify provided domains and
      provides their registration information such as location, owner, etc.
    </li>
    <li>
      <a href=http://www.scamadviser.com>Scamadviser</a>: checks a website URL
      owners and email.
    </li>
    <li>
      <a href=https://hunter.io>hunter</a>: Lets you find email addresses
      connected with the provided domain.
    </li>
    <li>
      <a href=https://screencast-o-matic.com>screencast-o-matic</a>: Lets you
      capture your screen and upload to YouTube.
    </li>
  </ul>
  <li>Useful extensions</li>
  <ul>
    <li>
      <a href=https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn?hl=en>Screencastify</a>:
      screen and call recorder
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/similar-sites-advanced-di/ekjplgnaohhplpanhedpaojdohamffjh>Similar Sites</a>:
      find similar sites to the one you’re currently on!
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/similarweb-site-traffic-s/hoklmmgfnpapgjgcpechhaamimifchmp?hl=en>Similar Web</a>:
      provides website traffic and key metrics for any website, including
      engagement rate, traffic ranking, keyword ranking and traffic source
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/alexa-traffic-rank/cknebhggccemgcnbidipinkifmmegdel?hl=en>Alexa</a>:
      provides traffic rank and site information
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/sellhack/dmcmgkmooimomjcinimbhfoephdhmgbc?hl=en>Sellhack</a>:
      provides contacts social profiles and additional info
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/rapportive/hihakjfhbmlmjdnnhegiciffjplmdhin?hl=en>Rapportive</a>:
      shows LinkedIn profiles in your Gmail
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/aevy/llfmncjhohokdhlcgnbakjghcpejmiac>Aevy</a>:
      gives for a linkedIn profile its contact details and some more
      information
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/similartech-prospecting/jiabgmelnfhgjkfdaoiccfcbaedjfcnm>SimiliarTech</a>:
      provides customer information on any website you're visiting
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/skrapp/gklkbifnmojjpmbkojffeamiblineife>Skrapp</a>:
      find emails on Linkedin.
    </li>
    <li>
      <a href=https://chrome.google.com/webstore/detail/email-finder/dbmjjcmdhfjbgkgigdndfnfddminlpgb>Email Finder</a>:
      discover email addresses within a provided domain.
    </li>
  </ul>
</ul>

<h1 id=graphic text="Graphic designer">Graphic designer</h1>
<h2 id=graphic-unix>Basic UNIX</h2>
<p>
  You should practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://mally.stanford.edu/~sr/computing/basic-unix.html>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>
<h2 id=graphic-adobe text="Adobe products">Adobe products</h2>
<ul>
  <li><a href=http://tastytuts.com/emailer/illustrator_beginners/illustrator_for_beginners_tastytuts.pdf>Illustrator</a></li>
  <li><a href=http://tastytuts.com/emailer/photoshop_beginners/photoshop_for_beginners_tastytuts.pdf>Photoshop</a></li>
  <li><a href=http://help.adobe.com/archive/en/indesign/cs6/indesign_reference.pdf>InDesign</a></li>
  <li><a href=http://cgi.tutsplus.com/tutorials/after-effects-for-beginners-getting-started--ae-195>After Effects</a></li>
</ul>
<h2 id=graphic-hola>Spark products knowledge</h2>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
</ul>

<h1 id=deploy text="Deploy">Deploy engineer</h1>
<h2 id=deploy-unix>Basic UNIX</h2>
<p>
  You should practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://www.physics.louisville.edu/williger/Astronomybootcamp/Unix_tutorials/Tenminuteunix/tenminuteunix.pdf>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>
<h2 id=deploy-hola>Spark products knowledge</h2>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
  <li>Get familiar specifically with the Spark VPN by installing it for the
    below browsers:</li>
  <ul>
    <li>Spark for Chrome</li>
    <li>Spark for Firefox</li>
    <li>Spark for Android or iPhone</li>
  </ul>
</ul>
<h2 id=deploy-read>Reading materials</h2>
<ul>
  <li>
    Read the
    <a href=/dna/comm#im>Instant messaging communication guide</a>
  </li>
</ul>

<h1 id=content>Content manager</h1>
<h2 id=content-unix>Basic UNIX</h2>
<p>
  Practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://mally.stanford.edu/~sr/computing/basic-unix.html>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>
<h2 id=content-html_css text="HTML/CSS">Basic HTML/CSS</h2>
<ul>
  <li>
    Although quite long, if you are not familiar with HTML/CSS, or if you need
    refreshment, this
    <a href=https://www.youtube.com/watch?v=y3UH2gAhwPI>HTML and CSS Tutorial</a>
    provides the basics; how to build a web page and how to design it using
    simple CSS.
  </li>
  <li>
    More thorough <a href=https://www.youtube.com/watch?v=mzlqjRYszoI&index=1&list=PLEAFE1C118B3ED6AE>HTML and CSS tutorial for beginners</a>
    (contains 47 short videos).
  </li>
</ul>
<h2 id=content-read>Reading materials</h2>
<ul>
  <li>Read thoroughly the <a href=/dna>Spark DNA</a> and the
    <a href=/dna/dict>Spark dictionary</a></li>
  <li>Test yourself. Do the <a href=/dna/test>DNA test</a>.</li>
  <li>
    Watch
    <a href=https://www.youtube.com/watch?v=fEvKo90qBns>Eric Ries talks about the "Lean Startup" at Google</a>.
    ("The Lean Startup" book, by Eric Ries, exists in our library. It is
    recommended to read it cover-to-cover once you started at Spark)
  </li>
</ul>
<h2 id=content-prod>Spark products knowledge</h2>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
</ul>

<h3 id=marketing-spark-general-materials>Spark Spark materials</h3>
<p>
  Please refer to the
  <a href=#spark-general-materials>Spark Spark General materials</a>
</p>

<h3 id=marketing-general-hola>Spark products knowledge</h3>
<ul>
  <li>Watch the
    <a href=https://drive.google.com/open?id=0B2dOJIilWt9USWtZMVBHNnhUdUk>Spark introduction video</a>
  </li>
  <li>Review the <a href=/dna/dict#products>Spark product lines</a></li>
</ul>
<h3 id=marketing-general-read>Reading materials</h3>
<ul>
  <li>Read thoroughly the <a href=/dna>Spark DNA</a> and the
    <a href=/dna/dict>Spark dictionary</a></li>
  <li>Test yourself. Do the <a href=/dna/test>DNA test</a>.</li>
  <li>
    Watch
    <a href=https://www.youtube.com/watch?v=fEvKo90qBns>Eric Ries talks about the "Lean Startup" at Google</a>.
    ("The Lean Startup" book, by Eric Ries, exists in our library. It is
    recommended to read it cover-to-cover once you started at Spark)
  </li>
</ul>
<h2 id=marketing-unix>Basic UNIX</h2>
<p>
  Practice Bash and VI using this
  <a href=http://bellard.org/jslinux/>web-based Linux shell</a>.
</p>
<ul>
  <li>
    <a href=http://mally.stanford.edu/~sr/computing/basic-unix.html>Basic UNIX</a>
  </li>
  <li><a href=/dna/basics/bash>bash Basics</a></li>
  <li><a href=/dna/basics/vi#minimal>VI ("Minimal" section only)</a></li>
  <li><a href=/dna/basics/cvs#minimal>cvs ("Minimal Info" section only)</a></li>
</ul>
<h2 id=marketing-html_css text="HTML/CSS">Basic HTML/CSS</h2>
<ul>
  <li>
    Although quite long, if you are not familiar with HTML/CSS, or if you need
    refreshment, this
    <a href=https://www.youtube.com/watch?v=y3UH2gAhwPI>HTML and CSS Tutorial</a>
    provides the basics; how to build a web page and how to design it using
    simple CSS.
  </li>
  <li>
    More thorough <a href=https://www.youtube.com/watch?v=mzlqjRYszoI&index=1&list=PLEAFE1C118B3ED6AE>HTML and CSS tutorial for beginners</a>
    (contains 47 short videos).
  </li>
</ul>
</div>`;
