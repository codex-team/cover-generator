/**
 * DOM utility
 */
let $ = require('./dom').default;

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
export default class Canvas {

    /**
     * Initialization of canvas module
     */
    constructor() {

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
            vertical: {width: 510, height: 560},
            horisontal: {width: 650, height: 370},
            square: {width: 510, height: 510}
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
                top: 115,
                center: 132,
                bottom: 271
            }
        };

        /**
         * Types of elements at canvas
         */
        this.elements = {
            mainText: 'mainText',
            image: 'picture',
            headline: 'headline'
        };

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
            mainSVGcolor: '#FFFFFF',
        };

    }

    /**
     * Check if element is text
     *
     * @param {Element} - object
     */
    isText(element) {

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
    create() {

        this.tree.rectangle = $.svg('rect', {fill: this.colors.mainSVGcolor});
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
    setCanvasFormat( format ) {

        this.setSize(this.tree.svg, this.sizes[format]);
        this.setSize(this.tree.rectangle, this.sizes[format]);

    }

    /**
     * Changes the sizes of svg element
     *
     * @param {Element} element    - element to change size
     * @param {Object|String} size - sizes of canvas, if string, then 'auto'
     * @param {Number} size.width  - width of canvas
     * @param {Number} size.height - height of canvas
     */
    setSize( element, size ) {

        if (size === 'auto' && this.isText(element)) {

            let text = element.querySelector('div[contenteditable="true"]');

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
    setColor(element, color) {

        if (!this.isText(element)) return;

        element.querySelector('div[contenteditable="true"]').style.color = color;

    }

    /**
     * Changes the font size of svg element
     *
     * @param {Element} element    - element to change size
     * @param {Number} size        - size of text to set
     */
    setFontSize( element, size ) {

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
    setAlignment( element, horisontal, vertical ) {

        let canvasSizes = {
                width: this.tree.svg.clientWidth,
                height: this.tree.svg.clientWidth
            },
            elementSizes = {
                width: element.clientWidth,
                height: element.clientWidth
            },
            text = this.isText(element);

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

        if (this.alignment.y[vertical]) {

            this.setPosition(element, undefined, this.alignment.y[vertical]);

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
    setPosition( element, x, y ) {

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
    autoSizing(event) {

        let target = event.target;

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
    createText( type ) {

        let text = $.make('div', this.CSS.text),
            container = $.svg('foreignObject'),
            y = 0;

        text.innerHTML = this.newText;
        text.setAttribute('contenteditable', true);
        text.addEventListener('keyup', this.autoSizing.bind(this));
        text.addEventListener('paste', this.pasteFromClipboard.bind(this));

        container.dataset.type = type;
        container.appendChild(text);
        this.tree.svg.appendChild(container);

        switch (type) {

            case (this.elements.headline):

                y = 'top';
                break;

            case (this.elements.mainText):

                y = 'bottom';
                break;

        }

        this.setSize(container, 'auto');
        this.setAlignment(container, this.alignment.x.left, y);

        return container;

    }

    /**
     * Paste text form clipboard
     *
     * @param {ClipboardEvent} event - paste event
     */
    pasteFromClipboard(event) {

        event.stopPropagation();
        event.preventDefault();

        let data = (event.clipboardData || window.clipboardData).getData('Text');

        if (!data) {

            return;

        }

        this.insertAtCaret(data);

    }

    /**
     * Inserting text to caret position
     *
     * @param {String} text - text for inserting
     */
    insertAtCaret(text) {

        document.execCommand('insertText', false, text);

    }

    /**
     * Creates an image element
     *
     * @param {String} link - URL of image
     */
    createImage(link) {

        let image = $.svg('image');

        image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', link);

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
    createElement(element) {

        if (element === this.elements.headline || element === this.elements.mainText) {

            return this.createText(element);

        } else if (element === this.elements.image) {

            return this.createImage(element);

        }

    }

    /**
     * Export canvas as SVG file
     */
    export() {

        let serializer = new window.XMLSerializer(),
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

        let link = $.make('a', null, {
            'style': 'display:none;',
            'href': 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source),
            'download': 'cover.svg'
        });

        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);

    }

}
