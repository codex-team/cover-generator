/**
 * Cover module entry poit
 */
module.exports = function () {

    'use strict';

    /**
     * Requre CSS
     */
    require('./styles/main.css');

    let ui = require('./ui');

    /**
     * Initialization method
     * @param  {object} initParams
     * @param  {string} initParams.containterId - in that Node we will render Editor
     */
    let init = function (initParams) {

        console.assert(initParams.containterId, 'Missed containterId in initial parametres');

        let containter = document.getElementById(initParams.containterId);

        if (!containter) {

            console.warn('Container was not found by id: %o', initParams.containterId);
            return;

        }

        /**
         * Makes UI
         */
        ui.make({
            containter
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
