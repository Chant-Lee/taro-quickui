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
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131)
var $app_template$ = __webpack_require__(135)
var $app_style$ = __webpack_require__(136)
var $app_script$ = __webpack_require__(137)

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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(132)
var $app_style$ = __webpack_require__(133)
var $app_script$ = __webpack_require__(134)

$app_define$('@app-component/taro-video', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "taro_video"
  ],
  "children": [
    {
      "type": "video",
      "attr": {
        "id": function () {return this.id},
        "src": function () {return this.src},
        "controls": function () {return this.controls},
        "poster": function () {return this.poster},
        "autoplay": function () {return this.autoplay},
        "disabled": function () {return this.disabled}
      },
      "style": function () {return this.style},
      "id": function () {return this.id},
      "events": {
        "prepared": "handlePrepared",
        "start": "handleStart",
        "pause": "handlePause",
        "finish": "handleFinish",
        "error": "handleError",
        "seeking": "handleSeeking",
        "seeked": "handleSeeked",
        "timeupdate": "handleTimeUpdate"
      }
    }
  ]
}

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = {
  ".taro_video": {
    "width": "100%",
    "height": "100%"
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var jsonString = __webpack_require__(0);
exports.default = {

  props: {
    className: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: false
    },
    src: {
      type: String,
      required: false
    },
    controls: {
      type: Boolean,
      required: false,
      default: true
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    poster: {
      type: String,
      required: false
    },
    initialTime: {
      type: Number,
      required: false,
      default: 0
    },
    style: {
      type: String,
      required: false
    }
  },

  data: function data() {
    return {};
  },

  onInit: function onInit() {
    console.log(11111111, this.initialTime);
    console.log(jsonString(this, null, 4));
  },
  onReady: function onReady() {},
  handlePrepared: function handlePrepared() {
    this.$emit('prepared');
  },
  handleStart: function handleStart() {
    this.$emit('play');
  },
  handlePause: function handlePause() {
    this.$emit('pause');
  },
  handleFinish: function handleFinish() {
    this.$emit('ended');
  },
  handleError: function handleError() {
    this.$emit('error');
  },
  handleSeeking: function handleSeeking(currentTime) {
    this.$emit('seeking', currentTime);
  },
  handleSeeked: function handleSeeked(currentTime) {
    this.$emit('seeked', currentTime);
  },
  handleTimeUpdate: function handleTimeUpdate(currentTime) {
    this.$emit('timeUpdate', currentTime);
  }
};}

/***/ }),

/***/ 135:
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
      "type": "taro-video",
      "attr": {
        "className": "flex-1",
        "poster": "https://www.quickapp.cn/assets/images/home/video.png",
        "autoplay": "false",
        "id": "video",
        "initialTime": "12",
        "src": "https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180323/20180323183010837.mp4",
        "controls": "true"
      },
      "events": {
        "prepared": "preparedfn",
        "play": "startfn",
        "pause": "pausefn",
        "ended": "finishfn",
        "error": "errorfn",
        "seeking": "seekingfn",
        "seeked": "seekedfn",
        "time-update": "timeupdatefn"
      },
      "id": "video"
    }
  ]
}

/***/ }),

/***/ 136:
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

/***/ 137:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {

  private: {
    componentName: 'Video'
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Video' });
  },
  preparedfn: function preparedfn() {
    console.log('preparedfn');
  },
  startfn: function startfn() {
    console.log('startfn');
  },
  pausefn: function pausefn() {
    console.log('pausefn');
  },
  finishfn: function finishfn() {
    console.log('finishfn');
  },
  errorfn: function errorfn() {
    console.log('errorfn');
  },
  seekingfn: function seekingfn() {
    console.log('seekingfn');
  },
  seekedfn: function seekedfn() {
    console.log('seekedfn');
  },
  timeupdatefn: function timeupdatefn() {
    console.log('timeupdatefn');
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