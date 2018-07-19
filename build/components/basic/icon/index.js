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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8)
var $app_template$ = __webpack_require__(12)
var $app_style$ = __webpack_require__(13)
var $app_script$ = __webpack_require__(14)

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(9)
var $app_style$ = __webpack_require__(10)
var $app_script$ = __webpack_require__(11)

$app_define$('@app-component/taro-icon', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "type": "stack",
  "attr": {
    "id": function () {return this.id},
    "disabled": function () {return this.disabled}
  },
  "classList": function () {return ['taro_icon', this.className, 'icon_' + (this.type)]},
  "style": function () {return this.style},
  "id": function () {return this.id},
  "events": {
    "click": "handleClick"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "thumb"
      ],
      "shown": function () {return ['success','waiting'].indexOf(this.type)>-1}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "info"
      ],
      "shown": function () {return (['warn','info'].indexOf(this.type)>-1)&&!(['success','waiting'].indexOf(this.type)>-1)}
    }
  ]
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  ".taro_icon": {
    "alignItems": "center",
    "justifyContent": "center",
    "width": "60px",
    "height": "60px",
    "borderRadius": "30px",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px"
  },
  ".thumb": {
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "width": "15px",
    "height": "30px",
    "transform": "{\"rotate\":\"45deg\"}",
    "marginTop": "-8px"
  },
  ".icon_success": {
    "backgroundColor": "#09bb07",
    "borderTopColor": "#09bb07",
    "borderRightColor": "#09bb07",
    "borderBottomColor": "#09bb07",
    "borderLeftColor": "#09bb07"
  },
  ".icon_success .thumb": {
    "borderTopColor": "#ffffff",
    "borderRightColor": "#ffffff",
    "borderBottomColor": "#ffffff",
    "borderLeftColor": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon_success"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "thumb"
        }
      ]
    }
  },
  ".icon_waiting": {
    "backgroundColor": "#10aeff",
    "borderTopColor": "#10aeff",
    "borderRightColor": "#10aeff",
    "borderBottomColor": "#10aeff",
    "borderLeftColor": "#10aeff"
  },
  ".icon_waiting .thumb": {
    "borderTopColor": "#ffffff",
    "borderRightColor": "#ffffff",
    "borderBottomColor": "#ffffff",
    "borderLeftColor": "#ffffff",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "width": "16px",
    "height": "16px",
    "transform": "{\"rotate\":\"60deg\"}",
    "marginTop": "-8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon_waiting"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "thumb"
        }
      ]
    }
  },
  ".icon_info": {
    "backgroundColor": "#10aeff",
    "borderTopColor": "#10aeff",
    "borderRightColor": "#10aeff",
    "borderBottomColor": "#10aeff",
    "borderLeftColor": "#10aeff",
    "color": "#ffffff",
    "fontSize": "30px"
  },
  ".icon_warn": {
    "backgroundColor": "#f43530",
    "borderTopColor": "#f43530",
    "borderRightColor": "#f43530",
    "borderBottomColor": "#f43530",
    "borderLeftColor": "#f43530",
    "color": "#ffffff",
    "fontSize": "30px"
  }
}

/***/ }),
/* 11 */
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
    style: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: Number,
      required: false,
      default: 23
    },
    color: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'success'
    }
  },

  data: function data() {
    return {
      iconStyle: {},
      typeFont: ''
    };
  },

  onInit: function onInit() {
    this.iconStyle = Object.assign(this.style, { 'font-size:': this.size, 'color:': '#' + this.color });
    switch (this.type) {
      case 'info':
        this.typeFont = 'i';
        break;
      case 'warn':
        this.typeFont = '!';
        break;
      case 'info':
        this.typeFont = '!';
        break;
      case 'info':
        this.typeFont = 'i';
        break;
    }
  },
  handleClick: function handleClick(e) {
    this.$emit('click', e);
  }
};}

/***/ }),
/* 12 */
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
      "type": "taro-icon",
      "attr": {
        "type": "success"
      }
    },
    {
      "type": "taro-icon",
      "attr": {
        "type": "waiting"
      }
    }
  ]
}

/***/ }),
/* 13 */
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
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {

  private: {
    componentName: 'Icon'
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Icon' });
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
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map