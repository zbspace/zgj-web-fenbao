import{_ as w}from"./gengduo-caozuo.a30508f6.js";import{c as k,a as A}from"./pagination.fa8deb41.js";import{c as D}from"./searchForm.978c9621.js";import{c as V}from"./Layout.aee589ac.js";import{c as C}from"./tree.287d71d8.js";import{c as S}from"./documentsDetails.0de713a8.js";import{_ as x,E as h,a as u,o as y,c as v,b as l,d as a,a2 as F,i as p,r as T,f as o,u as t,l as I,p as U,j}from"./main.962a6924.js";/* empty css                                                             */import"./tabs.b9c0b32c.js";const B=p("\u53D6\u6D88"),N=p("\u786E\u5B9A "),O={props:{modelValue:{type:Boolean,default:!1}},emits:["getFromJson","update: modelValue"],setup(r,{emit:i}){const e=h(null),m=()=>{i("update:modelValue",!1)},b=()=>{i("update:modelValue",!1),console.log("vform--->",e.value.getFormJson())};return(f,d)=>{const n=u("jy-vform"),s=u("el-button"),c=u("el-dialog");return y(),v("div",null,[l(c,{modelValue:r.modelValue,"onUpdate:modelValue":d[0]||(d[0]=g=>F(modelValue)?modelValue.value=g:null),title:"add form",fullscreen:"",class:"add-form-dialog"},{footer:a(()=>[l(s,{onClick:m},{default:a(()=>[B]),_:1}),l(s,{type:"primary",onClick:b},{default:a(()=>[N]),_:1})]),default:a(()=>[l(n,{ref_key:"vformRef",ref:e},null,512)]),_:1},8,["modelValue"])])}}},P=x(O,[["__scopeId","data-v-10c8ca10"]]);const _=r=>(U("data-v-71df99e3"),r=r(),j(),r),z={class:"title"},E=_(()=>o("div",null,"\u8868\u5355\u7BA1\u7406",-1)),R=p("+ \u65B0\u5EFA"),$=_(()=>o("img",{class:"button-icon",src:w,alt:"",srcset:""},null,-1)),J=_(()=>o("span",null,"\u66F4\u591A\u64CD\u4F5C",-1)),L={class:"batch"},q=p("\u6279\u91CF\u64CD\u4F5C"),G={class:"ap-box"},H={setup(r){const i=h(!1),e=T({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"\u5173\u952E\u8BCD",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"\u8BF7\u8F93\u5165"}},{id:"picker",label:"\u9009\u62E9\u65F6\u95F4",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"Start date","end-placeholder":"End date"},style:{}},{id:"name",label:"\u72B6\u6001",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"\u8BF7\u9009\u62E9"},options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"}]}],butData:[{id:"more",name:"\u5C55\u5F00",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"\u67E5\u8BE2",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"\u91CD\u7F6E",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{width:50,type:"selection"},{prop:"0",label:"\u5E8F\u53F7",width:80,sortable:!0},{prop:"1",width:100,label:"\u8868\u5355\u540D\u79F0"},{prop:"2",width:100,label:"\u4E1A\u52A1\u7C7B\u578B"},{prop:"3",width:100,label:"\u7528\u5370\u7C7B\u578B"},{prop:"4",width:100,label:"\u6587\u4EF6\u7C7B\u578B"},{prop:"5",width:100,label:"\u72B6\u6001"},{prop:"6",width:100,label:"\u521B\u5EFA\u4EBA"},{prop:"7",width:200,label:"\u66F4\u65B0\u65F6\u95F4"},{prop:"8",label:"\u64CD\u4F5C",rankDisplayData:[{name:"\u4FEE\u6539"},{name:"\u5220\u9664"},{name:"\u542F\u7528"},{name:"\u590D\u5236"}]}],data:[{1:"xxxxxx",2:"\u7528\u5370\u7533\u8BF7",3:"\u7535\u5B50\u7B7E\u7AE0",4:"\u6587\u4EF6\u7C7B\u578B",5:"\u7981\u7528",6:"xxx",7:"2022/10/30  15:00:00"},{1:"xxxxxx",2:"\u7528\u5370\u7533\u8BF7",3:"\u7535\u5B50\u7B7E\u7AE0",4:"\u6587\u4EF6\u7C7B\u578B",5:"\u7981\u7528",6:"xxx",7:"2022/10/30  15:00:00"},{1:"xxxxxx",2:"\u7528\u5370\u7533\u8BF7",3:"\u7535\u5B50\u7B7E\u7AE0",4:"\u6587\u4EF6\u7C7B\u578B",5:"\u7981\u7528",6:"xxx",7:"2022/10/30  15:00:00"},{1:"xxxxxx",2:"\u7528\u5370\u7533\u8BF7",3:"\u7535\u5B50\u7B7E\u7AE0",4:"\u6587\u4EF6\u7C7B\u578B",5:"\u7981\u7528",6:"xxx",7:"2022/10/30  15:00:00"}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--color-fill--1)"},"cell-style":({row:d,column:n,rowIndex:s,columnIndex:c})=>{if(n.property=="2")return{color:"var(--Info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"sizes, prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}},componentsTree:{data:[{label:"\u7528\u5370\u7533\u8BF7",children:[{label:"\u7528\u5370\u7533\u8BF7"},{label:"\u8F6C\u529E\u7533\u8BF7"},{label:"\u91CD\u7F6E\u7528\u5370\u7533\u8BF7"}]},{label:"\u5370\u7AE0\u7533\u8BF7",children:[{label:"\u523B\u7AE0\u7533\u8BF7"},{label:"\u505C\u7528\u7533\u8BF7"},{label:"\u542F\u7528\u7533\u8BF7"},{label:"\u9500\u6BC1\u7533\u8BF7"},{label:"\u53D8\u66F4\u7533\u8BF7"},{label:"\u6362\u7AE0\u7533\u8BF7"}]}],defaultAttribute:{"check-on-click-node":!0,"show-checkbox":!1,"default-expand-all":!0,"expand-on-click-node":!1,"check-strictly":!0}},componentsDocumentsDetails:{show:!1,visible:[{label:"\u8868\u5355\u8BE6\u60C5",name:"Form-Details"},{label:"\u6D41\u7A0B\u8BB0\u5F55",name:"operating-record"}]}});function m(d,n,s,c){console.log(d,n,s,c),n.property=="2"&&(e.componentsDocumentsDetails.show=!0)}function b(){e.componentsDocumentsDetails.show=!1}function f(){i.value=!0}return(d,n)=>{const s=u("el-button");return y(),v("div",null,[l(V,{Layout:"title,searchForm,table,pagination,tree,batch"},{title:a(()=>[o("div",z,[E,o("div",null,[l(s,{type:"primary",onClick:f},{default:a(()=>[R]),_:1}),l(s,null,{default:a(()=>[$,J]),_:1})])])]),searchForm:a(()=>[o("div",null,[l(t(D),{data:t(e).componentsSearchForm.data,butData:t(e).componentsSearchForm.butData,style:I(t(e).componentsSearchForm.style)},null,8,["data","butData","style"])])]),batch:a(()=>[o("div",L,[l(s,null,{default:a(()=>[q]),_:1})])]),tree:a(()=>[o("div",null,[l(t(C),{data:t(e).componentsTree.data,defaultAttribute:t(e).componentsTree.defaultAttribute},null,8,["data","defaultAttribute"])])]),table:a(()=>[o("div",null,[l(t(k),{defaultAttribute:t(e).componentsTable.defaultAttribute,data:t(e).componentsTable.data,header:t(e).componentsTable.header,isSelection:!0,onCellClick:m},null,8,["defaultAttribute","data","header"])])]),pagination:a(()=>[l(A,{data:t(e).componentsPagination.data,defaultAttribute:t(e).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])]),_:1}),o("div",G,[l(S,{show:t(e).componentsDocumentsDetails.show,visible:t(e).componentsDocumentsDetails.visible,onClickClose:b},null,8,["show","visible"])]),l(t(P),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=c=>i.value=c)},null,8,["modelValue"])])}}},le=x(H,[["__scopeId","data-v-71df99e3"]]);export{le as default};
