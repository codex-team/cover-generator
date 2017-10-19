var codex=codex||{};codex.cover=function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,o){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(){r(this,e)}return a(e,null,[{key:"make",value:function(e,t,o){var r=document.createElement(e);if(Array.isArray(t)){var a;(a=r.classList).add.apply(a,n(t))}else t&&r.classList.add(t);for(var i in o)r[i]=o[i];return r}},{key:"svg",value:function(e,t){var o=document.createElementNS("http://www.w3.org/2000/svg",e);for(var n in t)o.setAttributeNS(null,n,t[n]);return o}}]),e}();t.default=i},function(e,t,o){"use strict";e.exports=function(){o(2);var e=o(3),t=o(4).default,n=new t;return{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.assert(t.containerId,"Container id is missed");var o=document.getElementById(t.containerId);if(!o)return void console.warn("Container was not found by id %o",t.containerId);var r=e.create(o);n.prepare({editor:r.editor,canvas:r.canvas}),console.log("toolbarInstance: %o",n)},destroy:function(){},toolbar:n}}()},function(e,t){},function(e,t,o){"use strict";e.exports=function(){function e(){return s.canvasWrapper=c.make("div",l.canvasWrapper),s.canvas=c.svg("svg",{width:"100%",height:"100%"}),s.mainRectangle=c.svg("rect",{width:"100%",height:"100%",fill:"#FFFFFF"}),s.canvas.classList.add(l.canvas),s.canvas.appendChild(s.mainRectangle),s.canvasWrapper.appendChild(s.canvas),s.canvasWrapper}function t(){console.log("saveButtonClicked")}function n(e){var t=e.target,o=t.dataset.size;console.log("resize to: %o",o)}function r(e){var t=e.target,o=t.dataset.object;console.log("toggle: %o",o),codex.cover.toolbar.openNear({target:t})}function a(){s.controls.saveButton.addEventListener("click",t),s.controls.resizeSqure.addEventListener("click",n),s.controls.resizeVertical.addEventListener("click",n),s.controls.resizeHorisontal.addEventListener("click",n),s.controls.pictureButton.addEventListener("click",r),s.controls.mainTextButton.addEventListener("click",r),s.controls.headlineButton.addEventListener("click",r)}function i(t){s.editor=c.make("div",l.editor);var o=c.make("div",l.controls),n=e();s.controls.resizeSqure=c.make("span",[l.resizeButton,l.resizeButtonSquare]),s.controls.resizeVertical=c.make("span",[l.resizeButton,l.resizeButtonVertical]),s.controls.resizeHorisontal=c.make("span",[l.resizeButton,l.resizeButtonHorisontal]),s.controls.saveButton=c.make("span",[l.controlButton,l.controlButtonSave]),s.controls.pictureButton=c.make("span",l.controlButton,{textContent:"Image"}),s.controls.mainTextButton=c.make("span",l.controlButton,{textContent:"Main Text"}),s.controls.headlineButton=c.make("span",l.controlButton,{textContent:"Headline"}),s.controls.resizeSqure.dataset.size="square",s.controls.resizeVertical.dataset.size="vertical",s.controls.resizeHorisontal.dataset.size="horisontal",s.controls.mainTextButton.dataset.object="mainText",s.controls.headlineButton.dataset.object="headline",s.controls.pictureButton.dataset.object="picture";for(var r in s.controls)o.appendChild(s.controls[r]);return s.editor.appendChild(o),s.editor.appendChild(n),t.appendChild(s.editor),a(),s}var c=o(0).default,l={editor:"cover-editor",controls:"cover-editor__controls",resizeButton:"cover-editor__resize-canvas",resizeButtonActive:"cover-editor__resize-canvas--active",resizeButtonSquare:"cover-editor__resize-canvas--square",resizeButtonVertical:"cover-editor__resize-canvas--vertical",resizeButtonHorisontal:"cover-editor__resize-canvas--horisontal",controlButton:"cover-editor__control-button",controlButtonSave:"cover-editor__control-button--save",canvasWrapper:"cover-editor__canvas-wrapper",canvas:"cover-editor__canvas"},s={editor:null,canvasWrapper:null,canvas:null,mainRectangle:null,controls:{resizeSqure:null,resizeVertical:null,resizeHorisontal:null,saveButton:null,pictureButton:null,mainTextButton:null,headlineButton:null}};return{create:i}}()},function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(0).default,i=function(){function e(){n(this,e),this.target=null,this.tree={toolbar:void 0,buttons:{fontSize:void 0,left:void 0,center:void 0,right:void 0,color:void 0},colorForm:void 0},this.CSS={hidden:"cover-editor__hidden",toolbar:{colorMode:"cover-editor__toolbar--color_mode",normal:"cover-editor__toolbar"},controllable:{active:"cover-editor__text--active",fontSize:["cover-editor__text--small","cover-editor__text--medium","cover-editor__text--big"]},button:"cover-editor__toolbar-button",buttons:{active:"cover-editor__toolbar-button--active",left:"cover-editor__toolbar-button--left",center:"cover-editor__toolbar-button--center",right:"cover-editor__toolbar-button--right",fontSize:"cover-editor__toolbar-button--font-size",fontSizes:{small:"cover-editor__toolbar-button--small",medium:"cover-editor__toolbar-button--medium",big:"cover-editor__toolbar-button--big"},color:"cover-editor__toolbar-button--color"},colorForm:"cover-editor__toolbar-color-form"}}return r(e,[{key:"prepare",value:function(e){this.editor=e.editor,this.make()}},{key:"make",value:function(){var e=this;this.tree.toolbar=a.make("div",[this.CSS.toolbar.normal]),["fontSize","left","center","right","color"].forEach(function(t){var o=a.make("span",[e.CSS.button,e.CSS.buttons[t]]);e.tree.toolbar.appendChild(o),e.tree.buttons[t]=o,o.dataset.action=t,o.addEventListener("click",function(t){e.buttonClicked(t)})}),this.editor.appendChild(this.tree.toolbar)}},{key:"buttonClicked",value:function(e){var t=e.target,o=t.dataset.action;switch(console.log("clicked: %o",o),o){case"fontSize":this.changeFontSize();break;case"left":case"center":case"right":this.changeAlignment(o);break;case"color":this.openColorForm()}}},{key:"changeFontSize",value:function(){console.log("changeFontSize: %o")}},{key:"changeAlignment",value:function(e){console.log("alignment: %o",e)}},{key:"openColorForm",value:function(){console.log("openColorForm: %o")}},{key:"openNear",value:function(e){var t=e.target;this.target=t,console.log("now we need to open toolbar near: %o",this.target)}},{key:"hide",value:function(){this.target=null}}]),e}();t.default=i}]);