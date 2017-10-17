/**
 *   Creates a toolbar
 *   @class Toolbar
 *   @param {Element} elem                             - element on a canvas which properties will be changed by toolbar
 *   @param {Canvas} canvas                            - object of canvas where controllable element is located
 *   @param {Object} properties                        - object containing additional properties for toolbar
 *   @param {number} properties.padding                - size of padding between toolbar and controllable element
 *   @param {number} properties.elementAlignPadding    - size of padding between the border of canvas and controllable element in %
 *   @return {Toolbar}
 */
function Toolbar(elem, canvas, properties) {

    var tree = {

        'toolbar': undefined,
        'controllable': undefined,
        'buttons': {

            'fontSize': undefined,
            'left': undefined,
            'center': undefined,
            'right': undefined,
            'colorForm': undefined,
            'color': undefined;

        }

    }

    var styles = {

        'hidden': 'cover_editor__hidden',
        'toolbar': {

            'colorMode': 'cover-editor__toolbar--color_mode',
            'normal': 'cover-editor__toolbar'

        },
        'controllable': {

            'active': 'cover_editor__text--active',
            'fontSize': ['cover_editor__text--small', 'cover_editor__text--medium', 'cover_editor__text--big']

        },
        'buttons': {

            'main': 'cover_editor__toolbar__icon',
            'active': 'cover_editor__toolbar__icon--active',
            'left': 'cover_editor__toolbar__button--left',
            'center': 'cover_editor__toolbar__button--center',
            'right': 'cover_editor__toolbar__button-right',
            'fontSize': ['cover_editor__toolbar__button--small', 'cover_editor__toolbar__button--medium', 'cover_editor__toolbar__button--big'],
            'colorForm': 'cover_editor__toolbar__input--color-form',
            'color': 'cover_editor__toolbar__buttin--color'

        }

    }

    /**
    *   Moving toolbar to the controllable element
    *   @private
    *   @param {void}
    *   @return {void}
    */
    function changeToolbarPosition() {

        var canvasCoords = canvas.svg.getBoundingClientRect(),
            controllableCoords = tree.controllable.getBoundingClientRect();

        tree.toolbar.style.left = controllableCoords.left - canvasCoords.left + (tree.controllable.clientWidth - tree.toolbar.clientWidth)/2 + 'px';
        tree.toolbar.style.top = controllableCoords.top - canvasCoords.top - tree.controllable.clientHeight - properties.padding + 'px';

    }

    /**
    *   Showing toolbar after clicking on controllable element
    *   @private
    *   @param {void}
    *   @return {void}
    */
    function showToolbar() {

        if (tree.toolbar.classList.contains(styles.hidden)) {

            if (window.getSelection) {

                window.getSelection().removeAllRanges();

            } else {

                document.selection.empty();

            }
            tree.toolbar.classList.remove(styles.hidden);

        }
        tree.controllable.classList.add(styles.controllable.active);
        changeToolbarPosition();

    }

    /**
    *   Hiding toolbar after controllable element has been unfocused
    *   @private
    *   @param {Event} event - event of clicking on body
    *   @return {void}
    */
    function hideToolbar(event) {

        if (event.target !== tree.controllable && event.target.parentNode !== tree.toolbar && event.target !== tree.toolbar) {

            tree.controllable.classList.remove(styles.controllable.active);
            tree.toolbar.classList.add(styles.hidden);

        }

    }

    /**
    *   Chenging color of color button in toolbar after valid CSS color string has been written in colorForm element
    *   @private
    *   @param {Event} event - event of keyup in colorForm field in toolbar
    *   @return {void}
    */
    function changeToolbarColorButtonColor(event) {

        tree.buttons.color.style.backgroundColor = event.target.value;

    }

    /**
    *   Unhiding or hiding color input field in toolbar
    *   @private
    *   @param {Event} event - event of click  on color button in toolbar
    *   @return {void}
    */
    function toggleToolbarColorMode(event) {

        if (tree.toolbar.contains(styles.toolbar.colorMode)) {

            tree.toolbar.classList.add(styles.toolbar.colorMode);

        } else {

            tree.toolbar.classList.add(styles.toolbar.colorMode);
            canvas.setTextColor(controllable, getComputedStyle(controllable).color);
        }

    }

    /**
    *   Changes a font size of controllable element after clicking on fontSize button
    *   @private
    *   @param {Event} event - event of click on fontSize button
    *   @return {void}
    */
    function changeControllableFontSize(event) {

        event.target.classList.remove(styles.buttons.fontSize[event.target.dataset.fontSize]);
        controllable.classList.remove(styles.controllable.fontSize[event.target.dataset.fontSize]);
        event.target.dataset.fontSize += 1;
        event.target.dataset.fontSize %= styles.buttons.fontSize.length;
        event.target.classList.add(styles.buttons.fontSize[event.target.dataset.fontSize]);
        controllable.classList.add(styles.controllable.fontSize[event.target.dataset.fontSize]);

        changeToolbarPosition();

    }

    /**
    *   Changes position of controllable element after clicking on left/center/right button
    *   @private
    *   @param {Event} event - event of click on left/center/right button
    *   @return {void}
    */
    function changeControllableAlign(event) {

        tree.buttons.left.classList.remove(styles.buttons.active);
        tree.buttons.center.classList.remove(styles.buttons.active);
        tree.buttons.right.classList.remove(styles.buttons.active);
        event.target.classList.add(styles.buttons.active);

        var canvasShape = {'width': canvas.clientWidth, 'height': canvas.clientHeight},
	    controllableShape = {'width': controllable.clientWidth, 'height': controllable.clientHeight};

        if (event.target.classList.contains(styles.buttons.left)) {

            canvas.setTextPosition(controllable, canvasShape.width/properties.elementAlignPadding, controllable.getAttribute("y"));

        } else if (event.target.classList.contains(styles.buttons.center)) {

            canvas.setTextPosition(controllable, (canvasShape.width - controllableShape.width)/2, controllable.getAttribute("y"));

        } else if (event.target.classList.contains(styles.buttons.right)) {

            canvas.setTextPosition(controllable, canvasShape.width - controllableShape.width - canvasShape.width/properties.elementAlignPadding, controllable.getAttribute("y"));

        }
        changeToolbarPosition();

    }

    //Связывание объекта toolbar с controllable
    tree.controllable = elem;
    tree.controllable.classList.add(styles.controllable.fontSize[0]);
    tree.controllable.addEventListener('dblclick', showToolbar.bind(this));
    
    //Создание блока toolbar'а
    tree.toolbar = document.createElement('div'),
    tree.toolbar.classList.add(styles.toolbar.normal);
    tree.toolbar.classList.add(styles.hidden);

    tree.buttons.left = document.createElement('button');
    tree.buttons.left.classList.add(styles.buttons.main);
    tree.buttons.left.classList.add(styles.buttons.left);
    tree.buttons.left.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.left);
    tree.buttons.left.click();

    tree.buttons.center = document.createElement('button');
    tree.buttons.center.classList.add(styles.buttons.main);
    tree.buttons.center.classList.add(styles.buttons.center);
    tree.buttons.center.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.center);

    tree.buttons.right = document.createElement('button');
    tree.buttons.right.classList.add(styles.buttons.main);
    tree.buttons.right.classList.add(styles.buttons.right);
    tree.buttons.right.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.right);

    if (controllable.tagName == 'FOREIGNOBJECT') {

        tree.buttons.fontSize = document.createElement('button');
        tree.buttons.fontSize.classList.add(styles.buttons.main);
        tree.buttons.fontSize.dataset.fontSize = 0;
        tree.buttons.fontSize.classList.add(styles.buttons.fontSize[0]);
        tree.buttons.fontSize.addEventListener('click', changeControllableFontSize.bind(this));
        tree.toolbar.insertBefore(tree.buttons.fontSize, tree.buttons.left);

        tree.buttons.colorForm = document.createElement('input');
        tree.buttons.colorForm.classList.add(styles.buttons.colorForm);
        tree.buttons.colorForm.addEventListener('keyup', changeToolbarColorButtonColor.bind(this));
        tree.toolbar.appendChild(tree.buttons.colorForm);

        tree.buttons.color = document.createElement('button');
        tree.buttons.color.classList.add(styles.buttons.main);
        tree.buttons.color.classList.add(styles.buttons.color);
        tree.buttons.color.addEventListener('click', toggleToolbarColorMode.bind(this));
        tree.toolbar.appendChild(tree.buttons.color);

    }

    document.body.addEventListener('click', hideToolbar.bind(this));

    return tree.toolbar;

}
