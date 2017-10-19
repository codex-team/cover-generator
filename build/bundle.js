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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/***/ }),
/* 1 */
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

  __webpack_require__(2);

  /**
   * User Interface module
   */
  var ui = __webpack_require__(3);

  /**
   * Canvas module
   * @type {Canvas}
   */
  // let Canvas = require('./canvas').default;

  /**
   * Toolbar module
   */
  var Toolbar = __webpack_require__(4).default;

  var toolbarInstance = new Toolbar();

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
    var nodes = ui.create(container);

    // let canvas = new Canvas({
    //     canvas: nodes.canvas
    // });
    //
    //

    toolbarInstance.prepare({
      editor: nodes.editor,
      canvas: nodes.canvas
    });

    console.log('toolbarInstance: %o', toolbarInstance);
  };

  /**
   * Destories UI
   */
  var destroy = function destroy() {};

  return {
    init: init,
    destroy: destroy,
    toolbar: toolbarInstance
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * User interface module
 */
module.exports = function () {

    'use strict';

    var $ = __webpack_require__(0).default;

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
        editor: null,
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

        /**
         * Test
         *
         * Open toolbar near button
         */
        codex.cover.toolbar.openNear({
            target: button
        });
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

        nodes.editor = $.make('div', CSS.editor);

        var controls = $.make('div', CSS.controls),
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

        nodes.editor.appendChild(controls);
        nodes.editor.appendChild(canvas);

        container.appendChild(nodes.editor);

        bindEvents();

        return nodes;
    }

    return {
        create: create
    };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOM utility
 */
var $ = __webpack_require__(0).default;

/**
 *   Creates a toolbar
 *   @class Toolbar
 *
 *
 *  @property {Object} this.tree — toolbar nodes
 *  @property {Object} this.CSS  — styles dictionary
 *  @property {Element} this.editor  — main editor wrapper
 *  @property {Element} this.canvas  — main canvas SVG

 *  @property {Element} this.target  — on which element toolbar was open
 *
 *   @param {Element} elem                             - element on a canvas which properties will be changed by toolbar
 *   @param {Canvas} canvas                            - object of canvas where controllable element is located
 *   @param {Object} properties                        - object containing additional properties for toolbar
 *   @param {number} properties.padding                - size of padding between toolbar and controllable element
 *   @param {number} properties.elementAlignPadding    - size of padding between the border of canvas and controllable element in %
 *   @return {Toolbar}
 */

var Toolbar = function () {

    /**
     * @constructor
     *
     * Toolbar module
     */
    function Toolbar() {
        _classCallCheck(this, Toolbar);

        /**
         * On which element toolbar was open
         * @type {Element|null}
         */
        this.target = null;

        /**
         * DOM Elements
         * @type {Object}
         */
        this.tree = {
            toolbar: undefined,
            buttons: {
                fontSize: undefined,
                left: undefined,
                center: undefined,
                right: undefined,
                color: undefined
            },
            colorForm: undefined
        };

        /**
         * CSS classnames
         * @type {Object}
         */
        this.CSS = {
            hidden: 'cover-editor__hidden',
            toolbar: {
                colorMode: 'cover-editor__toolbar--color_mode',
                normal: 'cover-editor__toolbar'
            },
            controllable: {
                active: 'cover-editor__text--active',
                fontSize: ['cover-editor__text--small', 'cover-editor__text--medium', 'cover-editor__text--big']
            },
            button: 'cover-editor__toolbar-button',
            buttons: {
                active: 'cover-editor__toolbar-button--active',
                left: 'cover-editor__toolbar-button--left',
                center: 'cover-editor__toolbar-button--center',
                right: 'cover-editor__toolbar-button--right',
                fontSize: 'cover-editor__toolbar-button--font-size',
                fontSizes: {
                    small: 'cover-editor__toolbar-button--small',
                    medium: 'cover-editor__toolbar-button--medium',
                    big: 'cover-editor__toolbar-button--big'
                },
                color: 'cover-editor__toolbar-button--color'
            },
            colorForm: 'cover-editor__toolbar-color-form'
        };
    }

    /**
     *  Prepares toolbar elements
     *
     * @param  {object} params
     * @param  {Element} params.editor - main wrapper
     * @param  {Element} params.cancas - main svg canvas
     */


    _createClass(Toolbar, [{
        key: 'prepare',
        value: function prepare(params) {

            /**
             * Main Editor wrapper
             * @type {Element}
             */
            this.editor = params.editor;

            this.make();
        }

        /**
         * Creates toolbar
         */

    }, {
        key: 'make',
        value: function make() {
            var _this = this;

            // tree.controllable = elem;
            // tree.controllable.classList.add(styles.controllable.fontSize[0]);
            // tree.controllable.addEventListener('dblclick', showToolbar.bind(this));

            this.tree.toolbar = $.make('div', [this.CSS.toolbar.normal]);

            /**
             * Add buttons
             */
            ['fontSize', 'left', 'center', 'right', 'color'].forEach(function (type) {

                var button = $.make('span', [_this.CSS.button, _this.CSS.buttons[type]]);

                _this.tree.toolbar.appendChild(button);
                _this.tree.buttons[type] = button;

                /**
                 * Save action in the button's dataset
                 */
                button.dataset.action = type;

                button.addEventListener('click', function (event) {

                    _this.buttonClicked(event);
                });
            });

            /**
             * @todo  Add color form
             */

            /**
             * Append toolbar to the Editor
             */
            this.editor.appendChild(this.tree.toolbar);
        }

        /**
         * Toolbar button click handler
         * @param  {MouseEvent} event  - click on the button
         */

    }, {
        key: 'buttonClicked',
        value: function buttonClicked(event) {

            var buttonClicked = event.target,
                action = buttonClicked.dataset.action;

            console.log('clicked: %o', action);

            switch (action) {

                case 'fontSize':
                    this.changeFontSize();
                    break;

                case 'left':
                case 'center':
                case 'right':
                    this.changeAlignment(action);
                    break;

                case 'color':
                    this.openColorForm();

            }
        }
    }, {
        key: 'changeFontSize',
        value: function changeFontSize() {

            console.log('changeFontSize: %o');
        }
    }, {
        key: 'changeAlignment',
        value: function changeAlignment(alignment) {

            console.log('alignment: %o', alignment);
        }
    }, {
        key: 'openColorForm',
        value: function openColorForm() {

            console.log('openColorForm: %o');
        }

        /**
         * Opens toolbar near element
         *
         * @param {Object} opitons
         * @param {Element} options.target - element to show toolbar
         */

    }, {
        key: 'openNear',
        value: function openNear(_ref) {
            var target = _ref.target;


            this.target = target;

            /**
             * @todo  Move toolbar to the target
             */

            /**
             * @todo  Open toolbar
             */

            console.log('now we need to open toolbar near: %o', this.target);
        }
    }, {
        key: 'hide',
        value: function hide() {

            this.target = null;
        }

        /**
        *   Moving toolbar to the controllable element
        *   @private
        *   @param {void}
        *   @return {void}
        */
        // changeToolbarPosition() {

        //     var canvasCoords = canvas.svg.getBoundingClientRect(),
        //         controllableCoords = tree.controllable.getBoundingClientRect();

        //     tree.toolbar.style.left = controllableCoords.left - canvasCoords.left + (tree.controllable.clientWidth - tree.toolbar.clientWidth)/2 + 'px';
        //     tree.toolbar.style.top = controllableCoords.top - canvasCoords.top - tree.controllable.clientHeight - properties.padding + 'px';

        // }

        /**
        *   Showing toolbar after clicking on controllable element
        *   @private
        *   @param {void}
        *   @return {void}
        */
        // showToolbar() {

        //     if (tree.toolbar.classList.contains(styles.hidden)) {

        //         if (window.getSelection) {

        //             window.getSelection().removeAllRanges();

        //         } else {

        //             document.selection.empty();

        //         }
        //         tree.toolbar.classList.remove(styles.hidden);

        //     }
        //     tree.controllable.classList.add(styles.controllable.active);
        //     changeToolbarPosition();

        // }

        /**
        *   Hiding toolbar after controllable element has been unfocused
        *   @private
        *   @param {Event} event - event of clicking on body
        *   @return {void}
        */
        // hideToolbar(event) {

        //     if (event.target !== tree.controllable && event.target.parentNode !== tree.toolbar && event.target !== tree.toolbar) {

        //         tree.controllable.classList.remove(styles.controllable.active);
        //         tree.toolbar.classList.add(styles.hidden);

        //     }

        // }

        /**
        *   Chenging color of color button in toolbar after valid CSS color string has been written in colorForm element
        *   @private
        *   @param {Event} event - event of keyup in colorForm field in toolbar
        *   @return {void}
        */
        // changeToolbarColorButtonColor(event) {

        //     tree.buttons.color.style.backgroundColor = event.target.value;

        // }

        /**
        *   Unhiding or hiding color input field in toolbar
        *   @private
        *   @param {Event} event - event of click  on color button in toolbar
        *   @return {void}
        */
        // toggleToolbarColorMode() {

        //     if (tree.toolbar.contains(styles.toolbar.colorMode)) {

        //         tree.toolbar.classList.add(styles.toolbar.colorMode);

        //     } else {

        //         tree.toolbar.classList.add(styles.toolbar.colorMode);
        //         canvas.setTextColor(tree.controllable, window.getComputedStyle(tree.controllable).color);

        //     }

        // }

        /**
        *   Changes a font size of controllable element after clicking on fontSize button
        *   @private
        *   @param {Event} event - event of click on fontSize button
        *   @return {void}
        */
        // changeControllableFontSize(event) {

        //     event.target.classList.remove(styles.buttons.fontSize[event.target.dataset.fontSize]);
        //     tree.controllable.classList.remove(styles.controllable.fontSize[event.target.dataset.fontSize]);
        //     event.target.dataset.fontSize += 1;
        //     event.target.dataset.fontSize %= styles.buttons.fontSize.length;
        //     event.target.classList.add(styles.buttons.fontSize[event.target.dataset.fontSize]);
        //     tree.controllable.classList.add(styles.controllable.fontSize[event.target.dataset.fontSize]);

        //     changeToolbarPosition();

        // }

        /**
        *   Changes position of controllable element after clicking on left/center/right button
        *   @private
        *   @param {Event} event - event of click on left/center/right button
        *   @return {void}
        */
        // changeControllableAlign(event) {

        //     tree.buttons.left.classList.remove(styles.buttons.active);
        //     tree.buttons.center.classList.remove(styles.buttons.active);
        //     tree.buttons.right.classList.remove(styles.buttons.active);
        //     event.target.classList.add(styles.buttons.active);

        //     var canvasShape = {'width': canvas.clientWidth, 'height': canvas.clientHeight},
        //         controllableShape = {'width': tree.controllable.clientWidth, 'height': tree.controllable.clientHeight};

        //     if (event.target.classList.contains(styles.buttons.left)) {

        //         canvas.setTextPosition(tree.controllable, canvasShape.width/properties.elementAlignPadding, tree.controllable.getAttribute('y'));

        //     } else if (event.target.classList.contains(styles.buttons.center)) {

        //         canvas.setTextPosition(tree.controllable, (canvasShape.width - tree.controllableShape.width)/2, tree.controllable.getAttribute('y'));

        //     } else if (event.target.classList.contains(styles.buttons.right)) {

        //         canvas.setTextPosition(tree.controllable, canvasShape.width - controllableShape.width - canvasShape.width/properties.elementAlignPadding, tree.controllable.getAttribute('y'));

        //     }
        //     changeToolbarPosition();

        // }

    }]);

    return Toolbar;
}();

exports.default = Toolbar;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map