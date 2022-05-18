(window["mfstoreWc_jsonp"] = window["mfstoreWc_jsonp"] || []).push([[0],{

/***/ "0b90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0dd06818-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/MfHome.vue?vue&type=template&id=a38259be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('h2',[_vm._v("MF home")]),_c('StoreMF',{attrs:{"msg":"Store test component"}}),_c('p',[_vm._v("MF store Counter: "+_vm._s(_vm.counter))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/MfHome.vue?vue&type=template&id=a38259be&

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 15 modules
var lib = __webpack_require__("1b40");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0dd06818-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StoreMF.vue?vue&type=template&id=3f6416b4&scoped=true&
var StoreMFvue_type_template_id_3f6416b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('p',[_vm._v(" "+_vm._s(_vm.msg)+" ")]),_c('button',{on:{"click":_vm.addOne}},[_vm._v("MF+1")]),_c('button',{on:{"click":function($event){return _vm.increase(10)}}},[_vm._v("MF increase 10")])])}
var StoreMFvue_type_template_id_3f6416b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StoreMF.vue?vue&type=template&id=3f6416b4&scoped=true&

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/index.ts


external_Vue_default.a.use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  state: {
    counter: 1
  },
  mutations: {
    mutCounterIncrement(state) {
      state.counter += 1;
    },

    mutCounterincrease(state, num) {
      state.counter += num;
    }

  },
  actions: {},
  modules: {}
}));
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StoreMF.vue?vue&type=script&lang=ts&



let StoreMFvue_type_script_lang_ts_StoreMF = class StoreMF extends lib["c" /* Vue */] {
  addOne() {
    store.commit('mutCounterIncrement');
  }

  increase(num) {
    store.commit('mutCounterincrease', num);
  }

};

Object(tslib_es6["a" /* __decorate */])([Object(lib["b" /* Prop */])()], StoreMFvue_type_script_lang_ts_StoreMF.prototype, "msg", void 0);

StoreMFvue_type_script_lang_ts_StoreMF = Object(tslib_es6["a" /* __decorate */])([lib["a" /* Component */]], StoreMFvue_type_script_lang_ts_StoreMF);
/* harmony default export */ var StoreMFvue_type_script_lang_ts_ = (StoreMFvue_type_script_lang_ts_StoreMF);
// CONCATENATED MODULE: ./src/components/StoreMF.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_StoreMFvue_type_script_lang_ts_ = (StoreMFvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/StoreMF.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StoreMFvue_type_script_lang_ts_,
  StoreMFvue_type_template_id_3f6416b4_scoped_true_render,
  StoreMFvue_type_template_id_3f6416b4_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3f6416b4",
  null
  ,true
)

/* harmony default export */ var components_StoreMF = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/MfHome.vue?vue&type=script&lang=ts&




let MfHomevue_type_script_lang_ts_MfHome = class MfHome extends lib["c" /* Vue */] {
  get counter() {
    return store.state.counter;
  }

};
MfHomevue_type_script_lang_ts_MfHome = Object(tslib_es6["a" /* __decorate */])([Object(lib["a" /* Component */])({
  components: {
    StoreMF: components_StoreMF
  }
})], MfHomevue_type_script_lang_ts_MfHome);
/* harmony default export */ var MfHomevue_type_script_lang_ts_ = (MfHomevue_type_script_lang_ts_MfHome);
// CONCATENATED MODULE: ./src/views/MfHome.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_MfHomevue_type_script_lang_ts_ = (MfHomevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/MfHome.vue





/* normalize component */

var MfHome_component = Object(componentNormalizer["a" /* default */])(
  views_MfHomevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var views_MfHome = __webpack_exports__["default"] = (MfHome_component.exports);

/***/ })

}]);
//# sourceMappingURL=mfstore-wc.mf-home-view.js.map