(this.webpackJsonpreels=this.webpackJsonpreels||[]).push([[0],{1010:function(e,t){},1016:function(e,t,n){},1018:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(68),c=n.n(i),r=(n(486),n(487),n(28)),s=n(60),u=n(24),o=n(476),l=n(202),p=n(44),b=n(142),d=n(3);var j=function(e){var t=e.addMovie,n=Object(a.useState)(!1),i=Object(u.a)(n,2),c=i[0],o=i[1],j=Object(a.useState)(),m=Object(u.a)(j,2),f=m[0],y=m[1],v=Object(a.useState)(),x=Object(u.a)(v,2),O=x[0],h=x[1],g=Object(a.useState)(),w=Object(u.a)(g,2),M=w[0],k=w[1],C=Object(a.useState)(),N=Object(u.a)(C,2),T=N[0],S=N[1],_=Object(a.useState)(),F=Object(u.a)(_,2),A=F[0],B=F[1],V=function(){return o(!1)},D=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f&&O&&M&&T&&A){e.next=3;break}return alert("Fill in all fields first!"),e.abrupt("return");case 3:return console.log(f,O,M,T,A),e.next=6,t(f,O,M,T,A);case 6:o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{variant:"primary",onClick:function(){return o(!0)},children:"Add Movie"}),Object(d.jsxs)(b.a,{show:c,onHide:V,children:[Object(d.jsx)(b.a.Header,{closeButton:!0,children:Object(d.jsx)(b.a.Title,{children:"Add new movie"})}),Object(d.jsx)(b.a.Body,{children:Object(d.jsxs)(p.a,{children:[Object(d.jsxs)(p.a.Group,{className:"mb-3",children:[Object(d.jsx)(p.a.Label,{children:"Movie name"}),Object(d.jsx)(p.a.Control,{type:"text",autoFocus:!0,onChange:function(e){return y(e.target.value)}})]}),Object(d.jsxs)(p.a.Group,{className:"mb-3",children:[Object(d.jsx)(p.a.Label,{children:"Movie description"}),Object(d.jsx)(p.a.Control,{type:"text",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(p.a.Group,{className:"mb-3",children:[Object(d.jsx)(p.a.Label,{children:"Movie thumbnail"}),Object(d.jsx)(p.a.Control,{type:"text",onChange:function(e){return k(e.target.value)}})]}),Object(d.jsxs)(p.a.Group,{className:"mb-3",children:[Object(d.jsx)(p.a.Label,{children:"Movie length (in minutes)"}),Object(d.jsx)(p.a.Control,{type:"text",onChange:function(e){return S(e.target.value)}})]}),Object(d.jsxs)(p.a.Group,{className:"mb-3",children:[Object(d.jsx)(p.a.Label,{children:"Movie value"}),Object(d.jsx)(p.a.Control,{type:"number",placeholder:"Cost of viewing movie",onChange:function(e){return B(e.target.value)}})]})]})}),Object(d.jsxs)(b.a.Footer,{children:[Object(d.jsx)(l.a,{variant:"secondary",onClick:function(){return V()},children:"Close"}),Object(d.jsx)(l.a,{variant:"primary",onClick:function(){return D()},children:"Add"})]})]})]})},m=n(36),f=n.n(m),y=n.p+"static/media/star.56161079.jpg",v=n.p+"static/media/view.098fd62e.jpg",x=n(479),O=n.n(x),h=(n(1016),n(480)),g=n(481),w="0xd74E4aC49C0f3E5D0d242d5e5c8fF0cBDabE7A81";var M=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(0),l=Object(u.a)(c,2),p=l[0],b=l[1],m=Object(a.useState)(),x=Object(u.a)(m,2),M=x[0],k=x[1],C=Object(a.useState)(),N=Object(u.a)(C,2),T=N[0],S=N[1],_=Object(a.useState)(),F=Object(u.a)(_,2),A=F[0],B=F[1];Object(a.useEffect)((function(){A&&V()}),[A,T]),Object(a.useEffect)((function(){n&&M&&P()}),[n,M]),Object(a.useEffect)((function(){J()}),[]);var V=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,n,a,i,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.methods.serialNumber().call();case 3:t=e.sent,n=[],a=Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(){var e=Object(s.a)(Object(r.a)().mark((function e(n){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.methods.getMovieDetails(t).call();case 2:a=e.sent,n({index:t,name:a[0],description:a[1],thumbnail:a[2],length:a[3],views:a[4],rating:a[5],initialVal:a[6],currentVal:a[7]});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:a=e.sent,n.push(a);case 4:case"end":return e.stop()}}),e)})),i=0;case 7:if(!(i<t)){e.next=12;break}return e.delegateYield(a(i),"t0",9);case 9:i++,e.next=7;break;case 12:return e.next=14,Promise.all(n);case 14:c=e.sent,S(c),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n,a,i,c){var s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=new f.a(c).shiftedBy(18).toString(),e.next=4,A.methods.addMovie(t,n,a,i,s).send({from:M});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,i,c){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:return e.prev=8,e.next=11,A.methods.watchMovie(n).send({from:M});case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(8),console.log(e.t1);case 16:case"end":return e.stop()}}),e,null,[[0,5],[8,13]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.methods.rateMovie(t,n).send({from:M});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t){var a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new n.web3.eth.Contract(h,"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"),e.next=3,a.methods.approve(w,t).send({from:n.defaultAccount});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,n,a,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.celo){e.next=20;break}return e.prev=1,e.next=4,window.celo.enable();case 4:return t=new O.a(window.celo),n=Object(o.newKitFromWeb3)(t),e.next=8,n.web3.eth.getAccounts();case 8:a=e.sent,c=a[0],n.defaultAccount=c,i(n),k(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:e.next=21;break;case 20:alert("You need to install the celo wallet extension in order to use this app");case 21:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){var t,a,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getTotalBalance(M);case 3:t=e.sent,a=t.cUSD.shiftedBy(-18).toFixed(2),i=new n.web3.eth.Contract(g,w),b(a),B(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("div",{className:"logo-text",children:"ShowMax"}),Object(d.jsxs)("div",{className:"bal",children:[p," cUSD"]})]}),Object(d.jsx)(j,{addMovie:D}),Object(d.jsx)("div",{className:"movies",children:null===T||void 0===T?void 0:T.map((function(e){return Object(d.jsxs)("div",{className:"movie",children:[Object(d.jsx)("img",{src:e.thumbnail}),Object(d.jsxs)("div",{className:"movie-body",children:[Object(d.jsxs)("div",{className:"movie-name",children:[e.name," ",Object(d.jsxs)("span",{children:["(",e.length," minutes)"]})]}),Object(d.jsx)("div",{className:"movie-description",children:e.description}),Object(d.jsxs)("div",{className:"movie-details",children:[Object(d.jsxs)("div",{className:"detail-1 detail",children:[Object(d.jsx)("div",{children:"Current Value"}),Object(d.jsxs)("div",{children:["$",f()(e.currentVal).shiftedBy(-18).toString()]})]}),Object(d.jsxs)("div",{className:"detail-2 detail",children:[Object(d.jsx)("img",{src:v,alt:"eye-image"}),Object(d.jsx)("div",{children:e.views})]}),Object(d.jsxs)("div",{className:"detail-3 detail",children:[Object(d.jsx)("div",{children:"Rating"}),Object(d.jsx)("div",{children:e.rating})]})]}),Object(d.jsx)("button",{className:"watch-button",onClick:function(){return E(e.currentVal,e.index)},children:"Watch"}),Object(d.jsxs)("div",{className:"rate-section",children:[Object(d.jsx)("div",{className:"rate-text",children:"Rate movie"}),Object(d.jsxs)("div",{className:"rate-container",children:[Object(d.jsx)("div",{className:"star",onClick:function(){return L(e.index,1)},children:Object(d.jsx)("img",{src:y,alt:"star-image"})}),Object(d.jsx)("div",{className:"star",onClick:function(){return L(e.index,2)},children:Object(d.jsx)("img",{src:y,alt:"star-image"})}),Object(d.jsx)("div",{className:"star",onClick:function(){return L(e.index,3)},children:Object(d.jsx)("img",{src:y,alt:"star-image"})}),Object(d.jsx)("div",{className:"star",onClick:function(){return L(e.index,4)},children:Object(d.jsx)("img",{src:y,alt:"star-image"})}),Object(d.jsx)("div",{className:"star",onClick:function(){return L(e.index,5)},children:Object(d.jsx)("img",{src:y,alt:"star-image"})})]})]})]})]})}))})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1023)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};c.a.render(Object(d.jsx)(M,{}),document.getElementById("root")),k()},480:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},481:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_thumbnail","type":"string"},{"internalType":"uint256","name":"_length","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"addMovie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_movieSerial","type":"uint256"}],"name":"calculateValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_serial","type":"uint256"}],"name":"getMovieDetails","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"thumbnail","type":"string"},{"internalType":"uint256","name":"length","type":"uint256"},{"internalType":"uint256","name":"timesViewed","type":"uint256"},{"internalType":"uint256","name":"rating","type":"uint256"},{"internalType":"uint256","name":"initialValue","type":"uint256"},{"internalType":"uint256","name":"currentValue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_serial","type":"uint256"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"rateMovie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_movieSerial","type":"uint256"}],"name":"removeMovie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"serialNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_serial","type":"uint256"}],"name":"watchMovie","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},487:function(e,t,n){},502:function(e,t){},504:function(e,t){},517:function(e,t){},518:function(e,t){},538:function(e,t){},543:function(e,t){},549:function(e,t){},551:function(e,t){},563:function(e,t){},576:function(e,t){},606:function(e,t){},607:function(e,t){},636:function(e,t){},650:function(e,t){},652:function(e,t){},664:function(e,t){},849:function(e,t){},856:function(e,t){},870:function(e,t){},878:function(e,t){},885:function(e,t){},892:function(e,t){},900:function(e,t){},907:function(e,t){},919:function(e,t){},930:function(e,t){},937:function(e,t){},944:function(e,t){}},[[1018,1,2]]]);
//# sourceMappingURL=main.15d255d0.chunk.js.map