/**
 * Cover module entry poit
 */
module.exports = function(){

    let ui = require('./ui');

    /**
     * Initialization method
     * @param  {object} initParams
     * @param  {string} initParams.containterId - in that Node we will render Editor
     */
    let init = function (initParams) {

        // initialization

    };

    /**
     * Destories UI
     */
    let destroy = function () {

    }

    return {
        init,
        destroy
    }
}()
