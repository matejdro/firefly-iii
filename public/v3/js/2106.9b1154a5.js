"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[2106],{2106:(e,s,t)=>{t.r(s),t.d(s,{default:()=>D});var r=t(9835),a=t(6970);const i={class:"row q-mx-md"},o={class:"col-12"},l={class:"row q-mx-md q-mt-md"},n={class:"col-12"},u={class:"text-h6"},m={class:"row"},d={class:"col-12 q-mb-xs"},c={class:"row"},b={class:"col-12 q-mb-xs"},p={class:"row"},h={class:"col-6 q-mb-xs q-pr-xs"},_={class:"col-6 q-mb-xs q-pl-xs"},f={class:"row"},q={class:"col-12 q-mb-xs"},g={class:"row q-mx-md"},w={class:"col-12"},x={class:"row"},v={class:"col-12 text-right"},y={class:"row"},E={class:"col-12 text-right"};function S(e,s,t,S,V,k){const W=(0,r.up)("q-btn"),$=(0,r.up)("q-banner"),I=(0,r.up)("q-card-section"),Z=(0,r.up)("q-input"),C=(0,r.up)("q-select"),M=(0,r.up)("q-card"),Q=(0,r.up)("q-checkbox"),R=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(R,null,{default:(0,r.w5)((()=>[(0,r._)("div",i,[(0,r._)("div",o,[""!==V.errorMessage?((0,r.wg)(),(0,r.j4)($,{key:0,"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:(0,r.w5)((()=>[(0,r.Wm)(W,{flat:"",onClick:k.dismissBanner,label:"Dismiss"},null,8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(V.errorMessage)+" ",1)])),_:1})):(0,r.kq)("",!0)])]),(0,r._)("div",l,[(0,r._)("div",n,[(0,r.Wm)(M,{bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(I,null,{default:(0,r.w5)((()=>[(0,r._)("div",u,"Edit subscription "+(0,a.zw)(V.name),1)])),_:1}),(0,r.Wm)(I,null,{default:(0,r.w5)((()=>[(0,r._)("div",m,[(0,r._)("div",d,[(0,r.Wm)(Z,{"error-message":V.submissionErrors.name,error:V.hasSubmissionErrors.name,"bottom-slots":"",disable:k.disabledInput,type:"text",clearable:"",modelValue:V.name,"onUpdate:modelValue":s[0]||(s[0]=e=>V.name=e),label:e.$t("form.name"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])]),(0,r._)("div",c,[(0,r._)("div",b,[(0,r.Wm)(Z,{"error-message":V.submissionErrors.date,error:V.hasSubmissionErrors.date,"bottom-slots":"",disable:k.disabledInput,type:"date",modelValue:V.date,"onUpdate:modelValue":s[1]||(s[1]=e=>V.date=e),label:e.$t("form.date"),hint:"The next date you expect the subscription to hit",outlined:""},null,8,["error-message","error","disable","modelValue","label"])])]),(0,r._)("div",p,[(0,r._)("div",h,[(0,r.Wm)(Z,{"error-message":V.submissionErrors.amount_min,error:V.hasSubmissionErrors.amount_min,"bottom-slots":"",disable:k.disabledInput,type:"number",modelValue:V.amount_min,"onUpdate:modelValue":s[2]||(s[2]=e=>V.amount_min=e),label:e.$t("form.amount_min"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])]),(0,r._)("div",_,[(0,r.Wm)(Z,{"error-message":V.submissionErrors.amount_max,error:V.hasSubmissionErrors.amount_max,rules:[e=>parseFloat(e)>=parseFloat(V.amount_min)||"Must be more than minimum amount"],"bottom-slots":"",disable:k.disabledInput,type:"number",modelValue:V.amount_max,"onUpdate:modelValue":s[3]||(s[3]=e=>V.amount_max=e),label:e.$t("form.amount_max"),outlined:""},null,8,["error-message","error","rules","disable","modelValue","label"])]),(0,r._)("div",f,[(0,r._)("div",q,[(0,r.Wm)(C,{"error-message":V.submissionErrors.repeat_freq,error:V.hasSubmissionErrors.repeat_freq,outlined:"",modelValue:V.repeat_freq,"onUpdate:modelValue":s[4]||(s[4]=e=>V.repeat_freq=e),options:V.repeatFrequencies,label:"Outlined"},null,8,["error-message","error","modelValue","options"])])])])])),_:1})])),_:1})])]),(0,r._)("div",g,[(0,r._)("div",w,[(0,r.Wm)(M,{class:"q-mt-xs"},{default:(0,r.w5)((()=>[(0,r.Wm)(I,null,{default:(0,r.w5)((()=>[(0,r._)("div",x,[(0,r._)("div",v,[(0,r.Wm)(W,{disable:k.disabledInput,color:"primary",label:"Submit",onClick:k.submitSubscription},null,8,["disable","onClick"])])]),(0,r._)("div",y,[(0,r._)("div",E,[(0,r.Wm)(Q,{disable:k.disabledInput,modelValue:V.doReturnHere,"onUpdate:modelValue":s[5]||(s[5]=e=>V.doReturnHere=e),"left-label":"",label:"Return here to create another one"},null,8,["disable","modelValue"])])])])),_:1})])),_:1})])])])),_:1})}var V=t(1569);class k{put(e,s){let t="/api/v1/bills/"+e;return V.api.put(t,s)}}var W=t(8898),$=t(3684);const I={name:"Edit",data(){return{tab:"split-0",submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",repeatFrequencies:[],id:0,name:"",date:"",repeat_freq:"monthly",amount_min:"",amount_max:""}},computed:{disabledInput:function(){return this.submitting}},created(){this.date=(0,W.Z)(new Date,"y-MM-dd"),this.repeatFrequencies=[{label:this.$t("firefly.repeat_freq_weekly"),value:"weekly"},{label:this.$t("firefly.repeat_freq_monthly"),value:"monthly"},{label:this.$t("firefly.repeat_freq_quarterly"),value:"quarterly"},{label:this.$t("firefly.repeat_freq_half-year"),value:"half-year"},{label:this.$t("firefly.repeat_freq_yearly"),value:"yearly"}],this.id=parseInt(this.$route.params.id),this.collectSubscription()},methods:{resetErrors:function(){this.submissionErrors={name:"",date:"",repeat_freq:"",amount_min:"",amount_max:""},this.hasSubmissionErrors={name:!1,date:!1,repeat_freq:!1,amount_min:!1,amount_max:!1}},collectSubscription:function(){let e=new $.Z;e.get(this.id).then((e=>this.parseSubscription(e)))},submitSubscription:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const e=this.buildSubscription();let s=new k;s.put(this.id,e).catch(this.processErrors).then(this.processSuccess)},parseSubscription:function(e){this.name=e.data.data.attributes.name,this.date=e.data.data.attributes.date.substr(0,10),console.log(this.date),this.repeat_freq=e.data.data.attributes.repeat_freq,this.amount_min=e.data.data.attributes.amount_min,this.amount_max=e.data.data.attributes.amount_max},buildSubscription:function(){let e={name:this.name,date:this.date,repeat_freq:this.repeat_freq,amount_min:this.amount_min,amount_max:this.amount_max};return e},dismissBanner:function(){this.errorMessage=""},processSuccess:function(e){if(!e)return;this.submitting=!1;let s={level:"success",text:"I am updated subscription ",show:!0,action:{show:!0,text:"Go to subscription",link:{name:"subscriptions.show",params:{id:parseInt(e.data.data.id)}}}};this.$q.localStorage.set("flash",s),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(e){if(e.response){let s=e.response.data;this.errorMessage=s.message,console.log(s);for(let e in s.errors)s.errors.hasOwnProperty(e)&&(this.submissionErrors[e]=s.errors[e][0],this.hasSubmissionErrors[e]=!0)}this.submitting=!1}}};var Z=t(1639),C=t(9885),M=t(7128),Q=t(8879),R=t(4458),U=t(3190),F=t(6611),H=t(7887),B=t(1221),T=t(9984),j=t.n(T);const z=(0,Z.Z)(I,[["render",S]]),D=z;j()(I,"components",{QPage:C.Z,QBanner:M.Z,QBtn:Q.Z,QCard:R.Z,QCardSection:U.Z,QInput:F.Z,QSelect:H.Z,QCheckbox:B.Z})}}]);