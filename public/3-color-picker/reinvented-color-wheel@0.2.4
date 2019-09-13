var ReinventedColorWheel=function(){"use strict"
var e=function(e){var t=e[0],n=e[1]/100,h=e[2]/100
return 0===h?[0,0,0]:[t,2*(n*=(h*=2)<=1?h:2-h)/(h+n)*100,(h+n)/2*100]}
var t=function(e){var t,n,h=e[0],i=e[1]/100,r=e[2]/100
return t=i*r,[h,100*(t=(t/=(n=(2-i)*r)<=1?n:2-n)||0),100*(n/=2)]}
function n(e){var t=e[0],n=e[1],h=e[2],i=Math.max(t,n,h),r=i-Math.min(t,n,h),s=r&&60*(i===t?(n-h)/r%6:i===n?(h-t)/r+2:(t-n)/r+4)
return[s<0?s+360:s,i&&100*r/i,100*i/255]}function h(e){var t=e[0]/60,n=e[1]/100,h=e[2]/100,i=h*n,r=h-i,s=255*(i*(1-Math.abs(t%2-1))+r)+.5|0,o=255*(i+r)+.5|0,a=255*r+.5|0,l=0|t
return 1===l?[s,o,a]:2===l?[a,o,s]:3===l?[a,s,o]:4===l?[s,a,o]:5===l?[o,a,s]:[o,s,a]}var i=function(e,t,n){return Math.min(Math.max(e,t),n)}
function r(e){var t=Math.round(i(e,0,255)).toString(16)
return 1==t.length?"0"+t:t}var s=function(e){var t=4===e.length?r(255*e[3]):""
return"#"+r(e[0])+r(e[1])+r(e[2])+t}
var o=function(e){4!==e.length&&5!==e.length||(e=function(e){for(var t="#",n=1;n<e.length;n++){var h=e.charAt(n)
t+=h+h}return t}(e))
var t=[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)]
if(9===e.length){var n=parseFloat((parseInt(e.substring(7,9),16)/255).toFixed(2))
t.push(n)}return t}
function a(e,t){return e?[d(e[0])?u(e[0]):t[0],d(e[1])?v(e[1]):t[1],d(e[2])?v(e[2]):t[2]]:t}function l(e){return[u(e[0]),v(e[1]),v(e[2])]}function u(e){var t=Math.round(e%360*10)/10
return t<0?t+360:t}function v(e){return e<0?0:e>100?100:(10*e+.5|0)/10}function d(e){return"number"==typeof e&&isFinite(e)}var c="PointerEvent"in window?function(e,t,n){var h=!1
e.addEventListener("pointerdown",function(e){0===e.button&&!1!==t(e)&&(h=!0,this.setPointerCapture(e.pointerId))}),e.addEventListener("pointermove",function(e){h&&n(e)}),e.addEventListener("pointerup",function(e){h=!1,this.releasePointerCapture(e.pointerId)})}:"ontouchend"in window?function(e,t,n){var h=!1
e.addEventListener("touchstart",function(e){1===e.touches.length&&!1!==t(e.touches[0])&&(h=!0,e.preventDefault())}),e.addEventListener("touchmove",function(e){h&&1===e.touches.length&&(e.preventDefault(),n(e.touches[0]))})}:function(e,t,n){var h=function(e){n(e)},i=function(e){removeEventListener("mouseup",i),removeEventListener("mousemove",h)}
e.addEventListener("mousedown",function(e){0===e.button&&!1!==t(e)&&(addEventListener("mousemove",h),addEventListener("mouseup",i))})},p={hsv:[0,100,100],hsl:[0,100,50],wheelDiameter:200,wheelThickness:20,handleDiameter:16,wheelReflectsSaturation:!0,onChange:function(){}}
function f(e,t){var n=document.createElement(e)
return n.className=t,n}return function(){function i(e){var t=this
this.options=e,this.wheelDiameter=this._option("wheelDiameter"),this.wheelThickness=this._option("wheelThickness"),this.handleDiameter=this._option("handleDiameter"),this.onChange=this._option("onChange"),this.wheelReflectsSaturation=this._option("wheelReflectsSaturation"),this.rootElement=this.options.appendTo.appendChild(f("div","reinvented-color-wheel")),this.hueWheelElement=this.rootElement.appendChild(f("canvas","reinvented-color-wheel--hue-wheel")),this.hueWheelContext=this.hueWheelElement.getContext("2d"),this.hueHandleElement=this.rootElement.appendChild(f("div","reinvented-color-wheel--hue-handle")),this.svSpaceElement=this.rootElement.appendChild(f("canvas","reinvented-color-wheel--sv-space")),this.svSpaceContext=this.svSpaceElement.getContext("2d"),this.svHandleElement=this.rootElement.appendChild(f("div","reinvented-color-wheel--sv-handle")),this._redrawHueWheel=function(){t._redrawHueWheelRequested=!1
var e=t.wheelDiameter,n=e/2,h=n-t.wheelThickness/2,i=Math.PI/180,r=t.wheelReflectsSaturation?","+t._hsl[1]+"%,"+t._hsl[2]+"%)":",100%,50%)",s=t.hueWheelContext
s.clearRect(0,0,e,e),s.lineWidth=t.wheelThickness
for(var o=0;o<360;o++)s.beginPath(),s.arc(n,n,h,(o-90.7)*i,(o-89.3)*i),s.strokeStyle="hsl("+o+r,s.stroke()},this._onMoveHueHandle=function(e){var n=t.hueWheelElement.getBoundingClientRect(),h=t.wheelDiameter/2,i=e.clientX-n.left-h,r=e.clientY-n.top-h,s=Math.atan2(r,i)
t.hsv=[180*s/Math.PI+90,t.hsv[1],t.hsv[2]]},this._onMoveSvHandle=function(e){var n=t.svSpaceElement.getBoundingClientRect(),h=100*(e.clientX-n.left)/n.width,i=100*(n.bottom-e.clientY)/n.height
t.hsv=[t._hsv[0],h,i]},this.hueWheelContext.imageSmoothingEnabled=!1,this.svSpaceContext.imageSmoothingEnabled=!1,this._hsv=a(e.hsv?e.hsv:e.hsl?i.hsl2hsv(e.hsl):e.rgb?i.rgb2hsv(e.rgb):e.hex?i.rgb2hsv(i.hex2rgb(e.hex)):void 0,p.hsv),this._hsl=l(i.hsv2hsl(this._hsv)),this._rgb=i.hsv2rgb(this._hsv),this._hex=i.rgb2hex(this._rgb),c(this.hueWheelElement,function(e){var n=t.hueWheelElement.getBoundingClientRect()
if(!t.hueWheelContext.getImageData(e.clientX-n.left,e.clientY-n.top,1,1).data[3])return!1
t._onMoveHueHandle(e)},this._onMoveHueHandle),c(this.svSpaceElement,this._onMoveSvHandle,this._onMoveSvHandle),this.redraw()}return Object.defineProperty(i.prototype,"hsv",{get:function(){return this._hsv},set:function(e){this._setHSV(e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"hsl",{get:function(){return this._hsl},set:function(e){this._setHSV(i.hsl2hsv(e))},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"rgb",{get:function(){return this._rgb},set:function(e){this._setHSV(i.rgb2hsv(e))},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"hex",{get:function(){return this._hex},set:function(e){this.rgb=i.hex2rgb(e)},enumerable:!0,configurable:!0}),i.prototype.setHSV=function(){this.hsv=arguments},i.prototype.setHSL=function(){this.hsl=arguments},i.prototype.redraw=function(){this.hueWheelElement.width=this.hueWheelElement.height=this.wheelDiameter,this.svSpaceElement.width=this.svSpaceElement.height=(this.wheelDiameter-2*this.wheelThickness)*Math.sqrt(2)/2
var e=this.hueHandleElement.style,t=this.svHandleElement.style
e.width=e.height=t.width=t.height=this.handleDiameter+"px",e.marginLeft=e.marginTop=t.marginLeft=t.marginTop=-this.handleDiameter/2+"px",this._redrawHueWheel(),this._redrawHueHandle(),this._redrawSvSpace(),this._redrawSvHandle()},i.prototype._setHSV=function(e){var t=this._hsv,n=this._hsv=a(e,t),h=t[0]-n[0],r=t[1]-n[1]||t[2]-n[2]
h&&(this._hsl[0]=n[0],this._redrawHueHandle(),this._updateSvBackground()),r&&(this._hsl=l(i.hsv2hsl(n)),this._redrawSvHandle(),this.wheelReflectsSaturation&&!this._redrawHueWheelRequested&&(requestAnimationFrame(this._redrawHueWheel),this._redrawHueWheelRequested=!0)),(h||r)&&(this._rgb=i.hsv2rgb(n),this._hex=i.rgb2hex(this._rgb),this.onChange(this))},i.prototype._redrawSvSpace=function(){this._updateSvBackground()
var e=this.svSpaceElement.width,t=this.svSpaceContext,n=t.createLinearGradient(0,0,e,0),h=t.createLinearGradient(0,0,0,e)
n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=n,t.fillRect(0,0,e,e),t.fillStyle=h,t.fillRect(0,0,e,e)},i.prototype._updateSvBackground=function(){this.svSpaceElement.style.backgroundColor="hsl("+this._hsv[0]+",100%,50%)"},i.prototype._redrawHueHandle=function(){var e=this.wheelDiameter/2,t=e-this.wheelThickness/2,n=(this._hsv[0]-90)*Math.PI/180,h=this.hueHandleElement.style
h.left=t*Math.cos(n)+e+"px",h.top=t*Math.sin(n)+e+"px"},i.prototype._redrawSvHandle=function(){var e=this.svSpaceElement,t=this.svHandleElement.style
t.left=e.offsetLeft+e.offsetWidth*this._hsv[1]/100+"px",t.top=e.offsetTop+e.offsetHeight*(1-this._hsv[2]/100)+"px"},i.prototype._option=function(e){var t=this.options[e]
return void 0!==t?t:p[e]},i.default=i,i.defaultOptions=p,i.hsv2hsl=t,i.hsl2hsv=e,i.hsv2rgb=h,i.rgb2hsv=n,i.rgb2hex=s,i.hex2rgb=o,i}()}()
