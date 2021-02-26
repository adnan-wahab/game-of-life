(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c,a,s=t(1),o=t.n(s),i=t(5),l=t.n(i),r=(t(11),t(12),t(4)),d=t(2),u=t(6),m=t(0),b="mx-1 relative inline-flex items-center \n  px-2 py-1 border border-gray-300 text-sm font-medium \n  rounded text-gray-700 bg-gray-50 hover:bg-gray-100 \n  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",f=function(e){var n=e.speed,t=e.handleIntervalChange,c=e.rows,a=e.handleRowChange,s=e.cols,o=e.handleColumnChange,i=e.isRunning,l=e.stopGame,r=e.runGame,d=e.handleRandom,u=e.handleClear,f=e.handleResize;return Object(m.jsxs)("div",{className:"flex mt-0 ml-20 text-white",children:[i?Object(m.jsx)("button",{className:b,onClick:l,children:"Pause \u23f8\ufe0e"}):Object(m.jsx)("button",{className:b,onClick:r,children:"Play \u25ba"}),Object(m.jsx)("button",{className:b,onClick:d,children:"Randomise"}),Object(m.jsx)("button",{className:b,onClick:u,children:"Clear"}),Object(m.jsx)("button",{className:b,onClick:f,children:"Resize"}),Object(m.jsxs)("div",{className:"px-5",children:[Object(m.jsx)("label",{className:"block text-sm font-medium",children:"Rows"}),Object(m.jsx)("div",{className:"mt-1",children:Object(m.jsx)("input",{className:"text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300",min:"10",max:"150",type:"number",value:c,onChange:a})})]}),Object(m.jsxs)("div",{className:"px-5",children:[Object(m.jsx)("label",{className:"block text-sm font-medium",children:"Cols"}),Object(m.jsx)("div",{className:"mt-1",children:Object(m.jsx)("input",{className:" text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border-gray-300",min:"10",max:"150",type:"number",value:s,onChange:o})})]}),Object(m.jsxs)("div",{className:"px-5",children:[Object(m.jsx)("label",{className:"block text-sm font-medium",children:"Speed"}),Object(m.jsxs)("div",{className:"mt-1",children:[Object(m.jsx)("input",{className:"rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128",min:"10",max:"1000",type:"range",value:n,onChange:t})," "+n,"ms"]})]})]})},j=function(e){var n=e.x,t=e.y,c=e.filled,a=e.speed,s=e.cell_size;return Object(m.jsx)("div",{className:(c?"cell":"empty")+" transition",style:{left:"".concat(s*n+1,"px"),top:"".concat(s*t+1,"px"),width:"".concat(s-1,"px"),height:"".concat(s-1,"px"),transitionDuration:a+"ms"}})},h=function(e){var n=e.handleClick,t=e.handleMouseMove,c=e.board,a=e.boardRef,s=e.cols,o=e.rows,i=e.speed,l=e.cells,r=e.cell_size;return Object(m.jsx)("main",{className:"min-w-0 flex-1 border-t border-gray-200 lg:flex",children:Object(m.jsx)("section",{className:"min-w-0 flex-1 h-full flex flex-col lg:order-last",children:Object(m.jsx)("div",{className:"Board m-auto",style:{width:s*r,height:o*r},onClick:n,onMouseMove:t,ref:a,children:c.map((function(e,n){return e.map((function(e,t){return Object(m.jsx)(j,{cell_size:r,speed:3*i,filled:l["".concat(n,",").concat(t)],x:n,y:t},"".concat(n,",").concat(t))}))}))})})})},x=(t(14),function(e,n){for(var t=[],c=0;c<n;c++){t[c]=[];for(var a=0;a<e;a++)t[c][a]=!1}return t}),g=function(e,n,t,c,a){for(var s=0,o=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],i=0;i<o.length;i++){var l=o[i],r=t+l[0],d=n+l[1];d<0&&(d=a-1),r<0&&(r=c-1),d<a&&r<c&&e[r][d]&&s++}return s},v=function(e){Object(u.a)(e);var n=Object(s.useRef)(null),t=Object(s.useState)(!1),o=Object(d.a)(t,2),i=o[0],l=o[1],b=Object(s.useState)(100),j=Object(d.a)(b,2),v=j[0],O=j[1],p=Object(s.useState)(30),w=Object(d.a)(p,2),y=w[0],C=w[1],N=Object(s.useState)(30),k=Object(d.a)(N,2),R=k[0],M=k[1];c=c||x(y,R),window.board=c,Object(s.useEffect)((function(){c=x(y,R)}),[R,y]);var S=function(e,n){for(var t=[],a=0;a<e;a++)for(var s=0;s<n;s++)c[a][s]&&(t["".concat(s,",").concat(a)]=!0);return t},z=Object(s.useState)([]),G=Object(d.a)(z,2),T=G[0],B=G[1],F=function(e){var t=function(e){var n=e.current.getBoundingClientRect(),t=document.documentElement;return{x:n.left+window.pageXOffset-t.clientLeft,y:n.top+window.pageYOffset-t.clientTop}}(n),a=e.clientX-t.x,s=e.clientY-t.y,o=Math.floor(a/20),i=Math.floor(s/20);o>=0&&o<=R&&i>=0&&i<=y&&(c[i][o]=!c[i][o]),B(S(y,R))},I=function e(){for(var n=x(y,R),t=0;t<y;t++)for(var s=0;s<R;s++){var o=g(c,s,t,y,R);c[t][s]?n[t][s]=2===o||3===o:n[t][s]=!c[t][s]&&3===o}c=n,B(S(y,R)),a=window.setTimeout(e,v)},L={speed:v,handleIntervalChange:function(e){O(e.target.value)},rows:y,handleRowChange:function(e){C(e.target.value)},cols:R,handleColumnChange:function(e){M(e.target.value)},isRunning:i,stopGame:function(){l(!1),a&&(window.clearTimeout(a),a=void 0)},runGame:function(){l(!0),I()},handleRandom:function(){for(var e=0;e<y;e++)for(var n=0;n<R;n++)c[e][n]=Math.random()>=.4;B(S(y,R))},handleClear:function(){c=x(y,R),B(S(y,R))},handleResize:function(){var e=window.innerHeight-55;C(e/20|0),M(window.innerWidth/20|0)}},P={handleClick:function(e){F(e)},handleMouseMove:function(e){e.shiftKey&&F(e)},board:c,boardRef:n,cols:R,rows:y,speed:v,cells:T,cell_size:20};return Object(m.jsxs)("div",{className:"bg-gray-100 shadow h-auto",children:[Object(m.jsx)("nav",{className:"bg-gradient-to-r from-light-blue-800 to-cyan-600 px-2",children:Object(m.jsx)("div",{className:"max-w-7xl mx-auto px-2 px-8",children:Object(m.jsx)("div",{className:"relative flex items-center justify-between h-16",children:Object(m.jsxs)("div",{className:"flex px-2  items-center justify-between",children:[Object(m.jsx)("div",{className:"flex-shrink-0 text-white ",children:"Conway's Game of Life"}),Object(m.jsx)(f,Object(r.a)({},L))]})})})}),Object(m.jsx)(h,Object(r.a)({},P))]})};var O=function(){return Object(m.jsx)(v,{})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),s(e),o(e)}))};l.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.8d8ce6c8.chunk.js.map