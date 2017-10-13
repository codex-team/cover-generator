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

    function changeToolbarPosition() {

        var canvasCoords = canvas.getBoundingClientRect(),
            controllableCoords = tree.controllable.getBoundingClientRect();

        tree.toolbar.style.left = controllableCoords.left - canvasCoords.left + (tree.controllable.clientWidth - tree.toolbar.clientWidth)/2 + 'px';
        tree.toolbar.style.top = controllableCoords.top - canvasCoords.top - tree.controllable.clientHeight - style.padding + 'px';

    }

    function showToolbar() {

        if (tree.toolbar.classList.contains('cover_editor__hidden')) {

            if (window.getSelection) {

                window.getSelection().removeAllRanges();

            } else {

                document.selection.empty();

            }
            tree.toolbar.classList.remove('cover_editor__hidden');

        }
        tree.controllable.classList.add('cover_editor__text_active');
        changeToolbarPosition();

    }

    function hideToolbar(event) {

        if (event.target !== tree.controllable && event.target.parentNode !== tree.toolbar && event.target !== tree.toolbar) {

            tree.controllable.classList.remove('cover_editor__text_active');
            tree.toolbar.classList.add('cover_editor__hidden');

        }

    }

    function changeControllableColor(event) {

        tree.buttons.color.style.backgroundColor = event.target.value;

    }

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

    function changeControllableFontSize(event) {

        //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        if (tree.buttons.fontSize.classList.contains('cover_editor__toolbar__button_font_size_big')) {

            tree.buttons.fontSize.classList.remove('cover_editor__toolbar__button_font_size_big');
            tree.controllable.classList.remove('cover_editor__text_font_size_big');

        } else if (tree.buttons.fontSize.classList.contains('cover_editor__toolbar__button_font_size_medium')) {

            tree.buttons.fontSize.classList.remove('cover_editor__toolbar__button_font_size_medium');
            tree.buttons.fontSize.classList.add('cover_editor__toolbar__button_font_size_big');
            tree.controllable.classList.remove('cover_editor__text_font_size_big');
            tree.controllable.classList.add('cover_editor__text_font_size_big');

        } else if (tree.buttons.fontSize.classList.contains('cover_editor__toolbar__button_font_size_small')) {

            tree.buttons.fontSize.classList.add('cover_editor__toolbar__button_font_size_medium');
            tree.controllable.classList.add('cover_editor__text_font_size_big');

        }

        changeToolbarPosition();

    }

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
    tree.controllable.classList.add('cover_editor__text_font_size_small');
    tree.controllable.addEventListener('dblclick', showToolbar.bind(this));
    
    //Создание блока toolbar'а
    tree.toolbar = document.createElement('div'),
    tree.toolbar.classList.add('cover_editor__toolbar');
    tree.toolbar.classList.add('cover_editor__hidden');

    tree.buttons.left = document.createElement('button');
    tree.buttons.left.classList.add('cover_editor__toolbar__icon');
    tree.buttons.left.classList.add('cover_editor__toolbar__button_left');
    tree.buttons.left.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.left);
    tree.buttons.left.click();

    tree.buttons.center = document.createElement('button');
    tree.buttons.center.classList.add('cover_editor__toolbar__icon');
    tree.buttons.center.classList.add('cover_editor__toolbar__button_center');
    tree.buttons.center.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.center);

    tree.buttons.right = document.createElement('button');
    tree.buttons.right.classList.add('cover_editor__toolbar__icon');
    tree.buttons.right.classList.add('cover_editor__toolbar__button_right');
    tree.buttons.right.addEventListener('click', changeControllableAlign.bind(this));
    tree.toolbar.appendChild(tree.buttons.right);

    if (tree.controllable.tagName === 'SPAN' || tree.controllable.tagName === 'DIV') {

        tree.buttons.fontSize = document.createElement('button');
        tree.buttons.fontSize.classList.add('cover_editor__toolbar__icon');
        tree.buttons.fontSize.classList.add('cover_editor__toolbar__button_font_size_small');
        tree.buttons.fontSize.addEventListener('click', changeControllableFontSize.bind(this));
        tree.toolbar.insertBefore(tree.buttons.fontSize, tree.buttons.left);

        tree.buttons.colorForm = document.createElement('input');
        tree.buttons.colorForm.classList.add('cover_editor__toolbar__input_color_form');
        tree.buttons.colorForm.addEventListener('keyup', changeControllableColor.bind(this));
        tree.toolbar.appendChild(tree.buttons.colorForm);

        tree.buttons.color = document.createElement('button');
        tree.buttons.color.classList.add('cover_editor__toolbar__icon');
        tree.buttons.color.classList.add('cover_editor__toolbar__button_color');
        tree.buttons.color.addEventListener('click', toggleToolbarColorMode.bind(this));
        tree.toolbar.appendChild(tree.buttons.color);

    }

    document.body.addEventListener('click', hideToolbar.bind(this));

    return tree.toolbar;

}