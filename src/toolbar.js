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
 */
export default class Toolbar {

    /**
     * @constructor
     *
     * Toolbar module
     */
    constructor() {

        /**
         * Components which are controlling something.
         * @type {Object}
         */
        this.instances = {
            canvas: null
        };

        /**
         * On which element toolbar was open
         * @type {Element|null}
         */
        this.target = null;
        this.properties = {
            fontSize: {
                small: '25px',
                medium: '28px',
                big: '31px'
            }
        };

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
            target: {
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
     * @param  {Element} editor         - main wrapper
     * @param  {Element} canvasInstance - canvas object
     */
    create(editor, canvas, canvasInstance) {

        /**
         * Main Editor wrapper
         * @type {Element}
         */
        this.editor = editor;
        this.canvas = canvas;
        this.instances.canvas = canvasInstance;

        this.make();

    }


    /**
     * Creates toolbar
     */
    make() {

        // tree.controllable = elem;
        // tree.controllable.classList.add(styles.controllable.fontSize[0]);
        // tree.controllable.addEventListener('dblclick', showToolbar.bind(this));

        this.tree.toolbar = $.make('div', [this.CSS.toolbar.normal, this.CSS.hidden]);

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
         * Add color form
         */
        this.tree.colorForm = $.make('input', [ this.CSS.colorForm ]);
        this.tree.toolbar.insertBefore(this.tree.colorForm, this.tree.buttons.color);

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
            action = event.target.dataset.action;

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
                this.changeColorMode();
                break;

        }

    }

    /**
     * Changes font size of target
     * @param {Integer} fontSize - number of font size
     */
    changeFontSize( fontSize ) {

        let current = this.target.dataset.fontSize;

        if (current == 'small') {

            current = 'medium';

        } else if (current == 'medium') {

            current = 'big';

        } else if (current == 'big') {

            current = 'small';

        } else {

            return;

        }

        this.target.dataset.fontSize = current;
        this.instances.canvas.setFontSize(this.target, this.properties.fontSize[current]);
        this.moveToTarget();

    }

    /**
     * Opens toolbar near element
     * @param {String} alignment - alignment of target: 'left', 'center' or 'right'
     */
    changeAlignment( alignment ) {

        this.target.dataset.alignment = alignment;

        ['left', 'center', 'right'].forEach( type => {

            this.tree.buttons[type].classList.remove(this.CSS.buttons.active);

        });

        this.instances.canvas.setPosition(this.target, {x: alignment, y: undefined});
        this.moveToTarget();

    }

    /**
     * Changes color of target and toolbar color button
     * @param {String} color - color of target
     */
    changeColor( color ) {

        this.instances.canvas.setColor(this.target, color);
        this.target.dataset.color = color;
        this.tree.buttons.color.style.background = color;

    }

    /**
     * Toggles color mode of toolbar
     */
    changeColorMode() {

        if (this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)) {

            this.changeColor(this.tree.colorForm.value);
            this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode);

        } else {

            this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode);

        }

        this.moveToTarget();

    }

    /**
     * Moves toolbar to target
     */
    moveToTarget() {

        let element = this.target,
            relatively = {left: this.canvas.parentNode.offsetLeft, top: this.canvas.parentNode.offsetTop},
            to = {left: window.Number(element.getAttribute('x')), top: window.Number(element.getAttribute('y'))};

        if (this.target.dataset.alignment === 'left') {

            this.tree.toolbar.style.left = relatively.left + to.left + 'px';

        } else if (this.target.dataset.alignment === 'center') {

            this.tree.toolbar.style.left = relatively.left + to.left + (element.clientWidth - this.tree.toolbar.clientWidth) / 2 + 'px';

        } else if (this.target.dataset.alignment === 'right') {

            this.tree.toolbar.style.left = relatively.left + to.left + this.target.clientWidth - this.tree.toolbar.clientWidth + 'px';

        }

        this.tree.toolbar.style.top = relatively.top + to.top - this.tree.toolbar.clientHeight + 'px';

    }

    /**
     * Reads states of buttons from target
     */
    getTargetParams() {

        if (this.target.dataset.fontSize == undefined)  {

            this.target.dataset.fontSize = 'small';
            this.changeFontSize(this.target.dataset.fontSize);

        }

        if (this.target.dataset.alignment == undefined) {

            this.target.dataset.alignment = 'left';
            this.changeAlignment(this.target.dataset.alignment);

        }

        if (this.target.dataset.color == undefined) {

            this.target.dataset.color = '#000000';
            this.changeColor(this.target.dataset.color);

        }

    }

    /**
     * Opens toolbar near element
     *
     * @param {Object} opitons
     * @param {Element} options.target - element to show toolbar
     */
    openNear({ target }) {

        this.target = target;
        this.tree.toolbar.classList.remove(this.CSS.hidden);
        this.moveToTarget();
        this.getTargetParams();

    }

    /**
     * Clears buttons states in toolbar
     */
    removeTargetParams() {

        // this.target.classList.add(this.CSS.target.fontSizes[this.target.dataset.fontSize]);
        // this.tree.toolbar.classList.add(this.CSS.toolbar.fontSize[this.target.dataset.fontSize]);

        this.tree.buttons.left.classList.remove(this.CSS.buttons.active);
        this.tree.buttons.center.classList.remove(this.CSS.buttons.active);
        this.tree.buttons.right.classList.remove(this.CSS.buttons.active);

    }

    /**
     * Hides a toolbar
     */
    hide() {

        console.log('hide');
        this.removeTargetParams();
        this.target = null;
        this.tree.toolbar.classList.add(this.CSS.hidden);

    }

}
