/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
!function(t,e,i){var n=t.L,o={};o.version="0.7.3","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints&&!t.PointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled&&t.navigator.maxTouchPoints||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return s=e&&e.maxZoom?Math.min(e.maxZoom,s):s,this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;
return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;i.width=i.height=e.detectRetina&&o.Browser.retina?2*n:n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i=o.point("shadow"===e?n.shadowAnchor||n.iconAnchor:n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())
},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):"",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&500>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!(t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.DomEvent.stopPropagation(t),o.Draggable._disabled||(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3||(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;
break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a,r){r||(this._animatingZoom=!0),o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),o.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},this)},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.L||(f.L={})).Routing=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function corslite(url, callback, cors) {
    var sent = false;

    if (typeof window.XMLHttpRequest === 'undefined') {
        return callback(Error('Browser not supported'));
    }

    if (typeof cors === 'undefined') {
        var m = url.match(/^\s*https?:\/\/[^\/]*/);
        cors = m && (m[0] !== location.protocol + '//' + location.domain +
                (location.port ? ':' + location.port : ''));
    }

    var x = new window.XMLHttpRequest();

    function isSuccessful(status) {
        return status >= 200 && status < 300 || status === 304;
    }

    if (cors && !('withCredentials' in x)) {
        // IE8-9
        x = new window.XDomainRequest();

        // Ensure callback is never called synchronously, i.e., before
        // x.send() returns (this has been observed in the wild).
        // See https://github.com/mapbox/mapbox.js/issues/472
        var original = callback;
        callback = function() {
            if (sent) {
                original.apply(this, arguments);
            } else {
                var that = this, args = arguments;
                setTimeout(function() {
                    original.apply(that, args);
                }, 0);
            }
        }
    }

    function loaded() {
        if (
            // XDomainRequest
            x.status === undefined ||
            // modern browsers
            isSuccessful(x.status)) callback.call(x, null, x);
        else callback.call(x, x, null);
    }

    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
    if ('onload' in x) {
        x.onload = loaded;
    } else {
        x.onreadystatechange = function readystate() {
            if (x.readyState === 4) {
                loaded();
            }
        };
    }

    // Call the callback with the XMLHttpRequest object as an error and prevent
    // it from ever being called again by reassigning it to `noop`
    x.onerror = function error(evt) {
        // XDomainRequest provides no evt parameter
        callback.call(this, evt || true, null);
        callback = function() { };
    };

    // IE9 must have onprogress be set to a unique function.
    x.onprogress = function() { };

    x.ontimeout = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    x.onabort = function(evt) {
        callback.call(this, evt, null);
        callback = function() { };
    };

    // GET is the only supported HTTP Verb by XDomainRequest and is the
    // only one supported here.
    x.open('GET', url, true);

    // Send the request. Sending data is not supported.
    x.send(null);
    sent = true;

    return x;
}

if (typeof module !== 'undefined') module.exports = corslite;

},{}],2:[function(require,module,exports){
var polyline = {};

// Based off of [the offical Google document](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
//
// Some parts from [this implementation](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/PolylineEncoder.js)
// by [Mark McClure](http://facstaff.unca.edu/mcmcclur/)

function encode(coordinate, factor) {
    coordinate = Math.round(coordinate * factor);
    coordinate <<= 1;
    if (coordinate < 0) {
        coordinate = ~coordinate;
    }
    var output = '';
    while (coordinate >= 0x20) {
        output += String.fromCharCode((0x20 | (coordinate & 0x1f)) + 63);
        coordinate >>= 5;
    }
    output += String.fromCharCode(coordinate + 63);
    return output;
}

// This is adapted from the implementation in Project-OSRM
// https://github.com/DennisOSRM/Project-OSRM-Web/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
polyline.decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, precision || 5);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
};

polyline.encode = function(coordinates, precision) {
    if (!coordinates.length) return '';

    var factor = Math.pow(10, precision || 5),
        output = encode(coordinates[0][0], factor) + encode(coordinates[0][1], factor);

    for (var i = 1; i < coordinates.length; i++) {
        var a = coordinates[i], b = coordinates[i - 1];
        output += encode(a[0] - b[0], factor);
        output += encode(a[1] - b[1], factor);
    }

    return output;
};

if (typeof module !== undefined) module.exports = polyline;

},{}],3:[function(require,module,exports){
(function() {
	'use strict';

	L.Routing = L.Routing || {};

	L.Routing.Autocomplete = L.Class.extend({
		options: {
			timeout: 500,
			blurTimeout: 100,
			noResultsMessage: 'No results found.'
		},

		initialize: function(elem, callback, context, options) {
			L.setOptions(this, options);

			this._elem = elem;
			this._resultFn = options.resultFn ? L.Util.bind(options.resultFn, options.resultContext) : null;
			this._autocomplete = options.autocompleteFn ? L.Util.bind(options.autocompleteFn, options.autocompleteContext) : null;
			this._selectFn = L.Util.bind(callback, context);
			this._container = L.DomUtil.create('div', 'leaflet-routing-geocoder-result');
			this._resultTable = L.DomUtil.create('table', '', this._container);

			// TODO: looks a bit like a kludge to register same for input and keypress -
			// browsers supporting both will get duplicate events; just registering
			// input will not catch enter, though.
			L.DomEvent.addListener(this._elem, 'input', this._keyPressed, this);
			L.DomEvent.addListener(this._elem, 'keypress', this._keyPressed, this);
			L.DomEvent.addListener(this._elem, 'keydown', this._keyDown, this);
			L.DomEvent.addListener(this._elem, 'blur', function() {
				if (this._isOpen) {
					this.close();
				}
			}, this);
		},

		close: function() {
			L.DomUtil.removeClass(this._container, 'leaflet-routing-geocoder-result-open');
			this._isOpen = false;
		},

		_open: function() {
			var rect = this._elem.getBoundingClientRect();
			if (!this._container.parentElement) {
				this._container.style.left = (rect.left + window.scrollX) + 'px';
				this._container.style.top = (rect.bottom + window.scrollY) + 'px';
				this._container.style.width = (rect.right - rect.left) + 'px';
				document.body.appendChild(this._container);
			}

			L.DomUtil.addClass(this._container, 'leaflet-routing-geocoder-result-open');
			this._isOpen = true;
		},

		_setResults: function(results) {
			var i,
			    tr,
			    td,
			    text;

			delete this._selection;
			this._results = results;

			while (this._resultTable.firstChild) {
				this._resultTable.removeChild(this._resultTable.firstChild);
			}

			for (i = 0; i < results.length; i++) {
				tr = L.DomUtil.create('tr', '', this._resultTable);
				tr.setAttribute('data-result-index', i);
				td = L.DomUtil.create('td', '', tr);
				text = document.createTextNode(results[i].name);
				td.appendChild(text);
				// mousedown + click because:
				// http://stackoverflow.com/questions/10652852/jquery-fire-click-before-blur-event
				L.DomEvent.addListener(td, 'mousedown', L.DomEvent.preventDefault);
				L.DomEvent.addListener(td, 'click', this._createClickListener(results[i]));
			}

			if (!i) {
				tr = L.DomUtil.create('tr', '', this._resultTable);
				td = L.DomUtil.create('td', 'leaflet-routing-geocoder-no-results', tr);
				td.innerHTML = this.options.noResultsMessage;
			}

			this._open();

			if (results.length > 0) {
				// Select the first entry
				this._select(1);
			}
		},

		_createClickListener: function(r) {
			var resultSelected = this._resultSelected(r);
			return L.bind(function() {
				this._elem.blur();
				resultSelected();
			}, this);
		},

		_resultSelected: function(r) {
			return L.bind(function() {
				this.close();
				this._elem.value = r.name;
				this._lastCompletedText = r.name;
				this._selectFn(r);
			}, this);
		},

		_keyPressed: function(e) {
			var index;

			if (this._isOpen && e.keyCode === 13 && this._selection) {
				index = parseInt(this._selection.getAttribute('data-result-index'), 10);
				this._resultSelected(this._results[index])();
				L.DomEvent.preventDefault(e);
				return;
			}

			if (e.keyCode === 13) {
				this._complete(this._resultFn, true);
				return;
			}

			if (this._autocomplete && document.activeElement === this._elem) {
				if (this._timer) {
					clearTimeout(this._timer);
				}
				this._timer = setTimeout(L.Util.bind(function() { this._complete(this._autocomplete); }, this),
					this.options.timeout);
				return;
			}

			this._unselect();
		},

		_select: function(dir) {
			var sel = this._selection;
			if (sel) {
				L.DomUtil.removeClass(sel.firstChild, 'leaflet-routing-geocoder-selected');
				sel = sel[dir > 0 ? 'nextSibling' : 'previousSibling'];
			}
			if (!sel) {
				sel = this._resultTable[dir > 0 ? 'firstChild' : 'lastChild'];
			}

			if (sel) {
				L.DomUtil.addClass(sel.firstChild, 'leaflet-routing-geocoder-selected');
				this._selection = sel;
			}
		},

		_unselect: function() {
			if (this._selection) {
				L.DomUtil.removeClass(this._selection.firstChild, 'leaflet-routing-geocoder-selected');
			}
			delete this._selection;
		},

		_keyDown: function(e) {
			if (this._isOpen) {
				switch (e.keyCode) {
				// Escape
				case 27:
					this.close();
					L.DomEvent.preventDefault(e);
					return;
				// Up
				case 38:
					this._select(-1);
					L.DomEvent.preventDefault(e);
					return;
				// Down
				case 40:
					this._select(1);
					L.DomEvent.preventDefault(e);
					return;
				}
			}
		},

		_complete: function(completeFn, trySelect) {
			var v = this._elem.value;
			function completeResults(results) {
				this._lastCompletedText = v;
				if (trySelect && results.length === 1) {
					this._resultSelected(results[0])();
				} else {
					this._setResults(results);
				}
			}

			if (!v) {
				return;
			}

			if (v !== this._lastCompletedText) {
				completeFn(v, completeResults, this);
			} else if (trySelect) {
				completeResults.call(this, this._results);
			}
		}
	});
})();

},{}],4:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);

	L.Routing = L.Routing || {};
	L.extend(L.Routing, require('./L.Routing.Itinerary'));
	L.extend(L.Routing, require('./L.Routing.Line'));
	L.extend(L.Routing, require('./L.Routing.Plan'));
	L.extend(L.Routing, require('./L.Routing.OSRM'));
	L.extend(L.Routing, require('./L.Routing.ErrorControl'));

	L.Routing.Control = L.Routing.Itinerary.extend({
		options: {
			fitSelectedRoutes: 'smart',
			routeLine: function(route, options) { return L.Routing.line(route, options); },
			autoRoute: true,
			routeWhileDragging: false,
			routeDragInterval: 500,
			waypointMode: 'connect',
			useZoomParameter: false,
			showAlternatives: false
		},

		initialize: function(options) {
			L.Util.setOptions(this, options);

			this._router = this.options.router || new L.Routing.OSRM(options);
			this._plan = this.options.plan || L.Routing.plan(this.options.waypoints, options);
			this._requestCount = 0;

			L.Routing.Itinerary.prototype.initialize.call(this, options);

			this.on('routeselected', this._routeSelected, this);
			this._plan.on('waypointschanged', this._onWaypointsChanged, this);
			if (options.routeWhileDragging) {
				this._setupRouteDragging();
			}

			if (this.options.autoRoute) {
				this.route();
			}
		},

		onAdd: function(map) {
			var container = L.Routing.Itinerary.prototype.onAdd.call(this, map);

			this._map = map;
			this._map.addLayer(this._plan);

			if (this.options.useZoomParameter) {
				this._map.on('zoomend', function() {
					this.route({
						callback: L.bind(this._updateLineCallback, this)
					});
				}, this);
			}

			if (this._plan.options.geocoder) {
				container.insertBefore(this._plan.createGeocoders(), container.firstChild);
			}

			return container;
		},

		onRemove: function(map) {
			if (this._line) {
				map.removeLayer(this._line);
			}
			map.removeLayer(this._plan);
			return L.Routing.Itinerary.prototype.onRemove.call(this, map);
		},

		getWaypoints: function() {
			return this._plan.getWaypoints();
		},

		setWaypoints: function(waypoints) {
			this._plan.setWaypoints(waypoints);
			return this;
		},

		spliceWaypoints: function() {
			var removed = this._plan.spliceWaypoints.apply(this._plan, arguments);
			return removed;
		},

		getPlan: function() {
			return this._plan;
		},

		getRouter: function() {
			return this._router;
		},

		_routeSelected: function(e) {
			var route = e.route,
				alternatives = this.options.showAlternatives && e.alternatives,
				fitMode = this.options.fitSelectedRoutes,
				fitBounds =
					(fitMode === 'smart' && !this._waypointsVisible()) ||
					(fitMode !== 'smart' && fitMode);

			this._updateLines({route: route, alternatives: alternatives});

			if (fitBounds) {
				this._map.fitBounds(this._line.getBounds());
			}

			if (this.options.waypointMode === 'snap') {
				this._plan.off('waypointschanged', this._onWaypointsChanged, this);
				this.setWaypoints(route.waypoints);
				this._plan.on('waypointschanged', this._onWaypointsChanged, this);
			}
		},

		_waypointsVisible: function() {
			var wps = this.getWaypoints(),
				mapSize,
				bounds,
				boundsSize,
				i,
				p;

			try {
				mapSize = this._map.getSize();

				for (i = 0; i < wps.length; i++) {
					p = this._map.latLngToLayerPoint(wps[i].latLng);

					if (bounds) {
						bounds.extend(p);
					} else {
						bounds = L.bounds([p]);
					}
				}

				boundsSize = bounds.getSize();
				return (boundsSize.x > mapSize.x / 5 ||
					boundsSize.y > mapSize.y / 5) && this._waypointsInViewport();

			} catch (e) {
				return false;
			}
		},

		_waypointsInViewport: function() {
			var wps = this.getWaypoints(),
				mapBounds,
				i;

			try {
				mapBounds = this._map.getBounds();
			} catch (e) {
				return false;
			}

			for (i = 0; i < wps.length; i++) {
				if (mapBounds.contains(wps[i].latLng)) {
					return true;
				}
			}

			return false;
		},

		_updateLines: function(routes) {
			var addWaypoints = this.options.addWaypoints !== undefined ?
				this.options.addWaypoints : true;
			this._clearLines();

			// add alternatives first so they lie below the main route
			this._alternatives = [];
			if (routes.alternatives) routes.alternatives.forEach(function(alt, i) {
				this._alternatives[i] = this.options.routeLine(alt,
					L.extend({
						isAlternative: true
					}, this.options.altLineOptions || this.options.lineOptions));
				this._alternatives[i].addTo(this._map);
				this._hookAltEvents(this._alternatives[i]);
			}, this);

			this._line = this.options.routeLine(routes.route,
				L.extend({
					addWaypoints: addWaypoints,
					extendToWaypoints: this.options.waypointMode === 'connect'
				}, this.options.lineOptions));
			this._line.addTo(this._map);
			this._hookEvents(this._line);
		},

		_hookEvents: function(l) {
			l.on('linetouched', function(e) {
				this._plan.dragNewWaypoint(e);
			}, this);
		},

		_hookAltEvents: function(l) {
			l.on('linetouched', function(e) {
				var alts = this._routes.slice();
				var selected = alts.splice(e.target._route.routesIndex, 1)[0];
				this.fire('routeselected', {route: selected, alternatives: alts});
			}, this);
		},

		_onWaypointsChanged: function(e) {
			if (this.options.autoRoute) {
				this.route({});
			}
			if (!this._plan.isReady()) {
				this._clearLines();
				this._clearAlts();
			}
			this.fire('waypointschanged', {waypoints: e.waypoints});
		},

		_setupRouteDragging: function() {
			var timer = 0,
				waypoints;

			this._plan.on('waypointdrag', L.bind(function(e) {
				waypoints = e.waypoints;

				if (!timer) {
					timer = setTimeout(L.bind(function() {
						this.route({
							waypoints: waypoints,
							geometryOnly: true,
							callback: L.bind(this._updateLineCallback, this)
						});
						timer = undefined;
					}, this), this.options.routeDragInterval);
				}
			}, this));
			this._plan.on('waypointdragend', function() {
				if (timer) {
					clearTimeout(timer);
					timer = undefined;
				}
				this.route();
			}, this);
		},

		_updateLineCallback: function(err, routes) {
			if (!err) {
				this._updateLines({route: routes[0], alternatives: routes.slice(1) });
			} else {
				this._clearLines();
			}
		},

		route: function(options) {
			var ts = ++this._requestCount,
				wps;

			options = options || {};

			if (this._plan.isReady()) {
				if (this.options.useZoomParameter) {
					options.z = this._map && this._map.getZoom();
				}

				wps = options && options.waypoints || this._plan.getWaypoints();
				this.fire('routingstart', {waypoints: wps});
				this._router.route(wps, options.callback || function(err, routes) {
					// Prevent race among multiple requests,
					// by checking the current request's timestamp
					// against the last request's; ignore result if
					// this isn't the latest request.
					if (ts === this._requestCount) {
						this._clearLines();
						this._clearAlts();
						if (err) {
							this.fire('routingerror', {error: err});
							return;
						}

						routes.forEach(function(route, i) { route.routesIndex = i; });

						if (!options.geometryOnly) {
							this.fire('routesfound', {waypoints: wps, routes: routes});
							this.setAlternatives(routes);
						} else {
							var selectedRoute = routes.splice(0,1)[0];
							this._routeSelected({route: selectedRoute, alternatives: routes});
						}
					}
				}, this, options);
			}
		},

		_clearLines: function() {
			if (this._line) {
				this._map.removeLayer(this._line);
				delete this._line;
			}
			if (this._alternatives && this._alternatives.length) {
				for (var i in this._alternatives) {
					this._map.removeLayer(this._alternatives[i]);
				}
				this._alternatives = [];
			}
		}
	});

	L.Routing.control = function(options) {
		return new L.Routing.Control(options);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./L.Routing.ErrorControl":5,"./L.Routing.Itinerary":8,"./L.Routing.Line":10,"./L.Routing.OSRM":12,"./L.Routing.Plan":13}],5:[function(require,module,exports){
(function() {
	'use strict';

	L.Routing = L.Routing || {};

	L.Routing.ErrorControl = L.Control.extend({
		options: {
			header: 'Routing error',
			formatMessage: function(error) {
				if (error.status < 0) {
					return 'Calculating the route caused an error. Technical description follows: <code><pre>' +
						error.message + '</pre></code';
				} else {
					return 'The route could not be calculated. ' +
						error.message;
				}
			}
		},

		initialize: function(routingControl, options) {
			L.Control.prototype.initialize.call(this, options);
			routingControl
				.on('routingerror', L.bind(function(e) {
					if (this._element) {
						this._element.children[1].innerHTML = this.options.formatMessage(e.error);
						this._element.style.visibility = 'visible';
					}
				}, this))
				.on('routingstart', L.bind(function() {
					if (this._element) {
						this._element.style.visibility = 'hidden';
					}
				}, this));
		},

		onAdd: function() {
			var header,
				message;

			this._element = L.DomUtil.create('div', 'leaflet-bar leaflet-routing-error');
			this._element.style.visibility = 'hidden';

			header = L.DomUtil.create('h3', null, this._element);
			message = L.DomUtil.create('span', null, this._element);

			header.innerHTML = this.options.header;

			return this._element;
		},

		onRemove: function() {
			delete this._element;
		}
	});

	L.Routing.errorControl = function(routingControl, options) {
		return new L.Routing.ErrorControl(routingControl, options);
	};
})();

},{}],6:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);

	L.Routing = L.Routing || {};

	L.extend(L.Routing, require('./L.Routing.Localization'));

	L.Routing.Formatter = L.Class.extend({
		options: {
			units: 'metric',
			unitNames: {
				meters: 'm',
				kilometers: 'km',
				yards: 'yd',
				miles: 'mi',
				hours: 'h',
				minutes: 'mín',
				seconds: 's'
			},
			language: 'en',
			roundingSensitivity: 1,
			distanceTemplate: '{value} {unit}'
		},

		initialize: function(options) {
			L.setOptions(this, options);
		},

		formatDistance: function(d /* Number (meters) */, sensitivity) {
			var un = this.options.unitNames,
				simpleRounding = sensitivity <= 0,
				round = simpleRounding ? function(v) { return v; } : L.bind(this._round, this),
			    v,
			    yards,
				data,
				pow10;

			if (this.options.units === 'imperial') {
				yards = d / 0.9144;
				if (yards >= 1000) {
					data = {
						value: round(d / 1609.344, sensitivity),
						unit: un.miles
					};
				} else {
					data = {
						value: round(yards, sensitivity),
						unit: un.yards
					};
				}
			} else {
				v = round(d, sensitivity);
				data = {
					value: v >= 1000 ? (v / 1000) : v,
					unit: v >= 1000 ? un.kilometers : un.meters
				};
			}

			if (simpleRounding) {
				pow10 = Math.pow(10, -sensitivity);
				data.value = Math.round(data.value * pow10) / pow10;
			}

			return L.Util.template(this.options.distanceTemplate, data);
		},

		_round: function(d, sensitivity) {
			var s = sensitivity || this.options.roundingSensitivity,
				pow10 = Math.pow(10, (Math.floor(d / s) + '').length - 1),
				r = Math.floor(d / pow10),
				p = (r > 5) ? pow10 : pow10 / 2;

			return Math.round(d / p) * p;
		},

		formatTime: function(t /* Number (seconds) */) {
			if (t > 86400) {
				return Math.round(t / 3600) + ' h';
			} else if (t > 3600) {
				return Math.floor(t / 3600) + ' h ' +
					Math.round((t % 3600) / 60) + ' min';
			} else if (t > 300) {
				return Math.round(t / 60) + ' min';
			} else if (t > 60) {
				return Math.floor(t / 60) + ' min' +
					(t % 60 !== 0 ? ' ' + (t % 60) + ' s' : '');
			} else {
				return t + ' s';
			}
		},

		formatInstruction: function(instr, i) {
			if (instr.text === undefined) {
				return L.Util.template(this._getInstructionTemplate(instr, i),
					L.extend({
						exitStr: instr.exit ? L.Routing.Localization[this.options.language].formatOrder(instr.exit) : '',
						dir: L.Routing.Localization[this.options.language].directions[instr.direction]
					},
					instr));
			} else {
				return instr.text;
			}
		},

		getIconName: function(instr, i) {
			switch (instr.type) {
			case 'Straight':
				return (i === 0 ? 'depart' : 'continue');
			case 'SlightRight':
				return 'bear-right';
			case 'Right':
				return 'turn-right';
			case 'SharpRight':
				return 'sharp-right';
			case 'TurnAround':
				return 'u-turn';
			case 'SharpLeft':
				return 'sharp-left';
			case 'Left':
				return 'turn-left';
			case 'SlightLeft':
				return 'bear-left';
			case 'WaypointReached':
				return 'via';
			case 'Roundabout':
				return 'enter-roundabout';
			case 'DestinationReached':
				return 'arrive';
			}
		},

		_getInstructionTemplate: function(instr, i) {
			var type = instr.type === 'Straight' ? (i === 0 ? 'Head' : 'Continue') : instr.type,
				strings = L.Routing.Localization[this.options.language].instructions[type];

			return strings[0] + (strings.length > 1 && instr.road ? strings[1] : '');
		}
	});

	module.exports = L.Routing;
})();


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./L.Routing.Localization":11}],7:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);
	L.Routing = L.Routing || {};
	L.extend(L.Routing, require('./L.Routing.Autocomplete'));

	function selectInputText(input) {
		if (input.setSelectionRange) {
			// On iOS, select() doesn't work
			input.setSelectionRange(0, 9999);
		} else {
			// On at least IE8, setSeleectionRange doesn't exist
			input.select();
		}
	}

	L.Routing.GeocoderElement = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			createGeocoder: function(i, nWps, options) {
				var container = L.DomUtil.create('div', 'leaflet-routing-geocoder'),
					input = L.DomUtil.create('input', '', container),
					remove = options.addWaypoints ? L.DomUtil.create('span', 'leaflet-routing-remove-waypoint', container) : undefined;

				input.disabled = !options.addWaypoints;

				return {
					container: container,
					input: input,
					closeButton: remove
				};
			},
			geocoderPlaceholder: function(i, numberWaypoints, plan) {
				var l = L.Routing.Localization[plan.options.language].ui;
				return i === 0 ?
					l.startPlaceholder :
					(i < numberWaypoints - 1 ?
						L.Util.template(l.viaPlaceholder, {viaNumber: i}) :
						l.endPlaceholder);
			},

			geocoderClass: function() {
				return '';
			},

			waypointNameFallback: function(latLng) {
				var ns = latLng.lat < 0 ? 'S' : 'N',
					ew = latLng.lng < 0 ? 'W' : 'E',
					lat = (Math.round(Math.abs(latLng.lat) * 10000) / 10000).toString(),
					lng = (Math.round(Math.abs(latLng.lng) * 10000) / 10000).toString();
				return ns + lat + ', ' + ew + lng;
			},
			maxGeocoderTolerance: 200,
			autocompleteOptions: {},
			language: 'en',
		},

		initialize: function(wp, i, nWps, options) {
			L.setOptions(this, options);

			var g = this.options.createGeocoder(i, nWps, this.options),
				closeButton = g.closeButton,
				geocoderInput = g.input;
			geocoderInput.setAttribute('placeholder', this.options.geocoderPlaceholder(i, nWps, this));
			geocoderInput.className = this.options.geocoderClass(i, nWps);

			this._element = g;
			this._waypoint = wp;

			this.update();
			// This has to be here, or geocoder's value will not be properly
			// initialized.
			// TODO: look into why and make _updateWaypointName fix this.
			geocoderInput.value = wp.name;

			L.DomEvent.addListener(geocoderInput, 'click', function() {
				selectInputText(this);
			}, geocoderInput);

			if (closeButton) {
				L.DomEvent.addListener(closeButton, 'click', function() {
					this.fire('delete', { waypoint: this._waypoint });
				}, this);
			}

			new L.Routing.Autocomplete(geocoderInput, function(r) {
					geocoderInput.value = r.name;
					wp.name = r.name;
					wp.latLng = r.center;
					this.fire('geocoded', { waypoint: wp, value: r });
				}, this, L.extend({
					resultFn: this.options.geocoder.geocode,
					resultContext: this.options.geocoder,
					autocompleteFn: this.options.geocoder.suggest,
					autocompleteContext: this.options.geocoder
				}, this.options.autocompleteOptions));
		},

		getContainer: function() {
			return this._element.container;
		},

		setValue: function(v) {
			this._element.input.value = v;
		},

		update: function(force) {
			var wp = this._waypoint,
				wpCoords;

			wp.name = wp.name || '';

			if (wp.latLng && (force || !wp.name)) {
				wpCoords = this.options.waypointNameFallback(wp.latLng);
				if (this.options.geocoder && this.options.geocoder.reverse) {
					this.options.geocoder.reverse(wp.latLng, 67108864 /* zoom 18 */, function(rs) {
						if (rs.length > 0 && rs[0].center.distanceTo(wp.latLng) < this.options.maxGeocoderTolerance) {
							wp.name = rs[0].name;
						} else {
							wp.name = wpCoords;
						}
						this._update();
					}, this);
				} else {
					wp.name = wpCoords;
					this._update();
				}
			}
		},

		focus: function() {
			var input = this._element.input;
			input.focus();
			selectInputText(input);
		},

		_update: function() {
			var wp = this._waypoint,
			    value = wp && wp.name ? wp.name : '';
			this.setValue(value);
			this.fire('reversegeocoded', {waypoint: wp, value: value});
		}
	});

	L.Routing.geocoderElement = function(wp, i, nWps, plan) {
		return new L.Routing.GeocoderElement(wp, i, nWps, plan);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./L.Routing.Autocomplete":3}],8:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);

	L.Routing = L.Routing || {};
	L.extend(L.Routing, require('./L.Routing.Formatter'));
	L.extend(L.Routing, require('./L.Routing.ItineraryBuilder'));

	L.Routing.Itinerary = L.Control.extend({
		includes: L.Mixin.Events,

		options: {
			pointMarkerStyle: {
				radius: 5,
				color: '#03f',
				fillColor: 'white',
				opacity: 1,
				fillOpacity: 0.7
			},
			summaryTemplate: '<h2>{name}</h2><h3>{distance}, {time}</h3>',
			timeTemplate: '{time}',
			containerClassName: '',
			alternativeClassName: '',
			minimizedClassName: '',
			itineraryClassName: '',
			totalDistanceRoundingSensitivity: -1,
			show: true,
			collapsible: undefined,
			collapseBtn: function(itinerary) {
				var collapseBtn = L.DomUtil.create('span', itinerary.options.collapseBtnClass);
				L.DomEvent.on(collapseBtn, 'click', itinerary._toggle, itinerary);
				itinerary._container.insertBefore(collapseBtn, itinerary._container.firstChild);
			},
			collapseBtnClass: 'leaflet-routing-collapse-btn'
		},

		initialize: function(options) {
			L.setOptions(this, options);
			this._formatter = this.options.formatter || new L.Routing.Formatter(this.options);
			this._itineraryBuilder = this.options.itineraryBuilder || new L.Routing.ItineraryBuilder({
				containerClassName: this.options.itineraryClassName
			});
		},

		onAdd: function(map) {
			var collapsible = this.options.collapsible;

			collapsible = collapsible || (collapsible === undefined && map.getSize().x <= 640);

			this._container = L.DomUtil.create('div', 'leaflet-routing-container leaflet-bar ' +
				(!this.options.show ? 'leaflet-routing-container-hide ' : '') +
				(collapsible ? 'leaflet-routing-collapsible ' : '') +
				this.options.containerClassName);
			this._altContainer = this.createAlternativesContainer();
			this._container.appendChild(this._altContainer);
			L.DomEvent.disableClickPropagation(this._container);
			L.DomEvent.addListener(this._container, 'mousewheel', function(e) {
				L.DomEvent.stopPropagation(e);
			});

			if (collapsible) {
				this.options.collapseBtn(this);
			}

			return this._container;
		},

		onRemove: function() {
		},

		createAlternativesContainer: function() {
			return L.DomUtil.create('div', 'leaflet-routing-alternatives-container');
		},

		setAlternatives: function(routes) {
			var i,
			    alt,
			    altDiv;

			this._clearAlts();

			this._routes = routes;

			for (i = 0; i < this._routes.length; i++) {
				alt = this._routes[i];
				altDiv = this._createAlternative(alt, i);
				this._altContainer.appendChild(altDiv);
				this._altElements.push(altDiv);
			}

			this._selectRoute({route: this._routes[0], alternatives: this._routes.slice(1)});

			return this;
		},

		show: function() {
			L.DomUtil.removeClass(this._container, 'leaflet-routing-container-hide');
		},

		hide: function() {
			L.DomUtil.addClass(this._container, 'leaflet-routing-container-hide');
		},

		_toggle: function() {
			var collapsed = L.DomUtil.hasClass(this._container, 'leaflet-routing-container-hide');
			this[collapsed ? 'show' : 'hide']();
		},

		_createAlternative: function(alt, i) {
			var altDiv = L.DomUtil.create('div', 'leaflet-routing-alt ' +
				this.options.alternativeClassName +
				(i > 0 ? ' leaflet-routing-alt-minimized ' + this.options.minimizedClassName : '')),
				template = this.options.summaryTemplate,
				data = L.extend({
					name: alt.name,
					distance: this._formatter.formatDistance(alt.summary.totalDistance, this.options.totalDistanceRoundingSensitivity),
					time: this._formatter.formatTime(alt.summary.totalTime)
				}, alt);
			altDiv.innerHTML = typeof(template) === 'function' ? template(data) : L.Util.template(template, data);
			L.DomEvent.addListener(altDiv, 'click', this._onAltClicked, this);
			this.on('routeselected', this._selectAlt, this);

			altDiv.appendChild(this._createItineraryContainer(alt));
			return altDiv;
		},

		_clearAlts: function() {
			var el = this._altContainer;
			while (el && el.firstChild) {
				el.removeChild(el.firstChild);
			}

			this._altElements = [];
		},

		_createItineraryContainer: function(r) {
			var container = this._itineraryBuilder.createContainer(),
			    steps = this._itineraryBuilder.createStepsContainer(),
			    i,
			    instr,
			    step,
			    distance,
			    text,
			    icon;

			container.appendChild(steps);

			for (i = 0; i < r.instructions.length; i++) {
				instr = r.instructions[i];
				text = this._formatter.formatInstruction(instr, i);
				distance = this._formatter.formatDistance(instr.distance);
				icon = this._formatter.getIconName(instr, i);
				step = this._itineraryBuilder.createStep(text, distance, icon, steps);

				this._addRowListeners(step, r.coordinates[instr.index]);
			}

			return container;
		},

		_addRowListeners: function(row, coordinate) {
			L.DomEvent.addListener(row, 'mouseover', function() {
				this._marker = L.circleMarker(coordinate,
					this.options.pointMarkerStyle).addTo(this._map);
			}, this);
			L.DomEvent.addListener(row, 'mouseout', function() {
				if (this._marker) {
					this._map.removeLayer(this._marker);
					delete this._marker;
				}
			}, this);
			L.DomEvent.addListener(row, 'click', function(e) {
				this._map.panTo(coordinate);
				L.DomEvent.stopPropagation(e);
			}, this);
		},

		_onAltClicked: function(e) {
			var altElem = e.target || window.event.srcElement;
			while (!L.DomUtil.hasClass(altElem, 'leaflet-routing-alt')) {
				altElem = altElem.parentElement;
			}

			var j = this._altElements.indexOf(altElem);
			var alts = this._routes.slice();
			var route = alts.splice(j, 1)[0];

			this.fire('routeselected', {
				route: route,
				alternatives: alts
			});
		},

		_selectAlt: function(e) {
			var altElem,
			    j,
			    n,
			    classFn;

			altElem = this._altElements[e.route.routesIndex];

			if (L.DomUtil.hasClass(altElem, 'leaflet-routing-alt-minimized')) {
				for (j = 0; j < this._altElements.length; j++) {
					n = this._altElements[j];
					classFn = j === e.route.routesIndex ? 'removeClass' : 'addClass';
					L.DomUtil[classFn](n, 'leaflet-routing-alt-minimized');
					if (this.options.minimizedClassName) {
						L.DomUtil[classFn](n, this.options.minimizedClassName);
					}

					if (j !== e.route.routesIndex) n.scrollTop = 0;
				}
			}

			L.DomEvent.stop(e);
		},

		_selectRoute: function(routes) {
			if (this._marker) {
				this._map.removeLayer(this._marker);
				delete this._marker;
			}
			this.fire('routeselected', routes);
		}
	});

	L.Routing.itinerary = function(options) {
		return new L.Routing.Itinerary(options);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./L.Routing.Formatter":6,"./L.Routing.ItineraryBuilder":9}],9:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);
	L.Routing = L.Routing || {};

	L.Routing.ItineraryBuilder = L.Class.extend({
		options: {
			containerClassName: ''
		},

		initialize: function(options) {
			L.setOptions(this, options);
		},

		createContainer: function(className) {
			var table = L.DomUtil.create('table', className || ''),
				colgroup = L.DomUtil.create('colgroup', '', table);

			L.DomUtil.create('col', 'leaflet-routing-instruction-icon', colgroup);
			L.DomUtil.create('col', 'leaflet-routing-instruction-text', colgroup);
			L.DomUtil.create('col', 'leaflet-routing-instruction-distance', colgroup);

			return table;
		},

		createStepsContainer: function() {
			return L.DomUtil.create('tbody', '');
		},

		createStep: function(text, distance, icon, steps) {
			var row = L.DomUtil.create('tr', '', steps),
				span,
				td;
			td = L.DomUtil.create('td', '', row);
			span = L.DomUtil.create('span', 'leaflet-routing-icon leaflet-routing-icon-'+icon, td);
			td.appendChild(span);
			td = L.DomUtil.create('td', '', row);
			td.appendChild(document.createTextNode(text));
			td = L.DomUtil.create('td', '', row);
			td.appendChild(document.createTextNode(distance));
			return row;
		}
	});

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);

	L.Routing = L.Routing || {};

	L.Routing.Line = L.LayerGroup.extend({
		includes: L.Mixin.Events,

		options: {
			styles: [
				{color: 'black', opacity: 0.15, weight: 9},
				{color: 'white', opacity: 0.8, weight: 6},
				{color: 'red', opacity: 1, weight: 2}
			],
			missingRouteStyles: [
				{color: 'black', opacity: 0.15, weight: 7},
				{color: 'white', opacity: 0.6, weight: 4},
				{color: 'gray', opacity: 0.8, weight: 2, dashArray: '7,12'}
			],
			addWaypoints: true,
			extendToWaypoints: true,
			missingRouteTolerance: 10
		},

		initialize: function(route, options) {
			L.setOptions(this, options);
			L.LayerGroup.prototype.initialize.call(this, options);
			this._route = route;

			if (this.options.extendToWaypoints) {
				this._extendToWaypoints();
			}

			this._addSegment(
				route.coordinates,
				this.options.styles,
				this.options.addWaypoints);
		},

		addTo: function(map) {
			map.addLayer(this);
			return this;
		},
		getBounds: function() {
			return L.latLngBounds(this._route.coordinates);
		},

		_findWaypointIndices: function() {
			var wps = this._route.inputWaypoints,
			    indices = [],
			    i;
			for (i = 0; i < wps.length; i++) {
				indices.push(this._findClosestRoutePoint(wps[i].latLng));
			}

			return indices;
		},

		_findClosestRoutePoint: function(latlng) {
			var minDist = Number.MAX_VALUE,
				minIndex,
			    i,
			    d;

			for (i = this._route.coordinates.length - 1; i >= 0 ; i--) {
				// TODO: maybe do this in pixel space instead?
				d = latlng.distanceTo(this._route.coordinates[i]);
				if (d < minDist) {
					minIndex = i;
					minDist = d;
				}
			}

			return minIndex;
		},

		_extendToWaypoints: function() {
			var wps = this._route.inputWaypoints,
				wpIndices = this._getWaypointIndices(),
			    i,
			    wpLatLng,
			    routeCoord;

			for (i = 0; i < wps.length; i++) {
				wpLatLng = wps[i].latLng;
				routeCoord = L.latLng(this._route.coordinates[wpIndices[i]]);
				if (wpLatLng.distanceTo(routeCoord) >
					this.options.missingRouteTolerance) {
					this._addSegment([wpLatLng, routeCoord],
						this.options.missingRouteStyles);
				}
			}
		},

		_addSegment: function(coords, styles, mouselistener) {
			var i,
				pl;

			for (i = 0; i < styles.length; i++) {
				pl = L.polyline(coords, styles[i]);
				this.addLayer(pl);
				if (mouselistener) {
					pl.on('mousedown', this._onLineTouched, this);
				}
			}
		},

		_findNearestWpBefore: function(i) {
			var wpIndices = this._getWaypointIndices(),
				j = wpIndices.length - 1;
			while (j >= 0 && wpIndices[j] > i) {
				j--;
			}

			return j;
		},

		_onLineTouched: function(e) {
			var afterIndex = this._findNearestWpBefore(this._findClosestRoutePoint(e.latlng));
			this.fire('linetouched', {
				afterIndex: afterIndex,
				latlng: e.latlng
			});
		},

		_getWaypointIndices: function() {
			if (!this._wpIndices) {
				this._wpIndices = this._route.waypointIndices || this._findWaypointIndices();
			}

			return this._wpIndices;
		}
	});

	L.Routing.line = function(route, options) {
		return new L.Routing.Line(route, options);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function() {
	'use strict';
	L.Routing = L.Routing || {};

	L.Routing.Localization = {
		'en': {
			directions: {
				N: 'north',
				NE: 'northeast',
				E: 'east',
				SE: 'southeast',
				S: 'south',
				SW: 'southwest',
				W: 'west',
				NW: 'northwest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Head {dir}', ' on {road}'],
				'Continue':
					['Continue {dir}', ' on {road}'],
				'SlightRight':
					['Slight right', ' onto {road}'],
				'Right':
					['Right', ' onto {road}'],
				'SharpRight':
					['Sharp right', ' onto {road}'],
				'TurnAround':
					['Turn around'],
				'SharpLeft':
					['Sharp left', ' onto {road}'],
				'Left':
					['Left', ' onto {road}'],
				'SlightLeft':
					['Slight left', ' onto {road}'],
				'WaypointReached':
					['Waypoint reached'],
				'Roundabout':
					['Take the {exitStr} exit in the roundabout', ' onto {road}'],
				'DestinationReached':
					['Destination reached'],
			},
			formatOrder: function(n) {
				var i = n % 10 - 1,
				suffix = ['st', 'nd', 'rd'];

				return suffix[i] ? n + suffix[i] : n + 'th';
			},
			ui: {
				startPlaceholder: 'Start',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'End'
			}
		},

		'de': {
			directions: {
				N: 'Norden',
				NE: 'Nordosten',
				E: 'Osten',
				SE: 'Südosten',
				S: 'Süden',
				SW: 'Südwesten',
				W: 'Westen',
				NW: 'Nordwesten'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Richtung {dir}', ' auf {road}'],
				'Continue':
					['Geradeaus Richtung {dir}', ' auf {road}'],
				'SlightRight':
					['Leicht rechts abbiegen', ' auf {road}'],
				'Right':
					['Rechts abbiegen', ' auf {road}'],
				'SharpRight':
					['Scharf rechts abbiegen', ' auf {road}'],
				'TurnAround':
					['Wenden'],
				'SharpLeft':
					['Scharf links abbiegen', ' auf {road}'],
				'Left':
					['Links abbiegen', ' auf {road}'],
				'SlightLeft':
					['Leicht links abbiegen', ' auf {road}'],
				'WaypointReached':
					['Zwischenhalt erreicht'],
				'Roundabout':
					['Nehmen Sie die {exitStr} Ausfahrt im Kreisverkehr', ' auf {road}'],
				'DestinationReached':
					['Sie haben ihr Ziel erreicht'],
			},
			formatOrder: function(n) {
				return n + '.';
			},
			ui: {
				startPlaceholder: 'Start',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Ziel'
			}
		},

		'sv': {
			directions: {
				N: 'norr',
				NE: 'nordost',
				E: 'öst',
				SE: 'sydost',
				S: 'syd',
				SW: 'sydväst',
				W: 'väst',
				NW: 'nordväst'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Åk åt {dir}', ' på {road}'],
				'Continue':
					['Fortsätt {dir}', ' på {road}'],
				'SlightRight':
					['Svagt höger', ' på {road}'],
				'Right':
					['Sväng höger', ' på {road}'],
				'SharpRight':
					['Skarpt höger', ' på {road}'],
				'TurnAround':
					['Vänd'],
				'SharpLeft':
					['Skarpt vänster', ' på {road}'],
				'Left':
					['Sväng vänster', ' på {road}'],
				'SlightLeft':
					['Svagt vänster', ' på {road}'],
				'WaypointReached':
					['Viapunkt nådd'],
				'Roundabout':
					['Tag {exitStr} avfarten i rondellen', ' till {road}'],
				'DestinationReached':
					['Framme vid resans mål'],
			},
			formatOrder: function(n) {
				return ['första', 'andra', 'tredje', 'fjärde', 'femte',
					'sjätte', 'sjunde', 'åttonde', 'nionde', 'tionde'
					/* Can't possibly be more than ten exits, can there? */][n - 1];
			},
			ui: {
				startPlaceholder: 'Från',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Till'
			}
		},

		'sp': {
			directions: {
				N: 'norte',
				NE: 'noreste',
				E: 'este',
				SE: 'sureste',
				S: 'sur',
				SW: 'suroeste',
				W: 'oeste',
				NW: 'noroeste'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Derecho {dir}', ' sobre {road}'],
				'Continue':
					['Continuar {dir}', ' en {road}'],
				'SlightRight':
					['Leve giro a la derecha', ' sobre {road}'],
				'Right':
					['Derecha', ' sobre {road}'],
				'SharpRight':
					['Giro pronunciado a la derecha', ' sobre {road}'],
				'TurnAround':
					['Dar vuelta'],
				'SharpLeft':
					['Giro pronunciado a la izquierda', ' sobre {road}'],
				'Left':
					['Izquierda', ' en {road}'],
				'SlightLeft':
					['Leve giro a la izquierda', ' en {road}'],
				'WaypointReached':
					['Llegó a un punto del camino'],
				'Roundabout':
					['Tomar {exitStr} salida en la rotonda', ' en {road}'],
				'DestinationReached':
					['Llegada a destino'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Inicio',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Destino'
			}
		},
		'nl': {
			directions: {
				N: 'noordelijke',
				NE: 'noordoostelijke',
				E: 'oostelijke',
				SE: 'zuidoostelijke',
				S: 'zuidelijke',
				SW: 'zuidewestelijke',
				W: 'westelijke',
				NW: 'noordwestelijke'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Vertrek in {dir} richting', ' de {road} op'],
				'Continue':
					['Ga in {dir} richting', ' de {road} op'],
				'SlightRight':
					['Volg de weg naar rechts', ' de {road} op'],
				'Right':
					['Ga rechtsaf', ' de {road} op'],
				'SharpRight':
					['Ga scherpe bocht naar rechts', ' de {road} op'],
				'TurnAround':
					['Keer om'],
				'SharpLeft':
					['Ga scherpe bocht naar links', ' de {road} op'],
				'Left':
					['Ga linksaf', ' de {road} op'],
				'SlightLeft':
					['Volg de weg naar links', ' de {road} op'],
				'WaypointReached':
					['Aangekomen bij tussenpunt'],
				'Roundabout':
					['Neem de {exitStr} afslag op de rotonde', ' de {road} op'],
				'DestinationReached':
					['Aangekomen op eindpunt'],
			},
			formatOrder: function(n) {
				if (n === 1 || n >= 20) {
					return n + 'ste';
				} else {
					return n + 'de';
				}
			},
			ui: {
				startPlaceholder: 'Vertrekpunt',
				viaPlaceholder: 'Via {viaNumber}',
				endPlaceholder: 'Bestemming'
			}
		},
		'fr': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-ouest',
				W: 'ouest',
				NW: 'nord-ouest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Tout droit au {dir}', ' sur {road}'],
				'Continue':
					['Continuer au {dir}', ' sur {road}'],
				'SlightRight':
					['Légèrement à droite', ' sur {road}'],
				'Right':
					['A droite', ' sur {road}'],
				'SharpRight':
					['Complètement à droite', ' sur {road}'],
				'TurnAround':
					['Faire demi-tour'],
				'SharpLeft':
					['Complètement à gauche', ' sur {road}'],
				'Left':
					['A gauche', ' sur {road}'],
				'SlightLeft':
					['Légèrement à gauche', ' sur {road}'],
				'WaypointReached':
					['Point d\'étape atteint'],
				'Roundabout':
					['Au rond-point, prenez la {exitStr} sortie', ' sur {road}'],
				'DestinationReached':
					['Destination atteinte'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Départ',
				viaPlaceholder: 'Intermédiaire {viaNumber}',
				endPlaceholder: 'Arrivée'
			}
		},
		'it': {
			directions: {
				N: 'nord',
				NE: 'nord-est',
				E: 'est',
				SE: 'sud-est',
				S: 'sud',
				SW: 'sud-ovest',
				W: 'ovest',
				NW: 'nord-ovest'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Dritto verso {dir}', ' su {road}'],
				'Continue':
					['Continuare verso {dir}', ' su {road}'],
				'SlightRight':
					['Mantenere la destra', ' su {road}'],
				'Right':
					['A destra', ' su {road}'],
				'SharpRight':
					['Strettamente a destra', ' su {road}'],
				'TurnAround':
					['Fare inversione di marcia'],
				'SharpLeft':
					['Strettamente a sinistra', ' su {road}'],
				'Left':
					['A sinistra', ' sur {road}'],
				'SlightLeft':
					['Mantenere la sinistra', ' su {road}'],
				'WaypointReached':
					['Punto di passaggio raggiunto'],
				'Roundabout':
					['Alla rotonda, prendere la {exitStr} uscita'],
				'DestinationReached':
					['Destinazione raggiunta'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Partenza',
				viaPlaceholder: 'Intermedia {viaNumber}',
				endPlaceholder: 'Destinazione'
			}
		},
		'pt': {
			directions: {
				N: 'norte',
				NE: 'nordeste',
				E: 'leste',
				SE: 'sudeste',
				S: 'sul',
				SW: 'sudoeste',
				W: 'oeste',
				NW: 'noroeste'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Siga {dir}', ' na {road}'],
				'Continue':
					['Continue {dir}', ' na {road}'],
				'SlightRight':
					['Curva ligeira a direita', ' na {road}'],
				'Right':
					['Curva a direita', ' na {road}'],
				'SharpRight':
					['Curva fechada a direita', ' na {road}'],
				'TurnAround':
					['Retorne'],
				'SharpLeft':
					['Curva fechada a esquerda', ' na {road}'],
				'Left':
					['Curva a esquerda', ' na {road}'],
				'SlightLeft':
					['Curva ligueira a esquerda', ' na {road}'],
				'WaypointReached':
					['Ponto de interesse atingido'],
				'Roundabout':
					['Pegue a {exitStr} saída na rotatória', ' na {road}'],
				'DestinationReached':
					['Destino atingido'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Origem',
				viaPlaceholder: 'Intermédio {viaNumber}',
				endPlaceholder: 'Destino'
			}
		},
		'sk': {
			directions: {
				N: 'sever',
				NE: 'serverovýchod',
				E: 'východ',
				SE: 'juhovýchod',
				S: 'juh',
				SW: 'juhozápad',
				W: 'západ',
				NW: 'serverozápad'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Mierte na {dir}', ' na {road}'],
				'Continue':
					['Pokračujte na {dir}', ' na {road}'],
				'SlightRight':
					['Mierne doprava', ' na {road}'],
				'Right':
					['Doprava', ' na {road}'],
				'SharpRight':
					['Prudko doprava', ' na {road}'],
				'TurnAround':
					['Otočte sa'],
				'SharpLeft':
					['Prudko doľava', ' na {road}'],
				'Left':
					['Doľava', ' na {road}'],
				'SlightLeft':
					['Mierne doľava', ' na {road}'],
				'WaypointReached':
					['Ste v prejazdovom bode.'],
				'Roundabout':
					['Odbočte na {exitStr} výjazde', ' na {road}'],
				'DestinationReached':
					['Prišli ste do cieľa.'],
			},
			formatOrder: function(n) {
				var i = n % 10 - 1,
				suffix = ['.', '.', '.'];

				return suffix[i] ? n + suffix[i] : n + '.';
			},
			ui: {
				startPlaceholder: 'Začiatok',
				viaPlaceholder: 'Cez {viaNumber}',
				endPlaceholder: 'Koniec'
			}
		},
		'el': {
			directions: {
				N: 'βόρεια',
				NE: 'βορειοανατολικά',
				E: 'ανατολικά',
				SE: 'νοτιοανατολικά',
				S: 'νότια',
				SW: 'νοτιοδυτικά',
				W: 'δυτικά',
				NW: 'βορειοδυτικά'
			},
			instructions: {
				// instruction, postfix if the road is named
				'Head':
					['Κατευθυνθείτε {dir}', ' στην {road}'],
				'Continue':
					['Συνεχίστε {dir}', ' στην {road}'],
				'SlightRight':
					['Ελαφρώς δεξιά', ' στην {road}'],
				'Right':
					['Δεξιά', ' στην {road}'],
				'SharpRight':
					['Απότομη δεξιά στροφή', ' στην {road}'],
				'TurnAround':
					['Κάντε αναστροφή'],
				'SharpLeft':
					['Απότομη αριστερή στροφή', ' στην {road}'],
				'Left':
					['Αριστερά', ' στην {road}'],
				'SlightLeft':
					['Ελαφρώς αριστερά', ' στην {road}'],
				'WaypointReached':
					['Φτάσατε στο σημείο αναφοράς'],
				'Roundabout':
					['Ακολουθήστε την {exitStr} έξοδο στο κυκλικό κόμβο', ' στην {road}'],
				'DestinationReached':
					['Φτάσατε στον προορισμό σας'],
			},
			formatOrder: function(n) {
				return n + 'º';
			},
			ui: {
				startPlaceholder: 'Αφετηρία',
				viaPlaceholder: 'μέσω {viaNumber}',
				endPlaceholder: 'Προορισμός'
			}
		}
	};

	module.exports = L.Routing;
})();

},{}],12:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null),
		corslite = require('corslite'),
		polyline = require('polyline');

	// Ignore camelcase naming for this file, since OSRM's API uses
	// underscores.
	/* jshint camelcase: false */

	L.Routing = L.Routing || {};
	L.extend(L.Routing, require('./L.Routing.Waypoint'));

	L.Routing.OSRM = L.Class.extend({
		options: {
			serviceUrl: 'https://router.project-osrm.org/viaroute',
			timeout: 30 * 1000,
			routingOptions: {},
			polylinePrecision: 6
		},

		initialize: function(options) {
			L.Util.setOptions(this, options);
			this._hints = {
				locations: {}
			};
		},

		route: function(waypoints, callback, context, options) {
			var timedOut = false,
				wps = [],
				url,
				timer,
				wp,
				i;

			url = this.buildRouteUrl(waypoints, L.extend({}, this.options.routingOptions, options));

			timer = setTimeout(function() {
				timedOut = true;
				callback.call(context || callback, {
					status: -1,
					message: 'OSRM request timed out.'
				});
			}, this.options.timeout);

			// Create a copy of the waypoints, since they
			// might otherwise be asynchronously modified while
			// the request is being processed.
			for (i = 0; i < waypoints.length; i++) {
				wp = waypoints[i];
				wps.push(new L.Routing.Waypoint(wp.latLng, wp.name, wp.options));
			}

			corslite(url, L.bind(function(err, resp) {
				var data,
					errorMessage,
					statusCode;

				clearTimeout(timer);
				if (!timedOut) {
					errorMessage = 'HTTP request failed: ' + err;
					statusCode = -1;

					if (!err) {
						try {
							data = JSON.parse(resp.responseText);
							try {
								return this._routeDone(data, wps, callback, context);
							} catch (ex) {
								statusCode = -3;
								errorMessage = ex.toString();
							}
						} catch (ex) {
							statusCode = -2;
							errorMessage = 'Error parsing OSRM response: ' + ex.toString();
						}
					}

					callback.call(context || callback, {
						status: statusCode,
						message: errorMessage
					});
				}
			}, this));

			return this;
		},

		_routeDone: function(response, inputWaypoints, callback, context) {
			var coordinates,
			    alts,
			    actualWaypoints,
			    i;

			context = context || callback;
			if (response.status !== 0 && response.status !== 200) {
				callback.call(context, {
					status: response.status,
					message: response.status_message
				});
				return;
			}

			coordinates = this._decodePolyline(response.route_geometry);
			actualWaypoints = this._toWaypoints(inputWaypoints, response.via_points);
			alts = [{
				name: this._createName(response.route_name),
				coordinates: coordinates,
				instructions: response.route_instructions ? this._convertInstructions(response.route_instructions) : [],
				summary: response.route_summary ? this._convertSummary(response.route_summary) : [],
				inputWaypoints: inputWaypoints,
				waypoints: actualWaypoints,
				waypointIndices: this._clampIndices(response.via_indices, coordinates)
			}];

			if (response.alternative_geometries) {
				for (i = 0; i < response.alternative_geometries.length; i++) {
					coordinates = this._decodePolyline(response.alternative_geometries[i]);
					alts.push({
						name: this._createName(response.alternative_names[i]),
						coordinates: coordinates,
						instructions: response.alternative_instructions[i] ? this._convertInstructions(response.alternative_instructions[i]) : [],
						summary: response.alternative_summaries[i] ? this._convertSummary(response.alternative_summaries[i]) : [],
						inputWaypoints: inputWaypoints,
						waypoints: actualWaypoints,
						waypointIndices: this._clampIndices(response.alternative_geometries.length === 1 ?
							// Unsure if this is a bug in OSRM or not, but alternative_indices
							// does not appear to be an array of arrays, at least not when there is
							// a single alternative route.
							response.alternative_indices : response.alternative_indices[i],
							coordinates)
					});
				}
			}

			// only versions <4.5.0 will support this flag
			if (response.hint_data) {
				this._saveHintData(response.hint_data, inputWaypoints);
			}
			callback.call(context, null, alts);
		},

		_decodePolyline: function(routeGeometry) {
			var cs = polyline.decode(routeGeometry, this.options.polylinePrecision),
				result = new Array(cs.length),
				i;
			for (i = cs.length - 1; i >= 0; i--) {
				result[i] = L.latLng(cs[i]);
			}

			return result;
		},

		_toWaypoints: function(inputWaypoints, vias) {
			var wps = [],
			    i;
			for (i = 0; i < vias.length; i++) {
				wps.push(L.Routing.waypoint(L.latLng(vias[i]),
				                            inputWaypoints[i].name,
				                            inputWaypoints[i].options));
			}

			return wps;
		},

		_createName: function(nameParts) {
			var name = '',
				i;

			for (i = 0; i < nameParts.length; i++) {
				if (nameParts[i]) {
					if (name) {
						name += ', ';
					}
					name += nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1);
				}
			}

			return name;
		},

		buildRouteUrl: function(waypoints, options) {
			var locs = [],
				wp,
			    computeInstructions,
			    computeAlternative,
			    locationKey,
			    hint;

			for (var i = 0; i < waypoints.length; i++) {
				wp = waypoints[i];
				locationKey = this._locationKey(wp.latLng);
				locs.push('loc=' + locationKey);

				hint = this._hints.locations[locationKey];
				if (hint) {
					locs.push('hint=' + hint);
				}

				if (wp.options && wp.options.allowUTurn) {
					locs.push('u=true');
				}
			}

			computeAlternative = computeInstructions =
				!(options && options.geometryOnly);

			return this.options.serviceUrl + '?' +
				'instructions=' + computeInstructions.toString() + '&' +
				'alt=' + computeAlternative.toString() + '&' +
				(options.z ? 'z=' + options.z + '&' : '') +
				locs.join('&') +
				(this._hints.checksum !== undefined ? '&checksum=' + this._hints.checksum : '') +
				(options.fileformat ? '&output=' + options.fileformat : '') +
				(options.allowUTurns ? '&uturns=' + options.allowUTurns : '');
		},

		_locationKey: function(location) {
			return location.lat + ',' + location.lng;
		},

		_saveHintData: function(hintData, waypoints) {
			var loc;
			this._hints = {
				checksum: hintData.checksum,
				locations: {}
			};
			for (var i = hintData.locations.length - 1; i >= 0; i--) {
				loc = waypoints[i].latLng;
				this._hints.locations[this._locationKey(loc)] = hintData.locations[i];
			}
		},

		_convertSummary: function(osrmSummary) {
			return {
				totalDistance: osrmSummary.total_distance,
				totalTime: osrmSummary.total_time
			};
		},

		_convertInstructions: function(osrmInstructions) {
			var result = [],
			    i,
			    instr,
			    type,
			    driveDir;

			for (i = 0; i < osrmInstructions.length; i++) {
				instr = osrmInstructions[i];
				type = this._drivingDirectionType(instr[0]);
				driveDir = instr[0].split('-');
				if (type) {
					result.push({
						type: type,
						distance: instr[2],
						time: instr[4],
						road: instr[1],
						direction: instr[6],
						exit: driveDir.length > 1 ? driveDir[1] : undefined,
						index: instr[3]
					});
				}
			}

			return result;
		},

		_drivingDirectionType: function(d) {
			switch (parseInt(d, 10)) {
			case 1:
				return 'Straight';
			case 2:
				return 'SlightRight';
			case 3:
				return 'Right';
			case 4:
				return 'SharpRight';
			case 5:
				return 'TurnAround';
			case 6:
				return 'SharpLeft';
			case 7:
				return 'Left';
			case 8:
				return 'SlightLeft';
			case 9:
				return 'WaypointReached';
			case 10:
				// TODO: "Head on"
				// https://github.com/DennisOSRM/Project-OSRM/blob/master/DataStructures/TurnInstructions.h#L48
				return 'Straight';
			case 11:
			case 12:
				return 'Roundabout';
			case 15:
				return 'DestinationReached';
			default:
				return null;
			}
		},

		_clampIndices: function(indices, coords) {
			var maxCoordIndex = coords.length - 1,
				i;
			for (i = 0; i < indices.length; i++) {
				indices[i] = Math.min(maxCoordIndex, Math.max(indices[i], 0));
			}
			return indices;
		}
	});

	L.Routing.osrm = function(options) {
		return new L.Routing.OSRM(options);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./L.Routing.Waypoint":14,"corslite":1,"polyline":2}],13:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);
	L.Routing = L.Routing || {};
	L.extend(L.Routing, require('./L.Routing.GeocoderElement'));
	L.extend(L.Routing, require('./L.Routing.Waypoint'));

	L.Routing.Plan = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			dragStyles: [
				{color: 'black', opacity: 0.15, weight: 9},
				{color: 'white', opacity: 0.8, weight: 6},
				{color: 'red', opacity: 1, weight: 2, dashArray: '7,12'}
			],
			draggableWaypoints: true,
			routeWhileDragging: false,
			addWaypoints: true,
			reverseWaypoints: false,
			addButtonClassName: '',
			language: 'en',
			createGeocoderElement: L.Routing.geocoderElement,
			createMarker: function(i, wp) {
				var options = {
						draggable: this.draggableWaypoints
					},
				    marker = L.marker(wp.latLng, options);

				return marker;
			},
			geocodersClassName: ''
		},

		initialize: function(waypoints, options) {
			L.Util.setOptions(this, options);
			this._waypoints = [];
			this.setWaypoints(waypoints);
		},

		isReady: function() {
			var i;
			for (i = 0; i < this._waypoints.length; i++) {
				if (!this._waypoints[i].latLng) {
					return false;
				}
			}

			return true;
		},

		getWaypoints: function() {
			var i,
				wps = [];

			for (i = 0; i < this._waypoints.length; i++) {
				wps.push(this._waypoints[i]);
			}

			return wps;
		},

		setWaypoints: function(waypoints) {
			var args = [0, this._waypoints.length].concat(waypoints);
			this.spliceWaypoints.apply(this, args);
			return this;
		},

		spliceWaypoints: function() {
			var args = [arguments[0], arguments[1]],
			    i;

			for (i = 2; i < arguments.length; i++) {
				args.push(arguments[i] && arguments[i].hasOwnProperty('latLng') ? arguments[i] : L.Routing.waypoint(arguments[i]));
			}

			[].splice.apply(this._waypoints, args);

			// Make sure there's always at least two waypoints
			while (this._waypoints.length < 2) {
				this.spliceWaypoints(this._waypoints.length, 0, null);
			}

			this._updateMarkers();
			this._fireChanged.apply(this, args);
		},

		onAdd: function(map) {
			this._map = map;
			this._updateMarkers();
		},

		onRemove: function() {
			var i;
			this._removeMarkers();

			if (this._newWp) {
				for (i = 0; i < this._newWp.lines.length; i++) {
					this._map.removeLayer(this._newWp.lines[i]);
				}
			}

			delete this._map;
		},

		createGeocoders: function() {
			var container = L.DomUtil.create('div', 'leaflet-routing-geocoders ' + this.options.geocodersClassName),
				waypoints = this._waypoints,
			    addWpBtn,
			    reverseBtn;

			this._geocoderContainer = container;
			this._geocoderElems = [];


			if (this.options.addWaypoints) {
				addWpBtn = L.DomUtil.create('button', 'leaflet-routing-add-waypoint ' + this.options.addButtonClassName, container);
				addWpBtn.setAttribute('type', 'button');
				L.DomEvent.addListener(addWpBtn, 'click', function() {
					this.spliceWaypoints(waypoints.length, 0, null);
				}, this);
			}

			if (this.options.reverseWaypoints) {
				reverseBtn = L.DomUtil.create('button', 'leaflet-routing-reverse-waypoints', container);
				reverseBtn.setAttribute('type', 'button');
				L.DomEvent.addListener(reverseBtn, 'click', function() {
					this._waypoints.reverse();
					this.setWaypoints(this._waypoints);
				}, this);
			}

			this._updateGeocoders();
			this.on('waypointsspliced', this._updateGeocoders);

			return container;
		},

		_createGeocoder: function(i) {
			var geocoder = this.options.createGeocoderElement(this._waypoints[i], i, this._waypoints.length, this.options);
			geocoder
			.on('delete', function() {
				if (i > 0 || this._waypoints.length > 2) {
					this.spliceWaypoints(i, 1);
				} else {
					this.spliceWaypoints(i, 1, new L.Routing.Waypoint());
				}
			}, this)
			.on('geocoded', function(e) {
				this._updateMarkers();
				this._fireChanged();
				this._focusGeocoder(i + 1);
				this.fire('waypointgeocoded', {
					waypointIndex: i,
					waypoint: e.waypoint
				});
			}, this)
			.on('reversegeocoded', function(e) {
				this.fire('waypointgeocoded', {
					waypointIndex: i,
					waypoint: e.waypoint
				});
			}, this);

			return geocoder;
		},

		_updateGeocoders: function() {
			var elems = [],
				i,
			    geocoderElem;

			for (i = 0; i < this._geocoderElems.length; i++) {
				this._geocoderContainer.removeChild(this._geocoderElems[i].getContainer());
			}

			for (i = this._waypoints.length - 1; i >= 0; i--) {
				geocoderElem = this._createGeocoder(i);
				this._geocoderContainer.insertBefore(geocoderElem.getContainer(), this._geocoderContainer.firstChild);
				elems.push(geocoderElem);
			}

			this._geocoderElems = elems.reverse();
		},

		_removeMarkers: function() {
			var i;
			if (this._markers) {
				for (i = 0; i < this._markers.length; i++) {
					if (this._markers[i]) {
						this._map.removeLayer(this._markers[i]);
					}
				}
			}
			this._markers = [];
		},

		_updateMarkers: function() {
			var i,
			    m;

			if (!this._map) {
				return;
			}

			this._removeMarkers();

			for (i = 0; i < this._waypoints.length; i++) {
				if (this._waypoints[i].latLng) {
					m = this.options.createMarker(i, this._waypoints[i], this._waypoints.length);
					if (m) {
						m.addTo(this._map);
						if (this.options.draggableWaypoints) {
							this._hookWaypointEvents(m, i);
						}
					}
				} else {
					m = null;
				}
				this._markers.push(m);
			}
		},

		_fireChanged: function() {
			this.fire('waypointschanged', {waypoints: this.getWaypoints()});

			if (arguments.length >= 2) {
				this.fire('waypointsspliced', {
					index: Array.prototype.shift.call(arguments),
					nRemoved: Array.prototype.shift.call(arguments),
					added: arguments
				});
			}
		},

		_hookWaypointEvents: function(m, i, trackMouseMove) {
			var eventLatLng = function(e) {
					return trackMouseMove ? e.latlng : e.target.getLatLng();
				},
				dragStart = L.bind(function(e) {
					this.fire('waypointdragstart', {index: i, latlng: eventLatLng(e)});
				}, this),
				drag = L.bind(function(e) {
					this._waypoints[i].latLng = eventLatLng(e);
					this.fire('waypointdrag', {index: i, latlng: eventLatLng(e)});
				}, this),
				dragEnd = L.bind(function(e) {
					this._waypoints[i].latLng = eventLatLng(e);
					this._waypoints[i].name = '';
					if (this._geocoderElems) {
						this._geocoderElems[i].update(true);
					}
					this.fire('waypointdragend', {index: i, latlng: eventLatLng(e)});
					this._fireChanged();
				}, this),
				mouseMove,
				mouseUp;

			if (trackMouseMove) {
				mouseMove = L.bind(function(e) {
					this._markers[i].setLatLng(e.latlng);
					drag(e);
				}, this);
				mouseUp = L.bind(function(e) {
					this._map.dragging.enable();
					this._map.off('mouseup', mouseUp);
					this._map.off('mousemove', mouseMove);
					dragEnd(e);
				}, this);
				this._map.dragging.disable();
				this._map.on('mousemove', mouseMove);
				this._map.on('mouseup', mouseUp);
				dragStart({latlng: this._waypoints[i].latLng});
			} else {
				m.on('dragstart', dragStart);
				m.on('drag', drag);
				m.on('dragend', dragEnd);
			}
		},

		dragNewWaypoint: function(e) {
			var newWpIndex = e.afterIndex + 1;
			if (this.options.routeWhileDragging) {
				this.spliceWaypoints(newWpIndex, 0, e.latlng);
				this._hookWaypointEvents(this._markers[newWpIndex], newWpIndex, true);
			} else {
				this._dragNewWaypoint(newWpIndex, e.latlng);
			}
		},

		_dragNewWaypoint: function(newWpIndex, initialLatLng) {
			var wp = new L.Routing.Waypoint(initialLatLng),
				prevWp = this._waypoints[newWpIndex - 1],
				nextWp = this._waypoints[newWpIndex],
				marker = this.options.createMarker(newWpIndex, wp, this._waypoints.length + 1),
				lines = [],
				mouseMove = L.bind(function(e) {
					var i;
					if (marker) {
						marker.setLatLng(e.latlng);
					}
					for (i = 0; i < lines.length; i++) {
						lines[i].spliceLatLngs(1, 1, e.latlng);
					}
				}, this),
				mouseUp = L.bind(function(e) {
					var i;
					if (marker) {
						this._map.removeLayer(marker);
					}
					for (i = 0; i < lines.length; i++) {
						this._map.removeLayer(lines[i]);
					}
					this._map.off('mousemove', mouseMove);
					this._map.off('mouseup', mouseUp);
					this.spliceWaypoints(newWpIndex, 0, e.latlng);
				}, this),
				i;

			if (marker) {
				marker.addTo(this._map);
			}

			for (i = 0; i < this.options.dragStyles.length; i++) {
				lines.push(L.polyline([prevWp.latLng, initialLatLng, nextWp.latLng],
					this.options.dragStyles[i]).addTo(this._map));
			}

			this._map.on('mousemove', mouseMove);
			this._map.on('mouseup', mouseUp);
		},

		_focusGeocoder: function(i) {
			if (this._geocoderElems[i]) {
				this._geocoderElems[i].focus();
			} else {
				document.activeElement.blur();
			}
		}
	});

	L.Routing.plan = function(waypoints, options) {
		return new L.Routing.Plan(waypoints, options);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./L.Routing.GeocoderElement":7,"./L.Routing.Waypoint":14}],14:[function(require,module,exports){
(function (global){
(function() {
	'use strict';

	var L = (typeof window !== "undefined" ? window.L : typeof global !== "undefined" ? global.L : null);
	L.Routing = L.Routing || {};

	L.Routing.Waypoint = L.Class.extend({
			options: {
				allowUTurn: false,
			},
			initialize: function(latLng, name, options) {
				L.Util.setOptions(this, options);
				this.latLng = L.latLng(latLng);
				this.name = name;
			}
		});

	L.Routing.waypoint = function(latLng, name, options) {
		return new L.Routing.Waypoint(latLng, name, options);
	};

	module.exports = L.Routing;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[4])(4)
});