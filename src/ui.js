/**
 * User interface module
 */
module.exports = function () {

    'use strict';

    let $ = require('./dom').default;

    /**
     * Style classnames
     * @type {Object}
     */
    const CSS = {
        editor                 : 'cover-editor',
        controls               : 'cover-editor__controls',

        resizeButton           : 'cover-editor__resize-canvas',
        resizeButtonActive     : 'cover-editor__resize-canvas--active',

        resizeButtonSquare     : 'cover-editor__resize-canvas--square',
        resizeButtonVertical   : 'cover-editor__resize-canvas--vertical',
        resizeButtonHorisontal : 'cover-editor__resize-canvas--horisontal',

        controlButton          : 'cover-editor__control-button',
        controlButtonSave      : 'cover-editor__control-button--save',

        canvasWrapper          : 'cover-editor__canvas-wrapper',
        canvas                 : 'cover-editor__canvas'
    };

    /**
     * Static nodes cache
     * @type {Object}
     */
    let nodes = {
        editor: null,
        canvasWrapper    : null,
        canvas           : null,
        mainRectangle    : null,
        controls : {
            resizeSqure      : null,
            resizeVertical   : null,
            resizeHorisontal : null,
            saveButton       : null,
            pictureButton    : null,
            mainTextButton   : null,
            headlineButton   : null,
        }
    };

    /**
    * Creates main form
    */
    function createCanvas() {

        nodes.canvasWrapper = $.make('div', CSS.canvasWrapper);

        nodes.canvas = $.svg('svg', {
            width: '100%',
            height: '100%'
        });

        nodes.mainRectangle = $.svg('rect', {
            width: '100%',
            height: '100%',
            fill: '#FFFFFF'
        });

        nodes.canvas.classList.add(CSS.canvas);
        nodes.canvas.appendChild(nodes.mainRectangle);
        nodes.canvasWrapper.appendChild(nodes.canvas);

        return nodes.canvasWrapper;

    }

    /**
     * Save button click listener
     */
    function saveButtonClicked() {

        console.log('saveButtonClicked');

    }

    /**
     * Resize button click listener
     * @param {MouseEvent} event — click
     */
    function resizeButtonClicked(event) {

        let button = event.target,
            size = button.dataset.size;

        console.log('resize to: %o', size);


    }

    /**
     * Show and hide button click listener
     * @param  {MouseEvent} event  - click
     */
    function toggleObjectClicked(event) {

        let button = event.target,
            object = button.dataset.object;

        console.log('toggle: %o', object);

        /**
         * Test
         *
         * Open toolbar near button
         */
        codex.cover.toolbar.openNear({
            target : button
        });

    }

    /**
     * Bind necessary event to manupulate controls
     */
    function bindEvents() {

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
    function create(container) {

        nodes.editor = $.make('div', CSS.editor);

        let controls = $.make('div', CSS.controls),
            canvas   = createCanvas();

        nodes.controls.resizeSqure      = $.make('span', [CSS.resizeButton, CSS.resizeButtonSquare]);
        nodes.controls.resizeVertical   = $.make('span', [CSS.resizeButton, CSS.resizeButtonVertical]);
        nodes.controls.resizeHorisontal = $.make('span', [CSS.resizeButton, CSS.resizeButtonHorisontal]);
        nodes.controls.saveButton       = $.make('span', [CSS.controlButton, CSS.controlButtonSave]);
        nodes.controls.pictureButton    = $.make('span', CSS.controlButton, { textContent: 'Image' });
        nodes.controls.mainTextButton   = $.make('span', CSS.controlButton, { textContent: 'Main Text' });
        nodes.controls.headlineButton   = $.make('span', CSS.controlButton, { textContent: 'Headline' });

        /**
         * Save size in button's data-size
         */
        nodes.controls.resizeSqure.dataset.size = 'square';
        nodes.controls.resizeVertical.dataset.size = 'vertical';
        nodes.controls.resizeHorisontal.dataset.size = 'horisontal';


        /**
         * Save create element type in button's data-object
         */
        nodes.controls.mainTextButton.dataset.object = 'mainText';
        nodes.controls.headlineButton.dataset.object = 'headline';
        nodes.controls.pictureButton.dataset.object = 'picture';

        for (let buttonName in nodes.controls) {

            controls.appendChild(nodes.controls[buttonName]);

        }

        nodes.editor.appendChild(controls);
        nodes.editor.appendChild(canvas);

        container.appendChild(nodes.editor);


        bindEvents();

        return nodes;

    }


    return {
        create
    };

}();
