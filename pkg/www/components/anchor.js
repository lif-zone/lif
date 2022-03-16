export const H1 = ({children, id})=>{
  return <h1><a id={id} href={'#'+id}>{children}</a></h1>; };
export const H2 = ({children, id})=>{
  return <h2><a id={id} href={'#'+id}>{children}</a></h2>; };
export const H3 = ({children, id})=>{
  return <h3><a id={id} href={'#'+id}>{children}</a></h3>; };

