function Toolbar(elem, canvas, style) {

    function changeToolbarPosition() {

        var canvasCoords = canvas.getBoundingClientRect(),
            controllableCoords = controllable.getBoundingClientRect();

        toolbar.style.left = controllableCoords.left - canvasCoords.left + (controllable.clientWidth - toolbar.clientWidth)/2 + 'px';
        toolbar.style.top = controllableCoords.top - canvasCoords.top - controllable.clientHeight - style.padding + 'px';

    }

    function showToolbar() {

        if (toolbar.classList.contains('cover_editor__hidden')) {

            if (window.getSelection) {

                window.getSelection().removeAllRanges();

            } else {

                document.selection.empty();

            }
            toolbar.classList.remove('cover_editor__hidden');

        }
        controllable.classList.add('cover_editor__text_active');
        changeToolbarPosition();

    }

    function hideToolbar(event) {

        if (event.target !== controllable && event.target.parentNode !== toolbar && event.target !== toolbar) {

            controllable.classList.remove('cover_editor__text_active');
            toolbar.classList.add('cover_editor__hidden');

        }

    }

    function changeControllableColor(event) {

        event.target.parentNode.getElementsByClassName('cover_editor__toolbar__button_color')[0].style.backgroundColor = event.target.value;

    }

    function toggleToolbarColorMode(event) {

        var colorForm = event.target.parentNode.getElementsByClassName('cover_editor__toolbar__button_color')[0];

        if (colorForm.classList.contains('cover_editor__hidden')) {

            colorForm.classList.remove('cover_editor__hidden');
            Array.from(event.target.parentNode.children).forEach
            (
                function (element) {

                    if (!element.classList.contains('cover_editor__toolbar__button_color') && !element.classList.contains('cover_editor__toolbar__input_color_form')) {

                        element.classList.add('cover_editor__hidden');

                    }

                }

            );

        } else {

            colorForm.classList.add('cover_editor__hidden');
            Array.from(event.target.parentNode.children).forEach
            (
                function (element) {

                    if (!element.classList.contains('cover_editor__toolbar__button_color') && !element.classList.contains('cover_editor__toolbar__input_color_form')) {

                        element.classList.remove('cover_editor__hidden');

                    }

                }

            );
            //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
            controllable.style.color = window.getComputedStyle(event.target.parentNode.getElementsByClassName('cover_editor__toolbar__button_color')[0]).backgroundColor;

        }

    }

    function changeControllableFontSize(event) {

        //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        if (event.target.classList.contains('cover_editor__toolbar__button_font_size_big')) {

            event.target.classList.remove('cover_editor__toolbar__button_font_size_big');
            controllable.classList.remove('cover_editor__text_font_size_big');

        } else if (event.target.classList.contains('cover_editor__toolbar__button_font_size_medium')) {

            event.target.classList.remove('cover_editor__toolbar__button_font_size_medium');
            event.target.classList.add('cover_editor__toolbar__button_font_size_big');
            controllable.classList.remove('cover_editor__text_font_size_big');
            controllable.classList.add('cover_editor__text_font_size_big');

        } else if (event.target.classList.contains('cover_editor__toolbar__button_font_size_small')) {

            event.target.classList.add('cover_editor__toolbar__button_font_size_medium');
            controllable.classList.add('cover_editor__text_font_size_big');

        }

        changeToolbarPosition();

    }

    function changeControllableAlign(event) {

        //  ЗАВИСИМОЕ ПРЕОБРАЗОВАНИЕ
        var actives = event.target.parentNode.getElementsByClassName('cover_editor__toolbar__icon__active');

        for (var counter = 0; counter < actives.length; counter++) {

            if (actives[counter].classList.contains('cover_editor__toolbar__button_left') || actives[counter].classList.contains('cover_editor__toolbar__button_center') || actives[counter].classList.contains('cover_editor__toolbar__button_right')) {

                actives[counter].classList.remove('cover_editor__toolbar__icon__active');
                break;

            }

        }
        event.target.classList.add('cover_editor__toolbar__icon__active');
        changeToolbarPosition();

    }

    //Связывание объекта toolbar с controllable
    var controllable = elem;

    controllable.classList.add('cover_editor__text_font_size_small');
    controllable.addEventListener('dblclick', showToolbar.bind(this));
    
    //Создание блока toolbar'а
    var toolbar = document.createElement('div'),
        icon;

    toolbar.classList.add('cover_editor__toolbar');
    toolbar.classList.add('cover_editor__hidden');

    icon = document.createElement('button');
    icon.classList.add('cover_editor__toolbar__icon');
    icon.classList.add('cover_editor__toolbar__button_left');
    icon.addEventListener('click', changeControllableAlign.bind(this));
    toolbar.appendChild(icon);
    icon.dispatchEvent(new Event('click'));

    icon = document.createElement('button');
    icon.classList.add('cover_editor__toolbar__icon');
    icon.classList.add('cover_editor__toolbar__button_center');
    icon.addEventListener('click', changeControllableAlign.bind(this));
    toolbar.appendChild(icon);

    icon = document.createElement('button');
    icon.classList.add('cover_editor__toolbar__icon');
    icon.classList.add('cover_editor__toolbar__button_right');
    icon.addEventListener('click', changeControllableAlign.bind(this));
    toolbar.appendChild(icon);

    if (controllable.tagName === 'SPAN' || controllable.tagName === 'DIV') {

        icon = document.createElement('button');
        icon.classList.add('icon');
        icon.classList.add('cover_editor__toolbar__button_font_size_small');
        icon.addEventListener('click', changeControllableFontSize.bind(this));
        toolbar.insertBefore(icon, toolbar.firstChild);

        icon = document.createElement('input');
        icon.classList.add('cover_editor__toolbar__input_color_form');
        icon.addEventListener('keyup', changeControllableColor.bind(this));
        toolbar.appendChild(icon);

        icon = document.createElement('button');
        icon.classList.add('cover_editor__toolbar__icon');
        icon.classList.add('cover_editor__toolbar__button_color');
        icon.addEventListener('click', toggleToolbarColorMode.bind(this));
        toolbar.appendChild(icon);

    }

    document.body.addEventListener('click', hideToolbar.bind(this));

    return toolbar;

}