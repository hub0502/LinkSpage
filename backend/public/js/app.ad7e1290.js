(function(){"use strict";var n={655:function(n,t,e){var o={};e.r(o);var r=e(812),i=e(196),s=e(252);const a={id:"app"};function u(n,t,e,o,r,i){const u=(0,s.up)("router-vie");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(u)])}var l={},c=e(744);const d=(0,c.Z)(l,[["render",u]]);var f=d,p=e(963),v=e(201),m=e(577);const h={class:"app"},w=(0,s._)("h1",null,"5월 마지막 영화 예매 순위",-1),_={class:"moives"},g={class:"rank"},y=["src"],b={class:"detail"},k={cass:"tit"},O={class:"rate"},j={class:"num"};function z(n,t,e,o,r,i){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",h,[w,(0,s._)("ul",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.movies,(n=>((0,s.wg)(),(0,s.iD)("li",{key:n.id,class:"item"},[(0,s._)("span",g,(0,m.zw)(n.id),1),(0,s.Wm)(a,{to:{name:"show",params:{id:n.id}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:n.poster,class:"poster"},null,8,y)])),_:2},1032,["to"]),(0,s._)("div",b,[(0,s._)("strong",k,(0,m.zw)(n.name),1),(0,s._)("span",O,[(0,s.Uk)("예매율 "),(0,s._)("span",j,(0,m.zw)(n.rate),1)]),(0,s.Wm)(a,{to:{name:"show",params:{id:n.id}},class:"link"},{default:(0,s.w5)((()=>[(0,s.Uk)("자세히보기")])),_:2},1032,["to"])])])))),128))])])}var x={created(){this.$http.get("/api/movies").then((n=>{this.movies=n.data})).catch((n=>{alert(n),console.log(n)}))},data(){return{movies:[]}}};const P=(0,c.Z)(x,[["render",z]]);var T=P;const $={class:"detail"},D=["src"],S=(0,s._)("h2",null,"영화정보",-1),M={class:"info"},W=(0,s._)("dt",null,"김독",-1),Z=(0,s._)("dt",null,"출연",-1),H=(0,s._)("dt",null,"러닝타임",-1),U=(0,s._)("h2",null,"줄거리",-1),C=["innerHTML"];function L(n,t,e,o,r,i){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("h1",null,(0,m.zw)(n.movie.name),1),(0,s._)("img",{src:n.movie.poster,class:"poster"},null,8,D),(0,s._)("section",null,[S,(0,s._)("dl",M,[W,(0,s._)("dd",null,(0,m.zw)(n.movie.director),1),Z,(0,s._)("dd",null,(0,m.zw)(n.movie.actors),1),H,(0,s._)("dd",null,(0,m.zw)(n.movie.time),1)])]),(0,s._)("section",null,[U,(0,s._)("p",{innerHTML:n.movie.synopsis,class:"synopsis"},null,8,C)]),(0,s.Wm)(a,{to:{name:"index",params:{id:n.movie.id}},class:"link"},{default:(0,s.w5)((()=>[(0,s.Uk)("돌아가기")])),_:1},8,["to"])])}var E={created:function(){this.$http.get("/api/movies/$(id)").then((n=>{this.movie=n.data[0]}))},data:function(){return{movie:{}}}};const F=(0,c.Z)(E,[["render",L]]);var K=F;const Y=[{path:"/",name:"index",component:T},{path:"/:id",name:"show",component:K}],q=(0,v.p7)({history:v.PO,routes:Y}),A=(0,p.ri)(f);A.use(q).$mount("#app"),r["default"].prototype.$http=i.ZP,new r["default"]({router:o["default"],render:n=>n(f)}).$mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<n.length;c++){o=n[c][0],r=n[c][1],i=n[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){n.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[o,r,i]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(u)var c=u(e)}for(t&&t(o);l<s.length;l++)i=s[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(655)}));o=e.O(o)})();
//# sourceMappingURL=app.ad7e1290.js.map