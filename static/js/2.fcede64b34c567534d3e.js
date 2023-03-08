webpackJsonp([2],{

/***/ "6qQl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/pages/about.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var about = ({
  name: 'HomeView',
  data: function data() {
    return {
      current: 1,
      currentScroll: 0,
      testShow: false,
      testShow2: false,
      testShow3: false,
      testShow4: false,
      testShow5: false
    };
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScrollbox, true);
  },

  methods: {
    handleScrollbox: function handleScrollbox() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置

      if (this.currentScroll >= this.$refs.testref.offsetTop - 600) {
        //当前滚动位置到达testref的时候，显示div（100作为调整用）
        this.testShow = true;
      }
      if (this.currentScroll >= this.$refs.test2ref.offsetTop - 440) {
        this.testShow2 = true;
      }
      if (this.currentScroll >= this.$refs.test3ref.offsetTop - 440) {
        this.testShow3 = true;
      }

      if (this.currentScroll >= this.$refs.test4ref.offsetTop - 440) {
        this.testShow4 = true;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollbox, true);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dda9d606","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/pages/about.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"GW-home"},[_c('div',{ref:"testref",staticClass:"contentheight"},[_c('div',[_vm._v("这是第一行")])]),_vm._v(" "),_c('div',{ref:"testref",staticClass:"contentheight",class:{ boxtranslateY: true, testenter: _vm.testShow }},[_vm._v("\n    这是第二行\n    "),_c('div',{class:{ boxleftTo20: true, boxtestenterX: _vm.testShow }},[_vm._v("\n      这个文字是从左边飞入\n    ")])]),_vm._v(" "),_c('div',{ref:"test2ref",staticClass:"contentheight",class:{ boxtranslateY: true, testenter: _vm.testShow2 }},[_vm._v("\n    这是第三行\n    "),_c('div',{class:{ boxtranslateXright: true, boxtestenterX: _vm.testShow2 }},[_vm._v("\n      这个文字是从右边飞入\n    ")])]),_vm._v(" "),_c('div',{ref:"test3ref",staticClass:"contentheight",class:{ boxtranslateY: true, testenter: _vm.testShow3 }},[_vm._v("\n    这是向上划入\n  ")]),_vm._v(" "),_c('div',{ref:"test4ref",staticClass:"contentheight",class:{ boxtranslateY: true, testenter: _vm.testShow4 }},[_vm._v("\n    这是向上划入\n  ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_about = (esExports);
// CONCATENATED MODULE: ./src/components/pages/about.vue
function injectStyle (ssrContext) {
  __webpack_require__("y2yv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  about,
  pages_about,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_pages_about = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "y2yv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=2.fcede64b34c567534d3e.js.map