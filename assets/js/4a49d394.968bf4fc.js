"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(n),m=o,p=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(p,r(r({ref:t},c),{},{components:n})):a.createElement(p,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),i=n(4996);const r={id:"m5-troubleshooting",title:"WXM-WS1000 Troubleshooting",sidebar_label:"WXM-WS1000 Troubleshooting",slug:"/wifi-m5-bundle/m5-troubleshooting"},l=void 0,s={unversionedId:"wxm-devices/wifi-m5-bundle/m5-troubleshooting",id:"wxm-devices/wifi-m5-bundle/m5-troubleshooting",title:"WXM-WS1000 Troubleshooting",description:"Weather Station",source:"@site/docs/wxm-devices/wifi-m5-bundle/m5-troubleshooting.mdx",sourceDirName:"wxm-devices/wifi-m5-bundle",slug:"/wifi-m5-bundle/m5-troubleshooting",permalink:"/wifi-m5-bundle/m5-troubleshooting",draft:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/wifi-m5-bundle/m5-troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"m5-troubleshooting",title:"WXM-WS1000 Troubleshooting",sidebar_label:"WXM-WS1000 Troubleshooting",slug:"/wifi-m5-bundle/m5-troubleshooting"},sidebar:"docs",previous:{title:"Connect and Claim Station",permalink:"/wxm-devices/wifi-m5-bundle/m5-connect-and-claim"},next:{title:"Maintenance of WXM-WS1000",permalink:"/wxm-devices/wifi-m5-bundle/m5-maintenance"}},h={},c=[{value:"Weather Station",id:"weather-station",level:2},{value:"Weather station not reporting data to M5 Miner. There are dashes (--) on the display console.",id:"weather-station-not-reporting-data-to-m5-miner-there-are-dashes----on-the-display-console",level:3},{value:"Temperature looks higher than expected.",id:"temperature-looks-higher-than-expected",level:3},{value:"Other variables, such as wind direction, wind speed, rain height and humidity do not align with an official weather reporting station",id:"other-variables-such-as-wind-direction-wind-speed-rain-height-and-humidity-do-not-align-with-an-official-weather-reporting-station",level:3},{value:"One or more variables are extremely high, low, or constant for long periods of time.",id:"one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time",level:3},{value:"WiFi  Connectivity",id:"wifi--connectivity",level:2},{value:"No WiFi  connection",id:"no-wifi--connection",level:3},{value:"GPS Signal",id:"gps-signal",level:2},{value:"No GPS signal (no values of latitude, longitude, and altitude)",id:"no-gps-signal-no-values-of-latitude-longitude-and-altitude",level:3},{value:"My Station does not connect to the M5 Miner",id:"my-station-does-not-connect-to-the-m5-miner",level:2},{value:"M5 Miner Antenna Troubleshooting",id:"m5-miner-antenna-troubleshooting",level:4},{value:"Switch external/internal GPS antenna",id:"switch-externalinternal-gps-antenna",level:4},{value:"Switch external/internal LoRa antenna",id:"switch-externalinternal-lora-antenna",level:4},{value:"Internal parts of the M5 Miner",id:"internal-parts-of-the-m5-miner",level:5}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"weather-station"},"Weather Station"),(0,o.kt)("h3",{id:"weather-station-not-reporting-data-to-m5-miner-there-are-dashes----on-the-display-console"},"Weather station not reporting data to M5 Miner. There are dashes (--) on the display console."),(0,o.kt)("p",null,"First make sure you M5 Miner frequency matches your weather station (see ",(0,o.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/m5-connect-and-claim#change-frequency-optional"},"Change frequency"),")"),(0,o.kt)("p",null,"Check the LED on the weather station (see ",(0,o.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/assemble-m5#outdoor-weather-station"},"Reset Button and LED Indicator"),") for flashing.\nThe LED should flash every 16 seconds."),(0,o.kt)("p",null,"If the LED is not flashing every 16 seconds, replace the batteries in the weather station.\nIf the batteries were recently replaced, check the polarity."),(0,o.kt)("p",null,"If the above does not solve the issue, there may be a temporary loss of communication due to reception loss related to interference or other location factors, or the M5 Miner has not been reset.\nThe solution may be as simple as powering down and up the M5 Miner. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"With the weather station array and M5 Miner 3m/10ft away from each other,\nremove the batteries from the weather station and wait 10 seconds. Put the batteries back in."),(0,o.kt)("li",{parentName:"ol"},"M5 Miner should display all the observations measured by the weather station."),(0,o.kt)("li",{parentName:"ol"},"Try to place the M5 Miner at the desirable point and check that it receives data.\nEnsure the power adapter if used is not too close to the M5 Miner and the M5 Miner is not close to other electrical noise generating devices\nsuch as TVs, monitors, computers and transmitting devices."),(0,o.kt)("li",{parentName:"ol"},"If you still have intermittent problems, move the weather station and the M5 Miner closer together,\nbut not closer than 1.5m/5ft or further than 50m/164ft if you use the internal (external) LoRa antenna.\nAlso check that there are no metal barriers like aluminum siding\nor metal wall framing along the line of sight between the weather station and M5 Miner.\nRelocate the weather station and M5 Miner as necessary to avoid obstacles.\nDepending on natural barriers you may also have to move the weather station higher and/or closer."),(0,o.kt)("li",{parentName:"ol"},"Use the external LoRa antenna provided with M5, but this requires you open the M5 (Read more on the bottom of this page).")),(0,o.kt)("h3",{id:"temperature-looks-higher-than-expected"},"Temperature looks higher than expected."),(0,o.kt)("p",null,"If the temperature is slightly higher (e.g., +2 - 5\xb0C/35-41\xb0F) than expected,\nthen assure that the weather station is within a significant distance from heat sources\nlike ventilation systems and active chimneys.\nAlso make sure that the weather station is mounted on a 2m/6.5ft (or more) metallic pole and there are no obstacles close by (see ",(0,o.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/install-weather-station#best-practices-for-proper-station-installation"},"Best Practices for Proper Station Installation"),")."),(0,o.kt)("h3",{id:"other-variables-such-as-wind-direction-wind-speed-rain-height-and-humidity-do-not-align-with-an-official-weather-reporting-station"},"Other variables, such as wind direction, wind speed, rain height and humidity do not align with an official weather reporting station"),(0,o.kt)("p",null,"Even weather stations, which are close to each other, may obtain slightly different measurements,\nespecially for the variables of wind speed and wind direction. However, you should not expect significant deviations\ne.g., from a weather station, which is located within a distance of 1km/0.6mi.\nIf there are deviations, please check ",(0,o.kt)("a",{parentName:"p",href:"/wxm-devices/wifi-m5-bundle/install-weather-station#best-practices-for-proper-station-installation"},"Best Practices for Proper Station Installation")," for guidelines about the installation of the weather station."),(0,o.kt)("h3",{id:"one-or-more-variables-are-extremely-high-low-or-constant-for-long-periods-of-time"},"One or more variables are extremely high, low, or constant for long periods of time."),(0,o.kt)("p",null,"Change the batteries of the weather station. Make sure you use lithium non-rechargeable batteries, especially in case of cold weather environments."),(0,o.kt)("h2",{id:"wifi--connectivity"},"WiFi  Connectivity"),(0,o.kt)("h3",{id:"no-wifi--connection"},"No WiFi  connection"),(0,o.kt)("p",null,"Check for the WiFi  symbol on the top-right corner of the display."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If wireless connectivity is operational, the WiFi  icon will appear in green."),(0,o.kt)("li",{parentName:"ul"},"If the symbol appears in red, but you do remember configuring it successfully before, check that the M5 Miner and Internet router are close enough.")),(0,o.kt)("p",null,"If you have never been able to configure WiFi  to a working state, make sure your WiFi  supports 2.4 GHz signals. The console does not support WiFi that uses the 5 GHz spectrum."),(0,o.kt)("p",null,"Make sure you configured the correct SSID and password. Repeat the procedure if necessary to verify."),(0,o.kt)("h2",{id:"gps-signal"},"GPS Signal"),(0,o.kt)("h3",{id:"no-gps-signal-no-values-of-latitude-longitude-and-altitude"},"No GPS signal (no values of latitude, longitude, and altitude)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Move your M5 Miner outdoors (with the GPS antenna connected, if you use the external one)\nfor a couple of minutes till \u201clon\u201d, \u201clat\u201d and \u201calt\u201d values appear."),(0,o.kt)("li",{parentName:"ol"},"Then, move M5 Miner indoors placing the GPS antenna next to a window.")),(0,o.kt)("p",null,"If the problem remains and you use the internal GPS antenna, switch to the external antenna (Read more on the bottom of this page)."),(0,o.kt)("h2",{id:"my-station-does-not-connect-to-the-m5-miner"},"My Station does not connect to the M5 Miner"),(0,o.kt)("div",{class:"explanation vertical"},(0,o.kt)("p",null,"   ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FP4rT3FTz0M&"},(0,o.kt)("img",{alt:"Instruction on how to switch to LoRa antenna",src:n(7259).Z,width:"626",height:"407"}))),(0,o.kt)("img",{src:(0,i.Z)("img/wxm-devices/wifi-m5-bundle/lorawan-antenna.svg")})),(0,o.kt)("p",null,"If the installation of the station and the placement of the M5 Miner is more than 50m/~160ft apart, you must install the LoRa antenna so that the two can communicate over such distance. Please follow the instructions below, or in the video."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the station and M5 are more than 50m/164ft apart, you must install the LoRa antenna. Else the station might not be able to properly communicate with M5 Miner, resulting in less to none data being shared to the network, and thus reduce WXM rewards.")),(0,o.kt)("details",{class:"accordion"},(0,o.kt)("summary",null,"M5 LoRa Antenna Installation Instructions"),(0,o.kt)("h4",{id:"m5-miner-antenna-troubleshooting"},"M5 Miner Antenna Troubleshooting"),(0,o.kt)("p",null,"M5 Miner is equipped with two antennas, the GPS and the LoRa. The GPS antenna is used to determine the location (coordinates) and altitude of the weather station,\nwhile the LoRa antenna is responsible for the communication between the M5 Miner and the weather station."),(0,o.kt)("p",null,"On the left side of the M5 Miner you may notice that there are two different caps, a grey for GPS and a blue for LoRa.\nEach of these caps contains a system relevant to the antennas mentioned above."),(0,o.kt)("p",null,"By default, the external GPS antenna and the internal LoRa antenna are connected, and there is no need to modify this."),(0,o.kt)("p",null,"The antenna plugs are VERY SENSITIVE so it is NOT recommended to switch cables unless there is a serious problem."),(0,o.kt)("h4",{id:"switch-externalinternal-gps-antenna"},"Switch external/internal GPS antenna"),(0,o.kt)("p",null,"The M5 Miner uses by default the external GPS antenna, which should be connected to the port on the grey GPS cap,\nIn case you desire to change the internal/external GPS antenna, follow the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unscrew and remove the four screws behind the M5 Miner."),(0,o.kt)("li",{parentName:"ol"},"Remove the first cap. You may use a flat-head screwdriver to separate the cap from the rest of the M5 Miner."),(0,o.kt)("li",{parentName:"ol"},"You will notice two small cables, one coming from the port on the side and one coming from a small chip.\nRemove the cable, which is connected to a specific reception on the green board and connect the desired cable to the same reception."),(0,o.kt)("li",{parentName:"ol"},"Clasp the cap back and screw the device."),(0,o.kt)("li",{parentName:"ol"},"In case you changed to the external GPS antenna, connect the external antenna to the corresponding port on the side of the M5 Miner.")),(0,o.kt)("h4",{id:"switch-externalinternal-lora-antenna"},"Switch external/internal LoRa antenna"),(0,o.kt)("p",null,"The M5 Miner beta v1 uses by default the internal LoRa antenna.\nIn case you desire to change the internal/external LoRa antenna, follow the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unscrew and remove the four screws behind the M5 Miner."),(0,o.kt)("li",{parentName:"ol"},"Remove the first cap. You may use a flat-head screwdriver to separate the cap from the rest of the M5 Miner."),(0,o.kt)("li",{parentName:"ol"},"Remove the grey GPS cap. Again you may use a flat-head screwdriver to separate the cap from the rest of the M5 Miner."),(0,o.kt)("li",{parentName:"ol"},"You will notice two small cables, one coming from the port on the side and one coming from an edge of the green board.\nRemove the cable, which is connected to a specific reception on the green board and\nconnect the desired cable to the same reception."),(0,o.kt)("li",{parentName:"ol"},"Clasp the caps and the cap back and screw the device."),(0,o.kt)("li",{parentName:"ol"},"In case you changed to external LoRa antenna, connect the external antenna to the corresponding port on the side of the M5 Miner.")),(0,o.kt)("h5",{id:"internal-parts-of-the-m5-miner"},"Internal parts of the M5 Miner"),(0,o.kt)("p",null,"a. Bottom is the first cap you remove once the M5 Miner is unscrewed."),(0,o.kt)("p",null,"b. The second cap in grey is the GPS"),(0,o.kt)("p",null,"c. The third cap in blue is the LoRa"),(0,o.kt)("p",null,"d. Top cap in white is the rest of M5 Miner."),(0,o.kt)("div",{class:"control"},(0,o.kt)("img",{src:(0,i.Z)("img/wxm-devices/wifi-m5-bundle/hardware-parts.svg")}))))}u.isMDXComponent=!0},7259:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/video-LoRaWan-6550888eefc7b101d1f33eedaa2f8633.png"}}]);