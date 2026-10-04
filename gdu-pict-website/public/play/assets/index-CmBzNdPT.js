(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const oc="185",ep=0,hh=1,tp=2,Po=1,_d=2,hr=3,pi=0,jt=1,an=2,hi=0,As=1,uh=2,dh=3,fh=4,np=5,Wi=100,ip=101,sp=102,rp=103,op=104,ap=200,lp=201,cp=202,hp=203,il=204,sl=205,up=206,dp=207,fp=208,pp=209,mp=210,gp=211,xp=212,vp=213,_p=214,rl=0,ol=1,al=2,Ns=3,ll=4,cl=5,hl=6,ul=7,yd=0,yp=1,Mp=2,Xn=0,Md=1,Sd=2,bd=3,wd=4,Ed=5,ac=6,Td=7,ph="attached",Sp="detached",Ad=300,Ji=301,Ds=302,ia=303,sa=304,Zo=306,ji=1e3,Cn=1001,Oo=1002,zt=1003,Rd=1004,ur=1005,Ut=1006,Io=1007,Hn=1008,ln=1009,Cd=1010,Pd=1011,yr=1012,lc=1013,Kn=1014,mn=1015,mi=1016,cc=1017,hc=1018,Mr=1020,Id=35902,Ld=35899,Nd=1021,Dd=1022,gn=1023,gi=1026,Yi=1027,uc=1028,dc=1029,Qi=1030,fc=1031,pc=1033,Lo=33776,No=33777,Do=33778,Uo=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,xl=37492,vl=37496,_l=37488,yl=37489,Bo=37490,Ml=37491,Sl=37808,bl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Nl=37819,Dl=37820,Ul=37821,Fl=36492,Ol=36494,Bl=36495,zl=36283,kl=36284,zo=36285,Vl=36286,Sr=2300,br=2301,ra=2302,mh=2303,gh=2400,xh=2401,vh=2402,bp=2500,wp=0,Ud=1,Gl=2,Ep=3200,Hl=0,Tp=1,li="",Pt="srgb",cn="srgb-linear",ko="linear",ht="srgb",os=7680,_h=519,Ap=512,Rp=513,Cp=514,mc=515,Pp=516,Ip=517,gc=518,Lp=519,Wl=35044,yh="300 es",Wn=2e3,wr=2001;function Np(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Dp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Er(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Up(){const r=Er("canvas");return r.style.display="block",r}const Mh={};function Vo(...r){const e="THREE."+r.shift();console.log(e,...r)}function Fd(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ce(...r){r=Fd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=Fd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Rs(...r){const e=r.join(" ");e in Mh||(Mh[e]=!0,Ce(...r))}function Fp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Op={[rl]:ol,[al]:hl,[ll]:ul,[Ns]:cl,[ol]:rl,[hl]:al,[ul]:ll,[cl]:Ns};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const pr=Math.PI/180,Us=180/Math.PI;function _n(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[r&255]+Yt[r>>8&255]+Yt[r>>16&255]+Yt[r>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Qe(r,e,t){return Math.max(e,Math.min(t,r))}function xc(r,e){return(r%e+e)%e}function Bp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zp(r,e,t){return r!==e?(t-r)/(e-r):0}function mr(r,e,t){return(1-t)*r+t*e}function kp(r,e,t,n){return mr(r,e,1-Math.exp(-t*n))}function Vp(r,e=1){return e-Math.abs(xc(r,e*2)-e)}function Gp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Hp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Wp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Xp(r,e){return r+Math.random()*(e-r)}function qp(r){return r*(.5-Math.random())}function Yp(r){r!==void 0&&(Sh=r);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(r){return r*pr}function Zp(r){return r*Us}function $p(r){return(r&r-1)===0&&r!==0}function Jp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const zr={DEG2RAD:pr,RAD2DEG:Us,generateUUID:_n,clamp:Qe,euclideanModulo:xc,mapLinear:Bp,inverseLerp:zp,lerp:mr,damp:kp,pingpong:Vp,smoothstep:Gp,smootherstep:Hp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:Yp,degToRad:Kp,radToDeg:Zp,isPowerOfTwo:$p,ceilPowerOfTwo:Jp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:Qp,normalize:ut,denormalize:Tn},$c=class $c{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$c.prototype.isVector2=!0;let he=$c,yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};const Jc=class Jc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jc.prototype.isVector3=!0;let N=Jc;const oa=new N,bh=new yn,jc=class jc{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],M=i[4],_=i[7],w=i[2],b=i[5],R=i[8];return s[0]=o*x+a*v+l*w,s[3]=o*m+a*M+l*b,s[6]=o*g+a*_+l*R,s[1]=c*x+h*v+d*w,s[4]=c*m+h*M+d*b,s[7]=c*g+h*_+d*R,s[2]=u*x+f*v+p*w,s[5]=u*m+f*M+p*b,s[8]=u*g+f*_+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jc.prototype.isMatrix3=!0;let Ye=jc;const aa=new Ye,wh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){const r={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[cn]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),r}const st=em();function ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class tm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Er("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nm=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(la(i[o].image)):s.push(la(i[o]))}else s=la(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function la(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let im=0;const ca=new N;class kt extends ns{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Cn,i=Cn,s=Ut,o=Hn,a=gn,l=ln,c=kt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=_n(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ji:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ji:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ad;kt.DEFAULT_ANISOTROPY=1;const Qc=class Qc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(f+1)/2,w=(g+1)/2,b=(h+u)/4,R=(d+x)/4,y=(p+m)/4;return M>_&&M>w?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=R/n):_>w?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=y/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=R/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qc.prototype.isVector4=!0;let mt=Qc;class sm extends ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new kt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends sm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Od extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rm extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ko=class Ko{constructor(e,t,n,i,s,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,n,i,s,o,a,l,c,h,d,u,f,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){const u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(om,e,am)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Mi.crossVectors(n,rn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Mi.crossVectors(n,rn)),Mi.normalize(),Yr.crossVectors(rn,Mi),i[0]=Mi.x,i[4]=Yr.x,i[8]=rn.x,i[1]=Mi.y,i[5]=Yr.y,i[9]=rn.y,i[2]=Mi.z,i[6]=Yr.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],M=n[7],_=n[11],w=n[15],b=i[0],R=i[4],y=i[8],A=i[12],C=i[1],I=i[5],F=i[9],U=i[13],B=i[2],L=i[6],D=i[10],G=i[14],q=i[3],K=i[7],oe=i[11],se=i[15];return s[0]=o*b+a*C+l*B+c*q,s[4]=o*R+a*I+l*L+c*K,s[8]=o*y+a*F+l*D+c*oe,s[12]=o*A+a*U+l*G+c*se,s[1]=h*b+d*C+u*B+f*q,s[5]=h*R+d*I+u*L+f*K,s[9]=h*y+d*F+u*D+f*oe,s[13]=h*A+d*U+u*G+f*se,s[2]=p*b+x*C+m*B+g*q,s[6]=p*R+x*I+m*L+g*K,s[10]=p*y+x*F+m*D+g*oe,s[14]=p*A+x*U+m*G+g*se,s[3]=v*b+M*C+_*B+w*q,s[7]=v*R+M*I+_*L+w*K,s[11]=v*y+M*F+_*D+w*oe,s[15]=v*A+M*U+_*G+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*f-c*u,M=a*f-c*d,_=a*u-l*d,w=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return t*(x*v-m*M+g*_)-n*(p*v-m*w+g*b)+i*(p*M-x*w+g*R)-s*(p*_-x*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,M=t*l-i*o,_=t*c-s*o,w=n*l-i*a,b=n*c-s*a,R=i*c-s*l,y=h*x-d*p,A=h*m-u*p,C=h*g-f*p,I=d*m-u*x,F=d*g-f*x,U=u*g-f*m,B=v*U-M*F+_*I+w*C-b*A+R*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return e[0]=(a*U-l*F+c*I)*L,e[1]=(i*F-n*U-s*I)*L,e[2]=(x*R-m*b+g*w)*L,e[3]=(u*b-d*R-f*w)*L,e[4]=(l*C-o*U-c*A)*L,e[5]=(t*U-i*C+s*A)*L,e[6]=(m*_-p*R-g*M)*L,e[7]=(h*R-u*_+f*M)*L,e[8]=(o*F-a*C+c*y)*L,e[9]=(n*C-t*F-s*y)*L,e[10]=(p*b-x*_+g*v)*L,e[11]=(d*_-h*b-f*v)*L,e[12]=(a*A-o*I-l*y)*L,e[13]=(t*I-n*A+i*y)*L,e[14]=(x*M-p*w-m*v)*L,e[15]=(h*w-d*M+u*v)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,x=o*h,m=o*d,g=a*d,v=l*c,M=l*h,_=l*d,w=n.x,b=n.y,R=n.z;return i[0]=(1-(x+g))*w,i[1]=(f+_)*w,i[2]=(p-M)*w,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(u+g))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(p+M)*R,i[9]=(m-v)*R,i[10]=(1-(u+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ls.set(i[0],i[1],i[2]).length();const a=ls.set(i[4],i[5],i[6]).length(),l=ls.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Sn.copy(this);const c=1/o,h=1/a,d=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Wn,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Wn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===wr)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Wn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Wn)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===wr)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ko.prototype.isMatrix4=!0;let $e=Ko;const ls=new N,Sn=new $e,om=new N(0,0,0),am=new N(1,1,1),Mi=new N,Yr=new N,rn=new N,Th=new $e,Ah=new yn;class Ni{constructor(e=0,t=0,n=0,i=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lm=0;const Rh=new N,cs=new yn,Jn=new $e,Kr=new N,Ks=new N,cm=new N,hm=new yn,Ch=new N(1,0,0),Ph=new N(0,1,0),Ih=new N(0,0,1),Lh={type:"added"},um={type:"removed"},hs={type:"childadded",child:null},ha={type:"childremoved",child:null};class _t extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new N,t=new Ni,n=new yn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ye}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ks,Kr,this.up):Jn.lookAt(Kr,Ks,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(Jn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),hs.child=e,this.dispatchEvent(hs),hs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(um),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new N(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ft extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function da(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=xc(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=da(o,s,e+1/3),this.g=da(o,s,e),this.b=da(o,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return st.workingToColorSpace(Kt.copy(this),e),Math.round(Qe(Kt.r*255,0,255))*65536+Math.round(Qe(Kt.g*255,0,255))*256+Math.round(Qe(Kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,s=Kt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Pt){st.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Zr);const n=mr(Si.h,Zr.h,t),i=mr(Si.s,Zr.s,t),s=mr(Si.l,Zr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new De;De.NAMES=zd;class _c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fm extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new N,jn=new N,fa=new N,Qn=new N,us=new N,ds=new N,Nh=new N,pa=new N,ma=new N,ga=new N,xa=new mt,va=new mt,_a=new mt;class An{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),jn.subVectors(n,t),fa.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(jn),l=bn.dot(fa),c=jn.dot(jn),h=jn.dot(fa),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return xa.setScalar(0),va.setScalar(0),_a.setScalar(0),xa.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),_a.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(xa,s.x),o.addScaledVector(va,s.y),o.addScaledVector(_a,s.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),jn.subVectors(e,t),bn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),bn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;us.subVectors(i,n),ds.subVectors(s,n),pa.subVectors(e,n);const l=us.dot(pa),c=ds.dot(pa);if(l<=0&&c<=0)return t.copy(n);ma.subVectors(e,i);const h=us.dot(ma),d=ds.dot(ma);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(us,o);ga.subVectors(e,s);const f=us.dot(ga),p=ds.dot(ga);if(p>=0&&f<=p)return t.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ds,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Nh.subVectors(s,i),a=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(Nh,a);const g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qt{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Jr.subVectors(this.max,Zs),fs.subVectors(e.a,Zs),ps.subVectors(e.b,Zs),ms.subVectors(e.c,Zs),bi.subVectors(ps,fs),wi.subVectors(ms,ps),Oi.subVectors(fs,ms);let t=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-Oi.z,Oi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,Oi.z,0,-Oi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-Oi.y,Oi.x,0];return!ya(t,fs,ps,ms,Jr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,fs,ps,ms,Jr))?!1:(jr.crossVectors(bi,wi),t=[jr.x,jr.y,jr.z],ya(t,fs,ps,ms,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new N,new N,new N,new N,new N,new N,new N,new N],wn=new N,$r=new Qt,fs=new N,ps=new N,ms=new N,bi=new N,wi=new N,Oi=new N,Zs=new N,Jr=new N,jr=new N,Bi=new N;function ya(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bi.fromArray(r,s);const a=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Nt=new N,Qr=new he;let pm=0;class Wt extends ns{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kd extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vd extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const mm=new Qt,$s=new N,Ma=new N;let hn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Ma)),this.expandByPoint($s.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gm=0;const fn=new $e,Sa=new _t,gs=new N,on=new Qt,Js=new Qt,Ht=new N;class Ot extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?Vd:kd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(on.min,Js.min),on.expandByPoint(Ht),Ht.addVectors(on.max,Js.max),on.expandByPoint(Ht)):(on.expandByPoint(Js.min),on.expandByPoint(Js.max))}on.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ht.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Ht.add(gs)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new N,l[y]=new N;const c=new N,h=new N,d=new N,u=new he,f=new he,p=new he,x=new N,m=new N;function g(y,A,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[y].add(x),a[A].add(x),a[C].add(x),l[y].add(m),l[A].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,A=v.length;y<A;++y){const C=v[y],I=C.start,F=C.count;for(let U=I,B=I+F;U<B;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new N,_=new N,w=new N,b=new N;function R(y){w.fromBufferAttribute(i,y),b.copy(w);const A=a[y];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),_.crossVectors(b,A);const I=_.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,A=v.length;y<A;++y){const C=v[y],I=C.start,F=C.count;for(let U=I,B=I+F;U<B;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Wt(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new N;class yc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let vm=0,Yn=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=As,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const ti=new N,ba=new N,eo=new N,Ei=new N,wa=new N,to=new N,Ea=new N;let $o=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=Ei.dot(this.direction),l=-Ei.dot(eo),c=Ei.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ba).addScaledVector(eo,u),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,s){wa.subVectors(t,e),to.subVectors(n,e),Ea.crossVectors(wa,to);let o=this.direction.dot(Ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=a*this.direction.dot(to.crossVectors(Ei,to));if(l<0)return null;const c=a*this.direction.dot(wa.cross(Ei));if(c<0||l+c>o)return null;const h=-a*Ei.dot(Ea);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class xn extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dh=new $e,zi=new $o,no=new hn,Uh=new N,io=new N,so=new N,ro=new N,Ta=new N,oo=new N,Fh=new N,ao=new N;class et extends _t{constructor(e=new Ot,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Ta.fromBufferAttribute(d,e),o?oo.addScaledVector(Ta,h):oo.addScaledVector(Ta.sub(t),h))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(no.containsPoint(zi.origin)===!1&&(zi.intersectSphere(no,Uh)===null||zi.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),zi.copy(e.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,w=M;_<w;_+=3){const b=a.getX(_),R=a.getX(_+1),y=a.getX(_+2);i=lo(this,g,e,n,c,h,d,b,R,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);i=lo(this,o,e,n,c,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,w=M;_<w;_+=3){const b=_,R=_+1,y=_+2;i=lo(this,g,e,n,c,h,d,b,R,y),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=m,M=m+1,_=m+2;i=lo(this,o,e,n,c,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _m(r,e,t,n,i,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===pi,a),l===null)return null;ao.copy(a),ao.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:r}}function lo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,io),r.getVertexPosition(l,so),r.getVertexPosition(c,ro);const h=_m(r,e,t,n,io,so,ro,Fh);if(h){const d=new N;An.getBarycoord(Fh,io,so,ro,d),i&&(h.uv=An.getInterpolatedAttribute(i,a,l,c,d,new he)),s&&(h.uv1=An.getInterpolatedAttribute(s,a,l,c,d,new he)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};An.getNormal(io,so,ro,u.normal),h.face=u,h.barycoord=d}return h}const js=new mt,Oh=new mt,Bh=new mt,ym=new mt,zh=new $e,co=new N,Aa=new hn,kh=new $e,Ra=new $o;class Mm extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ph,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1&&(kh.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&Ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ph?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Oh.fromBufferAttribute(i.attributes.skinIndex,e),Bh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(js.copy(t),t.set(0,0,0,0)):(js.set(...t,1),t.set(0,0,0)),js.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const o=Bh.getComponent(s);if(o!==0){const a=Oh.getComponent(s);zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ym.copy(js).applyMatrix4(zh),o)}}return t.isVector4&&(t.w=js.w),t.applyMatrix4(this.bindMatrixInverse)}}class Gd extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mc extends kt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=zt,h=zt,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new $e,Sm=new $e;class Sc{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Sm;Vh.multiplyMatrices(a,t[s]),Vh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Sc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mc(t,e,e,gn,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ce("Skeleton: No bone found with UUID:",s),o=new Gd),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class di extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new $e,Gh=new $e,ho=[],Hh=new Qt,bm=new $e,Qs=new et,er=new hn;class Ps extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),Hh.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),er.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xs),Gh.multiplyMatrices(n,xs),Qs.matrixWorld=Gh,Qs.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=s,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mc(new Float32Array(i*this.count),i,this.count,uc,mn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ca=new N,wm=new N,Em=new Ye;class Hi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ca.subVectors(n,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Em.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new hn,Tm=new he(.5,.5),uo=new N;class bc{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,s=new Hi,o=new Hi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],v=s[12],M=s[13],_=s[14],w=s[15];if(i[0].setComponents(c-o,f-h,g-p,w-v).normalize(),i[1].setComponents(c+o,f+h,g+p,w+v).normalize(),i[2].setComponents(c+a,f+d,g+x,w+M).normalize(),i[3].setComponents(c-a,f-d,g-x,w-M).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,f-u,g-m,w-_).normalize();else if(i[4].setComponents(c-l,f-u,g-m,w-_).normalize(),t===Wn)i[5].setComponents(c+l,f+u,g+m,w+_).normalize();else if(t===wr)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Tm.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(uo.x=i.normal.x>0?e.max.x:e.min.x,uo.y=i.normal.y>0?e.max.y:e.min.y,uo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hd extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new N,Ho=new N,Wh=new $e,tr=new $o,fo=new hn,Pa=new N,Xh=new N;class wc extends _t{constructor(e=new Ot,t=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Go.fromBufferAttribute(t,i-1),Ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Go.distanceTo(Ho);e.setAttribute("lineDistance",new gt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;Wh.copy(i).invert(),tr.copy(e.ray).applyMatrix4(Wh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),v=h.getX(x+1),M=po(this,e,tr,l,g,v,x);M&&t.push(M)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=po(this,e,tr,l,x,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=po(this,e,tr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=po(this,e,tr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function po(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Go.fromBufferAttribute(a,i),Ho.fromBufferAttribute(a,s),t.distanceSqToSegment(Go,Ho,Pa,Xh)>n)return;Pa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Pa);if(!(c<e.near||c>e.far))return{distance:c,point:Xh.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const qh=new N,Yh=new N;class Am extends wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)qh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qh.distanceTo(Yh);e.setAttribute("lineDistance",new gt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rm extends wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wd extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kh=new $e,Xl=new $o,mo=new hn,go=new N;class Cm extends _t{constructor(e=new Ot,t=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;Kh.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(Kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){const m=c.getX(p);go.fromBufferAttribute(d,m),Zh(go,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)go.fromBufferAttribute(d,p),Zh(go,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zh(r,e,t,n,i,s,o){const a=Xl.distanceSqToPoint(r);if(a<t){const l=new N;Xl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xd extends kt{constructor(e=[],t=Ji,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ec extends kt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fs extends kt{constructor(e,t,n=Kn,i,s,o,a=zt,l=zt,c,h=gi,d=1){if(h!==gi&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pm extends Fs{constructor(e,t=Kn,n=Ji,i,s,o=zt,a=zt,l,c=gi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qd extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tn extends Ot{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function p(x,m,g,v,M,_,w,b,R,y,A){const C=_/R,I=w/y,F=_/2,U=w/2,B=b/2,L=R+1,D=y+1;let G=0,q=0;const K=new N;for(let oe=0;oe<D;oe++){const se=oe*I-U;for(let ee=0;ee<L;ee++){const We=ee*C-F;K[x]=We*v,K[m]=se*M,K[g]=B,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=b>0?1:-1,h.push(K.x,K.y,K.z),d.push(ee/R),d.push(1-oe/y),G+=1}}for(let oe=0;oe<y;oe++)for(let se=0;se<R;se++){const ee=u+se+L*oe,We=u+se+L*(oe+1),ot=u+(se+1)+L*(oe+1),tt=u+(se+1)+L*oe;l.push(ee,We,tt),l.push(We,ot,tt),q+=6}a.addGroup(f,q,A),f+=q,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class is extends Ot{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let p=0;const x=[],m=n/2;let g=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function v(){const _=new N,w=new N;let b=0;const R=(t-e)/n;for(let y=0;y<=s;y++){const A=[],C=y/s,I=C*(t-e)+e;for(let F=0;F<=i;F++){const U=F/i,B=U*l+a,L=Math.sin(B),D=Math.cos(B);w.x=I*L,w.y=-C*n+m,w.z=I*D,d.push(w.x,w.y,w.z),_.set(L,R,D).normalize(),u.push(_.x,_.y,_.z),f.push(U,1-C),A.push(p++)}x.push(A)}for(let y=0;y<i;y++)for(let A=0;A<s;A++){const C=x[A][y],I=x[A+1][y],F=x[A+1][y+1],U=x[A][y+1];(e>0||A!==0)&&(h.push(C,I,U),b+=3),(t>0||A!==s-1)&&(h.push(I,F,U),b+=3)}c.addGroup(g,b,0),g+=b}function M(_){const w=p,b=new he,R=new N;let y=0;const A=_===!0?e:t,C=_===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;const I=p;for(let F=0;F<=i;F++){const B=F/i*l+a,L=Math.cos(B),D=Math.sin(B);R.x=A*D,R.y=m*C,R.z=A*L,d.push(R.x,R.y,R.z),u.push(0,C,0),b.x=L*.5+.5,b.y=D*.5*C+.5,f.push(b.x,b.y),p++}for(let F=0;F<i;F++){const U=w+F,B=I+F;_===!0?h.push(B,B+1,U):h.push(B+1,B,U),y+=3}c.addGroup(g,y,_===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tc extends is{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Tc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends Ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new N,_=new N,w=new N;for(let b=0;b<t.length;b+=3)f(t[b+0],M),f(t[b+1],_),f(t[b+2],w),l(M,_,w,v)}function l(v,M,_,w){const b=w+1,R=[];for(let y=0;y<=b;y++){R[y]=[];const A=v.clone().lerp(_,y/b),C=M.clone().lerp(_,y/b),I=b-y;for(let F=0;F<=I;F++)F===0&&y===b?R[y][F]=A:R[y][F]=A.clone().lerp(C,F/I)}for(let y=0;y<b;y++)for(let A=0;A<2*(b-y)-1;A++){const C=Math.floor(A/2);A%2===0?(u(R[y][C+1]),u(R[y+1][C]),u(R[y][C])):(u(R[y][C+1]),u(R[y+1][C+1]),u(R[y+1][C]))}}function c(v){const M=new N;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(v),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){const v=new N;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];const _=m(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;o.push(_,1-w)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const M=o[v+0],_=o[v+2],w=o[v+4],b=Math.max(M,_,w),R=Math.min(M,_,w);b>.9&&R<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,M){const _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function p(){const v=new N,M=new N,_=new N,w=new N,b=new he,R=new he,y=new he;for(let A=0,C=0;A<s.length;A+=9,C+=6){v.set(s[A+0],s[A+1],s[A+2]),M.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),b.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),y.set(o[C+4],o[C+5]),w.copy(v).add(M).add(_).divideScalar(3);const I=m(w);x(b,C+0,v,I),x(R,C+2,M,I),x(y,C+4,_,I)}}function x(v,M,_,w){w<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.vertices,e.indices,e.radius,e.detail)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new he:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,i=[],s=[],o=[],a=new N,l=new $e;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Qe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Qe(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rc extends Zn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Im extends Rc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const $h=new N,Jh=new N,Ia=new Cc,La=new Cc,Na=new Cc;class Lm extends Zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Jh.subVectors(i[0],i[1]).add(i[0]),c=Jh);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:($h.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=$h),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ia.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),La.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Na.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),La.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Na.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ia.calc(l),La.calc(l),Na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jh(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Nm(r,e){const t=1-r;return t*t*e}function Dm(r,e){return 2*(1-r)*r*e}function Um(r,e){return r*r*e}function gr(r,e,t,n){return Nm(r,e)+Dm(r,t)+Um(r,n)}function Fm(r,e){const t=1-r;return t*t*t*e}function Om(r,e){const t=1-r;return 3*t*t*r*e}function Bm(r,e){return 3*(1-r)*r*r*e}function zm(r,e){return r*r*r*e}function xr(r,e,t,n,i){return Fm(r,e)+Om(r,t)+Bm(r,n)+zm(r,i)}class Yd extends Zn{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,s.x,o.x,a.x),xr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class km extends Zn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,s.x,o.x,a.x),xr(e,i.y,s.y,o.y,a.y),xr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kd extends Zn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vm extends Zn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Zn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(gr(e,i.x,s.x,o.x),gr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gm extends Zn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(gr(e,i.x,s.x,o.x),gr(e,i.y,s.y,o.y),gr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $d extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(jh(a,l.x,c.x,h.x,d.x),jh(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var ql=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:Lm,CubicBezierCurve:Yd,CubicBezierCurve3:km,EllipseCurve:Rc,LineCurve:Kd,LineCurve3:Vm,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:Gm,SplineCurve:$d});class Hm extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ql[i.type]().fromJSON(i))}return this}}class Yl extends Hm{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Kd(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Zd(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Yd(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Rc(e,t,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}let Gs=class extends Yl{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Yl().fromJSON(i))}return this}};function Wm(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Jd(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Zm(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,d=l;for(let u=t;u<i;u+=t){const f=r[u],p=r[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Tr(s,o,t,a,l,c,0),o}function Jd(r,e,t,n,i){let s;if(i===og(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Qh(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Qh(o/n|0,r[o],r[o+1],s);return s&&Os(s,s.next)&&(Rr(s),s=s.next),s}function es(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Os(t,t.next)||wt(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&eg(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?qm(r,n,i,s):Xm(r)){e.push(l.i,r.i,c.i),Rr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ym(es(r),e),Tr(r,e,t,n,i,s,2)):o===2&&Km(r,e,t,n,i,s):Tr(es(r),e,t,n,i,s,1);break}}}function Xm(r){const e=r.prev,t=r,n=r.next;if(wt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),d=Math.min(a,l,c),u=Math.max(i,s,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&dr(i,a,s,l,o,c,p.x,p.y)&&wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qm(r,e,t,n){const i=r.prev,s=r,o=r.next;if(wt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=Kl(f,p,e,t,n),v=Kl(x,m,e,t,n);let M=r.prevZ,_=r.nextZ;for(;M&&M.z>=g&&_&&_.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&dr(a,h,l,d,c,u,M.x,M.y)&&wt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&dr(a,h,l,d,c,u,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&dr(a,h,l,d,c,u,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&dr(a,h,l,d,c,u,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ym(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Os(n,i)&&Qd(n,t,t.next,i)&&Ar(n,i)&&Ar(i,n)&&(e.push(n.i,t.i,i.i),Rr(t),Rr(t.next),t=r=i),t=t.next}while(t!==r);return es(t)}function Km(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ig(o,a)){let l=ef(o,a);o=es(o,o.next),l=es(l,l.next),Tr(o,e,t,n,i,s,0),Tr(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Zm(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Jd(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ng(c))}i.sort($m);for(let s=0;s<i.length;s++)t=Jm(i[s],t);return t}function $m(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Jm(r,e){const t=jm(r,e);if(!t)return e;const n=ef(t,r);return es(n,n.next),es(t,t.next)}function jm(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Os(r,t))return t;do{if(Os(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&jd(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Ar(t,r)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Qm(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Qm(r,e){return wt(r.prev,r,e.prev)<0&&wt(e.next,r,r.next)<0}function eg(r,e,t,n){let i=r;do i.z===0&&(i.z=Kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,tg(i)}function tg(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Kl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function ng(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function jd(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function dr(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&jd(r,e,t,n,i,s,o,a)}function ig(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!sg(r,e)&&(Ar(r,e)&&Ar(e,r)&&rg(r,e)&&(wt(r.prev,r,e.prev)||wt(r,e.prev,e))||Os(r,e)&&wt(r.prev,r,r.next)>0&&wt(e.prev,e,e.next)>0)}function wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Os(r,e){return r.x===e.x&&r.y===e.y}function Qd(r,e,t,n){const i=vo(wt(r,e,t)),s=vo(wt(r,e,n)),o=vo(wt(t,n,r)),a=vo(wt(t,n,e));return!!(i!==s&&o!==a||i===0&&xo(r,t,e)||s===0&&xo(r,n,e)||o===0&&xo(t,r,n)||a===0&&xo(t,e,n))}function xo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function vo(r){return r>0?1:r<0?-1:0}function sg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ar(r,e){return wt(r.prev,r,r.next)<0?wt(r,e,r.next)>=0&&wt(r,r.prev,e)>=0:wt(r,e,r.prev)<0||wt(r,r.next,e)<0}function rg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ef(r,e){const t=Zl(r.i,r.x,r.y),n=Zl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qh(r,e,t,n){const i=Zl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Zl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function og(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ag{static triangulate(e,t,n=2){return Wm(e,t,n)}}class ws{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ws.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];eu(e),tu(n,e);let o=e.length;t.forEach(eu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,tu(n,t[l]);const a=ag.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function eu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function tu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class kr extends Ot{constructor(e=new Gs([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gt(i,3)),this.setAttribute("uv",new gt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:lg;let M,_=!1,w,b,R,y;if(g){M=g.getSpacedPoints(h),_=!0,u=!1;const te=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,te),b=new N,R=new N,y=new N}u||(m=0,f=0,p=0,x=0);const A=a.extractPoints(c);let C=A.shape;const I=A.holes;if(!ws.isClockWise(C)){C=C.reverse();for(let te=0,re=I.length;te<re;te++){const ie=I[te];ws.isClockWise(ie)&&(I[te]=ie.reverse())}}function U(te){const ie=10000000000000001e-36;let _e=te[0];for(let xe=1;xe<=te.length;xe++){const ze=xe%te.length,Ie=te[ze],He=Ie.x-_e.x,qe=Ie.y-_e.y,O=He*He+qe*qe,ft=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(_e.x),Math.abs(_e.y)),it=ie*ft*ft;if(O<=it){te.splice(ze,1),xe--;continue}_e=Ie}}U(C),I.forEach(U);const B=I.length,L=C;for(let te=0;te<B;te++){const re=I[te];C=C.concat(re)}function D(te,re,ie){return re||Ve("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(re,ie)}const G=C.length;function q(te,re,ie){let _e,xe,ze;const Ie=te.x-re.x,He=te.y-re.y,qe=ie.x-te.x,O=ie.y-te.y,ft=Ie*Ie+He*He,it=Ie*O-He*qe;if(Math.abs(it)>Number.EPSILON){const P=Math.sqrt(ft),S=Math.sqrt(qe*qe+O*O),V=re.x-He/P,X=re.y+Ie/P,Z=ie.x-O/S,le=ie.y+qe/S,ue=((Z-V)*O-(le-X)*qe)/(Ie*O-He*qe);_e=V+Ie*ue-te.x,xe=X+He*ue-te.y;const $=_e*_e+xe*xe;if($<=2)return new he(_e,xe);ze=Math.sqrt($/2)}else{let P=!1;Ie>Number.EPSILON?qe>Number.EPSILON&&(P=!0):Ie<-Number.EPSILON?qe<-Number.EPSILON&&(P=!0):Math.sign(He)===Math.sign(O)&&(P=!0),P?(_e=-He,xe=Ie,ze=Math.sqrt(ft)):(_e=Ie,xe=He,ze=Math.sqrt(ft/2))}return new he(_e/ze,xe/ze)}const K=[];for(let te=0,re=L.length,ie=re-1,_e=te+1;te<re;te++,ie++,_e++)ie===re&&(ie=0),_e===re&&(_e=0),K[te]=q(L[te],L[ie],L[_e]);const oe=[];let se,ee=K.concat();for(let te=0,re=B;te<re;te++){const ie=I[te];se=[];for(let _e=0,xe=ie.length,ze=xe-1,Ie=_e+1;_e<xe;_e++,ze++,Ie++)ze===xe&&(ze=0),Ie===xe&&(Ie=0),se[_e]=q(ie[_e],ie[ze],ie[Ie]);oe.push(se),ee=ee.concat(se)}let We;if(m===0)We=ws.triangulateShape(L,I);else{const te=[],re=[];for(let ie=0;ie<m;ie++){const _e=ie/m,xe=f*Math.cos(_e*Math.PI/2),ze=p*Math.sin(_e*Math.PI/2)+x;for(let Ie=0,He=L.length;Ie<He;Ie++){const qe=D(L[Ie],K[Ie],ze);Ue(qe.x,qe.y,-xe),_e===0&&te.push(qe)}for(let Ie=0,He=B;Ie<He;Ie++){const qe=I[Ie];se=oe[Ie];const O=[];for(let ft=0,it=qe.length;ft<it;ft++){const P=D(qe[ft],se[ft],ze);Ue(P.x,P.y,-xe),_e===0&&O.push(P)}_e===0&&re.push(O)}}We=ws.triangulateShape(te,re)}const ot=We.length,tt=p+x;for(let te=0;te<G;te++){const re=u?D(C[te],ee[te],tt):C[te];_?(R.copy(w.normals[0]).multiplyScalar(re.x),b.copy(w.binormals[0]).multiplyScalar(re.y),y.copy(M[0]).add(R).add(b),Ue(y.x,y.y,y.z)):Ue(re.x,re.y,0)}for(let te=1;te<=h;te++)for(let re=0;re<G;re++){const ie=u?D(C[re],ee[re],tt):C[re];_?(R.copy(w.normals[te]).multiplyScalar(ie.x),b.copy(w.binormals[te]).multiplyScalar(ie.y),y.copy(M[te]).add(R).add(b),Ue(y.x,y.y,y.z)):Ue(ie.x,ie.y,d/h*te)}for(let te=m-1;te>=0;te--){const re=te/m,ie=f*Math.cos(re*Math.PI/2),_e=p*Math.sin(re*Math.PI/2)+x;for(let xe=0,ze=L.length;xe<ze;xe++){const Ie=D(L[xe],K[xe],_e);Ue(Ie.x,Ie.y,d+ie)}for(let xe=0,ze=I.length;xe<ze;xe++){const Ie=I[xe];se=oe[xe];for(let He=0,qe=Ie.length;He<qe;He++){const O=D(Ie[He],se[He],_e);_?Ue(O.x,O.y+M[h-1].y,M[h-1].x+ie):Ue(O.x,O.y,d+ie)}}}J(),ce();function J(){const te=i.length/3;if(u){let re=0,ie=G*re;for(let _e=0;_e<ot;_e++){const xe=We[_e];Ge(xe[2]+ie,xe[1]+ie,xe[0]+ie)}re=h+m*2,ie=G*re;for(let _e=0;_e<ot;_e++){const xe=We[_e];Ge(xe[0]+ie,xe[1]+ie,xe[2]+ie)}}else{for(let re=0;re<ot;re++){const ie=We[re];Ge(ie[2],ie[1],ie[0])}for(let re=0;re<ot;re++){const ie=We[re];Ge(ie[0]+G*h,ie[1]+G*h,ie[2]+G*h)}}n.addGroup(te,i.length/3-te,0)}function ce(){const te=i.length/3;let re=0;ae(L,re),re+=L.length;for(let ie=0,_e=I.length;ie<_e;ie++){const xe=I[ie];ae(xe,re),re+=xe.length}n.addGroup(te,i.length/3-te,1)}function ae(te,re){let ie=te.length;for(;--ie>=0;){const _e=ie;let xe=ie-1;xe<0&&(xe=te.length-1);for(let ze=0,Ie=h+m*2;ze<Ie;ze++){const He=G*ze,qe=G*(ze+1),O=re+_e+He,ft=re+xe+He,it=re+xe+qe,P=re+_e+qe;Be(O,ft,it,P)}}}function Ue(te,re,ie){l.push(te),l.push(re),l.push(ie)}function Ge(te,re,ie){at(te),at(re),at(ie);const _e=i.length/3,xe=v.generateTopUV(n,i,_e-3,_e-2,_e-1);Xe(xe[0]),Xe(xe[1]),Xe(xe[2])}function Be(te,re,ie,_e){at(te),at(re),at(_e),at(re),at(ie),at(_e);const xe=i.length/3,ze=v.generateSideWallUV(n,i,xe-6,xe-3,xe-2,xe-1);Xe(ze[0]),Xe(ze[1]),Xe(ze[3]),Xe(ze[1]),Xe(ze[2]),Xe(ze[3])}function at(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function Xe(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ql[i.type]().fromJSON(i)),new kr(n,e.options)}}const lg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new he(s,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-d),new he(u,1-p),new he(x,1-g)]:[new he(a,1-l),new he(h,1-d),new he(f,1-p),new he(m,1-g)]}};function cg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cr extends Ac{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cr(e.radius,e.detail)}}class In extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const v=g*u-o;for(let M=0;M<c;M++){const _=M*d-s;p.push(_,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const M=v+c*g,_=v+c*(g+1),w=v+1+c*(g+1),b=v+1+c*g;f.push(M,_,b),f.push(_,w,b)}this.setIndex(f),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pc extends Ot{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new N,p=new he;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=s+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const v=g+m,M=v,_=v+n+1,w=v+n+2,b=v+1;a.push(M,_,b),a.push(_,w,b)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vr extends Ot{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new N,u=new N,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const v=[],M=g/n,_=o+M*a,w=e*Math.cos(_),b=Math.sqrt(e*e-w*w);let R=0;g===0&&o===0?R=.5/t:g===n&&l===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){const A=y/t,C=i+A*s;d.x=-b*Math.cos(C),d.y=w,d.z=b*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+R,1-M),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const M=h[g][v+1],_=h[g][v],w=h[g+1][v],b=h[g+1][v+1];(g!==0||o>0)&&f.push(M,_,b),(g!==n-1||l<Math.PI)&&f.push(_,w,b)}this.setIndex(f),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(nu(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(nu(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function $t(r){const e={};for(let t=0;t<r.length;t++){const n=Bs(r[t]);for(const i in n)e[i]=n[i]}return e}function nu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function hg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function tf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Ic={clone:Bs,merge:$t};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=hg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new he().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fg extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class At extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pg extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mg extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _o(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function gg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function xg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Hs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class vg extends Hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xh:s=e,a=2*t-n;break;case vh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:o=e,l=2*n-t;break;case vh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let w=0;w!==a;++w)s[w]=g*o[h+w]+v*o[c+w]+M*o[l+w]+_*o[d+w];return s}}class _g extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class yg extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mg extends Hs{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*p;return s}const u=a*2,f=e-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=f*u+p*2,v=d[g],M=d[g+1],_=e*u+p*2,w=h[_],b=h[_+1];let R=(n-t)/(i-t),y,A,C,I,F;for(let U=0;U<8;U++){y=R*R,A=y*R,C=1-R,I=C*C,F=I*C;const L=F*t+3*I*R*v+3*C*y*w+A*i-n;if(Math.abs(L)<1e-10)break;const D=3*I*(v-t)+6*C*R*(w-v)+3*y*(i-w);if(Math.abs(D)<1e-10)break;R=R-L/D,R=Math.max(0,Math.min(1,R))}s[p]=F*x+3*I*R*M+3*C*y*b+A*m}return s}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_o(t,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_o(e.times,Array),values:_o(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Mg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break;case mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Dp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ra,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=br;class Ws extends Ln{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Sr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}nf.prototype.ValueTypeName="color";class Pr extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}Pr.prototype.ValueTypeName="number";class Sg extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ir extends Ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sg(this.times,this.values,this.getValueSize(),e)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Ln{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Sr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Wo extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}Wo.prototype.ValueTypeName="vector";class bg{constructor(e="",t=-1,n=[],i=bp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Eg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ln.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=gg(l);l=iu(l,1,h),c=iu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function wg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Wo;case"color":return nf;case"quaternion":return Ir;case"bool":case"boolean":return Ws;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Eg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wg(r.type);if(r.times===void 0){const t=[],n=[];xg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ci={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(su(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!su(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function su(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Tg{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ag=new Tg;class qs{constructor(e){this.manager=e!==void 0?e:Ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Rg extends Error{constructor(e,t){super(e),this.response=t}}class sf extends qs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ci.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ni[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:_})=>{if(M)g.close();else{x+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,R=h.length;b<R;b++){const y=h[b];y.onProgress&&y.onProgress(w)}g.enqueue(_),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Rg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ci.add(`file:${e}`,c);const h=ni[e];delete ni[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const vs=new WeakMap;class Cg extends qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=vs.get(o);d===void 0&&(d=[],vs.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Er("img");function l(){h(),t&&t(this);const d=vs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}vs.delete(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),ci.remove(`image:${e}`);const u=vs.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Lc extends qs{constructor(e){super(e)}load(e,t,n,i){const s=new kt,o=new Cg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Jo extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Pg extends Jo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Da=new $e,ru=new N,ou=new N;class Nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yo=new N,Mo=new yn,Fn=new N;class rf extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,Mo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,Mo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new N,au=new he,lu=new he;class Jt extends rf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,au,lu),t.subVectors(lu,au)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ig extends Nc{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lg extends Jo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ig}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ng extends Nc{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Dg extends Jo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ng}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class jo extends rf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ug extends Nc{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $l extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Ug}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dc extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ua=new WeakMap;class Fg extends qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ci.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Ua.has(o)===!0?(i&&i(Ua.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){ci.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),Ua.set(l,c),ci.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _s=-90,ys=1;class Og extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(_s,ys,e,t);i.layers=this.layers,this.add(i);const s=new Jt(_s,ys,e,t);s.layers=this.layers,this.add(s);const o=new Jt(_s,ys,e,t);o.layers=this.layers,this.add(o);const a=new Jt(_s,ys,e,t);a.layers=this.layers,this.add(a);const l=new Jt(_s,ys,e,t);l.layers=this.layers,this.add(l);const c=new Jt(_s,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Bg extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uc="\\[\\]\\.:\\/",zg=new RegExp("["+Uc+"]","g"),Fc="[^"+Uc+"]",kg="[^"+Uc.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",Fc),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),Wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Xg=new RegExp("^"+Vg+Gg+Hg+Wg+"$"),qg=["material","materials","bones","map"];class Yg{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(e){const t=Xg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);qg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Yg;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Kg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const eh=class eh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};eh.prototype.isMatrix2=!0;let cu=eh;function hu(r,e,t,n){const i=Zg(n);switch(t){case Nd:return r*e;case uc:return r*e/i.components*i.byteLength;case dc:return r*e/i.components*i.byteLength;case Qi:return r*e*2/i.components*i.byteLength;case fc:return r*e*2/i.components*i.byteLength;case Dd:return r*e*3/i.components*i.byteLength;case gn:return r*e*4/i.components*i.byteLength;case pc:return r*e*4/i.components*i.byteLength;case Lo:case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Do:case Uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(r,16)*Math.max(e,8)/4;case dl:case pl:return Math.max(r,8)*Math.max(e,8)/2;case gl:case xl:case _l:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vl:case Bo:case Ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Ol:case Bl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zl:case kl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zo:case Vl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zg(r){switch(r){case ln:case Cd:return{byteLength:1,components:1};case yr:case Pd:case mi:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Kn:case lc:case mn:return{byteLength:4,components:1};case Id:case Ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function of(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $g(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,y0=`#define PI 3.141592653589793
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,H0=`#ifdef USE_ENVMAP
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
	#endif
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,Z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,$0=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
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
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
}`,rv=`#define DISTANCE
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
}`,ov=`#define DISTANCE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,hv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,gv=`#define MATCAP
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
}`,xv=`#define NORMAL
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
}`,vv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,yv=`#define PHONG
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
}`,Mv=`#define STANDARD
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
}`,Sv=`#define STANDARD
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
}`,bv=`#define TOON
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
}`,wv=`#define TOON
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
}`,Ev=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Rv=`uniform vec3 color;
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
}`,Cv=`uniform float rotation;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Jg,alphahash_pars_fragment:jg,alphamap_fragment:Qg,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:l0,bsdfs:c0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:x0,color_pars_vertex:v0,color_vertex:_0,common:y0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:S0,displacementmap_pars_vertex:b0,displacementmap_vertex:w0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:I0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:H0,envmap_vertex:N0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:V0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:K0,lights_physical_pars_fragment:Z0,lights_fragment_begin:$0,lights_fragment_maps:J0,lights_fragment_end:j0,lightprobes_pars_fragment:Q0,logdepthbuf_fragment:ex,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:rx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:hx,morphcolor_vertex:ux,morphnormal_vertex:dx,morphtarget_pars_vertex:fx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:vx,normal_vertex:_x,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:wx,opaque_fragment:Ex,packing:Tx,premultiplied_alpha_fragment:Ax,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Px,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Dx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Fx,skinbase_vertex:Ox,skinning_pars_vertex:Bx,skinning_vertex:zx,skinnormal_vertex:kx,specularmap_fragment:Vx,specularmap_pars_fragment:Gx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:qx,uv_pars_fragment:Yx,uv_pars_vertex:Kx,uv_vertex:Zx,worldpos_vertex:$x,background_vert:Jx,background_frag:jx,backgroundCube_vert:Qx,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:sv,distance_vert:rv,distance_frag:ov,equirect_vert:av,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:hv,meshbasic_vert:uv,meshbasic_frag:dv,meshlambert_vert:fv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:xv,meshnormal_frag:vv,meshphong_vert:_v,meshphong_frag:yv,meshphysical_vert:Mv,meshphysical_frag:Sv,meshtoon_vert:bv,meshtoon_frag:wv,points_vert:Ev,points_frag:Tv,shadow_vert:Av,shadow_frag:Rv,sprite_vert:Cv,sprite_frag:Pv},ge={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:$t([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:$t([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:$t([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:$t([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:$t([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:$t([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:$t([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:$t([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:$t([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:$t([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:$t([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:$t([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:$t([ge.lights,ge.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Gn.physical={uniforms:$t([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const So={r:0,b:0,g:0},Iv=new $e,af=new Ye;af.set(-1,0,0,0,1,0,0,0,1);function Lv(r,e,t,n,i,s){const o=new De(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const _=v.backgroundBlurriness>0;M=e.get(M,_)}return M}function p(v){let M=!1;const _=f(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,M){const _=f(M);_&&(_.isCubeTexture||_.mapping===Zo)?(c===void 0&&(c=new et(new tn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Bs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=st.getTransfer(_.colorSpace)!==ht,(h!==_||d!==_.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new et(new In(2,2),new nn({name:"BackgroundMaterial",uniforms:Bs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(So,tf(r)),t.buffers.color.setClear(So.r,So.g,So.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Nv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(I,F,U,B,L){let D=!1;const G=d(I,B,U,F);s!==G&&(s=G,c(s.object)),D=f(I,B,U,L),D&&p(I,B,U,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(I,F,U,B),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,F,U,B){const L=B.wireframe===!0;let D=n[F.id];D===void 0&&(D={},n[F.id]=D);const G=I.isInstancedMesh===!0?I.id:0;let q=D[G];q===void 0&&(q={},D[G]=q);let K=q[U.id];K===void 0&&(K={},q[U.id]=K);let oe=K[L];return oe===void 0&&(oe=u(l()),K[L]=oe),oe}function u(I){const F=[],U=[],B=[];for(let L=0;L<t;L++)F[L]=0,U[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:B,object:I,attributes:{},index:null}}function f(I,F,U,B){const L=s.attributes,D=F.attributes;let G=0;const q=U.getAttributes();for(const K in q)if(q[K].location>=0){const se=L[K];let ee=D[K];if(ee===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),se===void 0||se.attribute!==ee||ee&&se.data!==ee.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function p(I,F,U,B){const L={},D=F.attributes;let G=0;const q=U.getAttributes();for(const K in q)if(q[K].location>=0){let se=D[K];se===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));const ee={};ee.attribute=se,se&&se.data&&(ee.data=se.data),L[K]=ee,G++}s.attributes=L,s.attributesNum=G,s.index=B}function x(){const I=s.newAttributes;for(let F=0,U=I.length;F<U;F++)I[F]=0}function m(I){g(I,0)}function g(I,F){const U=s.newAttributes,B=s.enabledAttributes,L=s.attributeDivisors;U[I]=1,B[I]===0&&(r.enableVertexAttribArray(I),B[I]=1),L[I]!==F&&(r.vertexAttribDivisor(I,F),L[I]=F)}function v(){const I=s.newAttributes,F=s.enabledAttributes;for(let U=0,B=F.length;U<B;U++)F[U]!==I[U]&&(r.disableVertexAttribArray(U),F[U]=0)}function M(I,F,U,B,L,D,G){G===!0?r.vertexAttribIPointer(I,F,U,L,D):r.vertexAttribPointer(I,F,U,B,L,D)}function _(I,F,U,B){x();const L=B.attributes,D=U.getAttributes(),G=F.defaultAttributeValues;for(const q in D){const K=D[q];if(K.location>=0){let oe=L[q];if(oe===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),oe!==void 0){const se=oe.normalized,ee=oe.itemSize,We=e.get(oe);if(We===void 0)continue;const ot=We.buffer,tt=We.type,J=We.bytesPerElement,ce=tt===r.INT||tt===r.UNSIGNED_INT||oe.gpuType===lc;if(oe.isInterleavedBufferAttribute){const ae=oe.data,Ue=ae.stride,Ge=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<K.locationSize;Be++)g(K.location+Be,ae.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<K.locationSize;Be++)m(K.location+Be);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let Be=0;Be<K.locationSize;Be++)M(K.location+Be,ee/K.locationSize,tt,se,Ue*J,(Ge+ee/K.locationSize*Be)*J,ce)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae,oe.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let ae=0;ae<K.locationSize;ae++)M(K.location+ae,ee/K.locationSize,tt,se,ee*J,ee/K.locationSize*ae*J,ce)}}else if(G!==void 0){const se=G[q];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(K.location,se);break;case 3:r.vertexAttrib3fv(K.location,se);break;case 4:r.vertexAttrib4fv(K.location,se);break;default:r.vertexAttrib1fv(K.location,se)}}}}v()}function w(){A();for(const I in n){const F=n[I];for(const U in F){const B=F[U];for(const L in B){const D=B[L];for(const G in D)h(D[G].object),delete D[G];delete B[L]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const U in F){const B=F[U];for(const L in B){const D=B[L];for(const G in D)h(D[G].object),delete D[G];delete B[L]}}delete n[I.id]}function R(I){for(const F in n){const U=n[F];for(const B in U){const L=U[B];if(L[I.id]===void 0)continue;const D=L[I.id];for(const G in D)h(D[G].object),delete D[G];delete L[I.id]}}}function y(I){for(const F in n){const U=n[F],B=I.isInstancedMesh===!0?I.id:0,L=U[B];if(L!==void 0){for(const D in L){const G=L[D];for(const q in G)h(G[q].object),delete G[q];delete L[D]}delete U[B],Object.keys(U).length===0&&delete n[F]}}}function A(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Dv(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Uv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==gn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!y)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:b}}function Fv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Hi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,M=v*4;let _=g.clippingState||null;l.value=_,_=h(p,u,M,f);for(let w=0;w!==M;++w)_[w]=t[w];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Ii=4,uu=[.125,.215,.35,.446,.526,.582],Xi=20,Ov=256,nr=new jo,du=new De;let Fa=null,Oa=0,Ba=0,za=!1;const Bv=new N;class fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Bv}=s;Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Oa,Ba),this._renderer.xr.enabled=za,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:mi,format:gn,colorSpace:cn,depthBuffer:!1},i=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zv(s)),this._blurMaterial=Vv(s,e,t),this._ggxMaterial=kv(s,e,t)}return i}_compileMaterial(e){const t=new et(new Ot,e);this._renderer.compile(t,nr)}_sceneToCubeUV(e,t,n,i,s){const l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(du),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new tn,new xn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(du),g=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const w=this._cubeSize;Ms(i,_*w,M>2?w:0,w,w),d.setRenderTarget(i),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ji||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ii?n-p+Ii:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ms(s,m,g,3*x,2*x),i.setRenderTarget(s),i.render(a,nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Ms(e,m,g,3*x,2*x),i.setRenderTarget(e),i.render(a,nr)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),x=s/p,m=isFinite(s)?1+Math.floor(h*x):Xi;m>Xi&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const g=[];let v=0;for(let R=0;R<Xi;++R){const y=R/x,A=Math.exp(-y*y/2);g.push(A),R===0?v+=A:R<m&&(v+=2*A)}for(let R=0;R<g.length;R++)g[R]=g[R]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=p,u.mipInt.value=M-n;const _=this._sizeLods[i],w=3*_*(i>M-Ii?i-M+Ii:0),b=4*(this._cubeSize-_);Ms(t,w,b,3*_,2*_),l.setRenderTarget(t),l.render(d,nr)}}function zv(r){const e=[],t=[],n=[];let i=r;const s=r-Ii+1+uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ii?l=uu[o-r+Ii-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,x=3,m=2,g=1,v=new Float32Array(x*p*f),M=new Float32Array(m*p*f),_=new Float32Array(g*p*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,y=b>2?0:-1,A=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];v.set(A,x*p*b),M.set(u,m*p*b);const C=[b,b,b,b,b,b];_.set(C,g*p*b)}const w=new Ot;w.setAttribute("position",new Wt(v,x)),w.setAttribute("uv",new Wt(M,m)),w.setAttribute("faceIndex",new Wt(_,g)),n.push(new et(w,null)),i>Ii&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pu(r,e,t){const n=new qn(r,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function kv(r,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ov,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Vv(r,e,t){const n=new Float32Array(Xi),i=new N(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function mu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function gu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lf extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new tn(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:hi});s.uniforms.tEquirect.value=t;const o=new et(i,s),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Ut),new Og(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function Gv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===ia||f===sa)if(e.has(u)){const p=e.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new lf(p.height);return x.fromEquirectangularTexture(r,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,p=f===ia||f===sa,x=f===Ji||f===Ds;if(p||x){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new fu(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new fu(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ia?u.mapping=Ji:f===sa&&(u.mapping=Ds),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Hv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Rs("WebGLRenderer: "+n+" extension not supported."),i}}}function Wv(r,e,t,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const v=f.array;x=f.version;for(let M=0,_=v.length;M<_;M+=3){const w=v[M+0],b=v[M+1],R=v[M+2];u.push(w,b,b,R,R,w)}}else{const v=p.array;x=p.version;for(let M=0,_=v.length/3-1;M<_;M+=3){const w=M+0,b=M+1,R=M+2;u.push(w,b,b,R,R,w)}}const m=new(p.count>=65535?Vd:kd)(u,1);m.version=x;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Xv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yv(r,e,t){const n=new WeakMap,i=new mt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let A=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const b=new Float32Array(_*w*4*d),R=new Od(b,_,w,d);R.type=mn,R.needsUpdate=!0;const y=M*4;for(let C=0;C<d;C++){const I=m[C],F=g[C],U=v[C],B=_*w*4*C;for(let L=0;L<I.count;L++){const D=L*y;f===!0&&(i.fromBufferAttribute(I,L),b[B+D+0]=i.x,b[B+D+1]=i.y,b[B+D+2]=i.z,b[B+D+3]=0),p===!0&&(i.fromBufferAttribute(F,L),b[B+D+4]=i.x,b[B+D+5]=i.y,b[B+D+6]=i.z,b[B+D+7]=0),x===!0&&(i.fromBufferAttribute(U,L),b[B+D+8]=i.x,b[B+D+9]=i.y,b[B+D+10]=i.z,b[B+D+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new he(_,w)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Kv(r,e,t,n,i){let s=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const Zv={[Md]:"LINEAR_TONE_MAPPING",[Sd]:"REINHARD_TONE_MAPPING",[bd]:"CINEON_TONE_MAPPING",[wd]:"ACES_FILMIC_TONE_MAPPING",[ac]:"AGX_TONE_MAPPING",[Td]:"NEUTRAL_TONE_MAPPING",[Ed]:"CUSTOM_TONE_MAPPING"};function $v(r,e,t,n,i,s){const o=new qn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new Fs(e,t):void 0}),a=new qn(e,t,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Ot;l.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new gt([0,2,0,0,2,0],2));const c=new fg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new et(l,c),d=new jo(-1,1,1,-1,0,1);let u=null,f=null,p=!1,x,m=null,g=[],v=!1;this.setSize=function(M,_){o.setSize(M,_),a.setSize(M,_);for(let w=0;w<g.length;w++){const b=g[w];b.setSize&&b.setSize(M,_)}},this.setEffects=function(M){g=M,v=g.length>0&&g[0].isRenderPass===!0;const _=o.width,w=o.height;for(let b=0;b<g.length;b++){const R=g[b];R.setSize&&R.setSize(_,w)}},this.begin=function(M,_){if(p||M.toneMapping===Xn&&g.length===0)return!1;if(m=_,_!==null){const w=_.width,b=_.height;(o.width!==w||o.height!==b)&&this.setSize(w,b)}return v===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Xn,!0},this.hasRenderPass=function(){return v},this.end=function(M,_){M.toneMapping=x,p=!0;let w=o,b=a;for(let R=0;R<g.length;R++){const y=g[R];if(y.enabled!==!1&&(y.render(M,b,w,_),y.needsSwap!==!1)){const A=w;w=b,b=A}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,c.defines={},st.getTransfer(u)===ht&&(c.defines.SRGB_TRANSFER="");const R=Zv[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(m),M.render(h,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const cf=new kt,Jl=new Fs(1,1),hf=new Od,uf=new rm,df=new Xd,xu=[],vu=[],_u=new Float32Array(16),yu=new Float32Array(9),Mu=new Float32Array(4);function Ys(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=xu[i];if(s===void 0&&(s=new Float32Array(i),xu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ea(r,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function e_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function t_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Mu.set(n),r.uniformMatrix2fv(this.addr,!1,Mu),Gt(t,n)}}function n_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;yu.set(n),r.uniformMatrix3fv(this.addr,!1,yu),Gt(t,n)}}function i_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;_u.set(n),r.uniformMatrix4fv(this.addr,!1,_u),Gt(t,n)}}function s_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function r_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function o_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function a_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function l_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function c_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function h_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function d_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jl.compareFunction=t.isReversedDepthBuffer()?gc:mc,s=Jl):s=cf,t.setTexture2D(e||s,i)}function f_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uf,i)}function p_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||df,i)}function m_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hf,i)}function g_(r){switch(r){case 5126:return Jv;case 35664:return jv;case 35665:return Qv;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function x_(r,e){r.uniform1fv(this.addr,e)}function v_(r,e){const t=Ys(e,this.size,2);r.uniform2fv(this.addr,t)}function __(r,e){const t=Ys(e,this.size,3);r.uniform3fv(this.addr,t)}function y_(r,e){const t=Ys(e,this.size,4);r.uniform4fv(this.addr,t)}function M_(r,e){const t=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function S_(r,e){const t=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function b_(r,e){const t=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function w_(r,e){r.uniform1iv(this.addr,e)}function E_(r,e){r.uniform2iv(this.addr,e)}function T_(r,e){r.uniform3iv(this.addr,e)}function A_(r,e){r.uniform4iv(this.addr,e)}function R_(r,e){r.uniform1uiv(this.addr,e)}function C_(r,e){r.uniform2uiv(this.addr,e)}function P_(r,e){r.uniform3uiv(this.addr,e)}function I_(r,e){r.uniform4uiv(this.addr,e)}function L_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Jl:o=cf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function N_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||uf,s[o])}function D_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||df,s[o])}function U_(r,e,t){const n=this.cache,i=e.length,s=ea(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||hf,s[o])}function F_(r){switch(r){case 5126:return x_;case 35664:return v_;case 35665:return __;case 35666:return y_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return w_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return U_}}class O_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=g_(t.type)}}class B_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F_(t.type)}}class z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Su(r,e){r.seq.push(e),r.map[e.id]=e}function k_(r,e,t){const n=r.name,i=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),o=ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Su(t,c===void 0?new O_(a,r,e):new B_(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new z_(a),Su(t,d)),t=d}}}class Fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);k_(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const V_=37297;let G_=0;function H_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wu=new Ye;function W_(r){st._getMatrix(wu,st.workingColorSpace,r);const e=`mat3( ${wu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case ko:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Eu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+H_(r.getShaderSource(e),a)}else return s}function X_(r,e){const t=W_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q_={[Md]:"Linear",[Sd]:"Reinhard",[bd]:"Cineon",[wd]:"ACESFilmic",[ac]:"AgX",[Td]:"Neutral",[Ed]:"Custom"};function Y_(r,e){const t=q_[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new N;function K_(){st.getLuminanceCoefficients(bo);const r=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function $_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function fr(r){return r!==""}function Tu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(r){return r.replace(j_,ey)}const Q_=new Map;function ey(r,e){let t=Je[e];if(t===void 0){const n=Q_.get(e);if(n!==void 0)t=Je[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jl(t)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(r){return r.replace(ty,ny)}function ny(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iy={[Po]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function sy(r){return iy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ry={[Ji]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE_UV"};function oy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ry[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ay={[Ds]:"ENVMAP_MODE_REFRACTION"};function ly(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ay[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cy={[yd]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[Mp]:"ENVMAP_BLENDING_ADD"};function hy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cy[r.combine]||"ENVMAP_BLENDING_NONE"}function uy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sy(t),c=oy(t),h=ly(t),d=hy(t),u=uy(t),f=Z_(t),p=$_(s),x=i.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(fr).join(`
`),g.length>0&&(g+=`
`)):(m=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),g=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),K_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=jl(o),o=Tu(o,t),o=Au(o,t),a=jl(a),a=Tu(a,t),a=Au(a,t),o=Ru(o),a=Ru(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+m+o,_=v+g+a,w=bu(i,i.VERTEX_SHADER,M),b=bu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,w),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(w)||"",B=i.getShaderInfoLog(b)||"",L=F.trim(),D=U.trim(),G=B.trim();let q=!0,K=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,w,b);else{const oe=Eu(i,w,"vertex"),se=Eu(i,b,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+oe+`
`+se)}else L!==""?Ce("WebGLProgram: Program Info Log:",L):(D===""||G==="")&&(K=!1);K&&(I.diagnostics={runnable:q,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:G,prefix:g}})}i.deleteShader(w),i.deleteShader(b),y=new Fo(i,x),A=J_(i,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,V_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let fy=0;class py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new my(e),t.set(e,n)),n}}class my{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}}function gy(r){return r===Qi||r===Bo||r===zo}function xy(r,e,t,n,i,s){const o=new Bd,a=new py,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,C,I,F,U){const B=I.fog,L=F.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||D,G),K=q&&q.mapping===Zo?q.image.height:null,oe=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Ce("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const se=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=se!==void 0?se.length:0;let We=0;L.morphAttributes.position!==void 0&&(We=1),L.morphAttributes.normal!==void 0&&(We=2),L.morphAttributes.color!==void 0&&(We=3);let ot,tt,J,ce;if(oe){const Ae=Gn[oe];ot=Ae.vertexShader,tt=Ae.fragmentShader}else{ot=y.vertexShader,tt=y.fragmentShader;const Ae=a.getVertexShaderStage(y),Et=a.getFragmentShaderStage(y);a.update(y,Ae,Et),J=Ae.id,ce=Et.id}const ae=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,at=!!y.map,Xe=!!y.matcap,te=!!q,re=!!y.aoMap,ie=!!y.lightMap,_e=!!y.bumpMap&&y.wireframe===!1,xe=!!y.normalMap,ze=!!y.displacementMap,Ie=!!y.emissiveMap,He=!!y.metalnessMap,qe=!!y.roughnessMap,O=y.anisotropy>0,ft=y.clearcoat>0,it=y.dispersion>0,P=y.iridescence>0,S=y.sheen>0,V=y.transmission>0,X=O&&!!y.anisotropyMap,Z=ft&&!!y.clearcoatMap,le=ft&&!!y.clearcoatNormalMap,ue=ft&&!!y.clearcoatRoughnessMap,$=P&&!!y.iridescenceMap,Q=P&&!!y.iridescenceThicknessMap,fe=S&&!!y.sheenColorMap,Le=S&&!!y.sheenRoughnessMap,ve=!!y.specularMap,pe=!!y.specularColorMap,Oe=!!y.specularIntensityMap,ke=V&&!!y.transmissionMap,Ke=V&&!!y.thicknessMap,z=!!y.gradientMap,de=!!y.alphaMap,j=y.alphaTest>0,me=!!y.alphaHash,Se=!!y.extensions;let ne=Xn;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=r.toneMapping);const Pe={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:tt,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:Xe,envMap:te,envMapMode:te&&q.mapping,envMapCubeUVHeight:K,aoMap:re,lightMap:ie,bumpMap:_e,normalMap:xe,displacementMap:ze,emissiveMap:Ie,normalMapObjectSpace:xe&&y.normalMapType===Tp,normalMapTangentSpace:xe&&y.normalMapType===Hl,packedNormalMap:xe&&y.normalMapType===Hl&&gy(y.normalMap.format),metalnessMap:He,roughnessMap:qe,anisotropy:O,anisotropyMap:X,clearcoat:ft,clearcoatMap:Z,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,dispersion:it,iridescence:P,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:S,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:ve,specularColorMap:pe,specularIntensityMap:Oe,transmission:V,transmissionMap:ke,thicknessMap:Ke,gradientMap:z,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:me,combine:y.combine,mapUv:at&&p(y.map.channel),aoMapUv:re&&p(y.aoMap.channel),lightMapUv:ie&&p(y.lightMap.channel),bumpMapUv:_e&&p(y.bumpMap.channel),normalMapUv:xe&&p(y.normalMap.channel),displacementMapUv:ze&&p(y.displacementMap.channel),emissiveMapUv:Ie&&p(y.emissiveMap.channel),metalnessMapUv:He&&p(y.metalnessMap.channel),roughnessMapUv:qe&&p(y.roughnessMap.channel),anisotropyMapUv:X&&p(y.anisotropyMap.channel),clearcoatMapUv:Z&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&p(y.sheenRoughnessMap.channel),specularMapUv:ve&&p(y.specularMap.channel),specularColorMapUv:pe&&p(y.specularColorMap.channel),specularIntensityMapUv:Oe&&p(y.specularIntensityMap.channel),transmissionMapUv:ke&&p(y.transmissionMap.channel),thicknessMapUv:Ke&&p(y.thicknessMap.channel),alphaMapUv:de&&p(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xe||O),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(at||de),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&xe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:We,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:Ie&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function m(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)A.push(C),A.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(g(A,y),v(A,y),A.push(r.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){const A=f[y.type];let C;if(A){const I=Gn[A];C=Ic.clone(I.uniforms)}else C=y.uniforms;return C}function _(y,A){let C=h.get(A);return C!==void 0?++C.usedTimes:(C=new dy(r,A,y,i),c.push(C),h.set(A,C)),C}function w(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function vy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function _y(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Pu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Iu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},r[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),e++,v}function l(u,f,p,x,m,g){const v=a(u,f,p,x,m,g);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(u,f,p,x,m,g){const v=a(u,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(u,f,p){t.length>1&&t.sort(u||_y),n.length>1&&n.sort(f||Pu),i.length>1&&i.sort(f||Pu),p&&(t.reverse(),n.reverse(),i.reverse())}function d(){for(let u=e,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function yy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Iu,r.set(n,[o])):i>=s.length?(o=new Iu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function My(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new De};break;case"SpotLight":t={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function Sy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let by=0;function wy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ey(r){const e=new My,t=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new $e,o=new $e;function a(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,M=0,_=0,w=0,b=0,R=0;c.sort(wy);for(let A=0,C=c.length;A<C;A++){const I=c[A],F=I.color,U=I.intensity,B=I.distance;let L=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Qi?L=I.shadow.map.texture:L=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*U,d+=F.g*U,u+=F.b*U;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],U);R++}else if(I.isDirectionalLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,q=t.get(I);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=D,f++}else if(I.isSpotLight){const D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(F).multiplyScalar(U),D.distance=B,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[x]=D;const G=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,G.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[x]=G.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=L,_++}x++}else if(I.isRectAreaLight){const D=e.get(I);D.color.copy(F).multiplyScalar(U),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=D,m++}else if(I.isPointLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){const G=I.shadow,q=t.get(I);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=I.shadow.matrix,M++}n.point[p]=D,p++}else if(I.isHemisphereLight){const D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(U),D.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[g]=D,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==v||y.numPointShadows!==M||y.numSpotShadows!==_||y.numSpotMaps!==w||y.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,y.directionalLength=f,y.pointLength=p,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=v,y.numPointShadows=M,y.numSpotShadows=_,y.numSpotMaps=w,y.numLightProbes=R,n.version=by++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0;const m=h.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const M=c[g];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Lu(r){const e=new Ey(r),t=[],n=[],i=[];function s(u){d.camera=u,t.length=0,n.length=0,i.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ty(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Lu(r),e.set(i,[a])):s>=o.length?(a=new Lu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
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
}`,Cy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Py=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Nu=new $e,ir=new N,Va=new N;function Iy(r,e,t){let n=new bc;const i=new he,s=new he,o=new mt,a=new pg,l=new mg,c={},h=t.maxTextureSize,d={[pi]:jt,[jt]:pi,[an]:an},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Ay,fragmentShader:Ry}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ot;p.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new et(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let g=this.type;this.render=function(b,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===_d&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Po);const A=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(hi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=g!==this.type;U&&R.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(L=>L.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,L=b.length;B<L;B++){const D=b[B],G=D.shadow;if(G===void 0){Ce("WebGLShadowMap:",D,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const q=G.getFrameExtents();i.multiply(q),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,G.mapSize.y=s.y));const K=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=K,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===hr){if(D.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qn(i.x,i.y,{format:Qi,type:mi,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),G.map.texture.name=D.name+".shadowMap",G.map.depthTexture=new Fs(i.x,i.y,mn),G.map.depthTexture.name=D.name+".shadowMapDepth",G.map.depthTexture.format=gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt}else D.isPointLight?(G.map=new lf(i.x),G.map.depthTexture=new Pm(i.x,Kn)):(G.map=new qn(i.x,i.y),G.map.depthTexture=new Fs(i.x,i.y,Kn)),G.map.depthTexture.name=D.name+".shadowMap",G.map.depthTexture.format=gi,this.type===Po?(G.map.depthTexture.compareFunction=K?gc:mc,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt);G.camera.updateProjectionMatrix()}const oe=G.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<oe;se++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,se),r.clear();else{se===0&&(r.setRenderTarget(G.map),r.clear());const ee=G.getViewport(se);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),F.viewport(o)}if(D.isPointLight){const ee=G.camera,We=G.matrix,ot=D.distance||ee.far;ot!==ee.far&&(ee.far=ot,ee.updateProjectionMatrix()),ir.setFromMatrixPosition(D.matrixWorld),ee.position.copy(ir),Va.copy(ee.position),Va.add(Cy[se]),ee.up.copy(Py[se]),ee.lookAt(Va),ee.updateMatrixWorld(),We.makeTranslation(-ir.x,-ir.y,-ir.z),Nu.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Nu,ee.coordinateSystem,ee.reversedDepth)}else G.updateMatrices(D);n=G.getFrustum(),_(R,y,G.camera,D,this.type)}G.isPointLightShadow!==!0&&this.type===hr&&v(G,y),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,C,I)};function v(b,R){const y=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qn(i.x,i.y,{format:Qi,type:mi})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(R,null,y,f,x,null)}function M(b,R,y,A){let C=null;const I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)C=I;else if(C=y.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=C.uuid,U=R.uuid;let B=c[F];B===void 0&&(B={},c[F]=B);let L=B[U];L===void 0&&(L=C.clone(),B[U]=L,R.addEventListener("dispose",w)),C=L}if(C.visible=R.visible,C.wireframe=R.wireframe,A===hr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=r.properties.get(C);F.light=y}return C}function _(b,R,y,A,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===hr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const U=e.update(b),B=b.material;if(Array.isArray(B)){const L=U.groups;for(let D=0,G=L.length;D<G;D++){const q=L[D],K=B[q.materialIndex];if(K&&K.visible){const oe=M(b,K,A,C);b.onBeforeShadow(r,b,R,y,U,oe,q),r.renderBufferDirect(y,null,U,oe,b,q),b.onAfterShadow(r,b,R,y,U,oe,q)}}}else if(B.visible){const L=M(b,B,A,C);b.onBeforeShadow(r,b,R,y,U,L,null),r.renderBufferDirect(y,null,U,L,b,null),b.onAfterShadow(r,b,R,y,U,L,null)}}const F=b.children;for(let U=0,B=F.length;U<B;U++)_(F[U],R,y,A,C)}function w(b){b.target.removeEventListener("dispose",w);for(const y in c){const A=c[y],C=b.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function Ly(r,e){function t(){let z=!1;const de=new mt;let j=null;const me=new mt(0,0,0,0);return{setMask:function(Se){j!==Se&&!z&&(r.colorMask(Se,Se,Se,Se),j=Se)},setLocked:function(Se){z=Se},setClear:function(Se,ne,Pe,Ae,Et){Et===!0&&(Se*=Ae,ne*=Ae,Pe*=Ae),de.set(Se,ne,Pe,Ae),me.equals(de)===!1&&(r.clearColor(Se,ne,Pe,Ae),me.copy(de))},reset:function(){z=!1,j=null,me.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,j=null,me=null,Se=null;return{setReversed:function(ne){if(de!==ne){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const Ae=Se;Se=null,this.setClear(Ae)}},getReversed:function(){return de},setTest:function(ne){ne?ae(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(ne){j!==ne&&!z&&(r.depthMask(ne),j=ne)},setFunc:function(ne){if(de&&(ne=Op[ne]),me!==ne){switch(ne){case rl:r.depthFunc(r.NEVER);break;case ol:r.depthFunc(r.ALWAYS);break;case al:r.depthFunc(r.LESS);break;case Ns:r.depthFunc(r.LEQUAL);break;case ll:r.depthFunc(r.EQUAL);break;case cl:r.depthFunc(r.GEQUAL);break;case hl:r.depthFunc(r.GREATER);break;case ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=ne}},setLocked:function(ne){z=ne},setClear:function(ne){Se!==ne&&(Se=ne,de&&(ne=1-ne),r.clearDepth(ne))},reset:function(){z=!1,j=null,me=null,Se=null,de=!1}}}function i(){let z=!1,de=null,j=null,me=null,Se=null,ne=null,Pe=null,Ae=null,Et=null;return{setTest:function(yt){z||(yt?ae(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(yt){de!==yt&&!z&&(r.stencilMask(yt),de=yt)},setFunc:function(yt,Nn,Dn){(j!==yt||me!==Nn||Se!==Dn)&&(r.stencilFunc(yt,Nn,Dn),j=yt,me=Nn,Se=Dn)},setOp:function(yt,Nn,Dn){(ne!==yt||Pe!==Nn||Ae!==Dn)&&(r.stencilOp(yt,Nn,Dn),ne=yt,Pe=Nn,Ae=Dn)},setLocked:function(yt){z=yt},setClear:function(yt){Et!==yt&&(r.clearStencil(yt),Et=yt)},reset:function(){z=!1,de=null,j=null,me=null,Se=null,ne=null,Pe=null,Ae=null,Et=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,_=null,w=null,b=null,R=null,y=new De(0,0,0),A=0,C=!1,I=null,F=null,U=null,B=null,L=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=q>=2);let oe=null,se={};const ee=r.getParameter(r.SCISSOR_BOX),We=r.getParameter(r.VIEWPORT),ot=new mt().fromArray(ee),tt=new mt().fromArray(We);function J(z,de,j,me){const Se=new Uint8Array(4),ne=r.createTexture();r.bindTexture(z,ne),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<j;Pe++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(de+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return ne}const ce={};ce[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(Ns),_e(!1),xe(hh),ae(r.CULL_FACE),re(hi);function ae(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function Ue(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function Ge(z,de){return u[z]!==de?(r.bindFramebuffer(z,de),u[z]=de,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=de),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=de),!0):!1}function Be(z,de){let j=p,me=!1;if(z){j=f.get(de),j===void 0&&(j=[],f.set(de,j));const Se=z.textures;if(j.length!==Se.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Pe=Se.length;ne<Pe;ne++)j[ne]=r.COLOR_ATTACHMENT0+ne;j.length=Se.length,me=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,me=!0);me&&r.drawBuffers(j)}function at(z){return x!==z?(r.useProgram(z),x=z,!0):!1}const Xe={[Wi]:r.FUNC_ADD,[ip]:r.FUNC_SUBTRACT,[sp]:r.FUNC_REVERSE_SUBTRACT};Xe[rp]=r.MIN,Xe[op]=r.MAX;const te={[ap]:r.ZERO,[lp]:r.ONE,[cp]:r.SRC_COLOR,[il]:r.SRC_ALPHA,[mp]:r.SRC_ALPHA_SATURATE,[fp]:r.DST_COLOR,[up]:r.DST_ALPHA,[hp]:r.ONE_MINUS_SRC_COLOR,[sl]:r.ONE_MINUS_SRC_ALPHA,[pp]:r.ONE_MINUS_DST_COLOR,[dp]:r.ONE_MINUS_DST_ALPHA,[gp]:r.CONSTANT_COLOR,[xp]:r.ONE_MINUS_CONSTANT_COLOR,[vp]:r.CONSTANT_ALPHA,[_p]:r.ONE_MINUS_CONSTANT_ALPHA};function re(z,de,j,me,Se,ne,Pe,Ae,Et,yt){if(z===hi){m===!0&&(Ue(r.BLEND),m=!1);return}if(m===!1&&(ae(r.BLEND),m=!0),z!==np){if(z!==g||yt!==C){if((v!==Wi||w!==Wi)&&(r.blendEquation(r.FUNC_ADD),v=Wi,w=Wi),yt)switch(z){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.ONE,r.ONE);break;case dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",z);break}else switch(z){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",z);break}M=null,_=null,b=null,R=null,y.set(0,0,0),A=0,g=z,C=yt}return}Se=Se||de,ne=ne||j,Pe=Pe||me,(de!==v||Se!==w)&&(r.blendEquationSeparate(Xe[de],Xe[Se]),v=de,w=Se),(j!==M||me!==_||ne!==b||Pe!==R)&&(r.blendFuncSeparate(te[j],te[me],te[ne],te[Pe]),M=j,_=me,b=ne,R=Pe),(Ae.equals(y)===!1||Et!==A)&&(r.blendColor(Ae.r,Ae.g,Ae.b,Et),y.copy(Ae),A=Et),g=z,C=!1}function ie(z,de){z.side===an?Ue(r.CULL_FACE):ae(r.CULL_FACE);let j=z.side===jt;de&&(j=!j),_e(j),z.blending===As&&z.transparent===!1?re(hi):re(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const me=z.stencilWrite;a.setTest(me),me&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ie(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(z){I!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),I=z)}function xe(z){z!==ep?(ae(r.CULL_FACE),z!==F&&(z===hh?r.cullFace(r.BACK):z===tp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),F=z}function ze(z){z!==U&&(G&&r.lineWidth(z),U=z)}function Ie(z,de,j){z?(ae(r.POLYGON_OFFSET_FILL),(B!==de||L!==j)&&(B=de,L=j,o.getReversed()&&(de=-de),r.polygonOffset(de,j))):Ue(r.POLYGON_OFFSET_FILL)}function He(z){z?ae(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function qe(z){z===void 0&&(z=r.TEXTURE0+D-1),oe!==z&&(r.activeTexture(z),oe=z)}function O(z,de,j){j===void 0&&(oe===null?j=r.TEXTURE0+D-1:j=oe);let me=se[j];me===void 0&&(me={type:void 0,texture:void 0},se[j]=me),(me.type!==z||me.texture!==de)&&(oe!==j&&(r.activeTexture(j),oe=j),r.bindTexture(z,de||ce[z]),me.type=z,me.texture=de)}function ft(){const z=se[oe];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function it(){try{r.compressedTexImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function S(){try{r.texSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function V(){try{r.texSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function le(){try{r.texStorage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ue(){try{r.texStorage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function $(){try{r.texImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Q(){try{r.texImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function fe(z){return d[z]!==void 0?d[z]:r.getParameter(z)}function Le(z,de){d[z]!==de&&(r.pixelStorei(z,de),d[z]=de)}function ve(z){ot.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),ot.copy(z))}function pe(z){tt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),tt.copy(z))}function Oe(z,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let me=j.get(z);me===void 0&&(me=r.getUniformBlockIndex(de,z.name),j.set(z,me))}function ke(z,de){const me=c.get(de).get(z);l.get(de)!==me&&(r.uniformBlockBinding(de,me,z.__bindingPointIndex),l.set(de,me))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},oe=null,se={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,_=null,w=null,b=null,R=null,y=new De(0,0,0),A=0,C=!1,I=null,F=null,U=null,B=null,L=null,ot.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ue,bindFramebuffer:Ge,drawBuffers:Be,useProgram:at,setBlending:re,setMaterial:ie,setFlipSided:_e,setCullFace:xe,setLineWidth:ze,setPolygonOffset:Ie,setScissorTest:He,activeTexture:qe,bindTexture:O,unbindTexture:ft,compressedTexImage2D:it,compressedTexImage3D:P,texImage2D:$,texImage3D:Q,pixelStorei:Le,getParameter:fe,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:le,texStorage3D:ue,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:Z,scissor:ve,viewport:pe,reset:Ke}}function Ny(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return p?new OffscreenCanvas(P,S):Er("canvas")}function m(P,S,V){let X=1;const Z=it(P);if((Z.width>V||Z.height>V)&&(X=V/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(X*Z.width),ue=Math.floor(X*Z.height);u===void 0&&(u=x(le,ue));const $=S?x(le,ue):u;return $.width=le,$.height=ue,$.getContext("2d").drawImage(P,0,0,le,ue),Ce("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+le+"x"+ue+")."),$}else return"data"in P&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,S,V,X,Z,le=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===r.RED&&(V===r.FLOAT&&($=r.R32F),V===r.HALF_FLOAT&&($=r.R16F),V===r.UNSIGNED_BYTE&&($=r.R8),V===r.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),V===r.SHORT&&ue&&($=ue.R16_SNORM_EXT)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.R8UI),V===r.UNSIGNED_SHORT&&($=r.R16UI),V===r.UNSIGNED_INT&&($=r.R32UI),V===r.BYTE&&($=r.R8I),V===r.SHORT&&($=r.R16I),V===r.INT&&($=r.R32I)),S===r.RG&&(V===r.FLOAT&&($=r.RG32F),V===r.HALF_FLOAT&&($=r.RG16F),V===r.UNSIGNED_BYTE&&($=r.RG8),V===r.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),V===r.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RG8UI),V===r.UNSIGNED_SHORT&&($=r.RG16UI),V===r.UNSIGNED_INT&&($=r.RG32UI),V===r.BYTE&&($=r.RG8I),V===r.SHORT&&($=r.RG16I),V===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGB8UI),V===r.UNSIGNED_SHORT&&($=r.RGB16UI),V===r.UNSIGNED_INT&&($=r.RGB32UI),V===r.BYTE&&($=r.RGB8I),V===r.SHORT&&($=r.RGB16I),V===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGBA8UI),V===r.UNSIGNED_SHORT&&($=r.RGBA16UI),V===r.UNSIGNED_INT&&($=r.RGBA32UI),V===r.BYTE&&($=r.RGBA8I),V===r.SHORT&&($=r.RGBA16I),V===r.INT&&($=r.RGBA32I)),S===r.RGB&&(V===r.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),V===r.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),S===r.RGBA){const Q=le?ko:st.getTransfer(Z);V===r.FLOAT&&($=r.RGBA32F),V===r.HALF_FLOAT&&($=r.RGBA16F),V===r.UNSIGNED_BYTE&&($=Q===ht?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),V===r.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(P,S){let V;return P?S===null||S===Kn||S===Mr?V=r.DEPTH24_STENCIL8:S===mn?V=r.DEPTH32F_STENCIL8:S===yr&&(V=r.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kn||S===Mr?V=r.DEPTH_COMPONENT24:S===mn?V=r.DEPTH_COMPONENT32F:S===yr&&(V=r.DEPTH_COMPONENT16),V}function b(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){const S=P.target;S.removeEventListener("dispose",R),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function y(P){const S=P.target;S.removeEventListener("dispose",y),I(S)}function A(P){const S=n.get(P);if(S.__webglInit===void 0)return;const V=P.source,X=f.get(V);if(X){const Z=X[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(P),Object.keys(X).length===0&&f.delete(V)}n.remove(P)}function C(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const V=P.source,X=f.get(V);delete X[S.__cacheKey],o.memory.textures--}function I(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Z=0;Z<S.__webglFramebuffer[X].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[X][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)r.deleteFramebuffer(S.__webglFramebuffer[X]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=P.textures;for(let X=0,Z=V.length;X<Z;X++){const le=n.get(V[X]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(V[X])}n.remove(P)}let F=0;function U(){F=0}function B(){return F}function L(P){F=P}function D(){const P=F;return P>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),F+=1,P}function G(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function q(P,S){const V=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const X=P.image;if(X===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(V,P,S);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function K(P,S){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Ue(V,P,S);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function oe(P,S){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Ue(V,P,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function se(P,S){const V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){Ge(V,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const ee={[ji]:r.REPEAT,[Cn]:r.CLAMP_TO_EDGE,[Oo]:r.MIRRORED_REPEAT},We={[zt]:r.NEAREST,[Rd]:r.NEAREST_MIPMAP_NEAREST,[ur]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Io]:r.LINEAR_MIPMAP_NEAREST,[Hn]:r.LINEAR_MIPMAP_LINEAR},ot={[Ap]:r.NEVER,[Lp]:r.ALWAYS,[Rp]:r.LESS,[mc]:r.LEQUAL,[Cp]:r.EQUAL,[gc]:r.GEQUAL,[Pp]:r.GREATER,[Ip]:r.NOTEQUAL};function tt(P,S){if(S.type===mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ut||S.magFilter===Io||S.magFilter===ur||S.magFilter===Hn||S.minFilter===Ut||S.minFilter===Io||S.minFilter===ur||S.minFilter===Hn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ee[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ee[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ee[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,We[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,We[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==ur&&S.minFilter!==Hn||S.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function J(P,S){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",R));const X=S.source;let Z=f.get(X);Z===void 0&&(Z={},f.set(X,Z));const le=G(S);if(le!==P.__cacheKey){Z[le]===void 0&&(Z[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[le].usedTimes++;const ue=Z[P.__cacheKey];ue!==void 0&&(Z[P.__cacheKey].usedTimes--,ue.usedTimes===0&&C(S)),P.__cacheKey=le,P.__webglTexture=Z[le].texture}return V}function ce(P,S,V){return Math.floor(Math.floor(P/V)/S)}function ae(P,S,V,X){const le=P.updateRanges;if(le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,X,S.data);else{le.sort((Le,ve)=>Le.start-ve.start);let ue=0;for(let Le=1;Le<le.length;Le++){const ve=le[ue],pe=le[Le],Oe=ve.start+ve.count,ke=ce(pe.start,S.width,4),Ke=ce(ve.start,S.width,4);pe.start<=Oe+1&&ke===Ke&&ce(pe.start+pe.count-1,S.width,4)===ke?ve.count=Math.max(ve.count,pe.start+pe.count-ve.start):(++ue,le[ue]=pe)}le.length=ue+1;const $=t.getParameter(r.UNPACK_ROW_LENGTH),Q=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Le=0,ve=le.length;Le<ve;Le++){const pe=le[Le],Oe=Math.floor(pe.start/4),ke=Math.ceil(pe.count/4),Ke=Oe%S.width,z=Math.floor(Oe/S.width),de=ke,j=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,Ke,z,de,j,V,X,S.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function Ue(P,S,V){let X=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=r.TEXTURE_3D);const Z=J(P,S),le=S.source;t.bindTexture(X,P.__webglTexture,r.TEXTURE0+V);const ue=n.get(le);if(le.version!==ue.__version||Z===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const j=st.getPrimaries(st.workingColorSpace),me=S.colorSpace===li?null:st.getPrimaries(S.colorSpace),Se=S.colorSpace===li||j===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=m(S.image,!1,i.maxTextureSize);Q=ft(S,Q);const fe=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let ve=_(S.internalFormat,fe,Le,S.normalized,S.colorSpace,S.isVideoTexture);tt(X,S);let pe;const Oe=S.mipmaps,ke=S.isVideoTexture!==!0,Ke=ue.__version===void 0||Z===!0,z=le.dataReady,de=b(S,Q);if(S.isDepthTexture)ve=w(S.format===Yi,S.type),Ke&&(ke?t.texStorage2D(r.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,ve,Q.width,Q.height,0,fe,Le,null));else if(S.isDataTexture)if(Oe.length>0){ke&&Ke&&t.texStorage2D(r.TEXTURE_2D,de,ve,Oe[0].width,Oe[0].height);for(let j=0,me=Oe.length;j<me;j++)pe=Oe[j],ke?z&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,pe.width,pe.height,fe,Le,pe.data):t.texImage2D(r.TEXTURE_2D,j,ve,pe.width,pe.height,0,fe,Le,pe.data);S.generateMipmaps=!1}else ke?(Ke&&t.texStorage2D(r.TEXTURE_2D,de,ve,Q.width,Q.height),z&&ae(S,Q,fe,Le)):t.texImage2D(r.TEXTURE_2D,0,ve,Q.width,Q.height,0,fe,Le,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ve,Oe[0].width,Oe[0].height,Q.depth);for(let j=0,me=Oe.length;j<me;j++)if(pe=Oe[j],S.format!==gn)if(fe!==null)if(ke){if(z)if(S.layerUpdates.size>0){const Se=hu(pe.width,pe.height,S.format,S.type);for(const ne of S.layerUpdates){const Pe=pe.data.subarray(ne*Se/pe.data.BYTES_PER_ELEMENT,(ne+1)*Se/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ne,pe.width,pe.height,1,fe,Pe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,Q.depth,fe,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,ve,pe.width,pe.height,Q.depth,0,pe.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,Q.depth,fe,Le,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,ve,pe.width,pe.height,Q.depth,0,fe,Le,pe.data)}else{ke&&Ke&&t.texStorage2D(r.TEXTURE_2D,de,ve,Oe[0].width,Oe[0].height);for(let j=0,me=Oe.length;j<me;j++)pe=Oe[j],S.format!==gn?fe!==null?ke?z&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,ve,pe.width,pe.height,0,pe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?z&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,pe.width,pe.height,fe,Le,pe.data):t.texImage2D(r.TEXTURE_2D,j,ve,pe.width,pe.height,0,fe,Le,pe.data)}else if(S.isDataArrayTexture)if(ke){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ve,Q.width,Q.height,Q.depth),z)if(S.layerUpdates.size>0){const j=hu(Q.width,Q.height,S.format,S.type);for(const me of S.layerUpdates){const Se=Q.data.subarray(me*j/Q.data.BYTES_PER_ELEMENT,(me+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Q.width,Q.height,1,fe,Le,Se)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Le,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,fe,Le,Q.data);else if(S.isData3DTexture)ke?(Ke&&t.texStorage3D(r.TEXTURE_3D,de,ve,Q.width,Q.height,Q.depth),z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Le,Q.data)):t.texImage3D(r.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,fe,Le,Q.data);else if(S.isFramebufferTexture){if(Ke)if(ke)t.texStorage2D(r.TEXTURE_2D,de,ve,Q.width,Q.height);else{let j=Q.width,me=Q.height;for(let Se=0;Se<de;Se++)t.texImage2D(r.TEXTURE_2D,Se,ve,j,me,0,fe,Le,null),j>>=1,me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const j=r.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(S),j.onpaint=me=>{const Se=me.changedElements;for(const ne of d)Se.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Q);else{const Se=r.RGBA,ne=r.RGBA,Pe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Se,ne,Pe,Q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ke&&Ke){const j=it(Oe[0]);t.texStorage2D(r.TEXTURE_2D,de,ve,j.width,j.height)}for(let j=0,me=Oe.length;j<me;j++)pe=Oe[j],ke?z&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,fe,Le,pe):t.texImage2D(r.TEXTURE_2D,j,ve,fe,Le,pe);S.generateMipmaps=!1}else if(ke){if(Ke){const j=it(Q);t.texStorage2D(r.TEXTURE_2D,de,ve,j.width,j.height)}z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Le,Q)}else t.texImage2D(r.TEXTURE_2D,0,ve,fe,Le,Q);g(S)&&v(X),ue.__version=le.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ge(P,S,V){if(S.image.length!==6)return;const X=J(P,S),Z=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const le=n.get(Z);if(Z.version!==le.__version||X===!0){t.activeTexture(r.TEXTURE0+V);const ue=st.getPrimaries(st.workingColorSpace),$=S.colorSpace===li?null:st.getPrimaries(S.colorSpace),Q=S.colorSpace===li||ue===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=S.isCompressedTexture||S.image[0].isCompressedTexture,Le=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!fe&&!Le?ve[ne]=m(S.image[ne],!0,i.maxCubemapSize):ve[ne]=Le?S.image[ne].image:S.image[ne],ve[ne]=ft(S,ve[ne]);const pe=ve[0],Oe=s.convert(S.format,S.colorSpace),ke=s.convert(S.type),Ke=_(S.internalFormat,Oe,ke,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,de=le.__version===void 0||X===!0,j=Z.dataReady;let me=b(S,pe);tt(r.TEXTURE_CUBE_MAP,S);let Se;if(fe){z&&de&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ke,pe.width,pe.height);for(let ne=0;ne<6;ne++){Se=ve[ne].mipmaps;for(let Pe=0;Pe<Se.length;Pe++){const Ae=Se[Pe];S.format!==gn?Oe!==null?z?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ae.width,Ae.height,Oe,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Ke,Ae.width,Ae.height,0,Ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ae.width,Ae.height,Oe,ke,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Ke,Ae.width,Ae.height,0,Oe,ke,Ae.data)}}}else{if(Se=S.mipmaps,z&&de){Se.length>0&&me++;const ne=it(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Le){z?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Oe,ke,ve[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,ve[ne].width,ve[ne].height,0,Oe,ke,ve[ne].data);for(let Pe=0;Pe<Se.length;Pe++){const Et=Se[Pe].image[ne].image;z?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Et.width,Et.height,Oe,ke,Et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Ke,Et.width,Et.height,0,Oe,ke,Et.data)}}else{z?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Oe,ke,ve[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,Oe,ke,ve[ne]);for(let Pe=0;Pe<Se.length;Pe++){const Ae=Se[Pe];z?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Oe,ke,Ae.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Ke,Oe,ke,Ae.image[ne])}}}g(S)&&v(r.TEXTURE_CUBE_MAP),le.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Be(P,S,V,X,Z,le){const ue=s.convert(V.format,V.colorSpace),$=s.convert(V.type),Q=_(V.internalFormat,ue,$,V.normalized,V.colorSpace),fe=n.get(S),Le=n.get(V);if(Le.__renderTarget=S,!fe.__hasExternalTextures){const ve=Math.max(1,S.width>>le),pe=Math.max(1,S.height>>le);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,le,Q,ve,pe,S.depth,0,ue,$,null):t.texImage2D(Z,le,Q,ve,pe,0,ue,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),qe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,Z,Le.__webglTexture,0,He(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,Z,Le.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(P,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const X=S.depthTexture,Z=X&&X.isDepthTexture?X.type:null,le=w(S.stencilBuffer,Z),ue=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He(S),le,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,He(S),le,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,le,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,P)}else{const X=S.textures;for(let Z=0;Z<X.length;Z++){const le=X[Z],ue=s.convert(le.format,le.colorSpace),$=s.convert(le.type),Q=_(le.internalFormat,ue,$,le.normalized,le.colorSpace);qe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He(S),Q,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,He(S),Q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Q,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(P,S,V){const X=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),tt(r.TEXTURE_CUBE_MAP,S.depthTexture);const fe=s.convert(S.depthTexture.format),Le=s.convert(S.depthTexture.type);let ve;S.depthTexture.format===gi?ve=r.DEPTH_COMPONENT24:S.depthTexture.format===Yi&&(ve=r.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,S.width,S.height,0,fe,Le,null)}}else q(S.depthTexture,0);const le=Z.__webglTexture,ue=He(S),$=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,Q=S.depthTexture.format===Yi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===gi)qe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,$,le,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,Q,$,le,0);else if(S.depthTexture.format===Yi)qe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,$,le,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,Q,$,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(P){const S=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=X}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)Xe(S.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Xe(S.__webglFramebuffer[0],P,0):Xe(S.__webglFramebuffer,P,0)}else if(V){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=r.createRenderbuffer(),at(S.__webglDepthbuffer[X],P,!1);else{const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,le)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),at(S.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,le)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(P,S,V){const X=n.get(P);S!==void 0&&Be(X.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&te(P)}function ie(P){const S=P.texture,V=n.get(P),X=n.get(S);P.addEventListener("dispose",y);const Z=P.textures,le=P.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=S.version,o.memory.textures++),le){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let Q=0;Q<S.mipmaps.length;Q++)V.__webglFramebuffer[$][Q]=r.createFramebuffer()}else V.__webglFramebuffer[$]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)V.__webglFramebuffer[$]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ue)for(let $=0,Q=Z.length;$<Q;$++){const fe=n.get(Z[$]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&qe(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){const Q=Z[$];V.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const fe=s.convert(Q.format,Q.colorSpace),Le=s.convert(Q.type),ve=_(Q.internalFormat,fe,Le,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),pe=He(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,ve,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,V.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),at(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),tt(r.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Be(V.__webglFramebuffer[$][Q],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Be(V.__webglFramebuffer[$],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(S)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let $=0,Q=Z.length;$<Q;$++){const fe=Z[$],Le=n.get(fe);let ve=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,Le.__webglTexture),tt(ve,fe),Be(V.__webglFramebuffer,P,fe,r.COLOR_ATTACHMENT0+$,ve,0),g(fe)&&v(ve)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,X.__webglTexture),tt($,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Be(V.__webglFramebuffer[Q],P,S,r.COLOR_ATTACHMENT0,$,Q);else Be(V.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,$,0);g(S)&&v($),t.unbindTexture()}P.depthBuffer&&te(P)}function _e(P){const S=P.textures;for(let V=0,X=S.length;V<X;V++){const Z=S[V];if(g(Z)){const le=M(P),ue=n.get(Z).__webglTexture;t.bindTexture(le,ue),v(le),t.unbindTexture()}}}const xe=[],ze=[];function Ie(P){if(P.samples>0){if(qe(P)===!1){const S=P.textures,V=P.width,X=P.height;let Z=r.COLOR_BUFFER_BIT;const le=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(P),$=S.length>1;if($)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Q=P.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Le=n.get(S[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Le,0)}r.blitFramebuffer(0,0,V,X,0,0,V,X,Z,r.NEAREST),l===!0&&(xe.length=0,ze.length=0,xe.push(r.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(le),ze.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Le=n.get(S[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function He(P){return Math.min(i.maxSamples,P.samples)}function qe(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function ft(P,S){const V=P.colorSpace,X=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==cn&&V!==li&&(st.getTransfer(V)===ht?(X!==gn||Z!==ln)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",V)),S}function it(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.getTextureUnits=B,this.setTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=re,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dy(r,e){function t(n,i=li){let s;const o=st.getTransfer(i);if(n===ln)return r.UNSIGNED_BYTE;if(n===cc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cd)return r.BYTE;if(n===Pd)return r.SHORT;if(n===yr)return r.UNSIGNED_SHORT;if(n===lc)return r.INT;if(n===Kn)return r.UNSIGNED_INT;if(n===mn)return r.FLOAT;if(n===mi)return r.HALF_FLOAT;if(n===Nd)return r.ALPHA;if(n===Dd)return r.RGB;if(n===gn)return r.RGBA;if(n===gi)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===uc)return r.RED;if(n===dc)return r.RED_INTEGER;if(n===Qi)return r.RG;if(n===fc)return r.RG_INTEGER;if(n===pc)return r.RGBA_INTEGER;if(n===Lo||n===No||n===Do||n===Uo)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===fl||n===pl||n===ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===xl||n===vl||n===_l||n===yl||n===Bo||n===Ml)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gl||n===xl)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===_l)return s.COMPRESSED_R11_EAC;if(n===yl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bo)return s.COMPRESSED_RG11_EAC;if(n===Ml)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Nl||n===Dl||n===Ul)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fl||n===Ol||n===Bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fl)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===kl||n===zo||n===Vl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
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

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nn({vertexShader:Uy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class By extends ns{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new Oy,g={},v=t.getContextAttributes();let M=null,_=null;const w=[],b=[],R=new he;let y=null;const A=new Jt;A.viewport=new mt;const C=new Jt;C.viewport=new mt;const I=[A,C],F=new Bg;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=w[J];return ce===void 0&&(ce=new ua,w[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=w[J];return ce===void 0&&(ce=new ua,w[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=w[J];return ce===void 0&&(ce=new ua,w[J]=ce),ce.getHandSpace()};function L(J){const ce=b.indexOf(J.inputSource);if(ce===-1)return;const ae=w[ce];ae!==void 0&&(ae.update(J.inputSource,J.frame,c||o),ae.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",G);for(let J=0;J<w.length;J++){const ce=b[J];ce!==null&&(b[J]=null,w[J].disconnect(ce))}U=null,B=null,m.reset();for(const J in g)delete g[J];e.setRenderTarget(M),f=null,u=null,d=null,i=null,_=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",D),i.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ue=null,Ge=null;v.depth&&(Ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?Yi:gi,Ue=v.stencil?Mr:Kn);const Be={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Be),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new qn(u.textureWidth,u.textureHeight,{format:gn,type:ln,depthTexture:new Fs(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new qn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let ce=0;ce<J.removed.length;ce++){const ae=J.removed[ce],Ue=b.indexOf(ae);Ue>=0&&(b[Ue]=null,w[Ue].disconnect(ae))}for(let ce=0;ce<J.added.length;ce++){const ae=J.added[ce];let Ue=b.indexOf(ae);if(Ue===-1){for(let Be=0;Be<w.length;Be++)if(Be>=b.length){b.push(ae),Ue=Be;break}else if(b[Be]===null){b[Be]=ae,Ue=Be;break}if(Ue===-1)break}const Ge=w[Ue];Ge&&Ge.connect(ae)}}const q=new N,K=new N;function oe(J,ce,ae){q.setFromMatrixPosition(ce.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Ue=q.distanceTo(K),Ge=ce.projectionMatrix.elements,Be=ae.projectionMatrix.elements,at=Ge[14]/(Ge[10]-1),Xe=Ge[14]/(Ge[10]+1),te=(Ge[9]+1)/Ge[5],re=(Ge[9]-1)/Ge[5],ie=(Ge[8]-1)/Ge[0],_e=(Be[8]+1)/Be[0],xe=at*ie,ze=at*_e,Ie=Ue/(-ie+_e),He=Ie*-ie;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(He),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ge[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const qe=at+Ie,O=Xe+Ie,ft=xe-He,it=ze+(Ue-He),P=te*Xe/O*qe,S=re*Xe/O*qe;J.projectionMatrix.makePerspective(ft,it,P,S,qe,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ce=J.near,ae=J.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),F.near=C.near=A.near=ce,F.far=C.far=A.far=ae,(U!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,B=F.far),F.layers.mask=J.layers.mask|6,A.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;const Ue=J.parent,Ge=F.cameras;se(F,Ue);for(let Be=0;Be<Ge.length;Be++)se(Ge[Be],Ue);Ge.length===2?oe(F,A,C):F.projectionMatrix.copy(A.projectionMatrix),ee(J,F,Ue)};function ee(J,ce,ae){ae===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Us*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let We=null;function ot(J,ce){if(h=ce.getViewerPose(c||o),p=ce,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ue=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Xe=0;Xe<ae.length;Xe++){const te=ae[Xe];let re=null;if(f!==null)re=f.getViewport(te);else{const _e=d.getViewSubImage(u,te);re=_e.viewport,Xe===0&&(e.setRenderTargetTextures(_,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(_))}let ie=I[Xe];ie===void 0&&(ie=new Jt,ie.layers.enable(Xe),ie.viewport=new mt,I[Xe]=ie),ie.matrix.fromArray(te.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(te.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),Xe===0&&(F.matrix.copy(ie.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(ie)}const Ge=i.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Xe=d.getDepthInformation(ae[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Ge&&Ge.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<ae.length;Xe++){const te=ae[Xe].camera;if(te){let re=g[te];re||(re=new qd,g[te]=re);const ie=d.getCameraImage(te);re.sourceTexture=ie}}}}for(let ae=0;ae<w.length;ae++){const Ue=b[ae],Ge=w[ae];Ue!==null&&Ge!==void 0&&Ge.update(Ue,ce,c||o)}We&&We(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}const tt=new of;tt.setAnimationLoop(ot),this.setAnimationLoop=function(J){We=J},this.dispose=function(){}}}const zy=new $e,ff=new Ye;ff.set(-1,0,0,0,1,0,0,0,1);function ky(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,tf(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ff),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vy(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const b=w.program;n.uniformBlockBinding(_,b)}function c(_,w){let b=i[_.id];b===void 0&&(m(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",v));const R=w.program;n.updateUBOMapping(_,R);const y=e.render.frame;s[_.id]!==y&&(u(_),s[_.id]=y)}function h(_){const w=d();_.__bindingPointIndex=w;const b=r.createBuffer(),R=_.__size,y=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,R,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const w=i[_.id],b=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let y=0,A=b.length;y<A;y++){const C=b[y];if(Array.isArray(C))for(let I=0,F=C.length;I<F;I++)f(C[I],y,I,R);else f(C,y,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,w,b,R){if(x(_,w,b,R)===!0){const y=_.__offset,A=_.value;if(Array.isArray(A)){let C=0;for(let I=0;I<A.length;I++){const F=A[I],U=g(F);p(F,_.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,_.__data)}}function p(_,w,b){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,b)}function x(_,w,b,R){const y=_.value,A=w+"_"+b;if(R[A]===void 0)return typeof y=="number"||typeof y=="boolean"?R[A]=y:ArrayBuffer.isView(y)?R[A]=y.slice():R[A]=y.clone(),!0;{const C=R[A];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return R[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(_){const w=_.uniforms;let b=0;const R=16;for(let A=0,C=w.length;A<C;A++){const I=Array.isArray(w[A])?w[A]:[w[A]];for(let F=0,U=I.length;F<U;F++){const B=I[F],L=Array.isArray(B.value)?B.value:[B.value];for(let D=0,G=L.length;D<G;D++){const q=L[D],K=g(q),oe=b%R,se=oe%K.boundary,ee=oe+se;b+=se,ee!==0&&R-ee<K.storage&&(b+=R-ee),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=K.storage}}}const y=b%R;return y>0&&(b+=R-y),_.__size=b,_.__cache={},this}function g(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",_),w}function v(_){const w=_.target;w.removeEventListener("dispose",v);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function M(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:M}}const Gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function Hy(){return On===null&&(On=new Mc(Gy,16,16,Qi,mi),On.name="DFG_LUT",On.minFilter=Ut,On.magFilter=Ut,On.wrapS=Cn,On.wrapT=Cn,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Wy{constructor(e={}){const{canvas:t=Up(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([pc,fc,dc]),g=new Set([ln,Kn,yr,Mr,cc,hc]),v=new Uint32Array(4),M=new Int32Array(4),_=new N;let w=null,b=null;const R=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,F=null,U=null,B=null,L=null;this._outputColorSpace=Pt;let D=0,G=0,q=null,K=-1,oe=null;const se=new mt,ee=new mt;let We=null;const ot=new De(0);let tt=0,J=t.width,ce=t.height,ae=1,Ue=null,Ge=null;const Be=new mt(0,0,J,ce),at=new mt(0,0,J,ce);let Xe=!1;const te=new bc;let re=!1,ie=!1;const _e=new $e,xe=new N,ze=new mt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function qe(){return q===null?ae:1}let O=n;function ft(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),O===null){const k="webgl2";if(O=ft(k,T),O===null)throw ft(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ve("WebGLRenderer: "+T.message),T}let it,P,S,V,X,Z,le,ue,$,Q,fe,Le,ve,pe,Oe,ke,Ke,z,de,j,me,Se,ne;function Pe(){it=new Hv(O),it.init(),me=new Dy(O,it),P=new Uv(O,it,e,me),S=new Ly(O,it),P.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),U=O.createFramebuffer(),B=O.createFramebuffer(),L=O.createFramebuffer(),V=new qv(O),X=new vy,Z=new Ny(O,it,S,X,P,me,V),le=new Gv(C),ue=new $g(O),Se=new Nv(O,ue),$=new Wv(O,ue,V,Se),Q=new Kv(O,$,ue,Se,V),z=new Yv(O,P,Z),Oe=new Fv(X),fe=new xy(C,le,it,P,Se,Oe),Le=new ky(C,X),ve=new yy,pe=new Ty(it),Ke=new Lv(C,le,S,Q,p,l),ke=new Iy(C,Q,P),ne=new Vy(O,V,P,S),de=new Dv(O,it,V),j=new Xv(O,it,V),V.programs=fe.programs,C.capabilities=P,C.extensions=it,C.properties=X,C.renderLists=ve,C.shadowMap=ke,C.state=S,C.info=V}Pe(),x!==ln&&(A=new $v(x,t.width,t.height,a,i,s));const Ae=new By(C,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(T){T!==void 0&&(ae=T,this.setSize(J,ce,!1))},this.getSize=function(T){return T.set(J,ce)},this.setSize=function(T,k,Y=!0){if(Ae.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,ce=k,t.width=Math.floor(T*ae),t.height=Math.floor(k*ae),Y===!0&&(t.style.width=T+"px",t.style.height=k+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(J*ae,ce*ae).floor()},this.setDrawingBufferSize=function(T,k,Y){J=T,ce=k,ae=Y,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(x===ln){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(se)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,k,Y,H){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,k,Y,H),S.viewport(se.copy(Be).multiplyScalar(ae).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,k,Y,H){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,k,Y,H),S.scissor(ee.copy(at).multiplyScalar(ae).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){S.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){Ue=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Y=!0){let H=0;if(T){let W=!1;if(q!==null){const Me=q.texture.format;W=m.has(Me)}if(W){const Me=q.texture.type,Te=g.has(Me),ye=Ke.getClearColor(),Re=Ke.getClearAlpha(),Ne=ye.r,Ze=ye.g,je=ye.b;Te?(v[0]=Ne,v[1]=Ze,v[2]=je,v[3]=Re,O.clearBufferuiv(O.COLOR,0,v)):(M[0]=Ne,M[1]=Ze,M[2]=je,M[3]=Re,O.clearBufferiv(O.COLOR,0,M))}else H|=O.COLOR_BUFFER_BIT}k&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),Ke.dispose(),ve.dispose(),pe.dispose(),X.dispose(),le.dispose(),Q.dispose(),Se.dispose(),ne.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",nh),Ae.removeEventListener("sessionend",ih),Fi.stop()};function Et(T){T.preventDefault(),Vo("WebGLRenderer: Context Lost."),I=!0}function yt(){Vo("WebGLRenderer: Context Restored."),I=!1;const T=V.autoReset,k=ke.enabled,Y=ke.autoUpdate,H=ke.needsUpdate,W=ke.type;Pe(),V.autoReset=T,ke.enabled=k,ke.autoUpdate=Y,ke.needsUpdate=H,ke.type=W}function Nn(T){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dn(T){const k=T.target;k.removeEventListener("dispose",Dn),Yf(k)}function Yf(T){Kf(T),X.remove(T)}function Kf(T){const k=X.get(T).programs;k!==void 0&&(k.forEach(function(Y){fe.releaseProgram(Y)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,H,W,Me){k===null&&(k=Ie);const Te=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=Jf(T,k,Y,H,W);S.setMaterial(H,Te);let Re=Y.index,Ne=1;if(H.wireframe===!0){if(Re=$.getWireframeAttribute(Y),Re===void 0)return;Ne=2}const Ze=Y.drawRange,je=Y.attributes.position;let Fe=Ze.start*Ne,pt=(Ze.start+Ze.count)*Ne;Me!==null&&(Fe=Math.max(Fe,Me.start*Ne),pt=Math.min(pt,(Me.start+Me.count)*Ne)),Re!==null?(Fe=Math.max(Fe,0),pt=Math.min(pt,Re.count)):je!=null&&(Fe=Math.max(Fe,0),pt=Math.min(pt,je.count));const Rt=pt-Fe;if(Rt<0||Rt===1/0)return;Se.setup(W,H,ye,Y,Re);let Tt,xt=de;if(Re!==null&&(Tt=ue.get(Re),xt=j,xt.setIndex(Tt)),W.isMesh)H.wireframe===!0?(S.setLineWidth(H.wireframeLinewidth*qe()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(W.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),S.setLineWidth(qt*qe()),W.isLineSegments?xt.setMode(O.LINES):W.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else W.isPoints?xt.setMode(O.POINTS):W.isSprite&&xt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(it.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qt=W._multiDrawStarts,we=W._multiDrawCounts,sn=W._multiDrawCount,rt=Re?ue.get(Re).bytesPerElement:1,dn=X.get(H).currentProgram.getUniforms();for(let Un=0;Un<sn;Un++)dn.setValue(O,"_gl_DrawID",Un),xt.render(qt[Un]/rt,we[Un])}else if(W.isInstancedMesh)xt.renderInstances(Fe,Rt,W.count);else if(Y.isInstancedBufferGeometry){const qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,qt);xt.renderInstances(Fe,Rt,we)}else xt.render(Fe,Rt)};function th(T,k,Y){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=jt,T.needsUpdate=!0,qr(T,k,Y),T.side=pi,T.needsUpdate=!0,qr(T,k,Y),T.side=an):qr(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),b=pe.get(Y),b.init(k),y.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const H=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const ye=Me[Te];th(ye,Y,W),H.add(ye)}else th(Me,Y,W),H.add(Me)}),b=y.pop(),H},this.compileAsync=function(T,k,Y=null){const H=this.compile(T,k,Y);return new Promise(W=>{function Me(){if(H.forEach(function(Te){X.get(Te).currentProgram.isReady()&&H.delete(Te)}),H.size===0){W(T);return}setTimeout(Me,10)}it.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ta=null;function Zf(T){ta&&ta(T)}function nh(){Fi.stop()}function ih(){Fi.start()}const Fi=new of;Fi.setAnimationLoop(Zf),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(T){ta=T,Ae.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},Ae.addEventListener("sessionstart",nh),Ae.addEventListener("sessionend",ih),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(T,k);const Y=Ae.enabled===!0&&Ae.isPresenting===!0,H=A!==null&&(q===null||Y)&&A.begin(C,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(k),k=Ae.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,k,q),b=pe.get(T,y.length),b.init(k),b.state.textureUnits=Z.getTextureUnits(),y.push(b),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(_e,Wn,k.reversedDepth),ie=this.localClippingEnabled,re=Oe.init(this.clippingPlanes,ie),w=ve.get(T,R.length),w.init(),R.push(w),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=C.xr.getDepthSensingMesh();Te!==null&&na(Te,k,-1/0,C.sortObjects)}na(T,k,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(Ue,Ge,k.reversedDepth),He=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,He&&Ke.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Oe.beginShadows();const W=b.state.shadowsArray;if(ke.render(W,T,k),re===!0&&Oe.endShadows(),(H&&A.hasRenderPass())===!1){const Te=w.opaque,ye=w.transmissive;if(b.setupLights(),k.isArrayCamera){const Re=k.cameras;if(ye.length>0)for(let Ne=0,Ze=Re.length;Ne<Ze;Ne++){const je=Re[Ne];rh(Te,ye,T,je)}He&&Ke.render(T);for(let Ne=0,Ze=Re.length;Ne<Ze;Ne++){const je=Re[Ne];sh(w,T,je,je.viewport)}}else ye.length>0&&rh(Te,ye,T,k),He&&Ke.render(T),sh(w,T,k)}q!==null&&G===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),H&&A.end(C),T.isScene===!0&&T.onAfterRender(C,T,k),Se.resetDefaultState(),K=-1,oe=null,y.pop(),y.length>0?(b=y[y.length-1],Z.setTextureUnits(b.state.textureUnits),re===!0&&Oe.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function na(T,k,Y,H){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){H&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const Te=Q.update(T),ye=T.material;ye.visible&&w.push(T,Te,ye,Y,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const Te=Q.update(T),ye=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ze.copy(Te.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(ye)){const Re=Te.groups;for(let Ne=0,Ze=Re.length;Ne<Ze;Ne++){const je=Re[Ne],Fe=ye[je.materialIndex];Fe&&Fe.visible&&w.push(T,Te,Fe,Y,ze.z,je)}}else ye.visible&&w.push(T,Te,ye,Y,ze.z,null)}}const Me=T.children;for(let Te=0,ye=Me.length;Te<ye;Te++)na(Me[Te],k,Y,H)}function sh(T,k,Y,H){const{opaque:W,transmissive:Me,transparent:Te}=T;b.setupLightsView(Y),re===!0&&Oe.setGlobalState(C.clippingPlanes,Y),H&&S.viewport(se.copy(H)),W.length>0&&Xr(W,k,Y),Me.length>0&&Xr(Me,k,Y),Te.length>0&&Xr(Te,k,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function rh(T,k,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Fe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new qn(1,1,{generateMipmaps:!0,type:Fe?mi:ln,minFilter:Hn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Me=b.state.transmissionRenderTarget[H.id],Te=H.viewport||se;Me.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),Re=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(ot),tt=C.getClearAlpha(),tt<1&&C.setClearColor(16777215,.5),C.clear(),He&&Ke.render(Y);const Ze=C.toneMapping;C.toneMapping=Xn;const je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),re===!0&&Oe.setGlobalState(C.clippingPlanes,H),Xr(T,Y,H),Z.updateMultisampleRenderTarget(Me),Z.updateRenderTargetMipmap(Me),it.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let pt=0,Rt=k.length;pt<Rt;pt++){const Tt=k[pt],{object:xt,geometry:qt,material:we,group:sn}=Tt;if(we.side===an&&xt.layers.test(H.layers)){const rt=we.side;we.side=jt,we.needsUpdate=!0,oh(xt,Y,H,qt,we,sn),we.side=rt,we.needsUpdate=!0,Fe=!0}}Fe===!0&&(Z.updateMultisampleRenderTarget(Me),Z.updateRenderTargetMipmap(Me))}C.setRenderTarget(ye,Re,Ne),C.setClearColor(ot,tt),je!==void 0&&(H.viewport=je),C.toneMapping=Ze}function Xr(T,k,Y){const H=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Me=T.length;W<Me;W++){const Te=T[W],{object:ye,geometry:Re,group:Ne}=Te;let Ze=Te.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ye.layers.test(Y.layers)&&oh(ye,k,Y,Re,Ze,Ne)}}function oh(T,k,Y,H,W,Me){T.onBeforeRender(C,k,Y,H,W,Me),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(C,k,Y,H,T,Me),W.transparent===!0&&W.side===an&&W.forceSinglePass===!1?(W.side=jt,W.needsUpdate=!0,C.renderBufferDirect(Y,k,H,W,T,Me),W.side=pi,W.needsUpdate=!0,C.renderBufferDirect(Y,k,H,W,T,Me),W.side=an):C.renderBufferDirect(Y,k,H,W,T,Me),T.onAfterRender(C,k,Y,H,W,Me)}function qr(T,k,Y){k.isScene!==!0&&(k=Ie);const H=X.get(T),W=b.state.lights,Me=b.state.shadowsArray,Te=W.state.version,ye=fe.getParameters(T,W.state,Me,k,Y,b.state.lightProbeGridArray),Re=fe.getProgramCacheKey(ye);let Ne=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=le.get(T.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Dn),Ne=new Map,H.programs=Ne);let je=Ne.get(Re);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===Te)return lh(T,ye),je}else ye.uniforms=fe.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,Y,ye),T.onBeforeCompile(ye,C),je=fe.acquireProgram(ye,Re),Ne.set(Re,je),H.uniforms=ye.uniforms;const Fe=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=Oe.uniform),lh(T,ye),H.needsLights=Qf(T),H.lightsStateVersion=Te,H.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=je,H.uniformsList=null,je}function ah(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Fo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function lh(T,k){const Y=X.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function $f(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(k.matrixWorld);for(let Y=0,H=T.length;Y<H;Y++){const W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Jf(T,k,Y,H,W){k.isScene!==!0&&(k=Ie),Z.resetTextureUnits();const Me=k.fog,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,ye=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:st.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=le.get(H.envMap||Te,Re),Ze=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,Rt=!!Y.morphAttributes.color;let Tt=Xn;H.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tt=C.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qt=xt!==void 0?xt.length:0,we=X.get(H),sn=b.state.lights;if(re===!0&&(ie===!0||T!==oe)){const Mt=T===oe&&H.id===K;Oe.setState(H,T,Mt)}let rt=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==sn.state.version||we.outputColorSpace!==ye||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ne||H.fog===!0&&we.fog!==Me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Oe.numPlanes||we.numIntersection!==Oe.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==je||we.morphTargets!==Fe||we.morphNormals!==pt||we.morphColors!==Rt||we.toneMapping!==Tt||we.morphTargetsCount!==qt||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,we.__version=H.version);let dn=we.currentProgram;rt===!0&&(dn=qr(H,k,W),F&&H.isNodeMaterial&&F.onUpdateProgram(H,dn,we));let Un=!1,vi=!1,ss=!1;const vt=dn.getUniforms(),Ct=we.uniforms;if(S.useProgram(dn.program)&&(Un=!0,vi=!0,ss=!0),H.id!==K&&(K=H.id,vi=!0),we.needsLights){const Mt=$f(b.state.lightProbeGridArray,W);we.lightProbeGrid!==Mt&&(we.lightProbeGrid=Mt,vi=!0)}if(Un||oe!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),vt.setValue(O,"projectionMatrix",T.projectionMatrix),vt.setValue(O,"viewMatrix",T.matrixWorldInverse);const yi=vt.map.cameraPosition;yi!==void 0&&yi.setValue(O,xe.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&vt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),oe!==T&&(oe=T,vi=!0,ss=!0)}if(we.needsLights&&(sn.state.directionalShadowMap.length>0&&vt.setValue(O,"directionalShadowMap",sn.state.directionalShadowMap,Z),sn.state.spotShadowMap.length>0&&vt.setValue(O,"spotShadowMap",sn.state.spotShadowMap,Z),sn.state.pointShadowMap.length>0&&vt.setValue(O,"pointShadowMap",sn.state.pointShadowMap,Z)),W.isSkinnedMesh){vt.setOptional(O,W,"bindMatrix"),vt.setOptional(O,W,"bindMatrixInverse");const Mt=W.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),vt.setValue(O,"boneTexture",Mt.boneTexture,Z))}W.isBatchedMesh&&(vt.setOptional(O,W,"batchingTexture"),vt.setValue(O,"batchingTexture",W._matricesTexture,Z),vt.setOptional(O,W,"batchingIdTexture"),vt.setValue(O,"batchingIdTexture",W._indirectTexture,Z),vt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&vt.setValue(O,"batchingColorTexture",W._colorsTexture,Z));const _i=Y.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&z.update(W,Y,dn),(vi||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,vt.setValue(O,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(Ct.envMapIntensity.value=k.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Hy()),vi){if(vt.setValue(O,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&jf(Ct,ss),Me&&H.fog===!0&&Le.refreshFogUniforms(Ct,Me),Le.refreshMaterialUniforms(Ct,H,ae,ce,b.state.transmissionRenderTarget[T.id]),we.needsLights&&we.lightProbeGrid){const Mt=we.lightProbeGrid;Ct.probesSH.value=Mt.texture,Ct.probesMin.value.copy(Mt.boundingBox.min),Ct.probesMax.value.copy(Mt.boundingBox.max),Ct.probesResolution.value.copy(Mt.resolution)}Fo.upload(O,ah(we),Ct,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fo.upload(O,ah(we),Ct,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(O,"center",W.center),vt.setValue(O,"modelViewMatrix",W.modelViewMatrix),vt.setValue(O,"normalMatrix",W.normalMatrix),vt.setValue(O,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Mt=H.uniformsGroups;for(let yi=0,rs=Mt.length;yi<rs;yi++){const ch=Mt[yi];ne.update(ch,dn),ne.bind(ch,dn)}}return dn}function jf(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Qf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,k,Y){const H=X.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=k,X.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Y=X.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,Y=0){q=T,D=k,G=Y;let H=null,W=!1,Me=!1;if(T){const ye=X.get(T);if(ye.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),se.copy(T.viewport),ee.copy(T.scissor),We=T.scissorTest,S.viewport(se),S.scissor(ee),S.setScissorTest(We),K=-1;return}else if(ye.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(ye.__hasExternalTextures)Z.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&X.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Me=!0);const Ne=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?H=Ne[k][Y]:H=Ne[k],W=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?H=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[Y]:H=Ne,se.copy(T.viewport),ee.copy(T.scissor),We=T.scissorTest}else se.copy(Be).multiplyScalar(ae).floor(),ee.copy(at).multiplyScalar(ae).floor(),We=Xe;if(Y!==0&&(H=U),S.bindFramebuffer(O.FRAMEBUFFER,H)&&S.drawBuffers(T,H),S.viewport(se),S.scissor(ee),S.setScissorTest(We),W){const ye=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,Y)}else if(Me){const ye=k;for(let Re=0;Re<T.textures.length;Re++){const Ne=X.get(T.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,Y,ye)}}else if(T!==null&&Y!==0){const ye=X.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,Y)}K=-1},this.readRenderTargetPixels=function(T,k,Y,H,W,Me,Te,ye=0){if(!(T&&T.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){S.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Ne=T.textures[ye],Ze=Ne.format,je=Ne.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye),!P.textureFormatReadable(Ze)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-H&&Y>=0&&Y<=T.height-W&&O.readPixels(k,Y,H,W,me.convert(Ze),me.convert(je),Me)}finally{const Ne=q!==null?X.get(q).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,k,Y,H,W,Me,Te,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(k>=0&&k<=T.width-H&&Y>=0&&Y<=T.height-W){S.bindFramebuffer(O.FRAMEBUFFER,Re);const Ne=T.textures[ye],Ze=Ne.format,je=Ne.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye),!P.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(k,Y,H,W,me.convert(Ze),me.convert(je),0);const pt=q!==null?X.get(q).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,pt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Fp(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Fe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(Fe),O.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Y=0){const H=Math.pow(2,-Y),W=Math.floor(T.image.width*H),Me=Math.floor(T.image.height*H),Te=k!==null?k.x:0,ye=k!==null?k.y:0;Z.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Te,ye,W,Me),S.unbindTexture()},this.copyTextureToTexture=function(T,k,Y=null,H=null,W=0,Me=0){let Te,ye,Re,Ne,Ze,je,Fe,pt,Rt;const Tt=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(Y!==null)Te=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Ze=Y.min.y,je=Y.isBox3?Y.min.z:0;else{const Ct=Math.pow(2,-W);Te=Math.floor(Tt.width*Ct),ye=Math.floor(Tt.height*Ct),T.isDataArrayTexture?Re=Tt.depth:T.isData3DTexture?Re=Math.floor(Tt.depth*Ct):Re=1,Ne=0,Ze=0,je=0}H!==null?(Fe=H.x,pt=H.y,Rt=H.z):(Fe=0,pt=0,Rt=0);const xt=me.convert(k.format),qt=me.convert(k.type);let we;k.isData3DTexture?(Z.setTexture3D(k,0),we=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),we=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),we=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const sn=S.getParameter(O.UNPACK_ROW_LENGTH),rt=S.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=S.getParameter(O.UNPACK_SKIP_PIXELS),Un=S.getParameter(O.UNPACK_SKIP_ROWS),vi=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Tt.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),S.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),S.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const ss=T.isDataArrayTexture||T.isData3DTexture,vt=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Ct=X.get(T),_i=X.get(k),Mt=X.get(Ct.__renderTarget),yi=X.get(_i.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,Mt.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let rs=0;rs<Re;rs++)ss&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(T).__webglTexture,W,je+rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(k).__webglTexture,Me,Rt+rs)),O.blitFramebuffer(Ne,Ze,Te,ye,Fe,pt,Te,ye,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||X.has(T)){const Ct=X.get(T),_i=X.get(k);S.bindFramebuffer(O.READ_FRAMEBUFFER,B),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,L);for(let Mt=0;Mt<Re;Mt++)ss?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,W,je+Mt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,W),vt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_i.__webglTexture,Me,Rt+Mt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_i.__webglTexture,Me),W!==0?O.blitFramebuffer(Ne,Ze,Te,ye,Fe,pt,Te,ye,O.COLOR_BUFFER_BIT,O.NEAREST):vt?O.copyTexSubImage3D(we,Me,Fe,pt,Rt+Mt,Ne,Ze,Te,ye):O.copyTexSubImage2D(we,Me,Fe,pt,Ne,Ze,Te,ye);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else vt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(we,Me,Fe,pt,Rt,Te,ye,Re,xt,qt,Tt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(we,Me,Fe,pt,Rt,Te,ye,Re,xt,Tt.data):O.texSubImage3D(we,Me,Fe,pt,Rt,Te,ye,Re,xt,qt,Tt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,Fe,pt,Te,ye,xt,qt,Tt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,Fe,pt,Tt.width,Tt.height,xt,Tt.data):O.texSubImage2D(O.TEXTURE_2D,Me,Fe,pt,Te,ye,xt,qt,Tt);S.pixelStorei(O.UNPACK_ROW_LENGTH,sn),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),S.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),S.pixelStorei(O.UNPACK_SKIP_ROWS,Un),S.pixelStorei(O.UNPACK_SKIP_IMAGES,vi),Me===0&&k.generateMipmaps&&O.generateMipmap(we),S.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){D=0,G=0,q=null,S.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function Xy(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ot;let c=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Du(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);const p=Du(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Du(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new Wt(o,t,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){const x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Uu(r,e){if(e===wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Gl||e===Ud){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Gl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function qy(r){const e=new Map,t=new Map,n=r.clone();return pf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function pf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)pf(r.children[n],e.children[n],t)}class mf extends qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new Fu(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fu(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=vr.extractUrlBase(e);o=vr.resolveURL(c,this.path)}else o=vr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gf){try{o[nt.KHR_BINARY_GLTF]=new uM(e)}catch(d){i&&i(d);return}s=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case nt.KHR_MATERIALS_UNLIT:o[d]=new Zy;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[d]=new dM(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[d]=new fM;break;case nt.KHR_MESH_QUANTIZATION:o[d]=new pM;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Yy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Lt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ky{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],cn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $l(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dg(h),c.distance=d;break;case"spot":c=new Lg(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Zy{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Pt))}return Promise.all(i)}}class $y{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Jy{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(s,s)}return Promise.all(i)}}class jy{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class eM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class tM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class nM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(s[0],s[1],s[2],cn),Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class sM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(s[0],s[1],s[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(i)}}class rM{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class oM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Lt(this.parser,e,this.name)!==null?$n:null}extendMaterialParams(e,t){const n=Lt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class aM{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class lM{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class cM{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Fu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class hM{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const p of d){const x=new $e,m=new N,g=new yn,v=new N(1,1,1),M=new Ps(p.geometry,p.material,u);for(let _=0;_<u;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(m,g,v));for(const _ in l)if(_==="_COLOR_0"){const w=l[_];M.instanceColor=new di(w.array,w.itemSize,w.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);_t.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const gf="glTF",sr=12,Ou={JSON:1313821514,BIN:5130562};class uM{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-sr,s=new DataView(e,sr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ou.JSON){const c=new Uint8Array(e,sr+o,a);this.content=n.decode(c)}else if(l===Ou.BIN){const c=sr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const d=Ql[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=Ql[h]||h.toLowerCase();if(o[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Is[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}d(f)},a,c,cn,u)})})}}class fM{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pM{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class xf extends Hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,p=e*c,x=p-c,m=-2*f+3*u,g=f-u,v=1-m,M=g-u+d;for(let _=0;_!==a;_++){const w=o[x+_+a],b=o[x+_+l]*h,R=o[p+_+a],y=o[p+_]*h;s[_]=v*w+M*b+m*R+g*y}return s}}const mM=new yn;class gM extends xf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return mM.fromArray(s).normalize().toArray(s),s}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bu={9728:zt,9729:Ut,9984:Rd,9985:Io,9986:ur,9987:Hn},zu={33071:Cn,33648:Oo,10497:ji},Ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xM={CUBICSPLINE:void 0,LINEAR:br,STEP:Sr},Ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),r.DefaultMaterial}function Vi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _M(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;o.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function yM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(r){let e;const t=r.extensions&&r.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=r.indices+":"+Wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Wa(r.targets[n]);return e}function Wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ec(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bM=new $e;class wM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Lc(this.options.manager):this.textureLoader=new Fg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Vi(s,a,i),Vn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(vr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ga[i.type],a=Is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ga[i.type],c=Is[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let x,m;if(f&&f!==d){const g=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(v);M||(x=new c(a,g*f,i.count*f/h),M=new xm(x,f/h),t.cache.add(v,M)),m=new yc(M,l,u%f/h,p)}else a===null?x=new c(i.count*l):x=new c(a,u,i.count*l),m=new Wt(x,l,p);if(i.sparse!==void 0){const g=Ga.SCALAR,v=Is[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new v(o[1],M,i.sparse.count*g),b=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,y=w.length;R<y;R++){const A=w[R];if(m.setX(A,b[R*l]),l>=2&&m.setY(A,b[R*l+1]),l>=3&&m.setZ(A,b[R*l+2]),l>=4&&m.setW(A,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return h.magFilter=Bu[u.magFilter]||Ut,h.minFilter=Bu[u.minFilter]||Hn,h.wrapS=zu[u.wrapS]||ji,h.wrapT=zu[u.wrapT]||ji,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Ut,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(x){const m=new kt(x);m.needsUpdate=!0,u(m)}),t.load(vr.resolveURL(d,s.path),p,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Vn(d,o),d.userData.mimeType=o.mimeType||SM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wd,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Hd,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return At}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const d=i[nt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],cn),a.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Pt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=an);const h=s.alphaMode||Ha.OPAQUE;if(h===Ha.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ha.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==xn){const d=s.emissiveFactor;a.emissive=new De().setRGB(d[0],d[1],d[2],cn)}return s.emissiveTexture!==void 0&&o!==xn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Pt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Vn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Vi(i,d,s),d})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ku(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=MM(c),d=i[h];if(d)o.push(d.promise);else{let u;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=ku(new Ot,c,t),i[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?vM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){const x=h[f],m=o[f];let g;const v=c[f];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new Mm(x,v):new et(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?g.geometry=Uu(g.geometry,Ud):m.mode===pn.TRIANGLE_FAN&&(g.geometry=Uu(g.geometry,Gl));else if(m.mode===pn.LINES)g=new Am(x,v);else if(m.mode===pn.LINE_STRIP)g=new wc(x,v);else if(m.mode===pn.LINE_LOOP)g=new Rm(x,v);else if(m.mode===pn.POINTS)g=new Cm(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&yM(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Vn(g,s),m.extensions&&Vi(i,g,m),t.assignFinalMaterial(g),d.push(g)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Vi(i,d[0],s),d[0];const u=new Ft;s.extensions&&Vi(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(zr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){a.push(d);const u=new $e;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],p=i.samplers[f.sampler],x=f.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],p=d[2],x=d[3],m=d[4],g=[];for(let M=0,_=u.length;M<_;M++){const w=u[M],b=f[M],R=p[M],y=x[M],A=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=n._createAnimationTracks(w,b,R,y,A);if(C)for(let I=0;I<C.length;I++)g.push(C[I])}const v=new bg(s,void 0,g);return Vn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,bM)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,p=d[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Gd:c.length>1?h=new Ft:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=o),Vn(h,s),s.extensions&&Vi(n,h,s),s.matrix!==void 0){const d=new $e;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ft;n.name&&(s.name=i.createUniqueName(n.name)),Vn(s,n),n.extensions&&Vi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?s.add(qy(u)):s.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof Yn||u instanceof kt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ai[s.path]===Ai.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ai[s.path]){case Ai.weights:h=Pr;break;case Ai.rotation:h=Ir;break;case Ai.translation:case Ai.scale:h=Wo;break;default:n.itemSize===1?h=Pr:h=Wo;break}const d=i.interpolation!==void 0?xM[i.interpolation]:br,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const x=new h(l[f]+"."+Ai[s.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ec(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ir?gM:xf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function EM(r,e,t){const n=e.attributes,i=new Qt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const h=ec(Is[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){const x=ec(Is[u.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function ku(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Ql[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return st.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Vn(r,e),EM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_M(r,e.targets,t):r})}async function TM(r,e){const t=new mf,n=Object.entries(r),i=n.length;let s=0;const o={};return await Promise.all(n.map(async([a,l])=>{try{const c=await t.loadAsync(l.model);o[a]=AM(c.scene,l)}catch(c){console.warn(`[assets] Failed to load prefab "${a}" from ${l.model}:`,c)}finally{s+=1,e?.(s,i)}})),o}function AM(r,e){const t=new Ft;t.name="prefab",t.add(r),e.scale!=null&&(typeof e.scale=="number"?r.scale.setScalar(e.scale):r.scale.set(e.scale.x,e.scale.y,e.scale.z)),e.rotation&&r.rotation.set(e.rotation.x??0,e.rotation.y??0,e.rotation.z??0),e.visualOffset&&r.position.set(e.visualOffset.x??0,e.visualOffset.y??0,e.visualOffset.z??0),r.traverse(s=>{const o=s;o.isMesh&&(o.userData.castShadow!==!1&&(o.castShadow=!0),o.userData.receiveShadow!==!1&&(o.receiveShadow=!0))});const n=new N,i=new N;if(e.collider?.size)n.set(e.collider.size.x,e.collider.size.y,e.collider.size.z),i.set(e.collider.offset?.x??0,e.collider.offset?.y??0,e.collider.offset?.z??0);else{let s=null;r.traverse(a=>{!s&&/^collider/i.test(a.name)&&(s=a)}),s&&(s.visible=!1);const o=new Qt().setFromObject(s??t);o.getSize(n),o.getCenter(i)}return{template:t,colliderSize:n,colliderOffset:i,def:e}}function Oc(r){return r.template.clone(!0)}class Pn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new E);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new E);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Pn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],p=n[8],x=i[0],m=i[1],g=i[2],v=i[3],M=i[4],_=i[5],w=i[6],b=i[7],R=i[8];return s[0]=o*x+a*v+l*w,s[1]=o*m+a*M+l*b,s[2]=o*g+a*_+l*R,s[3]=c*x+h*v+d*w,s[4]=c*m+h*M+d*b,s[5]=c*g+h*_+d*R,s[6]=u*x+f*v+p*w,s[7]=u*m+f*M+p*b,s[8]=u*g+f*_+p*R,t}scale(e,t){t===void 0&&(t=new Pn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new E);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=e.x,s[7]=e.y,s[11]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new Pn);const t=3,n=6,i=RM;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[t+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,d=t*l,u=n*a,f=n*l,p=i*l,x=s*o,m=s*a,g=s*l,v=this.elements;return v[0]=1-(u+p),v[1]=h-g,v[2]=d+m,v[3]=h+g,v[4]=1-(c+p),v[5]=f-x,v[6]=d-m,v[7]=f+x,v[8]=1-(c+u),this}transpose(e){e===void 0&&(e=new Pn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const RM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new E(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new E(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Pn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new E);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new E);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new E),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new E),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new E),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=CM,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=PM;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Vu),Vu.almostEquals(e,t)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const CM=new E,PM=new E,Vu=new E;class un{constructor(e){e===void 0&&(e={}),this.lowerBound=new E,this.upperBound=new E,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Gu),c=Gu),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new un().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=Hu,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Hu,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(p<0||f>p)}}const Gu=new E,Hu=[new E,new E,new E,new E,new E,new E,new E,new E];class Wu{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class vf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class It{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new E),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=IM,i=LM;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new It);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-s*l,t.y=i*h+o*l+s*a-n*c,t.z=s*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new It);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new It),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new E);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return t.x=h*c+f*-o+d*-l-u*-a,t.y=d*c+f*-a+u*-o-h*-l,t.z=u*c+f*-l+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new It(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new It);const i=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,f,p,x,m;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),p=Math.sin(u),x=Math.sin((1-t)*u)/p,m=Math.sin(t*u)/p):(x=1-t,m=t),n.x=x*i+m*l,n.y=x*s+m*c,n.z=x*o+m*h,n.w=x*a+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new It);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const IM=new E,LM=new E,NM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Ee{constructor(e){e===void 0&&(e={}),this.id=Ee.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Ee.idCounter=0;Ee.types=NM;class lt{constructor(e){e===void 0&&(e={}),this.position=new E,this.quaternion=new It,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return lt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return lt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),n.vsub(e,i),t.conjugate(Xu),Xu.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new E),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new E),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new E),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Xu=new It;class fi extends Ee{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:Ee.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new E;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];fi.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new E,o=new E;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,l,c){const h=new E;let d=-1,u=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){h.copy(n.faceNormals[p]),s.vmult(h,h);const x=h.dot(o);x>u&&(u=x,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const x=n.vertices[n.faces[d][p]],m=new E;m.copy(x),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,o,a,l){const c=new E,h=new E,d=new E,u=new E,f=new E,p=new E;let x=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const v=m.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let v=0;v<g;v++){const M=a?a[v]:v;c.copy(m.faceNormals[M]),n.vmult(c,c);const _=m.testSepAxis(c,e,t,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){s.vmult(e.uniqueAxes[g],h);const v=m.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{const g=l?l.length:e.faces.length;for(let v=0;v<g;v++){const M=l?l[v]:v;h.copy(e.faceNormals[M]),s.vmult(h,h);const _=m.testSepAxis(h,e,t,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),u.cross(f,p),!p.almostZero()){p.normalize();const M=m.testSepAxis(p,e,t,n,i,s);if(M===!1)return!1;M<x&&(x=M,o.copy(p))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;fi.project(a,e,n,i,Xa),fi.project(t,e,s,o,qa);const l=Xa[0],c=Xa[1],h=qa[0],d=qa[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(e,t){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const l=new E,c=new E,h=new E,d=new E,u=new E,f=new E,p=new E,x=new E,m=this,g=[],v=i,M=g;let _=-1,w=Number.MAX_VALUE;for(let C=0;C<m.faces.length;C++){l.copy(m.faceNormals[C]),n.vmult(l,l);const I=l.dot(e);I<w&&(w=I,_=C)}if(_<0)return;const b=m.faces[_];b.connectedFaces=[];for(let C=0;C<m.faces.length;C++)for(let I=0;I<m.faces[C].length;I++)b.indexOf(m.faces[C][I])!==-1&&C!==_&&b.connectedFaces.indexOf(C)===-1&&b.connectedFaces.push(C);const R=b.length;for(let C=0;C<R;C++){const I=m.vertices[b[C]],F=m.vertices[b[(C+1)%R]];I.vsub(F,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[_]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(I),n.vmult(f,f),t.vadd(f,f);const U=b.connectedFaces[C];p.copy(this.faceNormals[U]);const B=this.getPlaneConstantOfFace(U);x.copy(p),n.vmult(x,x);const L=B-x.dot(t);for(this.clipFaceAgainstPlane(v,M,x,L);v.length;)v.shift();for(;M.length;)v.push(M.shift())}p.copy(this.faceNormals[_]);const y=this.getPlaneConstantOfFace(_);x.copy(p),n.vmult(x,x);const A=y-x.dot(t);for(let C=0;C<v.length;C++){let I=x.dot(v[C])+A;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){const F=v[C];if(I<=1e-6){const U={point:F,normal:x,depth:I};a.push(U)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,s<0)if(o<0){const d=new E;d.copy(c),t.push(d)}else{const d=new E;l.lerp(c,s/(s-o),d),t.push(d)}else if(o<0){const d=new E;l.lerp(c,s/(s-o),d),t.push(d),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new E;for(let f=0;f<s.length;f++){u.copy(s[f]),t.vmult(u,u),e.vadd(u,u);const p=u;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new E);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new E;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new E;e.vsub(l,c);const h=a.dot(c),d=new E;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,a=DM;let l=0,c=0;const h=UM,d=e.vertices;h.setZero(),lt.vectorToLocalFrame(n,i,t,a),lt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Xa=[],qa=[];new E;const DM=new E,UM=new E;class xi extends Ee{constructor(e){super({type:Ee.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new fi({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new E),xi.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Ri.set(s[o][0],s[o][1],s[o][2]),t.vmult(Ri,Ri),e.vadd(Ri,Ri),n(Ri.x,Ri.y,Ri.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Bn[0].set(s.x,s.y,s.z),Bn[1].set(-s.x,s.y,s.z),Bn[2].set(-s.x,-s.y,s.z),Bn[3].set(-s.x,-s.y,-s.z),Bn[4].set(s.x,-s.y,-s.z),Bn[5].set(s.x,s.y,-s.z),Bn[6].set(-s.x,s.y,-s.z),Bn[7].set(s.x,-s.y,s.z);const o=Bn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Bn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Ri=new E,Bn=[new E,new E,new E,new E,new E,new E,new E,new E],Bc={DYNAMIC:1,STATIC:2,KINEMATIC:4},zc={AWAKE:0,SLEEPY:1,SLEEPING:2};class be extends vf{constructor(e){e===void 0&&(e={}),super(),this.id=be.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new E,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new E,this.force=new E;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?be.STATIC:be.DYNAMIC,typeof e.type==typeof be.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=be.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new It,this.initQuaternion=new It,this.previousQuaternion=new It,this.interpolatedQuaternion=new It,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new E,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Pn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Pn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new E(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new E(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new un,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=be.AWAKE,this.wakeUpAfterNarrowphase=!1,e===be.SLEEPING&&this.dispatchEvent(be.wakeupEvent)}sleep(){this.sleepState=be.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===be.AWAKE&&n<i?(this.sleepState=be.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(be.sleepyEvent)):t===be.SLEEPY&&n>i?this.wakeUp():t===be.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(be.sleepEvent))}}updateSolveMassProperties(){this.sleepState===be.SLEEPING||this.type===be.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new E),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new E),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new E),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new E,s=new It;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=FM,o=OM,a=this.quaternion,l=this.aabb,c=BM;for(let h=0;h!==i;h++){const d=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=zM,i=kM;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new E),this.type!==be.DYNAMIC)return;this.sleepState===be.SLEEPING&&this.wakeUp();const n=VM;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new E),this.type!==be.DYNAMIC)return;const n=GM,i=HM;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===be.DYNAMIC&&(this.sleepState===be.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new E),this.type!==be.DYNAMIC)return;this.sleepState===be.SLEEPING&&this.wakeUp();const n=t,i=WM;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=XM;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new E),this.type!==be.DYNAMIC)return;const n=qM,i=YM;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=KM;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),xi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new E;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===be.DYNAMIC||this.type===be.KINEMATIC)||this.sleepState===be.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const p=d.elements,x=this.angularFactor,m=l.x*x.x,g=l.y*x.y,v=l.z*x.z;s.x+=e*(p[0]*m+p[1]*g+p[2]*v),s.y+=e*(p[3]*m+p[4]*g+p[5]*v),s.z+=e*(p[6]*m+p[7]*g+p[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}be.idCounter=0;be.COLLIDE_EVENT_NAME="collide";be.DYNAMIC=Bc.DYNAMIC;be.STATIC=Bc.STATIC;be.KINEMATIC=Bc.KINEMATIC;be.AWAKE=zc.AWAKE;be.SLEEPY=zc.SLEEPY;be.SLEEPING=zc.SLEEPING;be.wakeupEvent={type:"wakeup"};be.sleepyEvent={type:"sleepy"};be.sleepEvent={type:"sleep"};const FM=new E,OM=new It,BM=new un,zM=new Pn,kM=new Pn;new Pn;const VM=new E,GM=new E,HM=new E,WM=new E,XM=new E,qM=new E,YM=new E,KM=new E;class _f{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&be.STATIC)!==0||e.sleepState===be.SLEEPING)&&((t.type&be.STATIC)!==0||t.sleepState===be.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=ZM;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=$M,i=JM,s=jM,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new E;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const ZM=new E;new E;new It;new E;const $M={keys:[]},JM=[],jM=[];new E;new E;new E;class QM extends _f{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Xo{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let yf,Mf,Sf,bf,wf,Ef,Tf;const kc={CLOSEST:1,ANY:2,ALL:4};yf=Ee.types.SPHERE;Mf=Ee.types.PLANE;Sf=Ee.types.BOX;bf=Ee.types.CYLINDER;wf=Ee.types.CONVEXPOLYHEDRON;Ef=Ee.types.HEIGHTFIELD;Tf=Ee.types.TRIMESH;class Dt{get[yf](){return this._intersectSphere}get[Mf](){return this._intersectPlane}get[Sf](){return this._intersectBox}get[bf](){return this._intersectConvex}get[wf](){return this._intersectConvex}get[Ef](){return this._intersectHeightfield}get[Tf](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new E),t===void 0&&(t=new E),this.from=e.clone(),this.to=t.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Dt.ANY,this.result=new Xo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Dt.ANY,this.result=t.result||new Xo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(qu),Ya.length=0,e.broadphase.aabbQuery(e,qu,Ya),this.intersectBodies(Ya),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=eS,s=tS;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(mS(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);t.vmult(c,c);const h=new E;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new E,x=new E,m=new E;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,x),o.vadd(x,m),this.reportIntersection(c,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=nS;o.from.copy(this.from),o.to.copy(this.to),lt.pointToLocalFrame(n,t,o.from,o.from),lt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=iS;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new un;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(f,p,!1),lt.pointToWorldFrame(n,t,e.pillarOffset,wo),this._intersectConvex(e.pillarConvex,t,wo,i,s,Yu),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),lt.pointToWorldFrame(n,t,e.pillarOffset,wo),this._intersectConvex(e.pillarConvex,t,wo,i,s,Yu)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=sS,p=rS;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1);else{const x=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=oS,l=Ku,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=c?c.length:h.length,v=this.result;for(let M=0;!v.shouldStop&&M<g;M++){const _=c?c[M]:M,w=h[_],b=u[_],R=t,y=n;l.copy(d[w[0]]),R.vmult(l,l),l.vadd(y,l),l.vsub(p,l),R.vmult(b,a);const A=f.dot(a);if(Math.abs(A)<this.precision)continue;const C=a.dot(l)/A;if(!(C<0)){f.scale(C,en),en.vadd(p,en),En.copy(d[w[0]]),R.vmult(En,En),y.vadd(En,En);for(let I=1;!v.shouldStop&&I<w.length-1;I++){zn.copy(d[w[I]]),kn.copy(d[w[I+1]]),R.vmult(zn,zn),R.vmult(kn,kn),y.vadd(zn,zn),y.vadd(kn,kn);const F=en.distanceTo(p);!(Dt.pointInTriangle(en,En,zn,kn)||Dt.pointInTriangle(en,zn,En,kn))||F>m||this.reportIntersection(a,en,s,i,_)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=aS,l=fS,c=pS,h=Ku,d=lS,u=cS,f=hS,p=dS,x=uS,m=e.indices;e.vertices;const g=this.from,v=this.to,M=this.direction;c.position.copy(n),c.quaternion.copy(t),lt.vectorToLocalFrame(n,t,M,d),lt.pointToLocalFrame(n,t,g,u),lt.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();const _=u.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let w=0,b=l.length;!this.result.shouldStop&&w!==b;w++){const R=l[w];e.getNormal(R,a),e.getVertex(m[R*3],En),En.vsub(u,h);const y=d.dot(a),A=a.dot(h)/y;if(A<0)continue;d.scale(A,en),en.vadd(u,en),e.getVertex(m[R*3+1],zn),e.getVertex(m[R*3+2],kn);const C=en.distanceSquared(u);!(Dt.pointInTriangle(en,zn,En,kn)||Dt.pointInTriangle(en,En,zn,kn))||C>_||(lt.vectorToWorldFrame(t,a,x),lt.pointToWorldFrame(n,t,en,p),this.reportIntersection(x,p,s,i,R))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Dt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Dt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case Dt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,qi),n.vsub(t,rr),e.vsub(t,Ka);const s=qi.dot(qi),o=qi.dot(rr),a=qi.dot(Ka),l=rr.dot(rr),c=rr.dot(Ka);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}Dt.CLOSEST=kc.CLOSEST;Dt.ANY=kc.ANY;Dt.ALL=kc.ALL;const qu=new un,Ya=[],rr=new E,Ka=new E,eS=new E,tS=new It,en=new E,En=new E,zn=new E,kn=new E;new E;new Xo;const Yu={faceList:[0]},wo=new E,nS=new Dt,iS=[],sS=new E,rS=new E,oS=new E;new E;new E;const Ku=new E,aS=new E,lS=new E,cS=new E,hS=new E,uS=new E,dS=new E;new un;const fS=[],pS=new lt,qi=new E,Eo=new E;function mS(r,e,t){t.vsub(r,qi);const n=qi.dot(e);return e.scale(n,Eo),Eo.vadd(r,Eo),t.distanceTo(Eo)}class Es extends _f{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const o=e.boundingRadius,a=t.boundingRadius,l=i+o;return s-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Es.checkBounds(c,h,o))break;this.intersectionTest(c,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Es.insertionSortX(e):t===1?Es.insertionSortY(e):t===2&&Es.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const p=a[f],x=p.position.x;e+=x,t+=x*x;const m=p.position.y;n+=m,i+=m*m;const g=p.position.z;s+=g,o+=g*g}const h=t-e*e*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}}class Af{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Zu{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Gr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Gr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Zu,this.jacobianElementB=new Zu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,$u),a.scale(h,Ju),n.invInertiaWorldSolve.vmult(o,ju),i.invInertiaWorldSolve.vmult(l,Qu),e.multiplyVectors($u,ju)+t.multiplyVectors(Ju,Qu)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,To),c+=To.dot(e.rotational),l.vmult(t.rotational,To),c+=To.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=gS;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Gr.idCounter=0;const $u=new E,Ju=new E,ju=new E,Qu=new E,To=new E,gS=new E;class xS extends Gr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=vS,c=_S,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const p=yS,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const v=g.dot(p),M=this.restitution+1,_=M*u.dot(g)-M*h.dot(g)+f.dot(c)-d.dot(l),w=this.computeGiMf();return-v*t-_*n-e*w}getImpactVelocityAlongNormal(){const e=MS,t=SS,n=bS,i=wS,s=ES;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const vS=new E,_S=new E,yS=new E,MS=new E,SS=new E,bS=new E,wS=new E,ES=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class ed extends Gr{constructor(e,t,n){super(e,t,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=TS,o=AS,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const TS=new E,AS=new E;class Zi{constructor(e,t,n){n=Af.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Zi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Zi.idCounter=0;class $i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=$i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}$i.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Dt;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class RS extends Ee{constructor(e){if(super({type:Ee.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new E);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=e[l]-s,i[l]=e[l]+s}}}new E;new E;new E;new E;new E;new E;new E;new E;new E;class Vc extends fi{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new E(-t*u(0),-n*.5,t*d(0))),c.push(0),o.push(new E(-e*u(0),n*.5,e*d(0))),h.push(1);for(let p=0;p<s;p++){const x=2*Math.PI/s*(p+1),m=2*Math.PI/s*(p+.5);p<s-1?(o.push(new E(-t*u(x),-n*.5,t*d(x))),c.push(2*p+2),o.push(new E(-e*u(x),n*.5,e*d(x))),h.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(s%2===1||p<s/2)&&a.push(new E(-u(m),0,d(m)))}l.push(c),a.push(new E(0,1,0));const f=[];for(let p=0;p<h.length;p++)f.push(h[h.length-p-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=Ee.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}new E;class CS extends Ee{constructor(e,t){t===void 0&&(t={}),t=Af.defaults(t,{maxValue:null,minValue:null,elementSize:1}),super({type:Ee.types.HEIGHTFIELD}),this.data=e,this.maxValue=t.maxValue,this.minValue=t.minValue,this.elementSize=t.elementSize,t.minValue===null&&this.updateMinValue(),t.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,this.pillarConvex=new fi,this.pillarOffset=new E,this.updateBoundingSphereRadius(),this._cachedPillars={}}update(){this._cachedPillars={}}updateMinValue(){const e=this.data;let t=e[0][0];for(let n=0;n!==e.length;n++)for(let i=0;i!==e[n].length;i++){const s=e[n][i];s<t&&(t=s)}this.minValue=t}updateMaxValue(){const e=this.data;let t=e[0][0];for(let n=0;n!==e.length;n++)for(let i=0;i!==e[n].length;i++){const s=e[n][i];s>t&&(t=s)}this.maxValue=t}setHeightValueAtIndex(e,t,n){const i=this.data;i[e][t]=n,this.clearCachedConvexTrianglePillar(e,t,!1),e>0&&(this.clearCachedConvexTrianglePillar(e-1,t,!0),this.clearCachedConvexTrianglePillar(e-1,t,!1)),t>0&&(this.clearCachedConvexTrianglePillar(e,t-1,!0),this.clearCachedConvexTrianglePillar(e,t-1,!1)),t>0&&e>0&&this.clearCachedConvexTrianglePillar(e-1,t-1,!0)}getRectMinMax(e,t,n,i,s){s===void 0&&(s=[]);const o=this.data;let a=this.minValue;for(let l=e;l<=n;l++)for(let c=t;c<=i;c++){const h=o[l][c];h>a&&(a=h)}s[0]=this.minValue,s[1]=a}getIndexOfPosition(e,t,n,i){const s=this.elementSize,o=this.data;let a=Math.floor(e/s),l=Math.floor(t/s);return n[0]=a,n[1]=l,i&&(a<0&&(a=0),l<0&&(l=0),a>=o.length-1&&(a=o.length-1),l>=o[0].length-1&&(l=o[0].length-1)),!(a<0||l<0||a>=o.length-1||l>=o[0].length-1)}getTriangleAt(e,t,n,i,s,o){const a=td;this.getIndexOfPosition(e,t,a,n);let l=a[0],c=a[1];const h=this.data;n&&(l=Math.min(h.length-2,Math.max(0,l)),c=Math.min(h[0].length-2,Math.max(0,c)));const d=this.elementSize,u=(e/d-l)**2+(t/d-c)**2,f=(e/d-(l+1))**2+(t/d-(c+1))**2,p=u>f;return this.getTriangle(l,c,p,i,s,o),p}getNormalAt(e,t,n,i){const s=NS,o=DS,a=US,l=FS,c=OS;this.getTriangleAt(e,t,n,s,o,a),o.vsub(s,l),a.vsub(s,c),l.cross(c,i),i.normalize()}getAabbAtIndex(e,t,n){let{lowerBound:i,upperBound:s}=n;const o=this.data,a=this.elementSize;i.set(e*a,t*a,o[e][t]),s.set((e+1)*a,(t+1)*a,o[e+1][t+1])}getHeightAt(e,t,n){const i=this.data,s=PS,o=IS,a=LS,l=td;this.getIndexOfPosition(e,t,l,n);let c=l[0],h=l[1];n&&(c=Math.min(i.length-2,Math.max(0,c)),h=Math.min(i[0].length-2,Math.max(0,h)));const d=this.getTriangleAt(e,t,n,s,o,a);BS(e,t,s.x,s.y,o.x,o.y,a.x,a.y,nd);const u=nd;return d?i[c+1][h+1]*u.x+i[c][h+1]*u.y+i[c+1][h]*u.z:i[c][h]*u.x+i[c+1][h]*u.y+i[c][h+1]*u.z}getCacheConvexTrianglePillarKey(e,t,n){return`${e}_${t}_${n?1:0}`}getCachedConvexTrianglePillar(e,t,n){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,t,n)]}setCachedConvexTrianglePillar(e,t,n,i,s){this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,t,n)]={convex:i,offset:s}}clearCachedConvexTrianglePillar(e,t,n){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,t,n)]}getTriangle(e,t,n,i,s,o){const a=this.data,l=this.elementSize;n?(i.set((e+1)*l,(t+1)*l,a[e+1][t+1]),s.set(e*l,(t+1)*l,a[e][t+1]),o.set((e+1)*l,t*l,a[e+1][t])):(i.set(e*l,t*l,a[e][t]),s.set((e+1)*l,t*l,a[e+1][t]),o.set(e*l,(t+1)*l,a[e][t+1]))}getConvexTrianglePillar(e,t,n){let i=this.pillarConvex,s=this.pillarOffset;if(this.cacheEnabled){const d=this.getCachedConvexTrianglePillar(e,t,n);if(d){this.pillarConvex=d.convex,this.pillarOffset=d.offset;return}i=new fi,s=new E,this.pillarConvex=i,this.pillarOffset=s}const o=this.data,a=this.elementSize,l=i.faces;i.vertices.length=6;for(let d=0;d<6;d++)i.vertices[d]||(i.vertices[d]=new E);l.length=5;for(let d=0;d<5;d++)l[d]||(l[d]=[]);const c=i.vertices,h=(Math.min(o[e][t],o[e+1][t],o[e][t+1],o[e+1][t+1])-this.minValue)/2+this.minValue;n?(s.set((e+.75)*a,(t+.75)*a,h),c[0].set(.25*a,.25*a,o[e+1][t+1]-h),c[1].set(-.75*a,.25*a,o[e][t+1]-h),c[2].set(.25*a,-.75*a,o[e+1][t]-h),c[3].set(.25*a,.25*a,-Math.abs(h)-1),c[4].set(-.75*a,.25*a,-Math.abs(h)-1),c[5].set(.25*a,-.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=2,l[2][1]=5,l[2][2]=3,l[2][3]=0,l[3][0]=3,l[3][1]=4,l[3][2]=1,l[3][3]=0,l[4][0]=1,l[4][1]=4,l[4][2]=5,l[4][3]=2):(s.set((e+.25)*a,(t+.25)*a,h),c[0].set(-.25*a,-.25*a,o[e][t]-h),c[1].set(.75*a,-.25*a,o[e+1][t]-h),c[2].set(-.25*a,.75*a,o[e][t+1]-h),c[3].set(-.25*a,-.25*a,-Math.abs(h)-1),c[4].set(.75*a,-.25*a,-Math.abs(h)-1),c[5].set(-.25*a,.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=0,l[2][1]=2,l[2][2]=5,l[2][3]=3,l[3][0]=1,l[3][1]=0,l[3][2]=3,l[3][3]=4,l[4][0]=4,l[4][1]=5,l[4][2]=2,l[4][3]=1),i.computeNormals(),i.computeEdges(),i.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(e,t,n,i,s)}calculateLocalInertia(e,t){return t===void 0&&(t=new E),t.set(0,0,0),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),i.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}updateBoundingSphereRadius(){const e=this.data,t=this.elementSize;this.boundingSphereRadius=new E(e.length*t,e[0].length*t,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).length()}setHeightsFromImage(e,t){const{x:n,z:i,y:s}=t,o=document.createElement("canvas");o.width=e.width,o.height=e.height;const a=o.getContext("2d");a.drawImage(e,0,0);const l=a.getImageData(0,0,e.width,e.height),c=this.data;c.length=0,this.elementSize=Math.abs(n)/l.width;for(let h=0;h<l.height;h++){const d=[];for(let u=0;u<l.width;u++){const f=l.data[(h*l.height+u)*4],p=l.data[(h*l.height+u)*4+1],x=l.data[(h*l.height+u)*4+2],m=(f+p+x)/4/255*i;n<0?d.push(m):d.unshift(m)}s<0?c.unshift(d):c.push(d)}this.updateMaxValue(),this.updateMinValue(),this.update()}}const td=[],nd=new E,PS=new E,IS=new E,LS=new E,NS=new E,DS=new E,US=new E,FS=new E,OS=new E;function BS(r,e,t,n,i,s,o,a,l){l.x=((s-a)*(r-o)+(o-i)*(e-a))/((s-a)*(t-o)+(o-i)*(n-a)),l.y=((a-n)*(r-o)+(t-o)*(e-a))/((s-a)*(t-o)+(o-i)*(n-a)),l.z=1-l.x-l.y}new E;new un;new E;new un;new E;new E;new E;new E;new E;new E;new E;new un;new E;new lt;new un;class zS{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class kS extends zS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let d,u,f,p,x,m;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const g=GS,v=HS,M=VS;g.length=a,v.length=a,M.length=a;for(let _=0;_!==a;_++){const w=o[_];M[_]=0,v[_]=w.computeB(h),g[_]=1/w.computeC()}if(a!==0){for(let b=0;b!==c;b++){const R=l[b],y=R.vlambda,A=R.wlambda;y.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let b=0;b!==a;b++){const R=o[b];d=v[b],u=g[b],m=M[b],x=R.computeGWlambda(),f=u*(d-x-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),M[b]+=f,p+=f>0?f:-f,R.addToWlambda(f)}if(p*p<s)break}for(let b=0;b!==c;b++){const R=l[b],y=R.velocity,A=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),y.vadd(R.vlambda,y),R.wlambda.vmul(R.angularFactor,R.wlambda),A.vadd(R.wlambda,A)}let _=o.length;const w=1/h;for(;_--;)o[_].multiplier=M[_]*w}return n}}const VS=[],GS=[],HS=[];class WS{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class XS extends WS{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const bt={sphereSphere:Ee.types.SPHERE,spherePlane:Ee.types.SPHERE|Ee.types.PLANE,boxBox:Ee.types.BOX|Ee.types.BOX,sphereBox:Ee.types.SPHERE|Ee.types.BOX,planeBox:Ee.types.PLANE|Ee.types.BOX,convexConvex:Ee.types.CONVEXPOLYHEDRON,sphereConvex:Ee.types.SPHERE|Ee.types.CONVEXPOLYHEDRON,planeConvex:Ee.types.PLANE|Ee.types.CONVEXPOLYHEDRON,boxConvex:Ee.types.BOX|Ee.types.CONVEXPOLYHEDRON,sphereHeightfield:Ee.types.SPHERE|Ee.types.HEIGHTFIELD,boxHeightfield:Ee.types.BOX|Ee.types.HEIGHTFIELD,convexHeightfield:Ee.types.CONVEXPOLYHEDRON|Ee.types.HEIGHTFIELD,sphereParticle:Ee.types.PARTICLE|Ee.types.SPHERE,planeParticle:Ee.types.PLANE|Ee.types.PARTICLE,boxParticle:Ee.types.BOX|Ee.types.PARTICLE,convexParticle:Ee.types.PARTICLE|Ee.types.CONVEXPOLYHEDRON,cylinderCylinder:Ee.types.CYLINDER,sphereCylinder:Ee.types.SPHERE|Ee.types.CYLINDER,planeCylinder:Ee.types.PLANE|Ee.types.CYLINDER,boxCylinder:Ee.types.BOX|Ee.types.CYLINDER,convexCylinder:Ee.types.CONVEXPOLYHEDRON|Ee.types.CYLINDER,heightfieldCylinder:Ee.types.HEIGHTFIELD|Ee.types.CYLINDER,particleCylinder:Ee.types.PARTICLE|Ee.types.CYLINDER,sphereTrimesh:Ee.types.SPHERE|Ee.types.TRIMESH,planeTrimesh:Ee.types.PLANE|Ee.types.TRIMESH};class qS{get[bt.sphereSphere](){return this.sphereSphere}get[bt.spherePlane](){return this.spherePlane}get[bt.boxBox](){return this.boxBox}get[bt.sphereBox](){return this.sphereBox}get[bt.planeBox](){return this.planeBox}get[bt.convexConvex](){return this.convexConvex}get[bt.sphereConvex](){return this.sphereConvex}get[bt.planeConvex](){return this.planeConvex}get[bt.boxConvex](){return this.boxConvex}get[bt.sphereHeightfield](){return this.sphereHeightfield}get[bt.boxHeightfield](){return this.boxHeightfield}get[bt.convexHeightfield](){return this.convexHeightfield}get[bt.sphereParticle](){return this.sphereParticle}get[bt.planeParticle](){return this.planeParticle}get[bt.boxParticle](){return this.boxParticle}get[bt.convexParticle](){return this.convexParticle}get[bt.cylinderCylinder](){return this.convexConvex}get[bt.sphereCylinder](){return this.sphereConvex}get[bt.planeCylinder](){return this.planeConvex}get[bt.boxCylinder](){return this.boxConvex}get[bt.convexCylinder](){return this.convexConvex}get[bt.heightfieldCylinder](){return this.heightfieldCylinder}get[bt.particleCylinder](){return this.particleCylinder}get[bt.sphereTrimesh](){return this.sphereTrimesh}get[bt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new XS,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new xS(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,x=p.length?p.pop():new ed(n,i,u*f),m=p.length?p.pop():new ed(n,i,u*f);return x.bi=m.bi=n,x.bj=m.bj=i,x.minForce=m.minForce=-u*f,x.maxForce=m.maxForce=u*f,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Gi.setZero(),Ss.setZero(),bs.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Gi.vadd(t.ni,Gi),Ss.vadd(t.ri,Ss),bs.vadd(t.rj,bs)):(Gi.vsub(t.ni,Gi),Ss.vadd(t.rj,Ss),bs.vadd(t.ri,bs));const o=1/e;Ss.scale(o,n.ri),bs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Gi.normalize(),Gi.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=ZS,c=$S,h=YS,d=KS;for(let u=0,f=e.length;u!==f;u++){const p=e[u],x=t[u];let m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);const g=p.type&be.KINEMATIC&&x.type&be.STATIC||p.type&be.STATIC&&x.type&be.KINEMATIC||p.type&be.KINEMATIC&&x.type&be.KINEMATIC;for(let v=0;v<p.shapes.length;v++){p.quaternion.mult(p.shapeOrientations[v],l),p.quaternion.vmult(p.shapeOffsets[v],h),h.vadd(p.position,h);const M=p.shapes[v];for(let _=0;_<x.shapes.length;_++){x.quaternion.mult(x.shapeOrientations[_],c),x.quaternion.vmult(x.shapeOffsets[_],d),d.vadd(x.position,d);const w=x.shapes[_];if(!(M.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+w.boundingSphereRadius)continue;let b=null;M.material&&w.material&&(b=n.getContactMaterial(M.material,w.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const R=M.type|w.type,y=this[R];if(y){let A=!1;M.type<w.type?A=y.call(this,M,w,h,d,l,c,p,x,M,w,g):A=y.call(this,w,M,d,h,c,l,x,p,M,w,g),A&&g&&(n.shapeOverlapKeeper.set(M.id,w.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(e,t,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Ao),u.ni.scale(u.ni.dot(Ao),id),Ao.vsub(id,u.rj),-Ao.dot(u.ni)<=e.radius){if(d)return!0;const f=u.ri,p=u.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,d)}sphereBox(e,t,n,i,s,o,a,l,c,h,d){const u=this.v3pool,f=Sb;n.vsub(i,Ro),t.getSideNormals(f,o);const p=e.radius;let x=!1;const m=wb,g=Eb,v=Tb;let M=null,_=0,w=0,b=0,R=null;for(let D=0,G=f.length;D!==G&&x===!1;D++){const q=_b;q.copy(f[D]);const K=q.length();q.normalize();const oe=Ro.dot(q);if(oe<K+p&&oe>0){const se=yb,ee=Mb;se.copy(f[(D+1)%3]),ee.copy(f[(D+2)%3]);const We=se.length(),ot=ee.length();se.normalize(),ee.normalize();const tt=Ro.dot(se),J=Ro.dot(ee);if(tt<We&&tt>-We&&J<ot&&J>-ot){const ce=Math.abs(oe-K-p);if((R===null||ce<R)&&(R=ce,w=tt,b=J,M=K,m.copy(q),g.copy(se),v.copy(ee),_++,d))return!0}}}if(_){x=!0;const D=this.createContactEquation(a,l,e,t,c,h);m.scale(-p,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(M,m),g.scale(w,g),m.vadd(g,m),v.scale(b,v),m.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let y=u.get();const A=bb;for(let D=0;D!==2&&!x;D++)for(let G=0;G!==2&&!x;G++)for(let q=0;q!==2&&!x;q++)if(y.set(0,0,0),D?y.vadd(f[0],y):y.vsub(f[0],y),G?y.vadd(f[1],y):y.vsub(f[1],y),q?y.vadd(f[2],y):y.vsub(f[2],y),i.vadd(y,A),A.vsub(n,A),A.lengthSquared()<p*p){if(d)return!0;x=!0;const K=this.createContactEquation(a,l,e,t,c,h);K.ri.copy(A),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(p,K.ri),K.rj.copy(y),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}u.release(y),y=null;const C=u.get(),I=u.get(),F=u.get(),U=u.get(),B=u.get(),L=f.length;for(let D=0;D!==L&&!x;D++)for(let G=0;G!==L&&!x;G++)if(D%3!==G%3){f[G].cross(f[D],C),C.normalize(),f[D].vadd(f[G],I),F.copy(n),F.vsub(I,F),F.vsub(i,F);const q=F.dot(C);C.scale(q,U);let K=0;for(;K===D%3||K===G%3;)K++;B.copy(n),B.vsub(U,B),B.vsub(I,B),B.vsub(i,B);const oe=Math.abs(q),se=B.length();if(oe<f[K].length()&&se<p){if(d)return!0;x=!0;const ee=this.createContactEquation(a,l,e,t,c,h);I.vadd(U,ee.rj),ee.rj.copy(ee.rj),B.negate(ee.ni),ee.ni.normalize(),ee.ri.copy(ee.rj),ee.ri.vadd(i,ee.ri),ee.ri.vsub(n,ee.ri),ee.ri.normalize(),ee.ri.scale(p,ee.ri),ee.ri.vadd(n,ee.ri),ee.ri.vsub(a.position,ee.ri),ee.rj.vadd(i,ee.rj),ee.rj.vsub(l.position,ee.rj),this.result.push(ee),this.createFrictionEquationsFromContact(ee,this.frictionResult)}}u.release(C,I,F,U,B)}planeBox(e,t,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,d)}convexConvex(e,t,n,i,s,o,a,l,c,h,d,u,f){const p=Vb;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,p,u,f)){const x=[],m=Gb;e.clipAgainstHull(n,s,t,i,o,p,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(d)return!0;const M=this.createContactEquation(a,l,e,t,c,h),_=M.ri,w=M.rj;p.negate(M.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,_),w.copy(x[v].point),_.vsub(n,_),w.vsub(i,w),_.vadd(n,_),_.vsub(a.position,_),w.vadd(i,w),w.vsub(l.position,w),this.result.push(M),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Ab);const f=t.faceNormals,p=t.faces,x=t.vertices,m=e.radius;let g=!1;for(let v=0;v!==x.length;v++){const M=x[v],_=Ib;o.vmult(M,_),i.vadd(_,_);const w=Pb;if(_.vsub(n,w),w.lengthSquared()<m*m){if(d)return!0;g=!0;const b=this.createContactEquation(a,l,e,t,c,h);b.ri.copy(w),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),_.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,M=p.length;v!==M&&g===!1;v++){const _=f[v],w=p[v],b=Lb;o.vmult(_,b);const R=Nb;o.vmult(x[w[0]],R),R.vadd(i,R);const y=Db;b.scale(-m,y),n.vadd(y,y);const A=Ub;y.vsub(R,A);const C=A.dot(b),I=Fb;if(n.vsub(R,I),C<0&&I.dot(b)>0){const F=[];for(let U=0,B=w.length;U!==B;U++){const L=u.get();o.vmult(x[w[U]],L),i.vadd(L,L),F.push(L)}if(vb(F,b,n)){if(d)return!0;g=!0;const U=this.createContactEquation(a,l,e,t,c,h);b.scale(-m,U.ri),b.negate(U.ni);const B=u.get();b.scale(-C,B);const L=u.get();b.scale(-m,L),n.vsub(i,U.rj),U.rj.vadd(L,U.rj),U.rj.vadd(B,U.rj),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),u.release(B),u.release(L),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let D=0,G=F.length;D!==G;D++)u.release(F[D]);return}else for(let U=0;U!==w.length;U++){const B=u.get(),L=u.get();o.vmult(x[w[(U+1)%w.length]],B),o.vmult(x[w[(U+2)%w.length]],L),i.vadd(B,B),i.vadd(L,L);const D=Rb;L.vsub(B,D);const G=Cb;D.unit(G);const q=u.get(),K=u.get();n.vsub(B,K);const oe=K.dot(G);G.scale(oe,q),q.vadd(B,q);const se=u.get();if(q.vsub(n,se),oe>0&&oe*oe<D.lengthSquared()&&se.lengthSquared()<m*m){if(d)return!0;const ee=this.createContactEquation(a,l,e,t,c,h);q.vsub(i,ee.rj),q.vsub(n,ee.ni),ee.ni.normalize(),ee.ni.scale(m,ee.ri),ee.rj.vadd(i,ee.rj),ee.rj.vsub(l.position,ee.rj),ee.ri.vadd(n,ee.ri),ee.ri.vsub(a.position,ee.ri),this.result.push(ee),this.createFrictionEquationsFromContact(ee,this.frictionResult);for(let We=0,ot=F.length;We!==ot;We++)u.release(F[We]);u.release(B),u.release(L),u.release(q),u.release(se),u.release(K);return}u.release(B),u.release(L),u.release(q),u.release(se),u.release(K)}for(let U=0,B=F.length;U!==B;U++)u.release(F[U])}}}planeConvex(e,t,n,i,s,o,a,l,c,h,d){const u=Ob,f=Bb;f.set(0,0,1),s.vmult(f,f);let p=0;const x=zb;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h),M=kb;f.scale(f.dot(x),M),u.vsub(M,M),M.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,s,o,a,l,c,h,d){const u=t.data,f=e.radius,p=t.elementSize,x=ew,m=Qb;lt.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,v=Math.ceil((m.x+f)/p)+1,M=Math.floor((m.y-f)/p)-1,_=Math.ceil((m.y+f)/p)+1;if(v<0||_<0||g>u.length||M>u[0].length)return;g<0&&(g=0),v<0&&(v=0),M<0&&(M=0),_<0&&(_=0),g>=u.length&&(g=u.length-1),v>=u.length&&(v=u.length-1),_>=u[0].length&&(_=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const w=[];t.getRectMinMax(g,M,v,_,w);const b=w[0],R=w[1];if(m.z-f>R||m.z+f<b)return;const y=this.result;for(let A=g;A<v;A++)for(let C=M;C<_;C++){const I=y.length;let F=!1;if(t.getConvexTrianglePillar(A,C,!1),lt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.sphereConvex(e,t.pillarConvex,n,x,s,o,a,l,e,t,d)),d&&F||(t.getConvexTrianglePillar(A,C,!0),lt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.sphereConvex(e,t.pillarConvex,n,x,s,o,a,l,e,t,d)),d&&F))return!0;if(y.length-I>2)return}}boxHeightfield(e,t,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,s,o,a,l,c,h,d){const u=t.data,f=t.elementSize,p=e.boundingSphereRadius,x=Jb,m=jb,g=$b;lt.pointToLocalFrame(i,o,n,g);let v=Math.floor((g.x-p)/f)-1,M=Math.ceil((g.x+p)/f)+1,_=Math.floor((g.y-p)/f)-1,w=Math.ceil((g.y+p)/f)+1;if(M<0||w<0||v>u.length||_>u[0].length)return;v<0&&(v=0),M<0&&(M=0),_<0&&(_=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),M>=u.length&&(M=u.length-1),w>=u[0].length&&(w=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const b=[];t.getRectMinMax(v,_,M,w,b);const R=b[0],y=b[1];if(!(g.z-p>y||g.z+p<R))for(let A=v;A<M;A++)for(let C=_;C<w;C++){let I=!1;if(t.getConvexTrianglePillar(A,C,!1),lt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,o,a,l,null,null,d,m,null)),d&&I||(t.getConvexTrianglePillar(A,C,!0),lt.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,o,a,l,null,null,d,m,null)),d&&I))return!0}}sphereParticle(e,t,n,i,s,o,a,l,c,h,d){const u=qb;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const p=this.createContactEquation(l,a,t,e,c,h);u.normalize(),p.rj.copy(u),p.rj.scale(e.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,l,c,h,d){const u=Hb;u.set(0,0,1),a.quaternion.vmult(u,u);const f=Wb;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(l,a,t,e,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const m=Xb;u.scale(u.dot(i),m),i.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,d)}convexParticle(e,t,n,i,s,o,a,l,c,h,d){let u=-1;const f=Kb,p=Zb;let x=null;const m=Yb;if(m.copy(i),m.vsub(n,m),s.conjugate(sd),sd.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let g=0,v=e.faces.length;g!==v;g++){const M=[e.worldVertices[e.faces[g][0]]],_=e.worldFaceNormals[g];i.vsub(M[0],rd);const w=-_.dot(rd);if(x===null||Math.abs(w)<Math.abs(x)){if(d)return!0;x=w,u=g,f.copy(_)}}if(u!==-1){const g=this.createContactEquation(l,a,t,e,c,h);f.scale(x,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const v=g.ri,M=g.rj;v.vadd(i,v),v.vsub(l.position,v),M.vadd(n,M),M.vsub(a.position,M),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(t,e,i,n,o,s,l,a,c,h,d)}particleCylinder(e,t,n,i,s,o,a,l,c,h,d){return this.convexParticle(t,e,i,n,o,s,l,a,c,h,d)}sphereTrimesh(e,t,n,i,s,o,a,l,c,h,d){const u=sb,f=rb,p=ob,x=ab,m=lb,g=cb,v=fb,M=ib,_=tb,w=pb;lt.pointToLocalFrame(i,o,n,m);const b=e.radius;v.lowerBound.set(m.x-b,m.y-b,m.z-b),v.upperBound.set(m.x+b,m.y+b,m.z+b),t.getTrianglesInAABB(v,w);const R=nb,y=e.radius*e.radius;for(let U=0;U<w.length;U++)for(let B=0;B<3;B++)if(t.getVertex(t.indices[w[U]*3+B],R),R.vsub(m,_),_.lengthSquared()<=y){if(M.copy(R),lt.pointToWorldFrame(i,o,M,R),R.vsub(n,_),d)return!0;let L=this.createContactEquation(a,l,e,t,c,h);L.ni.copy(_),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(e.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.copy(R),L.rj.vsub(l.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let U=0;U<w.length;U++)for(let B=0;B<3;B++){t.getVertex(t.indices[w[U]*3+B],u),t.getVertex(t.indices[w[U]*3+(B+1)%3],f),f.vsub(u,p),m.vsub(f,g);const L=g.dot(p);m.vsub(u,g);let D=g.dot(p);if(D>0&&L<0&&(m.vsub(u,g),x.copy(p),x.normalize(),D=g.dot(x),x.scale(D,g),g.vadd(u,g),g.distanceTo(m)<e.radius)){if(d)return!0;const q=this.createContactEquation(a,l,e,t,c,h);g.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),lt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,q.rj),lt.vectorToWorldFrame(o,q.ni,q.ni),lt.vectorToWorldFrame(o,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const A=hb,C=ub,I=db,F=eb;for(let U=0,B=w.length;U!==B;U++){t.getTriangleVertices(w[U],A,C,I),t.getNormal(w[U],F),m.vsub(A,g);let L=g.dot(F);if(F.scale(L,g),m.vsub(g,g),L=g.distanceTo(m),Dt.pointInTriangle(g,A,C,I)&&L<e.radius){if(d)return!0;let D=this.createContactEquation(a,l,e,t,c,h);g.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),lt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,D.rj),lt.vectorToWorldFrame(o,D.ni,D.ni),lt.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,s,o,a,l,c,h,d){const u=new E,f=JS;f.set(0,0,1),s.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,u);const x=new E;x.copy(u),lt.pointToWorldFrame(i,o,x,u);const m=jS;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);const M=QS;f.scale(m.dot(f),M),u.vsub(M,M),v.ri.copy(M),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Gi=new E,Ss=new E,bs=new E,YS=new E,KS=new E,ZS=new It,$S=new It,JS=new E,jS=new E,QS=new E,eb=new E,tb=new E;new E;const nb=new E,ib=new E,sb=new E,rb=new E,ob=new E,ab=new E,lb=new E,cb=new E,hb=new E,ub=new E,db=new E,fb=new un,pb=[],Ao=new E,id=new E,mb=new E,gb=new E,xb=new E;function vb(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=mb;r[(s+1)%i].vsub(o,a);const l=gb;a.cross(e,l);const c=xb;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ro=new E,_b=new E,yb=new E,Mb=new E,Sb=[new E,new E,new E,new E,new E,new E],bb=new E,wb=new E,Eb=new E,Tb=new E,Ab=new E,Rb=new E,Cb=new E,Pb=new E,Ib=new E,Lb=new E,Nb=new E,Db=new E,Ub=new E,Fb=new E;new E;new E;const Ob=new E,Bb=new E,zb=new E,kb=new E,Vb=new E,Gb=new E,Hb=new E,Wb=new E,Xb=new E,qb=new E,sd=new It,Yb=new E;new E;const Kb=new E,rd=new E,Zb=new E,$b=new E,Jb=new E,jb=[0],Qb=new E,ew=new E;class od{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||ad(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||ad(t,h)}}}function ad(r,e){r.push((e&4294901760)>>16,e&65535)}const Za=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class tw{constructor(){this.data={keys:[]}}get(e,t){const n=Za(e,t);return this.data[n]}set(e,t,n){const i=Za(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Za(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}let nw=class extends vf{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new QM,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new kS,this.constraints=[],this.narrowphase=new qS(this),this.collisionMatrix=new Wu,this.collisionMatrixPrevious=new Wu,this.bodyOverlapKeeper=new od,this.shapeOverlapKeeper=new od,this.contactmaterials=[],this.contactMaterialTable=new tw,this.defaultMaterial=new $i("default"),this.defaultContactMaterial=new Zi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Xo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Dt.ALL,n.from=e,n.to=t,n.callback=i,$a.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Dt.ANY,n.from=e,n.to=t,n.result=i,$a.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Dt.CLOSEST,n.from=e,n.to=t,n.result=i,$a.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof be&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Bt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Bt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Bt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=aw,i=lw,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=be.DYNAMIC;let u=-1/0;const f=this.constraints,p=ow;l.length();const x=l.x,m=l.y,g=l.z;let v=0;for(c&&(u=Bt.now()),v=0;v!==s;v++){const U=o[v];if(U.type===d){const B=U.force,L=U.mass;B.x+=L*x,B.y+=L*m,B.z+=L*g}}for(let U=0,B=this.subsystems.length;U!==B;U++)this.subsystems[U].update();c&&(u=Bt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Bt.now()-u);let M=f.length;for(v=0;v!==M;v++){const U=f[v];if(!U.collideConnected)for(let B=n.length-1;B>=0;B-=1)(U.bodyA===n[B]&&U.bodyB===i[B]||U.bodyB===n[B]&&U.bodyA===i[B])&&(n.splice(B,1),i.splice(B,1))}this.collisionMatrixTick(),c&&(u=Bt.now());const _=rw,w=t.length;for(v=0;v!==w;v++)_.push(t[v]);t.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)p.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,_,this.frictionEquations,p),c&&(h.narrowphase=Bt.now()-u),c&&(u=Bt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=t.length;for(let U=0;U!==R;U++){const B=t[U],L=B.bi,D=B.bj,G=B.si,q=B.sj;let K;if(L.material&&D.material?K=this.getContactMaterial(L.material,D.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,L.material&&D.material&&(L.material.friction>=0&&D.material.friction>=0&&L.material.friction*D.material.friction,L.material.restitution>=0&&D.material.restitution>=0&&(B.restitution=L.material.restitution*D.material.restitution)),a.addEquation(B),L.allowSleep&&L.type===be.DYNAMIC&&L.sleepState===be.SLEEPING&&D.sleepState===be.AWAKE&&D.type!==be.STATIC){const oe=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),se=D.sleepSpeedLimit**2;oe>=se*2&&(L.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===be.DYNAMIC&&D.sleepState===be.SLEEPING&&L.sleepState===be.AWAKE&&L.type!==be.STATIC){const oe=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),se=L.sleepSpeedLimit**2;oe>=se*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,D,!0),this.collisionMatrixPrevious.get(L,D)||(or.body=D,or.contact=B,L.dispatchEvent(or),or.body=L,D.dispatchEvent(or)),this.bodyOverlapKeeper.set(L.id,D.id),this.shapeOverlapKeeper.set(G.id,q.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Bt.now()-u,u=Bt.now()),v=0;v!==s;v++){const U=o[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(M=f.length,v=0;v!==M;v++){const U=f[v];U.update();for(let B=0,L=U.equations.length;B!==L;B++){const D=U.equations[B];a.addEquation(D)}}a.solve(e,this),c&&(h.solve=Bt.now()-u),a.removeAllEquations();const y=Math.pow;for(v=0;v!==s;v++){const U=o[v];if(U.type&d){const B=y(1-U.linearDamping,e),L=U.velocity;L.scale(B,L);const D=U.angularVelocity;if(D){const G=y(1-U.angularDamping,e);D.scale(G,D)}}}this.dispatchEvent(sw),c&&(u=Bt.now());const C=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,C,I);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Bt.now()-u),this.stepnumber+=1,this.dispatchEvent(iw);let F=!0;if(this.allowSleep)for(F=!1,v=0;v!==s;v++){const U=o[v];U.sleepTick(this.time),U.sleepState!==be.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ii,si),e){for(let s=0,o=ii.length;s<o;s+=2)ar.bodyA=this.getBodyById(ii[s]),ar.bodyB=this.getBodyById(ii[s+1]),this.dispatchEvent(ar);ar.bodyA=ar.bodyB=null}if(t){for(let s=0,o=si.length;s<o;s+=2)lr.bodyA=this.getBodyById(si[s]),lr.bodyB=this.getBodyById(si[s+1]),this.dispatchEvent(lr);lr.bodyA=lr.bodyB=null}ii.length=si.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ii,si),n){for(let s=0,o=ii.length;s<o;s+=2){const a=this.getShapeById(ii[s]),l=this.getShapeById(ii[s+1]);ri.shapeA=a,ri.shapeB=l,a&&(ri.bodyA=a.body),l&&(ri.bodyB=l.body),this.dispatchEvent(ri)}ri.bodyA=ri.bodyB=ri.shapeA=ri.shapeB=null}if(i){for(let s=0,o=si.length;s<o;s+=2){const a=this.getShapeById(si[s]),l=this.getShapeById(si[s+1]);oi.shapeA=a,oi.shapeB=l,a&&(oi.bodyA=a.body),l&&(oi.bodyB=l.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new un;const $a=new Dt,Bt=globalThis.performance||{};if(!Bt.now){let r=Date.now();Bt.timing&&Bt.timing.navigationStart&&(r=Bt.timing.navigationStart),Bt.now=()=>Date.now()-r}new E;const iw={type:"postStep"},sw={type:"preStep"},or={type:be.COLLIDE_EVENT_NAME,body:null,contact:null},rw=[],ow=[],aw=[],lw=[],ii=[],si=[],ar={type:"beginContact",bodyA:null,bodyB:null},lr={type:"endContact",bodyA:null,bodyB:null},ri={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},oi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Gc{mesh;body;maxSpeed=25;maxReverse=10;accel=25;brakeDecel=30;coastDecel=6;turnRate=2.6;speed=0;previousPosition=new N;previousRotation=new yn;renderRotation=new yn;rotatedOffset=new N;forward=new E;localForward=new E(0,0,-1);visualOffset=new N;halfHeight;spawn;wheels=[];wheelRadius;static DEFAULT_SIZE={x:1.5,y:.6,z:2.6};constructor(e,t,n={x:0,z:0}){this.spawn={...n};const i=t?{x:t.colliderSize.x,y:t.colliderSize.y,z:t.colliderSize.z}:Gc.DEFAULT_SIZE;if(this.halfHeight=i.y/2,t)this.mesh=Oc(t),this.visualOffset.copy(t.colliderOffset).negate(),this.wheelRadius=.35,this.mesh.traverse(s=>{/wheel/i.test(s.name)&&this.wheels.push(s)});else{const s=new Ft,o=new et(new tn(i.x,i.y,i.z),new At({color:16777215,roughness:.45,metalness:.1}));o.castShadow=!0,o.receiveShadow=!0,s.add(o),this.wheelRadius=.25;const a=.25,l=new is(this.wheelRadius,this.wheelRadius,a,20);l.rotateZ(Math.PI/2);const c=new At({color:1710618,roughness:.9,metalness:.05}),h=-i.y/2+this.wheelRadius,d=i.x/2,u=i.z/2-this.wheelRadius-.15,f=[[d,h,-u],[-d,h,-u],[d,h,u],[-d,h,u]];for(const[p,x,m]of f){const g=new et(l,c);g.position.set(p,x,m),g.castShadow=!0,g.receiveShadow=!0,s.add(g),this.wheels.push(g)}this.mesh=s}this.body=new be({mass:150,shape:cw(i),position:new E(this.spawn.x,this.halfHeight,this.spawn.z),linearDamping:0,angularDamping:0,material:e}),this.body.angularFactor.set(0,1,0),this.body.linearFactor.set(1,0,1),this.capturePreviousPose()}capturePreviousPose(){this.previousPosition.copy(this.body.position),this.previousRotation.copy(this.body.quaternion)}update(e,t,n,i){this.body.quaternion.vmult(this.localForward,this.forward);const s=this.forward;this.speed=this.body.velocity.x*s.x+this.body.velocity.z*s.z;const o=this.body.velocity.x-s.x*this.speed,a=this.body.velocity.z-s.z*this.speed;if(i){const d=this.brakeDecel*e;this.speed>0?this.speed=Math.max(0,this.speed-d):this.speed<0&&(this.speed=Math.min(0,this.speed+d))}else if(t!==0)this.speed+=t*this.accel*e,this.speed=ld(this.speed,-this.maxReverse,this.maxSpeed);else{const d=this.coastDecel*e;this.speed>0?this.speed=Math.max(0,this.speed-d):this.speed<0&&(this.speed=Math.min(0,this.speed+d))}const l=Math.exp(-12*e);this.body.velocity.x=s.x*this.speed+o*l,this.body.velocity.z=s.z*this.speed+a*l;const c=ld(this.speed/this.maxSpeed,-1,1),h=-n*this.turnRate*c;if(this.body.angularVelocity.y+=(h-this.body.angularVelocity.y)*(1-Math.exp(-18*e)),this.wheels.length>0){const d=-(this.speed/this.wheelRadius)*e;for(const u of this.wheels)u.rotation.x+=d}(t!==0||n!==0||i)&&this.body.wakeUp()}setGroundHeight(e){this.body.position.y=e+this.halfHeight,this.body.velocity.y=0,this.body.aabbNeedsUpdate=!0}syncMesh(e=1){this.renderRotation.copy(this.body.quaternion),this.mesh.quaternion.copy(this.previousRotation).slerp(this.renderRotation,e),this.rotatedOffset.copy(this.visualOffset).applyQuaternion(this.mesh.quaternion),this.mesh.position.copy(this.body.position).lerp(this.previousPosition,1-e).add(this.rotatedOffset)}getForward(e){return e.set(0,0,-1).applyQuaternion(this.mesh.quaternion).setY(0).normalize()}getSpeed(){return this.body.quaternion.vmult(this.localForward,this.forward),this.body.velocity.x*this.forward.x+this.body.velocity.z*this.forward.z}reset(){this.speed=0,this.body.position.set(this.spawn.x,this.halfHeight,this.spawn.z),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.quaternion.set(0,0,0,1),this.body.previousPosition.copy(this.body.position),this.body.interpolatedPosition.copy(this.body.position),this.body.previousQuaternion.copy(this.body.quaternion),this.body.interpolatedQuaternion.copy(this.body.quaternion),this.body.force.setZero(),this.body.torque.setZero(),this.body.aabbNeedsUpdate=!0,this.capturePreviousPose(),this.body.wakeUp()}}function ld(r,e,t){return Math.max(e,Math.min(t,r))}function cw(r){const e=r.x/2,t=r.y/2,n=r.z/2,i=Math.min(r.x,r.z)*.18,s=[[-e+i,-n],[e-i,-n],[e,-n+i],[e,n-i],[e-i,n],[-e+i,n],[-e,n-i],[-e,-n+i]],o=[-t,t].flatMap(l=>s.map(([c,h])=>new E(c,l,h))),a=[Array.from({length:8},(l,c)=>c),Array.from({length:8},(l,c)=>15-c)];for(let l=0;l<8;l++){const c=(l+1)%8;a.push([l,l+8,c+8,c])}return new fi({vertices:o,faces:a})}const cd=3.2,hd=2.2;class hw{enabled=!1;camera;groundHeight;canvas;target=new N;pan=new N;appliedPan=new N;right=new N;up=new N;pointer=null;lastX=0;lastY=0;desiredPosition=new N;desiredTarget=new N;constructor(e,t,n){this.camera=e,this.groundHeight=n,this.canvas=t,t.addEventListener("pointerdown",this.onDown),t.addEventListener("pointermove",this.onMove),t.addEventListener("pointerup",this.onEnd),t.addEventListener("pointercancel",this.onEnd),t.addEventListener("lostpointercapture",this.onEnd),window.addEventListener("blur",this.releasePointer)}onDown=e=>{!this.enabled||this.pointer!==null||e.button!==0||(e.preventDefault(),this.pointer=e.pointerId,this.lastX=e.clientX,this.lastY=e.clientY,this.canvas.setPointerCapture(e.pointerId))};onMove=e=>{if(!this.enabled||this.pointer!==e.pointerId)return;e.preventDefault();const n=2*this.camera.position.distanceTo(this.target)*Math.tan(zr.degToRad(this.camera.fov/2))/Math.max(1,this.canvas.clientHeight);this.right.set(1,0,0).applyQuaternion(this.camera.quaternion),this.up.set(0,1,0).applyQuaternion(this.camera.quaternion),this.pan.addScaledVector(this.right,-(e.clientX-this.lastX)*n),this.pan.addScaledVector(this.up,(e.clientY-this.lastY)*n),this.pan.clampLength(0,10),this.lastX=e.clientX,this.lastY=e.clientY};onEnd=e=>{this.pointer===e.pointerId&&this.releasePointer()};releasePointer=()=>{const e=this.pointer;this.pointer=null,e!==null&&this.canvas.hasPointerCapture(e)&&this.canvas.releasePointerCapture(e)};reset(e,t){this.releasePointer(),this.pan.set(0,0,0),this.appliedPan.set(0,0,0),this.desiredPosition.copy(e).addScaledVector(t,-8),this.desiredPosition.y+=cd,this.camera.position.copy(this.desiredPosition),this.target.copy(e).addScaledVector(t,4),this.target.y+=hd,this.keepAboveTerrain()}update(e,t,n){this.camera.position.sub(this.appliedPan),this.target.sub(this.appliedPan),this.desiredPosition.copy(t).addScaledVector(n,-8),this.desiredPosition.y+=cd,this.desiredTarget.copy(t).addScaledVector(n,4),this.desiredTarget.y+=hd,this.camera.position.lerp(this.desiredPosition,1-Math.exp(-e/.15)),this.target.lerp(this.desiredTarget,1-Math.exp(-e/.1)),this.appliedPan.lerp(this.pan,1-Math.exp(-e/.06)),this.camera.position.add(this.appliedPan),this.target.add(this.appliedPan),this.keepAboveTerrain()}keepAboveTerrain(){const e=Math.max(0,this.groundHeight(this.camera.position.x,this.camera.position.z)+.8-this.camera.position.y);this.camera.position.y+=e,this.target.y+=e,this.appliedPan.y+=e,this.camera.lookAt(this.target)}}const tc=[{title:"What are we",description:"GameDevUtopia (GDU) is a student-led game development community founded at PICT Pune in 2020. It is a space to learn, build, experiment, and grow through game development.",details:["An independent chapter at IIIT Kottayam joined the network in 2021.","GDU brings together programming, design, art, web development, content, and research across academic backgrounds."]},{title:"What we do",description:"Game development combines technology, creativity, design, problem-solving, and teamwork. GDU members create playable games and explore art, UI/UX, web development, video editing, and content creation.",details:["Tools include Godot, Unity, Unreal Engine, Pygame, Love2D, Defold, OpenGL, raylib, MonoGame, and Blender.","Workshops, weekly sessions, game jams, exhibitions, guest sessions, and peer mentorship help turn ideas into finished projects."]}],Rf=[{title:"Game dev industry",description:"Gaming connects technical and creative careers, from global studios such as Epic Games, Rockstar, and EA to regional studios including Ubisoft Pune and SuperGaming.",details:["The supplied industry outlook projects a global market above $1.09 trillion and an Indian market of $16.7 billion by 2034.","Game-development skills also support industrial and digital applications beyond entertainment."]},{title:"Core roles & transferable opportunities",description:"The technical and creative skills behind games extend into several fields:",details:["Direct Game Development","Film & Virtual Production","Simulations & Enterprise Training","Architecture & Automotive"]}],nc=[{title:"Our achievements",description:"GDU members have earned podium finishes and awards at IIT Madras, Indore, Hyderabad and Palakkad; NIT Agartala; COEP; AIT Pune; and IIIT Nagpur.",details:["Highlights include winning IIT Bombay's Python Hackathon and IIIT Nagpur's TantraFiesta Game Jam.","International Defold events brought awards for Best Overall Game, Best Game Design, Judges' Favourite, and Special Mention."]},{title:"Collaborations",description:"GDU's network includes workshops and events with IIIT Nagpur, IIIT Kottayam, and IIIT Ranchi, alongside collaborations with Pictoreal and Defold.",details:["Joint game jams, guest sessions, and cross-campus events connect students beyond their home institutions.","The Defold Game Jam brought together participants from PICT, IIIT Kottayam, and IIIT Nagpur."]},{title:"GDU IIIT Kottayam",description:"Established in 2021, GDU IIIT Kottayam grew from Beta Labs into an independent chapter with leadership across Technology, Design, Art, PR, and Events.",details:["GameVita is its annual game jam during Apoorv. GameZone activities showcase games made by members.","Members have earned awards at IIT Palakkad's Game Forge, IIT Hyderabad's game jam, and GDU's international Defold events."]},{title:"Industry exposure",description:"Members have interacted with professionals from EA, Ubisoft, Defold, Tara Gaming, independent studios, and educators through talks, mentorship sessions, and workshops.",details:["Topics span game design, level design, production, art, programming, and publishing.","Exhibitions, national game jams, and workshops also offer experience in leadership, event management, communication, and collaboration."]},{title:"Our community",description:"GDU is built around learning by creating. Members collaborate across Coding, Design and Art, Web & DevOps, Marketing, R&D, Administration, and Content to take ideas from concept to finished experiences.",details:["The club brochure highlights 100+ games developed and 300+ members.","The community provides space to experiment, learn from peers, compete, and build portfolios of tangible work."]}],ic={title:"Glitched",description:"Glitched is GameDevUtopia PICT’s flagship annual game development festival, bringing together game development, creativity, competition, and community on a single platform. What began as a single-day online event has grown into a multi-day campus festival, with its third edition featuring activities such as game jams, art jams, esports, the Grand Expo, speaker sessions, and other campus activities. Glitched also provides participants with opportunities to interact with professionals from the gaming industry, with previous editions featuring guests and mentors from organisations such as EA and Ubisoft. Through Glitched, GDU aims to create an environment where students can showcase their work, compete, collaborate, and experience the broader world of game development.",details:[]},uw=7,Ja=5,ud=7,ts={x:0,z:180},Cf={x:0,z:0},dw={...ts,radius:12},qo={x:0,z:100,radius:20},Rn={x:-112,z:-15,radius:34},zs={x:-112,z:-88,radius:14},fw=[dw,qo,Rn,zs],Pf=[{x:0,z:152},{x:0,z:132}],pw=8,mw=7,Hc=Array.from({length:5},(r,e)=>{const t=-Math.PI/2+e*Math.PI*2/5;return{x:Rn.x+Math.cos(t)*19,z:Rn.z+Math.sin(t)*19}}),If=[{x:-10,z:98,facing:.2},{x:10,z:98,facing:-.2}],Lf=[{points:[ts,qo],width:8},{points:[qo,Cf],width:8},{points:[{x:-44.69965626587222,z:-14.523798735622522},Rn],width:10},{points:[Rn,zs],width:8}],gw=[...Lf.map(r=>r.points),...Hc.map(r=>[Rn,r])],Lr={x:92,z:0},ja={radiusX:20,radiusZ:27},dd=10,Ls=Array.from({length:5},(r,e)=>{const t=-Math.PI/2+e*Math.PI*2/5;return{x:Math.cos(t)*47,z:Math.sin(t)*47,facing:Math.atan2(-Math.cos(t),-Math.sin(t))}}),Nr=[{x:0,z:-88,radius:14,parentIndex:0},{x:-54,z:74,radius:14,parentIndex:3}],Wc=Nr.map(r=>[Ls[r.parentIndex],{x:r.x,z:r.z}]),xw=[...Ls,...Nr.map(r=>({x:r.x,z:r.z,facing:Math.atan2(-r.x,-r.z)}))],vw=[...Ls.map(r=>[{x:0,z:0},r]),...Wc.map(r=>[{x:0,z:0},...r])];function Dr(r,e,t){let n=1/0;for(let i=1;i<t.length;i++){const s=t[i-1],o=t[i],a=o.x-s.x,l=o.z-s.z,c=a*a+l*l,h=c?Math.max(0,Math.min(1,((r-s.x)*a+(e-s.z)*l)/c)):0;n=Math.min(n,Math.hypot(r-s.x-h*a,e-s.z-h*l))}return n}function _w(r){return 46+13*Math.cos(5*(r+Math.PI/2))}const yw={x:Lr.x,z:Lr.z+16},Nf=[{x:0,z:0},{x:32,z:6},{x:70,z:16},yw];function Df(r,e){return Dr(r,e,Nf)}function Uf(r,e,t=0){return Math.hypot(r,e)<ud+t||Math.hypot(r-ts.x,e-ts.z)<ud+t||gw.some(n=>Dr(r,e,n)<Ja/2+t)||Df(r,e)<Ja/2+t?!0:vw.some(n=>Dr(r,e,n)<Ja/2+t)}const Ff=[...Ls.map((r,e)=>{const t=r.x/47,n=r.z/47,i=[{domainIndex:e,target:r}];return Nr.forEach((s,o)=>{s.parentIndex===e&&i.push({domainIndex:5+o,target:r})}),{x:t*11-n*4,z:n*11+t*4,destinations:i}}),...Wc.map((r,e)=>{const t=r[0],n=r[1],i=Math.hypot(n.x-t.x,n.z-t.z),s=(n.x-t.x)/i,o=(n.z-t.z)/i;return{x:t.x+s*8-o*3.5,z:t.z+o*8+s*3.5,destinations:[{domainIndex:5+e,target:n},{domainIndex:Nr[e].parentIndex,target:t}]}}),{x:34,z:4,destinations:[{label:"Minigame",target:Nf[2]}]},{x:-14,z:-.5,destinations:[{label:"About GDU",target:Ls[4]}]},{x:-53,z:-18,destinations:[{label:"About GDU",target:Rn}]},{x:-107,z:-16,destinations:[{label:ic.title,target:zs},{label:"Domains",target:Ls[4]}]},{x:-108,z:-45,destinations:[{label:ic.title,target:zs}]},...Pf.map((r,e)=>({x:r.x+3.5,z:r.z+10,destinations:[{label:tc[e].title,target:r}]})),{x:3.5,z:qo.z+10,destinations:[...If.map((r,e)=>({label:Rf[e].title,target:r})),{label:"Domains",target:Cf}]},...Hc.map((r,e)=>{const t=r.x-Rn.x,n=r.z-Rn.z,i=Math.hypot(t,n),s=t/i,o=n/i;return{x:Rn.x+s*9-o*3.5,z:Rn.z+o*9+s*3.5,destinations:[{label:nc[e].title,target:r}]}})];function Xc(r,e,t=0){return Ff.some(n=>Math.hypot(r-n.x,e-n.z)<2.2+t)}function Qa(r){const e=new Ft,t=Oc(r);return t.position.sub(r.colliderOffset),e.add(t),e}const Xt=Lr;function ks(r,e,t=0){return Math.abs(r-Xt.x)<6+t&&e>Xt.z-14-t&&e<Xt.z+20+t}class Mw{group=new Ft;actors=[];constructor(e,t=!1,n={}){const i=new At({color:13346683,roughness:.7}),s=new At({color:4541267,roughness:.8}),o=new At({color:16447215,roughness:.55}),a=new At({color:12930365}),l=new At({color:3234956,roughness:.35}),c=n.lane?Qa(n.lane):new et(new tn(8,.02,24),i);c.position.set(Xt.x,n.lane?n.lane.colliderSize.y/2:0,Xt.z),c.receiveShadow=!0,this.group.add(c);const h=(p,x,m,g)=>{const v=new et(new tn(m,.6,g),s);v.position.set(p,.3,x),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v),e.world.addBody(new be({mass:0,shape:new xi(new E(m/2,.3,g/2)),position:new E(p,.3,x),material:e.obstacleMaterial}))};t&&(h(Xt.x-4.2,Xt.z,.4,24),h(Xt.x+4.2,Xt.z,.4,24),h(Xt.x,Xt.z-12.2,8.8,.4));const d=new et(new tn(8,.015,.15),a);d.position.set(Xt.x,.02,Xt.z+7),n.lane||this.group.add(d);const u=new tn(.55,1.5,.55),f=new tn(.56,.16,.56);for(let p=0;p<4;p++)for(let x=0;x<=p;x++){const m=n.pin?Qa(n.pin):new et(u,o);if(!n.pin){const g=new et(f,a);g.position.y=.4,m.add(g)}this.addActor(e,m,new xi(new E(.275,.75,.275)),2,Xt.x+(x-p/2)*1.15,.77,Xt.z-5-p*1.1)}this.addActor(e,n.ball?Qa(n.ball):new et(new Vr(.65,20,12),l),new RS(.65),18,Xt.x,.67,Xt.z+9),this.syncMeshes()}addActor(e,t,n,i,s,o,a){const l=new Ft;l.add(t),t.traverse(d=>{d.castShadow=!0,d.receiveShadow=!0});const c=new E(s,o,a),h=new be({mass:i,shape:n,position:c.clone(),material:e.obstacleMaterial,linearDamping:.08,angularDamping:.15});e.world.addBody(h),this.group.add(l),this.actors.push({root:l,body:h,spawn:c})}syncMeshes(){for(const{root:e,body:t}of this.actors)e.position.copy(t.position),e.quaternion.copy(t.quaternion)}reset(){for(const{body:e,spawn:t}of this.actors)e.position.copy(t),e.previousPosition.copy(t),e.interpolatedPosition.copy(t),e.quaternion.set(0,0,0,1),e.previousQuaternion.copy(e.quaternion),e.interpolatedQuaternion.copy(e.quaternion),e.velocity.setZero(),e.angularVelocity.setZero(),e.force.setZero(),e.torque.setZero(),e.aabbNeedsUpdate=!0,e.wakeUp();this.syncMeshes()}}const Ur={url:"/play/textures/grass_mask.png",size:420,threshold:20},Ki=Ur.size,Of=2*2e4,fd=Ur.threshold;async function Sw(r=Ur.url,e,t=Of){const n=await bw(r);return new Ew(n,e,t)}async function bw(r){const e=new Image;e.crossOrigin="anonymous",await new Promise((s,o)=>{e.onload=()=>s(),e.onerror=()=>o(new Error("Failed to load grass mask: "+r)),e.src=r});const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");if(!n)throw new Error("2D context unavailable");n.drawImage(e,0,0);const{data:i}=n.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:i}}function ww(r,e,t){const n=(e+Ki/2)/Ki,i=(t+Ki/2)/Ki;if(n<0||n>1||i<0||i>1)return 0;const s=Math.floor(n*r.width),a=(Math.floor(i*r.height)*r.width+s)*4;return r.data[a]??0}class Ew{mesh;uniforms;constructor(e,t,n=Of){const i=[];for(let f=0;f<e.width*e.height;f++)e.data[f*4]>fd&&i.push(f);const s=[];for(let f=0;f<n&&i.length>0;f++){const p=i[Math.floor(Math.random()*i.length)],x=((p%e.width+Math.random())/e.width-.5)*Ki,m=((Math.floor(p/e.width)+Math.random())/e.height-.5)*Ki;t?.(x,m)||ww(e,x,m)<=fd||s.push(x,m,Math.random()*Math.PI*2,Math.random())}const o=s.length/4,a=.23,l=.8,c=new In(a,l,1,1);c.translate(0,l/2,0);const h=new Dc;h.index=c.index,h.attributes.position=c.attributes.position,h.attributes.uv=c.attributes.uv,h.attributes.normal=c.attributes.normal;const d=new Float32Array(s);h.setAttribute("aOffset",new di(d,4)),h.instanceCount=o,h.boundingSphere=new hn(new N,Ki),this.uniforms={uTime:{value:0}};const u=new nn({uniforms:this.uniforms,vertexShader:Tw,fragmentShader:Aw,side:an});this.mesh=new et(h,u),this.mesh.frustumCulled=!1,console.log("[grass] placed %d blades (from %d candidates, %.1f%% survived)",o,n,n>0?o/n*100:0)}update(e){this.uniforms.uTime.value+=e*4}}const Tw=`
  uniform float uTime;

  attribute vec4 aOffset;

  varying float vHeight;
  varying float vVariation;

  void main() {
    vec2 localXZ = aOffset.xy;
    float yaw = aOffset.z;
    float variation = aOffset.w;
    vVariation = variation;

    // Height variation per blade.
    float height = 0.5 + variation * 0.9;

    // Taper: narrow at tip, full width at base. position.y is 0..1 up the blade.
    vec3 pos = position;
    float taper = 1.0 - position.y * 0.9;
    pos.x *= taper;
    pos.y *= height;

    // Rotate around Y.
    float c = cos(yaw);
    float s = sin(yaw);
    pos.xz = mat2(c, -s, s, c) * pos.xz;

    // Wind sway. Base stays planted; tip sways. Cheap sinusoid seeded by
    // world position so nearby blades sway similarly (looks like wind waves).
    vec2 worldXZ = localXZ + pos.xz;
    float windPhase = worldXZ.x * 0.3 + worldXZ.y * 0.3 + uTime * 1.2;
    float sway = sin(windPhase) * 0.15 + sin(windPhase * 2.3) * 0.05;
    float heightWeight = position.y * position.y;
    pos.x += sway * heightWeight;
    pos.z += sway * 0.5 * heightWeight;

    pos.xz += localXZ;

    vHeight = position.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,Aw=`
  varying float vHeight;
  varying float vVariation;

  void main() {
    vec3 base = vec3(0.20, 0.35, 0.10);
    vec3 tip  = vec3(0.55, 0.70, 0.25);
    vec3 col = mix(base, tip, vHeight);
    col *= 0.85 + vVariation * 0.3;
    gl_FragColor = vec4(col, 1.0);
  }
`;class Rw{group=new Ft;constructor(e,t=1800){const n=e.getAttribute("aOffset"),i=Math.min(Math.max(0,Math.floor(t)),n?.count??0);if(!i)return;const s=new Ps(new is(.015,.022,1,5),new At({color:5402947,roughness:1}),i),o=new Ps(new Cr(1,0),new At({color:16777215,roughness:.9,flatShading:!0}),i*5),a=new Ps(new Cr(.07,0),new At({color:16107611,roughness:.9}),i),l=new _t,c=[15309725,15649653,12165334,16772818].map(u=>new De(u));let h=8273;const d=()=>(h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296);for(let u=0;u<i;u++){const f=Math.floor(d()*n.count),p=n.getX(f),x=n.getY(f),m=.35+d()*.3,g=d()*Math.PI*2,v=c[Math.floor(d()*c.length)];l.position.set(p,m/2,x),l.rotation.set(0,0,0),l.scale.set(1,m,1),l.updateMatrix(),s.setMatrixAt(u,l.matrix);for(let M=0;M<5;M++){const _=g+M*Math.PI*2/5;l.position.set(p+Math.sin(_)*.105,m,x+Math.cos(_)*.105),l.rotation.set(0,_,0),l.scale.set(.075,.035,.13),l.updateMatrix(),o.setMatrixAt(u*5+M,l.matrix),o.setColorAt(u*5+M,v)}l.position.set(p,m+.025,x),l.scale.set(1,.6,1),l.updateMatrix(),a.setMatrixAt(u,l.matrix)}for(const u of[s,o,a])u.instanceMatrix.needsUpdate=!0,u.receiveShadow=!0,u.computeBoundingSphere(),this.group.add(u);o.instanceColor&&(o.instanceColor.needsUpdate=!0)}}class Cw{mesh;time={value:0};reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(e,t=48){const n=e.getAttribute("aOffset"),i=n?.count?Math.max(0,Math.floor(t)):0,s=[],o=[],a=(v,M,_,w)=>{s.push(...v,...M,..._),o.push(w,w,w)},l=[[0,-.17],[.23,-.32],[.39,-.23],[.36,-.03],[.21,.03],[.28,.19],[.15,.29],[0,.14]];for(const v of[-1,1])for(let M=0;M<l.length;M++){const _=l[M],w=l[(M+1)%l.length];a([0,0,0],[v*_[0],0,_[1]],[v*w[0],0,w[1]],1)}a([-.023,.012,-.24],[.023,.012,-.24],[.023,.012,.23],0),a([-.023,.012,-.24],[.023,.012,.23],[-.023,.012,.23],0);const c=new Dc;c.setAttribute("position",new gt(s,3)),c.setAttribute("aWing",new gt(o,1));const h=new Float32Array(i*3),d=new Float32Array(i*4),u=new Float32Array(i*3),f=[16764544,15381189,12106473,16772547].map(v=>new De(v)),p=new Qt;let x=73819;const m=()=>(x=Math.imul(x,1664525)+1013904223>>>0,x/4294967296);for(let v=0;v<i;v++){const M=Math.floor(m()*n.count),_=n.getX(M),w=n.getY(M),b=1.4+m()*1.6;h.set([_,b,w],v*3),d.set([m(),m(),m(),m()],v*4),f[Math.floor(m()*f.length)].toArray(u,v*3),p.expandByPoint(new N(_,b,w))}c.setAttribute("aHome",new di(h,3)),c.setAttribute("aSeed",new di(d,4)),c.setAttribute("aTint",new di(u,3)),c.instanceCount=i,i&&(p.expandByScalar(3),c.boundingSphere=p.getBoundingSphere(new hn));const g=new nn({uniforms:{...Ic.clone(ge.fog),uTime:this.time},vertexShader:Pw,fragmentShader:Iw,side:an,fog:!0});this.mesh=new et(c,g),this.mesh.visible=i>0}update(e){this.reducedMotion||(this.time.value+=Math.max(0,Math.min(e,.1)))}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const Pw=`
  #include <common>
  #include <fog_pars_vertex>
  uniform float uTime;
  attribute float aWing;
  attribute vec3 aHome;
  attribute vec4 aSeed;
  attribute vec3 aTint;
  varying vec3 vTint;
  varying float vWing;
  varying float vEdge;
  void main() {
    float phase = aSeed.x * 6.283185*2.;
    float speed = 1.5 + aSeed.y * 0.25;
    float orbit = uTime * speed + phase;
    float flap = sin(uTime * (15.0 + aSeed.z * 9.0) + phase) * 0.95;
    vec3 p = position;
    p.x = position.x * cos(flap);
    p.y += abs(position.x) * sin(flap) * aWing;
    p *= 0.65 + aSeed.w * 0.45;
    // Face along the flight orbit, rather than toward the camera.
    float yaw = -orbit;
    p.xz = mat2(cos(yaw), -sin(yaw), sin(yaw), cos(yaw)) * p.xz;
    p += aHome + vec3(cos(orbit) * 1.4,
      sin(orbit * 2.0 + phase) * 0.25, sin(orbit) * 1.4);
    vTint = aTint;
    vWing = aWing;
    vEdge = abs(position.x) / 0.39;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,Iw=`
  #include <common>
  #include <fog_pars_fragment>
  varying vec3 vTint;
  varying float vWing;
  varying float vEdge;
  void main() {
    vec3 wing = vTint * mix(0.65, 1.0, smoothstep(0.0, 0.35, vEdge));
    wing *= 1.0 - smoothstep(0.75, 1.0, vEdge) * 0.32;
    gl_FragColor = vec4(mix(vec3(0.10, 0.065, 0.045), wing, vWing), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`,Lw=5,Co=10;class Nw{mesh;time={value:0};reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(e,t=20){const n=e.water.position.y;let i=94827;const s=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),o=[],a=[],l=new Qt;for(let u=0;u<t*200&&o.length/3<t;u++){const f=s()*Math.PI*2,p=65+s()*40,x=Math.cos(f)*p,m=Math.sin(f)*p;let g=!0;for(let v=-Co;v<=Co&&g;v+=2)for(let M=-Co;M<=Co;M+=2)if(e.getHeight(x+v,m+M)>n-3){g=!1;break}g&&(o.push(x,n,m),a.push(s(),s(),s(),s()),l.expandByPoint(new N(x,n,m)))}const c=Dw(),h=new Dc;h.setAttribute("position",c.getAttribute("position")),h.setAttribute("color",c.getAttribute("color")),h.setAttribute("aHome",new di(new Float32Array(o),3)),h.setAttribute("aSeed",new di(new Float32Array(a),4)),h.instanceCount=o.length/3,o.length&&(h.boundingSphere=l.expandByScalar(10).getBoundingSphere(new hn));const d=new nn({uniforms:{...Ic.clone(ge.fog),uTime:this.time,uOrbitRadius:{value:Lw},uReducedMotion:{value:this.reducedMotion?1:0}},vertexShader:Uw,fragmentShader:Fw,vertexColors:!0,side:an,fog:!0});this.mesh=new et(h,d),this.mesh.visible=o.length>0}update(e){this.reducedMotion||(this.time.value+=Math.max(0,Math.min(e,.1)))}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function Dw(){const r=[],e=(s,o)=>{const a=s.index?s.toNonIndexed():s;a!==s&&s.dispose(),a.deleteAttribute("normal"),a.deleteAttribute("uv");const l=new De(o),c=new Float32Array(a.getAttribute("position").count*3);for(let h=0;h<c.length;h+=3)l.toArray(c,h);a.setAttribute("color",new Wt(c,3)),r.push(a)},t=(s,o,a,l,c,h,d)=>{const u=new Vr(1,10,6);u.scale(l,c,h),u.translate(s,o,a),e(u,d)};t(0,0,0,.34,.36,1.05,7837604),t(0,-.12,-1.02,.14,.12,.43,9086895),t(0,-.03,.97,.13,.14,.48,6850195);for(const s of[-1,1])t(s*.23,.085,-.66,.035,.035,.035,1517615);const n=new Ot;n.setAttribute("position",new gt([0,.24,-.2,0,.94,.12,0,.24,.56,-.2,-.1,-.42,-.83,-.28,.18,-.22,-.18,.28,.2,-.1,-.42,.22,-.18,.28,.83,-.28,.18,0,0,1.2,-.68,.04,1.65,-.1,0,1.57,0,0,1.2,.1,0,1.57,.68,.04,1.65],3)),e(n,6193038);const i=Xy(r);for(const s of r)s.dispose();return i}const Uw=`
  #include <common>
  #include <fog_pars_vertex>
  uniform float uTime;
  uniform float uOrbitRadius;
  uniform float uReducedMotion;
  attribute vec3 aHome;
  attribute vec4 aSeed;
  varying vec3 vTint;
  varying vec3 vWorldPosition;
  void main() {
    float phase = aSeed.x * 6.283185;
    float speed = 0.24 + aSeed.y * 0.12;
    float orbit = uTime * speed + phase;
    float cycleSpeed = 0.65 + aSeed.z * 0.2;
    float cycle = uTime * cycleSpeed + phase;
    float wave = max(sin(cycle), 0.0);
    float rise = 3.4 * pow(wave, 4.0);
    float verticalSpeed = 13.6 * pow(wave, 3.0) * cos(cycle) * cycleSpeed;
    float pitch = atan(verticalSpeed, uOrbitRadius * speed) * 0.7;
    vec3 p = position;
    p.y += sin(uTime * 7.0 + phase) * smoothstep(0.3, 1.65, p.z) * 0.16;
    p *= 0.85 + aSeed.w * 0.3;
    if (uReducedMotion > 0.5) { rise = 0.6; pitch = 0.0; }
    float py = p.y * cos(pitch) - p.z * sin(pitch);
    p.z = p.y * sin(pitch) + p.z * cos(pitch);
    p.y = py;
    // Local -Z faces along the circular route's tangent.
    float yaw = 3.141593 - orbit;
    float px = p.x * cos(yaw) + p.z * sin(yaw);
    p.z = -p.x * sin(yaw) + p.z * cos(yaw);
    p.x = px;
    p += aHome + vec3(cos(orbit) * uOrbitRadius, -0.75 + rise, sin(orbit) * uOrbitRadius);
    vTint = color * mix(1.12, 0.88, smoothstep(-0.3, 0.3, position.y));
    vWorldPosition = (modelMatrix * vec4(p, 1.0)).xyz;
    vec4 mvPosition = viewMatrix * vec4(vWorldPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,Fw=`
  #include <common>
  #include <fog_pars_fragment>
  varying vec3 vTint;
  varying vec3 vWorldPosition;
  void main() {
    vec3 normal = normalize(cross(dFdx(vWorldPosition), dFdy(vWorldPosition)));
    normal *= gl_FrontFacing ? 1.0 : -1.0;
    float light = 0.65 + 0.35 * max(dot(normal, normalize(vec3(0.4, 0.9, 0.3))), 0.0);
    gl_FragColor = vec4(vTint * light, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;class Ow{mesh;constructor(e,t,n=120){const i=new Cr(1,0),s=new At({color:16777215,roughness:1,metalness:0,flatShading:!0});this.mesh=new Ps(i,s,n);const o=new _t,a=[9537657,11182220,7961715,11969676].map(d=>new De(d));let l=41621;const c=()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296);let h=0;for(let d=0;d<n*30&&h<n;d++){const u=(c()-.5)*110,f=(c()-.5)*110;if(Uf(u,f,.6)||Xc(u,f)||ks(u,f,1)||!e.isFlatLand(u,f,.6)||t.some(x=>Math.hypot(u-x.position.x,f-x.position.z)<x.radius+1))continue;const p=.12+c()*.22;o.scale.set(p*(1+c()*.5),p*(.4+c()*.4),p),o.rotation.set(0,c()*Math.PI*2,0),o.position.set(u,e.getHeight(u,f)+o.scale.y*.55,f),o.updateMatrix(),this.mesh.setMatrixAt(h,o.matrix),this.mesh.setColorAt(h,a[Math.floor(c()*a.length)]),h++}this.mesh.count=h,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.mesh.receiveShadow=!0,this.mesh.computeBoundingSphere()}}class Bw{state={throttle:0,steer:0,brake:!1};active=new Set;resetRequested=!1;constructor(){window.addEventListener("keydown",this.onKeyDown,{passive:!1}),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",()=>this.active.clear()),this.setupTouchControls()}update(){let e=0,t=0;this.active.has("forward")&&(e+=1),this.active.has("reverse")&&(e-=1),this.active.has("left")&&(t-=1),this.active.has("right")&&(t+=1),this.state.throttle=e,this.state.steer=t,this.state.brake=this.active.has("brake")}consumeReset(){const e=this.resetRequested;return this.resetRequested=!1,e}onKeyDown=e=>{if(e.target instanceof HTMLElement&&(e.target.closest("input, textarea, select, [contenteditable='true']")||e.target.closest("button")&&(e.key===" "||e.key==="Enter")))return;const t=this.mapKey(e.key);if(t){this.active.add(t),e.preventDefault();return}(e.key==="r"||e.key==="R")&&(this.resetRequested=!0)};onKeyUp=e=>{const t=this.mapKey(e.key);t&&this.active.delete(t)};mapKey(e){switch(e.toLowerCase()){case"w":case"arrowup":return"forward";case"s":case"arrowdown":return"reverse";case"a":case"arrowleft":return"left";case"d":case"arrowright":return"right";case" ":case"shift":return"brake";default:return null}}setupTouchControls(){if(!(typeof window.matchMedia=="function"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window)))return;const t=document.createElement("div");t.className="touch-controls",t.innerHTML=`
      <div class="pad left">
        <button type="button" data-vkey="left" aria-label="Steer left">&#9664;</button>
        <button type="button" data-vkey="right" aria-label="Steer right">&#9654;</button>
      </div>
      <div class="pad right">
        <button type="button" data-vkey="reverse" aria-label="Reverse">&#9660;</button>
        <button type="button" data-vkey="forward" aria-label="Accelerate">&#9650;</button>
      </div>
    `,document.body.appendChild(t),t.querySelectorAll("button[data-vkey]").forEach(i=>this.wireTouchButton(i))}wireTouchButton(e){const t=e.dataset.vkey;if(!t)return;const n=s=>{s.preventDefault(),e.setPointerCapture(s.pointerId),e.classList.add("active"),this.active.add(t)},i=s=>{s.preventDefault(),e.hasPointerCapture(s.pointerId)&&e.releasePointerCapture(s.pointerId),e.classList.remove("active"),this.active.delete(t)};e.addEventListener("pointerdown",n),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("pointerleave",s=>{e.classList.contains("active")&&i(s)}),e.addEventListener("contextmenu",s=>s.preventDefault())}}const zw={car:{model:"/play/models/car.glb",scale:1.2,rotation:{y:Math.PI},visualOffset:{y:-.3},collider:{size:{x:2.5,y:.6,z:4}}},bowling_pin:{model:"/play/models/pin.glb",scale:.8},bowling_ball:{model:"/play/models/ball.glb",scale:.7}},pd=[{title:"Coding",description:"The Coding Domain focuses on the technical and interactive side of game development. We use game engines like Unity, Unreal Engine, and Godot to turn ideas into playable experiences, working on gameplay mechanics, systems, player interactions, and game logic. Through hands-on projects, game jams (hackathons), and workshops, members learn how to build, test, and polish games while developing their programming and problem-solving skills."},{title:"Artificial Intelligence",description:"The Artificial Intelligence Domain covers pathfinding, decision-making architectures, behavior trees, and procedural generation. It explores agent behavior and algorithmic systems within software environments."},{title:"Web Development",description:"The Web Development Domain focuses on building interactive, engaging, and user-friendly web experiences, especially for games and the gaming community. We explore modern web technologies to create game websites, landing pages, portfolios, leaderboards, and other interactive experiences. Through hands-on projects and workshops, members learn about frontend development, UI/UX, backend systems, APIs, and deployment, turning creative ideas into functional web experiences."},{title:"Content",description:`The Content Team is the voice of GDU
We build stories and visuals to showcase our clubs incredible creations`},{title:"Marketing",description:"The Marketing Domain deals with audience communication, public relations, product visibility, and social analytics. It examines strategy, campaign structuring, and community engagement principles."},{title:"Design",description:"The Design Domain focuses on the creative and visual side of game development and digital art. We explore 2D and 3D tools to create game-ready assets, environments, characters, and props, while also working on visual projects such as renders, short films, shaders, and other forms of digital art. Through hands-on projects and workshops, members learn the complete process of creating and presenting assets for games as well as standalone visual experiences."},{title:"Research and Development",description:"The Research and Development Domain represents physics simulation, experimental prototyping, performance profiling, tech pipeline investigation including emerging virtual interface technologies and much more!"}],kw=xw.map((r,e)=>({position:{x:r.x,z:r.z},radius:uw,facing:r.facing,text:pd[e].title,panel:{...pd[e],details:["Return to the centre to explore another domain."]}})),Vw=Pf.map((r,e)=>({position:r,radius:pw,markerRadius:3.5,text:tc[e].title,panel:tc[e]})),Gw=Hc.map((r,e)=>({position:r,radius:mw,text:nc[e].title,panel:nc[e]})),Fr=[...kw,...Vw,...Gw,{position:{x:zs.x,z:zs.z},radius:8,text:"Glitched",panel:ic}],Bf=If.map((r,e)=>({position:{x:r.x,z:r.z},facing:r.facing,content:Rf[e]}));class Hw{world;groundMaterial=new $i("ground");carMaterial=new $i("car");obstacleMaterial=new $i("obstacle");fixedStep=1/60;maxSubSteps=4;accumulator=0;constructor(){this.world=new nw({gravity:new E(0,-20,0)}),this.world.broadphase=new Es(this.world),this.world.allowSleep=!0,this.world.solver.iterations=20,this.world.addContactMaterial(new Zi(this.carMaterial,this.groundMaterial,{friction:0,restitution:0})),this.world.addContactMaterial(new Zi(this.carMaterial,this.obstacleMaterial,{friction:.08,restitution:0})),this.world.addContactMaterial(new Zi(this.obstacleMaterial,this.groundMaterial,{friction:.5,restitution:0}))}step(e,t,n){this.accumulator+=Math.max(0,Math.min(e,this.fixedStep*this.maxSubSteps));let i=0;for(;this.accumulator+1e-10>=this.fixedStep&&i<this.maxSubSteps;)t?.(this.fixedStep),this.world.step(this.fixedStep),n?.(),this.accumulator=Math.max(0,this.accumulator-this.fixedStep),i++;return this.accumulator/this.fixedStep}}const Ww=14864042,Xw=.42;function qw(r){const e=new At({map:r,vertexColors:!0,roughness:1,metalness:0}),t={value:!1},n=new Lc().load(Ur.url,()=>{t.value=!0},void 0,i=>console.warn("[terrain] Mask unavailable; keeping the grass texture.",i));return n.flipY=!1,n.colorSpace=li,n.magFilter=Ut,n.minFilter=Hn,n.generateMipmaps=!0,n.wrapS=n.wrapT=Cn,e.onBeforeCompile=i=>{i.uniforms.uGroundMask={value:n},i.uniforms.uGroundMaskReady=t,i.uniforms.uGroundMaskSize={value:Ur.size},i.uniforms.uPathColor={value:new De(Ww)},i.uniforms.uPathBlend={value:Xw},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        varying vec2 vGroundXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vGroundXZ = (modelMatrix * vec4(position, 1.0)).xz;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vGroundXZ;
        uniform sampler2D uGroundMask;
        uniform bool uGroundMaskReady;
        uniform float uGroundMaskSize;
        uniform vec3 uPathColor;
        uniform float uPathBlend;`).replace("#include <map_fragment>",`#include <map_fragment>
        if (uGroundMaskReady) {
          vec2 maskUV = vGroundXZ / uGroundMaskSize + 0.5;
          float grassCoverage = 0.0;
          if (all(greaterThanEqual(maskUV, vec2(0.0))) && all(lessThan(maskUV, vec2(1.0)))) {
            // Gray mask edges blend continuously; blade placement still
            // uses the separate threshold in Grass.ts.
            grassCoverage = texture2D(uGroundMask, maskUV).r;
          }
          // Retain a little of the tiled grass texture as ground detail.
          // Pixels outside the mask are bare ground, not repeated mask tiles.
          diffuseColor.rgb = mix(diffuseColor.rgb, uPathColor, (1.0 - grassCoverage) * uPathBlend);
        }`)},e.customProgramCacheKey=()=>"masked-ground-soft-v2",e.addEventListener("dispose",()=>n.dispose()),e}const md=-1.8,Ts=420,ai=210,sc=Ts/ai,Ci=Ts/2;function zf(r,e){const t=Math.hypot(r,e),n=Math.atan2(e,r),i=Math.hypot((r-Lr.x)/ja.radiusX,(e-Lr.z)/ja.radiusZ),s=Math.min((t-_w(n))/10,(i-1)*ja.radiusX/8,(Df(r,e)-dd/2)/6,...Nr.map(a=>(Math.hypot(r-a.x,e-a.z)-a.radius)/8),...Wc.map(a=>(Dr(r,e,a)-dd/2)/6),...fw.map(a=>(Math.hypot(r-a.x,e-a.z)-a.radius)/6),...Lf.map(a=>(Dr(r,e,a.points)-a.width/2)/4)),o=zr.clamp(s,0,1);return-8*o*o*(3-2*o)}const Yw=Array.from({length:ai+1},(r,e)=>Array.from({length:ai+1},(t,n)=>zf(-Ci+e*sc,Ci-n*sc)));class Kw{mesh;water;body;field=new CS(Yw,{elementSize:sc});constructor(e){const t=new In(Ts,Ts,ai,ai),n=[];for(let c=0;c<ai;c++)for(let h=0;h<ai;h++){const d=c*(ai+1)+h,u=d+ai+1;n.push(d,u,u+1,d,u+1,d+1)}t.setIndex(n);const i=t.getAttribute("position");for(let c=0;c<i.count;c++)i.setZ(c,zf(i.getX(c),-i.getY(c)));t.rotateX(-Math.PI/2),t.computeVertexNormals();const s=new Lc().load("/play/textures/grass.jpg");s.wrapS=s.wrapT=ji,s.repeat.set(Ts/4,Ts/4),s.colorSpace=Pt,s.anisotropy=8;const o=new Float32Array(i.count*3),a=new De(14139018),l=new De;for(let c=0;c<i.count;c++)l.set(16777215).lerp(a,zr.smoothstep(-i.getY(c),.1,1.3)),l.toArray(o,c*3);t.setAttribute("color",new Wt(o,3)),this.mesh=new et(t,qw(s)),this.mesh.receiveShadow=!0,this.body=new be({mass:0,material:e,shape:this.field}),this.body.position.set(-Ci,0,Ci),this.body.quaternion.setFromEuler(-Math.PI/2,0,0),this.water=new et(new In(2e3,2e3),new At({color:4427434,roughness:.4,metalness:0})),this.water.rotation.x=-Math.PI/2,this.water.position.y=md}getHeight(e,t){return Math.abs(e)>=Ci||Math.abs(t)>=Ci?-8:this.field.getHeightAt(e+Ci,Ci-t,!0)}isSafeForCar(e,t){return this.getHeight(e,t)>md+.25}isFlatLand(e,t,n=0){return[[e-n,t-n],[e+n,t-n],[e-n,t+n],[e+n,t+n]].every(([i,s])=>this.getHeight(i,s)>-.001)}}function Zw(r,e=-.25){const t=r.getAttribute("position"),n=r.getIndex();if(!n)throw new Error("Fence perimeter requires indexed terrain.");const i=new Map,s=c=>`${c.x.toFixed(5)},${c.z.toFixed(5)}`,o=[new N,new N,new N];for(let c=0;c<n.count;c+=3){for(let x=0;x<3;x++)o[x].fromBufferAttribute(t,n.getX(c+x));const h=[];for(let x=0;x<3;x++){const m=o[x],g=o[(x+1)%3];m.y>e!=g.y>e&&h.push(m.clone().lerp(g,(e-m.y)/(g.y-m.y)))}if(h.length!==2)continue;const d=h[0],u=h[1],f=s(d),p=s(u);f!==p&&(i.has(f)||i.set(f,{point:d,neighbours:new Set}),i.has(p)||i.set(p,{point:u,neighbours:new Set}),i.get(f).neighbours.add(p),i.get(p).neighbours.add(f))}const a=new Set,l=[];for(const c of i.keys()){if(a.has(c))continue;const h=[];let d=c,u="";do{if(a.has(d))throw new Error("Fence contour is not a closed loop.");a.add(d);const f=i.get(d);if(f.neighbours.size!==2)throw new Error("Fence contour meets the terrain edge.");h.push(f.point);const p=[...f.neighbours].find(x=>x!==u);u=d,d=p}while(d!==c);l.push($w(h,2.4))}return l}function $w(r,e){const t=r.map((l,c)=>l.distanceTo(r[(c+1)%r.length])),n=t.reduce((l,c)=>l+c,0),i=Math.max(3,Math.ceil(n/e)),s=[];let o=0,a=0;for(let l=0;l<i;l++){const c=l*n/i;for(;o<t.length-1&&a+t[o]<c;)a+=t[o++];s.push(r[o].clone().lerp(r[(o+1)%r.length],(c-a)/t[o]))}return s}const cr=1.75,gd=.28,Jw=4;class jw{group=new Ft;constructor(e,t){const n=Zw(e.mesh.geometry),i=[],s=[],o=[],a=new _t,l=new N(1,0,0),c=new N;for(const u of n){for(const p of u)p.y=e.getHeight(p.x,p.z);let f;for(let p=0;p<u.length;p++){const x=u[p],m=u[(p+1)%u.length],g=m.x-x.x,v=m.z-x.z,M=Math.hypot(g,v),_=-Math.atan2(v,g);a.rotation.set(0,_,0),a.position.set(x.x,x.y+cr/2,x.z),a.scale.set(.2,cr,.2),a.updateMatrix(),i.push(a.matrix.clone()),a.position.y=x.y+cr+.075,a.rotation.y=_+Math.PI/4,a.scale.set(1,1,1),a.updateMatrix(),o.push(a.matrix.clone()),c.subVectors(m,x),a.quaternion.setFromUnitVectors(l,c.clone().normalize());for(const y of[.36,.86])a.position.copy(x).lerp(m,.5),a.position.y+=y,a.scale.set(c.length()+.06,.1,.1),a.updateMatrix(),i.push(a.matrix.clone());const w=Math.max(1,Math.round(M/.34));for(let y=0;y<w;y++)a.position.copy(x).lerp(m,(y+.5)/w),a.position.y=e.getHeight(a.position.x,a.position.z)+.08,a.rotation.set(0,_,0),a.scale.set(1,1,1),a.updateMatrix(),s.push(a.matrix.clone());p%Jw===0&&(f=new be({mass:0,material:t.obstacleMaterial,position:new E(x.x,x.y,x.z)}),t.world.addBody(f));const b=cr+Math.abs(m.y-x.y)+.12,R=new It;R.setFromEuler(0,_,0),f.addShape(new xi(new E((M+gd)/2,b/2,gd/2)),new E((x.x+m.x)/2-f.position.x,(x.y+m.y)/2+cr/2-f.position.y,(x.z+m.z)/2-f.position.z),R)}}const h=new Gs;h.moveTo(-.075,0),h.lineTo(.075,0),h.lineTo(.075,.95),h.lineTo(0,1.07),h.lineTo(-.075,.95),h.closePath();const d=new kr(h,{depth:.07,bevelEnabled:!1,steps:1});d.translate(0,0,-.035),this.addBatch(new tn(1,1,1),10849128,i),this.addBatch(d,15655624,s),this.addBatch(new Tc(.18,.15,4),15655624,o)}addBatch(e,t,n){const i=new At({color:t,roughness:.9,metalness:0}),s=new Ps(e,i,n.length);n.forEach((o,a)=>s.setMatrixAt(a,o)),s.instanceMatrix.needsUpdate=!0,s.receiveShadow=!0,s.computeBoundingSphere(),this.group.add(s)}}const Qw='"Baloo 2 Variable", system-ui, sans-serif';function Vs(r,e=500){return`${e} ${r}px ${Qw}`}async function eE(r){try{await Promise.all([400,500,600,700,800].map(e=>document.fonts.load(Vs(32,e),r)))}catch(e){console.warn("[font] Game font unavailable; using the system fallback.",e)}}class tE{group=new Ft;def;textMesh;ringMesh;textMaterial;ringMaterial;progress=0;constructor(e){this.def=e,this.group.position.set(e.position.x,0,e.position.z),this.group.rotation.y=e.facing??0,this.ringMaterial=new xn({color:0,depthWrite:!1}),this.ringMesh=new et(new Pc((e.markerRadius??e.radius)*.94,e.markerRadius??e.radius,64),this.ringMaterial),this.ringMesh.rotation.x=-Math.PI/2,this.ringMesh.position.y=.02,this.ringMesh.renderOrder=1,this.group.add(this.ringMesh);const t=nE(e.text,e.color??"#000000"),n=t.image.width/t.image.height,i=e.markerRadius??e.radius,s=Math.min(i*.7,3),o=Math.min(s,i*1.3/n),a=o*n;this.textMaterial=new xn({map:t,transparent:!0,opacity:0,depthWrite:!1}),this.textMesh=new et(new In(a,o),this.textMaterial),this.textMesh.rotation.x=-Math.PI/2,this.textMesh.position.y=.03,this.textMesh.renderOrder=2,this.textMesh.scale.setScalar(.7),this.group.add(this.textMesh)}update(e,t){const n=t.x-this.def.position.x,i=t.z-this.def.position.z,s=Math.sqrt(n*n+i*i),o=iE(1-s/this.def.radius),a=1-Math.exp(-e/.18);this.progress+=(o-this.progress)*a;const l=this.progress,c=l*l*(3-2*l);this.textMaterial.opacity=c,this.textMesh.scale.setScalar(.7+.3*c),this.textMesh.position.y=.03+c*.06,this.ringMaterial.opacity=.15+l*.55,this.ringMesh.scale.setScalar(1+l*.04)}}function nE(r,e){const o=r.split(`
`),a=Vs(128,700),l=document.createElement("canvas").getContext("2d");l.font=a;const c=Math.max(...o.map(p=>l.measureText(p).width)),h=document.createElement("canvas");h.width=Math.ceil((c+80)*2),h.height=Math.ceil((153.6*o.length+80)*2);const d=h.getContext("2d");d.scale(2,2),d.font=a,d.fillStyle=e,d.textAlign="center",d.textBaseline="middle",d.shadowColor="rgba(0, 0, 0, 0.55)",d.shadowBlur=8,d.shadowOffsetY=3;const u=h.width/2;for(let p=0;p<o.length;p++){const x=116.8+p*153.6;d.fillText(o[p],u/2,x)}const f=new Ec(h);return f.colorSpace=Pt,f.anisotropy=8,f.needsUpdate=!0,f}function iE(r){return r<0?0:r>1?1:r}class sE{group=new Ft;boards=[];reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(e){for(const t of e){const n=Math.min(8,t.radius*1.15),i=n*.76,s=kf(t),o=new et(new In(n,i),new xn({map:s,toneMapped:!1,transparent:!0,depthWrite:!1,opacity:0}));o.position.set(t.position.x,i/2+.1,t.position.z),o.visible=!1,this.group.add(o),this.boards.push({def:t,panel:o,progress:0,inside:!1})}}update(e,t,n=t){for(const i of this.boards){const s=Math.hypot(t.x-i.def.position.x,t.z-i.def.position.z);i.inside=s<=i.def.radius+(i.inside?.8:0);const o=i.inside?1:0,a=Math.max(0,e)/.65;i.progress=this.reducedMotion?o:zr.clamp(i.progress+(i.inside?a:-a),0,1);const l=i.progress*i.progress*(3-2*i.progress),c=i.panel;c.position.y=c.geometry.parameters.height/2+.1+l*1.5,c.material.opacity=l,c.visible=i.progress>0;const h=n.x-c.position.x,d=n.z-c.position.z;h*h+d*d>1e-4&&(c.rotation.y=Math.atan2(h,d))}}}function kf(r){const e=document.createElement("canvas");e.width=1e3,e.height=760;const t=e.getContext("2d"),n=r.panel,i=n?.title??r.text.replaceAll(`
`," "),s=n?.description??"Take a moment to explore this area.",o=n?.details??[],a=f=>f.split(`
`).flatMap(p=>{const x=[];let m="";for(const g of p.split(/\s+/)){const v=m?`${m} ${g}`:g;m&&t.measureText(v).width>824?(x.push(m),m=g):m=v}return x.push(m),x});let l=48,c=[];for(;l>=12;l--){c=[];const f=(p,x,m,g,v=500)=>{t.font=Vs(x,v);for(const M of a(p))c.push({text:M,size:x,color:m,gap:0,weight:v});c[c.length-1].gap=g};f(i,l*1.5,"#fff0c9",32,800),f(s,l,"#ffedce",26);for(const p of o)f(p,l*.95,"#f4dcb3",16);if(c.reduce((p,x)=>p+x.size*1.3+x.gap,0)<=584)break}t.fillStyle="#50311f",t.beginPath(),t.roundRect(8,8,984,744,22),t.fill(),t.save(),t.beginPath(),t.roundRect(24,24,952,708,14),t.clip();const h=t.createLinearGradient(0,24,0,732);h.addColorStop(0,"#996a40"),h.addColorStop(.45,"#805330"),h.addColorStop(1,"#674128"),t.fillStyle=h,t.fillRect(24,24,952,708),t.lineWidth=2;for(let f=0;f<64;f++){const p=28+f*11;t.strokeStyle=f%3?"rgba(40, 20, 8, 0.09)":"rgba(255, 211, 145, 0.1)",t.beginPath(),t.moveTo(24,p),t.bezierCurveTo(270,p+Math.sin(f*2)*12,690,p+Math.cos(f)*9,976,p+3),t.stroke()}for(const f of[260,496])t.fillStyle="rgba(36, 18, 8, 0.24)",t.fillRect(24,f,952,3),t.fillStyle="rgba(255, 220, 163, 0.12)",t.fillRect(24,f+3,952,2);t.restore(),t.strokeStyle="#c09058",t.lineWidth=3,t.beginPath(),t.moveTo(30,26),t.lineTo(970,26),t.stroke();for(const f of[48,952])for(const p of[48,712])t.fillStyle="#47392a",t.beginPath(),t.arc(f,p,7,0,Math.PI*2),t.fill(),t.fillStyle="#c0a477",t.beginPath(),t.arc(f-1,p-2,3,0,Math.PI*2),t.fill();t.textBaseline="top",t.shadowColor="rgba(30, 14, 5, 0.7)",t.shadowBlur=2,t.shadowOffsetY=2;let d=84;for(const f of c)t.font=Vs(f.size,f.weight),t.fillStyle=f.color,t.fillText(f.text,88,d,824),d+=f.size*1.3+f.gap;const u=new Ec(e);return u.colorSpace=Pt,u}class rE{group=new Ft;constructor(e,t,n){const i=new At({color:9527870,roughness:.95}),s=new is(.11,.14,1,6),o=new Gs;o.moveTo(-1.8,-.3),o.lineTo(1.25,-.3),o.lineTo(1.8,0),o.lineTo(1.25,.3),o.lineTo(-1.8,.3),o.closePath();const a=new kr(o,{depth:.12,bevelEnabled:!1});a.translate(0,0,-.06);const l=new In(2.7,.46),c=new Map;for(const h of Ff){const d=e.getHeight(h.x,h.z),u=2.25+(h.destinations.length-1)*.72,f=new et(s,i);f.position.set(h.x,d+u/2,h.z),f.scale.y=u,f.receiveShadow=!0,this.group.add(f),t.world.addBody(new be({mass:0,material:t.obstacleMaterial,shape:new Vc(.14,.14,u,8),position:new E(h.x,d+u/2,h.z)})),h.destinations.forEach((p,x)=>{const m=p.domainIndex===void 0?void 0:n[p.domainIndex],g=p.label??m?.panel?.title??m?.text.replaceAll(`
`," ")??"Domain";let v=c.get(g);if(!v){const b=document.createElement("canvas");b.width=768,b.height=128;const R=b.getContext("2d");R.fillStyle="#fff0ce",R.textAlign="center",R.textBaseline="alphabetic";let y=80;R.font=Vs(y,700);let A=R.measureText(g);for(;(A.width>688||A.actualBoundingBoxAscent+A.actualBoundingBoxDescent>88)&&y>12;)R.font=Vs(--y,700),A=R.measureText(g);const C=64+(A.actualBoundingBoxAscent-A.actualBoundingBoxDescent)/2;R.fillText(g,384,C,688);const I=new Ec(b);I.colorSpace=Pt,v=new xn({map:I,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),c.set(g,v)}const M=new et(a,i);M.position.set(h.x,d+1.85+x*.72,h.z),M.rotation.y=-Math.atan2(p.target.z-h.z,p.target.x-h.x),M.receiveShadow=!0;const _=new et(l,v);_.position.set(-.275,0,.165);const w=_.clone();w.position.z=-.165,w.rotation.y=Math.PI,M.add(_,w),this.group.add(M)})}}}class oE{scene=new fm;terrain;dynamicPairs=[];zones=[];zonePanel;sun;sunOffset=new N(30,50,20);constructor(e,t=[],n=[],i=!1){this.scene.background=new De(15987439),this.scene.fog=new _c(14260844,50,120);const s=new Pg(15987439,16755561,1.7);this.scene.add(s),this.sun=new $l(16773590,.6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.radius=3;const o=100;this.sun.shadow.camera.left=-o,this.sun.shadow.camera.right=o,this.sun.shadow.camera.top=o,this.sun.shadow.camera.bottom=-o,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=300,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun),this.scene.add(this.sun.target);const a=new $l(16777215,.35);a.position.set(-this.sunOffset.x,this.sunOffset.y*.6,-this.sunOffset.z),this.scene.add(a),this.terrain=new Kw(e.groundMaterial),this.scene.add(this.terrain.mesh,this.terrain.water),e.world.addBody(this.terrain.body);const l=new jw(this.terrain,e);this.scene.add(l.group),i&&this.buildObstacles(e,t),this.buildZones(n),this.zonePanel=new sE(n),this.scene.add(this.zonePanel.group),this.scene.add(new rE(this.terrain,e,n).group)}updateZones(e,t,n=t){for(const i of this.zones)i.update(e,t);this.zonePanel.update(e,t,n)}focusOn(e){this.sun.target.position.copy(e),this.sun.position.copy(e).add(this.sunOffset)}syncMeshes(){const e=new yn,t=new N;for(const{mesh:n,body:i,visualOffset:s}of this.dynamicPairs)e.set(i.quaternion.x,i.quaternion.y,i.quaternion.z,i.quaternion.w),t.copy(s).applyQuaternion(e),n.position.set(i.position.x+t.x,i.position.y+t.y,i.position.z+t.z),n.quaternion.copy(e)}buildObstacles(e,t){const n=aE(1337),i=new At({color:16777215,roughness:.6,metalness:.05});for(let s=0;s<60;s++){const o=n()*Math.PI*2,a=12+n()*60;let l,c,h,d,u;const f=new N;if(t.length>0){const M=t[Math.floor(n()*t.length)];l=Oc(M),c=M.colliderSize.x,h=M.colliderSize.y,d=M.colliderSize.z,u=M.def.mass??5,f.copy(M.colliderOffset).negate()}else{c=1+n()*2.5,h=1+n()*2.5,d=1+n()*2.5,u=5;const M=new et(new tn(c,h,d),i);M.castShadow=!0,M.receiveShadow=!0,l=M}const p=Math.cos(o)*a,x=Math.sin(o)*a,m=n()*Math.PI,g=Math.hypot(c,d)/2;if(!this.terrain.isFlatLand(p,x,g)||ks(p,x,g))continue;const v=new be({mass:u,shape:new xi(new E(c/2,h/2,d/2)),position:new E(Math.cos(o)*a,h/2,Math.sin(o)*a),linearDamping:.2,angularDamping:.2,material:e.obstacleMaterial});v.quaternion.setFromEuler(0,m,0),this.scene.add(l),e.world.addBody(v),this.dynamicPairs.push({mesh:l,body:v,visualOffset:f})}}buildZones(e){for(const t of e){const n=new tE(t);this.zones.push(n),this.scene.add(n.group)}}}function aE(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}class lE{group=new Ft;constructor(e,t,n){const i=new At({color:8543036,roughness:.95}),s=new tn(10.2,7.8,.2),o=new In(10,7.6),a=new is(.14,.19,9,6);for(const l of e){const c=new Ft,h=t.getHeight(l.position.x,l.position.z);c.position.set(l.position.x,h,l.position.z),c.rotation.y=l.facing;const d=new et(s,i);d.position.y=5,c.add(d);const u=new xn({map:kf({text:l.content.title,panel:l.content}),toneMapped:!1}),f=new et(o,u);f.position.set(0,5,.11);const p=f.clone();p.position.z=-.11,p.rotation.y=Math.PI,c.add(f,p);const x=new be({mass:0,material:n.obstacleMaterial,position:new E(l.position.x,h,l.position.z)});x.quaternion.setFromEuler(0,l.facing,0),x.addShape(new xi(new E(5.1,3.9,.1)),new E(0,5,0));for(const m of[-4.65,4.65]){const g=new et(a,i);g.position.set(m,4.5,-.26),c.add(g),x.addShape(new Vc(.19,.19,9,6),new E(m,4.5,-.26))}this.group.add(c),n.world.addBody(x)}}}class cE{element=document.createElement("section");button=document.createElement("button");constructor(e){document.body.classList.add("before-play"),this.element.className="start-screen",this.element.setAttribute("aria-labelledby","start-title");const t=document.createElement("h1");t.id="start-title",t.textContent=e.title,this.button.type="button",this.button.textContent=e.playLabel,this.button.disabled=!0,this.element.setAttribute("aria-busy","true"),this.element.append(t,this.button),document.body.appendChild(this.element)}ready(e){this.element.setAttribute("aria-busy","false"),this.button.disabled=!1,this.button.addEventListener("click",()=>{this.button.disabled=!0,e(),document.body.classList.remove("before-play"),this.element.remove()},{once:!0}),this.button.focus({preventScroll:!0})}}const Vf={title:"",playLabel:"Play"};function hE(r,e){r.updateWorldMatrix(!0,!0);const t=new Qt().setFromObject(r);if(t.isEmpty())return;const n=t.max.y-t.min.y,i=new Qt,s=new N;if(r.traverseVisible(h=>{if(!(h instanceof et))return;const d=h.geometry.getAttribute("position");if(d)for(let u=0;u<d.count;u++)h.getVertexPosition(u,s).applyMatrix4(h.matrixWorld),s.y<=t.min.y+n*.15&&i.expandByPoint(s)}),i.isEmpty())return;const o=i.getCenter(new N),a=Math.max(.15,Math.max(i.max.x-i.min.x,i.max.z-i.min.z)*.5),l=Math.max(1.5,n*.55),c=new be({mass:0,material:e.obstacleMaterial,shape:new Vc(a,a,l,12),position:new E(o.x,t.min.y+l/2,o.z)});return e.world.addBody(c),c}const el=ts.x-5.5,tl=ts.z-1.5,vn=1.65,xd=.65,uE=3;class dE{group=new Ft;actors=[];constructor(e,t){const n=t.getHeight(el,tl),i=[fE(),pE(),mE()],s=new At({color:0,roughness:.72,metalness:0}),o=new At({color:16766250,roughness:.6,metalness:0});i.forEach((a,l)=>{const c=new kr(a,{depth:xd,bevelEnabled:!0,bevelThickness:.035,bevelSize:.035,bevelSegments:2,steps:1,curveSegments:10});c.translate(-1,0,-xd/2);const h=new et(c,[s,o]),d=n+.035+l*(vn+.07);h.position.set(el,d,tl),h.castShadow=!0,h.receiveShadow=!0,this.group.add(h),c.computeBoundingBox();const u=c.boundingBox,f=u.getCenter(new N),p=u.getSize(new N);c.translate(-f.x,-f.y,-f.z);const x=new be({mass:uE,material:e.obstacleMaterial,shape:new xi(new E(p.x/2,p.y/2,p.z/2)),linearDamping:.06,angularDamping:.12,allowSleep:!0,sleepSpeedLimit:.12,sleepTimeLimit:1,position:new E(el+f.x,d+f.y,tl+f.z)});e.world.addBody(x),this.actors.push({mesh:h,body:x})}),this.syncMeshes()}syncMeshes(){for(const{mesh:e,body:t}of this.actors)e.position.copy(t.position),e.quaternion.copy(t.quaternion)}}function fE(){const r=new Gs;return r.moveTo(0,vn),r.lineTo(0,.55),r.quadraticCurveTo(0,0,.6,0),r.lineTo(1.4,0),r.quadraticCurveTo(2,0,2,.55),r.lineTo(2,vn),r.lineTo(1.55,vn),r.lineTo(1.55,.65),r.quadraticCurveTo(1.55,.43,1.3,.43),r.lineTo(.7,.43),r.quadraticCurveTo(.45,.43,.45,.65),r.lineTo(.45,vn),r.closePath(),r}function pE(){const r=new Gs;r.moveTo(0,0),r.lineTo(0,vn),r.lineTo(1.05,vn),r.bezierCurveTo(2.3,vn,2.3,0,1.05,0),r.closePath();const e=new Yl;return e.moveTo(.45,.4),e.lineTo(1,.4),e.bezierCurveTo(1.72,.4,1.72,1.25,1,1.25),e.lineTo(.45,1.25),e.closePath(),r.holes.push(e),r}function mE(){const r=new Gs;return r.moveTo(2,1.23),r.lineTo(2,1.4),r.quadraticCurveTo(2,vn,1.65,vn),r.lineTo(.55,vn),r.quadraticCurveTo(0,vn,0,1.12),r.lineTo(0,.53),r.quadraticCurveTo(0,0,.55,0),r.lineTo(1.5,0),r.quadraticCurveTo(2,0,2,.45),r.lineTo(2,.95),r.lineTo(1.05,.95),r.lineTo(1.05,.57),r.lineTo(1.55,.57),r.lineTo(1.55,.4),r.lineTo(.65,.4),r.quadraticCurveTo(.45,.4,.45,.63),r.lineTo(.45,1.02),r.quadraticCurveTo(.45,1.23,.65,1.23),r.closePath(),r}const gE=new cE(Vf),Hr=window.matchMedia("(any-pointer: coarse)").matches,Mn=new Wy({antialias:!0,powerPreference:"high-performance"});Mn.setPixelRatio(Math.min(window.devicePixelRatio,Hr?1.5:2));Mn.setSize(window.innerWidth,window.innerHeight);Mn.shadowMap.enabled=!0;Mn.shadowMap.type=_d;Mn.toneMapping=ac;Mn.toneMappingExposure=1.1;document.body.appendChild(Mn.domElement);const Gf=EE(),[_r]=await Promise.all([TM(zw,(r,e)=>Gf.setProgress(r,e)),eE(JSON.stringify([Vf,Fr,Bf,"Minigame Bowling Play Reset 0123456789"]))]);Gf.remove();const xE=_r.car,vE=Object.entries(_r).filter(([r])=>r.startsWith("obstacle_")).map(([,r])=>r),Ui=new Hw,ct=new oE(Ui,vE,Fr);ct.scene.add(new lE(Bf,ct.terrain,Ui).group);const Hf=new dE(Ui,ct.terrain);ct.scene.add(Hf.group);const _E=new Ow(ct.terrain,Fr);ct.scene.add(_E.mesh);const St=new Gc(Ui.carMaterial,xE,ts);ct.scene.add(St.mesh);Ui.world.addBody(St.body);const qc=new Mw(Ui,!1,{pin:_r.bowling_pin,ball:_r.bowling_ball,lane:_r.bowling_lane});ct.scene.add(qc.group);const Di=document.createElement("div");Di.className="bowling-panel";Di.hidden=!0;Di.innerHTML=`<strong>Bowling</strong>
  <span>Push the blue ball toward the pins.</span>
  <button type="button" disabled>Reset bowling</button>`;document.body.appendChild(Di);Di.querySelector("button").addEventListener("click",()=>{qc.reset()});const Or=await Sw(void 0,(r,e)=>ks(r,e)||Xc(r,e)||!ct.terrain.isFlatLand(r,e),Hr?16e3:void 0);ct.scene.add(Or.mesh);const yE=new Rw(Or.mesh.geometry,Hr?540:360);ct.scene.add(yE.group);const Wf=new Cw(Or.mesh.geometry,Hr?24:48);ct.scene.add(Wf.mesh);const Xf=new Nw(ct.terrain,Hr?8:16);ct.scene.add(Xf.mesh);const Br=new et(new Vr(400,32,16),new nn({side:jt,depthWrite:!1,fog:!1,uniforms:{uHorizon:{value:new De(16760924)},uZenith:{value:new De(12088687)},uSunDirection:{value:new N(.55,.16,-1).normalize()}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
//  uniform float uTime;
  // uniform vec3 uSunDir;
  uniform vec3 uHorizon;
  uniform vec3 uZenith;
  uniform vec3 uSunDirection;

  varying vec3 vDir;

  void main() {
    // Simple vertical gradient placeholder. Y is up. dir.y ~= 1 at the top,
    // ~= -1 at the bottom, 0 at the horizon.
    float t = smoothstep(0.0, 0.5, vDir.y*4.);
    vec3 col = mix(uHorizon, uZenith, t);

    // A low sunset disc with a broad halo, all in the existing sky draw.
    vec3 direction = normalize(vDir);
    float alignment = clamp(dot(direction, uSunDirection), 0.0, 1.0);
    float halo = pow(alignment, 32.0) * 0.3;
    col = mix(col, vec3(1.0, 0.60, 0.24), halo);
    float disc = smoothstep(cos(0.055), cos(0.049), alignment);
    col = mix(col, vec3(1.0, 0.88, 0.57), disc);

    gl_FragColor = vec4(col, 1.0);
  }
    `}));Br.renderOrder=-1;Br.frustumCulled=!1;ct.scene.add(Br);new mf().load("/play/models/tree.glb",r=>{const e=r.scene;e.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)});const t=ME(3735928559),n=10,i=5,s=50,o=new Qt;let a=0;for(let l=0;l<n*50&&a<n;l++){const c=t()*Math.PI*2,h=Math.sqrt(i**2+t()*(s**2-i**2)),d=Math.cos(c)*h,u=Math.sin(c)*h;if(ks(d,u,8)||!ct.terrain.isFlatLand(d,u,4)||Fr.some(x=>Math.hypot(d-x.position.x,u-x.position.z)<x.radius+3))continue;const f=e.clone();if(f.position.set(d,0,u),f.scale.setScalar(5+t()*2.5),f.rotation.y=t()*Math.PI*2,f.updateMatrixWorld(!0),o.setFromObject(f),o.isEmpty())continue;f.position.x+=d-(o.min.x+o.max.x)/2,f.position.z+=u-(o.min.z+o.max.z)/2,f.position.y+=ct.terrain.getHeight(d,u)-o.min.y,f.updateMatrixWorld(!0),o.setFromObject(f);const p=Math.max(o.max.x-o.min.x,o.max.z-o.min.z)/2;!ct.terrain.isFlatLand(d,u,p+2)||Xc(d,u,p)||Uf(d,u,p)||ks(d,u,p)||Fr.some(x=>Math.hypot(d-x.position.x,u-x.position.z)<x.radius+p)||(ct.scene.add(f),hE(f,Ui),a++)}a<n&&console.warn(`[trees] Placed ${a}/${n} trees on dry land.`)},void 0,r=>console.warn("[trees] Could not load tree model:",r));function ME(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Pi=new Jt(60,window.innerWidth/window.innerHeight,.1,500);let Li=null;const Yo=new N,Yc=new hw(Pi,Mn.domElement,(r,e)=>ct.terrain.getHeight(r,e));function Kc(){St.getForward(Yo),Yc.reset(St.mesh.position,Yo)}St.syncMesh();ct.focusOn(St.mesh.position);Kc();Di.querySelector("button").disabled=!1;const vd=document.getElementById("speed"),Wr=document.createElement("button");Wr.type="button";Wr.textContent="Reset view";Wr.style.cssText="pointer-events:auto;min-height:44px;margin-top:8px;padding:8px 16px;border:0;border-radius:12px;background:#f1d3a0;color:#453526;font:inherit;touch-action:manipulation;cursor:pointer";Wr.addEventListener("click",Kc);document.getElementById("hud").appendChild(Wr);function Zc(){const r=window.innerWidth,e=window.innerHeight;Pi.aspect=r/e,Pi.updateProjectionMatrix(),Mn.setSize(r,e)}window.addEventListener("resize",Zc);window.addEventListener("orientationchange",Zc);window.visualViewport?.addEventListener("resize",Zc);const qf=new Kg;let nl=0,rc=!1;function SE(r){Li&&(St.capturePreviousPose(),St.setGroundHeight(ct.terrain.getHeight(St.body.position.x,St.body.position.z)),St.update(r,Li.state.throttle,Li.state.steer,Li.state.brake))}function bE(){ct.terrain.isSafeForCar(St.body.position.x,St.body.position.z)||(St.reset(),rc=!0),St.setGroundHeight(ct.terrain.getHeight(St.body.position.x,St.body.position.z))}function wE(){const r=Math.min(qf.getDelta(),.06666666666666667);if(Wf.update(r),Xf.update(r),!Li){ct.syncMeshes(),Br.position.copy(Pi.position),Or.update(r),Mn.render(ct.scene,Pi);return}Li.update();const e=Li.consumeReset();e&&St.reset(),rc=!1;const t=Ui.step(r,SE,bE);Hf.syncMeshes(),qc.syncMeshes(),St.syncMesh(t);const n=ks(St.body.position.x,St.body.position.z);if(Di.hidden===n&&(Di.hidden=!n),(rc||e)&&Kc(),ct.syncMeshes(),ct.focusOn(St.mesh.position),St.getForward(Yo),Yc.update(r,St.mesh.position,Yo),ct.updateZones(r,St.mesh.position,Pi.position),Br.position.copy(Pi.position),Or.update(r),nl+=r,vd&&nl>.1){nl=0;const i=Math.round(Math.abs(St.getSpeed())*3.6);vd.textContent=`${i} km/h`}Mn.render(ct.scene,Pi)}Mn.setAnimationLoop(wE);gE.ready(()=>{qf.getDelta(),Li=new Bw,Yc.enabled=!0});function EE(){const r=document.createElement("div");r.className="loading-overlay",r.innerHTML=`
    <div class="loading-inner">
      <div class="loading-title">Loading…</div>
      <div class="loading-bar"><div class="loading-bar-fill"></div></div>
    </div>
  `,document.body.appendChild(r);const e=r.querySelector(".loading-bar-fill");return{setProgress(t,n){const i=n>0?t/n*100:100;e.style.width=`${i}%`},remove(){r.remove()}}}
