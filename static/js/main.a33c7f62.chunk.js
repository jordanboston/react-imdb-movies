(this["webpackJsonpimdb-movies"]=this["webpackJsonpimdb-movies"]||[]).push([[0],{51:function(e,t,n){e.exports=n(66)},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(56),n(44)),l=n(21),s=n.n(l),u=n(28),h=n(29),m=n(30),p=n(33),d=n(35),f=(n(58),"".concat("https://cors-anywhere.herokuapp.com","/https://imdb-api.com"));function v(){return(v=Object(u.a)(s.a.mark((function e(t){var n,a,r,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:null,a=o.length>2&&void 0!==o[2]?o[2]:"GET",r={method:a,redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},"GET"!==a&&(r.body=JSON.stringify(n)),e.abrupt("return",fetch(t,r).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b={get:function(e,t){return function(e){return v.apply(this,arguments)}(f+e,t)}},g=n(109),E=(n(59),n(100)),j=n(111),w=n(103),O=n(105),y=n(106),k=n(107),S=n(43),C=n.n(S),x=Object(E.a)((function(e){return Object(j.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}})})),N=function(e){var t=e.title,n=e.image,a=e.description,o=x();return r.a.createElement(w.a,{cellHeight:180,className:o.gridList},r.a.createElement(O.a,null,r.a.createElement("img",{src:n,alt:"`{Title} movie poster`"}),r.a.createElement(y.a,{title:t,subtitle:r.a.createElement("span",null,a),actionIcon:r.a.createElement(k.a,{"aria-label":"info about ".concat(t),className:o.icon},r.a.createElement(C.a,null))})),")}")},T=(n(65),n(108)),A=n(110),I=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=a.state.title;a.props.handleSendRequest(e),a.setState({title:""})},a.handleInputTitle=function(e){e.preventDefault();var t=e.target.value;a.setState({title:t})},a.state={title:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.title;return r.a.createElement("div",{className:"search"},r.a.createElement(A.a,{id:"standard-basic",className:"search-box",label:"Search for a movie",onChange:this.handleInputTitle,value:e}),r.a.createElement(T.a,{variant:"contained",color:"default",onClick:this.handleSubmit},"Search"))}}]),n}(r.a.Component),W=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getMovie=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.get("/en/API/Search/".concat("k_08gybO97","/").concat(t)).then((function(e){if(e){console.log("Response",e);var t=e.results;a.setState({movies:t})}return e})).catch((function(e){console.log("error",e)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={movies:[]},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{maxWidth:"lg",style:{margin:"0 auto"}},r.a.createElement(I,{handleSendRequest:this.getMovie}),this.state.movies.map((function(e){var t=e.id,n=Object(i.a)(e,["id"]);return r.a.createElement(N,Object.assign({key:t},n))}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.a33c7f62.chunk.js.map