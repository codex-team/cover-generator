/**
 * Cover module entry poit
 */
module.exports = function () {

    'use strict';

    /**
     * Requre CSS
     */
    require('./styles/main.css');

    /**
     * User Interface module
     */
    let ui = require('./ui');

    /**
     * Canvas module
     * @type {Canvas}
     */
    let Canvas = require('./canvas').default;

    /**
     * Initialization method
     * @param  {object} initParams
     * @param  {string} initParams.containerId - in that Node we will render Editor
     */
    let init = function (initParams = {}) {

        console.assert(initParams.containerId, 'Container id is missed');

        let container = document.getElementById(initParams.containerId);

        if (!container) {

            console.warn('Container was not found by id %o', initParams.containerId);
            return;

        }

        /**
         * Make interface and bind events
         */
        let nodes = ui.create(container);

        let canvas = new Canvas({
            canvas: nodes.canvas
        });

    };

    /**
     * Destories UI
     */
    let destroy = function () {

    };

    return {
        init,
        destroy
    };

}();
