var UI = function () {

    const CSS = {
        mainWindowCG: 'cover-generation__main-window',
        allButtons: 'cover-generation__buttons-div',
        headlineButton: 'cover-generation__headline-button',
        headlineButtonText: 'cover-generation__headline-button-text',
        mainlineButton: 'cover-generation__mainline-button',
        mainlineButtonText: 'cover-generation__headline-button-text',
        imagelineButton: 'cover-generation__imageline-button',
        imagelineButtonText: 'cover-generation__imageline-button-text',
        forSaveButton: 'cover-generation__save-button',
        sizeSquareButton: 'cover-generation__square-button',
        sizeHorisontButton: 'cover-generation__horisont-button',
        sizeVertButton: 'cover-generation__vert-button',
        mainFormCG: 'cover-generation__main-form',
        mainFormSVG: 'cover-generation__svg-main-form'
    };

    /**
    * Helper for making Elements with classname and attributes
    * @param  {string} tagName           - new Element tag name
    * @param  {array|string} classNames  - list or name of CSS classname(s)
    * @param  {Object} attributes        - any attributes
    * @return {Element}
    */
    const DOM = function () {

        function make(tagName, classNames, attributes) {

            var el = document.createElement(tagName);

            if ( Array.isArray(classNames) ) {

                el.classList.add(...classNames);

            } else if( classNames ) {

                el.classList.add(classNames);

            }

            for (let attrName in attributes) {

                el[attrName] = attributes[attrName];

            }
            return el;

        };

        return {make: make};

    }();

    /**
    * Create cover-editor
    * @param {object} settings - array of paramertres
    * @param {string} settings.holderId - ID of element to create cover-editor
    */
    function create(HolderID) {

        var holder = document.getElementByClassName(HolderID);

        var mainWindow = DOM.make('div', CSS.mainWindowCG);

        var buttonsDiv = DOM.make('div', CSS.allButtons);

        // functions for creating elements
        console.log(createResizeButtonSquareButton());
        buttonsDiv.appendChild(createResizeButtonSquareButton());
        buttonsDiv.appendChild(createResizeButtonHorisontButton());
        buttonsDiv.appendChild(createResizeButtonVertButton());
        buttonsDiv.appendChild(createHeadButton());
        buttonsDiv.appendChild(createMainButton());
        buttonsDiv.appendChild(createImageButton());
        buttonsDiv.appendChild(createSaveButton());

        mainWindow.appendChild(buttonsDiv);
        mainWindow.appendChild(createMainForm());

        holder.appendChild(mainWindow);

    }

    /**
    * Creates SVG element
    *
    * @param {string} kindSVG - element tag name
    * @param {object} param - parametrs
    *
    * @returns {Element} new created svg tag
    */
    function createSVG(kindSVG, param) {

        var n = document.createElementNS('http://www.w3.org/2000/svg', kindSVG);

        for (var p in param) {

            n.setAttributeNS(null, p, param[p]);

        }
        return n;

    }

    /**
    * Creates resize button square
    */
    function createResizeButtonSquareButton() {


        var squareButton = DOM.make('button', CSS.sizeSquareButton);

        // squareButton.addEventListener("click",canvasSquareButton);

        return squareButton;

    }

    /**
    * Creates resize button horisontal
    */
    function createResizeButtonHorisontButton() {

        var horisontButton = DOM.make('button', CSS.sizeHorisontButton);

        // horisontButton.addEventListener("click",canvasHorisontButton);

        return horisontButton;

    }

    /**
    * Creates resize button vertical
    */  
    function createResizeButtonVertButton() {

        var vertButton = DOM.make('button', CSS.sizeVertButton);

        // vertButton.addEventListener("click",canvasVertButton);

        return vertButton;

    }

    /**
    * Creates button for head text
    */
    function createHeadButton() {

        // Form

        var headlineButton = DOM.make('button', CSS.headlineButton);

        // MainText

        var text = DOM.make('span', CSS.headlineButtonText, {
            textContent: 'Headline'
        });

        headlineButton.appendChild(text);

        // addButton

        // headButton.addEventListener("click",canvasHeadButton);

        return headlineButton;

    }

    /**
    * Creates button for main text
    */
    function createMainButton() {

        // Form

        var mainlineButton = DOM.make('button', CSS.mainlineButton);

        // MainText

        var text = DOM.make('span', CSS.mainlineButtonText, {
            textContent: 'Main text'
        });

        mainlineButton.appendChild(text);

        // addButton

        // mainButton.addEventListener("click",canvasMainButton);

        return mainlineButton;

    }

    /**
    * Creates button for image
    */
    function createImageButton() {

        // Form

        var imageButton = DOM.make('button', CSS.imagelineButton);

        // MainText

        var text = DOM.make('span', CSS.imagelineButtonText, {
            textContent: 'Image'
        });

        imageButton.appendChild(text);

        // addButton

        // imageButton.addEventListener("click",canvasImageButton);

        return imageButton;

    }

    /**
    * Creates button for saving
    */
    function createSaveButton() {

        // Form

        var saveButton = DOM.make('button', CSS.forSaveButton);

        // addButton

        // saveButton.addEventListener("click",canvasImageButton);

        return saveButton;

    }


    /**
    * Creates main form
    */
    function createMainForm() {

        // Form

        var MainFormDiv = DOM.make('div', CSS.mainFormCG);

        var svg = createSVG('svg');

        svg.classList.add(CSS.mainFormSVG);

        MainFormDiv.appendChild(svg);

        // Svg

        var formSVG = createSVG('rect', {
            width: 650,
            height: 370,
            rx: 2,
            ry: 2,
            fill: '#FFFFFF',
            stroke:'#D6E5F9',
            strokeWidth:3,
            strokeDasharray: '0.5%',
            strokeDashoffset: '10%',
            strokeLinejoin: 'miter',
            strokeLinecap: 'butt'
        });

        svg.appendChild(formSVG);

        return MainFormDiv;

    }

    function getToolbar() {

        var ToolBar = new ToolBar();

    }

    function getCanvas() {

        var Canvas = new Canvas();

    }

    return {
        create
    };

}();
