"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[1501],{1501:(t,a,n)=>{n.r(a),n.d(a,{default:()=>z});var i=n(9835),s=n(6970);const e={class:"row q-mx-md"},r={class:"col-12"},o={class:"text-h6"},l={class:"row"},u={class:"col-12 q-mb-xs"},c=(0,i._)("br",null,null,-1),d=(0,i._)("br",null,null,-1),p=(0,i._)("br",null,null,-1);function g(t,a,n,g,h,w){const _=(0,i.up)("q-card-section"),b=(0,i.up)("q-card"),m=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>[(0,i._)("div",e,[(0,i._)("div",r,[(0,i.Wm)(b,{bordered:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,"Transaction: "+(0,s.zw)(h.title),1)])),_:1}),(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.group.transactions,((t,a)=>((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",u,[(0,i._)("strong",null,"index "+(0,s.zw)(a),1),c,(0,i.Uk)(" "+(0,s.zw)(t.description),1),d,(0,i.Uk)(" "+(0,s.zw)(t.amount),1),p,(0,i.Uk)(" "+(0,s.zw)(t.source_name)+" --\x3e "+(0,s.zw)(t.destination_name),1)])])))),256))])),_:1})])),_:1})])])])),_:1})}var h=n(9466),w=n(5146);const _={name:"Show",data(){return{title:"",group:{transactions:[]},rows:[],rowsNumber:1,rowsPerPage:10,page:1}},created(){this.id=parseInt(this.$route.params.id),this.getTransaction()},mounted(){},components:{LargeTable:w.Z},methods:{onRequest:function(t){this.page=t.page,this.getTag()},getTransaction:function(){let t=new h.Z;this.loading=!0,t.get(this.id).then((t=>this.parseTransaction(t.data.data)))},parseTransaction:function(t){this.group={group_title:t.attributes.group_title,transactions:[]},null!==t.attributes.group_title&&(this.title=t.attributes.group_title);for(let a in t.attributes.transactions)if(t.attributes.transactions.hasOwnProperty(a)){let n=t.attributes.transactions[a];this.group.transactions.push(n),0===parseInt(a)&&null===t.attributes.group_title&&(this.title=n.description)}this.loading=!1}}};var b=n(1639),m=n(9885),f=n(4458),T=n(3190),v=n(9984),k=n.n(v);const q=(0,b.Z)(_,[["render",g]]),z=q;k()(_,"components",{QPage:m.Z,QCard:f.Z,QCardSection:T.Z})}}]);