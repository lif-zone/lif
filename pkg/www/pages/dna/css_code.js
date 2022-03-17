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
<Layout title='LIF DNA' desc='CSS/LESS Coding Convention' style={dna_style}
  dir='ltr'>
<div className="dna-page max-w-6xl mx-auto px-6 pb-10"
  dangerouslySetInnerHTML={{__html: page_conent}}/>
</Layout>);
}

const page_conent = `
<nav class=anchorific></nav>
<div class=head>
  <div class=title>CSS/LESS Coding Convention</div>
  <p>
    <b>Improvements? Suggestions?</b>
    email <a href=mailto:lif.zone.main+dna@gmail.com>lif.zone.main+dna@gmail.com</a>
  </p>
</div>
<div class=content>
<h1 id=gen>General CSS</h1>
<h2 id=consistent_minimal>Consistent and Minimal</h2>
<p>
  Most important rules:<br>
  <a href=/dna/js_code#overview-consistent>Be consistent</a>.<br>
  <a href=/dna/js_code#overview-minimal>Be minimal</a>.<br>
  <a href=/dna/js_code#overview-tool>Use tools</a>.<br>
  Read these sections carefully.
</p>
<h1 id=react>React</h1>
<h2 id=react-scope>Scope</h2>
<p>Write CSS per component.</p>
<xmp mode=jsx cat=bad>
    let Btn = props=><a className="main_links" href={props.href}>
        {props.children}</a>;
    let Contact_link = props=><a className="main_links" href={props.href}>
        {props.children}</a>;
</xmp>
<xmp mode=jsx cat=good>
    let Btn = props=><a className="btn" href={props.href}>{props.children}</a>;
    let Contact_link = props=><Btn {...props}/>;
</xmp>
<xmp cat=good>
    .btn {
        color: @dark_blue;
    }
</xmp>
<p>Keep the same syling wherever the component is used: don't nest component
  CSS inside a different component.</p>
<xmp cat=bad>
    .main_page {
        .btn {
            color: @white;
        }
    }
</xmp>
<xmp cat=good>
    .main_page {
        color: @white;
    }
    .btn {
        color: @dark_blue;
        .btn-main {
            color: @white;
        }
    }
</xmp>
<h2 id=react-flat>Flat</h2>
<p>
  Make all component CSS global. A component should look the same in on any
  page in and inside any other component.
</p>
<xmp cat=bad>
    .main_page {
        .btn {
            color: @dark_blue;
        }
    }
</xmp>
<xmp cat=good>
    .btn {
        color: @dark_blue;
    }
</xmp>
<p>
  Nest component sub-classes inside the component less to group the
  definitions together.
</p>
<xmp cat=bad>
    .btn {
        padding: 5px;
    }
    .btn-text {
        color: @dark_blue;
    }
</xmp>
<xmp cat=good>
    .btn {
        padding: 5px;
        .btn-text {
            color: @dark_blue;
        }
    }
</xmp>
<p>
  Inside a component's class keep it flat - only one level of nesting.
</p>
<xmp cat=bad>
    .btn {
        padding: 5px;
        .btn-left {
            float: left;
            .btn-text {
                color: @dark_blue;
            }
        }
    }
</xmp>
<xmp cat=good>
    .btn {
        padding: 5px;
        .btn-left {
            float: left;

        }
        .btn-text {
            color: @dark_blue;
        }
    }
</xmp>
<h2 id=react-naming>Naming</h2>
<p>Use <a href=/dna/tree_code#name-unix>Unix notation</a> for naming</p>
<xmp cat=bad>
    .startButton {
        color: @white;
    }
</xmp>
<xmp cat=bad>
    .start-button {
        color: @white;
    }
</xmp>
<xmp cat=good>
    .start_button {
        color: @white;
    }
</xmp>
<p>Use the same name as the react component</p>
<xmp mode=jsx cat=bad>
    let Btn = props=><a className="button_round" href={props.href}>
        {props.children}</a>;
</xmp>
<xmp mode=jsx cat=good>
    let Btn = props=><a className="btn" href={props.href}>
        {props.children}</a>;
</xmp>
<p>Use parent class name to prefix inner class names to pervent collisions.</p>
<xmp cat=bad>
    .btn {
        .text {
              color: @white;
        }
    }
</xmp>
<xmp cat=good>
    .btn {
        .btn-text {
              color: @white;
        }
    }
</xmp>
<p>Use dash "-" as a delimiter between prefixes.</p>
<xmp cat=bad>
    .btn {
        .btn_text {
              color: @white;
        }
    }
</xmp>
<xmp cat=good>
    .btn {
        .btn-text {
              color: @white;
        }
    }
</xmp>
<p>Use "sc_" as a prefix for sections.</p>
<xmp mode=jsx cat=bad>
    let Many_ips = props=><Section className="many_ips">
        <h2>title</h2></Section>;
</xmp>
<xmp mode=jsx cat=good>
    let Many_ips = props=><Section className="sc_many_ips">
        <h2>title</h2></Section>;
</xmp>
<p>Do not use "ad-" prefix for class names. Such items can be removed by ad
  blockers. Check that your code works with the ad blockers enabled.</p>
<xmp cat=bad>
    .ad-text {
        color: @white;
    }
</xmp>
<xmp cat=good>
    .item-text {
        color: @white;
    }
</xmp>
</div>`;
