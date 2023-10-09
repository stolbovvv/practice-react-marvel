import{r as i,j as s,L as C,s as f,S as p}from"./index-70386eec.js";import{H as g}from"./Helmet-368c2cb8.js";import{g as N,E as I,a as S,S as L}from"./site-hero-d2bb496b.js";const M=i.memo(function({data:e}){const t=N(e.image);return s.jsx("li",{className:"comic-list__item",children:s.jsxs(C,{className:"comic-list__item-link",to:`${e.id}`,children:[s.jsx("img",{className:"comic-list__item-image",src:e.image,alt:`${e.name} image`,style:t}),s.jsxs("div",{className:"comic-list__item-body",children:[s.jsx("h3",{className:"comic-list__item-name",children:e.title}),s.jsx("p",{className:"comic-list__item-price",children:e.price?e.price+"$":"Not available"})]})]})})});function b({data:c}){return s.jsx("ul",{className:"comic-list__body",children:c.map((e,t)=>s.jsx(M,{data:e},`${e.id}_${t}`))})}function v({classList:c}){const[t,a]=i.useState(!1),[r,d]=i.useState([]),[_,x]=i.useState(0),[u,m]=i.useState(null),[j,h]=i.useState(!1),n=()=>{m(null),a(!0),S.getAllComics({limit:8,offset:_}).then(l=>{a(!1),d(o=>[...o,...l]),x(o=>o+8),h(l.length<8)}).catch(l=>{a(!1),m(l)})};return i.useEffect(()=>{n()},[]),s.jsxs("div",{className:f("comic-list",c),children:[u?s.jsx(I,{className:"comic-list__error"}):s.jsx(b,{data:r}),s.jsx("button",{className:"button button_red comic-list__button",style:{display:j?"none":"block"},disabled:t,onClick:n,children:t?s.jsx(p,{}):"Load more"})]})}function y(){return s.jsx("section",{className:"section all-comics",children:s.jsxs("div",{className:"container all-comics__container",children:[s.jsx("h2",{className:"title all-comics__title",children:"All comics"}),s.jsx("div",{className:"all-comics__body",children:s.jsx(v,{})})]})})}function k(){return s.jsxs(s.Fragment,{children:[s.jsxs(g,{children:[s.jsx("meta",{name:"description",content:"Marvel data base. Page with all comics"}),s.jsx("title",{children:"All Comics – Marvel Data Base"})]}),s.jsx(L,{title:"Marvel comics"}),s.jsx(y,{})]})}export{k as default};
