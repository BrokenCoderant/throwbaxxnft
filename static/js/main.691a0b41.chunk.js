(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d}));var r,a=n(10),i=n(3),c=n(1),s=n.n(c),o=n(25),u=n(99),l=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.confirmTransaction(n,"max");case 2:return e.next=4,t.getParsedConfirmedTransaction(n);case 4:return r=e.sent,a=[],null!==r&&void 0!==r&&r.meta&&r.meta.logMessages&&r.meta.logMessages.forEach((function(e){for(var t,n=/Error: (.*)/gm;null!==(t=n.exec(e));)t.index===n.lastIndex&&n.lastIndex++,t.length>1&&a.push(t[1])})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var p=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,p,d,f,b,h,m,x,v,y,j,k,O,w,S,T,P,M,A=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=A.length>4&&void 0!==A[4]?A[4]:r.Parallel,p=A.length>5&&void 0!==A[5]?A[5]:"singleGossip",d=A.length>6&&void 0!==A[6]?A[6]:function(e,t){},f=A.length>7&&void 0!==A[7]?A[7]:function(e,t){return!1},b=A.length>8?A[8]:void 0,h=A.length>9&&void 0!==A[9]?A[9]:[],m=A.length>10&&void 0!==A[10]?A[10]:[],n.publicKey){e.next=9;break}throw new u.e;case 9:if(x=h,b){e.next=14;break}return e.next=13,t.getRecentBlockhash(p);case 13:b=e.sent;case 14:v=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=b.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),x.push(s)},y=0;case 16:if(!(y<i.length)){e.next=23;break}if("continue"!==v(y)){e.next=20;break}return e.abrupt("continue",20);case 20:y++,e.next=16;break;case 23:return x.push.apply(x,Object(a.a)(m)),j=x.filter((function(e){return e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),k=x.filter((function(e){return!e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),e.next=28,n.signAllTransactions(j);case 28:O=e.sent,O=k.concat(O),w=[],console.log("Signed txns length",O.length,"vs handed in length",i.length),S=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=g({connection:t,signedTransaction:O[n]}),l===r.Parallel){e.next=22;break}return e.prev=2,e.next=5,a.then((function(e){var t=e.txid;e.slot;return d(t,n)}));case 5:w.push(a),e.next=20;break;case 8:if(e.prev=8,e.t0=e.catch(2),console.log("Failed at txn index:",n),console.log("Caught failure:",e.t0),f(O[n],n),l!==r.StopOnFailure){e.next=20;break}return e.t1=n,e.next=17,Promise.all(w);case 17:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 20:e.next=23;break;case 22:w.push(a);case 23:case"end":return e.stop()}}),e,null,[[2,8]])})),T=0;case 34:if(!(T<O.length)){e.next=42;break}return e.delegateYield(S(T),"t0",36);case 36:if("object"!==typeof(P=e.t0)){e.next=39;break}return e.abrupt("return",P.v);case 39:T++,e.next=34;break;case 42:if(l===r.Parallel){e.next=47;break}return e.next=45,Promise.all(w);case 45:return M=e.sent,e.abrupt("return",{number:O.length,txs:M});case 47:return e.t1=O.length,e.next=50,Promise.all(w);case 50:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 52:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r,i){var c,p,d,f,g,h,m,x,y,j,k,O,w,S,T=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!(T.length>4&&void 0!==T[4])||T[4],p=T.length>5&&void 0!==T[5]?T[5]:"singleGossip",d=T.length>6&&void 0!==T[6]&&T[6],f=T.length>7?T[7]:void 0,n.publicKey){e.next=6;break}throw new u.e;case 6:if(!(r instanceof o.Transaction)){e.next=10;break}g=r,e.next=24;break;case 10:if(g=new o.Transaction,r.forEach((function(e){return g.add(e)})),e.t0=f,e.t0){e.next=17;break}return e.next=16,t.getRecentBlockhash(p);case 16:e.t0=e.sent;case 17:if(g.recentBlockhash=e.t0.blockhash,d?(h=g).setSigners.apply(h,Object(a.a)(i.map((function(e){return e.publicKey})))):(m=g).setSigners.apply(m,[n.publicKey].concat(Object(a.a)(i.map((function(e){return e.publicKey}))))),i.length>0&&(x=g).partialSign.apply(x,Object(a.a)(i)),d){e.next=24;break}return e.next=23,n.signTransaction(g);case 23:g=e.sent;case 24:return y=g.serialize(),j={skipPreflight:!0,commitment:p},e.next=28,t.sendRawTransaction(y,j);case 28:if(k=e.sent,O=0,!c){e.next=43;break}return e.next=33,v(k,b,t,p);case 33:if(w=e.sent){e.next=36;break}throw new Error("Timed out awaiting confirmation on transaction");case 36:if(O=(null===w||void 0===w?void 0:w.slot)||0,null===w||void 0===w||!w.err){e.next=43;break}return e.next=40,l(t,k);case 40:throw S=e.sent,console.log(S),new Error("Raw transaction ".concat(k," failed"));case 43:return e.abrupt("return",{txid:k,slot:O});case 44:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),f=function(){return(new Date).getTime()/1e3},b=3e4;function g(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,u,l,p,d,g,h,x,y;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?b:a,o=n.serialize(),u=f(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),d=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d||!(f()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,j(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,v(p,c,r,"recent",!0);case 13:if(g=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!g.err){e.next=19;break}throw console.error(g.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===g||void 0===g?void 0:g.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return h=null,e.prev=28,e.next=31,m(r,n,"single");case 31:h=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!h||!h.err){e.next=47;break}if(!h.logs){e.next=46;break}x=h.logs.length-1;case 39:if(!(x>=0)){e.next=46;break}if(!(y=h.logs[x]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+y.slice("Program log: ".length));case 43:--x,e.next=39;break;case 46:throw new Error(JSON.stringify(h.err));case 47:return e.prev=47,d=!0,e.finish(47);case 50:return console.log("Latency",p,f()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function m(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n){return y.apply(this,arguments)}function y(){return y=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,u,l,p=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>3&&void 0!==p[3]?p[3]:"recent",c=p.length>4&&void 0!==p[4]&&p[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(p,d){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),p(u))}),a)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,p(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,j(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function j(e){return new Promise((function(t){return setTimeout(t,e)}))}},111:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return k}));var r=n(13),a=n(3),i=n(1),c=n.n(i),s=n(24),o=n(38),u=n(25),l=n(110),p=n(50),d=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),f=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,O(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:i,programId:p.b,data:e.from([])})},h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,o,u,l,p,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.c(r,t,{preflightCommitment:"processed"}),e.next=3,s.b.fetchIdl(d,a);case 3:return i=e.sent,o=new s.b(i,d,a),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),p=u.itemsRedeemed.toNumber(),f=l-p,e.abrupt("return",{id:n,program:o,state:{authority:u.authority,itemsAvailable:l,itemsRedeemed:p,itemsRemaining:f,isSoldOut:0===f,isActive:!1,isPresale:!1,isWhitelistOnly:!1,goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price,retainAuthority:u.data.retainAuthority}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("collection"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("collection_authority"),r.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,d,b,h,k,O,w,S,T,P,M,A,E,R,K,C,N,I,B,D,W,_,L,U,F,G,Y,H,q,z,V,J,Z,Q,X,$,ee,te,ne,re=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=re.length>2&&void 0!==re[2]?re[2]:[],h=re.length>3&&void 0!==re[3]?re[3]:[],k=s.e.Keypair.generate(),e.next=5,Object(p.d)(k.publicKey,n);case 5:if(O=e.sent[0],!t.state.tokenMint){e.next=12;break}return e.next=9,Object(p.d)(t.state.tokenMint,n);case 9:e.t0=e.sent[0],e.next=13;break;case 12:e.t0=n;case 13:return w=e.t0,S=t.id,T=[],P=[k],M=[],e.t1=s.e.SystemProgram,e.t2=n,e.t3=k.publicKey,e.t4=o.a.span,e.next=24,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 24:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,k.publicKey,0,n,n),e.t10=g(O,n,n,k.publicKey),e.t11=o.c.createMintToInstruction(o.b,k.publicKey,O,n,[],1),A=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=47;break}return e.t12=T,e.next=36,Object(p.f)(n,t.state.gatekeeper.gatekeeperNetwork);case 36:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=47;break}return T.push({pubkey:p.a,isWritable:!1,isSigner:!1}),e.t15=T,e.next=44,Object(p.e)(t.state.gatekeeper.gatekeeperNetwork);case 44:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 47:if(!t.state.whitelistMintSettings){e.next=62;break}return E=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=51,Object(p.d)(E,n);case 51:if(R=e.sent[0],T.push({pubkey:R,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=62;break}return K=s.e.Keypair.generate(),T.push({pubkey:E,isWritable:!0,isSigner:!1}),T.push({pubkey:K.publicKey,isWritable:!1,isSigner:!0}),P.push(K),e.next=60,t.program.provider.connection.getAccountInfo(R);case 60:e.sent&&(A.push(o.c.createApproveInstruction(o.b,R,K.publicKey,n,[],1)),M.push(o.c.createRevokeInstruction(o.b,R,n,[])));case 62:return t.state.tokenMint&&(C=s.e.Keypair.generate(),P.push(C),T.push({pubkey:w,isWritable:!0,isSigner:!1}),T.push({pubkey:C.publicKey,isWritable:!1,isSigner:!0}),A.push(o.c.createApproveInstruction(o.b,w,C.publicKey,n,[],t.state.price.toNumber())),M.push(o.c.createRevokeInstruction(o.b,w,n,[]))),e.next=65,x(k.publicKey);case 65:return N=e.sent,e.next=68,m(k.publicKey);case 68:return I=e.sent,e.next=71,v(S);case 71:return B=e.sent,D=Object(r.a)(B,2),W=D[0],_=D[1],console.log(T.map((function(e){return e.pubkey.toBase58()}))),e.t18=A,e.next=79,t.program.instruction.mintNft(_,{accounts:{candyMachine:S,candyMachineCreator:W,payer:n,wallet:t.state.treasury,mint:k.publicKey,metadata:N,masterEdition:I,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:u.SYSVAR_SLOT_HASHES_PUBKEY,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:T.length>0?T:void 0});case 79:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.next=83,y(S);case 83:return L=e.sent,U=Object(r.a)(L,1),F=U[0],e.next=88,t.program.provider.connection.getAccountInfo(F);case 88:if(!(G=e.sent)||!t.state.retainAuthority){e.next=119;break}return e.prev=90,e.next=93,t.program.account.collectionPda.fetch(F);case 93:return Y=e.sent,console.log(Y),H=Y.mint,e.next=98,j(H,F);case 98:if(q=e.sent,console.log(H),!H){e.next=114;break}return e.next=103,x(H);case 103:return z=e.sent,e.next=106,m(H);case 106:return V=e.sent,console.log("Collection PDA: ",F.toBase58()),console.log("Authority: ",t.state.authority.toBase58()),e.t20=A,e.next=112,t.program.instruction.setCollectionDuringMint({accounts:{candyMachine:S,metadata:N,payer:n,collectionPda:F,tokenMetadataProgram:f,instructions:s.e.SYSVAR_INSTRUCTIONS_PUBKEY,collectionMint:H,collectionMetadata:z,collectionMasterEdition:V,authority:t.state.authority,collectionAuthorityRecord:q}});case 112:e.t21=e.sent,e.t20.push.call(e.t20,e.t21);case 114:e.next=119;break;case 116:e.prev=116,e.t22=e.catch(90),console.error(e.t22);case 119:return J=[],Z=[],Q=t.state,X=892+(G&&Q.retainAuthority?182:0)+(Q.tokenMint?177:0)+(Q.whitelistMintSettings?33:0)+(null!==(a=Q.whitelistMintSettings)&&void 0!==a&&null!==(i=a.mode)&&void 0!==i&&i.burnEveryTime?145:0)+(Q.gatekeeper?33:0)+(null!==(d=Q.gatekeeper)&&void 0!==d&&d.expireOnUse?66:0),$=4,ee=1,console.log("Transaction estimate: ",X),X>1230&&(te=A.splice(0,$),console.log(te),J.push(te),ne=P.splice(0,ee),Z.push(ne)),J.push(A),Z.push(P),M.length>0&&(J.push(M),Z.push([])),e.prev=130,e.next=133,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,J,Z,l.a.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,b,h);case 133:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 136:e.prev=136,e.t23=e.catch(130),console.log(e.t23);case 139:return e.abrupt("return",[]);case 140:case"end":return e.stop()}}),e,null,[[90,116],[130,136]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},225:function(e,t,n){},226:function(e,t){},228:function(e,t){},249:function(e,t){},250:function(e,t){},318:function(e,t,n){},319:function(e,t,n){"use strict";n.r(t);var r,a=n(4),i=n.n(a),c=n(30),s=n.n(c),o=(n(225),n(24)),u=n(9),l=n(3),p=n(13),d=n(108),f=n(1),b=n.n(f),g=n(87),h=n(359),m=n(369),x=n(354),v=n(367),y=n(360),j=n(355),k=n(25),O=n(195),w=n(140),S=n(111),T=n(50),P=n(202),M=n(350),A=n(373),E=n(21),R=Object(M.a)((function(e){return Object(A.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.4),width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:0,marginBottom:e.spacing(.5),height:e.spacing(3.5),padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),K=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete,i=R();return t?Object(E.jsx)(P.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,c=e.minutes,s=e.seconds;return a+=24*t,e.completed?n?Object(E.jsx)("span",{className:i.done,children:n}):null:Object(E.jsxs)("div",{className:i.root,style:r,children:[Object(E.jsxs)(x.a,{elevation:0,children:[Object(E.jsx)("span",{className:i.item,children:a<10?"0".concat(a):a}),Object(E.jsx)("span",{children:"hrs"})]}),Object(E.jsxs)(x.a,{elevation:0,children:[Object(E.jsx)("span",{className:i.item,children:c<10?"0".concat(c):c}),Object(E.jsx)("span",{children:"mins"})]}),Object(E.jsxs)(x.a,{elevation:0,children:[Object(E.jsx)("span",{className:i.item,children:s<10?"0".concat(s):s}),Object(E.jsx)("span",{children:"secs"})]})]})}}):null},C=n(352),N=n(358),I=n(83),B=n(206),D=n(112),W=Object(g.default)(C.a)(r||(r=Object(d.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),_=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,i=e.setIsMinting,c=e.isActive,s=Object(O.b)(),o=Object(B.b)(),u=Object(a.useState)(!1),d=Object(p.a)(u,2),f=d[0],g=d[1],h=Object(I.useGateway)(),m=h.requestGatewayToken,x=h.gatewayStatus,v=Object(a.useState)(-1),y=Object(p.a)(v,2),j=y[0],k=y[1],w=Object(a.useState)(!1),S=Object(p.a)(w,2),T=S[0],P=S[1];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.removeAccountChangeListener)(o.connection,j);case 2:return e.next=4,t();case 4:P(!1),g(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();f&&T&&e()}),[f,T,o.connection,t,j]);var M=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current}(x);return Object(a.useEffect)((function(){var e=[I.GatewayStatus.NOT_REQUESTED,I.GatewayStatus.REFRESH_TOKEN_REQUIRED],t=[].concat(e,[I.GatewayStatus.UNKNOWN]);e.find((function(e){return M===e}))&&!t.find((function(e){return x===e}))&&i(!0),console.log("change: ",x)}),[i,M,x]),Object(E.jsx)(W,{disabled:r||!c,onClick:Object(l.a)(b.a.mark((function e(){var r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||!n.state.isActive||null===n||void 0===n||!n.state.gatekeeper){e.next=34;break}if("ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"!==(r=n.state.gatekeeper.gatekeeperNetwork.toBase58())){e.next=13;break}if(x!==I.GatewayStatus.ACTIVE){e.next=8;break}return e.next=6,t();case 6:e.next=11;break;case 8:return e.next=10,m();case 10:console.log("after: ",x);case 11:e.next=32;break;case 13:if("ttib7tuX8PTWPqFsmUFQTj78MbRhUmqxidJRDv4hRRE"!==r&&"tibePmPaoTgrs929rWpu755EXaxC7M3SthVCf6GzjZt"!==r){e.next=30;break}return P(!0),e.next=17,Object(D.findGatewayToken)(o.connection,s.publicKey,n.state.gatekeeper.gatekeeperNetwork);case 17:if(null===(a=e.sent)||void 0===a||!a.isValid()){e.next=23;break}return e.next=21,t();case 21:e.next=28;break;case 23:return window.open("https://verify.encore.fans/?gkNetwork=".concat(r),"_blank"),e.next=26,Object(D.getGatewayTokenAddressForOwnerAndGatekeeperNetwork)(s.publicKey,n.state.gatekeeper.gatekeeperNetwork);case 26:i=e.sent,k(Object(D.onGatewayTokenChange)(o.connection,i,(function(){return g(!0)}),"confirmed"));case 28:e.next=32;break;case 30:throw P(!1),new Error("Unknown Gatekeeper Network: ".concat(r));case 32:e.next=37;break;case 34:return e.next=36,t();case 36:P(!1);case 37:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(E.jsx)(N.a,{}):null!==n&&void 0!==n&&n.state.isPresale||null!==n&&void 0!==n&&n.state.isWhitelistOnly?"WHITELIST MINT":"MINT"})};var L,U,F=n(110),G=Object(g.default)(w.a)(L||(L=Object(d.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),Y=g.default.div(U||(U=Object(d.a)([""]))),H=function(e){var t;return e.state.isActive&&null!==(t=e.state.endSettings)&&void 0!==t&&t.endSettingType.date?Object(T.g)(e.state.endSettings.number):Object(T.g)(e.state.goLiveDate?e.state.goLiveDate:e.state.isPresale?new o.a((new Date).getTime()/1e3):void 0)},q=function(e){var t,n,r,i=Object(a.useState)(!1),c=Object(p.a)(i,2),s=c[0],d=c[1],f=Object(a.useState)(),g=Object(p.a)(f,2),w=g[0],P=g[1],M=Object(a.useState)({open:!1,message:"",severity:void 0}),A=Object(p.a)(M,2),R=A[0],C=A[1],N=Object(a.useState)(!1),B=Object(p.a)(N,2),D=B[0],W=B[1],L=Object(a.useState)(),U=Object(p.a)(L,2),q=U[0],z=U[1],V=Object(a.useState)(),J=Object(p.a)(V,2),Z=J[0],Q=J[1],X=Object(a.useState)(!1),$=Object(p.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),re=Object(p.a)(ne,2),ae=re[0],ie=re[1],ce=Object(a.useState)(),se=Object(p.a)(ce,2),oe=se[0],ue=se[1],le=e.rpcHost,pe=Object(O.b)(),de=Object(a.useMemo)((function(){if(pe&&pe.publicKey&&pe.signAllTransactions&&pe.signTransaction)return{publicKey:pe.publicKey,signAllTransactions:pe.signAllTransactions,signTransaction:pe.signTransaction}}),[pe]),fe=Object(a.useCallback)(Object(l.a)(b.a.mark((function t(){var n,r,a,i,c,s,u,l,p,d,f;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(de){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=45;break}return t.prev=3,t.next=6,Object(S.c)(de,e.candyMachineId,e.connection);case 6:if(i=t.sent,c=(null===i||void 0===i||null===(n=i.state.goLiveDate)||void 0===n?void 0:n.toNumber())<(new Date).getTime()/1e3,s=!1,null===i||void 0===i||!i.state.whitelistMintSettings){t.next=31;break}return i.state.whitelistMintSettings.presale&&(!i.state.goLiveDate||i.state.goLiveDate.toNumber()>(new Date).getTime()/1e3)&&(s=!0),i.state.whitelistMintSettings.discountPrice?ue(i.state.whitelistMintSettings.discountPrice):(ue(void 0),i.state.whitelistMintSettings.presale||(i.state.isWhitelistOnly=!0)),u=new o.e.PublicKey(i.state.whitelistMintSettings.mint),t.next=15,Object(T.d)(u,de.publicKey);case 15:return l=t.sent[0],t.prev=16,t.next=19,e.connection.getTokenAccountBalance(l);case 19:p=t.sent,d=parseInt(p.value.amount)>0,te(d),c=s&&d||c,t.next=31;break;case 25:t.prev=25,t.t0=t.catch(16),te(!1),i.state.isWhitelistOnly&&(c=!1),console.log("There was a problem fetching whitelist token balance"),console.log(t.t0);case 31:null!==i&&void 0!==i&&null!==(r=i.state.endSettings)&&void 0!==r&&r.endSettingType.date&&(z(Object(T.g)(i.state.endSettings.number)),i.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(c=!1)),null!==i&&void 0!==i&&null!==(a=i.state.endSettings)&&void 0!==a&&a.endSettingType.amount?(f=Math.min(i.state.endSettings.number.toNumber(),i.state.itemsAvailable),i.state.itemsRedeemed<f?Q(f-i.state.itemsRedeemed):(Q(0),i.state.isSoldOut=!0)):Q(i.state.itemsRemaining),i.state.isSoldOut&&(c=!1),W(i.state.isActive=c),ie(i.state.isPresale=s),P(i),t.next=43;break;case 39:t.prev=39,t.t1=t.catch(3),t.t1 instanceof Error?t.t1.message==="Account does not exist ".concat(e.candyMachineId)?C({open:!0,message:"Couldn't fetch candy machine state from candy machine with address: ".concat(e.candyMachineId,", using rpc: ").concat(e.rpcHost,"! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!"),severity:"error",noHide:!0}):t.t1.message.startsWith("failed to get info about account")&&C({open:!0,message:"Couldn't fetch candy machine state with rpc: ".concat(e.rpcHost,"! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!"),severity:"error",noHide:!0}):C({open:!0,message:"".concat(t.t1),severity:"error",noHide:!0}),console.log(t.t1);case 43:t.next=46;break;case 45:C({open:!0,message:"Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!",severity:"error",noHide:!0});case 46:case"end":return t.stop()}}),t,null,[[3,39],[16,25]])}))),[de,e.candyMachineId,e.connection,e.rpcHost]),be=function(){var t=Object(l.a)(b.a.mark((function t(){var n,r,a,i,c,s,o,u,l=arguments;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.length>0&&void 0!==l[0]?l[0]:[],r=l.length>1&&void 0!==l[1]?l[1]:[],t.prev=2,d(!0),null===(a=document.getElementById("#identity"))||void 0===a||a.click(),!(pe.connected&&null!==w&&void 0!==w&&w.program&&pe.publicKey)){t.next=16;break}return t.next=8,Object(S.d)(w,pe.publicKey,n,r);case 8:if(i=t.sent,c=i[0],s={err:!0},!c){t.next=15;break}return t.next=14,Object(S.b)(c,e.txTimeout,e.connection,!0);case 14:s=t.sent;case 15:s&&!s.err?(Q(o=Z-1),W(w.state.isActive=o>0),w.state.isSoldOut=0===o,C({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"})):C({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 16:t.next=24;break;case 18:t.prev=18,t.t0=t.catch(2),u=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(console.log(t.t0),u="SOLD OUT!",window.location.reload()):312===t.t0.code&&(u="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?(console.log(t.t0),u="SOLD OUT!"):t.t0.message.indexOf("0x135")&&(u="Insufficient funds to mint. Please fund your wallet."):u="Transaction Timeout! Please try again.",C({open:!0,message:u,severity:"error"}),fe();case 24:return t.prev=24,d(!1),t.finish(24);case 27:case"end":return t.stop()}}),t,null,[[2,18,24,27]])})));return function(){return t.apply(this,arguments)}}(),ge=function(){var e=!D||ae;e&&(w.state.isWhitelistOnly&&!ee&&(e=!1),q&&Date.now()>=q.getTime()&&(e=!1)),ae&&w.state.goLiveDate&&w.state.goLiveDate.toNumber()<=(new Date).getTime()/1e3&&ie(w.state.isPresale=!1),W(w.state.isActive=e)};return Object(a.useEffect)((function(){fe()}),[de,e.candyMachineId,e.connection,fe]),Object(E.jsxs)(h.a,{style:{marginTop:100},children:[Object(E.jsx)(h.a,{maxWidth:"xs",style:{position:"relative"},children:Object(E.jsxs)(x.a,{style:{padding:24,paddingBottom:10,backgroundColor:"#151A1F",borderRadius:6},children:[pe.connected?Object(E.jsxs)(E.Fragment,{children:[w&&Object(E.jsxs)(y.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:[Object(E.jsxs)(y.a,{item:!0,xs:3,children:[Object(E.jsx)(j.a,{variant:"body2",color:"textSecondary",children:"Remaining"}),Object(E.jsx)(j.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(Z)})]}),Object(E.jsxs)(y.a,{item:!0,xs:4,children:[Object(E.jsx)(j.a,{variant:"body2",color:"textSecondary",children:ee&&oe?"Discount Price":"Price"}),Object(E.jsx)(j.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"\u25ce ".concat(ee&&oe?T.c.asNumber(oe):T.c.asNumber(w.state.price))})]}),Object(E.jsx)(y.a,{item:!0,xs:5,children:D&&q&&Date.now()<q.getTime()?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(K,{date:H(w),style:{justifyContent:"flex-end"},status:"COMPLETED",onComplete:ge},"endSettings"),Object(E.jsx)(j.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"TO END OF MINT"})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(K,{date:H(w),style:{justifyContent:"flex-end"},status:null!==w&&void 0!==w&&null!==(t=w.state)&&void 0!==t&&t.isSoldOut||q&&Date.now()>q.getTime()?"COMPLETED":ae?"PRESALE":"LIVE",onComplete:ge},"goLive"),ae&&w.state.goLiveDate&&w.state.goLiveDate.toNumber()>(new Date).getTime()/1e3&&Object(E.jsx)(j.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"UNTIL PUBLIC MINT"})]})})]}),Object(E.jsx)(Y,{children:null!==w&&void 0!==w&&w.state.isActive&&null!==w&&void 0!==w&&w.state.gatekeeper&&pe.publicKey&&pe.signTransaction?Object(E.jsx)(I.GatewayProvider,{wallet:{publicKey:pe.publicKey||new k.PublicKey(S.a),signTransaction:pe.signTransaction},gatekeeperNetwork:null===w||void 0===w||null===(n=w.state)||void 0===n||null===(r=n.gatekeeper)||void 0===r?void 0:r.gatekeeperNetwork,clusterUrl:le,handleTransaction:function(){var t=Object(l.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d(!0),!n.signatures.find((function(e){return e.publicKey.equals(pe.publicKey)}))){t.next=17;break}return C({open:!0,message:"Please sign one-time Civic Pass issuance",severity:"info"}),t.prev=4,t.next=7,pe.signTransaction(n);case 7:n=t.sent,t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(4),C({open:!0,message:"User cancelled signing",severity:"error"}),d(!1),t.t0;case 15:t.next=18;break;case 17:C({open:!0,message:"Refreshing Civic Pass",severity:"info"});case 18:return t.prev=18,t.next=21,Object(F.b)(e.connection,pe,n,[],!0,"confirmed");case 21:C({open:!0,message:"Please sign minting",severity:"info"}),t.next=30;break;case 24:throw t.prev=24,t.t1=t.catch(18),C({open:!0,message:"Solana dropped the transaction, please try again",severity:"warning"}),console.error(t.t1),d(!1),t.t1;case 30:return t.next=32,be();case 32:case"end":return t.stop()}}),t,null,[[4,10],[18,24]])})));return function(e){return t.apply(this,arguments)}}(),broadcastTransaction:!1,options:{autoShowModal:!1},children:Object(E.jsx)(_,{candyMachine:w,isMinting:s,setIsMinting:function(e){return d(e)},onMint:be,isActive:D||ae&&ee})}):Object(E.jsx)(_,{candyMachine:w,isMinting:s,setIsMinting:function(e){return d(e)},onMint:be,isActive:D||ae&&ee})})]}):Object(E.jsx)(G,{children:"Connect Wallet"}),Object(E.jsx)(j.a,{variant:"caption",align:"center",display:"block",style:{marginTop:7,color:"grey"},children:"Powered by DreamNFTeam"})]})}),Object(E.jsx)(m.a,{open:R.open,autoHideDuration:R.noHide?null:6e3,onClose:function(){return C(Object(u.a)(Object(u.a)({},R),{},{open:!1}))},children:Object(E.jsx)(v.a,{onClose:function(){return C(Object(u.a)(Object(u.a)({},R),{},{open:!1}))},severity:R.severity,children:R.message})})]})},z=n(370),V=n(371),J=n(372),Z=n(363),Q=n(364),X=n(366),$=n(368),ee=n(208),te=n(365),ne=Object(ee.a)({palette:{type:"dark"}}),re=function(){try{return new o.e.PublicKey("Co7f9rtaCNJB4RLAMar69Q73DpuFBM796Yn2kGtqAovZ")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),ae="mainnet-beta",ie="https://quiet-black-breeze.solana-mainnet.quiknode.pro/7e75ba80ec2640a634141de7731b630750c762a2/",ce=new o.e.Connection(ie),se=function(){var e=Object(a.useMemo)((function(){return Object(k.clusterApiUrl)(ae)}),[]),t=Object(a.useMemo)((function(){return[Object(z.a)(),Object(V.a)(),Object(J.a)(),Object(Z.a)({network:ae}),Object(Q.a)({network:ae})]}),[]);return Object(E.jsx)(te.a,{theme:ne,children:Object(E.jsx)(X.a,{endpoint:e,children:Object(E.jsx)($.a,{wallets:t,autoConnect:!0,children:Object(E.jsx)(w.b,{children:Object(E.jsx)(q,{candyMachineId:re,connection:ce,txTimeout:3e4,rpcHost:ie})})})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,374)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(318);s.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(se,{})}),document.getElementById("root")),oe()},50:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return h}));var r=n(3),a=n(1),i=n.n(a),c=n(24),s=n(38),o=n(25),u=function(e){if(e)return new Date(1e3*e.toNumber())},l=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),p={format:function(e){return e?l.format(e):"--"},asNumber:function(e){if(e)return e.toNumber()/o.LAMPORTS_PER_SOL}},d=new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),b=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],d);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],f);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],f);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)}},[[319,1,2]]]);
//# sourceMappingURL=main.691a0b41.chunk.js.map