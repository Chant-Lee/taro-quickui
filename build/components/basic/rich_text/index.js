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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var hasProp = Object.prototype.hasOwnProperty;

function throwsMessage(err) {
	return '[Throws: ' + (err ? err.message : '?') + ']';
}

function safeGetValueFromPropertyOnObject(obj, property) {
	if (hasProp.call(obj, property)) {
		try {
			return obj[property];
		}
		catch (err) {
			return throwsMessage(err);
		}
	}

	return obj[property];
}

function ensureProperties(obj) {
	var seen = [ ]; // store references to objects we have seen before

	function visit(obj) {
		if (obj === null || typeof obj !== 'object') {
			return obj;
		}

		if (seen.indexOf(obj) !== -1) {
			return '[Circular]';
		}
		seen.push(obj);

		if (typeof obj.toJSON === 'function') {
			try {
				var fResult = visit(obj.toJSON());
				seen.pop();
				return fResult;
			} catch(err) {
				return throwsMessage(err);
			}
		}

		if (Array.isArray(obj)) {
			var aResult = obj.map(visit);
			seen.pop();
			return aResult;
		}

		var result = Object.keys(obj).reduce(function(result, prop) {
			// prevent faulty defined getter properties
			result[prop] = visit(safeGetValueFromPropertyOnObject(obj, prop));
			return result;
		}, {});
		seen.pop();
		return result;
	};

	return visit(obj);
}

module.exports = function(data, replacer, space) {
	return JSON.stringify(ensureProperties(data), replacer, space);
}

module.exports.ensureProperties = ensureProperties;


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24)
var $app_template$ = __webpack_require__(28)
var $app_style$ = __webpack_require__(29)
var $app_script$ = __webpack_require__(30)

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(25)
var $app_style$ = __webpack_require__(26)
var $app_script$ = __webpack_require__(27)

$app_define$('@app-component/taro-rich', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "type": "richtext",
  "attr": {
    "type": "html",
    "value": function () {return this.nodes}
  },
  "classList": function () {return ['taro_rich_text', this.className]},
  "style": function () {return this.style},
  "events": {
    "click": "handleClick"
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  ".taro_rich_text": {
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var safeJsonStringify = __webpack_require__(0);
exports.default = {

  props: {
    type: {
      type: String,
      required: false,
      default: 'html'
    },
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
      type: Object,
      required: false,
      default: {}
    },
    nodes: {
      type: String,
      required: true,
      default: ''
    }
  },
  handleClick: function handleClick(e) {
    this.$emit('click', e);
  }
};}

/***/ }),
/* 28 */
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
      "type": "taro-rich",
      "attr": {
        "nodes": function () {return this.list}
      }
    }
  ]
}

/***/ }),
/* 29 */
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
  ".item-content": {
    "flexDirection": "column",
    "paddingBottom": "30px"
  },
  ".item-title": {
    "paddingTop": "50px",
    "paddingBottom": "20px",
    "color": "#aaaaaa"
  },
  ".item-hint": {
    "height": "100px"
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {

  private: {
    componentName: 'RichText',
    list: '<div class="item-content"  style="background-color: #FFFFFF">\n        <style>h1{color: yellow;}</style>\n        <p class="item-title">h1</p>\n        <h1>\u6587\u672C\u6D4B\u8BD5</h1>\n        <p class="item-title">h2</p>\n        <h2>\u6587\u672C\u6D4B\u8BD5</h2>\n        <p class="item-title">h3</p>\n        <h3>\u6587\u672C\u6D4B\u8BD5</h3>\n        <p class="item-title">h4</p>\n        <h4>\u6587\u672C\u6D4B\u8BD5</h4>\n        <p class="item-title">h5</p>\n        <h5>\u6587\u672C\u6D4B\u8BD5</h5>\n        <p class="item-title">h6</p>\n        <h6>\u6587\u672C\u6D4B\u8BD5</h6>\n        <p class="item-title">a</p>\n        <div>\n          <a href="https://www.quickapp.cn/" style="color: #09ba07;text-decoration: underline">\u6587\u672C\u6D4B\u8BD5</a>\n        </div>\n        <p class="item-title">img</p>\n        <div>\n          <img src="https://bbs.quickapp.cn/template/dingzhi_x_oneplus/dingzhi/logo.png" style="width: 100%;"/>\n        </div>\n        <p class="item-title">p</p>\n        <p>\u6587\u672C\u6D4B\u8BD5</p>\n        <p class="item-title">span</p>\n        <p><span>\u6587\u672C\u6D4B\u8BD5</span></p>\n        <p class="item-title">strong</p>\n        <p><strong>\u6587\u672C\u6D4B\u8BD5</strong></p>\n        <p class="item-title">del</p>\n        <p><del>\u6587\u672C\u6D4B\u8BD5</del></p>\n        <p class="item-title">b</p>\n        <p><b>\u6587\u672C\u6D4B\u8BD5</b></p>\n        <p class="item-title">i</p>\n        <p><i>\u6587\u672C\u6D4B\u8BD5</i></p>\n      </div>'
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'RichText' });
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