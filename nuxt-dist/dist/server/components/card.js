exports.ids = [1,2];
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


/***/ })

};;
//# sourceMappingURL=card.js.map