function a1_0xf0fe(_0x55b9d3,_0x2ff2ad){const _0x563b53=a1_0x563b();return a1_0xf0fe=function(_0xf0fe56,_0x5a6a21){_0xf0fe56=_0xf0fe56-0xa9;let _0x448b06=_0x563b53[_0xf0fe56];return _0x448b06;},a1_0xf0fe(_0x55b9d3,_0x2ff2ad);}const a1_0xc0aef=a1_0xf0fe;function a1_0x563b(){const _0x1d3c1f=['url','application/json,\x20text/plain,\x20*/*','23410818hHgQvC','stringify','2914624JzsIAu','origin','randomUserAgent','empty','Request\x20Body\x20:\x20','info','Response\x20Data\x20:\x20','317648macXUk','Error\x20:\x20','host','proxy','error','GET','\x20-\x20','application/json','Response\x20:\x20','status','en-US,en;q=0.9,id;q=0.8','headers','2298306AZfQdl','content-type','Bearer\x20','20qTArsZ','2GRQsMa','cors','message','1136676HMFtcQ','9908339gTjrxd','same-site','\x20:\x20','query','statusText','3770704DpQuuI','agent','generateHeaders','Request\x20Header\x20:\x20','body'];a1_0x563b=function(){return _0x1d3c1f;};return a1_0x563b();}(function(_0x3d0e53,_0x58ab1d){const _0x574826=a1_0xf0fe,_0xaadff1=_0x3d0e53();while(!![]){try{const _0x50fe25=-parseInt(_0x574826(0xcd))/0x1+-parseInt(_0x574826(0xb4))/0x2*(parseInt(_0x574826(0xb7))/0x3)+parseInt(_0x574826(0xc6))/0x4+parseInt(_0x574826(0xb3))/0x5*(parseInt(_0x574826(0xb0))/0x6)+parseInt(_0x574826(0xb8))/0x7+parseInt(_0x574826(0xbd))/0x8+-parseInt(_0x574826(0xc4))/0x9;if(_0x50fe25===_0x58ab1d)break;else _0xaadff1['push'](_0xaadff1['shift']());}catch(_0xbbde71){_0xaadff1['push'](_0xaadff1['shift']());}}}(a1_0x563b,0xcf80d));import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import a1_0x543230 from'../utils/logger.js';export class API{constructor(_0x1c01ca,_0x2340c6,_0x1ed332){const _0x48d1cf=a1_0xf0fe;this[_0x48d1cf(0xc2)]=_0x2340c6,this['origin']=_0x2340c6,this['ua']=Helper[_0x48d1cf(0xc8)](),this[_0x48d1cf(0xbb)]=_0x1c01ca,this[_0x48d1cf(0xd0)]=_0x1ed332;}[a1_0xc0aef(0xbf)](_0x4a4ee8){const _0x385549=a1_0xc0aef,_0xc2c9ae={'Accept':_0x385549(0xc3),'Accept-Language':_0x385549(0xae),'Content-Type':_0x385549(0xab),'Sec-Fetch-Dest':_0x385549(0xc9),'Sec-Fetch-Site':_0x385549(0xb9),'Sec-Fetch-Mode':_0x385549(0xb5),'Host':this[_0x385549(0xcf)],'Origin':this[_0x385549(0xc7)],'Referer':this[_0x385549(0xc7)]+'/'};return _0x4a4ee8&&(_0xc2c9ae['Authorization']=_0x385549(0xb2)+_0x4a4ee8),_0xc2c9ae;}async['fetch'](_0x10c18f,_0x2eccf3,_0x2dc47c,_0x4fae58={},_0x2ca910={}){const _0x1a529e=a1_0xc0aef;try{const _0x34a996=''+this[_0x1a529e(0xc2)]+_0x10c18f,_0x145c8c={..._0x2ca910,...this[_0x1a529e(0xbf)](_0x2dc47c)},_0x550a5a={'headers':_0x145c8c,'method':_0x2eccf3};this[_0x1a529e(0xd0)]&&(_0x550a5a[_0x1a529e(0xbe)]=new HttpsProxyAgent(this['proxy']));a1_0x543230[_0x1a529e(0xcb)](_0x2eccf3+_0x1a529e(0xba)+_0x34a996+'\x20'+(this['proxy']?this[_0x1a529e(0xd0)]:'')),a1_0x543230[_0x1a529e(0xcb)](_0x1a529e(0xc0)+JSON[_0x1a529e(0xc5)](_0x145c8c));_0x2eccf3!==_0x1a529e(0xa9)&&(_0x550a5a[_0x1a529e(0xc1)]=''+JSON[_0x1a529e(0xc5)](_0x4fae58),a1_0x543230['info'](_0x1a529e(0xca)+_0x550a5a[_0x1a529e(0xc1)]));const _0x555745=await fetch(_0x34a996,_0x550a5a);a1_0x543230[_0x1a529e(0xcb)](_0x1a529e(0xac)+_0x555745['status']+'\x20'+_0x555745[_0x1a529e(0xbc)]);if(_0x555745['ok']||_0x555745[_0x1a529e(0xad)]==0x190||_0x555745[_0x1a529e(0xad)]==0x193){const _0x2f3e19=_0x555745[_0x1a529e(0xaf)]['get'](_0x1a529e(0xb1));let _0x526209;_0x2f3e19&&_0x2f3e19['includes']('application/json')?_0x526209={...await _0x555745['json'](),'status':_0x555745['status']}:_0x526209={'status':_0x555745[_0x1a529e(0xad)],'message':await _0x555745['text']()};if(_0x555745['ok'])_0x526209['status']=0xc8;return a1_0x543230[_0x1a529e(0xcb)](_0x1a529e(0xcc)+JSON[_0x1a529e(0xc5)](_0x526209)),_0x526209;}else throw new Error(_0x555745[_0x1a529e(0xad)]+_0x1a529e(0xaa)+_0x555745[_0x1a529e(0xbc)]);}catch(_0x4a63f7){a1_0x543230[_0x1a529e(0xd1)](_0x1a529e(0xce)+_0x4a63f7[_0x1a529e(0xb6)]);throw _0x4a63f7;}}}