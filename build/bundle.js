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
     *
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
        headlineControl: 'cover-editor__control-button--headline',
        mainTextControl: 'cover-editor__control-button--main-text',
        imageControl: 'cover-editor__control-button--image',
        controlButtonSave: 'cover-editor__control-button--save',

        canvasWrapper: 'cover-editor__canvas-wrapper',
        canvas: 'cover-editor__canvas',
        canvasActive: 'cover-editor__canvas-wrapper--active'
    };

    /**
     * Static instances
     *
     * @type {Object}
     */
    var instances = {
        canvas: null,
        toolbar: null
    };

    /**
     * Static nodes cache
     *
     * @type {Object}
     */
    var nodes = {
        mainTextElement: null,
        headlineElement: null,
        pictureElement: null,
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
     * Make canvas active
     *
     * @param {event} - click
     */
    function canvasClicked(event) {

        if (event.target.classList.contains(CSS.canvasWrapper) || event.target.tagName == 'rect') {

            instances.toolbar.hide();
            nodes.canvasWrapper.classList.add(CSS.canvasActive);
        } else {

            nodes.canvasWrapper.classList.remove(CSS.canvasActive);
        }
    }

    /**
     * Save button click listener
     */
    function saveButtonClicked() {

        instances.canvas.export();
    }

    /**
     * Resize button click listener
     *
     * @param {MouseEvent} event — click
     */
    function resizeButtonClicked(event) {

        var button = event.target,
            size = button.dataset.size;

        ['resizeSqure', 'resizeVertical', 'resizeHorisontal'].forEach(function (header) {

            nodes.controls[header].classList.remove(CSS.resizeButtonActive);
        });

        event.target.classList.add(CSS.resizeButtonActive);
        instances.toolbar.hide();
        instances.canvas.setCanvasFormat(size);
    }

    /**
     * Control buttons click listener
     *
     * @param  {MouseEvent} event  - click
     */
    function controlButtonsClicked(event) {

        var button = event.target,
            object = button.dataset.object;

        createElement(object);
    }

    /**
     * Create element and add to canvas
     *
     * @param {String} elementType - type of element
     */
    function createElement(elementType) {

        /**
         * Check if elementType has already created
         */
        if (nodes[elementType]) {

            return;
        }

        nodes[elementType] = instances.canvas.createElement(elementType);
        nodes[elementType].addEventListener('click', elementClickedHandler);
        showToolbar(nodes[elementType]);
    }

    /**
     * Show toolbar
     *
     * @param {Element} element - element at the canvas
     */
    function showToolbar(element) {

        instances.toolbar.openNear(element);
    }

    /**
     * Handle click on canvas elements to show toolbar near clicked one
     */
    function elementClickedHandler() {

        showToolbar(this);
    }

    /**
     * Bind necessary event to manupulate controls
     */
    function bindEvents() {

        document.body.addEventListener('click', canvasClicked);

        nodes.controls.saveButton.addEventListener('click', saveButtonClicked);

        nodes.controls.resizeSqure.addEventListener('click', resizeButtonClicked);
        nodes.controls.resizeVertical.addEventListener('click', resizeButtonClicked);
        nodes.controls.resizeHorisontal.addEventListener('click', resizeButtonClicked);

        nodes.controls.pictureButton.addEventListener('click', controlButtonsClicked);
        nodes.controls.mainTextButton.addEventListener('click', controlButtonsClicked);
        nodes.controls.headlineButton.addEventListener('click', controlButtonsClicked);
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
        nodes.controls.pictureButton = $.make('span', [CSS.controlButton, CSS.imageControl], { textContent: 'Image' });
        nodes.controls.mainTextButton = $.make('span', [CSS.controlButton, CSS.mainTextControl], { textContent: 'Main Text' });
        nodes.controls.headlineButton = $.make('span', [CSS.controlButton, CSS.headlineControl], { textContent: 'Headline' });

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
 *
 * @property {Object} tree               - object with links to DOM-Elements of Canvas
 * @property {Object} CSS                - object with CSS-styles of the Canvas
 * @property {String} newText            - string with text showing in main text and headline by default
 * @property {Object} formats            - types of sizes of the canvas block
 * @property {Object} sizes              - sizes of canvas block
 * @property {Object} alignment          - types of alignment
 * @property {Object} elements           - types of elements on canvas
 * @property {Number} paddingOfElement   - space field around the text element
 * @property {Number} paddingOfCanvas    - padding between elements and the canvas
 * @property {Number} imageSize          - size of image in px
 * @property {Object} colors             - default colors
 */

var Canvas = function () {

    /**
     * Initialization of canvas module
     */
    function Canvas() {
        _classCallCheck(this, Canvas);

        /**
         * DOM of this class
         */
        this.tree = {
            svg: null
        };

        this.CSS = {
            text: 'cover-editor__canvas--text'
        };

        /**
         * Const with value: 'New Text'
         */
        this.newText = 'New Text';

        /**
         * Size formats of canvas
         */
        this.formats = {
            vertical: 'vertical',
            horisontal: 'horisontal',
            square: 'square'
        };

        /**
         * Sizes of canvas
         */
        this.sizes = {
            vertical: { width: 510, height: 560 },
            horisontal: { width: 650, height: 370 },
            square: { width: 510, height: 510 }
        };

        /**
         * Alignment elements at canvas
         */
        this.alignment = {
            x: {
                left: 'left',
                right: 'right',
                center: 'center'
            },
            y: {
                top: 'top',
                center: 'center',
                bottom: 'bottom'
            }
        };

        /**
         * Types of elements at canvas
         */
        this.elements = {
            mainText: 'mainText',
            image: 'image',
            headline: 'headline'
        };

        /**
         * Space between elements
         */
        this.alignmentPadding = 17;

        /**
         * Space field around the text element
         */
        this.paddingOfElement = 10;

        /**
         * Padding between elements and th canvas
         */
        this.paddingOfCanvas = 30;

        /**
         * Size of image
         */
        this.imageSize = 87;

        /**
         * Colors of this module
         */
        this.colors = {
            mainSVGcolor: '#FFFFFF'
        };
    }

    /**
     * Check if element is text
     *
     * @param {Element} - object
     */


    _createClass(Canvas, [{
        key: 'isText',
        value: function isText(element) {

            if ([this.elements.headline, this.elements.mainText].indexOf(element.dataset.type) != -1 && element.children.length) {

                return true;
            } else {

                return false;
            }
        }

        /**
         * Creates an SVG DOMElement
         *
         * @return {Element} - created SVG
         */

    }, {
        key: 'create',
        value: function create() {

            this.tree.rectangle = $.svg('rect', { fill: this.colors.mainSVGcolor });
            this.setSize(this.tree.rectangle, this.sizes.horisontal);

            this.tree.svg = $.svg('svg');
            this.setCanvasFormat(this.formats.horisontal);
            this.tree.svg.appendChild(this.tree.rectangle);

            return this.tree.svg;
        }

        /**
         * Changing the sizes of canvas by using format
         *
         * @param {String} format - type of format, can be 'horisontal', 'square' or 'vertical'
         */

    }, {
        key: 'setCanvasFormat',
        value: function setCanvasFormat(format) {

            this.setSize(this.tree.svg, this.sizes[format]);
            this.setSize(this.tree.rectangle, this.sizes[format]);

            for (var counter = 0; counter < this.tree.svg.children.length; counter++) {

                var element = this.tree.svg.children[counter];

                switch (element.dataset.type) {

                    case this.elements.headline:

                        this.setAlignment(element, undefined, this.alignment.y.top);
                        break;

                    case this.elements.image:

                        this.setAlignment(element, undefined, this.alignment.y.center);
                        break;

                    case this.elements.mainText:

                        this.setAlignment(element, undefined, this.alignment.y.bottom);
                        break;

                }

                this.setAlignment(element, element.dataset.alignment);
            }
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

            if (size === 'auto' && this.isText(element)) {

                var text = element.querySelector('div[contenteditable="true"]');

                element.setAttribute('width', this.tree.svg.clientWidth);
                element.setAttribute('height', this.tree.svg.clientHeight);
                size = {
                    width: text.offsetWidth + this.paddingOfElement,
                    height: text.offsetHeight + this.paddingOfElement
                };
            }

            if (size.height) {

                element.setAttribute('height', size.height);
            }

            if (size.width) {

                element.setAttribute('width', size.width);
            }
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

            if (!this.isText(element)) return;

            element.querySelector('div[contenteditable="true"]').style.color = color;
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

            if (!this.isText(element)) return;

            element.querySelector('div[contenteditable="true"]').style.fontSize = size;
            this.setSize(element, 'auto');
            this.setAlignment(element, element.dataset.alignment);
        }

        /**
         * Sets the alignment of the element at the canvas
         *
         * @param {Element} element   - element to change alignment
         * @param {String} horisontal - type of alignment on horisontal
         * @param {String} vertical   - type of alignment on verlical
         */

    }, {
        key: 'setAlignment',
        value: function setAlignment(element, horisontal, vertical) {

            var canvasSizes = {
                width: this.tree.svg.clientWidth,
                height: this.tree.svg.clientHeight
            },
                elementSizes = {
                width: window.Number(element.getAttribute('width')),
                height: window.Number(element.getAttribute('height'))
            };

            // console.log('%o\n%s\n%s', element, horisontal, vertical);

            switch (horisontal) {

                case this.alignment.x.left:

                    this.setPosition(element, this.paddingOfElement);
                    break;

                case this.alignment.x.center:

                    this.setPosition(element, (canvasSizes.width - elementSizes.width) / 2);
                    break;

                case this.alignment.x.right:

                    this.setPosition(element, canvasSizes.width - elementSizes.width - this.paddingOfElement);
                    break;

            }

            switch (vertical) {

                case this.alignment.y.top:

                    this.setPosition(element, undefined, (canvasSizes.height - 2 * this.alignmentPadding) / 3 - elementSizes.height);
                    break;

                case this.alignment.y.center:

                    this.setPosition(element, undefined, (canvasSizes.height - 2 * this.alignmentPadding) / 3 + this.alignmentPadding);
                    break;

                case this.alignment.y.bottom:

                    this.setPosition(element, undefined, (canvasSizes.height - 2 * this.alignmentPadding) / 3 * 2 + this.alignmentPadding * 2);
                    break;

            }

            return;
        }

        /**
         * Changes a position of element
         *
         * @param {Element} element - element to change position
         * @param {Number} x        - x coord
         * @param {Number} y        - y coord
         */

    }, {
        key: 'setPosition',
        value: function setPosition(element, x, y) {

            if (typeof y === 'number') {

                element.setAttribute('y', y);
            }

            if (typeof x === 'number') {

                element.setAttribute('x', x);
            }
        }

        /**
         * For auto resizing text
         *
         * @param {Event} event - KeyUp
         */

    }, {
        key: 'autoSizing',
        value: function autoSizing(event) {

            var target = event.target;

            this.setSize(target.parentNode, 'auto');
            this.setAlignment(target.parentNode, target.parentNode.dataset.alignment);
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
        value: function createText(type) {

            var text = $.make('div', this.CSS.text),
                container = $.svg('foreignObject'),
                y = 0;

            text.innerHTML = this.newText;
            text.setAttribute('contenteditable', true);
            text.addEventListener('keyup', this.autoSizing.bind(this));

            container.dataset.type = type;
            container.appendChild(text);
            this.tree.svg.appendChild(container);

            switch (type) {

                case this.elements.headline:

                    y = 'top';
                    break;

                case this.elements.mainText:

                    y = 'bottom';
                    break;

            }

            this.setSize(container, 'auto');
            this.setAlignment(container, this.alignment.x.left, y);

            return container;
        }

        /**
         * Creates an image element
         */

    }, {
        key: 'createImage',
        value: function createImage() {

            var image = $.svg('image');

            this.setAlignment(image, this.alignment.x.left, this.alignment.y.center);
            this.setSize(image, {
                width: this.imageSize,
                height: this.imageSize
            });
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

            if (element === this.elements.headline || element === this.elements.mainText) {

                return this.createText(element);
            } else if (element === this.elements.image) {

                return this.createImage(element);
            }
        }

        /**
         * Export canvas as SVG file
         */

    }, {
        key: 'export',
        value: function _export() {

            var serializer = new window.XMLSerializer(),
                source = serializer.serializeToString(this.tree.svg);

            /**
             * Match 'source' with regex: "xmlns="http//www.w3.org/2000/svg" between one and unlimited times and replace it
             */
            if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {

                source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
            }

            /**
             * Match 'source' with regex: "xmlns="http//www.w3.org/1999/svg" between one and unlimited times and replace it
             */
            if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {

                source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
            }

            source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

            var link = $.make('a', null, {
                'style': 'display:none;',
                'href': 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source),
                'download': 'cover.svg'
            });

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
 *  Creates a toolbar
 *  @class Toolbar
 *
 *  @property {Object}  tree   — toolbar nodes
 *  @property {Object}  CSS    — styles dictionary
 *  @property {HTMLElement} editor — main editor wrapper
 *  @property {SVGElement} canvas — main canvas SVG
 *  @property {HTMLElement} target — on which element toolbar was open
 */

var Toolbar = function () {

    /**
     * @constructor
     * Toolbar module
     *
     * @param {Object} fontSizes        - font sizes for target elements
     * @param {String} fontSizes.small  - the smalles text size
     * @param {String} fontSizes.medium - the medium text size
     * @param {String} fontSizes.big    - the biggest text size
     */
    function Toolbar(fontSizes) {
        _classCallCheck(this, Toolbar);

        /**
         * Component for controlling canvas.
         * @type {Object}
         */
        this.instances = {
            canvas: null
        };

        /**
         * On which element toolbar was opened
         * @type {Element|null}
         */
        this.target = null;

        /**
         * Properties for target element at the SVG
         * @type {Object}
         */
        this.properties = {
            fontSize: {
                small: fontSizes && fontSizes.small ? fontSizes.small : '25px',
                medium: fontSizes && fontSizes.medium ? fontSizes.medium : '28px',
                big: fontSizes && fontSizes.big ? fontSizes.big : '31px'
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
            hidden: 'cover-editor--hidden',
            toolbar: {
                colorMode: 'cover-editor__toolbar--color-mode',
                normal: 'cover-editor__toolbar'
            },
            target: {
                active: 'cover-editor__text--active',
                fontSize: ['cover-editor__text--small', 'cover-editor__text--medium', 'cover-editor__text--big']
            },
            button: 'cover-editor__button',
            buttons: {
                active: 'cover-editor__button--active',
                left: 'cover-editor__button--left',
                center: 'cover-editor__button--center',
                right: 'cover-editor__button--right',
                fontSize: 'cover-editor__button--font-size',
                fontSizes: {
                    small: 'cover-editor__button--small',
                    medium: 'cover-editor__button--medium',
                    big: 'cover-editor__button--big'
                },
                color: 'cover-editor__button--color'
            },
            colorForm: 'cover-editor__color-form'
        };

        /**
         * Color constants
         */
        this.colors = {
            defaultText: '#000000'
        };
    }

    /**
     *  Prepares toolbar elements
     *
     * @param  {Element} editor         - main wrapper
     * @param  {Object} canvas          - canvas instance
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

            this.tree.toolbar = $.make('div', [this.CSS.toolbar.normal, this.CSS.hidden]);

            /**
             * Add buttons
             */
            for (var type in this.tree.buttons) {

                var button = $.make('span', [this.CSS.button, this.CSS.buttons[type]]);

                this.tree.toolbar.appendChild(button);
                this.tree.buttons[type] = button;

                /**
                 * Save action in the button's dataset
                 */
                button.dataset.action = type;

                button.addEventListener('click', function (event) {

                    _this.buttonClicked(event);
                });
            }

            /**
             * Add color form
             */
            this.tree.colorForm = $.make('input', [this.CSS.colorForm]);
            this.tree.colorForm.addEventListener('keyup', function (event) {

                _this.changeColorModeByKey(event);
            });
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
                action = buttonClicked.dataset.action;

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
         * Change font size of target
         * @param {Integer} fontSize - number of font size
         */

    }, {
        key: 'changeFontSize',
        value: function changeFontSize() {

            var current = this.target.dataset.fontSize,
                sizes = ['small', 'medium', 'big'],
                next = void 0;

            next = sizes[(sizes.indexOf(current) + 1) % sizes.length];

            this.target.dataset.fontSize = next;
            this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[current]);
            this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[next]);
            this.instances.canvas.setFontSize(this.target, this.properties.fontSize[next]);
            this.moveToTarget();
        }

        /**
         * Open toolbar near element
         * @param {String} alignment - alignment of target: 'left', 'center' or 'right'
         */

    }, {
        key: 'changeAlignment',
        value: function changeAlignment(alignment) {

            this.target.dataset.alignment = alignment;

            for (var type in this.tree.buttons) {

                if (type !== 'fontSize' && type !== 'color') {

                    this.tree.buttons[type].classList.remove(this.CSS.buttons.active);
                }
            };

            this.tree.buttons[alignment].classList.add(this.CSS.buttons.active);
            this.instances.canvas.setAlignment(this.target, alignment, undefined);
            this.moveToTarget();
        }

        /**
         * Change color of target and toolbar color button
         * @param {String} color - color of target
         */

    }, {
        key: 'changeColor',
        value: function changeColor(color) {

            if (!color) {

                return;
            }

            this.instances.canvas.setColor(this.target, color);
            this.target.dataset.color = color;
            this.tree.buttons.color.style.background = color;
        }

        /**
         * Set color after enter button was clicked on the keyboard
         */

    }, {
        key: 'changeColorModeByKey',
        value: function changeColorModeByKey(event) {

            if (event.keyCode != 13) {

                return;
            }

            this.changeColorMode();
        }

        /**
         * Toggle color mode of toolbar
         */

    }, {
        key: 'changeColorMode',
        value: function changeColorMode() {

            if (this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)) {

                this.changeColor(this.tree.colorForm.value);
                this.tree.colorForm.value = '';
                this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode);
            } else {

                this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode);
                this.tree.colorForm.focus();
            }

            this.moveToTarget();
        }

        /**
         * Move toolbar to target
         */

    }, {
        key: 'moveToTarget',
        value: function moveToTarget() {

            var toolbar = this.tree.toolbar,
                canvasWrapper = {
                left: this.canvas.parentNode.offsetLeft,
                top: this.canvas.parentNode.offsetTop
            },
                element = {
                left: window.parseInt(this.target.getAttribute('x')),
                top: window.parseInt(this.target.getAttribute('y')),
                width: this.target.clientWidth
            };

            switch (this.target.dataset.alignment) {

                case 'left':
                    toolbar.style.left = canvasWrapper.left + element.left + 'px';
                    break;

                case 'center':
                    toolbar.style.left = canvasWrapper.left + element.left + (element.width - toolbar.clientWidth) / 2 + 'px';
                    break;

                case 'right':
                    toolbar.style.left = canvasWrapper.left + element.left + element.width - toolbar.clientWidth + 'px';
                    break;

            }

            toolbar.style.top = canvasWrapper.top + element.top - toolbar.clientHeight + 'px';
        }

        /**
         * Read states of buttons from target
         */

    }, {
        key: 'getTargetParams',
        value: function getTargetParams() {

            if (this.target.dataset.fontSize == undefined) {

                this.target.dataset.fontSize = 'big';
                this.changeFontSize();
            } else {

                this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[this.target.dataset.fontSize]);
            }

            if (this.target.dataset.alignment == undefined) {

                this.target.dataset.alignment = 'left';
            }
            this.changeAlignment(this.target.dataset.alignment);

            if (this.target.dataset.color == undefined) {

                this.target.dataset.color = this.colors.defaultText;
            }
            this.changeColor(this.target.dataset.color);
        }

        /**
         * Open toolbar near element
         *
         * @param {Element} target - element to which toolbar will be bound
         */

    }, {
        key: 'openNear',
        value: function openNear(target) {

            this.removeTargetParams();
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

            this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode);

            this.tree.buttons.left.classList.remove(this.CSS.buttons.active);
            this.tree.buttons.center.classList.remove(this.CSS.buttons.active);
            this.tree.buttons.right.classList.remove(this.CSS.buttons.active);

            for (var key in this.CSS.buttons.fontSizes) {

                this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[key]);
            }
        }

        /**
         * Hide toolbar
         */

    }, {
        key: 'hide',
        value: function hide() {

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
