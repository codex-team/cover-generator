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
  var Canvas = __webpack_require__(4).default,
      Toolbar = __webpack_require__(5).default;

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

    var canvasInstance = new Canvas(),
        toolbarInstance = new Toolbar();

    /**
     * Make interface and bind events
     */
    var nodes = ui.create(container, canvasInstance, toolbarInstance);
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
        headline: 'cover-editor__control-button--headline',
        mainText: 'cover-editor__control-button--mainText',
        image: 'cover-editor__control-button--image',
        controlButtonSave: 'cover-editor__control-button--save',

        canvasWrapper: 'cover-editor__canvas-wrapper',
        canvas: 'cover-editor__canvas',
        canvasActive: 'cover-editor__canvas-wrapper--active'
    };

    /**
     * Static instances
     * @type {Object}
     */
    var instances = {
        canvas: null,
        toolbar: null
    };

    /**
     * Static nodes cache
     * @type {Object}
     */
    var nodes = {
        currentText: null,
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
        },
        currentCanvasEditing: null
    };

    /**
     * Counter in function canvasClicked
     */
    var i = 0;

    /**
     * Make canvas active
     */
    function canvasClicked() {

        if (i % 2 == 0) {

            nodes.canvasWrapper.classList.add(CSS.canvasActive);
            i++;
        } else {

            nodes.canvasWrapper.classList.remove(CSS.canvasActive);
            i--;
        }

        instances.toolbar.hide();
    }

    /**
     * Save button click listener
     */
    function saveButtonClicked() {

        instances.canvas.import();
    }

    /**
     * Resize button click listener
     * @param {MouseEvent} event — click
     */
    function resizeButtonClicked(event) {

        var button = event.target,
            size = button.dataset.size;

        ['resizeSqure', 'resizeVertical', 'resizeHorisontal'].forEach(function (header) {

            nodes.controls[header].classList.remove(CSS.resizeButtonActive);
        });

        event.target.classList.add(CSS.resizeButtonActive);
        instances.canvas.setCanvasFormat(size);
    }

    /**
     * Show and hide button click listener
     * @param  {MouseEvent} event  - click
     */
    function toggleObjectClicked(event) {

        var button = event.target,
            object = button.dataset.object,
            element = instances.canvas.createElement(object);

        element.addEventListener('click', function (e) {

            if (e.target.tagName === 'DIV') {

                instances.toolbar.openNear({ target: e.target.parentNode });
                return;
            }

            instances.toolbar.openNear({ target: e.target });
        });
        element.dispatchEvent(new window.Event('click'));
    }

    /**
     * Bind necessary event to manupulate controls
     */
    function bindEvents() {

        nodes.canvasWrapper.addEventListener('click', canvasClicked);

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
    function create(container, canvasInstance, toolbarInstance) {

        var editor = $.make('div', CSS.editor),
            controls = $.make('div', CSS.controls);

        instances.canvas = canvasInstance;
        instances.toolbar = toolbarInstance;

        nodes.canvasWrapper = $.make('div', CSS.canvasWrapper);
        nodes.canvas = instances.canvas.create(nodes.canvasWrapper);
        nodes.controls.resizeSqure = $.make('span', [CSS.resizeButton, CSS.resizeButtonSquare]);
        nodes.controls.resizeVertical = $.make('span', [CSS.resizeButton, CSS.resizeButtonVertical]);
        nodes.controls.resizeHorisontal = $.make('span', [CSS.resizeButton, CSS.resizeButtonHorisontal]);
        nodes.controls.saveButton = $.make('span', [CSS.controlButton, CSS.controlButtonSave]);
        nodes.controls.pictureButton = $.make('span', [CSS.controlButton, CSS.image], { textContent: 'Image' });
        nodes.controls.mainTextButton = $.make('span', [CSS.controlButton, CSS.mainText], { textContent: 'Main Text' });
        nodes.controls.headlineButton = $.make('span', [CSS.controlButton, CSS.headline], { textContent: 'Headline' });

        /**
         * Save size in button's data-size
         */
        nodes.controls.resizeSqure.dataset.size = 'square';
        nodes.controls.resizeVertical.dataset.size = 'vertical';
        nodes.controls.resizeHorisontal.dataset.size = 'horisontal';
        nodes.controls.resizeHorisontal.classList.add(CSS.resizeButtonActive);

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
        nodes.canvasWrapper.appendChild(nodes.canvas);
        editor.appendChild(nodes.canvasWrapper);

        container.appendChild(editor);

        instances.toolbar.create(editor, nodes.canvas, instances.canvas);

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
 * Canvas module
 */

var Canvas = function () {

    /**
     * Initialisation of canvas module
     * @param {Object} properties               - object with properties for canvas creating
     * @param {String|Object} properties.shape  - type of format, can be 'horisontal', 'square' or 'vertical'
     * @param {Number} properties.shape.width   - width of canvas
     * @param {Number} properties.shape.height  - height of canvas
     */
    function Canvas(properties) {
        _classCallCheck(this, Canvas);

        this.tree = {
            svg: null
        };

        this.CSS = {
            elements: {
                text: 'cover-editor__canvas--text'
            }
        };

        this.formats = {
            vertical: { width: 510, height: 560 },
            horisontal: { width: 650, height: 370 },
            square: { width: 510, height: 510 }
        };

        this.positions = {
            mainText: { x: undefined, y: 271 },
            image: { x: undefined, y: 132 },
            headline: { x: undefined, y: 115 }
        };

        this.padding = 30;
    }

    /**
     * Creates an SVG DOMElement
     *
     * @return {Element} - created SVG
     */


    _createClass(Canvas, [{
        key: 'create',
        value: function create() {

            this.tree.rectangle = $.svg('rect', { fill: '#FFFFFF' });
            this.setSize(this.tree.rectangle, this.formats.horisontal);

            this.tree.svg = $.svg('svg');
            this.setCanvasFormat('horisontal');
            this.tree.svg.appendChild(this.tree.rectangle);

            return this.tree.svg;
        }

        /**
         * Changing the sizes of canvas by using format
         * @param {String} format - type of format, can be 'horisontal', 'square' or 'vertical'
         */

    }, {
        key: 'setCanvasFormat',
        value: function setCanvasFormat(format) {

            this.setSize(this.tree.svg, this.formats[format]);
            this.setSize(this.tree.rectangle, this.formats[format]);
        }

        /**
         * Changes the sizes of svg element
         *
         * @param {Element} element    - element to change size
         * @param {Object|String} size - sizes of canvas, if string, then 'auto'
         * @param {Number} size.width  - width of canvas
         * @param {Number} size.height - height of canvas
         */

    }, {
        key: 'setSize',
        value: function setSize(element, size) {

            if (size === 'auto' && (element.dataset.type === 'mainText' || element.dataset.type === 'headline')) {

                var text = element.children[0];

                element.setAttribute('width', this.tree.svg.clientWidth);
                element.setAttribute('height', this.tree.svg.clientHeight);
                size = { width: text.offsetWidth + 10, height: text.offsetHeight + 10 };
            }

            size.height ? element.setAttribute('height', size.height) : null;
            size.width ? element.setAttribute('width', size.width) : null;
        }

        /**
         * Changes the color of svg element
         *
         * @param {Element} element - element to change size
         * @param {String} color    - color of text to set
         */

    }, {
        key: 'setColor',
        value: function setColor(element, color) {

            element.children[0].style.color = color;
        }

        /**
         * Changes the font size of svg element
         *
         * @param {Element} element    - element to change size
         * @param {Number} size        - size of text to set
         */

    }, {
        key: 'setFontSize',
        value: function setFontSize(element, size) {

            element.children[0].style.fontSize = size;
            this.setSize(element, 'auto');
            this.setPosition(element, { x: element.dataset.alignment, y: undefined });
        }

        /**
         * Changes a position of element
         *
         * @param {Element}                - element to change position
         * @param {Object|String} coords   - where to place text on canvas
         * @param {Number} coords.x        - x coord
         * @param {Number} coords.y        - y coord
         */

    }, {
        key: 'setPosition',
        value: function setPosition(element, coords) {

            if (typeof coords === 'string') {

                coords = this.positions[coords];
            }

            if (!coords) {

                return;
            }

            var canvasSizes = { width: this.tree.svg.clientWidth, height: this.tree.svg.clientWidth },
                elementSizes = { width: element.clientWidth + 5, height: element.clientWidth + 5 },
                isText = element.dataset.type === 'mainText' || element.dataset.type === 'headline';

            if (coords.x === 'left') {

                isText ? element.children[0].style.textAlign = coords.x : null;
                coords.x = this.padding;
            } else if (coords.x === 'center') {

                isText ? element.children[0].style.textAlign = coords.x : null;
                coords.x = (canvasSizes.width - elementSizes.width) / 2;
            } else if (coords.x === 'right') {

                isText ? element.children[0].style.textAlign = coords.x : null;
                coords.x = canvasSizes.width - elementSizes.width - this.padding;
            }

            coords.y ? element.setAttribute('y', coords.y) : null;
            coords.x ? element.setAttribute('x', coords.x) : null;
        }

        /**
         * Creates an text element
         *
         * @param {Object|String} coords   - where to place text on canvas
         * @param {Number} coords.x        - x coord
         * @param {Number} coords.y        - y coord
         * @return {Element}               - created text
         */

    }, {
        key: 'createText',
        value: function createText(coords) {
            var _this = this;

            var text = $.make('div'),
                container = $.svg('foreignObject'),
                position = this.positions[coords];

            text.classList.add(this.CSS.elements.text);
            text.innerHTML = 'New text';
            text.style.display = 'inline-flex';
            text.setAttribute('contenteditable', true);
            text.addEventListener('keyup', function (event) {

                _this.setSize(event.target.parentNode, 'auto');
                _this.setPosition(event.target.parentNode, { x: event.target.parentNode.dataset.alignment, y: undefined });
            });
            container.dataset.type = coords;
            container.appendChild(text);
            this.tree.svg.appendChild(container);

            position.x = 'left';
            this.setSize(container, 'auto');
            this.setPosition(container, coords);

            return container;
        }

        /**
         * Sets text element
         *
         * @param {Element} coords - where to place inner text
         * @param {String} text    - text to append
         */

    }, {
        key: 'setInnerText',
        value: function setInnerText(element, text) {

            if (element instanceof window.Element) {

                element.textContent = text;
            }
        }

        /**
         * Creates an image element
         *
         * @param {Object|String} coords   - where to place image on canvas
         * @param {Number} coords.x        - x coord
         * @param {Number} coords.y        - y coord
         * @return {Element}               - created image
         */

    }, {
        key: 'createImage',
        value: function createImage(coords) {

            var image = $.svg('image');

            this.setPosition(image, coords);
            this.setSize(image, { width: '87', height: '87' });
            this.tree.svg.appendChild(image);

            return image;
        }

        /**
         * Creates elements from parameter
         *
         * @param {String} - type of elements: 'mainText', 'headline', 'image'
         */

    }, {
        key: 'createElement',
        value: function createElement(element) {

            if (element === 'mainText' || element === 'headline') {

                return this.createText(element);
            } else if (element === 'image') {

                return this.createImage(element);
            }
        }

        /**
         * Export canvas as SVG file
         */

    }, {
        key: 'import',
        value: function _import() {

            var serializer = new window.XMLSerializer(),
                source = serializer.serializeToString(this.tree.svg);

            if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {

                source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
            }
            if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {

                source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
            }

            source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

            var link = document.createElement('a');

            link.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source));
            link.setAttribute('download', 'cover.svg');

            link.style.display = 'none';
            document.body.appendChild(link);

            link.click();
            document.body.removeChild(link);
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 5 */
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
         * Components which are controlling something.
         * @type {Object}
         */
        this.instances = {
            canvas: null
        };

        /**
         * On which element toolbar was open
         * @type {Element|null}
         */
        this.target = null;
        this.properties = {
            fontSize: {
                small: '25px',
                medium: '28px',
                big: '31px'
            }
        };

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
            target: {
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
     * @param  {Element} editor         - main wrapper
     * @param  {Element} canvasInstance - canvas object
     */


    _createClass(Toolbar, [{
        key: 'create',
        value: function create(editor, canvas, canvasInstance) {

            /**
             * Main Editor wrapper
             * @type {Element}
             */
            this.editor = editor;
            this.canvas = canvas;
            this.instances.canvas = canvasInstance;

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

            this.tree.toolbar = $.make('div', [this.CSS.toolbar.normal, this.CSS.hidden]);

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
             * Add color form
             */
            this.tree.colorForm = $.make('input', [this.CSS.colorForm]);
            this.tree.toolbar.insertBefore(this.tree.colorForm, this.tree.buttons.color);

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
                action = event.target.dataset.action;

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
                    this.changeColorMode();
                    break;

            }
        }

        /**
         * Changes font size of target
         * @param {Integer} fontSize - number of font size
         */

    }, {
        key: 'changeFontSize',
        value: function changeFontSize(fontSize) {

            var current = this.target.dataset.fontSize;

            if (current == 'small') {

                current = 'medium';
            } else if (current == 'medium') {

                current = 'big';
            } else if (current == 'big') {

                current = 'small';
            } else {

                return;
            }

            this.target.dataset.fontSize = current;
            this.instances.canvas.setFontSize(this.target, this.properties.fontSize[current]);
            this.moveToTarget();
        }

        /**
         * Opens toolbar near element
         * @param {String} alignment - alignment of target: 'left', 'center' or 'right'
         */

    }, {
        key: 'changeAlignment',
        value: function changeAlignment(alignment) {
            var _this2 = this;

            this.target.dataset.alignment = alignment;

            ['left', 'center', 'right'].forEach(function (type) {

                _this2.tree.buttons[type].classList.remove(_this2.CSS.buttons.active);
            });

            this.instances.canvas.setPosition(this.target, { x: alignment, y: undefined });
            this.moveToTarget();
        }

        /**
         * Changes color of target and toolbar color button
         * @param {String} color - color of target
         */

    }, {
        key: 'changeColor',
        value: function changeColor(color) {

            this.instances.canvas.setColor(this.target, color);
            this.target.dataset.color = color;
            this.tree.buttons.color.style.background = color;
        }

        /**
         * Toggles color mode of toolbar
         */

    }, {
        key: 'changeColorMode',
        value: function changeColorMode() {

            if (this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)) {

                this.changeColor(this.tree.colorForm.value);
                this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode);
            } else {

                this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode);
            }

            this.moveToTarget();
        }

        /**
         * Moves toolbar to target
         */

    }, {
        key: 'moveToTarget',
        value: function moveToTarget() {

            var element = this.target,
                relatively = { left: this.canvas.parentNode.offsetLeft, top: this.canvas.parentNode.offsetTop },
                to = { left: window.Number(element.getAttribute('x')), top: window.Number(element.getAttribute('y')) };

            if (this.target.dataset.alignment === 'left') {

                this.tree.toolbar.style.left = relatively.left + to.left + 'px';
            } else if (this.target.dataset.alignment === 'center') {

                this.tree.toolbar.style.left = relatively.left + to.left + (element.clientWidth - this.tree.toolbar.clientWidth) / 2 + 'px';
            } else if (this.target.dataset.alignment === 'right') {

                this.tree.toolbar.style.left = relatively.left + to.left + this.target.clientWidth - this.tree.toolbar.clientWidth + 'px';
            }

            this.tree.toolbar.style.top = relatively.top + to.top - this.tree.toolbar.clientHeight + 'px';
        }

        /**
         * Reads states of buttons from target
         */

    }, {
        key: 'getTargetParams',
        value: function getTargetParams() {

            if (this.target.dataset.fontSize == undefined) {

                this.target.dataset.fontSize = 'small';
                this.changeFontSize(this.target.dataset.fontSize);
            }

            if (this.target.dataset.alignment == undefined) {

                this.target.dataset.alignment = 'left';
                this.changeAlignment(this.target.dataset.alignment);
            }

            if (this.target.dataset.color == undefined) {

                this.target.dataset.color = '#000000';
                this.changeColor(this.target.dataset.color);
            }
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
            this.tree.toolbar.classList.remove(this.CSS.hidden);
            this.moveToTarget();
            this.getTargetParams();
        }

        /**
         * Clears buttons states in toolbar
         */

    }, {
        key: 'removeTargetParams',
        value: function removeTargetParams() {

            // this.target.classList.add(this.CSS.target.fontSizes[this.target.dataset.fontSize]);
            // this.tree.toolbar.classList.add(this.CSS.toolbar.fontSize[this.target.dataset.fontSize]);

            this.tree.buttons.left.classList.remove(this.CSS.buttons.active);
            this.tree.buttons.center.classList.remove(this.CSS.buttons.active);
            this.tree.buttons.right.classList.remove(this.CSS.buttons.active);
        }

        /**
         * Hides a toolbar
         */

    }, {
        key: 'hide',
        value: function hide() {

            console.log('hide');
            this.removeTargetParams();
            this.target = null;
            this.tree.toolbar.classList.add(this.CSS.hidden);
        }
    }]);

    return Toolbar;
}();

exports.default = Toolbar;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map