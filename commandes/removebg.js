/*
KAVISHA-MD
 Coded By kavishan

Modified File : removebg.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/

const _0x4be24e=_0x2ef0;(function(_0x448135,_0x5b012c){const _0x2e123c={_0x3bcb90:0x1f2,_0x136790:0x1bf,_0xfd2751:0x1ed,_0x7fbaa6:0x18e,_0x553bb5:0x1dc,_0x5bceda:0x1b5,_0x30abef:0x1cb,_0x89b41:0x1ce,_0x4876bb:0x1eb},_0x489454=_0x2ef0,_0x3ef73f=_0x448135();while(!![]){try{const _0x5923fe=parseInt(_0x489454(0x1c8))/(0x7cb+0x1*-0xf2+0xdb*-0x8)*(-parseInt(_0x489454(_0x2e123c._0x3bcb90))/(-0x2*-0x85+0x1c9*-0xf+-0xa9*-0x27))+parseInt(_0x489454(_0x2e123c._0x136790))/(0xb56*-0x2+-0x3ff*0x1+0x1aae)*(-parseInt(_0x489454(_0x2e123c._0xfd2751))/(-0x14*-0xf2+-0x194+-0x1150))+parseInt(_0x489454(_0x2e123c._0x7fbaa6))/(-0x1*-0x6d0+-0x25*0x9d+0x32e*0x5)*(parseInt(_0x489454(_0x2e123c._0x553bb5))/(0x3*0xb96+0x2374+0x8c6*-0x8))+-parseInt(_0x489454(_0x2e123c._0x5bceda))/(-0xcdb+-0x1*-0xccc+-0x1*-0x16)+parseInt(_0x489454(0x1c4))/(0x1*0x1f35+-0x168b+-0x8a2)*(-parseInt(_0x489454(_0x2e123c._0x30abef))/(-0x1274*0x2+-0x217a+0x466b))+parseInt(_0x489454(0x196))/(-0x1159*0x2+0x28*0x5+0x29*0xd4)*(-parseInt(_0x489454(_0x2e123c._0x89b41))/(-0x1*-0xbad+0x5f+0x1*-0xc01))+parseInt(_0x489454(_0x2e123c._0x4876bb))/(-0x2b*-0x9e+-0x1837+-0x247);if(_0x5923fe===_0x5b012c)break;else _0x3ef73f['push'](_0x3ef73f['shift']());}catch(_0x449283){_0x3ef73f['push'](_0x3ef73f['shift']());}}}(_0x16fa,0x3e1d7+0x85339*-0x1+0x93bc1));const config=require(_0x4be24e(0x175)),{cmd,commands}=require('\x2e\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64'),got=require('\x67\x6f\x74'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('\x2e\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e'+'\x63\x74\x69\x6f\x6e\x73'),{Sticker,createSticker,StickerTypes}=require(_0x4be24e(0x1a1)+_0x4be24e(0x1df)),fs=require('\x66\x73');let {unlink}=require('\x66\x73\x2f\x70\x72\x6f\x6d\x69\x73\x65'+'\x73');const {promisify}=require(_0x4be24e(0x1ef)),FormData=require('\x66\x6f\x72\x6d\x2d\x64\x61\x74\x61'),stream=require(_0x4be24e(0x1f1)),pipeline=promisify(stream[_0x4be24e(0x192)]),fileType=require(_0x4be24e(0x1f3));var imgmsg='';if(config[_0x4be24e(0x1b4)]==='\x53\x49')imgmsg=_0x4be24e(0x195)+'\u0da7\x20\x6d\x65\x6e\x74\x69\x6f\x6e\x20'+_0x4be24e(0x1ad);else imgmsg=_0x4be24e(0x1d3)+'\x61\x20\x70\x68\x6f\x74\x6f\x20\x21\x2a';var descg='';if(config['\x4c\x41\x4e\x47']==='\x53\x49')descg=_0x4be24e(0x197)+_0x4be24e(0x1dd)+'\x20\u0da1\u0dcf\u0dba\u0dcf\u0dbb\u0dd6\u0db4\u0dba\x20'+'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64'+'\x20\x72\x65\x6d\x6f\x76\x65\x20\u0d9a\u0dbb'+_0x4be24e(0x1bc);else descg='\x49\x74\x20\x72\x65\x6d\x6f\x76\x65\x20'+_0x4be24e(0x17c)+'\x20\x79\x6f\x75\x72\x20\x72\x65\x70\x6c'+_0x4be24e(0x18c);var cant='';if(config[_0x4be24e(0x1b4)]==='\x53\x49')cant='\u0db8\u0da7\x20\u0db8\u0dd9\u0db8\x20\u0dbb\u0dd6\u0db4'+'\u0dba\u0dda\x20\u0db4\u0dc3\u0dd4\u0db6\u0dd2\u0db8\x20'+'\u0d89\u0dc0\u0dad\u0dca\x20\u0d9a\u0dc5\x20\u0db1\u0ddc'+_0x4be24e(0x1d0);else cant=_0x4be24e(0x194)+_0x4be24e(0x1b7)+_0x4be24e(0x1c9)+_0x4be24e(0x1ca);function _0x16fa(){const _0x28225c=['\x33\x79\x6f\x66\x52\x64\x75','\x72\x6f\x75\x6e\x64\x20\x6f\x6e\x20\x74','\x68\x69\x73\x20\x69\x6d\x61\x67\x65\x2e','\x31\x39\x30\x38\x39\x39\x70\x68\x6e\x63\x53\x6d','\x69\x6d\x61\x67\x65\x5f\x66\x69\x6c\x65','\x72\x6d\x62\x67','\x35\x35\x30\x77\x78\x66\x55\x65\x45','\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61','\u0dc4\u0dd0\u0d9a\x2e','\x77\x59\x66\x6b\x57','\x66\x48\x68\x41\x6f','\x2a\x52\x65\x70\x6c\x79\x20\x74\x6f\x20','\x45\x52\x2a\x0a\x0a','\x43\x52\x4f\x50\x50\x45\x44','\x6d\x61\x6e\x64\x4c\x69\x73\x74','\x4c\x49\x6e\x58\x4b','\x4e\x4d\x4b\x72\x4a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6d\x72\x70\x78\x6d','\x33\x35\x31\x32\x35\x38\x48\x4a\x6e\x43\x76\x75','\x6e\x74\x69\x6f\x6e\x20\u0daf\u0dd4\u0db1\u0dca','\x70\x72\x6f\x6d\x69\x73\x65\x73','\x2d\x66\x6f\x72\x6d\x61\x74\x74\x65\x72','\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61','\x41\x47\x56\x63\x56','\x62\x75\x74\x74\x6f\x6e\x73','\x67\x2f\x76\x31\x2e\x30\x2f\x72\x65\x6d','\x63\x61\x70\x74\x69\x6f\x6e','\x71\x53\x65\x59\x68','\x74\x79\x70\x65','\x4f\x75\x4d\x77\x5a','\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e','\x6e\x59\x53\x68\x47','\x2e\x70\x6e\x67','\x31\x35\x31\x33\x31\x30\x32\x38\x41\x56\x56\x75\x49\x72','\x77\x6b\x65\x57\x42','\x34\x37\x36\x33\x36\x59\x7a\x54\x69\x54\x67','\x63\x61\x74\x65\x67\x6f\x72\x79','\x75\x74\x69\x6c','\x72\x62\x67\x64\x20','\x73\x74\x72\x65\x61\x6d','\x35\x31\x38\x36\x32\x6b\x54\x77\x44\x65\x66','\x66\x69\x6c\x65\x2d\x74\x79\x70\x65','\x68\x65\x61\x64\x65\x72\x73','\x71\x75\x6f\x74\x65\x64','\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67','\x50\x76\x61\x4d\x56','\x65\x78\x74','\x63\x72\x65\x61\x74\x65\x52\x65\x61\x64','\x71\x43\x65\x51\x76','\x64\x53\x6e\x67\x74','\x74\x65\x78\x74','\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64','\x73\x74\x69\x63\x6b\x65\x72','\x43\x69\x46\x4d\x6f','\x72\x62\x67\x69\x20','\x61\x67\x65','\x42\x4e\x39\x48','\x61\x6c\x69\x61\x73','\x46\x4f\x4f\x54\x45\x52','\x4e\x6e\x75\x50\x61','\x62\x75\x74\x74\x6f\x6e\x4d\x65\x73\x73','\x70\x66\x70\x66\x44','\x69\x2e\x72\x65\x6d\x6f\x76\x65\x2e\x62','\x6c\x4e\x5a\x48\x70','\x59\x79\x43\x53\x72','\x45\x41\x70\x73\x6b','\x69\x6d\x61\x67\x65\x3e','\x69\x65\x64\x20\x70\x68\x6f\x74\x6f\x2e','\x77\x67\x4f\x75\x6c','\x31\x35\x68\x70\x5a\x6b\x67\x53','\x51\x44\x67\x56\x63','\x64\x6f\x6e\x74\x41\x64\x64\x43\x6f\x6d','\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74','\x70\x69\x70\x65\x6c\x69\x6e\x65','\x74\x6f\x42\x75\x66\x66\x65\x72','\x49\x20\x63\x61\x6e\x27\x74\x20\x72\x65','\x2a\u0da1\u0dcf\u0dba\u0dcf\u0dbb\u0dd6\u0db4\u0dba\u0d9a','\x37\x36\x37\x30\x30\x66\x42\x4f\x68\x52\x62','\u0d91\u0dba\x20\u0d94\u0db6\u0d9c\u0dda\x20\x6d\x65','\x6d\x61\x49\x50\x55','\x2e\x72\x65\x6d\x6f\x76\x65\x62\x67\x20','\x70\x61\x74\x74\x65\x72\x6e','\x49\x42\x42\x72\x48','\x64\x6f\x77\x6e\x6c\x6f\x61\x64','\x69\x6d\x61\x67\x65\x2f\x78\x2d\x70\x6e','\x62\x6f\x64\x79','\x49\x71\x64\x4e\x47','\x63\x6f\x6e\x76\x65\x72\x74','\x77\x61\x2d\x73\x74\x69\x63\x6b\x65\x72','\x45\x6e\x42\x79\x49','\x73\x73\x61\x67\x65','\x2d\x2d\x63\x72\x6f\x70','\x66\x69\x6c\x65\x6e\x61\x6d\x65','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x61\x70\x70\x65\x6e\x64','\x70\x6f\x73\x74','\x6d\x73\x67','\x72\x62\x67\x64','\x76\x4c\x65\x64\x5a','\x2d\x54\x77\x6f\ud83c\udf6d\x5d\x0a\x0a\x20\x20','\u0daf\u0dd9\u0db1\u0dca\u0db1\x20\x21\x2a','\x72\x65\x61\x63\x74','\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65','\x73\x61\x67\x65','\x65\x53\x74\x72\x65\x61\x6d','\x6b\x65\x79','\x2a\x45\x52\x52\x4f\x52\x20\x21\x21\x2a','\x4c\x41\x4e\x47','\x31\x33\x37\x35\x34\x38\x36\x79\x51\x64\x48\x52\x46','\x61\x75\x74\x6f','\x6d\x6f\x76\x65\x20\x62\x61\x63\x6b\x67','\x64\x79\x71\x6b\x64\x4b\x4b\x36\x7a\x63','\x72\x62\x67\x69','\x73\x69\x7a\x65','\x4c\x59\x6d\x73\x57','\u0dba\u0dd2\x2e','\x3c\x52\x65\x70\x6c\x79\x20\x74\x6f\x20','\x66\x6f\x6f\x74\x65\x72','\x36\x39\x79\x68\x77\x66\x4b\x74','\x57\x72\x6a\x69\x77','\x58\x2d\x41\x70\x69\x2d\x4b\x65\x79','\x78\x52\x52\x59\x63','\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72','\x37\x32\x55\x7a\x54\x78\x4c\x50','\x6f\x76\x65\x62\x67','\x73\x74\x69\x63\x6b\x65\x72\x4d\x65\x73','\x72\x6a\x73\x68\x41'];_0x16fa=function(){return _0x28225c;};return _0x16fa();}const _0x37a5e7={};_0x37a5e7[_0x4be24e(0x19a)]='\x72\x65\x6d\x6f\x76\x65\x62\x67',_0x37a5e7[_0x4be24e(0x1ae)]='\ud83d\udd2e',_0x37a5e7[_0x4be24e(0x182)]=[_0x4be24e(0x1cd)],_0x37a5e7['\x64\x65\x73\x63']=descg,_0x37a5e7[_0x4be24e(0x1ee)]=_0x4be24e(0x1a0),_0x37a5e7['\x75\x73\x65']=_0x4be24e(0x199)+_0x4be24e(0x1bd)+_0x4be24e(0x18b),_0x37a5e7[_0x4be24e(0x1a5)]=__filename,cmd(_0x37a5e7,async(_0x29aa2f,_0x41e121,_0x12083d,{from:_0x5bfd96,l:_0xd16b6b,quoted:_0x2463fc,prefix:_0x4cbc4f,body:_0x562bcb,isCmd:_0x2f4747,command:_0x7bb362,args:_0x32eeea,q:_0x3aeb83,isGroup:_0x120a98,sender:_0xada8fe,senderNumber:_0x74629b,botNumber2:_0x4988e5,botNumber:_0x5c3cbc,pushname:_0x895e64,isMe:_0x142771,isOwner:_0x1b9583,groupMetadata:_0x1449d8,groupName:_0x4e36b5,participants:_0x199234,groupAdmins:_0x3cb000,isBotAdmins:_0x57ed7b,isAdmins:_0x37d763,reply:_0x1234c3})=>{const _0x1d81e4={_0x5f129a:0x1c6,_0x41c07e:0x1b0,_0x3804a2:0x1ba,_0x9f5b0:0x1ea,_0x4e7524:0x1d2,_0x45b4c5:0x1f5,_0xe68f9e:0x1e6,_0x3d2ce6:0x1d2,_0x3403a5:0x1d8,_0xeb0fc7:0x1e6,_0x37eac5:0x1e7,_0x1d9ebd:0x1d8,_0xd8e2f:0x1db,_0x39eac2:0x1e0,_0x56b0b4:0x179,_0x544521:0x184,_0x3edd62:0x19c,_0x43f550:0x1c3,_0x279b29:0x1de,_0x1c1492:0x1d7,_0x3d8655:0x178,_0x5ec9e6:0x177,_0x19e76b:0x188,_0x5eebb5:0x19e,_0xbd9e15:0x1f4,_0x2c3c74:0x1f1,_0x22a704:0x1d9,_0x55f895:0x1e3,_0x3946d1:0x191,_0x397960:0x1b1,_0x3b417d:0x1c0,_0x46b32c:0x1ac,_0x3bf100:0x19f,_0x2276d6:0x17f,_0x1d752a:0x19f,_0x776880:0x1bb,_0x5e2d99:0x1c2,_0x492b80:0x1e2,_0x380f5b:0x185,_0xdeeb07:0x180,_0x4d1026:0x179},_0x32e557=_0x4be24e,_0x189577={'\x66\x48\x68\x41\x6f':function(_0x46673f,_0xe1ee94){return _0x46673f===_0xe1ee94;},'\x50\x76\x61\x4d\x56':'\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61'+'\x67\x65','\x4e\x4d\x4b\x72\x4a':function(_0x240482,_0x29f04d){return _0x240482===_0x29f04d;},'\x4f\x75\x4d\x77\x5a':_0x32e557(0x1cf)+'\x67\x65','\x6d\x72\x70\x78\x6d':_0x32e557(_0x1d81e4._0x5f129a)+_0x32e557(_0x1d81e4._0x41c07e),'\x71\x43\x65\x51\x76':function(_0x87212c,_0x59653b){return _0x87212c(_0x59653b);},'\x4e\x6e\x75\x50\x61':function(_0x10421a,_0x5e1a4b){return _0x10421a(_0x5e1a4b);},'\x4c\x49\x6e\x58\x4b':function(_0x188d85,_0x2fc013){return _0x188d85+_0x2fc013;},'\x70\x66\x70\x66\x44':_0x32e557(0x1cc),'\x71\x53\x65\x59\x68':_0x32e557(_0x1d81e4._0x3804a2),'\x6c\x4e\x5a\x48\x70':_0x32e557(0x1b6),'\x59\x79\x43\x53\x72':'\x66\x4c\x59\x42\x79\x5a\x77\x62\x50\x71'+_0x32e557(0x1b8)+_0x32e557(0x181),'\x4c\x67\x48\x6e\x74':function(_0x1fdb97,_0x446bd0,_0x234090){return _0x1fdb97(_0x446bd0,_0x234090);},'\x57\x72\x6a\x69\x77':_0x32e557(_0x1d81e4._0x9f5b0),'\x41\x47\x56\x63\x56':function(_0x297195,_0x33e0a0){return _0x297195+_0x33e0a0;},'\x43\x69\x46\x4d\x6f':function(_0xcbfcfb,_0x1c522e){return _0xcbfcfb+_0x1c522e;},'\x49\x71\x64\x4e\x47':function(_0x5e07fd,_0x18fe8d){return _0x5e07fd+_0x18fe8d;},'\x64\x53\x6e\x67\x74':'\x49\x4d\x41\x47\x45','\x4c\x59\x6d\x73\x57':function(_0x7b8fa9,_0x946535){return _0x7b8fa9+_0x946535;},'\x78\x52\x52\x59\x63':'\x72\x65\x62\x67\x73\x20','\x77\x67\x4f\x75\x6c':'\x53\x54\x49\x43\x4b\x45\x52','\x59\x53\x54\x56\x4d':function(_0x3b9a93,_0x15a359){return _0x3b9a93+_0x15a359;},'\x72\x6a\x73\x68\x41':function(_0x2b4c2a,_0x12045c){return _0x2b4c2a+_0x12045c;},'\x49\x77\x53\x7a\x75':_0x32e557(0x1f0),'\x46\x45\x45\x77\x69':'\x44\x4f\x43\x55\x4d\x45\x4e\x54','\x4d\x43\x56\x4c\x4b':function(_0x46335e,_0x2b7089){return _0x46335e(_0x2b7089);}};try{const _0x3e1f07=_0x12083d[_0x32e557(0x1f5)]?_0x189577[_0x32e557(_0x1d81e4._0x4e7524)](_0x12083d[_0x32e557(_0x1d81e4._0x45b4c5)][_0x32e557(_0x1d81e4._0xe68f9e)],'\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65'+_0x32e557(0x1a3)):![],_0x18f8fb=_0x12083d[_0x32e557(0x1f5)]?_0x189577[_0x32e557(_0x1d81e4._0x3d2ce6)](_0x12083d[_0x32e557(0x1f5)][_0x32e557(_0x1d81e4._0xe68f9e)],_0x189577['\x50\x76\x61\x4d\x56'])||(_0x3e1f07?_0x189577[_0x32e557(_0x1d81e4._0x3403a5)](_0x12083d['\x71\x75\x6f\x74\x65\x64'][_0x32e557(0x1a9)][_0x32e557(_0x1d81e4._0xe68f9e)],_0x189577[_0x32e557(0x176)]):![]):![],_0x42ae3e=_0x12083d[_0x32e557(0x1f5)]?_0x189577['\x4e\x4d\x4b\x72\x4a'](_0x12083d[_0x32e557(0x1f5)][_0x32e557(_0x1d81e4._0xeb0fc7)],_0x32e557(0x1cf)+'\x67\x65')||(_0x3e1f07?_0x12083d[_0x32e557(0x1f5)][_0x32e557(0x1a9)][_0x32e557(0x1e6)]===_0x189577[_0x32e557(_0x1d81e4._0x37eac5)]:![]):![],_0x426ca1=_0x12083d[_0x32e557(_0x1d81e4._0x45b4c5)]?_0x189577[_0x32e557(_0x1d81e4._0x1d9ebd)](_0x12083d['\x71\x75\x6f\x74\x65\x64']['\x74\x79\x70\x65'],_0x189577[_0x32e557(_0x1d81e4._0xd8e2f)]):![];if(_0x189577[_0x32e557(0x1d2)](_0x12083d[_0x32e557(_0x1d81e4._0xeb0fc7)],_0x32e557(_0x1d81e4._0x39eac2)+'\x67\x65')||_0x18f8fb){var _0xdcde2d=_0x189577[_0x32e557(_0x1d81e4._0x56b0b4)](getRandom,''),_0xc69246=_0x189577[_0x32e557(_0x1d81e4._0x544521)](getRandom,'');let _0x62477d=_0x18f8fb?await _0x12083d['\x71\x75\x6f\x74\x65\x64'][_0x32e557(0x19c)](_0xdcde2d):await _0x12083d[_0x32e557(_0x1d81e4._0x3edd62)](_0xdcde2d),_0x58a090=await fileType[_0x32e557(_0x1d81e4._0x43f550)](_0x62477d);await fs[_0x32e557(_0x1d81e4._0x279b29)]['\x77\x72\x69\x74\x65\x46\x69\x6c\x65'](_0x189577[_0x32e557(_0x1d81e4._0x1c1492)]('\x2e\x2f',_0x58a090[_0x32e557(0x177)]),_0x62477d);var _0x13eb6b=new FormData();_0x13eb6b[_0x32e557(0x1a7)](_0x189577[_0x32e557(0x186)],fs[_0x32e557(_0x1d81e4._0x3d8655)+'\x53\x74\x72\x65\x61\x6d'](_0x189577[_0x32e557(0x1d7)]('\x2e\x2f',_0x58a090[_0x32e557(_0x1d81e4._0x5ec9e6)]))),_0x13eb6b[_0x32e557(0x1a7)](_0x189577[_0x32e557(0x1e5)],_0x189577[_0x32e557(_0x1d81e4._0x19e76b)]);const _0x480f06={};_0x480f06[_0x32e557(0x1c1)]=_0x189577[_0x32e557(0x189)];const _0x5cae32={};_0x5cae32[_0x32e557(_0x1d81e4._0x5eebb5)]=_0x13eb6b,_0x5cae32[_0x32e557(_0x1d81e4._0xbd9e15)]=_0x480f06;var _0x28add0=await got[_0x32e557(_0x1d81e4._0x2c3c74)][_0x32e557(0x1a8)](_0x32e557(_0x1d81e4._0x22a704)+_0x32e557(0x187)+_0x32e557(_0x1d81e4._0x55f895)+_0x32e557(0x1c5),_0x5cae32);await _0x189577['\x4c\x67\x48\x6e\x74'](pipeline,_0x28add0,fs[_0x32e557(_0x1d81e4._0x3946d1)+_0x32e557(_0x1d81e4._0x397960)](_0xc69246+_0x189577[_0x32e557(_0x1d81e4._0x3b417d)]));let _0x31de96='\u250c\u2500\u2500\u2500\x5b\ud83c\udf6d\x5a\x65\x72\x6f'+_0x32e557(_0x1d81e4._0x46b32c)+'\x20\x2a\ud83c\udf06\x20\x42\x41\x43\x4b\x47\x52'+'\x4f\x55\x4e\x44\x20\x52\x45\x4d\x4f\x56'+_0x32e557(0x1d4);const _0x1b62cd=[{'\x62\x75\x74\x74\x6f\x6e\x49\x64':_0x189577[_0x32e557(0x1e1)](_0x189577[_0x32e557(0x17e)](_0x189577[_0x32e557(_0x1d81e4._0x3bf100)](_0x4cbc4f,_0x32e557(_0x1d81e4._0x2276d6)),_0xc69246),_0x189577['\x57\x72\x6a\x69\x77']),'\x62\x75\x74\x74\x6f\x6e\x54\x65\x78\x74':{'\x64\x69\x73\x70\x6c\x61\x79\x54\x65\x78\x74':_0x189577[_0x32e557(0x17a)]},'\x74\x79\x70\x65':0x1},{'\x62\x75\x74\x74\x6f\x6e\x49\x64':_0x189577[_0x32e557(_0x1d81e4._0x1d752a)](_0x189577[_0x32e557(_0x1d81e4._0x776880)](_0x4cbc4f,_0x189577[_0x32e557(_0x1d81e4._0x5e2d99)]),_0xc69246)+_0x189577[_0x32e557(0x1c0)],'\x62\x75\x74\x74\x6f\x6e\x54\x65\x78\x74':{'\x64\x69\x73\x70\x6c\x61\x79\x54\x65\x78\x74':_0x189577[_0x32e557(0x18d)]},'\x74\x79\x70\x65':0x1},{'\x62\x75\x74\x74\x6f\x6e\x49\x64':_0x189577['\x59\x53\x54\x56\x4d'](_0x189577[_0x32e557(0x1c7)](_0x189577[_0x32e557(0x1e1)](_0x4cbc4f,_0x189577['\x49\x77\x53\x7a\x75']),_0xc69246),_0x32e557(_0x1d81e4._0x9f5b0)),'\x62\x75\x74\x74\x6f\x6e\x54\x65\x78\x74':{'\x64\x69\x73\x70\x6c\x61\x79\x54\x65\x78\x74':_0x189577['\x46\x45\x45\x77\x69']},'\x74\x79\x70\x65':0x1}],_0x3630dd={};_0x3630dd[_0x32e557(0x1e4)]=_0x31de96,_0x3630dd[_0x32e557(0x1be)]=config['\x46\x4f\x4f\x54\x45\x52'],_0x3630dd[_0x32e557(_0x1d81e4._0x492b80)]=_0x1b62cd,_0x3630dd[_0x32e557(0x1af)]=0x1;const _0x1259a6=_0x3630dd;return await _0x29aa2f[_0x32e557(_0x1d81e4._0x380f5b)+_0x32e557(_0x1d81e4._0xdeeb07)](_0x5bfd96,_0x1259a6,_0x41e121);}else return await _0x189577['\x4d\x43\x56\x4c\x4b'](_0x1234c3,imgmsg);}catch(_0x167ff8){_0x189577[_0x32e557(_0x1d81e4._0x4d1026)](_0x1234c3,cant),_0xd16b6b(_0x167ff8);}});const _0x21b8d3={};_0x21b8d3['\x70\x61\x74\x74\x65\x72\x6e']=_0x4be24e(0x1b9),_0x21b8d3[_0x4be24e(0x190)+_0x4be24e(0x1d6)]=!![],_0x21b8d3['\x66\x69\x6c\x65\x6e\x61\x6d\x65']=__filename,cmd(_0x21b8d3,async(_0x4d5d68,_0x5d8dc7,_0x5bf12b,{from:_0x1ea4a9,l:_0x30e966,quoted:_0x20c5f5,body:_0x178d9b,isCmd:_0xed0108,command:_0x2b1259,args:_0x126de4,q:_0x599170,isGroup:_0x3ea9dc,sender:_0x5b2537,senderNumber:_0x448d64,botNumber2:_0xff43a1,botNumber:_0x47a550,pushname:_0x1010ac,isMe:_0x4494ba,isOwner:_0x18dd4a,groupMetadata:_0x3388cb,groupName:_0x37754d,participants:_0x142f8a,groupAdmins:_0x5594e0,isBotAdmins:_0x7fd3d7,isAdmins:_0x2a1a68,reply:_0x328b2e})=>{const _0x38cc18={_0xf7990f:0x17b,_0x4781e9:0x1b2,_0x2fceb2:0x1ae,_0x151d58:0x1f5,_0x56653e:0x1b2,_0x12e658:0x1ae},_0x4b66d0=_0x4be24e,_0x43a7bb={'\x6e\x59\x53\x68\x47':function(_0x5806f9,_0x53d07d){return _0x5806f9(_0x53d07d);},'\x77\x6b\x65\x57\x42':_0x4b66d0(0x1b3)};try{const _0x1ca180={};_0x1ca180[_0x4b66d0(_0x38cc18._0xf7990f)]='\ud83d\udce5',_0x1ca180[_0x4b66d0(_0x38cc18._0x4781e9)]=_0x5d8dc7[_0x4b66d0(0x1b2)];const _0xba63b={};_0xba63b[_0x4b66d0(_0x38cc18._0x2fceb2)]=_0x1ca180,await _0x4d5d68[_0x4b66d0(0x1da)+'\x65'](_0x1ea4a9,_0xba63b);const _0x562c3d={};_0x562c3d[_0x4b66d0(_0x38cc18._0x151d58)]=_0x5d8dc7,await _0x4d5d68['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1ea4a9,{'\x69\x6d\x61\x67\x65':fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79'+'\x6e\x63'](_0x599170),'\x63\x61\x70\x74\x69\x6f\x6e':config[_0x4b66d0(0x183)]},_0x562c3d);const _0x3f40d0={};_0x3f40d0['\x74\x65\x78\x74']='\u2714',_0x3f40d0[_0x4b66d0(_0x38cc18._0x56653e)]=_0x5d8dc7[_0x4b66d0(0x1b2)];const _0x423853={};_0x423853[_0x4b66d0(_0x38cc18._0x12e658)]=_0x3f40d0,await _0x4d5d68['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1ea4a9,_0x423853);}catch(_0x19ba44){_0x43a7bb[_0x4b66d0(0x1e9)](_0x328b2e,_0x43a7bb[_0x4b66d0(0x1ec)]),_0x43a7bb['\x6e\x59\x53\x68\x47'](_0x30e966,_0x19ba44);}});const _0x13336d={};_0x13336d[_0x4be24e(0x19a)]='\x72\x65\x62\x67\x73',_0x13336d[_0x4be24e(0x190)+_0x4be24e(0x1d6)]=!![],_0x13336d[_0x4be24e(0x1a5)]=__filename,cmd(_0x13336d,async(_0xd52ac,_0x1bd0ef,_0x2a61c7,{from:_0x2218cc,l:_0x4d78d1,quoted:_0x35fc35,body:_0x48c069,isCmd:_0x5bf61a,command:_0x549b1f,args:_0x372679,q:_0x3992d6,isGroup:_0x1ba9cc,sender:_0x188dc9,senderNumber:_0x43263e,botNumber2:_0x41168c,botNumber:_0x4e9fe5,pushname:_0x154b5e,isMe:_0x13aed1,isOwner:_0x4c52ab,groupMetadata:_0x5df7e3,groupName:_0x454dac,participants:_0xa0d288,groupAdmins:_0x1a4a97,isBotAdmins:_0x2e8eb1,isAdmins:_0x490f7b,reply:_0x13bf9e})=>{const _0x50e2b7={_0x19925c:0x1a4,_0x2ad7c6:0x1a6,_0x1d374a:0x18a,_0x41293e:0x1d5,_0xc223df:0x193,_0x9a959f:0x17d,_0x51c41f:0x1f5,_0x487bda:0x1da,_0x46caf5:0x17b},_0x1a3edb=_0x4be24e,_0x2396e5={'\x49\x42\x42\x72\x48':function(_0x141ccb,_0x2776a4){return _0x141ccb||_0x2776a4;},'\x45\x41\x70\x73\x6b':_0x1a3edb(_0x50e2b7._0x19925c),'\x41\x67\x71\x66\x57':'\x31\x32\x33\x34\x35','\x51\x44\x67\x56\x63':_0x1a3edb(0x1e8)+'\x74','\x6d\x61\x49\x50\x55':function(_0x4f06d0,_0x19f19a){return _0x4f06d0(_0x19f19a);},'\x4b\x61\x66\x4d\x63':_0x1a3edb(0x1b3)};try{const _0x490c3a={};_0x490c3a['\x74\x65\x78\x74']='\ud83d\udce5',_0x490c3a['\x6b\x65\x79']=_0x1bd0ef[_0x1a3edb(0x1b2)];const _0xbf5941={};_0xbf5941[_0x1a3edb(0x1ae)]=_0x490c3a,await _0xd52ac['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x2218cc,_0xbf5941);let _0x238869=new Sticker(_0x3992d6,{'\x70\x61\x63\x6b':_0x154b5e,'\x61\x75\x74\x68\x6f\x72':'','\x74\x79\x70\x65':_0x3992d6[_0x1a3edb(_0x50e2b7._0x2ad7c6)](_0x2396e5[_0x1a3edb(0x19b)](_0x2396e5[_0x1a3edb(_0x50e2b7._0x1d374a)],'\x2d\x63'))?StickerTypes[_0x1a3edb(_0x50e2b7._0x41293e)]:StickerTypes['\x46\x55\x4c\x4c'],'\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73':['\ud83e\udd29','\ud83c\udf89'],'\x69\x64':_0x2396e5['\x41\x67\x71\x66\x57'],'\x71\x75\x61\x6c\x69\x74\x79':0x4b,'\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64':_0x2396e5[_0x1a3edb(0x18f)]});const _0x49c5eb=await _0x238869[_0x1a3edb(_0x50e2b7._0xc223df)](),_0x433d33={};_0x433d33[_0x1a3edb(_0x50e2b7._0x9a959f)]=_0x49c5eb;const _0x2007c7={};_0x2007c7[_0x1a3edb(_0x50e2b7._0x51c41f)]=_0x1bd0ef,await _0xd52ac[_0x1a3edb(_0x50e2b7._0x487bda)+'\x65'](_0x2218cc,_0x433d33,_0x2007c7);const _0x1a7904={};_0x1a7904[_0x1a3edb(_0x50e2b7._0x46caf5)]='\u2714',_0x1a7904[_0x1a3edb(0x1b2)]=_0x1bd0ef[_0x1a3edb(0x1b2)];const _0x2a7b47={};_0x2a7b47['\x72\x65\x61\x63\x74']=_0x1a7904,await _0xd52ac['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x2218cc,_0x2a7b47);}catch(_0x1170dc){_0x2396e5[_0x1a3edb(0x198)](_0x13bf9e,_0x2396e5['\x4b\x61\x66\x4d\x63']),_0x4d78d1(_0x1170dc);}});function _0x2ef0(_0x20d391,_0x239c48){const _0x5d0c63=_0x16fa();return _0x2ef0=function(_0xfeb1a,_0x320509){_0xfeb1a=_0xfeb1a-(0xde3+0x260e+-0x2ce*0x12);let _0x3af1d6=_0x5d0c63[_0xfeb1a];return _0x3af1d6;},_0x2ef0(_0x20d391,_0x239c48);}const _0x41ec47={};_0x41ec47[_0x4be24e(0x19a)]=_0x4be24e(0x1aa),_0x41ec47[_0x4be24e(0x190)+_0x4be24e(0x1d6)]=!![],_0x41ec47[_0x4be24e(0x1a5)]=__filename,cmd(_0x41ec47,async(_0x107cd0,_0x122f05,_0x2feaf9,{from:_0xe7f22f,l:_0x47dc07,quoted:_0x51f5ef,body:_0xb301db,isCmd:_0x2feb9d,command:_0x55afec,args:_0x10088a,q:_0x31e81d,isGroup:_0x37a414,sender:_0xb3ec68,senderNumber:_0x5ee151,botNumber2:_0x42be07,botNumber:_0x660c2f,pushname:_0xb71b6e,isMe:_0x215358,isOwner:_0xdd8e32,groupMetadata:_0x45c3c1,groupName:_0x194d60,participants:_0x139c4e,groupAdmins:_0x27021f,isBotAdmins:_0x295773,isAdmins:_0x3ba405,reply:_0x18c51e})=>{const _0x2f52b3={_0x2f6be2:0x1ea,_0x3c8624:0x1f5,_0x5ebcf1:0x1ab,_0x1ef2fa:0x1a2},_0x58df9a=_0x4be24e,_0x3b4b5d={'\x6f\x43\x68\x67\x50':_0x58df9a(0x19d)+'\x67','\x46\x61\x47\x72\x69':'\x52\x65\x6d\x6f\x76\x65\x62\x67','\x76\x4c\x65\x64\x5a':_0x58df9a(_0x2f52b3._0x2f6be2),'\x71\x4c\x6e\x55\x54':function(_0x5c1c51,_0x2a2ead){return _0x5c1c51(_0x2a2ead);},'\x45\x6e\x42\x79\x49':'\x2a\x45\x52\x52\x4f\x52\x20\x21\x21\x2a','\x77\x59\x66\x6b\x57':function(_0x581f8a,_0x110df8){return _0x581f8a(_0x110df8);}};try{const _0x4bb1f9={};_0x4bb1f9['\x74\x65\x78\x74']='\ud83d\udce5',_0x4bb1f9[_0x58df9a(0x1b2)]=_0x122f05['\x6b\x65\x79'];const _0x47de15={};_0x47de15[_0x58df9a(0x1ae)]=_0x4bb1f9,await _0x107cd0[_0x58df9a(0x1da)+'\x65'](_0xe7f22f,_0x47de15);const _0x2c7b70={};_0x2c7b70[_0x58df9a(_0x2f52b3._0x3c8624)]=_0x122f05,await _0x107cd0[_0x58df9a(0x1da)+'\x65'](_0xe7f22f,{'\x64\x6f\x63\x75\x6d\x65\x6e\x74':fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79'+'\x6e\x63'](_0x31e81d),'\x6d\x69\x6d\x65\x74\x79\x70\x65':_0x3b4b5d['\x6f\x43\x68\x67\x50'],'\x66\x69\x6c\x65\x4e\x61\x6d\x65':_0x3b4b5d['\x46\x61\x47\x72\x69']+_0x3b4b5d[_0x58df9a(_0x2f52b3._0x5ebcf1)],'\x63\x61\x70\x74\x69\x6f\x6e':config[_0x58df9a(0x183)]},_0x2c7b70);const _0x464f04={};_0x464f04['\x74\x65\x78\x74']='\u2714',_0x464f04['\x6b\x65\x79']=_0x122f05[_0x58df9a(0x1b2)];const _0x5bfb5e={};_0x5bfb5e[_0x58df9a(0x1ae)]=_0x464f04,await _0x107cd0['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0xe7f22f,_0x5bfb5e);}catch(_0x35b32e){_0x3b4b5d['\x71\x4c\x6e\x55\x54'](_0x18c51e,_0x3b4b5d[_0x58df9a(_0x2f52b3._0x1ef2fa)]),_0x3b4b5d[_0x58df9a(0x1d1)](_0x47dc07,_0x35b32e);}});

// Our Website: https://kavishan.me
