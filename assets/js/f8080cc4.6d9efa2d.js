"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return h},toc:function(){return d},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(4996),l=["components"],s={id:"setup-m5",title:"Setting up WXM-M5",sidebar_label:"Setting up WXM-M5",slug:"/wxm-devices/wifi-m5-bundle/setup-m5"},c="Setting up WXM-M5",u={unversionedId:"wxm-devices/wifi-m5-bundle/setup-m5",id:"wxm-devices/wifi-m5-bundle/setup-m5",title:"Setting up WXM-M5",description:"The weather station comes together with the WXM-M5 data miner.",source:"@site/docs/wxm-devices/wifi-m5-bundle/setup-m5.mdx",sourceDirName:"wxm-devices/wifi-m5-bundle",slug:"/wxm-devices/wifi-m5-bundle/setup-m5",permalink:"/wxm-devices/wifi-m5-bundle/setup-m5",editUrl:"https://github.com/weatherxm/docs/docs/wxm-devices/wifi-m5-bundle/setup-m5.mdx",tags:[],version:"current",frontMatter:{id:"setup-m5",title:"Setting up WXM-M5",sidebar_label:"Setting up WXM-M5",slug:"/wxm-devices/wifi-m5-bundle/setup-m5"},sidebar:"docs",previous:{title:"Setting up the Weather Station",permalink:"/wxm-devices/wifi-m5-bundle/setup-weather-station"},next:{title:"Troubleshooting",permalink:"/wxm-devices/wifi-m5-bundle/troubleshooting"}},h={},d=[{value:"Device Installation",id:"device-installation",level:2},{value:"Figure 14",id:"figure-14",level:4},{value:"Registering the device to your account",id:"registering-the-device-to-your-account",level:2},{value:"M5 Antenna Troubleshooting",id:"m5-antenna-troubleshooting",level:2},{value:"Switch external/internal GPS antenna",id:"switch-externalinternal-gps-antenna",level:3},{value:"Switch external/internal Radio Function (RF) - LoRa antenna",id:"switch-externalinternal-radio-function-rf---lora-antenna",level:3},{value:"Figure 15",id:"figure-15",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-wxm-m5"},"Setting up WXM-M5"),(0,i.kt)("p",null,"The weather station comes together with the WXM-M5 data miner.\nThe WXM-M5 receives all the meteorological data, which are measured and transmitted every 16\u2019\u2019 by the outdoor sensor\nand displays them on its screen."),(0,i.kt)("p",null,"In this chapter, you will find guidance to set up the WXM-M5."),(0,i.kt)("h2",{id:"device-installation"},"Device Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find the power button at the left side of the WXM-M5 and press it for 2\u2019\u2019 until the screen is on.\nAlthough the M5 has a battery, you need to permanently provide a power supply using the usb cable provided."),(0,i.kt)("li",{parentName:"ol"},"Once the screen is on, you should notice some icons ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/setup-m5#figure-14"},"(Fig. 14a)")," on the up right corner of the screen, which may appear in red color.\nIf you have not already powered on your outdoor sensor, you may get \u201c--\u201d instead of measurements on the screen."),(0,i.kt)("li",{parentName:"ol"},"Swipe left on the touch screen and press \u201cConfigure WiFi\u201d ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/setup-m5#figure-14"},"(Fig. 14b)"),"\nand reply \u201cYes'' to the message \u201cThis will reset your WiFi settings. Continue?\u201d ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/setup-m5#figure-14"},"(Fig. 14c)"),"."),(0,i.kt)("li",{parentName:"ol"},"The screen will be flashing and some guidelines will appear."),(0,i.kt)("li",{parentName:"ol"},"Use your mobile phone to detect a WiFi network with the name \u201cWXMMinerM5\u201d. Allow some time until your phone connects successfully.\nIf the process takes more than a couple of minutes, try the restart button at the bottom of the WXM-M5 or use another mobile phone or tablet or laptop/pc."),(0,i.kt)("li",{parentName:"ol"},"Once your device connects to \u201cWXMMinerM5\u201d, a list of all WiFi networks will appear.\nChoose your network, insert the WiFi password and press \u201cJoin\u201d.\nIn case no list appears, open a browser, navigate to 10.10.0.1 and follow the process already mentioned."),(0,i.kt)("li",{parentName:"ol"},"A message of success will appear on your phone/tablet/pc screen and the Wi-Fi icon on the WXM-M5\u2019s screen will turn green.\nIn addition, the date and time will be updated. Note that the time will appear in UTC.")),(0,i.kt)("h4",{id:"figure-14"},"Figure 14"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a. home screen,"),(0,i.kt)("li",{parentName:"ul"},"b. screen after swiping left on the touch screen and"),(0,i.kt)("li",{parentName:"ul"},"c. screen after pressing the \u201cConfigure WiFi\u201d button.",(0,i.kt)("img",{class:"marginTop",src:(0,o.Z)("img/wxm-devices/wifi-m5-bundle/m5-first-run.jpg")}))),(0,i.kt)("p",null,"If batteries have already been placed in the battery compartment of the outdoor sensor (see ",(0,i.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/setup-weather-station#installing-batteries"},"Installing Batteries"),"),\nthe data collected by the sensor should appear on the WXM-M5\u2019s screen.\nIn addition, in the \u201cWS\u201d field (on the screen, you should see the \u201csensor id\u201d number written under the outdoor sensor.\nIn case, there is no data on the screen, try to swipe left the screen again and press \u201cScan weather stations\u201d."),(0,i.kt)("p",null,"Finally, (if you have the WXM-M5 beta V1) plug in the GPS antenna to the port on the gray board of the WXM-M5 ",(0,i.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/contents#figure-5"},"(Fig. 5)"),"\nand place the WXM-M5 next to a window. Then, swipe right on the screen.\nIn a couple of minutes, the variables \u201cLat\u201d, \u201cLon\u201d and \u201cAlt\u201d should present values\ncorresponding to your latitude, longitude and altitude of your area.\nIt is important to assure that the GPS antenna is properly connected and the indications mentioned above\nare shown on the screen in order to participate in the WeatherXM rewarding programme.\nIf you use the internal GPS antenna, then assure that the WXM-M5 is close by the window."),(0,i.kt)("h2",{id:"registering-the-device-to-your-account"},"Registering the device to your account"),(0,i.kt)("p",null,"You may claim your WXM-M5 data miner device via the application WeatherXM,\nwhich can be downloaded from ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.weatherxm.app"},"Play Store for Android")," or ",(0,i.kt)("a",{parentName:"p",href:"https://console.weatherxm.com/login"},"via our web dashboard"),".\nThen, after registering and logging into your account, click on \u201c+\u201d and follow the instructions to claim your device."),(0,i.kt)("h2",{id:"m5-antenna-troubleshooting"},"M5 Antenna Troubleshooting"),(0,i.kt)("p",null,"WXM-M5 is equipped with two antennas, the GPS and the LoRa. The GPS antenna is used to determine the location (coordinates) and altitude of the weather station,\nwhile the LoRa antenna is responsible for the communication between the WXM-M5 and the outdoor sensor."),(0,i.kt)("p",null,"On the left side of the WXM-M5 you may notice that there are two different slices, a gray for GPS and a blue for LoRa.\nEach of these slices contains a system relevant to the antennas mentioned above."),(0,i.kt)("p",null,"By default, the external GPS antenna and the internal RF/LoRa antenna are connected, and there is no need to modify this."),(0,i.kt)("p",null,"The antenna plugs are VERY SENSITIVE so it is NOT recommended to switch cables unless there is a serious problem."),(0,i.kt)("h3",{id:"switch-externalinternal-gps-antenna"},"Switch external/internal GPS antenna"),(0,i.kt)("p",null,"The WXM-M5 beta v1 uses by default the external GPS antenna, which should be connected to the port on the gray GPS slice ",(0,i.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/contents#figure-5"},"(Fig. 5)"),".\nIn case you desire to change the internal/external GPS antenna, follow the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unscrew and remove the four screws behind the WXM-M5."),(0,i.kt)("li",{parentName:"ol"},"Remove the first cap. You may use a flat-head screwdriver to separate the cap from the rest of the WXM-M5."),(0,i.kt)("li",{parentName:"ol"},"You will notice two small cables, one coming from the port on the side and one coming from a small chip.\nRemove the cable, which is connected to a specific reception on the green board and connect the desired cable to the same reception ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/setup-m5#figure-15"},"(Fig. 15c)"),"."),(0,i.kt)("li",{parentName:"ol"},"Clasp the cap back and screw the device."),(0,i.kt)("li",{parentName:"ol"},"In case you changed to external GPS antenna, connect the external antenna to the corresponding port on the side of the WXM-M5 ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/contents#figure-5"},"(Fig. 5)"),".")),(0,i.kt)("h3",{id:"switch-externalinternal-radio-function-rf---lora-antenna"},"Switch external/internal Radio Function (RF) - LoRa antenna"),(0,i.kt)("p",null,"The WXM-M5 beta v1 uses by default the internal LoRa antenna ",(0,i.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/setup-m5#figure-15"},"(Fig. 15)"),".\nIn case you desire to change the internal/external LoRa antenna, follow the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unscrew and remove the four screws behind the WXM-M5."),(0,i.kt)("li",{parentName:"ol"},"Remove the first cap. You may use a flat-head screwdriver to separate the cap from the rest of the WXM-M5."),(0,i.kt)("li",{parentName:"ol"},"Remove the gray GPS slice. Again you may use a flat-head screwdriver to separate the slice from the rest of the WXM-M5."),(0,i.kt)("li",{parentName:"ol"},"You will notice two small cables, one coming from the port on the side and one coming from an edge of the green board.\nRemove the cable, which is connected to a specific reception on the green board and\nconnect the desired cable to the same reception ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/setup-m5#figure-15"},"(Fig. 15b)"),"."),(0,i.kt)("li",{parentName:"ol"},"Clasp the slices and the cap back and screw the device."),(0,i.kt)("li",{parentName:"ol"},"In case you changed to external LoRa antenna, connect the external antenna to the corresponding port on the side of the WXM-M5 ",(0,i.kt)("a",{parentName:"li",href:"/wxm-devices/wifi-m5-bundle/contents#figure-5"},"(Fig. 5)"),".")),(0,i.kt)("h4",{id:"figure-15"},"Figure 15"),(0,i.kt)("p",null,"Internal parts of the WXM-M5."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(a) Bottom is the first cap you remove once the WXM-M5 is unscrewed."),(0,i.kt)("li",{parentName:"ul"},"(b) The gray GPS is the second slice"),(0,i.kt)("li",{parentName:"ul"},"(c) the blue RF LoRa is the third slice"),(0,i.kt)("li",{parentName:"ul"},"(d) The TOP is the rest of WXM-M5 device.",(0,i.kt)("img",{class:"marginTop",src:(0,o.Z)("img/wxm-devices/wifi-m5-bundle/hardware-parts.png")}))))}m.isMDXComponent=!0}}]);