import{u as et,H as tt,a as T,I as nt,J as rt,K as ot,L as it,M as st,N as at,O as lt,_ as q,o as re,h as ut,s as ct,T as dt,z as pt,w as ue,e as Pe}from"./DefaultThemeProvider-0fd7a1ea.js";import{r as a,R as X,j as z}from"./app-8d50cb58.js";function ft(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function J(e){const t=a.useRef(e);return et(()=>{t.current=e}),a.useCallback((...n)=>(0,t.current)(...n),[])}function ye(...e){return a.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{ft(n,t)})},e)}let Z=!0,ie=!1,be;const ht={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function mt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&ht[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function gt(e){e.metaKey||e.altKey||e.ctrlKey||(Z=!0)}function oe(){Z=!1}function yt(){this.visibilityState==="hidden"&&ie&&(Z=!0)}function bt(e){e.addEventListener("keydown",gt,!0),e.addEventListener("mousedown",oe,!0),e.addEventListener("pointerdown",oe,!0),e.addEventListener("touchstart",oe,!0),e.addEventListener("visibilitychange",yt,!0)}function vt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Z||mt(t)}function Rt(){const e=a.useCallback(r=>{r!=null&&bt(r.ownerDocument)},[]),t=a.useRef(!1);function n(){return t.current?(ie=!0,window.clearTimeout(be),be=window.setTimeout(()=>{ie=!1},100),t.current=!1,!0):!1}function o(r){return vt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:n,ref:e}}function xt(e,t,n=void 0){const o={};return Object.keys(e).forEach(r=>{o[r]=e[r].reduce((s,i)=>{if(i){const c=t(i);c!==""&&s.push(c),n&&n[i]&&s.push(n[i])}return s},[]).join(" ")}),o}const ve=e=>e,St=()=>{let e=ve;return{configure(t){e=t},generate(t){return e(t)},reset(){e=ve}}},Tt=St(),Ct=Tt,wt={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function _e(e,t,n="Mui"){const o=wt[t];return o?`${n}-${o}`:`${Ct.generate(e)}-${t}`}function Me(e,t,n="Mui"){const o={};return t.forEach(r=>{o[r]=_e(e,r,n)}),o}var Et=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,kt=tt(function(e){return Et.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Pt=kt,_t=function(t){return t!=="theme"},Re=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Pt:_t},xe=function(t,n,o){var r;if(n){var s=n.shouldForwardProp;r=t.__emotion_forwardProp&&s?function(i){return t.__emotion_forwardProp(i)&&s(i)}:s}return typeof r!="function"&&o&&(r=t.__emotion_forwardProp),r},Mt=function(t){var n=t.cache,o=t.serialized,r=t.isStringTag;return st(n,o,r),at(function(){return lt(n,o,r)}),null},Ot=function e(t,n){var o=t.__emotion_real===t,r=o&&t.__emotion_base||t,s,i;n!==void 0&&(s=n.label,i=n.target);var c=xe(t,n,o),l=c||Re(r),d=!l("as");return function(){var h=arguments,b=o&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&b.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)b.push.apply(b,h);else{b.push(h[0][0]);for(var x=h.length,S=1;S<x;S++)b.push(h[S],h[0][S])}var m=nt(function(g,C,k){var P=d&&g.as||r,w="",p=[],y=g;if(g.theme==null){y={};for(var v in g)y[v]=g[v];y.theme=a.useContext(rt)}typeof g.className=="string"?w=ot(C.registered,p,g.className):g.className!=null&&(w=g.className+" ");var E=it(b.concat(p),C.registered,y);w+=C.key+"-"+E.name,i!==void 0&&(w+=" "+i);var F=d&&c===void 0?Re(P):l,_={};for(var f in g)d&&f==="as"||F(f)&&(_[f]=g[f]);return _.className=w,_.ref=k,a.createElement(a.Fragment,null,a.createElement(Mt,{cache:C,serialized:E,isStringTag:typeof P=="string"}),a.createElement(P,_))});return m.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=r,m.__emotion_styles=b,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:function(){return"."+i}}),m.withComponent=function(g,C){return e(g,T({},n,C,{shouldForwardProp:xe(m,C,!0)})).apply(void 0,b)},m}},Ft=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],se=Ot.bind();Ft.forEach(function(e){se[e]=se(e)});/**
 * @mui/styled-engine v5.14.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Vt(e,t){return se(e,t)}const Lt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};function Oe(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Oe(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function B(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=Oe(e))&&(o&&(o+=" "),o+=t);return o}const Nt=["variant"];function Se(e){return e.length===0}function Fe(e){const{variant:t}=e,n=q(e,Nt);let o=t||"";return Object.keys(n).sort().forEach(r=>{r==="color"?o+=Se(o)?e[r]:re(e[r]):o+=`${Se(o)?r:re(r)}${re(e[r].toString())}`}),o}const Dt=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Bt(e){return Object.keys(e).length===0}function $t(e){return typeof e=="string"&&e.charCodeAt(0)>96}const It=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,At=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const o={};return n.forEach(r=>{const s=Fe(r.props);o[s]=r.style}),o},jt=(e,t,n,o)=>{var r;const{ownerState:s={}}=e,i=[],c=n==null||(r=n.components)==null||(r=r[o])==null?void 0:r.variants;return c&&c.forEach(l=>{let d=!0;Object.keys(l.props).forEach(h=>{s[h]!==l.props[h]&&e[h]!==l.props[h]&&(d=!1)}),d&&i.push(t[Fe(l.props)])}),i};function W(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const zt=ut(),Ut=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function K({defaultTheme:e,theme:t,themeId:n}){return Bt(t)?e:t[n]||t}function Ht(e){return e?(t,n)=>n[e]:null}function Kt(e={}){const{themeId:t,defaultTheme:n=zt,rootShouldForwardProp:o=W,slotShouldForwardProp:r=W}=e,s=i=>ct(T({},i,{theme:K(T({},i,{defaultTheme:n,themeId:t}))}));return s.__mui_systemSx=!0,(i,c={})=>{Lt(i,p=>p.filter(y=>!(y!=null&&y.__mui_systemSx)));const{name:l,slot:d,skipVariantsResolver:h,skipSx:b,overridesResolver:x=Ht(Ut(d))}=c,S=q(c,Dt),m=h!==void 0?h:d&&d!=="Root"&&d!=="root"||!1,g=b||!1;let C,k=W;d==="Root"||d==="root"?k=o:d?k=r:$t(i)&&(k=void 0);const P=Vt(i,T({shouldForwardProp:k,label:C},S)),w=(p,...y)=>{const v=y?y.map(f=>typeof f=="function"&&f.__emotion_real!==f?R=>f(T({},R,{theme:K(T({},R,{defaultTheme:n,themeId:t}))})):f):[];let E=p;l&&x&&v.push(f=>{const R=K(T({},f,{defaultTheme:n,themeId:t})),M=It(l,R);if(M){const V={};return Object.entries(M).forEach(([N,L])=>{V[N]=typeof L=="function"?L(T({},f,{theme:R})):L}),x(f,V)}return null}),l&&!m&&v.push(f=>{const R=K(T({},f,{defaultTheme:n,themeId:t}));return jt(f,At(l,R),R,l)}),g||v.push(s);const F=v.length-y.length;if(Array.isArray(p)&&F>0){const f=new Array(F).fill("");E=[...p,...f],E.raw=[...p.raw,...f]}else typeof p=="function"&&p.__emotion_real!==p&&(E=f=>p(T({},f,{theme:K(T({},f,{defaultTheme:n,themeId:t}))})));const _=P(E,...v);return i.muiName&&(_.muiName=i.muiName),_};return P.withConfig&&(w.withConfig=P.withConfig),w}}const Xt=e=>W(e)&&e!=="classes",Cn=W,Wt=Kt({themeId:dt,defaultTheme:pt,rootShouldForwardProp:Xt}),ce=Wt;function ae(e,t){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},ae(e,t)}function qt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ae(e,t)}const Te=X.createContext(null);function Yt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){var n=function(s){return t&&a.isValidElement(s)?t(s):s},o=Object.create(null);return e&&a.Children.map(e,function(r){return r}).forEach(function(r){o[r.key]=n(r)}),o}function Gt(e,t){e=e||{},t=t||{};function n(h){return h in t?t[h]:e[h]}var o=Object.create(null),r=[];for(var s in e)s in t?r.length&&(o[s]=r,r=[]):r.push(s);var i,c={};for(var l in t){if(o[l])for(i=0;i<o[l].length;i++){var d=o[l][i];c[o[l][i]]=n(d)}c[l]=n(l)}for(i=0;i<r.length;i++)c[r[i]]=n(r[i]);return c}function j(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Jt(e,t){return de(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:j(n,"appear",e),enter:j(n,"enter",e),exit:j(n,"exit",e)})})}function Zt(e,t,n){var o=de(e.children),r=Gt(t,o);return Object.keys(r).forEach(function(s){var i=r[s];if(a.isValidElement(i)){var c=s in t,l=s in o,d=t[s],h=a.isValidElement(d)&&!d.props.in;l&&(!c||h)?r[s]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:j(i,"exit",e),enter:j(i,"enter",e)}):!l&&c&&!h?r[s]=a.cloneElement(i,{in:!1}):l&&c&&a.isValidElement(d)&&(r[s]=a.cloneElement(i,{onExited:n.bind(null,i),in:d.props.in,exit:j(i,"exit",e),enter:j(i,"enter",e)}))}}),r}var Qt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},en={component:"div",childFactory:function(t){return t}},pe=function(e){qt(t,e);function t(o,r){var s;s=e.call(this,o,r)||this;var i=s.handleExited.bind(Yt(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,s){var i=s.children,c=s.handleExited,l=s.firstRender;return{children:l?Jt(r,c):Zt(r,i,c),firstRender:!1}},n.handleExited=function(r,s){var i=de(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(c){var l=T({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,s=r.component,i=r.childFactory,c=q(r,["component","childFactory"]),l=this.state.contextValue,d=Qt(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,s===null?X.createElement(Te.Provider,{value:l},d):X.createElement(Te.Provider,{value:l},X.createElement(s,c,d))},t}(X.Component);pe.propTypes={};pe.defaultProps=en;const tn=pe;function nn(e){const{className:t,classes:n,pulsate:o=!1,rippleX:r,rippleY:s,rippleSize:i,in:c,onExited:l,timeout:d}=e,[h,b]=a.useState(!1),x=B(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),S={width:i,height:i,top:-(i/2)+s,left:-(i/2)+r},m=B(n.child,h&&n.childLeaving,o&&n.childPulsate);return!c&&!h&&b(!0),a.useEffect(()=>{if(!c&&l!=null){const g=setTimeout(l,d);return()=>{clearTimeout(g)}}},[l,c,d]),z.jsx("span",{className:x,style:S,children:z.jsx("span",{className:m})})}const rn=Me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),O=rn,on=["center","classes","className"];let Q=e=>e,Ce,we,Ee,ke;const le=550,sn=80,an=ue(Ce||(Ce=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ln=ue(we||(we=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),un=ue(Ee||(Ee=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),cn=ce("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),dn=ce(nn,{name:"MuiTouchRipple",slot:"Ripple"})(ke||(ke=Q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),O.rippleVisible,an,le,({theme:e})=>e.transitions.easing.easeInOut,O.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,O.child,O.childLeaving,ln,le,({theme:e})=>e.transitions.easing.easeInOut,O.childPulsate,un,({theme:e})=>e.transitions.easing.easeInOut),pn=a.forwardRef(function(t,n){const o=Pe({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:i}=o,c=q(o,on),[l,d]=a.useState([]),h=a.useRef(0),b=a.useRef(null);a.useEffect(()=>{b.current&&(b.current(),b.current=null)},[l]);const x=a.useRef(!1),S=a.useRef(0),m=a.useRef(null),g=a.useRef(null);a.useEffect(()=>()=>{S.current&&clearTimeout(S.current)},[]);const C=a.useCallback(p=>{const{pulsate:y,rippleX:v,rippleY:E,rippleSize:F,cb:_}=p;d(f=>[...f,z.jsx(dn,{classes:{ripple:B(s.ripple,O.ripple),rippleVisible:B(s.rippleVisible,O.rippleVisible),ripplePulsate:B(s.ripplePulsate,O.ripplePulsate),child:B(s.child,O.child),childLeaving:B(s.childLeaving,O.childLeaving),childPulsate:B(s.childPulsate,O.childPulsate)},timeout:le,pulsate:y,rippleX:v,rippleY:E,rippleSize:F},h.current)]),h.current+=1,b.current=_},[s]),k=a.useCallback((p={},y={},v=()=>{})=>{const{pulsate:E=!1,center:F=r||y.pulsate,fakeElement:_=!1}=y;if((p==null?void 0:p.type)==="mousedown"&&x.current){x.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(x.current=!0);const f=_?null:g.current,R=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};let M,V,N;if(F||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)M=Math.round(R.width/2),V=Math.round(R.height/2);else{const{clientX:L,clientY:$}=p.touches&&p.touches.length>0?p.touches[0]:p;M=Math.round(L-R.left),V=Math.round($-R.top)}if(F)N=Math.sqrt((2*R.width**2+R.height**2)/3),N%2===0&&(N+=1);else{const L=Math.max(Math.abs((f?f.clientWidth:0)-M),M)*2+2,$=Math.max(Math.abs((f?f.clientHeight:0)-V),V)*2+2;N=Math.sqrt(L**2+$**2)}p!=null&&p.touches?m.current===null&&(m.current=()=>{C({pulsate:E,rippleX:M,rippleY:V,rippleSize:N,cb:v})},S.current=setTimeout(()=>{m.current&&(m.current(),m.current=null)},sn)):C({pulsate:E,rippleX:M,rippleY:V,rippleSize:N,cb:v})},[r,C]),P=a.useCallback(()=>{k({},{pulsate:!0})},[k]),w=a.useCallback((p,y)=>{if(clearTimeout(S.current),(p==null?void 0:p.type)==="touchend"&&m.current){m.current(),m.current=null,S.current=setTimeout(()=>{w(p,y)});return}m.current=null,d(v=>v.length>0?v.slice(1):v),b.current=y},[]);return a.useImperativeHandle(n,()=>({pulsate:P,start:k,stop:w}),[P,k,w]),z.jsx(cn,T({className:B(O.root,s.root,i),ref:g},c,{children:z.jsx(tn,{component:null,exit:!0,children:l})}))}),fn=pn;function hn(e){return _e("MuiButtonBase",e)}const mn=Me("MuiButtonBase",["root","disabled","focusVisible"]),gn=mn,yn=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],bn=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,i=xt({root:["root",t&&"disabled",n&&"focusVisible"]},hn,r);return n&&o&&(i.root+=` ${o}`),i},vn=ce("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${gn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Rn=a.forwardRef(function(t,n){const o=Pe({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:i,className:c,component:l="button",disabled:d=!1,disableRipple:h=!1,disableTouchRipple:b=!1,focusRipple:x=!1,LinkComponent:S="a",onBlur:m,onClick:g,onContextMenu:C,onDragLeave:k,onFocus:P,onFocusVisible:w,onKeyDown:p,onKeyUp:y,onMouseDown:v,onMouseLeave:E,onMouseUp:F,onTouchEnd:_,onTouchMove:f,onTouchStart:R,tabIndex:M=0,TouchRippleProps:V,touchRippleRef:N,type:L}=o,$=q(o,yn),U=a.useRef(null),D=a.useRef(null),Ve=ye(D,N),{isFocusVisibleRef:fe,onFocus:Le,onBlur:Ne,ref:De}=Rt(),[A,Y]=a.useState(!1);d&&A&&Y(!1),a.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),U.current.focus()}}),[]);const[ee,Be]=a.useState(!1);a.useEffect(()=>{Be(!0)},[]);const $e=ee&&!h&&!d;a.useEffect(()=>{A&&x&&!h&&ee&&D.current.pulsate()},[h,x,A,ee]);function I(u,me,Qe=b){return J(ge=>(me&&me(ge),!Qe&&D.current&&D.current[u](ge),!0))}const Ie=I("start",v),Ae=I("stop",C),je=I("stop",k),ze=I("stop",F),Ue=I("stop",u=>{A&&u.preventDefault(),E&&E(u)}),He=I("start",R),Ke=I("stop",_),Xe=I("stop",f),We=I("stop",u=>{Ne(u),fe.current===!1&&Y(!1),m&&m(u)},!1),qe=J(u=>{U.current||(U.current=u.currentTarget),Le(u),fe.current===!0&&(Y(!0),w&&w(u)),P&&P(u)}),te=()=>{const u=U.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},ne=a.useRef(!1),Ye=J(u=>{x&&!ne.current&&A&&D.current&&u.key===" "&&(ne.current=!0,D.current.stop(u,()=>{D.current.start(u)})),u.target===u.currentTarget&&te()&&u.key===" "&&u.preventDefault(),p&&p(u),u.target===u.currentTarget&&te()&&u.key==="Enter"&&!d&&(u.preventDefault(),g&&g(u))}),Ge=J(u=>{x&&u.key===" "&&D.current&&A&&!u.defaultPrevented&&(ne.current=!1,D.current.stop(u,()=>{D.current.pulsate(u)})),y&&y(u),g&&u.target===u.currentTarget&&te()&&u.key===" "&&!u.defaultPrevented&&g(u)});let G=l;G==="button"&&($.href||$.to)&&(G=S);const H={};G==="button"?(H.type=L===void 0?"button":L,H.disabled=d):(!$.href&&!$.to&&(H.role="button"),d&&(H["aria-disabled"]=d));const Je=ye(n,De,U),he=T({},o,{centerRipple:s,component:l,disabled:d,disableRipple:h,disableTouchRipple:b,focusRipple:x,tabIndex:M,focusVisible:A}),Ze=bn(he);return z.jsxs(vn,T({as:G,className:B(Ze.root,c),ownerState:he,onBlur:We,onClick:g,onContextMenu:Ae,onFocus:qe,onKeyDown:Ye,onKeyUp:Ge,onMouseDown:Ie,onMouseLeave:Ue,onMouseUp:ze,onDragLeave:je,onTouchEnd:Ke,onTouchMove:Xe,onTouchStart:He,ref:Je,tabIndex:d?-1:M,type:L},H,$,{children:[i,$e?z.jsx(fn,T({ref:Ve,center:s},V)):null]}))}),wn=Rn;export{wn as B,Ct as C,Te as T,qt as _,Me as a,Vt as b,xt as c,B as d,Kt as e,ft as f,_e as g,J as h,Cn as i,Xt as r,ce as s,ye as u};
