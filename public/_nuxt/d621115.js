(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4],{319:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("277a84fa",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";var n=r(326).has;t.exports=function(t){return n(t),t}},321:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("671c5930",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";var n=r(4),o=r(345),c=r(326),d=c.Map,l=c.proto,f=n(l.forEach),v=n(l.entries),h=v(new d).next;t.exports=function(map,t,e){return e?o({iterator:v(map),next:h},(function(e){return t(e[1],e[0])})):f(map,t)}},323:function(t,e,r){"use strict";r(319)},324:function(t,e,r){var n=r(74)((function(i){return i[1]}));n.push([t.i,'.skeleton{animation:skeleton-loading 1s linear infinite alternate}.skeleton-box{background-color:#dddbdd;display:inline-block;height:1em;overflow:hidden;position:relative}.skeleton-box:after{animation:shimmer 2s infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:translateX(-100%)}@keyframes shimmer{to{transform:translateX(100%)}}@keyframes skeleton-loading{0%{background-color:#c2cfd6}to{background-color:#f0f3f5}}.skeleton-text{border-radius:.25rem;height:.7rem;margin-bottom:.5rem;width:100%}.skeleton-text__body{width:75%}.skeleton-footer{width:30%}',""]),n.locals={},t.exports=n},325:function(t,e,r){"use strict";r.r(e);r(323);var n=r(28),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("a",{staticClass:"card",attrs:{id:"card-link",target:"_blank"}},[e("div",{staticClass:"card__footer",attrs:{id:"card-footer"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-footer"})]),t._v(" "),e("div",{staticClass:"card__body"},[e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__img"},[e("img",{staticClass:"skeleton-box",attrs:{alt:"",id:"cover-img"}})])]),t._v(" "),e("div",{staticClass:"card__footer",attrs:{id:"card-footer"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-footer"})])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";var n=r(4),o=Map.prototype;t.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o.delete),proto:o}},327:function(t,e,r){t.exports=r.p+"img/love.9de9ac2.svg"},328:function(t,e,r){"use strict";r(321)},329:function(t,e,r){var n=r(74)((function(i){return i[1]}));n.push([t.i,".card{padding-bottom:16px;width:100%}.card img{transition:transform .3s ease}.card:hover img{transform:scale(1.1)}.title{color:#99a499;font-size:14px;margin:0}.label-discount{background:#d43232;color:#fff;font-size:14px;margin-left:8px;padding:2px 4px}.description{color:0;font-size:14px;font-weight:500;line-height:140%;margin:0}",""]),n.locals={},t.exports=n},330:function(t,e,r){"use strict";r.r(e);r(93);var n=r(12),o=(r(76),{props:{product:{type:Object,default:null}},data:function(){return{}},methods:{updateWishlists:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.preventDefault(),e.product.isWishList=!e.product.isWishList,e.$emit("update:product",e.product),e.$store.dispatch("setWishlist",e.product);case 4:case"end":return r.stop()}}),r)})))()},addToWishlist:function(){this.$store.dispatch("setCart",this.product)}}}),c=(r(328),r(28)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.product?e("div",{staticClass:"card"},[e("NuxtLink",{attrs:{to:"/".concat(t.product.title,"/").concat(t.product.id)}},[e("img",{staticStyle:{height:"300px"},attrs:{src:t.product.listImage[0],width:"100%"}}),t._v(" "),e("div",{staticStyle:{padding:"10px"}},[e("p",{staticClass:"title"},[t._v(t._s(t.product.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.product.varian))]),t._v(" "),e("div",{staticClass:"flex items-center",staticStyle:{"margin-bottom":"10px"}},[e("img",{class:{"image-red":t.product.isWishList},attrs:{src:r(327),height:"24",width:"24"},on:{click:t.updateWishlists}})]),t._v(" "),e("div",[e("span",{staticStyle:{color:"#d43232"}},[t._v("Rp."+t._s(t.product.price))])]),t._v(" "),e("div",{staticClass:"flex"},[t.product.salePrice?e("del",{staticClass:"margin-0"},[e("span",{staticStyle:{"font-size":"12px",color:"grey"}},[t._v("Rp."+t._s(t.product.salePrice))])]):t._e(),t._v(" "),t.product.discountLabel?e("div",{staticClass:"label-discount"},[t._v("\n            "+t._s(t.product.discountLabel)+"\n            "),e("br")]):t._e()])])])],1):e("Skeleton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Skeleton:r(325).default})},331:function(t,e,r){var content=r(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("924d3fe8",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";r(331)},333:function(t,e,r){var n=r(74)((function(i){return i[1]}));n.push([t.i,".slider-container[data-v-df92087c]{height:400px;margin-top:-20px}.slider[data-v-df92087c]{animation:imageAnimateOpacity 1s ease;cursor:pointer;height:100%;left:0;opacity:0;opacity:1;overflow:hidden;position:absolute;width:100%;z-index:0;z-index:1}.left-arrow[data-v-df92087c],.right-arrow[data-v-df92087c]{background-color:#000;border-radius:100%;color:#fff;cursor:pointer;font-size:20px;font-weight:700;height:30px;line-height:30px;position:absolute;text-align:center;top:45%;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:30px}span[data-v-df92087c]:hover{background-color:#066c6c;transition:.2s}.left-arrow[data-v-df92087c]{animation:left-arrow-df92087c .5s ease;left:-40px}@keyframes left-arrow-df92087c{0%{left:0;opacity:0}to{left:-40px;opacity:1}}.right-arrow[data-v-df92087c]{animation:right-arrow-df92087c .5s ease;right:-40px}@keyframes right-arrow-df92087c{0%{opacity:0;right:0}to{opacity:1;right:-40px}}.circle[data-v-df92087c]{margin-top:20px;text-align:center}.circle span[data-v-df92087c]{border:2px solid silver;border-radius:100%;box-shadow:0 0 1px silver;cursor:pointer;display:inline-block;margin:5px;padding:5px}.slider>img[data-v-df92087c]{background-color:#fff;bottom:0;cursor:pointer;height:25px;opacity:.7;position:absolute;right:0;width:25px;z-index:3}@media screen and (max-width:800px){.slider-container[data-v-df92087c]{height:140px}.left-arrow[data-v-df92087c],.right-arrow[data-v-df92087c]{display:none}}",""]),n.locals={},t.exports=n},335:function(t,e,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("1321e79e",content,!0,{sourceMap:!1})},337:function(t,e,r){"use strict";r.r(e);r(77);var n={name:"Slider",props:{images:{type:Array,default:[]}},data:function(){return{timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,4e3)},next:function(){this.currentIndex+=1},prev:function(){this.currentIndex-=1}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},o=(r(332),r(28)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative slider-container"},[e("div",{staticClass:"slider"},t._l([t.currentIndex],(function(i){return e("div",{key:i},[e("img",{attrs:{src:t.currentImg,width:"100%"}})])})),0)])}),[],!1,null,"df92087c",null);e.default=component.exports},340:function(t,e,r){"use strict";r(341)},341:function(t,e,r){"use strict";r(217)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(342))},342:function(t,e,r){"use strict";var n=r(47),o=r(78),c=r(117),d=r(53),l=r(95),f=r(29),v=r(94),h=r(152),m=r(116),x=r(153),_=r(8),y=r(118).fastKey,w=r(30),k=w.set,C=w.getterFor;t.exports={getConstructor:function(t,e,r,h){var m=t((function(t,o){l(t,x),k(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),_||(t.size=0),f(o)||v(o,t[h],{that:t,AS_ENTRIES:r})})),x=m.prototype,w=C(e),M=function(t,e,r){var n,o,c=w(t),d=O(t,e);return d?d.value=r:(c.last=d={index:o=y(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=d),n&&(n.next=d),_?c.size++:t.size++,"F"!==o&&(c.index[o]=d)),t},O=function(t,e){var r,n=w(t),o=y(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key===e)return r};return c(x,{clear:function(){for(var t=w(this),e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),e=e.next;t.first=t.last=void 0,t.index=n(null),_?t.size=0:this.size=0},delete:function(t){var e=this,r=w(e),n=O(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first===n&&(r.first=o),r.last===n&&(r.last=c),_?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=w(this),n=d(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!O(this,t)}}),c(x,r?{get:function(t){var e=O(this,t);return e&&e.value},set:function(t,e){return M(this,0===t?0:t,e)}}:{add:function(t){return M(this,t=0===t?0:t,t)}}),_&&o(x,"size",{configurable:!0,get:function(){return w(this).size}}),m},setStrong:function(t,e,r){var n=e+" Iterator",o=C(e),c=C(n);h(t,e,(function(t,e){k(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?m("keys"===e?r.key:"values"===e?r.value:[r.key,r.value],!1):(t.target=void 0,m(void 0,!0))}),r?"entries":"values",!r,!0),x(e)}}},343:function(t,e,r){"use strict";var n=r(2),o=r(320),c=r(326).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,d=arguments.length;n<d;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},344:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(322);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!1!==d(map,(function(t,r){if(!e(t,r,map))return!1}),!0)}})},345:function(t,e,r){"use strict";var n=r(9);t.exports=function(t,e,r){for(var o,c,d=r?t:t.iterator,l=t.next;!(o=n(l,d)).done;)if(void 0!==(c=e(o.value)))return c}},346:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(326),l=r(322),f=d.Map,v=d.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new f;return l(map,(function(t,n){e(t,n,map)&&v(r,n,t)})),r}})},347:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(322);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=d(map,(function(t,r){if(e(t,r,map))return{value:t}}),!0);return r&&r.value}})},348:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(322);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=d(map,(function(t,r){if(e(t,r,map))return{key:r}}),!0);return r&&r.key}})},349:function(t,e,r){"use strict";var n=r(2),o=r(350),c=r(320),d=r(322);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===d(c(this),(function(e){if(o(e,t))return!0}),!0)}})},350:function(t,e,r){"use strict";t.exports=function(t,e){return t===e||t!=t&&e!=e}},351:function(t,e,r){"use strict";var n=r(2),o=r(320),c=r(322);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){var e=c(o(this),(function(e,r){if(e===t)return{key:r}}),!0);return e&&e.key}})},352:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(326),l=r(322),f=d.Map,v=d.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new f;return l(map,(function(t,n){v(r,e(t,n,map),t)})),r}})},353:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(326),l=r(322),f=d.Map,v=d.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new f;return l(map,(function(t,n){v(r,n,e(t,n,map))})),r}})},354:function(t,e,r){"use strict";var n=r(2),o=r(320),c=r(94),d=r(326).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(t){for(var map=o(this),e=arguments.length,i=0;i<e;)c(arguments[i++],(function(t,e){d(map,t,e)}),{AS_ENTRIES:!0});return map}})},355:function(t,e,r){"use strict";var n=r(2),o=r(39),c=r(320),d=r(322),l=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=arguments.length<2,r=e?void 0:arguments[1];if(o(t),d(map,(function(n,o){e?(e=!1,r=n):r=t(r,n,o,map)})),e)throw new l("Reduce of empty map with no initial value");return r}})},356:function(t,e,r){"use strict";var n=r(2),o=r(53),c=r(320),d=r(322);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!0===d(map,(function(t,r){if(e(t,r,map))return!0}),!0)}})},357:function(t,e,r){"use strict";var n=r(2),o=r(39),c=r(320),d=r(326),l=TypeError,f=d.get,v=d.has,h=d.set;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),r=arguments.length;o(e);var n=v(map,t);if(!n&&r<3)throw new l("Updating absent value");var d=n?f(map,t):o(r>2?arguments[2]:void 0)(t,map);return h(map,t,e(d,t,map)),map}})},358:function(t,e,r){"use strict";r(335)},359:function(t,e,r){var n=r(74)((function(i){return i[1]}));n.push([t.i,".category-grid[data-v-3cbb49b7],.product-grid[data-v-3cbb49b7]{width:100%}.product-grid .product-grid__container[data-v-3cbb49b7]{display:flex;flex-wrap:wrap;gap:32px}.product-grid .product-grid__container .product-grid__item[data-v-3cbb49b7]{width:calc(50% - 16px)}@media screen and (min-width:1280px){.category-grid[data-v-3cbb49b7]{width:25%}.product-grid[data-v-3cbb49b7]{width:75%}.product-grid__item[data-v-3cbb49b7]{border:1px solid #eee;border-radius:8px;width:calc(25% - 24px)!important}}",""]),n.locals={},t.exports=n},363:function(t,e,r){"use strict";r.r(e);r(35),r(55),r(56),r(40),r(36);var n=r(12),o=r(25),c=(r(76),r(34),r(57),r(54),r(340),r(15),r(79),r(41),r(343),r(344),r(346),r(347),r(348),r(349),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(42),r(33));function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"indexPage",data:function(){return{listProduct:[],slides:["https://static.id.gtech.asia/prod/100003/20220922/5700F8C277A9329471891F4AED1AACAA.jpeg?x-oss-process=image/resize,w_2200/format,webp","https://static.id.gtech.asia/prod/100003/20210319/5D85211A437148C9CDC279244A24C49F.jpeg?x-oss-process=image/resize,w_2200/format,webp","https://static.id.gtech.asia/prod/100003/20210319/59850BC55972A8274BBB6D922A083C6C.jpeg?x-oss-process=image/resize,w_2200/format,webp"]}},computed:l({},Object(c.b)(["wishList","search"])),watch:{search:function(t){t?this.listProduct=this.listProduct.filter((function(e){return e.varian.toLowerCase().includes(t.toLowerCase())})):this.filterCategory("All")}},mounted:function(){this.getListProduct()},methods:{getListProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://my-json-server.typicode.com/azmi15003/api-assessment/products");case 2:r=e.sent,n=new Map(t.wishList.map((function(t){return[t.id,t]}))),o=r.data.map((function(t){if(n.has(t.id)){var e=n.get(t.id);return l(l({},t),{},{isWishList:e.isWishList})}return t})),t.listProduct=o;case 6:case"end":return e.stop()}}),e)})))()},filterCategory:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getListProduct();case 2:"All"!==t&&(e.listProduct=e.listProduct.filter((function(e){return e.type===t})));case 3:case"end":return r.stop()}}),r)})))()},filterBrand:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getListProduct();case 2:"All"!==t&&(e.listProduct=e.listProduct.filter((function(e){return e.title===t})));case 3:case"end":return r.stop()}}),r)})))()}}},v=(r(358),r(28)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("Slider",{attrs:{images:t.slides}}),t._v(" "),e("section",{staticClass:"container"},[e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"flex flex-direction-responsive",staticStyle:{"margin-bottom":"40px"}},[e("div",{staticClass:"float-left category-grid"},[e("div",[e("h2",[t._v("Category")]),t._v(" "),e("div",{staticClass:"pointer"},[e("p",{on:{click:function(e){return t.filterCategory("All")}}},[t._v("All")]),t._v(" "),e("p",{on:{click:function(e){return t.filterCategory("Men")}}},[t._v("Men")]),t._v(" "),e("p",{on:{click:function(e){return t.filterCategory("Women")}}},[t._v("Women")]),t._v(" "),e("p",{on:{click:function(e){return t.filterCategory("Kids")}}},[t._v("Kids")])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"pointer"},[e("h2",[t._v("Brand")]),t._v(" "),e("div",[e("p",{on:{click:function(e){return t.filterBrand("All")}}},[t._v("All")]),t._v(" "),e("p",{on:{click:function(e){return t.filterBrand("New Balance")}}},[t._v("New Balance")]),t._v(" "),e("p",{on:{click:function(e){return t.filterBrand("Adidas")}}},[t._v("Adidas")]),t._v(" "),e("p",{on:{click:function(e){return t.filterBrand("Nike")}}},[t._v("Nike")])])])]),t._v(" "),e("div",{staticClass:"float-left product-grid"},[e("br"),t._v(" "),e("span",{staticClass:"float-right"},[t._v(t._s(t.listProduct.length)+" Items")]),t._v(" "),e("div",[e("br"),t._v(" "),e("div",{staticClass:"product-grid__container"},t._l(t.listProduct,(function(t,r){return e("div",{key:r,staticClass:"product-grid__item"},[e("Card",{attrs:{product:t}})],1)})),0)])])])])],1)}),[],!1,null,"3cbb49b7",null);e.default=component.exports;installComponents(component,{Slider:r(337).default,Card:r(330).default})}}]);