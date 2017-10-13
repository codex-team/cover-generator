/**
 *   Creates a toolbar
 *   @class Toolbar
 *   @param {Element} elem         - element on a canvas which properties will be changed by toolbar
 *   @param {Canvas} canvas        - object of canvas where controllable element is located
 *   @param {Object} style         - object containing additional properties for toolbar
 *   @param {number} style.padding - size of padding between toolbar and controllable element
 *   @return {Toolbar}
 */
function Toolbar(elem, canvas, style) {

    var tree = {

        "toolbar": undefined,
        "controllable": undefined,
        "buttons": {

            "fontSize": undefined,
            "left": undefined,
            "center": undefined,
            "right": undefined,
            "colorForm": undefined,
            "color": undefined;

        }

    }

    /**
    *   Moving toolbar to the controllable element
    *   @private
    *   @param {void}
    *   @return {void}
    */
    function changeToolbarPosition() {

        var canvasCoords = canvas.getBoundingClientRect(),
            controllableCoords = tree.controllable.getBoundingClientRect();

        tree.toolbar.style.left = controllableCoords.left - canvasCoords.left + (tree.controllable.clientWidth - tree.toolbar.clientWidth)/2 + 'px';
        tree.toolbar.style.top = controllableCoords.top - canvasCoords.top - tree.controllable.clientHeight - style.padding + 'px';

    }

    /**
    *   Showing toolbar after clicking on controllable element
    *   @private
    *   @param {void}
    *   @return {void}
    */
    function showToolbar() {

        if (tree.toolbar.classList.contains('cover_editor__hidden')) {

            if (window.getSelection) {

                window.getSelection().removeAllRanges();

            } else {

                document.selection.empty();

            }
            tree.toolbar.classList.remove('cover_editor__hidden');

        }
        tree.controllable.classList.add('cover_editor__text-active');
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

            tree.controllable.classList.remove('cover_editor__text-active');
            tree.toolbar.classList.add('cover_editor__hidden');

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

        if (tree.colorForm.classList.contains('cover_editor__hidden')) {

            tree.colorForm.classList.remove('cover_editor__hidden');
            tree.buttons.forEach
            (
                (function (element) {

                    if (element !== tree.buttons.color && element !== tree.buttons.colorForm) {

                        element.classList.add('cover_editor__hidden');

                    }

                }).bind(this);

            );

        } else {

            colorForm.classList.add('cover_editor__hidden');
            tree.buttons.forEach
            (
                (function (element) {

                    if (element !== tree.buttons.color && element !== tree.buttons.colorForm) {

                        element.classList.remove('cover_editor__hidden');

                    }

                }).bind(this);

            );
            //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
            tree.controllable.style.color = window.getComputedStyle(tree.buttons.color).backgroundColor;

        }

    }

    /**
    *   Changes a font size of controllable element after clicking on fontSize button
    *   @private
    *   @param {Event} event - event of click on fontSize button
    *   @return {void}
    */
    function changeControllableFontSize(event) {

        //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        if (tree.buttons.fontSize.classList.contains('cover_editor__toolbar__button-font-size-big')) {

            tree.buttons.fontSize.classList.remove('cover_editor__toolbar__button-font-size-big');
            tree.controllable.classList.remove('cover_editor__text-font-size-big');

        } else if (tree.buttons.fontSize.classList.contains('cover_editor__toolbar__button-font-size-medium')) {

            tree.buttons.fontSize.classList.remove('cover_editor__toolbar__button-font-size-medium');
            tree.buttons.fontSize.classList.add('cover_editor__toolbar__button-font-size-big');
            tree.controllable.classList.remove('cover_editor__text-font-size-big');
            tree.controllable.classList.add('cover_editor__text-font-size-big');

        } else if (tree.buttons.fontSize.classList.contains('cover_editor__toolbar__button-font-size-small')) {

            tree.buttons.fontSize.classList.add('cover_editor__toolbar__button-font-size-medium');
            tree.controllable.classList.add('cover_editor__text-font-size-big');

        }

        changeToolbarPosition();

    }

    /**
    *   Changes position of controllable element after clicking on left/center/right button
    *   @private
    *   @param {Event} event - event of click on left/center/right button
    *   @return {void}
    */
    function changeControllableAlign(event) {

        //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        var actives = tree.buttons.getElementsByClassName('cover_editor__toolbar__icon__active');

        for (var counter = 0; counter < actives.length; counter++) {

            if (actives[counter] === tree.buttons.left || actives[counter] === tree.buttons.center || actives[counter] === tree.buttons.right) {

                actives[counter].classList.remove('cover_editor__toolbar__icon__active');
                break;

            }

        }
        event.target.classList.add('cover_editor__toolbar__icon__active');
        changeToolbarPosition();

    }

    //Связывание объекта toolbar с controllable
    tree.controllable = elem;
    tree.controllable.classList.add('cover_editor__text-font-size-small');
    tree.controllable.addEventListener('dblclick', showToolbar.bind(this));
    
    //Создание блока toolbar'а
    tree.toolbar = document.createElement('div'),
    tree.toolbar.classList.add('cover_editor__toolbar');
    tree.toolbar.classList.add('cover_editor__hidden');

    tree.buttons.left = document.createElement('button');
    tree.buttons.left.classList.add('cover_editor__toolbar__icon');
    tree.buttons.left.classList.add('cover_editor__toolbar__button-left');
    tree.buttons.left.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.left);
    tree.buttons.left.click();

    tree.buttons.center = document.createElement('button');
    tree.buttons.center.classList.add('cover_editor__toolbar__icon');
    tree.buttons.center.classList.add('cover_editor__toolbar__button-center');
    tree.buttons.center.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.center);

    tree.buttons.right = document.createElement('button');
    tree.buttons.right.classList.add('cover_editor__toolbar__icon');
    tree.buttons.right.classList.add('cover_editor__toolbar__button-right');
    tree.buttons.right.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.right);

    if (tree.controllable.tagName === 'SPAN' || tree.controllable.tagName === 'DIV') {

        tree.buttons.fontSize = document.createElement('button');
        tree.buttons.fontSize.classList.add('cover_editor__toolbar__icon');
        tree.buttons.fontSize.classList.add('cover_editor__toolbar__button-font-size-small');
        tree.buttons.fontSize.addEventListener('click', changeControllableFontSize.bind(this));
        tree.toolbar.insertBefore(tree.buttons.fontSize, tree.buttons.left);

        tree.buttons.colorForm = document.createElement('input');
        tree.buttons.colorForm.classList.add('cover_editor__toolbar__input-color-form');
        tree.buttons.colorForm.addEventListener('keyup', changeToolbarColorButtonColor.bind(this));
        tree.toolbar.appendChild(tree.buttons.colorForm);

        tree.buttons.color = document.createElement('button');
        tree.buttons.color.classList.add('cover_editor__toolbar__icon');
        tree.buttons.color.classList.add('cover_editor__toolbar__button-color');
        tree.buttons.color.addEventListener('click', toggleToolbarColorMode.bind(this));
        tree.toolbar.appendChild(tree.buttons.color);

    }

    document.body.addEventListener('click', hideToolbar.bind(this));

    return tree.toolbar;

}