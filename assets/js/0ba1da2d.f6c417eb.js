(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6097],{42883:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var n=s(67294),r=s(86010),a=(s(39960),s(52263)),i=s(7452),c=s(92503),o=s(11207),l=(s(32221),s(85893));function h(){const[e,t]=(0,n.useState)(null),{siteConfig:s}=(0,a.Z)();return(0,l.jsx)("header",{className:(0,r.Z)("hero hero--primary",o.Z.heroBanner),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.Z,{as:"h2",className:"hero__title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043e\u0442\u043e \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435"}),(0,l.jsx)("p",{className:"hero__subtitle",children:"\u041c\u043e\u0434\u0435\u043b\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442 \u043a\u0430\u043a\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043a\u043e\u0436\u0435\u0439 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c"}),(0,l.jsx)("input",{type:"file",onChange:e=>(e=>{const s=new FormData;s.append("image",e),fetch("http://localhost:8000/invert-image",{method:"POST",body:s}).then((e=>e.blob())).then((e=>{t(URL.createObjectURL(e))})).catch((e=>{console.error("Error uploading image:",e)}))})(e.target.files[0])}),e&&(0,l.jsx)("img",{src:e,alt:"Inverted",className:o.Z.invertedImage})]})})}function d(){const{siteConfig:e}=(0,a.Z)();return(0,l.jsx)(i.Z,{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(h,{})})})}},11207:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},24654:()=>{}}]);