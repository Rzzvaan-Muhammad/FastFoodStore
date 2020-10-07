(this.webpackJsonpFastFoodStore=this.webpackJsonpFastFoodStore||[]).push([[22],{277:function(e,t,a){"use strict";a.r(t);var r=a(50),n=a.n(r),s=a(9),c=a(51),o=a(0),i=a.n(o),l=a(60),u=a.n(l),m=a(19),d=a(69),p=a(76),h=a(57),f=a(48);class g extends d.a{constructor(...e){var t;super(...e),t=this,this.state={data:{Id:"",SensitiveItem:"",Description:""},SensitiveContentIdFKs:[],errors:{}},this.schema={Id:u.a.any().label("Id"),SensitiveItem:u.a.string().allow(""),Description:u.a.string().allow("")},this.mapToViewModel=e=>({Id:e.Id,SensitiveItem:e.SensitiveItem,Description:e.Description}),this.doSubmit=Object(c.a)(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.data,r=Object(s.a)({},a),e.prev=2,e.next=5,Object(p.d)(r);case 5:t.props.history.push("/sensitiveContent_list"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),m.b.error(e.t0.message||e.t0.response.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))}componentDidMount(){var e=this;return Object(c.a)(n.a.mark((function t(){var a,r,s,c,o,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=Object(h.b)(),r=e.props.match.params.id,e.setState({Imported:a}),!r.startsWith("view")){t.next=12;break}if(s=r.substring(4),!r.endsWith("&")){t.next=10;break}return t.next=9,Object(p.b)(s);case 9:c=t.sent;case 10:return e.setState({data:e.mapToViewModel(c.data.Result)}),t.abrupt("return");case 12:if("new"!==r){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Object(p.b)(r);case 16:o=t.sent,i=o.data,e.setState({data:e.mapToViewModel(i.Result)});case 19:case"end":return t.stop()}}),t)})))()}render(){const e=this.props.match.params.id,t=e.startsWith("view"),a="new"===e?"Create":"Update";return i.a.createElement("div",null,i.a.createElement("h1",null,!t&&i.a.createElement(f.a,{defaultText:a,resourceId:"lbl_".concat(a)}),i.a.createElement(f.a,{defaultText:" Sensitive Content",resourceId:"lbl_SensitiveContent"})),i.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("SensitiveItem","Sensitive Item"),this.renderInput("Description","Description"),!t&&this.renderButton("Save")))}}t.default=g},57:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return f})),a.d(t,"d",(function(){return g})),a.d(t,"g",(function(){return E})),a.d(t,"f",(function(){return x})),a.d(t,"j",(function(){return C})),a.d(t,"c",(function(){return j})),a.d(t,"i",(function(){return D})),a.d(t,"h",(function(){return R}));var r=a(50),n=a.n(r),s=a(51),c=a(49),o=a(58);function i(){return[{Id:0,Name:"No"},{Id:1,Name:"Yes"}]}function l(){return[{Id:1,Name:"Low"},{Id:2,Name:"Normal"},{Id:3,Name:"High"},{Id:4,Name:"Very High"}]}function u(e,t){return localStorage.setItem(e,JSON.stringify(t)),t}function m(e){const t=localStorage.getItem(e);return JSON.parse(t)}const d="".concat(o.c,"/MealBox"),p="____mealboxes____";function h(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.MealBoxTitle}))}function f(e){if(!e)return"";const t=m(p).find(t=>t.Id==e);return t?t.Name:e}function g(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m(p))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,c.a.get("".concat(d,"/MealBoxs"));case 5:return a=e.sent,console.log("TCL: getMealBoxes -> response.data.Result",a.data.Result),r=h(a.data.Result),e.abrupt("return",u(p,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const v="".concat(o.c,"/MealItem"),_="____mealitems____";function I(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.ItemName}))}function E(e){if(!e)return"";const t=m(_).find(t=>t.Id==e);return t?t.Name:e}function x(){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m(_))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,c.a.get("".concat(v,"/MealItems"));case 5:return a=e.sent,r=I(a.data.Result),console.log("TCL: getMealItems -> response.data.Result",a.data.Result),e.abrupt("return",u(_,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const y="".concat(o.c,"/SpiceLevel");function C(){return N.apply(this,arguments)}function N(){return(N=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m("____spicelevels____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,c.a.get("".concat(y,"/SpiceLevels"));case 5:return a=e.sent,e.abrupt("return",u("____spicelevels____",a.data.Result));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const w="".concat(o.c,"/ItemCategory");function O(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.CategoryTitle}))}function j(){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m("____itemcategories____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,c.a.get("".concat(w,"/ItemCategorys"));case 5:return a=e.sent,console.log("TCL: getItemCategories -> response",a),r=O(a.data.Result),e.abrupt("return",u("____itemcategories____",r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const T="".concat(o.c,"/SensitiveContent");function F(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.SensitiveItem}))}function D(e){if(!e)return"";const t=m("____sensitivecontents____").find(t=>t.Id==e);return t?t.Name:e}function R(){return M.apply(this,arguments)}function M(){return(M=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m("____sensitivecontents____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,c.a.get("".concat(T,"/SensitiveContents"));case 5:return a=e.sent,r=F(a.data.Result),e.abrupt("return",u("____sensitivecontents____",r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},63:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(48);t.a=({imgSrc:e,name:t,onChange:a,onUpload:r,error:c})=>n.a.createElement("div",{style:{position:"relative",float:"right",right:0,bottom:120,width:100,height:150}},n.a.createElement("img",{src:e,style:{height:"100px",width:"100px"},alt:e}),n.a.createElement("input",{style:{color:"transparent"},type:"file",name:t,id:t,onChange:a}),n.a.createElement("button",{type:"submit",onClick:r},n.a.createElement(s.a,{defaultText:"Upload",resourceId:"lbl_Upload"})),c&&n.a.createElement("div",{className:"alert alert-danger"},c))},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(49),n=a(58);const s="".concat(n.a,"/Image");function c(e){return r.a.post("".concat(s,"/File"),e,{headers:{"content-type":"multipart/form-data"}})}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return v}));var r=a(11),n=a(62),s=a(0),c=a.n(s),o=a(156),i=a(256),l=a(257),u=a(258),m=a(87),d=a(54),p=a(55),h=a(48);const f={float:"right",marginTop:"-35px",position:"relative",zIndex:2},g=e=>{let t=e.name,a=e.label,r=e.error,s=Object(n.a)(e,["name","label","error"]);return c.a.createElement("div",{className:"form-group"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement("label",{htmlFor:t},c.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")}))),c.a.createElement(i.a,null,c.a.createElement("input",Object.assign({},s,{type:"checkbox",id:t,name:t,className:"form-check-input"})))),r&&c.a.createElement("div",{className:"alert alert-danger"},r))},b=e=>{let t=e.name,a=e.label,s=e.error,o=e.type,i=Object(n.a)(e,["name","label","error","type"]);const l=c.a.useState(!1),u=Object(r.a)(l,2),m=u[0],h=u[1],g=m?"text":o;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlFor:t,className:"sr-only"},a),c.a.createElement("div",null,c.a.createElement("input",Object.assign({},i,{type:g,id:t,name:t,placeholder:a,className:"form-control"})),"password"===o?c.a.createElement(d.a,{style:f,onClick:()=>h(!m),size:"1x",color:"gray",className:"mr-3",icon:m?p.c:p.b}):null),s&&c.a.createElement("div",{className:"alert alert-danger"},s))},v=e=>{let t=e.name,a=e.placeholder,r=e.error,s=Object(n.a)(e,["name","placeholder","error"]);return c.a.createElement(l.a,null,c.a.createElement(u.a,{htmlFor:t,hidden:!0},c.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),c.a.createElement(m.a,Object.assign({},s,{type:"text",name:t,id:t,placeholder:a})),r&&c.a.createElement("div",{className:"alert alert-danger"},r))};t.d=e=>{let t=e.name,a=e.label,r=e.error,s=Object(n.a)(e,["name","label","error"]);return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:t},c.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),c.a.createElement("input",Object.assign({},s,{id:t,name:t,className:"form-control"})),r&&c.a.createElement("div",{className:"alert alert-danger"},r))}},66:function(e,t,a){"use strict";var r=a(62),n=a(0),s=a.n(n),c=a(48);t.a=e=>{let t=e.name,a=e.label,n=e.options,o=e.error,i=Object(r.a)(e,["name","label","options","error"]);return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:t},s.a.createElement(c.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),s.a.createElement("select",Object.assign({},i,{id:t,name:t,className:"form-control"}),s.a.createElement("option",{value:"0"},"...select..."),n.map(e=>s.a.createElement("option",{key:e.Id,value:e.Id},e.Name))),o&&s.a.createElement("div",{className:"alert alert-danger"},o))}},67:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(73),c=a.n(s),o=a(48);class i extends r.Component{constructor(...e){super(...e),this.setDate=e=>{this.props.onChange(this.props.name,e)}}render(){const e=this.props,t=e.name,a=e.placeholder,r=e.value,s=e.error;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},n.a.createElement(o.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),n.a.createElement(c.a,{id:t,name:t,selected:r,onChange:this.setDate,className:"form-control"}),s&&n.a.createElement("div",{className:"alert alert-danger"},s))}}t.a=i},69:function(e,t,a){"use strict";var r=a(50),n=a.n(r),s=a(51),c=a(9),o=a(11),i=a(0),l=a.n(i),u=a(60),m=a.n(u),d=a(63),p=a(64),h=a(65),f=a(66),g=a(67),b=a(48);class v extends i.Component{constructor(e){var t;super(e),t=this,this.validate=()=>{const e=m.a.validate(this.state.data,this.schema,{abortEarly:!0}).error;return e?e.details.map(e=>({[Object(o.a)(e.path,1)[0]]:e.message})):null},this.validateProperty=({name:e,value:t})=>{const a={[e]:t},r={[e]:this.schema[e]},n=m.a.validate(a,r).error;return n?n.details[0].message:null},this.handleChange=({currentTarget:e})=>{const t=Object(c.a)({},this.state.errors),a=this.validateProperty(e);a?t[e.name]=a:delete t[e.name];const r=Object(c.a)({},this.state.data),n="checkbox"===e.type?e.checked:e.value;r[e.name]=n,this.setState({data:r,errors:t})},this.handleDate=(e,t)=>{const a=this.state.data;a[e]=t,console.log("show Date in form",e,t),this.setState({data:a})},this.handleSubmit=e=>{e.preventDefault();const t=this.validate();this.setState({errors:t||{}}),t||this.doSubmit()},this.handleFileChange=e=>{const t=e.target.files[0];this.setState(Object(c.a)({},this.state.state,{files:t,imgSrc:URL.createObjectURL(t)}))},this.handleFileUpload=function(){var e=Object(s.a)(n.a.mark((function e(a){var r,s,o,i,l,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=t.state.files,s=new FormData,r.forEach(e=>s.append("file",e)),e.next=6,Object(p.a)(s);case 6:o=e.sent,i=o.data,l="Success!",i.success||(l=i.message),(u=t.state).Image=l,t.setState(Object(c.a)({},r,{errors:u,Image:i.Id}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.renderButton=e=>l.a.createElement("button",{type:"submit",disabled:this.validate(),className:"btn btn-primary m-1"},l.a.createElement(b.a,{defaultText:e,resourceId:e.replace(/\s+/g,"_")})),this.renderSelect=(e,t,a)=>{const r=this.state,n=r.data,s=r.errors;return l.a.createElement(f.a,{options:a,name:e,label:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderInput=(e,t,a="text")=>{const r=this.state,n=r.data,s=r.errors;return l.a.createElement(h.d,{type:a,name:e,label:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderCheckBox=(e,t,a="text")=>{const r=this.state,n=r.data,s=r.errors;return l.a.createElement(h.a,{type:a,name:e,label:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderInlineInput=(e,t,a="text")=>{const r=this.state,n=r.data,s=r.errors;return l.a.createElement(h.b,{type:a,name:e,placeholder:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderDatePicker=(e,t,a)=>{const r=this.state.errors;return l.a.createElement(g.a,{name:e,placeholder:t,value:a,onChange:this.handleDate,errors:r[e]})},this.renderImagePicker=e=>{const t=this.state,a=t.errors,r=t.imgSrc;return l.a.createElement(d.a,{imgSrc:r,name:e,onChange:this.handleFileChange,onUpload:this.handleFileUpload,error:a[e]})},this.state={data:{},errors:{}}}}t.a=v},76:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i}));var r=a(49);const n="/SensitiveContent";function s(){return r.a.get("".concat(n,"/SensitiveContents"))}function c(e){return console.log("TCL: getSensitiveContent -> id",e),r.a.get("".concat(n,"/ById?Id=").concat(e))}function o(e){return r.a.get("".concat(n,"/Delete?Id=").concat(e))}function i(e){return r.a.post("".concat(n,"/Create"),e)}}}]);
//# sourceMappingURL=22.eaa32869.chunk.js.map