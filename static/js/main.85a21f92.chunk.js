(this.webpackJsonpfort_nite=this.webpackJsonpfort_nite||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(7),a=c.n(s),i=c(0);function o(){return Object(i.jsx)("div",{className:"header",children:" FORTNITE SHOP"})}function l(){return Object(i.jsx)("div",{className:"footer",children:"Footer"})}var d=c(8),j=c(9),u=c(1);function b(e,t){var c=t.type,n=t.payload;switch(c){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:n||[],loading:!1});case"CLOSE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alertName:""});case"ADD_TO_CART":var r=e.order.findIndex((function(e){return e.id===n.id})),s=null;if(r<0){var a=Object(u.a)(Object(u.a)({},n),{},{quantity:1});s=[].concat(Object(j.a)(e.order),[a])}else s=e.order.map((function(e,t){return t===r?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:s,alertName:n.name});case"INCREMENT_QTY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.quantity+1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t})}return e}))});case"DECREMENT_QTY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.quantity-1;return Object(u.a)(Object(u.a)({},e),{},{quantity:t>=0?t:0})}return e}))});case"REMOVE_ITEM":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.filter((function(e){return e.id!==n.id}))});case"TOGGLE_BASKET":return Object(u.a)(Object(u.a)({},e),{},{isBasketShow:!e.isBasketShow});default:return e}}var O=Object(n.createContext)(),m={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},h=function(e){var t=e.children,c=Object(n.useReducer)(b,m),r=Object(d.a)(c,2),s=r[0],a=r[1];return s.closeAlert=function(){a({type:"CLOSE_ALERT"})},s.addToCart=function(e){a({type:"ADD_TO_CART",payload:e})},s.removeItem=function(e){a({type:"REMOVE_ITEM",payload:{id:e}})},s.incrementQty=function(e){a({type:"INCREMENT_QTY",payload:{id:e}})},s.decrementQty=function(e){a({type:"DECREMENT_QTY",payload:{id:e}})},s.handleBasketShow=function(){a({type:"TOGGLE_BASKET"})},s.setGoods=function(e){a({type:"SET_GOODS",payload:e})},Object(i.jsx)(O.Provider,{value:s,children:t})},f=function(){return Object(i.jsx)("div",{className:"preloader"})},_=function(e){var t=e.id,c=e.name,r=e.description,s=e.price,a=e.full_background,o=Object(n.useContext)(O).addToCart;return Object(i.jsxs)("div",{className:"goods__item",children:[Object(i.jsx)("div",{className:"goods__item-img",children:Object(i.jsx)("img",{src:a||"https://tl.rulate.ru/i/book/19/10/18925.jpg",alt:c})}),Object(i.jsx)("div",{className:"goods__item-description",children:r}),Object(i.jsxs)("button",{className:"goods__item-btn btn btn--price-high",onClick:function(){return o({id:t,name:c,price:s})},children:[s," $"]})]})},x=function(e){var t=Object(n.useContext)(O).goods,c=void 0===t?[]:t;return c.length?Object(i.jsx)("div",{className:"goods",children:c.map((function(e){return Object(i.jsx)(_,Object(u.a)({},e),e.id)}))}):Object(i.jsx)("h1",{children:"Nothing here"})},p=function(){var e=Object(n.useContext)(O),t=e.order,c=void 0===t?[]:t,r=e.handleBasketShow;return Object(i.jsx)("div",{className:"basket",onClick:r,children:Object(i.jsx)("div",{className:"basket__img",children:Object(i.jsx)("span",{className:"basket__count",children:0===c.length?null:c.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}))})})})},v=function(e){var t=e.id,c=e.name,r=e.price,s=e.quantity,a=e.full_background,o=Object(n.useContext)(O),l=o.removeItem,d=o.incrementQty,j=o.decrementQty;return Object(i.jsxs)("div",{className:"cartlist__item item-classlist",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:a,alt:""})}),Object(i.jsxs)("div",{className:"item-classlist__descr-top",children:[Object(i.jsxs)("span",{className:"item-classlist__price",children:[" $",r*s," "]}),Object(i.jsxs)("span",{className:"item-classlist__name",children:[" ",c," "]}),Object(i.jsx)("span",{onClick:function(){return l(t)},className:"item-classlist__remove",children:" X "})]}),Object(i.jsx)("div",{className:"item-classlist__descr-bot",children:Object(i.jsxs)("div",{className:"item-classlist__qty",children:["qty:",Object(i.jsx)("span",{onClick:function(){return d(t)},className:"item-classlist__qty-btn",children:" + "}),s,Object(i.jsx)("span",{onClick:function(){return j(t)},className:"item-classlist__qty-btn",children:" - "})]})})]})},N=function(e){var t=Object(n.useContext)(O),c=t.order,r=void 0===c?[]:c,s=t.handleBasketShow,a=r.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(i.jsx)("div",{className:"cartlist",onClick:s,children:Object(i.jsxs)("div",{className:"cartlist__wrapper",onClick:function(e){return e.stopPropagation()},children:[Object(i.jsx)("h3",{className:"cartlist__title",children:" MY BAG"}),Object(i.jsx)("div",{className:"cartlist__items",children:r.length?r.map((function(e){return Object(i.jsx)(v,Object(u.a)({},e),e.id)})):Object(i.jsx)("li",{children:"YOUR BASKET IS EMPTY"})}),Object(i.jsxs)("div",{className:"cartlist__total-price",children:["TOTAL PRICE:",Object(i.jsxs)("span",{children:[r.length?a:null,"$"]})]}),Object(i.jsx)("button",{className:"cartlist__btn-close",onClick:s,children:"X"})]})})},y=function(e){var t=Object(n.useContext)(O),c=t.closeAlert,r=t.alertName;return Object(n.useEffect)((function(){var e=setTimeout(c,1e3);return function(){clearTimeout(e)}}),[r]),Object(i.jsxs)("div",{className:"alert",children:[r," added"]})},E=function(){var e=Object(n.useContext)(O),t=e.loading,c=e.order,r=e.setGoods,s=e.alertName,a=e.isBasketShow;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"d3bd61ca-49fc6649-b752ba78-1c7fbe19"}}).then((function(e){return e.json()})).then((function(e){r(e.featured),console.log(e.featured)}))}),[]),Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(p,{order:c}),t?Object(i.jsx)(f,{}):Object(i.jsx)(x,{}),a&&Object(i.jsx)(N,{}),s&&Object(i.jsx)(y,{})]})})};c(6);var T=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(h,{children:Object(i.jsx)(E,{})}),Object(i.jsx)(l,{})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))},6:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.85a21f92.chunk.js.map