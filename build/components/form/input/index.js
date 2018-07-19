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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)
var $app_template$ = __webpack_require__(71)
var $app_style$ = __webpack_require__(72)
var $app_script$ = __webpack_require__(73)

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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(68)
var $app_style$ = __webpack_require__(69)
var $app_script$ = __webpack_require__(70)

$app_define$('@app-component/taro-input', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = {
  "type": "input",
  "attr": {
    "placeholder": function () {return this.placeholder},
    "value": function () {return this.inputValue},
    "name": function () {return this.name},
    "maxlength": function () {return this.maxlength},
    "type": function () {return this.type},
    "disabled": function () {return this.disabled},
    "enterkeytype": function () {return this.confirmType}
  },
  "classList": function () {return [this.className]},
  "style": function () {return this.inputStyle},
  "events": {
    "change": "onInput",
    "enterkeyclick": "onConfirm",
    "focus": "onFocus",
    "blur": "onBlur"
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
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
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: '请输入...'
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
    maxlength: {
      type: Number,
      required: false,
      default: 10000
    },
    confirmType: {
      type: String,
      required: false,
      default: 'default'
    },
    placeholderStyle: {
      type: String,
      required: false,
      default: ''
    }
  },

  data: function data() {
    return {
      inputValue: '',
      inputStyle: {}
    };
  },

  onInit: function onInit() {
    this.inputValue = this.value;
    this.inputStyle = Object.assign({}, this.style, { 'placeholder-color': this.placeholderStyle });
  },
  onInput: function onInput(_ref) {
    var value = _ref.value;

    this.inputValue = value;
    this.$emit('input', { value: value });
  },
  onConfirm: function onConfirm(e) {
    this.$emit('confirm', e);
  },
  onFocus: function onFocus(e) {
    this.$emit('focus', e);
  },
  onBlur: function onBlur(e) {
    this.$emit('blur', e);
  }
};}

/***/ }),

/***/ 71:
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
      "type": "div",
      "attr": {},
      "classList": [
        "input_item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "input type=\"text\""
          },
          "classList": [
            "input_title"
          ]
        },
        {
          "type": "taro-input",
          "attr": {
            "className": "input_text",
            "placeholder": "请输入text"
          },
          "events": {
            "change": "showChangePrompt"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 72:
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
  ".input_item": {
    "marginBottom": "80px",
    "flexDirection": "column"
  },
  ".input_title": {
    "marginLeft": "30px",
    "marginBottom": "30px",
    "marginRight": "30px"
  },
  ".input_text": {
    "height": "80px",
    "lineHeight": "80px",
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "marginLeft": "30px",
    "marginRight": "30px",
    "borderTopWidth": "1px",
    "borderBottomWidth": "1px",
    "borderTopColor": "#999999",
    "borderRightColor": "#999999",
    "borderBottomColor": "#999999",
    "borderLeftColor": "#999999",
    "fontSize": "30px",
    "backgroundColor": "#ffffff",
    "borderTopColor:focus": "#f76160",
    "borderRightColor:focus": "#f76160",
    "borderBottomColor:focus": "#f76160",
    "borderLeftColor:focus": "#f76160"
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  private: {
    componentName: 'Input'
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Input' });
  },
  showChangePrompt: function showChangePrompt(e) {
    _system2.default.showToast({
      message: (e.name === undefined ? '' : '---name: ' + e.name) + (e.text === undefined ? '' : '---text: ' + e.text)
    });
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