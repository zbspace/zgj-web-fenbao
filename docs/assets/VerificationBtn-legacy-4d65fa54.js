System.register(["./chunk-vform-legacy-ec3e4e6b.js","./chunk-element-plus-legacy-93ba4a6a.js","./chunk-vue-legacy-ac482c0f.js"],(function(e,t){"use strict";var s,n,a,c,i,l,o,r,d,u,m,p,g,y=document.createElement("style");return y.textContent=".verification-btn .btn[data-v-ce2d93e9]{font-size:16px;color:#fafafa;width:150px;border-radius:4px;text-align:center;margin-left:10px}\n",document.head.appendChild(y),{setters:[e=>{s=e.g,n=e.I},e=>{a=e.E},e=>{c=e.ay,i=e.be,l=e.aF,o=e.as,r=e.o,d=e.x,u=e.bj,m=e.a$,p=e.aT,g=e.ae}],execute:function(){const t={class:"verification-btn login-input"},y={key:0},f={key:1},b={props:{customStyle:{type:Object,default:()=>({})},customClick:{type:Boolean,default:!1}},emits:"customClickFn",setup(e,{expose:s,emit:b}){const k=e,v=c({timer:60,sendMsg:!1});i((()=>n.global.locale),(()=>{}),{immediate:!0,deep:!0});const x=()=>{k.customClick?b("customClickFn"):C()},C=()=>{if(v.sendMsg)return;v.sendMsg=!0,a.success("短信发送成功");const e=setInterval((()=>{v.timer<=0&&(clearInterval(e),v.sendMsg=!1,v.timer=60),v.timer--}),1e3)};return s({countDown:C}),(e,s)=>{const n=l("el-button");return o(),r("div",t,[d(n,{onClick:x,type:"primary",size:"large",class:"btn",style:g(k.customStyle),disabled:m(v).sendMsg},{default:u((()=>[m(v).sendMsg?(o(),r("span",f,p(m(v).timer)+p(e.$t("t-send-again")),1)):(o(),r("span",y,p(e.$t("t-zgj-getCode")),1))])),_:1},8,["style","disabled"])])}}};e("V",s(b,[["__scopeId","data-v-ce2d93e9"]]))}}}));