// XXX: mv to css
export const dna_style=<style>{`
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
  .dna-page [cat=bad] {
  padding: 4px; margin-bottom: 10px; border-width: 0 3px;
  border-style: solid; border-radius: 4px; position: relative;}
.dna-page th, .dna-page td {border: 1px solid black;
  border-collapse: collapse;}
.dna-page table {background-color: transparent;}
.dna-page table {border-spacing: 0; border-collapse: collapse;}
.dna-page pre {overflow: auto;}
`}</style>;
