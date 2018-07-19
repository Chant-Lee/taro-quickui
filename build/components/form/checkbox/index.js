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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "taro_checkbox"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "id": function () {return this.id},
        "name": function () {return this.name},
        "value": function () {return this.value},
        "type": "checkbox",
        "checked": function () {return this.checked},
        "disabled": function () {return this.disabled}
      },
      "classList": function () {return [this.className]},
      "id": function () {return this.id},
      "style": function () {return this.checkboxStyle},
      "events": {
        "change": "handleChange"
      }
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.value}
      }
    }
  ]
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    className: {
      type: String,
      required: false,
      default: ''
    },
    style: {
      type: Object,
      required: false,
      default: {}
    },
    target: {
      type: String,
      required: false,
      default: ''
    },
    value: String,
    name: {
      type: String,
      required: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: ''
    }
  },

  data: function data() {
    return {
      isGroup: false,
      checkboxStyle: {}
    };
  },

  onInit: function onInit() {
    this.checkboxStyle = Object.assign({}, this.style, { 'color:': this.color });
  },
  handleChange: function handleChange(_ref) {
    var value = _ref.value;

    this.$dispatch('change', { value: value });
  }
};}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57)
__webpack_require__(58)
var $app_template$ = __webpack_require__(63)
var $app_style$ = __webpack_require__(64)
var $app_script$ = __webpack_require__(65)

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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/taro-checkbox', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)
var $app_template$ = __webpack_require__(60)
var $app_style$ = __webpack_require__(61)
var $app_script$ = __webpack_require__(62)

$app_define$('@app-component/checkbox-group', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/checkbox', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": function () {return ['taro_checkbox_group', this.className]},
  "children": [
    {
      "type": "slot",
      "attr": {}
    }
  ]
}

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  name: 'checkboxGroup',
  props: {
    id: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false,
      default: ''
    },
    style: Object,
    target: {
      type: String,
      required: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    list: {
      type: Array,
      required: true
    }

  },

  data: {
    currentValue: []
  },

  onInit: function onInit() {
    this.currentValue = this.list;
    this.$on('change', this.handleCheck);
  },
  onReady: function onReady() {},
  handleChange: function handleChange() {},
  handleCheck: function handleCheck(e) {
    console.log(222222222);
    this.currentValue.forEach(function (item) {
      if (item.value === e.detail.value) {
        item.checked = e.checked;
      }
    });
    this.$emit('change', this.currentValue.map(function (item) {
      item.checked;
    }));
  }
};}

/***/ }),

/***/ 63:
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
      "type": "taro-checkbox",
      "attr": {
        "value": "选中"
      },
      "events": {
        "change": "handleCheck"
      }
    },
    {
      "type": "checkbox-group",
      "attr": {
        "list": function () {return this.list}
      },
      "events": {
        "change": "handleCheckBox"
      }
    }
  ]
}

/***/ }),

/***/ 64:
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

/***/ 65:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {

  private: {
    componentName: 'CheckBox',
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
    this.$page.setTitleBar({ text: 'Checkbox' });
  },
  handleCheckBox: function handleCheckBox(e) {
    console.log(111111111 + 'checkboxgroup==========');
    console.log(e.detail);
  },
  handleCheck: function handleCheck(e) {
    console.log(111111111 + 'checkbox==========');
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