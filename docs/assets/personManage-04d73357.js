import{_ as e}from"./back-9f3fbace.js";import{J as a}from"./JyTable-ee0f04c7.js";import{g as t,j as s,u as o,H as l}from"./chunk-vform-6b80d696.js";import{a as r}from"./authorityManagement-da68fda8.js";import{E as n}from"./chunk-element-plus-b8773542.js";import{aA as c,ay as i,be as d,aF as u,as as m,o as h,x as p,bj as b,p as g,aT as y,a$ as v,m as w,n as f,w as x,aw as j,at as k}from"./chunk-vue-0eb5cee7.js";import"./sangedian-856844bf.js";import"./Layout-d1d9ddbf.js";import"./searchForm-7d992d01.js";import"./ketanchude-51586196.js";import"./KDocumentTypeDialog-a877b983.js";import"./pagination-c0fecb51.js";import"./batch-f5c51482.js";import"./index-64730435.js";import"./chunk-ant-design-vue-bd7f8294.js";import"./chunk-@ant-design-icons-svg-8f5189a2.js";import"./chunk-@ant-design-icons-vue-ff9a333c.js";const B=[{prop:"userName",label:"姓名",sortable:!0,flex:!0,"min-width":150,show:!0},{prop:"accountNo",label:"账号",sortable:!0,"min-width":150,show:!0},{prop:"hostOrganName",label:"所属部门",sortable:!0,"min-width":150,show:!0},{prop:"userTitle",label:"职位",sortable:!0,"min-width":150,show:!0},{prop:"caozuo",label:"操作",fixed:"right",width:220,show:!0,rankDisplayData:[{name:"t-zgj-role.Removal"}]}],S=e=>(j("data-v-d7ae183b"),e=e(),k(),e),E={class:"PrintControlManagement-LibraryOfSeals"},T={class:"breadcrumb"},C=x(" 权限管理 "),I=x(" 人员管理 "),J={class:"title"},M={class:"title"},_={class:"title-desc"},D=x(" 人员管理"),A={class:"role"},U={class:"title-more"},q={class:"title-more-add"},z=x("+ 新增人员"),F=S((()=>g("div",{class:"title-more-down"},null,-1))),R={class:"header-div"},N=["src"],P={class:"content-div"},$=t({setup(t){const j=s(),k=o(),S=c(null),$=c({}),O=c(k.query.roleName),H=i({sealIds:"",msg:"",tabsShow:[],searchSelected:[],typeList:[],activeTab:"",JyElMessageBox:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""},type:"删除"},showToastDialog:{show:!1,header:{data:"",icon:"/src/assets/svg/common/warning.svg"},content:{data:""}},componentsSearchForm:{style:{lineStyle:{width:"calc(100% / 3)"},labelStyle:{width:"100px"}},data:[{id:"searchKey",label:"关键词",type:"input",inCommonUse:!0,defaultAttribute:{placeholder:"姓名/账号/职位"}},{id:"hostOrganId",label:"所属部门",type:"derivable",inCommonUse:!0,defaultAttribute:{placeholder:"+所属部门"}}],butData:[{id:"inquire",name:"查询",type:"click",defaultAttribute:{type:"primary"},style:{}},{id:"reset",name:"重置",type:"click",defaultAttribute:{},style:{}}]},componentsTable:{header:B,data:[],defaultAttribute:{stripe:!0,"header-cell-style":{background:"var(--jy-color-fill--3)"},"cell-style":({row:e,column:a,rowIndex:t,columnIndex:s})=>{if(""===a.property)return{color:"var(--jy-info-6)",cursor:"pointer"}}}},componentsPagination:{data:{amount:0,index:1,pageNumber:10},defaultAttribute:{layout:"prev, pager, next, jumper",total:0,"page-sizes":[10,50,100],background:!0}},componentsBatch:{selectionData:[],defaultAttribute:{disabled:!0},data:[{name:"批量移除"}]}}),L=()=>{H.activeTab="user",H.tabsShow=["user"],V.value=!0};$.value={roleId:k.query.roleId};const V=c(!1);let K="";const Q=(e,a,t,s)=>{"t-zgj-role.Removal"===t.name&&(H.JyElMessageBox.header.data="移除",H.JyElMessageBox.content.data="请问确定要移除吗？",H.JyElMessageBox.show=!0,H.JyElMessageBox.type="移除",K=a.userId)},W=()=>{j.go(-1)},X=()=>{r.roleDelete(`${$.value.roleId}/${K}`).then((e=>{n.success("操作成功"),H.JyElMessageBox.show=!1,S.value.reloadData()}))};d((()=>H.searchSelected),(e=>{if(e&&0!==e.length)if("user"===H.activeTab){const a=[];e.forEach((e=>{a.push(e.id)})),r.addRoleUser({roleId:$.value.roleId,userIds:a}).then((e=>{n.success("操作成功"),H.JyElMessageBox.show=!1,H.searchSelected=[],S.value.reloadData()}))}else H.activeTab}));const Z=(e,a)=>{const t=[];a.forEach((e=>{t.push(e.userId)})),r.batchDeleteRoleUser({roleId:$.value.roleId,userIds:t}).then((()=>{n.success("操作成功"),S.value.reloadData()}))},G=e=>{"hostOrganId"===e.id&&(H.activeTab="organ",H.tabsShow=["organ"],V.value=!0)};return(t,s)=>{const o=u("el-breadcrumb-item"),r=u("el-breadcrumb"),n=u("el-button"),c=u("JyElMessageBox");return m(),h("div",E,[p(a,{url:"/role/user/page",ref_key:"table",ref:S,hasTree:!1,breadcrumb:!0,needAutoRequest:!0,componentsSearchForm:v(H).componentsSearchForm,componentsTableHeader:v(H).componentsTable.header,componentsBatch:v(H).componentsBatch,queryParams:$.value,tableClick:"",onCellClick:t.cellClick,onCustomClick:Q,onClickBatchButton:Z,onClickElement:G},{breadcrumb:b((()=>[g("div",T,[p(r,{separator:"/"},{default:b((()=>[p(o,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.65)"}},{default:b((()=>[C])),_:1}),p(o,{style:{"--el-text-color-regular":"rgba(0, 0, 0, 0.25)"}},{default:b((()=>[I])),_:1})])),_:1})])])),title:b((()=>[g("div",J,[g("div",M,[g("div",_,[g("img",{class:"title-desc-img",src:e,alt:"",onClick:W}),D,g("span",A,"（"+y(O.value)+"）",1)])]),g("div",U,[g("div",q,[p(n,{type:"primary",onClick:L},{default:b((()=>[z])),_:1})]),F])])])),_:1},8,["componentsSearchForm","componentsTableHeader","componentsBatch","queryParams","onCellClick"]),V.value?(m(),w(v(l),{key:0,show:V.value,"onUpdate:show":s[0]||(s[0]=e=>V.value=e),searchSelected:v(H).searchSelected,"onUpdate:searchSelected":s[1]||(s[1]=e=>v(H).searchSelected=e),tabsShow:v(H).tabsShow,activeTab:v(H).activeTab},null,8,["show","searchSelected","tabsShow","activeTab"])):f("",!0),p(c,{modelValue:v(H).JyElMessageBox.show,"onUpdate:modelValue":s[3]||(s[3]=e=>v(H).JyElMessageBox.show=e),show:v(H).JyElMessageBox.show,defaultAttribute:{}},{header:b((()=>[g("div",R,[g("img",{src:v(H).JyElMessageBox.header.icon,alt:""},null,8,N),g("span",null,y(v(H).JyElMessageBox.header.data),1)])])),content:b((()=>[g("div",P,y(v(H).JyElMessageBox.content.data),1)])),footer:b((()=>[p(n,{type:"primary",onClick:X},{default:b((()=>[x(y(t.$t("t-zgj-operation.submit")),1)])),_:1}),p(n,{onClick:s[2]||(s[2]=e=>v(H).JyElMessageBox.show=!1)},{default:b((()=>[x(y(t.$t("t-zgj-operation.cancel")),1)])),_:1})])),_:1},8,["modelValue","show"])])}}},[["__scopeId","data-v-d7ae183b"]]);export{$ as default};