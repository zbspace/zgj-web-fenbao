import{c as l,a as n}from"./pagination.fa8deb41.js";import{c as d}from"./searchForm.978c9621.js";import{c as i}from"./Layout.aee589ac.js";import{r as s,o as u,c as p,b as a,d as o,f as r,u as e,l as c}from"./main.962a6924.js";const m=r("div",{class:"title"},"\u56FA\u4EF6\u5347\u7EA7\u65E5\u5FD7",-1),C={setup(b){const t=s({componentsSearchForm:{style:{lineStyle:{width:"30%"},labelStyle:{width:"100px"}},data:[{id:"name",label:"\u5173\u952E\u8BCD",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"\u8BF7\u8F93\u5165"}},{id:"picker",label:"\u9009\u62E9\u65F6\u95F4",type:"picker",inCommonUse:!0,defaultAttribute:{type:"daterange","start-placeholder":"Start date","end-placeholder":"End date"},style:{}},{id:"name",label:"xx",type:"select",inCommonUse:!0,defaultAttribute:{placeholder:"\u8BF7\u9009\u62E9"},options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"}]}],butData:[{id:"more",name:"\u5C55\u5F00",type:"unfold",defaultAttribute:{type:"primary"},style:{}},{id:"inquire",name:"\u67E5\u8BE2",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"\u91CD\u7F6E",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:[{width:50,type:"selection"},{prop:"0",label:"\u5E8F\u53F7",width:100,sortable:!0},{prop:"1",label:"xxx"}],data:[{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""},{1:"TradeCode21",2:"",3:"\u5F80\u5F80",4:"",5:"2022/10/30",6:""}],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--color-fill--1)"}}},componentsPagination:{data:{amount:400,index:1,pageNumber:80},defaultAttribute:{layout:"sizes, prev, pager, next, jumper",total:500,"page-sizes":[10,100,200,300,400],background:!0}}});return(y,f)=>(u(),p("div",null,[a(i,{Layout:"title,searchForm,table,pagination"},{title:o(()=>[m]),searchForm:o(()=>[r("div",null,[a(e(d),{data:e(t).componentsSearchForm.data,butData:e(t).componentsSearchForm.butData,style:c(e(t).componentsSearchForm.style)},null,8,["data","butData","style"])])]),table:o(()=>[r("div",null,[a(e(l),{defaultAttribute:e(t).componentsTable.defaultAttribute,data:e(t).componentsTable.data,header:e(t).componentsTable.header,isSelection:!0},null,8,["defaultAttribute","data","header"])])]),pagination:o(()=>[a(n,{data:e(t).componentsPagination.data,defaultAttribute:e(t).componentsPagination.defaultAttribute},null,8,["data","defaultAttribute"])]),_:1})]))}};export{C as default};
