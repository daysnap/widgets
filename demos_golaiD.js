(self["webpackChunk_daysnap_widgets"]=self["webpackChunk_daysnap_widgets"]||[]).push([[873,770,911],{96414:function(e,n,t){"use strict";var r=t(13378),o=t(3911),c=t(67294),a=t(35510),l=t.n(a),i=t(18677),u=t(96996),s=c.forwardRef(((e,n)=>{var t=e.type,a=void 0===t?"default":t,s=e.plain,f=void 0!==s&&s,d=e.disabled,m=void 0!==d&&d,p=e.loading,v=void 0!==p&&p,b=e.children,h=e.className,y=e.icon,g=e.prefixCls,C=e.href,w=e.onClick,O=e.htmlType,N=void 0===O?"button":O,E=(0,o.default)(e,["type","plain","disabled","loading","children","className","icon","prefixCls","href","onClick","htmlType"]),x=(0,i.g)("button",g),j=l()("".concat(x),"".concat(x,"-").concat(a),{["is-icon-only"]:!b&&0!==b,["is-plain"]:f,["is-loading"]:v,["is-disabled"]:m},h),k=e=>{v||m?e.preventDefault():null===w||void 0===w||w(e)},P=y&&!v?c.createElement(u.Z,{icon:y}):v?c.createElement(u.Z.Loading,null):null;return"function"===typeof b?b({className:j,onClick:k,icon:P}):C?c.createElement("a",(0,r.default)({},E,{className:j,onClick:k,href:C,ref:n}),P,b):c.createElement("button",(0,r.default)({},E,{type:N,className:j,disabled:m,onClick:k,ref:n}),P,b)}));s.displayName="Button",n["Z"]=s},56770:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a.Z}});var r=t(98290),o={};for(var c in r)"default"!==c&&(o[c]=function(e){return r[e]}.bind(0,c));t.d(n,o);var a=t(96414)},98290:function(){},50319:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(56770),o=t(52663),c=t(13378),a=t(68699),l=t(3911),i=t(94043),u=t.n(i),s=t(67294),f=t(73935),d=t(35510),m=t.n(d),p=t(18677),v=t(96996),b=e=>{var n=e.className,t=e.title,r=e.children,o=e.showCancelButton,i=void 0===o||o,f=e.showConfirmButton,d=void 0===f||f,b=e.cancelButtonText,h=void 0===b?"\u53d6\u6d88":b,y=e.confirmButtonText,g=void 0===y?"\u786e\u8ba4":y,C=e.onConfirm,w=e.onCancel,O=e.visible,N=e.onAfterClose,E=(0,l.default)(e,["className","title","children","showCancelButton","showConfirmButton","cancelButtonText","confirmButtonText","onConfirm","onCancel","visible","onAfterClose"]);if(!O)return null;var x=(0,p.g)("dialog"),j=m()("".concat(x),n),k=()=>{var e=s.createElement("header",{className:"".concat(x,"-header")},s.createElement("h2",{className:"".concat(x,"-title")},t),s.createElement(v.Z,{className:"".concat(x,"-close"),icon:"close"}));return t?e:null},P=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,null===C||void 0===C?void 0:C();case 2:return e.next=4,null===N||void 0===N?void 0:N();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,null===w||void 0===w?void 0:w();case 2:return e.next=4,null===N||void 0===N?void 0:N();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=()=>{var e=s.createElement("footer",{className:"".concat(x,"-footer")},i&&s.createElement("button",{className:"".concat(x,"-button ").concat(x,"-button-cancel"),onClick:Z},h),d&&s.createElement("button",{className:"".concat(x,"-button ").concat(x,"-button-confirm"),onClick:P},g));return i||d?e:null};return s.createElement("div",(0,c.default)({},E,{className:j}),s.createElement("div",{className:"".concat(x,"-mask")}),s.createElement("div",{className:"".concat(x,"-inner")},k(),s.createElement("div",{className:"".concat(x,"-content")},r),B()))};function h(e){var n=document.createElement("div");return document.body.append(n),new Promise(((t,r)=>{var c=(0,o.Z)((0,o.Z)({},e),{},{visible:!0,onConfirm:t,onCancel:r,onAfterClose:()=>{var e=f.unmountComponentAtNode(n);e&&n.parentNode&&n.parentNode.removeChild(n)}});return f.render(s.createElement(b,c),n)}))}["alert","confirm"].forEach((e=>{b[e]=n=>(n&&!n.children&&(n={children:n}),h(Object.assign({showCancelButton:"confirm"===e},n)))}));var y=b,g=()=>{var e=()=>{y.alert("alert").then((()=>{console.log("\u6210\u529f")})).catch((e=>{console.log("\u5931\u8d25",e)}))},n=()=>{y.confirm("confirm").then((()=>{console.log("\u6210\u529f")})).catch((e=>{console.log("\u5931\u8d25",e)}))};return s.createElement("dl",null,s.createElement("dt",null,"\u57fa\u672c\u7528\u6cd5"),s.createElement("dd",null,s.createElement(r.default,{onClick:n},"Confirm"),s.createElement(r.default,{onClick:e},"Alert")))}},96996:function(e,n,t){"use strict";t.d(n,{J:function(){return m},Z:function(){return p}});var r=t(13378),o=t(3911),c=t(67294),a=t(35510),l=t.n(a),i=t(18677),u=c.forwardRef(((e,n)=>{var t=e.className,a=e.icon,u=e.prefixCls,s=(0,o.default)(e,["className","icon","prefixCls"]),f=(0,i.g)("icon",u),d=l()("iconfont",f,a,t);return c.createElement("i",(0,r.default)({},s,{ref:n,className:d}))}));u.displayName="Icon";var s=u,f=c.forwardRef((e=>{var n=e.className,t=e.prefixCls,a=e.icon,u=void 0===a?"icon-loading2":a,f=(0,o.default)(e,["className","prefixCls","icon"]),d=(0,i.g)("icon-loading",t),m=l()(d,n);return c.createElement(s,(0,r.default)({},f,{className:m,icon:u}))})),d=f,m=s;m.Loading=d;var p=m},18677:function(e,n,t){"use strict";function r(e,n){return n||(e?"ds-".concat(e):"ds")}t.d(n,{g:function(){return r}})},52663:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,{Z:function(){return c}})},3911:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function o(e,n){if(null==e)return{};var t,o,c=r(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}t.r(n),t.d(n,{default:function(){return o}})},35510:function(e,n){var t,r;(function(){"use strict";var o={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var a=c.apply(null,t);a&&e.push(a)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var l in t)o.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):(t=[],r=function(){return c}.apply(n,t),void 0===r||(e.exports=r))})()}}]);