"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[5348],{5348:(a,e,t)=>{t.r(e),t.d(e,{default:()=>B});var n=t(9835),i=t(6970);const s={class:"row q-mx-md"},g={class:"col-12"},r={class:"text-h6"},d={class:"row"},l={class:"col-12 q-mb-xs"},u=(0,n._)("br",null,null,-1);function c(a,e,t,c,o,p){const h=(0,n.up)("q-card-section"),m=(0,n.up)("q-card"),k=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(k,null,{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n._)("div",g,[(0,n.Wm)(m,{bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n._)("div",r,(0,i.zw)(o.piggyBank.name),1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n._)("div",l,[(0,n.Uk)(" Name: "+(0,i.zw)(o.piggyBank.name),1),u])])])),_:1})])),_:1})])])])),_:1})}var o=t(670);const p={name:"Show",data(){return{piggyBank:{},id:0}},created(){this.id=parseInt(this.$route.params.id),this.getPiggyBank()},methods:{onRequest:function(a){this.page=a.page,this.getPiggyBank()},getPiggyBank:function(){(new o.Z).get(this.id).then((a=>this.parsePiggyBank(a)))},parsePiggyBank:function(a){this.piggyBank={name:a.data.data.attributes.name}}}};var h=t(1639),m=t(9885),k=t(4458),f=t(3190),w=t(9984),_=t.n(w);const y=(0,h.Z)(p,[["render",c]]),B=y;_()(p,"components",{QPage:m.Z,QCard:k.Z,QCardSection:f.Z})}}]);