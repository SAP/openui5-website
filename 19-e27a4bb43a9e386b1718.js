(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{mxKo:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),r=e.n(n),o=e("F2aA"),l=e.n(o);a.default=function(t){var a=t.startDate,e=Object(n.useState)(null),o=e[0],u=e[1];return Object(n.useEffect)((function(){var t=setInterval((function(){var e=Math.floor((a.getTime()-Date.now())/1e3);if(e>=0){var n=Math.floor(e/86400),r=e-86400*n,o=Math.floor(r/3600);r-=60*o*60;var l=Math.floor(r/60);r-=60*l;var c=[String(o).padStart(2,"0"),String(l).padStart(2,"0"),String(r).padStart(2,"0")].join(":");n>1?u(n+" days, "+c):1===n?u("1 day, "+c):a.getDate()!==(new Date).getDate()?u("Tomorrow, "+c):u("Today, "+c)}else u(null),clearInterval(t)}),1e3);return function(){clearInterval(t)}}),[]),o?r.a.createElement("div",{className:l.a.Countdown},o):null}}}]);
//# sourceMappingURL=19-e27a4bb43a9e386b1718.js.map