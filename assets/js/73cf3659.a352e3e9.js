"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,h=m["".concat(u,".").concat(c)]||m[c]||p[c]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),i=r(4996);const o={id:"helium-update-firmware",title:"Update Firmware",sidebar_label:"Update Firmware",slug:"/wxm-devices/helium-bundle/helium-update-firmware"},l=void 0,u={unversionedId:"wxm-devices/helium-bundle/helium-update-firmware",id:"wxm-devices/helium-bundle/helium-update-firmware",title:"Update Firmware",description:"Prepare device for firmware update",source:"@site/docs/wxm-devices/helium-bundle/helium-firmware-updade.mdx",sourceDirName:"wxm-devices/helium-bundle",slug:"/wxm-devices/helium-bundle/helium-update-firmware",permalink:"/wxm-devices/helium-bundle/helium-update-firmware",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/helium-bundle/helium-firmware-updade.mdx",tags:[],version:"current",frontMatter:{id:"helium-update-firmware",title:"Update Firmware",sidebar_label:"Update Firmware",slug:"/wxm-devices/helium-bundle/helium-update-firmware"},sidebar:"docs",previous:{title:"Connect and Claim Station",permalink:"/wxm-devices/helium-bundle/helium-connect-and-claim"},next:{title:"Installing the WXM-WS2000",permalink:"/wxm-devices/helium-bundle/helium-install-weather-station"}},s={},d=[{value:"Prepare device for firmware update",id:"prepare-device-for-firmware-update",level:3},{value:"Installing update",id:"installing-update",level:3},{value:"Successful firmware update",id:"successful-firmware-update",level:3}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"prepare-device-for-firmware-update"},"Prepare device for firmware update"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"if you experience connection issues while claiming a helium device,  make sure you are near the station.")),(0,n.kt)("div",{class:"explanation small-big"},(0,n.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/update-station.jpg")}),(0,n.kt)("span",null,(0,n.kt)("p",null,"In order for your station to keep operating normally and receive WXM rewards, you must update the station."),(0,n.kt)("p",null,"The process is done wirelessly via bluetooth and requires you to be at a distance of ~<10m/32ft from the station."),(0,n.kt)("p",null,"This document describes the firmware update process using an Android smartphone, the process for iOS is similar."),(0,n.kt)("p",null,"Push the reset button at the bottom of your WeatherXM device to enable bluetooth pairing.This will expire in 5 minutes. After that, you will need to push it again to restart the pairing process."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Your mobile phone must be paired to your weather station for the mobile app to be able to communicate with it. This procedure needs to take place only once. All further communications do not require any pairing as your weather station stays paired to your mobile phone as long as it was not factory reset or the pairing manually removed in your phone.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure you don't move away from your station as you might lose bluetooth connection.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"installing-update"},"Installing update"),(0,n.kt)("div",{class:"explanation small-big"},(0,n.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/installing-update.svg")}),(0,n.kt)("span",null,(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"if you experience connection issues while claiming a helium device,  make sure you are near the station.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do not switch off the application!")),(0,n.kt)("p",{parentName:"admonition"},"Make sure you don't move away from your station as you might lose bluetooth connection.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"successful-firmware-update"},"Successful firmware update"),(0,n.kt)("div",{class:"explanation small-big"},(0,n.kt)("img",{src:(0,i.Z)("img/wxm-devices/helium-bundle/station-updated.svg")}),(0,n.kt)("span",null,(0,n.kt)("p",null,"That's it! You've now claimed your new WeatherXM station and you'll be able to see its data on your WeatherXM apps!"),(0,n.kt)("p",null,"All you need to do now, is to add your compatible wallet so you can receive WXM rewards. To do so, please follow the instructions in the chapter ",(0,n.kt)("a",{parentName:"p",href:"/wallet/add-edit-wallet-address#how-to-create-wallet-on-metamask"},'"Add/edit wallet address"'),". "))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);