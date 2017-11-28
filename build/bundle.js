var codex=codex||{};codex.cover=function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){o(this,t)}return r(t,null,[{key:"make",value:function(t,e,i){var o=document.createElement(t);if(Array.isArray(e)){var r;(r=o.classList).add.apply(r,n(e))}else e&&o.classList.add(e);for(var a in i)o[a]=i[a];return o}},{key:"svg",value:function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)i.setAttributeNS(null,n,e[n]);return i}}]),t}();e.default=a},function(t,e,i){"use strict";t.exports=function(){i(2);var t=i(3),e=i(4).default,n=i(5).default;return{init:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(i.containerId,"Container id is missed");var o=document.getElementById(i.containerId);if(!o)return void console.warn("Container was not found by id %o",i.containerId);var r=new e,a=new n;t.create(o,r,a)},destroy:function(){}}}()},function(t,e){},function(t,e,i){"use strict";t.exports=function(){function t(t){t.target.classList.contains(h.canvasWrapper)||"rect"==t.target.tagName?(d.toolbar.hide(),v.canvasWrapper.classList.add(h.canvasActive)):v.canvasWrapper.classList.remove(h.canvasActive)}function e(){d.canvas.export()}function n(t){var e=t.target,i=e.dataset.size;["resizeSqure","resizeVertical","resizeHorisontal"].forEach(function(t){v.controls[t].classList.remove(h.resizeButtonActive)}),t.target.classList.add(h.resizeButtonActive),d.canvas.setCanvasFormat(i)}function o(t){r(t.target.dataset.object)}function r(t){v[t]||(v[t]=d.canvas.createElement(t),v[t].addEventListener("click",s),a(v[t]))}function a(t){d.toolbar.openNear({target:t})}function s(){a(this)}function l(){document.body.addEventListener("click",t),v.controls.saveButton.addEventListener("click",e),v.controls.resizeSqure.addEventListener("click",n),v.controls.resizeVertical.addEventListener("click",n),v.controls.resizeHorisontal.addEventListener("click",n),v.controls.pictureButton.addEventListener("click",o),v.controls.mainTextButton.addEventListener("click",o),v.controls.headlineButton.addEventListener("click",o)}function c(t,e,i){var n=u.make("div",h.editor),o=u.make("div",h.controls);d.canvas=e,d.toolbar=i,v.canvasWrapper=u.make("div",h.canvasWrapper),v.canvas=d.canvas.create(v.canvasWrapper),v.controls.resizeSqure=u.make("span",[h.resizeButton,h.resizeButtonSquare]),v.controls.resizeVertical=u.make("span",[h.resizeButton,h.resizeButtonVertical]),v.controls.resizeHorisontal=u.make("span",[h.resizeButton,h.resizeButtonHorisontal]),v.controls.saveButton=u.make("span",[h.controlButton,h.controlButtonSave]),v.controls.pictureButton=u.make("span",[h.controlButton,h.imageControl],{textContent:"Image"}),v.controls.mainTextButton=u.make("span",[h.controlButton,h.mainTextControl],{textContent:"Main Text"}),v.controls.headlineButton=u.make("span",[h.controlButton,h.headlineControl],{textContent:"Headline"}),v.controls.resizeSqure.dataset.size="square",v.controls.resizeVertical.dataset.size="vertical",v.controls.resizeHorisontal.dataset.size="horisontal",v.controls.resizeHorisontal.classList.add(h.resizeButtonActive),v.controls.mainTextButton.dataset.object="mainText",v.controls.headlineButton.dataset.object="headline",v.controls.pictureButton.dataset.object="picture";for(var r in v.controls)o.appendChild(v.controls[r]);return n.appendChild(o),v.canvasWrapper.appendChild(v.canvas),n.appendChild(v.canvasWrapper),t.appendChild(n),d.toolbar.create(n,v.canvas,d.canvas),l(),v}var u=i(0).default,h={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",headlineControl:"cover-editor__control-button--headline",mainTextControl:"cover-editor__control-button--main-text",imageControl:"cover-editor__control-button--image",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas",canvasActive:"cover-editor__canvas-wrapper--active"},d={canvas:null,toolbar:null},v={mainTextElement:null,headlineElement:null,pictureElement:null,currentText:null,canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null},currentCanvasEditing:null};return{create:c}}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0).default,a=function(){function t(){n(this,t),this.tree={svg:null},this.CSS={text:"cover-editor__canvas--text"},this.newText="New Text",this.formats={vertical:"vertical",horisontal:"horisontal",square:"square"},this.sizes={vertical:{width:510,height:560},horisontal:{width:650,height:370},square:{width:510,height:510}},this.alignment={x:{left:"left",right:"right",center:"center"},y:{top:115,center:132,bottom:271}},this.elements={mainText:"mainText",image:"image",headline:"headline"},this.paddingOfElement=10,this.paddingOfCanvas=30,this.imageSize=87,this.colors={mainSVGcolor:"#FFFFFF"}}return o(t,[{key:"isText",value:function(t){return!(-1==[this.elements.headline,this.elements.mainText].indexOf(t.dataset.type)||!t.children.length)}},{key:"create",value:function(){return this.tree.rectangle=r.svg("rect",{fill:this.colors.mainSVGcolor}),this.setSize(this.tree.rectangle,this.sizes.horisontal),this.tree.svg=r.svg("svg"),this.setCanvasFormat(this.formats.horisontal),this.tree.svg.appendChild(this.tree.rectangle),this.tree.svg}},{key:"setCanvasFormat",value:function(t){this.setSize(this.tree.svg,this.sizes[t]),this.setSize(this.tree.rectangle,this.sizes[t])}},{key:"setSize",value:function(t,e){if("auto"===e&&this.isText(t)){var i=t.querySelector('div[contenteditable="true"]');t.setAttribute("width",this.tree.svg.clientWidth),t.setAttribute("height",this.tree.svg.clientHeight),e={width:i.offsetWidth+this.paddingOfElement,height:i.offsetHeight+this.paddingOfElement}}e.height&&t.setAttribute("height",e.height),e.width&&t.setAttribute("width",e.width)}},{key:"setColor",value:function(t,e){this.isText(t)&&(t.querySelector('div[contenteditable="true"]').style.color=e)}},{key:"setFontSize",value:function(t,e){this.isText(t)&&(t.querySelector('div[contenteditable="true"]').style.fontSize=e,this.setSize(t,"auto"),this.setAlignment(t,t.dataset.alignment))}},{key:"setAlignment",value:function(t,e,i){var n={width:this.tree.svg.clientWidth,height:this.tree.svg.clientWidth},o={width:t.clientWidth,height:t.clientWidth};this.isText(t);switch(e){case this.alignment.x.left:this.setPosition(t,this.paddingOfElement);break;case this.alignment.x.center:this.setPosition(t,(n.width-o.width)/2);break;case this.alignment.x.right:this.setPosition(t,n.width-o.width-this.paddingOfElement)}this.alignment.y[i]&&this.setPosition(t,void 0,this.alignment.y[i])}},{key:"setPosition",value:function(t,e,i){"number"==typeof i&&t.setAttribute("y",i),"number"==typeof e&&t.setAttribute("x",e)}},{key:"autoSizing",value:function(t){var e=t.target;this.setSize(e.parentNode,"auto"),this.setAlignment(e.parentNode,e.parentNode.dataset.alignment)}},{key:"createText",value:function(t){var e=r.make("div",this.CSS.text),i=r.svg("foreignObject"),n=0;switch(e.innerHTML=this.newText,e.setAttribute("contenteditable",!0),e.addEventListener("keyup",this.autoSizing.bind(this)),i.dataset.type=t,i.appendChild(e),this.tree.svg.appendChild(i),t){case this.elements.headline:n="top";break;case this.elements.mainText:n="bottom"}return this.setSize(i,"auto"),this.setAlignment(i,this.alignment.x.left,n),i}},{key:"createImage",value:function(){var t=r.svg("image");return this.setAlignment(t,this.alignment.x.left,this.alignment.y.center),this.setSize(t,{width:this.imageSize,height:this.imageSize}),this.tree.svg.appendChild(t),t}},{key:"createElement",value:function(t){return t===this.elements.headline||t===this.elements.mainText?this.createText(t):t===this.elements.image?this.createImage(t):void 0}},{key:"export",value:function(){var t=new window.XMLSerializer,e=t.serializeToString(this.tree.svg);e.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(e=e.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),e.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(e=e.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"')),e='<?xml version="1.0" standalone="no"?>\r\n'+e;var i=r.make("a",null,{style:"display:none;",href:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e),download:"cover.svg"});document.body.appendChild(i),i.click(),document.body.removeChild(i)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0).default,a=function(){function t(e){n(this,t),this.instances={canvas:null},this.target=null,this.properties={fontSize:{small:e&&e.small?e.small:"25px",medium:e&&e.medium?e.medium:"28px",big:e&&e.big?e.big:"31px"}},this.tree={toolbar:void 0,buttons:{fontSize:void 0,left:void 0,center:void 0,right:void 0,color:void 0},colorForm:void 0},this.CSS={hidden:"cover-editor--hidden",toolbar:{colorMode:"cover-editor__toolbar--color-mode",normal:"cover-editor__toolbar"},target:{active:"cover-editor__text--active",fontSize:["cover-editor__text--small","cover-editor__text--medium","cover-editor__text--big"]},button:"cover-editor__button",buttons:{active:"cover-editor__button--active",left:"cover-editor__button--left",center:"cover-editor__button--center",right:"cover-editor__button--right",fontSize:"cover-editor__button--font-size",fontSizes:{small:"cover-editor__button--small",medium:"cover-editor__button--medium",big:"cover-editor__button--big"},color:"cover-editor__button--color"},colorForm:"cover-editor__color-form"},this.colors={defaultText:"#000000"}}return o(t,[{key:"create",value:function(t,e,i){this.editor=t,this.canvas=e,this.instances.canvas=i,this.make()}},{key:"make",value:function(){var t=this;this.tree.toolbar=r.make("div",[this.CSS.toolbar.normal,this.CSS.hidden]);for(var e in this.tree.buttons){var i=r.make("span",[this.CSS.button,this.CSS.buttons[e]]);this.tree.toolbar.appendChild(i),this.tree.buttons[e]=i,i.dataset.action=e,i.addEventListener("click",function(e){t.buttonClicked(e)})}this.tree.colorForm=r.make("input",[this.CSS.colorForm]),this.tree.colorForm.addEventListener("keyup",function(e){t.changeColorModeByKey(e)}),this.tree.toolbar.insertBefore(this.tree.colorForm,this.tree.buttons.color),this.editor.appendChild(this.tree.toolbar)}},{key:"buttonClicked",value:function(t){var e=t.target,i=e.dataset.action;switch(i){case"fontSize":this.changeFontSize();break;case"left":case"center":case"right":this.changeAlignment(i);break;case"color":this.changeColorMode()}}},{key:"changeFontSize",value:function(){var t=this.target.dataset.fontSize,e=["small","medium","big"],i=void 0;i=e[(e.indexOf(t)+1)%e.length],this.target.dataset.fontSize=i,this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[t]),this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[i]),this.instances.canvas.setFontSize(this.target,this.properties.fontSize[i]),this.moveToTarget()}},{key:"changeAlignment",value:function(t){this.target.dataset.alignment=t;for(var e in this.tree.buttons)"fontSize"!==e&&"color"!==e&&this.tree.buttons[e].classList.remove(this.CSS.buttons.active);this.tree.buttons[t].classList.add(this.CSS.buttons.active),this.instances.canvas.setAlignment(this.target,t,void 0),this.moveToTarget()}},{key:"changeColor",value:function(t){t&&(this.instances.canvas.setColor(this.target,t),this.target.dataset.color=t,this.tree.buttons.color.style.background=t)}},{key:"changeColorModeByKey",value:function(t){13==t.keyCode&&this.changeColorMode()}},{key:"changeColorMode",value:function(){this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)?(this.changeColor(this.tree.colorForm.value),this.tree.colorForm.value="",this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode)):(this.tree.buttons.color.style.display="flex",this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode),this.tree.colorForm.focus()),this.moveToTarget()}},{key:"moveToTarget",value:function(){var t=this.tree.toolbar,e={left:this.canvas.parentNode.offsetLeft,top:this.canvas.parentNode.offsetTop},i={left:window.parseInt(this.target.getAttribute("x")),top:window.parseInt(this.target.getAttribute("y")),width:this.target.clientWidth};switch(this.target.dataset.alignment){case"left":t.style.left=e.left+i.left+"px";break;case"center":t.style.left=e.left+i.left+(i.width-t.clientWidth)/2+"px";break;case"right":t.style.left=e.left+i.left+i.width-t.clientWidth+"px"}t.style.top=e.top+i.top-t.clientHeight+"px"}},{key:"getTargetParams",value:function(){void 0==this.target.dataset.fontSize?(this.target.dataset.fontSize="big",this.changeFontSize()):this.tree.buttons.fontSize.classList.add(this.CSS.buttons.fontSizes[this.target.dataset.fontSize]),void 0==this.target.dataset.alignment&&(this.target.dataset.alignment="left"),this.changeAlignment(this.target.dataset.alignment),void 0==this.target.dataset.color&&(this.target.dataset.color=this.colors.defaultText),this.changeColor(this.target.dataset.color)}},{key:"openNear",value:function(t){var e=t.target;this.removeTargetParams(),this.target=e,this.tree.toolbar.classList.remove(this.CSS.hidden),this.moveToTarget(),this.getTargetParams()}},{key:"removeTargetParams",value:function(){this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode),this.tree.buttons.left.classList.remove(this.CSS.buttons.active),this.tree.buttons.center.classList.remove(this.CSS.buttons.active),this.tree.buttons.right.classList.remove(this.CSS.buttons.active);for(var t in this.CSS.buttons.fontSizes)this.tree.buttons.fontSize.classList.remove(this.CSS.buttons.fontSizes[t])}},{key:"hide",value:function(){this.target=null,this.tree.toolbar.classList.add(this.CSS.hidden)}}]),t}();e.default=a}]);
