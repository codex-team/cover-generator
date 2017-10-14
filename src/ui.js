var UI = function () {

  	/**
   	* Helper for making Elements with classname and attributes
   	* @param  {string} tagName           - new Element tag name
   	* @param  {array|string} classNames  - list or name of CSS classname(s)
   	* @param  {Object} attributes        - any attributes
   	* @return {Element}
   	*/
	const DOM = function() {
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
	}()    

	/**
	* Create cover-editor
	* @param {object} settings - array of paramertres
	* @param {string} settings.holderId - ID of element to create cover-editor
	*/
	function create(HolderID) {

		var holder = document.getElementById(HolderID);

		var buttonsDiv = DOM.make('div','buttonsDiv');

		//functions for creating elements
		console.log(createResizeButtonSquareButton());
		buttonsDiv.appendChild(createResizeButtonSquareButton());
		buttonsDiv.appendChild(createResizeButtonHorisontButton());
		buttonsDiv.appendChild(createResizeButtonVertButton());
		buttonsDiv.appendChild(createHeadButton());
		buttonsDiv.appendChild(createMainButton());
		buttonsDiv.appendChild(createImageButton());
		buttonsDiv.appendChild(createSaveButton());

		holder.appendChild(buttonsDiv);

		holder.appendChild(createMainForm());

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
  		n = document.createElementNS("http://www.w3.org/2000/svg", kindSVG);
  		for (var p in param) {
  			n.setAttributeNS(null, p, param[p]);
  		}
  		return n
	}

	/**
	* Creates resize button square
	*/
	function createResizeButtonSquareButton() {
		

		var squareButton = DOM.make('button','squareButton');

		//squareButton.addEventListener("click",canvasSquareButton);
		
		return squareButton;

	}

	/**
	* Creates resize button horisontal
	*/
	function createResizeButtonHorisontButton() {
		
		var horisontButton = DOM.make('button','horisontButton');

		//horisontButton.addEventListener("click",canvasHorisontButton);
	
		return horisontButton;

	}
		
	/**
	* Creates resize button vertical
	*/	
	function createResizeButtonVertButton() {
		
		var vertButton = DOM.make('button','vertButton');
		
		//vertButton.addEventListener("click",canvasVertButton);
		
		return vertButton;

	}

	/**
	* Creates button for head text
	*/
	function createHeadButton() {

		// Form
		
		var headButton = DOM.make('button', 'headButton');

		// Image		

		var imageHeadButton = DOM.make('img', 'imgHeadButton', {
		 	src: 'images/CharT.svg'
		})

		headButton.appendChild(imageHeadButton);

		// MainText

		var text = DOM.make('span', 'textHeadButton', {
			textContent: 'Headline'
		})

		headButton.appendChild(text);

		// addButton

		//headButton.addEventListener("click",canvasHeadButton);
		
		return headButton;

	}

	/**
	* Creates button for main text
	*/
	function createMainButton() {
		
		// Form

		var mainButton = DOM.make('button','mainButton');

		// Image

		var img = DOM.make('img','imgMainButton', {
			src: 'images/CharT.svg'
		})
		
		mainButton.appendChild(img);

		// MainText

		var text = DOM.make('span','textMainButton', {
			textContent: 'Main text'
		})

		mainButton.appendChild(text);

		// addButton

		//mainButton.addEventListener("click",canvasMainButton);
		
		return mainButton;
	
	}

	/**
	* Creates button for image
	*/
	function createImageButton() {
		
		// Form

		var imageButton = DOM.make('button','imageButton');

		// Image

		var img = DOM.make('img','imgButtonImage', {
			src: 'images/imgButton.svg'
		})

		imageButton.appendChild(img);

		// MainText

		var text = DOM.make('span','textImageButton', {
			textContent: 'Image'
		})

		imageButton.appendChild(text);

		// addButton

		//imageButton.addEventListener("click",canvasImageButton);

		return imageButton;

	}

	/**
	* Creates button for saving
	*/
	function createSaveButton() {
		
		// Form

		var saveButton = DOM.make('button','saveButton');

		// Image

		var img = DOM.make('img','saveButtonImage', {
			src: 'images/save.svg'
		});

		saveButton.appendChild(img);

		// addButton

		//saveButton.addEventListener("click",canvasImageButton);

		return saveButton;
	
	}

	
	/**
	* Creates main form
	*/
	function createMainForm() {

		//Form

		var MainFormDiv = DOM.make('div','mainForm');

		var svg = createSVG('svg');
		svg.classList.add('svgMainForm');

		MainFormDiv.appendChild(svg);

		//Svg

		var formSVG = createSVG('rect', {
			width: 650, 
			height: 370, 
			rx: 2, 
			ry: 2, 
			fill: '#FFFFFF', 
			stroke:'#D6E5F9', 
			strokeWidth:3, 
			strokeDasharray: "0.5%", 
			strokeDashoffset: "10%", 
			strokeLinejoin: "miter", 
			strokeLinecap: "butt"
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
	}

}()
