/**
 * Canvas module
 */
export default class Canvas {

    /**
     * Initialisation of canvas module
     * @param {Object} properties               - object with properties for canvas creating
     * @param {String|Object} properties.shape  - type of format, can be 'horisontal', 'square' or 'vertical'
     * @param {Number} properties.shape.width   - width of canvas
     * @param {Number} properties.shape.height  - height of canvas
     */
    constructor( properties ) {

        this.$ = require('./dom').default;

        this.tree = {
            svg : null
        };

        this.formats = {
            vertical: {width: 510, height: 560},
            horisontal: {width: 650, height: 370},
            square: {width: 510, height: 510}
        };

        this.positions = {
            mainText: {x: undefined, y: 271},
            headline: {x: undefined, y: 132}
        };

    }

    create( parent ) {

        this.tree.svg = this.$.svg('svg');
        this.setCanvasFormat('horisontal');

        return this.tree.svg;

    }

    /**
     * Changing the sizes of canvas by using format
     * @param {String} format - type of format, can be 'horisontal', 'square' or 'vertical'
     */
    setCanvasFormat( format ) {

        this.setSize(this.tree.svg, this.formats[format]);

    }

    /**
     * Changes the sizes of svg element
     *
     * @param {Element} element    - element to change size
     * @param {Object} size        - sizes of canvas
     * @param {Number} size.width  - width of canvas
     * @param {Number} size.height - height of canvas
     */
    setSize( element, size ) {

        element.setAttribute('height', size.height);
        element.setAttribute('width', size.width);

    }

    /**
     * Changes a position of element
     *
     * @param {Element}                - element to change position
     * @param {Object|String} coords   - where to place text on canvas
     * @param {Number} coords.x        - x coord
     * @param {Number} coords.y        - y coord
     */
    setPosition( element, coords ) {

        coords = coords.y == undefined ? this.positions[coords] : coords;
        element.setAttribute('y', coords.y);
        coords.x ? element.setAttribute('x', coords.x) : null;

    }

    /**
     * Changes horizontal align
     *
     * @param {Element} - element to align
     * @param {String}  - type of alignment
     */
    setAlign( element, align ) {

        if (align == 'left') {

            this.setPosition();

        }

    }

    /**
     * Creates a text element
     *
     * @param {Object|String} coords   - where to place text on canvas
     * @param {Number} coords.x        - x coord
     * @param {Number} coords.y        - y coord
     * @return {Element}               - created text
     */
    createText( coords ) {

        let container = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject'),
            text = document.createElement('div');

        text.setAttribute('contenteditable', 'true');
        container.appendChild(text);
        this.setPosition(container, coords);
        this.setSize(container, {width: 100, height: 10});
        this.tree.svg.appendChild(container);

        return text;

    }

}
