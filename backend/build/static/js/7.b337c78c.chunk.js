(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{148:function(e,t,n){var r=n(160);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(130),a=n(2),o=n.n(a),c=n(295),i=n(641),u=n(397),l=n(51),s=n(26),f=n(131),m=n(174),p=n.n(m),d=n(10),y=function(e){return"mostRecent"===e?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{name:"fire",color:"blue"}),o.a.createElement(f.d,{color:"blue",pointer:!0,bold:!0},"En Yeni")):"mostPast"===e?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{name:"time",color:"blue"}),o.a.createElement(f.d,{color:"blue",pointer:!0,bold:!0},"En Eski")):"mostPopular"===e?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{name:"paw",color:"blue"}),o.a.createElement(f.d,{color:"blue",pointer:!0,bold:!0},"En Patili")):void 0},b=function(e){return"today"===e?"Bug\xfcn":"lastWeek"===e?"Bu Hafta":"lastMonth"===e?"Bu Ay":"allTime"===e?"T\xfcm Zamanlar":"tomorrow"===e?"Yar\u0131n":"nextWeek"===e?"Bu Hafta":"nextMonth"===e?"Bu Ay":void 0};t.b=function(){var e=Object(s.c)((function(e){return e.comments.filter})),t=Object(s.c)((function(e){return e.comments.daySort})),n=Object(s.b)(),m=Object(a.useState)(e),g=Object(r.a)(m,2),v=g[0],h=g[1],j=Object(a.useState)(t),E=Object(r.a)(j,2),O=E[0],x=E[1],k=Object(a.useRef)(),w=(Object(d.g)(),Object(d.h)());return Object(a.useEffect)((function(){var e=p.a.parse(w.search);e.sort&&e.day&&(h(e.sort),x(e.day))}),[]),Object(a.useEffect)((function(){if(k.current)window.history.replaceState(null,"Boun \xc7im - Daha iyi bir Bo\u011fazi\xe7i Deneyimi","?sort=".concat(v,"&day=").concat(O));else{var e=p.a.parse(w.search);e.sort||e.day||window.history.replaceState(null,"Boun \xc7im - Daha iyi bir Bo\u011fazi\xe7i Deneyimi","?sort=".concat(v,"&day=").concat(O)),k.current=!0}}),[v,O]),Object(a.useEffect)((function(){n(Object(l.i)(v))}),[v]),Object(a.useEffect)((function(){n(Object(l.d)(O))}),[O]),o.a.createElement(c.a,{style:{marginBottom:"0"},pointing:!0,secondary:!0,color:"green"},o.a.createElement(c.a.Item,null,o.a.createElement(f.e,{text:y(v)},o.a.createElement(i.a.Menu,null,o.a.createElement(i.a.Item,{text:"En Yeni",onClick:function(){return h("mostRecent")}}),o.a.createElement(i.a.Item,{text:"En Eski",onClick:function(){return h("mostPast")}}),o.a.createElement(i.a.Item,{text:"En Patili",onClick:function(){return h("mostPopular")}})))),o.a.createElement(c.a.Item,null,o.a.createElement(f.e,{text:o.a.createElement(f.d,{color:"blue",bold:!0,pointer:!0},o.a.createElement(u.a,{name:"calendar alternate outline"}),b(O))},o.a.createElement(i.a.Menu,null,o.a.createElement(i.a.Item,{text:"Bug\xfcn",onClick:function(){return x("today")}}),o.a.createElement(i.a.Item,{text:"Bu Hafta",onClick:function(){return x("lastWeek")}}),o.a.createElement(i.a.Item,{text:"Bu Ay",onClick:function(){return x("lastMonth")}}),o.a.createElement(i.a.Item,{text:"T\xfcm Zamanlar",onClick:function(){return x("allTime")}})))))}},160:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},174:function(e,t,n){"use strict";var r=n(185),a=n(189),o=n(190),c=n(194),i=n(195),u=n(196);function l(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function f(e,t){return t.decode?i(e):e}function m(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){var t=(e=m(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var a="string"===typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=a};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var c,i=a(e.split("&"));try{for(i.s();!(c=i.n()).done;){var s=c.value,m=u(t.decode?s.replace(/\+/g," "):s,"="),p=r(m,2),y=p[0],b=p[1];b=void 0===b?null:["comma","separator"].includes(t.arrayFormat)?b:f(b,t),n(f(y,t),b,o)}}catch(k){i.e(k)}finally{i.f()}for(var g=0,v=Object.keys(o);g<v.length;g++){var h=v[g],j=o[h];if("object"===typeof j&&null!==j)for(var E=0,O=Object.keys(j);E<O.length;E++){var x=O[E];j[x]=d(j[x],t)}else o[h]=d(j,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=p,t.parse=y,t.stringify=function(e,t){if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[s(t,e),"[",a,"]"].join("")]:[[s(t,e),"[",s(a,e),"]=",s(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[s(t,e),"[]"].join("")]:[[s(t,e),"[]=",s(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null===r||void 0===r||0===r.length?n:0===n.length?[[s(t,e),"=",s(r,e)].join("")]:[[n,s(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[s(t,e)]:[[s(t,e),"=",s(r,e)].join("")])}}}}(t),a={},c=0,i=Object.keys(e);c<i.length;c++){var u=i[c];n(u)||(a[u]=e[u])}var f=Object.keys(a);return!1!==t.sort&&f.sort(t.sort),f.map((function(n){var a=e[n];return void 0===a?"":null===a?s(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):s(n,t)+"="+s(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var n=u(e,"#"),a=r(n,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:y(p(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:f(c,t)}:{})},t.stringifyUrl=function(e,n){n=Object.assign({encode:!0,strict:!0},n);var r=m(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query),i=t.stringify(c,n);i&&(i="?".concat(i));var u=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(s(e.fragmentIdentifier,n))),"".concat(r).concat(i).concat(u)}},185:function(e,t,n){var r=n(186),a=n(187),o=n(148),c=n(188);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||c()}},186:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},187:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}},188:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},189:function(e,t,n){var r=n(148);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,c=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(i)throw o}}}}},190:function(e,t,n){var r=n(191),a=n(192),o=n(148),c=n(193);e.exports=function(e){return r(e)||a(e)||o(e)||c()}},191:function(e,t,n){var r=n(160);e.exports=function(e){if(Array.isArray(e))return r(e)}},192:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},193:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},194:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},195:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=c(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(e)}n["%C2"]="\ufffd";for(var i=Object.keys(n),u=0;u<i.length;u++){var l=i[u];e=e.replace(new RegExp(l,"g"),n[l])}return e}(e)}}},196:function(e,t,n){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},651:function(e,t,n){"use strict";n.r(t);var r=n(130),a=n(2),o=n.n(a),c=n(154),i=n(632),u=n(297),l=n(654),s=n(397),f=function(e){var t="noLesson"===e.blocking?"hockey puck":"comment";return o.a.createElement(i.a,{fluid:!0},o.a.createElement(u.a,{verticalAlign:"middle",centered:!0,columns:1,stretched:!0,style:{height:"60vh"}},o.a.createElement(u.a.Row,{centered:!0,stretched:!0},o.a.createElement(u.a.Column,{textAlign:"center"},o.a.createElement(l.a,{as:"h1",color:"green"},o.a.createElement(s.a,{name:t,size:"massive"}),"Hen\xfcz takip etti\u011fin kimse yok ya da takip ettiklerine yorum yap\u0131lmam\u0131\u015f.")))))},m=n(26),p=n(159),d=n.n(p),y=n(51),b=n(254),g=n(150),v=n(162),h=n.n(v),j=n(151),E=n(296),O=function(e){var t=e.height,n=Object(m.c)((function(e){return e.comments.count})),c=Object(m.c)((function(e){return e.comments.start})),i=Object(m.c)((function(e){return e.comments.hasMore})),u=Object(m.c)((function(e){return e.comments.comments})),l=Object(m.c)((function(e){return e.comments.filter})),s=Object(m.c)((function(e){return e.comments.daySort})),p=Object(m.c)((function(e){return e.user})),v=Object(a.useState)([]),O=Object(r.a)(v,2),x=O[0],k=O[1],w=Object(m.b)(),S=Object(a.useRef)(!1),I=Object(a.useRef)(!1);Object(a.useEffect)((function(){S.current=!1,I.current=!1,w(Object(y.c)(0,n,l,S,I,s))}),[l,s]),Object(a.useEffect)((function(){k(function(e,t,n,r){var a=Object(j.b)(r);return e.filter((function(e){return t.following.includes(e["".concat(e.commentType)].id)})).filter((function(e){return null===a||h()(e.date)>=h()().subtract(a,"days")})).sort((function(e,t){return"mostRecent"===n?new Date(t.date)-new Date(e.date):"mostPast"===n?new Date(e.date)-new Date(t.date):"mostPopular"===n?t.likes.length-e.likes.length:void 0}))}(u,p,l,s))}),[l,c,u,s]);return S.current?0===x.length&&S.current?o.a.createElement(f,null):o.a.createElement(E.a,{basic:!0,style:{marginTop:0}},o.a.createElement("div",{style:{height:t||"50vh"}},o.a.createElement(d.a,{pageStart:0,loadMore:function(){I.current||w(Object(y.c)(c,n,l,S,I,s))},useWindow:!0,hasMore:i,loader:o.a.createElement(g.a,{key:1})},x.map((function(e){return o.a.createElement(b.a,{key:e.id,comment:e,showSource:!0})}))))):o.a.createElement(g.a,null)};var x=n(17);t.default=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],u=Object(a.useState)(),l=Object(r.a)(u,2),s=l[0],m=l[1];Object(a.useEffect)((function(){x.a.getFollowing(m)}),[]);return Object(a.useEffect)((function(){0===function(e){if(void 0!=e){var t=0;return t+=e.clubs.length,t+=e.lessons.length,t+=e.questions.length,t+=e.campuses.length,t+=e.dorms.length}return 0}(s)?i(!0):i(!1)}),[s]),n?o.a.createElement(f,null):o.a.createElement("div",null,o.a.createElement(c.b,null),o.a.createElement(O,{height:"90vh"}))}}}]);
//# sourceMappingURL=7.b337c78c.chunk.js.map