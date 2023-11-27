(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{50043:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]},name:"login",theme:"outlined"}},32142:function(e,r,n){"use strict";Object.defineProperty(r,"Z",{enumerable:!0,get:function(){return f}});var l=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(r);if(n&&n.has(e))return n.get(e);var l={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var f=c?Object.getOwnPropertyDescriptor(e,d):null;f&&(f.get||f.set)?Object.defineProperty(l,d,f):l[d]=e[d]}return l.default=e,n&&n.set(e,l),l}(n(2265)),c=_interop_require_default(n(50043)),d=_interop_require_default(n(51718));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:r})(e)}var f=l.forwardRef(function(e,r){var n,f;return l.createElement(d.default,(n=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),l.forEach(function(r){var l;l=n[r],r in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l})}return e}({},e),f=f={ref:r,icon:c.default},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(f)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n.push.apply(n,l)}return n})(Object(f)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(f,e))}),n))})},60626:function(e,r,n){Promise.resolve().then(n.t.bind(n,96964,23)),Promise.resolve().then(n.t.bind(n,34724,23)),Promise.resolve().then(n.bind(n,18019)),Promise.resolve().then(n.bind(n,78843)),Promise.resolve().then(n.bind(n,93421))},78843:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return components_RegisterForm}});var l=n(57437),c=n(79404),d=n(43574),f=n(88110),m=n.n(f),g=n(9273);let callRegisterApi=async e=>{let r="".concat("http","://").concat("localhost");try{let n=await fetch("".concat(r,":").concat("8000","/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return n}catch(e){throw console.log(e),e}},handleResponse=async(e,r,n,l,c)=>{if(201===e.status){let{username:e}=r;localStorage.setItem("username",e),l("Account created successfully"),n.push("/login")}else try{let r=await e.json(),n=r.message||"Error en el servidor";c(n)}catch(e){c("Error en el servidor")}},useFetchRegister=async(e,r,n,l)=>{let{name:c,username:d,email:f,password:m}=e;try{let e=await callRegisterApi({name:c,username:d,email:f,password:m});handleResponse(e,{username:d},r,n,l)}catch(e){console.log("Error al procesar el registro:",e.message)}};var h=n(24033),b=n(5925);let onFinish=(e,r,n)=>l=>{useFetchRegister(l,e,r,n)};var components_RegisterForm=()=>{let e=(0,h.useRouter)();return(0,l.jsxs)(g.default,{theme:{components:{Button:{colorBgTextHover:"#fff",colorPrimaryHover:"#fff",colorTextDisabled:"rgba(255, 255, 255, 0.5)",colorBgContainerDisabled:"rgba(127, 25, 180, 0.5))",colorPrimaryActive:"#fff"},Modal:{contentBg:"#121212",headerBg:"#121212",titleColor:"#fff"},Form:{labelColor:"#fff",labelRequiredMarkColor:"#7f19b4",colorError:"#a233d1"},Input:{colorBgContainer:"#1e1e1e",colorBorder:"#1e1e1e",colorText:"#fff",colorTextPlaceholder:"rgba(255, 255, 255, 0.4)",activeBorderColor:"#fff",hoverBorderColor:"#fff",colorError:"#fff"},Select:{colorBorder:"#1e1e1e",colorTextPlaceholder:"rgba(255, 255, 255, 0.4)",colorBgContainer:"#1e1e1e",optionSelectedBg:"#1e1e1e",optionSelectedColor:"#fff",colorBgElevated:"#1e1e1e",colorText:"#fff",colorPrimaryHover:"#fff",colorPrimary:"#fff"}}},children:[(0,l.jsxs)(c.Z,{name:"register",initialValues:{remember:!0},onFinish:onFinish(e,e=>b.ZP.success(e),e=>b.ZP.error(e)),layout:"vertical",style:{width:"100%"},children:[(0,l.jsx)(c.Z.Item,{label:"Nombre",name:"name",rules:[{required:!0,message:"Porfavor ingrese su nombre!"}],children:(0,l.jsx)(d.Z,{placeholder:"Ingrese su nombre",autoComplete:"off"})}),(0,l.jsx)(c.Z.Item,{label:"Nombre de usuario",name:"username",rules:[{required:!0,message:"Porfavor ingrese su nombre de usuario!"}],children:(0,l.jsx)(d.Z,{placeholder:"Ingrese su nombre de usuario",autoComplete:"off"})}),(0,l.jsx)(c.Z.Item,{label:"Correo electronico",name:"email",autoComplete:"off",rules:[{required:!0,message:"Porfavor ingrese su email!"}],children:(0,l.jsx)(d.Z,{placeholder:"Ingrese su correo",autoComplete:"off"})}),(0,l.jsx)(c.Z.Item,{label:"Contrase\xf1a",name:"password",rules:[{required:!0,message:"Porfavor ingrese su contrase\xf1a!"}],children:(0,l.jsx)(d.Z.Password,{type:"password",placeholder:"Ingrese su contrase\xf1a",autoComplete:"off"})}),(0,l.jsx)(c.Z.Item,{children:(0,l.jsx)(m(),{type:"default",htmlType:"submit",style:{backgroundColor:"#7f19b4",color:"#fff",borderColor:"#7f19b4",width:"100%",marginTop:"10px"},className:"hover:bg-purple-600",children:"Registrarse"})})]}),(0,l.jsx)(b.x7,{})]})}},93421:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return components_Navbar}});var l=n(57437),c=n(2265),d=n(16691),f=n.n(d),m={src:"/_next/static/media/ICONO.218f4b61.png",height:377,width:519,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAyUlEQVR42mMAgX3ZDHK31uYEMEBByxoGFiDFAcTcDFdvvVR6cWbV5Zd78k8c37RyeWXtUtOO3IVbqxTXvCyWWnqe4ePX1zpXzj76HMmwNW72pLXxLVlzV7WlLL3QrLf9f2/6us8MUKB0eNOlU6cPXltQnzV9c0fW0hetpjv+Type95NhRt1m58PbLq05sfvarv1rLq9M0G3r7i1b+r9SbO27lphlLxk6SuZy7V51pm7t1KOzbt+/JtDbPUl8/pylBrIMwVIMDKFiAO6FXo4KV4ChAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},g=n(32142),h=n(61396),b=n.n(h);let Clock=()=>{let[e,r]=(0,c.useState)(""),getCurrentDate=()=>{let e=new Date,r=e.toDateString(),n=e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0");return"".concat(n," - ").concat(r)};return(0,c.useEffect)(()=>{let e=setInterval(()=>{r(getCurrentDate())},1e3);return()=>clearInterval(e)},[]),(0,l.jsx)("span",{className:"text-gray-400 text-sm tablet:text-xs",children:e})};var components_Navbar=e=>{let{username:r}=e;return(0,l.jsxs)("div",{className:"flex flex-row items-center justify-between py-4 top-0 w-full px-8",children:[(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)(f(),{src:m,width:60,height:60,alt:"logo"}),(0,l.jsxs)("div",{className:"flex flex-row phone:hidden",children:[(0,l.jsx)("span",{className:"text-purple font-bold text-lg tablet:text-base",children:"Shared"}),(0,l.jsx)("span",{className:"font-bold text-lg tablet:text-base",children:"View"})]})]}),(0,l.jsx)("div",{className:"flex flex-row items-center gap-4",children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"phone:hidden",children:(0,l.jsx)(Clock,{})}),(0,l.jsx)("span",{className:"text-white font-bold tablet:text-sm",children:r}),(0,l.jsx)(b(),{href:"/logout",children:(0,l.jsx)(g.Z,{style:{fontSize:"20px",marginTop:"5px"}})})]}):(0,l.jsx)("div",{className:"phone:flex",children:(0,l.jsx)(Clock,{})})})]})}},18019:function(e,r,n){"use strict";n.r(r),r.default={src:"/_next/static/media/Sign up-amico.08ae5683.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42mNAAqxfv39WBzHWrt0hfvnOG1UGBl8Wht//f4nfv/E0vXvq5AkXL14rWTPz4PKF8zctPTt/16JJzg22DDcPPy+/vOfR8e6KZW2rZu57PnXKkv/dzfNu1Pn03e8uyZ7MkMqwWGJK46rd86dv+D9l1tz/Rc01/8uTZt61cIxcFentXsAAApMnLjhVUtv4v66j5/fU7hX/J/YvvK5sZdTJIKkVzzDL80DLxNplfxpb+/731y75uWHJvlUXLl6KKauqs2aQ1jJkmJm9bWtH0YL/8+avOH3h/NU53358Xf7mzRv/////szCAQQcDN4M4g9yZs5eFvn35Uf/u7XsTmL+XLF3GBABXk4Mr4YH13QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},61396:function(e,r,n){e.exports=n(34724)},24033:function(e,r,n){e.exports=n(20290)},5925:function(e,r,n){"use strict";let l,c;n.d(r,{x7:function(){return Ie},ZP:function(){return eo}});var d,f=n(2265);let m={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||m,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,b=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let f=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+f+";":l+="f"==d[1]?o(f,d):d+"{"+o(f,"k"==d[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=f&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,f):d+":"+f+";")}return n+(r&&c?r+"{"+c+"}":c)+l},y={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let f=s(e),m=y[f]||(y[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!y[m]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(b," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(b," ").trim();return l[0]})(e);y[m]=o(c?{["@keyframes "+m]:r}:r,n?"":"."+m)}let x=n&&y.g?y.g:null;return n&&(y.g=y[m]),d=y[m],x?r.data=r.data.replace(x,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),m},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let x,w,A,_=u.bind({k:1});function j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let f=Object.assign({},c),m=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(m),f.className=u.apply(n,l)+(m?" "+m:""),r&&(f.ref=d);let g=e;return e[0]&&(g=f.as||e,delete f.as),A&&g[0]&&A(f),x(g,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,O=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},P=new Map,$=e=>{if(P.has(e))return;let r=setTimeout(()=>{P.delete(e),dist_u({type:4,toastId:e})},1e3);P.set(e,r)},J=e=>{let r=P.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},C=[],E={toasts:[],pausedAt:void 0},dist_u=e=>{E=v(E,e),C.forEach(e=>{e(E)})},N={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,f.useState)(E);(0,f.useEffect)(()=>(C.push(n),()=>{let e=C.indexOf(n);e>-1&&C.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||N[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||O()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,f.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,f.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),c=(0,f.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=n||{},f=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),m=f.findIndex(r=>r.id===e.id),g=f.filter((e,r)=>r<m&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+c,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},k=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,S=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${S} 1s linear infinite;
`,L=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=j("div")`
  position: absolute;
`,X=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?f.createElement(K,null,r):r:"blank"===n?null:f.createElement(X,null,f.createElement(F,{...l}),"loading"!==n&&f.createElement(H,null,"error"===n?f.createElement(B,{...l}):f.createElement(q,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${_(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=f.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},d=f.createElement(M,{toast:e}),m=f.createElement(Y,{...e.ariaProps},T(e.message,e));return f.createElement(Q,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:d,message:m}):f.createElement(f.Fragment,null,d,m))});d=f.createElement,o.p=void 0,x=d,w=void 0,A=void 0;var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:c})=>{let d=f.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return f.createElement("div",{ref:d,className:r,style:n},c)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},er=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:c,containerStyle:d,containerClassName:m})=>{let{toasts:g,handlers:h}=D(n);return f.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...d},className:m,onMouseEnter:h.startPause,onMouseLeave:h.endPause},g.map(n=>{let d=n.position||r,m=Re(d,h.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return f.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:h.updateHeight,className:n.visible?er:"",style:m},"custom"===n.type?T(n.message,n):c?c(n):f.createElement(et,{toast:n,position:d}))}))},eo=dist_n}},function(e){e.O(0,[964,718,110,724,6,971,864,744],function(){return e(e.s=60626)}),_N_E=e.O()}]);