function a5_0xbb69(){const _0x54b65c=['8431965PJZGDH','915294EStjDj','log/app.log','20jlSuAL','Log\x20file\x20cleared',']:\x20','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','debug','12385YyiwrI','logger','9nCHRxg','4539944UnYmuX','YYYY-MM-DD\x20HH:mm:ss','level','warn','8210238tUllPg','clear','File','1988LvSyvW','truncate','error','389041oZITwi','info','14hMxvmM','message','36697166zKxNHg'];a5_0xbb69=function(){return _0x54b65c;};return a5_0xbb69();}const a5_0x2b9145=a5_0x3abe;(function(_0x4a9c7c,_0x1ecee3){const _0x15a352=a5_0x3abe,_0x37e174=_0x4a9c7c();while(!![]){try{const _0x26440a=-parseInt(_0x15a352(0xe2))/0x1+-parseInt(_0x15a352(0xe8))/0x2*(-parseInt(_0x15a352(0xf1))/0x3)+-parseInt(_0x15a352(0xdf))/0x4*(parseInt(_0x15a352(0xef))/0x5)+-parseInt(_0x15a352(0xf6))/0x6+-parseInt(_0x15a352(0xe4))/0x7*(-parseInt(_0x15a352(0xf2))/0x8)+-parseInt(_0x15a352(0xe7))/0x9*(parseInt(_0x15a352(0xea))/0xa)+parseInt(_0x15a352(0xe6))/0xb;if(_0x26440a===_0x1ecee3)break;else _0x37e174['push'](_0x37e174['shift']());}catch(_0xccf644){_0x37e174['push'](_0x37e174['shift']());}}}(a5_0xbb69,0xefb14));import{createLogger,format,transports}from'winston';import a5_0x4e02a6 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x4702d0,message:_0xc9a476,timestamp:_0x103569})=>{const _0x47960d=a5_0x3abe;return _0x103569+'\x20['+_0x4702d0+_0x47960d(0xec)+_0xc9a476;});function a5_0x3abe(_0x33cb8d,_0x5bdc27){const _0xbb696=a5_0xbb69();return a5_0x3abe=function(_0x3abe49,_0xd31f65){_0x3abe49=_0x3abe49-0xde;let _0x1d0389=_0xbb696[_0x3abe49];return _0x1d0389;},a5_0x3abe(_0x33cb8d,_0x5bdc27);}class Logger{constructor(){const _0x3c6a34=a5_0x3abe;this['logger']=createLogger({'level':'debug','format':combine(timestamp({'format':_0x3c6a34(0xf3)}),colorize(),customFormat),'transports':[new transports[(_0x3c6a34(0xde))]({'filename':_0x3c6a34(0xe9)})],'exceptionHandlers':[new transports[(_0x3c6a34(0xde))]({'filename':_0x3c6a34(0xe9)})],'rejectionHandlers':[new transports['File']({'filename':'log/app.log'})]});}[a5_0x2b9145(0xe3)](_0x498706){const _0xcb8a87=a5_0x2b9145;this[_0xcb8a87(0xf0)][_0xcb8a87(0xe3)](_0x498706);}[a5_0x2b9145(0xf5)](_0x14a2e5){this['logger']['warn'](_0x14a2e5);}['error'](_0x452241){const _0x4da6e3=a5_0x2b9145;this[_0x4da6e3(0xf0)][_0x4da6e3(0xe1)](_0x452241);}[a5_0x2b9145(0xee)](_0x4081d3){const _0x2c906a=a5_0x2b9145;this[_0x2c906a(0xf0)][_0x2c906a(0xee)](_0x4081d3);}['setLevel'](_0x377a32){const _0x20eaad=a5_0x2b9145;this['logger'][_0x20eaad(0xf4)]=_0x377a32;}[a5_0x2b9145(0xf7)](){const _0x458091=a5_0x2b9145;a5_0x4e02a6[_0x458091(0xe0)](_0x458091(0xe9),0x0,_0x2b9f1d=>{const _0x8f49c=_0x458091;_0x2b9f1d?this[_0x8f49c(0xf0)][_0x8f49c(0xe1)](_0x8f49c(0xed)+_0x2b9f1d[_0x8f49c(0xe5)]):this[_0x8f49c(0xf0)]['info'](_0x8f49c(0xeb));});}}export default new Logger();