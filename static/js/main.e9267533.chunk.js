(this["webpackJsonpimdb-movies"]=this["webpackJsonpimdb-movies"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(14),n(5)),s=n.n(i),l=n(6),u=n(1),m=n(2),p=n(3),h=n(4);n(16);function v(){return(v=Object(l.a)(s.a.mark((function e(t){var n,a,r,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:null,a=o.length>2&&void 0!==o[2]?o[2]:"GET",r={method:a,redirect:"follow",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",mode:"no-cors"}},"GET"!==a&&(r.body=JSON.stringify(n)),e.abrupt("return",fetch(t,r).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={get:function(e,t){return function(e){return v.apply(this,arguments)}("https://imdb-api.com"+e,t)}},f=(n(17),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Title,n=e.Poster,a=e.Year;return r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"title-year"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("h2",{className:"year"},a)),r.a.createElement("div",{className:"poster"},r.a.createElement("img",{src:n,alt:"my movie poster"})))}}]),n}(r.a.Component)),b=(n(18),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=a.state.title;a.props.handleSendRequest(e),a.setState({title:""})},a.handleInputTitle=function(e){e.preventDefault();var t=e.target.value;a.setState({title:t})},a.state={title:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.title;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-box",type:"text",onChange:this.handleInputTitle,value:e}),r.a.createElement("input",{className:"button",type:"submit",onClick:this.handleSubmit,value:"Search"}))}}]),n}(r.a.Component)),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getMovie=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.get("/en/API/Search/".concat("k_08gybO97","/").concat(t)).then((function(e){if(console.log("Response",e),e){console.log("Response",e);var t=e.body.Search;a.setState({movies:t})}return e})).catch((function(e){console.log("error",e)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={movies:[],title:""},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,{handleSendRequest:this.getMovie}),this.state.movies.map((function(e){return r.a.createElement(f,e)}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e9267533.chunk.js.map