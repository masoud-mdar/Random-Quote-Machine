(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s.n(a),i=s(4),c=s.n(i),l=s(5),h=s(6),o=s(2),r=s(8),d=s(7),u=s(0),j=function(){return Object(u.jsxs)("div",{className:"div",children:[Object(u.jsx)("span",{className:"span",children:"\u2193"}),Object(u.jsx)("span",{className:"span",style:{"--delay":"0.1s"},children:"\u2193"}),Object(u.jsx)("span",{className:"span",style:{"--delay":"0.3s"},children:"\u2193"}),Object(u.jsx)("span",{className:"span",style:{"--delay":"0.4s"},children:"\u2193"}),Object(u.jsx)("span",{className:"span",style:{"--delay":"0.5s"},children:"\u2193"})]})},p=function(t){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:"Random Quote Generator"})}),Object(u.jsx)("div",{className:"main-wrapper",children:Object(u.jsxs)("div",{className:"quote-box",id:"quote-box",children:[Object(u.jsx)("div",{className:"text-box",id:"text",children:Object(u.jsx)("p",{className:"text",style:{display:t.display,fontSize:t.size},children:t.text})}),Object(u.jsx)("div",{className:"author-box",children:Object(u.jsxs)("p",{className:"author",id:"author",children:[t.author," "]})})]})}),Object(u.jsx)("div",{className:"btn",id:"new-quote",onClick:t.handleClick,children:"Generate"})]})},x=function(t){Object(r.a)(s,t);var e=Object(d.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={data:{},n:Math.floor(10*Math.random()),text:"",author:"",display:"block",size:"24px"},a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){return fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(e){t.setState({data:e})}))}),2e3)}},{key:"handleClick",value:function(){var t=this,e=this.state.data.length,s=Math.floor(Math.random()*e),a=this.state.data[s].text,n=this.state.data[s].author;a.length>100?this.setState({size:"14px"}):a.length>60?this.setState({size:"18px"}):this.setState({size:"24px"}),this.setState({n:s,text:a,author:n}),this.setState({display:"none"}),setTimeout((function(){t.setState({display:"block"})}),1)}},{key:"componentWillUnmount",value:function(){clearTimeout()}},{key:"render",value:function(){return this.state.data.length?Object(u.jsx)(p,{text:this.state.text,author:this.state.author,handleClick:this.handleClick,display:this.state.display,size:this.state.size}):Object(u.jsx)(j,{})}}]),s}(n.a.Component);s(14);c.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2cbfa673.chunk.js.map