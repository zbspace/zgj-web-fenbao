System.register(["./chunk-vform-legacy-ec3e4e6b.js"],(function(e,a){"use strict";var t;return{setters:[e=>{t=e.B}],execute:function(){const a=e("a",{});a.rulePage=e=>t({method:"GET",url:"/biz/rule/page",params:e}),a.addOrUpdate=e=>t({method:"POST",url:"/biz/rule/addOrUpdate",data:e}),a.ruleView=e=>t({method:"GET",url:`/biz/rule/view/${e}`}),a.ruleEnable=e=>t({method:"POST",url:"/biz/rule/enable",data:e}),a.ruleCopy=e=>t({method:"POST",url:"/biz/rule/copy",data:e}),a.ruleBatchDelete=e=>t({method:"POST",url:"/biz/rule/batchDelete",data:e}),a.ruleBatchEnable=e=>t({method:"POST",url:"/biz/rule/batchEnable",data:e}),a.ruleDisable=e=>t({method:"POST",url:"/biz/rule/enable",data:e}),a.ruleBatchDisable=e=>t({method:"POST",url:"/biz/rule/batchDisable",data:e}),a.relationContractType=e=>t({method:"POST",url:"/biz/rule/relationContractType",data:e})}}}));