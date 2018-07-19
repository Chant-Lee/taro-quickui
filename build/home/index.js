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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ({

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(139)
var $app_style$ = __webpack_require__(140)
var $app_script$ = __webpack_require__(141)

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

/***/ 139:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "group-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "group-content"
              ],
              "repeat": {
                "exp": function () {return this.tabItemList},
                "value": "tabItem"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "introduce"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.dataMap[this.tabItem].desc}
                      },
                      "classList": [
                        "introduce-detail"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item-container"
                  ],
                  "repeat": {
                    "exp": function () {return this.dataMap[this.tabItem].groupList},
                    "key": "index",
                    "value": "group"
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "item-title"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.group.name}
                          },
                          "classList": function () {return ['item-title-detail', this.selectedIdxMap[this.tabItem]===this.index?'selected-text':'']},
                          "events": {
                            "click": function (evt) {this.selectConFn(this.tabItem,this.index,evt)}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": function () {return ['item-content', this.selectedIdxMap[this.tabItem]===this.index?'selected-group':'']},
                      "children": [
                        {
                          "type": "block",
                          "attr": {},
                          "repeat": {
                            "exp": function () {return this.group.caseList},
                            "value": "case"
                          },
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "item-li"
                              ],
                              "events": {
                                "click": function (evt) {this.routePath(this.case.path,evt)}
                              },
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.case.name}
                                  },
                                  "classList": [
                                    "item-li-detail"
                                  ]
                                },
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "arrow-right.png"
                                  },
                                  "classList": [
                                    "item_arrow_img"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "backgroundColor": "#fbf9fe",
    "flex": 1,
    "flexDirection": "column"
  },
  ".footer-container": {
    "height": "120px",
    "borderTopWidth": "1px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "backgroundColor": "#ffffff"
  },
  ".group-container": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".group-content": {
    "flexDirection": "column",
    "flex": 1
  },
  ".introduce": {
    "paddingLeft": "80px",
    "paddingRight": "80px",
    "marginBottom": "80px",
    "marginTop": "60px"
  },
  ".introduce-detail": {
    "textAlign": "center",
    "flex": 1,
    "lines": 3,
    "lineHeight": "50px",
    "color": "#888888"
  },
  ".item-container": {
    "marginLeft": "30px",
    "marginRight": "30px",
    "backgroundColor": "#ffffff",
    "flexDirection": "column",
    "marginBottom": "30px"
  },
  ".item-title-detail": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "flex": 1,
    "color": "#000000",
    "backgroundColor:active": "#dfdfdf"
  },
  ".item-content": {
    "flexDirection": "column",
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "30px",
    "display": "none"
  },
  ".item-li": {
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "borderBottomWidth": "1px",
    "alignItems": "center",
    "backgroundColor:active": "#dfdfdf"
  },
  ".item_arrow_img": {
    "height": "40px",
    "width": "20px",
    "marginRight": "30px",
    "resizeMode": "contain"
  },
  ".item-li-detail": {
    "paddingTop": "25px",
    "paddingBottom": "25px",
    "color": "#000000",
    "flex": 1
  },
  ".tab-text": {
    "textAlign": "center",
    "color:active": "#0faeff"
  },
  ".selected-group": {
    "display": "flex"
  },
  ".selected-text": {
    "color": "#cccccc"
  }
}

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _data = __webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    dataMap: _data.tabsData,
    tabItemList: [],
    selectedIdxMap: {}
  },
  onInit: function onInit() {
    var _this = this;

    console.log(111111, this.tabsData);
    this.tabItemList = [].concat(Object.keys(this.dataMap));
    this.tabItemList.forEach(function (tabItem) {
      console.log(2222, tabItem);
      _this.$set('selectedIdxMap.' + tabItem, -1);
    });
  },
  selectConFn: function selectConFn(tabItem, index) {
    console.log(1111111);
    console.log(tabItem, index);
    this.selectedIdxMap[tabItem] = this.selectedIdxMap[tabItem] === index ? -1 : index;
  },
  routePath: function routePath(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _system2.default.push({ uri: path, params: params });
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

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tabsData = exports.tabsData = {
  components: {
    name: '组件',
    desc: '以下将展示taro快应用的ui组件',
    groupList: [{
      name: '视图容器',
      caseList: [{
        name: 'View',
        path: 'components/container/view'
      },
      // {
      //   name: 'ScrollView',
      //   path: 'components/container/scroll_view'
      // },
      {
        name: 'Swiper',
        path: 'components/container/swiper'
      }]
    }, {
      name: '基础组件',
      caseList: [{
        name: 'Icon',
        path: 'components/basic/icon'
      }, {
        name: 'Text',
        path: 'components/basic/text'
      }, {
        name: 'progress',
        path: 'components/basic/progress'
      }, {
        name: 'RichText',
        path: 'components/basic/rich_text'
      }]
    }, {
      name: '表单组件',
      caseList: [{
        name: 'Button',
        path: 'components/form/button'
      }, {
        name: 'Checkbox',
        path: 'components/form/checkbox'
      }, {
        name: 'input',
        path: 'components/form/input'
      }, {
        name: 'label',
        path: 'components/form/label'
      },
      // {
      //   name: 'picker',
      //   path: 'components/form/picker'
      // },
      {
        name: 'Radio',
        path: 'components/form/radio'
      }, {
        name: 'slider',
        path: 'components/form/slider'
      }, {
        name: 'switch',
        path: 'components/form/switch'
      }, {
        name: 'textarea',
        path: 'components/form/textarea'
      }]
    }, {
      name: '媒体组件',
      caseList: [{
        name: 'video',
        path: 'components/media/video'
      }, {
        name: 'audio',
        path: 'components/media/audio'
      }, {
        name: 'camera',
        path: 'components/media/camera'
      }]
    }, {
      name: '导航',
      caseList: [{
        name: 'navigator',
        path: 'components/navigator/navigator'
      }]
    }]
  }
};

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