import{u as t,j as e,M as l}from"./blocks-D-1YP998.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BCsVz9wP.js";import"./index-BTpFFFwe.js";const s=({name:r,hex:n})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"12px 0",borderBottom:"1px solid rgba(15,15,15,0.06)"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"8px",backgroundColor:n,border:"1px solid rgba(15,15,15,0.08)",flexShrink:0}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600,fontSize:"15px"},children:r}),e.jsx("code",{style:{fontSize:"13px",color:"rgba(15,15,15,0.5)"},children:n})]})]});function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tokens/Colors"}),`
`,e.jsx(n.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(n.p,{children:"The Atlas color palette."}),`
`,`
`,e.jsx(n.h2,{id:"accent",children:"Accent"}),`
`,e.jsx(s,{name:"Yellow",hex:"#F6FF00"}),`
`,e.jsx(s,{name:"Purple",hex:"#9500FF"}),`
`,e.jsx(s,{name:"Blue",hex:"#00AAFF"}),`
`,e.jsx(n.h2,{id:"surface",children:"Surface"}),`
`,e.jsx(s,{name:"Surface Light",hex:"#F4F4F4"}),`
`,e.jsx(s,{name:"Surface Dark",hex:"#333333"}),`
`,e.jsx(n.h2,{id:"text",children:"Text"}),`
`,e.jsx(s,{name:"Text Primary",hex:"#0F0F0F"}),`
`,e.jsx(s,{name:"Text Light",hex:"#FAFAFA"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { colors } from '@atlas/tokens';

// colors.yellow   → '#F6FF00'
// colors.purple   → '#9500FF'
// colors.blue     → '#00AAFF'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --yellow: #F6FF00;
  --purple: #9500FF;
  --blue: #00AAFF;
  --bg-surface: #F4F4F4;
  --bg-surface-dark: #333333;
  --text-primary: #0F0F0F;
  --text-light: #FAFAFA;
}
`})})]})}function h(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{s as Swatch,h as default};
