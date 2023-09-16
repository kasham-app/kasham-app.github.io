"use strict";(self.webpackChunkjetdocs=self.webpackChunkjetdocs||[]).push([[8777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Create Donation Endpoint (POST REQUEST)",l={unversionedId:"tutorial-basics/createdonation",id:"tutorial-basics/createdonation",title:"Create Donation Endpoint (POST REQUEST)",description:"The Create Donation Endpoint allows authenticated users to create a new donation. This endpoint is used to initiate the creation of a donation with a unique donation tag.",source:"@site/docs/tutorial-basics/createdonation.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/createdonation",permalink:"/docs/tutorial-basics/createdonation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Password Endpoint (POST REQUEST)",permalink:"/docs/tutorial-basics/changepassword"},next:{title:"Donation History Endpoint (GET REQUEST)",permalink:"/docs/tutorial-basics/donationhistory"}},s={},u=[{value:"Endpoint Details",id:"endpoint-details",level:2},{value:"Request",id:"request",level:2},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Validation Rules",id:"validation-rules",level:3},{value:"Response",id:"response",level:3},{value:"Success Response",id:"success-response",level:2},{value:"Error Response",id:"error-response",level:2},{value:"Additional Notes",id:"additional-notes",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-donation-endpoint-post-request"},"Create Donation Endpoint (POST REQUEST)"),(0,r.kt)("p",null,"The Create Donation Endpoint allows authenticated users to create a new donation. This endpoint is used to initiate the creation of a donation with a unique donation tag."),(0,r.kt)("h2",{id:"endpoint-details"},"Endpoint Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"https://kashamng.com/create/donation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method:")," POST"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication:")," Bearer Token (Required)")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"request-headers"},"Request Headers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Authorization: Bearer [Your Access Token]\n")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"donation_tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique donation tag to create (required).")))),(0,r.kt)("h3",{id:"validation-rules"},"Validation Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donation_tag")," field is required."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donation_tag")," must be unique."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donation_tag"),' should start with "@".'),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donation_tag"),' should not contain variations of "kasham. ie: It must not start or contain any word related to kasham."')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status Code:")," 200 OK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type:")," application/json")),(0,r.kt)("h2",{id:"success-response"},"Success Response"),(0,r.kt)("p",null,"The response indicates that the donation has been created successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Donation created successfully",\n    "user_wallet": {\n        // ... (user wallet attributes)\n    }\n}\n')),(0,r.kt)("h2",{id:"error-response"},"Error Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status Code:")," 422 Unprocessable Entity")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "The given data was invalid."\n}\n')),(0,r.kt)("h2",{id:"additional-notes"},"Additional Notes"),(0,r.kt)("admonition",{title:"Important",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This endpoint is used to create a new donation, and it requires a valid bearer token for authentication."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donation_tag"),' must be unique, and it should start with "@".'),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donation_tag"),' should not contain variations of "kasham" to ensure it doesn\'t conflict with reserved tags.'),(0,r.kt)("li",{parentName:"ul"},"After successfully creating a donation, the response includes a user wallet update with information about the donations created and donation balance."))),(0,r.kt)("p",null,"Make sure to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"[Your Access Token]")," with the actual bearer token you use for authentication."))}c.isMDXComponent=!0}}]);