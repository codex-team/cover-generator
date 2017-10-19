/**
 * DOM elements manipulations
 */
export default class Dom {

    /**
    * Helper for making Elements with classname and attributes
    * @param  {string} tagName           - new Element tag name
    * @param  {array|string} classNames  - list or name of CSS classname(s)
    * @param  {Object} attributes        - any attributes
    * @return {Element}
    */
    static make(tagName, classNames, attributes) {

        var el = document.createElement(tagName);

        if ( Array.isArray(classNames) ) {

            el.classList.add(...classNames);

        } else if( classNames ) {

            el.classList.add(classNames);

        }

        for (let attrName in attributes) {

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
    static svg(tag, param) {

        var n = document.createElementNS('http://www.w3.org/2000/svg', tag);

        for (var p in param) {

            n.setAttributeNS(null, p, param[p]);

        }

        return n;

    }

}