"use strict";(self.webpackChunkburst=self.webpackChunkburst||[]).push([[701],{4867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"transaction","title":"Transaction","description":"BRN Transactions","source":"@site/docs/08-transaction.mdx","sourceDirName":".","slug":"/transaction","permalink":"/docs/transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-transaction.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Legitimacy","permalink":"/docs/legitimacy"},"next":{"title":"TRST Valuation","permalink":"/docs/economy"}}');var i=t(4848),a=t(8453);const r={},o="Transaction",l={},c=[{value:"BRN Transactions",id:"brn-transactions",level:3},{value:"Example",id:"example",level:3},{value:"TRST Transactions",id:"trst-transactions",level:3},{value:"Example",id:"example-1",level:3},{value:"Usecase",id:"usecase",level:3}];function h(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"transaction",children:"Transaction"})}),"\n",(0,i.jsx)(n.h3,{id:"brn-transactions",children:"BRN Transactions"}),"\n",(0,i.jsx)(n.p,{children:"If you transact in BRN, the vendor will get TRST tokens equal to your BRN points, and the TRST tokens they received will index itself as the epoch transaction and include the current timestamp."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Let's say Wallet 1 is burning his 50 BRN points and sending TRST to Wallet 2."}),"\n",(0,i.jsx)(n.p,{children:"It will look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    {\n        "method": "burn",\n        "sender": "brst_1l8j\u2026",\n        "receiver": "brst_2p3h\u2026",\n        "amount": 50,\n        "timestamp": 1740914000,\n        "key": "A1E5\u2026",\n        "signature": "9a8b7c\u2026"\n    },\n'})}),"\n",(0,i.jsx)(n.p,{children:'Here, the "method" determines if it\'s going to be a burn or a send transaction. Meaning, it determines if you are using BRN or TRST.'}),"\n",(0,i.jsx)(n.p,{children:'The "timestamp" value here is there to keep the record of when the TRST token was first created/minted.'}),"\n",(0,i.jsx)(n.p,{children:'The "key" value here is the hash of this transaction, which is unique for each transaction and is essentially a unique identifier for this transaction.'}),"\n",(0,i.jsx)(n.h3,{id:"trst-transactions",children:"TRST Transactions"}),"\n",(0,i.jsx)(n.p,{children:"If you transact in TRST, the receiver will get TRST tokens equal to the ones you sent, and it will write two additional things in the ledger:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'The "link" value, which will be the "key" value of the preceeding transaction that the current TRST was derived off of.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'The "epoch" value, which will be the "key" value of the first/burn transaction that the current TRST was derived off of.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These will be put as additional fields in the current transaction in the ledger. That way, the entire history of TRST can be accounted for."}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Let's say the Wallet 2 that just got the TRST from Wallet 1, is sending all of that TRST to Wallet 3."}),"\n",(0,i.jsx)(n.p,{children:"It will look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    {\n        "method": "send",\n        "sender": "brst_2p3h\u2026",\n        "receiver": "brst_3v9k\u2026",\n        "amount": 50,\n        "timestamp": 1740914040,\n        "key": "B5I9\u2026",\n        "link": "A1E5\u2026",\n        "epoch":"A1E5\u2026",\n        "signature": "6d5e4f\u2026"\n    },\n'})}),"\n",(0,i.jsx)(n.p,{children:'As you can see, the "link" value here is the same one as the "key" value of the burn transaction this was derived from.'}),"\n",(0,i.jsx)(n.p,{children:'The "epoch" here happens to be the same as the "link" because, only for the second transaction, "epoch" and "link" both will refer to the same initial transaction.'}),"\n",(0,i.jsx)(n.p,{children:'For future transactions that will be derived from this TRST transaction however, "epoch" will simply be copied over from the last transaction, while "link" will be the "key" of the last transaction.'}),"\n",(0,i.jsx)(n.p,{children:"Let's say now Wallet 3 sends 30 TRST to Wallet 4."}),"\n",(0,i.jsx)(n.p,{children:"It will look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'    {\n        "method": "send",\n        "sender": "brst_3v9k\u2026",\n        "receiver": "brst_4z9k\u2026",\n        "amount": 30,\n        "timestamp": 1740914100,\n        "key": "C9M3\u2026",\n        "link": "B5I9\u2026",\n        "epoch":"A1E5\u2026",\n        "signature": "3g2h1i\u2026",\n    }\n'})}),"\n",(0,i.jsx)(n.p,{children:'As you can see, the "link" value here is the same as the "key" value of the TRST it was derived off of.\nThe "epoch"" is the same initial burn transaction.'}),"\n",(0,i.jsx)(n.h3,{id:"usecase",children:"Usecase"}),"\n",(0,i.jsx)(n.p,{children:"Having TRST transaction-stamped like this, makes it so that  its really easy to locate the originator of the TRST tokens, to know the expiry date of those tokens, as well as to know the entire history of each TRST transaction."}),"\n",(0,i.jsx)(n.p,{children:"This way, the public knows how the tokens are being transacted. This creates a fairer way of valuing the TRST tokens according to their originator, expiry date, legitimacy, transfer frequency, receivers, amount, etc."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);