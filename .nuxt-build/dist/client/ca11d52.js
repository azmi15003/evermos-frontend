(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{318:function(t,e,o){var content=o(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("277a84fa",content,!0,{sourceMap:!1})},320:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("671c5930",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";o(318)},323:function(t,e,o){var r=o(74)((function(i){return i[1]}));r.push([t.i,'.skeleton{animation:skeleton-loading 1s linear infinite alternate}.skeleton-box{background-color:#dddbdd;display:inline-block;height:1em;overflow:hidden;position:relative}.skeleton-box:after{animation:shimmer 2s infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:translateX(-100%)}@keyframes shimmer{to{transform:translateX(100%)}}@keyframes skeleton-loading{0%{background-color:#c2cfd6}to{background-color:#f0f3f5}}.skeleton-text{border-radius:.25rem;height:.7rem;margin-bottom:.5rem;width:100%}.skeleton-text__body{width:75%}.skeleton-footer{width:30%}',""]),r.locals={},t.exports=r},324:function(t,e,o){"use strict";o.r(e);o(322);var r=o(28),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("a",{staticClass:"card",attrs:{id:"card-link",target:"_blank"}},[e("div",{staticClass:"card__footer",attrs:{id:"card-footer"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-footer"})]),t._v(" "),e("div",{staticClass:"card__body"},[e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__text",attrs:{id:"card-details"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-text__body"})]),t._v(" "),e("div",{staticClass:"card__body body__img"},[e("img",{staticClass:"skeleton-box",attrs:{alt:"",id:"cover-img"}})])]),t._v(" "),e("div",{staticClass:"card__footer",attrs:{id:"card-footer"}},[e("div",{staticClass:"skeleton skeleton-text skeleton-footer"})])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,o){t.exports=o.p+"img/love.9de9ac2.svg"},327:function(t,e,o){"use strict";o(320)},328:function(t,e,o){var r=o(74)((function(i){return i[1]}));r.push([t.i,".card{padding-bottom:16px;width:100%}.card img{transition:transform .3s ease}.card:hover img{transform:scale(1.1)}.title{color:#99a499;font-size:14px;margin:0}.label-discount{background:#d43232;color:#fff;font-size:14px;margin-left:8px;padding:2px 4px}.description{color:0;font-size:14px;font-weight:500;line-height:140%;margin:0}",""]),r.locals={},t.exports=r},329:function(t,e,o){"use strict";o.r(e);o(93);var r=o(12),n=(o(76),{props:{product:{type:Object,default:null}},data:function(){return{}},methods:{updateWishlists:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.preventDefault(),e.product.isWishList=!e.product.isWishList,e.$emit("update:product",e.product),e.$store.dispatch("setWishlist",e.product);case 4:case"end":return o.stop()}}),o)})))()},addToWishlist:function(){this.$store.dispatch("setCart",this.product)}}}),l=(o(327),o(28)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.product?e("div",{staticClass:"card"},[e("NuxtLink",{attrs:{to:"/".concat(t.product.title,"/").concat(t.product.id)}},[e("img",{staticStyle:{height:"300px"},attrs:{src:t.product.listImage[0],width:"100%"}}),t._v(" "),e("div",{staticStyle:{padding:"10px"}},[e("p",{staticClass:"title"},[t._v(t._s(t.product.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.product.varian))]),t._v(" "),e("div",{staticClass:"flex items-center",staticStyle:{"margin-bottom":"10px"}},[e("img",{class:{"image-red":t.product.isWishList},attrs:{src:o(326),height:"24",width:"24"},on:{click:t.updateWishlists}})]),t._v(" "),e("div",[e("span",{staticStyle:{color:"#d43232"}},[t._v("Rp."+t._s(t.product.price))])]),t._v(" "),e("div",{staticClass:"flex"},[t.product.salePrice?e("del",{staticClass:"margin-0"},[e("span",{staticStyle:{"font-size":"12px",color:"grey"}},[t._v("Rp."+t._s(t.product.salePrice))])]):t._e(),t._v(" "),t.product.discountLabel?e("div",{staticClass:"label-discount"},[t._v("\n            "+t._s(t.product.discountLabel)+"\n            "),e("br")]):t._e()])])])],1):e("Skeleton")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Skeleton:o(324).default})}}]);