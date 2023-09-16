"use strict";(self.webpackChunkjetdocs=self.webpackChunkjetdocs||[]).push([[1813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Update Transaction Pin Endpoint (POST REQUEST)",s={unversionedId:"tutorial-basics/updatetransactionpin",id:"tutorial-basics/updatetransactionpin",title:"Update Transaction Pin Endpoint (POST REQUEST)",description:"---",source:"@site/docs/tutorial-basics/updatetransactionpin.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/updatetransactionpin",permalink:"/docs/tutorial-basics/updatetransactionpin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Store Transaction Endpoint - POST Request",permalink:"/docs/tutorial-basics/storetransaction"},next:{title:"Update User Profile Endpoint - POST Request",permalink:"/docs/tutorial-basics/updateuser"}},l={},p=[{value:"Update Transaction Pin Endpoint",id:"update-transaction-pin-endpoint",level:2},{value:"Request",id:"request",level:3},{value:"Request Headers",id:"request-headers",level:4},{value:"Request Parameters",id:"request-parameters",level:4},{value:"Response",id:"response",level:3},{value:"Success Response",id:"success-response",level:4},{value:"Error Response",id:"error-response",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-transaction-pin-endpoint-post-request"},"Update Transaction Pin Endpoint (POST REQUEST)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"update-transaction-pin-endpoint"},"Update Transaction Pin Endpoint"),(0,r.kt)("p",null,"The Update Transaction Pin Endpoint allows authenticated users to change their transaction PIN securely. This endpoint is used to update the user's transaction PIN."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"https://kashamng.com/update/transactionpin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication:")," Bearer Token (Required)")),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"request-headers"},"Request Headers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Authorization: Bearer [Your Access Token]\n")),(0,r.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_pin"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The new transaction PIN (maximum of 4 characters).")))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status Code:")," 200 OK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type:")," application/json")),(0,r.kt)("h4",{id:"success-response"},"Success Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Your pin has been changed successfully",\n    "user_data": {\n        "id": 1,\n        "name": "John Doe",\n        "email": "johndoe@example.com",\n        "transaction_pin": "1234",  // Updated transaction PIN\n        // ... (user\'s other attributes)\n    }\n}\n')),(0,r.kt)("h4",{id:"error-response"},"Error Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status Code:")," 422 Unprocessable Entity")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "The given data was invalid.",\n    "errors": {\n        "transaction_pin": ["The transaction pin field is required and must be a maximum of 4 characters."]\n    }\n}\n')),(0,r.kt)("admonition",{title:"important!",type:"info"},(0,r.kt)("h3",{parentName:"admonition",id:"additional-notes"},"Additional Notes"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This endpoint is used to update the user's transaction PIN, and it requires a valid bearer token for authentication."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction_pin")," parameter is used to set the new transaction PIN for the user's account. It must not exceed 4 characters in length."),(0,r.kt)("li",{parentName:"ul"},"After a successful PIN update, the response includes the user's updated information (",(0,r.kt)("inlineCode",{parentName:"li"},"user_data"),") for reference.")),(0,r.kt)("p",{parentName:"admonition"},"Make sure to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"[Your Access Token]")," with the actual bearer token you use for authentication.")))}d.isMDXComponent=!0}}]);