webpackJsonp([2],{

/***/ "7Otq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.2caad46.png";

/***/ }),

/***/ "9epy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/nav.vue
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


/* harmony default export */ var nav = ({
  name: 'header',
  components: {},

  /**
  * 数据部分
  */
  data: function data() {
    return {
      navList: ['MINT', 'ABOUT', 'Q&A']
    };
  },

  computed: {},
  watch: {},
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    goHome: function goHome() {
      this.$router.push({ path: '/' });
    },
    goNav: function goNav(index) {
      var pathName = this.$route.name;
      var path = '';
      if (pathName == 'mint') {
        if (index == 0) {
          // this.$router.push({path:'/mint'});
        } else if (index == 1) {
          this.$router.push({ path: '/' }, function () {});
          this.$nextTick(function () {
            document.querySelector(".part2").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          });
        } else if (index == 2) {
          this.$router.push({ path: '/' }, function () {});
          this.$nextTick(function () {
            document.querySelector(".part3").scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          });
        }
      } else {
        if (index == 0) {
          // path = '/mint'
        } else if (index == 1) {
          document.querySelector(".part2").scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } else if (index == 2) {
          document.querySelector(".part3").scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
        this.$router.push({ path: path }, function () {});
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-131f3517","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/nav.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header fn-clear"},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("7Otq")},on:{"click":_vm.goHome}}),_vm._v(" "),_c('ul',{staticClass:"nav"},_vm._l((_vm.navList),function(item,index){return _c('li',{on:{"click":function($event){return _vm.goNav(index)}}},[_vm._v(_vm._s(item))])}),0),_vm._v(" "),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon_box"},[_c('a',{attrs:{"href":"javascript:"}},[_c('img',{staticClass:"icon1 icon",attrs:{"src":__webpack_require__("TrFT")}})]),_vm._v(" "),_c('a',{attrs:{"href":"javascript:"}},[_c('img',{staticClass:"icon2 icon",attrs:{"src":__webpack_require__("xAza")}})]),_vm._v(" "),_c('a',{attrs:{"href":"https://twitter.com/LYOTNFT"}},[_c('img',{staticClass:"icon3 icon",attrs:{"src":__webpack_require__("mCmD")}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_nav = (esExports);
// CONCATENATED MODULE: ./src/components/nav.vue
function injectStyle (ssrContext) {
  __webpack_require__("ztpV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-131f3517"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  nav,
  components_nav,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_nav = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//


/* harmony default export */ var App = ({
  name: 'App',
  components: {
    Nav: src_components_nav
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54ceb6e0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('Nav'),_vm._v(" "),_c('router-view')],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("9epy")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./src/router/index.js


vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [
  // { 
  //   path: "/",
  //   redirect: '/home',
  // },
  {
    path: '/',
    name: 'home',
    component: function component() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "gHLv"));
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/components/pages/about')
  // },
  {
    path: '/mint',
    name: 'mint',
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "mTwc"));
    }
  }]
}));
// EXTERNAL MODULE: ./src/assets/js/flexible.js
var flexible = __webpack_require__("OCMt");
var flexible_default = /*#__PURE__*/__webpack_require__.n(flexible);

// EXTERNAL MODULE: ./src/assets/font/font.css
var font = __webpack_require__("NrZ4");
var font_default = /*#__PURE__*/__webpack_require__.n(font);

// EXTERNAL MODULE: ./node_modules/vue-sweetalert2/dist/vue-sweetalert.umd.js
var vue_sweetalert_umd = __webpack_require__("NOK/");
var vue_sweetalert_umd_default = /*#__PURE__*/__webpack_require__.n(vue_sweetalert_umd);

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.min.css
var sweetalert2_min = __webpack_require__("UdIB");
var sweetalert2_min_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_min);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








vue_esm["a" /* default */].config.productionTip = false;

vue_esm["a" /* default */].use(vue_sweetalert_umd_default.a);

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "NrZ4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "OCMt":
/***/ (function(module, exports) {


;(function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // if (width / dpr > 540) {
        //     width = 540 * dpr;
        // }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    };
    flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    };
})(window, window['lib'] || (window['lib'] = {}));

/***/ }),

/***/ "TrFT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo1.a5c9e53.png";

/***/ }),

/***/ "UdIB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mCmD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo3.c9fb095.png";

/***/ }),

/***/ "xAza":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo2.5403d1f.png";

/***/ }),

/***/ "ztpV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.1ddade49bd3012b76b32.js.map