System.register(["./chunk-vue-legacy-ac482c0f.js","./chunk-vform-legacy-ec3e4e6b.js"],(function(e,t){"use strict";var o,a,r,n;return{setters:[e=>{o=e.aA,a=e.al,r=e.aq},e=>{n=e.B}],execute:function(){e("u",(e=>{const t=o(!1),n=o=>{e.value&&(e.value.contains(o.target)?t.value=!1:t.value=!0)};return a((()=>{document.addEventListener("click",n)})),r((()=>{document.removeEventListener("click",n)})),t}));const t=e("a",{});t.loginByAccount=e=>n({method:"POST",url:"/login/byAccount",data:e}),t.sendVerificationCode=e=>n({method:"POST",url:"/login/sendVerificationCode",data:e}),t.byVerifiableCode=e=>n({method:"POST",url:"/login/byVerifiableCode",data:e}),t.tenantInfoList=e=>n({method:"GET",url:"/user/tenantInfoList",params:e}),t.logOut=e=>n({method:"GET",url:"/logout",data:e}),t.chooseOrgan=e=>n({method:"GET",url:`/user/setLoginTenant/${e}`}),t.reqGet=e=>n({url:"/login/getCaptchaInfo/blockPuzzle",method:"GET",params:e}),t.reqChecked=e=>n({url:"/login/checkCaptcha",method:"POST",data:e}),t.qrCode=e=>n({url:"/login/qrCode",method:"GET",params:e}),t.qrCodeStatus=e=>n({url:"/login/qrCodeStatus",method:"GET",params:e}),t.scanQrCode=e=>n({url:"/scan/loginQrCode",method:"GET",params:e}),t.loginQrCode=e=>n({url:"/confirm/loginQrCode",method:"GET",params:e})}}}));