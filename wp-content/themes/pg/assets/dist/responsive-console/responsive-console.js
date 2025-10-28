/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./assets/src/responsive-console/responsive-console-export.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./assets/src/responsive-console/responsive-console-export.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Responsive console exports for JavaScript\n */\n/* stylelint-disable function-name-case */\n/* stylelint-disable property-no-unknown */\n/**\n * Variables\n */\n/**\n * Rem settings\n */\n/**\n * Colors\n */\n/**\n * Bootstrap variables and settings\n */\n/**\n * Typography\n */\n/**\n * Code\n */\n/**\n * Tables\n */", "",{"version":3,"sources":["webpack://./assets/src/responsive-console/responsive-console-export.module.scss","webpack://./assets/src/theme/scss/abstracts/_variables.scss"],"names":[],"mappings":"AAAA;;EAAA;AAKA,yCAAA;AACA,0CAAA;ACNA;;EAAA;AAIA;;EAAA;AAKA;;EAAA;AAwBA;;EAAA;AAwHA;;EAAA;AAqCA;;EAAA;AASA;;EAAA","sourcesContent":["/**\n * Responsive console exports for JavaScript\n */\n\n\n/* stylelint-disable function-name-case */\n/* stylelint-disable property-no-unknown */\n\n@import \"~sass-to-js/sass/sass-to-js\";\n@import \"../theme/scss/abstracts/variables\";\n\n:export { /* stylelint-disable-line selector-pseudo-class-no-unknown */\n  breakpoints: sassToJs($grid-breakpoints);\n  setup: sassToJs($type-breakpoint-settings);\n  levels: sassToJs($type-levels);\n}\n","/**\n * Variables\n */\n\n/**\n * Rem settings\n */\n$rem-size: 10px;\n\n/**\n * Colors\n */\n\n$white: #fff;\n$black: #000;\n$red: #e11c1f;\n$grey: #BBBDBF;\n$yellow: #F4EA3D;\n$olive: #134020;\n$lavander: #7E2C46;\n\n// $theme-colors map is used in the color utility classes.\n$theme-colors: (\n  'white': $white,\n  'black': $black,\n\n\t'red': $red,\n\t'yellow': $yellow\n);\n\n$body-color: $white;\n$body-bg: $olive;\n\n/**\n * Bootstrap variables and settings\n */\n\n// Settings\n\n$enable-deprecation-messages: false;\n$enable-grid-classes: true;\n\n// Z-index\n\n$zindex-fixed: 1030;\n$zindex-sticky: 1020;\n\n// Grid\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 1024px,\n\txlg: 1500px,\n  xl: 2100px,\n);\n\n$grid-columns: 12;\n$grid-gutter-width: 120px;\n$grid-row-columns: 6;\n\n// Container\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 1024px,\n  xl: 1140px,\n);\n\n// Spacing\n\n$spacer: 1.5rem;\n\n$spacers: (\n  0: 0,\n  1: (\n    $spacer * 1,\n  ),\n  1d5: (\n    $spacer * 1.5,\n  ),\n  2: (\n    $spacer * 2,\n  ),\n  3: (\n    $spacer * 3,\n  ),\n  4: (\n    $spacer * 4,\n  ),\n  5: (\n    $spacer * 5,\n  ),\n  6: (\n    $spacer * 6,\n  ),\n\t7: (\n    $spacer * 7,\n  ),\n  8: (\n    $spacer * 8,\n  ),\n\t9: (\n    $spacer * 9,\n  ),\n\t10: (\n    $spacer * 10,\n  ),\n\t11: (\n    $spacer * 11,\n  ),\n\t12: (\n    $spacer * 12,\n  ),\n\t13: (\n    $spacer * 13,\n  ),\n\t14: (\n    $spacer * 14,\n  ),\n  15: (\n    $spacer * 15,\n  ),\n  20: (\n    $spacer * 20,\n  ),\n);\n\n// Sizes\n\n$sizes: (\n  25: 25%,\n  50: 50%,\n  75: 75%,\n  100: 100%,\n  auto: auto,\n);\n\n// Display utility classes\n\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex,\n  inline-flex;\n\n// Overflow utility classes\n\n$overflows: auto, hidden;\n\n// Position utility classes\n\n$positions: static, relative, absolute, fixed, sticky;\n\n/**\n * Typography\n */\n\n$font-family-sans-serif: 'coc', system-ui;\n$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\n  'Liberation Mono', 'Courier New', monospace; // stylelint-disable-line value-keyword-case\n\n$font-family-base: $font-family-sans-serif;\n\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-bold: 700;\n\n$font-size-base: 2.5rem;\n$font-weight-base: $font-weight-regular;\n$line-height-base: 1.2;\n\n$link-color: inherit;\n$link-decoration: none;\n$link-hover-color: inherit;\n$link-hover-decoration: none;\n\n// Font levels.\n\n$type-levels: ();\n\n// Type breakpoint settings.\n\n$type-breakpoint-settings: (\n  xs: (),\n  sm: (),\n  md: (),\n  lg: (),\n  xl: (),\n);\n\n/**\n * Code\n */\n\n$code-color: #d63384;\n$pre-color: #666;\n$kbd-color: $white;\n$kbd-bg: $black;\n\n/**\n * Tables\n */\n$table-border-width: 0.1rem;\n$table-border-color: $black;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"breakpoints": "'{\"xs\":0,\"sm\":\"576px\",\"md\":\"768px\",\"lg\":\"1024px\",\"xlg\":\"1500px\",\"xl\":\"2100px\"}'",
	"setup": "'{\"xs\":[],\"sm\":[],\"md\":[],\"lg\":[],\"xl\":[]}'",
	"levels": "\"[]\""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./assets/src/responsive-console/responsive-console-export.module.scss":
/*!*****************************************************************************!*\
  !*** ./assets/src/responsive-console/responsive-console-export.module.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./responsive-console-export.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[3]!./assets/src/responsive-console/responsive-console-export.module.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_3_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************!*\
  !*** ./assets/src/responsive-console/responsive-console.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive-console-export.module.scss */ "./assets/src/responsive-console/responsive-console-export.module.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Responsive console.
 */

/* eslint-disable */


_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].breakpoints = JSON.parse(_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].breakpoints.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, ""));
_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].setup = JSON.parse(_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].setup.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, ""));
_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].levels = JSON.parse(_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].levels.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, ""));
var rcSetup = [_responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].breakpoints, _responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].setup, _responsive_console_export_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].levels];

// @see https://remysharp.com/2010/07/21/throttling-function-calls
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;
    var now = +new Date();
    var args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
Object.size = function (obj) {
  var size = 0;
  var key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
var rc = function rc() {
  var rc = this;
  rc.setMarker = function () {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // viewport
    var index = -1;
    var sektor;
    var range = [];
    for (var key in rcSetup[0]) {
      if (parseInt(rcSetup[0][key]) > w) {
        sektor = index;
        range[1] = parseInt(rcSetup[0][key]);
        break;
      } else {
        range[0] = parseInt(rcSetup[0][key]);
      }
      index++;
    }
    var sektorCount = Object.size(rcSetup[0]) - 1;
    var cw = $(".responsive-console").innerWidth(); // container width
    $(".responsive-console__marker").css("left", sektor / sektorCount * 100 + 1 / sektorCount * 100 * ((w - range[0]) / (range[1] - range[0])) + "%"); // non linear! :)
  };

  rc.displayHeadingGraph = function (selector) {
    $(".responsive-console__svg-wrapper").addClass("is-active");
    $(".responsive-console").addClass("is-displaying-heading");
    var headingSetup = rcSetup[1];
    var index = 0;
    var graphset = [];
    var maxSize = 0;
    for (var breakpoint in headingSetup) {
      var headings = headingSetup[breakpoint];
      for (var klasa in headings) {
        var heading = headings[klasa];
        if (klasa === selector) {
          var level = rcSetup[2][heading];
          var fluid = false;
          if (_typeof(heading) === "object") {
            fluid = true;
            heading = Object.keys(heading)[0];
          }
          var size = parseInt(rcSetup[2][heading]["font-size"]);
          if (size > maxSize) {
            maxSize = size;
          }
          graphset.push([index, klasa, size, fluid, heading]);
        }
      }
      index++;
    }
    rc.displaySet(graphset, maxSize);
  };
  rc.displaySet = function (graphset, maxSize) {
    var sektorCount = Object.size(rcSetup[0]) - 1;
    var svg = document.getElementsByClassName("responsive-console__svg")[0]; // Get svg element
    var gridGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var circleGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var pathString = "";
    var first = true;
    var isFluid = false;
    var cx, cy;
    for (var one in graphset) {
      cx = graphset[one][0] * 1 / sektorCount * 100;
      cy = graphset[one][2] / maxSize * 100;
      // transform
      cx = cx * 8;
      cy = -cy * 3;
      if (first) {
        pathString = pathString + "M" + cx + " " + cy + " ";
        gridGroup = rc.drawGrid(cx, cy, gridGroup);
        circleGroup = rc.drawCircle(cx, cy, circleGroup);
      } else {
        if (isFluid) {
          pathString = pathString + "L" + cx + " " + cy + " ";
        } else {
          pathString = pathString + "H " + cx + " L" + cx + " " + cy + " ";
        }
        gridGroup = rc.drawGrid(cx, cy, gridGroup);
        circleGroup = rc.drawCircle(cx, cy, circleGroup);
      }
      $(".responsive-console__svg-wrapper").append('<div class="responsive-console__label" style="bottom:' + -cy + 'px"><b>' + graphset[one][4] + "</b> - " + graphset[one][2] + "px</div>");
      isFluid = graphset[one][3];
      first = false;
    }
    pathString = pathString + "L800 " + cy + " ";
    newElement.setAttribute("d", pathString);
    newElement.style.stroke = "#000"; // Set stroke colour
    newElement.style.strokeWidth = "1";
    newElement.style.fill = "none";
    svg.appendChild(gridGroup);
    svg.appendChild(newElement);
    svg.appendChild(circleGroup);
  };
  rc.drawCircle = function (cx, cy, g) {
    var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", cx);
    newCircle.setAttribute("cy", cy);
    newCircle.setAttribute("r", 3);
    newCircle.style.fill = "red";
    g.appendChild(newCircle);
    return g;
  };
  rc.drawGrid = function (cx, cy, g) {
    var gridLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
    gridLine.setAttribute("stroke-dasharray", "5, 10");
    gridLine.setAttribute("d", "M0 " + cy + " L 800 " + cy + " M" + cx + " 0 L" + cx + " -300");
    gridLine.style.strokeWidth = "1";
    gridLine.style.stroke = "rgba(0,0,0,.3)";
    gridLine.style.fill = "none";
    g.appendChild(gridLine);
    return g;
  };
  rc.init = function () {
    if ($(".responsive-console").length && typeof rcSetup !== "undefined") {
      for (var key in rcSetup[0]) {
        $(".responsive-console").append('<div class="responsive-console__col rc-' + key + '">' + key + "</div>");
      }
      rcSetup[0].last = "1920px";
      rc.setMarker();
      // rc.displayHeadingGraph('.t-demo');
      $(window).resize(throttle(function () {
        rc.setMarker();
      }, 100));
    }
  }();
};
new rc();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Jlc3BvbnNpdmUtY29uc29sZS9yZXNwb25zaXZlLWNvbnNvbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHdYQUF3WCxxTUFBcU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSx3TkFBd04sZ0RBQWdELGNBQWMsMEdBQTBHLCtDQUErQyxtQ0FBbUMsR0FBRywwRUFBMEUsd0NBQXdDLGVBQWUsZ0JBQWdCLGlCQUFpQixtQkFBbUIsa0JBQWtCLHFCQUFxQixtS0FBbUssd0JBQXdCLG1CQUFtQix3R0FBd0csNkJBQTZCLHNDQUFzQyx1QkFBdUIsMkhBQTJILHNCQUFzQiw0QkFBNEIsdUJBQXVCLDBHQUEwRyxrQ0FBa0MsOGtCQUE4a0IsOEZBQThGLG1JQUFtSSw0REFBNEQseUZBQXlGLHlFQUF5RSxtSEFBbUgsMkZBQTJGLDRCQUE0Qiw0QkFBNEIseUJBQXlCLDRCQUE0QiwwQ0FBMEMseUJBQXlCLHlCQUF5Qix5QkFBeUIsNkJBQTZCLCtCQUErQix3Q0FBd0MsMkhBQTJILDhDQUE4QyxtQkFBbUIscUJBQXFCLGtCQUFrQixxREFBcUQsOEJBQThCLHFCQUFxQjtBQUNoNkg7QUFDQTtBQUNBLG1CQUFtQixrR0FBa0c7QUFDckgsYUFBYSxrREFBa0Q7QUFDL0Q7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxz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QVEsQ0FBQyxZQUFXO1FBQ2xCbUIsRUFBRSxDQUFDQyxTQUFTLEVBQUU7TUFDaEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUNSO0lBQ0g7RUFDRixDQUFDLEVBQUc7QUFDTixDQUFDO0FBRUQsSUFBSUQsRUFBRSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vYXNzZXRzL3NyYy9yZXNwb25zaXZlLWNvbnNvbGUvcmVzcG9uc2l2ZS1jb25zb2xlLWV4cG9ydC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL2Fzc2V0cy9zcmMvcmVzcG9uc2l2ZS1jb25zb2xlL3Jlc3BvbnNpdmUtY29uc29sZS1leHBvcnQubW9kdWxlLnNjc3M/MzExNSIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYXlncm91bmQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BsYXlncm91bmQvLi9hc3NldHMvc3JjL3Jlc3BvbnNpdmUtY29uc29sZS9yZXNwb25zaXZlLWNvbnNvbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZXNwb25zaXZlIGNvbnNvbGUgZXhwb3J0cyBmb3IgSmF2YVNjcmlwdFxcbiAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGZ1bmN0aW9uLW5hbWUtY2FzZSAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIHByb3BlcnR5LW5vLXVua25vd24gKi9cXG4vKipcXG4gKiBWYXJpYWJsZXNcXG4gKi9cXG4vKipcXG4gKiBSZW0gc2V0dGluZ3NcXG4gKi9cXG4vKipcXG4gKiBDb2xvcnNcXG4gKi9cXG4vKipcXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIGFuZCBzZXR0aW5nc1xcbiAqL1xcbi8qKlxcbiAqIFR5cG9ncmFwaHlcXG4gKi9cXG4vKipcXG4gKiBDb2RlXFxuICovXFxuLyoqXFxuICogVGFibGVzXFxuICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYXNzZXRzL3NyYy9yZXNwb25zaXZlLWNvbnNvbGUvcmVzcG9uc2l2ZS1jb25zb2xlLWV4cG9ydC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4vYXNzZXRzL3NyYy90aGVtZS9zY3NzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBQUE7QUFLQSx5Q0FBQTtBQUNBLDBDQUFBO0FDTkE7O0VBQUE7QUFJQTs7RUFBQTtBQUtBOztFQUFBO0FBd0JBOztFQUFBO0FBd0hBOztFQUFBO0FBcUNBOztFQUFBO0FBU0E7O0VBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVzcG9uc2l2ZSBjb25zb2xlIGV4cG9ydHMgZm9yIEphdmFTY3JpcHRcXG4gKi9cXG5cXG5cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1uYW1lLWNhc2UgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1uby11bmtub3duICovXFxuXFxuQGltcG9ydCBcXFwifnNhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXFxcIjtcXG5AaW1wb3J0IFxcXCIuLi90aGVtZS9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcXFwiO1xcblxcbjpleHBvcnQgeyAvKiBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIHNlbGVjdG9yLXBzZXVkby1jbGFzcy1uby11bmtub3duICovXFxuICBicmVha3BvaW50czogc2Fzc1RvSnMoJGdyaWQtYnJlYWtwb2ludHMpO1xcbiAgc2V0dXA6IHNhc3NUb0pzKCR0eXBlLWJyZWFrcG9pbnQtc2V0dGluZ3MpO1xcbiAgbGV2ZWxzOiBzYXNzVG9KcygkdHlwZS1sZXZlbHMpO1xcbn1cXG5cIixcIi8qKlxcbiAqIFZhcmlhYmxlc1xcbiAqL1xcblxcbi8qKlxcbiAqIFJlbSBzZXR0aW5nc1xcbiAqL1xcbiRyZW0tc2l6ZTogMTBweDtcXG5cXG4vKipcXG4gKiBDb2xvcnNcXG4gKi9cXG5cXG4kd2hpdGU6ICNmZmY7XFxuJGJsYWNrOiAjMDAwO1xcbiRyZWQ6ICNlMTFjMWY7XFxuJGdyZXk6ICNCQkJEQkY7XFxuJHllbGxvdzogI0Y0RUEzRDtcXG4kb2xpdmU6ICMxMzQwMjA7XFxuJGxhdmFuZGVyOiAjN0UyQzQ2O1xcblxcbi8vICR0aGVtZS1jb2xvcnMgbWFwIGlzIHVzZWQgaW4gdGhlIGNvbG9yIHV0aWxpdHkgY2xhc3Nlcy5cXG4kdGhlbWUtY29sb3JzOiAoXFxuICAnd2hpdGUnOiAkd2hpdGUsXFxuICAnYmxhY2snOiAkYmxhY2ssXFxuXFxuXFx0J3JlZCc6ICRyZWQsXFxuXFx0J3llbGxvdyc6ICR5ZWxsb3dcXG4pO1xcblxcbiRib2R5LWNvbG9yOiAkd2hpdGU7XFxuJGJvZHktYmc6ICRvbGl2ZTtcXG5cXG4vKipcXG4gKiBCb290c3RyYXAgdmFyaWFibGVzIGFuZCBzZXR0aW5nc1xcbiAqL1xcblxcbi8vIFNldHRpbmdzXFxuXFxuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogZmFsc2U7XFxuJGVuYWJsZS1ncmlkLWNsYXNzZXM6IHRydWU7XFxuXFxuLy8gWi1pbmRleFxcblxcbiR6aW5kZXgtZml4ZWQ6IDEwMzA7XFxuJHppbmRleC1zdGlja3k6IDEwMjA7XFxuXFxuLy8gR3JpZFxcblxcbiRncmlkLWJyZWFrcG9pbnRzOiAoXFxuICB4czogMCxcXG4gIHNtOiA1NzZweCxcXG4gIG1kOiA3NjhweCxcXG4gIGxnOiAxMDI0cHgsXFxuXFx0eGxnOiAxNTAwcHgsXFxuICB4bDogMjEwMHB4LFxcbik7XFxuXFxuJGdyaWQtY29sdW1uczogMTI7XFxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAxMjBweDtcXG4kZ3JpZC1yb3ctY29sdW1uczogNjtcXG5cXG4vLyBDb250YWluZXJcXG5cXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcXG4gIHNtOiA1NDBweCxcXG4gIG1kOiA3MjBweCxcXG4gIGxnOiAxMDI0cHgsXFxuICB4bDogMTE0MHB4LFxcbik7XFxuXFxuLy8gU3BhY2luZ1xcblxcbiRzcGFjZXI6IDEuNXJlbTtcXG5cXG4kc3BhY2VyczogKFxcbiAgMDogMCxcXG4gIDE6IChcXG4gICAgJHNwYWNlciAqIDEsXFxuICApLFxcbiAgMWQ1OiAoXFxuICAgICRzcGFjZXIgKiAxLjUsXFxuICApLFxcbiAgMjogKFxcbiAgICAkc3BhY2VyICogMixcXG4gICksXFxuICAzOiAoXFxuICAgICRzcGFjZXIgKiAzLFxcbiAgKSxcXG4gIDQ6IChcXG4gICAgJHNwYWNlciAqIDQsXFxuICApLFxcbiAgNTogKFxcbiAgICAkc3BhY2VyICogNSxcXG4gICksXFxuICA2OiAoXFxuICAgICRzcGFjZXIgKiA2LFxcbiAgKSxcXG5cXHQ3OiAoXFxuICAgICRzcGFjZXIgKiA3LFxcbiAgKSxcXG4gIDg6IChcXG4gICAgJHNwYWNlciAqIDgsXFxuICApLFxcblxcdDk6IChcXG4gICAgJHNwYWNlciAqIDksXFxuICApLFxcblxcdDEwOiAoXFxuICAgICRzcGFjZXIgKiAxMCxcXG4gICksXFxuXFx0MTE6IChcXG4gICAgJHNwYWNlciAqIDExLFxcbiAgKSxcXG5cXHQxMjogKFxcbiAgICAkc3BhY2VyICogMTIsXFxuICApLFxcblxcdDEzOiAoXFxuICAgICRzcGFjZXIgKiAxMyxcXG4gICksXFxuXFx0MTQ6IChcXG4gICAgJHNwYWNlciAqIDE0LFxcbiAgKSxcXG4gIDE1OiAoXFxuICAgICRzcGFjZXIgKiAxNSxcXG4gICksXFxuICAyMDogKFxcbiAgICAkc3BhY2VyICogMjAsXFxuICApLFxcbik7XFxuXFxuLy8gU2l6ZXNcXG5cXG4kc2l6ZXM6IChcXG4gIDI1OiAyNSUsXFxuICA1MDogNTAlLFxcbiAgNzU6IDc1JSxcXG4gIDEwMDogMTAwJSxcXG4gIGF1dG86IGF1dG8sXFxuKTtcXG5cXG4vLyBEaXNwbGF5IHV0aWxpdHkgY2xhc3Nlc1xcblxcbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LFxcbiAgaW5saW5lLWZsZXg7XFxuXFxuLy8gT3ZlcmZsb3cgdXRpbGl0eSBjbGFzc2VzXFxuXFxuJG92ZXJmbG93czogYXV0bywgaGlkZGVuO1xcblxcbi8vIFBvc2l0aW9uIHV0aWxpdHkgY2xhc3Nlc1xcblxcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5O1xcblxcbi8qKlxcbiAqIFR5cG9ncmFwaHlcXG4gKi9cXG5cXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ2NvYycsIHN5c3RlbS11aTtcXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXFxuICAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIHZhbHVlLWtleXdvcmQtY2FzZVxcblxcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcXG5cXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMDtcXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XFxuXFxuJGZvbnQtc2l6ZS1iYXNlOiAyLjVyZW07XFxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1yZWd1bGFyO1xcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjI7XFxuXFxuJGxpbmstY29sb3I6IGluaGVyaXQ7XFxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcXG4kbGluay1ob3Zlci1jb2xvcjogaW5oZXJpdDtcXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xcblxcbi8vIEZvbnQgbGV2ZWxzLlxcblxcbiR0eXBlLWxldmVsczogKCk7XFxuXFxuLy8gVHlwZSBicmVha3BvaW50IHNldHRpbmdzLlxcblxcbiR0eXBlLWJyZWFrcG9pbnQtc2V0dGluZ3M6IChcXG4gIHhzOiAoKSxcXG4gIHNtOiAoKSxcXG4gIG1kOiAoKSxcXG4gIGxnOiAoKSxcXG4gIHhsOiAoKSxcXG4pO1xcblxcbi8qKlxcbiAqIENvZGVcXG4gKi9cXG5cXG4kY29kZS1jb2xvcjogI2Q2MzM4NDtcXG4kcHJlLWNvbG9yOiAjNjY2O1xcbiRrYmQtY29sb3I6ICR3aGl0ZTtcXG4ka2JkLWJnOiAkYmxhY2s7XFxuXFxuLyoqXFxuICogVGFibGVzXFxuICovXFxuJHRhYmxlLWJvcmRlci13aWR0aDogMC4xcmVtO1xcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRibGFjaztcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJicmVha3BvaW50c1wiOiBcIid7XFxcInhzXFxcIjowLFxcXCJzbVxcXCI6XFxcIjU3NnB4XFxcIixcXFwibWRcXFwiOlxcXCI3NjhweFxcXCIsXFxcImxnXFxcIjpcXFwiMTAyNHB4XFxcIixcXFwieGxnXFxcIjpcXFwiMTUwMHB4XFxcIixcXFwieGxcXFwiOlxcXCIyMTAwcHhcXFwifSdcIixcblx0XCJzZXR1cFwiOiBcIid7XFxcInhzXFxcIjpbXSxcXFwic21cXFwiOltdLFxcXCJtZFxcXCI6W10sXFxcImxnXFxcIjpbXSxcXFwieGxcXFwiOltdfSdcIixcblx0XCJsZXZlbHNcIjogXCJcXFwiW11cXFwiXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s4XS5vbmVPZlsxXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzhdLm9uZU9mWzFdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbOF0ub25lT2ZbMV0udXNlWzNdIS4vcmVzcG9uc2l2ZS1jb25zb2xlLWV4cG9ydC5tb2R1bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXG4gKiBSZXNwb25zaXZlIGNvbnNvbGUuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHZhcnMgZnJvbSBcIi4vcmVzcG9uc2l2ZS1jb25zb2xlLWV4cG9ydC5tb2R1bGUuc2Nzc1wiO1xuXG52YXJzLmJyZWFrcG9pbnRzID0gSlNPTi5wYXJzZShcbiAgdmFycy5icmVha3BvaW50cy5yZXBsYWNlKC9eWydcIl0rfFxccyt8XFxcXHwoO1xccz99KSt8WydcIl0kL2csIFwiXCIpXG4pO1xudmFycy5zZXR1cCA9IEpTT04ucGFyc2UoXG4gIHZhcnMuc2V0dXAucmVwbGFjZSgvXlsnXCJdK3xcXHMrfFxcXFx8KDtcXHM/fSkrfFsnXCJdJC9nLCBcIlwiKVxuKTtcbnZhcnMubGV2ZWxzID0gSlNPTi5wYXJzZShcbiAgdmFycy5sZXZlbHMucmVwbGFjZSgvXlsnXCJdK3xcXHMrfFxcXFx8KDtcXHM/fSkrfFsnXCJdJC9nLCBcIlwiKVxuKTtcblxudmFyIHJjU2V0dXAgPSBbdmFycy5icmVha3BvaW50cywgdmFycy5zZXR1cCwgdmFycy5sZXZlbHNdO1xuXG4vLyBAc2VlIGh0dHBzOi8vcmVteXNoYXJwLmNvbS8yMDEwLzA3LzIxL3Rocm90dGxpbmctZnVuY3Rpb24tY2FsbHNcbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aHJlc2hob2xkLCBzY29wZSkge1xuICB0aHJlc2hob2xkIHx8ICh0aHJlc2hob2xkID0gMjUwKTtcbiAgdmFyIGxhc3QsIGRlZmVyVGltZXI7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XG5cbiAgICB2YXIgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaGhvbGQpIHtcbiAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0sIHRocmVzaGhvbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufVxuXG5PYmplY3Quc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgc2l6ZSsrO1xuICB9XG4gIHJldHVybiBzaXplO1xufTtcblxudmFyIHJjID0gZnVuY3Rpb24oKSB7XG4gIHZhciByYyA9IHRoaXM7XG4gIHJjLnNldE1hcmtlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3ID0gTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwXG4gICAgKTsgLy8gdmlld3BvcnRcbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgc2VrdG9yO1xuICAgIHZhciByYW5nZSA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiByY1NldHVwWzBdKSB7XG4gICAgICBpZiAocGFyc2VJbnQocmNTZXR1cFswXVtrZXldKSA+IHcpIHtcbiAgICAgICAgc2VrdG9yID0gaW5kZXg7XG4gICAgICAgIHJhbmdlWzFdID0gcGFyc2VJbnQocmNTZXR1cFswXVtrZXldKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZVswXSA9IHBhcnNlSW50KHJjU2V0dXBbMF1ba2V5XSk7XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgICB2YXIgc2VrdG9yQ291bnQgPSBPYmplY3Quc2l6ZShyY1NldHVwWzBdKSAtIDE7XG4gICAgdmFyIGN3ID0gJChcIi5yZXNwb25zaXZlLWNvbnNvbGVcIikuaW5uZXJXaWR0aCgpOyAvLyBjb250YWluZXIgd2lkdGhcbiAgICAkKFwiLnJlc3BvbnNpdmUtY29uc29sZV9fbWFya2VyXCIpLmNzcyhcbiAgICAgIFwibGVmdFwiLFxuICAgICAgKHNla3RvciAvIHNla3RvckNvdW50KSAqIDEwMCArXG4gICAgICAgICgxIC8gc2VrdG9yQ291bnQpICogMTAwICogKCh3IC0gcmFuZ2VbMF0pIC8gKHJhbmdlWzFdIC0gcmFuZ2VbMF0pKSArXG4gICAgICAgIFwiJVwiXG4gICAgKTsgLy8gbm9uIGxpbmVhciEgOilcbiAgfTtcblxuICByYy5kaXNwbGF5SGVhZGluZ0dyYXBoID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAkKFwiLnJlc3BvbnNpdmUtY29uc29sZV9fc3ZnLXdyYXBwZXJcIikuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG4gICAgJChcIi5yZXNwb25zaXZlLWNvbnNvbGVcIikuYWRkQ2xhc3MoXCJpcy1kaXNwbGF5aW5nLWhlYWRpbmdcIik7XG4gICAgdmFyIGhlYWRpbmdTZXR1cCA9IHJjU2V0dXBbMV07XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZ3JhcGhzZXQgPSBbXTtcbiAgICB2YXIgbWF4U2l6ZSA9IDA7XG4gICAgZm9yICh2YXIgYnJlYWtwb2ludCBpbiBoZWFkaW5nU2V0dXApIHtcbiAgICAgIHZhciBoZWFkaW5ncyA9IGhlYWRpbmdTZXR1cFticmVha3BvaW50XTtcblxuICAgICAgZm9yICh2YXIga2xhc2EgaW4gaGVhZGluZ3MpIHtcbiAgICAgICAgdmFyIGhlYWRpbmcgPSBoZWFkaW5nc1trbGFzYV07XG4gICAgICAgIGlmIChrbGFzYSA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgICB2YXIgbGV2ZWwgPSByY1NldHVwWzJdW2hlYWRpbmddO1xuICAgICAgICAgIHZhciBmbHVpZCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0eXBlb2YgaGVhZGluZyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZmx1aWQgPSB0cnVlO1xuICAgICAgICAgICAgaGVhZGluZyA9IE9iamVjdC5rZXlzKGhlYWRpbmcpWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzaXplID0gcGFyc2VJbnQocmNTZXR1cFsyXVtoZWFkaW5nXVtcImZvbnQtc2l6ZVwiXSk7XG4gICAgICAgICAgaWYgKHNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgICAgICBtYXhTaXplID0gc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ3JhcGhzZXQucHVzaChbaW5kZXgsIGtsYXNhLCBzaXplLCBmbHVpZCwgaGVhZGluZ10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgICByYy5kaXNwbGF5U2V0KGdyYXBoc2V0LCBtYXhTaXplKTtcbiAgfTtcbiAgcmMuZGlzcGxheVNldCA9IGZ1bmN0aW9uKGdyYXBoc2V0LCBtYXhTaXplKSB7XG4gICAgdmFyIHNla3RvckNvdW50ID0gT2JqZWN0LnNpemUocmNTZXR1cFswXSkgLSAxO1xuICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVzcG9uc2l2ZS1jb25zb2xlX19zdmdcIilbMF07IC8vIEdldCBzdmcgZWxlbWVudFxuICAgIHZhciBncmlkR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJnXCJcbiAgICApO1xuICAgIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJwYXRoXCJcbiAgICApO1xuICAgIHZhciBwYXRoU3RyaW5nID0gXCJcIjtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIHZhciBpc0ZsdWlkID0gZmFsc2U7XG4gICAgdmFyIGN4LCBjeTtcbiAgICBmb3IgKHZhciBvbmUgaW4gZ3JhcGhzZXQpIHtcbiAgICAgIGN4ID0gKChncmFwaHNldFtvbmVdWzBdICogMSkgLyBzZWt0b3JDb3VudCkgKiAxMDA7XG4gICAgICBjeSA9IChncmFwaHNldFtvbmVdWzJdIC8gbWF4U2l6ZSkgKiAxMDA7XG4gICAgICAvLyB0cmFuc2Zvcm1cbiAgICAgIGN4ID0gY3ggKiA4O1xuICAgICAgY3kgPSAtY3kgKiAzO1xuICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgIHBhdGhTdHJpbmcgPSBwYXRoU3RyaW5nICsgXCJNXCIgKyBjeCArIFwiIFwiICsgY3kgKyBcIiBcIjtcbiAgICAgICAgZ3JpZEdyb3VwID0gcmMuZHJhd0dyaWQoY3gsIGN5LCBncmlkR3JvdXApO1xuICAgICAgICBjaXJjbGVHcm91cCA9IHJjLmRyYXdDaXJjbGUoY3gsIGN5LCBjaXJjbGVHcm91cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNGbHVpZCkge1xuICAgICAgICAgIHBhdGhTdHJpbmcgPSBwYXRoU3RyaW5nICsgXCJMXCIgKyBjeCArIFwiIFwiICsgY3kgKyBcIiBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoU3RyaW5nID0gcGF0aFN0cmluZyArIFwiSCBcIiArIGN4ICsgXCIgTFwiICsgY3ggKyBcIiBcIiArIGN5ICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZEdyb3VwID0gcmMuZHJhd0dyaWQoY3gsIGN5LCBncmlkR3JvdXApO1xuICAgICAgICBjaXJjbGVHcm91cCA9IHJjLmRyYXdDaXJjbGUoY3gsIGN5LCBjaXJjbGVHcm91cCk7XG4gICAgICB9XG5cbiAgICAgICQoXCIucmVzcG9uc2l2ZS1jb25zb2xlX19zdmctd3JhcHBlclwiKS5hcHBlbmQoXG4gICAgICAgICc8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZS1jb25zb2xlX19sYWJlbFwiIHN0eWxlPVwiYm90dG9tOicgK1xuICAgICAgICAgIC1jeSArXG4gICAgICAgICAgJ3B4XCI+PGI+JyArXG4gICAgICAgICAgZ3JhcGhzZXRbb25lXVs0XSArXG4gICAgICAgICAgXCI8L2I+IC0gXCIgK1xuICAgICAgICAgIGdyYXBoc2V0W29uZV1bMl0gK1xuICAgICAgICAgIFwicHg8L2Rpdj5cIlxuICAgICAgKTtcblxuICAgICAgaXNGbHVpZCA9IGdyYXBoc2V0W29uZV1bM107XG4gICAgICBmaXJzdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBhdGhTdHJpbmcgPSBwYXRoU3RyaW5nICsgXCJMODAwIFwiICsgY3kgKyBcIiBcIjtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aFN0cmluZyk7XG4gICAgbmV3RWxlbWVudC5zdHlsZS5zdHJva2UgPSBcIiMwMDBcIjsgLy8gU2V0IHN0cm9rZSBjb2xvdXJcbiAgICBuZXdFbGVtZW50LnN0eWxlLnN0cm9rZVdpZHRoID0gXCIxXCI7XG4gICAgbmV3RWxlbWVudC5zdHlsZS5maWxsID0gXCJub25lXCI7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGdyaWRHcm91cCk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChjaXJjbGVHcm91cCk7XG4gIH07XG5cbiAgcmMuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uKGN4LCBjeSwgZykge1xuICAgIHZhciBuZXdDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcImNpcmNsZVwiXG4gICAgKTtcbiAgICBuZXdDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgY3gpO1xuICAgIG5ld0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBjeSk7XG4gICAgbmV3Q2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgMyk7XG4gICAgbmV3Q2lyY2xlLnN0eWxlLmZpbGwgPSBcInJlZFwiO1xuICAgIGcuYXBwZW5kQ2hpbGQobmV3Q2lyY2xlKTtcbiAgICByZXR1cm4gZztcbiAgfTtcblxuICByYy5kcmF3R3JpZCA9IGZ1bmN0aW9uKGN4LCBjeSwgZykge1xuICAgIHZhciBncmlkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwicGF0aFwiXG4gICAgKTtcbiAgICBncmlkTGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiNSwgMTBcIik7XG4gICAgZ3JpZExpbmUuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0wIFwiICsgY3kgKyBcIiBMIDgwMCBcIiArIGN5ICsgXCIgTVwiICsgY3ggKyBcIiAwIExcIiArIGN4ICsgXCIgLTMwMFwiXG4gICAgKTtcblxuICAgIGdyaWRMaW5lLnN0eWxlLnN0cm9rZVdpZHRoID0gXCIxXCI7XG4gICAgZ3JpZExpbmUuc3R5bGUuc3Ryb2tlID0gXCJyZ2JhKDAsMCwwLC4zKVwiO1xuICAgIGdyaWRMaW5lLnN0eWxlLmZpbGwgPSBcIm5vbmVcIjtcbiAgICBnLmFwcGVuZENoaWxkKGdyaWRMaW5lKTtcbiAgICByZXR1cm4gZztcbiAgfTtcblxuICByYy5pbml0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKFwiLnJlc3BvbnNpdmUtY29uc29sZVwiKS5sZW5ndGggJiYgdHlwZW9mIHJjU2V0dXAgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiByY1NldHVwWzBdKSB7XG4gICAgICAgICQoXCIucmVzcG9uc2l2ZS1jb25zb2xlXCIpLmFwcGVuZChcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlc3BvbnNpdmUtY29uc29sZV9fY29sIHJjLScgK1xuICAgICAgICAgICAga2V5ICtcbiAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgIGtleSArXG4gICAgICAgICAgICBcIjwvZGl2PlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByY1NldHVwWzBdLmxhc3QgPSBcIjE5MjBweFwiO1xuICAgICAgcmMuc2V0TWFya2VyKCk7XG4gICAgICAvLyByYy5kaXNwbGF5SGVhZGluZ0dyYXBoKCcudC1kZW1vJyk7XG4gICAgICAkKHdpbmRvdykucmVzaXplKFxuICAgICAgICB0aHJvdHRsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICByYy5zZXRNYXJrZXIoKTtcbiAgICAgICAgfSwgMTAwKVxuICAgICAgKTtcbiAgICB9XG4gIH0pKCk7XG59O1xuXG5uZXcgcmMoKTtcbiJdLCJuYW1lcyI6WyJ2YXJzIiwiYnJlYWtwb2ludHMiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwic2V0dXAiLCJsZXZlbHMiLCJyY1NldHVwIiwidGhyb3R0bGUiLCJmbiIsInRocmVzaGhvbGQiLCJzY29wZSIsImxhc3QiLCJkZWZlclRpbWVyIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiT2JqZWN0Iiwic2l6ZSIsIm9iaiIsImtleSIsImhhc093blByb3BlcnR5IiwicmMiLCJzZXRNYXJrZXIiLCJ3IiwiTWF0aCIsIm1heCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5kZXgiLCJzZWt0b3IiLCJyYW5nZSIsInBhcnNlSW50Iiwic2VrdG9yQ291bnQiLCJjdyIsIiQiLCJjc3MiLCJkaXNwbGF5SGVhZGluZ0dyYXBoIiwic2VsZWN0b3IiLCJhZGRDbGFzcyIsImhlYWRpbmdTZXR1cCIsImdyYXBoc2V0IiwibWF4U2l6ZSIsImJyZWFrcG9pbnQiLCJoZWFkaW5ncyIsImtsYXNhIiwiaGVhZGluZyIsImxldmVsIiwiZmx1aWQiLCJrZXlzIiwicHVzaCIsImRpc3BsYXlTZXQiLCJzdmciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ3JpZEdyb3VwIiwiY3JlYXRlRWxlbWVudE5TIiwiY2lyY2xlR3JvdXAiLCJuZXdFbGVtZW50IiwicGF0aFN0cmluZyIsImZpcnN0IiwiaXNGbHVpZCIsImN4IiwiY3kiLCJvbmUiLCJkcmF3R3JpZCIsImRyYXdDaXJjbGUiLCJhcHBlbmQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZmlsbCIsImFwcGVuZENoaWxkIiwiZyIsIm5ld0NpcmNsZSIsImdyaWRMaW5lIiwiaW5pdCIsImxlbmd0aCIsInJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=