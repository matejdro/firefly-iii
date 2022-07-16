"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[7956],{7956:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Q});var r=t(9835),o=t(6970);const a={class:"row q-mx-md"},l={class:"col-12"},i={class:"row q-mx-md q-mt-md"},n={class:"col-12"},u={class:"text-h6"},d={class:"row"},m={class:"col-12 q-mb-xs"},c={class:"row"},b={class:"col-12 q-mb-xs"},h={class:"row q-mx-md"},p={class:"col-12"},f={class:"row"},w={class:"col-12 text-right"},g={class:"row"},X={class:"col-12 text-right"},_=(0,r._)("br",null,null,-1);function v(e,s,t,v,q,x){const E=(0,r.up)("q-btn"),k=(0,r.up)("q-banner"),y=(0,r.up)("q-card-section"),V=(0,r.up)("q-input"),C=(0,r.up)("q-card"),I=(0,r.up)("q-checkbox"),R=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(R,null,{default:(0,r.w5)((()=>[(0,r._)("div",a,[(0,r._)("div",l,[""!==q.errorMessage?((0,r.wg)(),(0,r.j4)(k,{key:0,"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:(0,r.w5)((()=>[(0,r.Wm)(E,{flat:"",onClick:x.dismissBanner,label:"Dismiss"},null,8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(q.errorMessage)+" ",1)])),_:1})):(0,r.kq)("",!0)])]),(0,r._)("div",i,[(0,r._)("div",n,[(0,r.Wm)(C,{bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(y,null,{default:(0,r.w5)((()=>[(0,r._)("div",u,"Info for "+(0,o.zw)(e.$route.params.type)+" "+(0,o.zw)(e.index),1)])),_:1}),(0,r.Wm)(y,null,{default:(0,r.w5)((()=>[(0,r._)("div",d,[(0,r._)("div",m,[(0,r.Wm)(V,{"error-message":q.submissionErrors.name,error:q.hasSubmissionErrors.name,"bottom-slots":"",disable:x.disabledInput,type:"text",clearable:"",modelValue:q.name,"onUpdate:modelValue":s[0]||(s[0]=e=>q.name=e),label:e.$t("form.name"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])]),(0,r._)("div",c,[(0,r._)("div",b,[(0,r.Wm)(V,{"error-message":q.submissionErrors.iban,error:q.hasSubmissionErrors.iban,mask:"AA## XXXX XXXX XXXX XXXX XXXX XXXX XXXX XX","bottom-slots":"",disable:x.disabledInput,type:"text",clearable:"",modelValue:q.iban,"onUpdate:modelValue":s[1]||(s[1]=e=>q.iban=e),label:e.$t("form.iban"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])])])),_:1})])),_:1})])]),(0,r._)("div",h,[(0,r._)("div",p,[(0,r.Wm)(C,{class:"q-mt-xs"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,null,{default:(0,r.w5)((()=>[(0,r._)("div",f,[(0,r._)("div",w,[(0,r.Wm)(E,{disable:x.disabledInput,color:"primary",label:"Submit",onClick:x.submitAccount},null,8,["disable","onClick"])])]),(0,r._)("div",g,[(0,r._)("div",X,[(0,r.Wm)(I,{disable:x.disabledInput,modelValue:q.doReturnHere,"onUpdate:modelValue":s[2]||(s[2]=e=>q.doReturnHere=e),"left-label":"",label:"Return here to create another one"},null,8,["disable","modelValue"]),_,(0,r.Wm)(I,{modelValue:q.doResetForm,"onUpdate:modelValue":s[3]||(s[3]=e=>q.doResetForm=e),"left-label":"",disable:!q.doReturnHere||x.disabledInput,label:"Reset form after submission"},null,8,["modelValue","disable"])])])])),_:1})])),_:1})])])])),_:1})}var q=t(1138);const x={name:"Create",data(){return{submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",type:"",name:"",iban:""}},computed:{disabledInput:function(){return this.submitting}},created(){this.resetForm(),this.type=this.$route.params.type},methods:{resetForm:function(){this.name="",this.iban="",this.resetErrors()},resetErrors:function(){this.submissionErrors={name:"",iban:""},this.hasSubmissionErrors={name:!1,iban:!1}},submitAccount:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const e=this.buildAccount();let s=new q.Z;s.post(e).catch(this.processErrors).then(this.processSuccess)},buildAccount:function(){let e={name:this.name,iban:this.iban,type:this.type};return"asset"===this.type&&(e.account_role="defaultAsset"),e},dismissBanner:function(){this.errorMessage=""},processSuccess:function(e){if(!e)return;this.submitting=!1;let s={level:"success",text:"I am new account lol",show:!0,action:{show:!0,text:"Go to account",link:{name:"accounts.show",params:{id:parseInt(e.data.data.id)}}}};this.$q.localStorage.set("flash",s),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(e){if(e.response){let s=e.response.data;this.errorMessage=s.message,console.log(s);for(let e in s.errors)s.errors.hasOwnProperty(e)&&(this.submissionErrors[e]=s.errors[e][0],this.hasSubmissionErrors[e]=!0)}this.submitting=!1}}};var E=t(1639),k=t(9885),y=t(7128),V=t(8879),C=t(4458),I=t(3190),R=t(6611),S=t(1221),W=t(9984),Z=t.n(W);const A=(0,E.Z)(x,[["render",v]]),Q=A;Z()(x,"components",{QPage:k.Z,QBanner:y.Z,QBtn:V.Z,QCard:C.Z,QCardSection:I.Z,QInput:R.Z,QCheckbox:S.Z})}}]);