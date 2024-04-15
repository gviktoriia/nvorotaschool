"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{6016:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:o=null,children:l,dataNtpc:i=""}=e;return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(i)}})},[i]),(0,r.jsxs)(r.Fragment,{children:[l,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:t}}):null]})}},1845:function(e,t,n){var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(7437),l=n(2265),i=(r=n(4983))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(...t):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},8739:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),o=n(4982),l=r(n(6016));t.default=function(e){let{apiKey:t,...n}=e,r={...n,key:t},{html:i}=(0,o.GoogleMapsEmbed)(r);return(0,a.jsx)(l.default,{height:r.height||null,width:r.width||null,html:i,dataNtpc:"GoogleMapsEmbed"})}},7388:function(e,t,n){var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(7437),l=n(2265),i=(r=n(4983))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:u,dataLayer:s}=e;void 0===a&&(a=n);let d="dataLayer"!==n?"$l=".concat(n):"";return(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(s?"w[l].push(".concat(JSON.stringify(s),")"):"","\n      })(window,'").concat(n,"');")}}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(r?"&gtm_auth=".concat(r):"").concat(u?"&gtm_preview=".concat(u,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},946:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=n(8739);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return r(a).default}});var o=n(5416);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return r(o).default}});var l=n(7388);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return l.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return l.sendGTMEvent}});var i=n(1845);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return i.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return i.sendGAEvent}})},5416:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),o=r(n(4983)),l=n(4982),i=r(n(6016)),u={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:n,stylesheets:r}=(0,l.YouTubeEmbed)(e);return(0,a.jsx)(i.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==n?void 0:n.map(e=>(0,a.jsx)(o.default,{src:e.url,strategy:u[e.strategy],stylesheets:r},e.url))})}},4983:function(e,t,n){n.r(t),n.d(t,{default:function(){return a.a}});var r=n(5935),a=n.n(r),o={};for(var l in r)"default"!==l&&(o[l]=(function(e){return r[e]}).bind(0,l));n.d(t,o)},3313:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let s=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return b},initScriptLoader:function(){return y},default:function(){return v}});let r=n(6921),a=n(1884),o=n(7437),l=r._(n(4887)),i=a._(n(2265)),u=n(7484),s=n(3313),d=n(2185),c=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],g=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:u,stylesheets:d}=e,m=n||t;if(m&&f.has(m))return;if(c.has(t)){f.add(m),c.get(t).then(r,u);return}let b=()=>{a&&a(),f.add(m)},y=document.createElement("script"),h=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),b()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(y.innerHTML=o.__html||"",b()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",b()):t&&(y.src=t,c.set(t,h)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),d&&g(d),document.body.appendChild(y)};function b(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>m(e))}):m(e)}function y(e){e.forEach(b),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function h(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:s="afterInteractive",onError:c,stylesheets:p,...g}=e,{updateScripts:b,scripts:y,getIsSsr:h,appDir:v,nonce:_}=(0,i.useContext)(u.HeadManagerContext),w=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let j=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!j.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>m(e))})),j.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(b?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:c,...g}]),b(y)):h&&h()?f.add(t||n):h&&!h()&&m(e)),v){if(p&&p.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(l.default.preload(n,g.integrity?{as:"script",integrity:g.integrity}:{as:"script"}),(0,o.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...g,id:t}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:t}])+")"}}));"afterInteractive"===s&&n&&l.default.preload(n,g.integrity?{as:"script",integrity:g.integrity}:{as:"script"})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let v=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4982:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var r=n(6328);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}});var a=n(4456);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var o=n(5744);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return o.YouTubeEmbed}})},6328:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=a(n(6893)),l=n(1531);t.GoogleAnalytics=e=>{var t=r(e,[]);return(0,l.formatData)(o.default,t)}},4456:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let o=a(n(6362)),l=n(1531);t.GoogleMapsEmbed=e=>{var t=r(e,[]);return(0,l.formatData)(o.default,t)}},5744:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let o=a(n(5825)),l=n(1531);t.YouTubeEmbed=e=>{var t=r(e,[]);return(0,l.formatData)(o.default,t)}},1531:function(e,t){function n(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}):{}}function r(e,t,n,r){let a=r&&Object.keys(r).length>0?new URL(Object.values(r)[0],e):new URL(e);return t&&n&&t.forEach(e=>{n[e]&&a.searchParams.set(e,n[e])}),a.toString()}function a(e,t,n,a,o){var l;if(!t)return`<${e}></${e}>`;let i=(null===(l=t.src)||void 0===l?void 0:l.url)?Object.assign(Object.assign({},t),{src:r(t.src.url,t.src.params,a,o)}):t,u=Object.keys(Object.assign(Object.assign({},i),n)).reduce((e,t)=>{let r=null==n?void 0:n[t],a=i[t],o=null!=r?r:a,l=!0===o?t:`${t}="${o}"`;return o?e+` ${l}`:e},"");return`<${e}${u}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=r,t.createHtml=a,t.formatData=function(e,t){var o,l,i,u,s;let d=n(t,null===(o=e.scripts)||void 0===o?void 0:o.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),c=n(t,null===(i=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===i?void 0:i.params),f=n(t,[null===(s=null===(u=e.html)||void 0===u?void 0:u.attributes.src)||void 0===s?void 0:s.slugParam]),p=n(t,[...Object.keys(d),...Object.keys(c),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,p,c,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:r(e.url,e.params,d)})):null})}},6893:function(e){e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6362:function(e){e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5825:function(e){e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}}]);