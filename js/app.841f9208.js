(function(t){function a(a){for(var s,c,n=a[0],l=a[1],o=a[2],v=0,u=[];v<n.length;v++)c=n[v],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(u.length)u.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},i={app:0},r=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/german-motors/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a),e.d(a,"db",(function(){return U}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("navbar"),e("router-view")],1)},r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},n=[],l={},o=l,d=e("2877"),v=Object(d["a"])(o,c,n,!1,null,null,null),u=v.exports,p={name:"App",components:{navbar:u},data:function(){return{}}},h=p,f=Object(d["a"])(h,i,r,!1,null,null,null),m=f.exports,g=e("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},_=[],b=e("1da1"),y=(e("96cf"),e("b0c0"),e("159b"),{data:function(){return{focus:"",type:"month",typeToLabel:{month:"Mes",week:"Semana",day:"Día","4day":"4 Días"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],name:null,color:"#1976D2",details:null,dialog:null,currentlyEditing:null,start:null,end:null}},mounted:function(){this.$refs.calendar.checkChange()},created:function(){this.getEvents()},methods:{updateEvent:function(t){var a=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.collection("eventos").doc(t.id).update({name:t.name,details:t.details});case 3:a.selectedOpen=!1,a.currentlyEditing=null,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("error found,",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},editEvent:function(t){var a=t.id;this.currentlyEditing=a},addEvent:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!(t.name&&t.start&&t.end)){a.next=11;break}return a.next=4,U.collection("eventos").add({name:t.name,details:t.details,start:t.start,end:t.end,color:t.color});case 4:return t.getEvents(),t.name=null,t.details=null,t.start=null,t.end=null,t.color="#1976D2",a.abrupt("return");case 11:console.log("campos obligatorios"),a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](0),console.log("logged some error,",a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,14]])})))()},getEvents:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U.collection("eventos").get();case 3:e=a.sent,s=[],e.forEach((function(t){var a=t.data();a.id=t.id,s.push(a)})),t.events=s,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("Error founded:,",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},viewDay:function(t){var a=t.date;this.focus=a,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var a=this,e=t.nativeEvent,s=t.event,i=function(){a.selectedEvent=s,a.selectedElement=e.target,setTimeout((function(){a.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(i,10)):i(),e.stopPropagation()},deleteEvent:function(t){var a=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.collection("eventos").doc(t.id).delete();case 3:a.selectedOpen=!1,a.getEvents(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("error found,",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},rnd:function(t,a){return Math.floor((a-t+1)*Math.random())+t}}}),w=y,x=Object(d["a"])(w,C,_,!1,null,null,null),k=x.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},j=[],S={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},O=S,I=Object(d["a"])(O,E,j,!1,null,null,null),R=I.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrapp",attrs:{id:"top"}},[t._e(),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)])])},q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"loading-center"}},[e("div",{attrs:{id:"loading-center-absolute"}},[e("div",{staticClass:"object",attrs:{id:"object_one"}}),e("div",{staticClass:"object",attrs:{id:"object_two"}}),e("div",{staticClass:"object",attrs:{id:"object_three"}}),e("div",{staticClass:"object",attrs:{id:"object_four"}}),t._v(" Loading ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header header-absolute-not-top scroll_header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"head-white-bg flex space-between"},[e("a",{staticClass:"logo",attrs:{href:"http://car-service.aa-xx.com/html/demo/"}},[e("img",{staticClass:"black-logo",attrs:{src:"img/logo-black.png",alt:""}}),e("img",{staticClass:"white-logo",attrs:{src:"img/logo-white.png",alt:""}})]),e("div",{attrs:{id:"menu"}},[e("ul",[e("li",[e("a",{attrs:{href:"#top"}},[t._v("Home")]),e("ul",[e("li",[e("a",{staticClass:"extra",attrs:{href:"index.html"}},[t._v("Default")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"absolute.html"}},[t._v("Header Absolute")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"header-relative.html"}},[t._v("Header Relative")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"boxed.html"}},[t._v("Boxed Layont")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"sub-header.html"}},[t._v("Sub Header")])])])]),e("li",[e("a",{attrs:{href:"#service3"}},[t._v("Service")])]),e("li",[e("a",{attrs:{href:"#content_section11"}},[t._v("About us")])]),e("li",[e("a",{attrs:{href:"#action4"}},[t._v("Discount")])]),e("li",[e("a",{attrs:{href:"#testimonials3"}},[t._v("Reviews")])]),e("li",[e("a",{attrs:{href:"#pricing_table2"}},[t._v("Price")])]),e("li",[e("a",{staticClass:"menu-btn",attrs:{href:"#contact"}},[t._v("Contact")]),e("ul",[e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link")]),e("ul",[e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link 2")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link 2")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link 2")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link 2")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link 2")])])])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link")])]),e("li",[e("a",{staticClass:"extra",attrs:{href:"#"}},[t._v("Sub Menu Extra Link")])])])])])]),e("div",{staticClass:"header-right-top-block hide-on-mobile"},[e("a",{staticClass:"toggle-cart",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-shopping-basket",attrs:{"aria-hidden":"true"}}),e("span",[t._v("0")])]),e("a",{staticClass:"popup-search",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home home-car-repair"},[e("div",{staticClass:"home-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"six"}),e("div",{staticClass:"six"},[e("div",{staticClass:"title-white text-left"},[t._v(" Professional repair of cars of all brands ")]),e("div",{staticClass:"subtitle-white text-left"},[t._v(" The largest "),e("b",[t._v("autotechnical center")]),t._v(" in "),e("b",{staticClass:"count"},[t._v("2350")]),t._v(" cities with modern equipment and "),e("b",[t._v("qualified")]),t._v(" personnel. ")]),e("div",{staticClass:"bts text-left"},[e("a",{staticClass:"btn popup-modal",attrs:{href:"#order-time"}},[t._v("Online Order")])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-section6 text-white",attrs:{id:"content-section6"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-3 color-1 no-padding no-margin"},[e("div",{staticClass:"text-center"},[e("i",{staticClass:"fa fa-map-marker maine",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"icon-title"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}}),t._v(" Found dealer ")])])]),e("div",{staticClass:"col-3 color-2 no-padding no-margin"},[e("div",{staticClass:"text-center"},[e("i",{staticClass:"fa fa-shopping-bag maine",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"icon-title"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}}),t._v(" Online order ")])])]),e("div",{staticClass:"col-3 color-3 no-padding no-margin"},[e("div",{staticClass:"text-center"},[e("i",{staticClass:"fa fa-envelope-open maine",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"icon-title"},[e("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}}),t._v(" Contact Us ")])])])]),e("div",{staticClass:"clear"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"service3",attrs:{id:"service3"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"subtitle-black"},[t._v(" We provide best service in the Melburn ")]),e("div",{staticClass:"title-black"},[t._v("Our service")]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-1.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Technical service cars")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-2.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Independent Expertise")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-3.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v(" Body repair of any complexity ")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-4.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Car painting service")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-5.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Professional body polishing")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-6.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Headlight Polishing")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-7.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Repair electrical equipment")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("div",{staticClass:"wrapp-img relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/service2-8.jpg",alt:""}}),e("div",{staticClass:"service3-title"},[t._v("Overhaul of engines")])]),e("div",{staticClass:"read-more"},[e("a",{staticClass:"popup-modal",attrs:{href:"#order-time"}},[e("i",{staticClass:"fa fa-angle-double-right eIcon",attrs:{"aria-hidden":"true"}})])])])])])]),e("div",{staticClass:"clear"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"statistics text-white",attrs:{id:"statistics"}},[e("div",{staticClass:"black_bg"}),e("div",{staticClass:"container"},[e("div",{staticClass:"col-4 text_center"},[e("i",{staticClass:"fa fa-users"}),e("div",{staticClass:"count"},[t._v("218889")]),e("span",{staticClass:"statistics_achieved"},[t._v("Project Done")])]),e("div",{staticClass:"col-4 text_center"},[e("i",{staticClass:"fa fa-cloud-download"}),e("div",{staticClass:"count"},[t._v("98889")]),e("span",{staticClass:"statistics_achieved"},[t._v("Downloads")])]),e("div",{staticClass:"col-4 text_center"},[e("i",{staticClass:"fa fa-facebook-official"}),e("div",{staticClass:"count"},[t._v("24640")]),e("span",{staticClass:"statistics_achieved"},[t._v("Sales in 2017")])]),e("div",{staticClass:"col-4 text_center"},[e("i",{staticClass:"fa fa-twitter"}),e("div",{staticClass:"count"},[t._v("62504")]),e("span",{staticClass:"statistics_achieved"},[t._v("Happy Cleints")])]),e("div",{staticClass:"clear"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content_section11",attrs:{id:"content_section11"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"col-2 what-we-do-desc"},[e("div",{staticClass:"title-black text_left"},[t._v("About us")]),e("p",[t._v(" Our service center offers a comprehensive approach to the maintenance of the car, as a result of which you will be given an objective assessment of the condition of the car. ")]),e("p",[t._v(" In addition, there is no need to go anywhere else, since every car enthusiast will find everything he needs! And since every modern person really appreciates his time, with our help he will be able to feel all the advantages of a qualitative and operational approach to car repair. ")]),e("p",[t._v(" Our service center offers a comprehensive approach to the maintenance of the car, as a result of which you will be given an objective assessment of the condition of the car, as a result of which you will be given an objective assessment of the condition of the car, there is no need to go anywhere else, since every car enthusiast will find everything he needs! ")]),e("div",{staticClass:"clear"})]),e("div",{staticClass:"col-2 relative"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/content-2.jpg",alt:""}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"testimonials3 gray_bg",attrs:{id:"testimonials3"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"subtitle-black"},[t._v("What customers are sayin")]),e("div",{staticClass:"title-black"},[t._v("Rewiev about us")]),e("div",{staticClass:"clear"}),e("div",{staticClass:"eight block-center"},[e("div",{staticClass:"photo z-index"},[e("img",{staticClass:"aligncenter",attrs:{alt:"",src:"img/reviews-4.png"}})]),e("div",{staticClass:"wrapp square-right-bottom-gray"},[e("div",{staticClass:"title"},[t._v(" I paid exactly the amount that was called in the beginning ... ")]),e("p",{},[t._v(" In the spring I decided to update the car - freshen up the color, remove the scratches on the sides. After inspection and diagnosis, the car was named the normal price, I immediately agreed! the painting took only three days. When I saw the car, I liked everything, paid exactly the amount that was called in the beginning. Pokras24, thanks for the quality work !!! ")]),e("p",{},[e("b",[t._v("Emil, 43 years old, Audi TT ")])])])]),e("div",{staticClass:"clear space50"}),e("div",{staticClass:"eight block-center"},[e("div",{staticClass:"photo z-index"},[e("img",{staticClass:"aligncenter",attrs:{alt:"",src:"img/reviews-5.png"}})]),e("div",{staticClass:"wrapp square-right-bottom-gray"},[e("div",{staticClass:"title"},[t._v(" there will be an opportunity - I will turn to Pokras24 again! ")]),e("p",{},[t._v(" thank you guys for the excellent work! Has got in failure, has broken the Audi, awful history! I decided to pay for repairs in Pokras24, I was very worried, I was afraid that they would paint badly, at random, Unsuccessfully pick up the color. the result was very pleased, they did everything qualitatively and quickly. there will be an event - Turn to Pokras24 yet! thank you! ")]),e("p",{},[e("b",[t._v("Daniel, 38 years old, Hyundai Accent ")])])])]),e("div",{staticClass:"clear space50"}),e("div",{staticClass:"eight block-center"},[e("div",{staticClass:"photo z-index"},[e("img",{staticClass:"aligncenter",attrs:{alt:"",src:"img/reviews-6.png"}})]),e("div",{staticClass:"wrapp square-right-bottom-gray"},[e("div",{staticClass:"title"},[t._v("Within 4 days I took the car ...")]),e("p",{},[t._v(" For a long time I was looking for a service to repair a car, most companies offer their services at inflated prices, and even the quality of work leaves much to be desired. the prices are adequate and the quality of work is at a high level. What pleased in Pokras24 - everything was done quickly, after 4 days I took the car. Appealed on the advice of a friend and do not regret! ")]),e("p",{},[e("b",[t._v("Mersedes, 35y.o., Mazda 6")])])])]),e("div",{staticClass:"clear space50"}),e("div",{staticClass:"clear"})]),e("div",{staticClass:"clear"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"select_transparent pricing_table2",attrs:{id:"pricing_table2"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"subtitle-black"},[t._v(" We take money only for a quality work done. ")]),e("div",{staticClass:"title-black"},[t._v("Price of our services")]),e("div",{staticClass:"text-center"},[e("ul",{staticClass:"tabs"},[e("li",{staticClass:"active",attrs:{rel:"tab1"}},[e("img",{attrs:{src:"img/brands-4.png",alt:""}})]),e("li",{attrs:{rel:"tab2"}},[e("img",{attrs:{src:"img/brands-1.png",alt:""}})]),e("li",{attrs:{rel:"tab3"}},[e("img",{attrs:{src:"img/brands-2.png",alt:""}})])])]),e("div",{staticClass:"tab_container"},[e("div",{staticClass:"d_active tab_drawer_heading",attrs:{rel:"tab1"}},[e("img",{attrs:{src:"img/brands-1.png",alt:""}})]),e("div",{staticClass:"tab_content",attrs:{id:"tab1"}},[e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Description")]),e("th",[t._v("Price ($)")])])]),e("tbody",[e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])])])])]),e("div",{staticClass:"d_active tab_drawer_heading",attrs:{rel:"tab2"}},[e("img",{attrs:{src:"img/brands-2.png",alt:""}})]),e("div",{staticClass:"tab_content",attrs:{id:"tab2"}},[e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Description")]),e("th",[t._v("Price ($)")])])]),e("tbody",[e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])])])])]),e("div",{staticClass:"d_active tab_drawer_heading",attrs:{rel:"tab3"}},[e("img",{attrs:{src:"img/brands-3.png",alt:""}})]),e("div",{staticClass:"tab_content",attrs:{id:"tab3"}},[e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Description")]),e("th",[t._v("Price ($)")])])]),e("tbody",[e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])]),e("tr",[e("td",[t._v("Service")]),e("td",[t._v("Replace")]),e("td",[t._v("10")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"serteficat2 gallery gray_bg",attrs:{id:"serteficat2"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"subtitle-black space-50"},[t._v(" Our company is the best because: ")]),e("div",{staticClass:"title-black"},[t._v("Сertificate")]),e("div",{staticClass:"clear space50"}),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("a",{attrs:{href:"img/certificate2.png"}},[e("img",{staticClass:"aligncenter",attrs:{src:"img/certificate2.png",alt:""}})])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("a",{attrs:{href:"img/certificate2.png"}},[e("img",{staticClass:"aligncenter",attrs:{src:"img/certificate2.png",alt:""}})])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("a",{attrs:{href:"img/certificate2.png"}},[e("img",{staticClass:"aligncenter",attrs:{src:"img/certificate2.png",alt:""}})])])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"wrapp"},[e("a",{attrs:{href:"img/certificate2.png"}},[e("img",{staticClass:"aligncenter",attrs:{src:"img/certificate2.png",alt:""}})])])])]),e("div",{staticClass:"clear"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"extra7",attrs:{id:"faq"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"subtitle-black eight center-block"},[t._v(" Aliquam a augue suscipit, bibendum luctus neque vestibulum laoreet rhoncus ipsum, bibendum tempor vulputate varius ")]),e("div",{staticClass:"title-black"},[t._v("FAQ")]),e("div",{staticClass:"eight block-center"},[e("div",{staticClass:"round accordion_title"},[t._v(" Expensive Oil Changes Are Here to Stay ")]),e("div",{staticClass:"accordion_hide"},[t._v(" Oil changes may be more expensive with the required 0W-20 weight oil compared to conventional oil, but only having to service the car once or twice a year keeps annual costs to nearly a wash. ")]),e("div",{staticClass:"round accordion_title"},[t._v(" What's Included in a Tuneup? ")]),e("div",{staticClass:"accordion_hide"},[t._v(" Actually, there is no such thing as a tuneup in the traditional sense of replacing parts to bring the ignition and fuel systems up to specs for maximum performance and efficiency... ")]),e("div",{staticClass:"round accordion_title"},[t._v(" Change Your Oil Every 3,000 Miles? ")]),e("div",{staticClass:"accordion_hide"},[t._v(" No, you don't, according to every auto manufacturer we've talked to. the main advocates of the 3,000-mile oil change schedule are those who would profit by it... ")]),e("div",{staticClass:"round accordion_title"},[t._v(" Expensive Oil Changes Are Here to Stay ")]),e("div",{staticClass:"accordion_hide"},[t._v(" Oil changes may be more expensive with the required 0W-20 weight oil compared to conventional oil, but only having to service the car once or twice a year keeps annual costs to nearly a wash. ")]),e("div",{staticClass:"round accordion_title"},[t._v(" What's Included in a Tuneup? ")]),e("div",{staticClass:"accordion_hide"},[t._v(" Actually, there is no such thing as a tuneup in the traditional sense of replacing parts to bring the ignition and fuel systems up to specs for maximum performance and efficiency... ")])]),e("div",{staticClass:"clear"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"clients3 gray_bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-1.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-2.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-3.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-4.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-5.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-6.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-7.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-8.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-9.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-10.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-14.png",alt:""}})]),e("div",{staticClass:"col-6"},[e("img",{staticClass:"aligncenter",attrs:{src:"img/brands-15.png",alt:""}})]),e("div",{staticClass:"clear"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact contact-style-2 text-center",attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-3"},[e("i",{staticClass:"fa fa-map-o car_repair_i",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"contact-title"},[t._v("Our Adress")]),e("div",{staticClass:"contact-desc"},[t._v("550 Mill Pond Ave. Melburn, MA 02474")])]),e("div",{staticClass:"col-3"},[e("i",{staticClass:"fa fa-mobile car_repair_i",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"contact-title"},[t._v("Our Phones")]),e("div",{staticClass:"contact-desc"},[t._v("+1(970) 744-80-26")])]),e("div",{staticClass:"col-3"},[e("i",{staticClass:"fa fa-envelope-open-o car_repair_i",attrs:{"aria-hidden":"true"}}),e("div",{staticClass:"contact-title"},[t._v("E-mail")]),e("div",{staticClass:"contact-desc"},[t._v("info@domaine.com")])])]),e("div",{staticClass:"clear"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map"},[e("div",{staticClass:"container"},[e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{attrs:{frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11386.029310475207!2d26.100772454509343!3d44.48426571765341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2027ddad10337%3A0xc9ac8c7529a47d43!2sNeortic+Motors!5e0!3m2!1sen!2sro!4v1470314974120"}})]),e("div",{staticClass:"clear"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer_up"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("h4",{staticClass:"toggle-next-div"},[t._v("About us")]),e("div",{staticClass:"footer-desc"},[e("p",[t._v(" Donec vel sapien augue. Integer urna turpis cursus porta, mauris molestie ")]),e("p",[t._v(" Cursus sodales vitae suscipit egestas lobortis aliquam quaerat hendrerit sapien undo euismod blandit. nulla at sodales mollis in hendrerit tellus ")])])]),e("div",{staticClass:"col-4"},[e("h4",{staticClass:"toggle-next-div"},[t._v("Repair services")]),e("div",{staticClass:"footer-desc"},[e("ul",{staticClass:"circle white"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Repair Car Engine")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Repair Car Suspension")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Auto Brake System")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Change of oil")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Alternator ")])])])])]),e("div",{staticClass:"col-4"},[e("h4",{staticClass:"toggle-next-div"},[t._v("Social Icon")]),e("div",{staticClass:"footer-desc"},[e("ul",{staticClass:"footer-icons"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}}),t._v(" Facebook")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}}),t._v(" Twitter")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-behance",attrs:{"aria-hidden":"true"}}),t._v(" Behance")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}}),t._v(" Linkedin")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}}),t._v(" Instagram")])])])])]),e("div",{staticClass:"col-4"},[e("h4",{staticClass:"toggle-next-div"},[t._v("Subscribe")]),e("div",{staticClass:"footer-desc"},[e("p",[t._v(" Let me know more when you publick some intresting: news, ideas, updates and latest features ")]),e("form",{staticClass:"subscribe margin-top-20"},[e("input",{attrs:{type:"email",placeholder:"Email Address",required:"",id:"s-email",name:"EMAIL"}}),e("input",{staticClass:"subscribe_btn",attrs:{type:"submit"}}),e("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}})])])])]),e("div",{staticClass:"clear"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-copyright"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-2"},[e("div",{staticClass:"copyright"},[t._v("© 2017. All rights reserved.")])]),e("div",{staticClass:"col-2"},[e("ul",{staticClass:"social-network social-circle"},[e("li",[e("a",{staticClass:"icoFacebook",attrs:{href:"#",title:"Facebook"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"icoTwitter",attrs:{href:"#",title:"Twitter"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"icoGoogle",attrs:{href:"#",title:"Google +"}},[e("i",{staticClass:"fa fa-google-plus"})])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"white-popup-block mfp-hide",attrs:{id:"order-time"}},[e("div",{staticClass:"form-style",attrs:{id:"contact_form"}},[e("div",{attrs:{id:"contact_body"}},[e("div",{staticClass:"popup_title"},[t._v("Online order")]),e("div",{staticClass:"popup_subtitle"},[t._v(" Leave the online application form and our manager will provide a free consultation ")]),e("div",{staticClass:"relative"},[e("input",{staticClass:"input-field",attrs:{type:"text",name:"name",id:"name",required:"",placeholder:"Name *"}}),e("i",{staticClass:"fa fa-user-o form-icon",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"relative"},[e("input",{staticClass:"input-field",attrs:{type:"email",name:"email",required:"",placeholder:"E-mail *"}}),e("i",{staticClass:"fa fa-envelope-o form-icon",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"relative"},[e("input",{staticClass:"tel-number-field long",attrs:{type:"text",name:"phone",maxlength:"19",required:"",placeholder:"Phone *"}}),e("i",{staticClass:"fa fa-phone form-icon",attrs:{"aria-hidden":"true"}})]),e("div",{staticClass:"relative"},[e("textarea",{staticClass:"textarea-field",attrs:{name:"message",id:"message",required:"",placeholder:"Message *"}}),e("i",{staticClass:"fa fa-commenting-o form-icon",attrs:{"aria-hidden":"true"}})]),e("input",{staticClass:"btn btn100",attrs:{type:"submit",id:"submit_btn",value:"Submit"}})]),e("div",{attrs:{id:"contact_results"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"#top"}},[e("p",{attrs:{id:"back-top"}},[e("i",{staticClass:"fa fa-chevron-up"})])])}],A={name:"LandingPage",components:{},data:function(){return{}},mounted:function(){},created:function(){},methods:{}},$=A,M=Object(d["a"])($,P,q,!1,null,"7afaed90",null),L=M.exports;s["a"].use(g["a"]);var T=[{path:"/calendario",name:"calendario",component:k},{path:"/helloWorld",name:"HelloWorld",component:R},{path:"/",name:"LandingPage",component:L}],D=new g["a"]({mode:"history",base:"/german-motors/",routes:T}),H=D,W=e("2f62");s["a"].use(W["a"]);var F=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=e("bc3a"),N=e.n(B),z=e("2106"),J=e.n(z),Q=e("3f9d"),X=e("260b");e("e71f");s["a"].use(Q["a"]);var G={apiKey:"AIzaSyBbIuFsIsXYydJQ77E7bXFEXpJmDb7oQP0",authDomain:"vue-calendario-63cbb.firebaseapp.com",projectId:"vue-calendario-63cbb",storageBucket:"vue-calendario-63cbb.appspot.com",messagingSenderId:"217919261806",appId:"1:217919261806:web:8bdbaf49e0542f55486a7f"};X["a"].initializeApp(G);var U=X["a"].firestore();s["a"].config.productionTip=!1,s["a"].use(J.a,N.a),s["a"].component("LandingPage",(function(t){N.a.get("index.html").then((function(a){t({template:a.data})}))})),new s["a"]({router:H,store:F,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.841f9208.js.map