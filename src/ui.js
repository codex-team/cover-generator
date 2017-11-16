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
        headline               : 'cover-editor__control-button--headline',
        mainText               : 'cover-editor__control-button--main-text',
        image                  : 'cover-editor__control-button--image',
        controlButtonSave      : 'cover-editor__control-button--save',

        canvasWrapper          : 'cover-editor__canvas-wrapper',
        canvas                 : 'cover-editor__canvas',
        canvasActive           : 'cover-editor__canvas-wrapper--active'
    };

    /**
     * Static instances
     * @type {Object}
     */
    const instances = {
        canvas       : null,
        toolbar      : null
    };

    /**
     * Static nodes cache
     * @type {Object}
     */
    let nodes = {
        currentText          : null,
        canvasWrapper        : null,
        canvas               : null,
        mainRectangle        : null,
        controls : {
            resizeSqure      : null,
            resizeVertical   : null,
            resizeHorisontal : null,
            saveButton       : null,
            pictureButton    : null,
            mainTextButton   : null,
            headlineButton   : null,
        },
        currentCanvasEditing : null
    };

    /**
     * Counter in function canvasClicked
     */
    let i = 0;

    /**
     * Make canvas active
     */
    function canvasClicked() {

        if (i % 2 == 0) {

            nodes.canvasWrapper.classList.add(CSS.canvasActive);
            i++;

        } else {

            nodes.canvasWrapper.classList.remove(CSS.canvasActive);
            i--;

        }

        instances.toolbar.hide();

    }

    /**
     * Save button click listener
     */
    function saveButtonClicked() {

        instances.canvas.import();

    }

    /**
     * Resize button click listener
     * @param {MouseEvent} event — click
     */
    function resizeButtonClicked(event) {

        let button = event.target,
            size = button.dataset.size;

        ['resizeSqure', 'resizeVertical', 'resizeHorisontal'].forEach( header => {

            nodes.controls[header].classList.remove(CSS.resizeButtonActive);

        });

        event.target.classList.add(CSS.resizeButtonActive);
        instances.canvas.setCanvasFormat(size);

    }

    /**
     * Show and hide button click listener
     * @param  {MouseEvent} event  - click
     */
    function toggleObjectClicked(event) {

        let button = event.target,
            object = button.dataset.object,
            element = instances.canvas.createElement(object);

        element.addEventListener('click', (e) => {

            if (e.target.tagName === 'DIV') {

                instances.toolbar.openNear({target: e.target.parentNode});
                return;

            }

            instances.toolbar.openNear({target: e.target});

        });
        element.dispatchEvent(new window.Event('click'));

    }

    /**
     * Bind necessary event to manupulate controls
     */
    function bindEvents() {

        nodes.canvasWrapper.addEventListener('click', canvasClicked);

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
    function create(container, canvasInstance, toolbarInstance) {

        var editor   = $.make('div', CSS.editor),
            controls = $.make('div', CSS.controls);


        instances.canvas                = canvasInstance;
        instances.toolbar               = toolbarInstance;

        nodes.canvasWrapper             = $.make('div', CSS.canvasWrapper);
        nodes.canvas                    = instances.canvas.create(nodes.canvasWrapper);
        nodes.controls.resizeSqure      = $.make('span', [CSS.resizeButton, CSS.resizeButtonSquare]);
        nodes.controls.resizeVertical   = $.make('span', [CSS.resizeButton, CSS.resizeButtonVertical]);
        nodes.controls.resizeHorisontal = $.make('span', [CSS.resizeButton, CSS.resizeButtonHorisontal]);
        nodes.controls.saveButton       = $.make('span', [CSS.controlButton, CSS.controlButtonSave]);
        nodes.controls.pictureButton    = $.make('span', [CSS.controlButton, CSS.image], { textContent: 'Image' });
        nodes.controls.mainTextButton   = $.make('span', [CSS.controlButton, CSS.mainText], { textContent: 'Main Text' });
        nodes.controls.headlineButton   = $.make('span', [CSS.controlButton, CSS.headline], { textContent: 'Headline' });

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

        for (let buttonName in nodes.controls) {

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
        create
    };

}();
