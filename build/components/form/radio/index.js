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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83)
var $app_template$ = __webpack_require__(87)
var $app_style$ = __webpack_require__(88)
var $app_script$ = __webpack_require__(89)

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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(84)
var $app_style$ = __webpack_require__(85)
var $app_script$ = __webpack_require__(86)

$app_define$('@app-component/taro-radio', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "taro_radio"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "value": function () {return this.inputValue},
        "name": function () {return this.name},
        "id": function () {return this.id},
        "type": "radio",
        "disabled": function () {return this.disabled}
      },
      "id": function () {return this.id},
      "classList": function () {return [this.className]},
      "style": function () {return this.style},
      "events": {
        "change": "handleChange"
      }
    },
    {
      "type": "slot",
      "attr": {}
    }
  ]
}

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    className: {
      type: String,
      required: false,
      default: 'taro_input'
    },
    style: {
      type: Object,
      required: false,
      default: {}
    }
  },

  data: function data() {
    return {
      inputValue: ''
    };
  },

  onInit: function onInit() {
    this.inputValue = this.value;
  },
  handleChange: function handleChange(e) {
    this.$emit('change', e);
  }
};}

/***/ }),

/***/ 87:
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
      "type": "taro-radio",
      "attr": {
        "value": "111111"
      }
    }
  ]
}

/***/ }),

/***/ 88:
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

/***/ 89:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {

  private: {
    componentName: 'Radio',
    list: [{
      value: '美国',
      text: '美国',
      checked: false
    }, {
      value: '中国',
      text: '中国',
      checked: true
    }, {
      value: '巴西',
      text: '巴西',
      checked: false
    }, {
      value: '日本',
      text: '日本',
      checked: false
    }, {
      value: '英国',
      text: '英国',
      checked: false
    }, {
      value: '法国',
      text: '法国',
      checked: false
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Radio' });
  },
  handleCheckBox: function handleCheckBox(e) {
    console.log(e.detail);
  },
  handleCheck: function handleCheck(e) {
    console.log(e.detail);
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