(this.webpackJsonpfort_nite=this.webpackJsonpfort_nite||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(7),a=c.n(r),i=c(0);function o(){return Object(i.jsx)("div",{className:"header",children:" FORTNITE SHOP"})}function l(){return Object(i.jsx)("div",{className:"footer",children:"Footer"})}var d=c(8),j=c(9),u=c(1);function b(e,t){var c=t.type,n=t.payload;switch(c){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:n||[],loading:!1});case"CLOSE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alertName:""});case"ADD_TO_CART":var s=e.order.findIndex((function(e){return e.id===n.id})),r=null;if(s<0){var a=Object(u.a)(Object(u.a)({},n),{},{quantity:1});r=[].concat(Object(j.a)(e.order),[a])}else r=e.order.map((function(e,t){return t===s?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:r,alertName:n.name});case"INCREMENT_QTY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.quantity+1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t})}return e}))});case"DECREMENT_QTY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.quantity-1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t>=0?t:0})}return e}))});case"REMOVE_ITEM":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.filter((function(e){return e.id!==n.id}))});case"TOGGLE_BASKET":return Object(u.a)(Object(u.a)({},e),{},{isBasketShow:!e.isBasketShow});default:return e}}var O=Object(n.createContext)(),m={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},h=function(e){var t=e.children,c=Object(n.useReducer)(b,m),s=Object(d.a)(c,2),r=s[0],a=s[1];return r.closeAlert=function(){a({type:"CLOSE_ALERT"})},r.addToCart=function(e){a({type:"ADD_TO_CART",payload:e})},r.removeItem=function(e){a({type:"REMOVE_ITEM",payload:{id:e}})},r.incrementQty=function(e){a({type:"INCREMENT_QTY",payload:{id:e}})},r.decrementQty=function(e){a({type:"DECREMENT_QTY",payload:{id:e}})},r.handleBasketShow=function(){a({type:"TOGGLE_BASKET"})},r.setGoods=function(e){a({type:"SET_GOODS",payload:e})},Object(i.jsx)(O.Provider,{value:r,children:t})},f=function(){return Object(i.jsx)("div",{className:"preloader"})},x=function(e){var t=e.id,c=e.name,s=e.description,r=e.price,a=e.full_background,o=Object(n.useContext)(O).addToCart;return Object(i.jsxs)("div",{className:"goods__item",children:[Object(i.jsx)("div",{className:"goods__item-img",children:Object(i.jsx)("img",{src:a,alt:c})}),Object(i.jsx)("ul",{className:"goods__item-info",children:Object(i.jsx)("li",{className:"goods__item-description",children:s})}),Object(i.jsxs)("div",{className:"goods__item-btn btn btn--price-high",onClick:function(){return o({id:t,name:c,price:r})},children:[r," $"]})]})},_=function(e){var t=Object(n.useContext)(O).goods,c=void 0===t?[]:t;return c.length?Object(i.jsx)("div",{className:"goods",children:c.map((function(e){return Object(i.jsx)(x,Object(u.a)({},e),e.id)}))}):Object(i.jsx)("h1",{children:"Nothing here"})},p=function(){var e=Object(n.useContext)(O),t=e.order,c=void 0===t?[]:t,s=e.handleBasketShow;return Object(i.jsx)("div",{className:"basket",onClick:s,children:Object(i.jsx)("div",{className:"basket__img",children:Object(i.jsx)("span",{className:"basket__count",children:0===c.length?null:c.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}))})})})},v=function(e){var t=e.id,c=e.name,s=e.price,r=e.quantity,a=e.full_background,o=Object(n.useContext)(O),l=o.removeItem,d=o.incrementQty,j=o.decrementQty;return Object(i.jsxs)("div",{className:"cartlist__item item-classlist",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:a,alt:""})}),Object(i.jsxs)("div",{className:"item-classlist__descr-top",children:[Object(i.jsxs)("span",{className:"item-classlist__price",children:[" $",s*r," "]}),Object(i.jsxs)("span",{className:"item-classlist__name",children:[" ",c," "]}),Object(i.jsx)("span",{onClick:function(){return l(t)},className:"item-classlist__remove",children:" X "})]}),Object(i.jsx)("div",{className:"item-classlist__descr-bot",children:Object(i.jsxs)("div",{className:"item-classlist__qty",children:["qty:",Object(i.jsx)("span",{onClick:function(){return d(t)},className:"item-classlist__qty-btn",children:" + "}),r,Object(i.jsx)("span",{onClick:function(){return j(t)},className:"item-classlist__qty-btn",children:" - "})]})})]})},N=function(e){var t=Object(n.useContext)(O),c=t.order,s=void 0===c?[]:c,r=t.handleBasketShow,a=s.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(i.jsx)("div",{className:"cartlist",children:Object(i.jsxs)("div",{className:"cartlist__wrapper",children:[Object(i.jsx)("h3",{className:"cartlist__title",children:" MY BAG"}),Object(i.jsx)("div",{className:"cartlist__items",children:s.length?s.map((function(e){return Object(i.jsx)(v,Object(u.a)({},e),e.id)})):Object(i.jsx)("li",{children:"YOUR BASKET IS EMPTY"})}),Object(i.jsxs)("div",{className:"cartlist__total-price",children:["TOTAL PRICE:",Object(i.jsxs)("span",{children:[s.length?a:null,"$"]})]}),Object(i.jsx)("button",{className:"btn-close",onClick:r,children:"X"})]})})},y=function(e){var t=Object(n.useContext)(O),c=t.closeAlert,s=t.alertName;return Object(n.useEffect)((function(){var e=setTimeout(c,1e3);return function(){clearTimeout(e)}}),[s]),Object(i.jsxs)("div",{className:"alert",children:[s," added"]})},E=function(){var e=Object(n.useContext)(O),t=e.loading,c=e.order,s=e.setGoods,r=e.alertName,a=e.isBasketShow;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"d3bd61ca-49fc6649-b752ba78-1c7fbe19"}}).then((function(e){return e.json()})).then((function(e){s(e.featured)}))}),[]),Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(p,{order:c}),t?Object(i.jsx)(f,{}):Object(i.jsx)(_,{}),a&&Object(i.jsx)(N,{}),r&&Object(i.jsx)(y,{})]})})};c(6);var T=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(h,{children:Object(i.jsx)(E,{})}),Object(i.jsx)(l,{})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))},6:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.6422f1da.chunk.js.map