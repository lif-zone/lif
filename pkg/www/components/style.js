// XXX: mv to css
export const dna_style=<style>{`
.dna-page {padding-left: 1.5rem!important; margin-left: auto!important;}
.dna-page h1 {padding-top: 1.2rem; padding-bottom: 0.5rem;}
.dna-page h2 {padding-top: 1.2rem; padding-bottom: 0.2rem;}
.dna-page h3 {padding-top: 1.2rem; padding-bottom: 0.1rem;}
.dna-page p {padding-top: 0.1rem; padding-bottom: 0.1rem}
.dna-page ul {padding-top: 0.1rem; padding-bottom: 0.1rem; margin: 0;}
.dna-page li {list-style-position: outside; margin-left: 1rem;}
.dna-page .bad, .dna-page [cat=bad] {background-color: rgba(255,0,0,0.1);
  border-color: rgba(255,0,0,0.7);}
.dna-page .ok, .dna-page[cat=ok] {background-color: rgba(0,255,0,0.1);
  border-color: rgba(48,48,48,0.7);}
.dna-page .good, .dna-page [cat=good] {background-color: rgba(0,255,0,0.1);
  border-color: rgba(0,255,0,0.7);}
.dna-page .better, .dna-page [cat=better]{
  background-color: rgba(0,255,0,0.25); border-color: rgba(0,255,0,0.7);}
.dna-page .ok,[cat=ok], .dna-page .good, .dna-page [cat=good],
  .dna-page .better, .dna-page [cat=better], .dna-page .bad,
  .dna-page [cat=bad] {overflow: auto;
  padding: 4px; margin-bottom: 10px; border-width: 0 3px;
  border-style: solid; border-radius: 4px; position: relative;}
.dna-page th, .dna-page td {border: 1px solid black;
  border-collapse: collapse;}
.dna-page table {background-color: transparent;}
.dna-page table {border-spacing: 0; border-collapse: collapse;}
.dna-page pre, .dna-page xmp {overflow: auto;}

.anchorific {
    overflow-y: auto;
    position: fixed;
    top: 68px;
    left: -8px;
    font-size: 0.8rem;
    overflow: auto;
    max-width: 15rem;
    height: 95%;
    display: none;
}

@media only screen and (min-width: 50rem){
  .anchorific {display: block;}
  .dna-page {padding-left: 15rem!important; margin-left: 0!important;}
}

.anchorific li {line-height: 1rem;}

.anchorific a {
    font-family: 'PT Sans','Helvetica Neue','Liberation Sans',sans-serif;
    color: #00b7f1;
    outline: 3px solid transparent;
    border: 1px solid transparent
}

.anchorific a:hover,.anchorific a.anchor-text:hover {
    background-color: #00b7f1;
    color: #ffffff;
    border-color: #00b7f1;
    text-decoration: none;
    -moz-box-shadow: #00b7f1 -2px 0 0 1px,#00b7f1 2px 0 0 1px;
    -webkit-box-shadow: #00b7f1 -2px 0 0 1px,#00b7f1 2px 0 0 1px;
    box-shadow: #00b7f1 -2px 0 0 1px,#00b7f1 2px 0 0 1px;
    position: relative;
    border-radius: .15em
}

.anchorific a:hover.anchor,.anchorific a.anchor-text:hover.anchor {
    background-color: #ffffff;
    border-color: #ffffff;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none
}

.anchorific ul {
    list-style-type: none;
    padding-left: 15px!important
}

.anchorific li ul {
    list-style-type: none;
    display: none
}

.anchorific ul li a {
    color: #2D404C;
    display: inline-block;
    font-weight: normal;
    text-decoration: none
}

.anchorific ul li a:hover {
    color: #ffffff
}

.anchorific li ul {
    display: none
}

.anchorific li.active>a {
    font-weight: bold
}

.anchorific li.active>ul {
    display: block
}

`}</style>;
