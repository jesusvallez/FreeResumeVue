webpackJsonp([1],{"+MCj":function(t,e,i){t.exports=i.p+"static/img/male20151085942360382.ef3fcee.jpg"},"1/oy":function(t,e){},"9M+g":function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},MMMn:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=(i("Jmt5"),i("9M+g"),i("U0v6")),a=i.n(n),r={props:{item:{type:Object}},data:function(){return{title:this.item.title,icon:this.item.icon,job:this.item.job,time:this.item.time,company:this.item.company,page:this.item.page,details:this.item.details}},methods:{getTittle:function(){return this.title?this.title:null}},computed:{getIcon:function(){return this.icon}},components:{FontAwesomeIcon:a.a}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"story"},[t.getTittle()?i("h2",{staticClass:"title-resume blue-color"},[i("div",{staticClass:"text"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon}}),t._v(" "+t._s(t.title)+"\n    ")],1)]):t._e(),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"info"},[i("div",{staticClass:"story-title"},[i("h3",{staticClass:"job-title"},[t._v(" "+t._s(t.job))]),t._v(" "),i("div",{staticClass:"time"},[t._v(t._s(t.time))])]),t._v(" "),i("div",{staticClass:"company-details",domProps:{innerHTML:t._s(t.company)}}),t._v(" "),i("div",{staticClass:"company-page",domProps:{innerHTML:t._s(t.page)}})]),t._v(" "),i("div",{staticClass:"details"},t._l(t.details,function(e){return i("p",{key:e,domProps:{innerHTML:t._s(e)}})}))])])},staticRenderFns:[]};var u=i("VU/8")(r,o,!1,function(t){i("MMMn")},null,null).exports,l={props:{skills:{type:Object}},data:function(){return{title:this.skills.title,icon:this.skills.icon,aptitudes:this.skills.aptitudes}},methods:{getTittle:function(){return this.title?this.title:null},getAptitudes:function(){return this.aptitudes?this.aptitudes.length:0},getIcon:function(){return this.aptitudes?this.icon:null}},components:{FontAwesomeIcon:a.a}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.getAptitudes()>0?i("div",{staticClass:"skills"},[t.getTittle()?i("h2",{staticClass:"title-resume"},[i("div",{staticClass:"text"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon}}),t._v(" "+t._s(t.getTittle())+"\n    ")],1)]):t._e(),t._v(" "),i("ul",{staticClass:"aptitudes"},t._l(t.aptitudes,function(e){return i("li",{key:e.id,staticClass:"aptitude"},[i("div",{staticClass:"title-aptitude"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"number-aptitude"},[i("b-progress",{attrs:{value:e.counter,variant:"blue-color"}})],1)])}))]):t._e()},staticRenderFns:[]};var m=i("VU/8")(l,c,!1,function(t){i("NvCr")},null,null).exports,p={props:{publicInfo:{type:Object}},data:function(){return{env:Object({NODE_ENV:"production"}),name:this.publicInfo.name,photo:this.publicInfo.photo,ocupation:this.publicInfo.ocupation}},computed:{getImage:function(){var t=null,e=i("PvXa")("./"+this.photo);switch(this.env.NODE_ENV){case"production":t=new URL(e,document.location),e=window.location.href+t.pathname}return e}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"public-info bg-dark-blue-color"},[i("div",{staticClass:"text-center"},[i("img",{staticClass:"rounded-circle profile-image",attrs:{src:t.getImage,width:"140",height:"140",alt:"cv"}})]),t._v(" "),i("h1",{staticClass:"name text-center"},[t._v(t._s(t.name))]),t._v(" "),i("h4",{staticClass:"occupation text-center"},[t._v(t._s(t.ocupation))])])},staticRenderFns:[]};var v=i("VU/8")(p,d,!1,function(t){i("f905")},null,null).exports,f={props:{privateInfo:{type:Object}},data:function(){return{contacts:this.privateInfo.contacts}},computed:{},components:{FontAwesomeIcon:a.a}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"private-info"},t._l(t.contacts,function(e){return i("div",{key:e.id,staticClass:"contact"},[i("div",{staticClass:"div-icon"},[i("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon}})],1),t._v(" "),i("div",{staticClass:"div-text"},[t._v(t._s(e.title))])])}))},staticRenderFns:[]};var g={data:function(){return{publicInfo:{name:"Aitor Esteve",photo:"male20151085942360382.jpg",ocupation:"Fitnes and Wellness Coordinator"},items:[{id:10,icon:["fas","briefcase"],title:"Integer ultrices",job:"Phasellus fermentum erat eget",time:"01/2017 – Present",company:"Duis convallis ante vitae augue vulputate",page:'<a href="https://www.google.com">https://www.google.com</a>',details:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere libero quis condimentum venenatis. Donec tempus velit augue, eu vehicula tortor sollicitudin id. Donec ac facilisis libero. Nunc iaculis posuere est ut finibus. In aliquet hendrerit dapibus. Sed a viverra sem. Quisque lorem enim, rhoncus nec consectetur vitae, dignissim sed augue. Nunc feugiat at mi sed maximus. Curabitur sit amet ipsum nec massa suscipit hendrerit. Quisque et metus tincidunt, lobortis est ac, consequat turpis."]},{id:11,job:"Maecenas fermentum diam eu interdum",time:"04/2016 – 01/2017",company:"Curabitur vel nisi eget risus tristique semper",page:'<a href="https://www.google.com">https://www.google.com</a>',details:["Suspendisse quis turpis justo. Vivamus a risus eros. Donec mattis quam vitae lectus facilisis, id ornare erat interdum. Sed eu enim sit amet massa mattis ullamcorper eu sagittis lorem. Vestibulum consequat metus ut diam bibendum sodales. Morbi eu cursus urna. In facilisis ex non pulvinar posuere. Mauris ornare nec nibh quis efficitur."]},{id:12,job:"Mauris suscipit risus",time:"01/2015 – 04/2016",company:"Suspendisse vehicula lorem vitae metus tincidunt",details:["Suspendisse a nisl est. Quisque semper convallis mi eget aliquam. Nunc hendrerit mauris in rutrum fringilla. Etiam maximus erat quis massa efficitur cursus. Maecenas fringilla libero quis tempus porta. Integer tempor facilisis lorem at posuere. Aliquam mi eros, suscipit vel vestibulum sit amet, mollis in dui.","Ut ut dolor ut enim varius ultrices. Donec mattis ipsum aliquam ullamcorper fringilla. Pellentesque porta ornare dui quis porta. Praesent metus sem, cursus vel neque sit amet, viverra consectetur mi. Curabitur sed commodo leo. Pellentesque porta faucibus felis elementum luctus. Curabitur velit neque, cursus interdum purus nec, dapibus egestas enim."]},{id:35,icon:["fas","pencil-alt"],title:"sit amet viverra enim efficitur",job:"Donec vehicula felis vehicula",time:"11/2016 - Present",details:["Nam sed neque vitae ligula hendrerit imperdiet.","<ul>\n              <li>In quis ligula eu ipsum convallis rutrum a id lacus.</li>\n              <li>Etiam lacinia eros placerat, fermentum ex quis, imperdiet augue.</li>\n              <li>Sed faucibus metus vel nisi accumsan, at porttitor diam fringilla.</li>\n              <li>Integer facilisis justo consequat ipsum mollis sollicitudin.</li>\n            </ul>"]},{id:40,icon:["fa","graduation-cap"],title:"Pellentesque sed arcu eleifend",job:"Etiam pharetra urna nec posuere hendrerit",time:"09/2009 - 01/2015",company:"Pellentesque imperdiet mauris ac mattis pulvinar",details:["Donec pulvinar ex sed lectus blandit scelerisque"]}],privateInfo:{contacts:[{id:1,icon:["fas","phone"],title:"+34 648 00 00 00"},{id:2,icon:["fas","birthday-cake"],title:"01/07/1991"},{id:3,icon:["fas","location-arrow"],title:"Passeig Ceja, Las Fierro"},{id:4,icon:["far","envelope"],title:"aitoresteve@popsok.ml"},{id:5,icon:["fab","linkedin-in"],title:"linkedin.com/in/aitoresteve"},{id:6,icon:["fab","github"],title:"github.com/aitoresteve"}]},skills:{title:"Nam scelerisque risus",icon:["far","lightbulb"],aptitudes:[{id:1,title:"Sed rutrum",counter:35},{id:2,title:"Orci vel",counter:85},{id:3,title:"Elementum",counter:60}]}}},components:{AppStory:u,AppSkill:m,AppPublicInfo:v,AppPrivateInfo:i("VU/8")(f,h,!1,function(t){i("P+IC")},null,null).exports}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-container",{staticClass:"main-page"},[i("b-row",{staticClass:"page"},[i("b-col",{staticClass:"left-page",attrs:{md:"9"}},[t._l(t.items,function(t,e){return i("AppStory",{key:t.id,attrs:{item:t,index:e}})}),t._v(" "),i("AppSkill",{attrs:{skills:t.skills}})],2),t._v(" "),i("b-col",{staticClass:"bg-blue-color right-page no-padding",attrs:{md:"3"}},[i("AppPublicInfo",{attrs:{publicInfo:t.publicInfo}}),t._v(" "),i("AppPrivateInfo",{attrs:{privateInfo:t.privateInfo}})],1)],1)],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"text-center"},[i("small",[t._v("You can download this project "),i("a",{attrs:{href:"https://github.com/jesusvallez/FreeResumeVue",target:"_blank"}},[t._v("here")])])]),t._v(" "),i("div",{staticClass:"text-center"},[i("small",[t._v("Designed by "),i("a",{attrs:{href:"https://jesusvallez.github.io/",target:"_blank"}},[t._v("Jesús Vállez")])])]),t._v(" "),i("div",{staticClass:"text-center"},[i("small",[t._v("Powered by "),i("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js 2")])])])])}]};var _={name:"App",components:{AppPage:i("VU/8")(g,b,!1,function(t){i("fx0n")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("AppPage")],1)},staticRenderFns:[]};var I=i("VU/8")(_,C,!1,function(t){i("o649")},null,null).exports,w=i("e6fC"),j=i("QxPg"),q=i("1P+R"),y=i("KREn"),P=i("h17U");j.default.library.add(q.a,y.a,P.a),s.a.use(w.a),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:I},template:"<App/>"})},NvCr:function(t,e){},"P+IC":function(t,e){},PvXa:function(t,e,i){var s={"./male20151085942360382.jpg":"+MCj"};function n(t){return i(a(t))}function a(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="PvXa"},f905:function(t,e){},fx0n:function(t,e){},o649:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.27b0846013a46c4b6263.js.map