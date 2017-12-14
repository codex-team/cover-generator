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
            editor: null
        };

        this.CSS = {
            canvas: 'cover-editor__editor',
            element: 'cover-editor__element',
            elements: {
                headline: 'cover-editor__headline',
                image: 'cover-editor__image',
                mainText: 'cover-editor__mainText'
            },
            alignment: {
                left: 'cover-editor__element--left',
                center: 'cover-editor__element--center',
                right: 'cover-editor__element--right',
            }
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
            horisontal: {
                left: 'left',
                right: 'right',
                center: 'center'
            },
            vertical: {
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
            image: 'picture',
            headline: 'headline'
        };

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

        this.tree.editor = $.make('div', this.CSS.canvas);
        this.setCanvasFormat(this.formats.horisontal);

        return this.tree.editor;

    }

    /**
     * Changing the sizes of canvas by using format
     *
     * @param {String} format - type of format, can be 'horisontal', 'square' or 'vertical'
     */
    setCanvasFormat( format ) {

        this.setSize(this.tree.editor, this.sizes[format]);

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

        if (size.height) {

            element.style.height = size.height + 'px';

        }

        if (size.width) {

            element.style.width = size.width + 'px';

        }

    }

    /**
     * Changes the color of svg element
     *
     * @param {Element} element - element to change size
     * @param {String} color    - color of text to set
     */
    setTextColor(element, color) {

        element.style.color = color;

    }

    /**
     * Changes the font size of svg element
     *
     * @param {Element} element    - element to change size
     * @param {Number} size        - size of text to set
     */
    setTextFontSize( element, size ) {

        element.style.fontSize = size;

    }

    /**
     * Sets the alignment of the element at the canvas
     *
     * @param {Element} element   - element to change alignment
     * @param {String} horisontal - type of alignment on horisontal
     * @param {String} vertical   - type of alignment on verlical
     */
    setElementAlignment( element, horisontal) {

        let align = {
            horisontal: this.alignment.horisontal
        };

        for (let key in this.CSS.alignment) {

            element.classList.remove(this.CSS.alignment[key]);

        }

        switch (horisontal) {

            case align.horisontal.left:

                element.classList.add(this.CSS.alignment.left);
                break;

            case align.horisontal.center:

                element.classList.add(this.CSS.alignment.center);
                break;

            case align.horisontal.right:

                element.classList.add(this.CSS.alignment.right);
                break;

        }

        return;

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

        let text = $.make('div', [this.CSS.element, this.CSS.elements[type]]);

        text.innerHTML = this.newText;
        text.dataset.type = type;

        text.setAttribute('contenteditable', true);
        text.addEventListener('paste', this.pasteFromClipboard.bind(this));

        this.tree.editor.appendChild(text);
        this.setElementAlignment(text, this.alignment.horisontal.left);

        return text;

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

        let image = $.make('img', [this.CSS.element, this.CSS.elements.image], {src: 'src/assets/icon-picture.svg'});

        this.setElementAlignment(image, this.alignment.horisontal.left);
        this.tree.editor.appendChild(image);

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
            source = serializer.serializeToString(this.tree.editor);

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
