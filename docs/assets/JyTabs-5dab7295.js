/* empty css                                                               */import{g as a}from"./chunk-vform-6b80d696.js";import{ay as e,be as t,ag as n,al as s,aF as c,as as o,o as l,p as m,x as i,bj as d,F as p,aD as u,m as r,a$ as v,ac as b}from"./chunk-vue-0eb5cee7.js";const f={class:"components-tabs"},y=a({props:{refs:{type:String,default:""},type:{type:String,default:"0"},cancelBottomLine:{type:Boolean,default:!1},data:{type:Array,default:()=>[]},activeName:{type:String,default:""}},emits:["tab-change","getActiveName"],setup(a,{emit:y}){const g=a,_=e({activeName:"",data:[],cancelBottomLine:!1});function N(a,e){y("tab-change",_.activeName)}function B(){_.activeName=g.activeName,_.data=g.data,_.cancelBottomLine=g.cancelBottomLine}return t(g,((a,e)=>{B()})),n((()=>{B(),y("getActiveName",_.activeName)})),s((()=>{})),(a,e)=>{const t=c("el-tab-pane"),n=c("el-tabs");return o(),l("div",f,[m("div",{class:b(["ap-box",{cancelBottomLine:v(_).cancelBottomLine}])},[i(n,{modelValue:v(_).activeName,"onUpdate:modelValue":e[0]||(e[0]=a=>v(_).activeName=a),class:"demo-tabs",onTabChange:N},{default:d((()=>[(o(!0),l(p,null,u(v(_).data,((e,n)=>(o(),r(t,{label:a.$t(e.label),name:e.name,key:n},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])],2)])}}},[["__scopeId","data-v-5e06bfe2"]]);export{y as c};