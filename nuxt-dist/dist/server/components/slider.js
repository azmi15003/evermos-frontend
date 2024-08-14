exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=slider.js.map