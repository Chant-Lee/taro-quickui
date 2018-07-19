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
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115)
var $app_template$ = __webpack_require__(119)
var $app_style$ = __webpack_require__(120)
var $app_script$ = __webpack_require__(121)

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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(116)
var $app_style$ = __webpack_require__(117)
var $app_script$ = __webpack_require__(118)

$app_define$('@app-component/taro-audio', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {
    "id": function () {return this.id}
  },
  "classList": function () {return ['audio', this.className]},
  "id": function () {return this.id},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "audio_content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {
            "show": function () {return this.controls}
          },
          "classList": [
            "player_ontent"
          ],
          "events": {
            "click": "playAudio"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "show": function () {return this.playerStatus},
                "src": "./start.png"
              },
              "classList": [
                "audio_content_img"
              ]
            },
            {
              "type": "image",
              "attr": {
                "show": function () {return !this.playerStatus},
                "src": "./pause.png"
              },
              "classList": [
                "audio_content_img"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return (this.spendTime) + '/' + (this.totalTime)}
          },
          "classList": [
            "duration_content"
          ]
        },
        {
          "type": "slider",
          "attr": {
            "min": "0",
            "max": function () {return this.duration},
            "step": "1",
            "value": function () {return this.currentTime}
          },
          "classList": [
            "audio_slider"
          ],
          "events": {
            "change": "sliderChange"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports = {
  ".audio_content": {
    "flexDirection": "row",
    "backgroundColor": "#dddddd"
  },
  ".player_content": {
    "height": "120px",
    "width": "100px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".audio_content_img": {
    "height": "40px",
    "width": "40px"
  },
  ".duration_content": {
    "height": "120px",
    "textAlign": "center",
    "fontSize": "25px",
    "width": "200px",
    "color": "#000000"
  },
  ".audio_slider": {
    "color": "#FFFFFF",
    "paddingLeft": "20px",
    "width": "100%"
  }
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.audio');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonString = __webpack_require__(0);
exports.default = {
  data: function data() {
    return {
      duration: 100,
      spendTime: '00:00',
      totalTime: '00:00',
      currentTime: 0,
      playerStatus: true
    };
  },
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
    src: {
      type: String,
      required: true,
      default: ''
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    initialTime: {
      type: Number,
      required: false,
      default: 0
    },
    controls: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  onInit: function onInit() {
    _system2.default.src = this.src;
    _system2.default.autoplay = this.autoplay;
    _system2.default.currentTime = this.initialTime;
    _system2.default.loop = this.loop;
    this.currentTime = this.initialTime;
    this.duration = _system2.default.duration;
    this.totalTime = this.formatTime(_system2.default.duration);
    this.audioInit();
  },
  audioInit: function audioInit() {
    var _this = this;

    _system2.default.onloadeddata = function () {
      _this.$emit('play');
      _system2.default.ontimeupdate = function () {
        _this.updateAudio();
      };
      _system2.default.onpause = function () {
        _this.$emit('pause');
      };
      _system2.default.onended = function () {
        _this.playerStatus = true;
        _this.$emit('ended');
      };

      _system2.default.onerror = function () {
        console.info('error');
        _this.$emit('error');
      };
      _system2.default.ondurationchange = function () {
        console.info('change');
        _this.$emit('change');
      };
    };
  },
  playAudio: function playAudio() {
    if (this.playerStatus) {
      _system2.default.play();
    } else {
      _system2.default.pause();
    }
    this.playerStatus = !this.playerStatus;
  },
  updateAudio: function updateAudio() {
    var time = _system2.default.currentTime;
    this.currentTime = time;
    this.spendTime = this.formatTime(time);
  },
  sliderChange: function sliderChange(e) {
    var value = e.progress - _system2.default.currentTime;
    if (value > 1 || value < -1) {
      _system2.default.currentTime = e.progress;
      this.playerStatus = false;
    }
  },
  formatTime: function formatTime(time) {
    var s = parseInt(time);
    if (!s) {
      return '00:00';
    }
    var m = parseInt(s / 60);
    var se = s % 60;
    var min = m >= 10 ? m : '0' + m;
    var sec = se >= 10 ? se : '0' + se;
    return min + ':' + sec;
  }
};}

/***/ }),

/***/ 119:
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
      "type": "taro-audio",
      "attr": {
        "className": "flex-1",
        "autoplay": "false",
        "id": "video",
        "initialTime": "12",
        "src": "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46",
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

/***/ 120:
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

/***/ 121:
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