exports.ids = [5,1,2,3];
exports.modules = {

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("277a84fa", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("671c5930", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skeleton_vue_vue_type_style_index_0_id_1fdcc50e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skeleton_vue_vue_type_style_index_0_id_1fdcc50e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skeleton_vue_vue_type_style_index_0_id_1fdcc50e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skeleton_vue_vue_type_style_index_0_id_1fdcc50e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Skeleton_vue_vue_type_style_index_0_id_1fdcc50e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".skeleton{animation:skeleton-loading 1s linear infinite alternate}.skeleton-box{background-color:#dddbdd;display:inline-block;height:1em;overflow:hidden;position:relative}.skeleton-box:after{animation:shimmer 2s infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;transform:translateX(-100%)}@keyframes shimmer{to{transform:translateX(100%)}}@keyframes skeleton-loading{0%{background-color:#c2cfd6}to{background-color:#f0f3f5}}.skeleton-text{border-radius:.25rem;height:.7rem;margin-bottom:.5rem;width:100%}.skeleton-text__body{width:75%}.skeleton-footer{width:30%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Skeleton.vue?vue&type=template&id=1fdcc50e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "card",
    attrs: {
      "id": "card-link",
      "target": "_blank"
    }
  }, [_vm._ssrNode("<div id=\"card-footer\" class=\"card__footer\"><div class=\"skeleton skeleton-text skeleton-footer\"></div></div> <div class=\"card__body\"><div id=\"card-details\" class=\"card__body body__text\"><div class=\"skeleton skeleton-text skeleton-text__body\"></div></div> <div id=\"card-details\" class=\"card__body body__text\"><div class=\"skeleton skeleton-text skeleton-text__body\"></div></div> <div id=\"card-details\" class=\"card__body body__text\"><div class=\"skeleton skeleton-text skeleton-text__body\"></div></div> <div class=\"card__body body__img\"><img alt id=\"cover-img\" class=\"skeleton-box\"></div></div> <div id=\"card-footer\" class=\"card__footer\"><div class=\"skeleton skeleton-text skeleton-footer\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Skeleton.vue?vue&type=template&id=1fdcc50e

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Skeleton.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2c0b6002"
  
)

/* harmony default export */ var Skeleton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love.9de9ac2.svg";

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_3f4269ee_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_3f4269ee_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_3f4269ee_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_3f4269ee_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_3f4269ee_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card{padding-bottom:16px;width:100%}.card img{transition:transform .3s ease}.card:hover img{transform:scale(1.1)}.title{color:#99a499;font-size:14px;margin:0}.label-discount{background:#d43232;color:#fff;font-size:14px;margin-left:8px;padding:2px 4px}.description{color:0;font-size:14px;font-weight:500;line-height:140%;margin:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=3f4269ee
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.product ? _c('Skeleton') : _c('div', {
    staticClass: "card"
  }, [_c('NuxtLink', {
    attrs: {
      "to": `/${_vm.product.title}/${_vm.product.id}`
    }
  }, [_c('img', {
    staticStyle: {
      "height": "300px"
    },
    attrs: {
      "src": _vm.product.listImage[0],
      "width": "100%"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "10px"
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.product.title))]), _vm._v(" "), _c('p', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.product.varian))]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center",
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('img', {
    class: {
      'image-red': _vm.product.isWishList
    },
    attrs: {
      "src": __webpack_require__(56),
      "height": "24",
      "width": "24"
    },
    on: {
      "click": _vm.updateWishlists
    }
  })]), _vm._v(" "), _c('div', [_c('span', {
    staticStyle: {
      "color": "#d43232"
    }
  }, [_vm._v("Rp." + _vm._s(_vm.product.price))])]), _vm._v(" "), _c('div', {
    staticClass: "flex"
  }, [_vm.product.salePrice ? _c('del', {
    staticClass: "margin-0"
  }, [_c('span', {
    staticStyle: {
      "font-size": "12px",
      "color": "grey"
    }
  }, [_vm._v("Rp." + _vm._s(_vm.product.salePrice))])]) : _vm._e(), _vm._v(" "), _vm.product.discountLabel ? _c('div', {
    staticClass: "label-discount"
  }, [_vm._v("\n            " + _vm._s(_vm.product.discountLabel) + "\n            "), _c('br')]) : _vm._e()])])])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=3f4269ee

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js
/* harmony default export */ var Cardvue_type_script_lang_js = ({
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    async updateWishlists(e) {
      e.preventDefault();
      this.product.isWishList = !this.product.isWishList;
      this.$emit('update:product', this.product);
      this.$store.dispatch('setWishlist', this.product);
    },
    addToWishlist() {
      this.$store.dispatch('setCart', this.product);
    }
  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Cardvue_type_script_lang_js = (Cardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7a349642"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Skeleton: __webpack_require__(55).default})


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("924d3fe8", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_df92087c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_df92087c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_df92087c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_df92087c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_df92087c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider-container[data-v-df92087c]{height:400px;margin-top:-20px}.slider[data-v-df92087c]{animation:imageAnimateOpacity 1s ease;cursor:pointer;height:100%;left:0;opacity:0;opacity:1;overflow:hidden;position:absolute;width:100%;z-index:0;z-index:1}.left-arrow[data-v-df92087c],.right-arrow[data-v-df92087c]{background-color:#000;border-radius:100%;color:#fff;cursor:pointer;font-size:20px;font-weight:700;height:30px;line-height:30px;position:absolute;text-align:center;top:45%;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:30px}span[data-v-df92087c]:hover{background-color:#066c6c;transition:.2s}.left-arrow[data-v-df92087c]{animation:left-arrow-df92087c .5s ease;left:-40px}@keyframes left-arrow-df92087c{0%{left:0;opacity:0}to{left:-40px;opacity:1}}.right-arrow[data-v-df92087c]{animation:right-arrow-df92087c .5s ease;right:-40px}@keyframes right-arrow-df92087c{0%{opacity:0;right:0}to{opacity:1;right:-40px}}.circle[data-v-df92087c]{margin-top:20px;text-align:center}.circle span[data-v-df92087c]{border:2px solid silver;border-radius:100%;box-shadow:0 0 1px silver;cursor:pointer;display:inline-block;margin:5px;padding:5px}.slider>img[data-v-df92087c]{background-color:#fff;bottom:0;cursor:pointer;height:25px;opacity:.7;position:absolute;right:0;width:25px;z-index:3}@media screen and (max-width:800px){.slider-container[data-v-df92087c]{height:140px}.left-arrow[data-v-df92087c],.right-arrow[data-v-df92087c]{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1321e79e", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=df92087c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative slider-container"
  }, [_vm._ssrNode("<div class=\"slider\" data-v-df92087c>" + _vm._ssrList([_vm.currentIndex], function (i) {
    return "<div data-v-df92087c><img" + _vm._ssrAttr("src", _vm.currentImg) + " width=\"100%\" data-v-df92087c></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=df92087c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=script&lang=js
/* harmony default export */ var Slidervue_type_script_lang_js = ({
  name: 'Slider',
  props: {
    images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
});
// CONCATENATED MODULE: ./components/Slider.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Slidervue_type_script_lang_js = (Slidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Slider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "df92087c",
  "19878513"
  
)

/* harmony default export */ var Slider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cbb49b7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cbb49b7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cbb49b7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cbb49b7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3cbb49b7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".category-grid[data-v-3cbb49b7],.product-grid[data-v-3cbb49b7]{width:100%}.product-grid .product-grid__container[data-v-3cbb49b7]{display:flex;flex-wrap:wrap;gap:32px}.product-grid .product-grid__container .product-grid__item[data-v-3cbb49b7]{width:calc(50% - 16px)}@media screen and (min-width:1280px){.category-grid[data-v-3cbb49b7]{width:25%}.product-grid[data-v-3cbb49b7]{width:75%}.product-grid__item[data-v-3cbb49b7]{border:1px solid #eee;border-radius:8px;width:calc(25% - 24px)!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3cbb49b7&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Slider', {
    attrs: {
      "images": _vm.slides
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"container\" data-v-3cbb49b7>", "</section>", [_vm._ssrNode("<br data-v-3cbb49b7> <br data-v-3cbb49b7> "), _vm._ssrNode("<div class=\"flex flex-direction-responsive\" style=\"margin-bottom: 40px;\" data-v-3cbb49b7>", "</div>", [_vm._ssrNode("<div class=\"float-left category-grid\" data-v-3cbb49b7><div data-v-3cbb49b7><h2 data-v-3cbb49b7>Category</h2> <div class=\"pointer\" data-v-3cbb49b7><p data-v-3cbb49b7>All</p> <p data-v-3cbb49b7>Men</p> <p data-v-3cbb49b7>Women</p> <p data-v-3cbb49b7>Kids</p></div></div> <br data-v-3cbb49b7> <br data-v-3cbb49b7> <div class=\"pointer\" data-v-3cbb49b7><h2 data-v-3cbb49b7>Brand</h2> <div data-v-3cbb49b7><p data-v-3cbb49b7>All</p> <p data-v-3cbb49b7>New Balance</p> <p data-v-3cbb49b7>Adidas</p> <p data-v-3cbb49b7>Nike</p></div></div></div> "), _vm._ssrNode("<div class=\"float-left product-grid\" data-v-3cbb49b7>", "</div>", [_vm._ssrNode("<br data-v-3cbb49b7> <span class=\"float-right\" data-v-3cbb49b7>" + _vm._ssrEscape(_vm._s(_vm.listProduct.length) + " Items") + "</span> "), _vm._ssrNode("<div data-v-3cbb49b7>", "</div>", [_vm._ssrNode("<br data-v-3cbb49b7> "), _vm._ssrNode("<div class=\"product-grid__container\" data-v-3cbb49b7>", "</div>", _vm._l(_vm.listProduct, function (item, idx) {
    return _vm._ssrNode("<div class=\"product-grid__item\" data-v-3cbb49b7>", "</div>", [_c('Card', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)], 2)], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3cbb49b7&scoped=true

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js














/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: 'indexPage',
  data() {
    return {
      listProduct: [],
      slides: ['https://static.id.gtech.asia/prod/100003/20220922/5700F8C277A9329471891F4AED1AACAA.jpeg?x-oss-process=image/resize,w_2200/format,webp', 'https://static.id.gtech.asia/prod/100003/20210319/5D85211A437148C9CDC279244A24C49F.jpeg?x-oss-process=image/resize,w_2200/format,webp', 'https://static.id.gtech.asia/prod/100003/20210319/59850BC55972A8274BBB6D922A083C6C.jpeg?x-oss-process=image/resize,w_2200/format,webp']
    };
  },
  computed: {
    ...Object(external_vuex_["mapGetters"])(['wishList', 'search'])
  },
  watch: {
    search(val) {
      if (val) {
        this.listProduct = this.listProduct.filter(product => product.varian.toLowerCase().includes(val.toLowerCase()));
      } else {
        this.filterCategory('All');
      }
    }
  },
  mounted() {
    this.getListProduct();
  },
  methods: {
    async getListProduct() {
      const result = await this.$axios.get('https://my-json-server.typicode.com/azmi15003/api-assessment/products');
      const dataWishlist = new Map(this.wishList.map(item => [item.id, item]));
      const combineData = result.data.map(item1 => {
        if (dataWishlist.has(item1.id)) {
          const item2 = dataWishlist.get(item1.id);
          return {
            ...item1,
            isWishList: item2.isWishList
          };
        } else {
          return item1;
        }
      });
      this.listProduct = combineData;
    },
    async filterCategory(category) {
      await this.getListProduct();
      if (category !== 'All') {
        this.listProduct = this.listProduct.filter(product => product.type === category);
      }
    },
    async filterBrand(brand) {
      await this.getListProduct();
      if (brand !== 'All') {
        this.listProduct = this.listProduct.filter(product => product.title === brand);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3cbb49b7",
  "288a0000"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Slider: __webpack_require__(66).default,Card: __webpack_require__(59).default})


/***/ })

};;
//# sourceMappingURL=index.js.map