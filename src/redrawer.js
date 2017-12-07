/**
 * DOM utility
 */
let $ = require('./dom').default;

export default class Redrawer {

    constructor() {

        this.canvasElement = document.createElement('canvas');
        this.canvas = this.canvasElement.getContext('2d');
        this.shootingElement = null;
        this.shootingCoords = {
            top: 0,
            left: 0
        };

        // document.body.appendChild(this.canvasElement);

    }

    /**
     * Redraws a HTMLElement to the HTMLCanvas recoursively
     * @param {Element} element - DOM tree element which will be redrawed
     * @return {Object}         - object with top and left coords
     */
    getCoords(element) {

        let parent = element.offsetParent,
            coords = {
                top: 0,
                left: 0
            };

        while (element && element.offsetTop !== undefined && element.offsetLeft !== undefined) {

            coords.top += element.offsetTop;
            coords.left += element.offsetLeft;
            element = element.offsetParent;

        }

        coords.top  -= this.shootingCoords.top;
        coords.left -= this.shootingCoords.left;

        return coords;

    }

    /**
     * Remove unnesessary spacing and tabulation
     * @param {String} text - text to edit
     */
    formatText(text) {

        let regexp = /\s+/g;

        text = text.replace(regexp, ' ');

        regexp = /^\s/g;
        text = text.replace(regexp, '');

        regexp = /\s$/g;
        text = text.replace(regexp, '');

        return text;

    }

    /**
     * Setts a text styles
     * @param {Element} element - DOM tree element from what style will be got
     */
    setTextStyle(element) {

        let style = window.getComputedStyle(element);

        this.canvas.fillStyle = style.color;
        this.canvas.font = style.fontStyle + ' ' + style.fontSize + ' ' + style.fontFamily;

    }

    /**
     * Draw HTML #text element on the HTMLCanvas
     * @param {Element} element - DOM tree element from what style will be got
     */
    drawHTMLTextOnCanvas(element) {

        let text = element.cloneNode(true),
            span = document.createElement('span'),
            coords;

        element.parentNode.insertBefore(span, element);
        coords = this.getCoords(span);
        span.textContent = element;

        this.setTextStyle(element.parentNode);
        this.canvas.fillText(this.formatText(element.textContent), coords.left, span.offsetHeight + coords.top);
        element.parentNode.removeChild(span);

    }

    /**
     * Draw HTMLImage element on the HTMLCanvas
     * @param {Element} element - DOM tree element from what style will be got
     */
    drawHTMLImageOnCanvas(element) {

        let image = new window.Image(),
            coords = this.getCoords(element);

        image.src = element.getAttribute('SRC');
        image.onload = (function () {

            this.canvas.drawImage(image, coords.left, coords.top);

        }).bind(this);

    }

    /**
     * Draw HTMLDiv or another block element on the HTMLCanvas
     * @param {Element} element - DOM tree element from what style will be got
     */
    drawHTMLBlockOnCanvas(element) {

        let styles = window.getComputedStyle(element),
            coords = this.getCoords(element);

        this.canvas.fillStyle = styles.backgroundColor;
        this.canvas.fillRect(coords.left, coords.top, element.offsetWidth, element.offsetHeight);

    }

    /**
     * Redraws a HTMLElement to the HTMLCanvas recoursively
     * @param {Element} element - DOM tree element which will be redrawed
     * @param {Number} left     - left coordinate of element
     * @param {Number} top      - top coordinate of element
     */
    redraw(element) {

        let coords;

        switch (element.tagName) {

            case undefined:

                this.drawHTMLTextOnCanvas(element);
                break;

            case 'IMG':

                this.drawHTMLImageOnCanvas(element);
                break;

            default:

                this.drawHTMLBlockOnCanvas(element);

                for (let counter = 0; counter < element.childNodes.length; counter++) {

                    let child = element.childNodes[counter];

                    this.redraw(child);

                }
                break;

        }

    }

    /**
     * Redraws a HTMLElement to the HTMLCanvas
     * @param {Element} element - DOM tree element which will be redrawed
     */
    shot(element) {

        this.shootingElement = element;
        this.shootingCoords = this.getCoords(this.shootingElement);

        this.canvasElement.setAttribute('WIDTH', element.clientWidth);
        this.canvasElement.setAttribute('HEIGHT', element.clientHeight);

        this.redraw(this.shootingElement, 0, 0);

    }

    /**
     * Export the HTMLCanvas element with screenshot to image and start downloading
     * @param {Element} element - DOM tree element where to post canvas
     */
    download(element) {

        let link = $.make('a', null, {
            'style': 'display:none;',
            'href': this.canvasElement.toDataURL('image/png'),
            'download': 'cover.png'
        });

        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);

    }

}
