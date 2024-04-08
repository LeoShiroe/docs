"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[347],{38:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453),r=t(8189);const o={id:"m5-usb-flasher",title:"Updating Your WXM-M5 Firmware with the Flasher Tool",slug:"/wxm-devices/wifi-m5-bundle/m5-usb-flasher"},l=void 0,a={id:"wxm-devices/wifi-m5-bundle/m5-usb-flasher",title:"Updating Your WXM-M5 Firmware with the Flasher Tool",description:"Introduction",source:"@site/docs/wxm-devices/wifi-m5-bundle/m5-usb-flasher.mdx",sourceDirName:"wxm-devices/wifi-m5-bundle",slug:"/wxm-devices/wifi-m5-bundle/m5-usb-flasher",permalink:"/wxm-devices/wifi-m5-bundle/m5-usb-flasher",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/wxm-devices/wifi-m5-bundle/m5-usb-flasher.mdx",tags:[],version:"current",frontMatter:{id:"m5-usb-flasher",title:"Updating Your WXM-M5 Firmware with the Flasher Tool",slug:"/wxm-devices/wifi-m5-bundle/m5-usb-flasher"}},d={},c=[];function h(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)("p",{children:'If you are currently using a WXM-M5 with firmware version 0.3.12, it\'s essential to update your device using the Flasher Tool. This version is considered obsolete and cannot receive updates through the "Over The Air" (OTA) method anymore due to significant differences in the underlying operating system. To ensure your WXM-M5 continues to operate efficiently and receive rewards, you must perform a full firmware flash using a USB cable.'}),"\n",(0,s.jsx)("p",{children:"This guide will walk you through the step-by-step process of updating your WXM-M5 to the latest firmware version, ensuring you stay up to date with the latest features, security enhancements and continue to receive rewards."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"To check the version of your WXM-M5, swipe to the left-most screen (about). If your version is newer than 0.3.12 you do not need to proceed with this update as your device will receive updates automatically."})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Support for M5 devices running v0.3.12 will be discontinued from November 2023 and they will cease to receive rewards shortly thereafter. It is important to follow the instructions on this page to update your device."})}),"\n",(0,s.jsx)("h2",{id:"how-to-update-your-wxm-m5",children:"How to Update Your WXM-M5"}),"\n",(0,s.jsx)("p",{children:"Follow these instructions carefully to update your WXM-M5's firmware using the Flasher Tool. We've included screenshots to help you navigate the process."}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 1: Prepare Your Equipment"})}),"\n",(0,s.jsx)("p",{children:"Before starting, ensure you have the following:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"A WXM-M5 powered on, running firmware version 0.3.12"}),(0,s.jsx)("li",{children:"A USB Type-C cable to connect your WXM-M5 to your computer"}),(0,s.jsx)("li",{children:"A computer running the Flasher Tool"})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 2: Launch the Flasher Tool"})}),"\n",(0,s.jsxs)("div",{class:"explanation",children:[(0,s.jsx)("img",{src:(0,r.A)("img/wxm-devices/wifi-m5-bundle/usb-flasher-1.png"),alt:"Launch Flasher Tool"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("ol",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"https://github.com/WeatherXM/wxm_m5_flasher/releases",children:"Download"})," and install the Flasher Tool for your OS"]}),"\nUnder Assets select:\n",(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Windows: ",(0,s.jsx)(n.code,{children:"weatherxm_m5_flasher_*.exe"})]}),"\n",(0,s.jsxs)("li",{children:["Linux: ",(0,s.jsx)(n.code,{children:"weatherxm_m5_flasher_*.deb"})]})]}),"\n",(0,s.jsx)("li",{children:"Open the Flasher Tool on your computer"})]})}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"If any device is found under the Serial port, temporarily unplug it before continuing."})})]})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 3: Connect your WXM-M5"})}),"\n",(0,s.jsxs)("div",{class:"explanation",children:[(0,s.jsx)("img",{src:(0,r.A)("img/wxm-devices/wifi-m5-bundle/usb-flasher-2.png"),alt:"Connect Your WXM-M5"}),(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Plug one end of the USB cable into your computer's USB port"}),(0,s.jsx)("li",{children:"Plug the other end of the USB cable into your WXM-M5. If your M5 was off, it will turn on automatically."})]})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 4: Select your WXM-M5"})}),"\n",(0,s.jsxs)("div",{class:"explanation",children:[(0,s.jsx)("img",{src:(0,r.A)("img/wxm-devices/wifi-m5-bundle/usb-flasher-3.png"),alt:"Select Your WXM-M5"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:'In the Flasher Tool under "serial port", you can see all the devices connected to the virtual serial ports on your computer. Confirm that the port of your M5 is selected. Usually the device with the largest suffix number is the one that was connected more recently.'}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Serial port name may differ depending on your OS."})})]})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 5: Start the Update Process"})}),"\n",(0,s.jsxs)("div",{class:"explanation",children:[(0,s.jsx)("img",{src:(0,r.A)("img/wxm-devices/wifi-m5-bundle/usb-flasher-4.png"),alt:"Start the Update Process"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:"Double-check that your WXM-M5 is connected to your computer via USB"}),(0,s.jsx)("li",{children:'Click on the "Update" button in the Flasher Tool'})]}),(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Do not disconnect the USB cable until the update is successfully completed"})})]})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 6: Wait for Completion"})}),"\n",(0,s.jsx)("p",{children:"The Flasher Tool will now update your WXM-M5's firmware. Please wait patiently for the process to finish."}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Do not disconnect the USB cable until the update is successfully completed"})}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("strong",{children:"Step 7: Verify the Update"})}),"\n",(0,s.jsx)("p",{children:"Once the update is complete, your WXM-M5 will restart automatically. You can verify the successful update by checking the firmware version on the WXM-M5's screen."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If your WXM-M5 did not restart automatically, press and hold the power button until it turns off and then power it back on."})}),"\n",(0,s.jsx)("h2",{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)("h3",{children:"Windows"}),"\n",(0,s.jsx)("p",{children:"The flasher tool runs on Windows 10/11. Windows 7 is not supported."}),"\n",(0,s.jsx)("p",{children:'When you run the tool, you will be greeted by the "Windows prevented an unrecognized application from running.". This is because the binary is not signed. Click More Info > Run Anyway to proceed.'}),"\n",(0,s.jsx)("h4",{children:"When I connect my M5 no ports appear."}),"\n",(0,s.jsxs)("p",{children:['First, check if your USB cable is not damaged. It is recommended to try another cable to get this out of the way. If your M5 still doesn\'t appear in the port list, open Device Manager and check under "Ports (COM & LPT)". If no devices appear in the list your cable is most likely damaged. If a device with an exclamation mark appears or is in any other kind of erroneous state, your computer most likely lacks the USB drivers. Download and install the drivers from the ',(0,s.jsx)("a",{href:"https://www.wch-ic.com/downloads/CH343SER_EXE.html",children:"USB chip manufacturers' website"}),"."]}),"\n",(0,s.jsx)("h4",{children:"I get an error about VCRUNTIMEXXX.dll missing"}),"\n",(0,s.jsxs)("p",{children:["Your windows installation is missing the MSVC runtime libraries. Download and install them from ",(0,s.jsx)("a",{href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022",children:"Microsoft's website."})," It is recommended to install both the x86 and x64 versions."]}),"\n",(0,s.jsx)("h3",{children:"Linux"}),"\n",(0,s.jsx)("p",{children:"Tested only on Debian based distributions."}),"\n",(0,s.jsx)("p",{children:"If you encounter issues during the flashing process, follow these steps:"}),"\n",(0,s.jsx)("ol",{children:(0,s.jsx)("li",{children:(0,s.jsxs)("p",{children:['If flashing fails immediately after pressing the "update" button, it may be due to insufficient privileges to access the serial port. In Debian-based distributions, run the following command to add your user to the appropriate group:\n',(0,s.jsx)("pre",{children:(0,s.jsx)("code",{class:"lang-bash",children:"sudo adduser $USER dialout"})}),"\nAfter running this command, log out and then log back in, and retry the update process. If the issue persists, try running the Flasher Tool with sudo:\n",(0,s.jsx)("pre",{children:(0,s.jsx)("code",{class:"lang-bash",children:"sudo /opt/wxm_m5_flasher/run.sh"})})]})})}),"\n",(0,s.jsxs)("p",{children:["If you have any further questions or encounter any issues during the update process, don't hesitate to reach out to our support team for assistance. We are here to help you keep your M5 up to date and running smoothly.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("strong",{children:" Be sure to include the contents of your log file for further analysis."}),' To access the log file, click "Log" in the top right corner of the Flasher Tool window.']})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);