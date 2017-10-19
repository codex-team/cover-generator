var codex = codex || {}; codex["cover"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Cover module entry poit
 */
module.exports = function () {

  'use strict';

  /**
   * Requre CSS
   */

  __webpack_require__(1);

  /**
   * User Interface module
   */
  var ui = __webpack_require__(2);

  /**
   * Initialization method
   * @param  {object} initParams
   * @param  {string} initParams.containerId - in that Node we will render Editor
   */
  var init = function init() {
    var initParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    console.assert(initParams.containerId, 'Container id is missed');

    var container = document.getElementById(initParams.containerId);

    if (!container) {

      console.warn('Container was not found by id %o', initParams.containerId);
      return;
    }

    /**
     * Make interface and bind events
     */
    ui.create(container);
  };

  /**
   * Destories UI
   */
  var destroy = function destroy() {};

  return {
    init: init,
    destroy: destroy
  };
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * User interface module
 */
module.exports = function () {

    'use strict';

    var $ = __webpack_require__(3).default;

    /**
     * Style classnames
     * @type {Object}
     */
    var CSS = {
        editor: 'cover-editor',
        controls: 'cover-editor__controls',

        resizeButton: 'cover-editor__resize-canvas',
        resizeButtonActive: 'cover-editor__resize-canvas--active',

        resizeButtonSquare: 'cover-editor__resize-canvas--square',
        resizeButtonVertical: 'cover-editor__resize-canvas--vertical',
        resizeButtonHorisontal: 'cover-editor__resize-canvas--horisontal',

        controlButton: 'cover-editor__control-button',
        controlButtonSave: 'cover-editor__control-button--save',

        canvasWrapper: 'cover-editor__canvas-wrapper',
        canvas: 'cover-editor__canvas'
    };

    /**
     * Static nodes cache
     * @type {Object}
     */
    var nodes = {
        canvasWrapper: null,
        canvas: null,
        mainRectangle: null,
        controls: {
            resizeSqure: null,
            resizeVertical: null,
            resizeHorisontal: null,
            saveButton: null,
            pictureButton: null,
            mainTextButton: null,
            headlineButton: null
        }
    };

    /**
    * Creates main form
    */
    function createCanvas() {

        nodes.canvasWrapper = $.make('div', CSS.canvasWrapper);

        nodes.canvas = $.svg('svg', {
            width: '100%',
            height: '100%'
        });

        nodes.mainRectangle = $.svg('rect', {
            width: '100%',
            height: '100%',
            fill: '#FFFFFF'
        });

        nodes.canvas.classList.add(CSS.canvas);
        nodes.canvas.appendChild(nodes.mainRectangle);
        nodes.canvasWrapper.appendChild(nodes.canvas);

        return nodes.canvasWrapper;
    }

    /**
     * Save button click listener
     */
    function saveButtonClicked() {

        console.log('saveButtonClicked');
    }

    /**
     * Resize button click listener
     * @param {MouseEvent} event — click
     */
    function resizeButtonClicked(event) {

        var button = event.target,
            size = button.dataset.size;

        console.log('resize to: %o', size);
    }

    /**
     * Show and hide button click listener
     * @param  {MouseEvent} event  - click
     */
    function toggleObjectClicked(event) {

        var button = event.target,
            object = button.dataset.object;

        console.log('toggle: %o', object);
    }

    /**
     * Bind necessary event to manupulate controls
     */
    function bindEvents() {

        nodes.controls.saveButton.addEventListener('click', saveButtonClicked);

        nodes.controls.resizeSqure.addEventListener('click', resizeButtonClicked);
        nodes.controls.resizeVertical.addEventListener('click', resizeButtonClicked);
        nodes.controls.resizeHorisontal.addEventListener('click', resizeButtonClicked);

        nodes.controls.pictureButton.addEventListener('click', toggleObjectClicked);
        nodes.controls.mainTextButton.addEventListener('click', toggleObjectClicked);
        nodes.controls.headlineButton.addEventListener('click', toggleObjectClicked);
    }

    /**
    * Create cover-editor
    * @param {object} settings - array of paramertres
    * @param {Element} settings.container - element to create cover-editor
    */
    function create(container) {

        var editor = $.make('div', CSS.editor),
            controls = $.make('div', CSS.controls),
            canvas = createCanvas();

        nodes.controls.resizeSqure = $.make('span', [CSS.resizeButton, CSS.resizeButtonSquare]);
        nodes.controls.resizeVertical = $.make('span', [CSS.resizeButton, CSS.resizeButtonVertical]);
        nodes.controls.resizeHorisontal = $.make('span', [CSS.resizeButton, CSS.resizeButtonHorisontal]);
        nodes.controls.saveButton = $.make('span', [CSS.controlButton, CSS.controlButtonSave]);
        nodes.controls.pictureButton = $.make('span', CSS.controlButton, { textContent: 'Image' });
        nodes.controls.mainTextButton = $.make('span', CSS.controlButton, { textContent: 'Main Text' });
        nodes.controls.headlineButton = $.make('span', CSS.controlButton, { textContent: 'Headline' });

        /**
         * Save size in button's data-size
         */
        nodes.controls.resizeSqure.dataset.size = 'square';
        nodes.controls.resizeVertical.dataset.size = 'vertical';
        nodes.controls.resizeHorisontal.dataset.size = 'horisontal';

        /**
         * Save create element type in button's data-object
         */
        nodes.controls.mainTextButton.dataset.object = 'mainText';
        nodes.controls.headlineButton.dataset.object = 'headline';
        nodes.controls.pictureButton.dataset.object = 'picture';

        for (var buttonName in nodes.controls) {

            controls.appendChild(nodes.controls[buttonName]);
        }

        editor.appendChild(controls);
        editor.appendChild(canvas);

        container.appendChild(editor);

        bindEvents();
    }

    return {
        create: create
    };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOM elements manipulations
 */
var Dom = function () {
    function Dom() {
        _classCallCheck(this, Dom);
    }

    _createClass(Dom, null, [{
        key: 'make',


        /**
        * Helper for making Elements with classname and attributes
        * @param  {string} tagName           - new Element tag name
        * @param  {array|string} classNames  - list or name of CSS classname(s)
        * @param  {Object} attributes        - any attributes
        * @return {Element}
        */
        value: function make(tagName, classNames, attributes) {

            var el = document.createElement(tagName);

            if (Array.isArray(classNames)) {
                var _el$classList;

                (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
            } else if (classNames) {

                el.classList.add(classNames);
            }

            for (var attrName in attributes) {

                el[attrName] = attributes[attrName];
            }
            return el;
        }

        /**
        * Creates SVG element
        *
        * @param {string} tag - element tag name
        * @param {object} param - parametrs
        *
        * @returns {Element} new created svg tag
        */

    }, {
        key: 'svg',
        value: function svg(tag, param) {

            var n = document.createElementNS('http://www.w3.org/2000/svg', tag);

            for (var p in param) {

                n.setAttributeNS(null, p, param[p]);
            }

            return n;
        }
    }]);

    return Dom;
}();

exports.default = Dom;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map