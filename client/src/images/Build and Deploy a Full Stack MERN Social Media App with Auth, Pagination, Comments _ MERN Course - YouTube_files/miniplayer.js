(function(g){var window=this;'use strict';var Dpb=function(a,b){g.T.call(this,{I:"button",Oa:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Ua("click",this.onClick,this);this.updateValue("title",g.NU(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ub(this,g.HU(b.Fc(),this.element))},Epb=function(a){g.T.call(this,{I:"div",
T:"ytp-miniplayer-ui"});this.vg=!1;this.player=a;this.V(a,"minimized",this.Eh);this.V(a,"onStateChange",this.AR)},Fpb=function(a){g.xV.call(this,a);
this.B=new g.$K(this);this.j=new Epb(this.player);this.j.hide();g.rU(this.player,this.j.element,4);a.xg()&&(this.load(),g.pu(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(Dpb,g.T);Dpb.prototype.onClick=function(){this.J.Ta("onExpandMiniplayer")};g.w(Epb,g.T);g.k=Epb.prototype;
g.k.mO=function(){this.tooltip=new g.WX(this.player,this);g.L(this,this.tooltip);g.rU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kd=new g.dW(this.player);g.L(this,this.kd);this.wk=new g.T({I:"div",T:"ytp-miniplayer-scrim"});g.L(this,this.wk);this.wk.Ga(this.element);this.V(this.wk.element,"click",this.mJ);var a=new g.T({I:"button",Oa:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.BG()]});g.L(this,a);a.Ga(this.wk.element);this.V(a.element,"click",this.Gp);
a=new Dpb(this.player,this);g.L(this,a);a.Ga(this.wk.element);this.vv=new g.T({I:"div",T:"ytp-miniplayer-controls"});g.L(this,this.vv);this.vv.Ga(this.wk.element);this.V(this.vv.element,"click",this.mJ);var b=new g.T({I:"div",T:"ytp-miniplayer-button-container"});g.L(this,b);b.Ga(this.vv.element);a=new g.T({I:"div",T:"ytp-miniplayer-play-button-container"});g.L(this,a);a.Ga(this.vv.element);var c=new g.T({I:"div",T:"ytp-miniplayer-button-container"});g.L(this,c);c.Ga(this.vv.element);this.eZ=new g.iX(this.player,
this,!1);g.L(this,this.eZ);this.eZ.Ga(b.element);b=new g.hX(this.player,this);g.L(this,b);b.Ga(a.element);this.nextButton=new g.iX(this.player,this,!0);g.L(this,this.nextButton);this.nextButton.Ga(c.element);this.Hj=new g.PX(this.player,this);g.L(this,this.Hj);this.Hj.Ga(this.wk.element);this.Uc=new g.nX(this.player,this);g.L(this,this.Uc);g.rU(this.player,this.Uc.element,4);this.UI=new g.T({I:"div",T:"ytp-miniplayer-buttons"});g.L(this,this.UI);g.rU(this.player,this.UI.element,4);a=new g.T({I:"button",
Oa:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.BG()]});g.L(this,a);a.Ga(this.UI.element);this.V(a.element,"click",this.Gp);a=new g.T({I:"button",Oa:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.Mua()]});g.L(this,a);a.Ga(this.UI.element);this.V(a.element,"click",this.T8);this.V(this.player,"presentingplayerstatechange",this.Yd);this.V(this.player,"appresize",this.Nb);this.V(this.player,"fullscreentoggled",this.Nb);this.Nb()};
g.k.show=function(){this.Cf=new g.bu(this.zw,null,this);this.Cf.start();this.vg||(this.mO(),this.vg=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Uc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Cf&&(this.Cf.dispose(),this.Cf=void 0);g.T.prototype.hide.call(this);this.player.xg()||(this.vg&&this.Uc.hide(),this.player.loadModule("annotations_module"))};
g.k.Ba=function(){this.Cf&&(this.Cf.dispose(),this.Cf=void 0);g.T.prototype.Ba.call(this)};
g.k.Gp=function(){this.player.stopVideo();this.player.Ta("onCloseMiniplayer")};
g.k.T8=function(){this.player.playVideo()};
g.k.mJ=function(a){if(a.target===this.wk.element||a.target===this.vv.element)g.XL(this.player.Vb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Eh=function(){g.pu(this.player.getRootNode(),"ytp-player-minimized",this.player.xg())};
g.k.df=function(){this.Uc.Jc();this.Hj.Jc()};
g.k.zw=function(){this.df();this.Cf&&this.Cf.start()};
g.k.Yd=function(a){g.bH(a.state,32)&&this.tooltip.hide()};
g.k.Nb=function(){g.zX(this.Uc,0,this.player.tb().getPlayerSize().width,!1);g.oX(this.Uc)};
g.k.AR=function(a){this.player.xg()&&(0===a?this.hide():this.show())};
g.k.Fc=function(){return this.tooltip};
g.k.Ng=function(){return!1};
g.k.zg=function(){return!1};
g.k.ym=function(){return!1};
g.k.jK=function(){};
g.k.qq=function(){};
g.k.ez=function(){};
g.k.qn=function(){return null};
g.k.EH=function(){return null};
g.k.DN=function(){return new g.ue(0,0)};
g.k.Rk=function(){return new g.zr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Kw=function(a,b,c,d,e){var f=0,h=d=0,l=g.Nr(a);if(b){c=g.ku(b,"ytp-prev-button")||g.ku(b,"ytp-next-button");var m=g.ku(b,"ytp-play-button"),n=g.ku(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Lr(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ku(b,"ytp-miniplayer-button-top-left"),f=g.Lr(b,this.element),b=g.Nr(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.tb().getPlayerSize().width;e=f+(e||0);l=g.le(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Wp=function(){};
g.k.mm=function(){return!1};
g.k.zF=function(){};
g.k.eB=function(){};
g.k.Jr=function(){};
g.k.Ir=function(){};
g.k.Su=function(){};
g.k.Rs=function(){};
g.k.hF=function(){};g.w(Fpb,g.xV);g.k=Fpb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.pu(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.xV.prototype.create.call(this);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.xl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.wV("miniplayer",Fpb);})(_yt_player);
