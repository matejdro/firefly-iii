"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[7039],{7039:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var s=a(9835);const o={key:0},n={key:1};function i(e,t,a,i,l,r){const c=(0,s.up)("NewUser"),u=(0,s.up)("Dashboard"),d=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[0===e.assetCount?((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(c,{onCreatedAccounts:e.refreshThenCount},null,8,["onCreatedAccounts"])])):(0,s.kq)("",!0),e.assetCount>0?((0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(u)])):(0,s.kq)("",!0)])),_:1})}a(702);var l=a(3836),r=a(3555);const c={class:"q-ma-md"},u={class:"row q-mb-sm"},d={class:"col"},m={class:"col"},h={class:"col"},f={class:"row q-mb-sm"},p={class:"col"},b={class:"row q-mb-sm"},v={class:"col"},g=(0,s.uE)('<div class="row q-mb-sm"><div class="col"> Budget box </div><div class="col"> Category box </div></div><div class="row q-mb-sm"><div class="col"> Expense Box </div><div class="col"> Revenue Box </div></div><div class="row q-mb-sm"><div class="col"> Piggy box </div><div class="col"> Bill box </div></div>',3);function w(e,t,a,o,n,i){const l=(0,s.up)("BillInsightBox"),r=(0,s.up)("SpendInsightBox"),w=(0,s.up)("NetWorthInsightBox"),y=(0,s.up)("AccountChart"),C=(0,s.up)("TransactionLists"),q=(0,s.up)("q-fab-action"),W=(0,s.up)("q-fab"),_=(0,s.up)("q-page-sticky");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",u,[(0,s._)("div",d,[(0,s.Wm)(l)]),(0,s._)("div",m,[(0,s.Wm)(r)]),(0,s._)("div",h,[(0,s.Wm)(w)])]),(0,s._)("div",f,[(0,s._)("div",p,[(0,s.Wm)(y)])]),(0,s._)("div",b,[(0,s._)("div",v,[(0,s.Wm)(C)])]),g,(0,s.Wm)(_,{position:"bottom-right",offset:[18,18]},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{label:"Actions",square:"","vertical-actions-align":"right","label-position":"left",color:"green",icon:"fas fa-chevron-up",direction:"up"},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{color:"primary",square:"",icon:"fas fa-chart-pie",label:e.$t("firefly.new_budget"),to:{name:"budgets.create"}},null,8,["label","to"]),(0,s.Wm)(q,{color:"primary",square:"",icon:"far fa-money-bill-alt",label:e.$t("firefly.new_asset_account"),to:{name:"accounts.create",params:{type:"asset"}}},null,8,["label","to"]),(0,s.Wm)(q,{color:"primary",square:"",icon:"fas fa-exchange-alt",label:e.$t("firefly.newTransfer"),to:{name:"transactions.create",params:{type:"transfer"}}},null,8,["label","to"]),(0,s.Wm)(q,{color:"primary",square:"",icon:"fas fa-long-arrow-alt-right",label:e.$t("firefly.newDeposit"),to:{name:"transactions.create",params:{type:"deposit"}}},null,8,["label","to"]),(0,s.Wm)(q,{color:"primary",square:"",icon:"fas fa-long-arrow-alt-left",label:e.$t("firefly.newWithdrawal"),to:{name:"transactions.create",params:{type:"withdrawal"}}},null,8,["label","to"])])),_:1})])),_:1})])}const y={name:"Dashboard",components:{TransactionLists:(0,s.RC)((()=>a.e(6926).then(a.bind(a,6926)))),AccountChart:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(7946)]).then(a.bind(a,7946)))),NetWorthInsightBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(5446)]).then(a.bind(a,5446)))),BillInsightBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(794)]).then(a.bind(a,794)))),SpendInsightBox:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(379)]).then(a.bind(a,379))))}};var C=a(1639),q=a(3388),W=a(9361),_=a(935),x=a(9984),A=a.n(x);const B=(0,C.Z)(y,[["render",w]]),k=B;A()(y,"components",{QPageSticky:q.Z,QFab:W.Z,QFabAction:_.Z});const P=(0,s.aZ)({name:"PageIndex",components:{Dashboard:k,NewUser:(0,s.RC)((()=>Promise.all([a.e(4736),a.e(3064),a.e(1543)]).then(a.bind(a,1543))))},data(){return{assetCount:1,$store:null}},mounted(){this.countAssetAccounts()},methods:{refreshThenCount:function(){this.$store=(0,r.S)(),this.$store.refreshCacheKey(),this.countAssetAccounts()},countAssetAccounts:function(){let e=new l.Z;e.list("asset",1,this.getCacheKey).then((e=>{this.assetCount=parseInt(e.data.meta.pagination.total)}))}}});var I=a(9885);const Z=(0,C.Z)(P,[["render",i]]),$=Z;A()(P,"components",{QPage:I.Z})}}]);