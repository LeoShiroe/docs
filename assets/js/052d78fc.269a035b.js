"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??m;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var g=r(2389);const h="tabList__CuJ",w="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(m(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",w,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},6868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),l=r(4996);const i={id:"rewards-claiming",title:"How to Claim Rewards",sidebar_label:"rewards-claiming",slug:"/project/rewards-claiming"},u=void 0,s={unversionedId:"project/rewards-claiming",id:"project/rewards-claiming",title:"How to Claim Rewards",description:"Requirements to claim your rewards:",source:"@site/docs/project/rewards-claiming.mdx",sourceDirName:"project",slug:"/project/rewards-claiming",permalink:"/project/rewards-claiming",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/project/rewards-claiming.mdx",tags:[],version:"current",frontMatter:{id:"rewards-claiming",title:"How to Claim Rewards",sidebar_label:"rewards-claiming",slug:"/project/rewards-claiming"},sidebar:"docs",previous:{title:"Hardware Class",permalink:"/project/hardware-class"},next:{title:"WXM WS1000 Introduction",permalink:"/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction"}},c={},m=[{value:"Claiming Rewards",id:"claiming-rewards",level:2}],p=(d="TabItem",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const f={toc:m};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Requirements to claim your rewards: "),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"You must have a wallet with Arbitrum One and Sepolia test network configured. If you have not done so, please follow the ",(0,n.kt)("a",{parentName:"li",href:"/wallet/how-to-join-arbitrum-and-see-your-tokens"},"Wallet Setup"),"."),(0,n.kt)("li",{parentName:"ol"},"You must have some testnet ETH in your wallet. If you don't, please treat yourself at the ",(0,n.kt)("a",{parentName:"li",href:"https://arbitrum-faucet.com/"},"Faucet"),"."))),(0,n.kt)("h2",{id:"claiming-rewards"},"Claiming Rewards"),(0,n.kt)("p",null,"To claim your rewards:"),(0,n.kt)(o.Z,{defaultValue:"Mobile",values:[{label:"Claim from the WeatherXM app",value:"Mobile"},{label:"Claim through the Web",value:"Web"}],mdxType:"Tabs"},(0,n.kt)(p,{value:"Mobile",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the WeatherXM app. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Navigate to "My Profile" '),(0,n.kt)("img",{class:"marginTopBottomNormal",src:(0,l.Z)("/img/project/my-profile.png"),alt:"My Profile"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Then press the "Claim" button. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Follow the instructions and "connect your wallet".'),(0,n.kt)("img",{class:"marginTopBottomNormal",src:(0,l.Z)("/img/project/connect_wallet.png"),alt:"connect_wallet"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Enter the amount you want to claim and press "Claim".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then, follow the instructions on your wallet to confirm the transaction."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You have successfully claimed your rewards!")),(0,n.kt)("hr",null)),(0,n.kt)(p,{value:"Web",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://claim.weatherxm.com/"},"Claim Dapp"),"."),(0,n.kt)("img",{class:"marginTopBottomNormal",src:(0,l.Z)("/img/project/claim-through-web.png"),alt:"My Profile"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect you Wallet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Enter the amount you want to claim and press "Claim".'),(0,n.kt)("img",{class:"marginTopBottomNormal",src:(0,l.Z)("/img/project/add-amount.png")})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"confirm the transaction on your wallet."),(0,n.kt)("img",{class:"marginTopBottomNormal",src:(0,l.Z)("/img/project/Popup.png")})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You have successfully claimed your rewards!"))),(0,n.kt)("img",{class:"marginTopBottomNormal",src:(0,l.Z)("/img/project/Claim-success.png")}))),(0,n.kt)("hr",null))}b.isMDXComponent=!0}}]);