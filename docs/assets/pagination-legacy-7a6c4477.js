System.register(["./chunk-vform-legacy-ec3e4e6b.js","./chunk-vue-legacy-ac482c0f.js"],(function(t,a){"use strict";var e,n,o,i,r,c,p,d,s,u,l,g,f,b,m=document.createElement("style");return m.textContent='@charset "UTF-8";.components-pagination[data-v-6ce7ff5d]{margin:0%;display:flex;justify-content:space-between;align-items:center;width:100%}.components-pagination .ap-desc[data-v-6ce7ff5d]{display:flex;align-items:center}.components-pagination .ap-desc .ap-desc-text[data-v-6ce7ff5d]{margin-right:.5rem;color:var(--jy-color-text-1)}.components-pagination[data-v-6ce7ff5d] .el-pagination.is-background .el-pager li:not(.is-disabled).is-active{background-color:var(--jy-primary-6);color:var(--jy-in-common-use-1)}.components-pagination[data-v-6ce7ff5d] .el-pagination.is-background .el-pager li{background-color:rgba(0,0,0,0)}.components-pagination[data-v-6ce7ff5d] .el-pagination.is-background .el-pager li:hover{background-color:var(--jy-color-fill--2)}.components-pagination[data-v-6ce7ff5d] .el-pagination.is-background .btn-prev:disabled{background-color:rgba(0,0,0,0)}.components-pagination[data-v-6ce7ff5d] .el-pagination.is-background .btn-next,.components-pagination[data-v-6ce7ff5d] .el-pagination.is-background .btn-prev,.components-pagination[data-v-6ce7ff5d] .components-pagination[data-v-26def509] .ap-box .el-pagination.is-background .btn-prev{background-color:rgba(0,0,0,0)}.components-pagination[data-v-6ce7ff5d] .el-pagination button:hover{color:var(--jy-primary-6)}\n',document.head.appendChild(m),{setters:[t=>{e=t.g},t=>{n=t.ay,o=t.ag,i=t.al,r=t.aF,c=t.as,p=t.o,d=t.p,s=t.aT,u=t.x,l=t.bj,g=t.aE,f=t.aa,b=t.a$}],execute:function(){const a={class:"components-pagination"},m={class:"ap-desc"},v={class:"ap-desc-text"},y={class:"ap-box"};t("c",e({props:{refs:{type:String,default:""},type:{type:String,default:"0"},data:{type:Object,default:()=>({})},defaultAttribute:{type:Object,default:()=>({})}},emits:["size-change","current-change"],setup(t,{emit:e}){const h=t,j=n({props:{defaultAttribute:{},sizeAttribute:{}}});function k(t){e("size-change",t)}function x(t){e("current-change",t)}return o((()=>{!function(){const t=["page-size","default-page-size","total","page-count","pager-count","current-page","default-current-page"];j.props.defaultAttribute=h.defaultAttribute;const a={};for(const e in j.props.defaultAttribute)a[e]="layout"===e?"sizes":h.defaultAttribute[e],"[object String]"===Object.prototype.toString.call(j.props.defaultAttribute[e])?t.indexOf(e)>-1&&(j.props.defaultAttribute[e]=parseFloat(j.props.defaultAttribute[e])):Object.prototype.toString.call(j.props.defaultAttribute[e]);j.props.sizeAttribute=a}()})),i((()=>{})),(t,e)=>{const n=r("el-pagination");return c(),p("div",a,[d("div",m,[d("div",v," 共 "+s(h.data.amount)+" 条记录 第 "+s(h.data.index)+" / "+s(Math.ceil(h.data.amount/h.data.pageNumber)||1)+" 页 ",1),d("div",null,[u(n,f(b(j).props.sizeAttribute,{onSizeChange:k,onCurrentChange:x}),{default:l((()=>[g(t.$slots,"default",{},void 0,!0)])),_:3},16)])]),d("div",y,[u(n,f({"page-size":h.data.pageNumber,"current-page":h.data.index,total:h.data.amount},b(j).props.defaultAttribute,{onSizeChange:k,onCurrentChange:x}),{default:l((()=>[g(t.$slots,"default",{},void 0,!0)])),_:3},16,["page-size","current-page","total"])])])}}},[["__scopeId","data-v-6ce7ff5d"]]))}}}));