(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32)
var $app_template$ = __webpack_require__(36)
var $app_style$ = __webpack_require__(37)
var $app_script$ = __webpack_require__(38)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(33)
var $app_style$ = __webpack_require__(34)
var $app_script$ = __webpack_require__(35)

$app_define$('@app-component/taro-swiper', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = {
  "type": "swiper",
  "attr": {
    "id": function () {return this.id},
    "autoplay": function () {return this.autoplay},
    "index": function () {return this.current},
    "interval": function () {return this.interval},
    "indicator": function () {return this.indicatorDots},
    "loop": function () {return this.circular}
  },
  "classList": function () {return ['taro_swiper', this.className]},
  "style": function () {return this.swiperStyle},
  "id": function () {return this.id},
  "events": {
    "change": "handleChange"
  },
  "children": [
    {
      "type": "slot",
      "attr": {}
    }
  ]
}

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = {
  ".taro_swiper": {
    "height": "250px"
  }
}

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  props: {
    className: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    interval: {
      type: Number,
      required: false,
      default: 3000
    },
    circular: {
      type: Boolean,
      required: false,
      default: true
    },
    indicatorDots: {
      type: Boolean,
      required: false,
      default: true
    },
    indicatorColor: {
      type: String,
      required: false,
      default: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: {
      type: String,
      required: false,
      default: '000'
    },
    current: {
      type: Number,
      required: false,
      default: 0
    }

  },

  data: function data() {
    return {
      swiperStyle: ''
    };
  },

  onInit: function onInit() {
    this.swiperStyle = {
      'indicator-color': this.indicatorColor,
      'indicator-selected-color': '#' + this.indicatorActiveColor
    };
  },
  handleChange: function handleChange(e) {
    this.$emit('change', e);
  }
};}

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "taro_demo"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "taro_title_wrap"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.componentName}
          },
          "classList": [
            "taro_title"
          ]
        }
      ]
    },
    {
      "type": "taro-swiper",
      "attr": {
        "className": "swiper",
        "autoplay": function () {return this.autoPlay},
        "interval": function () {return this.interval},
        "indicatorDots": function () {return this.indicator},
        "current": "1",
        "circular": function () {return this.circular}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "A"
          },
          "classList": [
            "item",
            "color_1"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "B"
          },
          "classList": [
            "item",
            "color_2"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "C"
          },
          "classList": [
            "item",
            "color_3"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
  ".taro_demo": {
    "flex": 1,
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  ".taro_title_wrap": {
    "paddingTop": "50px",
    "paddingBottom": "80px",
    "justifyContent": "center"
  },
  ".taro_title": {
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "paddingRight": "40px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "color": "#bbbbbb",
    "borderBottomWidth": "2px"
  },
  ".swiper": {
    "flexDirection": "column",
    "height": "250px"
  },
  ".item": {
    "height": "250px",
    "textAlign": "center",
    "color": "#ffffff"
  },
  ".color_1": {
    "backgroundColor": "#09ba07"
  },
  ".color_2": {
    "backgroundColor": "#f76160"
  },
  ".color_3": {
    "backgroundColor": "#0faeff"
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {

  private: {
    componentName: 'Swiper',
    autoPlay: true,
    indicator: true,
    circular: true,
    interval: 1000
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Swiper' });
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map