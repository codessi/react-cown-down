(this["webpackJsonpreact-count-down"]=this["webpackJsonpreact-count-down"]||[]).push([[0],{10:function(t,n,e){},11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e.n(c),s=e(4),a=e.n(s),r=(e(10),e(5)),u=e(1),i=(e(11),e(0)),d="SET_ENDTIME",l="SET_TIMELEFT",m="SET_SECONDS",p="SET_PAUSED",b={adjustedHour:0,endMinutes:0,remainderSeconds:0,seconds:0,inputSeconds:0,minutesLeft:0,paused:!1};function j(t,n){return n.type===l||n.type===d||n.type===m||n.type===p?Object(u.a)(Object(u.a)({},t),n.payload):void 0}var f=function(){var t=o.a.useReducer(j,b),n=Object(r.a)(t,2),e=n[0],c=n[1],s=e.adjustedHour,a=e.endMinutes,u=e.remainderSeconds,f=e.seconds,_=e.minutesLeft,h=e.paused,y=o.a.useRef(null);function O(t){var n=Math.floor(t/60);c({type:l,payload:{remainderSeconds:t,minutesLeft:n}})}function v(){clearInterval(y.current),y.current=null}function N(t){var n=parseInt(t);c({type:m,payload:{seconds:n,paused:!1}})}function x(){!function(t){c({type:p,payload:{paused:t,seconds:t?u:u-1}})}(!h)}return o.a.useEffect((function(){var t=Date.now()+1e3*f;return v(),O(f),function(t){var n=new Date(t),e=n.getHours(),o=e>12?e-12:e,s=n.getMinutes();c({type:d,payload:{adjustedHour:o,endMinutes:s}})}(t),h?v():y.current=setInterval((function(){var n=Math.round((t-Date.now())/1e3);if(n<0)return v(),function(t){c({type:m,payload:{seconds:t}})}(0);O(n)}),200),function(){return v()}}),[f,h]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"timer__controls top",children:[Object(i.jsx)("button",{onClick:function(){return N(20)},className:"timer__button",children:"20s"}),Object(i.jsx)("button",{onClick:function(){return N(300)},className:"timer__button",children:"5m"}),Object(i.jsx)("button",{onClick:function(){return N(900)},className:"timer__button",children:"15m"}),Object(i.jsx)("button",{onClick:function(){return N(1200)},className:"timer__button",children:"20m"}),Object(i.jsx)("button",{onClick:function(){return N(3600)},className:"timer__button",children:"1h"})]}),Object(i.jsxs)("div",{className:"display",children:[Object(i.jsx)("h1",{className:"display__time-left ".concat(u>0||_>0?"timer-running":"timer-not-running"),children:"".concat(_,":").concat(u%60<10?"0":"").concat(u%60)}),Object(i.jsx)("p",{className:"display__end-time",children:"Done At ".concat(s,":").concat(a<10?"0":"").concat(a)})]}),Object(i.jsx)("div",{className:"timer__controls bottom",children:Object(i.jsx)("button",{onClick:function(){return x()},className:"timer__button",disabled:!f,children:"Pause"})})]})};a.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8c77418a.chunk.js.map