import{d as a}from"./sangedian-856844bf.js";import{g as e}from"./chunk-vform-6b80d696.js";import{aA as t,ag as l,al as n,aF as o,aG as s,as as i,o as c,bl as u,m as d,bj as r,n as p,p as f,aT as m,F as y,aD as w,aa as g,u as k,x as D,aE as h,w as v,aw as b,at as x}from"./chunk-vue-0eb5cee7.js";const S={class:"components-table"},C={class:"switch"},$=["index"],j={class:"rankDisplayData"},_=["onClick"],V={key:0,class:"rankDisplayData-more"},A=(a=>(b("data-v-4455e27a"),a=a(),x(),a))((()=>f("span",{class:"el-dropdown-link"},[f("img",{class:"rankDisplayData-node",src:a,alt:""})],-1))),R=e({props:{refs:{type:String,default:""},type:{type:String,default:"0"},loading:{type:Boolean,default:!1},header:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]},isSelection:{type:Boolean,default:!1},isNo:{type:Boolean,default:!0},defaultAttribute:{type:Object,default:()=>({})},paginationData:{type:Object,default:()=>({})},statusColoum:{type:String},openValue:{}},emits:["select","select-all","selection-change","cell-click","sort-change","row-click","custom-click"],setup(a,{expose:e,emit:b}){const x=a;e({clearSorts:function(){R.value.clearSort()},getSelectionRows:O});const R=t(null);function z(a,e){b("select",a,e)}function T(a){b("select-all",a)}function B(a){b("selection-change",a)}function E(a,e,t,l){b("cell-click",a,e,t,l)}function N(a){b("sort-change",a)}function F(a,e,t){b("row-click",a,e,t)}function G(a,e,t){b("custom-click",a,e,t)}function O(){return R.value.getSelectionRows()}return l((()=>{})),n((()=>{})),(e,t)=>{const l=o("el-table-column"),n=o("el-switch"),b=o("el-dropdown-item"),U=o("el-dropdown-menu"),I=o("el-dropdown"),X=o("el-table"),q=s("loading");return i(),c("div",S,[u((i(),d(X,g(x.defaultAttribute,{ref_key:"tableRefs",ref:R,data:x.data,style:{width:"100%"},"max-height":"600",onSelect:z,onSelectAll:T,onSelectionChange:B,onCellClick:E,onRowClick:F,onSortChange:N,class:"ap-table",onGetSelectionRows:O}),{default:r((()=>[a.isSelection?(i(),d(l,{key:0,type:"selection",width:"50"})):p("",!0),a.isNo?(i(),d(l,{key:1,label:"序号",type:"index",width:"55",fixed:"left",align:"center"},{default:r((a=>[f("span",null,m((x.paginationData.index?(x.paginationData.index-1)*x.paginationData.pageNumber:0)+a.$index+1),1)])),_:1})):p("",!0),(i(!0),c(y,null,w(x.header,((a,t)=>(i(),c(y,null,[!1!==a.show?(i(),d(l,g({key:0},a,{key:t}),k({_:2},["switch"==a.customDisplayType?{name:"default",fn:r((a=>[f("div",C,[D(n,{modelValue:a.row.switchValue,"onUpdate:modelValue":e=>a.row.switchValue=e},null,8,["modelValue","onUpdate:modelValue"])])]))}:void 0,"format"==a.customDisplayType?{name:"default",fn:r((e=>[f("span",null,m(e.row[a.prop])+" "+m(a.unit),1)]))}:void 0,"flag"==a.prop?{name:"default",fn:r((e=>[f("span",null,m("1"===e.row[a.prop]?"正常":"0"===e.row[a.prop]?"停用":e.row[a.prop]),1)]))}:void 0,"custom"==a.customDisplayType?{name:"default",fn:r((t=>[f("div",{class:"custom",index:t.$index},[h(e.$slots,"custom_"+a.prop,{value:t.row[a.prop]},void 0,!0)],8,$)]))}:void 0,a.rankDisplayData&&a.rankDisplayData.length>0?{name:"default",fn:r((t=>[f("div",j,[(i(!0),c(y,null,w(a.rankDisplayData.slice(0,4),((a,l)=>(i(),c("div",{class:"rankDisplayData-node",key:l,onClick:e=>G(t.$index,t.row,a)},[f("span",null,m("status"===a.name?t.row[x.statusColoum]!==x.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(a.name)),1)],8,_)))),128)),a.rankDisplayData.length>4?(i(),c("div",V,[D(I,null,{dropdown:r((()=>[D(U,null,{default:r((()=>[(i(!0),c(y,null,w(a.rankDisplayData.slice(4),((a,l)=>(i(),d(b,{key:l,onClick:e=>G(t.$index,t.row,a)},{default:r((()=>[v(m("status"===a.name?t.row[x.statusColoum]!==x.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(a.name)),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),default:r((()=>[A])),_:2},1024)])):p("",!0)])]))}:void 0]),1040)):p("",!0)],64)))),256))])),_:3},16,["data"])),[[q,a.loading]])])}}},[["__scopeId","data-v-4455e27a"]]);export{R as c};