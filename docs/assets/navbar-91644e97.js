import{B as e}from"./chunk-vform-6b80d696.js";const a={getUserInfo:a=>e({method:"GET",url:"/user/getUserInfo",params:a}),sendChangeMobileVerificationCode:a=>e({method:"POST",url:"/user/sendChangeMobileVerificationCode",data:a}),changeMobile:a=>e({method:"POST",url:"/user/changeMobile",data:a}),changeEmail:a=>e({method:"GET",url:`/user/changeEmail/${a}`})};a.changeMobile=a=>e({method:"POST",url:"/user/changePassword",data:a});export{a};