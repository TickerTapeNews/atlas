import{u as o,j as e,M as r}from"./blocks-D-1YP998.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BCsVz9wP.js";import"./index-BTpFFFwe.js";const t=({weight:s,size:n,label:a})=>e.jsxs("div",{style:{fontFamily:'"Figtree", sans-serif',fontWeight:s,fontSize:n||"24px",padding:"12px 0",borderBottom:"1px solid rgba(15,15,15,0.06)",display:"flex",alignItems:"baseline",gap:"16px"},children:[e.jsx("span",{style:{minWidth:"60px",fontSize:"13px",color:"rgba(15,15,15,0.4)",fontWeight:400},children:a}),e.jsx("span",{children:"The quick brown fox jumps over the lazy dog"})]}),i=({size:s,label:n})=>e.jsxs("div",{style:{fontFamily:'"Figtree", sans-serif',fontSize:s,fontWeight:500,padding:"8px 0",borderBottom:"1px solid rgba(15,15,15,0.06)",display:"flex",alignItems:"baseline",gap:"16px"},children:[e.jsx("code",{style:{minWidth:"80px",fontSize:"13px",color:"rgba(15,15,15,0.4)",fontWeight:400},children:n}),e.jsx("span",{children:"Ticker Tape News"})]});function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tokens/Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:["Atlas uses ",e.jsx(n.strong,{children:"Figtree"})," — a variable Google Font supporting weights 300–900 with italic."]}),`
`,`
`,e.jsx(n.h2,{id:"weights",children:"Weights"}),`
`,e.jsx(t,{weight:300,label:"300"}),`
`,e.jsx(t,{weight:400,label:"400"}),`
`,e.jsx(t,{weight:500,label:"500"}),`
`,e.jsx(t,{weight:600,label:"600"}),`
`,e.jsx(t,{weight:700,label:"700"}),`
`,e.jsx(t,{weight:800,label:"800"}),`
`,e.jsx(t,{weight:900,label:"900"}),`
`,e.jsx(n.h2,{id:"scale",children:"Scale"}),`
`,`
`,e.jsx(i,{size:"12px",label:"12px"}),`
`,e.jsx(i,{size:"14px",label:"14px"}),`
`,e.jsx(i,{size:"16px",label:"16px"}),`
`,e.jsx(i,{size:"20px",label:"20px"}),`
`,e.jsx(i,{size:"24px",label:"24px"}),`
`,e.jsx(i,{size:"32px",label:"32px"}),`
`,e.jsx(i,{size:"48px",label:"48px"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"load-font",children:"Load font"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`body {
  font-family: 'Figtree', sans-serif;
}
`})})]})}function g(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{t as Sample,i as ScaleSample,g as default};
