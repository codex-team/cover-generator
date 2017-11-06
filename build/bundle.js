var codex=codex||{};codex.cover=function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,o){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),i=function(){function t(){n(this,t)}return a(t,null,[{key:"make",value:function(t,e,o){var n=document.createElement(t);if(Array.isArray(e)){var a;(a=n.classList).add.apply(a,r(e))}else e&&n.classList.add(e);for(var i in o)n[i]=o[i];return n}},{key:"svg",value:function(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in e)o.setAttributeNS(null,r,e[r]);return o}}]),t}();e.default=i},function(t,e,o){"use strict";t.exports=function(){o(2);var t=o(3),e=o(4).default,r=o(5).default;return{init:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(o.containerId,"Container id is missed");var n=document.getElementById(o.containerId);if(!n)return void console.warn("Container was not found by id %o",o.containerId);var a=new e;new r,t.create(n,a)},destroy:function(){}}}()},function(t,e){},function(t,e,o){"use strict";t.exports=function(){function t(){d%2==0?(u.canvasWrapper.classList.add(c.canvasActive),d++):(u.canvasWrapper.classList.remove(c.canvasActive),d--),console.log("canvasActive")}function e(){console.log("saveButtonClicked")}function r(t){var e=t.target,o=e.dataset.size;console.log("resize to: %o",o),l.canvas.setCanvasFormat(o)}function n(t){var e=t.target,o=e.dataset.object;console.log("toggle: %o",o)}function a(){u.canvasWrapper.addEventListener("click",t),u.controls.saveButton.addEventListener("click",e),u.controls.resizeSqure.addEventListener("click",r),u.controls.resizeVertical.addEventListener("click",r),u.controls.resizeHorisontal.addEventListener("click",r),u.controls.pictureButton.addEventListener("click",n),u.controls.mainTextButton.addEventListener("click",n),u.controls.headlineButton.addEventListener("click",n)}function i(t,e){var o=s.make("div",c.editor),r=s.make("div",c.controls);l.canvas=e,u.canvasWrapper=s.make("div",c.canvasWrapper),u.controls.resizeSqure=s.make("span",[c.resizeButton,c.resizeButtonSquare]),u.controls.resizeVertical=s.make("span",[c.resizeButton,c.resizeButtonVertical]),u.controls.resizeHorisontal=s.make("span",[c.resizeButton,c.resizeButtonHorisontal]),u.controls.saveButton=s.make("span",[c.controlButton,c.controlButtonSave]),u.controls.pictureButton=s.make("span",c.controlButton,{textContent:"Image"}),u.controls.mainTextButton=s.make("span",c.controlButton,{textContent:"Main Text"}),u.controls.headlineButton=s.make("span",c.controlButton,{textContent:"Headline"}),u.controls.resizeSqure.dataset.size="square",u.controls.resizeVertical.dataset.size="vertical",u.controls.resizeHorisontal.dataset.size="horisontal",u.controls.mainTextButton.dataset.object="mainText",u.controls.headlineButton.dataset.object="headline",u.controls.pictureButton.dataset.object="picture";for(var n in u.controls)r.appendChild(u.controls[n]);return o.appendChild(r),u.canvasWrapper.appendChild(e.create(u.canvasWrapper)),o.appendChild(u.canvasWrapper),t.appendChild(o),a(),u}var s=o(0).default,c={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas",canvasActive:"cover-editor__canvas-wrapper--active"},l={canvas:null,toolbar:null},u={canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null}},d=0;return{create:i}}()},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),a=function(){function t(e){r(this,t),this.$=o(0).default,this.tree={svg:null},this.formats={vertical:{width:510,height:560},horisontal:{width:650,height:370},square:{width:510,height:510}},this.positions={mainText:{x:void 0,y:271},headline:{x:void 0,y:132}}}return n(t,[{key:"create",value:function(t){return this.tree.svg=this.$.svg("svg"),this.setCanvasFormat("horisontal"),this.tree.svg}},{key:"setCanvasFormat",value:function(t){this.setSize(this.tree.svg,this.formats[t])}},{key:"setSize",value:function(t,e){t.setAttribute("height",e.height),t.setAttribute("width",e.width)}},{key:"setPosition",value:function(t,e){e=void 0==e.y?this.positions[e]:e,t.setAttribute("y",e.y),e.x&&t.setAttribute("x",e.x)}},{key:"setAlign",value:function(t,e){"left"==e&&this.setPosition()}},{key:"createText",value:function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),o=document.createElement("div");return o.setAttribute("contenteditable","true"),e.appendChild(o),this.setPosition(e,t),this.setSize(e,{width:100,height:10}),this.tree.svg.appendChild(e),o}}]),t}();e.default=a},function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),a=o(0).default,i=function(){function t(){r(this,t),this.target=null,this.tree={toolbar:void 0,buttons:{fontSize:void 0,left:void 0,center:void 0,right:void 0,color:void 0},colorForm:void 0},this.CSS={hidden:"cover-editor__hidden",toolbar:{colorMode:"cover-editor__toolbar--color_mode",normal:"cover-editor__toolbar"},target:{active:"cover-editor__text--active",fontSize:["cover-editor__text--small","cover-editor__text--medium","cover-editor__text--big"]},button:"cover-editor__toolbar-button",buttons:{active:"cover-editor__toolbar-button--active",left:"cover-editor__toolbar-button--left",center:"cover-editor__toolbar-button--center",right:"cover-editor__toolbar-button--right",fontSize:"cover-editor__toolbar-button--font-size",fontSizes:{small:"cover-editor__toolbar-button--small",medium:"cover-editor__toolbar-button--medium",big:"cover-editor__toolbar-button--big"},color:"cover-editor__toolbar-button--color"},colorForm:"cover-editor__toolbar-color-form"}}return n(t,[{key:"init",value:function(t){this.editor=t.editor,this.instances.canvas=t.canvas,this.make()}},{key:"make",value:function(){var t=this;this.tree.toolbar=a.make("div",[this.CSS.toolbar.normal,this.CSS.hidden]),["fontSize","left","center","right","color"].forEach(function(e){var o=a.make("span",[t.CSS.button,t.CSS.buttons[e]]);t.tree.toolbar.appendChild(o),t.tree.buttons[e]=o,o.dataset.action=e,o.addEventListener("click",function(e){t.buttonClicked(e)})}),this.tree.colorForm=a.make("input",[this.CSS.colorForm]),this.tree.toolbar.insertBefore(this.tree.colorForm,this.tree.buttons.color),this.editor.appendChild(this.tree.toolbar)}},{key:"buttonClicked",value:function(t){var e=t.target,o=e.dataset.action;switch(console.log("clicked: %o",o),o){case"fontSize":this.changeFontSize();break;case"left":case"center":case"right":this.changeAlignment(o);break;case"color":this.changeColorMode()}}},{key:"changeFontSize",value:function(t){this.target.classList.remove(this.CSS.target.fontSize[this.target.dataset.fontSize]),this.tree.toolbar.classList.remove(this.CSS.target.fontSize[this.target.dataset.fontSize]),this.target.dataset.fontSize=t,this.target.classList.add(this.CSS.target.fontSize[this.target.dataset.fontSize]),this.tree.toolbar.classList.add(this.CSS.target.fontSize[this.target.dataset.fontSize])}},{key:"changeAlignment",value:function(t){var e=this;switch(this.target.dataset.alignment=t,["left","center","right"].forEach(function(t){e.tree.buttons[t].classList.remove(e.CSS.buttons.active)}),t){case"left":this.instances.canvas.setPosition("left"),this.tree.buttons.left.classList.add(this.CSS.buttons.active);break;case"center":this.instances.canvas.setPosition("center"),this.tree.buttons.center.classList.add(this.CSS.buttons.active);break;case"right":this.instances.canvas.setPosition("right"),this.tree.buttons.right.classList.add(this.CSS.buttons.active)}}},{key:"changeColor",value:function(t){this.target.style.color=t,this.target.dataset.color=t,this.tree.buttons.color.style.background=t}},{key:"changeColorMode",value:function(){this.tree.toolbar.classList.contains(this.CSS.toolbar.colorMode)?(this.changeColor(this.tree.colorForm.value),this.tree.toolbar.classList.remove(this.CSS.toolbar.colorMode)):this.tree.toolbar.classList.add(this.CSS.toolbar.colorMode),console.log("openColorForm: %o")}},{key:"moveToTarget",value:function(){var t=this.editor.getBoundingClientRect(),e=this.target.getBoundingClientRect();this.tree.toolbar.style.left=e.left-t.left+(e.clientWidth-this.tree.toolbar.clientWidth)/2+"px",this.tree.toolbar.style.top=e.top-t.top-this.target.clientHeight-20+"px"}},{key:"getTargetParams",value:function(){void 0==this.target.dataset.fontSize&&(this.target.dataset.fontSize=0),this.changeFontSize(this.target.dataset.fontSize),void 0==this.target.dataset.alignment&&(this.target.dataset.alignment="left"),this.changeAlignment(this.target.dataset.alignment),void 0==this.target.dataset.color&&(this.target.dataset.color="#000000"),this.changeColor(this.target.dataset.color)}},{key:"openNear",value:function(t){var e=t.target;this.target=e,this.moveToTarget(),this.getTargetParams(),this.tree.toolbar.classList.remove(this.CSS.hidden)}},{key:"removeTargetParams",value:function(){this.target.classList.add(this.CSS.target.fontSize[this.target.dataset.fontSize]),this.tree.toolbar.classList.add(this.CSS.toolbar.fontSize[this.target.dataset.fontSize]),this.tree.buttons.left.classList.remove(this.CSS.toolbar.buttons.active),this.tree.buttons.center.classList.remove(this.CSS.toolbar.buttons.active),this.tree.buttons.right.classList.remove(this.CSS.toolbar.buttons.active)}},{key:"hide",value:function(){this.removeTargetParams(),this.target=null,this.tree.toolbar.classList.add(this.CSS.hidden)}}]),t}();e.default=i}]);