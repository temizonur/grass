(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{635:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(130),l=n(613),o=n(640),u=n(397),i=n(659),s=n(641),m=n(26),f=n(50),d=n(131),b=n(150),E=n(143),g=n(151),O=function(e){var t=e.c,n=e.f,r=t.courses.filter((function(e){return 1==e.visible}));return a.a.createElement(l.a.Cell,{selectable:!0,style:{backgroundColor:t.color?t.color:null},textAlign:"center"},r.length<4?a.a.createElement(j,{visibleCourses:r,c:t}):t.visible?a.a.createElement(j,{visibleCourses:r,c:t,upper:!0}):a.a.createElement(h,{visibleCourses:r,c:t}),a.a.createElement(s.a,{icon:"",fluid:!0},a.a.createElement(s.a.Menu,null,a.a.createElement(s.a.Item,{onClick:function(){return n.findCellTime(t)}},"Bu saatte ders ara"),a.a.createElement(s.a.Item,{onClick:function(){return n.notFindCellTime(t)}},"Bu saatte ders arama"),a.a.createElement(s.a.Item,{onClick:function(){return n.resetCellTime(t)}},"S\u0131f\u0131rla"))))},h=function(e){e.visibleCourses;var t=e.c,n=Object(m.b)();return a.a.createElement(a.a.Fragment,null,t.courses.filter((function(e){return e.visible})).slice(0,3).map((function(e){return a.a.createElement("div",{key:e.name},a.a.createElement(d.f,{style:{marginTop:"0.5em"},color:e.color},a.a.createElement(d.d,{color:"white",bold:!0},e.name)),a.a.createElement("br",null))})),a.a.createElement(u.a,{name:"caret down",onClick:function(){n(Object(f.z)(t,!0))}}))},j=function(e){var t=e.visibleCourses,n=e.c,r=e.upper,c=Object(m.b)();return a.a.createElement(a.a.Fragment,null,0!==t.length&&n.courses.filter((function(e){return e.visible})).map((function(e){return a.a.createElement("div",{key:e.name},a.a.createElement(d.f,{color:e.color,style:{marginTop:"0.5em"}},a.a.createElement(d.d,{color:"white",bold:!0},e.name)),a.a.createElement("br",null))})),r?a.a.createElement(u.a,{name:"caret up",onClick:function(){c(Object(f.z)(n,!1))}}):null)},p=function(){var e=Object(m.c)((function(e){return e.courses.selectedCourses})),t=Object(m.c)((function(e){return e.courses.scenarios})),n=Object(r.useState)(0),s=Object(c.a)(n,2),g=s[0],h=s[1],j=Object(m.c)((function(e){return e.courses.cells})),p=Object(m.c)((function(e){return e.courses.extraHours})),C=Object(m.b)(),y=Object(r.useState)([]),v=Object(c.a)(y,2),k=v[0],S=v[1],w=Object(r.useState)(!1),R=Object(c.a)(w,2),F=R[0],T=R[1],N=Object(r.useState)(!1),x=Object(c.a)(N,2),A=x[0],H=x[1];Object(r.useEffect)((function(){t.length>0&&g>0&&C(Object(f.x)(t[g-1]))}),[g,t]),Object(r.useEffect)((function(){t.length>0?(H(!0),h(1)):(h(0),H(!1),C(Object(f.x)(e)))}),[t]);var M={findCellTime:function(e){C(Object(f.l)(e))},notFindCellTime:function(e){C(Object(f.m)(e))},resetCellTime:function(e){C(Object(f.v)(e))}},z=function(){T(!F)};return Object(r.useEffect)((function(){for(var e=[],t=function(t){e.push(a.a.createElement(l.a.Row,{style:{opacity:F||t<=8?null:"0,0",position:F||t<=8?null:"absolute",left:F||t<=8?null:"-999999px"},key:t},a.a.createElement(l.a.Cell,{style:{backgroundColor:"#F9FAFB"}},a.a.createElement(d.d,{color:"green",bold:!0},0===t?"09":t+9,":00")),j.filter((function(e){return e.time===t})).sort((function(e,t){return e.day-t.day})).map((function(e){return a.a.createElement(O,{key:e.id,c:e,f:M})}))))},n=0;n<14;n++)t(n);S(e)}),[j,F]),0===j.length||0===k.length?a.a.createElement(b.a,null):a.a.createElement(l.a,{celled:!0,size:"small",unstackable:E.isMobile},a.a.createElement(l.a.Header,null,a.a.createElement(l.a.Row,null,a.a.createElement(l.a.HeaderCell,{textAlign:"center"},a.a.createElement(o.a,{content:"Herhangi bir saate t\u0131kla",trigger:a.a.createElement(u.a,{name:"question circle outline",color:"grey",size:"big"}),position:"right center"})),a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"Pazartesi")),a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"Sal\u0131")),a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"\xc7ar\u015famba")),a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"Per\u015fembe")),a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"Cuma")))),a.a.createElement(l.a.Body,null,k.map((function(e){return e}))),a.a.createElement(l.a.Footer,{fullWidth:!0},a.a.createElement(l.a.Row,{column:1,textAlign:"center",style:{opacity:A?null:"0,0",position:A?null:"absolute",left:A?null:"-999999px"}},a.a.createElement(l.a.Cell,{colSpan:"6"},a.a.createElement(i.a,{activePage:g,onPageChange:function(e,t){return function(e,t){h(t.activePage)}(0,t)},firstItem:null,lastItem:null,pointing:!0,secondary:!0,totalPages:t.length}))),a.a.createElement(l.a.Row,{textAlign:"center",column:1},a.a.createElement(l.a.Cell,{selectable:!0,colSpan:"6",onClick:function(){return z()}},a.a.createElement(u.a,{color:p?"green":"blue",name:F?"sort up":"dropdown",size:"large",onClick:function(){return z()}})))))},C=n(297),y=n(5),v=n(1),k=n(147),S=n(49),w=function(e){var t=e.stack,n=Object(m.b)(),o=Object(r.useState)(t.visible),i=Object(c.a)(o,2),s=i[0],b=i[1],E=Object(r.useState)(t.eye),O=Object(c.a)(E,2),h=O[0],j=O[1],p=function(){b(!s)};return s?t.courses.sort(g.a).map((function(e,n){return a.a.createElement(R,{c:e,key:e.id,last:n===t.courses.length-1,toggleStackVisibility:p})})):a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,null,a.a.createElement(d.d,{color:"blue",bold:!0},t.shortName," "),t.courses.sort(g.a).map((function(e){return a.a.createElement(d.d,{color:"green",bold:!0,key:e.id},e.sectionCode," ")})),a.a.createElement(u.a,{name:"delete",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){n(Object(f.u)(t))}}),a.a.createElement(u.a,{name:"caret down",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){return p()}}),a.a.createElement(u.a,{name:h?"eye":"eye slash",color:h?"green":"red",style:{float:"right",cursor:"pointer"},onClick:function(){return n(Object(f.A)(t,!h)),void j(!h)}})))},R=function(e){var t=e.c,n=e.last,r=e.toggleStackVisibility,c=Object(m.b)();return a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,null,a.a.createElement(d.d,{color:"blue",bold:!0},t.name," "),a.a.createElement(u.a,{name:"delete",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){var e;e=t,c(Object(f.t)(e))}}),a.a.createElement(u.a,{name:t.visible?"eye":"eye slash",color:t.visible?"green":"red",style:{float:"right",cursor:"pointer"},onClick:function(){return e=t,void c(Object(f.h)(e));var e}}),n&&a.a.createElement(u.a,{name:"caret up",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){return r()}}),"STAFF STAFF"!==t.parentName&&a.a.createElement(S.b,{to:Object(k.d)(t)},a.a.createElement(u.a,{name:"comment",color:"green",style:{float:"right",cursor:"pointer"}}))))},F=function(){var e=Object(m.c)((function(e){return e.courses.selectedCourses})),t=Object(r.useState)(0),n=Object(c.a)(t,2),o=n[0],u=n[1],i=Object(r.useState)(0),s=Object(c.a)(i,2),f=s[0],b=s[1],E=Object(r.useState)([]),g=Object(c.a)(E,2),O=g[0],h=g[1];Object(r.useEffect)((function(){u(e.filter((function(e){return!0===e.visible})).reduce((function(e,t){return e+Number(t.credits)}),0)),b(e.filter((function(e){return!0===e.visible})).length),h(j())}),[e]);var j=function(){var t=O.filter((function(t){return e.map((function(e){return"".concat(e.areaCode).concat(e.digitCode)})).includes(t.shortName)})).map((function(t){var n=t.courses.filter((function(t){return e.map((function(e){return e.id})).includes(t)}));return Object(v.a)(Object(v.a)({},t),{},{courses:n})})),n=Object(y.a)(t);return e.forEach((function(e){var t=n.find((function(t){return t.shortName==="".concat(e.areaCode).concat(e.digitCode)}));t?t.courses.push(e):n.push({courses:[e],shortName:"".concat(e.areaCode).concat(e.digitCode),visible:!1,eye:!0})})),n};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{maxHeight:"70vh",overflow:"auto",marginBottom:"1em"}},a.a.createElement(l.a,{columns:1},a.a.createElement(l.a.Header,null,a.a.createElement(l.a.Row,null,a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"Se\xe7ili Dersler"),a.a.createElement(d.d,{color:"green",bold:!0,style:{float:"right"}},o," Kredi"),a.a.createElement(d.d,{color:"green",bold:!0,style:{float:"right",marginRight:"1em"}},f," Ders")))),a.a.createElement(l.a.Body,null,0===O.length?a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,null,a.a.createElement("span",{style:{visibility:"hidden"}},"a"))):O.map((function(e,t){return 1===e.courses.length?a.a.createElement(R,{c:e.courses[0],key:e.courses[0].id}):a.a.createElement(w,{stack:e,id:t,key:t})}))))))},T=n(650),N=function(e){var t=e.rc,n=e.stack,o=Object(m.b)(),i=Object(r.useState)(n.visible),s=Object(c.a)(i,2),b=s[0],E=s[1],O=function(){E(!b)};return b?n.courses.sort(g.a).map((function(e,r){return a.a.createElement(x,{rc:t,key:e.id,course:e,last:r===n.courses.length-1,toggleStackVisibility:O})})):a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,null,a.a.createElement(d.d,{color:"blue",bold:!0},n.shortName," "),n.courses.sort(g.a).map((function(e){return a.a.createElement(d.d,{color:"green",bold:!0},e.sectionCode," ")})),a.a.createElement(u.a,{name:"delete",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){o(Object(f.s)(n))}}),a.a.createElement(u.a,{name:"caret down",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){return O()}})))},x=function(e){var t=e.rc,n=e.course,r=e.last,c=e.toggleStackVisibility,o=Object(m.b)();return a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,null,a.a.createElement(d.d,{color:"blue",bold:!0},n.name),a.a.createElement(u.a,{name:"cancel",color:"green",style:{float:"right"},onClick:function(){return function(e,t){o(Object(f.q)(e,t))}(t,n)}})," ",r?a.a.createElement(u.a,{name:"caret up",color:"green",style:{float:"right",cursor:"pointer"},onClick:function(){return c()}}):null))},A=function(e){var t=e.rc,n=e.i,i=Object(m.b)(),b=Object(m.c)((function(e){return e.courses.selectedCourses})),E=Object(m.c)((function(e){return e.courses.requiredCourses})),O=Object(r.useState)([]),h=Object(c.a)(O,2),j=h[0],p=h[1],y=Object(r.useState)([]),v=Object(c.a)(y,2),k=v[0],S=v[1];Object(r.useEffect)((function(){p(R())}),[b,E]),Object(r.useEffect)((function(){S(w(t.courses))}),[t]);var w=function(e){var t=[];return e.forEach((function(e){var n=t.find((function(t){return t.shortName==="".concat(e.areaCode).concat(e.digitCode)}));n?n.courses.push(e):t.push({courses:[e],shortName:"".concat(e.areaCode).concat(e.digitCode),visible:!1})})),t},R=function(){for(var e=[],n=0;n<b.length;n++)if(!F(b[n])){var r=T(b[n]);r&&r.id!==t.id||e.push(b[n])}return w(e).forEach((function(t){t.courses.length>1&&e.push({name:"".concat(t.shortName," HEPS\u0130"),courses:t.courses,stack:!0})})),e},F=function(e){for(var t=0;t<E.length;t++){if(E[t].courses.find((function(t){return t.id===e.id})))return!0}return!1};function T(e){for(var t=0;t<E.length;t++){if(E[t].courses.find((function(t){return t.digitCode===e.digitCode&&t.areaCode===e.areaCode})))return E[t]}}return a.a.createElement(C.a.Column,{style:{marginTop:"1em"}},a.a.createElement(l.a,null,a.a.createElement(l.a.Header,null,a.a.createElement(l.a.Row,null,a.a.createElement(l.a.HeaderCell,null,a.a.createElement(d.d,{color:"blue",bold:!0},"Kesin Olmal\u0131 Ders Grubu ",n+1),n>0?a.a.createElement(u.a,{color:"green",name:"cancel",style:{float:"right"},onClick:function(){return function(e){i(Object(f.r)(e))}(t)}}):a.a.createElement(o.a,{content:"Her bir Kesin Olmal\u0131 Ders Grubu alt\u0131nda yer alan derslerden sadece bir tanesi her olas\u0131 program\u0131n\u0131zda kesin yer alacak.",trigger:a.a.createElement(u.a,{name:"question circle outline",color:"grey",style:{float:"right"},size:"large"}),position:"top center"})))),a.a.createElement(l.a.Body,null,a.a.createElement(l.a.Row,null,a.a.createElement(l.a.Cell,null,a.a.createElement(s.a,{text:"Se\xe7ili Derslerden EKLE",className:"icon",button:!0,basic:!0,fluid:!0,scrolling:!0,pointing:(n+1)%5===0&&0===j.length?"right":"up"},a.a.createElement(s.a.Menu,null,0===j.length?a.a.createElement(s.a.Item,null,"Buraya eklenecek ba\u015fka uygun bir ders yok."):j.sort(g.a).map((function(e){return a.a.createElement(s.a.Item,{onClick:function(){return function(e,t){t.stack?i(Object(f.e)(e,t)):i(Object(f.d)(e,t))}(t,e)},key:e.name},e.name)})))))),k.map((function(e){return 1===e.courses.length?a.a.createElement(x,{rc:t,course:e.courses[0],key:e.id}):a.a.createElement(N,{rc:t,stack:e,key:e.id})})))))},H=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.courses.requiredCourses}));return a.a.createElement(a.a.Fragment,null,t.sort((function(e,t){return Number(e.id)-Number(t.id)})).map((function(e,t){return a.a.createElement(A,{rc:e,i:t,key:e.id})})),a.a.createElement(C.a.Column,{style:{visibility:t.length>9?"hidden":"visible",marginTop:"1em"}},a.a.createElement(T.a,{icon:!0,onClick:function(){e(Object(f.b)())},color:"blue"},a.a.createElement(u.a,{name:"add"}))))},M=n(629),z=n(628),B=n(159),D=n.n(B),P=n(643),K=n(34),I=function(e){var t=e.course,n=Object(m.c)((function(e){return e.user})),l=Object(m.b)(),o=Object(r.useState)(!1),i=Object(c.a)(o,2),s=i[0],f=i[1];Object(r.useEffect)((function(){f(n.followingCourses.includes(t.id))}),[n]);return"STAFF STAFF"===t.parentName?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,onClick:function(){l(s?Object(K.n)(n,t.id):Object(K.d)(n,t.id))},style:{float:"right",fontSize:"0.8em"}},a.a.createElement(u.a,{name:"sliders"})," ",s?"Kota Takip B\u0131rak":"Kota Takip Et"))},L=function(e){var t=e.course,n=Object(m.c)((function(e){return e.courses.selectedCourses})),r=Object(m.b)();return a.a.createElement("div",{style:{margin:"0.8em",cursor:"pointer"}},a.a.createElement(P.a,{fluid:!0,style:{padding:"0.5em"},onClick:function(){return function(){var e=n.find((function(e){return e.id===t.id}));e&&e.clicked?r(Object(f.t)(t)):r(Object(f.c)(t))}()},onMouseEnter:function(){n.find((function(e){return e.id===t.id}))||r(Object(f.o)(t))},onMouseLeave:function(){return function(){var e=n.find((function(e){return e.id===t.id}));e&&!e.clicked&&r(Object(f.n)(t))}()}},a.a.createElement(P.a.Header,{style:{display:"inline"}},a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,nolink:!0},t.name)," ","\u2022"," ",a.a.createElement(d.d,{color:"green",bold:!0,pointer:!0,nolink:!0},t.parentName),"STAFF STAFF"!==t.parentName&&a.a.createElement(S.b,{to:Object(k.d)(t)},a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,style:{float:"right",fontSize:"0.8em"}},a.a.createElement(u.a,{name:"comments"}),"Yorumlara bak"))),a.a.createElement(P.a.Meta,null,t.fullName," ",a.a.createElement(I,{course:t})),a.a.createElement(P.a.Description,null,a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,nolink:!0},a.a.createElement(u.a,{name:"calendar"}),t.days.map((function(e){return 0===e?"M":1===e?"T":2===e?"W":3===e?"Th":"F"})))," ","\u2022"," ",a.a.createElement(d.d,{color:"green",bold:!0,pointer:!0,nolink:!0},a.a.createElement(u.a,{name:"clock"}),t.hours)," ","\u2022"," ",a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,nolink:!0},t.credits," Kredi"),a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,style:{float:"right",fontSize:"0.8em"},onClick:function(){r(Object(f.a)(t.areaCode,t.digitCode))}},a.a.createElement(u.a,{name:"add"}),"B\xfct\xfcn sectionlar\u0131 ekle"),a.a.createElement("br",null),a.a.createElement(d.d,{color:"Online"===t.place?"blue":"green",bold:!0,pointer:!0,nolink:!0},t.place," Ders")," ","\u2022"," ",a.a.createElement(d.d,{color:"Online"===t.place?"blue":"green",bold:!0,pointer:!0,nolink:!0},t.final," Final"),"STAFF STAFF"!==t.parentName&&a.a.createElement("a",{target:"_blank",href:"http://registration.boun.edu.tr/scripts/schedule/coursedescription.asp?course=".concat(t.areaCode).concat(t.digitCode,"&section=").concat(t.sectionCode,"&term=2019%2F2020-1")},a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,style:{float:"right",fontSize:"0.8em"}},a.a.createElement(u.a,{name:"file alternate"}),"Ge\xe7mi\u015f Syllabusa Bak")))))},q=(n(221),function(e,t,n,r,a){var c=t.toUpperCase(),l=e.filter((function(e){return!a||"Online"!==e.place})).filter((function(e){return e.name.toUpperCase().includes(c)||e.parentName.toUpperCase().includes(c)})).sort(g.a);return n.length>0&&(l=l.filter((function(e){var t=0;return e.days.forEach((function(r,a){n.forEach((function(n){e.days[a]===n.day&&e.hours[a]===n.hour&&t++}))})),t===n.length}))),r.length>0&&(l=l.filter((function(e){var t=!1;return e.days.forEach((function(n,a){r.forEach((function(n){e.days[a]===n.day&&e.hours[a]===n.hour&&(t=!0)}))})),!t}))),l}),G=function(){var e=Object(m.c)((function(e){return e.courses.count})),t=Object(m.c)((function(e){return e.courses.start})),n=Object(m.c)((function(e){return e.courses.hasMore})),l=Object(m.c)((function(e){return e.courses.courses})),i=Object(m.c)((function(e){return e.courses.findTime})),s=Object(r.useState)(""),d=Object(c.a)(s,2),E=d[0],g=d[1],O=Object(m.c)((function(e){return e.courses.notFindTime})),h=Object(m.b)(),j=Object(r.useState)([]),p=Object(c.a)(j,2),C=p[0],y=p[1],v=Object(r.useState)(!1),k=Object(c.a)(v,2),S=k[0],w=k[1],R=Object(r.useState)(!0),F=Object(c.a)(R,2),T=F[0],N=F[1],x=Object(r.useRef)(!1),A=Object(r.useRef)(!1),H=Object(r.useState)(!1),B=Object(c.a)(H,2),P=B[0],K=B[1],I=Object(r.useRef)(""),G=Object(r.useState)(null),V=Object(c.a)(G,2),U=V[0],W=V[1];Object(r.useEffect)((function(){h(Object(f.w)(0,e,x,A,E,i.map((function(e){return e.id})),O.map((function(e){return e.id})),P))}),[E,i,O,P]),Object(r.useEffect)((function(){y(q(l,E,i,O,P))}),[l,i,O,P]);Object(r.useEffect)((function(){x.current&&0===C.length?N(!0):0!==C.length&&x.current&&N(!1),x.current?w(!0):w(!1)}),[C,x]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.a.createElement(M.a,{icon:"search",placeholder:"Ders Aray\u0131n...",value:I.current,onChange:function(e){return function(e){I.current=e.target.value,U&&clearTimeout(U),W(setTimeout((function(){g(I.current)}),300))}(e)},lang:"tr",size:"big",style:{width:"90%",marginLeft:"1em"}}),a.a.createElement(o.a,{content:a.a.createElement(z.a,{checked:P,onClick:function(){return K(!P)},label:"Sadece Offline Dersleri G\xf6ster"}),position:"bottom right",hoverable:!0,trigger:a.a.createElement(u.a,{name:"filter",color:"blue",size:"big",style:{paddingLeft:"0.5em"},fitted:!0})})),a.a.createElement("div",{style:{overflow:"auto",maxHeight:"70vh",marginTop:"1em"}},S?T?a.a.createElement("div",null,"Sonu\xe7 bulunamad\u0131."):a.a.createElement(D.a,{pageStart:0,loadMore:function(){A.current||h(Object(f.w)(t,e,x,A,E,i.map((function(e){return e.id})),O.map((function(e){return e.id})),P))},hasMore:n,loader:a.a.createElement("div",{className:"loader",key:0},a.a.createElement(b.a,{skeletonLength:1})),useWindow:!1},C.map((function(e){return a.a.createElement(L,{course:e,key:e.id})}))):a.a.createElement(b.a,null)))},V=(n(220),function(e){return e.reduce((function(e,t){return e[t]=t,e}),{})}),U=function(){var e=Object(m.c)((function(e){return e.courses.creditsRange})),t=Object(m.b)();return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(d.d,{color:"blue",bold:!0},"Kredi Aral\u0131\u011f\u0131")),a.a.createElement(d.g,{min:2,max:40,allowCross:!1,onChange:function(e){t(Object(f.i)(e))},value:e,marks:V(e),trackStyle:[{backgroundColor:"#21ba45"},{backgroundColor:"#21ba45"}]}))},W=n(645),J=function(){var e=Object(m.c)((function(e){return e.courses.conflict.conflictRange})),t=Object(m.b)();return a.a.createElement("div",null,a.a.createElement("p",null,"En fazla ka\xe7 saat conflict olabilsin?"),a.a.createElement(d.h,{min:1,max:40,onChange:function(e){t(Object(f.f)(e))},value:e,marks:Y(e),trackStyle:{backgroundColor:"#21ba45"}}))},Y=function(e){return[e].reduce((function(e,t){return e[t]=t,e}),{})},_=function(){var e=Object(m.c)((function(e){return e.courses.conflict})),t=Object(r.useState)(!1),n=Object(c.a)(t,2),l=n[0],o=n[1],i=Object(r.useState)(!1),s=Object(c.a)(i,2),b=s[0],E=s[1],g=Object(m.b)();return a.a.createElement(W.a,{style:{display:"inline-block"}},a.a.createElement(W.a.Title,{active:l,index:0},a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(z.a,{defaultChecked:e.makeConflict,onChange:function(){return g(Object(f.p)()),E(!b),void o(!b)}}),a.a.createElement(d.d,{color:"blue",bold:!0,pointer:!0,onClick:function(){return o(!l)},style:{marginLeft:"0.5em"}},"Conflicte izin ver"),a.a.createElement(u.a,{name:"caret down",color:"blue",onClick:function(){return o(!l)},style:{marginLeft:"0.3em"}}))),a.a.createElement(W.a.Content,{active:l,style:{marginLeft:"1em"}},a.a.createElement(J,null)))},Q=function(e){return e.reduce((function(e,t){return e[t]=t,e}),{})},X=function(){var e=Object(m.c)((function(e){return e.courses.courseRange})),t=Object(m.b)();return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(d.d,{color:"blue",bold:!0},"Ders Aral\u0131\u011f\u0131")),a.a.createElement(d.g,{min:2,max:20,allowCross:!1,onChange:function(e){t(Object(f.g)(e))},value:e,marks:Q(e),trackStyle:[{backgroundColor:"#21ba45"},{backgroundColor:"#21ba45"}]}))},Z=n(0),$=n.n(Z),ee=n(3),te=n(9),ne=n.n(te);var re=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.courses.courseRange})),n=Object(m.c)((function(e){return e.courses.scenariosSlider})),l=Object(m.c)((function(e){return e.courses.creditsRange})),o=Object(m.c)((function(e){return e.courses.requiredCourses})),u=Object(m.c)((function(e){return e.courses.conflict})),i=Object(m.c)((function(e){return e.courses.tryEmptyDay})),s=Object(m.c)((function(e){return e.courses.selectedCourses})),d=Object(r.useState)("Program Olu\u015ftur"),b=Object(c.a)(d,2),E=b[0],O=b[1],h=Object(r.useState)(!1),j=Object(c.a)(h,2),p=j[0],C=j[1];Object(r.useEffect)((function(){p&&function(e,t,n,r,a){var c;c=e.filter((function(e){return e.courses.length>0})).length>0?n(r):a(r);c.length>0?(t(Object(f.y)(c)),O("Program Olu\u015fturuldu")):(t(Object(f.y)([])),O("Bu Parametrelerde Program Olu\u015fturulamad\u0131"));C(!1)}(o,e,k,n,S)}),[p]);var v=function(){var e=Object(ee.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=M()).can){e.next=4;break}return O(t.error),e.abrupt("return");case 4:C(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=[],n=o.filter((function(e){return e.courses.length>0})),r=function(e){var t=[],n=e.map((function(e){return e.courses}));return n=ne.a.flatten(n),s.forEach((function(e){var r=!1;n.forEach((function(t){t.areaCode===e.areaCode&&t.digitCode===e.digitCode&&(r=!1)})),r||t.push(e)})),t}(n),a=Object(y.a)(n.map((function(e){return e.courses}))),c=F(r).map((function(e){return[,].concat(Object(y.a)(e.courses))}));return w(a,c,t,e),t},S=function(e){var t=[],n=F(s).map((function(e){return[,].concat(Object(y.a)(e.courses))}));return R(n,t,e),t},w=function(e,t,n,r){var a=e.length-1;!function c(l,o){for(var u=0,i=e[o].length;u<i&&n.length!==r;u++){var s=l.slice(0);s.push(e[o][u]),o==a?R(t,n,r,s):c(s,o+1)}}([],0)},R=function(e,t,n,r){var a=e.length-1;!function c(l,o){for(var u=0,i=e[o].length;u<i&&t.length!==n;u++){var s=l.slice(0);e[o][u]&&s.push(e[o][u]),o==a?(r&&(s=[].concat(Object(y.a)(s),Object(y.a)(r))),N(s)&&t.push(s)):c(s,o+1)}}([],0)},F=function(e){var t=[];return e.sort(g.a).forEach((function(e){var n=t.find((function(t){return t.shortName==="".concat(e.areaCode).concat(e.digitCode)}));n?n.courses.push(e):t.push({courses:[e],shortName:"".concat(e.areaCode).concat(e.digitCode)})})),t},N=function(e){return!!(function(e,t,n,r){var a=Math.min.apply(Math,[t,n]),c=Math.max.apply(Math,[t,n]);return r?e>=a&&e<=c:e>a&&e<c}(e.length,t[0],t[1],!0)&&H(e)&&A(e)&&x(e))},x=function(e){var t=z(e);return u.makeConflict?!(t>u.conflictRange):!(t>0)},A=function(e){return!i||5!==D(e)},H=function(e){return!(B(e)>l[1])},M=function(){var e=ne.a.uniqBy(s,(function(e){return"".concat(e.areaCode).concat(e.digitCode)}));return e.length<t[0]?{can:!1,error:"Minimum Ders Aral\u0131\u011f\u0131 Kar\u015f\u0131lanm\u0131yor!"}:B(e)<l[0]?{can:!1,error:"Minimum Kredi Aral\u0131\u011f\u0131 Kar\u015f\u0131lanm\u0131yor!"}:{can:!0}},z=function(e){return function(e){var t=[],n=[];return e.forEach((function(e){t.push(e.cellIds),n=ne.a.union(n,e.cellIds)})),(t=ne.a.flatten(t)).length-n.length}(e)},B=function(e){return e.reduce((function(e,t){return e+Number(t.credits)}),0)},D=function(e){var t=[];return e.forEach((function(e){t=ne.a.union(t,e.days)})),t.length};return a.a.createElement("div",null,a.a.createElement(T.a,{color:"Program Olu\u015fturuldu"===E||"Program Olu\u015ftur"===E?"blue":"red",onClick:function(){return v()},loading:p,fluid:!0},E))},ae=function(e){return[e].reduce((function(e,t){return e[t]=t,e}),{})},ce=function(){var e=Object(m.c)((function(e){return e.courses.scenariosSlider})),t=Object(m.b)();return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(d.d,{color:"blue",bold:!0},"Maksimum Senaryo Say\u0131s\u0131")),a.a.createElement(d.h,{min:1,max:50,onChange:function(e){t(Object(f.j)(e))},value:e,marks:ae(e),trackStyle:{backgroundColor:"#21ba45"}}))},le=function(){var e=Object(m.c)((function(e){return e.courses.tryEmptyDay})),t=Object(m.b)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Column,null,a.a.createElement(re,null))),a.a.createElement(C.a.Row,{style:{marginTop:"1.6em"}},a.a.createElement(C.a.Column,null,a.a.createElement(U,null))),a.a.createElement(C.a.Row,{style:{marginTop:"1.6em"}},a.a.createElement(C.a.Column,null,a.a.createElement(X,null))),a.a.createElement(C.a.Row,{style:{marginTop:"1.6em"}},a.a.createElement(C.a.Column,null,a.a.createElement(ce,null))),a.a.createElement(C.a.Row,{style:{marginTop:"1.6em"}},a.a.createElement(C.a.Column,null,a.a.createElement(z.a,{defaultChecked:e,onChange:function(){t(Object(f.B)())},label:a.a.createElement(d.d,{color:"blue",bold:!0}," ","Bir g\xfcn\xfc bo\u015fta b\u0131rak")}))),a.a.createElement(C.a.Row,{style:{marginTop:"1em"}},a.a.createElement(C.a.Column,null,a.a.createElement(_,null))))};t.default=function(){return E.isMobile?a.a.createElement("div",{style:{height:"150vh"}},a.a.createElement(C.a,{style:{margin:"0.5em"}},a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Column,null,a.a.createElement(p,null))),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Column,null,a.a.createElement(F,null))),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Column,null,a.a.createElement(G,{stretched:!0}))),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Column,null,a.a.createElement(le,null))),a.a.createElement(C.a.Row,{columns:1},a.a.createElement(H,null)))):a.a.createElement("div",{style:{height:"150vh"}},a.a.createElement(C.a,{columns:3,style:{margin:"0.5em"}},a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Column,{stretched:!0,width:6},a.a.createElement(p,null),a.a.createElement(le,null)),a.a.createElement(C.a.Column,{width:4},a.a.createElement(F,null)),a.a.createElement(C.a.Column,null,a.a.createElement(G,{stretched:!0}))),a.a.createElement(C.a.Row,{columns:5},a.a.createElement(H,null))))}}}]);
//# sourceMappingURL=17.ba24705c.chunk.js.map