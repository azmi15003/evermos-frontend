(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3],{318:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("277a84fa",content,!0,{sourceMap:!1})},320:function(t,e,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("671c5930",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r(318)},323:function(t,e,r){var o=r(74)((function(i){return i[1]}));o.push([t.i,'.skeleton{animation:skeleton-loading 1s linear infinite alternate}.skeleton-box{background-color:#dddbdd;display:inline-block;height:1em;overflow:hidden;position:relative}.skeleton-box:after{animation:shimmer 2s infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:translateX(-100%)}@keyframes shimmer{to{transform:translateX(100%)}}@keyframes skeleton-loading{0%{background-color:#c2cfd6}to{background-color:#f0f3f5}}.skeleton-text{border-radius:.25rem;height:.7rem;margin-bottom:.5rem;width:100%}.skeleton-text__body{width:75%}.skeleton-footer{width:30%}',""]),o.locals={},t.exports=o},324:function(t,e,r){"use strict";r.r(e);r(322);var o=r(28),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("a",{staticClass:"card",attrs:{id:"card-link",target:"_blank"}},[e("div",{staticClass:"card__footer",attrs:{id:"card-footer"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-footer"})]),t._v(" "),e("div",{staticClass:"card__body"},[e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__img"},[e("img",{staticClass:"skeleton-box",attrs:{alt:"",id:"cover-img"}})])]),t._v(" "),e("div",{staticClass:"card__footer",attrs:{id:"card-footer"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-footer"})])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,r){t.exports=r.p+"img/love.9de9ac2.svg"},327:function(t,e,r){"use strict";r(320)},328:function(t,e,r){var o=r(74)((function(i){return i[1]}));o.push([t.i,".card{padding-bottom:16px;width:100%}.card img{transition:transform .3s ease}.card:hover img{transform:scale(1.1)}.title{color:#99a499;font-size:14px;margin:0}.label-discount{background:#d43232;color:#fff;font-size:14px;margin-left:8px;padding:2px 4px}.description{color:0;font-size:14px;font-weight:500;line-height:140%;margin:0}",""]),o.locals={},t.exports=o},329:function(t,e,r){"use strict";r.r(e);r(93);var o=r(12),d=(r(76),{props:{product:{type:Object,default:null}},data:function(){return{}},methods:{updateWishlists:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.preventDefault(),e.product.isWishList=!e.product.isWishList,e.$emit("update:product",e.product),e.$store.dispatch("setWishlist",e.product);case 4:case"end":return r.stop()}}),r)})))()},addToWishlist:function(){this.$store.dispatch("setCart",this.product)}}}),n=(r(327),r(28)),component=Object(n.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.product?e("div",{staticClass:"card"},[e("NuxtLink",{attrs:{to:"/".concat(t.product.title,"/").concat(t.product.id)}},[e("img",{staticStyle:{height:"300px"},attrs:{src:t.product.listImage[0],width:"100%"}}),t._v(" "),e("div",{staticStyle:{padding:"10px"}},[e("p",{staticClass:"title"},[t._v(t._s(t.product.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.product.varian))]),t._v(" "),e("div",{staticClass:"flex items-center",staticStyle:{"margin-bottom":"10px"}},[e("img",{class:{"image-red":t.product.isWishList},attrs:{src:r(326),height:"24",width:"24"},on:{click:t.updateWishlists}})]),t._v(" "),e("div",[e("span",{staticStyle:{color:"#d43232"}},[t._v("Rp."+t._s(t.product.price))])]),t._v(" "),e("div",{staticClass:"flex"},[t.product.salePrice?e("del",{staticClass:"margin-0"},[e("span",{staticStyle:{"font-size":"12px",color:"grey"}},[t._v("Rp."+t._s(t.product.salePrice))])]):t._e(),t._v(" "),t.product.discountLabel?e("div",{staticClass:"label-discount"},[t._v("\n            "+t._s(t.product.discountLabel)+"\n            "),e("br")]):t._e()])])])],1):e("Skeleton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Skeleton:r(324).default})},333:function(t,e,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("6b11aa68",content,!0,{sourceMap:!1})},337:function(t,e,r){"use strict";r(333)},338:function(t,e,r){var o=r(74)((function(i){return i[1]}));o.push([t.i,".product-image[data-v-092822ec]{width:100%}.quantity-product[data-v-092822ec]{border:1px solid #d3d3d3;border-radius:8px;padding:6px 12px}.discount-label[data-v-092822ec]{background:#d43232;color:#fff;margin-left:8px;padding:0 4px}.product-image__main[data-v-092822ec],.product-information[data-v-092822ec]{width:100%}.wishlist[data-v-092822ec]{right:0;top:10}.product-description[data-v-092822ec]{justify-content:center;margin-top:30px;padding:20px}.button-add-cart[data-v-092822ec]{background:#fff;color:#333}.button-add-cart[data-v-092822ec],.button-buy-product[data-v-092822ec]{border:1px solid #333;border-radius:8px;font-size:14px;padding:12px 36px;width:100%}.button-buy-product[data-v-092822ec]{background:#000;color:#fff;margin-top:20px}.product-grid[data-v-092822ec]{width:100%}.product-grid .product-grid__container[data-v-092822ec]{display:flex;flex-wrap:wrap;gap:32px}.product-grid .product-grid__container .product-grid__item[data-v-092822ec]{width:calc(50% - 16px)}.product-detail[data-v-092822ec]{display:flex;width:75%}.product-detail .product-detial__container[data-v-092822ec]{display:flex;flex-wrap:wrap;gap:12px}.product-detail .product-detial__container .product-detail__item[data-v-092822ec]{padding:8px}.product-detail .product-detial__container .product-detail__item[data-v-092822ec]:active{background-color:red}.amount[data-v-092822ec]{color:#999;margin-left:10px;-webkit-text-decoration:line-through;text-decoration:line-through}@media screen and (min-width:1280px){.product-image[data-v-092822ec]{gap:12px;width:40%}.product-image__main[data-v-092822ec]{width:calc(100% - 100px)}.product-information[data-v-092822ec]{width:60%}.product-description[data-v-092822ec]{justify-content:none;padding:0}.button-add-cart[data-v-092822ec]{background:#fff;border:1px solid #333;border-radius:8px;color:#333;font-size:14px;padding:12px 36px;width:320px}.wishlist[data-v-092822ec]{right:30px;top:0}.button-buy-product[data-v-092822ec]{background:#000;border:1px solid #333;border-radius:8px;color:#fff;font-size:14px;padding:12px 36px;width:320px}.product-grid__item[data-v-092822ec]{width:calc(25% - 24px)!important}}",""]),o.locals={},t.exports=o},361:function(t,e,r){"use strict";r.r(e);r(34),r(15),r(35),r(55),r(56),r(40),r(36);var o=r(12),d=r(25),n=(r(76),r(33));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}var l={data:function(){return{brand:this.$route.params.brand,productId:this.$route.params.id,listProduct:[],product:{},loading:!1,imageDetail:null,sizeList:[36,37,38,39,40,41,42,43,44],size:36,quantity:1}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(d.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)(["wishList"])),methods:{getDetailProduct:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("https://my-json-server.typicode.com/azmi15003/api-assessment/products/".concat(t.productId));case 3:r=e.sent,t.product=r.data,t.imageDetail=r.data.listImage[0],t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},addToCart:function(){this.$store.dispatch("setCart",this.product)},getListProduct:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://my-json-server.typicode.com/azmi15003/api-assessment/products");case 2:r=e.sent,t.listProduct=r.data.filter((function(p){return p.title===t.product.title}));case 4:case"end":return e.stop()}}),e)})))()},sizeButton:function(t){this.size=t},imageVarian:function(img){this.imageDetail=img},updateWishlist:function(){this.product.isWishList=!this.product.isWishList,this.$store.commit("updateWishlist",{productId:this.product.id,isWishList:this.product.isWishList})}}},f=l,v=(r(337),r(28)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("br"),t._v(" "),e("section",{staticClass:"container"},[e("div",{staticClass:"flex flex-direction-responsive"},[e("div",{staticClass:"float-left product-grid"},[e("br"),t._v(" "),e("span",{staticClass:"float-right"},[t._v(t._s(t.wishList.filter((function(t){return t.isWishList})).length)+" Items")]),t._v(" "),e("div",[e("br"),t._v(" "),e("div",{staticClass:"product-grid__container"},t._l(t.wishList.filter((function(t){return t.isWishList})),(function(t,r){return e("div",{key:r,staticClass:"product-grid__item"},[e("Card",{attrs:{product:t}})],1)})),0)])])])])])}),[],!1,null,"092822ec",null);e.default=component.exports;installComponents(component,{Card:r(329).default})}}]);