(this["webpackJsonpadd-repo"]=this["webpackJsonpadd-repo"]||[]).push([[0],{159:function(e,a,t){},180:function(e,a,t){"use strict";t.r(a);t(80),t(107),t(109),t(110),t(112),t(113),t(114),t(115),t(116),t(117),t(118),t(119),t(121),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(132),t(133),t(134),t(135),t(136),t(137),t(138),t(139),t(140),t(141),t(142),t(143),t(144),t(145),t(146),t(147),t(148),t(149);var c=t(0),s=t.n(c),n=t(76),m=t.n(n),l=t(22),i=t.n(l),d=t(49),r=t.n(d),o=t(77),E=t(33),u=t(78),N=t.n(u),v=(t(158),t(159),function(e){e.id,e.fetchedUser;return s.a.createElement("div",{id:"screen_1",className:"container"},s.a.createElement("div",{id:"header",className:"header"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-rus")}},s.a.createElement("div",{className:"img rus"}),s.a.createElement("span",{className:"txt"},"\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-math")}},s.a.createElement("div",{className:"img math"}),s.a.createElement("span",{className:"txt"},"\u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-litra")}},s.a.createElement("div",{className:"img litra"}),s.a.createElement("span",{className:"txt"},"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-histiry")}},s.a.createElement("div",{className:"img history"}),s.a.createElement("span",{className:"txt"},"\u0438\u0441\u0442\u043e\u0440\u0438\u044f"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-soc")}},s.a.createElement("div",{className:"img soc"}),s.a.createElement("span",{className:"txt"},"\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-phys")}},s.a.createElement("div",{className:"img phys"}),s.a.createElement("span",{className:"txt"},"\u0444\u0438\u0437\u0438\u043a\u0430"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-bio")}},s.a.createElement("div",{className:"img bio"}),s.a.createElement("span",{className:"txt"},"\u0431\u0438\u043e\u043b\u043e\u0433\u0438\u044f"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-lang")}},s.a.createElement("div",{className:"img lang"}),s.a.createElement("span",{className:"txt"},"\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a"))),s.a.createElement("div",{className:"item_block"},s.a.createElement("div",{className:"item",onClick:function(){document.getElementById("body").classList.add("grad-chem")}},s.a.createElement("div",{className:"img chem"}),s.a.createElement("span",{className:"txt"},"\u0445\u0438\u043c\u0438\u044f")))))}),b=function(e){e.id;return s.a.createElement("div",{id:"screen_2",className:"container"},s.a.createElement("div",{className:"header"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"subj_item_block"},s.a.createElement("div",{className:"subj_item"},s.a.createElement("div",{className:"img"}),s.a.createElement("div",{className:"counter"},s.a.createElement("span",{id:"first_num"},"9"),s.a.createElement("span",{id:"second_num"},"6")),s.a.createElement("div",{id:"start_btn",className:"btn"},"\u043c\u043d\u0435 \u043f\u043e\u0432\u0435\u0437\u0435\u0442!")))))},p=function(){var e=Object(c.useState)("home"),a=Object(E.a)(e,2),t=(a[0],a[1],Object(c.useState)(null)),n=Object(E.a)(t,2),m=n[0],l=n[1],d=Object(c.useState)(s.a.createElement(N.a,{size:"large"})),u=Object(E.a)(d,2),p=(u[0],u[1]);return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.sendPromise("VKWebAppGetUserInfo");case 2:a=e.sent,l(a),p(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var a=e.detail,t=a.type,c=a.data;if("VKWebAppUpdateConfig"===t){var s=document.createAttribute("scheme");s.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]),s.a.createElement("div",null,s.a.createElement(v,{id:"home",fetchedUser:m}),s.a.createElement(b,{id:"persik"}))};i.a.send("VKWebAppInit"),m.a.render(s.a.createElement(p,null),document.getElementById("root"))},79:function(e,a,t){e.exports=t(180)}},[[79,1,2]]]);
//# sourceMappingURL=main.f9e638ee.chunk.js.map