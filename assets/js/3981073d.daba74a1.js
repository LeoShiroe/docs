"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[456],{1869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(4848),s=a(8453);a(8189);const o={id:"reward-boosts",title:"Reward Boosts",sidebar_label:"Reward Boosts",slug:"/project/reward-boosts"},n=void 0,i={id:"rewards/reward-boosts",title:"Reward Boosts",description:"Overview",source:"@site/docs/rewards/reward-boosts.mdx",sourceDirName:"rewards",slug:"/project/reward-boosts",permalink:"/project/reward-boosts",draft:!1,unlisted:!1,editUrl:"https://github.com/WeatherXM/docs/blob/main/docs/rewards/reward-boosts.mdx",tags:[],version:"current",frontMatter:{id:"reward-boosts",title:"Reward Boosts",sidebar_label:"Reward Boosts",slug:"/project/reward-boosts"},sidebar:"docs",previous:{title:"Hardware Class",permalink:"/project/hardware-class"},next:{title:"Troubleshooting",permalink:"/project/rewards-troubleshooting"}},d={},l=[{value:"Overview",id:"overview",level:3},{value:"Beta Rewards",id:"beta-rewards",level:3},{value:"Calculation:",id:"calculation",level:4},{value:"Cell Boost",id:"cell-boost",level:3},{value:"Examples of reward programs that may be implemented using <strong>Rewards Boost</strong>, in the near future are:",id:"examples-of-reward-programs-that-may-be-implemented-using-rewards-boost-in-the-near-future-are",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Reward boosts"})," are additional rewards given to stations that contribute weather data during daily distribution, in addition to the ",(0,r.jsx)(t.a,{href:"/reward-mechanism#daily-rewards-calculation-process",children:(0,r.jsx)(t.strong,{children:"base rewards"})}),". Learn more about the daily rewards in the ",(0,r.jsx)(t.a,{href:"/reward-mechanism",children:"Reward Mechanism (RM) "})," section."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Reward Boosts"})," reward stations with extra $WXM tokens for meeting specific criteria."]}),"\n",(0,r.jsxs)(t.p,{children:["So far the following ",(0,r.jsx)(t.strong,{children:"Reward Boosts"})," are sheduled to be implemented:"]}),"\n",(0,r.jsx)(t.h3,{id:"beta-rewards",children:"Beta Rewards"}),"\n",(0,r.jsxs)(t.p,{children:["According to the ",(0,r.jsx)(t.a,{href:"https://weatherxm.network/docs/wxm-token.html#token-allocation",children:"Token Allocation table"}),', 3M $WXM are reserved to reward stations that participated to the network before the Mainnet Launch Day ("Beta period").']}),"\n",(0,r.jsx)(t.p,{children:"Beta rewards distribution will last 425 days."}),"\n",(0,r.jsx)(t.h4,{id:"calculation",children:"Calculation:"}),"\n",(0,r.jsx)(t.p,{children:"The following calculations will take place for each station, the day before the Mainnet Launch:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RewardableBetaHours[s]"}),":\nThis is the total number of hours the station provided valid data during the Beta period.\nA rewardable hour is an hour during which the station sent at least one valid weather data point."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"StationBetaRewards[s] = 3000000 * RewardableBetaHours[s]/Sum(RewardableBetaHours of all stations)"}),":\nThis is the percentage of the 3M tokens that correspond to the rewardable hours the station provided."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DailyBetaRewards[s] = StationBetaRewards[s]/365"}),": This is the beta rewards allocated daily to this station."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Each user who has a station eligible for beta rewards, must have a wallet defined to be part of the Beta Rewards allocation. Learn ",(0,r.jsx)(t.a,{href:"/wallet/add-edit-wallet-address",children:"how to add or edit a wallet address"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The Beta Rewards allocation is managed by the ",(0,r.jsx)(t.a,{href:"https://weatherxm.network",children:"WeatherXM Network"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"cell-boost",children:"Cell Boost"}),"\n",(0,r.jsx)(t.p,{children:"Cell Boost is a mechanism that can be used to incentivize waether stations deployments on specific cells/areas of interest."}),"\n",(0,r.jsxs)(t.h3,{id:"examples-of-reward-programs-that-may-be-implemented-using-rewards-boost-in-the-near-future-are",children:["Examples of reward programs that may be implemented using ",(0,r.jsx)(t.strong,{children:"Rewards Boost"}),", in the near future are:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Backfill of rewards that were not allocated to certain devices due to malfunctions in the ",(0,r.jsx)(t.a,{href:"/project/quality-of-data",children:"Quality of Data (QoD) mechanism"})," or ",(0,r.jsx)(t.a,{href:"/project/proof-of-location",children:"Proof of Location (PoL) mechanism"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Public Goods Funding, for devices that are deployed and contribute to the network in a humanitarian way, such as providing data in an underserved area or during a specific time."}),"\n",(0,r.jsx)(t.li,{children:"Devices that contribute to the network during a specific event, such as a natural disaster, may receive a boost in rewards."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Reward boosts"})," is a mechanism that can be used to incentivize specific behavior from devices. It is a flexible mechanism that can be used to incentivize any behavior that is beneficial to the network."]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["All the above are ",(0,r.jsx)(t.strong,{children:"examples"})," of reward programs that may be implemented."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>i});var r=a(6540);const s={},o=r.createContext(s);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);