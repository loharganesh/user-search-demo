(this["webpackJsonpuser-search"]=this["webpackJsonpuser-search"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(4),c=n.n(s),u=(n(13),n(5)),i=n(6),h=n(2),o=n(8),l=n(7),d=(n(14),n.p+"static/media/avatar-placeholder.f7ea1985.svg"),j=n(0),b=function(e){return Object(j.jsxs)("div",{className:"user-card-container",children:[Object(j.jsx)("img",{className:"avatar",src:d,alt:""}),Object(j.jsxs)("div",{className:"user-info-container",children:[Object(j.jsx)("h4",{children:e.user.name}),Object(j.jsx)("div",{className:"divider"}),Object(j.jsx)("p",{children:e.user.username})]})]})},f=(n(16),function(e){return Object(j.jsx)("div",{className:"card-list",children:e.users.map((function(e){return Object(j.jsx)(b,{user:e},e.id)}))})}),v=(n(17),function(e){var t=e.placeholder,n=e.handleChange,a=e.value;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"search-bar",type:"text",placeholder:t,onChange:n,value:a})})}),p=(n(18),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={users:[],searchQuery:""},e.handleQueryChange=e.handleQueryChange.bind(Object(h.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"handleQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.users.filter((function(t){return t.name.toLowerCase().includes(e.state.searchQuery.toLowerCase())}));return Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)(v,{placeholder:"Search People",handleChange:this.handleQueryChange,value:this.state.searchQuery}),Object(j.jsx)(f,{users:t})]})}}]),n}(a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.11013062.chunk.js.map