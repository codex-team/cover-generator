/**
 * DOM utility
 */
let $ = require('./dom').default;

/**
 *   Creates a toolbar
 *   @class Toolbar
 *
 *
 *  @property {Object} this.tree — toolbar nodes
 *  @property {Object} this.CSS  — styles dictionary
 *  @property {Element} this.editor  — main editor wrapper
 *  @property {Element} this.canvas  — main canvas SVG

 *  @property {Element} this.target  — on which element toolbar was open
 *
 *   @param {Element} elem                             - element on a canvas which properties will be changed by toolbar
 *   @param {Canvas} canvas                            - object of canvas where controllable element is located
 *   @param {Object} properties                        - object containing additional properties for toolbar
 *   @param {number} properties.padding                - size of padding between toolbar and controllable element
 *   @param {number} properties.elementAlignPadding    - size of padding between the border of canvas and controllable element in %
 *   @return {Toolbar}
 */
export default class Toolbar {

    /**
     * @constructor
     *
     * Toolbar module
     */
    constructor() {

        /**
         * On which element toolbar was open
         * @type {Element|null}
         */
        this.target = null;

        /**
         * DOM Elements
         * @type {Object}
         */
        this.tree = {
            toolbar: undefined,
            buttons: {
                fontSize: undefined,
                left: undefined,
                center: undefined,
                right: undefined,
                color: undefined
            },
            colorForm: undefined,
        };

        /**
         * CSS classnames
         * @type {Object}
         */
        this.CSS = {
            hidden: 'cover-editor__hidden',
            toolbar: {
                colorMode: 'cover-editor__toolbar--color_mode',
                normal: 'cover-editor__toolbar'
            },
            controllable: {
                active: 'cover-editor__text--active',
                fontSize: [
                    'cover-editor__text--small',
                    'cover-editor__text--medium',
                    'cover-editor__text--big'
                ],
            },
            button : 'cover-editor__toolbar-button',
            buttons: {
                active    : 'cover-editor__toolbar-button--active',
                left      : 'cover-editor__toolbar-button--left',
                center    : 'cover-editor__toolbar-button--center',
                right     : 'cover-editor__toolbar-button--right',
                fontSize  : 'cover-editor__toolbar-button--font-size',
                fontSizes  : {
                    small: 'cover-editor__toolbar-button--small',
                    medium: 'cover-editor__toolbar-button--medium',
                    big: 'cover-editor__toolbar-button--big'
                },
                color : 'cover-editor__toolbar-button--color'
            },
            colorForm : 'cover-editor__toolbar-color-form'
        };

    }

    /**
     *  Prepares toolbar elements
     *
     * @param  {object} params
     * @param  {Element} params.editor - main wrapper
     * @param  {Element} params.cancas - main svg canvas
     */
    prepare(params) {

        /**
         * Main Editor wrapper
         * @type {Element}
         */
        this.editor = params.editor;

        this.make();

    }


    /**
     * Creates toolbar
     */
    make() {

        // tree.controllable = elem;
        // tree.controllable.classList.add(styles.controllable.fontSize[0]);
        // tree.controllable.addEventListener('dblclick', showToolbar.bind(this));

        this.tree.toolbar = $.make('div', [ this.CSS.toolbar.normal ]);

        /**
         * Add buttons
         */
        ['fontSize', 'left', 'center', 'right', 'color'].forEach( type => {

            let button = $.make('span', [this.CSS.button, this.CSS.buttons[type]]);

            this.tree.toolbar.appendChild(button);
            this.tree.buttons[type] = button;

            /**
             * Save action in the button's dataset
             */
            button.dataset.action = type;

            button.addEventListener('click', event => {

                this.buttonClicked(event);

            });

        });

        /**
         * @todo  Add color form
         */


        /**
         * Append toolbar to the Editor
         */
        this.editor.appendChild(this.tree.toolbar);

    }

    /**
     * Toolbar button click handler
     * @param  {MouseEvent} event  - click on the button
     */
    buttonClicked(event) {

        let buttonClicked = event.target,
            action = buttonClicked.dataset.action;

        console.log('clicked: %o', action);

        switch ( action ) {

            case 'fontSize':
                this.changeFontSize();
                break;

            case 'left':
            case 'center':
            case 'right':
                this.changeAlignment(action);
                break;

            case 'color':
                this.openColorForm();

        }

    }

    changeFontSize() {

        console.log('changeFontSize: %o');

    }

    changeAlignment( alignment ) {

        console.log('alignment: %o', alignment);

    }

    openColorForm() {

        console.log('openColorForm: %o');

    }

    /**
     * Opens toolbar near element
     *
     * @param {Object} opitons
     * @param {Element} options.target - element to show toolbar
     */
    openNear({ target }) {

        this.target = target;

        /**
         * @todo  Move toolbar to the target
         */

        /**
         * @todo  Open toolbar
         */

        console.log('now we need to open toolbar near: %o', this.target);

    }

    hide() {

        this.target = null;

    }

    /**
    *   Moving toolbar to the controllable element
    *   @private
    *   @param {void}
    *   @return {void}
    */
    // changeToolbarPosition() {

    //     var canvasCoords = canvas.svg.getBoundingClientRect(),
    //         controllableCoords = tree.controllable.getBoundingClientRect();

    //     tree.toolbar.style.left = controllableCoords.left - canvasCoords.left + (tree.controllable.clientWidth - tree.toolbar.clientWidth)/2 + 'px';
    //     tree.toolbar.style.top = controllableCoords.top - canvasCoords.top - tree.controllable.clientHeight - properties.padding + 'px';

    // }

    /**
    *   Showing toolbar after clicking on controllable element
    *   @private
    *   @param {void}
    *   @return {void}
    */
    // showToolbar() {

    //     if (tree.toolbar.classList.contains(styles.hidden)) {

    //         if (window.getSelection) {

    //             window.getSelection().removeAllRanges();

    //         } else {

    //             document.selection.empty();

    //         }
    //         tree.toolbar.classList.remove(styles.hidden);

    //     }
    //     tree.controllable.classList.add(styles.controllable.active);
    //     changeToolbarPosition();

    // }

    /**
    *   Hiding toolbar after controllable element has been unfocused
    *   @private
    *   @param {Event} event - event of clicking on body
    *   @return {void}
    */
    // hideToolbar(event) {

    //     if (event.target !== tree.controllable && event.target.parentNode !== tree.toolbar && event.target !== tree.toolbar) {

    //         tree.controllable.classList.remove(styles.controllable.active);
    //         tree.toolbar.classList.add(styles.hidden);

    //     }

    // }

    /**
    *   Chenging color of color button in toolbar after valid CSS color string has been written in colorForm element
    *   @private
    *   @param {Event} event - event of keyup in colorForm field in toolbar
    *   @return {void}
    */
    // changeToolbarColorButtonColor(event) {

    //     tree.buttons.color.style.backgroundColor = event.target.value;

    // }

    /**
    *   Unhiding or hiding color input field in toolbar
    *   @private
    *   @param {Event} event - event of click  on color button in toolbar
    *   @return {void}
    */
    // toggleToolbarColorMode() {

    //     if (tree.toolbar.contains(styles.toolbar.colorMode)) {

    //         tree.toolbar.classList.add(styles.toolbar.colorMode);

    //     } else {

    //         tree.toolbar.classList.add(styles.toolbar.colorMode);
    //         canvas.setTextColor(tree.controllable, window.getComputedStyle(tree.controllable).color);

    //     }

    // }

    /**
    *   Changes a font size of controllable element after clicking on fontSize button
    *   @private
    *   @param {Event} event - event of click on fontSize button
    *   @return {void}
    */
    // changeControllableFontSize(event) {

    //     event.target.classList.remove(styles.buttons.fontSize[event.target.dataset.fontSize]);
    //     tree.controllable.classList.remove(styles.controllable.fontSize[event.target.dataset.fontSize]);
    //     event.target.dataset.fontSize += 1;
    //     event.target.dataset.fontSize %= styles.buttons.fontSize.length;
    //     event.target.classList.add(styles.buttons.fontSize[event.target.dataset.fontSize]);
    //     tree.controllable.classList.add(styles.controllable.fontSize[event.target.dataset.fontSize]);

    //     changeToolbarPosition();

    // }

    /**
    *   Changes position of controllable element after clicking on left/center/right button
    *   @private
    *   @param {Event} event - event of click on left/center/right button
    *   @return {void}
    */
    // changeControllableAlign(event) {

    //     tree.buttons.left.classList.remove(styles.buttons.active);
    //     tree.buttons.center.classList.remove(styles.buttons.active);
    //     tree.buttons.right.classList.remove(styles.buttons.active);
    //     event.target.classList.add(styles.buttons.active);

    //     var canvasShape = {'width': canvas.clientWidth, 'height': canvas.clientHeight},
    //         controllableShape = {'width': tree.controllable.clientWidth, 'height': tree.controllable.clientHeight};

    //     if (event.target.classList.contains(styles.buttons.left)) {

    //         canvas.setTextPosition(tree.controllable, canvasShape.width/properties.elementAlignPadding, tree.controllable.getAttribute('y'));

    //     } else if (event.target.classList.contains(styles.buttons.center)) {

    //         canvas.setTextPosition(tree.controllable, (canvasShape.width - tree.controllableShape.width)/2, tree.controllable.getAttribute('y'));

    //     } else if (event.target.classList.contains(styles.buttons.right)) {

    //         canvas.setTextPosition(tree.controllable, canvasShape.width - controllableShape.width - canvasShape.width/properties.elementAlignPadding, tree.controllable.getAttribute('y'));

    //     }
    //     changeToolbarPosition();

    // }

}
