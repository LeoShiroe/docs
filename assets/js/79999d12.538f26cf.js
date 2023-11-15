"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||n;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={id:"cell-capacity",title:"Cell Capacity (CC)",sidebar_label:"Cell Capacity (CC)",slug:"/project/cell-capacity"},l=void 0,o={unversionedId:"project/cell-capacity",id:"project/cell-capacity",title:"Cell Capacity (CC)",description:"Cell Capacity (CC) is a parameter that is used to define the maximum number of stations that may receive rewards in a specific cell.",source:"@site/docs/project/cell-capacity.mdx",sourceDirName:"project",slug:"/project/cell-capacity",permalink:"/project/cell-capacity",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/project/cell-capacity.mdx",tags:[],version:"current",frontMatter:{id:"cell-capacity",title:"Cell Capacity (CC)",sidebar_label:"Cell Capacity (CC)",slug:"/project/cell-capacity"},sidebar:"docs",previous:{title:"Proof of Location  (PoL)",permalink:"/project/proof-of-location"},next:{title:"Hardware Class",permalink:"/project/hardware-class"}},c={},p=[{value:"Last Claim Time (LCT):",id:"last-claim-time-lct",level:3},{value:"References:",id:"references",level:3},{value:"Related articles",id:"related-articles",level:2}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cell Capacity (CC)")," is a parameter that is used to define the maximum number of stations that may receive rewards in a specific cell."),(0,i.kt)("p",null,"Each cell has a predefined cell capacity that depends on its geospatial characteristics.\nThe cell's capacity is the maximum number of stations that may receive rewards in a specific cell.\nIf 'N' weather stations are rewardable in a cell with a capacity CC during a specific day, if N>CC, then only the first N stations (ordered first by their rewards score defined below, and then by seniority) will receive rewards."),(0,i.kt)("h3",{id:"last-claim-time-lct"},"Last Claim Time (LCT):"),(0,i.kt)("p",null,"Claim time is a unix timestamp (integer).\nLast Claim Time is set to the timestamp of the last claim of the station. It is used as a seniority indicator ( LCT1<LCT2 then station 1 is more senior than station 2)."),(0,i.kt)("h3",{id:"references"},"References:"),(0,i.kt)("p",null,"To read more please see  ",(0,i.kt)("a",{href:"hhttps://blog.weatherxm.com/we-are-opening-the-weatherxm-cell-modelling-to-the-world-b827f1c10c2d"},"cell modelling on Medium")," ,\nin  our ",(0,i.kt)("a",{href:"https://weatherxm.com/whitepaper"},"whitepaper"),"\nand ",(0,i.kt)("a",{href:"https://blog.weatherxm.com/defining-the-density-of-a-multi-purpose-global-weather-network-ea5f4190f91a"},"\nDefining the density of a multi-purpose global weather network ")," on Medium."),(0,i.kt)("h2",{id:"related-articles"},"Related articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.weatherxm.com/whitepaper"},"Whitepaper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.weatherxm.com/we-are-opening-the-weatherxm-cell-modelling-to-the-world-b827f1c10c2d"},"We are opening the WeatherXM cell modelling to the world (WeatherXM Blog)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.weatherxm.com/defining-the-density-of-a-multi-purpose-global-weather-network-ea5f4190f91a"},"Defining the density of a multi purpose global weather network (WeatherXM Blog)"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Cell Capacity is an integer number > 0.")))}m.isMDXComponent=!0}}]);