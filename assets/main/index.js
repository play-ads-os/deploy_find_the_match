System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./MainCtrl.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,i,o,r,a,l,s,c,u,h,m,p,d,f,C,g,b,v,y;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Node,s=t.Label,c=t.RichText,u=t.AudioClip,h=t.SpriteAtlas,m=t.Sprite,p=t.AnimationClip,d=t.Animation,f=t.tween,C=t.Vec3,g=t.UITransform,b=t.AudioSource,v=t.Tween,y=t.Component}],execute:function(){var I,_,w,T,E,S,N,x,B,A,z,H,O,M,U,D,P,k,F,G,L,R,W,q,V,j,Q,X,J,K,Y,Z,$,tt,nt,et,it,ot,rt;r._RF.push({},"97177BbVxFCj6Oanrgq4yd3","MainCtrl",void 0);var at=a.ccclass,lt=a.property,st=(t("MainCtrl",(I=at("MainCtrl"),_=lt(l),w=lt(l),T=lt(l),E=lt(l),S=lt(l),N=lt(l),x=lt(l),B=lt(l),A=lt(l),z=lt(l),H=lt(s),O=lt(s),M=lt(s),U=lt(c),D=lt(u),P=lt(h),k=lt(m),F=lt(p),I((R=n((L=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return n=t.call.apply(t,[this].concat(r))||this,i(n,"containItem",R,o(n)),i(n,"containSound",W,o(n)),i(n,"nodeBasket",q,o(n)),i(n,"nodeLight",V,o(n)),i(n,"nodeNotic",j,o(n)),i(n,"nodeCharacter",Q,o(n)),i(n,"nodeEndGame",X,o(n)),i(n,"nodeBgEndGame",J,o(n)),i(n,"nodeRootUIEndGame",K,o(n)),i(n,"listStar",Y,o(n)),i(n,"lblCurTime",Z,o(n)),i(n,"lblCurChar",$,o(n)),i(n,"lblNotic",tt,o(n)),i(n,"lblChoosenItem",nt,o(n)),i(n,"listAudioClip",et,o(n)),i(n,"listIconItem",it,o(n)),i(n,"sprHint",ot,o(n)),i(n,"listAnimClip",rt,o(n)),n._countTime=5,n._countChar=0,n._countStar=0,n._countDownTime=60,n._currentCharIdx=0,n._basePos=[],n._canUpdatePosCurItem=!0,n._listCharChoose=["ao","ay","ai","eo"],n}e(n,t);var r=n.prototype;return r.start=function(){var t=this;this.setupEventListEvent(),this.scheduleOnce((function(){t._countChar>=5?t._countStar=3:t._countChar>=3?t._countChar=2:t._countChar>=1?t._countChar=1:t._countChar=0}),30),this.showNotic("Nghé đang cần tìm một số đồ. Bé hãy giúp Nghé nhé!!!"),this.showHint()},r.setupEventListEvent=function(){for(var t=this,n=0;n<this.containItem.children.length;n++){var e=this.containItem.children[n];this._basePos.push(new ht(e.name,e.getWorldPosition().clone())),e.on(l.EventType.TOUCH_START,this.onTouchStart.bind(this,e)),e.on(l.EventType.TOUCH_MOVE,(function(n){return t.onItemMove(n)})),e.on(l.EventType.TOUCH_END,this.checkIsCorrectItem.bind(this,e))}this.nodeCharacter.getComponent(d).on(d.EventType.FINISHED,this.callbackAnimation.bind(this))},r.callbackAnimation=function(t,n){n.name;this.runAnim(ut.idle)},r.onTouchStart=function(t){var n=t.name;this.runSound(st.click),n.indexOf(this._listCharChoose[this._currentCharIdx])<0||("vay"!=n&&"chai"!=n||(n="cai"+n),t.getComponent(m).spriteFrame=this.listIconItem.getSpriteFrame(n+"1"))},r.onGameEnd=function(){var t=this;this.turnOffEvent(),this.nodeEndGame.active=!0,f(this.nodeBgEndGame).to(.5,{scale:new C(1,1,1)}).call((function(){})).start(),f(this.nodeRootUIEndGame).to(1,{scale:new C(1,1,1)}).call((function(){for(var n=0;n<t._countStar;n++){var e=t.listStar[n].children[0];f(e).to(.5+.2*n,{scale:new C(1,1,1)}).to(.2,{scale:new C(1.1,1.1,1.1)}).to(.2,{scale:new C(1,1,1)}).to(.2,{scale:new C(1.1,1.1,1.1)}).to(.2,{scale:new C(1,1,1)}).start()}})).start()},r.turnOffEvent=function(){for(var t=0;t<this.containItem.children.length;t++){var n=this.containItem.children[t];n.off(l.EventType.TOUCH_MOVE),n.off(l.EventType.TOUCH_END)}},r.checkIsCorrectItem=function(t){var n=t.name;if("vay"!=n&&"chai"!=n||(n="cai"+n),t.getComponent(m).spriteFrame=this.listIconItem.getSpriteFrame(n),-1==t.name.indexOf(this._listCharChoose[this._currentCharIdx])){this.runAnim(ut.sad),this.runSound(st.sad);var e=this._basePos.find((function(n){return n.name==t.name}));return t.setWorldPosition(e.pos),void this.showNotic("Bé thử lại nhé")}var i=t.getComponent(g).getBoundingBoxToWorld(),o=this.nodeBasket.getComponent(g).getBoundingBoxToWorld();if(i.intersects(o)){this.showNotic(["Bé giỏi quá","Bé làm tốt lắm","Đúng rồi"][Math.floor(3*Math.random())]),this.onItemCorrect(t),this.setIfClearItemChar(),this.setupNextChar(),this.showHint()}else{this.runAnim(ut.sad),this.runSound(st.sad),this.showNotic("Bé thử lại nhé");var r=this._basePos.find((function(n){return n.name==t.name}));t.setWorldPosition(r.pos)}},r.setIfClearItemChar=function(){for(var t=!1,n=0;n<this.containItem.children.length;n++)if(this.containItem.children[n].name.indexOf(this._listCharChoose[this._currentCharIdx])>=0){t=!0;break}0==t&&this._currentCharIdx++},r.onItemClicked=function(t){var n=t.name;t.getComponent(m).spriteFrame=this.listIconItem.getSpriteFrame(n+"1")},r.onItemMove=function(t){if(this._canUpdatePosCurItem){var n=t.touch.getUILocation();t.target.setWorldPosition(new C(n.x,n.y)),this._canUpdatePosCurItem=!1}},r.runSound=function(t){var n=t+"";if(this.containSound.getChildByName(n))this.containSound.getChildByName(n).getComponent(b).play();else{var e=new l;e.name=t+"",e.parent=this.containSound;var i=e.addComponent(b);i.clip=this.listAudioClip[t],i.play(),i.node.on(b.EventType.ENDED,(function(){e&&e.destroy()}))}},r.setupNextChar=function(){this._currentCharIdx>=this._listCharChoose.length||(this.lblCurChar.string=this._listCharChoose[this._currentCharIdx])},r.onItemCorrect=function(t){var n=this;this.nodeLight.active=!0,t.parent=this.nodeBasket,t.off(l.EventType.TOUCH_START),t.off(l.EventType.TOUCH_MOVE),t.off(l.EventType.TOUCH_END);var e=t.name;this._countChar++,this.lblChoosenItem.string="<color=#008AC0>"+ct[e].substring(0,ct[e].length-2)+"</color><color=#C91C1C>"+ct[e].substring(ct[e].length-2,ct[e].length)+"</color>",this.runSound(st[e]),this.runSound(st.applause),"vay"!=e&&"chai"!=e||(e="cai"+e),t.getComponent(m).spriteFrame=this.listIconItem.getSpriteFrame(e),t.setWorldPosition(this.nodeBasket.getWorldPosition()),v.stopAllByTarget(this.lblChoosenItem),f(this.lblChoosenItem).to(1,{}).call((function(){n.lblChoosenItem.string=""})).start()},r.runAnim=function(t){this.nodeCharacter.getComponent(d).play(t)},r.showNotic=function(t){var n=this;v.stopAllByTarget(this.nodeNotic),this.nodeNotic.active=!0,this.lblNotic.string=t,f(this.nodeNotic).to(1,{}).call((function(){n.nodeNotic.active=!1})).start()},r.showHint=function(){var t=this;this.sprHint.spriteFrame=null,v.stopAllByTarget(this.sprHint),f(this.sprHint).to(5,{}).call((function(){if(0!=t.containItem.children.length)for(var n=0;n<t.containItem.children.length;n++){var e=t.containItem.children[n];if(e.name.indexOf(t._listCharChoose[t._currentCharIdx])>=0){var i=e.name;"vay"!=i&&"chai"!=i||(i="cai"+i),t.sprHint.spriteFrame=t.listIconItem.getSpriteFrame(i)}}})).start()},r.update=function(t){var n,e;(this._canUpdatePosCurItem=!0,this._countDownTime<=0)||(this._countDownTime-=t,this._countTime-=t,this._countDownTime=Math.max(0,this._countDownTime),this._countTime=Math.max(0,this._countTime),this.lblCurTime.string=(n=Math.ceil(this._countDownTime),e=Math.floor(n/60),n=Math.floor(n%60),((e%=60)<10?"0"+e:e)+" : "+(n<10?"0"+n:n)),this._countDownTime<=0&&this.onGameEnd())},n}(y)).prototype,"containItem",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=n(L.prototype,"containSound",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=n(L.prototype,"nodeBasket",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=n(L.prototype,"nodeLight",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=n(L.prototype,"nodeNotic",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=n(L.prototype,"nodeCharacter",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=n(L.prototype,"nodeEndGame",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=n(L.prototype,"nodeBgEndGame",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=n(L.prototype,"nodeRootUIEndGame",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=n(L.prototype,"listStar",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Z=n(L.prototype,"lblCurTime",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=n(L.prototype,"lblCurChar",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),tt=n(L.prototype,"lblNotic",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),nt=n(L.prototype,"lblChoosenItem",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),et=n(L.prototype,"listAudioClip",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),it=n(L.prototype,"listIconItem",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ot=n(L.prototype,"sprHint",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),rt=n(L.prototype,"listAnimClip",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=L))||G)),function(t){return t[t.quatao=0]="quatao",t[t.ngoisao=1]="ngoisao",t[t.chai=2]="chai",t[t.xetai=3]="xetai",t[t.chumvai=4]="chumvai",t[t.conmeo=5]="conmeo",t[t.vay=6]="vay",t[t.doigiay=7]="doigiay",t[t.gangtay=8]="gangtay",t[t.sobay=9]="sobay",t[t.click=10]="click",t[t.win=11]="win",t[t.sad=12]="sad",t[t.applause=13]="applause",t}(st||{})),ct=function(t){return t.quatao="Quả táo",t.ngoisao="Ngôi sao",t.chai="Cái chai",t.xetai="Xe tải",t.chumvai="Chùm vải",t.conmeo="Con mèo",t.vay="Cái váy",t.doigiay="Đôi giày",t.gangtay="Găng tay",t.sobay="Số bảy",t}(ct||{}),ut=function(t){return t.sad="sad",t.idle="idle",t.happy="happy",t}(ut||{}),ht=function(t,n){this.name=void 0,this.pos=void 0,this.name=t,this.pos=n};r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});