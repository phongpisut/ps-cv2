(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const cd="modulepreload",hd=function(n,e){return new URL(n,e).href},hc={},Js=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(t.map(c=>{if(c=hd(c,i),c in hc)return;hc[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const g=a[m];if(g.href===c&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const A=document.createElement("link");if(A.rel=h?"stylesheet":cd,h||(A.as="script"),A.crossOrigin="",A.href=c,l&&A.setAttribute("nonce",l),document.head.appendChild(A),h)return new Promise((m,g)=>{A.addEventListener("load",m),A.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="186",ud=0,uc=1,fd=2,Wr=1,dd=2,zr=3,Ri=0,Jt=1,kn=2,Wn=0,Yr=1,fc=2,dc=3,Ac=4,Ad=5,ir=100,pd=101,md=102,gd=103,xd=104,_d=200,Ed=201,Md=202,vd=203,xu=204,_u=205,Sd=206,wd=207,Cd=208,yd=209,bd=210,Td=211,Bd=212,Rd=213,Id=214,_o=0,Eo=1,Mo=2,Jr=3,vo=4,So=5,wo=6,Co=7,vl=0,Dd=1,Pd=2,Rn=0,Eu=1,Mu=2,vu=3,Su=4,wu=5,Cu=6,yu=7,bu=300,Ii=301,xr=302,wa=303,Ca=304,ga=306,$s=1e3,zn=1001,yo=1002,It=1003,Ld=1004,ds=1005,kt=1006,ya=1007,yi=1008,nn=1009,Tu=1010,Bu=1011,$r=1012,Sl=1013,Dn=1014,mn=1015,Pn=1016,wl=1017,Cl=1018,Zr=1020,Ru=35902,Iu=35899,Du=1021,Pu=1022,gn=1023,Kn=1026,bi=1027,yl=1028,bl=1029,Di=1030,Tl=1031,Bl=1033,Hs=33776,zs=33777,Vs=33778,Ws=33779,bo=35840,To=35841,Bo=35842,Ro=35843,Io=36196,Do=37492,Po=37496,Lo=37488,Fo=37489,Zs=37490,Uo=37491,No=37808,Go=37809,Oo=37810,Qo=37811,ko=37812,Ho=37813,zo=37814,Vo=37815,Wo=37816,Yo=37817,Xo=37818,Ko=37819,qo=37820,Jo=37821,$o=36492,Zo=36494,jo=36495,el=36283,tl=36284,js=36285,nl=36286,Fd=3200,ea=0,Ud=1,li="",jt="srgb",ta="srgb-linear",na="linear",ht="srgb",ba=7680,Nd=519,Gd=512,Od=513,Qd=514,Rl=515,kd=516,Hd=517,Il=518,zd=519,Vd=35044,pc="300 es",bn=2e3,jr=2001;function Wd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yd(){const n=ia("canvas");return n.style.display="block",n}const mc={};function gc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Lu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Lu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Lu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hr(...n){const e=n.join(" ");e in mc||(mc[e]=!0,Ne(...n))}function Xd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Kd={[_o]:Eo,[Mo]:wo,[vo]:Co,[Jr]:So,[Eo]:_o,[wo]:Mo,[Co]:vo,[So]:Jr};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const Xr=Math.PI/180,es=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function qd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Jd(n,e,t){return n!==e?(t-n)/(e-n):0}function Kr(n,e,t){return(1-t)*n+t*e}function $d(n,e,t,i){return Kr(n,e,1-Math.exp(-t*i))}function Zd(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function jd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function eA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nA(n,e){return n+Math.random()*(e-n)}function iA(n){return n*(.5-Math.random())}function rA(n){n!==void 0&&(xc=n);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sA(n){return n*Xr}function aA(n){return n*es}function oA(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function lA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hA(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),A=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*A,o*c);break;case"YXY":n.set(l*A,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*A,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const uA={DEG2RAD:Xr,RAD2DEG:es,generateUUID:Mr,clamp:Je,euclideanModulo:Dl,mapLinear:qd,inverseLerp:Jd,lerp:Kr,damp:$d,pingpong:Zd,smoothstep:jd,smootherstep:eA,randInt:tA,randFloat:nA,randFloatSpread:iA,seededRandom:rA,degToRad:sA,radToDeg:aA,isPowerOfTwo:oA,ceilPowerOfTwo:lA,floorPowerOfTwo:cA,setQuaternionFromProperEuler:hA,normalize:Vt,denormalize:rr};class ze{static{ze.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],A=s[a+1],m=s[a+2],g=s[a+3];if(f!==g||l!==u||c!==A||h!==m){let p=l*u+c*A+h*m+f*g;p<0&&(u=-u,A=-A,m=-m,g=-g,p=-p);let d=1-o;if(p<.9995){const S=Math.acos(p),y=Math.sin(S);d=Math.sin(d*S)/y,o=Math.sin(o*S)/y,l=l*d+u*o,c=c*d+A*o,h=h*d+m*o,f=f*d+g*o}else{l=l*d+u*o,c=c*d+A*o,h=h*d+m*o,f=f*d+g*o;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],A=s[a+2],m=s[a+3];return e[t]=o*m+h*f+l*A-c*u,e[t+1]=l*m+h*u+c*f-o*A,e[t+2]=c*m+h*A+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),A=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*A*m,this._y=c*A*f-u*h*m,this._z=c*h*m+u*A*f,this._w=c*h*f-u*A*m;break;case"YXZ":this._x=u*h*f+c*A*m,this._y=c*A*f-u*h*m,this._z=c*h*m-u*A*f,this._w=c*h*f+u*A*m;break;case"ZXY":this._x=u*h*f-c*A*m,this._y=c*A*f+u*h*m,this._z=c*h*m+u*A*f,this._w=c*h*f-u*A*m;break;case"ZYX":this._x=u*h*f-c*A*m,this._y=c*A*f+u*h*m,this._z=c*h*m-u*A*f,this._w=c*h*f+u*A*m;break;case"YZX":this._x=u*h*f+c*A*m,this._y=c*A*f+u*h*m,this._z=c*h*m-u*A*f,this._w=c*h*f-u*A*m;break;case"XZY":this._x=u*h*f-c*A*m,this._y=c*A*f-u*h*m,this._z=c*h*m+u*A*f,this._w=c*h*f+u*A*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){const A=.5/Math.sqrt(u+1);this._w=.25/A,this._x=(h-l)*A,this._y=(s-c)*A,this._z=(a-r)*A}else if(i>o&&i>f){const A=2*Math.sqrt(1+i-o-f);this._w=(h-l)/A,this._x=.25*A,this._y=(r+a)/A,this._z=(s+c)/A}else if(o>f){const A=2*Math.sqrt(1+o-i-f);this._w=(s-c)/A,this._x=(r+a)/A,this._y=.25*A,this._z=(l+h)/A}else{const A=2*Math.sqrt(1+f-i-o);this._w=(a-r)/A,this._x=(s+c)/A,this._y=(l+h)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{O.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new O,_c=new Li;class Qe{static{Qe.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],A=i[5],m=i[8],g=r[0],p=r[3],d=r[6],S=r[1],y=r[4],E=r[7],w=r[2],M=r[5],b=r[8];return s[0]=a*g+o*S+l*w,s[3]=a*p+o*y+l*M,s[6]=a*d+o*E+l*b,s[1]=c*g+h*S+f*w,s[4]=c*p+h*y+f*M,s[7]=c*d+h*E+f*b,s[2]=u*g+A*S+m*w,s[5]=u*p+A*y+m*M,s[8]=u*d+A*E+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,A=c*s-a*l,m=t*f+i*u+r*A;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=u*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=A*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Qe,Ec=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fA(){const n={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?na:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ta]:{primaries:e,whitePoint:i,transfer:na,toXYZ:Ec,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Ec,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const je=fA();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class dA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ki===void 0&&(ki=ia("canvas")),ki.width=e.width,ki.height=e.height;const r=ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AA=0;class Pl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ra(r[a].image)):s.push(Ra(r[a]))}else s=Ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let pA=0;const Ia=new O;class Ht extends Pi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=zn,r=zn,s=kt,a=yi,o=gn,l=nn,c=Ht.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=Mr(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ia).x}get height(){return this.source.getSize(Ia).y}get depth(){return this.source.getSize(Ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=bu;Ht.DEFAULT_ANISOTROPY=1;class xt{static{xt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],A=l[5],m=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+A+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(A+1)/2,w=(d+1)/2,M=(h+u)/4,b=(f+g)/4,_=(m+p)/4;return y>E&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=M/i,s=b/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=M/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=_/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-m)*(p-m)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(f-g)/S,this.z=(u-h)/S,this.w=Math.acos((c+A+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mA extends Pi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ht(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends mA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fu extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gA extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ft{static{ft.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,h,f,u,A,m,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,u,A,m,g,p)}set(e,t,i,r,s,a,o,l,c,h,f,u,A,m,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=A,d[7]=m,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),a=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,A=a*f,m=o*h,g=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=A+m*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=m+A*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,A=l*f,m=c*h,g=c*f;t[0]=u+g*o,t[4]=m*o-A,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=A*o-m,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,A=l*f,m=c*h,g=c*f;t[0]=u-g*o,t[4]=-a*f,t[8]=m+A*o,t[1]=A+m*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,A=a*f,m=o*h,g=o*f;t[0]=l*h,t[4]=m*c-A,t[8]=u*c+g,t[1]=l*f,t[5]=g*c+u,t[9]=A*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,A=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=g-u*f,t[8]=m*f+A,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=A*f+m,t[10]=u-g*f}else if(e.order==="XZY"){const u=a*l,A=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+g,t[5]=a*h,t[9]=A*f-m,t[2]=m*f-A,t[6]=o*h,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xA,e,_A)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ei.crossVectors(i,$t),ei.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ei.crossVectors(i,$t)),ei.normalize(),As.crossVectors($t,ei),r[0]=ei.x,r[4]=As.x,r[8]=$t.x,r[1]=ei.y,r[5]=As.y,r[9]=$t.y,r[2]=ei.z,r[6]=As.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],A=i[13],m=i[2],g=i[6],p=i[10],d=i[14],S=i[3],y=i[7],E=i[11],w=i[15],M=r[0],b=r[4],_=r[8],C=r[12],B=r[1],F=r[5],U=r[9],Q=r[13],I=r[2],G=r[6],J=r[10],Y=r[14],te=r[3],k=r[7],$=r[11],ne=r[15];return s[0]=a*M+o*B+l*I+c*te,s[4]=a*b+o*F+l*G+c*k,s[8]=a*_+o*U+l*J+c*$,s[12]=a*C+o*Q+l*Y+c*ne,s[1]=h*M+f*B+u*I+A*te,s[5]=h*b+f*F+u*G+A*k,s[9]=h*_+f*U+u*J+A*$,s[13]=h*C+f*Q+u*Y+A*ne,s[2]=m*M+g*B+p*I+d*te,s[6]=m*b+g*F+p*G+d*k,s[10]=m*_+g*U+p*J+d*$,s[14]=m*C+g*Q+p*Y+d*ne,s[3]=S*M+y*B+E*I+w*te,s[7]=S*b+y*F+E*G+w*k,s[11]=S*_+y*U+E*J+w*$,s[15]=S*C+y*Q+E*Y+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],A=e[14],m=e[3],g=e[7],p=e[11],d=e[15],S=l*A-c*u,y=o*A-c*f,E=o*u-l*f,w=a*A-c*h,M=a*u-l*h,b=a*f-o*h;return t*(g*S-p*y+d*E)-i*(m*S-p*w+d*M)+r*(m*y-g*w+d*b)-s*(m*E-g*M+p*b)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],A=e[11],m=e[12],g=e[13],p=e[14],d=e[15],S=t*o-i*a,y=t*l-r*a,E=t*c-s*a,w=i*l-r*o,M=i*c-s*o,b=r*c-s*l,_=h*g-f*m,C=h*p-u*m,B=h*d-A*m,F=f*p-u*g,U=f*d-A*g,Q=u*d-A*p,I=S*Q-y*U+E*F+w*B-M*C+b*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*Q-l*U+c*F)*G,e[1]=(r*U-i*Q-s*F)*G,e[2]=(g*b-p*M+d*w)*G,e[3]=(u*M-f*b-A*w)*G,e[4]=(l*B-a*Q-c*C)*G,e[5]=(t*Q-r*B+s*C)*G,e[6]=(p*E-m*b-d*y)*G,e[7]=(h*b-u*E+A*y)*G,e[8]=(a*U-o*B+c*_)*G,e[9]=(i*B-t*U-s*_)*G,e[10]=(m*M-g*E+d*S)*G,e[11]=(f*E-h*M-A*S)*G,e[12]=(o*C-a*F-l*_)*G,e[13]=(t*F-i*C+r*_)*G,e[14]=(g*y-m*w-p*S)*G,e[15]=(h*w-f*y+u*S)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,A=s*h,m=s*f,g=a*h,p=a*f,d=o*f,S=l*c,y=l*h,E=l*f,w=i.x,M=i.y,b=i.z;return r[0]=(1-(g+d))*w,r[1]=(A+E)*w,r[2]=(m-y)*w,r[3]=0,r[4]=(A-E)*M,r[5]=(1-(u+d))*M,r[6]=(p+S)*M,r[7]=0,r[8]=(m+y)*b,r[9]=(p-S)*b,r[10]=(1-(u+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),l=Hi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),fn.copy(this);const c=1/a,h=1/o,f=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=bn,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),A=(i+r)/(i-r);let m,g;if(l)m=s/(a-s),g=a*s/(a-s);else if(o===bn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===jr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=A,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bn,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),A=-(i+r)/(i-r);let m,g;if(l)m=1/(a-s),g=a/(a-s);else if(o===bn)m=-2/(a-s),g=-(a+s)/(a-s);else if(o===jr)m=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=A,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hi=new O,fn=new ft,xA=new O(0,0,0),_A=new O(1,1,1),ei=new O,As=new O,$t=new O,vc=new ft,Sc=new Li;class qn{constructor(e=0,t=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],A=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,A),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,A),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,A),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EA=0;const wc=new O,zi=new Li,Fn=new ft,ps=new O,Tr=new O,MA=new O,vA=new Li,Cc=new O(1,0,0),yc=new O(0,1,0),bc=new O(0,0,1),Tc={type:"added"},SA={type:"removed"},Vi={type:"childadded",child:null},Da={type:"childremoved",child:null};class Dt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new O,t=new qn,i=new Li,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ps.copy(e):ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Tr,ps,this.up):Fn.lookAt(ps,Tr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SA),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,MA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,vA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),A=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),A.length>0&&(i.animations=A),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new O(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wA={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),A=.02,m=.005;c.inputState.pinching&&u>A+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=A-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ms={h:0,s:0,l:0};function La(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Dl(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=La(a,s,e+1/3),this.g=La(a,s,e),this.b=La(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=Uu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return je.workingToColorSpace(Gt.copy(this),e),Math.round(Je(Gt.r*255,0,255))*65536+Math.round(Je(Gt.g*255,0,255))*256+Math.round(Je(Gt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=jt){je.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ms);const i=Kr(ti.h,ms.h,t),r=Kr(ti.s,ms.s,t),s=Kr(ti.l,ms.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new $e;$e.NAMES=Uu;class CA extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new O,Un=new O,Fa=new O,Nn=new O,Wi=new O,Yi=new O,Bc=new O,Ua=new O,Na=new O,Ga=new O,Oa=new xt,Qa=new xt,ka=new xt;class pn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),Un.subVectors(i,t),Fa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Un),l=dn.dot(Fa),c=Un.dot(Un),h=Un.dot(Fa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,A=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-A-m,m,A)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Oa.setScalar(0),Qa.setScalar(0),ka.setScalar(0),Oa.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),ka.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Oa,s.x),a.addScaledVector(Qa,s.y),a.addScaledVector(ka,s.z),a}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),Un.subVectors(e,t),dn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Wi.subVectors(r,i),Yi.subVectors(s,i),Ua.subVectors(e,i);const l=Wi.dot(Ua),c=Yi.dot(Ua);if(l<=0&&c<=0)return t.copy(i);Na.subVectors(e,r);const h=Wi.dot(Na),f=Yi.dot(Na);if(h>=0&&f<=h)return t.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Wi,a);Ga.subVectors(e,s);const A=Wi.dot(Ga),m=Yi.dot(Ga);if(m>=0&&A<=m)return t.copy(s);const g=A*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Yi,o);const p=h*m-A*f;if(p<=0&&f-h>=0&&A-m>=0)return Bc.subVectors(s,r),o=(f-h)/(f-h+(A-m)),t.copy(r).addScaledVector(Bc,o);const d=1/(p+g+u);return a=g*d,o=u*d,t.copy(i).addScaledVector(Wi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),xs.subVectors(this.max,Br),Xi.subVectors(e.a,Br),Ki.subVectors(e.b,Br),qi.subVectors(e.c,Br),ni.subVectors(Ki,Xi),ii.subVectors(qi,Ki),gi.subVectors(Xi,qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-gi.z,gi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,gi.z,0,-gi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-gi.y,gi.x,0];return!Ha(t,Xi,Ki,qi,xs)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Xi,Ki,qi,xs))?!1:(_s.crossVectors(ni,ii),t=[_s.x,_s.y,_s.z],Ha(t,Xi,Ki,qi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new O,new O,new O,new O,new O,new O,new O,new O],An=new O,gs=new Fi,Xi=new O,Ki=new O,qi=new O,ni=new O,ii=new O,gi=new O,Br=new O,xs=new O,_s=new O,xi=new O;function Ha(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){xi.fromArray(n,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vt=new O,Es=new ze;let yA=0;class In extends Pi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nu extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gu extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}const bA=new Fi,Rr=new O,za=new O;class as{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(za)),this.expandByPoint(Rr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let TA=0;const on=new ft,Va=new Dt,Ji=new O,Zt=new Fi,Ir=new Fi,bt=new O;class Xt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Gu:Nu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Zt.min,Ir.min),Zt.expandByPoint(bt),bt.addVectors(Zt.max,Ir.max),Zt.expandByPoint(bt)):(Zt.expandByPoint(Ir.min),Zt.expandByPoint(Ir.max))}Zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(e,c),bt.add(Ji)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new O,l[_]=new O;const c=new O,h=new O,f=new O,u=new ze,A=new ze,m=new ze,g=new O,p=new O;function d(_,C,B){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,B),u.fromBufferAttribute(s,_),A.fromBufferAttribute(s,C),m.fromBufferAttribute(s,B),h.sub(c),f.sub(c),A.sub(u),m.sub(u);const F=1/(A.x*m.y-m.x*A.y);isFinite(F)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(f,-A.y).multiplyScalar(F),p.copy(f).multiplyScalar(A.x).addScaledVector(h,-m.x).multiplyScalar(F),o[_].add(g),o[C].add(g),o[B].add(g),l[_].add(p),l[C].add(p),l[B].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,C=S.length;_<C;++_){const B=S[_],F=B.start,U=B.count;for(let Q=F,I=F+U;Q<I;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const y=new O,E=new O,w=new O,M=new O;function b(_){w.fromBufferAttribute(r,_),M.copy(w);const C=o[_];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(M,C);const F=E.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,F)}for(let _=0,C=S.length;_<C;++_){const B=S[_],F=B.start,U=B.count;for(let Q=F,I=F+U;Q<I;Q+=3)b(e.getX(Q+0)),b(e.getX(Q+1)),b(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,A=i.count;u<A;u++)i.setXYZ(u,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let u=0,A=e.count;u<A;u+=3){const m=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,A=t.count;u<A;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let A=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?A=l[g]*o.data.stride+o.offset:A=l[g]*h;for(let d=0;d<h;d++)u[m++]=c[A++]}return new In(u,h,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],A=e(u,i);l.push(A)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const A=c[f];h.push(A.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,A=f.length;u<A;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new O,BA=new O,RA=new Qe;class oi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wa.subVectors(i,t).cross(BA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Wa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RA.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let IA=0;class vr extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Yr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=_u,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const On=new O,Ya=new O,Ms=new O,vs=new O;class Ou{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ya.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(Ya);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=vs.dot(this.direction),l=-vs.dot(Ms),c=vs.lengthSq(),h=Math.abs(1-a*a);let f,u,A,m;if(h>0)if(f=a*l-o,u=a*o-l,m=s*h,f>=0)if(u>=-m)if(u<=m){const g=1/h;f*=g,u*=g,A=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),A=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),A=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),A=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),A=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),A=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),A=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ya).addScaledVector(Ms,u),A}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,A=e.z-a.z,m=t.x-a.x,g=t.y-a.y,p=t.z-a.z,d=i.x-a.x,S=i.y-a.y,y=i.z-a.z,E=Math.abs(l),w=Math.abs(c),M=Math.abs(h);let b,_,C,B,F,U,Q,I,G,J,Y,te;if(E>=w&&E>=M?(C=l,U=f,G=m,te=d,l>=0?(b=c,_=h,B=u,F=A,Q=g,I=p,J=S,Y=y):(b=h,_=c,B=A,F=u,Q=p,I=g,J=y,Y=S)):w>=M?(C=c,U=u,G=g,te=S,c>=0?(b=h,_=l,B=A,F=f,Q=p,I=m,J=y,Y=d):(b=l,_=h,B=f,F=A,Q=m,I=p,J=d,Y=y)):(C=h,U=A,G=p,te=y,h>=0?(b=l,_=c,B=f,F=u,Q=m,I=g,J=d,Y=S):(b=c,_=l,B=u,F=f,Q=g,I=m,J=S,Y=d)),C===0)return null;const k=b/C,$=_/C,ne=1/C,Ie=B-k*U,Be=F-$*U,at=Q-k*G,ke=I-$*G,Pe=J-k*te,K=Y-$*te,V=Pe*ke-K*at,ie=Ie*K-Be*Pe,de=at*Be-ke*Ie;if(r){if(V<0||ie<0||de<0)return null}else if((V<0||ie<0||de<0)&&(V>0||ie>0||de>0))return null;const re=V+ie+de;if(re===0)return null;const ve=ne*(V*U+ie*G+de*te);return(re>0?ve<0:ve>0)?null:this.at(ve/re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fl extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rc=new ft,_i=new Ou,Ss=new as,Ic=new O,ws=new O,Cs=new O,ys=new O,Xa=new O,bs=new O,Dc=new O,Ts=new O;class mt extends Dt{constructor(e=new Xt,t=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Xa.fromBufferAttribute(f,e),a?bs.addScaledVector(Xa,h):bs.addScaledVector(Xa.sub(t),h))}t.add(bs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Ss.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Ss,Ic)===null||_i.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Rc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,A=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=u.length;m<g;m++){const p=u[m],d=a[p.materialIndex],S=Math.max(p.start,A.start),y=Math.min(o.count,Math.min(p.start+p.count,A.start+A.count));for(let E=S,w=y;E<w;E+=3){const M=o.getX(E),b=o.getX(E+1),_=o.getX(E+2);r=Bs(this,d,e,i,c,h,f,M,b,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,A.start),g=Math.min(o.count,A.start+A.count);for(let p=m,d=g;p<d;p+=3){const S=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);r=Bs(this,a,e,i,c,h,f,S,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=u.length;m<g;m++){const p=u[m],d=a[p.materialIndex],S=Math.max(p.start,A.start),y=Math.min(l.count,Math.min(p.start+p.count,A.start+A.count));for(let E=S,w=y;E<w;E+=3){const M=E,b=E+1,_=E+2;r=Bs(this,d,e,i,c,h,f,M,b,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,A.start),g=Math.min(l.count,A.start+A.count);for(let p=m,d=g;p<d;p+=3){const S=p,y=p+1,E=p+2;r=Bs(this,a,e,i,c,h,f,S,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function DA(n,e,t,i,r,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ri,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:n}}function Bs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ws),n.getVertexPosition(l,Cs),n.getVertexPosition(c,ys);const h=DA(n,e,t,i,ws,Cs,ys,Dc);if(h){const f=new O;pn.getBarycoord(Dc,ws,Cs,ys,f),r&&(h.uv=pn.getInterpolatedAttribute(r,o,l,c,f,new ze)),s&&(h.uv1=pn.getInterpolatedAttribute(s,o,l,c,f,new ze)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,l,c,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};pn.getNormal(ws,Cs,ys,u.normal),h.face=u,h.barycoord=f}return h}class Qu extends Ht{constructor(e=null,t=1,i=1,r,s,a,o,l,c=It,h=It,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends In{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new ft,Lc=new ft,Rs=[],Fc=new Fi,PA=new ft,Dr=new mt,Pr=new as;class LA extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,PA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),Fc.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(Fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$i),Pr.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(i),e.ray.intersectsSphere(Pr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,$i),Lc.multiplyMatrices(i,$i),Dr.matrixWorld=Lc,Dr.raycast(e,Rs);for(let a=0,o=Rs.length;a<o;a++){const l=Rs[a];l.instanceId=s,l.object=this,t.push(l)}Rs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qu(new Float32Array(r*this.count),r,this.count,yl,mn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ei=new as,FA=new ze(.5,.5),Is=new O;class Ul{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],A=s[7],m=s[8],g=s[9],p=s[10],d=s[11],S=s[12],y=s[13],E=s[14],w=s[15];if(r[0].setComponents(c-a,A-h,d-m,w-S).normalize(),r[1].setComponents(c+a,A+h,d+m,w+S).normalize(),r[2].setComponents(c+o,A+f,d+g,w+y).normalize(),r[3].setComponents(c-o,A-f,d-g,w-y).normalize(),i)r[4].setComponents(l,u,p,E).normalize(),r[5].setComponents(c-l,A-u,d-p,w-E).normalize();else if(r[4].setComponents(c-l,A-u,d-p,w-E).normalize(),t===bn)r[5].setComponents(c+l,A+u,d+p,w+E).normalize();else if(t===jr)r[5].setComponents(l,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=FA.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Is.x=r.normal.x>0?e.max.x:e.min.x,Is.y=r.normal.y>0?e.max.y:e.min.y,Is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ku extends Ht{constructor(e=[],t=Ii,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UA extends Ht{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ts extends Ht{constructor(e,t,i=Dn,r,s,a,o=It,l=It,c,h=Kn,f=1){if(h!==Kn&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class NA extends ts{constructor(e,t=Dn,i=Ii,r,s,a=It,o=It,l,c=Kn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hu extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class di extends Xt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,A=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(f,2));function m(g,p,d,S,y,E,w,M,b,_,C){const B=E/b,F=w/_,U=E/2,Q=w/2,I=M/2,G=b+1,J=_+1;let Y=0,te=0;const k=new O;for(let $=0;$<J;$++){const ne=$*F-Q;for(let Ie=0;Ie<G;Ie++){const Be=Ie*B-U;k[g]=Be*S,k[p]=ne*y,k[d]=I,c.push(k.x,k.y,k.z),k[g]=0,k[p]=0,k[d]=M>0?1:-1,h.push(k.x,k.y,k.z),f.push(Ie/b),f.push(1-$/_),Y+=1}}for(let $=0;$<_;$++)for(let ne=0;ne<b;ne++){const Ie=u+ne+G*$,Be=u+ne+G*($+1),at=u+(ne+1)+G*($+1),ke=u+(ne+1)+G*$;l.push(Ie,Be,ke),l.push(Be,at,ke),te+=6}o.addGroup(A,te,C),A+=te,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nl extends Xt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new O,h=new ze;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const A=i+f/t*r;c.x=e*Math.cos(A),c.y=e*Math.sin(A),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(o,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class fr extends Xt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],A=[];let m=0;const g=[],p=i/2;let d=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new At(f,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(A,2));function S(){const E=new O,w=new O;let M=0;const b=(t-e)/i;for(let _=0;_<=s;_++){const C=[],B=_/s,F=B*(t-e)+e;for(let U=0;U<=r;U++){const Q=U/r,I=Q*l+o,G=Math.sin(I),J=Math.cos(I);w.x=F*G,w.y=-B*i+p,w.z=F*J,f.push(w.x,w.y,w.z),E.set(G,b,J).normalize(),u.push(E.x,E.y,E.z),A.push(Q,1-B),C.push(m++)}g.push(C)}for(let _=0;_<r;_++)for(let C=0;C<s;C++){const B=g[C][_],F=g[C+1][_],U=g[C+1][_+1],Q=g[C][_+1];(e>0||C!==0)&&(h.push(B,F,Q),M+=3),(t>0||C!==s-1)&&(h.push(F,U,Q),M+=3)}c.addGroup(d,M,0),d+=M}function y(E){const w=m,M=new ze,b=new O;let _=0;const C=E===!0?e:t,B=E===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,p*B,0),u.push(0,B,0),A.push(.5,.5),m++;const F=m;for(let U=0;U<=r;U++){const I=U/r*l+o,G=Math.cos(I),J=Math.sin(I);b.x=C*J,b.y=p*B,b.z=C*G,f.push(b.x,b.y,b.z),u.push(0,B,0),M.x=G*.5+.5,M.y=J*.5*B+.5,A.push(M.x,M.y),m++}for(let U=0;U<r;U++){const Q=w+U,I=F+U;E===!0?h.push(I,I+1,Q):h.push(I+1,I,Q),_+=3}c.addGroup(d,_,E===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ra extends fr{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Xt{constructor(e=[new ze(0,-.5),new ze(.5,0),new ze(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Je(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,f=new O,u=new ze,A=new O,m=new O,g=new O;let p=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,A.x=d*1,A.y=-p,A.z=d*0,g.copy(A),A.normalize(),l.push(A.x,A.y,A.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:p=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,A.x=d*1,A.y=-p,A.z=d*0,m.copy(A),A.x+=g.x,A.y+=g.y,A.z+=g.z,A.normalize(),l.push(A.x,A.y,A.z),g.copy(m)}for(let S=0;S<=t;S++){const y=i+S*h*r,E=Math.sin(y),w=Math.cos(y);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*E,f.y=e[M].y,f.z=e[M].x*w,a.push(f.x,f.y,f.z),u.x=S/t,u.y=M/(e.length-1),o.push(u.x,u.y);const b=l[3*M+0]*E,_=l[3*M+1],C=l[3*M+0]*w;c.push(b,_,C)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){const E=y+S*e.length,w=E,M=E+e.length,b=E+e.length+1,_=E+1;s.push(w,M,_),s.push(b,_,M)}this.setIndex(s),this.setAttribute("position",new At(a,3)),this.setAttribute("uv",new At(o,2)),this.setAttribute("normal",new At(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.points,e.segments,e.phiStart,e.phiLength)}}class Sr extends Xt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=t/l,A=[],m=[],g=[],p=[];for(let d=0;d<h;d++){const S=d*u-a;for(let y=0;y<c;y++){const E=y*f-s;m.push(E,-S,0),g.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const y=S+c*d,E=S+c*(d+1),w=S+1+c*(d+1),M=S+1+c*d;A.push(y,E,M),A.push(E,w,M)}this.setIndex(A),this.setAttribute("position",new At(m,3)),this.setAttribute("normal",new At(g,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ol extends Xt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/r,A=new O,m=new ze;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){const d=s+p/i*a;A.x=f*Math.cos(d),A.y=f*Math.sin(d),l.push(A.x,A.y,A.z),c.push(0,0,1),m.x=(A.x/t+1)/2,m.y=(A.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let g=0;g<r;g++){const p=g*(i+1);for(let d=0;d<i;d++){const S=d+p,y=S,E=S+i+1,w=S+i+2,M=S+1;o.push(y,E,M),o.push(E,w,M)}}this.setIndex(o),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zu extends Xt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new O,u=new O,A=[],m=[],g=[],p=[];for(let d=0;d<=i;d++){const S=[],y=d/i,E=a+y*o,w=e*Math.cos(E),M=Math.sqrt(e*e-w*w);let b=0;d===0&&a===0?b=.5/t:d===i&&l===Math.PI&&(b=-.5/t);for(let _=0;_<=t;_++){const C=_/t,B=r+C*s;f.x=-M*Math.cos(B),f.y=w,f.z=M*Math.sin(B),m.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),p.push(C+b,1-y),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){const y=h[d][S+1],E=h[d][S],w=h[d+1][S],M=h[d+1][S+1];(d!==0||a>0)&&A.push(y,E,M),(d!==i-1||l<Math.PI)&&A.push(E,w,M)}this.setIndex(A),this.setAttribute("position",new At(m,3)),this.setAttribute("normal",new At(g,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sa extends Xt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],f=[],u=new O,A=new O,m=new O;for(let g=0;g<=i;g++){const p=a+g/i*o;for(let d=0;d<=r;d++){const S=d/r*s;A.x=(e+t*Math.cos(p))*Math.cos(S),A.y=(e+t*Math.cos(p))*Math.sin(S),A.z=t*Math.sin(p),c.push(A.x,A.y,A.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),m.subVectors(A,u).normalize(),h.push(m.x,m.y,m.z),f.push(d/r),f.push(g/i)}}for(let g=1;g<=i;g++)for(let p=1;p<=r;p++){const d=(r+1)*g+p-1,S=(r+1)*(g-1)+p-1,y=(r+1)*(g-1)+p,E=(r+1)*g+p;l.push(d,S,E),l.push(S,y,E)}this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Uc(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Uc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}function Uc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function GA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const OA={clone:_r,merge:Wt};var QA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QA,this.fragmentShader=kA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=GA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class HA extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ln extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wu extends vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zA extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VA extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yu extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class WA extends Yu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ka=new ft,Nc=new O,Gc=new O;class YA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ka,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ds=new O,Ps=new Li,vn=new O;class Xu extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ds,Ps,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Ps,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ds,Ps,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Ps,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new O,Oc=new ze,Qc=new ze;class un extends Xu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Qc),t.subVectors(Qc,Oc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ql extends Xu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class XA extends YA{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KA extends Yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new XA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Zi=-90,ji=1;class qA extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Zi,ji,e,t);r.layers=this.layers,this.add(r);const s=new un(Zi,ji,e,t);s.layers=this.layers,this.add(s);const a=new un(Zi,ji,e,t);a.layers=this.layers,this.add(a);const o=new un(Zi,ji,e,t);o.layers=this.layers,this.add(o);const l=new un(Zi,ji,e,t);l.layers=this.layers,this.add(l);const c=new un(Zi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,A),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class JA extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kc=new ft;class mv{constructor(e,t,i=0,r=1/0){this.ray=new Ou(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kc),this}intersectObject(e,t=!0,i=[]){return il(e,this,i,t),i.sort(Hc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)il(e[r],this,i,t);return i.sort(Hc),i}}function Hc(n,e){return n.distance-e.distance}function il(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)il(s[a],e,t,!0)}}class Ku{static{Ku.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}function zc(n,e,t,i){const r=$A(i);switch(t){case Du:return n*e;case yl:return n*e/r.components*r.byteLength;case bl:return n*e/r.components*r.byteLength;case Di:return n*e*2/r.components*r.byteLength;case Tl:return n*e*2/r.components*r.byteLength;case Pu:return n*e*3/r.components*r.byteLength;case gn:return n*e*4/r.components*r.byteLength;case Bl:return n*e*4/r.components*r.byteLength;case Hs:case zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Ro:return Math.max(n,16)*Math.max(e,8)/4;case bo:case Bo:return Math.max(n,8)*Math.max(e,8)/2;case Io:case Do:case Lo:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Zs:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $o:case Zo:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case js:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $A(n){switch(n){case nn:case Tu:return{byteLength:1,components:1};case $r:case Bu:case Pn:return{byteLength:2,components:1};case wl:case Cl:return{byteLength:2,components:4};case Dn:case Sl:case mn:return{byteLength:4,components:1};case Ru:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ZA(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let A;if(c instanceof Float32Array)A=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)A=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?A=n.HALF_FLOAT:A=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)A=n.SHORT;else if(c instanceof Uint32Array)A=n.UNSIGNED_INT;else if(c instanceof Int32Array)A=n.INT;else if(c instanceof Int8Array)A=n.BYTE;else if(c instanceof Uint8Array)A=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)A=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:A,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((A,m)=>A.start-m.start);let u=0;for(let A=1;A<f.length;A++){const m=f[u],g=f[A];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++u,f[u]=g)}f.length=u+1;for(let A=0,m=f.length;A<m;A++){const g=f[A];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:jA,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:ap,batching_pars_vertex:op,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:dp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:xp,color_pars_fragment:_p,color_pars_vertex:Ep,color_vertex:Mp,common:vp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Cp,displacementmap_vertex:yp,emissivemap_fragment:bp,emissivemap_pars_fragment:Tp,colorspace_fragment:Bp,colorspace_pars_fragment:Rp,envmap_fragment:Ip,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Wp,envmap_vertex:Fp,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Gp,fog_pars_fragment:Op,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:kp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:zp,lights_pars_begin:Vp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Kp,lights_phong_pars_fragment:qp,lights_physical_fragment:Jp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:jp,lights_fragment_end:em,lightprobes_pars_fragment:tm,logdepthbuf_fragment:nm,logdepthbuf_pars_fragment:im,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:sm,map_fragment:am,map_pars_fragment:om,map_particle_fragment:lm,map_particle_pars_fragment:cm,metalnessmap_fragment:hm,metalnessmap_pars_fragment:um,morphinstance_vertex:fm,morphcolor_vertex:dm,morphnormal_vertex:Am,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:Em,normal_vertex:Mm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:ym,opaque_fragment:bm,packing:Tm,premultiplied_alpha_fragment:Bm,project_vertex:Rm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Um,shadowmap_vertex:Nm,shadowmask_pars_fragment:Gm,skinbase_vertex:Om,skinning_pars_vertex:Qm,skinning_vertex:km,skinnormal_vertex:Hm,specularmap_fragment:zm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Ym,transmission_fragment:Xm,transmission_pars_fragment:Km,uv_pars_fragment:qm,uv_pars_vertex:Jm,uv_vertex:$m,worldpos_vertex:Zm,background_vert:jm,background_frag:e0,backgroundCube_vert:t0,backgroundCube_frag:n0,cube_vert:i0,cube_frag:r0,depth_vert:s0,depth_frag:a0,distance_vert:o0,distance_frag:l0,equirect_vert:c0,equirect_frag:h0,linedashed_vert:u0,linedashed_frag:f0,meshbasic_vert:d0,meshbasic_frag:A0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:x0,meshnormal_vert:_0,meshnormal_frag:E0,meshphong_vert:M0,meshphong_frag:v0,meshphysical_vert:S0,meshphysical_frag:w0,meshtoon_vert:C0,meshtoon_frag:y0,points_vert:b0,points_frag:T0,shadow_vert:B0,shadow_frag:R0,sprite_vert:I0,sprite_frag:D0},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Cn={basic:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Wt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Wt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Wt([Ae.points,Ae.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Wt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Wt([Ae.common,Ae.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Wt([Ae.sprite,Ae.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Wt([Ae.common,Ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Wt([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Cn.physical={uniforms:Wt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ls={r:0,b:0,g:0},P0=new ft,Ju=new Qe;Ju.set(-1,0,0,0,1,0,0,0,1);function L0(n,e,t,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function A(S){let y=S.isScene===!0?S.background:null;if(y&&y.isTexture){const E=S.backgroundBlurriness>0;y=e.get(y,E)}return y}function m(S){let y=!1;const E=A(S);E===null?p(a,o):E&&E.isColor&&(p(E,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,y){const E=A(y);E&&(E.isCubeTexture||E.mapping===ga)?(c===void 0&&(c=new mt(new di(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:_r(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(y.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ju),c.material.toneMapped=je.getTransfer(E.colorSpace)!==ht,(h!==E||f!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new mt(new Sr(2,2),new Ln({name:"BackgroundMaterial",uniforms:_r(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Ls,Vu(n)),t.buffers.color.setClear(Ls.r,Ls.g,Ls.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:m,addToRenderList:g,dispose:d}}function F0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(F,U,Q,I,G){let J=!1;const Y=f(F,I,Q,U);s!==Y&&(s=Y,c(s.object)),J=A(F,I,Q,G),J&&m(F,I,Q,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,E(F,U,Q,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function f(F,U,Q,I){const G=I.wireframe===!0;let J=i[U.id];J===void 0&&(J={},i[U.id]=J);const Y=F.isInstancedMesh===!0?F.id:0;let te=J[Y];te===void 0&&(te={},J[Y]=te);let k=te[Q.id];k===void 0&&(k={},te[Q.id]=k);let $=k[G];return $===void 0&&($=u(l()),k[G]=$),$}function u(F){const U=[],Q=[],I=[];for(let G=0;G<t;G++)U[G]=0,Q[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Q,attributeDivisors:I,object:F,attributes:{},index:null}}function A(F,U,Q,I){const G=s.attributes,J=U.attributes;let Y=0;const te=Q.getAttributes();for(const k in te)if(te[k].location>=0){const ne=G[k];let Ie=J[k];if(Ie===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),ne===void 0||ne.attribute!==Ie||Ie&&ne.data!==Ie.data)return!0;Y++}return s.attributesNum!==Y||s.index!==I}function m(F,U,Q,I){const G={},J=U.attributes;let Y=0;const te=Q.getAttributes();for(const k in te)if(te[k].location>=0){let ne=J[k];ne===void 0&&(k==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),k==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));const Ie={};Ie.attribute=ne,ne&&ne.data&&(Ie.data=ne.data),G[k]=Ie,Y++}s.attributes=G,s.attributesNum=Y,s.index=I}function g(){const F=s.newAttributes;for(let U=0,Q=F.length;U<Q;U++)F[U]=0}function p(F){d(F,0)}function d(F,U){const Q=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;Q[F]=1,I[F]===0&&(n.enableVertexAttribArray(F),I[F]=1),G[F]!==U&&(n.vertexAttribDivisor(F,U),G[F]=U)}function S(){const F=s.newAttributes,U=s.enabledAttributes;for(let Q=0,I=U.length;Q<I;Q++)U[Q]!==F[Q]&&(n.disableVertexAttribArray(Q),U[Q]=0)}function y(F,U,Q,I,G,J,Y){Y===!0?n.vertexAttribIPointer(F,U,Q,G,J):n.vertexAttribPointer(F,U,Q,I,G,J)}function E(F,U,Q,I){g();const G=I.attributes,J=Q.getAttributes(),Y=U.defaultAttributeValues;for(const te in J){const k=J[te];if(k.location>=0){let $=G[te];if($===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){const ne=$.normalized,Ie=$.itemSize,Be=e.get($);if(Be===void 0)continue;const at=Be.buffer,ke=Be.type,Pe=Be.bytesPerElement,K=ke===n.INT||ke===n.UNSIGNED_INT||$.gpuType===Sl;if($.isInterleavedBufferAttribute){const V=$.data,ie=V.stride,de=$.offset;if(V.isInstancedInterleavedBuffer){for(let re=0;re<k.locationSize;re++)d(k.location+re,V.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<k.locationSize;re++)p(k.location+re);n.bindBuffer(n.ARRAY_BUFFER,at);for(let re=0;re<k.locationSize;re++)y(k.location+re,Ie/k.locationSize,ke,ne,ie*Pe,(de+Ie/k.locationSize*re)*Pe,K)}else{if($.isInstancedBufferAttribute){for(let V=0;V<k.locationSize;V++)d(k.location+V,$.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let V=0;V<k.locationSize;V++)p(k.location+V);n.bindBuffer(n.ARRAY_BUFFER,at);for(let V=0;V<k.locationSize;V++)y(k.location+V,Ie/k.locationSize,ke,ne,Ie*Pe,Ie/k.locationSize*V*Pe,K)}}else if(Y!==void 0){const ne=Y[te];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(k.location,ne);break;case 3:n.vertexAttrib3fv(k.location,ne);break;case 4:n.vertexAttrib4fv(k.location,ne);break;default:n.vertexAttrib1fv(k.location,ne)}}}}S()}function w(){C();for(const F in i){const U=i[F];for(const Q in U){const I=U[Q];for(const G in I){const J=I[G];for(const Y in J)h(J[Y].object),delete J[Y];delete I[G]}}delete i[F]}}function M(F){if(i[F.id]===void 0)return;const U=i[F.id];for(const Q in U){const I=U[Q];for(const G in I){const J=I[G];for(const Y in J)h(J[Y].object),delete J[Y];delete I[G]}}delete i[F.id]}function b(F){for(const U in i){const Q=i[U];for(const I in Q){const G=Q[I];if(G[F.id]===void 0)continue;const J=G[F.id];for(const Y in J)h(J[Y].object),delete J[Y];delete G[F.id]}}}function _(F){for(const U in i){const Q=i[U],I=F.isInstancedMesh===!0?F.id:0,G=Q[I];if(G!==void 0){for(const J in G){const Y=G[J];for(const te in Y)h(Y[te].object),delete Y[te];delete G[J]}delete Q[I],Object.keys(Q).length===0&&delete i[U]}}}function C(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function U0(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let A=0;A<h;A++)u+=c[A];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function N0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==gn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const _=b===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==nn&&b!==mn&&!_&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const A=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:A,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:E,maxSamples:w,samples:M}}function G0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new oi,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const A=f.length!==0||u||i!==0||r;return r=u,i=f.length,A},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,A){const m=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||m===null||m.length===0||s&&!p)s?h(null):c();else{const S=s?0:i,y=S*4;let E=d.clippingState||null;l.value=E,E=h(m,u,y,A);for(let w=0;w!==y;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,A,m){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const d=A+g*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,E=A;y!==g;++y,E+=4)a.copy(f[y]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const or=4,O0=6,Q0=20,k0=256,Lr=new Ql,Vc=new $e;let qa=null,Ja=0,$a=0,Za=!1;const H0=new O,Mi=new O;class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=H0}=s;qa=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ja,$a),this._renderer.xr.enabled=Za,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Pn,format:gn,colorSpace:ta,depthBuffer:!1},r=Yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z0(s)),this._blurMaterial=W0(s,e,t),this._ggxMaterial=V0(s,e,t)}return r}_compileMaterial(e){const t=new mt(new Xt,e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,i,r,s){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,A=f.toneMapping;f.getClearColor(Vc),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new di,new Fl({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let d=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,d=!0):(p.color.copy(Vc),d=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):E===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;er(r,E*w,y>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(g,l),f.render(e,l)}f.toneMapping=A,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Lr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,A=f*u,{_lodMax:m}=this,g=this._sizeLods[i],p=3*g*(i>m-or?i-m+or:0),d=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=A,l.mipInt.value=m-t,er(s,p,d,3*g,2*g),r.setRenderTarget(s),r.render(o,Lr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,er(e,p,d,3*g,2*g),r.setRenderTarget(e),r.render(o,Lr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],f=3*h*(r>this._lodMax-or?r-this._lodMax+or:0),u=4*(this._cubeSize-h);er(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Lr)}}function z0(n){const e=[],t=[];let i=n;const r=n-or+1+O0;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,A=3,m=new Float32Array(A*u*f),g=new Float32Array(A*u*f);for(let d=0;d<f;d++){const S=d%3*2/3-1,y=d>2?0:-1,E=[S,y,0,S+2/3,y,0,S+2/3,y+1,0,S,y,0,S+2/3,y+1,0,S,y+1,0];m.set(E,A*u*d);for(let w=0;w<u;w++){const M=h[w*2]*2-1,b=h[w*2+1]*2-1;d===0?Mi.set(1,b,M):d===1?Mi.set(-M,1,-b):d===2?Mi.set(-M,b,1):d===3?Mi.set(-1,b,-M):d===4?Mi.set(-M,-1,b):Mi.set(M,b,-1),Mi.toArray(g,(d*u+w)*A)}}const p=new Xt;p.setAttribute("position",new In(m,A)),p.setAttribute("outputDirection",new In(g,A)),t.push(new mt(p,null)),i>or&&i--}return{lodMeshes:t,sizeLods:e}}function Yc(n,e,t){const i=new xn(n,e,t);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function V0(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function W0(n,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Xc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Kc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $u extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ku(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new di(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Wn});s.uniforms.tEquirect.value=t;const a=new mt(r,s),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=kt),new qA(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Y0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,A=!1){return u==null?null:A?a(u):s(u)}function s(u){if(u&&u.isTexture){const A=u.mapping;if(A===wa||A===Ca)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const g=new $u(m.height);return g.fromEquirectangularTexture(n,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const A=u.mapping,m=A===wa||A===Ca,g=A===Ii||A===xr;if(m||g){let p=t.get(u);const d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Wc(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Wc(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,A){return A===wa?u.mapping=Ii:A===Ca&&(u.mapping=xr),u}function l(u){let A=0;const m=6;for(let g=0;g<m;g++)u[g]!==void 0&&A++;return A===m}function c(u){const A=u.target;A.removeEventListener("dispose",c);const m=e.get(A);m!==void 0&&(e.delete(A),m.dispose())}function h(u){const A=u.target;A.removeEventListener("dispose",h);const m=t.get(A);m!==void 0&&(t.delete(A),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function X0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&hr("WebGLRenderer: "+i+" extension not supported."),r}}}function K0(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete r[u.id];const A=s.get(u);A&&(e.remove(A),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const A in u)e.update(u[A],n.ARRAY_BUFFER)}function c(f){const u=[],A=f.index,m=f.attributes.position;let g=0;if(m===void 0)return;if(A!==null){const S=A.array;g=A.version;for(let y=0,E=S.length;y<E;y+=3){const w=S[y+0],M=S[y+1],b=S[y+2];u.push(w,M,M,b,b,w)}}else{const S=m.array;g=m.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const w=y+0,M=y+1,b=y+2;u.push(w,M,M,b,b,w)}}const p=new(m.count>=65535?Gu:Nu)(u,1);p.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function h(f){const u=s.get(f);if(u){const A=f.index;A!==null&&u.version<A.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function q0(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,s,f*a),t.update(u,i,1)}function c(f,u,A){A!==0&&(n.drawElementsInstanced(i,u,s,f*a,A),t.update(u,i,A))}function h(f,u,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,A);let g=0;for(let p=0;p<A;p++)g+=u[p];t.update(g,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function J0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $0(n,e,t){const i=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let C=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();const A=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;A===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let E=o.attributes.position.count*y,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*w*4*f),b=new Fu(M,E,w,f);b.type=mn,b.needsUpdate=!0;const _=y*4;for(let B=0;B<f;B++){const F=p[B],U=d[B],Q=S[B],I=E*w*4*B;for(let G=0;G<F.count;G++){const J=G*_;A===!0&&(r.fromBufferAttribute(F,G),M[I+J+0]=r.x,M[I+J+1]=r.y,M[I+J+2]=r.z,M[I+J+3]=0),m===!0&&(r.fromBufferAttribute(U,G),M[I+J+4]=r.x,M[I+J+5]=r.y,M[I+J+6]=r.z,M[I+J+7]=0),g===!0&&(r.fromBufferAttribute(Q,G),M[I+J+8]=r.x,M[I+J+9]=r.y,M[I+J+10]=r.z,M[I+J+11]=Q.itemSize===4?r.w:1)}}u={count:f,texture:b,size:new ze(E,w)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let A=0;for(let g=0;g<c.length;g++)A+=c[g];const m=o.morphTargetsRelative?1:1-A;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Z0(n,e,t,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const A=c.skeleton;s.get(A)!==h&&(A.update(),s.set(A,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const j0={[Eu]:"LINEAR_TONE_MAPPING",[Mu]:"REINHARD_TONE_MAPPING",[vu]:"CINEON_TONE_MAPPING",[Su]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[yu]:"NEUTRAL_TONE_MAPPING",[wu]:"CUSTOM_TONE_MAPPING"};function eg(n,e,t,i,r,s){const a=new xn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Xt;c.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new At([0,2,0,0,2,0],2));const h=new HA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new mt(c,h),u=new Ql(-1,1,1,-1,0,1);let A=null,m=null,g=!1,p,d=null,S=[],y=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let M=0;M<S.length;M++){const b=S[M];b.setSize&&b.setSize(E,w)}},this.setEffects=function(E){S=E,y=S.length>0&&S[0].isRenderPass===!0;const w=a.width,M=a.height;S.length>0&&o===null&&(o=new xn(w,M,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new xn(w,M,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<S.length;b++){const _=S[b];_.setSize&&_.setSize(w,M)}},this.begin=function(E,w){if(g||E.toneMapping===Rn&&S.length===0)return!1;if(d=w,w!==null){const M=w.width,b=w.height;(a.width!==M||a.height!==b)&&this.setSize(M,b)}return y===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Rn,!0},this.hasRenderPass=function(){return y},this.end=function(E,w){E.toneMapping=p,g=!0;let M=a,b=o;for(let _=0;_<S.length;_++){const C=S[_];C.enabled!==!1&&(C.render(E,b,M,w),C.needsSwap!==!1&&(M=b,b=b===o?l:o))}if(A!==E.outputColorSpace||m!==E.toneMapping){A=E.outputColorSpace,m=E.toneMapping,h.defines={},je.getTransfer(A)===ht&&(h.defines.SRGB_TRANSFER="");const _=j0[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(d),E.render(f,u),d=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Zu=new Ht,rl=new ts(1,1),ju=new Fu,ef=new gA,tf=new ku,qc=[],Jc=[],$c=new Float32Array(16),Zc=new Float32Array(9),jc=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=qc[r];if(s===void 0&&(s=new Float32Array(r),qc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Ct(t,i))return;jc.set(i),n.uniformMatrix2fv(this.addr,!1,jc),yt(t,i)}}function ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Ct(t,i))return;Zc.set(i),n.uniformMatrix3fv(this.addr,!1,Zc),yt(t,i)}}function og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Ct(t,i))return;$c.set(i),n.uniformMatrix4fv(this.addr,!1,$c),yt(t,i)}}function lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(rl.compareFunction=t.isReversedDepthBuffer()?Il:Rl,s=rl):s=Zu,t.setTexture2D(e||s,r)}function gg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ef,r)}function xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tf,r)}function _g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ju,r)}function Eg(n){switch(n){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return fg;case 36294:return dg;case 36295:return Ag;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}function Mg(n,e){n.uniform1fv(this.addr,e)}function vg(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function Sg(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function wg(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Cg(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yg(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bg(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tg(n,e){n.uniform1iv(this.addr,e)}function Bg(n,e){n.uniform2iv(this.addr,e)}function Rg(n,e){n.uniform3iv(this.addr,e)}function Ig(n,e){n.uniform4iv(this.addr,e)}function Dg(n,e){n.uniform1uiv(this.addr,e)}function Pg(n,e){n.uniform2uiv(this.addr,e)}function Lg(n,e){n.uniform3uiv(this.addr,e)}function Fg(n,e){n.uniform4uiv(this.addr,e)}function Ug(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=rl:a=Zu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ng(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ef,s[a])}function Gg(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tf,s[a])}function Og(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ju,s[a])}function Qg(n){switch(n){case 5126:return Mg;case 35664:return vg;case 35665:return Sg;case 35666:return wg;case 35674:return Cg;case 35675:return yg;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return Bg;case 35668:case 35672:return Rg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Pg;case 36295:return Lg;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Og}}class kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}}class Hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function eh(n,e){n.seq.push(e),n.map[e.id]=e}function Vg(n,e,t){const i=n.name,r=i.length;for(ja.lastIndex=0;;){const s=ja.exec(i),a=ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){eh(t,c===void 0?new kg(o,n,e):new Hg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new zg(o),eh(t,f)),t=f}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function th(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Wg=37297;let Yg=0;function Xg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const nh=new Qe;function Kg(n){je._getMatrix(nh,je.workingColorSpace,n);const e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case na:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ih(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xg(n.getShaderSource(e),o)}else return s}function qg(n,e){const t=Kg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jg={[Eu]:"Linear",[Mu]:"Reinhard",[vu]:"Cineon",[Su]:"ACESFilmic",[Cu]:"AgX",[yu]:"Neutral",[wu]:"Custom"};function $g(n,e){const t=Jg[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new O;function Zg(){je.getLuminanceCoefficients(Fs);const n=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vr(n){return n!==""}function rh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(n){return n.replace(nx,rx)}const ix=new Map;function rx(n,e){let t=Ye[e];if(t===void 0){const i=ix.get(e);if(i!==void 0)t=Ye[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sl(t)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(n){return n.replace(sx,ax)}function ax(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ox={[Wr]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function lx(n){return ox[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cx={[Ii]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function hx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ux={[xr]:"ENVMAP_MODE_REFRACTION"};function fx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ux[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dx={[vl]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function Ax(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dx[n.combine]||"ENVMAP_BLENDING_NONE"}function px(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lx(t),c=hx(t),h=fx(t),f=Ax(t),u=px(t),A=jg(t),m=ex(s),g=r.createProgram();let p,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vr).join(`
`),d.length>0&&(d+=`
`)):(p=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),d=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Rn?$g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=sl(a),a=rh(a,t),a=sh(a,t),o=sl(o),o=rh(o,t),o=sh(o,t),a=ah(a),o=ah(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+p+a,E=S+d+o,w=th(r,r.VERTEX_SHADER,y),M=th(r,r.FRAGMENT_SHADER,E);r.attachShader(g,w),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(F){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(g)||"",Q=r.getShaderInfoLog(w)||"",I=r.getShaderInfoLog(M)||"",G=U.trim(),J=Q.trim(),Y=I.trim();let te=!0,k=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,M);else{const $=ih(r,w,"vertex"),ne=ih(r,M,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+$+`
`+ne)}else G!==""?Ne("WebGLProgram: Program Info Log:",G):(J===""||Y==="")&&(k=!1);k&&(F.diagnostics={runnable:te,programLog:G,vertexShader:{log:J,prefix:p},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(w),r.deleteShader(M),_=new Ys(r,g),C=tx(r,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(g,Wg)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=M,this}let gx=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _x(e),t.set(e,i)),i}}class _x{constructor(e){this.id=gx++,this.code=e,this.usedTimes=0}}function Ex(n){return n===Di||n===Zs||n===js}function Mx(n,e,t,i,r,s){const a=new Ll,o=new xx,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,C,B,F,U,Q){const I=F.fog,G=U.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||J,Y),k=te&&te.mapping===ga?te.image.height:null,$=A[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ie=ne!==void 0?ne.length:0;let Be=0;G.morphAttributes.position!==void 0&&(Be=1),G.morphAttributes.normal!==void 0&&(Be=2),G.morphAttributes.color!==void 0&&(Be=3);let at,ke,Pe,K;if($){const st=Cn[$];at=st.vertexShader,ke=st.fragmentShader}else{at=_.vertexShader,ke=_.fragmentShader;const st=o.getVertexShaderStage(_),Ve=o.getFragmentShaderStage(_);o.update(_,st,Ve),Pe=st.id,K=Ve.id}const V=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),de=U.isInstancedMesh===!0,re=U.isBatchedMesh===!0,ve=!!_.map,Oe=!!_.matcap,Le=!!te,Ue=!!_.aoMap,we=!!_.lightMap,Se=!!_.bumpMap&&_.wireframe===!1,et=!!_.normalMap,Ze=!!_.displacementMap,Ke=!!_.emissiveMap,tt=!!_.metalnessMap,ot=!!_.roughnessMap,D=_.anisotropy>0,nt=_.clearcoat>0,De=_.dispersion>0,T=_.retroreflectivity>0,x=_.iridescence>0,N=_.sheen>0,R=_.transmission>0,q=D&&!!_.anisotropyMap,oe=nt&&!!_.clearcoatMap,he=nt&&!!_.clearcoatNormalMap,W=nt&&!!_.clearcoatRoughnessMap,j=x&&!!_.iridescenceMap,le=x&&!!_.iridescenceThicknessMap,be=N&&!!_.sheenColorMap,fe=N&&!!_.sheenRoughnessMap,ce=!!_.specularMap,xe=!!_.specularColorMap,Te=!!_.specularIntensityMap,Fe=R&&!!_.transmissionMap,P=R&&!!_.thicknessMap,ae=!!_.gradientMap,Z=!!_.alphaMap,ue=_.alphaTest>0,se=!!_.alphaHash,ee=!!_.extensions;let ge=Rn;_.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ge=n.toneMapping);const Ee={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:ke,defines:_.defines,customVertexShaderID:Pe,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:re,batchingColor:re&&U._colorsTexture!==null,instancing:de,instancingColor:de&&U.instanceColor!==null,instancingMorph:de&&U.morphTexture!==null,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ve,matcap:Oe,envMap:Le,envMapMode:Le&&te.mapping,envMapCubeUVHeight:k,aoMap:Ue,lightMap:we,bumpMap:Se,normalMap:et,displacementMap:Ze,emissiveMap:Ke,normalMapObjectSpace:et&&_.normalMapType===Ud,normalMapTangentSpace:et&&_.normalMapType===ea,packedNormalMap:et&&_.normalMapType===ea&&Ex(_.normalMap.format),metalnessMap:tt,roughnessMap:ot,anisotropy:D,anisotropyMap:q,clearcoat:nt,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:W,dispersion:De,retroreflection:T,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:le,sheen:N,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:xe,specularIntensityMap:Te,transmission:R,transmissionMap:Fe,thicknessMap:P,gradientMap:ae,opaque:_.transparent===!1&&_.blending===Yr&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:ue,alphaHash:se,combine:_.combine,mapUv:ve&&m(_.map.channel),aoMapUv:Ue&&m(_.aoMap.channel),lightMapUv:we&&m(_.lightMap.channel),bumpMapUv:Se&&m(_.bumpMap.channel),normalMapUv:et&&m(_.normalMap.channel),displacementMapUv:Ze&&m(_.displacementMap.channel),emissiveMapUv:Ke&&m(_.emissiveMap.channel),metalnessMapUv:tt&&m(_.metalnessMap.channel),roughnessMapUv:ot&&m(_.roughnessMap.channel),anisotropyMapUv:q&&m(_.anisotropyMap.channel),clearcoatMapUv:oe&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&m(_.sheenRoughnessMap.channel),specularMapUv:ce&&m(_.specularMap.channel),specularColorMapUv:xe&&m(_.specularColorMap.channel),specularIntensityMapUv:Te&&m(_.specularIntensityMap.channel),transmissionMapUv:Fe&&m(_.transmissionMap.channel),thicknessMapUv:P&&m(_.thicknessMap.channel),alphaMapUv:Z&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(et||D),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ve||Z),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Be,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,decodeVideoTexture:ve&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:Ke&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kn,flipSided:_.side===Jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function p(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)C.push(B),C.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(d(C,_),S(C,_),C.push(n.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function d(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function S(_,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const C=A[_.type];let B;if(C){const F=Cn[C];B=OA.clone(F.uniforms)}else B=_.uniforms;return B}function E(_,C){let B=h.get(C);return B!==void 0?++B.usedTimes:(B=new mx(n,C,_,r),c.push(B),h.set(C,B)),B}function w(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:b}}function vx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function lh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ch(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let A=0;return u.isInstancedMesh&&(A+=2),u.isSkinnedMesh&&(A+=1),A}function o(u,A,m,g,p,d){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:A,material:m,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:d},n[e]=S):(S.id=u.id,S.object=u,S.geometry=A,S.material=m,S.materialVariant=a(u),S.groupOrder=g,S.renderOrder=u.renderOrder,S.z=p,S.group=d),e++,S}function l(u,A,m,g,p,d,S){S.reversedDepth===!0&&(p=-p);const y=o(u,A,m,g,p,d);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(u,A,m,g,p,d){const S=o(u,A,m,g,p,d);m.transmission>0?i.unshift(S):m.transparent===!0?r.unshift(S):t.unshift(S)}function h(u,A){t.length>1&&t.sort(u||Sx),i.length>1&&i.sort(A||lh),r.length>1&&r.sort(A||lh)}function f(){for(let u=e,A=n.length;u<A;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function wx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ch,n.set(i,[a])):r>=s.length?(a=new ch,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function yx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bx=0;function Tx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bx(n){const e=new Cx,t=yx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new ft,a=new ft;function o(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let A=0,m=0,g=0,p=0,d=0,S=0,y=0,E=0,w=0,M=0,b=0,_=0,C=0,B=0;c.sort(Tx);for(let U=0,Q=c.length;U<Q;U++){const I=c[U],G=I.color,J=I.intensity,Y=I.distance;let te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Di?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*J,f+=G.g*J,u+=G.b*J;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],J);B++}else if(I.isSunLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,ne=t.get(I);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[m]=ne,i.sunShadowMap[m]=te;const Ie=$.getViewportCount();for(let Be=0;Be<Ie;Be++)i.sunShadowMatrix[g+Be]=$.getMatrix(Be),i.sunShadowCascade[g+Be]=$._cascadeData[Be];g+=Ie,m++}i.sun[A]=k,A++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,ne=t.get(I);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,i.directionalShadow[p]=ne,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=I.shadow.matrix,w++}i.directional[p]=k,p++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(G).multiplyScalar(J),k.distance=Y,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[S]=k;const $=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,$.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[S]=$.matrix,I.castShadow){const ne=t.get(I);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=te,b++}S++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(G).multiplyScalar(J),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=k,y++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const $=I.shadow,ne=t.get(I);ne.shadowIntensity=$.intensity,ne.shadowBias=$.bias,ne.shadowNormalBias=$.normalBias,ne.shadowRadius=$.radius,ne.shadowMapSize=$.mapSize,ne.shadowCameraNear=$.camera.near,ne.shadowCameraFar=$.camera.far,i.pointShadow[d]=ne,i.pointShadowMap[d]=te,i.pointShadowMatrix[d]=I.shadow.matrix,M++}i.point[d]=k,d++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(J),k.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[E]=k,E++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const F=i.hash;(F.sunLength!==A||F.directionalLength!==p||F.pointLength!==d||F.spotLength!==S||F.rectAreaLength!==y||F.hemiLength!==E||F.numSunShadows!==m||F.numDirectionalShadows!==w||F.numPointShadows!==M||F.numSpotShadows!==b||F.numSpotMaps!==_||F.numLightProbes!==B)&&(i.sun.length=A,i.directional.length=p,i.spot.length=S,i.rectArea.length=y,i.point.length=d,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=B,F.sunLength=A,F.directionalLength=p,F.pointLength=d,F.spotLength=S,F.rectAreaLength=y,F.hemiLength=E,F.numSunShadows=m,F.numDirectionalShadows=w,F.numPointShadows=M,F.numSpotShadows=b,F.numSpotMaps=_,F.numLightProbes=B,i.version=bx++)}function l(c,h){let f=0,u=0,A=0,m=0,g=0,p=0;const d=h.matrixWorldInverse;for(let S=0,y=c.length;S<y;S++){const E=c[S];if(E.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),f++}else if(E.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),u++}else if(E.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),m++}else if(E.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const w=i.point[A];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),A++}else if(E.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:i}}function hh(n){const e=new Bx(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rx(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hh(n),e.set(r,[o])):s>=a.length?(o=new hh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Px=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Lx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],uh=new ft,Fr=new O,eo=new O;function Fx(n,e,t){let i=new Ul;const r=new ze,s=new ze,a=new xt,o=new zA,l=new VA,c={},h=t.maxTextureSize,f={[Ri]:Jt,[Jt]:Ri,[kn]:kn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Ix,fragmentShader:Dx}),A=u.clone();A.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let d=this.type;this.render=function(M,b,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===dd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);const C=n.getRenderTarget(),B=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Wn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Q=d!==this.type;Q&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=M.length;I<G;I++){const J=M[I],Y=J.shadow;if(Y===void 0){Ne("WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const te=Y.getFrameExtents();r.multiply(te),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,Y.mapSize.y=s.y));const k=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=k,Y.map===null||Q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===zr){if(J.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new xn(r.x,r.y,{format:Di,type:Pn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),Y.map.texture.name=J.name+".shadowMap",Y.map.depthTexture=new ts(r.x,r.y,mn),Y.map.depthTexture.name=J.name+".shadowMapDepth",Y.map.depthTexture.format=Kn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It}else J.isPointLight?(Y.map=new $u(r.x),Y.map.depthTexture=new NA(r.x,Dn)):(Y.map=new xn(r.x,r.y),Y.map.depthTexture=new ts(r.x,r.y,Dn)),Y.map.depthTexture.name=J.name+".shadowMap",Y.map.depthTexture.format=Kn,this.type===Wr?(Y.map.depthTexture.compareFunction=k?Il:Rl,Y.map.depthTexture.minFilter=kt,Y.map.depthTexture.magFilter=kt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);const $=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();J.isPointLight!==!0&&Y.updateMatrices(J,_);for(let ne=0;ne<$;ne++){const Ie=Y.getCamera(ne);if(J.isPointLight){const Be=Y.camera,at=Y.matrix,ke=J.distance||Be.far;ke!==Be.far&&(Be.far=ke,Be.updateProjectionMatrix()),Fr.setFromMatrixPosition(J.matrixWorld),Be.position.copy(Fr),eo.copy(Be.position),eo.add(Px[ne]),Be.up.copy(Lx[ne]),Be.lookAt(eo),Be.updateMatrixWorld(),at.makeTranslation(-Fr.x,-Fr.y,-Fr.z),uh.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(uh,Be.coordinateSystem,Be.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(Y.map),n.clear());const Be=Y.getViewport(ne);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),U.viewport(a)}i=Y.getFrustum(ne),E(b,_,Ie,J,this.type)}Y.isPointLightShadow!==!0&&this.type===zr&&S(Y,_),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(C,B,F)};function S(M,b){const _=e.update(g);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,A.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,A.needsUpdate=!0),M.mapPass===null?M.mapPass=new xn(r.x,r.y,{format:Di,type:Pn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(b,null,_,u,g,null),A.uniforms.shadow_pass.value=M.mapPass.texture,A.uniforms.resolution.value.set(M.map.width,M.map.height),A.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(b,null,_,A,g,null)}function y(M,b,_,C){let B=null;const F=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)B=F;else if(B=_.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const U=B.uuid,Q=b.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let G=I[Q];G===void 0&&(G=B.clone(),I[Q]=G,b.addEventListener("dispose",w)),B=G}if(B.visible=b.visible,B.wireframe=b.wireframe,C===zr?B.side=b.shadowSide!==null?b.shadowSide:b.side:B.side=b.shadowSide!==null?b.shadowSide:f[b.side],B.alphaMap=b.alphaMap,B.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,B.map=b.map,B.clipShadows=b.clipShadows,B.clippingPlanes=b.clippingPlanes,B.clipIntersection=b.clipIntersection,B.displacementMap=b.displacementMap,B.displacementScale=b.displacementScale,B.displacementBias=b.displacementBias,B.wireframeLinewidth=b.wireframeLinewidth,B.linewidth=b.linewidth,_.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const U=n.properties.get(B);U.light=_}return B}function E(M,b,_,C,B){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&B===zr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const Q=e.update(M),I=M.material;if(Array.isArray(I)){const G=Q.groups;for(let J=0,Y=G.length;J<Y;J++){const te=G[J],k=I[te.materialIndex];if(k&&k.visible){const $=y(M,k,C,B);M.onBeforeShadow(n,M,b,_,Q,$,te),n.renderBufferDirect(_,null,Q,$,M,te),M.onAfterShadow(n,M,b,_,Q,$,te)}}}else if(I.visible){const G=y(M,I,C,B);M.onBeforeShadow(n,M,b,_,Q,G,null),n.renderBufferDirect(_,null,Q,G,M,null),M.onAfterShadow(n,M,b,_,Q,G,null)}}const U=M.children;for(let Q=0,I=U.length;Q<I;Q++)E(U[Q],b,_,C,B)}function w(M){M.target.removeEventListener("dispose",w);for(const _ in c){const C=c[_],B=M.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function Ux(n,e){function t(){let P=!1;const ae=new xt;let Z=null;const ue=new xt(0,0,0,0);return{setMask:function(se){Z!==se&&!P&&(n.colorMask(se,se,se,se),Z=se)},setLocked:function(se){P=se},setClear:function(se,ee,ge,Ee,st){st===!0&&(se*=Ee,ee*=Ee,ge*=Ee),ae.set(se,ee,ge,Ee),ue.equals(ae)===!1&&(n.clearColor(se,ee,ge,Ee),ue.copy(ae))},reset:function(){P=!1,Z=null,ue.set(-1,0,0,0)}}}function i(){let P=!1,ae=!1,Z=null,ue=null,se=null;return{setReversed:function(ee){if(ae!==ee){const ge=e.get("EXT_clip_control");ee?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const Ee=se;se=null,this.setClear(Ee)}},getReversed:function(){return ae},setTest:function(ee){ee?V(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!P&&(n.depthMask(ee),Z=ee)},setFunc:function(ee){if(ae&&(ee=Kd[ee]),ue!==ee){switch(ee){case _o:n.depthFunc(n.NEVER);break;case Eo:n.depthFunc(n.ALWAYS);break;case Mo:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case vo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case wo:n.depthFunc(n.GREATER);break;case Co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ee}},setLocked:function(ee){P=ee},setClear:function(ee){se!==ee&&(se=ee,ae&&(ee=1-ee),n.clearDepth(ee))},reset:function(){P=!1,Z=null,ue=null,se=null,ae=!1}}}function r(){let P=!1,ae=null,Z=null,ue=null,se=null,ee=null,ge=null,Ee=null,st=null;return{setTest:function(Ve){P||(Ve?V(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(Ve){ae!==Ve&&!P&&(n.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,Lt,Ft){(Z!==Ve||ue!==Lt||se!==Ft)&&(n.stencilFunc(Ve,Lt,Ft),Z=Ve,ue=Lt,se=Ft)},setOp:function(Ve,Lt,Ft){(ee!==Ve||ge!==Lt||Ee!==Ft)&&(n.stencilOp(Ve,Lt,Ft),ee=Ve,ge=Lt,Ee=Ft)},setLocked:function(Ve){P=Ve},setClear:function(Ve){st!==Ve&&(n.clearStencil(Ve),st=Ve)},reset:function(){P=!1,ae=null,Z=null,ue=null,se=null,ee=null,ge=null,Ee=null,st=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u={},A=new WeakMap,m=[],g=null,p=!1,d=null,S=null,y=null,E=null,w=null,M=null,b=null,_=new $e(0,0,0),C=0,B=!1,F=null,U=null,Q=null,I=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=te>=1):k.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=te>=2);let $=null,ne={};const Ie=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),at=new xt().fromArray(Ie),ke=new xt().fromArray(Be);function Pe(P,ae,Z,ue){const se=new Uint8Array(4),ee=n.createTexture();n.bindTexture(P,ee),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<Z;ge++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ae+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ee}const K={};K[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(n.DEPTH_TEST),a.setFunc(Jr),Se(!1),et(uc),V(n.CULL_FACE),Ue(Wn);function V(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function ie(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function de(P,ae){return u[P]!==ae?(n.bindFramebuffer(P,ae),u[P]=ae,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function re(P,ae){let Z=m,ue=!1;if(P){Z=A.get(ae),Z===void 0&&(Z=[],A.set(ae,Z));const se=P.textures;if(Z.length!==se.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ge=se.length;ee<ge;ee++)Z[ee]=n.COLOR_ATTACHMENT0+ee;Z.length=se.length,ue=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Z)}function ve(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const Oe={[ir]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[md]:n.FUNC_REVERSE_SUBTRACT};Oe[gd]=n.MIN,Oe[xd]=n.MAX;const Le={[_d]:n.ZERO,[Ed]:n.ONE,[Md]:n.SRC_COLOR,[xu]:n.SRC_ALPHA,[bd]:n.SRC_ALPHA_SATURATE,[Cd]:n.DST_COLOR,[Sd]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[_u]:n.ONE_MINUS_SRC_ALPHA,[yd]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Td]:n.CONSTANT_COLOR,[Bd]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Id]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(P,ae,Z,ue,se,ee,ge,Ee,st,Ve){if(P===Wn){p===!0&&(ie(n.BLEND),p=!1);return}if(p===!1&&(V(n.BLEND),p=!0),P!==Ad){if(P!==d||Ve!==B){if((S!==ir||w!==ir)&&(n.blendEquation(n.FUNC_ADD),S=ir,w=ir),Ve)switch(P){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",P);break}else switch(P){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dc:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",P);break}y=null,E=null,M=null,b=null,_.set(0,0,0),C=0,d=P,B=Ve}return}se=se||ae,ee=ee||Z,ge=ge||ue,(ae!==S||se!==w)&&(n.blendEquationSeparate(Oe[ae],Oe[se]),S=ae,w=se),(Z!==y||ue!==E||ee!==M||ge!==b)&&(n.blendFuncSeparate(Le[Z],Le[ue],Le[ee],Le[ge]),y=Z,E=ue,M=ee,b=ge),(Ee.equals(_)===!1||st!==C)&&(n.blendColor(Ee.r,Ee.g,Ee.b,st),_.copy(Ee),C=st),d=P,B=!1}function we(P,ae){P.side===kn?ie(n.CULL_FACE):V(n.CULL_FACE);let Z=P.side===Jt;ae&&(Z=!Z),Se(Z),P.blending===Yr&&P.transparent===!1?Ue(Wn):Ue(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ue=P.stencilWrite;o.setTest(ue),ue&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(P){F!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),F=P)}function et(P){P!==ud?(V(n.CULL_FACE),P!==U&&(P===uc?n.cullFace(n.BACK):P===fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),U=P}function Ze(P){P!==Q&&(Y&&n.lineWidth(P),Q=P)}function Ke(P,ae,Z){P?(V(n.POLYGON_OFFSET_FILL),(I!==ae||G!==Z)&&(I=ae,G=Z,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,Z))):ie(n.POLYGON_OFFSET_FILL)}function tt(P){P?V(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function ot(P){P===void 0&&(P=n.TEXTURE0+J-1),$!==P&&(n.activeTexture(P),$=P)}function D(P,ae,Z){Z===void 0&&($===null?Z=n.TEXTURE0+J-1:Z=$);let ue=ne[Z];ue===void 0&&(ue={type:void 0,texture:void 0},ne[Z]=ue),(ue.type!==P||ue.texture!==ae)&&($!==Z&&(n.activeTexture(Z),$=Z),n.bindTexture(P,ae||K[P]),ue.type=P,ue.texture=ae)}function nt(){const P=ne[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function De(){try{n.compressedTexImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function x(){try{n.texSubImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function N(){try{n.texSubImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function R(){try{n.compressedTexSubImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function oe(){try{n.texStorage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function he(){try{n.texStorage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function W(){try{n.texImage2D(...arguments)}catch(P){rt("WebGLState:",P)}}function j(){try{n.texImage3D(...arguments)}catch(P){rt("WebGLState:",P)}}function le(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function be(P,ae){f[P]!==ae&&(n.pixelStorei(P,ae),f[P]=ae)}function fe(P){at.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),at.copy(P))}function ce(P){ke.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ke.copy(P))}function xe(P,ae){let Z=c.get(ae);Z===void 0&&(Z=new WeakMap,c.set(ae,Z));let ue=Z.get(P);ue===void 0&&(ue=n.getUniformBlockIndex(ae,P.name),Z.set(P,ue))}function Te(P,ae){const ue=c.get(ae).get(P);l.get(ae)!==ue&&(n.uniformBlockBinding(ae,ue,P.__bindingPointIndex),l.set(ae,ue))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},$=null,ne={},u={},A=new WeakMap,m=[],g=null,p=!1,d=null,S=null,y=null,E=null,w=null,M=null,b=null,_=new $e(0,0,0),C=0,B=!1,F=null,U=null,Q=null,I=null,G=null,at.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:V,disable:ie,bindFramebuffer:de,drawBuffers:re,useProgram:ve,setBlending:Ue,setMaterial:we,setFlipSided:Se,setCullFace:et,setLineWidth:Ze,setPolygonOffset:Ke,setScissorTest:tt,activeTexture:ot,bindTexture:D,unbindTexture:nt,compressedTexImage2D:De,compressedTexImage3D:T,texImage2D:W,texImage3D:j,pixelStorei:be,getParameter:le,updateUBOMapping:xe,uniformBlockBinding:Te,texStorage2D:oe,texStorage3D:he,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:R,compressedTexSubImage3D:q,scissor:fe,viewport:ce,reset:Fe}}function Nx(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,f=new Set;let u;const A=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):ia("canvas")}function p(T,x,N){let R=1;const q=De(T);if((q.width>N||q.height>N)&&(R=N/Math.max(q.width,q.height)),R<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(R*q.width),he=Math.floor(R*q.height);u===void 0&&(u=g(oe,he));const W=x?g(oe,he):u;return W.width=oe,W.height=he,W.getContext("2d").drawImage(T,0,0,oe,he),Ne("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+oe+"x"+he+")."),W}else return"data"in T&&Ne("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function d(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,N,R,q,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he;R&&(he=e.get("EXT_texture_norm16"),he||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=x;if(x===n.RED&&(N===n.FLOAT&&(W=n.R32F),N===n.HALF_FLOAT&&(W=n.R16F),N===n.UNSIGNED_BYTE&&(W=n.R8),N===n.UNSIGNED_SHORT&&he&&(W=he.R16_EXT),N===n.SHORT&&he&&(W=he.R16_SNORM_EXT)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.R8UI),N===n.UNSIGNED_SHORT&&(W=n.R16UI),N===n.UNSIGNED_INT&&(W=n.R32UI),N===n.BYTE&&(W=n.R8I),N===n.SHORT&&(W=n.R16I),N===n.INT&&(W=n.R32I)),x===n.RG&&(N===n.FLOAT&&(W=n.RG32F),N===n.HALF_FLOAT&&(W=n.RG16F),N===n.UNSIGNED_BYTE&&(W=n.RG8),N===n.UNSIGNED_SHORT&&he&&(W=he.RG16_EXT),N===n.SHORT&&he&&(W=he.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RG8UI),N===n.UNSIGNED_SHORT&&(W=n.RG16UI),N===n.UNSIGNED_INT&&(W=n.RG32UI),N===n.BYTE&&(W=n.RG8I),N===n.SHORT&&(W=n.RG16I),N===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RGB8UI),N===n.UNSIGNED_SHORT&&(W=n.RGB16UI),N===n.UNSIGNED_INT&&(W=n.RGB32UI),N===n.BYTE&&(W=n.RGB8I),N===n.SHORT&&(W=n.RGB16I),N===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),N===n.UNSIGNED_INT&&(W=n.RGBA32UI),N===n.BYTE&&(W=n.RGBA8I),N===n.SHORT&&(W=n.RGBA16I),N===n.INT&&(W=n.RGBA32I)),x===n.RGB&&(N===n.UNSIGNED_SHORT&&he&&(W=he.RGB16_EXT),N===n.SHORT&&he&&(W=he.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),x===n.RGBA){const j=oe?na:je.getTransfer(q);N===n.FLOAT&&(W=n.RGBA32F),N===n.HALF_FLOAT&&(W=n.RGBA16F),N===n.UNSIGNED_BYTE&&(W=j===ht?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&he&&(W=he.RGBA16_EXT),N===n.SHORT&&he&&(W=he.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function w(T,x){let N;return T?x===null||x===Dn||x===Zr?N=n.DEPTH24_STENCIL8:x===mn?N=n.DEPTH32F_STENCIL8:x===$r&&(N=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Dn||x===Zr?N=n.DEPTH_COMPONENT24:x===mn?N=n.DEPTH_COMPONENT32F:x===$r&&(N=n.DEPTH_COMPONENT16),N}function M(T,x){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==kt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){const x=T.target;x.removeEventListener("dispose",b),C(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(T){const x=T.target;x.removeEventListener("dispose",_),F(x)}function C(T){const x=i.get(T);if(x.__webglInit===void 0)return;const N=T.source,R=A.get(N);if(R){const q=R[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&B(T),Object.keys(R).length===0&&A.delete(N)}i.remove(T)}function B(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const N=T.source,R=A.get(N);delete R[x.__cacheKey],a.memory.textures--}function F(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(x.__webglFramebuffer[R]))for(let q=0;q<x.__webglFramebuffer[R].length;q++)n.deleteFramebuffer(x.__webglFramebuffer[R][q]);else n.deleteFramebuffer(x.__webglFramebuffer[R]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[R])}else{if(Array.isArray(x.__webglFramebuffer))for(let R=0;R<x.__webglFramebuffer.length;R++)n.deleteFramebuffer(x.__webglFramebuffer[R]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let R=0;R<x.__webglColorRenderbuffer.length;R++)x.__webglColorRenderbuffer[R]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[R]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=T.textures;for(let R=0,q=N.length;R<q;R++){const oe=i.get(N[R]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(N[R])}i.remove(T)}let U=0;function Q(){U=0}function I(){return U}function G(T){U=T}function J(){const T=U;return T>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,T}function Y(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function te(T,x){const N=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const R=T.image;if(R===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(N,T,x);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function k(T,x){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){ie(N,T,x);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function $(T,x){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){ie(N,T,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function ne(T,x){const N=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){de(N,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const Ie={[$s]:n.REPEAT,[zn]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},Be={[It]:n.NEAREST,[Ld]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[ya]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},at={[Gd]:n.NEVER,[zd]:n.ALWAYS,[Od]:n.LESS,[Rl]:n.LEQUAL,[Qd]:n.EQUAL,[Il]:n.GEQUAL,[kd]:n.GREATER,[Hd]:n.NOTEQUAL};function ke(T,x){if(x.type===mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kt||x.magFilter===ya||x.magFilter===ds||x.magFilter===yi||x.minFilter===kt||x.minFilter===ya||x.minFilter===ds||x.minFilter===yi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Ie[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Ie[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Ie[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Be[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Be[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==ds&&x.minFilter!==yi||x.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Pe(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const R=x.source;let q=A.get(R);q===void 0&&(q={},A.set(R,q));const oe=Y(x);if(oe!==T.__cacheKey){q[oe]===void 0&&(q[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),q[oe].usedTimes++;const he=q[T.__cacheKey];he!==void 0&&(q[T.__cacheKey].usedTimes--,he.usedTimes===0&&B(x)),T.__cacheKey=oe,T.__webglTexture=q[oe].texture}return N}function K(T,x,N){return Math.floor(Math.floor(T/N)/x)}function V(T,x,N,R){const oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,N,R,x.data);else{oe.sort((be,fe)=>be.start-fe.start);let he=0;for(let be=1;be<oe.length;be++){const fe=oe[he],ce=oe[be],xe=fe.start+fe.count,Te=K(ce.start,x.width,4),Fe=K(fe.start,x.width,4);ce.start<=xe+1&&Te===Fe&&K(ce.start+ce.count-1,x.width,4)===Te?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++he,oe[he]=ce)}oe.length=he+1;const W=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let be=0,fe=oe.length;be<fe;be++){const ce=oe[be],xe=Math.floor(ce.start/4),Te=Math.ceil(ce.count/4),Fe=xe%x.width,P=Math.floor(xe/x.width),ae=Te,Z=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Fe,P,ae,Z,N,R,x.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,W),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function ie(T,x,N){let R=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(R=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(R=n.TEXTURE_3D);const q=Pe(T,x),oe=x.source;t.bindTexture(R,T.__webglTexture,n.TEXTURE0+N);const he=i.get(oe);if(oe.version!==he.__version||q===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Z=je.getPrimaries(je.workingColorSpace),ue=x.colorSpace===li?null:je.getPrimaries(x.colorSpace),se=x.colorSpace===li||Z===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let j=p(x.image,!1,r.maxTextureSize);j=nt(x,j);const le=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let fe=E(x.internalFormat,le,be,x.normalized,x.colorSpace,x.isVideoTexture);ke(R,x);let ce;const xe=x.mipmaps,Te=x.isVideoTexture!==!0,Fe=he.__version===void 0||q===!0,P=oe.dataReady,ae=M(x,j);if(x.isDepthTexture)fe=w(x.format===bi,x.type),Fe&&(Te?t.texStorage2D(n.TEXTURE_2D,1,fe,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,fe,j.width,j.height,0,le,be,null));else if(x.isDataTexture)if(xe.length>0){Te&&Fe&&t.texStorage2D(n.TEXTURE_2D,ae,fe,xe[0].width,xe[0].height);for(let Z=0,ue=xe.length;Z<ue;Z++)ce=xe[Z],Te?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(n.TEXTURE_2D,Z,fe,ce.width,ce.height,0,le,be,ce.data);x.generateMipmaps=!1}else Te?(Fe&&t.texStorage2D(n.TEXTURE_2D,ae,fe,j.width,j.height),P&&V(x,j,le,be)):t.texImage2D(n.TEXTURE_2D,0,fe,j.width,j.height,0,le,be,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Te&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,fe,xe[0].width,xe[0].height,j.depth);for(let Z=0,ue=xe.length;Z<ue;Z++)if(ce=xe[Z],x.format!==gn)if(le!==null)if(Te){if(P)if(x.layerUpdates.size>0){const se=zc(ce.width,ce.height,x.format,x.type);for(const ee of x.layerUpdates){const ge=ce.data.subarray(ee*se/ce.data.BYTES_PER_ELEMENT,(ee+1)*se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,ee,ce.width,ce.height,1,le,ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,j.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,fe,ce.width,ce.height,j.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,j.depth,le,be,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,fe,ce.width,ce.height,j.depth,0,le,be,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Te&&Fe&&t.texStorage2D(n.TEXTURE_2D,ae,fe,xe[0].width,xe[0].height);for(let Z=0,ue=xe.length;Z<ue;Z++)ce=xe[Z],x.format!==gn?le!==null?Te?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,fe,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(n.TEXTURE_2D,Z,fe,ce.width,ce.height,0,le,be,ce.data)}else if(x.isDataArrayTexture)if(Te){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,fe,j.width,j.height,j.depth),P)if(x.layerUpdates.size>0){const Z=zc(j.width,j.height,x.format,x.type);for(const ue of x.layerUpdates){const se=j.data.subarray(ue*Z/j.data.BYTES_PER_ELEMENT,(ue+1)*Z/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,j.width,j.height,1,le,be,se)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,be,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,j.width,j.height,j.depth,0,le,be,j.data);else if(x.isData3DTexture)Te?(Fe&&t.texStorage3D(n.TEXTURE_3D,ae,fe,j.width,j.height,j.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,be,j.data)):t.texImage3D(n.TEXTURE_3D,0,fe,j.width,j.height,j.depth,0,le,be,j.data);else if(x.isFramebufferTexture){if(Fe)if(Te)t.texStorage2D(n.TEXTURE_2D,ae,fe,j.width,j.height);else{let Z=j.width,ue=j.height;for(let se=0;se<ae;se++)t.texImage2D(n.TEXTURE_2D,se,fe,Z,ue,0,le,be,null),Z>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),j.parentNode!==Z){Z.appendChild(j),f.add(x),Z.onpaint=ue=>{const se=ue.changedElements;for(const ee of f)se.includes(ee.image)&&(ee.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const se=n.RGBA,ee=n.RGBA,ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,se,ee,ge,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Te&&Fe){const Z=De(xe[0]);t.texStorage2D(n.TEXTURE_2D,ae,fe,Z.width,Z.height)}for(let Z=0,ue=xe.length;Z<ue;Z++)ce=xe[Z],Te?P&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,le,be,ce):t.texImage2D(n.TEXTURE_2D,Z,fe,le,be,ce);x.generateMipmaps=!1}else if(Te){if(Fe){const Z=De(j);t.texStorage2D(n.TEXTURE_2D,ae,fe,Z.width,Z.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,be,j)}else t.texImage2D(n.TEXTURE_2D,0,fe,le,be,j);d(x)&&S(R),he.__version=oe.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function de(T,x,N){if(x.image.length!==6)return;const R=Pe(T,x),q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const oe=i.get(q);if(q.version!==oe.__version||R===!0){t.activeTexture(n.TEXTURE0+N);const he=je.getPrimaries(je.workingColorSpace),W=x.colorSpace===li?null:je.getPrimaries(x.colorSpace),j=x.colorSpace===li||he===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,be=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!le&&!be?fe[ee]=p(x.image[ee],!0,r.maxCubemapSize):fe[ee]=be?x.image[ee].image:x.image[ee],fe[ee]=nt(x,fe[ee]);const ce=fe[0],xe=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),Fe=E(x.internalFormat,xe,Te,x.normalized,x.colorSpace),P=x.isVideoTexture!==!0,ae=oe.__version===void 0||R===!0,Z=q.dataReady;let ue=M(x,ce);ke(n.TEXTURE_CUBE_MAP,x);let se;if(le){P&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Fe,ce.width,ce.height);for(let ee=0;ee<6;ee++){se=fe[ee].mipmaps;for(let ge=0;ge<se.length;ge++){const Ee=se[ge];x.format!==gn?xe!==null?P?Z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Fe,Ee.width,Ee.height,0,Ee.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,Ee.width,Ee.height,xe,Te,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Fe,Ee.width,Ee.height,0,xe,Te,Ee.data)}}}else{if(se=x.mipmaps,P&&ae){se.length>0&&ue++;const ee=De(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Fe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,xe,Te,fe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,fe[ee].width,fe[ee].height,0,xe,Te,fe[ee].data);for(let ge=0;ge<se.length;ge++){const st=se[ge].image[ee].image;P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,st.width,st.height,xe,Te,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Fe,st.width,st.height,0,xe,Te,st.data)}}else{P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe,Te,fe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Fe,xe,Te,fe[ee]);for(let ge=0;ge<se.length;ge++){const Ee=se[ge];P?Z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,xe,Te,Ee.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Fe,xe,Te,Ee.image[ee])}}}d(x)&&S(n.TEXTURE_CUBE_MAP),oe.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function re(T,x,N,R,q,oe){const he=s.convert(N.format,N.colorSpace),W=s.convert(N.type),j=E(N.internalFormat,he,W,N.normalized,N.colorSpace),le=i.get(x),be=i.get(N);if(be.__renderTarget=x,!le.__hasExternalTextures){const fe=Math.max(1,x.width>>oe),ce=Math.max(1,x.height>>oe);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,oe,j,fe,ce,x.depth,0,he,W,null):t.texImage2D(q,oe,j,fe,ce,0,he,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ot(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,q,be.__webglTexture,0,tt(x)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,R,q,be.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(T,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const R=x.depthTexture,q=R&&R.isDepthTexture?R.type:null,oe=w(x.stencilBuffer,q),he=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ot(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt(x),oe,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt(x),oe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,oe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,T)}else{const R=x.textures;for(let q=0;q<R.length;q++){const oe=R[q],he=s.convert(oe.format,oe.colorSpace),W=s.convert(oe.type),j=E(oe.internalFormat,he,W,oe.normalized,oe.colorSpace);ot(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt(x),j,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(T,x,N){const R=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),R){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",b)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),be=s.convert(x.depthTexture.type);let fe;x.depthTexture.format===Kn?fe=n.DEPTH_COMPONENT24:x.depthTexture.format===bi&&(fe=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,x.width,x.height,0,le,be,null)}}else te(x.depthTexture,0);const oe=q.__webglTexture,he=tt(x),W=R?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,j=x.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Kn)ot(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,W,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,j,W,oe,0);else if(x.depthTexture.format===bi)ot(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,W,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,j,W,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(T){const x=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const R=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),R){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,R.removeEventListener("dispose",q)};R.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=R}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let R=0;R<6;R++)Oe(x.__webglFramebuffer[R],T,R);else{const R=T.texture.mipmaps;R&&R.length>0?Oe(x.__webglFramebuffer[0],T,0):Oe(x.__webglFramebuffer,T,0)}else if(N){x.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[R]),x.__webglDepthbuffer[R]===void 0)x.__webglDepthbuffer[R]=n.createRenderbuffer(),ve(x.__webglDepthbuffer[R],T,!1);else{const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[R];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,oe)}}else{const R=T.texture.mipmaps;if(R&&R.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ve(x.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(T,x,N){const R=i.get(T);x!==void 0&&re(R.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Le(T)}function we(T){const x=T.texture,N=i.get(T),R=i.get(x);T.addEventListener("dispose",_);const q=T.textures,oe=T.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(R.__webglTexture===void 0&&(R.__webglTexture=n.createTexture()),R.__version=x.version,a.memory.textures++),oe){N.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[W]=[];for(let j=0;j<x.mipmaps.length;j++)N.__webglFramebuffer[W][j]=n.createFramebuffer()}else N.__webglFramebuffer[W]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)N.__webglFramebuffer[W]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(he)for(let W=0,j=q.length;W<j;W++){const le=i.get(q[W]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ot(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<q.length;W++){const j=q[W];N.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[W]);const le=s.convert(j.format,j.colorSpace),be=s.convert(j.type),fe=E(j.internalFormat,le,be,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),ce=tt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,N.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)re(N.__webglFramebuffer[W][j],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else re(N.__webglFramebuffer[W],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);d(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let W=0,j=q.length;W<j;W++){const le=q[W],be=i.get(le);let fe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,be.__webglTexture),ke(fe,le),re(N.__webglFramebuffer,T,le,n.COLOR_ATTACHMENT0+W,fe,0),d(le)&&S(fe)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,R.__webglTexture),ke(W,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)re(N.__webglFramebuffer[j],T,x,n.COLOR_ATTACHMENT0,W,j);else re(N.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,W,0);d(x)&&S(W),t.unbindTexture()}T.depthBuffer&&Le(T)}function Se(T){const x=T.textures;for(let N=0,R=x.length;N<R;N++){const q=x[N];if(d(q)){const oe=y(T),he=i.get(q).__webglTexture;t.bindTexture(oe,he),S(oe),t.unbindTexture()}}}const et=[],Ze=[];function Ke(T){if(T.samples>0){if(ot(T)===!1){const x=T.textures,N=T.width,R=T.height;let q=n.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(T),W=x.length>1;if(W)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const j=T.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let le=0;le<x.length;le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const be=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,N,R,0,0,N,R,q,n.NEAREST),l===!0&&(et.length=0,Ze.length=0,et.push(n.COLOR_ATTACHMENT0+le),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(et.push(oe),Ze.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,he.__webglColorRenderbuffer[le]);const be=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function tt(T){return Math.min(r.maxSamples,T.samples)}function ot(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function nt(T,x){const N=T.colorSpace,R=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==ta&&N!==li&&(je.getTransfer(N)===ht?(R!==gn||q!==nn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",N)),x}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=te,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=ne,this.rebindTextures=Ue,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gx(n,e){function t(i,r=li){let s;const a=je.getTransfer(r);if(i===nn)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tu)return n.BYTE;if(i===Bu)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===Du)return n.ALPHA;if(i===Pu)return n.RGB;if(i===gn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===yl)return n.RED;if(i===bl)return n.RED_INTEGER;if(i===Di)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Bl)return n.RGBA_INTEGER;if(i===Hs||i===zs||i===Vs||i===Ws)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===To||i===Bo||i===Ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Io||i===Do||i===Po||i===Lo||i===Fo||i===Zs||i===Uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Io||i===Do)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Po)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lo)return s.COMPRESSED_R11_EAC;if(i===Fo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zs)return s.COMPRESSED_RG11_EAC;if(i===Uo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===No||i===Go||i===Oo||i===Qo||i===ko||i===Ho||i===zo||i===Vo||i===Wo||i===Yo||i===Xo||i===Ko||i===qo||i===Jo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Go)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ko)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ho)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Zo||i===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===el||i===tl||i===js||i===nl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===el)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Hu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:Ox,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends Pi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,A=null,m=null;const g=typeof XRWebGLBinding<"u",p=new kx,d={},S=t.getContextAttributes();let y=null,E=null;const w=[],M=[],b=new ze;let _=null,C=null;const B=new un;B.viewport=new xt;const F=new un;F.viewport=new xt;const U=[B,F],Q=new JA;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let V=w[K];return V===void 0&&(V=new Pa,w[K]=V),V.getTargetRaySpace()},this.getControllerGrip=function(K){let V=w[K];return V===void 0&&(V=new Pa,w[K]=V),V.getGripSpace()},this.getHand=function(K){let V=w[K];return V===void 0&&(V=new Pa,w[K]=V),V.getHandSpace()};function J(K){const V=M.indexOf(K.inputSource);if(V===-1)return;const ie=w[V];ie!==void 0&&(ie.update(K.inputSource,K.frame,c||a),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",te);for(let K=0;K<w.length;K++){const V=M[K];V!==null&&(M[K]=null,w[K].disconnect(V))}I=null,G=null,p.reset();for(const K in d)delete d[K];if(e.setRenderTarget(y),A=null,u=null,f=null,r=null,E=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),C!==null){const K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:A},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,de=null,re=null;S.depth&&(re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?bi:Kn,de=S.stencil?Zr:Dn);const ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(ve),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new xn(u.textureWidth,u.textureHeight,{format:gn,type:nn,depthTexture:new ts(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};A=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),E=new xn(A.framebufferWidth,A.framebufferHeight,{format:gn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1,storeMultisampledDepthBuffer:A.ignoreDepthValues===!1,storeMultisampledStencilBuffer:A.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(K){for(let V=0;V<K.removed.length;V++){const ie=K.removed[V],de=M.indexOf(ie);de>=0&&(M[de]=null,w[de].disconnect(ie))}for(let V=0;V<K.added.length;V++){const ie=K.added[V];let de=M.indexOf(ie);if(de===-1){for(let ve=0;ve<w.length;ve++)if(ve>=M.length){M.push(ie),de=ve;break}else if(M[ve]===null){M[ve]=ie,de=ve;break}if(de===-1)break}const re=w[de];re&&re.connect(ie)}}const k=new O,$=new O;function ne(K,V,ie){k.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(ie.matrixWorld);const de=k.distanceTo($),re=V.projectionMatrix.elements,ve=ie.projectionMatrix.elements,Oe=re[14]/(re[10]-1),Le=re[14]/(re[10]+1),Ue=(re[9]+1)/re[5],we=(re[9]-1)/re[5],Se=(re[8]-1)/re[0],et=(ve[8]+1)/ve[0],Ze=Oe*Se,Ke=Oe*et,tt=de/(-Se+et),ot=tt*-Se;if(V.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ot),K.translateZ(tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),re[10]===-1)K.projectionMatrix.copy(V.projectionMatrix),K.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const D=Oe+tt,nt=Le+tt,De=Ze-ot,T=Ke+(de-ot),x=Ue*Le/nt*D,N=we*Le/nt*D;K.projectionMatrix.makePerspective(De,T,x,N,D,nt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ie(K,V){V===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(V.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let V=K.near,ie=K.far;p.texture!==null&&(p.depthNear>0&&(V=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),Q.near=F.near=B.near=V,Q.far=F.far=B.far=ie,(I!==Q.near||G!==Q.far)&&(r.updateRenderState({depthNear:Q.near,depthFar:Q.far}),I=Q.near,G=Q.far),Q.layers.mask=K.layers.mask|6,B.layers.mask=Q.layers.mask&-5,F.layers.mask=Q.layers.mask&-3;const de=K.parent,re=Q.cameras;Ie(Q,de);for(let ve=0;ve<re.length;ve++)Ie(re[ve],de);re.length===2?ne(Q,B,F):Q.projectionMatrix.copy(B.projectionMatrix),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),Be(K,Q,de)};function Be(K,V,ie){ie===null?K.matrix.copy(V.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(V.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(V.projectionMatrix),K.projectionMatrixInverse.copy(V.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=es*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(u===null&&A===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Q)},this.getCameraTexture=function(K){return d[K]};let at=null;function ke(K,V){if(h=V.getViewerPose(c||a),m=V,h!==null){const ie=h.views;A!==null&&(e.setRenderTargetFramebuffer(E,A.framebuffer),e.setRenderTarget(E));let de=!1;ie.length!==Q.cameras.length&&(Q.cameras.length=0,de=!0);for(let Le=0;Le<ie.length;Le++){const Ue=ie[Le];let we=null;if(A!==null)we=A.getViewport(Ue);else{const et=f.getViewSubImage(u,Ue);we=et.viewport,Le===0&&(e.setRenderTargetTextures(E,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(E))}let Se=U[Le];Se===void 0&&(Se=new un,Se.layers.enable(Le),Se.viewport=new xt,U[Le]=Se),Se.matrix.fromArray(Ue.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ue.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(we.x,we.y,we.width,we.height),Le===0&&(Q.matrix.copy(Se.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),de===!0&&Q.cameras.push(Se)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const Le=f.getDepthInformation(ie[0]);Le&&Le.isValid&&Le.texture&&p.init(Le,r.renderState)}if(re&&re.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let Le=0;Le<ie.length;Le++){const Ue=ie[Le].camera;if(Ue){let we=d[Ue];we||(we=new Hu,d[Ue]=we);const Se=f.getCameraImage(Ue);we.sourceTexture=Se}}}}for(let ie=0;ie<w.length;ie++){const de=M[ie],re=w[ie];de!==null&&re!==void 0&&re.update(de,V,c||a)}at&&at(K,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),m=null}const Pe=new qu;Pe.setAnimationLoop(ke),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const zx=new ft,nf=new Qe;nf.set(-1,0,0,0,1,0,0,0,1);function Vx(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Vu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,S,y,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&A(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,S,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Jt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Jt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=e.get(d),y=S.envMap,E=S.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(E)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(nf),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function A(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wx(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const M=w.program;i.uniformBlockBinding(E,M)}function c(E,w){let M=r[E.id];M===void 0&&(p(E),M=h(E),r[E.id]=M,E.addEventListener("dispose",S));const b=w.program;i.updateUBOMapping(E,b);const _=e.render.frame;s[E.id]!==_&&(u(E),s[E.id]=_)}function h(E){const w=f();E.__bindingPointIndex=w;const M=n.createBuffer(),b=E.__size,_=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const w=r[E.id],M=E.uniforms,b=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let _=0,C=M.length;_<C;_++){const B=M[_];if(Array.isArray(B))for(let F=0,U=B.length;F<U;F++)A(B[F],_,F,b);else A(B,_,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function A(E,w,M,b){if(g(E,w,M,b)===!0){const _=E.__offset,C=E.value;if(Array.isArray(C)){let B=0;for(let F=0;F<C.length;F++){const U=C[F],Q=d(U);m(U,E.__data,B),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,E.__data)}}function m(E,w,M){typeof E=="number"||typeof E=="boolean"?w[0]=E:E.isMatrix3?(w[0]=E.elements[0],w[1]=E.elements[1],w[2]=E.elements[2],w[3]=0,w[4]=E.elements[3],w[5]=E.elements[4],w[6]=E.elements[5],w[7]=0,w[8]=E.elements[6],w[9]=E.elements[7],w[10]=E.elements[8],w[11]=0):ArrayBuffer.isView(E)?w.set(new E.constructor(E.buffer,E.byteOffset,w.length)):E.toArray(w,M)}function g(E,w,M,b){const _=E.value,C=w+"_"+M;if(b[C]===void 0)return typeof _=="number"||typeof _=="boolean"?b[C]=_:ArrayBuffer.isView(_)?b[C]=_.slice():b[C]=_.clone(),!0;{const B=b[C];if(typeof _=="number"||typeof _=="boolean"){if(B!==_)return b[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(B.equals(_)===!1)return B.copy(_),!0}}return!1}function p(E){const w=E.uniforms;let M=0;const b=16;for(let C=0,B=w.length;C<B;C++){const F=Array.isArray(w[C])?w[C]:[w[C]];for(let U=0,Q=F.length;U<Q;U++){const I=F[U],G=Array.isArray(I.value)?I.value:[I.value];for(let J=0,Y=G.length;J<Y;J++){const te=G[J],k=d(te),$=M%b,ne=$%k.boundary,Ie=$+ne;M+=ne,Ie!==0&&b-Ie<k.storage&&(M+=b-Ie),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=k.storage}}}const _=M%b;return _>0&&(M+=b-_),E.__size=M,E.__cache={},this}function d(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(w.boundary=16,w.storage=E.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",E),w}function S(E){const w=E.target;w.removeEventListener("dispose",S);const M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function y(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const Yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function Xx(){return Sn===null&&(Sn=new Qu(Yx,16,16,Di,Pn),Sn.name="DFG_LUT",Sn.minFilter=kt,Sn.magFilter=kt,Sn.wrapS=zn,Sn.wrapT=zn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class Kx{constructor(e={}){const{canvas:t=Yd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:A=nn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=A,p=new Set([Bl,Tl,bl]),d=new Set([nn,Dn,$r,Zr,wl,Cl]),S=new Uint32Array(4),y=new Int32Array(4),E=new O;let w=null,M=null;const b=[],_=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let F=!1,U=null,Q=null,I=null,G=null;this._outputColorSpace=jt;let J=0,Y=0,te=null,k=-1,$=null;const ne=new xt,Ie=new xt;let Be=null;const at=new $e(0);let ke=0,Pe=t.width,K=t.height,V=1,ie=null,de=null;const re=new xt(0,0,Pe,K),ve=new xt(0,0,Pe,K);let Oe=!1;const Le=new Ul;let Ue=!1,we=!1;const Se=new ft,et=new O,Ze=new xt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ot(){return te===null?V:1}let D=i;function nt(v,L){return t.getContext(v,L)}let De,T,x,N,R,q,oe,he,W,j,le,be,fe,ce,xe,Te,Fe,P,ae,Z,ue,se,ee;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),D===null){const L="webgl2";if(D=nt(L,v),D===null)throw nt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ge()}catch(v){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),rt("WebGLRenderer: "+v.message),v}function ge(){De=new X0(D),De.init(),ue=new Gx(D,De),T=new N0(D,De,e,ue),x=new Ux(D,De),T.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),Q=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),N=new J0(D),R=new vx,q=new Nx(D,De,x,R,T,ue,N),oe=new Y0(B),he=new ZA(D),se=new F0(D,he),W=new K0(D,he,N,se),j=new Z0(D,W,he,se,N),P=new $0(D,T,q),xe=new G0(R),le=new Mx(B,oe,De,T,se,xe),be=new Vx(B,R),fe=new wx,ce=new Rx(De),Fe=new L0(B,oe,x,j,m,l),Te=new Fx(B,j,T),ee=new Wx(D,N,T,x),ae=new U0(D,De,N),Z=new q0(D,De,N),N.programs=le.programs,B.capabilities=T,B.extensions=De,B.properties=R,B.renderLists=fe,B.shadowMap=Te,B.state=x,B.info=N}g!==nn&&(C=new eg(g,t.width,t.height,o,r,s));const Ee=new Hx(B,D);this.xr=Ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=De.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=De.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(Pe,K,!1))},this.getSize=function(v){return v.set(Pe,K)},this.setSize=function(v,L,X=!0){if(Ee.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=v,K=L,t.width=Math.floor(v*V),t.height=Math.floor(L*V),X===!0&&(t.style.width=v+"px",t.style.height=L+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(Pe*V,K*V).floor()},this.setDrawingBufferSize=function(v,L,X){Pe=v,K=L,V=X,t.width=Math.floor(v*X),t.height=Math.floor(L*X),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(g===nn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ne)},this.getViewport=function(v){return v.copy(re)},this.setViewport=function(v,L,X,H){v.isVector4?re.set(v.x,v.y,v.z,v.w):re.set(v,L,X,H),x.viewport(ne.copy(re).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(ve)},this.setScissor=function(v,L,X,H){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,L,X,H),x.scissor(Ie.copy(ve).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(v){x.setScissorTest(Oe=v)},this.setOpaqueSort=function(v){ie=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,X=!0){let H=0;if(v){let z=!1;if(te!==null){const me=te.texture.format;z=p.has(me)}if(z){const me=te.texture.type,Me=d.has(me),pe=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Re=pe.r,We=pe.g,qe=pe.b;Me?(S[0]=Re,S[1]=We,S[2]=qe,S[3]=Ce,D.clearBufferuiv(D.COLOR,0,S)):(y[0]=Re,y[1]=We,y[2]=qe,y[3]=Ce,D.clearBufferiv(D.COLOR,0,y))}else H|=D.COLOR_BUFFER_BIT}L&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Fe.dispose(),fe.dispose(),ce.dispose(),R.dispose(),oe.dispose(),j.dispose(),se.dispose(),ee.dispose(),le.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",tc),Ee.removeEventListener("sessionend",nc),mi.stop()};function st(v){v.preventDefault(),gc("WebGLRenderer: Context Lost."),F=!0}function Ve(){gc("WebGLRenderer: Context Restored."),F=!1;const v=N.autoReset,L=Te.enabled,X=Te.autoUpdate,H=Te.needsUpdate,z=Te.type;ge(),N.autoReset=v,Te.enabled=L,Te.autoUpdate=X,Te.needsUpdate=H,Te.type=z}function Lt(v){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ft(v){const L=v.target;L.removeEventListener("dispose",Ft),hs(L)}function hs(v){Ni(v),R.remove(v)}function Ni(v){const L=R.get(v).programs;L!==void 0&&(L.forEach(function(X){le.releaseProgram(X)}),v.isShaderMaterial&&le.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,X,H,z,me){L===null&&(L=Ke);const Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=ad(v,L,X,H,z);x.setMaterial(H,Me);let Ce=X.index,Re=1;if(H.wireframe===!0){if(Ce=W.getWireframeAttribute(X),Ce===void 0)return;Re=2}const We=X.drawRange,qe=X.attributes.position;let ye=We.start*Re,lt=(We.start+We.count)*Re;me!==null&&(ye=Math.max(ye,me.start*Re),lt=Math.min(lt,(me.start+me.count)*Re)),Ce!==null?(ye=Math.max(ye,0),lt=Math.min(lt,Ce.count)):qe!=null&&(ye=Math.max(ye,0),lt=Math.min(lt,qe.count));const Mt=lt-ye;if(Mt<0||Mt===1/0)return;se.setup(z,H,pe,X,Ce);let gt,dt=ae;if(Ce!==null&&(gt=he.get(Ce),dt=Z,dt.setIndex(gt)),z.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*ot()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(z.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),x.setLineWidth(Ut*ot()),z.isLineSegments?dt.setMode(D.LINES):z.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else z.isPoints?dt.setMode(D.POINTS):z.isSprite&&dt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(De.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ut=z._multiDrawStarts,_e=z._multiDrawCounts,zt=z._multiDrawCount,it=Ce?he.get(Ce).bytesPerElement:1,an=R.get(H).currentProgram.getUniforms();for(let Mn=0;Mn<zt;Mn++)an.setValue(D,"_gl_DrawID",Mn),dt.render(Ut[Mn]/it,_e[Mn])}else if(z.isInstancedMesh)dt.renderInstances(ye,Mt,z.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Ut);dt.renderInstances(ye,Mt,_e)}else dt.render(ye,Mt)};function br(v,L,X,H){U!==null&&v.isNodeMaterial&&U.setObject(H,v),Ue===!0&&xe.setState(v,X,!1),v.transparent===!0&&v.side===kn&&v.forceSinglePass===!1?(v.side=Jt,v.needsUpdate=!0,fs(v,L,H),v.side=Ri,v.needsUpdate=!0,fs(v,L,H),v.side=kn):fs(v,L,H)}this.compile=function(v,L,X=null){X===null&&(X=v),U!==null&&U.renderStart(v,L,X),M=ce.get(X),M.init(L),_.push(M),X.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),v!==X&&v.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),we=this.localClippingEnabled,Ue=xe.init(this.clippingPlanes,we),Ue===!0&&xe.setGlobalState(this.clippingPlanes,L),U!==null&&Te.render(M.state.shadowsArray,X,L);const H=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const pe=me[Me];br(pe,X,L,z),H.add(pe)}else br(me,X,L,z),H.add(me)}),M=_.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(v,L,X=null){const H=this.compile(v,L,X);return new Promise(z=>{function me(){if(H.forEach(function(Me){const Ce=R.get(Me).currentProgram;(Ce===void 0||Ce.isReady())&&H.delete(Me)}),H.size===0){z(v);return}setTimeout(me,10)}De.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Gi=null;function va(v){Gi&&Gi(v)}function tc(){mi.stop()}function nc(){mi.start()}const mi=new qu;mi.setAnimationLoop(va),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(v){Gi=v,Ee.setAnimationLoop(v),v===null?mi.stop():mi.start()},Ee.addEventListener("sessionstart",tc),Ee.addEventListener("sessionend",nc),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;U!==null&&U.renderStart(v,L);const X=Ee.enabled===!0&&Ee.isPresenting===!0,H=C!==null&&(te===null||X)&&C.begin(B,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(L),L=Ee.getCamera()),v.isScene===!0&&v.onBeforeRender(B,v,L,te),M=ce.get(v,_.length),M.init(L),M.state.textureUnits=q.getTextureUnits(),_.push(M),Se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Le.setFromProjectionMatrix(Se,bn,L.reversedDepth),we=this.localClippingEnabled,Ue=xe.init(this.clippingPlanes,we),w=fe.get(v,b.length),w.init(),b.push(w),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=B.xr.getDepthSensingMesh();Me!==null&&Sa(Me,L,-1/0,B.sortObjects)}Sa(v,L,0,B.sortObjects),w.finish(),U!==null&&U.updateLights(M.state.lightsArray),B.sortObjects===!0&&w.sort(ie,de),tt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,tt&&Fe.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ue===!0&&xe.beginShadows();const z=M.state.shadowsArray;if(Te.render(z,v,L),Ue===!0&&xe.endShadows(),(H&&C.hasRenderPass())===!1){const Me=w.opaque,pe=w.transmissive;if(M.setupLights(),L.isArrayCamera){const Ce=L.cameras;if(pe.length>0)for(let Re=0,We=Ce.length;Re<We;Re++){const qe=Ce[Re];rc(Me,pe,v,qe)}tt&&Fe.render(v);for(let Re=0,We=Ce.length;Re<We;Re++){const qe=Ce[Re];ic(w,v,qe,qe.viewport)}}else pe.length>0&&rc(Me,pe,v,L),tt&&Fe.render(v),ic(w,v,L)}te!==null&&Y===0&&(q.updateMultisampleRenderTarget(te),q.updateRenderTargetMipmap(te)),H&&C.end(B),v.isScene===!0&&v.onAfterRender(B,v,L),se.resetDefaultState(),k=-1,$=null,_.pop(),_.length>0?(M=_[_.length-1],q.setTextureUnits(M.state.textureUnits),Ue===!0&&xe.setGlobalState(B.clippingPlanes,M.state.camera)):M=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,U!==null&&U.renderEnd()};function Sa(v,L,X,H){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)M.pushLightProbeGrid(v);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Le)){H&&Ze.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Se);const Me=j.update(v),pe=v.material;pe.visible&&w.push(v,Me,pe,X,Ze.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Le))){const Me=j.update(v),pe=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ze.copy(v.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(v.matrixWorld).applyMatrix4(Se)),Array.isArray(pe)){const Ce=Me.groups;for(let Re=0,We=Ce.length;Re<We;Re++){const qe=Ce[Re],ye=pe[qe.materialIndex];ye&&ye.visible&&w.push(v,Me,ye,X,Ze.z,qe,L)}}else pe.visible&&w.push(v,Me,pe,X,Ze.z,null,L)}}const me=v.children;for(let Me=0,pe=me.length;Me<pe;Me++)Sa(me[Me],L,X,H)}function ic(v,L,X,H){const{opaque:z,transmissive:me,transparent:Me}=v;M.setupLightsView(X),Ue===!0&&xe.setGlobalState(B.clippingPlanes,X),H&&x.viewport(ne.copy(H)),z.length>0&&us(z,L,X),me.length>0&&us(me,L,X),Me.length>0&&us(Me,L,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function rc(v,L,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){const ye=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new xn(1,1,{generateMipmaps:!0,type:ye?Pn:nn,minFilter:yi,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const me=M.state.transmissionRenderTarget[H.id],Me=H.viewport||ne;me.setSize(Me.z*B.transmissionResolutionScale,Me.w*B.transmissionResolutionScale);const pe=B.getRenderTarget(),Ce=B.getActiveCubeFace(),Re=B.getActiveMipmapLevel();B.setRenderTarget(me),B.getClearColor(at),ke=B.getClearAlpha(),ke<1&&B.setClearColor(16777215,.5),B.clear(),tt&&Fe.render(X);const We=B.toneMapping;B.toneMapping=Rn;const qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),Ue===!0&&xe.setGlobalState(B.clippingPlanes,H),us(v,X,H),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),De.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let lt=0,Mt=L.length;lt<Mt;lt++){const gt=L[lt],{object:dt,geometry:Ut,material:_e,group:zt}=gt;if(_e.side===kn&&dt.layers.test(H.layers)){const it=_e.side;_e.side=Jt,_e.needsUpdate=!0,sc(dt,X,H,Ut,_e,zt),_e.side=it,_e.needsUpdate=!0,ye=!0}}ye===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}B.setRenderTarget(pe,Ce,Re),B.setClearColor(at,ke),qe!==void 0&&(H.viewport=qe),B.toneMapping=We}function us(v,L,X){const H=L.isScene===!0?L.overrideMaterial:null;for(let z=0,me=v.length;z<me;z++){const Me=v[z],{object:pe,geometry:Ce,group:Re}=Me;let We=Me.material;We.allowOverride===!0&&H!==null&&(We=H),pe.layers.test(X.layers)&&sc(pe,L,X,Ce,We,Re)}}function sc(v,L,X,H,z,me){U!==null&&z.isNodeMaterial&&U.setObject(v,z),v.onBeforeRender(B,L,X,H,z,me),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(B,L,X,H,v,me),z.transparent===!0&&z.side===kn&&z.forceSinglePass===!1?(z.side=Jt,z.needsUpdate=!0,B.renderBufferDirect(X,L,H,z,v,me),z.side=Ri,z.needsUpdate=!0,B.renderBufferDirect(X,L,H,z,v,me),z.side=kn):B.renderBufferDirect(X,L,H,z,v,me),v.onAfterRender(B,L,X,H,z,me)}function fs(v,L,X){L.isScene!==!0&&(L=Ke);const H=R.get(v),z=M.state.lights,me=M.state.shadowsArray,Me=z.state.version,pe=le.getParameters(v,z.state,me,L,X,M.state.lightProbeGridArray),Ce=le.getProgramCacheKey(pe);let Re=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,H.fog=L.fog;const We=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=oe.get(v.envMap||H.environment,We),H.envMapRotation=H.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",Ft),Re=new Map,H.programs=Re);let qe=Re.get(Ce);if(qe!==void 0){if(H.currentProgram===qe&&H.lightsStateVersion===Me)return oc(v,pe),qe}else pe.uniforms=le.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,X,pe),v.onBeforeCompile(pe,B),qe=le.acquireProgram(pe,Ce),Re.set(Ce,qe),H.uniforms=pe.uniforms;const ye=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=xe.uniform),oc(v,pe),H.needsLights=ld(v),H.lightsStateVersion=Me,H.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.sunLights.value=z.state.sun,ye.sunLightShadows.value=z.state.sunShadow,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.sunShadowMatrix.value=z.state.sunShadowMatrix,ye.sunShadowCascade.value=z.state.sunShadowCascade,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=qe,H.uniformsList=null,qe}function ac(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Ys.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function oc(v,L){const X=R.get(v);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function sd(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;E.setFromMatrixPosition(L.matrixWorld);for(let X=0,H=v.length;X<H;X++){const z=v[X];if(z.texture!==null&&z.boundingBox.containsPoint(E))return z}return null}function ad(v,L,X,H,z){L.isScene!==!0&&(L=Ke),q.resetTextureUnits();const me=L.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?L.environment:null,pe=te===null?B.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=oe.get(H.envMap||Me,Ce),We=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let gt=Rn;H.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(gt=B.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=dt!==void 0?dt.length:0,_e=R.get(H),zt=M.state.lights;if(Ue===!0&&(we===!0||v!==$)){const pt=v===$&&H.id===k;xe.setState(H,v,pt)}let it=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==zt.state.version||_e.outputColorSpace!==pe||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==Re||H.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==xe.numPlanes||_e.numIntersection!==xe.numIntersection)||_e.vertexAlphas!==We||_e.vertexTangents!==qe||_e.morphTargets!==ye||_e.morphNormals!==lt||_e.morphColors!==Mt||_e.toneMapping!==gt||_e.morphTargetsCount!==Ut||!!_e.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,_e.__version=H.version);let an=_e.currentProgram;it===!0&&(an=fs(H,L,z),U&&H.isNodeMaterial&&U.onUpdateProgram(H,an,_e));let Mn=!1,$n=!1,Oi=!1;const ut=an.getUniforms(),Et=_e.uniforms;if(x.useProgram(an.program)&&(Mn=!0,$n=!0,Oi=!0),H.id!==k&&(k=H.id,$n=!0),_e.needsLights){const pt=sd(M.state.lightProbeGridArray,z);_e.lightProbeGrid!==pt&&(_e.lightProbeGrid=pt,$n=!0)}if(Mn||$!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ut.setValue(D,"projectionMatrix",v.projectionMatrix),ut.setValue(D,"viewMatrix",v.matrixWorldInverse);const jn=ut.map.cameraPosition;jn!==void 0&&jn.setValue(D,et.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,$n=!0,Oi=!0)}if(_e.needsLights&&(zt.state.sunShadowMap.length>0&&ut.setValue(D,"sunShadowMap",zt.state.sunShadowMap,q),zt.state.directionalShadowMap.length>0&&ut.setValue(D,"directionalShadowMap",zt.state.directionalShadowMap,q),zt.state.spotShadowMap.length>0&&ut.setValue(D,"spotShadowMap",zt.state.spotShadowMap,q),zt.state.pointShadowMap.length>0&&ut.setValue(D,"pointShadowMap",zt.state.pointShadowMap,q)),z.isSkinnedMesh){ut.setOptional(D,z,"bindMatrix"),ut.setOptional(D,z,"bindMatrixInverse");const pt=z.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ut.setValue(D,"boneTexture",pt.boneTexture,q))}z.isBatchedMesh&&(ut.setOptional(D,z,"batchingTexture"),ut.setValue(D,"batchingTexture",z._matricesTexture,q),ut.setOptional(D,z,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",z._indirectTexture,q),ut.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",z._colorsTexture,q));const Zn=X.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&P.update(z,X,an),($n||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,ut.setValue(D,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&L.environment!==null&&(Et.envMapIntensity.value=L.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Xx()),$n){if(ut.setValue(D,"toneMappingExposure",B.toneMappingExposure),_e.needsLights&&od(Et,Oi),me&&H.fog===!0&&be.refreshFogUniforms(Et,me),be.refreshMaterialUniforms(Et,H,V,K,M.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){const pt=_e.lightProbeGrid;Et.probesSH.value=pt.texture,Et.probesMin.value.copy(pt.boundingBox.min),Et.probesMax.value.copy(pt.boundingBox.max),Et.probesResolution.value.copy(pt.resolution)}Ys.upload(D,ac(_e),Et,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ys.upload(D,ac(_e),Et,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(D,"center",z.center),ut.setValue(D,"modelViewMatrix",z.modelViewMatrix),ut.setValue(D,"normalMatrix",z.normalMatrix),ut.setValue(D,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){const pt=H.uniformsGroups;for(let jn=0,Qi=pt.length;jn<Qi;jn++){const cc=pt[jn];ee.update(cc,an),ee.bind(cc,an)}}return an}function od(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function ld(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,L,X){const H=R.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),R.get(v.texture).__webglTexture=L,R.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const X=R.get(v);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,X=0){te=v,J=L,Y=X;let H=null,z=!1,me=!1;if(v){const pe=R.get(v);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),ne.copy(v.viewport),Ie.copy(v.scissor),Be=v.scissorTest,x.viewport(ne),x.scissor(Ie),x.setScissorTest(Be),k=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(pe.__hasExternalTextures)q.rebindTextures(v,R.get(v.texture).__webglTexture,R.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const We=v.depthTexture;if(pe.__boundDepthTexture!==We){if(We!==null&&R.has(We)&&(v.width!==We.image.width||v.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(me=!0);const Re=R.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?H=Re[L][X]:H=Re[L],z=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?H=R.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[X]:H=Re,ne.copy(v.viewport),Ie.copy(v.scissor),Be=v.scissorTest}else ne.copy(re).multiplyScalar(V).floor(),Ie.copy(ve).multiplyScalar(V).floor(),Be=Oe;if(X!==0&&(H=Q),x.bindFramebuffer(D.FRAMEBUFFER,H)&&x.drawBuffers(v,H),x.viewport(ne),x.scissor(Ie),x.setScissorTest(Be),z){const pe=R.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,X)}else if(me){const pe=L;for(let Ce=0;Ce<v.textures.length;Ce++){const Re=R.get(v.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Re.__webglTexture,X,pe)}}else if(v!==null&&X!==0){const pe=R.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,X)}k=-1};function lc(v){const L=R.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=T.textureFormatReadable(v.format),L.__typeReadable=T.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,X,H,z,me,Me,pe=0){if(!(v&&v.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=R.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){x.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Re=v.textures[pe],We=Re.format,qe=Re.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe);const ye=lc(Re);if(ye.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-H&&X>=0&&X<=v.height-z&&D.readPixels(L,X,H,z,ue.convert(We),ue.convert(qe),me)}finally{const Re=te!==null?R.get(te).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,L,X,H,z,me,Me,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=R.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(L>=0&&L<=v.width-H&&X>=0&&X<=v.height-z){x.bindFramebuffer(D.FRAMEBUFFER,Ce);const Re=v.textures[pe],We=Re.format,qe=Re.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe);const ye=lc(Re);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(L,X,H,z,ue.convert(We),ue.convert(qe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Mt=te!==null?R.get(te).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Mt);const gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xd(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(lt),D.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,X=0){const H=Math.pow(2,-X),z=Math.floor(v.image.width*H),me=Math.floor(v.image.height*H),Me=L!==null?L.x:0,pe=L!==null?L.y:0;q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Me,pe,z,me),x.unbindTexture()},this.copyTextureToTexture=function(v,L,X=null,H=null,z=0,me=0){let Me,pe,Ce,Re,We,qe,ye,lt,Mt;const gt=v.isCompressedTexture?v.mipmaps[me]:v.image;if(X!==null)Me=X.max.x-X.min.x,pe=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,We=X.min.y,qe=X.isBox3?X.min.z:0;else{const Et=Math.pow(2,-z);Me=Math.floor(gt.width*Et),pe=Math.floor(gt.height*Et),v.isDataArrayTexture?Ce=gt.depth:v.isData3DTexture?Ce=Math.floor(gt.depth*Et):Ce=1,Re=0,We=0,qe=0}H!==null?(ye=H.x,lt=H.y,Mt=H.z):(ye=0,lt=0,Mt=0);const dt=ue.convert(L.format),Ut=ue.convert(L.type);let _e;L.isData3DTexture?(q.setTexture3D(L,0),_e=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(q.setTexture2DArray(L,0),_e=D.TEXTURE_2D_ARRAY):(q.setTexture2D(L,0),_e=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const zt=x.getParameter(D.UNPACK_ROW_LENGTH),it=x.getParameter(D.UNPACK_IMAGE_HEIGHT),an=x.getParameter(D.UNPACK_SKIP_PIXELS),Mn=x.getParameter(D.UNPACK_SKIP_ROWS),$n=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(D.UNPACK_SKIP_ROWS,We),x.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const Oi=v.isDataArrayTexture||v.isData3DTexture,ut=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Et=R.get(v),Zn=R.get(L),pt=R.get(Et.__renderTarget),jn=R.get(Zn.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,pt.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qi=0;Qi<Ce;Qi++)Oi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,R.get(v).__webglTexture,z,qe+Qi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,R.get(L).__webglTexture,me,Mt+Qi)),D.blitFramebuffer(Re,We,Me,pe,ye,lt,Me,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||R.has(v)){const Et=R.get(v),Zn=R.get(L);x.bindFramebuffer(D.READ_FRAMEBUFFER,I),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let pt=0;pt<Ce;pt++)Oi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,z,qe+pt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,z),ut?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zn.__webglTexture,me,Mt+pt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zn.__webglTexture,me),z!==0?D.blitFramebuffer(Re,We,Me,pe,ye,lt,Me,pe,D.COLOR_BUFFER_BIT,D.NEAREST):ut?D.copyTexSubImage3D(_e,me,ye,lt,Mt+pt,Re,We,Me,pe):D.copyTexSubImage2D(_e,me,ye,lt,Re,We,Me,pe);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ut?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(_e,me,ye,lt,Mt,Me,pe,Ce,dt,Ut,gt.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,me,ye,lt,Mt,Me,pe,Ce,dt,gt.data):D.texSubImage3D(_e,me,ye,lt,Mt,Me,pe,Ce,dt,Ut,gt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,ye,lt,Me,pe,dt,Ut,gt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,ye,lt,gt.width,gt.height,dt,gt.data):D.texSubImage2D(D.TEXTURE_2D,me,ye,lt,Me,pe,dt,Ut,gt);x.pixelStorei(D.UNPACK_ROW_LENGTH,zt),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),x.pixelStorei(D.UNPACK_SKIP_PIXELS,an),x.pixelStorei(D.UNPACK_SKIP_ROWS,Mn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,$n),me===0&&L.generateMipmaps&&D.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(v){R.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){J=0,Y=0,te=null,x.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Ur=new O;function cn(n,e,t,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ur.copy(e),Ur[i]=0,Ur.normalize();const c=.5*a/(a+o),h=1-Ur.angleTo(n)/l;return Math.sign(Ur[t])===1?h*c:o/(a+o)+c+c*(1-h)}class aa extends di{constructor(e=1,t=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new O,c=new O,h=new O(e,t,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,u=this.attributes.normal.array,A=this.attributes.uv.array,m=f.length/6,g=new O,p=.5/a;for(let d=0,S=0;d<f.length;d+=3,S+=2)switch(l.fromArray(f,d),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[d+0]=h.x*Math.sign(l.x)+c.x*s,f[d+1]=h.y*Math.sign(l.y)+c.y*s,f[d+2]=h.z*Math.sign(l.z)+c.z*s,u[d+0]=c.x,u[d+1]=c.y,u[d+2]=c.z,Math.floor(d/m)){case 0:g.set(1,0,0),A[S+0]=cn(g,c,"z","y",s,i),A[S+1]=1-cn(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),A[S+0]=1-cn(g,c,"z","y",s,i),A[S+1]=1-cn(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),A[S+0]=1-cn(g,c,"x","z",s,e),A[S+1]=cn(g,c,"z","x",s,i);break;case 3:g.set(0,-1,0),A[S+0]=1-cn(g,c,"x","z",s,e),A[S+1]=1-cn(g,c,"z","x",s,i);break;case 4:g.set(0,0,1),A[S+0]=1-cn(g,c,"x","y",s,e),A[S+1]=1-cn(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),A[S+0]=cn(g,c,"x","y",s,e),A[S+1]=1-cn(g,c,"y","x",s,t);break}}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.segments,e.radius)}}const qx={"chromium/line_normal":[0,182],"chromium/line_normal_cj":[1,182],"apple/line_normal":[2,183],"apple/line":[3,183],"apple/line_cj":[4,183],"chromium/char":[5,148],"apple/char":[6,149],"gecko/line":[7,196],"gecko/east_asian_width":[8,38],"chromium/script":[9,80]},Jx=248,$x="CC0AgAEAogEBgQEAowERLQCkAQBNADwABQAiACUABQA8AA8ApQEABQAiAE4ApgEATgCnAQlpAU4CBQBNAAUZEwAPACIAqAECBRkTAA8AIACpAQAFBS0AqgEZLQBqAEUAJQAiAFUAIgAFAQcAEAAwAC4ABQCAAQAQAAUARgBVAQcAVgAFAAcAqwEBBwAwADQCBwBFFhMABx4TAAfAAxMCBQCsAQkFADAAVgIwAFYAMAEFAAcFBQATAAcAMAEHAAUABwAFAFYEEwQFAQETBQFXAE8AJgBXACYAVwAmAFcBJgBPAiYAGAAmAE8AGACtAQ4YAiYGGAEmABgBJg8YAGsBGABrCBgArgEHGAAmAhgBWACvAQNYDCYHFAEAAxQATgAUAwAAFAAFABQABQIUAAAAFAAAExQAAD4UDQEPFIIBNQE6AU8COqUBNQAAJQEBAC8BALABAFkBAAEBAD0AACwEAFkABAABAQQAAQEEADYABAcAGjEDAAMxAQEKAASCAQBsAgoCbQCxAQCDAQEKCh0AbgCyAQFQAG4fCgBvCQoKWgkdCUcAbQFHAgoAWmIKAFAACgYdAGwACgUdAQoBHQAKAx0BCglHEwoAAACzAQAKAB0dChodAQAyCiUBCgQAAQ0ACUcgCggdAwoAgwEAUAAKAQAAHQG0ARUBAwQAAQgEAAECBAABBAQBAA4BAAAYCgIdAQAACgAACgoEAB4KAEgBggEEAACEAQcdKQoXHQBsHB0CBAAGEAEkEQAEAAYABAABAgYHBAMGACkBBgABASYBGAIEBxEBAQEEAQkJDgcBBxEAAQAEAQYAAAcBAQABAQEAAQETEQAABhEAAAARAgADEQEAAAQAAQAEAQYDBAEAAQYBAAEGACkAAQcAAAQDAAERAAAAEQEBAQQBAAkOAREBUQQBAFEAAQA9AQEABAEAAQQABgAABQEDAAEBAQAVAQAABgEAAAEBAAABAQAAAQEBAAAEAAACBgEEAwABBAEAAgQCAAAEBgADAQAAAAEGAAkOAQQCAQAEAAEJAAEEAAYAAAgBAAACAQAAAQETEQAABhEAAAERAAAEEQEAAAQAAQIGBAQAAAEEAAYAAAEGACkBAAABDgABAQEEAQAJDgABAD0GAAARBQQAAAAEAQYAAAcBAQABAQEAAQETEQAABhEAAAERAAAEEQEAAAQAAQEEAAYDBAEAAQYBAAEGACkGAAIEAwABEQAAABEBAQEEAQAJDgABABEFAQkAAAQAAQAABQECAAIBAAADAQIAAQEAAAABAAABAQIAAQECAAIBAgALAQMAAAQABgAEAQYCAAIGAAACBgAEAQAAAQUAAAQNAAkOCAEAPQABBAAABAIGAAQHAQAAAgEAAAIBExEAAA8RAQAABAABAgQDBgAAAgQAAAIEACkGAAEEAAACEQEAAAEBAAEBAQQBAAkOBgAAIQgBAAQBBgAhBwEAAAIBAAAWAQAACQEAAAQBAQAABAABAAYBBAAGAAQBBgAAAgQAAAMEBgABBAUAAQEAAAEBAQQBAAkOAAABAQAGCwABBAEGCAEAAAIBAAACASURAQQAAQAEAQYDBAAAAgYAAAIGACkAWwABAwACAQAECQEBBAEACQ4IAQBRBQEAAAAEAQYAABEBAgAXAQAACAEAAAABAQAGAQIAAAQDAAAEAQYCBAAAAAQAAAYGAAQFAAkOAQABBgABCwAvFQASABUAhQEGEgMAACIGFQcSAAEJDgEJJAABFQAAABUAAAQVAAAXFQAAABUAAAkVABIAFQCFAQgSABUBAAQVAAAAFQAABhIAAAkOAQADFR8AAAEDIQABASEAXAEhAAkAXAQ2AFwAAQA2AgEBBAUBCQ4JAQAJAAQAAQAEAAEABABwAHEAcABxAQYHAQAAIwEDAA0EALUBBAQACQEEBAEKBAAAIwQAAAEJBQEABAUBAAABAQEhAAkAIQABAwUBXCQAKh8BJwMSACoFEgAnAHIAEgEqARIAHwkOAQkDAQUfASoBEgMfAhIAHwInAR8GJwIfAxIMHwASACcAKgESBScAEgAfACcJDgInABIBFSUBAAAAAQQAAAEBACoBABMDAV+GAUeHAVeIAUgBAAADAQEABgEAAAABAAADAQEAKAEAAAMBAQAgAQAAAwEBAAYBAAAAAQAAAwEBAA4BAAA4AQAAAwEBAEIBAQACBAABAAkaAQIAGQEFAFUBAQAFAQEAAFn+BAEACRkBAHAAcQIASgECIAoBBgARAQMECAASAQIEAQkIABEBAQQLAAwBAAACAQAAAQQLADMfARIAKgYSByoAEgEqCBIAcgASAQkAtgEAFQAJAAEACQA9ABUAEgEACQ4FAAkBBQABCgFuALcBAIkBAHMACgFQAAoCHQC4AQAdCUcFAFgKBgAECgEdIQoAHQAKBABFAQkAHgEAAAIEAwYBBAIGAwABBgAEBQYCBAMAAAECAAE2CQ4dFQEABBUKACsVAwAZFQUACQ4AuQECAAEVNgEBBAEGAAQBAAEBNB8AKgASACoGEgAAAHIAJwASAScHEgUqCRIBAAAECQ4FAAkOBQANFQEAHhgOigEBAAqKAQC6ARMAAwQABgUkASsFJCArCQQDBgEEAF0HKwAAAXQJXgEJADIDCQkyCAQIMgEJAHQBBAAGHREABgMEAQYCBAApAQQBEQkOAAECEQEBJT4ABAAGAQQCBgAEAAYCBAG7AQcAJwEHBgcEAQYBBAIABAkJDgIAAgEJDiMBAQkINQG8AQQAKgEBAAoBBwACPwABDD8ABgY/AgEABQA/AwUBAQA/AQEAvQEBPwAFBAAlEwQUADUwEwQUAxMEFAwTADVFEwAUAWsKGABYKRgATwAYAFoAGABYAhj/ARMVFAEABRQBACUUAQAFFAEABxQAAAAUAAAAFAAAABQAAB4UAQA0FAAADhQAAA0UAQAFFAAAEhQBAAIUAAAGFAC+AQAUAAAGIABqAiAAvwEAwAEAwQEBLQBfAGoBXwCLAQEHAAUALgA0AEUALgDCAQDDAQBFAC4BBwEFAowBACABgQEELQDEAQBGACUBRgAlAEYBJQAFAC4ANAAHAI0BAHUFBQBOAA8AFwF1AI0BBAUAbwUFACAAJQEgAAkAIAAFAMUBASAAjgEDxgEASQktAAUAEwEAAAcHBQAPABcAMAAFAwcHBQAPABcAAAwTAgAGIgAlACIAxwEBIgBVCCIAJQMiACUBIgAlACIAJQAiDT0fGAAmDgACBQBGAAUABwIFAEYIBQAHAQUAVQkFAAcAIwIFABQCBQATADAFBQATBQUAEBMFABMEBQEHBAUABwEFAAcABQswAxMJMA4TAAcBBQMAAwcFIw4FARAmBQAHAAUAByoFAAcABQEHAgUBBwEFAAcCBQAHAAUABwEiAAUABwMFAAcBBQMHAQUABwAFAAcABQUHAAUABwQFAwcDBQEHCQUABwIFAAcEBQAHDAUBBwEFAwcBBQEHAQUBBxEFAQcBBQEHDAUABwIFAAcKBQAHGAUABy4FAIwBFwUADwAXAA8AFwUFAAcGBQEICwUAEABgAGGjAQUAEBgFAxwCEAAIAQsACAMFAhArBQI3FQAKBRQAYQcAIzsHAAVLBwMFJAcKBQ8HAQUDBwkFAQcABQYHARAFBQEHAQUAIwAHAwUBBwEFACMABwMFAgcBBQAHAMgBAAUDBw8FAwcIBQAHCgUBEAEcAAUDCwAQAQcBBQAHAwUAIwAHAAUAEAEFAQgBBwALAAUCDABKAQwAEAAFARABBQAQAgUAEAIFARAHUgAQAQsADAMFACMABQAjBAULHAoFABAAIwAHAAUAIwAHACMAEAAHAAsBBwAFAQcABQAHCgUAEAEFABAACAkFBVIBBQAQABwDEAAFABAABQEQAAUBBwAQABwEBQAQAQUBHAMFARAKBQEIBAwBCAEMAAsDBwAMABwACwAMAAsABwALAAgCBwEMAQcADAEHAgwABQAHAwUABwAjAAgEBwAjAAsBCAALAAgABwELAEoACAEHAAgDDAALAQwAHAEFAQsBFgFKAAUAEAEFABAABQAQAAUAEAUFABACBQAQBQUAHAkFARAOBQAQAQUAEAMFABwABQAcAwUCHAAFAGICBQU8AAUATQDJAQALAgUADwAXAA8AFwAPABcADwAXAA8AFwAPABcADwAXHQcABQIcCAUAEA0FABwNBQAcBAUADwAXHgUADwAXAA8AFwAPABcADwAXAA8AFw8FAMoB/gEBMwUBEEwFAA8AFwAPABcADwAXAA8AFwAPABcADwDLAQAPAMwBAA8AFwAPABcADwAXAA8AFz4FAA8AFwAPABcfBQAPABeGAgUCEBIFARwyBQAcAwUAYgMHGQUBAB8FADdoBV8BHxNuAQIEAQEEAAA2AgkAAQA2AAklAQAAAAEEAAABAQA3AQYAAAEACQ0AAAQWAQgABgEAAAYBAAAGAQAABgEAAAYBAAAGAQAABgEAAAYBAAAfOgE8AC4ANAAuADQCPAAuADQAPAAuADQHIAAFAM0BAEUAIAEFAC4ANAEFAC4ANAAPABcADwAXAA8AFwAPABcDIABNAAUBCQAFASAEBQGLAQIgAAUAXwCJAQBFAM4BBiAABQAgAAUBIAIFAU0ADwBjAA8AYwAPAGMADwBjAF8hABkNAABYDQsA1QENGQAPDQDPAQGPAQANABkAQAAZAA0AOAA5ADgAOQA4ADkAOAA5ADgAOQAZAA0AOAA5ADgAOQA4ADkAOAA5AJABANABAY8BABkIDQORAQGSAQCTAQMNANEBABkDDQFAAJMBABkADAAAABoADQAaAA0AGgANABoADQAaGA0AGh4NABoADQAaAA0AGgUNABoFDQEaAQABkQEDQAANAJABABoADQAaAA0AGgANABoADQAaGA0AGh4NABoADQAaAA0AGgUNABoFDQEaAw0AQAAaAUAADQQAKg0AAF0NAAAPGR8NIxkB0gEIAAANDxoeDQAAJxkHBw8ZHg0XGQAIABkACDUZLg0AGVcNpwEZvzMNP1KUpAENAED2CA0CADYNCAAtAQEJjAIBAAkANgAJDwEJDgEBEwAuNQM6ADUJOh81ATpPAQEEAAEECQcABxMZBWUTAgU/EwRTARMAUwATAFMEEwJTEwAAUw0TAQEABAIBAAQDAQAEFgEBBgEEAAYDAQAEAgAHAQBRAAEFADMKAXMBUAcAAQYxAQ8GAQQHAAEJCQ4FABEECQEAIQEBAAQJDhsBBwQA0wEACRYBCgQABgAECgAAARyGAQIAAgQABgQkAisCJCMrAAQBBgMEAQYBBAEGAF0FMgIJAzIAAAAJCV4DAAEyBB8AEgAVCB8JDgQfAAAoPgUEAQYBBAEGAQQIAAIJAAQHCQAEAAYBAAleAQAAMgIJDx8AFQIfBRUAHwAnABIAJwEfLxUAEgAVAhIBFQESBBUBEgAVABIAFRcABBUKEQAGAQQBBgEJAgEABgApCQAFAQEABQEBAAUBCAAGAQAABgEAACoTAAUIEwAUAxMBBQMATwEaEQcBAQYABAEGAAQBBgAJAAYABAEACQ4FAAACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwACGgMAAhoDAAIaAwsAFocBAwAwiAEDAP8PAe8wAA92AXcBABV2BAAAdgDUARJ3ApQBAHgAeQDVAQB5AHcAeADWAQDXAQCUAQB4FXkoAP8DDQYTCwAEAQQAADEABAkxAAEMMQAABDEAAAAxAAABMQAAATEAAAkxcgoPSOoCCgDYAQDZAU8KAUg1CgZIAAofAAsKAG0CCg8YANoBASgB2wEBlQEAMwAoANwBBQAAQQAYAEEAGABBABgBQQAYAEEAGABBABgAQQDdAQA6BBkAMwAoADMAKAAzACgAMwAoADMAKAAzACgAMwAoADMAKAENADMAKAYZACgAGQAoAAAB3gEBlQEAGQBgAGEAYABhAGAAYQcZAAAAGQDfAQDgAQAZAwAECgAAhgEKAQAAjgEAAACWAQEsAHoAlwEBLABkAJgBASwAmQEALACZAQosAeEBAiwAlgEALBmaAQBkACwAmwECLBmaAQBkACwAmwEALABkAJgBAJwBAOIBAOMBAJwBAOQBAEIJ5QEsQgHmAR5CAgAFQgEABUIBAAVCAQACQgIAAJcBAHoCLAF6AAAG5wEAAAhJAi0A6AEABwEACwEAABkBAAASAQAAAQEAAA4BAQANASEAegEEAAIJAwAsAQIACAFOFAAADAUCAAAULgAsBQAYgQEAHAECADABDgAAWhpvAwAjAQgAHQEEACUBBAQEAB0BAAAACSMBAwAHAQAJBAEpAJ0BAQEACQ4FACMBAwAjAQMAJwEHADMBCgALAQAADgEAAAYBAAABAQAACgEAAA4BAAAGAQAAAQFCALYCAQgAFQEJAAcBFwAFEwAAKRMAAAgTRAAFAQEAAAEAACsBAAABAQIAAAEBABYBAAAACUYBBwAIAS8AEgEAAAEBBAAgAQIAAAkZAQQAAAE/ADcBAwATAQEALQEAEQIEAAABBAQAAwQDEQAAAhEAABwRAQACBAMAACkIAQYABwkAAQYAPwEfACQBAQQDAAQBBQkA6QEIADUBAgAGCRUBAQAaAQQAGQEGAAMBCwAGAU8ASAE2ADIBDAAyAQYABQEjCgMdBwAJRwUACUseAAQeAOoB8AEAHgoAACkBAAABBABZAQABAQ8ABUgHAADrAQdIIAAChAECHScBBwAVAQoECAEVABEBAwQDASUAGwETABYBCAAABgAEAAYB7AEyJA0EAJ0BAQkEMgMAEzIJPgAEASQBBAAkCAAA7QEBBAAGLAECBgMEAQYBBAEBAJ4BAwkABAkAAJ4BAQAYAQYACQ4FAAIEIxEEBAAGBQQAKQAEAAAJDgMJABEBBgARBwAiAQAEAAEAIQABCAABBAAGLwECBggEAAYABAABAVsAAQEJAAEACQMEAAEABgAECQ4AAQAhAAECCQAAEwEKABEBAAAYAQIGAgQBBgMEAQkAAQEJAAEABAEBAAQ9AAYBAAAAAQAAAwEAAA4BAAAJAQAJBQAuAQAEAgYHBAQACQ4FAAEEAQYAAAckAQABJAEAFSQAAAYkAAABJAAABCQAAAA/AAQACQAEAAYABAMGAQABBgEAAQYAnQEBAAA+BQAABAQAAAkBPgEkAQYBAAYEAgAEBAoACWUAAABlAQAAZQAAAWUj7gEAAAB7AB4BQwUeAAAAHgEAAB4AAAIeAEMAAAFDAR4A7wEA8AEAHgJ7AAABewcAAR4cADQBAgYHBAEGAgQABgAEAwEDCQABCQ4BCQAAAAEABAIBHQAvAQAEAQYFBAAGAAQBBgAEAAYBBAAGAQQDAQcACQ6lAQAuAQAEAQYDBAEAAwYBBAAGAQQAIQEJATYCAQ4JAwEBBCEALwECBgcEAQYABAAGAQQBCQEBCgAJDgUADHMSACoBAAQABgAEAQYHBAEBBQAJDgUAE0sbABoVAQAAEgAqABIBJwMSACoEEgMACQ4BFQIJBxW4AQArAQIGCAQABgEEAAFjAD8BCQ4IAQsAAAEGKwEAACsBAAcrAAABKwAAFysABAQGAAABBgEAAgQAXQB8AAYAfAAGAAQCCQgACV5FAAcBAQAmAQIGAwQBAAEEAwYABAABACEAAQAGGgAAEQkEJxEFBAAGAAEDBAAhAAEDCQAhAAEAKQcAABEFBAEGAgQnEQVbDAQABgAEACkCCQABAiEBCQwASAEGAAkhVQAAHgBDAh4AQwAeAEOHAQAJSwUACAEAACQBAAYGBAAABQQABgAEAAEECQkACQ4SAQIAACEANh0BAQAVBAAAAAYGBAAGAQQABgEESAAGAQAAAQEAACUBBQQCAAAEAAABBAAABgQAWwAEBwAJDgUABQEAAAEBAAAfAQQGAAABBAAAAQYABAAGAAQAAQYACQ41AAlL9QEAET4ACQEEAQYBCQYAAQQAfAAGDCsAACErAQYEBAIAAQYBBABdAQkKMgk+AB5UAAABDgAcAQNREAEMAAAJmQcBZQBuAQAABAkKAMMBAcsUAGIBDADXBAECRAJMIwEATAIBAEQATABEAEzuAQEARAFMsgEBAEQGnwEAfQB+Ap8BAH0AfgB9AH4ABAUBDgSpHwDNAwEARABMdgG4NQAdoAELHgJDAh4JoAHFDQC4BAEGAB4BAAAJDgMAAQlOAQAACQ4FAB0BAQAEBAAJCQAvAQYEAgkJAQAJAAEJAAkOAAAGAQAAFAEEABIB0gMAAKEBAgADoQECAAF0CUvFAQBWAQEJAQFkAEoBAwAABAABNgYGAAMEDAE/AANAAPEBCgABkgEB8gECZggA9y8NB2b/BQ3VA2coAADzAQgNFWZgAHJm/EMAA2cAAAZnAAABZwAAogINDgAAGhwAAhoBAAAaDQADGgcAiwMNgxIAagEEAAwBAgAIAQYACQEBAAABAQQACQMt2x4A7wE3CfQBAjcCALMDNwUAFjcOABA3DgAtGAEAFhgIAHMFOwD1AQUJACYFAQA7BQF/AhgCBQV/By0HGAEFBhgdBQMYPAUUAEEUAvUBABR5ABMFCwATBQsAVlIIABZSAQWGAQBUBQAARgUAAAEFAQAABQEAAQUBAAMFAAALBQAAAAUAAAYFAABABQAAAwUBAAcFAAAGBQAAGwUAAAMFAAAEBQAAAAUCAAYFAADTAgUBAKMCBQEAMWn/AwE2BAMBMQQHAQAEDQEABAEBAwkAAQ4ABAQAAA4EzwgAHhMFAAUT1AEABgQAABAEAQAGBAAAAQQAAAQEBAA9NSAAADpvACwBAgAGBAYBAQAJDgMAAQG/AgAdAQAEEAArAQMECQ4EAAA9zwMAGwEDBAkO8wEAAR4AAAlL5wEAAB4BAAAeBgABHgQAAB7pAQAGAQAAAwEAAAEBAAAOAQAAxAEBAQAIAQYEKABDAQYEAAEDAAkOAwABRJAGADoFACUCBQAlAwVLADwFwQEAAwoAABoKAAABCgAAAAoBAAAKAAAJCgAAAwoAAAAKAAAACgUAAAoDAAAKAAAACgAAAAoAAAIKAAABCgAAAAoBAAAKAAAACgAAAAoAAAAKAAAACgAAAQoAAAAKAQADCgAABgoAAAMKAAADCgAAAAoAAAkKAAAQCgQAAgoAAAQKAAAQCjMAAQqNAgADDAAIJgwDG2MMCxsODAEbDgwAGw0MAAgAGyQMCRsMBwJoHQcBBTkHAgUCaAEjCwcBIw0HAGIBBwliEQcAaDcbGfYBAA0BCAwbCRkACBMZAAgBGQgIABkDGwgZBhsBCA0bBRmZARsgCAALAQwICwgIAAtFCAALBggAFg0IAQwBCwAMAgsBBQELFAgBHAQIABwECAIWAQgAFgEIABYBSgELBAgLCxAIAQwACwAIAAsADAALAggE9wE+CAALAAgACwEWAQgKFhQIEhYCCAAWAwgCFgAIAhYGCAAWAAgAFg0IABwACAAcAAgAHAQIABYDCAAcAAgBHEkIAAsADAAIBhwPCA0cDAgLHAoFABAACwMIAAwXCAYMAQsBDAALAUoDCwAWCwwACwEMAwsBDABKAwwBFgwMAAgACwEMAAsHDAELCAwACwQMAgsLDAILBwUCCwEMAAsADAALAwwACwUMAAsCDAALBQUAC0kIAhYCCAQWJQUCPAJ1AwUiCAAWDwgCFggIABYECAQMAAsAFgILAggBDAIIAC8CGwMIBQsCDAALAAwBCAIbAAsBDAALCAgCG3MFAgwDVAQMVAUEDAUbCwgDGwAIDhsLBQM7NwUHOwkFBTsnBQc7HQUBOwFoCVQDOwFUDTsIVCY7CwUAFgEIABYHCAcWBQgAFggICRYACAAMAhYGCAAMLwgAFjwIARYACAEWAAgAFhAIAhYACAwWIQhTBQNUBxsNDAEbDAgCGwgIAS8CGwEvLQgALwMIAhYALwAbAC8DGwAvDQgALwEbAC8ICAEvAxsALwgWBhuSAQUAADYFJDcJaQA3BAD9BxsBAP3/Aw0BAP3/Aw2BgCgAAEkALR1JX39/Se8BGI8cSf/fCwA=",Zx="sBPUAQsLMzQDCwMLKgQLIiIqEw4LC0ALCz8wFAMqKjstAwM/BBcMCx8NA0AsA0AfKgMWKgsaIisYCwkLKywDPgoMIQMyFSoDDg4NEwsLLxMUCRADCQ0tCwsMFwMVGQMLFSAhGSssLQ8rISotCxMVAxMNCQsOFEAXBB4LCwsLKSI5DhQDBAYTEAM/GxwdBAMmJx4oLDIDAyoLNTU3LCwqLCwgExUhCwUHCA8REg8UBgsLAwMVEBADCwwEHgQVExUjCwMXJAMlFhgVBAspLgkEFBQZBDErAyoEAF4kFA4sMjYVMik3MissMioyLTgnGQQ5FR8gOToyLRMDPD0LCzQ1CvgBBEELC0AB+AEFPC0DA0AD+AEEQSwDQQz4AQE/MvgBAUEF+AEBOgT4AQFABvgBATMA+AEDNjY4JvgBAg4UFPgBBTcVMik4A/gBCjknGQQ6FR8gOjsA+AECPT5y8AMEAy0qMhbwAwMsNjY58AMEDDE1KwD4AQE1GfADABT4AQEyxgH4AQEy0AH4AQAO6AUAIPgBCgYGEhMIBgoGBwYAAwUGBgcLCAAGCQYIBgYHBwgICwENAAAOBQwKCwYDAiQAAgEBCAAMAggGAD0AAAEBAwEbAQgEHQcIBggJBgwGAj8BCwIUAQkBBwEMBUINCQMDCAMDCQYICg0ODwFyAQMAOgAGZAcICQMGDgQFAg0AARwFCAYGAwkAcgEDAGMFCgYDEBEDHAAHmgEABkAACwkECAsMCQALAwgUCHL4AQEQffgB1AE0AxUWDgMOARkIAxkZGSMlAwMuAwMuEQ0OGQwaAw40LggJKAECJg4uDQ4uAhkOLBoBFxkkKwMTNCQNDhoqKAYOIg4ZNCUlJyM0NBE0DRMcDhMmAzQaKQkOFAgOAxQyGQgkDQENJDQ0AxkjFA4jJhMDJQ0uCTQiNDQ0NCk0BSUNDggKIxw0Lh0fHgg0BxsiMw0iDg4ZNBMTJw0NGQ0NMiMUNDQgEC8PGDAPDSEBAw4UFBwcDgMoCCIIFC40MTQOCTUONiwrFAgDKAQTAw0NCAgIJA40CABeGQ0lHBwbDiIpJyIkDSIMIgMLGzQ0BRQ0NDQABAsOLRIAAAUFAAAAAAYFAAMJAgUFBg8AAxsBAwIHAAIrAQUEGAICAAoBAQUKDgQFBQADBS4ACAEBAxA0AQUAAQMABQMBAQICACUBAAQrAgMFBWsAAUkEBQUDAgEBAAmRAQQAAAUHAAEZAAcAAAcQAAAHBwEABwcDDgcAAgsABwcAEAMbBAAKBwAAJwAAWQAABwYPBwATFA8AFAMVBwsBGQIQEAAOBQAACRAHAdEBBAgLBxIBWgUWAgACFgI8CA0AEBERExQHASsBBwMFAAA7ARAACgIRCwBfAABSAAEWBwIAAwQHBwcEDQsABAQABQYMCwoHEQEwDxAQBwsHDwAOAAsLAAADDgE7BBcYAw8AhQEBAwFPBREAAAAPABgCExQBRQQHBxAHAwEEAA4AAA==",jx=[1055,5151,25631,8,42015,12,10,1,479,351,287,31,415,159,4,2,2064,16,543,4097,24577,63,5121,-7137,58399],rf={"chromium/line_normal":[65,63,11,365,null,"AQA+BgIAAwAEAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVAAgAFgAXABgAGQAaAAcAGwAHABsAHAAHAB0AHgAfAAcAIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAqACoALQAuAC8AMAAxADIAIgAzAAkAAgABGgABEzQECAAAADUAAwEAAAAAAAEAAAAAAAAAAAACAAMAAAADAAAAAgAAAAMAAAABAAAAAAAAARIGNgcAAAAAAAAABAABAAI3AQAKOAMAAwAAAAgAAgADAAAAADYAAAIAAQECAAEBCAQAAQ4CAAYEAAUABgAHBQ0AOQEQARIDOgsdAyADJAgqAAQFBjsREw88FDAFOwAHCAABBT0NNAQ+ATcAAws9Gj0ABwQGPxQ3DEAaPwACEwZBCAAAAABCBwgAAAcAAAAAAAEAAUMAAAIAAUILAAAAAAACAANBAAIJBkQIAAAAAEIWRQMAAUILAAhEAAQEBkYERxxGGkYAAgYGSARJBQAWSgUAFEgAAQQGSwQGHEwaSwABBQZNEQAPThQABU0ACQQGTxYXClAaTwAICAZRC1IAUwFUAVUQVgZXE1EACwQGWARJHFkaWAALBQZaDVsHXAtaGloACAUGXQReDV8OXRpdAA0FBmASCA5hEgAHYAAHBAZiDwARYxpiAA4FBmQNZQdmC2caZAARDAECBGgJCwhpAWoCGAAZCGsNKwAsAi0IaAASBwZsCQsOGQAaB20RLQhsAAEEBm4YAAhvGm4AFAgGcBtxAHIAcQEHAXMIcRFwAAIEBnQZAAd1GnQAATsBAwR2AHYDdwB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgF2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AAkFBgIUNQweEi4HAgANBQZ4BHkcegAfGXgAAgQGexQ3DHsaewAXBgECBHwSaQFqDH0afAAGBgECBH4SaQFqDH8afgAXBAaAARRqDIABGoABAAIGBoEBBEkEABeCAREACIEBABwGAQIEgwESaQFqDIQBGoMBAB0HBoUBG3EAcgBxAQcBhgEahQEACwQGhwEhiAEXIgKHAQAGBAaJASGKARciAokBAAUGBosBBAYMAA+MARQABYsBAAYEBo0BBAYcjgEajQEACQUGjwEYGQAaB5ABGo8BAAEEBpEBGAAIkgEakQEAIgYBAgSTARJpAWoMlAEakwEAKAkGlQEGCAUOBBMACAE3DJYBFDAFlQEAKAYGlwEbGwEbA5gBCCYRlwEAHQQGmQEUagyZARqZAQAKAwaaASGbARqaAQArBAacASGdARaeAQOcAQAqBAafASGgARciAp8BADEEBqEBDxERogEaoQEAFQUEowEBpAESpQEOpAEapAEAMwEbpgEAAgQGpwESqAEOpwEapwEAGAQGNhSmAQw4GjYAASIAAAAEAqMBAakBCKoBAKoBAKoBBAADqgEACAKqAQCqAQCqAQGqAQCqAQCqAQCqAQCqAQGrAQCqAQKqAQCqAQCqAQOqAQCqAQKqAQCqAQKqAQCqAQCqAQGqAQCqAQCqAQKpAQAMBwAAA6MBAToSrAEBCAw6GjoANAEbpgEABAMGOyE8GjsANQEbpgEAMgQGrQEErgEcrQEarQEANgEbpgEABAMGPyFAGj8ANwEbpgEAAAUGQgyvAQIREUIaQgADAwZBIUMaQQA5ARumAQACAwZEIUUaRAA6ARumAQABBwawAQyxAQCyAQazAQC0AQu1ARqwAQA7ARumAQBDAwtJFQcTKgAFBAZIBEkcShpIAD0BG6YBAAcDBkshTBpLAD4BG6YBAAIDBk0hThpNAD8BG6YBAAIDBk8hUBpPAEABG6YBAEkFBrYBBEkFABa3ARq2AQBCBAa4AQoAFrkBGrgBAAEIBroBBwAZuwEHAAAADwAAAAC6AQA5Bga8AQRJAwoYvQEDIRa8AQAGCAZRC1IAUwFUAVUQVgZXE1EAAgYBAgS+ARJpAWoMvwEavgEARgEbpgEADwMGWCFZGlgARwEbpgEATAMGwAEhwQEawAEARgMGwgEhwwEawgEASQEbpgEAFwcGxAEEXgjFAQQUAsYBC8cBGsQBAEsEBsgBBMkBHMgBGsgBAEsBG6YBAAEBOy4ATAEbpgEAAgMGYiFjGmIATQEbpgEAUAQGygEWAArLARrKAQABAwbMASHNARrMAQAEBQZkDWUHZgtnGmQAUAMBBRfOAQHPAQBhEwbQARfRAQnQAQPSAQDTAQDUAQDVAQDWAQLXAQDYAQDZAQDaAQDbAQDZAQDZAQDcAQLdAQLTAQLQAQAzDgEGBN4BF98BCeABA+EBAOIBAOMBAeQBAuUBAuYBAOcBAugBBeIBAt4BAAgEBmgUzwEMaxpoAFMBG6YBAAoDBmwhbRpsAFQBG6YBAAIDBm4hbxpuAFUBG6YBAAAEBnEfBwFxGnEAQwQG6QEdAAPqARrpAQAEBAZwHHIEcxpwAFgBG6YBAAYDBnQhdRp0AAABAAMAWgkM6wEF7AEA7QEB7gEB7wED8AEP8QED8gEI8wEAWQEbpgEAcwILeR0fAAUEBngEeRx6GngAWwEbpgEAWwMBBRfOAQHPAQASAwZ8IX0afABcAwEFF84BAc8BAAIDBn4hfxp+AF0BG88BAF0DAQUXzgEBzwEAAwQGgQEESRyCARqBAQBeAwEFF84BAc8BAAUDBoMBIYQBGoMBAF8BG6YBABMDBoUBIYYBGoUBAGABG6YBAA0DBocBIYgBGocBAGEDAQUXzgEBzwEABgMGiQEhigEaiQEAYgMBBRfOAQHPAQACAwaLASGMARqLAQBjAwEFF84BAc8BAAIDBo0BIY4BGo0BAGQDAQUXzgEBzwEAAgMGjwEhkAEajwEAZQMBBRfOAQHPAQACAwaRASGSARqRAQBmAwEFF84BAc8BAAIDBpMBIZQBGpMBAGcBG6YBAA4FBpUBDfQBB/UBC5YBGpUBAGgBG6YBABADBpcBIZgBGpcBAGkBG88BAGkBG6YBAAMDBpoBIZsBGpoBAGoBG6YBAAIEBpwBIZ0BFvYBA5wBAGUlAQcE9wEH+AEA+AEA+AEA+AEE+AED+AEC+AEA+AEA+AEA+AEB+AEA+AEA+AEA+AEA+AEB+QEA+AEC+AEA+AEA+AEB+AEA+AEA+AEA+AEC+AEA+AEC+AEA+AEA+AEB+AEA+AEA+AEA+AEA+AEA9wEAbAEbpgEABQMGnwEhoAEanwEAbQEbpgEAAgMGoQEhogEaoQEAAAEAAQBvARumAQBGBQb6AQT7AQ2lAQ76ARr6AQBvBAb8ARL9AQ78ARr8AQBwARumAQADBQb+AQT/AQ2oAQ7+ARr+AQBwGwEIDYACAIACAIACCIACA4ACAIACAIACAYACAIACAIACAIACAIACAoACAoACAIACAIACA4ACAIACAoACAIACAoACAIACAIACAYACAIACAIACAAABAAQABAcAAAWpAQ8AAggBCAyrARqpAQAEBQaBAgSCAg2DAg6BAhqBAgBvARumAQBnBgaEAgSuAQiFAgeGAguHAhqEAgAABAavAQ8REa8BGq8BAHEEBrABFAgMtQEasAEAeAYAAQWIAg8RBDcMiQIaiAIAVwMGigIhiwIaigIADQQGjAISgwIOjAIajAIAWAMGjQIhjgIajQIAEwQGsAEUCAy1ARqwAQBkARumAQBeAwa2ASG3ARq2AQBlARumAQBjAwa4ASG5ARq4AQBmARumAQACAwa6ASG7ARq6AQBnARumAQAGAwa8ASG9ARq8AQBnAwEFF84BAc8BAD0DBr4BIb8BGr4BAGUBG6YBAB8DBsABIcEBGsABAGYBG6YBAAIDBsIBIcMBGsIBABQDBsQBIccBGsQBABMDBo8CIZACGo8CABIDBpECIZICGpECABIDBsQBIccBGsQBAGkBG6YBAAEHBpMCDLEBAJQCBrMBAJUCC5YCGpMCAGUBG6YBAAECHRcdLgBmARumAQABAh0XHS4AZRMGlwIXmAIJlwIDmQIAmgIAmwIAnAIAnQICngIAnwIAoAIAoQIAogIAoAIAoAIAowICpAICmgIClwIAZQQGpQIS/QEOpgIapQIAZwEbpgEAuQEBAAIAsQEBAAIAsQEBAAIAsQEBAAIAsQEBAAIAsQEBAAIArwEBAAIArwEBAAIArwEBAAIArwEBAAIArwEBAAIArwEBAAIArQEBAAIAdAwBCRmmAQKnAg2oAgCpAgCqAgGrAgKsAgKtAgCuAgKvAgWpAgAOAQAGADkDBt4BIeABGt4BAA8BAAYADwEABgAPAQAGAA4BAAYADgEABgAMAQAGAAwBAAYADAEABgB3ARumAQAdAwbpASHqARrpAQDkAQEAAwDfAQEAAwC0AQEAAwDeAQEAAwDdAQEAAwC2AQEAAwDRAQEAAwAdAQADABoBAAMALwMGsAIhsQIasAIALwMGsgIhswIasgIAWAYAAQW0AhQ3DLUCFrYCA7QCAFkiAQoMtwIAtwIAtwIAtwIEtwIDtwICtwIAtwIAtwIAtwIBtwIAtwIAtwIAtwIAtwICtwICtwIAtwIAtwIBtwIAtwIAtwIAtwICtwIAtwICtwIAtwIAtwIBtwIAtwIAtwIAtwIAtwIAAAEABwAyBASjAQH3ASH5ARr3AQBVARumAQABBwa4AgyxAQC5AgazAQC6Agu7Ahq4AgBWARumAQBRBQa8AgS9Ag39AQ68Ahq8AgBWARumAQABBwa+AgyxAQC/AgazAQDAAgvBAhq+AgAAAQAIAFUBG6YBAAMHBsICBIICCMMCBKwBAsQCC8UCGsICAFcEBsYCBMcCHMYCGsYCAEADBoQCIYcCGoQCABEDBsgCIckCGsgCABEDBsoCIcsCGsoCAEADBoQCIYcCGoQCAF8GAAEFiAIPEQSmAQyJAhqIAgANBAaIAhIIDokCGogCAFgBG6YBACEDBooCIYsCGooCAFkBG6YBAFkBG6YBAAMDBo0CIY4CGo0CAEoBG6YBAAIDBo8CIZACGo8CAEsBG6YBAAIDBpECIZICGpECAA8DBpMCIZYCGpMCAA8DBswCIc0CGswCAA8DBs4CIc8CGs4CAA8DBpMCIZYCGpMCAEkBG6YBADkBAAUAOAEABQA4AQAFADgBAAUAKgEABQA5AQAFADkBAAUARwEABQAtAQAFADsBAAUAOwEABQA7AQAFAEcBAAUARwQGpQIS/QEOpgIapQIAKgMGpQIhpgIapQIADwEACQAPAQAJAA8BAAkADwEACQAOAQAJAA4BAAkADAEACQAMAQAJAAwBAAkAPAEbpgEAHwMGsAIhsQIasAIAPQEbpgEAAgMGsgIhswIasgIAPQYAAQW0AhSmAQy1AhbQAgO0AgAsBAa0AiG1Ahb2AQO0AgCYAQEABwAAAQAKACUDBrgCIbsCGrgCACUDBtECIdICGtECACUDBtMCIdQCGtMCACUDBrgCIbsCGrgCAD8BG6YBAAEHBtUCDLEBANYCBrMBANcCC9gCGtUCAAYDBr4CIcECGr4CAAYDBtkCIdoCGtkCAAYDBtsCIdwCGtsCAAYDBr4CIcECGr4CAAQDBsICIcUCGsICAAQDBt0CId4CGt0CAAQDBt8CIeACGt8CAAQDBsICIcUCGsICAEMBG6YBAAEHBuECDLEBAOICBrMBAOMCC+QCGuECAEMBG6YBABYDBsgCIckCGsgCAEQBG6YBAAIDBsoCIcsCGsoCADgBG6YBAAIDBswCIc0CGswCADkBG6YBAAIDBs4CIc8CGs4CABoBAAoAGAEbpgEAAwMG0QIh0gIa0QIAGQEbpgEAAgMG0wIh1AIa0wIAEwMG1QIh2AIa1QIAEwMG5QIh5gIa5QIAEwMG5wIh6AIa5wIAEwMG1QIh2AIa1QIAGgEbpgEABgMG2QIh2gIa2QIAGwEbpgEAAgMG2wIh3AIa2wIAGgEbpgEAAgMG3QIh3gIa3QIAGwEbpgEAAgMG3wIh4AIa3wIADAMG4QIh5AIa4QIADAMG6QIh6gIa6QIADAMG6wIh7AIa6wIADAMG4QIh5AIa4QIADwEbpgEABgMG5QIh5gIa5QIAEAEbpgEAAgMG5wIh6AIa5wIABwEbpgEAAgMG6QIh6gIa6QIACAEbpgEAAgMG6wIh7AIa6wI="],"chromium/line_normal_cj":[66,64,11,367,null,"AQA/BgIAAwAEAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVAAgAFgAXABgAGQAaAAcAGwAHABsAHAAHAB0AHgAfAAcAIAAhACIAIwAkACUAJgAnACgAKQAqACoAKwAsACoAKgAtAC4ALwAwADEAMgAiADMACQACAAEbAAETNAQIAAAANQADAQAAAAAAAQAAAAAAAAAAAAIAAwAAAAMAAAACAAAAAAADAAAAAQAAAAAAAAESBjYHAAAAAAAAAAQAAQACNwEACjgDAAMAAAAJAAIAAwAAAAA2AAACAAEBAgABAQgEAAEOAgAGBAAFAAYABwUNADkBEAESAzoLHQMgAyQJKgAEBQY7ERMPPBUwBTsABwgAAQU9DTQEPgE3AAMLPRs9AAcEBj8UNwxAGz8AARQGQQgAAAAAQgwYABkAGgQcAkMDAAAiAEIDJwAoAysALAIAAzEBIgJBAAIJBkQIAAAAAEIWRQMAAUIMAAhEAAQEBkYERxxGG0YAAgYGSARJBQAWSgUAFUgAAQQGSwQGHEwbSwABBQZNEQAPThUABU0ACQQGTxYXClAbTwAICAZRC1IAUwFUAVUQVgZXFFEACwQGWARJHFkbWAALBQZaDVsHXAtaG1oACAUGXQReDV8OXRtdAA0FBmASCA5hEwAHYAAHBAZiDwARYxtiAA4FBmQNZQdmC2cbZAARDAECBGgJCwhpAWoCGAAZCGsOKwAsAi0IaAASBwZsCQsOGQAaB20SLQhsAAEEBm4YAAhvG24AFAgGcBtxAHIAcQEHAXMIcRJwAAIEBnQZAAd1G3QAATwBAwR2AHYDdwB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgF2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYAdgB2AHYACQUGAhQ1DB4TLgcCAA0FBngEeRx6AB8aeAACBAZ7FDcMext7ABcGAQIEfBJpAWoMfRt8AAYGAQIEfhJpAWoMfxt+ABcEBoABFGoMgAEbgAEAAgYGgQEESQQAF4IBEgAIgQEAHAYBAgSDARJpAWoMhAEbgwEAHQcGhQEbcQByAHEBBwGGARuFAQALBAaHASGIARgiAocBAAYEBokBIYoBGCICiQEABQYGiwEEBgwAD4wBFQAFiwEABgQGjQEEBhyOARuNAQAJBQaPARgZABoHkAEbjwEAAQQGkQEYAAiSARuRAQAiBgECBJMBEmkBagyUARuTAQAoCQaVAQYIBQ4EEwAIATcMlgEVMAWVAQAoBgaXARsbARsDmAEIJhKXAQAdBAaZARRqDJkBG5kBAAoDBpoBIZsBG5oBACsEBpwBIZ0BF54BA5wBACoEBp8BIaABGCICnwEAMQQGoQEPERGiARuhAQAVBQSjAQGkARKlAQ6kARukAQAzARumAQACBAanARKoAQ6nARunAQAYBAY2FKYBDDgbNgABIwAAAAQCowEBqQEIqgEAqgEAqgEEAAOqAQAIAqoBAKoBAKoBAaoBAKoBAKoBAKoBAKoBAasBAKoBAqoBAKoBAKoBA6oBAKoBAqoBAKoBAKoBAqoBAKoBAKoBAaoBAKoBAKoBAqkBAAwHAAADowEBOhKsAQEIDDobOgA0ARumAQAEAwY7ITwbOwA1ARumAQAyBAatAQSuARytARutAQA2ARumAQAEAwY/IUAbPwA3ARumAQAABQZCDK8BAhERQhtCAAMDBkEhQxtBADkBG6YBAAIDBkQhRRtEADoBG6YBAAEHBrABDLEBALIBBrMBALQBC7UBG7ABADsBG6YBAEMDC0kVBxMqAAUEBkgESRxKG0gAPQEbpgEABwMGSyFMG0sAPgEbpgEAAgMGTSFOG00APwEbpgEAAgMGTyFQG08AQAEbpgEASQUGtgEESQUAFrcBG7YBAEIEBrgBCgAWuQEbuAEAAQgGugEHABm7AQcAAAAQAAAAALoBADkGBrwBBEkDChi9AQMhF7wBAAYIBlELUgBTAVQBVRBWBlcUUQACBgECBL4BEmkBagy/ARu+AQBGARumAQAPAwZYIVkbWABHARumAQBMAwbAASHBARvAAQBGAwbCASHDARvCAQBJARumAQAXBwbEAQReCMUBBBQCxgELxwEbxAEASwQGyAEEyQEcyAEbyAEASwEbpgEAAQE8LgBMARumAQACAwZiIWMbYgBNARumAQBQBAbKARYACssBG8oBAAEDBswBIc0BG8wBAAQFBmQNZQdmC2cbZABQAwEFF84BAc8BAGEUBtABF9EBCdABA9IBANMBANQBANUBANYBAtcBANgBANkBANkBANoBANsBANkBANkBANwBAt0BAtMBAtABADMPAQYE3gEX3wEJ4AED4QEA4gEA4wEB5AEC5QEC5gEA5wEA6AEC6QEF4gEC3gEACAQGaBTPAQxrG2gAUwEbpgEACgMGbCFtG2wAVAEbpgEAAgMGbiFvG24AVQEbpgEAAAQGcR8HAXEbcQBDBAbqAR0AA+sBG+oBAAQEBnAccgRzG3AAWAEbpgEABgMGdCF1G3QAAAEAAwBaCQzsAQXtAQDuAQHvAQHwAQPxAQ/yAQPzAQn0AQBZARumAQBzAgt5HR8ABQQGeAR5HHobeABbARumAQBbAwEFF84BAc8BABIDBnwhfRt8AFwDAQUXzgEBzwEAAgMGfiF/G34AXQEbzwEAXQMBBRfOAQHPAQADBAaBAQRJHIIBG4EBAF4DAQUXzgEBzwEABQMGgwEhhAEbgwEAXwEbpgEAEwMGhQEhhgEbhQEAYAEbpgEADQMGhwEhiAEbhwEAYQMBBRfOAQHPAQAGAwaJASGKARuJAQBiAwEFF84BAc8BAAIDBosBIYwBG4sBAGMDAQUXzgEBzwEAAgMGjQEhjgEbjQEAZAMBBRfOAQHPAQACAwaPASGQARuPAQBlAwEFF84BAc8BAAIDBpEBIZIBG5EBAGYDAQUXzgEBzwEAAgMGkwEhlAEbkwEAZwEbpgEADgUGlQEN9QEH9gELlgEblQEAaAEbpgEAEAMGlwEhmAEblwEAaQEbzwEAaQEbpgEAAwMGmgEhmwEbmgEAagEbpgEAAgQGnAEhnQEX9wEDnAEAZSYBBwT4AQf5AQD5AQD5AQD5AQT5AQP5AQL5AQD5AQD5AQD5AQH5AQD5AQD5AQD5AQD5AQH6AQD5AQL5AQD5AQD5AQH5AQD5AQD5AQD5AQL5AQD5AQD5AQL5AQD5AQD5AQH5AQD5AQD5AQD5AQD5AQD4AQBsARumAQAFAwafASGgARufAQBtARumAQACAwahASGiARuhAQAAAQABAG8BG6YBAEYFBvsBBPwBDaUBDvsBG/sBAG8EBv0BEv4BDv0BG/0BAHABG6YBAAMFBv8BBIACDagBDv8BG/8BAHAcAQgNgQIAgQIAgQIIgQIDgQIAgQIAgQIBgQIAgQIAgQIAgQIAgQICgQICgQIAgQIAgQIDgQIAgQICgQIAgQIAgQICgQIAgQIAgQIBgQIAgQIAgQIAAAEABAAEBwAABakBDwACCAEIDKsBG6kBAAQFBoICBIMCDYQCDoICG4ICAG8BG6YBAGcGBoUCBK4BCIYCB4cCC4gCG4UCAAAEBq8BDxERrwEbrwEAcQQGsAEUCAy1ARuwAQB4BgABBYkCDxEENwyKAhuJAgBXAwaLAiGMAhuLAgANBAaNAhKEAg6NAhuNAgBYAwaOAiGPAhuOAgATBAawARQIDLUBG7ABAGQBG6YBAF4DBrYBIbcBG7YBAGUBG6YBAGMDBrgBIbkBG7gBAGYBG6YBAAIDBroBIbsBG7oBAGcBG6YBAAYDBrwBIb0BG7wBAGcDAQUXzgEBzwEAPQMGvgEhvwEbvgEAZQEbpgEAHwMGwAEhwQEbwAEAZgEbpgEAAgMGwgEhwwEbwgEAFAMGxAEhxwEbxAEAEwMGkAIhkQIbkAIAEgMGkgIhkwIbkgIAEgMGxAEhxwEbxAEAaQEbpgEAAQcGlAIMsQEAlQIGswEAlgILlwIblAIAZQEbpgEAAQIdFx4uAGYBG6YBAAECHRceLgBlFAaYAheZAgmYAgOaAgCbAgCcAgCdAgCeAgKfAgCgAgChAgChAgCiAgCjAgChAgChAgCkAgKlAgKbAgKYAgBlBAamAhL+AQ6nAhumAgBnARumAQC5AQEAAgCxAQEAAgCxAQEAAgCxAQEAAgCxAQEAAgCxAQEAAgCvAQEAAgCvAQEAAgCvAQEAAgCvAQEAAgCvAQEAAgCvAQEAAgCtAQEAAgB0DQEJGaYBAqgCDakCAKoCAKsCAawCAq0CAq4CAK8CALACArECBaoCAA4BAAYAOQMG3gEh4AEb3gEADwEABgAPAQAGAA8BAAYADgEABgAOAQAGAA0BAAYADQEABgANAQAGAA0BAAYAeAEbpgEAHgMG6gEh6wEb6gEA5QEBAAMA4AEBAAMAtQEBAAMA3wEBAAMA3gEBAAMAtwEBAAMA0gEBAAMAHgEAAwAOAQADADADBrICIbMCG7ICADADBrQCIbUCG7QCAFkGAAEFtgIUNwy3Ahe4AgO2AgBaIwEKDLkCALkCALkCALkCBLkCA7kCArkCALkCALkCALkCAbkCALkCALkCALkCALkCArkCArkCALkCALkCAbkCALkCALkCALkCArkCALkCALkCArkCALkCALkCAbkCALkCALkCALkCALkCAAABAAcAMwQEowEB+AEh+gEb+AEAVgEbpgEAAQcGugIMsQEAuwIGswEAvAILvQIbugIAVwEbpgEAUgUGvgIEvwIN/gEOvgIbvgIAVwEbpgEAAQcGwAIMsQEAwQIGswEAwgILwwIbwAIAAAEACABWARumAQADBwbEAgSDAgjFAgSsAQLGAgvHAhvEAgBYBAbIAgTJAhzIAhvIAgBBAwaFAiGIAhuFAgARAwbKAiHLAhvKAgARAwbMAiHNAhvMAgBBAwaFAiGIAhuFAgBgBgABBYkCDxEEpgEMigIbiQIADQQGiQISCA6KAhuJAgBZARumAQAhAwaLAiGMAhuLAgBaARumAQBaARumAQADAwaOAiGPAhuOAgBLARumAQACAwaQAiGRAhuQAgBMARumAQACAwaSAiGTAhuSAgAPAwaUAiGXAhuUAgAPAwbOAiHPAhvOAgAPAwbQAiHRAhvQAgAPAwaUAiGXAhuUAgBKARumAQA6AQAFADkBAAUAOQEABQA5AQAFACoBAAUAOgEABQA6AQAFAEgBAAUALQEABQA7AQAFADsBAAUAOwEABQBIAQAFAEgEBqYCEv4BDqcCG6YCACoDBqYCIacCG6YCAA8BAAkADwEACQAPAQAJAA8BAAkADgEACQAOAQAJAA0BAAkADQEACQANAQAJAA0BAAkAPQEbpgEAIAMGsgIhswIbsgIAPgEbpgEAAgMGtAIhtQIbtAIAPgYAAQW2AhSmAQy3AhfSAgO2AgAtBAa2AiG3Ahf3AQO2AgCaAQEABwAAAQAKACYDBroCIb0CG7oCACYDBtMCIdQCG9MCACYDBtUCIdYCG9UCACYDBroCIb0CG7oCAEABG6YBAAEHBtcCDLEBANgCBrMBANkCC9oCG9cCAAYDBsACIcMCG8ACAAYDBtsCIdwCG9sCAAYDBt0CId4CG90CAAYDBsACIcMCG8ACAAQDBsQCIccCG8QCAAQDBt8CIeACG98CAAQDBuECIeICG+ECAAQDBsQCIccCG8QCAEQBG6YBAAEHBuMCDLEBAOQCBrMBAOUCC+YCG+MCAEQBG6YBABYDBsoCIcsCG8oCAEUBG6YBAAIDBswCIc0CG8wCADkBG6YBAAIDBs4CIc8CG84CADoBG6YBAAIDBtACIdECG9ACABoBAAoAGAEbpgEAAwMG0wIh1AIb0wIAGQEbpgEAAgMG1QIh1gIb1QIAEwMG1wIh2gIb1wIAEwMG5wIh6AIb5wIAEwMG6QIh6gIb6QIAEwMG1wIh2gIb1wIAGgEbpgEABgMG2wIh3AIb2wIAGwEbpgEAAgMG3QIh3gIb3QIAGgEbpgEAAgMG3wIh4AIb3wIAGwEbpgEAAgMG4QIh4gIb4QIADAMG4wIh5gIb4wIADAMG6wIh7AIb6wIADAMG7QIh7gIb7QIADAMG4wIh5gIb4wIADwEbpgEABgMG5wIh6AIb5wIAEAEbpgEAAgMG6QIh6gIb6QIABwEbpgEAAgMG6wIh7AIb6wIACAEbpgEAAgMG7QIh7gIb7QI="],"apple/line_normal":[65,63,11,365,"chromium/line_normal","BgACOAAAKicAAjgAACoLAAI4AAAqDgACOAAAKi0AAjh2APMBAQACOAAAKhtnARumAVq2AQEAAw=="],"apple/line":[65,63,11,365,"apple/line_normal",""],"apple/line_cj":[65,63,11,365,"apple/line_normal",""],"chromium/char":[21,21,3,16,null,"AQASBgIAAgADAAQABQAEAAYABAAHAAQACAAJAAoABAAEAAkACgALAAABAAEAAQEHAgACBQsEAQQBBAMEAAQAAQQLBQMFAwUADAAFBAABBQAAAAAAAAMDCwcDDQQHAAQEEAgACQMJAAoABQIRCQAKAAEBEQAABwEXDgAIAQoFAAYDCw0CBwUNAAMCAQIVDwAAAQAC"],"apple/char":[21,21,3,16,"chromium/char",""]},e_="5DAIgAAACAAAAAQDBAYA/+v/+/8CAQF/DBwACAEADhwCCAAUAQQfgAlAFDgAGBwAGFQAJAEANHAAKDgACBwM9hYAuP///+////9vACsAJDgADAEACIgDAA4eABiYAgDmARwANKQDAChUACQcBLyW/7kH+AMAoQLAAwDqAxwBAFm4BwCeBhwAFYAHAYAY9BMAGpAUAK4BmAIB/xYBAX/wBYwIABgBAZgC5gcBDBCMDwBQHAC2AbQCAAeIGAGGBYgYAScM3AoANIwBAH7QAgEA2wH0BQDAAXAAlg0cAA==",sf="5DAIgAAACAAAAAQDBAYA/+v/+/8CAQF/DBwACAEADhwCCAAUAQQfgAlAFDgAGBwAGFQAJAEANHAAKDgACBwE/1cA/gTAAgAAKwQfgAnAAxAB/xg4AAwBAAiIAwAOHgAYmAIA5gEcADSkAwAoVAAkHAy8lv+5////7////2+kAsADAOoDHAEAWbgHAJ4GHAAVgAcBgBj0EwAakBQArgGYAgH/FgEBf/AFjAgAGAEBmALmBwEMEIwPAFAcALYBtAIAB4gYAYYFiBgBJwzcCgA0jAEAftACAQDbAfQFAMABcACWDRwA",fh={"":[8220,0,8221,1,8216,0],agq:[8221,1],am:[171,0,187,1,8249,0,8250,1],ar:[],ast:[171,0,187,1,8220,0,8221,1],bas:[171,0,187,1,8221,1],be:[171,0,187,1,8221,1],bg:[8221,1,8221,1],blo:[171,0,187,1,8220,0,8221,1],bm:[171,0,187,1,8220,0,8221,1],br:[171,0,187,1,8220,0,8221,1],bs:[8221,1,8216,0],bua:[171,0,187,1,8221,1],ca:[171,0,187,1,8220,0,8221,1],cs:[8221,1],cv:[171,0,187,1,8220,0,8221,1],da:[],de:[8221,1],dsb:[8221,1],dua:[171,0,187,1,8216,0],dyo:[171,0,187,1,8220,0,8221,1],el:[171,0,187,1,8220,0,8221,1],eo:[8220,0,8221,1,171,0,187,1],et:[8221,1],eu:[171,0,187,1,8220,0,8221,1],ewo:[171,0,187,1,8220,0,8221,1],fa:[171,0,187,1,8249,0,8250,1],ff:[8221,1],fi:[],fr:[171,0,187,1,171,0,187,1],fur:[8216,0,8220,0,8221,1],gsw:[171,0,187,1,8249,0,8250,1],he:[],hr:[8221,1],hsb:[8221,1],hu:[8221,1,187,0,171,1],hy:[171,0,187,1,171,0,187,1],ia:[8216,0,8220,0,8221,1],ie:[171,0,187,1,8220,0,8221,1],is:[8221,1],it:[171,0,187,1,8220,0,8221,1],ja:[],jgo:[171,0,187,1,8249,0,8250,1],ka:[8221,1,171,0,187,1],kab:[171,0,187,1,8220,0,8221,1],kk:[171,0,187,1,8220,0,8221,1],kkj:[171,0,187,1,8249,0,8250,1],ksf:[171,0,187,1,8216,0],ksh:[8221,1],ky:[171,0,187,1,8221,1],lag:[],lb:[8221,1],lij:[171,0,187,1,8220,0,8221,1],lt:[8221,1,8221,1],luy:[8221,1],mg:[171,0,187,1,8220,0,8221,1],mk:[8221,1],mua:[171,0,187,1,8220,0,8221,1],mzn:[171,0,187,1,8249,0,8250,1],nb:[171,0,187,1,8216,0],nds:[8221,1],nl:[8216,0,8216,0],nmg:[8221,1,171,0,187,1],nn:[171,0,187,1,8216,0],nnh:[171,0,187,1,8220,0,8221,1],no:[171,0,187,1,8216,0],oc:[171,0,187,1,171,0,187,1],os:[171,0,187,1,8221,1],pl:[8221,1,171,0,187,1],pms:[171,0,187,1,8220,0,8221,1],prg:[8221,1,8221,1],rm:[171,0,187,1,8249,0,8250,1],rn:[],ro:[8221,1,171,0,187,1],ru:[171,0,187,1,8221,1],rw:[171,0,187,1,8216,0],sah:[171,0,187,1,8221,1],sc:[171,0,187,1,8220,0,8221,1],se:[],sg:[171,0,187,1,8220,0,8221,1],shi:[171,0,187,1,8221,1],sk:[8221,1],sl:[8221,1],sn:[],sr:[8221,1],ss:[8216,0,8220,0,8221,1],st:[8216,0,8220,0,8221,1],sv:[],syr:[],szl:[8221,1,187,0,171,1],ti:[171,0,187,1,8220,0,8221,1],tk:[8220,0,8221,1,8220,0,8221,1],tn:[8216,0,8220,0,8221,1],ts:[8216,0,8220,0,8221,1],tyv:[171,0,187,1,8221,1],ug:[187,0,171,1,8250,0,8249,1],uk:[171,0,187,1,8221,1],ur:[],uz:[8220,0,8221,1],ve:[8216,0,8220,0,8221,1],wae:[171,0,187,1,8249,0,8250,1],yav:[171,0,187,1,171,0,187,1],yi:[],yue:[],zgh:[171,0,187,1,8221,1],az_Cyrl:[171,0,187,1,8249,0,8250,1],bs_Cyrl:[8221,1],ff_Adlm:[8220,0,8221,1,8216,0],fr_CA:[171,0,187,1],fr_CH:[171,0,187,1,8249,0,8250,1],kk_Arab:[187,0,171,1,8250,0,8249,1],ms_Arab:[],pt_AO:[171,0,187,1,8220,0,8221,1],pt_CH:[171,0,187,1,8220,0,8221,1],pt_CV:[171,0,187,1,8220,0,8221,1],pt_FR:[171,0,187,1,8220,0,8221,1],pt_GQ:[171,0,187,1,8220,0,8221,1],pt_GW:[171,0,187,1,8220,0,8221,1],pt_LU:[171,0,187,1,8220,0,8221,1],pt_MO:[171,0,187,1,8220,0,8221,1],pt_MZ:[171,0,187,1,8220,0,8221,1],pt_PT:[171,0,187,1,8220,0,8221,1],pt_ST:[171,0,187,1,8220,0,8221,1],pt_TL:[171,0,187,1,8220,0,8221,1],ti_ER:[8216,0,8220,0,8221,1],uz_Arab:[8220,0,8221,1,8216,0],uz_Cyrl:[8220,0,8221,1,8216,0],zh_Hant:[]},to=68,dh=54,t_=67,n_="kCQB/QMBAf8AAgABAwABBAH9BQgAAQYB/QQKAAEEAf0EEwAHPQH/DkQB/wdEAf8BBQT///8qBEgADEQC/T8BAgAgiAEBKgEPAT5SiAEE/z//QA6IAQAWRAL/Pg/MAQH/BgIAIMwBABDUAgBAkAIABCEAIkQBPBKIAQAOoAQB/SvMAQH/BgEACAwAEQEBKhIXAf1KAQH/BKwEAAa+AQH9Bw0D/f+yFpgDACawBgA6RAAE5AQC/TtV9AYAIEQABYgBAv87ErgHAB3qAgAnLAAEiAEB/xGQAgBA1AIAPkQAJewFADQBABuIAQAEJAA4zAEB/yKQAgADoAQBPQugBAE9KdgLAB3ACAH/RLAGACpEAf9xoAQAIvQGAAREACbUAgABiwMAAiwAZqAEAEeoBQCEAQEAXdwDABuwBgArrAgBNxDACABARAAgzAEAArwBADrgDAAtRAAVswoAWkQAQNgLAAoPASs/RAEsHDABOC7gDAAL7AUBQVj0FwAOkBMB/RGQEwP9Of0qhAkB/07gDABeRAAoiQQAFagWAEyYAwAPxBMACzABNRIlAGmMCgErQ4wKABGwBgH+BQEB/wADAf8ABgH/BhIABg0C/v8EHAT//v/+CAEASZgUAf0LzBIABrAGAAUPArH9FLgYAAfxBgAb9AYAAEQBPFbQGwACVwA4sAYB/iwBAf8OEwATogIB/xAOASoFtwIAVsAIAHwBAA==",qt=1,af=2,kl=4,oa=8,lr=16;function Hl(n){if(n===null||n.length<2||n.length>2&&n.charCodeAt(2)!==45&&n.charCodeAt(2)!==95)return"root";const e=n.charCodeAt(0)|32,t=n.charCodeAt(1)|32;return e===106&&t===97?"ja":e===107&&t===111?"ko":e===122&&t===104?"zh":"root"}function os(n){const e=atob(n);let t=0;const i=()=>{let a=0,o=1,l;do l=e.charCodeAt(t++),a+=(l&127)*o,o*=128;while(l>=128);return a},r=new Uint8Array(i());let s=0;for(;t<e.length;){for(let l=i();l>0;l--)r[s++]=e.charCodeAt(t++);if(t>=e.length)break;const a=i()+4,o=s-i();if(o+a<=s)r.copyWithin(s,o,o+a);else for(let l=0;l<a;l++)r[s+l]=r[o+l];s+=a}if(s!==r.length)throw new Error("A packed table unpacked to the wrong length");return r}function of(n){const e=atob(n),t=new Int32Array(e.length);let i=0;for(let r=0;r<e.length;){let s=e.charCodeAt(r++),a=s&127;for(let o=7;s>=128;o+=7)s=e.charCodeAt(r++),a|=(s&127)<<o;t[i++]=a}return t.subarray(0,i)}function Jn(n,e){return n.values[n.index[e>>8]<<8|e&255]}function i_(n,e,t){const i=new Uint16Array(4352),r=new Uint8Array(t<<8),s=new Int32Array(256).fill(-1);let a=0,o=0,l=0,c=-1;for(let h=0;h<=n.length;h+=2){const f=h<n.length?e[n[h+1]]:-1;if(f!==c){for(;o<l;){const u=o>>8;if(!(o&255)&&l-o>=256)s[c]<0&&(s[c]=a,r.fill(c,a<<8,++a<<8)),i.fill(s[c],u,l>>8),o=l&-256;else{o&255||(i[u]=a++);const A=Math.min(l,u+1<<8),m=i[u]-u<<8;r.fill(c,o+m,A+m),o=A}}c=f}h<n.length&&(l+=n[h]+1)}if(l!==1114112)throw new Error("The class runs don't cover U+0000..U+10FFFF");return{index:i,values:r}}let Ah=null,ph=null;function Ea(n){const[e,t]=qx[n];return Ah??=of($x),ph??=os(Zx),i_(Ah,ph.subarray(e*Jx),t)}function ai(n,e){let t=null;return()=>t??=new RegExp(n,e)}const r_=[ai(String.raw`^[\p{L}\p{N}]$`,"u"),ai(String.raw`^\p{M}$`,"u"),ai(String.raw`^\p{P}$`,"u"),ai(String.raw`^[\p{Ps}\p{Pe}\p{Pi}\p{Pf}\p{Po}]$`,"u"),ai(String.raw`^\p{Default_Ignorable_Code_Point}$`,"u"),ai(String.raw`^\p{Emoji}$`,"u"),ai(String.raw`^\p{sc=Hangul}$`,"u")],mh=0,ls=1,lf=2,s_=3,ns=4,a_=5,o_=6;let l_=null;const gh=new Map;function Pt(n,e){const t=l_??=new Uint16Array(65536),i=1<<e*2;let r=n<65536?t[n]:gh.get(n)??0;return r&i<<1||(r|=i<<1|(r_[e]().test(String.fromCodePoint(n))?i:0),n<65536?t[n]=r:gh.set(n,r)),(r&i)!==0}let cf=null;function hf(){return cf??=new Intl.Segmenter(void 0,{granularity:"word"})}function c_(){cf=null}const la=1,h_=0,no=1;function u_(n,e,t,i){const r=new Uint16Array(e*n);t!==null&&r.set(t);for(let s=0,a=-n;s<i.length;){a+=(i[s++]+1)*n;const o=i[s++]*n;o>0&&r.copyWithin(a,a-o,a-o+n);let l=a-1;for(let c=i[s++];c>0;c--)l+=1+i[s++],r[l]=i[s++]}return r}function uf(n){const[e,,,t,i,r]=rf[n];return u_(e+3,t,i===null?null:uf(i),of(r))}const xh={};function zl(n){let e=xh[n];if(e===void 0){const[t,i,r]=rf[n];e=xh[n]={catCount:t,dictCategoriesStart:i,rowWidth:t+3,rows:uf(n),lookAheadResultsSize:r,classes:Ea(n)}}return e}const f_={chars:[],categories:[]};function ff(n,e,t,i=f_){const r=n.rows,s=n.rowWidth,a=n.dictCategoriesStart,o=e.length,l=new Int32Array(n.lookAheadResultsSize).fill(-1),c=i.chars,h=c.length;for(let f=0;f<o;){let u=0,A=f,m=-1,g=f,p=e.charCodeAt(g++);if((p&64512)===55296&&g<o){const w=e.charCodeAt(g);(w&64512)===56320&&(g++,p=(p-55296<<10)+w-56320+65536)}let d=!1,S=!1,y=la*s,E=0;for(;;){if(d){if(S)break;S=!0,E=1}else{let _=!1;for(let C=0;C<h;C++)if(p===c[C]){E=i.categories[C],_=!0;break}_||(E=Jn(n.classes,p),E>=a&&u++)}const w=r[y+3+E];y=w*s;const M=r[y];if(M===no)A=g;else if(M>no&&l[M]>=0){m=l[M];break}const b=r[y+1];if(b>no&&(l[b]=g),w===h_)break;if(!S){if(g>=o)d=!0;else if(p=e.charCodeAt(g++),(p&64512)===55296&&g<o){const _=e.charCodeAt(g);(_&64512)===56320&&(g++,p=(p-55296<<10)+_-56320+65536)}}}m<0&&(m=A,A===f&&(m=f+1,(e.charCodeAt(f)&64512)===55296&&m<o&&(e.charCodeAt(m)&64512)===56320&&m++)),t[m]=1,u>0&&d_(n,e,f,m,t),f=m}}function al(n,e){return Jn(n.classes,e)>=n.dictCategoriesStart}function d_(n,e,t,i,r){let s=-1;for(let a=t;a<=i;){let o=!1,l=1;if(a<i){let c=e.charCodeAt(a);(c&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320&&(c=(c-55296<<10)+e.charCodeAt(a+1)-56320+65536,l=2),o=al(n,c)}if(o)s<0&&(s=a);else if(s>=0){if(a-s>1)for(const c of hf().segment(e.slice(s,a)))c.index>0&&(r[s+c.index]=1);s=-1}a+=l}}const is=32,rs=9,dr=10,A_=8203,Vl=8232,Wl=8233,p_=12288;let m_=null,g_;function x_(){return g_??=new Intl.DateTimeFormat().resolvedOptions().locale}const Xs=0,ol=1,_h=2;function Eh(n){return n===is||n===rs||n===dr}function __(n,e,t,i){if(t<33||i<33)return Xs;if(t===45)if(i<=127){if(i>=48&&i<=57){const r=e|32;return e>=48&&e<=57||r>=97&&r<=122?ol:Xs}}else return _h;if(t<=255&&i<=255){const r=i-33;return n[(t-33)*28+(r>>3)]&1<<(r&7)?ol:Xs}return _h}function E_(n,e,t,i){const r=Pt(t,ls)?e:t;return Pt(r,mh)&&!al(n,r)&&Pt(i,mh)&&!al(n,i)}function M_(n,e,t){const i=n.length,r=new Uint8Array(i+1);if(i<2)return r;const s=m_??=os(e_),a=Hl(t)==="zh"?"line_normal_cj":"line_normal",o=zl(`chromium/${a}`);let l=null,c=0,h=n.charCodeAt(0);for(let f=1;f<i;c=h,h=n.charCodeAt(f),f++){const u=n.charCodeAt(f);if(Eh(u))continue;if(Eh(h)){r[f]=1;continue}const A=__(s,c,h,u);if(A===ol){r[f]=1;continue}e&&E_(o,c,h,u)||A!==Xs&&(l===null&&(l=new Uint8Array(i+1),ff(o,n,l)),l[f]===1&&(r[f]=1))}return r}const Ot=1,Ar=2,sr=4,Si=8,ca=16,ha=32,ll=64,wi=128,v_=256,cl=512,hl=1024,Bt=32768;let df=null;const Mh=new Map;function ul(n){return n===is||n===dr||n===rs||n===Vl||n===Wl}function vh(n){return n>=48&&n<=57}function Sh(n){const e=n|32;return e>=97&&e<=122}function wh(n){switch(n>>7){case 0:switch(n>>4){case 0:return Bt;case 1:return sr;case 2:return n===32?v_:n===34||n===39?wi:n===40?Si:n===41?ca:Bt;case 3:return n<=57?Ot:Bt;case 4:return Ot;case 5:return n<=90?Ot:n===91?Si:n===93?ca:Bt;case 6:return Ot;default:return n<=122?Ot:n===123?Si:n===125?ha:Bt}case 1:return n===160?ll:n>192?Ot:n===161||n===191?Si:n===171?wi|cl:n===187?wi|hl:Bt;case 2:case 3:case 4:return Ot;case 5:return n===712||n===716||n===735?Bt:Ot;case 6:return n===847||n>=860&&n<=866?ll:n<880?sr:n===894?Bt:Ot;case 7:case 8:case 10:return Ot;case 9:return n>=1155&&n<=1161?sr:Ot;case 11:return n<=1416||n>=1480?Ot:n>=1425&&n<=1469||n===1471||n===1473||n===1474||n===1476||n===1477||n===1479?sr:Bt;case 64:return n===8216||n===8220?wi|cl:n===8217||n===8221?wi|hl:Bt;default:if(n>=11904&&n<=42191){if((n&65280)===12288){if(n<=12351)switch(n&31){case 1:case 2:case 9:case 11:case 13:case 15:case 17:case 21:case 23:case 25:case 27:case 30:case 31:return ha;case 8:case 10:case 12:case 14:case 16:case 22:case 20:case 24:case 26:case 29:return Si;default:return Bt}return Bt}return(n&65520)===12784?Bt:(n&65528)===12872||(n&65472)===19904?Ot:n===40981?Bt:Ar}return n>=44032&&n<=55215||n>=63744&&n<=64255?Ar:Bt}}function Af(n,e){return{text:n,secondToLast:0,last:0,priorLength:0,line:e,nextBoundary:null}}function S_(n,e){let t=n.nextBoundary;if(t===null){const a=(n.priorLength===2?String.fromCharCode(n.secondToLast,n.last):n.priorLength===1?String.fromCharCode(n.last):"")+n.text,o=new Uint8Array(a.length+1);ff(n.line.rules,a,o,n.line.overrides),t=new Int32Array(a.length+2),t[a.length+1]=-1;for(let l=a.length;l>=0;l--)t[l]=o[l]===1?l:t[l+1];n.nextBoundary=t}const i=e+n.priorLength+1;if(i>=t.length)return-1;const r=t[i];return r<0?-1:r-n.priorLength}function pf(n,e,t){const i=e.text,r=i.length;if(t===0&&e.priorLength===0){if(r<=1)return r;t++}let s=t>1?i.charCodeAt(t-2):e.secondToLast,a=t>0?i.charCodeAt(t-1):e.last,o=0,l=0,c=0,h=-1;for(let f=t;f<r;s=a,a=l,o=c,f++){if(l=i.charCodeAt(f),c=0,ul(l))return f;if(a===45&&vh(l)){if(vh(s)||Sh(s))return f;continue}if(a<=255&&l<=255){if(a>=33&&l>=33){const A=l-33;if(n[(a-33)*28+(A>>3)]&1<<(A&7))return f}continue}o===0&&(o=wh(a)),c=wh(l);const u=o|c;if(u&-1922){if((u|Ot)===(Ar|Ot))return f;if(u&(ll|wi)&&!(u&Bt)){if(u&Ar&&u&wi&&(c&cl||o&hl))return f;continue}if(c===sr){c=o;continue}if(!(u&Bt)&&u&(ha|ca|Si)){if(c===ha||c===ca||o===Si)continue;if(u&Ar)return f}if(h<f&&(h=S_(e,f-1)),h>=0&&f<h)for(const A=Math.min(h,r-1);f<A;s=a,a=l,o=c,f++){const m=i.charCodeAt(f+1);if(m<=255&&!Sh(m))break}if(f===h&&!ul(a))return f}}return r}function mf(n,e,t){for(let i=e;i<n.length;i++){const r=n.charCodeAt(i);if(ul(r)||r===A_)return i;if(r===p_||t&&Pt(r,s_)&&i+1<n.length)return i+1}return n.length}function gf(n){const e=n??"";let t=Mh.get(e);if(t!==void 0)return t;const i=Hl(e),r=zl(i==="ja"||i==="ko"?"apple/line_normal":i==="zh"?"apple/line_cj":"apple/line"),s=e.split(/[-_]/);let a=s[0].toLowerCase();for(let h=1;h<s.length;h++){const f=s[h];a+="_"+(f.length===4?f[0].toUpperCase()+f.slice(1).toLowerCase():f.toUpperCase())}let o=fh[a];for(;o===void 0;){const h=a.lastIndexOf("_");a=h<0?"":a.slice(0,h),o=fh[a]}const l=[],c=[];for(let h=0;h<o.length;h+=2)l.push(o[h]),c.push(Jn(r.classes,o[h+1]===0?123:125));return t={rules:r,overrides:{chars:l,categories:c}},Mh.set(e,t),t}const w_=0,C_=1,io=2;function xf(n,e,t,i){const r=df??=os(sf),s=Af(n,gf(i)),a=n.length,o=new Uint8Array(a+1);let l=!1;for(let h=0;t&&h<a&&!l;h++)l=n.charCodeAt(h)>255;let c=-1;for(let h=0;h<a;){let f=C_,u=h;const A=n.charCodeAt(h);if(A===Vl||A===Wl||e&&A===dr)f=io,u++,A!==dr&&(o[u]=kl);else{for(;u<a;u++){const m=n.charCodeAt(u);if(m!==is&&m!==rs&&(e||m!==dr))break}if(u===h){f=w_,u=a;for(let m=h;m<a;m++){const g=t?mf(n,m,l):pf(r,s,m);if(g!==h){u=g;break}}}}c>=0&&c!==io&&f!==io&&(o[h]=1),c=f,h=u}return o}function y_(n,e,t,i){const r=n.charCodeAt(n.length-1),s=e.charCodeAt(0);if(s===dr||s===Vl||s===Wl)return!1;if(r===is||r===rs||s===is||s===rs)return!0;if(t)return mf(e,0,!1)===0;const a=df??=os(sf),o=Af(e,gf(i)),l=n.length;return o.secondToLast=l>1?n.charCodeAt(l-2):0,o.last=l>0?n.charCodeAt(l-1):0,o.priorLength=o.last===0?0:o.secondToLast===0?1:2,pf(a,o,0)===0}const fl=128;function b_(n){const e=zl(n==="gecko/char"?"chromium/char":n),t=e.rowWidth,i=e.rows,r=i.length/t,s=new Uint8Array(r*e.catCount);for(let a=0;a<r;a++)for(let o=0;o<e.catCount;o++){const l=i[a*t+3+o];s[a*e.catCount+o]=l===0||i[l*t]>1?fl|i[la*t+3+o]:l}return{rules:e,transitions:s,skipped:n==="gecko/char"?Jn(e.classes,173):-1}}const Ch={};function Cr(n){return(n&65280)===8192&&(n>=8234&&n<=8238||n>=8294&&n<=8297||(n&-2)===8206)||n===1564}function Ui(n,e,t,i,r){const{rules:s,transitions:a,skipped:o}=Ch[n]??(Ch[n]=b_(n)),l=s.catCount;let c=la,h=0;for(let f=t;f<i;){let u=e.charCodeAt(f),A=f+1;if((u&64512)===55296&&A<i){const p=e.charCodeAt(A);(p&64512)===56320&&(A++,u=(u-55296<<10)+p-56320+65536)}const m=Jn(s.classes,u);if(m===o&&(u===173||Cr(u))){f=A;continue}const g=a[c*l+m];g&fl&&(r!==null&&(r[h]=f),h++),c=g&~fl,f=A}return c!==la&&(r!==null&&(r[h]=i),h++),h}const cr=173,_f=(n,e)=>(n&64512)===55296&&(e&64512)===56320,Ef=(n,e)=>65536+(n-55296<<10)+(e-56320);let T_=null;function Mf(n){return n>=768&&(Pt(n,ls)||n===8204||n===8205||n>=65438&&n<=65439||n>=127995&&n<=127999||n>=917536&&n<=917631)}function B_(n){return n>=768&&(Pt(n,ls)||n>=65438&&n<=65439||n>=127995&&n<=127999||n>=917536&&n<=917631)}function R_(n,e){const t=Jn(n,e);return t===2||t===3||t===5&&!Pt(e,a_)}function yh(n,e){return R_(n,e)&&!Pt(e,o_)&&e!==8361}function bh(n,e){return Jn(n,e)!==0&&(Pt(e,lf)&&e!==8361||e===65374||e===12288)}function I_(n){return n>=32&&n<127?!1:n<=159?!0:(n&65280)===8192&&(n===8203||n===8232||n===8233||n===8288)||n===65279||Cr(n)}function en(n,e){return n===cr||!e&&Cr(n)}const Th=n=>n===32||n===9,qr=n=>n===32||n===9||n===10;function Yl(n,e){for(let t=e;t<n.length;t++){const i=n.charCodeAt(t);if(B_(i))return!0;if(!Cr(i))return!1}return!1}function D_(n){const e=Hl(n);return(e==="ja"||e==="zh")&&n.charCodeAt(2)!==95}function P_(n,e,t,i){if(e===0||t>=n.length)return!1;const r=T_??=Ea("gecko/east_asian_width");let s,a=e;do{const l=n.charCodeAt(a-1),c=a>1?n.charCodeAt(a-2):0;_f(c,l)?(s=Ef(c,l),a-=2):(s=l,a--)}while(Pt(s,ns)&&a>0);let o;a=t;do o=n.codePointAt(a),a+=o>65535?2:1;while(Pt(o,ns)&&a<n.length);return yh(r,s)&&yh(r,o)||i&&(bh(r,s)||bh(r,o))}function L_(n,e,t,i){const r=n.length,s=new Int32Array(r),a=new Uint8Array(r);let o=null,l=0,c=!1;if(t)for(let A=0;A<r;A++){const m=n.charCodeAt(A);en(m,e)?(a[A]=1,c||=m!==cr):s[l++]=A}else{let A=!1,m=0,g=0,p=i===null?r:0;for(;m<r;){const d=n.charCodeAt(m);if(!qr(d)&&!en(d,e)){(d===12||d===13&&n.charCodeAt(m+1)!==10)&&((o??=new Uint8Array(r))[m]=1),s[l++]=m,A=!1,m++;continue}if(qr(d)){if(m>=p){for(;g<i.length&&i[g]<=m;)g++;p=g<i.length?i[g]:r}let S=!1,y=d===10,E=0,w=0;const M=A&&m>0&&en(n.charCodeAt(m-1),e);let b=m+1;for(;b<p;b++){const _=n.charCodeAt(b);if(_===10)y=!0;else if(en(_,e))w++;else if(!Th(_))break}for(;en(n.charCodeAt(b-1),e);)b--,E++;!e&&n.charCodeAt(b-1)===32&&b<p&&Yl(n,b)&&(S=!0,b--);for(let _=m;_<b;_++){const C=n.charCodeAt(_);en(C,e)?(a[_]=1,c||=C!==cr):A||y&&Th(C)?(a[_]=1,(w>E||M)&&((o??=new Uint8Array(r))[_]=1)):(s[l++]=_,A=!0)}S&&(s[l++]=b++);for(let _=0;_<E;_++)c||=n.charCodeAt(b)!==cr,a[b++]=1;m=b;continue}a[m]=1,c||=d!==cr,A=!1,m++}}let h="",f=0,u=0;for(let A=0;A<l;A++){const m=s[A],g=n.charCodeAt(m);!t&&(g===9||g===10)?(h+=n.slice(f,u)+" ",f=u=m+1):m!==u?(h+=n.slice(f,u),f=m,u=m+1):u++}return h+=n.slice(f,u),{text:h,orig:s.subarray(0,l),skipped:a,leftOut:o,dropsBidiControl:c}}function F_(n,e,t){switch(n.charCodeAt(e)){case 32:case 5760:return t||!Yl(n,e+1);case 10:case 9:case 13:case 12:return!0;default:return!1}}function U_(n,e,t,i){if(i||e[0]===0)return!1;for(let r=0;r<n.length&&e[r]===1;r++)if(F_(n,r,t))return!0;return!1}function ro(n,e){n.clusterStart[e]=0,n.isSpace[e]=0}function Bh(n,e,t,i,r,s){let a=e.charCodeAt(t);i-t>1&&_f(a,e.charCodeAt(t+1))&&(a=Ef(a,e.charCodeAt(t+1))),Mf(a)&&ro(n,t);let o=t;for(;o<i&&e.charCodeAt(o)<768;)o++;const l=o===i?0:Ui(r,e,t,i,s);for(let c=0,h=t;h<i;c++){const f=e.charCodeAt(h);f===32||f===12288?n.isSpace[h]=1:f===2479&&h>t&&e.charCodeAt(h-1)===2509&&ro(n,h);const u=l===0?h+1:s[c];for(h++;h<u;h++)ro(n,h)}}function N_(n,e,t,i){const r=e.length;let s=0;for(let a=0;a<r;a++){const o=e.charCodeAt(a);!((o===32||o===160)&&!(a+1<r&&Mf(e.charCodeAt(a+1))))&&!I_(o)||(a>s&&Bh(n,e,s,a,t,i),o===32&&(n.isSpace[a]=1),s=a+1)}r>s&&Bh(n,e,s,r,t,i)}let G_=null;function Nr(n,e){return e>1114111?0:Jn(n.classes,e)}const O_=1,Q_=3,Rh=10,k_=12,Ih=14,Dh=16,H_=21,z_=22,V_=24,W_=25,Y_=29,X_=30,K_=31,Ph=32,Lh=33,q_=35,so=46,Fh=47,Uh=53,Gr=54,Nh=253,ao=254,Gh=255,Us=120;function Oh(n){return n>=3585&&n<=3711?1:n>=3712&&n<=3839?2:n>=4096&&n<=4255||n>=43488&&n<=43519||n>=43616&&n<=43647?3:n>=6016&&n<=6143||n>=6624&&n<=6655?4:0}function J_(n){const e=[];for(let t=0;t<n.length;){const i=Oh(n[t]);let r=t+1;for(;r<n.length&&Oh(n[r])===i;)r++;if(i!==0){let s="";for(let a=t;a<r;a+=4096)s+=String.fromCharCode(...n.slice(a,Math.min(r,a+4096)));for(const a of hf().segment(s))a.index>0&&e.push(t+a.index)}e.push(r),t=r}return e}function Qh(n){return n===O_||n===Q_||n===W_||n===q_||n===V_||n===H_||n===z_||n===Y_||n===K_||n===X_||n===k_}function tr(n,e,t){const i=n.charCodeAt(e);if((i&64512)===55296&&e+1<t){const r=n.charCodeAt(e+1);if((r&64512)===56320)return((i&1023)<<10)+(r&1023)+65536}return i}function $_(n,e,t,i,r,s){const a=i-t,o=n.states;let l=0,c=tr(e,t,i),h=c>65535?2:1,f=[],u=0,A=0;for(;;){if(u<f.length){const p=f[u++]-A;let d=0;for(;d!==p;){if(d+=c>65535?2:1,l=h,l>=a)return;c=tr(e,t+l,i),h+=c>65535?2:1}A+=d,s[t+l]=1;continue}let m=-1,g=!1;e:for(;;){const p=c,d=m>=0?m:Nr(n,p),S=g||m<0&&d===Gr;if(l=h,l>=a)return;c=tr(e,t+l,i),h+=c>65535?2:1;const y=Nr(n,c);if((y===Ih||y===Gr)&&d!==Rh&&d!==Dh&&d!==Ph&&d!==Lh&&d!==Fh&&d!==Uh){m=d,g=y===Gr;continue}if(m=-1,g=!1,r&&Qh(d)&&Qh(y))continue;if(Nr(n,p)===so&&y===so){const U=[p&65535];for(let I=l,G=c;U.push(G&65535),I+=G>65535?2:1,!(I>=a||(G=tr(e,t+I,i),Nr(n,G)!==so)););f=J_(U),u=1;let Q=1;for(;Q!==f[0];){if(Q++,l=h,l>=a)return;c=tr(e,t+l,i),h+=c>65535?2:1}A=Q;break}const E=o[d*to+y];if(E===Nh||E===ao){if(S)continue;break}if(E===Gh)continue;let w=E>=Us?E-Us:E,M=h,b=l,_=c,C=S,B=y;const F=w>dh;for(;;){const U=B===Gr,Q=w<=dh;if(l=h,l>=a){if(o[w*to+t_]!==ao)return;if(h=M,l=b,c=_,C)continue e;break e}c=tr(e,t+l,i),h+=c>65535?2:1;const I=Nr(n,c);if((I===Ih||I===Gr)&&B!==Rh&&B!==Dh&&B!==Ph&&B!==Lh&&B!==Fh&&B!==Uh){B=I;continue}const G=o[w*to+I];if(G===Gh)continue e;if(G===ao){if(h=M,l=b,c=_,U){if(F&&!C)break e;continue e}if(C)continue e;break e}if(G===Nh){if(U)continue e;break e}G>=Us?(w=G-Us,M=h,b=l,_=c,C=U):(w=G,Q&&(M=h,b=l,_=c,C=U)),B=I}}s[t+l]=1}}const Z_=new Uint8Array([0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0]);function j_(n,e,t,i,r){const s=e.length,a=new Uint8Array(s);let o=i,l=0,c=!1;for(let h=0;h<=s;h++){const f=h<s?e.charCodeAt(h):-1,u=f===32||f===9||f===13;if(o&&!u&&f>=0&&(a[h]=1),o=u,f>=0&&!u&&(t||f!==10)){f>=32&&f<=127&&Z_[f-32]===1||(c=!0);continue}h>l&&c&&$_(n,e,l,h,r,a),c=!1,l=h+1}return a}function eE(n,e,t,i,r=null){const s=n.length,a=new Uint8Array(s+1);if(s===0)return{breaks:a,leftOut:null,dropsBidiControl:!1};let o=!0;for(let A=0;A<s&&o;A++)o=n.charCodeAt(A)<256;const l=L_(n,o,e,r),c=l.text.length;if(c===0)return{breaks:a,leftOut:null,dropsBidiControl:l.dropsBidiControl};const h={clusterStart:new Uint8Array(c).fill(1),isSpace:new Uint8Array(c)};N_(h,l.text,i,new Int32Array(c));const f=G_??={classes:Ea("gecko/line"),states:os(n_)},u=j_(f,l.text,o,U_(n,l.skipped,o,e),t);for(let A=1;A<c;A++){const m=l.orig[A],g=u[A]===1&&(h.clusterStart[A]===1||h.isSpace[A-1]===1),p=l.skipped[m-1]===1&&n.charCodeAt(m-1)===cr;g||p?a[m]=g&&p?qt|oa:qt:h.clusterStart[A]===1&&(a[m]=af)}return{breaks:a,leftOut:l.leftOut,dropsBidiControl:l.dropsBidiControl}}const wt=0,En=1,Yt=2,sn=3,_n=4,Qt=5,ss=6,yn=7,Rt=8,hn=9,He=15,pr=16,ci=32,vf=64,ua=128,tE=["text","space","zero-width-break","soft-hyphen","preserved-space","tab","zero-width-glue","control","hard-break"],nE=/[ \t\n\r\f]{2,}|[\t\n\r\f]/g,iE=/[\t\n\r\f]| {2,}|^ | $/;function oo(n,e){return n===32||n===9||n===10||n===13&&e==="blink"}function Sf(n,e,t=null){const i=e.lineBreakScan;if(i==="webkit"||!n.includes(`
`))return n;const r=i==="gecko"&&sE.test(n);if(!r&&!n.includes("​"))return n;const s=r&&D_(t);let a="",o=0;for(let l=n.indexOf(`
`);l!==-1;){let c=l;for(let u=l-1;u>=0;u--){const A=n.charCodeAt(u);if(oo(A,i))c=u;else if(!(i==="gecko"&&en(A,!1)))break}let h=l+1,f=h;for(;f<n.length;f++){const u=n.charCodeAt(f);if(oo(u,i))h=f+1;else if(!(i==="gecko"&&en(u,!1)))break}if(l=n.indexOf(`
`,f),i==="gecko"&&n.charCodeAt(h-1)===32&&Yl(n,h)&&h--,!(n.charCodeAt(c-1)!==8203&&n.charCodeAt(h)!==8203&&!(r&&P_(n,c,h,s)))){a+=n.slice(o,c);for(let u=c;u<h;u++)oo(n.charCodeAt(u),i)||(a+=n[u]);o=h}}return o===0?n:a+n.slice(o)}function rE(n,e,t){let i=n.length;for(let r=n.length-1;r>=e;r--){const s=n.charCodeAt(r);if(ui(s))i=r;else if(!(t.lineBreakScan==="gecko"&&Cr(s)))break}return i}const sE=/[\u1100-\uFFFF]/;function lo(n){if(!iE.test(n))return n;let e=n.replace(nE," ");return e.charCodeAt(0)===32&&(e=e.slice(1)),e.length>0&&e.charCodeAt(e.length-1)===32&&(e=e.slice(0,-1)),e}function aE(n){return/[\r\f]/.test(n)?n.replace(/\r\n/g,`
`).replace(/[\r\f]/g,`
`):n}const kh=/\p{M}/u;function oE(n,e,t){if(e==="pre-wrap"){if(n===32)return _n;if(n===9)return Qt;if(n===10)return Rt}return n===32?En:n===8203?Yt:n===173?sn:n===133&&t==="webkit"?yn:wt}function ui(n){return n===32||n===9||n===10||n===13||n===12}function lE(n,e,t,i,r){const s=new Uint8Array(e+1);let a=0;if(i==="pre-wrap"){for(let l=0;l<n.length;l++,a++)s[a]=t[l],n.charCodeAt(l)===13&&n.charCodeAt(l+1)===10&&(l++,t[l]&qt&&(s[a]=t[l]));return s[e]=t[n.length],s}let o=0;for(;o<n.length&&ui(n.charCodeAt(o));)o++;for(;o<n.length;){let l=o+1;if(ui(n.charCodeAt(o))){for(;l<n.length&&ui(n.charCodeAt(l));)l++;if(l===n.length)break}!(t[o]&qt)&&s[a]===0&&(s[a]=t[o]),r!==null&&(r[a]=n.charCodeAt(o));const c=o;for(;o<l;o++)t[o]&qt&&(s[o===c?a:a+1]=t[o]);a++}return s[e]=t[o]&qt?t[o]&kl:t[o],s}function Hh(n,e,t,i,r,s){return(i===8232||i===8233)&&e[t+1]&kl?Rt:i===173&&e[t+1]&oa&&cE(n,t)?Yt:oE(i,r,s)}function cE(n,e){let t=e-1;for(;t>=0&&n.charCodeAt(t)===173;)t--;return t>=0&&n.charCodeAt(t)!==10}function hE(n){return n===wt||n===En||n===_n||n===sn}function uE(n){return n<32||n>=127&&n<=159||n===8232||n===8233}function fE(n,e,t,i,r,s,a){const o=r==="gecko"?ua:0,l=[],c=[];let h=!1,f=!1,u=-1,A=-1;for(let d=0;d<n.length;d++){const S=n.charCodeAt(d);if(a&&d<u)continue;if(a&&en(S,!1)&&(d===0||t[d]&lr||!en(n.charCodeAt(d-1),!1))){let M=d,b=-1;for(;M<n.length&&en(n.charCodeAt(M),!1)&&(M===d||!(t[M]&lr));M++)Cr(n.charCodeAt(M))&&(b=M+1);if(b>0){const _=A>=0&&A!==Rt&&(t[d]&lr)!==0,C=A<0||A===Rt||_;if(C){const B=M===n.length||Hh(n,t,M,n.charCodeAt(M),i,r)===Rt;if(B||(_&&(t[d]=t[d]|t[M]&qt),t[M]=t[M]&-10),u=M,B&&A>=0)continue}else u=b;(C||h||f)&&(l.push(d),c.push(wt|o),A=wt,h=!1,f=!1);continue}}const y=Hh(n,t,d,S,i,r),E=y===wt&&uE(S),w=(t[d]&qt)===0;if(!(t[d]&(qt|lr))&&!E&&!h&&!(f&&!kh.test(n[d]))&&y===A&&hE(y)){t[d]&af&&(c[c.length-1]=c[c.length-1]&~ua);continue}f=w&&y===wt&&kh.test(n[d])&&(h||A===Yt||A===sn||A===yn),l.push(d),c.push(y|o),A=y,h=E}let m=!1;const g=c.length;for(let d=g-2;d>=0;d--){const S=c[d]&He,y=c[d+1]&He;if(!(t[l[d+1]]&qt||S===Rt)){if(!s&&(y===Qt||y===_n&&S===Qt)){if(S===sn)continue}else if(y===wt||y===ss||y===yn)(S===Yt||S===sn)&&(c[d]=c[d]&~He|ss);else continue;c[d+1]=c[d+1]|ci,m=!0}}if(m)for(let d=0;d<g;d++)c[d]&ci||(c[d]=c[d]|vf);const p=[];for(let d=0;d<g;d++)p.push(n.slice(l[d],d+1<g?l[d+1]:n.length));return{normalized:n,spaceSources:e,texts:p,starts:l,flags:c,hasUnbroken:m}}function dE(n,e,t="normal",i="normal",r=null,s=null){const a=t==="pre-wrap",o=s===null?null:[];let l=a?n:s!==null&&s.ownSegmentBreaks?AE(n,s.starts,e,r,o):Sf(n,e,r);if(s!==null&&o.length===0)for(let m=0;m<s.starts.length;m++)o.push(s.starts[m]);let c=a?aE(n):lo(l);const h=i==="keep-all";let f,u=null,A=!1;if(e.lineBreakScan==="blink")f=M_(c,h,r);else{let m;if(e.lineBreakScan==="webkit"){if(m=s===null?xf(l,a,h,r):gE(l,s,a,h,r),!a&&l!==c&&/\r(?!\n)/.test(l)){let g=0;for(let p=0;p<l.length;p++)l.charCodeAt(p)!==13||l.charCodeAt(p+1)===10?m[g++]=m[p]:m[p+1]=m[p+1]|m[p];m[g]=m[l.length],l=l.replace(/\r(?!\n)/g,""),c=lo(l)}}else{const g=eE(l,a,h,e.graphemeTable,o);if(A=g.dropsBidiControl,m=g.breaks,s!==null)for(let S=0;S<s.atomic.length;S++){if(!s.atomic[S])continue;let y=o[S]+1;for(;y<l.length&&en(l.charCodeAt(y),!1);)y++;m[y]=m[y]&~oa}const p=g.leftOut,d=!a&&(A||p!==null)?rE(l,0,e):l.length;if(p!==null||d<l.length){let S=-1;if(p!==null&&d<l.length)for(let _=d-1;_>=0;_--){const C=l.charCodeAt(_);if(!qr(C)&&!en(C,!1))break;if(qr(C)&&p[_]!==1){S=-1;break}qr(C)&&(S=_)}const y=p===null?d:0;let E="",w=0,M=y,b=y-1;for(let _=y;_<l.length;_++){if(_<d?p!==null&&p[_]===1&&_!==S:ui(l.charCodeAt(_))){E+=l.slice(w,_),w=_+1;continue}const C=m[_];m[M++]=b>=0&&b<_-1&&C&qt&&l.charCodeAt(b)===173?C|oa:C,b=_}m[M]=m[l.length],l=E+l.slice(w),c=lo(l)}}e.lineBreakScan==="webkit"&&!a&&l!==c&&(u=new Uint16Array(c.length)),f=l===c?m:lE(l,c.length,m,t,u)}return s!==null&&mE(n,c,f,s,e.lineBreakScan),fE(c,u,f,t,e.lineBreakScan,e.hangTabs,A)}function AE(n,e,t,i,r){if(t.lineBreakScan==="webkit"||!n.includes(`
`))return n;let s="",a=0,o=n.indexOf(`
`);for(let l=0;l<e.length;l++){const c=e[l],h=l+1<e.length?e[l+1]:n.length;if(r.push(s.length+c-a),o<0||o>=h)continue;const f=n.slice(c,h),u=Sf(f,t,i);u.length!==f.length&&(s+=n.slice(a,c)+u,a=h),o=n.indexOf(`
`,h)}return a===0?n:s+n.slice(a)}function pE(n,e,t){const i=new Int32Array(e.length),r=t==="blink"?-1:13,s=t==="gecko"?12:-1;let a=0;for(let o=0;o<e.length;o++){const l=e.charCodeAt(o);for(;a<n.length;){const c=n.charCodeAt(a);if(c===l||ui(c)&&(l===32?c!==r&&c!==s:l===10))break;a++}i[o]=a++,l===10&&n.charCodeAt(a-1)===13&&n.charCodeAt(a)===10&&a++}return i}function mE(n,e,t,i,r){const s=i.sourceOffsets=pE(n,e,r),{starts:a,atomic:o}=i;for(let l=0,c=0;l<a.length;l++){for(;c<e.length&&s[c]<a[l];)c++;if(c===e.length)break;t[c]=t[c]|lr,o[l]&&s[c]===a[l]&&(t[c]=t[c]|qt,t[c+1]=t[c+1]|qt|lr)}}function gE(n,e,t,i,r){const{items:s,starts:a,atomic:o}=e,l=new Uint8Array(n.length+1);let c=-1;for(let h=0;h<a.length;h++){const f=a[h],u=h+1<a.length?a[h+1]:n.length;if(f===u)continue;const A=n.charCodeAt(f);if(u-f>1||A===8232||A===8233){const m=xf(s[h].text,t,i,r);for(let g=1;g<=u-f;g++)l[f+g]=m[g]}if(c>=0&&!o[h]&&!o[c]){const m=n.charCodeAt(f-1);(!t&&(A!==13&&ui(A)||m!==13&&ui(m))||y_(s[c].text,s[h].text,i,r))&&(l[f]=l[f]|qt)}c=h}return l}const xE=" aa ab ady af ak am ar as ast av ay az ba be bg bi bn bo bs ca ce ceb ch chk cs cy da de dv dz ee efi el en es et eu fa fi fil fj fo fr fur fy ga gaa gd gil gl gn gsw gu ha haw he hi hil ho hr ht hu hy id ig ii ilo inh is it iu ja jv ka kaj kam kbd kha kk kl km kn ko kok kos kpe krc ks ku kum ky la lah lb lez ln lo lt lv mai mdf mg mh mi mk ml mn mr ms mt my myv na nb ne niu nl nn nr nso ny oc om or os pa pag pap pau pl pon ps pt qu rm rn ro ru rw sa sah sat sd se sg si sid sk sl sm so sq sr ss st su sv sw ta te tet tg th ti tig tk tkl tl tn to tpi tr trv ts tt tvl tw ty tyv udm ug uk und ur uz ve vi wal war wo xh yap yo za zh zh-hk zh-tw zu ",_E=" arab armn bali batk beng blis bopo brah brai bugi buhd cans cham cher cirt copt cprt cyrl cyrs deva dsrt egyd egyh egyp ethi geok geor glag goth grek gujr guru hang hani hano hans hant hebr hira hmng hrkt hung inds ital java jpan kali kana khar khmr knda kore laoo latf latg latn lepc limb lina linb mand maya mero mlym mong mymr nkoo ogam orkh orya osma perm phag phnx plrd qaai roro runr sara shaw sinh sylo syrc syre syrj syrn tagb tale talu taml telu teng tfng tglg thaa thai tibt ugar vaii visp xpeo xsux yiii zxxx ",EE=["","Zapfino","Menlo","Kefa III","Geeza Pro","Snell Roundhand","Kohinoor Bangla","Kokonor|Kailasa","Kailasa","Galvji","Noto Sans Tagalog","Kohinoor Gujarati","Lucida Grande|Arial Hebrew","Apple Chancery|Arial Hebrew","Courier New","ITF Devanagari|Kohinoor Devanagari","Kohinoor Devanagari","Noto Sans Armenian","Euphemia UCAS","Hiragino Mincho ProN","Hiragino Sans","Helvetica","Khmer MN|Khmer Sangam MN","Khmer Sangam MN","Kannada MN|Noto Sans Kannada","Noto Sans Kannada","AppleMyungjo|Apple SD Gothic Neo","Apple SD Gothic Neo","Noto Nastaliq Urdu","Lao MN|Lao Sangam MN","Lao Sangam MN","Malayalam MN|Malayalam Sangam MN","Malayalam Sangam MN","Noto Serif Myanmar|Noto Sans Myanmar","Noto Sans Myanmar","Oriya MN|Noto Sans Oriya","Noto Sans Oriya","Mukta Mahee","Sinhala MN|Sinhala Sangam MN","Sinhala Sangam MN","Tamil Sangam MN","Kohinoor Telugu","Thonburi","Songti TC|PingFang HK","PingFang HK","Songti SC|PingFang SC","PingFang SC","Songti TC|PingFang TC","PingFang TC","Songti TC|PingFang MO","PingFang MO"],zh={"":[0,0,0,1,2],am:[3,3,3,3,2],ar:[4,4,4,4,2],bg:[0,0,5,5,2],bn:[6,6,6,6,2],bo:[7,8,7,7,2],chr:[9,9,9,9,2],ckb:[4,4,4,4,2],fa:[4,4,4,4,2],fil:[10,10,10,10,2],gu:[11,11,11,11,2],he:[0,12,13,0,14],hi:[15,16,16,16,2],hy:[17,17,17,17,2],iu:[18,18,18,18,2],ja:[19,20,19,19,2],ka:[21,0,21,21,2],km:[22,23,22,22,2],kn:[24,25,24,24,2],ko:[26,27,26,26,2],ks:[28,28,28,28,2],lo:[29,30,29,29,2],lrc:[4,4,4,4,2],ml:[31,32,31,31,2],my:[33,34,33,33,2],mzn:[4,4,4,4,2],or:[35,36,35,35,2],pa:[37,37,37,37,2],ps:[4,4,4,4,2],ro:[0,0,5,5,2],ru:[0,0,5,5,2],sd:[4,4,4,4,2],si:[38,39,38,38,2],sr:[0,0,5,5,2],ta:[40,40,40,40,2],te:[41,41,41,41,2],th:[42,42,42,42,2],tr:[0,0,5,5,2],ug:[4,4,4,4,2],uk:[0,0,5,5,2],ur:[28,28,28,28,2],yi:[0,12,13,0,14],yue:[43,44,43,43,2],zh:[45,46,45,45,2],"kk-arab":[4,4,4,4,2],"ks-arab":[4,4,4,4,2],"ks-deva":[0,0,0,1,2],"ms-arab":[4,4,4,4,2],"pa-arab":[4,4,4,4,2],"sd-deva":[0,0,0,1,2],"ur-arab":[4,4,4,4,2],"uz-arab":[4,4,4,4,2],"yue-hans":[45,46,45,45,2],"zh-hant":[47,48,47,47,2],"zh-hk":[43,44,43,43,2],"zh-mo":[49,50,49,49,2],"zh-tw":[47,48,47,47,2],"pa-aran-pk":[28,28,28,28,2],"yue-hant-mo":[49,50,49,49,2],"zh-hant-hk":[43,44,43,43,2],"zh-hant-mo":[49,50,49,49,2]};let Tn=null,ME=null;const dl=96,wf="0.000001px",vE=1<<18,SE=/\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji}\uFE0F/u,wE=/[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u,CE=["serif","sans-serif","cursive","fantasy","monospace"],yE=/("[^"]*"|'[^']*')|(^|,)(\s*)(serif|sans-serif|cursive|fantasy|monospace)(?=\s*(?:,|$))/gi,Xl=/\dpx(?:\s*\/\s*\S+)?\s+/,Cf=/(?:"[^"]*"|'[^']*'|[^,])+/g;function bE(n,e){let t=n.toLowerCase().replaceAll("_","-"),i=null;for(let a=t;i===null;)if(xE.includes(` ${a} `))i=a==="zh";else{const o=a.lastIndexOf("-");if(o<0||a.endsWith("-zyyy"))return null;_E.includes(` ${a.slice(o+1)} `)&&(i=a.endsWith("-hani")),a=a.slice(0,o)}i&&(t="zh-hans");let r=zh[t];for(;r===void 0;)t=t.slice(0,Math.max(0,t.lastIndexOf("-"))),r=zh[t];const s=[];for(let a=0;a<r.length;a++){const o=r.indexOf(r[a]);if(o<a){s.push(s[o]);continue}const l=EE[r[a]],c=l.indexOf("|"),h=c<0?l:TE(e,l.slice(0,c))?l.slice(0,c):l.slice(c+1);s.push(h===""?"":`"${h}"`)}return s}const Vh="Hamburg 한中 नम សួ ನಮ ສະ നമ မင ନମ ආය བཀ";function TE(n,e){for(const t of["monospace","serif"]){n.font=`16px ${t}`;const i=n.measureText(Vh).width;if(n.font=`16px "${e}", ${t}`,n.measureText(Vh).width!==i)return!0}return!1}function BE(n,e){const t=Xl.exec(n);if(t===null)return n;const i=t.index+t[0].length;return n.slice(0,i)+n.slice(i).replace(yE,(r,s,a,o,l)=>{const c=s===void 0?e[CE.indexOf(l.toLowerCase())]:"";return c===""?r:a+o+c})}function RE(n){if(n.hyphenText!==null)return n.hyphenText;const e=n.canvasFont,t=Xl.exec(e);let i="-";if(t!==null&&Tt("‐",n).width!==Tt("-",n).width){const r=pi(n),s=t.index+t[0].length,a=e.slice(0,s),o=e.slice(s).match(Cf)??[],l=a+"monospace",c=a+"serif";if(si(r,l," ")!==si(r,c," ")&&si(r,l,"‐")!==si(r,c,"‐"))for(let h=0;h<o.length;h++){const f=`${a}${o[h]}, monospace`,u=`${a}${o[h]}, serif`;if(si(r,f," ")===si(r,u," ")){si(r,f,"‐")===si(r,u,"‐")&&(i="‐");break}}r.font=e}return n.hyphenText=i,i}function si(n,e,t){return n.font=e,n.measureText(t).width}function IE(n){Tn!==null&&Tn.segments>vE&&Pf();let e=null;if(typeof document<"u"){const t=document.documentElement?.lang;typeof t=="string"&&(e=t)}return e===""&&n.laysOutUnderDefaultLocale?x_():e}const DE=(1<<30)-1;function PE(n,e){if(!Number.isFinite(0))throw new RangeError("letterSpacing must be a finite number of CSS px, not 0");if(!e.letterSpacingInAppUnits)return 0;const i=Math.fround(Math.fround(0)*60);return Math.min(Math.round(Math.abs(i)),DE)*Math.sign(i)/60}function Vn(n){const e=[];for(let t=0;t<n;t++)e.push(0);return e}const Wh=2**20,fa=[];function LE(n,e){if(!e.state.takesLetterSpacing)return fa;const t=new Int32Array(n.length),i=Ui(Ai().graphemeTable,n,0,n.length,t),r=i<=dl,s=e.glyphCounts;let a=null,o=fa;try{let l=0;for(let c=0,h=0;c<i;h=t[c++]){const f=n.slice(r?0:h,t[c]);let u=s.get(f);u===void 0&&(a===null&&(a=pi(e),a.letterSpacing=`${Wh}px`),u=Math.round(a.measureText(f).width/Wh),s.set(f,u));const A=u-(r?l:0)-1;l=u,!(A===0&&o.length===0)&&(o.length===0&&(o=Vn(i)),o[c]=A)}}finally{a!==null&&(a.letterSpacing=e.letterSpacing)}return o}function Tt(n,e){return e.metrics.get(n)??bf(e.metrics,n,n,e)}function yf(n,e){return e.followingSpaceMetrics.get(n)??bf(e.followingSpaceMetrics,n,n+" ",e)}function bf(n,e,t,i){const r={width:pi(i).measureText(t).width,emojiCount:-1,fit:null,spaceKerning:null,extraSpacings:null};return n.set(e,r),i.state.segments++,!i.measuredKana&&FE.test(e)&&(i.measuredKana=!0),r}const FE=/[\u3041-\u30FF]/,Tf=/[\u3041-\u30FF]{2}/,Al=191,Bf={after:0,before:0};function Ks(n){return n>=12353&&n<=12438||n>=12449&&n<=12538||n>=13312&&n<=40959||n>=63744&&n<=64255}function UE(n){return Pt(n,ls)||(n&63488)===55296||Ks(n)||n>=44032&&n<=55203}function NE(n){if(n.spaceKerning===void 0){const e=pi(n);let t="\u2028";for(let s=33;s<=126;s++)t+=String.fromCharCode(s)+"\u2028";const i=e.measureText(t).width;e.fontKerning="none";const r=e.measureText(t).width;e.fontKerning="auto",n.spaceKerning=i!==r&&e.measureText("\u2028").width===Tt(" ",n).width?new Map:null}return n.spaceKerning}function Yh(n,e,t,i){const r=n<<1|(e?1:0);let s=i.get(r);if(s===void 0){if(s=0,!UE(n)){const a=String.fromCharCode(n),o=pi(t).measureText(e?"\u2028"+a:a+"\u2028").width;s=o-Tt(a,t).width-Tt(" ",t).width,Math.abs(s)<=o/4194304&&(s=0)}i.set(r,s)}return s}function GE(n,e,t,i){let r=0,s=n.length-1;for(;r<s&&Pt(n.charCodeAt(r),ns);)r++;for(;s>r&&Pt(n.charCodeAt(s),ns);)s--;const a=r<s&&Pt(n.charCodeAt(r+1),ls)?0:Yh(n.charCodeAt(r),!0,t,i),o=Yh(n.charCodeAt(s),!1,t,i);return e.spaceKerning=o===0&&a===0?Bf:{after:o,before:a}}function OE(n){return n.spaceWidth??=Tt(" ",n).width}const Xh="プダグタノムブイメえずぺ";function pl(n){const e=n.state;return e.wholeRunContext===null&&(e.wholeRunContext=Df(e.language),e.wholeRunContext.textRendering="optimizeLegibility"),e.wholeRunFont!==n.kanaFont&&(e.wholeRunContext.font=e.wholeRunFont=n.kanaFont),e.wholeRunContext}function QE(n,e){const t=n.width/4194304;return Math.abs(n.width-e.width)<=t&&Math.abs(n.actualBoundingBoxLeft-e.actualBoundingBoxLeft)<=t&&Math.abs(n.actualBoundingBoxRight-e.actualBoundingBoxRight)<=t}function Rf(n){if(n.kanaKerning===void 0){n.kanaKerning=null;const e=n.canvasFont,t=Xl.exec(e),i=t===null?0:t.index+t[0].length,r=t===null?null:e.slice(i).match(Cf),s=r===null?1:r.length;let a=null;for(let o=0;o<s;o++){const l=o===0?e:e.slice(0,i)+r.slice(o).join(",");n.kanaFont=l;const c=pl(n),h=c.measureText(Xh).width;c.fontKerning="none";const f=c.measureText(Xh);if(c.fontKerning="auto",a===null)a=f;else if(!QE(a,f))break;if(h!==f.width){if(o>0){let u="";for(let d=12353;d<=12438;d++)u+=String.fromCharCode(d,12290);const A=c.measureText(u).width;n.kanaFont=e;const m=pl(n),g=m.measureText(u).width;m.fontKerning="none";const p=m.measureText(u).width;if(m.fontKerning="auto",g===p||Math.abs(A-g)>g/4194304)break;n.kanaFont=l}n.kanaKerning=new Float64Array(Al*Al).fill(NaN);break}}n.kanaKerning===null&&(n.kanaFont=e)}return n.kanaKerning}function If(n,e,t,i,r){const s=n.charCodeAt(t);if(s<12353||s>12543)return 0;const a=n.charCodeAt(t-1);if(a<12353||a>12543)return 0;if(t>e){if(!Ks(s))return 0;let c=t-1,h=a;for(;h>=12353&&h<=12543&&!Ks(h);){if(c===e)return 0;h=n.charCodeAt(--c)}if(h>=11904&&!Ks(h))return 0}const o=(a-12353)*Al+s-12353,l=r[o];return Number.isNaN(l)?r[o]=kE(n.slice(t-1,t+1),i):l}function kE(n,e){const t=pl(e).measureText(n).width,i=t-Tt(n[0],e).width-Tt(n[1],e).width;return Math.abs(i)<=t/4194304?0:i}function Bn(n,e,t){return cs(n,Tt(n,e),e,t)}function HE(n){return n.includes("Firefox/")?"gecko":n.includes("AppleWebKit/537.36")?n.includes("Chrome/")||n.includes("Chromium/")?"blink":null:n.includes("AppleWebKit/")?"webkit":null}function Ai(){return ME??=zE()}function zE(){const n=typeof navigator>"u"?"":navigator.userAgent??"",e=HE(n)??"blink";return{lineBreakScan:e,graphemeTable:e==="webkit"?"apple/char":e==="gecko"?"gecko/char":"chromium/char",lineFitEpsilon:e==="webkit"?1/64:.005,cutWordFit:e==="blink"?"reshaped-lines":"segment-prefixes",prefixFitMinWidth:e==="webkit"?0:80,cutWordKeepsLigatures:e==="gecko",measureTextWithFollowingSpace:e==="webkit",kernsAcrossCanvasWords:e==="blink",letterSpaceDiscretionaryHyphen:e!=="blink",letterSpacingInAppUnits:e==="gecko",canvasLetterSpacingDropsLigatures:e!=="webkit",unspacedCursive:e==="blink"?"run":e==="gecko"?"cluster":"none",letterSpacesGlyphs:e==="webkit",unfitHyphenRetreat:e==="blink"?"reduced-width":e==="gecko"?"full-width":"full-width-or-first",hyphenFromPrimaryFont:e!=="gecko",letterSpaceTabStops:e!=="webkit",letterSpaceTabs:e==="webkit",tabMinimumCharacter:e==="gecko"?"0":" ",tabsInAppUnits:e==="gecko",hangTabs:e!=="gecko",zeroWidthGlueTakesLine:e!=="gecko",hidesControlCharacters:e==="gecko",hanKerning:e==="blink",hangsIdeographicSpace:e!=="webkit",laysOutUnderDefaultLocale:e==="blink",namesGenericFamiliesByLanguage:e==="webkit"&&!/^(?:Linux|Win32|Haiku|$)/.test(navigator.platform),hardBreakItemRetreat:e==="blink"?"item":e==="webkit"?"fit":"last-grapheme",paddedOpeningFit:e==="blink"?"start":e==="webkit"?"placed":"both",emptyAtomicAlwaysFits:e==="gecko",hangsSpacesPerTextFrame:e==="gecko",testsHyphenBeforeAtomic:e!=="webkit",transformsSegmentBreaksAcrossItems:e==="blink"}}function VE(n){const e=n.match(/(?:^|\D)(\d+(?:\.\d+)?)\s*px/);return e?parseFloat(e[1]):16}function WE(n){return wE.test(n)}function YE(n,e){let t=e.emojiCorrection;if(t!==null)return t;const i=VE(n),r=e.emojiWidth!==0,s=e.emojiWidth=pi(e).measureText("😀").width;if(t=0,s>i+.5&&typeof document<"u"){const a=XE(n);if(Number.isNaN(a))return 0;if(s-a>.5&&(t=s-a,r)){for(const o of e.metrics.values())o.fit=null;for(const o of e.followingSpaceMetrics.values())o.fit=null}}return e.emojiCorrection=t,t}function XE(n){const e=document.body;if(e===null&&document.head===null)return NaN;const t=document.createElement("span");t.style.cssText="all:initial!important;-webkit-locale:inherit!important;display:inline-block!important;visibility:hidden!important;position:absolute!important",t.style.setProperty("font",n,"important"),t.textContent="😀";let i=e===null?NaN:Kh(e,t);return Number.isNaN(i)&&(i=Kh(document.documentElement,t)),i}function Kh(n,e){n.appendChild(e);const t=e.getBoundingClientRect().width,i=parseFloat(getComputedStyle(e).width);return n.removeChild(e),Math.abs(t-i)<=i*1e-5?t:i}const KE=2**-20,qE=2**-17;function JE(n,e){const t=Tt(n,e).width,i=Math.round(t/e.emojiWidth);return Math.abs(t-i*e.emojiWidth)<=t*KE?i:0}const $E=/[\p{Extended_Pictographic}\p{Emoji_Component}\uFE0E]+/gu;function ZE(n,e){const t=new Int32Array(n.length),i=Ui(Ai().graphemeTable,n,0,n.length,t);let r=0;for(let s=0,a=0;s<i;a=t[s++]){const o=n.slice(a,t[s]);if(!SE.test(o))continue;const l=o.match($E);for(let c=0;c<l.length;c++)r+=JE(l[c],e)}return r}function cs(n,e,t,i){return i===0?e.width:(e.emojiCount<0&&(e.emojiCount=ZE(n,t)),e.width-e.emojiCount*i)}function jE(n,e,t,i,r,s=null){if(e.fit!==null&&e.fit.mode===r)return e.fit;const a=Ai(),o=new Int32Array(n.length),l=Ui(a.graphemeTable,n,0,n.length,o);if(l<=1)return e.fit={mode:r,advances:null,lineStartExtras:null};let c,h=null,f=!1;if(r==="reshaped-lines"){const u=cs(n,e,t,i)-(s??0),A=Ns(n,o,l,"sum-graphemes",e,t,i,s);if(c=A,!qh(A,u)){c=Ns(n,o,l,"pair-context",e,t,i,s),f=l>dl||qh(c,u),f||(c=Ns(n,o,l,"segment-prefixes",e,t,i,s)),h=[0];for(let m=1;m<l;m++)h.push(A[m]-c[m])}}else{const u=r==="segment-prefixes"&&l<=dl;f=r!=="sum-graphemes"&&!u,c=Ns(n,o,l,f?"pair-context":r,e,t,i,s),u&&a.cutWordKeepsLigatures&&eM(n,o,c,t,i)}if(a.kernsAcrossCanvasWords&&t.kanaKerning!==null&&Tf.test(n)){const u=Rf(t);if(u!==null)for(let A=1;A<l;A++){const m=If(n,f&&A>1?o[A-2]:0,o[A-1],t,u);m>0?c[A-1]=c[A-1]+m:m<0&&(c[A]=c[A]+m,h??=Vn(l),h[A]=h[A]-m)}}return e.fit={mode:r,advances:c,lineStartExtras:h}}function eM(n,e,t,i,r){if(!i.state.shapesLetterSpaced||i.letterSpacing!=="0px")return;let s=0;for(let a=1;a<t.length;a++){const o=e[a-1],l=Bn(n.slice(o,e[a]),i,r);Math.round((t[a]-l)*60)!==0&&tM(n.slice(a===1?0:e[a-2],e[a]),i)?(t[s]=t[s]+t[a],t[a]=0):s=a}}function tM(n,e){let t=e.ligaturePairs.get(n);if(t===void 0){const i=pi(e),r=Tt(n,e).width;i.letterSpacing=wf,t=i.measureText(n).width!==r,i.letterSpacing="0px",e.ligaturePairs.set(n,t)}return t}function qh(n,e){let t=0;for(let i=0;i<n.length;i++)t+=n[i];return Math.abs(t-e)<=e*qE}function Ns(n,e,t,i,r,s,a,o){const l=i==="segment-prefixes",c=i==="pair-context",h=[];let f=0,u=0;for(let A=0,m=0;A<t;m=e[A++]){const g=e[A];if(l){const d=o!==null&&A===t-1?cs(n,r,s,a)-o:Bn(n.slice(0,g),s,a);h.push(d-u),u=d;continue}const p=Bn(n.slice(m,g),s,a);h.push(c&&A>0?Bn(n.slice(f,g),s,a)-u:p),f=m,u=p}return o!==null&&!l&&(h[t-1]=h[t-1]+r.width-Tt(n,s).width-o),h}function nM(n,e,t){(Tn===null||Tn.language!==e)&&(Tn=rM(e));const i=Tn,r=t&&i.shapesLetterSpaced,s=r?i.letterSpacedFonts:i.fonts;i.font="";let a=s.get(n);if(a===void 0){const o=i.genericFamilies===null?n:BE(n,i.genericFamilies);if(!iM(i.context,o))throw new RangeError(`font must be a font string Canvas takes, a size in px then a family, such as 16px Inter, not "${n}"`);a={state:i,canvasFont:o,letterSpacing:r?wf:"0px",metrics:new Map,followingSpaceMetrics:new Map,spaceKerning:void 0,measuredKana:!1,kanaKerning:void 0,kanaFont:o,emojiCorrection:null,emojiWidth:0,hyphenText:null,spaceWidth:null,hanKerning:void 0,ligaturePairs:new Map,glyphCounts:new Map},s.set(n,a)}return a}function iM(n,e){return n.font="1px serif",n.font=e,n.font!=="1px serif"?!0:(n.font="2px serif",n.font=e,n.font!=="2px serif")}function pi(n){const e=n.state;return e.font!==n.canvasFont&&(e.context.font=e.font=n.canvasFont),e.letterSpacing!==n.letterSpacing&&(e.context.letterSpacing=e.letterSpacing=n.letterSpacing),e.context}function Df(n){let e=null;if(typeof OffscreenCanvas<"u"?e=new OffscreenCanvas(1,1).getContext("2d"):typeof document<"u"&&(e=document.createElement("canvas").getContext("2d")),e===null)throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");return n!==null&&"lang"in e&&(e.lang=n),e}function rM(n){const e=Df(n),t=Ai(),i=typeof e.letterSpacing=="string";return{language:n,context:e,font:"",letterSpacing:"0px",wholeRunContext:null,wholeRunFont:"",genericFamilies:n!==null&&t.namesGenericFamiliesByLanguage?bE(n,e):null,takesLetterSpacing:i,shapesLetterSpaced:i&&t.canvasLetterSpacingDropsLigatures,fonts:new Map,letterSpacedFonts:new Map,segments:0}}function Pf(){Tn!==null&&(Tn.fonts.clear(),Tn.letterSpacedFonts.clear(),Tn.segments=0)}const Ti=0,Er=1,Xn=2,da=3,Kl=4,ql=5,Lf=6,Ff=7,Uf=8,Nf=9,Jl=10,Jh=/\p{Ps}/uy,$h=/\p{Pe}/uy,sM=/[\u2018-\u301F\uFF08-\uFF60]/;function Gs(n){return n>=8216&&n<=12319||n>=65288&&n<=65376}function aM(n){return sM.test(n)}function Gf(n,e){const t=n.charCodeAt(e);switch(t){case 8216:case 8220:return Nf;case 8217:case 8221:return Jl;case 12289:case 12290:case 65292:case 65294:return Lf;case 65306:return Ff;case 65307:return Uf;case 183:case 8231:case 12288:case 12539:return da;default:{if(t<40||!Pt(t,lf))return Ti;const i=t>=12288&&t<=12351||t>=65281&&t<=65376||t>=65504&&t<=65510;return Jh.lastIndex=$h.lastIndex=e,Jh.test(n)?i?Er:Kl:$h.test(n)?i?Xn:ql:Ti}}}function oM(n,e,t){const i=String.fromCharCode(e);let r,s,a;if(ml(e)){const c=n.measureText("中"+i);r=c.width-t,a=c.actualBoundingBoxRight-t,s=-n.measureText(i+"中").actualBoundingBoxLeft}else{const c=n.measureText(i);r=c.width,s=-c.actualBoundingBoxLeft,a=c.actualBoundingBoxRight}const o=r/2,l=a<=o?Xn:s>=o?Er:a-s<=o&&s>=o/2?da:Ti;return{advance:r,type:l}}function ar(n,e,t){let i=n.trims.get(e);if(i===void 0){const r=String.fromCharCode(e);i=2*Tt(r,t).width-Tt(r+r,t).width,n.trims.set(e,i)}return i}function lM(n){if(n.hanKerning!==void 0)return n.hanKerning;const e={typeForDot:Ti,typeForColon:Ti,typeForSemicolon:Ti,quoteFullwidth:!1,trims:new Map};if(ar(e,12300,n)<=.001)return n.hanKerning=null,null;const t=Tt("中",n).width,i=pi(n),r=[12289,12290,65292,65294,65306,65307,8220,8216,8221,8217].map(a=>oM(i,a,t)),s=(a,o)=>{for(let l=a+1;l<o;l++)if(r[l].advance!==r[a].advance||r[l].type!==r[a].type)return Ti;return r[a].type};return e.typeForDot=s(0,4),e.typeForColon=r[4].type,e.typeForSemicolon=r[5].type,e.quoteFullwidth=s(6,8)===Er&&s(8,10)===Xn,n.hanKerning=e,e}function vi(n,e,t){const i=Gf(e,t);switch(i){case Lf:return n.typeForDot;case Ff:return n.typeForColon;case Uf:return n.typeForSemicolon;case Nf:return n.quoteFullwidth?Er:Kl;case Jl:return n.quoteFullwidth?Xn:ql;default:return i}}function co(n,e){return e===Er&&(n===Er||n===da||n===Xn||n===Kl)?1:n===Xn&&(e===Xn||e===da||e===ql)?-1:0}function ml(n){return n>=12288&&n<=12543||n>=65072&&n<=65135||n>=65280&&n<=65519&&n!==65307}function cM(n,e,t,i){const r={widthTrims:null,lineStartExtras:null,lineEndTrims:null,overflowLineEndTrims:null},s=lM(n);if(s===null)return r;const{flags:a,starts:o,normalized:l}=e,c=a.length,h=(f,u)=>{r.widthTrims??=Vn(i-t),r.widthTrims[f-t]=r.widthTrims[f-t]+u};for(let f=t;f<i;f++){if((a[f]&He)!==wt)continue;const u=o[f],A=f+1<c?o[f+1]:l.length,m=l.charCodeAt(u);if(f>0&&Gs(m)&&co(vi(s,l,u-1),vi(s,l,u))===1){const S=ar(s,m,n);r.lineStartExtras??=Vn(i-t),r.lineStartExtras[f-t]=S,h(f,S)}for(let S=u+1;S<A;S++){const y=l.charCodeAt(S-1),E=l.charCodeAt(S);if(!(Gs(y)||Gs(E))||ml(y)===ml(E))continue;const w=co(vi(s,l,S-1),vi(s,l,S));w!==0&&h(f,ar(s,w===1?E:y,n))}const g=l.charCodeAt(A-1);if(!Gs(g))continue;const p=f+1===c;if(!p&&co(vi(s,l,A-1),vi(s,l,A))===-1){h(f,ar(s,g,n));continue}const d=Gf(l,A-1);d!==Xn&&d!==Jl||vi(s,l,A-1)!==Xn||(p||(a[f+1]&He)===wt&&!(a[f+1]&ci)?(r.lineEndTrims??=Vn(i-t),r.lineEndTrims[f-t]=ar(s,g,n)):(r.overflowLineEndTrims??=Vn(i-t),r.overflowLineEndTrims[f-t]=ar(s,g,n)))}return r}function Zh(n,e,t){return e===Yt?0:Ui(t,n,0,n.length,null)}function hM(n,e,t){return e>1?n+(e-1)*t:n}const ho=[741,745,768,879,1425,1469,1471,1487,1536,4255,4352,4607,4957,4959,5888,6319,6400,6479,6528,6623,6656,7423,7616,7679,8400,8447,9977,9977,11503,11505,12330,12335,12441,12444,42620,42621,42736,42737,43008,44031,55216,55295,65024,65039,65056,65071,68096,68191,69632,69839,69888,70111,70144,70223,70320,70527,70656,70879,71040,71263,71296,71375,71424,72895,92928,93071,125184,125279,127462,127487,127995,127999,917504,917631,917760,917999],uM=/\p{Extended_Pictographic}/u,fM=ai(String.raw`^\p{M}`,"u"),dM=/^[\p{Nd}:\-/×,.+\u2013\u2014]+$/u,AM=/^[\p{Cc}\u2028\u2029]$/u;function uo(n){let e=!1;for(let t=0;t<n.length;){const i=n.codePointAt(t);if(t+=i>65535?2:1,i===8205&&e)return!0;e=i>65535&&uM.test(String.fromCodePoint(i));for(let r=0;r<ho.length&&i>=ho[r];r+=2)if(i<=ho[r+1])return!0}return!1}const pM=/[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF\u200F\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}\u202A-\u202E\u2066-\u2069]/u;function jh(n){return n===En||n===_n}const gl=16,tn=31,Of=5,mM=1024,gM=2048,xM=4096,Qf=8192,_M=14;let EM=null;function Aa(n){return jx[Jn(EM??=Ea("chromium/script"),n)]}function qs(n,e){const t=n.codePointAt(e),i=Aa(t),r=e+(t>65535?2:1);if(i&mM&&r<n.length){const s=Aa(n.codePointAt(r))>>Of&tn;if(s!==0)return i&~tn|s}return i}function MM(n){for(let e=0;e<n.length;e++){if(n.charCodeAt(e)<128)continue;const t=Aa(n.codePointAt(e));if((t&tn)===gl||(t>>Of&tn)===gl)return!0}return!1}function kf(n,e,t){const{openBrackets:i}=n;for(;n.read<t||n.scripts===tn&&n.read<e.length;){const r=e.codePointAt(n.read),s=qs(e,n.read);let a=s&tn;const o=s&Qf?i.lastIndexOf(r-(s>>_M)):-1;if(o>=0&&(i[o+1]!==0&&(a=i[o+1]),i.length=o+2),n.scripts&a)n.scripts&=a;else{for(let l=i.length-1;l>0&&i[l]===0;l-=2)i[l]=n.scripts&-n.scripts;n.scripts=a}s&xM&&(i.length===64&&i.splice(0,2),i.push(r,0)),n.read+=r>65535?2:1}return n.scripts}function vM(n,e,t,i){let r=qs(e,t)&tn;for(let s=t;r===tn&&s+1<i&&Pt(e.charCodeAt(s),ns);s++)r=qs(e,s+1)&tn;if(r===tn)return!0;for(let s=t-2;s>=0;s--){(e.charCodeAt(s)&64512)===56320&&s>0&&s--;const a=qs(e,s);if(a&Qf)break;const o=a&tn;if(o!==tn){if(!(o&o-1))return(o&r)!==0;break}}return(kf(n,e,t)&r)!==0}function SM(n,e,t,i,r){const s=new Int32Array(t-e),a=Ui(i,n,e,t,s);let o=null;for(let l=0,c=e;l<a;c=s[l++])(r===null?(Aa(n.codePointAt(c))&gM)!==0:kf(r,n,c+1)===gl&&n.charCodeAt(c)!==160)&&(o??=[]).push(l);return o}function wM(n,e,t){const{normalized:i,spaceSources:r,starts:s,flags:a}=n;let o=e+1;for(;o<t&&(a[o]&He)===Yt;)o++;if(o>=t)return null;const l=a[o]&He,c=s[o];return l!==En&&l!==_n||(r===null?i.charCodeAt(c):r[c])!==32?null:i.slice(s[e+1],c)}function CM(n,e,t){return yf(n,e).width-Tt(n,e).width-t}function yM(n,e,t,i,r,s,a,o){if(i===null)return 0;const{texts:l,flags:c}=n;let h=e+1;for(;h<t&&(c[h]&He)===sn;)h++;if(h>=t||(c[h]&He)!==wt)return 0;const f=l[h],u=cs(i,r,s,a)+Bn(f,s,a),A=Bn(i+f,s,a);return u-A>o?u-A:0}function bM(n,e,t,i,r,s){return cs(n,e,t,i)-r+s}function TM(n,e,t,i,r,s,a,o,l,c){const{normalized:h,texts:f,starts:u,flags:A}=n,m=0,g=t===A.length?h:t===e+1?f[e]:h.slice(m,t<A.length?u[t]:h.length),p=c===null?[]:c.widths,d=c===null?new Uint8Array(t-e):c.segmentFlags,S=c===null?[]:c.breakableFitAdvances,y=[],E=p.length,w=s!==0,M=nM(i,o,w),b=WE(g)?YE(i,M):0,_=g.includes(" "),C=_||g.includes("	")?OE(M):0,B=a.letterSpaceTabStops?s:0,F=a.tabsInAppUnits?(Math.round(C*60)+Math.round(B*60))*8/60:(C+B)*8;let U=0,Q=a.kernsAcrossCanvasWords&&g.includes(" ")?NE(M):null;Q!==null&&pM.test(g)&&(Q=null);const I={read:0,scripts:tn,openBrackets:[]};let G=0;const J=w&&a.unspacedCursive!=="none"&&MM(g);let Y=!w,te=null,k=null,$=null,ne=null;const Ie=a.unfitHyphenRetreat==="full-width-or-first";for(let ie=e,de=E;ie<t;ie++,de++){const re=f[ie],ve=A[ie],Oe=ve&He;let Le=0,Ue=0,we=null;switch(Oe){case wt:{if(a.hidesControlCharacters&&AM.test(re)){Ue=1;break}const Se=a.measureTextWithFollowingSpace&&_?wM(n,ie,t):null,et=Se==="",Ze=et?yf(re,M):Tt(re,M);$=re,ne=Ze;let Ke=Se===null||et?0:CM(re+Se,M,C);if(Q!==null&&Ze.spaceKerning!==Bf){const De=ie>e&&jh(A[ie-1]&He),T=ie+1<t&&jh(A[ie+1]&He);if(De||T){const x=Ze.spaceKerning??GE(re,Ze,M,Q);T&&(Ke=Math.max(x.after,0),G=Math.min(x.after,0)),De&&x.before!==0&&!((A[ie-1]&He)===_n&&(ie===e+1||(A[ie-2]&He)===Rt))&&vM(I,g,u[ie]-m,u[ie]-m+re.length)&&(p[de-1]=p[de-1]+x.before)}}Le=bM(re,Ze,M,b,et?C:0,Ke);let tt=null,ot=fa;if(w&&(Ue=Zh(re,Oe,a.graphemeTable),J&&(tt=SM(g,u[ie]-m,u[ie]-m+re.length,a.graphemeTable,a.unspacedCursive==="run"?I:null),tt!==null&&(Le-=tt.length*s)),a.letterSpacesGlyphs)){ot=Ze.extraSpacings??=uo(re)?LE(re,M):fa;for(let De=0;De<ot.length;De++)Le+=ot[De]*s}if(ve&ua||re.length===1)break;const D=s!==0?"segment-prefixes":dM.test(re)?"pair-context":Ze.width<a.prefixFitMinWidth?"sum-graphemes":a.cutWordFit,nt=jE(re,Ze,M,b,D,et?C:null);if(we=nt.advances,we===null)break;if(nt.lineStartExtras!==null&&((te??=new Array(t-e).fill(null))[ie-e]=nt.lineStartExtras),Ke!==0&&(we=we.slice(),we[we.length-1]=we[we.length-1]+Ke),ot.length!==0){we=we.slice();for(let De=0;De<ot.length;De++)we[De]=we[De]+ot[De]*s}if(tt!==null){we=we.slice();for(let De=0;De<tt.length;De++)we[tt[De]]=we[tt[De]]-s}break}case En:case _n:case Yt:Le=Bn(re,M,b)+G,G=0,w&&(Ue=Zh(re,Oe,a.graphemeTable));break;case Qt:a.letterSpaceTabs&&(Ue=1),U===0&&(U=Bn(a.tabMinimumCharacter,M,b)/2);break;case yn:{Le=Bn(re,M,b);const Se=ie+1<t?f[ie+1]:"";w&&(ie>e&&(A[ie-1]&He)===wt&&uo(f[ie-1])||fM().test(Se)&&uo(Se))&&(Ue=1);break}}Oe!==wt&&Oe!==En&&Oe!==Yt&&(Y=!1),Oe!==wt&&Oe!==sn&&($=null),d[de]=ve&~ua|(w&&Ue>0?pr:0),p[de]=hM(Le,Ue,s),S[de]=we,y!==null&&(y[ie-e]=re),Oe!==wt&&re.charCodeAt(0)===173?(k??=Vn(ie-e),k[ie-e]=Ie?0:yM(n,ie,t,$,ne,M,b,a.lineFitEpsilon)):k!==null&&(k[ie-e]=0)}const Be=k===null?"-":a.hyphenFromPrimaryFont?RE(M):"‐",at=Bn(Be,M,b)+(s===0?0:s*(a.letterSpaceDiscretionaryHyphen?2:1));let ke={widthTrims:null,lineStartExtras:null,lineEndTrims:null,overflowLineEndTrims:null};if(a.hanKerning&&aM(g)){ke=cM(M,n,e,t);const ie=ke.widthTrims;if(ie!==null)for(let de=0;de<ie.length;de++)p[E+de]=p[E+de]-ie[de]}let Pe=ke.lineStartExtras;if(a.kernsAcrossCanvasWords&&M.measuredKana&&M.kanaKerning!==null&&Tf.test(g)){const ie=Rf(M);ie!==null&&(Pe=BM(Pe,p,E,n,e,t,M,ie))}let K=ke.lineEndTrims;a.hangsIdeographicSpace&&g.includes("　")&&(K=RM(K,n,M,s,at,e,t));const V={widths:p,segmentFlags:d,simpleLineWalkFastPath:Y&&!n.hasUnbroken,simpleLineCountFastPath:Y,breakableFitAdvances:S,letterSpacing:s,discretionaryHyphenWidth:at,discretionaryHyphenContexts:k,breakableLineStartExtras:te,lineStartExtras:Pe,lineEndTrims:K,overflowLineEndTrims:ke.overflowLineEndTrims,tabStopAdvance:F,minimumTabAdvance:U};return y!==null&&(V.segments=y),V}function BM(n,e,t,i,r,s,a,o){const{normalized:l,starts:c,flags:h}=i;for(let f=r;f<s;f++){if((h[f]&He)!==wt)continue;const u=c[f],A=f+1<h.length?c[f+1]:l.length,m=t+f-r;for(let g=f>r?u:u+1;g<A;g++){const p=If(l,u,g,a,o);p!==0&&(g>u?e[m]=e[m]+p:p>0?e[m-1]=e[m-1]+p:(e[m]=e[m]+p,n??=Vn(s-r),n[f-r]=n[f-r]-p))}}return n}function RM(n,e,t,i,r,s,a){const{normalized:o,starts:l,flags:c}=e;for(let h=s;h<a;h++){const f=h+1<c.length?l[h+1]:o.length;if((c[h]&He)!==wt||o.charCodeAt(f-1)!==12288)continue;if(h+1<a){const p=c[h+1]&He;if(p!==Rt&&p!==En&&!(p===wt&&!(c[h+1]&ci)))continue}let u=f-1;for(;u>l[h]&&o.charCodeAt(u-1)===12288;)u--;const A=o.slice(u,f),m=h>0&&u===l[h]&&o.charCodeAt(u-1)===173,g=Tt(A,t).width+A.length*i-(m?r:0);g<=0||(n??=Vn(a-s),n[h-s]=n[h-s]+g)}return n}const Hf=1<<En|1<<Yt|1<<sn|1<<_n|1<<Qt;function xl(n){return(1<<n&Hf)!==0}function zf(n,e,t,i){return i===0&&t>0&&t<e&&(n[t-1]&He)===sn}function Vf(n,e){return n===En||n===sn||n===Yt&&!e}function Wf(n,e,t,i){if(i){const a=Math.round(e*60);if(a<=0)return 0;const o=Math.round(n*60);return(Math.ceil((o+Math.round(t*120)/2)/a)*a-o)/60}if(e<=0)return 0;const r=n-Math.floor(n/e)*e,s=e-r;return s<t?s+e:s}function IM(n,e,t,i,r){const s=e.tabStopAdvances===null?n.tabStopAdvance:e.tabStopAdvances[t],a=e.minimumTabAdvances===null?n.minimumTabAdvance:e.minimumTabAdvances[t],o=e.insideExtras===null?0:e.insideExtras[t]/2;return Wf(i-o,s,a,r)+n.widths[t]}function DM(n,e,t,i,r,s,a){const{letterSpacing:o,segmentFlags:l}=n;if(o===0)return 0;if(a>0)return l[s]&pr?o:0;const c=n.widths.length;if(zf(l,c,s,a)||s>i&&s<c&&(l[s]&He)!==Rt&&1<<(l[s-1]&He)&t)return 0;for(let h=s-1;h>=i;h--){const f=l[h],u=f&He;if(!(u===En||u!==yn&&u!==Qt&&!(f&pr)&&u!==hn&&(e===null||e[h]===0)))return h===i&&r>0||f&pr?o:0}return 0}function PM(n){return n<=1/0?n:1/0}function $l(n,e){const{segmentFlags:t}=n,i=n.widths.length;let r=e.segmentIndex;if(r>=i)return!1;if(e.graphemeIndex>0)return!0;let s=r===0||(t[r-1]&He)===Rt;for(;;){const a=t[r]&He;if(a===Rt){if(s)return e.segmentIndex=r,e.graphemeIndex=0,!0;if(++r>=i)return!1;e.segmentIndex=r,e.graphemeIndex=0,s=!0}else if(Vf(a,s)){if(++r>=i)return!1}else return e.segmentIndex=r,e.graphemeIndex=0,!0}}function LM(n,e,t,i={lineCount:0,maxLineWidth:0}){const r={segmentIndex:0,graphemeIndex:0};if(!n.simpleLineWalkFastPath)return $l(n,r)&&Yf(n,r,e,t,i),i.lineCount;const{segmentFlags:s}=n,a=n.widths.length;for(;;){let o=r.segmentIndex;const l=o===0;for(;o<a&&Vf(s[o]&He,l);)o++;if(o>=a)return i.lineCount;const c=r.graphemeIndex;r.segmentIndex=o;const h=Xf(n,r,e);i.lineCount++,h>i.maxLineWidth&&(i.maxLineWidth=h),t?.(h,o,c,r.segmentIndex,r.graphemeIndex)}}function FM(n,e,t,i){let r=t+1;for(;r<e&&1<<(n[r]&He)&i;)r++;return r===e||(n[r]&He)!==Qt}function UM(n,e,t,i,r,s){const{discretionaryHyphenContexts:a,segmentFlags:o}=n,l=t-1;if(l<e||(o[l]&He)!==sn||i<=r)return!1;const c=i-r;let h=0;const f=s?l:l-1;if(a!==null)for(let u=e;u<=f;u++)h+=a[u];return h<c}function Yf(n,e,t,i,r,s=!1){const{widths:a,segmentFlags:o,breakableFitAdvances:l,discretionaryHyphenWidth:c,letterSpacing:h,lineStartExtras:f,lineEndTrims:u,overflowLineEndTrims:A,tabStopAdvance:m,minimumTabAdvance:g}=n,p=a.length,d=n.items,S=d===void 0?null:d.hyphenWidths,y=d===void 0?null:d.hyphenRooms,E=d===void 0?null:d.itemEndHalts,w=d===void 0?null:d.insideExtras,M=d===void 0?null:d.fillExtras,b=d===void 0?null:d.openingEdges,_=d===void 0?null:d.emptyObjectSpaces,C=d===void 0?null:d.emptyObjectReturns,B=Ai(),F=1<<_n|(B.hangTabs?1<<Qt:0),U=d!==void 0&&B.hangsSpacesPerTextFrame,Q=B.testsHyphenBeforeAtomic,I=B.zeroWidthGlueTakesLine,G=B.tabsInAppUnits,J=B.paddedOpeningFit,Y=B.hardBreakItemRetreat,te=Math.max(0,t),k=te+B.lineFitEpsilon,$=n.discretionaryHyphenContexts!==null,ne=B.unfitHyphenRetreat==="reduced-width",Ie=ne?c:0,Be=$&&B.unfitHyphenRetreat==="full-width-or-first",at=B.unfitHyphenRetreat==="full-width";let ke=null;for(;;){const Pe=e.segmentIndex,K=e.graphemeIndex;let V=0,ie=!1,de=Pe,re=K,ve=-1,Oe=0,Le=-1,Ue=0,we=-1,Se=0,et=!1,Ze=0,Ke=0,tt=!0,ot=!1,D=-1,nt=0,De=0,T=!1,x=null;if((o[Pe]&He)===Rt)e.segmentIndex=Pe+1,e.graphemeIndex=0,x=f===null?0:f[Pe];else{e:{let N;for(let R=Pe;;R++){if(R>=p){N=p;break}let q,oe=0;const he=o[R],W=he&He;if(W===Rt){N=R+1;break}const j=(he&pr)!==0,le=(1<<W&Hf)!==0,be=R===Pe?K:0,fe=h!==0&&ie&&!tt&&!ot?h:0;let ce=0;h!==0&&(j||W===yn||W===Qt||W===hn||b!==null&&b[R]!==0)&&(ce=fe,ot=!j),W!==Yt&&W!==ss&&(tt=!1);const xe=W!==Qt?a[R]:d===void 0?Wf(V+ce,m,g,G):IM(n,d,R,ie?V+ce:f===null?0:f[R],G),Te=ce+xe,Fe=u===null?0:u[R];if(W===sn&&be===0){if(ie){let se=c,ee=!0;d!==void 0&&($&&R>Pe&&(o[R-1]&He)===hn&&(Le=R,Ue=V),U&&we===R&&(we=R+1,Se=Math.max(Se,Math.min(V,te))),S!==null&&(se=S[R]),ee=Q||R+1===p||(o[R+1]&He)!==hn||b!==null&&b[R+1]!==0),de=R+1,re=0,R+1<p&&(o[R+1]&He)!==Rt&&(ve=R+1,Oe=V+se,$&&((ee?Oe:V)<=k||Be&&Le<0)&&(Le=ve,Ue=Oe))}continue}let P=0;if(h!==0&&!j&&!le&&W!==yn)P=fe+xe;else if(le?W===Qt:xe!==0||W===yn){const se=xe+(j?h:0);se!==0&&(P=ce+se)}let ae=(1<<W&F)!==0;if(U&&W===Yt&&we===R&&(ae=!0),ae&&(we!==R&&(Se=V-Ke+ce,et=!1,d!==void 0&&R>Pe&&(o[R-1]&He)===hn&&(et=FM(o,p,R,F),et||(ve=R,Oe=V-Ke)),Ze=0),we=R+1,b!==null&&(Se+=b[R],Ze+=b[R])),!ie&&W===ss&&!I){de=R+1,re=0;continue}if(ie){const se=ae?Se-Ze:V+P;let ee=se-Fe>k;if(d!==void 0){let ge=!1;if(_!==null&&W===hn&&xe===0&&se>k){const st=we===R?Se:V,Ve=_[R];ge=st<=k||!(Ve>=0&&st-Ve>k||C[R]===1)}const Ee=P<0&&V-Ke>k;ee=(ee||Ee)&&!(ae&&et)&&!ge,U&&!ee&&we===R&&W===hn&&xe===0&&(we=R+1,Se=Math.max(Se,Math.min(V+Te,te)))}if(ee){const ge=V-Ke;if(le&&(ae||W!==Qt)&&(ge<=k||ve<0&&(W===En||W===Yt)||W===Yt&&(o[R-1]&He)===hn)){De=ae?Se:ge,V+=Te,D=R+1,nt=0;break e}if(W===Qt&&!ae&&ve<0){D=R,nt=0,De=we===R&&R>Pe?Se:ge;break e}const Ee=(he&ci)!==0;if(W===hn&&Ee&&we===R&&(J==="start"?Se-Ze/2<=k&&V-Ze/2>k:J==="placed"&&Se-Ze+xe-Fe<=k)){we=R+1,Se+=xe,Ze+=xe,V+=Te,de=R+1,re=0;continue}if(Ee&&ve>=0&&(de=ve,re=0),!Ee||ve>=0){T=!0;break e}if(A!==null&&se-A[R]<=k){V+=Te,de=R+1,re=0,Ke=A[R],E!==null&&E[R]!==0&&(V-=Ke,Ke=0);continue}if(W===hn&&Y!=="item"&&R+1<p&&(o[R+1]&He)===Rt){const st=o[R-1],Ve=st&He,Lt=Ve===_n?l[R-1]:null;if(Lt!==null){const Ni=Lt.length,br=Lt[0],Gi=Y!=="fit"||V<=k?1:br>0?Math.min(Ni,Math.ceil((V-k)/br)):Ni,va=b!==null&&b[Pe]!==0?Pe+1:Pe;if(R-1>va||Ni-Gi>K){D=R-1,nt=Ni-Gi,De=Se;break e}}const Ft=Ve===wt||Ve===yn?l[R-1]:null,hs=st&pr?h:0;if(Ft!==null&&(R-1>Pe||Ft.length-1>K)){D=R-1,nt=Ft.length-1,De=V-Ft[nt]-hs;break e}if(Ft===null&&(Ve===wt||Ve===yn)&&R-1>Pe){D=R-1,nt=0,De=V-a[R-1]-hs;break e}if(Lt!==null||Ve!==_n&&Ve!==Qt){V+=Te,de=R+1,re=0,Ke=0;continue}}if(l[R]===null){T=!0;break e}q=0,oe=ce}else{he&vf&&!le&&ve!==R&&(ve=R,Oe=V),$&&!le&&!(he&ci)&&R>Pe&&!xl(o[R-1]&He)&&(!ne||V+(y===null?c:y[R])<=k)&&(Le=R,Ue=V),de=R+1,re=0,E!==null&&se>k&&E[R]!==0?(V+=Te-Fe,Ke=0):(V+=Te,P!==0&&!ae&&(Ke=se>k&&W!==hn?Fe:0)),le&&(R+1===p||!(o[R+1]&ci))&&(ve=R+1,Oe=ae?Se:W===Qt?V:V-Te-Ke),$&&le&&Oe+(y===null||ve<0?Ie:y[ve])<=k&&(Le=ve,Ue=Oe);continue}}else if(be>0)q=be;else{const se=f===null?0:f[R],ee=A!==null&&P+se-A[R]<=k?A[R]:Fe;if(P+se-ee>k&&l[R]!==null&&!ae)q=0;else{ie=!0,de=R+1,re=0,V=xe+se,ae&&(Se+=se),Ke=P+se>k&&W!==hn?ee:0,E!==null&&Ke!==0&&E[R]!==0&&(V-=Ke,Ke=0),le&&(R+1===p||!(o[R+1]&ci))&&(ve=R+1,Oe=ae?Se:W===Qt?V:V-Te),$&&le&&Oe+(y===null||ve<0?Ie:y[ve])<=k&&(Le=ve,Ue=Oe);continue}}const Z=l[R],ue=Z.length;for(let se=q;se<ue;se++){const ee=Z[se];if(ie){const ge=V+(ee+(se>q?h:oe));if(ge+h>k)break e;V=ge,de=R,re=se+1}else{ie=!0,de=R,re=se+1;const ge=n.breakableLineStartExtras?.[R]??null;V=ge===null?ee:ee+ge[se],(se>0?w!==null:M!==null)&&(V+=se>0?w[R]:M[R])}}ie&&de===R&&re===ue&&(de=R+1,re=0)}D=N,nt=0,ve===N&&re===0?(De=Oe,T=!0):De=V-Ke}if(ie){T&&Le>=0&&ve===de&&re===0&&UM(n,Pe,de,Oe,k,at)?(D=Le,nt=0,De=Ue):D<0&&(D=de,nt=re,De=ve===de&&re===0?Oe:d!==void 0&&we===de&&re===0?Se:V-Ke),e.segmentIndex=D,e.graphemeIndex=nt;const N=nt===0&&we>=0&&(D===we||D===we+1)&&(we===p||(o[we]&He)===Rt),R=(N?V-Ke:De)+DM(n,b,F,Pe,K,D,nt);x=N?Math.max(Se,Math.min(R,te)):R}}if(x===null||(ke=x,r!==null&&(r.lineCount++,x>r.maxLineWidth&&(r.maxLineWidth=x)),i?.(x,Pe,K,e.segmentIndex,e.graphemeIndex),s||!$l(n,e)))break}return ke}function Xf(n,e,t){const{widths:i,segmentFlags:r,breakableFitAdvances:s,lineStartExtras:a,lineEndTrims:o,overflowLineEndTrims:l}=n,c=Math.max(0,t)+Ai().lineFitEpsilon,h=e.segmentIndex,f=s[h],u=a===null?i[h]:i[h]+a[h],A=o===null?0:o[h],m=l!==null&&u-l[h]<=c?l[h]:A;let g,p=0;if(e.graphemeIndex>0||u-m>c&&f!==null){const d=f,S=n.breakableLineStartExtras?.[h]??null;let y=e.graphemeIndex+1;g=S===null?d[y-1]:d[y-1]+S[y-1];const E=n.items;for(E!==void 0&&(y>1?E.insideExtras!==null:E.fillExtras!==null)&&(g+=y>1?E.insideExtras[h]:E.fillExtras[h]);y<d.length;y++){if(g+d[y]>c)return e.graphemeIndex=y,g;g+=d[y]}}else g=u,u>c&&(p=m);for(let d=h+1;d<i.length;d++){const S=i[d],y=o===null?0:o[d];if(g+S-y>c){const E=xl(r[d]&He);return e.segmentIndex=E?d+1:d,e.graphemeIndex=0,!E&&xl(r[d-1]&He)?g-i[d-1]:g-p}g+=S,p=g>c?y:0}return e.segmentIndex=i.length,e.graphemeIndex=0,g-p}function NM(n,e,t){return n.simpleLineWalkFastPath?Xf(n,e,t):Yf(n,e,t,void 0,null,!0)}const eu=new WeakMap;function GM(n,e){let t=eu.get(n);t===void 0&&(t=new Map,eu.set(n,t));let i=t.get(e);if(i===void 0){const r=n.segments[e];i=new Int32Array(r.length),Ui(Ai().graphemeTable,r,0,r.length,i),t.set(e,i)}return i}function fo(n,e,t){return t===0?0:GM(n,e)[t-1]}function OM(n,e,t,i,r){const{segmentFlags:s}=n,a=n.segments.length,o=i<a?i:a;let l="";for(let c=e;c<o;c++){const h=s[c]&He;h===sn||h===Rt||(h===ss||h===Yt)&&n.segments[c].charCodeAt(0)===173||(c===e&&t>0?l+=n.segments[c].slice(fo(n,c,t)):l+=n.segments[c])}return r>0&&i<a&&(l+=n.segments[i].slice(fo(n,i,e===i?t:0),fo(n,i,r))),l}function Kf(n,e,t,i,r){const s=OM(n,e,t,i,r);return zf(n.segmentFlags,n.widths.length,i,r)?s+"-":s}function QM(n,e,t,i){const r="normal",s=Ai(),a=PE(i?.letterSpacing,s),o=IE(s),l=dE(n,s,i?.whiteSpace,r,o);return TM(l,0,l.flags.length,e,t,a,s,o,!0,null)}function _l(n,e,t){const i=QM(n,e,!0,t),r=[];for(let s=0;s<i.segmentFlags.length;s++)r.push(tE[i.segmentFlags[s]&He]);return i.kinds=r,i}function kM(n,e,t,i,r,s){return{text:Kf(n,t,i,r,s),width:Math.max(0,e),start:{segmentIndex:t,graphemeIndex:i},end:{segmentIndex:r,graphemeIndex:s}}}const HM={segmentIndex:0,graphemeIndex:0};function zM(n,e,t,i,r){const s=n;if(r.segmentIndex=t.segmentIndex,r.graphemeIndex=t.graphemeIndex,!$l(s,r))return null;i.segmentIndex=r.segmentIndex,i.graphemeIndex=r.graphemeIndex;const a=NM(s,r,e);return a===null?null:Math.max(0,a)}function tu(n,e,t=HM){const i={segmentIndex:0,graphemeIndex:0},r={segmentIndex:0,graphemeIndex:0},s=zM(n,e,t,i,r);return s===null?null:{text:Kf(n,i.segmentIndex,i.graphemeIndex,r.segmentIndex,r.graphemeIndex),width:s,start:i,end:r}}function nu(n,e,t){const i=[],r=LM(n,PM(e),(s,a,o,l,c)=>{i.push(kM(n,s,a,o,l,c))});return{lineCount:r,height:r*t,lines:i}}function VM(){c_(),Pf()}const Hn={name:"Phongpisut Meemuk",title:"React, React Native Developer",location:"Bangkok, Thailand",email:"me.phongpisut@gmail.com",bio:["I'm a front-end developer with a twist! I crave adventure and see the world as my classroom. For me, knowledge is the ultimate souvenir, and new experiences are way more exciting than a long-term position.","I bring a passion for crafting high-performance, user-centric websites and apps. I'm a continuous learner, always exploring new libraries and technologies to stay at the forefront of development."]},Bi=[{n:1,name:"FIN Insurance",client:"FIN Insurance Broker",kind:"APP",emoji:"🛡️",text:"My part: form utilities, Reanimated gestures and interactive SVG graphs in the broker app, plus its real-time React + Socket.IO website.",tags:["React Native","Reanimated","SVG","Socket.IO"]},{n:2,name:"TCRB Alpha",client:"Thai Credit Retail Bank",kind:"APP",emoji:"🏦",text:"Contributed to a secure mobile banking app: Redux data caching, a native MLKit QR scanner, OneTrust consent and user-flow verification.",tags:["React Native","TypeScript","Redux","MLKit","OneTrust"]},{n:3,name:"PTT Portal",client:"PTT Digital",kind:"WEB",emoji:"🗺️",text:"Worked on an admin portal with ArcGIS.js maps (markers and routes), arrays of forms nested in arrays of forms in React Hook Form, and data fetching tuned with React Query.",tags:["React","ArcGIS.js","React Hook Form","React Query","Tailwind CSS","Styled Components"]},{n:4,name:"Features in SCB Connect",client:"SCB – Siam Commercial Bank",kind:"WEB",emoji:"💬",text:"Built a static React site on LINE's front-end framework (LIFF), shown inside SCB Connect's official LINE account, and documented the core system (Kafka streams, Sidekiq jobs, Dialogflow) with diagrams.",tags:["React.js","LIFF","LINE","Kafka","Sidekiq","Dialogflow"]},{n:5,name:"Swensen's",client:"Minor Food Group",kind:"WEB",emoji:"🍨",text:"Contributed to the Swensen's food-store website: server-side rendered pages in Next.js, styled with Tailwind CSS.",tags:["Next.js","SSR","Tailwind CSS"]},{n:5,name:"Minor Fleet Management",client:"Minor Food Group",kind:"WEB",emoji:"🚚",text:"Refined styling and added text components in the Vue.js fleet site, diagrammed the Node.js microservices behind it (GraphQL worker, RabbitMQ, PostgreSQL) and added features to them.",tags:["Vue.js","Node.js","GraphQL","RabbitMQ","PostgreSQL"]},{n:6,name:"Mae Manee",client:"SCB – Siam Commercial Bank",kind:"APP",emoji:"🏪",text:"Contributed to the Mae Manee app in React Native + TypeScript and its admin portal in AngularJS, with a focus on security: encryption, plus unit-test coverage reports.",tags:["React Native","TypeScript","AngularJS","Encryption","Unit tests"]},{n:7,name:"Tidjai",client:"Ngern Tid Lor (NTL)",kind:"APP",emoji:"💚",text:"Helped build high-performance UI with Skia and Reanimated (with MCP-accelerated development) and integrated Omise, AppsFlyer and Crashlytics.",tags:["React Native","Skia","Reanimated","Omise","AppsFlyer"]},{n:8,name:"InnovestX",client:"SCB – Magic Box Solutions",kind:"APP",emoji:"📈",text:"Contributed 60 FPS trading charts (Skia, Victory Native), Nx + Module Federation micro-frontends across 10+ repos, Nitro Modules for zero-throttle JSI calls and AI-accelerated Golang backend work.",tags:["React Native","Skia","Nx","Module Federation","Nitro Modules","Golang"]}],WM=[...new Set(Bi.map(n=>n.n))].map(n=>{const e=Bi.filter(t=>t.n===n);return{n,names:e.map(t=>t.name),client:e[0].client}}),qf=[{role:"Front-end Developer",company:"Magic Box Solutions",type:"Contract – Apar Technologies",period:"May 2026 – Nov 2026"},{role:"React Native Developer",company:"NTL – Ngern Tid Lor",type:"Contract – The Prodigy (Thailand)",period:"Oct 2025 – Apr 2026"},{role:"Front-end Developer",company:"SCB – Siam Commercial Bank",type:"Contract – Extend IT Resource",period:"Apr 2024 – Sep 2025"},{role:"React Developer",company:"PTT Digital",type:"Contract – CTO Solution",period:"Jul 2024 – Nov 2024"},{role:"Front-end Developer",company:"Minor Food Group (Innovation Team)",type:"Contract – 3i Infotech",period:"Sep 2023 – Mar 2024"},{role:"React Developer",company:"SCB – Siam Commercial Bank",type:"Contract – Extend IT Resource",period:"Sep 2022 – Mar 2023"},{role:"React Native Developer",company:"Thai Credit Retail Bank",type:"Contract – Apar Technologies",period:"Feb 2022 – Sep 2022"},{role:"Front-end Developer",company:"FIN Insurance Broker",type:"Permanent",period:"Apr 2021 – Mar 2022"}],Jf={Core:["React.js","JavaScript","TypeScript","HTML","TailwindCSS","Styled Components","React Native","React unit test"],Tools:["Postman / Bruno","Draw.io","Flipper","VSCode","Docker","SQL","Git","Analytics","Trace log (OTEL)"],"Working knowledge":["K3S","AWS ECS | EKS","PostgreSQL","Kafka","NATS","Redpanda","Pulsar","Golang","Python","Pandas","RAG","WebSocket","Server-Sent Events","SSR","Svelte","Supabase","AI Development"]},hi={degree:"Bachelor of Science",school:"Thai-Nichi Institute of Technology",period:"2017 – 2021",gpax:"3.46"},mr={org:"IBMSD – TH",project:"NER Tagger",stack:"React.js, FastAPI, PyThaiNLP, MongoDB"},YM="Thai – Native  ·  English – Fair",Ge={paper:"#faf7f1",paper2:"#f3ede2",ink:"#1d1b18",muted:"#5f584e",faint:"#958c7e",line:"#ddd4c4",accent:"#d9502a",chip:"#ebe3d4"},St="Geist, Inter, system-ui, sans-serif",Zl='"Instrument Serif", Georgia, serif',rn='"Geist Mono", ui-monospace, monospace';function yr(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Kt(n,e,t,i,r,s){n.beginPath(),n.roundRect(e,t,i,r,s)}function $f(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}function jl(n,e,t,i,r=1,s=.035){n.fillStyle=i,n.fillRect(0,0,e,t);const a=$f(r);for(let o=0;o<e*t/90;o++)n.fillStyle=a()<.5?`rgba(80,60,30,${s*a()})`:`rgba(255,255,255,${s*1.5*a()})`,n.fillRect(a()*e,a()*t,1+a()*2,1+a()*2)}function XM(){const[n,e]=yr(2048,1024),t=$f(7),i=e.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#8a5a36"),i.addColorStop(.5,"#7b4e2d"),i.addColorStop(1,"#86573a"),e.fillStyle=i,e.fillRect(0,0,2048,1024);for(let r=0;r<4;r++){const s=r*256;e.fillStyle=`rgba(${t()<.5?"40,20,5":"255,220,170"},${.04+t()*.05})`,e.fillRect(0,s,2048,256),e.fillStyle="rgba(30,15,5,.35)",e.fillRect(0,s,2048,2)}for(let r=0;r<900;r++){const s=t()*1024,a=200+t()*900,o=t()*2048;e.strokeStyle=t()<.6?`rgba(45,22,8,${.05+t()*.12})`:`rgba(255,215,160,${.03+t()*.06})`,e.lineWidth=.6+t()*2.2,e.beginPath(),e.moveTo(o,s),e.bezierCurveTo(o+a*.3,s+(t()-.5)*10,o+a*.7,s+(t()-.5)*10,o+a,s+(t()-.5)*6),e.stroke()}for(let r=0;r<5;r++){const s=t()*2048,a=t()*1024;for(let o=1;o<9;o++)e.strokeStyle=`rgba(45,22,8,${.18-o*.015})`,e.lineWidth=1.5,e.beginPath(),e.ellipse(s,a,o*9,o*3.2,0,0,Math.PI*2),e.stroke()}return n}function KM(){const[t,i]=yr(1024,1404);jl(i,1024,1404,"#fbf8f0",3),i.strokeStyle="rgba(90,130,190,.28)",i.lineWidth=2;for(let s=250;s<1364;s+=62)i.beginPath(),i.moveTo(0,s),i.lineTo(1024,s),i.stroke();i.strokeStyle="rgba(217,80,42,.45)",i.beginPath(),i.moveTo(120,90),i.lineTo(120,1404),i.stroke();for(let s=70;s<1024;s+=74)i.fillStyle="#2a2622",i.beginPath(),i.arc(s,44,13,0,Math.PI*2),i.fill();i.fillStyle=Ge.ink,i.font=`italic 92px ${Zl}`,i.fillText("My journey",150,190),i.fillStyle=Ge.accent,i.font=`500 26px ${rn}`,i.fillText("8 TEAMS · 5 YEARS",640,186);let r=300;return qf.forEach((s,a)=>{i.fillStyle=a===0?Ge.accent:Ge.faint,i.font=`500 22px ${rn}`,i.fillText(s.period.toUpperCase()+(a===0?"  · LATEST":""),150,r-18),i.fillStyle=Ge.ink,i.font=`600 38px ${St}`,i.fillText(s.company.replace(" (Innovation Team)",""),150,r+22),i.fillStyle=Ge.muted,i.font=`400 26px ${St}`,i.fillText(s.role,150,r+56),i.fillStyle=a===0?Ge.accent:"rgba(217,80,42,.35)",i.beginPath(),i.arc(120,r+8,9,0,Math.PI*2),i.fill(),r+=136}),t}function qM(){const[t,i]=yr(1e3,620);jl(i,1e3,620,"#fffdf7",5),i.strokeStyle="rgba(217,80,42,.5)",i.lineWidth=3,i.beginPath(),i.moveTo(0,120),i.lineTo(1e3,120),i.stroke(),i.strokeStyle="rgba(90,130,190,.25)",i.lineWidth=2;for(let r=190;r<620;r+=64)i.beginPath(),i.moveTo(0,r),i.lineTo(1e3,r),i.stroke();return i.fillStyle=Ge.accent,i.font=`500 26px ${rn}`,i.fillText(`EDUCATION · ${hi.period}`,50,80),i.fillStyle=Ge.ink,i.font=`600 44px ${St}`,i.fillText(hi.school,50,178),i.fillStyle=Ge.muted,i.font=`400 32px ${St}`,i.fillText(`${hi.degree} · GPAX ${hi.gpax}`,50,242),i.fillStyle=Ge.accent,i.font=`500 24px ${rn}`,i.fillText(`INTERNSHIP · ${mr.org}`,50,362),i.fillStyle=Ge.ink,i.font=`500 34px ${St}`,i.fillText(`${mr.project} — ${mr.stack}`,50,412),i.fillStyle=Ge.accent,i.font=`500 24px ${rn}`,i.fillText("LANGUAGES",50,488),i.fillStyle=Ge.ink,i.font=`500 34px ${St}`,i.fillText("Thai – Native  ·  English – Fair",50,540),t}function JM(n,e,t,i,r){n.strokeStyle=r,n.lineWidth=i*.035,n.lineCap="round";for(let s=1;s<=9;s++){const a=s*i*.05,o=s*i*.062,l=.35+s%3*.25;n.beginPath(),n.ellipse(e,t+i*.05,a,o,0,Math.PI+l*.3,Math.PI*3-l),n.stroke()}}function $M(){const[t,i]=yr(860,540);Kt(i,0,0,860,540,40),i.fillStyle=Ge.paper,i.fill(),i.save(),i.clip(),jl(i,860,540,Ge.paper,9,.02),i.fillStyle=Ge.accent,i.fillRect(0,0,860,10),i.restore(),i.fillStyle=Ge.faint,i.font=`500 24px ${rn}`,i.fillText("CURRICULUM VITAE",44,70),i.fillStyle=Ge.accent,i.textAlign="right",i.fillText("VOL. 2026",816,70),i.textAlign="left",i.setLineDash([8,8]),i.strokeStyle=Ge.line,i.lineWidth=2,i.beginPath(),i.moveTo(0,100),i.lineTo(860,100),i.stroke(),i.setLineDash([]),Kt(i,44,130,230,270,22),i.fillStyle=Ge.paper2,i.fill(),i.strokeStyle=Ge.line,i.stroke(),JM(i,159,262,240,Ge.accent),[["ROLE","React · React Native"],["BASED","Bangkok, TH"],["CODING SINCE","2021"],["LOOKING FOR","Next adventure"]].forEach(([s,a],o)=>{i.fillStyle=Ge.faint,i.font=`500 20px ${rn}`,i.fillText(s,310,152+o*66),i.fillStyle=Ge.ink,i.font=`600 32px ${St}`,i.fillText(a,310,186+o*66)}),i.fillStyle=Ge.muted,i.font=`italic 64px ${Zl}`,i.fillText("P. Meemuk",44,480);for(let s=0;s<26;s++)i.fillStyle=Ge.ink,i.globalAlpha=.75,i.fillRect(560+s*9,430,s*7%3===0?5:2.5,60);return i.globalAlpha=1,i.save(),i.translate(720,330),i.rotate(-.16),i.globalAlpha=.85,i.strokeStyle=Ge.accent,i.lineWidth=5,i.beginPath(),i.arc(0,0,82,0,Math.PI*2),i.stroke(),i.lineWidth=2,i.beginPath(),i.arc(0,0,68,0,Math.PI*2),i.stroke(),i.fillStyle=Ge.accent,i.font=`600 20px ${rn}`,i.textAlign="center",i.fillText("60 FPS",0,-14),i.fillText("APPROVED",0,14),i.fillText("★ ★ ★",0,40),i.restore(),t}const ct=780,_t=1688,iu=96,Ci=44,ZM=330,gr=150,ru=`600 44px ${St}`,Or=50,jM=ct-Ci*2-32-150-130,su=n=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});function Qr(n,e,t){const[i,r]=yr(Math.round(n*t),Math.round(e*t));return r.scale(t,t),[i,r]}class ev{content;header;chrome;lock;frame;chromeG;lockG;cards=[];contentH=_t;active=0;get activeN(){return this.cards[this.active]?.p.n??1}constructor(){[this.chrome,this.chromeG]=Qr(ct,_t,.5),[this.lock,this.lockG]=Qr(ct,_t,.6),this.frame=this.paintFrame()}init(e){this.layout(),this.paintContent(),this.paintHeader(),this.minute(e)}layout(){const[,e]=yr(1,1),t=ct-Ci*2-64,i=`400 30px ${St}`;let r=ZM;this.cards=Bi.map((s,a)=>{a>0&&s.n!==Bi[a-1].n&&(r+=18);const o=nu(_l(s.text,i),t,44).lines.map(m=>m.text),l=nu(_l(s.name,ru),jM,Or).lines.map(m=>m.text);e.font=`500 22px ${rn}`;const c=[[]];let h=0;for(const m of s.tags){const g=e.measureText(m).width+36;h+g>t&&h>0&&(c.push([]),h=0),c[c.length-1].push(m),h+=g+12}const u=32+Math.max(120,10+l.length*Or+44)+30+34+o.length*44+22+c.length*52+26,A={p:s,y:r,h:u,title:l,lines:o,tagRows:c};return r+=u+28,A}),this.contentH=r+80}paintContent(){const e=Math.min(.72,4096/this.contentH),[t,i]=Qr(ct,this.contentH,e);i.fillStyle="#f3eee4",i.fillRect(0,0,ct,this.contentH),i.fillStyle=Ge.faint,i.font=`500 24px ${rn}`,i.fillText("(02) MY CV",Ci,190),i.fillStyle=Ge.ink,i.font=`700 76px ${St}`,i.fillText("Contributions",Ci,272);for(const r of this.cards)this.paintCard(i,r);this.content=t}paintHeader(){const[e,t]=Qr(ct,gr,.6);t.fillStyle="rgba(243,238,228,.94)",t.fillRect(0,0,ct,gr),t.fillStyle="rgba(29,27,24,.08)",t.fillRect(0,gr-2,ct,2),t.fillStyle=Ge.ink,t.font=`600 34px ${St}`,t.textAlign="center",t.fillText("Contributions",ct/2,136),this.header=e}paintFrame(){const[e,t]=Qr(ct,_t,.5);return t.fillStyle="#0a0a0b",t.fillRect(0,0,ct,_t),t.globalCompositeOperation="destination-out",Kt(t,0,0,ct,_t,iu),t.fill(),t.globalCompositeOperation="source-over",Kt(t,ct/2-118,30,236,70,35),t.fillStyle="#050505",t.fill(),e}minute(e){const t=this.chromeG;t.clearRect(0,0,ct,_t),this.status(t,e,Ge.ink),Kt(t,ct/2-140,_t-34,280,10,5),t.fillStyle="rgba(0,0,0,.55)",t.fill(),this.paintLock(e)}state(e){const t=Math.max(0,this.contentH-_t),i=e*t,r=i+_t*.5;let s=0,a=1/0;this.cards.forEach((c,h)=>{const f=Math.abs(c.y+c.h/2-r);f<a&&(a=f,s=h)}),this.active=s;const o=this.cards[s],l=_t/this.contentH;return{vRepeat:l,v0:1-i/this.contentH-l,header:Math.min(1,i/160),active:s,mark:o?{y:o.y+o.h/2-i,h:o.h*.62}:null}}status(e,t,i){e.fillStyle=i,e.font=`600 34px ${St}`,e.fillText(su(t),80,78);for(let r=0;r<4;r++)e.fillRect(560+r*14,72-r*7,9,10+r*7);Kt(e,630,50,66,32,9),e.strokeStyle=i,e.lineWidth=3,e.stroke(),Kt(e,635,55,48,22,5),e.fill(),e.fillRect(699,60,5,12)}paintLock(e){const t=this.lockG;t.clearRect(0,0,ct,_t),t.save(),Kt(t,0,0,ct,_t,iu),t.clip();const i=t.createLinearGradient(0,0,ct*.6,_t);i.addColorStop(0,"#2a1a12"),i.addColorStop(.55,"#7a3219"),i.addColorStop(1,"#d9502a"),t.fillStyle=i,t.fillRect(0,0,ct,_t);for(const[r,s,a,o]of[[620,420,380,.18],[120,1300,420,.14]]){const l=t.createRadialGradient(r,s,0,r,s,a);l.addColorStop(0,`rgba(255,190,140,${o})`),l.addColorStop(1,"rgba(255,190,140,0)"),t.fillStyle=l,t.fillRect(0,0,ct,_t)}this.status(t,e,"#fff"),t.textAlign="center",t.fillStyle="rgba(255,255,255,.85)",t.font=`500 36px ${St}`,t.fillText(e.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"}),ct/2,270),t.fillStyle="#fff",t.font=`600 230px ${St}`,t.fillText(su(e),ct/2,480),t.font=`italic 64px ${Zl}`,t.fillStyle="rgba(255,255,255,.9)",t.fillText("Phongpisut’s phone",ct/2,590),Kt(t,40,1180,ct-80,200,44),t.fillStyle="rgba(255,248,240,.88)",t.fill(),Kt(t,74,1218,96,96,24),t.fillStyle=Ge.accent,t.fill(),t.fillStyle="#fff",t.font=`700 44px ${St}`,t.fillText("PM",122,1282),t.textAlign="left",t.fillStyle=Ge.ink,t.font=`600 36px ${St}`,t.fillText("Contributions",196,1252),t.fillStyle=Ge.muted,t.font=`400 30px ${St}`,t.fillText(`${Bi.length} projects I’ve contributed to`,196,1298),t.fillStyle=Ge.faint,t.font=`400 26px ${St}`,t.fillText("Scroll to open ↓",196,1340),t.textAlign="right",t.fillText("now",ct-74,1252),t.textAlign="left",Kt(t,ct/2-140,_t-34,280,10,5),t.fillStyle="rgba(255,255,255,.8)",t.fill(),t.restore()}paintCard(e,t){const i=Ci,r=ct-Ci*2;e.save(),e.shadowColor="rgba(60,40,10,.12)",e.shadowBlur=24,e.shadowOffsetY=10,Kt(e,i,t.y,r,t.h,40),e.fillStyle="#fffdf8",e.fill(),e.restore();const s=i+32;let a=t.y+32;Kt(e,s,a,120,120,30),e.fillStyle=Ge.paper2,e.fill(),e.font='66px system-ui, "Apple Color Emoji", "Segoe UI Emoji"',e.textAlign="center",e.fillText(t.p.emoji,s+60,a+84),e.textAlign="left",e.fillStyle=Ge.ink,e.font=ru,t.title.forEach((o,l)=>e.fillText(o,s+150,a+50+l*Or)),e.fillStyle=Ge.muted,e.font=`400 28px ${St}`,e.fillText("with "+t.p.client,s+150,a+50+(t.title.length-1)*Or+44),e.fillStyle=Ge.faint,e.font=`500 22px ${rn}`,e.textAlign="right",e.fillText(`${String(t.p.n).padStart(2,"0")} · ${t.p.kind}`,i+r-32,a+30),e.textAlign="left",a+=Math.max(120,10+t.title.length*Or+44)+30,e.fillStyle=Ge.accent,e.font=`500 22px ${rn}`,e.fillText("MY PART",s,a+10),a+=34,e.fillStyle=Ge.muted,e.font=`400 30px ${St}`;for(const o of t.lines)a+=44,e.fillText(o,s,a-10);a+=22,e.font=`500 22px ${rn}`;for(const o of t.tagRows){let l=s;for(const c of o){const h=e.measureText(c).width+36;Kt(e,l,a,h,40,20),e.fillStyle=Ge.chip,e.fill(),e.fillStyle=Ge.muted,e.fillText(c,l+18,a+28),l+=h+12}a+=52}}}const au={w:.372,h:.805},tv=Ci,Qn={w:.4,h:.82,t:.034},ou={pad:{x:-.55,z:-.08,r:-.035},card:{x:-.5,z:.62,r:.05},id:{x:.08,z:.66,r:.09},phone:{x:.4,z:0,r:.07},pencil:{x:.92,z:.45,r:1.15},mug:[1,-.3],frame:{x0:-1,x1:1.25,z0:-.62,z1:.86}},nv={pad:{x:-.33,z:-.5,r:-.04},phone:{x:.4,z:-.45,r:.06},card:{x:-.3,z:.26,r:.05},id:{x:.36,z:.3,r:.08},pencil:{x:-.22,z:.66,r:.1},mug:[.44,.68],frame:{x0:-.72,x1:.74,z0:-1,z1:.84}},lu=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},Ao=(n,e,t)=>n+(e-n)*t;function kr(n,e){const t=new UA(n);return t.colorSpace=jt,t.anisotropy=e.capabilities.getMaxAnisotropy(),t}function po(n,e,t,i){const r=new mt(new Sr(n,e),new Wu({map:t}));return r.rotation.x=-Math.PI/2,r.position.y=i,r.receiveShadow=!0,r}class iv{constructor(e){this.canvas=e,this.renderer=new Kx({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=Wr,this.scene.background=new $e("#2a1d14"),this.build()}renderer;scene=new CA;camera=new un(30,1,.05,50);screen=new ev;scr=new wn;layers={};texs={};lastMinute=-1;markY=0;markH=0;objs={};layout=ou;mug=new wn;phone=new wn;placed=!1;target=0;shown=0;lastScreen="";needsRender=!0;lastT=-1;running=!1;last=0;onFrame;ready(){const e=new Date;this.screen.init(e),this.lastMinute=e.getMinutes();const t=this.renderer,i=this.layers;for(const r of["content","header","chrome","lock","frame"]){this.texs[r]?.dispose();const s=this.texs[r]=kr(this.screen[r],t);i[r].material.map=s,i[r].material.needsUpdate=!0}this.scr.visible=!0,this.lastScreen="",this.resize()}build(){const e=this.renderer,t=this.scene;t.add(new WA("#fff4e6","#5a3c26",1.9));const i=new KA("#fff1dc",2.2);i.position.set(-1.6,3.4,-1.2),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-2.6,right:2.6,top:2.2,bottom:-2.2,near:.5,far:8}),i.shadow.camera.updateProjectionMatrix(),i.shadow.bias=-4e-4,i.shadow.normalBias=.01,i.shadow.radius=6,t.add(i);const r=kr(XM(),e);r.wrapS=r.wrapT=$s,r.repeat.set(1.6,1.8);const s=new mt(new di(9,.12,6),new ln({map:r,roughness:.72}));s.position.y=-.06,s.receiveShadow=!0,t.add(s);const a=new wn,o=new mt(new di(.62,.024,.85),new Wu({color:"#efe9dc"}));o.position.y=.012,o.castShadow=o.receiveShadow=!0,a.add(o,po(.62,.85,kr(KM(),e),.0245));const l=new ln({color:"#c9c4bb",metalness:.9,roughness:.3}),c=new LA(new sa(.02,.0035,8,20),l,9),h=new ft,f=new Li().setFromAxisAngle(new O(0,1,0),Math.PI/2),u=new O(1,1,1);for(let Y=0;Y<9;Y++)c.setMatrixAt(Y,h.compose(new O(-.29+Y*.0705*(.62/.66),.03,-.395),f,u));c.castShadow=!0,a.add(c),this.objs.pad=a,this.objs.card=po(.56,.347,kr(qM(),e),.0012),this.objs.card.castShadow=!0;const A=new wn,m=new mt(new aa(.48,.006,.3,2,.02),new ln({color:"#f5f0e6",roughness:.4}));m.position.y=.003,m.castShadow=m.receiveShadow=!0,A.add(m,po(.46,.289,kr($M(),e),.0062)),this.objs.id=A;const g=new wn,p=.42,d=new mt(new fr(.012,.012,p,6),new ln({color:"#f2b632",roughness:.5})),S=new mt(new ra(.012,.05,6),new ln({color:"#e8c79a",roughness:.8}));S.position.y=p/2+.025;const y=new mt(new ra(.0045,.018,6),new ln({color:"#333"}));y.position.y=p/2+.041;const E=new mt(new fr(.0125,.0125,.025,12),new ln({color:"#b8b2a7",metalness:.8,roughness:.3}));E.position.y=-p/2-.0125;const w=new mt(new fr(.012,.012,.03,12),new ln({color:"#e88b8b",roughness:.9}));w.position.y=-p/2-.04;for(const Y of[d,S,y,E,w])Y.castShadow=!0,g.add(Y);g.children.forEach(Y=>{Y.rotation.z=-Math.PI/2,Y.position.set(Y.position.y,.012,0)}),this.objs.pencil=g;const M=new ln({color:"#d9502a",roughness:.35}),b=[[0,0],[.078,0],[.085,.01],[.085,.16],[.077,.16],[.077,.012],[0,.012]].map(([Y,te])=>new ze(Y,te)),_=new mt(new Gl(b,48),M),C=new mt(new sa(.042,.011,12,32,Math.PI),M);C.rotation.z=-Math.PI/2,C.position.set(.083,.085,0);const B=new mt(new Nl(.077,40),new ln({color:"#3b2112",roughness:.15}));B.rotation.x=-Math.PI/2,B.position.y=.13;const F=new mt(new Ol(.05,.077,40),new ln({color:"#8a5a33",roughness:.4,transparent:!0,opacity:.55}));F.rotation.x=-Math.PI/2,F.position.y=.1305;for(const Y of[_,C])Y.castShadow=!0,Y.receiveShadow=!0;this.mug.add(_,C,B,F),this.mug.rotation.y=.6;const U=new mt(new aa(Qn.w,Qn.t,Qn.h,5,.05),new ln({color:"#1c1c1f",metalness:.4,roughness:.35}));U.position.y=Qn.t/2,U.castShadow=!0,this.scr.rotation.x=-Math.PI/2,this.scr.position.y=Qn.t+6e-4,this.scr.visible=!1;const{w:Q,h:I}=au;["content","mark","header","chrome","lock","frame"].forEach((Y,te)=>{const k=new Fl({transparent:Y!=="content",toneMapped:!1,depthWrite:!1,color:Y==="mark"?"#d9502a":"#ffffff"}),$=new mt(new Sr(Q,I),k);$.position.z=te*2e-4,$.renderOrder=10+te,this.layers[Y]=$,this.scr.add($)});const J=gr/_t*I;this.layers.header.scale.y=gr/_t,this.layers.header.position.y=I/2-J/2,this.layers.mark.scale.x=8/ct,this.layers.mark.position.x=((tv-20)/ct-.5)*Q,this.phone.add(U,this.scr),t.add(a,this.objs.card,A,g,this.mug,this.phone)}place(e){this.layout=e;const t=(i,r)=>{i.position.x=r.x,i.position.z=r.z,i.rotation.y=-r.r};t(this.objs.pad,e.pad),t(this.objs.id,e.id),t(this.objs.pencil,e.pencil),this.objs.card.position.set(e.card.x,.0012,e.card.z),this.objs.card.rotation.set(-Math.PI/2,0,-e.card.r),this.mug.position.set(e.mug[0],.001,e.mug[1]),this.renderer.shadowMap.needsUpdate=!0,this.needsRender=!0}fit(e,t,i,r){const s=Math.tan(uA.degToRad(this.camera.fov/2)),a=Math.max(r/(2*s),i/(2*s*this.camera.aspect));return{cx:e,cz:t,d:a}}cameraAt(e){const t=this.layout.frame,i=this.fit((t.x0+t.x1)/2,(t.z0+t.z1)/2,t.x1-t.x0,t.z1-t.z0),r=this.layout.phone,s=this.fit(r.x,r.z,Qn.w*1.25,Qn.h*1.24),a=lu(.16,.45,e),o=Ao(i.cx,s.cx,a),l=Ao(i.cz,s.cz,a),c=Ao(i.d,s.d,a),h=Math.sin(Math.PI*a);return this.camera.position.set(o-h*c*.12,c*(1-h*.08)+Qn.t*a,l+h*c*.42),this.camera.up.set(0,0,-1),this.camera.lookAt(o,Qn.t*a,l),this.phone.position.set(r.x,a*.03,r.z),this.phone.rotation.set(0,-r.r*(1-a),0),a}setProgress(e){this.target=Math.min(1,Math.max(0,e))}resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.shadowMap.needsUpdate=!0,this.needsRender=!0;const i=e/t<.85?nv:ou;(i!==this.layout||!this.placed)&&(this.place(i),this.placed=!0)}start(){if(this.running)return;this.running=!0,this.last=performance.now();const e=t=>{this.running&&(this.frame(Math.min(.05,(t-this.last)/1e3)),this.last=t,requestAnimationFrame(e))};requestAnimationFrame(e)}stop(){this.running=!1}frame(e){const t=this.shown;this.shown+=(this.target-this.shown)*(1-Math.exp(-e*7)),Math.abs(this.target-this.shown)<2e-4&&(this.shown=this.target);const i=this.shown;let r=this.needsRender||i!==t;if(r){const c=this.cameraAt(i);c!==this.lastT&&(this.lastT=c,this.renderer.shadowMap.needsUpdate=!0)}const s=lu(.43,.52,i),a=Math.min(1,Math.max(0,(i-.53)/(.96-.53))),o=new Date;this.scr.visible&&o.getMinutes()!==this.lastMinute&&(this.lastMinute=o.getMinutes(),this.screen.minute(o),this.texs.chrome.needsUpdate=!0,this.texs.lock.needsUpdate=!0,r=!0);const l=`${s.toFixed(3)}|${a.toFixed(4)}`;if(l!==this.lastScreen&&this.scr.visible){this.lastScreen=l;const c=this.screen.state(a),h=this.layers,f=au.h,u=this.texs.content;if(u.repeat.y=c.vRepeat,u.offset.y=c.v0,h.header.material.opacity=c.header,h.header.visible=c.header>.01,h.lock.material.opacity=1-s*s,h.lock.visible=s<.999,h.lock.scale.setScalar(1-s*.08),h.chrome.visible=h.content.visible=s>.001,c.mark){const A=Math.max(c.mark.y-c.mark.h/2,gr+10),m=Math.min(c.mark.y+c.mark.h/2,_t-40);this.markH=Math.max(0,m-A),this.markY=(A+m)/2}h.mark.visible=s>.99&&this.markH>20,h.mark.scale.y=this.markH/_t,h.mark.position.y=(.5-this.markY/_t)*f,r=!0}r&&(this.renderer.render(this.scene,this.camera),this.needsRender=!1),this.onFrame?.({progress:i,active:this.screen.activeN,phase:i<.07?"hero":i<.16?"desk":i<.47?"zoom":"phone"})}}const cu='500 13px "Geist Mono", ui-monospace, monospace',Os=22,rv=70,hu=12,mo=64,pa={faint:"#8f7f6c",accent:"#f0794d",ink:"#f3ead9"};function sv(n){if(n.length<2)return n;n.sort((t,i)=>t[0]-i[0]);const e=[[n[0][0],n[0][1]]];for(let t=1;t<n.length;t++){const i=e[e.length-1];n[t][0]<=i[1]?i[1]=Math.max(i[1],n[t][1]):e.push([n[t][0],n[t][1]])}return e}function uu(n,e,t){const i=`700 ${t}px Geist, Inter, system-ui, sans-serif`,r=`italic 400 ${Math.round(t*1.08)}px "Instrument Serif", Georgia, serif`,s=document.createElement("canvas").getContext("2d");s.font=i;const a=s.measureText(n).width;s.font=r;const o=s.measureText(e).width,l=Math.ceil(t*.12),c=Math.ceil(Math.max(a,o))+l*2,h=Math.ceil(t*2.05)+l*2,f=Math.min(2,devicePixelRatio||1),u=document.createElement("canvas");u.width=c*f,u.height=h*f;const A=u.getContext("2d",{willReadFrequently:!0});A.scale(f,f),A.font=i,A.fillStyle=pa.ink,A.fillText(n,l,l+t*.86),A.font=r,A.fillStyle=pa.accent,A.fillText(e,l,l+t*1.86);const m=A.getImageData(0,0,u.width,u.height).data,g=[];for(let p=0;p<h;p++){const d=Math.min(u.height-1,Math.round((p+.5)*f)),S=[];let y=-1;for(let E=0;E<u.width;E++){const w=m[(d*u.width+E)*4+3]>40;w&&y<0&&(y=E),!w&&y>=0&&(S.push([y/f,E/f]),y=-1)}y>=0&&S.push([y/f,u.width/f]),g.push(S)}return{canvas:u,rows:g,w:c,h,pad:l}}let Qs="";function av(){if(Qs)return Qs;const n=1024,e=n/2,t=document.createElement("canvas");t.width=t.height=n;const i=t.getContext("2d");let r=7;const s=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=[s()*6,s()*6,s()*6,s()*6],o=l=>362*(1+.045*Math.sin(3*l+a[0])+.03*Math.sin(5*l+a[1])+.02*Math.sin(11*l+a[2])+.012*Math.sin(23*l+a[3]));i.fillStyle="#000",i.beginPath();for(let l=0;l<=360;l++){const c=l/360*Math.PI*2,h=o(c);l?i.lineTo(e+Math.cos(c)*h,e+Math.sin(c)*h):i.moveTo(e+Math.cos(c)*h,e+Math.sin(c)*h)}i.fill();for(let l=0;l<14;l++){const c=s()*Math.PI*2,h=o(c)-30,f=40+s()*110,u=10+s()*26,A=Math.cos(c),m=Math.sin(c),g=-m,p=A;i.beginPath(),i.moveTo(e+A*h+g*u,e+m*h+p*u),i.quadraticCurveTo(e+A*(h+f*.6)+g*u*.35,e+m*(h+f*.6)+p*u*.35,e+A*(h+f),e+m*(h+f)),i.quadraticCurveTo(e+A*(h+f*.6)-g*u*.35,e+m*(h+f*.6)-p*u*.35,e+A*h-g*u,e+m*h-p*u),i.fill(),i.beginPath(),i.arc(e+A*(h+f+8+s()*14),e+m*(h+f+8+s()*14),3+s()*7,0,Math.PI*2),i.fill()}for(let l=0;l<46;l++){const c=s()*Math.PI*2,h=o(c)+24+Math.pow(s(),1.6)*120;i.beginPath(),i.arc(e+Math.cos(c)*h,e+Math.sin(c)*h,2+Math.pow(s(),2)*16,0,Math.PI*2),i.fill()}return Qs=t.toDataURL("image/png"),Qs}class ov{constructor(e,t,i,r,s,a){this.root=e,this.canvas=t,this.words=i,this.first=r,this.last2=s,this.nameSize=a,this.ctx=t.getContext("2d"),new ResizeObserver(()=>this.resize()).observe(e),e.addEventListener("pointermove",o=>this.onMove(o)),e.addEventListener("pointerdown",o=>this.onDown(o)),e.addEventListener("pointerup",o=>this.onUp(o)),e.addEventListener("pointercancel",o=>this.onUp(o)),e.addEventListener("pointerleave",()=>{this.lens.on=!1,this.kick()})}ctx;flow;art;W=0;H=0;dpr=1;raf=0;active=!0;off={x:0,y:0,vx:0,vy:0};drag=null;lens={x:0,y:0,tx:0,ty:0,a:0,on:!1};last=0;init(){VM(),this.flow=_l(this.words.map(e=>e.toUpperCase()).join("  ·  ")+"  ·  ",cu),this.resize()}setReveal(e){const t=this.root.style,i=e>=.999;if(t.visibility=i?"hidden":"visible",e<=.001)t.maskImage=t.webkitMaskImage="none";else if(!i){const s=`url(${av()})`;t.maskImage!==s&&(t.maskImage=t.webkitMaskImage=s);const o=Math.hypot(this.root.clientWidth,this.root.clientHeight)*1.5*Math.pow(1-e,1.35);t.maskSize=t.webkitMaskSize=`${o}px ${o}px`}const r=this.active;this.active=!i,this.active&&!r&&this.kick()}rel(e){const t=e.getBoundingClientRect(),i=this.root.getBoundingClientRect();return{x:t.left-i.left,y:t.top-i.top,w:t.width,h:t.height}}home(){const e=this.root.querySelector("[data-name-slot]");if(!e||!this.art)return{x:0,y:0};const t=this.rel(e);return{x:t.x-this.art.pad,y:t.y+(t.h-this.art.h)/2}}resize(){if(this.dpr=Math.min(2,devicePixelRatio||1),this.W=this.root.clientWidth,this.H=this.root.clientHeight,this.canvas.width=Math.round(this.W*this.dpr),this.canvas.height=Math.round(this.H*this.dpr),this.flow){const e=this.root.querySelector("[data-name-slot]"),t=e?e.clientWidth:this.W;let i=this.nameSize();this.art=uu(this.first,this.last2,i),this.art.w-this.art.pad*2>t&&(i=Math.floor(i*t/(this.art.w-this.art.pad*2)),this.art=uu(this.first,this.last2,i))}this.kick()}kick(){!this.raf&&this.active&&this.flow&&(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.frame(e)))}frame(e){if(this.raf=0,!this.flow||!this.art||!this.active)return;const t=Math.min(3,(e-this.last)/16.7);this.last=e;let i=!1;const r=this.off;this.drag||(r.vx+=-r.x*.08*t,r.vy+=-r.y*.08*t,r.vx*=Math.pow(.8,t),r.vy*=Math.pow(.8,t),r.x+=r.vx*t,r.y+=r.vy*t,Math.abs(r.x)+Math.abs(r.y)+Math.abs(r.vx)+Math.abs(r.vy)<.1?r.x=r.y=r.vx=r.vy=0:i=!0);const s=this.lens,a=1-Math.pow(1-.25,t);Math.abs(s.tx-s.x)+Math.abs(s.ty-s.y)>.3&&(i=!0),s.x+=(s.tx-s.x)*a,s.y+=(s.ty-s.y)*a;const o=s.on?1:0;Math.abs(o-s.a)>.01?i=!0:s.a=o,s.a+=(o-s.a)*(1-Math.pow(1-.15,t)),this.draw(),i&&(this.raf=requestAnimationFrame(l=>this.frame(l)))}draw(){const e=this.ctx,t=this.art,i=this.W,r=this.H,s=this.home(),a=s.x+this.off.x,o=s.y+this.off.y,l=[];this.root.querySelectorAll("[data-obstacle]").forEach(g=>{const p=Number(g.dataset.obstacle)||14,d=this.rel(g);d.w&&d.h&&l.push({x:d.x-p,y:d.y-p*.6,w:d.w+p*2,h:d.h+p*1.2})});const c=this.lens,h=c.a>.02?{x:c.x,y:c.y,r:mo*c.a}:null;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,i,r),e.font=cu,e.textBaseline="middle";const f=[];let u={segmentIndex:0,graphemeIndex:0};const A=16,m=i-16;for(let g=70;g+Os<=r-4;g+=Os){const p=g,d=g+Os,S=[];for(const M of l)M.y<d&&M.y+M.h>p&&S.push([M.x,M.x+M.w]);if(h){const M=h.y>=p&&h.y<=d?0:Math.min(Math.abs(h.y-p),Math.abs(h.y-d));if(M<h.r){const b=Math.sqrt(h.r*h.r-M*M);S.push([h.x-b,h.x+b])}}const y=Math.max(0,Math.floor(p-o-4)),E=Math.min(t.h-1,Math.ceil(d-o+4));for(let M=y;M<=E;M++)for(const[b,_]of t.rows[M])S.push([a+b-hu,a+_+hu]);let w=A;for(const[M,b]of[...sv(S),[m,1/0]]){const _=Math.min(M,m);if(_-w>=rv){let C=tu(this.flow,_-w,u);C||(u={segmentIndex:0,graphemeIndex:0},C=tu(this.flow,_-w,u)),C&&(f.push([C.text,w,g+Os/2]),u=C.end)}if(w=Math.max(w,b),w>=m)break}}e.globalAlpha=.55,e.fillStyle=pa.faint;for(const[g,p,d]of f)e.fillText(g,p,d);if(c.a>.02){e.save();const g=mo+110;e.beginPath(),e.arc(c.x,c.y,g,0,Math.PI*2),e.clip();const p=e.createRadialGradient(c.x,c.y,mo*.8,c.x,c.y,g);p.addColorStop(0,pa.accent),p.addColorStop(1,"rgba(240,121,77,0)"),e.fillStyle=p,e.globalAlpha=c.a;for(const[d,S,y]of f)Math.abs(y-c.y)<g&&e.fillText(d,S,y);e.restore()}e.globalAlpha=1,e.drawImage(t.canvas,a,o,t.w,t.h)}overName(e,t){if(!this.art)return!1;const i=this.home(),r=e-i.x-this.off.x,s=Math.round(t-i.y-this.off.y);if(s<0||s>=this.art.h)return!1;for(let a=Math.max(0,s-10);a<=Math.min(this.art.h-1,s+10);a++)for(const[o,l]of this.art.rows[a])if(r>=o-8&&r<=l+8)return!0;return!1}local(e){const t=this.root.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}inFront(e){return!!e.target.closest?.("[data-obstacle]")}onMove(e){if(!this.active)return;const t=this.local(e);if(this.drag&&e.pointerId===this.drag.id){const r=this.home();this.off.x=t.x-this.drag.dx-r.x,this.off.y=t.y-this.drag.dy-r.y}const i=this.inFront(e);this.lens.on=e.pointerType==="mouse"&&!i&&!this.drag,this.lens.a<.02&&(this.lens.x=t.x,this.lens.y=t.y),this.lens.tx=t.x,this.lens.ty=t.y,this.root.style.cursor=this.drag?"grabbing":!i&&this.overName(t.x,t.y)?"grab":"",this.drag&&this.draw(),this.kick()}onDown(e){if(!this.active||this.inFront(e))return;const t=this.local(e);if(!this.overName(t.x,t.y))return;const i=this.home();this.drag={id:e.pointerId,dx:t.x-i.x-this.off.x,dy:t.y-i.y-this.off.y},this.root.setPointerCapture(e.pointerId),this.root.style.cursor="grabbing",e.preventDefault()}onUp(e){this.drag&&e.pointerId===this.drag.id&&(this.drag=null,this.root.style.cursor="",this.kick())}}function lv(n,e){const t=n.getContext("2d"),i=[];let r=100;for(let u=0;u<160;u++)r+=(Math.random()-.48)*1.6,i.push(r);let s=!1,a=0,o=0,l=0,c=0,h=0;function f(u){if(!s)return;const A=(u-a)/1e3;a=u,l++,u-c>500&&(e.textContent=`${Math.round(l*1e3/(u-c))} fps`,l=0,c=u),o+=A,h=Math.min(1,o/.12),o>=.12&&(o=0,h=0,r+=(Math.random()-.48)*1.6,i.push(r),i.shift());const m=Math.min(2,devicePixelRatio||1),g=n.clientWidth,p=n.clientHeight;n.width!==Math.round(g*m)&&(n.width=Math.round(g*m),n.height=Math.round(p*m)),t.setTransform(m,0,0,m,0,0),t.clearRect(0,0,g,p);const d=Math.min(...i)-2,S=Math.max(...i)+2,y=g/(i.length-2),E=B=>(B-h)*y,w=B=>p-14-(B-d)/(S-d)*(p-40);t.strokeStyle="rgba(149,140,126,.18)",t.lineWidth=1;for(let B=1;B<4;B++)t.beginPath(),t.moveTo(0,p*B/4),t.lineTo(g,p*B/4),t.stroke();t.beginPath(),t.moveTo(E(0),w(i[0]));for(let B=1;B<i.length-1;B++){const F=(E(B)+E(B+1))/2,U=(w(i[B])+w(i[B+1]))/2;t.quadraticCurveTo(E(B),w(i[B]),F,U)}t.save(),t.lineTo(g+y,p),t.lineTo(E(0),p),t.closePath();const M=t.createLinearGradient(0,0,0,p);M.addColorStop(0,"rgba(217,80,42,.28)"),M.addColorStop(1,"rgba(217,80,42,0)"),t.fillStyle=M,t.fill(),t.restore(),t.beginPath(),t.moveTo(E(0),w(i[0]));for(let B=1;B<i.length-1;B++){const F=(E(B)+E(B+1))/2,U=(w(i[B])+w(i[B+1]))/2;t.quadraticCurveTo(E(B),w(i[B]),F,U)}t.strokeStyle="#d9502a",t.lineWidth=2.2,t.stroke();const b=E(i.length-2),_=w(i[i.length-2]),C=u/600%1;t.fillStyle=`rgba(217,80,42,${.35*(1-C)})`,t.beginPath(),t.arc(b,_,4+C*12,0,Math.PI*2),t.fill(),t.fillStyle="#d9502a",t.beginPath(),t.arc(b,_,4,0,Math.PI*2),t.fill(),t.font='500 11px "Geist Mono", monospace',t.fillStyle="#5f584e",t.textAlign="right",t.fillText(i[i.length-2].toFixed(2),g-8,Math.max(14,_-10)),requestAnimationFrame(f)}return{start(){s||(s=!0,a=c=performance.now(),requestAnimationFrame(f))},stop(){s=!1}}}document.documentElement.classList.add("js");const Xe=n=>document.querySelector(n);Xe("#year").textContent=String(new Date().getFullYear());const Zf=Xe("#mail");Zf.href=`mailto:${Hn.email}`;Zf.textContent=Hn.email+" ↗";Xe("#proj-list").innerHTML=WM.map(n=>`<li data-n="${n.n}"><div><b>${n.names.join(" & ")}</b><br><span>${n.client}</span></div></li>`).join("");Xe("#cv-text").innerHTML=`
  <p>${Hn.name}</p><p>${Hn.title}, ${Hn.location}. ${Hn.email}</p>
  ${Hn.bio.map(n=>`<p>${n}</p>`).join("")}
  <h2>Projects I've contributed to</h2><ul>${Bi.map(n=>`<li>${n.name} (with ${n.client}): ${n.text}</li>`).join("")}</ul>
  <h2>Journey</h2><ul>${qf.map(n=>`<li>${n.period}: ${n.role}, ${n.company} (${n.type})</li>`).join("")}</ul>
  <h2>Skills</h2>${Object.entries(Jf).map(([n,e])=>`<p>${n}: ${e.join(", ")}</p>`).join("")}
  <h2>Education</h2><p>${hi.degree}, ${hi.school}, ${hi.period}, GPAX ${hi.gpax}. Internship: ${mr.org}, ${mr.project} (${mr.stack}). Languages: ${YM}</p>`;document.querySelectorAll("[data-words]").forEach(n=>{let e=0;const t=i=>{for(const r of[...i.childNodes])if(r.nodeType===Node.TEXT_NODE){const s=document.createDocumentFragment();for(const a of(r.textContent||"").split(/(\s+)/)){if(!a)continue;if(/^\s+$/.test(a)){s.append(" ");continue}const o=document.createElement("span");o.className="wmask";const l=document.createElement("span");l.className="w",l.textContent=a,l.style.transitionDelay=`${e++*70}ms`,o.append(l),s.append(o)}r.replaceWith(s)}else t(r)};t(n)});const jf=new IntersectionObserver(n=>n.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),jf.unobserve(e.target))}),{rootMargin:"0px 0px -10% 0px"});document.querySelectorAll(".reveal").forEach(n=>jf.observe(n));const ma=Xe("#stage"),ed=Xe("#desk"),fi=new iv(ed),[cv,hv]=Hn.name.split(" "),td=new ov(Xe("#hero"),Xe("#hero-canvas"),Object.values(Jf).flat(),cv,hv+".",()=>innerWidth>820?124:66),uv=Xe("#hero-mail");uv.href=`mailto:${Hn.email}`;Xe("#hero-count").textContent=String(Bi.length);const fv=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},dv=[...document.querySelectorAll(".hud [data-show]")],Av=[...document.querySelectorAll("#proj-list li")];let fu=-1,du="";fi.onFrame=({phase:n,active:e})=>{if(n!==du){du=n;for(const t of dv)t.classList.toggle("off",t.dataset.show!==n)}e!==fu&&(fu=e,Av.forEach(t=>t.classList.toggle("on",Number(t.dataset.n)===e)))};const nd=()=>{const n=ma.getBoundingClientRect();return-n.top/Math.max(1,n.height-innerHeight)};Promise.all([document.fonts.load("700 100px Geist"),document.fonts.load("600 40px Geist"),document.fonts.load("400 30px Geist"),document.fonts.load('italic 400 100px "Instrument Serif"'),document.fonts.load('400 40px "Instrument Serif"'),document.fonts.load('500 30px "Geist Mono"')]).catch(()=>{}).then(()=>{td.init(),fi.ready(),fi.setProgress(nd()),fi.start(),Xe("#loading").classList.add("done")});new ResizeObserver(()=>fi.resize()).observe(ed);new IntersectionObserver(([n])=>n.isIntersecting?fi.start():fi.stop()).observe(ma);const pv=Xe(".progress"),id=[...document.querySelectorAll(".nav [data-go]")];function ec(){const n=document.documentElement.scrollHeight-innerHeight;pv.style.setProperty("--p",String(Math.min(1,scrollY/Math.max(1,n))));const e=nd();fi.setProgress(e),td.setReveal(fv(0,.08,e));const t=e<.07?"top":e<=1?"projects":["contact","webgpu","physics","optimize","play"].find(i=>Xe("#"+i).getBoundingClientRect().top<innerHeight*.45)??"projects";id.forEach(i=>i.classList.toggle("on",i.dataset.go===t))}addEventListener("scroll",ec,{passive:!0});addEventListener("resize",ec);ec();const rd=n=>ma.offsetTop+n*(ma.offsetHeight-innerHeight);id.forEach(n=>n.addEventListener("click",e=>{e.preventDefault();const t=n.dataset.go,i=t==="top"?0:t==="projects"?rd(.62):Xe("#"+t).getBoundingClientRect().top+scrollY+40;scrollTo({top:i,behavior:"smooth"})}));document.querySelector('[data-go="desk"]')?.addEventListener("click",n=>{n.preventDefault(),scrollTo({top:rd(.12),behavior:"smooth"})});function Ma(n,e,t,i="200px"){new IntersectionObserver(([r])=>r.isIntersecting?e():t(),{rootMargin:i}).observe(n)}const Au=lv(Xe("#chart"),Xe("#chart-fps"));Ma(Xe("#chart"),Au.start,Au.stop,"0px");const El=n=>(e,t)=>{const i=document.querySelector(`${n} [data-hud="${e}"]`);i&&(i.textContent=t)};let nr=null,pu=!1,go=!1;Ma(Xe("#physics-canvas"),async()=>{if(go=!0,nr)return nr.start();if(!pu){pu=!0;try{const{startPhysics:n}=await Js(async()=>{const{startPhysics:e}=await import("./physics-D7a3aj17.js");return{startPhysics:e}},[],import.meta.url);nr=await n(Xe("#physics-canvas"),El("#physics")),document.querySelectorAll("[data-phys]").forEach(e=>e.addEventListener("click",()=>nr.actions[e.dataset.phys]())),Xe("#physics-msg").classList.add("done"),go&&nr.start()}catch(n){Xe("#physics-msg").textContent="Couldn’t start Box3D in this browser.",console.error(n)}}},()=>{go=!1,nr?.stop()});let Hr=null,mu=!1,xo=!1;Ma(Xe("#gpu-canvas"),async()=>{if(xo=!0,Hr)return Hr.start();if(!mu){mu=!0;try{const{startWebGPU:n}=await Js(async()=>{const{startWebGPU:e}=await import("./webgpu-B3W_RnZU.js");return{startWebGPU:e}},[],import.meta.url);Hr=await n(Xe("#gpu-canvas"),El("#webgpu")),Xe("#gpu-msg").classList.add("done"),xo&&Hr.start()}catch(n){Xe("#gpu-msg").innerHTML="Your browser doesn’t expose WebGPU yet.<br>Try a recent Chrome or Edge, or Safari 26+.";const e=El("#webgpu");e("gpu","not available"),e("count","131,072"),console.warn(n)}}},()=>{xo=!1,Hr?.stop()});let gu=!1,ks=null;Ma(Xe("#melon"),async()=>{if(ks)return ks.start();if(gu)return;gu=!0;const[{Room:n},{startMelon:e,TIERS:t,visitorFruit:i}]=await Promise.all([Js(()=>import("./room-BFOxn6A9.js"),[],import.meta.url),Js(()=>import("./melon-B4HXJSrS.js"),[],import.meta.url)]),r=i(),s=new n({fruit:r,score:0,best:0});Xe("#m-mine").textContent=t[r].e,Xe("#m-tiers").innerHTML=t.map((l,c)=>`<span class="${c===r?"mine":""}">${l.e}</span>`).join("<i>›</i>");const a=l=>l.replace(/[^\w]/g,""),o=()=>{const l=Object.entries(s.peers);Xe("#m-dot").className="dot "+(s.status==="online"?"online":s.status==="error"?"error":""),Xe("#m-status").textContent=s.status==="error"?"Offline · needs WebTransport":s.status==="connecting"?"Connecting to the MoQ relay…":`Live · ${l.length+1} here now`,Xe("#m-host").textContent=s.isHost&&l.length?"· 👑 running the physics":"",Xe("#m-peers").innerHTML=l.length===0?'<li class="empty">No one else here yet. Open this page in another tab, or send it to a friend.</li>':l.slice(0,8).map(([c,h])=>`<li><div>${t[h.fruit]?.e??"🍒"} visitor <span>${a(c).slice(0,4)}</span>${c===s.hostId?" 👑":""}</div><span>${h.score} / ${h.best}</span></li>`).join(""),s.feed.length&&(Xe("#m-feed").innerHTML=s.feed.map(c=>`<li>${t[c.who].e} ${c.self?"You":"Someone"} made ${t[c.tier].e}</li>`).join(""))};s.onChange=o,o(),s.start(),ks=e(Xe("#melon"),s,{score:Xe("#m-score"),best:Xe("#m-best"),next:Xe("#m-next"),over:Xe("#m-over"),overScore:Xe("#m-over-score"),again:Xe("#m-again")}),ks.start()},()=>{},"300px");export{di as B,$e as C,KA as D,qn as E,WA as H,LA as I,mt as M,Wr as P,Li as Q,mv as R,CA as S,ze as V,Kx as W,Js as _,un as a,ln as b,zu as c,ft as d,O as e,St as f,Zl as g};
