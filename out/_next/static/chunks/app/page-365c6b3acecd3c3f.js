(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7619:function(e,t,n){Promise.resolve().then(n.bind(n,5751))},6016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:l=null,children:o,dataNtpc:i=""}=e;return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(i)}})},[i]),(0,r.jsxs)(r.Fragment,{children:[o,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=l?"".concat(l,"px"):"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:t}}):null]})}},1845:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let l=n(7437),o=n(2265),i=(r=n(4983))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,l.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(...t):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},8739:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),l=n(4982),o=r(n(6016));t.default=function(e){let{apiKey:t,...n}=e,r={...n,key:t},{html:i}=(0,l.GoogleMapsEmbed)(r);return(0,a.jsx)(o.default,{height:r.height||null,width:r.width||null,html:i,dataNtpc:"GoogleMapsEmbed"})}},7388:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let l=n(7437),o=n(2265),i=(r=n(4983))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:s,dataLayer:u}=e;void 0===a&&(a=n);let c="dataLayer"!==n?"$l=".concat(n):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(n,"');")}}),(0,l.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r?"&gtm_auth=".concat(r):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},946:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=n(8739);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return r(a).default}});var l=n(5416);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return r(l).default}});var o=n(7388);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return o.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return o.sendGTMEvent}});var i=n(1845);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return i.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return i.sendGAEvent}})},5416:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),l=r(n(4983)),o=n(4982),i=r(n(6016)),s={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:n,stylesheets:r}=(0,o.YouTubeEmbed)(e);return(0,a.jsx)(i.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==n?void 0:n.map(e=>(0,a.jsx)(l.default,{src:e.url,strategy:s[e.strategy],stylesheets:r},e.url))})}},4983:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(5935),a=n.n(r),l={};for(var o in r)"default"!==o&&(l[o]=(function(e){return r[e]}).bind(0,o));n.d(t,l)},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?a[l]=!!n[e]:a.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:o}=n;return o?a.innerHTML=o.__html||"":l&&(a.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),a}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(l(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return b},default:function(){return v}});let r=n(6921),a=n(1884),l=n(7437),o=r._(n(4887)),i=a._(n(2265)),s=n(7484),u=n(3313),c=n(2185),d=new Map,f=new Set,m=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},g=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:o="",strategy:i="afterInteractive",onError:s,stylesheets:c}=e,g=n||t;if(g&&f.has(g))return;if(d.has(t)){f.add(g),d.get(t).then(r,s);return}let h=()=>{a&&a(),f.add(g)},b=document.createElement("script"),y=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(l?(b.innerHTML=l.__html||"",h()):o?(b.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",h()):t&&(b.src=t,d.set(t,y)),Object.entries(e))){if(void 0===r||m.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();b.setAttribute(e,r)}"worker"===i&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",i),c&&p(c),document.body.appendChild(b)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))}):g(e)}function b(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:m,...p}=e,{updateScripts:h,scripts:b,getIsSsr:y,appDir:v,nonce:x}=(0,i.useContext)(s.HeadManagerContext),j=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;j.current||(a&&e&&f.has(e)&&a(),j.current=!0)},[a,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===u?g(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(h?(b[u]=(b[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...p}]),h(b)):y&&y()?f.add(t||n):y&&!y()&&g(e)),v){if(m&&m.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),(0,l.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return i},default:function(){return s}});let r=n(6921),a=n(8630),l=n(1749),o=r._(n(536)),i=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=l.Image},4982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var r=n(6328);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}});var a=n(4456);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var l=n(5744);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return l.YouTubeEmbed}})},6328:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let l=a(n(6893)),o=n(1531);t.GoogleAnalytics=e=>{var t=r(e,[]);return(0,o.formatData)(l.default,t)}},4456:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let l=a(n(6362)),o=n(1531);t.GoogleMapsEmbed=e=>{var t=r(e,[]);return(0,o.formatData)(l.default,t)}},5744:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let l=a(n(5825)),o=n(1531);t.YouTubeEmbed=e=>{var t=r(e,[]);return(0,o.formatData)(l.default,t)}},1531:function(e,t){"use strict";function n(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}):{}}function r(e,t,n,r){let a=r&&Object.keys(r).length>0?new URL(Object.values(r)[0],e):new URL(e);return t&&n&&t.forEach(e=>{n[e]&&a.searchParams.set(e,n[e])}),a.toString()}function a(e,t,n,a,l){var o;if(!t)return`<${e}></${e}>`;let i=(null===(o=t.src)||void 0===o?void 0:o.url)?Object.assign(Object.assign({},t),{src:r(t.src.url,t.src.params,a,l)}):t,s=Object.keys(Object.assign(Object.assign({},i),n)).reduce((e,t)=>{let r=null==n?void 0:n[t],a=i[t],l=null!=r?r:a,o=!0===l?t:`${t}="${l}"`;return l?e+` ${o}`:e},"");return`<${e}${s}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=r,t.createHtml=a,t.formatData=function(e,t){var l,o,i,s,u;let c=n(t,null===(l=e.scripts)||void 0===l?void 0:l.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=n(t,null===(i=null===(o=e.html)||void 0===o?void 0:o.attributes.src)||void 0===i?void 0:i.params),f=n(t,[null===(u=null===(s=e.html)||void 0===s?void 0:s.attributes.src)||void 0===u?void 0:u.slugParam]),m=n(t,[...Object.keys(c),...Object.keys(d),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,m,d,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:r(e.url,e.params,c)})):null})}},5751:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7437);n(2265);var a=()=>(0,r.jsx)("div",{style:{fontSize:"24px",color:"#1a1b1f",paddingTop:"80px",paddingBottom:"80px"},children:(0,r.jsxs)("ul",{className:"gap-y-30",style:{textDecoration:"none"},children:[(0,r.jsx)("li",{style:{marginBottom:"35px"},children:"Національно-патріотичне виховання"}),(0,r.jsx)("li",{style:{marginBottom:"35px"},children:"Волонтерська діяльність"}),(0,r.jsx)("li",{style:{marginBottom:"35px"},children:"Позакласні заходи"}),(0,r.jsx)("li",{style:{marginBottom:"35px"},children:"Літній англомовний табір"}),(0,r.jsx)("li",{style:{marginBottom:"35px"},children:"Футбольна команда"})]})}),l=()=>(0,r.jsx)("section",{className:"max-container padding-container flex flex-col justify-center items-center relative",style:{backgroundColor:"#f5f7fa"},children:(0,r.jsx)("div",{className:"flex row",children:(0,r.jsx)(a,{})})}),o=n(7447),i=n.n(o),s=()=>(0,r.jsxs)("section",{className:"max-container padding-container flex flex-col justify-center items-center z-0 top-0 absolute",style:{height:"100vh",backgroundImage:'url("School photo_1.jpg")',backgroundSize:"cover",backgroundPosition:"top",width:"100%"},children:[(0,r.jsx)("h1",{className:"text-white regular-40 text-center justify-center max-w-lg mt-36 xs:text-2xl sm:text-5xl md:text-5xl lg:text-5xl",children:"Нижньоворітський заклад загальної середньої освіти І-ІІІ ступенів"}),(0,r.jsxs)("div",{className:"mt-32",children:[(0,r.jsxs)("div",{className:"flex column",children:[(0,r.jsx)(i(),{src:"/location.png",width:40,height:40,className:"max-h-10",alt:"Місцезнаходження"}),(0,r.jsx)("p",{className:"text-white regular-18 text-center max-w-sm ml-10",children:"89130, вул. Центральна 116, с. Нижні Ворота Мукачівський район Закарпатська область"})]}),(0,r.jsxs)("div",{className:"flex column mt-5",children:[(0,r.jsx)(i(),{src:"/email.png",width:40,height:40,className:"max-h-10",alt:"Місцезнаходження"}),(0,r.jsx)("p",{className:"text-white regular-18 text-center max-w-sm ml-10",children:"nvorotascool@meta.ua"})]})]})]}),u=()=>(0,r.jsx)("section",{className:"max-container padding-container flex flex-col justify-center items-center relative z-0 ",style:{backgroundColor:"#141414",marginTop:"86vh"},children:(0,r.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap justify-center gap-x-32 gap-y-32 mt-16 mb-16 mr-5 ml-5",children:[(0,r.jsxs)("div",{className:"text-center w-full sm:w-1/4",children:[(0,r.jsx)("p",{className:"text-white bold-40 mb-3",children:"185"}),(0,r.jsx)("p",{className:"text-white regular-18",children:"Учнів"})]}),(0,r.jsxs)("div",{className:"text-center w-full sm:w-1/4",children:[(0,r.jsx)("p",{className:"text-white bold-40 mb-3 ",children:"23"}),(0,r.jsx)("p",{className:"text-white regular-18",children:"Педагогів"})]}),(0,r.jsxs)("div",{className:"text-center w-full sm:w-1/4",children:[(0,r.jsx)("p",{className:"text-white bold-40 mb-3",children:"22098904"}),(0,r.jsx)("p",{className:"text-white regular-18",children:"Код ЄДРПОУ"})]}),(0,r.jsxs)("div",{className:"text-center w-full sm:w-1/4",children:[(0,r.jsx)("p",{className:"text-white bold-40 mb-3",children:"1950"}),(0,r.jsx)("p",{className:"text-white regular-18",children:"Рік заснування"})]})]})}),c=n(946),d=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.GoogleAnalytics,{gaId:"G-1GEYSSXF39"}),(0,r.jsx)(s,{}),(0,r.jsx)(u,{}),(0,r.jsx)(l,{})]})},6893:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6362:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5825:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){e.O(0,[224,971,69,744],function(){return e(e.s=7619)}),_N_E=e.O()}]);