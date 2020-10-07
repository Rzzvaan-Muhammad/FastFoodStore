(this.webpackJsonpFastFoodStore=this.webpackJsonpFastFoodStore||[]).push([[19],{151:function(e,t,a){"use strict";a.r(t);var r=a(50),n=a.n(r),s=a(9),o=a(51),c=a(0),l=a.n(c),i=a(60),u=a.n(i),d=a(19),m=a(156),p=a(256),h=a(69),f=a(49);var g=a(57),b=a(75);class v extends h.a{constructor(...e){var t;super(...e),t=this,this.state={data:{UserIdFK:"",OrderTitle:"",DeliveryAddress:"",PaymentType:"",ContactNumber:"",Comment:"",OrderDate:"",PaymentStatus:"",OrderStatus:"",TotalDue:"",TaxAmount:"",OrderTotalPrice:"",OrderName:""},MealBoxData:[],ItemOrderIdFKs:[],User:[{Id:1,Name:"Sultan"},{Id:2,Name:"Rizwan"},{Id:3,Name:"Zahoor"}],errors:{},modal:!1},this.schema={OrderTitle:u.a.any(),UserIdFK:u.a.any(),DeliveryAddress:u.a.string().required(),PaymentType:u.a.number().allow(""),ContactNumber:u.a.string().required(),Comment:u.a.string().allow(""),OrderDate:u.a.any(),PaymentStatus:u.a.number().allow(""),OrderStatus:u.a.number().allow(""),TotalDue:u.a.number().allow(""),TaxAmount:u.a.string().allow(""),OrderTotalPrice:u.a.any(),OrderName:u.a.string().allow("")},this.toggle=()=>{this.setState({modal:!this.state.modal})},this.mapToViewModel=e=>({UserIdFK:e.UserIdFK,OrderName:e.OrderName||this.props.title,PaymentType:e.PaymentType,ContactNumber:e.ContactNumber,Comment:e.Comment,OrderDate:e.OrderDate||new Date,PaymentStatus:e.PaymentStatus,OrderStatus:e.OrderStatus,TotalDue:e.TotalDue,TaxAmount:e.TaxAmount,OrderTotalPrice:e.OrderTotalPrice||this.props.Price,DeliveryAddress:e.DeliveryAddress}),this.doSubmit=Object(o.a)(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.data,r=Object(s.a)({},a),e.prev=2,e.next=5,n=r,f.a.post("".concat("/Order","/Create"),n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),d.b.error(e.t0.message||e.t0.response.message);case 10:case"end":return e.stop()}var n}),e,null,[[2,7]])})))}componentDidMount(){var e=this;return Object(o.a)(n.a.mark((function t(){var a,r,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(g.b)(),t.next=3,f.a.get("".concat("/Order","/Orders"));case 3:return r=t.sent,console.log("MealBoxForm -> componentDidMount -> this.props.Id",e.props.Id),t.next=7,Object(b.b)(e.props.Id);case 7:s=t.sent,console.log("MealBoxForm -> componentDidMount -> list",s.data.Result),e.setState({Imported:a,data:e.mapToViewModel(r.data.Result),MealBoxData:s.data.Result});case 10:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.User,a=e.data;this.props.Price;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(m.a,null,l.a.createElement(p.a,null,this.renderSelect("UserIdFK","User",t),this.renderInput("OrderName","Order Title"),this.renderInput("OrderTotalPrice","Order Total Price"),this.renderInput("TaxAmount","Tax Amount")),l.a.createElement(p.a,null,this.renderInput("TotalDue","Total Due"),this.renderInput("OrderStatus","Order Status"),this.renderInput("PaymentStatus","Payment Status"),this.renderDatePicker("OrderDate","Order Date",a.OrderDate)),l.a.createElement(p.a,null,this.renderInput("Comment","Comment"),this.renderInput("ContactNumber","Contact Number"),this.renderInput("PaymentType","Payment Type"),this.renderInput("DeliveryAddress","Delivery Address"),this.renderButton("Save")))))}}t.default=v},57:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return f})),a.d(t,"d",(function(){return g})),a.d(t,"g",(function(){return y})),a.d(t,"f",(function(){return x})),a.d(t,"j",(function(){return N})),a.d(t,"c",(function(){return D})),a.d(t,"i",(function(){return F})),a.d(t,"h",(function(){return P}));var r=a(50),n=a.n(r),s=a(51),o=a(49),c=a(58);function l(){return[{Id:0,Name:"No"},{Id:1,Name:"Yes"}]}function i(){return[{Id:1,Name:"Low"},{Id:2,Name:"Normal"},{Id:3,Name:"High"},{Id:4,Name:"Very High"}]}function u(e,t){return localStorage.setItem(e,JSON.stringify(t)),t}function d(e){const t=localStorage.getItem(e);return JSON.parse(t)}const m="".concat(c.c,"/MealBox"),p="____mealboxes____";function h(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.MealBoxTitle}))}function f(e){if(!e)return"";const t=d(p).find(t=>t.Id==e);return t?t.Name:e}function g(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d(p))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,o.a.get("".concat(m,"/MealBoxs"));case 5:return a=e.sent,console.log("TCL: getMealBoxes -> response.data.Result",a.data.Result),r=h(a.data.Result),e.abrupt("return",u(p,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const v="".concat(c.c,"/MealItem"),_="____mealitems____";function I(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.ItemName}))}function y(e){if(!e)return"";const t=d(_).find(t=>t.Id==e);return t?t.Name:e}function x(){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d(_))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,o.a.get("".concat(v,"/MealItems"));case 5:return a=e.sent,r=I(a.data.Result),console.log("TCL: getMealItems -> response.data.Result",a.data.Result),e.abrupt("return",u(_,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const E="".concat(c.c,"/SpiceLevel");function N(){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d("____spicelevels____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,o.a.get("".concat(E,"/SpiceLevels"));case 5:return a=e.sent,e.abrupt("return",u("____spicelevels____",a.data.Result));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const C="".concat(c.c,"/ItemCategory");function T(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.CategoryTitle}))}function D(){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d("____itemcategories____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,o.a.get("".concat(C,"/ItemCategorys"));case 5:return a=e.sent,console.log("TCL: getItemCategories -> response",a),r=T(a.data.Result),e.abrupt("return",u("____itemcategories____",r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const j="".concat(c.c,"/SensitiveContent");function k(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.SensitiveItem}))}function F(e){if(!e)return"";const t=d("____sensitivecontents____").find(t=>t.Id==e);return t?t.Name:e}function P(){return M.apply(this,arguments)}function M(){return(M=Object(s.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d("____sensitivecontents____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,o.a.get("".concat(j,"/SensitiveContents"));case 5:return a=e.sent,r=k(a.data.Result),e.abrupt("return",u("____sensitivecontents____",r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},63:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(48);t.a=({imgSrc:e,name:t,onChange:a,onUpload:r,error:o})=>n.a.createElement("div",{style:{position:"relative",float:"right",right:0,bottom:120,width:100,height:150}},n.a.createElement("img",{src:e,style:{height:"100px",width:"100px"},alt:e}),n.a.createElement("input",{style:{color:"transparent"},type:"file",name:t,id:t,onChange:a}),n.a.createElement("button",{type:"submit",onClick:r},n.a.createElement(s.a,{defaultText:"Upload",resourceId:"lbl_Upload"})),o&&n.a.createElement("div",{className:"alert alert-danger"},o))},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(49),n=a(58);const s="".concat(n.a,"/Image");function o(e){return r.a.post("".concat(s,"/File"),e,{headers:{"content-type":"multipart/form-data"}})}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return v}));var r=a(11),n=a(62),s=a(0),o=a.n(s),c=a(156),l=a(256),i=a(257),u=a(258),d=a(87),m=a(54),p=a(55),h=a(48);const f={float:"right",marginTop:"-35px",position:"relative",zIndex:2},g=e=>{let t=e.name,a=e.label,r=e.error,s=Object(n.a)(e,["name","label","error"]);return o.a.createElement("div",{className:"form-group"},o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement("label",{htmlFor:t},o.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")}))),o.a.createElement(l.a,null,o.a.createElement("input",Object.assign({},s,{type:"checkbox",id:t,name:t,className:"form-check-input"})))),r&&o.a.createElement("div",{className:"alert alert-danger"},r))},b=e=>{let t=e.name,a=e.label,s=e.error,c=e.type,l=Object(n.a)(e,["name","label","error","type"]);const i=o.a.useState(!1),u=Object(r.a)(i,2),d=u[0],h=u[1],g=d?"text":c;return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:t,className:"sr-only"},a),o.a.createElement("div",null,o.a.createElement("input",Object.assign({},l,{type:g,id:t,name:t,placeholder:a,className:"form-control"})),"password"===c?o.a.createElement(m.a,{style:f,onClick:()=>h(!d),size:"1x",color:"gray",className:"mr-3",icon:d?p.c:p.b}):null),s&&o.a.createElement("div",{className:"alert alert-danger"},s))},v=e=>{let t=e.name,a=e.placeholder,r=e.error,s=Object(n.a)(e,["name","placeholder","error"]);return o.a.createElement(i.a,null,o.a.createElement(u.a,{htmlFor:t,hidden:!0},o.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),o.a.createElement(d.a,Object.assign({},s,{type:"text",name:t,id:t,placeholder:a})),r&&o.a.createElement("div",{className:"alert alert-danger"},r))};t.d=e=>{let t=e.name,a=e.label,r=e.error,s=Object(n.a)(e,["name","label","error"]);return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:t},o.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),o.a.createElement("input",Object.assign({},s,{id:t,name:t,className:"form-control"})),r&&o.a.createElement("div",{className:"alert alert-danger"},r))}},66:function(e,t,a){"use strict";var r=a(62),n=a(0),s=a.n(n),o=a(48);t.a=e=>{let t=e.name,a=e.label,n=e.options,c=e.error,l=Object(r.a)(e,["name","label","options","error"]);return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:t},s.a.createElement(o.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),s.a.createElement("select",Object.assign({},l,{id:t,name:t,className:"form-control"}),s.a.createElement("option",{value:"0"},"...select..."),n.map(e=>s.a.createElement("option",{key:e.Id,value:e.Id},e.Name))),c&&s.a.createElement("div",{className:"alert alert-danger"},c))}},67:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(73),o=a.n(s),c=a(48);class l extends r.Component{constructor(...e){super(...e),this.setDate=e=>{this.props.onChange(this.props.name,e)}}render(){const e=this.props,t=e.name,a=e.placeholder,r=e.value,s=e.error;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},n.a.createElement(c.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),n.a.createElement(o.a,{id:t,name:t,selected:r,onChange:this.setDate,className:"form-control"}),s&&n.a.createElement("div",{className:"alert alert-danger"},s))}}t.a=l},69:function(e,t,a){"use strict";var r=a(50),n=a.n(r),s=a(51),o=a(9),c=a(11),l=a(0),i=a.n(l),u=a(60),d=a.n(u),m=a(63),p=a(64),h=a(65),f=a(66),g=a(67),b=a(48);class v extends l.Component{constructor(e){var t;super(e),t=this,this.validate=()=>{const e=d.a.validate(this.state.data,this.schema,{abortEarly:!0}).error;return e?e.details.map(e=>({[Object(c.a)(e.path,1)[0]]:e.message})):null},this.validateProperty=({name:e,value:t})=>{const a={[e]:t},r={[e]:this.schema[e]},n=d.a.validate(a,r).error;return n?n.details[0].message:null},this.handleChange=({currentTarget:e})=>{const t=Object(o.a)({},this.state.errors),a=this.validateProperty(e);a?t[e.name]=a:delete t[e.name];const r=Object(o.a)({},this.state.data),n="checkbox"===e.type?e.checked:e.value;r[e.name]=n,this.setState({data:r,errors:t})},this.handleDate=(e,t)=>{const a=this.state.data;a[e]=t,console.log("show Date in form",e,t),this.setState({data:a})},this.handleSubmit=e=>{e.preventDefault();const t=this.validate();this.setState({errors:t||{}}),t||this.doSubmit()},this.handleFileChange=e=>{const t=e.target.files[0];this.setState(Object(o.a)({},this.state.state,{files:t,imgSrc:URL.createObjectURL(t)}))},this.handleFileUpload=function(){var e=Object(s.a)(n.a.mark((function e(a){var r,s,c,l,i,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=t.state.files,s=new FormData,r.forEach(e=>s.append("file",e)),e.next=6,Object(p.a)(s);case 6:c=e.sent,l=c.data,i="Success!",l.success||(i=l.message),(u=t.state).Image=i,t.setState(Object(o.a)({},r,{errors:u,Image:l.Id}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.renderButton=e=>i.a.createElement("button",{type:"submit",disabled:this.validate(),className:"btn btn-primary m-1"},i.a.createElement(b.a,{defaultText:e,resourceId:e.replace(/\s+/g,"_")})),this.renderSelect=(e,t,a)=>{const r=this.state,n=r.data,s=r.errors;return i.a.createElement(f.a,{options:a,name:e,label:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderInput=(e,t,a="text")=>{const r=this.state,n=r.data,s=r.errors;return i.a.createElement(h.d,{type:a,name:e,label:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderCheckBox=(e,t,a="text")=>{const r=this.state,n=r.data,s=r.errors;return i.a.createElement(h.a,{type:a,name:e,label:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderInlineInput=(e,t,a="text")=>{const r=this.state,n=r.data,s=r.errors;return i.a.createElement(h.b,{type:a,name:e,placeholder:t,value:n[e],onChange:this.handleChange,error:s[e]})},this.renderDatePicker=(e,t,a)=>{const r=this.state.errors;return i.a.createElement(g.a,{name:e,placeholder:t,value:a,onChange:this.handleDate,errors:r[e]})},this.renderImagePicker=e=>{const t=this.state,a=t.errors,r=t.imgSrc;return i.a.createElement(m.a,{imgSrc:r,name:e,onChange:this.handleFileChange,onUpload:this.handleFileUpload,error:a[e]})},this.state={data:{},errors:{}}}}t.a=v},75:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return c}));var r=a(49);function n(){return r.a.get("".concat("/MealBox","/MealBoxs"))}function s(e){return r.a.get("".concat("/MealBox","/ById?Id=").concat(e))}function o(e){return r.a.get("".concat("/MealBox","/Delete?Id=").concat(e))}function c(e){return r.a.post("".concat("/MealBox","/Create"),e)}}}]);
//# sourceMappingURL=19.41ad1a95.chunk.js.map