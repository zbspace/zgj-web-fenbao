import{ay as e,aA as t,be as a,ag as n,aF as l,aG as o,as as s,o as r,x as c,bj as u,aE as i,p as d,a$ as p,ae as m,bl as b,m as f,n as h,aT as y,F as g,aD as k,aa as v,ac as w,bb as F,w as T,ab as S,aw as D,at as E}from"./chunk-vue-0eb5cee7.js";import{d as x}from"./sangedian-856844bf.js";import{c as C}from"./Layout-d1d9ddbf.js";import{_ as B}from"./searchForm-7d992d01.js";import{c as j}from"./pagination-c0fecb51.js";import{c as A}from"./batch-f5c51482.js";import{g as P,B as q,y as $}from"./chunk-vform-6b80d696.js";import{a as R}from"./index-64730435.js";const V=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],z=(()=>{if("undefined"==typeof document)return!1;const e=V[0],t={};for(const a of V){if((null==a?void 0:a[1])in document){for(const[n,l]of a.entries())t[e[n]]=l;return t}}return!1})(),_={change:z.fullscreenchange,error:z.fullscreenerror};let H={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const l=()=>{H.off("change",l),a()};H.on("change",l);const o=e[z.requestFullscreen](t);o instanceof Promise&&o.then(l).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!H.isFullscreen)return void e();const a=()=>{H.off("change",a),e()};H.on("change",a);const n=document[z.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>H.isFullscreen?H.exit():H.request(e,t),onchange(e){H.on("change",e)},onerror(e){H.on("error",e)},on(e,t){const a=_[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=_[e];a&&document.removeEventListener(a,t,!1)},raw:z};Object.defineProperties(H,{isFullscreen:{get:()=>Boolean(document[z.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[z.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[z.fullscreenEnabled])}}),z||(H={isEnabled:!1});const N=H,I={class:"components-table",id:"tableId"},Y={class:"batch"},L={key:0,class:"switch"},M={key:1},O={class:"diot diot-0"},G={class:"diot diot-1"},U=["index"],J={key:5,class:"rankDisplayData"},Q=(e=>(D("data-v-f53d4a4b"),e=e(),E(),e))((()=>d("span",{class:"el-dropdown-link"},[d("img",{class:"rankDisplayData-node",src:x,alt:""})],-1))),W={class:"pagination"},X=P({props:{url:{type:String,required:!0},componentsSearchForm:{type:Object},componentsTableHeader:{type:Object},componentsBatch:{type:Object},tableClick:{type:String},isSelection:{type:Boolean,default:!0},isNo:{type:Boolean,default:!0},queryParams:{type:Object},hasTree:{type:Boolean,default:!1},hasTabs:{type:Boolean,default:!1},method:{type:String,default:"GET"},needAutoRequest:{type:Boolean,default:!0},statusColoum:{type:String},openValue:{},breadcrumb:{type:Boolean,default:!1},computedData:{type:Array,default:()=>[]},handleApprovalStatus:{type:Boolean,default:!1}},emits:["cellClick","customClick","clickBatchButton","clickElement","getResult"],setup(D,{expose:E,emit:x}){const P=D,V=e({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}}},componentsTable:{data:[],headers:P.componentsTableHeader,defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:t,rowIndex:a,columnIndex:n})=>{if(t.property===P.tableClick)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0}}}),z=t(!1),_=t(null),H=t(null),X=t(null);a((()=>P.componentsTableHeader),(()=>{V.componentsTable.headers=P.componentsTableHeader}));const K=(e,t)=>{var a;return null==(a=e.statusList.find((a=>a.key===t[e.prop])))?void 0:a.label},Z=(e,t)=>{x("clickElement",e,t)},ee=t(!1),te=(e,t)=>{"refresh"!==e.name?"fullscreen"!==e.name?x("clickBatchButton",e,V.componentsBatch.selectionData):ae():pe()},ae=()=>{const e=document.getElementById("tableId");N.enabled||(N.isFullscreen?N.exit():N.request(e))};function ne(e){V.componentsTable.headers=e}function le(e,t,a,n){t.property===P.tableClick&&x("cellClick",e,t,a,n)}function oe(e){V.componentsBatch.selectionData=e,V.componentsBatch.selectionData.length>0?V.componentsBatch.defaultAttribute.disabled=!1:V.componentsBatch.defaultAttribute.disabled=!0}function se(e,t,a,n){x("customClick",e,t,a,n)}N.isEnabled&&N.on("change",(()=>{ee.value=N.isFullscreen}));const re=e=>{e&&"reset"!==e.id||(_.value.clearSort(),P.componentsSearchForm.data.forEach((e=>{"checkButton"===e.type?e.data.forEach((e=>{delete e.checked})):"checkbox"===e.type?e.checkbox.forEach((e=>{e.value=!1})):"derivable"===e.type||"dialog"===e.type?(e.options=[],e.values=e.defaultAttribute.multiple?[]:null):"scopeInput"===e.type?(e.startValue=null,e.endValue=null):delete e.value}))),pe()};function ce(e){H.value=e,pe()}const ue=e=>{V.componentsPagination.data.index=e,me()},ie=e=>{V.componentsPagination.data.pageNumber=e,pe()};function de(){return _.value.getSelectionRows()}function pe(e){S((()=>{e||(V.componentsPagination.data.index=1,V.componentsTable.data=[],V.componentsPagination.data.amount=0),me()}))}const me=()=>{z.value=!0;const e={};P.componentsSearchForm.data.forEach((t=>{"checkButton"===t.type?e[t.id]=t.data.filter((e=>e.checked)).map((e=>e.id)).join(","):"checkbox"===t.type?e[t.id]=t.checkbox[0].value?t.checkbox[0].value:null:"picker"===t.type?"daterange"===t.defaultAttribute.type&&t.value&&("array"===t.requestType?(e[t.startRequest?t.startRequest:"beginTime"]=t.value[0]+" 00:00:00",e[t.endRequest?t.endRequest:"endTime"]=t.value[1]+" 23:59:59"):e[t.id]=t.value[0]+" 00:00:00,"+t.value[1]+" 23:59:59"):"derivable"===t.type?t.defaultAttribute.multiple?e[t.requestParams]=t.values&&t.values.length?t.defaultAttribute.joinStr?t.values.join(t.defaultAttribute.joinStr):t.values:null:e[t.requestParams]=t.values:"scopeInput"===t.type?(e[t.startAttribute.id]=t.startValue,e[t.endAttribute.id]=t.endValue):"dialog"===t.type?e[t.id]=t.values||null:e[t.id]=t.value}));const t={current:V.componentsPagination.data.index,size:V.componentsPagination.data.pageNumber,pageNo:V.componentsPagination.data.index,pageSize:V.componentsPagination.data.pageNumber,sorts:H.value?H.value.prop+","+("ascending"===H.value.order?"asc":"desc"):"",...e,...P.queryParams};let a={};a="GET"===P.method?{params:t}:{data:t},q({method:P.method,url:P.url,...a}).then((async e=>{var t,a,n;if(V.componentsTable.data=(null==(t=e.data)?void 0:t.records)||(null==(n=null==(a=e.data)?void 0:a.data)?void 0:n.records)||[],V.componentsPagination.data.amount=0===e.data.total?e.data.total:e.data.total||e.data.data.total,V.componentsPagination.defaultAttribute.total=0===e.data.total?e.data.total:e.data.total||e.data.data.total,P.handleApprovalStatus){const e=await R.listApplyTypeTree({});V.componentsTable.data.forEach((t=>{const a=e.data.find((e=>Number(e.applyTypeId)===t.subType));t.subTypeName=a?a.applyTypeName:"",t.createTime=t.createTime&&$(t.createTime).format("YYYY-MM-DD HH:mm"),t.updateTime=t.updateTime&&$(t.updateTime).format("YYYY-MM-DD HH:mm")}))}z.value=!1,P.computedData.length&&P.computedData.forEach((e=>{V.componentsTable.data.forEach((t=>{t[e.computedData]?q({...e.request,params:{[e.computedData]:t[e.computedData]},hideError:!0}).then((a=>{switch(a.data.data.instanceStatus){case 1:t[e.prop]="审批中";break;case 2:t[e.prop]="已完成";break;case 3:t[e.prop]="拒绝";break;case 4:t[e.prop]="挂起";break;case 5:t[e.prop]="作废";break;default:t[e.prop]="未知"}}),(()=>{t[e.prop]="未知"})):t[e.prop]="未知"}))})),x("getResult",V.componentsTable.data)}),(()=>{z.value=!1}))},be=(e,t,a)=>{};return n((()=>{P.needAutoRequest&&pe()})),E({reloadData:pe,clickSubmit:re,getSelectionRows:de,setTableHeader:ne,reloadSearchForm:(e,t)=>{X.value.initFormData(e,t)},toggleFull:ae}),(e,t)=>{const a=l("el-table-column"),n=l("el-switch"),S=l("el-button"),D=l("el-dropdown-item"),E=l("el-dropdown-menu"),x=l("el-dropdown"),q=l("el-table"),$=o("loading");return s(),r("div",null,[c(p(C),{Layout:"title,searchForm,table,pagination,batch"+(P.hasTree?",tree":"")+(P.hasTabs?",tabs":"")+(P.breadcrumb?",breadcrumb":"")},{breadcrumb:u((()=>[i(e.$slots,"breadcrumb",{},void 0,!0)])),title:u((()=>[i(e.$slots,"title",{},void 0,!0)])),tabs:u((()=>[i(e.$slots,"tabs",{},void 0,!0)])),searchForm:u((()=>[d("div",null,[c(p(B),{ref_key:"searchForm",ref:X,data:P.componentsSearchForm.data,butData:P.componentsSearchForm.butData,style:m(p(V).componentsSearchForm.style),onClickSubmit:re,onReloadData:pe,onClickElement:Z},null,8,["data","butData","style"])])])),tree:u((()=>[i(e.$slots,"tree",{},void 0,!0)])),table:u((()=>[d("div",I,[d("div",Y,[c(p(A),{tableHeader:P.componentsTableHeader,data:P.componentsBatch?P.componentsBatch.data:[],defaultAttribute:p(V).componentsBatch.defaultAttribute,onClickBatchButton:te,onSetTableHeader:ne,isFullscreen:ee.value,"onUpdate:isFullscreen":ae},null,8,["tableHeader","data","defaultAttribute","isFullscreen"])]),b((s(),f(q,v(p(V).componentsTable.defaultAttribute,{ref_key:"table",ref:_,data:p(V).componentsTable.data,onSelectionChange:oe,onCellClick:le,onRowClick:be,onCustomClick:se,onSortChange:ce,onGetSelectionRows:de,style:{width:"100%"}}),{default:u((()=>[P.isSelection?(s(),f(a,{key:0,type:"selection",width:"50"})):h("",!0),P.isNo?(s(),f(a,{key:1,label:"序号",type:"index",width:"55",fixed:"left",align:"center"},{default:u((e=>[d("span",null,y((p(V).componentsPagination.data.index?(p(V).componentsPagination.data.index-1)*p(V).componentsPagination.data.pageNumber:0)+e.$index+1),1)])),_:1})):h("",!0),(s(!0),r(g,null,k(p(V).componentsTable.headers,((t,l)=>(s(),r(g,null,[!1!==t.show?(s(),f(a,v({key:0},t,{key:l,"show-overflow-tooltip":""}),{default:u((a=>["switch"==t.customDisplayType?(s(),r("div",L,[c(n,{modelValue:a.row.switchValue,"onUpdate:modelValue":e=>a.row.switchValue=e},null,8,["modelValue","onUpdate:modelValue"])])):h("",!0),"format"==t.customDisplayType?(s(),r("span",M,y(a.row[t.prop])+" "+y(t.unit),1)):h("",!0),"flag"===t.prop?(s(),r("div",{key:2,class:w(["flag-cell",t.align])},[b(d("div",O,null,512),[[F,a.row[P.statusColoum]===P.openValue]]),b(d("div",G,null,512),[[F,a.row[P.statusColoum]!==P.openValue]]),T(" "+y(a.row[P.statusColoum]===P.openValue?e.$t("t-zgj-Enable"):a.row[P.statusColoum]!==P.openValue?e.$t("t-zgj-dept.Deactivation"):a.row[t.prop]),1)],2)):h("",!0),"format"===t.type?(s(),r("div",{key:3,class:w(["flag-cell",t.align])},y(K(t,a.row)),3)):h("",!0),"custom"==t.customDisplayType?(s(),r("div",{key:4,class:"custom",index:a.$index},[i(e.$slots,"custom_"+t.prop,{value:a.row},void 0,!0)],8,U)):h("",!0),t.rankDisplayData&&t.rankDisplayData.length>0?(s(),r("div",J,[(s(!0),r(g,null,k(t.rankDisplayData.slice(0,4),((t,n)=>(s(),f(S,{key:n,type:"info",plain:"",onClick:e=>se(a.$index,a.row,t),link:"",text:""},{default:u((()=>[T(y("status"===t.name?a.row[P.statusColoum]!==P.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["onClick"])))),128)),t.rankDisplayData.length>4?(s(),f(S,{key:0,link:""},{default:u((()=>[c(x,null,{dropdown:u((()=>[c(E,null,{default:u((()=>[(s(!0),r(g,null,k(t.rankDisplayData.slice(4),((t,n)=>(s(),f(D,{key:n,onClick:e=>se(a.$index,a.row,t)},{default:u((()=>[T(y("status"===t.name?a.row[P.statusColoum]!==P.openValue?e.$t("t-zgj-Enable"):e.$t("t-zgj-seal.deactivated"):e.$t(t.name)),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),default:u((()=>[Q])),_:2},1024)])),_:2},1024)):h("",!0)])):h("",!0)])),_:2},1040)):h("",!0)],64)))),256))])),_:3},16,["data"])),[[$,z.value]]),d("div",W,[c(p(j),{data:p(V).componentsPagination.data,defaultAttribute:p(V).componentsPagination.defaultAttribute,onSizeChange:ie,onCurrentChange:ue},null,8,["data","defaultAttribute"])])])])),_:3},8,["Layout"])])}}},[["__scopeId","data-v-f53d4a4b"]]);export{X as J};