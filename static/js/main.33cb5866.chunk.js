(this["webpackJsonpimdb-movies"]=this["webpackJsonpimdb-movies"]||[]).push([[0],{50:function(e,t,n){e.exports=n(64)},55:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(55),n(21)),s=n.n(i),l=n(28),u=n(29),m=n(30),p=n(33),h=n(35),d=(n(57),"".concat("https://cors-anywhere.herokuapp.com","/https://imdb-api.com"));function v(){return(v=Object(l.a)(s.a.mark((function e(t){var n,a,r,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:null,a=o.length>2&&void 0!==o[2]?o[2]:"GET",r={method:a,redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},"GET"!==a&&(r.body=JSON.stringify(n)),e.abrupt("return",fetch(t,r).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={get:function(e,t){return function(e){return v.apply(this,arguments)}(d+e,t)}},b=n(109),g=n(99),E=n(111),y=n(102),w=n(104),j=n(105),k=n(106),O=n(107),x=n(43),S=n.n(x),C=Object(g.a)((function(e){return Object(E.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:650},gridTile:{},icon:{color:"rgba(255, 255, 255, 0.54)"}})})),N=function(e){var t=C();return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{cellHeight:200,className:t.gridList},r.a.createElement(w.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(j.a,{component:"div"})),e.movies.map((function(e){var n=e.id,a=e.title,o=e.image,c=e.description;return r.a.createElement(w.a,{key:n,className:t.gridTile},r.a.createElement("img",{src:o,alt:"`{Title} movie poster`"}),r.a.createElement(k.a,{title:a,subtitle:r.a.createElement("span",null,c),actionIcon:r.a.createElement(O.a,{"aria-label":"info about ".concat(a),className:t.icon},r.a.createElement(S.a,null))}))}))))},T=(n(63),n(108)),A=n(110),I=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=a.state.expression;e&&(a.props.handleSendRequest(e),a.setState({expression:""}))},a.handleInputExpression=function(e){e.preventDefault();var t=e.target.value;a.setState({expression:t})},a.state={title:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.expression;return r.a.createElement("div",{className:"search"},r.a.createElement(A.a,{id:"standard-secondary",className:"search-box",color:"secondary",label:"Search for a movie",onChange:this.handleInputExpression,value:e}),r.a.createElement(T.a,{size:"large",variant:"contained",color:"secondary",onClick:this.handleSubmit},"Search"))}}]),n}(r.a.Component),W=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getMovie=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.get("/en/API/Search/".concat("k_08gybO97","/").concat(t)).then((function(e){if(e){var t=e.results;a.setState({movies:t})}return e})).catch((function(e){console.log("error",e)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={movies:[]},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{maxWidth:"lg",style:{margin:"0 auto"}},r.a.createElement(I,{handleSendRequest:this.getMovie}),r.a.createElement(N,{movies:this.state.movies})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.33cb5866.chunk.js.map