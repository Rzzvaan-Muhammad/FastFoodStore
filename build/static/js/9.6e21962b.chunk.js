(this.webpackJsonpFastFoodStore=this.webpackJsonpFastFoodStore||[]).push([[9,19],{151:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a.n(n),l=a(9),s=a(51),c=a(0),o=a.n(c),i=a(60),u=a.n(i),m=a(19),d=a(156),p=a(256),h=a(69),g=a(49);var f=a(57),b=a(75);class E extends h.a{constructor(...e){var t;super(...e),t=this,this.state={data:{UserIdFK:"",OrderTitle:"",DeliveryAddress:"",PaymentType:"",ContactNumber:"",Comment:"",OrderDate:"",PaymentStatus:"",OrderStatus:"",TotalDue:"",TaxAmount:"",OrderTotalPrice:"",OrderName:""},MealBoxData:[],ItemOrderIdFKs:[],User:[{Id:1,Name:"Sultan"},{Id:2,Name:"Rizwan"},{Id:3,Name:"Zahoor"}],errors:{},modal:!1},this.schema={OrderTitle:u.a.any(),UserIdFK:u.a.any(),DeliveryAddress:u.a.string().required(),PaymentType:u.a.number().allow(""),ContactNumber:u.a.string().required(),Comment:u.a.string().allow(""),OrderDate:u.a.any(),PaymentStatus:u.a.number().allow(""),OrderStatus:u.a.number().allow(""),TotalDue:u.a.number().allow(""),TaxAmount:u.a.string().allow(""),OrderTotalPrice:u.a.any(),OrderName:u.a.string().allow("")},this.toggle=()=>{this.setState({modal:!this.state.modal})},this.mapToViewModel=e=>({UserIdFK:e.UserIdFK,OrderName:e.OrderName||this.props.title,PaymentType:e.PaymentType,ContactNumber:e.ContactNumber,Comment:e.Comment,OrderDate:e.OrderDate||new Date,PaymentStatus:e.PaymentStatus,OrderStatus:e.OrderStatus,TotalDue:e.TotalDue,TaxAmount:e.TaxAmount,OrderTotalPrice:e.OrderTotalPrice||this.props.Price,DeliveryAddress:e.DeliveryAddress}),this.doSubmit=Object(s.a)(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.data,n=Object(l.a)({},a),e.prev=2,e.next=5,r=n,g.a.post("".concat("/Order","/Create"),r);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),m.b.error(e.t0.message||e.t0.response.message);case 10:case"end":return e.stop()}var r}),e,null,[[2,7]])})))}componentDidMount(){var e=this;return Object(s.a)(r.a.mark((function t(){var a,n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(f.b)(),t.next=3,g.a.get("".concat("/Order","/Orders"));case 3:return n=t.sent,console.log("MealBoxForm -> componentDidMount -> this.props.Id",e.props.Id),t.next=7,Object(b.b)(e.props.Id);case 7:l=t.sent,console.log("MealBoxForm -> componentDidMount -> list",l.data.Result),e.setState({Imported:a,data:e.mapToViewModel(n.data.Result),MealBoxData:l.data.Result});case 10:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.User,a=e.data;this.props.Price;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(d.a,null,o.a.createElement(p.a,null,this.renderSelect("UserIdFK","User",t),this.renderInput("OrderName","Order Title"),this.renderInput("OrderTotalPrice","Order Total Price"),this.renderInput("TaxAmount","Tax Amount")),o.a.createElement(p.a,null,this.renderInput("TotalDue","Total Due"),this.renderInput("OrderStatus","Order Status"),this.renderInput("PaymentStatus","Payment Status"),this.renderDatePicker("OrderDate","Order Date",a.OrderDate)),o.a.createElement(p.a,null,this.renderInput("Comment","Comment"),this.renderInput("ContactNumber","Contact Number"),this.renderInput("PaymentType","Payment Type"),this.renderInput("DeliveryAddress","Delivery Address"),this.renderButton("Save")))))}}t.default=E},251:function(e,t,a){"use strict";var n=a(2),r=a(4),l=a(0),s=a.n(l),c=a(1),o=a.n(c),i=a(8),u=a.n(i),m=a(13),d={tag:m.n,top:o.a.bool,bottom:o.a.bool,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.top,c=e.bottom,o=e.tag,i=Object(r.a)(e,["className","cssModule","top","bottom","tag"]),d="card-img";l&&(d="card-img-top"),c&&(d="card-img-bottom");var p=Object(m.j)(u()(t,d),a);return s.a.createElement(o,Object(n.a)({},i,{className:p}))};p.propTypes=d,p.defaultProps={tag:"img"},t.a=p},279:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(50),l=a.n(r),s=a(51),c=a(0),o=a.n(c),i=a(82),u=a(83),m=a(156),d=a(256),p=a(84),h=a(53),g=a.n(h),f=a(59),b=a(75),E=a(48),v=a(76),I=a(77),x=a(20),y=a(11),S=a(269),C=a(251),O=a(270),N=a(90),M=a(91),_=a(86),j=a(242),w=a(282),T=a(266),B=a(267),D=a(268),k=a(2),P=a(4),F=a(1),A=a.n(F),R=a(8),L=a.n(R),U=a(13),K={tag:U.n,"aria-label":A.a.string,className:A.a.string,cssModule:A.a.object,role:A.a.string},V=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(P.a)(e,["className","cssModule","tag"]),l=Object(U.j)(L()(t,"btn-toolbar"),a);return o.a.createElement(n,Object(k.a)({},r,{className:l}))};V.propTypes=K,V.defaultProps={tag:"div",role:"toolbar"};var z=V,J=a(80),W=a(22);var Y=e=>{const t=e.buttonLabel,a=e.className,n=Object(c.useState)(!1),r=Object(y.a)(n,2),l=r[0],s=r[1],m=Object(c.useState)(0),h=Object(y.a)(m,2),g=h[0],f=h[1],b=()=>s(!l),E=Object(c.useContext)(W.a),v=Object(y.a)(E,2),I=(v[0],v[1]);return o.a.createElement("div",null,o.a.createElement(j.a,{color:"danger",onClick:b},t),o.a.createElement(w.a,{isOpen:l,toggle:b,className:a},o.a.createElement(T.a,{toggle:b},e.Title),o.a.createElement(B.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a,null,o.a.createElement(C.a,{top:!0,src:e.src,alt:"Card image cap"})),o.a.createElement(p.a,null,o.a.createElement("b",null,"PKR ",e.Price)))),o.a.createElement(D.a,null,o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement("b",null,"PKR ",g*e.Price))),o.a.createElement(z,null,o.a.createElement(J.a,{className:"btn btn-white"},o.a.createElement(j.a,{className:"btn btn-danger btn-outline-danger",onClick:()=>{f(g-1)}},o.a.createElement("b",null,"-")),o.a.createElement("div",{className:"btn btn-outline-black disabled"},g),o.a.createElement(j.a,{className:"btn btn-danger btn-outline-danger",onClick:()=>{f(g+1)}},o.a.createElement("b",null,"+")))),o.a.createElement(j.a,{color:"primary",onClick:()=>(()=>{const t={Id:e.Id,name:e.Title,price:e.Price,Count:g};I(e=>[...e,t])})()},"Add to cart"),o.a.createElement(j.a,{color:"secondary",onClick:b},"Cancel"))))};var q=e=>{const t=Object(c.useState)(""),a=Object(y.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)(()=>{(function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,s,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("TCL: id",t),a={RecordId:t,AppName:"FastFoodStore",ModuleName:"MealBox"},e.next=4,Object(_.b)(a);case 4:n=e.sent,s=n.data,c=s.Result[0],console.log("TCL: Attachment",c),o=c.FilePath.substr(c.FilePath.lastIndexOf("\\")+1),console.log("TCL: ext",o),i="http://86.14.11.234/FastFoodStoreWAPI/Attachments/".concat(o).concat(c.FileType),console.log("TCL: MealBoxesListView -> image",i),r(i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e.item.Id)},[e.item.Id]),o.a.createElement("div",{className:"container"},o.a.createElement(i.a,{className:"border border-0"},o.a.createElement(S.a,null,o.a.createElement("b",null,e.item.MealBoxTitle)),o.a.createElement(p.a,null,o.a.createElement(C.a,{top:!0,src:n,alt:"Card image cap"}),o.a.createElement("div",{className:"form-group"},o.a.createElement(O.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement("b",null,o.a.createElement(o.a.Fragment,null,e.item.Description)),o.a.createElement("br",null),o.a.createElement(o.a.Fragment,null," TotalCalories ",e.item.TotalCalories),o.a.createElement("br",null),o.a.createElement(o.a.Fragment,null," PersonCount ",e.item.PersonCount),o.a.createElement("br",null),o.a.createElement(o.a.Fragment,null," IsKidMeal ",e.item.IsKidMeal?"Yes":"No"),o.a.createElement("br",null),o.a.createElement(o.a.Fragment,null," MealBoxOffer ",e.item.MealBoxOffer),o.a.createElement("br",null))),o.a.createElement(o.a.Fragment,null,"Protien",o.a.createElement(N.a,{value:e.item.Protien*e.lavel})),o.a.createElement(o.a.Fragment,null,"Fat",o.a.createElement(N.a,{value:e.item.Fat*e.lavel})),o.a.createElement(o.a.Fragment,null,"Fiber",o.a.createElement(N.a,{value:e.item.Fiber*e.lavel})),o.a.createElement(o.a.Fragment,null,"SpiceLevel",o.a.createElement(N.a,{value:e.item.SpiceLevel*e.lavel}))),o.a.createElement("div",{className:"c-product-card__footer"},o.a.createElement(m.a,null,o.a.createElement(d.a,{md:"4",className:"float-left"},o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"PKR ",e.item.MealBoxPrice))),o.a.createElement(d.a,{md:"4",className:"float-right"},o.a.createElement(Y,{buttonLabel:"Add To Cart",Id:e.item.Id,Allergens:e.Allergens,Title:e.item.MealBoxTitle,src:n,Price:e.item.MealBoxPrice,MealBoxItems:e.MealBoxItems.MealItemIdFK})),o.a.createElement(d.a,{md:"4",className:"float-right"},o.a.createElement(M.a,{buttonLabel:"Allergens",Id:e.item.Id,Allergens:e.Allergens,MealBoxItems:e.MealBoxItems.MealItemIdFK}))))))))},H=a(151);var G=()=>{const e=Object(c.useContext)(W.a),t=Object(y.a)(e,2),a=t[0],n=(t[1],a.reduce((e,t)=>t.name,"")),r=a.reduce((e,t)=>t.Id,0),l=a.reduce((e,t)=>t.Count,0),s=a.reduce((e,t)=>t.price,0);let i=[];return Object(c.useEffect)(()=>{const e=[n];e.push(n),i=[...e],console.log("Cart -> titleArray",i)},[n,i]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(m.a,{style:{marginBottom:15}},o.a.createElement(d.a,{className:"img-fluid"},o.a.createElement("b",null,o.a.createElement("span",{className:"chead-icon-length"},"Items : ",a.length+l===1?0:l))),o.a.createElement(d.a,null,o.a.createElement("b",null,o.a.createElement("span",null,n))),o.a.createElement(d.a,null,o.a.createElement("b",null,o.a.createElement("span",null," PKR ",s))),o.a.createElement(d.a,null,o.a.createElement("b",null,o.a.createElement("span",null,"Total PKR ",s*l))))),o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement(H.default,{Id:r,title:n,Price:s*l})))))};var Z=e=>{const t=e.buttonLabel,a=e.className,n=Object(c.useState)(!1),r=Object(y.a)(n,2),l=r[0],s=r[1],i=()=>s(!l);return o.a.createElement("div",null,o.a.createElement("button",{onClick:i,className:"btn btn-outline-success"},t),o.a.createElement(w.a,{isOpen:l,toggle:i,className:a,size:"lg"},o.a.createElement(T.a,{toggle:i},o.a.createElement("b",null,"Your Cart")),o.a.createElement(B.a,null,o.a.createElement(G,null)),o.a.createElement(D.a,null,o.a.createElement(j.a,{color:"secondary",onClick:i},"Cancel"))))};class Q extends c.Component{constructor(e){var t;super(e),t=this,this.handleDelete=function(){var e=Object(s.a)(l.a.mark((function e(a){var n,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.MealBoxes,r=t.state.MealBoxes.filter(e=>e.Id!==a),t.setState({MealBoxes:r}),e.next=5,Object(b.a)(a);case 5:s=e.sent,(c=s.data).status>=400&&c.status<500&&t.setState({MealBoxes:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.handleTrackChanges=e=>{this.props.history.push("changes_list/mealBox/".concat(e))},this.handlePageChange=e=>{this.setState({currentPage:e})},this.handleSort=e=>{this.setState({sortColumn:e})},this.handleSelect=e=>{this.setState({selected:e})},this.handleEdit=e=>{this.props.history.push("MealBox_list/".concat(e))},this.handleAdd=()=>{this.props.history.push("MealBox_list/new")},this.handleView=e=>{this.props.history.push("MealBox_list/view".concat(e,"&"))},this.handleSearch=e=>{e.toLowerCase().split(" ").map(e=>e.split(":"))},this.getPagedData=()=>{const e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortColumn,r=e.MealBoxes,l=e.mealBoxTitle,s=e.description,c=e.mealBoxPrice,o=e.totalCalories,i=r;(l||s||c||o)&&(i=this.filteredResult());const u=g.a.orderBy(i,[n.property],[n.order]),m=Object(f.a)(u,a,t);return{totalCount:i.length,data:m}},this.state={MealBoxes:[],pageSize:10,currentPage:1,sidebarOpen:!0,selected:-1,DUAttachments:[],Allergens:[],MealBoxItems:[],image:null,sortColumn:{property:"Id",order:"asc"}}}componentDidMount(){var e=this;return Object(s.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,e.context.dispatch)({type:"ExpenseType"}),t.next=4,Object(b.c)();case 4:a=t.sent,n=a.data,e.setState({MealBoxes:n.Result});case 7:case"end":return t.stop()}}),t)})))()}componentDidUpdate(e,t){var a=this;return Object(s.a)(l.a.mark((function e(){var t,n,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.Allergens,n=a.state.MealBoxItems,e.next=4,Object(v.c)();case 4:return r=e.sent,s=r.data,t.length!==s.Result.length&&a.setState({Allergens:s.Result}),e.next=9,Object(I.c)();case 9:c=e.sent,console.log("TCL: MealBoxesListView -> componentDidUpdate -> MealBoxItemslist.data.Result",c.data.Result),n.length!==c.data.Result.length&&a.setState({MealBoxItems:c.data.Result});case 12:case"end":return e.stop()}}),e)})))()}filteredResult(){var e=this;return Object(s.a)(l.a.mark((function t(){var a,r,s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.allMealBoxes,r=Object(n.a)({},a),t.next=4,e.getOrders();case 4:s=t.sent,c=s.data,r=c.value,e.setState({mealBoxes:r});case 8:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.image,a=e.Allergens,n=e.MealBoxItems,r=this.getPagedData(),l=(r.totalCount,r.data);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(i.a,{className:"px-2"},o.a.createElement(u.a,{className:"justify-content-between text-uppercase font-weight-bold",style:{fontSize:"1rem",fontWeight:400},onDoubleClick:()=>this.handleSelect(-1)},o.a.createElement(m.a,null,o.a.createElement(d.a,{className:"float-left"},o.a.createElement("span",{className:"ml-2",style:{fontSize:"1rem",fontWeight:600}},o.a.createElement(E.a,{defaultText:"Meal Boxes",resourceId:"lbl_MealBoxes"}),o.a.createElement("br",null))),o.a.createElement(d.a,{xs:"*"},o.a.createElement(Z,{buttonLabel:"Cart"})))),o.a.createElement(p.a,null,o.a.createElement(m.a,{md:"3"},l.map(e=>o.a.createElement(d.a,{key:e.Id,style:{width:"300%",height:"10%"}},o.a.createElement(q,{item:e,lavel:25,image:t,onEdit:this.handleEdit,Delete:this.handleDelete,Allergens:a,MealBoxItems:n})))))))))}}Q.contextType=x.a;t.default=Q},57:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return g})),a.d(t,"d",(function(){return f})),a.d(t,"g",(function(){return x})),a.d(t,"f",(function(){return y})),a.d(t,"j",(function(){return O})),a.d(t,"c",(function(){return j})),a.d(t,"i",(function(){return D})),a.d(t,"h",(function(){return k}));var n=a(50),r=a.n(n),l=a(51),s=a(49),c=a(58);function o(){return[{Id:0,Name:"No"},{Id:1,Name:"Yes"}]}function i(){return[{Id:1,Name:"Low"},{Id:2,Name:"Normal"},{Id:3,Name:"High"},{Id:4,Name:"Very High"}]}function u(e,t){return localStorage.setItem(e,JSON.stringify(t)),t}function m(e){const t=localStorage.getItem(e);return JSON.parse(t)}const d="".concat(c.c,"/MealBox"),p="____mealboxes____";function h(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.MealBoxTitle}))}function g(e){if(!e)return"";const t=m(p).find(t=>t.Id==e);return t?t.Name:e}function f(){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m(p))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,s.a.get("".concat(d,"/MealBoxs"));case 5:return a=e.sent,console.log("TCL: getMealBoxes -> response.data.Result",a.data.Result),n=h(a.data.Result),e.abrupt("return",u(p,n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const E="".concat(c.c,"/MealItem"),v="____mealitems____";function I(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.ItemName}))}function x(e){if(!e)return"";const t=m(v).find(t=>t.Id==e);return t?t.Name:e}function y(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m(v))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,s.a.get("".concat(E,"/MealItems"));case 5:return a=e.sent,n=I(a.data.Result),console.log("TCL: getMealItems -> response.data.Result",a.data.Result),e.abrupt("return",u(v,n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const C="".concat(c.c,"/SpiceLevel");function O(){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m("____spicelevels____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,s.a.get("".concat(C,"/SpiceLevels"));case 5:return a=e.sent,e.abrupt("return",u("____spicelevels____",a.data.Result));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const M="".concat(c.c,"/ItemCategory");function _(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.CategoryTitle}))}function j(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m("____itemcategories____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,s.a.get("".concat(M,"/ItemCategorys"));case 5:return a=e.sent,console.log("TCL: getItemCategories -> response",a),n=_(a.data.Result),e.abrupt("return",u("____itemcategories____",n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const T="".concat(c.c,"/SensitiveContent");function B(e){return localStorage.removeItem(e),e.map(e=>({Id:e.Id,Name:e.SensitiveItem}))}function D(e){if(!e)return"";const t=m("____sensitivecontents____").find(t=>t.Id==e);return t?t.Name:e}function k(){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=m("____sensitivecontents____"))||!t.length){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,s.a.get("".concat(T,"/SensitiveContents"));case 5:return a=e.sent,n=B(a.data.Result),e.abrupt("return",u("____sensitivecontents____",n));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},59:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(53),r=a.n(n);function l(e,t,a){const n=(t-1)*a;return r()(e).slice(n).take(a).value()}},61:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(81),s=a(9),c=a(54),o=a(55);class i extends n.Component{constructor(...e){super(...e),this.raiseSort=e=>{const t=Object(s.a)({},this.props.sortColumn);t.property===e?t.order="asc"===t.order?"desc":"asc":(t.property=e,t.order="asc"),this.props.onSort(t)},this.renderSortIcon=e=>{const t=this.props.sortColumn;return e.property!==t.property?null:"asc"===t.order?r.a.createElement(c.a,{icon:o.i}):r.a.createElement(c.a,{icon:o.h})}}render(){return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(e=>r.a.createElement("th",{className:"clickable text-left",key:e.property||e.key,onClick:()=>this.raiseSort(e.property)},e.label," ",this.renderSortIcon(e)))))}}var u=i,m=a(53),d=a.n(m);class p extends n.Component{constructor(...e){super(...e),this.renderCell=(e,t)=>t.content?t.content(e):d.a.get(e,t.property),this.createKey=(e,t)=>e.Id+(t.property||t.key),this.renderStyle=e=>e?{backgroundColor:"skyblue"}:null}render(){const e=this.props,t=e.data,a=e.columns,n=e.selected,l=e.onSelect,s=e.onView;return r.a.createElement("tbody",null,t.map(e=>r.a.createElement("tr",{key:e.Id,className:"clickable",style:this.renderStyle(n===e.Id),onClick:()=>l(e.Id),onDoubleClick:()=>s(e.Id)},a.map(t=>r.a.createElement("td",{key:this.createKey(e,t),className:"text-left"},this.renderCell(e,t))))))}}var h=p;t.a=({columns:e,sortColumn:t,onSort:a,data:n,selected:s,onSelect:c,onView:o})=>r.a.createElement(l.a,{size:"sm",hover:!0,responsive:!0,borderless:!0},r.a.createElement(u,{columns:e,sortColumn:t,onSort:a}),r.a.createElement(h,{data:n,columns:e,selected:s,onView:o,onSelect:c}))},63:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(48);t.a=({imgSrc:e,name:t,onChange:a,onUpload:n,error:s})=>r.a.createElement("div",{style:{position:"relative",float:"right",right:0,bottom:120,width:100,height:150}},r.a.createElement("img",{src:e,style:{height:"100px",width:"100px"},alt:e}),r.a.createElement("input",{style:{color:"transparent"},type:"file",name:t,id:t,onChange:a}),r.a.createElement("button",{type:"submit",onClick:n},r.a.createElement(l.a,{defaultText:"Upload",resourceId:"lbl_Upload"})),s&&r.a.createElement("div",{className:"alert alert-danger"},s))},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(49),r=a(58);const l="".concat(r.a,"/Image");function s(e){return n.a.post("".concat(l,"/File"),e,{headers:{"content-type":"multipart/form-data"}})}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return E}));var n=a(11),r=a(62),l=a(0),s=a.n(l),c=a(156),o=a(256),i=a(257),u=a(258),m=a(87),d=a(54),p=a(55),h=a(48);const g={float:"right",marginTop:"-35px",position:"relative",zIndex:2},f=e=>{let t=e.name,a=e.label,n=e.error,l=Object(r.a)(e,["name","label","error"]);return s.a.createElement("div",{className:"form-group"},s.a.createElement(c.a,null,s.a.createElement(o.a,null,s.a.createElement("label",{htmlFor:t},s.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")}))),s.a.createElement(o.a,null,s.a.createElement("input",Object.assign({},l,{type:"checkbox",id:t,name:t,className:"form-check-input"})))),n&&s.a.createElement("div",{className:"alert alert-danger"},n))},b=e=>{let t=e.name,a=e.label,l=e.error,c=e.type,o=Object(r.a)(e,["name","label","error","type"]);const i=s.a.useState(!1),u=Object(n.a)(i,2),m=u[0],h=u[1],f=m?"text":c;return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:t,className:"sr-only"},a),s.a.createElement("div",null,s.a.createElement("input",Object.assign({},o,{type:f,id:t,name:t,placeholder:a,className:"form-control"})),"password"===c?s.a.createElement(d.a,{style:g,onClick:()=>h(!m),size:"1x",color:"gray",className:"mr-3",icon:m?p.c:p.b}):null),l&&s.a.createElement("div",{className:"alert alert-danger"},l))},E=e=>{let t=e.name,a=e.placeholder,n=e.error,l=Object(r.a)(e,["name","placeholder","error"]);return s.a.createElement(i.a,null,s.a.createElement(u.a,{htmlFor:t,hidden:!0},s.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),s.a.createElement(m.a,Object.assign({},l,{type:"text",name:t,id:t,placeholder:a})),n&&s.a.createElement("div",{className:"alert alert-danger"},n))};t.d=e=>{let t=e.name,a=e.label,n=e.error,l=Object(r.a)(e,["name","label","error"]);return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:t},s.a.createElement(h.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),s.a.createElement("input",Object.assign({},l,{id:t,name:t,className:"form-control"})),n&&s.a.createElement("div",{className:"alert alert-danger"},n))}},66:function(e,t,a){"use strict";var n=a(62),r=a(0),l=a.n(r),s=a(48);t.a=e=>{let t=e.name,a=e.label,r=e.options,c=e.error,o=Object(n.a)(e,["name","label","options","error"]);return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:t},l.a.createElement(s.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),l.a.createElement("select",Object.assign({},o,{id:t,name:t,className:"form-control"}),l.a.createElement("option",{value:"0"},"...select..."),r.map(e=>l.a.createElement("option",{key:e.Id,value:e.Id},e.Name))),c&&l.a.createElement("div",{className:"alert alert-danger"},c))}},67:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(73),s=a.n(l),c=a(48);class o extends n.Component{constructor(...e){super(...e),this.setDate=e=>{this.props.onChange(this.props.name,e)}}render(){const e=this.props,t=e.name,a=e.placeholder,n=e.value,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},r.a.createElement(c.a,{defaultText:a,resourceId:a.replace(/\s+/g,"_")})),r.a.createElement(s.a,{id:t,name:t,selected:n,onChange:this.setDate,className:"form-control"}),l&&r.a.createElement("div",{className:"alert alert-danger"},l))}}t.a=o},69:function(e,t,a){"use strict";var n=a(50),r=a.n(n),l=a(51),s=a(9),c=a(11),o=a(0),i=a.n(o),u=a(60),m=a.n(u),d=a(63),p=a(64),h=a(65),g=a(66),f=a(67),b=a(48);class E extends o.Component{constructor(e){var t;super(e),t=this,this.validate=()=>{const e=m.a.validate(this.state.data,this.schema,{abortEarly:!0}).error;return e?e.details.map(e=>({[Object(c.a)(e.path,1)[0]]:e.message})):null},this.validateProperty=({name:e,value:t})=>{const a={[e]:t},n={[e]:this.schema[e]},r=m.a.validate(a,n).error;return r?r.details[0].message:null},this.handleChange=({currentTarget:e})=>{const t=Object(s.a)({},this.state.errors),a=this.validateProperty(e);a?t[e.name]=a:delete t[e.name];const n=Object(s.a)({},this.state.data),r="checkbox"===e.type?e.checked:e.value;n[e.name]=r,this.setState({data:n,errors:t})},this.handleDate=(e,t)=>{const a=this.state.data;a[e]=t,console.log("show Date in form",e,t),this.setState({data:a})},this.handleSubmit=e=>{e.preventDefault();const t=this.validate();this.setState({errors:t||{}}),t||this.doSubmit()},this.handleFileChange=e=>{const t=e.target.files[0];this.setState(Object(s.a)({},this.state.state,{files:t,imgSrc:URL.createObjectURL(t)}))},this.handleFileUpload=function(){var e=Object(l.a)(r.a.mark((function e(a){var n,l,c,o,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=t.state.files,l=new FormData,n.forEach(e=>l.append("file",e)),e.next=6,Object(p.a)(l);case 6:c=e.sent,o=c.data,i="Success!",o.success||(i=o.message),(u=t.state).Image=i,t.setState(Object(s.a)({},n,{errors:u,Image:o.Id}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.renderButton=e=>i.a.createElement("button",{type:"submit",disabled:this.validate(),className:"btn btn-primary m-1"},i.a.createElement(b.a,{defaultText:e,resourceId:e.replace(/\s+/g,"_")})),this.renderSelect=(e,t,a)=>{const n=this.state,r=n.data,l=n.errors;return i.a.createElement(g.a,{options:a,name:e,label:t,value:r[e],onChange:this.handleChange,error:l[e]})},this.renderInput=(e,t,a="text")=>{const n=this.state,r=n.data,l=n.errors;return i.a.createElement(h.d,{type:a,name:e,label:t,value:r[e],onChange:this.handleChange,error:l[e]})},this.renderCheckBox=(e,t,a="text")=>{const n=this.state,r=n.data,l=n.errors;return i.a.createElement(h.a,{type:a,name:e,label:t,value:r[e],onChange:this.handleChange,error:l[e]})},this.renderInlineInput=(e,t,a="text")=>{const n=this.state,r=n.data,l=n.errors;return i.a.createElement(h.b,{type:a,name:e,placeholder:t,value:r[e],onChange:this.handleChange,error:l[e]})},this.renderDatePicker=(e,t,a)=>{const n=this.state.errors;return i.a.createElement(f.a,{name:e,placeholder:t,value:a,onChange:this.handleDate,errors:n[e]})},this.renderImagePicker=e=>{const t=this.state,a=t.errors,n=t.imgSrc;return i.a.createElement(d.a,{imgSrc:n,name:e,onChange:this.handleFileChange,onUpload:this.handleFileUpload,error:a[e]})},this.state={data:{},errors:{}}}}t.a=E},75:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return c}));var n=a(49);function r(){return n.a.get("".concat("/MealBox","/MealBoxs"))}function l(e){return n.a.get("".concat("/MealBox","/ById?Id=").concat(e))}function s(e){return n.a.get("".concat("/MealBox","/Delete?Id=").concat(e))}function c(e){return n.a.post("".concat("/MealBox","/Create"),e)}},76:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o}));var n=a(49);const r="/SensitiveContent";function l(){return n.a.get("".concat(r,"/SensitiveContents"))}function s(e){return console.log("TCL: getSensitiveContent -> id",e),n.a.get("".concat(r,"/ById?Id=").concat(e))}function c(e){return n.a.get("".concat(r,"/Delete?Id=").concat(e))}function o(e){return n.a.post("".concat(r,"/Create"),e)}},77:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return c}));var n=a(49);function r(){return n.a.get("".concat("/MealBoxItem","/MealBoxItems"))}function l(e){return n.a.get("".concat("/MealBoxItem","/ById?Id=").concat(e))}function s(e){return n.a.get("".concat("/MealBoxItem","/Delete?Id=").concat(e))}function c(e){return n.a.post("".concat("/MealBoxItem","/Create"),e)}},78:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o}));var n=a(49);const r="/MealItemSensitivity";function l(){return n.a.get("".concat(r,"/MealItemSensitivitys"))}function s(e){return n.a.get("".concat(r,"/ById?Id=").concat(e))}function c(e){return n.a.get("".concat(r,"/Delete?Id=").concat(e))}function o(e){return n.a.post("".concat(r,"/Create"),e)}},85:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(61),s=a(57);class c extends n.Component{constructor(...e){super(...e),this.columns=[{property:"MealItemIdFK",label:"Meal Item",content:e=>Object(s.g)(e.MealItemIdFK)},{property:"SensitiveContentIdFK",label:"Sensitive Content",content:e=>Object(s.i)(e.SensitiveContentIdFK)}]}render(){const e=this.props,t=e.MealItemSensitivities,a=e.onSort,n=e.sortColumn,s=e.onSelect,c=e.selected,o=e.onView;return r.a.createElement(l.a,{selected:c,columns:this.columns,data:t,sortColumn:n,onSort:a,onSelect:s,onView:o})}}t.a=c},86:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a(49);const r="/DUAttachment";function l(e){return console.log("TCL: getDUAttachments -> DUAttachment",e),n.a.post("".concat(r,"/ByFilter"),e)}function s(e){return console.log("TCL: deleteDUAttachment -> id",e),n.a.get("".concat(r,"/Delete?Id=").concat(e))}},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n);function l({value:e}){return r.a.createElement("div",{className:"progress md-progress",style:{height:"4px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(e,"%"),height:"4px"},"aria-valuenow":e,"aria-valuemin":"0","aria-valuemax":"100"}))}},91:function(e,t,a){"use strict";var n=a(11),r=a(0),l=a.n(r),s=a(242),c=a(282),o=a(266),i=a(267),u=a(268),m=a(9),d=a(50),p=a.n(d),h=a(51),g=a(82),f=a(84),b=a(53),E=a.n(b),v=a(59),I=a(78),x=a(85);class y extends r.Component{constructor(e){var t;super(e),t=this,this.handleDelete=function(){var e=Object(h.a)(p.a.mark((function e(a){var n,r,l,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.MealItemSensitivities,r=t.state.MealItemSensitivities.filter(e=>e.Id!==a),t.setState({MealItemSensitivities:r}),e.next=5,Object(I.a)(a);case 5:l=e.sent,(s=l.data).status>=400&&s.status<500&&t.setState({MealItemSensitivities:n});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.handleTrackChanges=e=>{this.props.history.push("changes_list/mealItemSensitivity/".concat(e))},this.handlePageChange=e=>{this.setState({currentPage:e})},this.handleSort=e=>{this.setState({sortColumn:e})},this.handleSelect=e=>{this.setState({selected:e})},this.handleEdit=e=>{this.props.history.push("MealItemSensitivity_list/".concat(e))},this.handleView=e=>{this.props.history.push("MealItemSensitivity_list/view".concat(e,"&"))},this.handleAdd=()=>{this.props.history.push("MealItemSensitivity_list/new")},this.handleSearch=e=>{const t=e.toLowerCase().split(" ").map(e=>e.split(":"));console.log("".concat(t[0][0],":").concat(t[0][1])),console.log("".concat(t[1][0],":").concat(t[1][1]))},this.getPagedData=()=>{const e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortColumn,r=e.MealItemSensitivities,l=E.a.orderBy(r,[n.property],[n.order]),s=Object(v.a)(l,a,t);return{totalCount:r.length,data:s}},this.state={MealItemSensitivities:[],pageSize:10,currentPage:1,selected:-1,sortColumn:{property:"Id",order:"asc"}}}componentDidMount(){var e=this;return Object(h.a)(p.a.mark((function t(){var a,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.b)();case 2:a=t.sent,n=a.data,r=n.Result.filter(t=>t.MealItemIdFK===e.props.ItemId),console.log("TCL: MealItemSensitivitiesListView -> componentDidMount -> list",r),e.setState({MealItemSensitivities:r});case 7:case"end":return t.stop()}}),t)})))()}filteredResult(){var e=this;return Object(h.a)(p.a.mark((function t(){var a,n,r,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.allMealItemSensitivities,n=Object(m.a)({},a),t.next=4,e.getOrders();case 4:r=t.sent,l=r.data,n=l.value,e.setState({mealItemSensitivities:n});case 8:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.sortColumn,a=e.selected,n=this.getPagedData().data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(x.a,{MealItemSensitivities:n,selected:a,sortColumn:t,onSort:this.handleSort,onView:this.handleView,onDelete:this.handleDelete,onExport:this.handleExport,onSelect:this.handleSelect}))))}}var S=y;t.a=e=>{const t=e.buttonLabel,a=e.className,m=Object(r.useState)(!1),d=Object(n.a)(m,2),p=d[0],h=d[1],g=()=>h(!p);return l.a.createElement("div",null,l.a.createElement(s.a,{color:"info",onClick:g},t),l.a.createElement(c.a,{isOpen:p,toggle:g,className:a},l.a.createElement(o.a,{toggle:g},"ALLERGEN INFORMATION"),l.a.createElement(i.a,null,l.a.createElement(S,{MealBoxItems:e.MealBoxItems,ItemId:e.Id})),l.a.createElement(u.a,null,l.a.createElement(s.a,{color:"secondary",onClick:g},"Cancel"))))}}}]);
//# sourceMappingURL=9.6e21962b.chunk.js.map