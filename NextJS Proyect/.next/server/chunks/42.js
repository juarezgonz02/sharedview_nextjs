"use strict";exports.id=42,exports.ids=[42],exports.modules={58141:(e,t,i)=>{let{createProxy:r}=i(17536);e.exports=r("D:\\Nueva carpeta\\sharedview_nextjs\\NextJS Proyect\\node_modules\\next\\dist\\client\\image-component.js")},91078:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),i(46179);let r=i(53986),n=i(70145);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var i;let o,s,a,{src:l,sizes:u,unoptimized:d=!1,priority:c=!1,loading:g,className:f,quality:m,width:p,height:h,fill:b=!1,style:v,onLoad:w,onLoadingComplete:y,placeholder:S="empty",blurDataURL:_,fetchPriority:x,layout:j,objectFit:I,objectPosition:P,lazyBoundary:O,lazyRoot:C,...z}=e,{imgConf:E,showAltText:M,blurComplete:R,defaultLoader:D}=t,k=E||n.imageConfigDefault;if("allSizes"in k)o=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);o={...k,allSizes:e,deviceSizes:t}}let L=z.loader||D;delete z.loader,delete z.srcSet;let N="__next_img_default"in L;if(N){if("custom"===o.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:i,...r}=t;return e(r)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!u&&(u=t)}let A="",B=getInt(p),G=getInt(h);if("object"==typeof(i=l)&&(isStaticRequire(i)||void 0!==i.src)){let e=isStaticRequire(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,a=e.blurHeight,_=_||e.blurDataURL,A=e.src,!b){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let F=!c&&("lazy"===g||void 0===g);(!(l="string"==typeof l?l:A)||l.startsWith("data:")||l.startsWith("blob:"))&&(d=!0,F=!1),o.unoptimized&&(d=!0),N&&l.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),c&&(x="high");let W=getInt(m),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:P}:{},M?{}:{color:"transparent"},v),U=R||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:s,blurHeight:a,blurDataURL:_||"",objectFit:q.objectFit})+'")':'url("'+S+'")',V=U?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},J=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:l.map((e,r)=>a({config:t,src:i,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:a({config:t,src:i,quality:o,width:l[d]})}}({config:o,src:l,unoptimized:d,width:B,quality:W,sizes:u,loader:L}),T={...z,loading:F?"lazy":g,fetchPriority:x,width:B,height:G,decoding:"async",className:f,style:{...q,...V},sizes:J.sizes,srcSet:J.srcSet,src:J.src},Y={unoptimized:d,priority:c,placeholder:S,fill:b};return{props:T,meta:Y}}},53986:(e,t)=>{function getImageBlurSvg(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=r?40*r:t,l=n?40*n:i,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},70145:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return r}});let i=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},2155:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},unstable_getImgProps:function(){return unstable_getImgProps}});let r=i(71974),n=i(91078),o=i(46179),s=i(58141),a=r._(i(4318)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},l=s.Image},4318:(e,t)=>{function defaultLoader(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),defaultLoader.__next_img_default=!0;let i=defaultLoader},46179:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},75042:(e,t,i)=>{e.exports=i(2155)}};