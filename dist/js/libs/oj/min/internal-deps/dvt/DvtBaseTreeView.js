/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.sR=(0,D.j)();(0,D.ca)("DvtBaseTreeView",D.sR);D.w.l(D.sR,D.lj,"DvtBaseTreeView");D.sR.prototype.Init=function(a,b,c){D.sR.o.Init.call(this,a,b,c);this.fb=this.oI(this,a,this.dispatchEvent,this);this.fb.le(this);this.Gd=new D.du(a);this.ul=new D.TU(this);(0,D.Dq)(this.fb,this.Gd);this.Cb=null;this.Qka=!1;this.cQ=null};D.sR.prototype.ud=function(a){a?(this.D=this.pf.Tj(a),(0,D.Sk)()||(this.D.animationOnDisplay="none",this.D.animationOnDataChange="none")):this.D||(this.D=(0,D.tj)(this))};
D.sR.prototype.P=function(a,b,c){var d=a||!this.D;this.ud(a);var e=this.q();if(null==e.nodes)a=null;else{a=[];for(var f=D.H.VG(e.hiddenCategories),g=0;g<e.nodes.length;g++){var h=e.nodes[g];h._index=g;(h=(0,D.$U)(this,f,h))&&a.push(h)}if(1==a.length)a=a[0];else{for(var g=e=0;g<a.length;g++)e+=a[g].Sc();g=this.Vp({value:e,QGa:!0});g.O0(a);a=g}}this.bN({root:a});!(0,window.isNaN)(b)&&!(0,window.isNaN)(c)&&(this.Ga=b,this.Ua=c);this.fb&&this.fb.Ac();c=new D.y(0,0,this.Ga,this.Ua);this.$p(c);b=new D.B(this.j());
this.k(b);this.$Y&&(this.Ec=new D.Fg(this.j(),this.fb),this.Ec.WK=!0);this.Gj(b,c);this.Up&&(this.zT=!0,this.Up.stop());a=this.q().animationOnDataChange;g=new D.y(0,0,this.Ga,this.Ua);c=!1;this.X?a&&d&&(D.Xk.isSupported(a)?(this.Up=D.Xk.mD(this.j(),a,this.X,b,g,this.iI),c=!0):this.mQ&&"auto"==a&&(this.lf=this.V1(),this.k(this.lf),a=new D.QU(this.j(),this.lf),g=this.mQ,e=this.Ka,f=this.LX,h=this.WI,a.jO=!1,a.mQ=g,a.LX=f,(0,D.RU)(h,g)||(0,D.RU)(f,e)?(a.jO=!0,f=(0,D.XR)(g),h=(0,D.XR)(e),f.push(g),h.push(e),
(0,D.Im)(a,f,h)):(0,D.Im)(a,[g],[e]),this.Up=a.Mq(!0))):this.Up=this.W1(b,g);this.LX=this.mQ=null;this.Up&&(this.fb.ei(this),this.Up.he(this.pr,this),this.Up.play());c?this.Mg=this.X:this.X&&this.removeChild(this.X);this.X=b;d?this.Yz():this.h3();(0,D.aV)(this,!this.Up);this.Up||(0,D.bV)(this);this.Pn();this.Up||(0,D.cl)(this)};D.sR.prototype.render=D.sR.prototype.P;D.sR.prototype.wE=(0,D.ba)(null);D.sR.prototype.$p=(0,D.j)();D.sR.prototype.Gj=(0,D.j)();
D.yR=function(a,b){var c=new D.C(a.j(),0,0,a.Ga,a.Ua);(0,D.qi)(c);b.k(c)};D.vR=function(a,b){if(0<a.WI.length){var c=a.Ka?a.Ka.Mc():null;a.Ym&&(0,D.Mr)(a.fb,a.Ym.la());a.Ym=D.cV.P(a,b,a.WI,c);(0,D.Nr)(a.fb,a.Ym.la())}else a.Ym&&(0,D.Mr)(a.fb,a.Ym.la()),a.Ym=null};D.CR=function(a,b){var c=a.q(),d=c.emptyText;d||(d=(0,D.gk)(c,"labelNoData","DvtUtilBundle","NO_DATA"));D.Ve.Lm(b,d,new D.y(0,0,a.Ga,a.Ua),a.la(),c._statusMessageStyle)};D.zR=function(a){return a.Ka&&0<a.Ka.Sc()};D.u=D.sR.prototype;
D.u.W1=function(a,b){var c=this.q().animationOnDisplay;return D.Xk.isSupported(c)?D.Xk.$x(this.j(),c,a,b,this.iI):null};D.u.pr=function(){this.lf&&(this.removeChild(this.lf),this.lf=null);this.Mg&&(this.removeChild(this.Mg),this.Mg=null);this.fb.le(this);(0,D.aV)(this,!0);(0,D.bV)(this);this.zT||(0,D.cl)(this);this.zT=!1;this.Up=null};D.u.V1=function(){return new D.B(this.j())};D.u.vw=function(a){return new D.YU(a)};D.u.oI=function(a,b,c,d){return new D.NR(a,b,c,d)};
D.u.Nea=function(a){if(a&&a.SB){var b=a.xc();if(b&&0<b.length)return b[0]}return a};D.u.Ee=function(a){this.q().highlightedCategories=D.il.Y(a);(0,D.jl)(a,D.XU.GR(this.Ka),"any"==this.q().highlightMatch)};D.sR.prototype.highlight=D.sR.prototype.Ee;D.sR.prototype.select=function(a){var b=this.q();b.selection=D.il.Y(a);this.Hb&&(a=D.XU.GR(this.Ka),(0,D.Al)(this.Hb,b.selection,a))};D.sR.prototype.select=D.sR.prototype.select;D.sR.prototype.la=(0,D.s)("fb");
D.sR.prototype.bN=function(a){var b=this.q();this.mQ=this.Ka;this.LX=this.WI;this.Ka=a.root;this.WI=b._ancestors?b._ancestors:[];this.Vr=this.Ka?D.XU.Gpa(this.Ka):0;this.st=this.Ka?D.XU.Fpa(this.Ka,0):0;this.iI=(0,D.Po)(b.animationDuration)/1E3;this.UPa=a.LNa?a.LNa:{};(this.o8="none"==b.selectionMode?null:"single"==b.selectionMode?"s":"m")?(this.Hb=new D.Tk(this.o8),this.g7=b.selection):this.Hb=null;this.fb.wu(this.Hb);(0,D.rj)(this.fb,this.vw(this.fb));this.sX=null;this.Wha=[];if(b.attributeGroups){a=
D.XU.GR(this.Ka);for(var c=0;c<b.attributeGroups.length;c++){var d=b.attributeGroups[c],e=null;if("continuous"==d.attributeType)D.XU.VGa(d,a),e=new D.ZQ(d.min,d.max,d.minLabel,d.maxLabel,d.colors);else for(var e=new D.$Q,f=0;f<d.groups.length;f++){var g=d.groups[f];e.add(g.id,g.label,{color:g.color,pattern:g.pattern})}this.Wha.push({NGa:e,KNa:d.S,id:d.id});!b._adf&&!b._legendSource&&0==c?this.sX=e:b._legendSource&&b._legendSource==d.id&&(this.sX=e)}D.XU.WMa(this.Wha,a)}if((a=b._contextMenus)&&0<a.length)this.fb.fN=
new D.Sv(this.j(),a);if(b=b._templates){this.$Y={};for(var h in b)a=D.x.ZS(b[h]),this.$Y[h]=a}};D.sR.prototype.h3=function(){for(var a=this.Hb?this.Hb.getSelection():[],b=0;b<a.length;b++)a[b].jb(!0)};D.sR.prototype.Yz=function(){if(this.Hb&&this.g7){var a=D.XU.GR(this.Ka);(0,D.Al)(this.Hb,this.g7,a);this.g7=null}};D.bV=function(a){var b=a.q().highlightedCategories;b&&0<b.length&&a.Ee(b)};
D.aV=function(a,b){var c=null,d=a.cQ;d&&(c=(0,D.ZU)(a.Ka,d),a.fb.ts(c));b&&(a.cQ=null);c||(c=a.Nea(a.Ka),a.fb.ts(c));b&&a.Lp(a.Y_())};D.u=D.sR.prototype;D.u.Lp=function(a){this.Qka=a;this.fb.Lp(a)};D.u.Y_=(0,D.s)("Qka");D.u.HE=function(a,b){return this.Ka.wD(a,b)};D.u.RI=function(a){return this.Hb?a[0]:null};D.u.NB=function(a){a.Ca()||(this.Hb.Km(a,!1),this.fb.Lv());a=[];for(var b=this.Hb.getSelection(),c=0;c<b.length;c++)a.push(b[c].getId());return a};
D.u.MB=function(){for(var a=[],b=this.Hb.getSelection(),c=0;c<b.length;c++)a.push(b[c].ia());return a};D.u.Fu=function(a){this.zf&&(this.removeChild(this.zf),this.zf=null);if(a&&(this.zf=a.eH()))a=this.q().styleDefaults,this.zf.pa(a._dropSiteFillColor,a._dropSiteOpacity),this.zf.Qa(a._dropSiteBorderColor),this.k(this.zf);return this.zf};D.u.Vya=function(a){a instanceof D.Qs&&(0,D.WU)(this,a.getId(),!1)};
D.WU=function(a,b,c){c&&a.Ka&&b==a.Ka.getId()&&0<a.WI.length?(a.cQ=b,a.dispatchEvent(new D.FC(a.WI[0].id))):c||a.dispatchEvent(new D.FC(b));a.j().fe().Ac()};D.sR.prototype.Zaa=function(a){return(0,D.yj)(this.fb,a)};D.sR.prototype.Vp=(0,D.ba)(null);D.sR.prototype.WZ=(0,D.ba)(null);D.sR.prototype.Df=function(){return new D.dV(this)};D.sR.prototype.getAutomation=D.sR.prototype.Df;D.sR.prototype.Aaa=(0,D.s)("Ym");
D.$U=function(a,b,c){if(D.XU.VLa(b,c))return null;var d=a.Vp(c);if(d.Pa()){var e=[];c=c.nodes?c.nodes:[];for(var f=0;f<c.length;f++){var g=c[f];g._index=f;(g=(0,D.$U)(a,b,g))&&e.push(g)}d.O0(e)}return d};D.BR=function(a,b){if((0,D.Ef)()||(0,D.qf)())for(var c=D.XU.$Ha(b),d=0;d<c.length-1;d++){var e=a.getId()+(c[d+1].getId()?c[d+1].getId():c[d+1].Mc()),e=e.replace(/\s+/g,"");c[d+1].ia().setId(e,!0);c[d].ia().Zb("flowto",e)}};
D.u=D.sR.prototype;D.u.xj=function(a,b,c){return this.Gd.xj(c)};D.u.wk=function(a,b){return this.Gd.wk(a,b)};D.u.Xt=function(a,b){return this.Gd.Xt(a,b)};D.u.vp=function(a,b){return this.Gd.vp(a,b)};D.u.Mv=function(a,b){return this.Gd.Mv(a,b)};D.u.Tv=function(a,b){return this.Gd.Tv(a,b)};D.u.Xv=function(){this.Gd.Xv()};D.u.bs=function(){this.Gd.bs()};
D.sR.prototype.oo=function(a,b,c){return this.ul.oo(a,b,c)};D.sR.prototype.gs=function(a,b){return this.ul.gs(a,b)};
D.QU=function(a,b){this.Init(a,b)};D.w.l(D.QU,D.Hm,"DvtBaseTreeAnimationHandler");D.RU=function(a,b){if(!b||!a)return!1;for(var c=0;c<a.length;c++)if(a[c].id==b.getId())return!0;return!1};
D.TU=(0,D.q)("H");D.w.l(D.TU,D.fu,"DvtBaseTreeDropTarget");D.TU.prototype.oo=function(a,b,c){if(a=this.H.HE(a,b))a!=this.qF&&(this.H.Fu(a),this.qF=a);else return this.H.Fu(null),null;return c[0]};D.TU.prototype.gs=function(a,b){var c=this.H.HE(a,b);return c?{bHa:c.getId()}:null};
D.NR=function(a,b,c,d){this.Init(b,c,d);this.H=a};D.w.l(D.NR,D.Jj,"DvtBaseTreeEventManager");D.u=D.NR.prototype;D.u.Iy=function(a){var b=(0,D.yj)(this,a.target);b&&b.Aa&&b.Aa()&&(0,D.UU)(this,b,a.shiftKey)};D.u.Hh=function(a){D.NR.o.Hh.call(this,a);var b=(0,D.yj)(this,a.target);(0,D.VU)(this,b);b&&(!b.Aa||!b.Aa())&&(0,D.UU)(this,b,a.shiftKey)};D.u.Jy=function(a){D.NR.o.Jy.call(this,a);(a=(0,D.yj)(this,a.target))&&a.eu&&a.eu()};
D.u.Om=function(a){D.NR.o.Om.call(this,a);var b=(0,D.yj)(this,a.target);b&&b.du&&(a=(a=(0,D.yj)(this,a.relatedTarget))&&a.getId?a.getId():null,(null==b.getId()||a!=b.getId())&&b.du())};D.u.Ih=function(a){var b=!1,b=this.dd();13==a.keyCode&&!a.ctrlKey?(b=this.dd(),b.hu&&b.hu()&&(a.shiftKey&&(b=this.H.Ka),(0,D.WU)(this.H,b.getId(),a.shiftKey)),(0,D.bi)(a),b=!0):b=D.NR.o.Ih.call(this,a);return b};
D.u.or=function(a){var b=(0,D.yj)(this,a.target);(0,D.VU)(this,b);this.RO&&this.RO!=b&&(this.RO.du(),this.RO=null);b&&(b instanceof D.RR&&this.RO!=b&&(this.RO=b,b.eu()),(!b.Aa||!b.Aa())&&(0,D.UU)(this,b,a.shiftKey))};D.u.tB=function(a){(a=(0,D.yj)(this,a.target))&&a.Aa&&a.Aa()&&(0,D.UU)(this,a,!1)};D.VU=function(a,b){b&&(b instanceof D.AR&&b.Sg())&&(0,D.WU)(a.H,b.getId(),!1)};D.UU=function(a,b,c){b.hu&&b.hu()&&(0,D.WU)(a.H,b.getId(),c)};
D.NR.prototype.dm=function(a,b,c){a=this.H.q();if("dim"==a.hoverBehavior){b=b.Lc?b.Lc():[];a.highlightedCategories=c?b.slice():null;c=new D.om(c?"categoryRollOver":"categoryRollOut",a.highlightedCategories);b=D.XU.GR(this.H.Ka);var d=(0,D.Po)(a.hoverBehaviorDelay);this.DB.Od(c,b,d,"any"==a.highlightMatch)}};D.NR.prototype.zu=function(){return this.H.q().touchResponse};
D.RR=(0,D.j)();D.w.l(D.RR,D.w,"DvtBaseTreeNode");D.ER=new D.Ao("#000000",2,5,5,45,0.5);
D.RR.prototype.Init=function(a,b){this.H=a;this.de=b;var c=this.H.q().nodeDefaults;this.Xa=b.id||b.label;this.fk=b.color?b.color:"#000000";this.dD=b.label;this.uq="string"==typeof b.labelStyle?new D.F(b.labelStyle):b.labelStyle;this.Yr=b.pattern;this.AG=b.selectable;this.It=b.shortDesc?b.shortDesc:b.tooltip;this.ko=b.value;this.pF=b.drilling?b.drilling:c.drilling;this.cD=b.S;this.SB=b.QGa;this.Qw=1;this.qX=null;this.EN=this.Ib=!1};
D.RR.prototype.O0=function(a){if(null!=a)for(var b=0;b<a.length;b++)a[b].kg=this;this.sl=a};D.RR.prototype.xc=function(){return this.sl?this.sl:[]};D.XR=function(a){var b=[],c,d;if(!a.gf())return b;for(var e=0;e<a.sl.length;e++)d=a.sl[e],c=(0,D.XR)(d),b.push(d),b=b.concat(c);return b};D.ZR=function(a){var b=a.kg;b&&(b.qX=a)};D.RR.prototype.KA=function(a){return!a||!this.kg?!1:this.kg==a?!0:this.kg.KA(a)};
D.UR=function(a,b,c){var d=[];if(0>c)return d;if(0==c)return[a];if(b.gf()){a=b.xc();for(var e=0;e<a.length;e++)b=a[e],d=d.concat((0,D.UR)(b,b,c-1))}return d};D.ZU=function(a,b){if(a.getId()==b)return a;for(var c=null,d=a.xc(),e=d.length,c=null,f=0;f<e;f++)if(c=d[f],c=(0,D.ZU)(c,b))return c;return null};D.u=D.RR.prototype;D.u.q=(0,D.s)("de");D.u.Lc=function(){if(this.SB)return[];var a=this.q().categories;a||(a=(a=(a=this.kg)?a.Lc():null)?a.slice():[],a.push(this.getId()));return a};D.u.getId=(0,D.s)("Xa");
D.u.Sc=(0,D.s)("ko");D.u.rb=(0,D.s)("fk");D.u.Be=function(){var a=this.H.q().tooltip;return a?(0,D.Qo)(this.H.j().fe(),a,this.tp()):this.It};D.u.si=(0,D.s)("fk");D.u.zc=(0,D.s)("It");D.u.tp=function(){return{id:this.getId(),label:this.Mc(),value:this.Sc(),color:this.rb()}};D.u.wa=function(){return this.q()._index};D.u.fa=(0,D.s)("Qw");D.u.B=function(a){this.Qw=a;this.G&&this.G.B(this.Qw)};D.u.wf=function(a){this.q()._expanded=a};D.u.Pa=function(){return!1!==this.q()._expanded};
D.u.hu=function(){return"replace"==this.pF||"insertAndReplace"==this.pF};D.u.pd=function(){var a=this.H.q()._spb;if(!a||!a[this.cD])a=null;else{for(var a=a[this.cD],b=[],c=0;c<a.length;c++)b.push(new D.Ai(a[c].popupId,a[c].triggerType,a[c].alignId,a[c].align));a=b}return a};D.u.P=(0,D.j)();D.u.uy=function(a){var b=this.xc();if(null!=b)for(var c=0;c<b.length;c++)b[c].P(a)};D.u.zd=function(){(0,D.ZR)(this);return this};D.u.Ce=function(){return new D.y(0,0,0,0)};D.u.wj=(0,D.ba)(null);
D.u.Ud=function(){this.Ib=!0;this.Ob();this.eu&&this.eu()};D.u.ic=function(){this.Ib&&(this.Ib=!1,this.Db());this.du&&this.du()};D.u.oc=(0,D.s)("Ib");D.u.eu=function(){this.EN=!0};D.u.du=function(){this.EN=!1};D.u.Aa=function(){return"off"!=this.AG&&null!=this.H.o8};D.u.Ca=(0,D.s)("Me");D.u.jb=function(a){this.Me=a;this.Wm()};D.u.Ob=(0,D.j)();D.u.Db=(0,D.j)();D.u.Ee=function(a,b){this.B(b)};D.u.xj=function(a){return this.H.RI(a)};D.u.wk=function(){return this.H.NB(this)};D.u.Wt=function(){return this.H.MB()};
D.u.eH=(0,D.ba)(null);D.u.qH=(0,D.ba)(null);D.u.contains=(0,D.ba)(!1);D.u.wD=(0,D.ba)(null);D.u.Nm=function(){return[]};D.u.sr=(0,D.j)();D.u.ff=function(a,b){a.jO||(0,D.Im)(a,b.xc(),this.xc());var c=this.Nm(),d=b.Nm(c),e;if(!D.H.Xc(d,c)&&(e=new D.en(this.H.j(),this,this.H.iI),(0,D.T)(e.J,"typeNumberArray",this,this.Nm,this.sr,c),a.add(e,1),c=this.ko!=b.ko,e=D.M.jba(this.fk)!=D.M.jba(b.fk),this.sr(d),(d=this.H.q().animationUpdateColor)&&(c||e)))this.fk=d};
D.u.pg=function(a){if(!a.jO||!a.jO||!(a.mQ.getId()==this.getId()||(0,D.RU)(a.LX,this))){this.B(0);var b=new D.Km(this.H.j(),this,this.H.iI);a.add(b,2);if(this.gf())for(b=0;b<this.sl.length;b++)this.sl[b].pg(a)}};D.u.hh=function(a,b){b.k(this.G);var c=new D.gn(this.H.j(),this,this.H.iI);a.add(c,0);if(!a.jO&&this.gf())for(c=0;c<this.sl.length;c++)this.sl[c].hh(a,b)};D.u.gf=function(){return null!=this.sl&&0<this.sl.length};D.VR=function(a){var b=0;for(a=a.kg;a;)b++,a=a.kg;return b};
D.RR.prototype.vI=function(){return this.Yr?new D.Zg(this.Yr,this.fk):new D.tn(this.fk)};D.dS=function(a,b){var c=a.Yr?"#000000":D.M.rj(a.fk);b.pa(c);var d=[];d.push(a.H.q().nodeDefaults.labelStyle);a.uq&&d.push(a.uq);b.Ha((0,D.vo)(d));!0===D.xo&&b.pa(c)};D.TR=function(a){var b=11;(a=a.H.q().nodeDefaults.labelStyle.wA())&&(b=(0,window.parseFloat)(a));return b};D.RR.prototype.ia=(0,D.s)("G");D.RR.prototype.Mc=(0,D.s)("dD");D.SR=function(a){return a.H.$Y?a.H.$Y[a.cD]:null};D.RR.prototype.Bh=function(){return this.hu()};
D.RR.prototype.Wm=(0,D.j)();
D.AR=function(a,b,c,d,e){this.Init(c,d,e);this.Pb=a;this.Xa=b;this.kO=!1};D.w.l(D.AR,D.zj,"DvtBaseTreePeer");D.u=D.AR.prototype;D.u.getId=(0,D.s)("Xa");D.u.Sg=(0,D.s)("kO");D.u.jda=(0,D.q)("kO");D.u.eu=function(){this.Pb&&this.Pb.eu&&this.Pb.eu()};D.u.du=function(){this.Pb&&this.Pb.du&&this.Pb.du()};
D.cV=(0,D.j)();D.w.l(D.cV,D.w,"DvtTreeBreadcrumbsRenderer");D.cV.Mwa=6;D.cV.Exa="color: #003286;";
D.cV.P=function(a,b,c,d){var e=a.j(),f=a.q().styleDefaults,g=[];g.push(new D.F(D.cV.Exa));g.push(f._drillTextStyle);var g=(0,D.vo)(g).toString(),h=g+"text-decoration: underline;",i=[];i.push(f._currentTextStyle);f=(0,D.vo)(i).toString();e=new D.Lr(e,a.Vya,a,{Zv:g,eca:h,dca:h,eqa:f});a.k(e);c=c.slice(0).reverse();c.push({label:d});e.P({items:c},b.e);d=e.F();(0,D.ik)(e,b.x,b.y);d=d.g+D.cV.Mwa;b.y+=d;b.g-=d;a.removeChild(e);return e};
D.wR=(0,D.j)();D.w.l(D.wR,D.w,"DvtTreeLegendRenderer");D.wR.Jxa=4;D.wR.Kw=7;D.wR.NU=24;D.wR.Ixa=11;D.wR.hha="#636363";D.wR.zOa="color:"+D.wR.hha+";";
D.wR.P=function(a,b,c){var d=a.q(),e=d.sizeLabel,f=d.colorLabel;if(!(null==e&&null==f&&null==c)){var g=a.j(),h=a.la(),i=new D.B(g);a.k(i);var k=D.wR.LQ(g,a,i,b.e,e,f,c),l=(0,D.PH)(a.q().skin)?null:"#000000",m=[];m.push(d.styleDefaults._labelStyle);var l={borderColor:l,Zv:(0,D.vo)(m)},d=D.aR.Qca(g,h,i,b.e,b.g,c,l),m=k?k.F():null,n=d?d.F():null;if(k&&!d)k.I(b.y+(b.e-m.e)/2);else if(d&&!k)d.I(b.y+(b.e-n.e)/2);else if(d&&k){var o=b.e-D.wR.NU;m.e+n.e>o&&(m.e>o/2&&n.e>o/2?(i.removeChild(k),i.removeChild(d),
k=D.wR.LQ(g,a,i,o/2,e,f,c),d=D.aR.Qca(g,h,i,o/2,b.g,c,l)):m.e>n.e?(h=o-n.e,i.removeChild(k),k=D.wR.LQ(g,a,i,h,e,f,c)):(e=o-m.e,i.removeChild(d),d=D.aR.Qca(g,h,i,e,b.g,c,l)),m=k.F(),n=d.F());(0,D.D)(g)?(d.I(b.x),k.I(b.x+b.e-m.e)):(k.I(b.x),d.I(b.x+b.e-n.e))}c=i.F();i.O(b.y+b.g-c.g);b.g-=c.g+D.wR.Jxa;a.removeChild(i);return i}};
D.wR.LQ=function(a,b,c,d,e,f){var g=(0,D.D)(a),h=b.la(),i=b.q().styleDefaults,k=null;if(e||f){k=new D.B(a);c.k(k);var l=[];l.push(i._attributeTypeTextStyle);c=(0,D.vo)(l);l=[];l.push(i._attributeValueTextStyle);var i=(0,D.vo)(l),m,n,o,p,l=0;e&&(m=(0,D.gk)(b.q(),"labelSize",b.WZ(),"SIZE"),m=new D.Ff(a,m,0,0),m.Ha(c),k.k(m),o=m.Eb().e,n=new D.Ff(a,e,0,0),n.Ha(i),k.k(n),p=n.Eb().e,l=o+p+D.wR.Kw);var r,t,v,z,L=0;f&&(r=(0,D.gk)(b.q(),"labelColor",b.WZ(),"COLOR"),r=new D.Ff(a,r,0,0),r.Ha(c),k.k(r),v=r.Eb().e,
t=new D.Ff(a,f,0,0),t.Ha(i),k.k(t),z=t.Eb().e,L=v+z+D.wR.Kw);d-=D.wR.NU;l+L>d&&(a=d/2,l>a&&L>a?(D.Ve.Qb(n,a-o-D.wR.Kw,window.Infinity,k)?(p=n.Eb().e,h.Fa(n,new D.zj(e))):(k.removeChild(m),k.removeChild(n),n=null,p=0),D.Ve.Qb(t,a-v-D.wR.Kw,window.Infinity,k)?(z=t.Eb().e,h.Fa(t,new D.zj(f))):(k.removeChild(r),k.removeChild(t),t=null,z=0)):l>L?D.Ve.Qb(n,d-L-o-D.wR.Kw,window.Infinity,k)?(p=n.Eb().e,h.Fa(n,new D.zj(e))):(k.removeChild(m),k.removeChild(n),n=null,p=0):D.Ve.Qb(t,d-l-v-D.wR.Kw,window.Infinity,
k)?(z=t.Eb().e,h.Fa(t,new D.zj(f))):(k.removeChild(r),k.removeChild(t),t=null,z=0));d=0;g?(t&&(t.ca(d),d+=z+D.wR.Kw,r.ca(d),d+=v+D.wR.NU),n&&(n.ca(d),d+=p+D.wR.Kw,m.ca(d))):(n&&(m.ca(d),d+=o+D.wR.Kw,n.ca(d),d+=p+D.wR.NU),t&&(r.ca(d),d+=v+D.wR.Kw,t.ca(d)))}return k};
D.YU=function(a){this.Init(a)};D.w.l(D.YU,D.ck,"DvtBaseTreeKeyboardHandler");D.YU.prototype.oy=function(a){return this.sg(a)&&!a.ctrlKey};D.YU.prototype.Zq=function(a){return 32==a.keyCode&&a.ctrlKey};
D.MR=(0,D.j)();D.w.l(D.MR,D.Hj,"DvtBaseTreeDefaults");
D.SU={skin:"alta",animationDuration:500,animationOnDataChange:"none",animationOnDisplay:"none",highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,nodeDefaults:{labelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")},selectionMode:"multiple",sorting:"off",_statusMessageStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),styleDefaults:{_attributeTypeTextStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"),_attributeValueTextStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),
_currentTextStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),_drillTextStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"),_labelStyle:new D.F("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},touchResponse:"auto",_resources:{}};D.MR.prototype.Init=function(a){a={skyros:D.il.bd(a.skyros,D.SU),alta:D.il.bd(a.alta,{})};D.MR.o.Init.call(this,a)};
D.XU={};D.w.l(D.XU,D.w,"DvtBaseTreeUtils");D.XU.Fpa=function(a,b){var c=b,d=a.xc();if(d)for(var e=0;e<d.length;e++)var f=D.XU.Fpa(d[e],b+1),c=window.Math.max(c,f);return c};D.XU.Gpa=function(a){var b=1;if(a=a.xc())for(var c=0;c<a.length;c++)b+=D.XU.Gpa(a[c]);return b};D.XU.GR=function(a){var b=[];D.XU.TU(a,b);return b};D.XU.$Ha=function(a){var b=[];D.XU.TU(a,b,!1,!0);return b};D.XU.era=function(a){var b=[];D.XU.TU(a,b,!0);return b};D.XU.VLa=function(a,b){return D.H.qM(a,b.categories)};
D.XU.VGa=function(a,b){var c=a.S;if(!(null==c||null!=a.min&&null!=a.max)){for(var d=window.Infinity,e=-window.Infinity,f=0;f<b.length;f++){var g=b[f];c==g.cD&&(g=g.q()._cv,null!=g&&(e=window.Math.max(e,g),d=window.Math.min(d,g)))}null==a.min&&(a.min=d);null==a.max&&(a.max=e)}};D.XU.WMa=function(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=d.NGa,d=d.KNa;if(e instanceof D.ZQ&&null!=d)for(var f=0;f<b.length;f++){var g=b[f];if(d==g.cD){var h=e.get(g.q()._cv);h&&(g.fk=h)}}}};
D.XU.TU=function(a,b,c,d){if(a){var e=a.xc(),f=e?e.length:0;(!c||0==f)&&(!d||a.ia())&&b.push(a);for(a=0;a<f;a++)D.XU.TU(e[a],b,c,d)}};
D.dV=function(a){this.hpa=a;this.Ka=a.Ka};(0,D.ca)("DvtTreeAutomation",D.dV);D.w.l(D.dV,D.xj,"DvtTreeAutomation");D.dV.prototype.ol=function(a){var b=this.hpa.Zaa(a);if(!b)return a.getParent()instanceof D.Ke&&(a=a.getParent()),b=a.getParent(),b instanceof D.Lr?"breadcrumbs["+(0,D.Et)(b,a)+"]":null;if(b instanceof D.RR){a="";if(!this.Ka.SB){if(b==this.Ka)return"node[0]";a+="[0]"}a=(b=this.pP(b,this.Ka.xc()))?a+b:a;if(0<a.length)return"node"+a}return null};
D.dV.prototype.pP=function(a,b){if(b&&0<b.length)for(var c=0;c<b.length;c++){if(b[c]==a)return"["+c+"]";var d=this.pP(a,b[c].xc());if(d)return"["+c+"]"+d}return null};
D.dV.prototype.Ff=function(a){return!a?null:"tooltip"==a?(0,D.Rl)(this.hpa):0==a.indexOf("breadcrumbs")?(a=(0,D.Ht)(this.Ka.H.Aaa(),a.substring(a.indexOf("[")+1,a.indexOf("]"))))?a.ta():null:!this.Ka.SB&&(a=a.substring(0,a.indexOf("["))+a.substring(a.indexOf("]")+1),"node"==a)?this.Ka.ia().ta():(a=(0,D.eV)(this,this.Ka,a))?a.ia().ta():null};D.dV.prototype.getDomElementForSubId=D.dV.prototype.Ff;
D.eV=function(a,b,c){var d=c.indexOf("["),e=c.indexOf("]");if(0<=d&&0<=e){d=c.substring(d+1,e);c=c.substring(e+1);var e=c.indexOf("["),f=c.indexOf("]");return(b=(0,D.fV)(b.xc(),d))&&0<=e&&0<=f?(0,D.eV)(a,b,c):b}};D.gV=function(a,b,c){var d=c.shift();b=(0,D.fV)(b.xc(),d);return 0==c.length?b:0<c.length?(0,D.gV)(a,b,c):null};
D.dV.prototype.Nb=function(a){!this.Ka.SB&&0==a[0]&&a.shift();a=0==a.length?this.Ka:(0,D.gV)(this,this.Ka,a);return{color:a.rb(),label:a.Mc(),selected:void 0==a.Ca()?!1:a.Ca(),size:a.Sc(),tooltip:a.zc()}};D.dV.prototype.getNode=D.dV.prototype.Nb;D.fV=function(a,b){for(var c=0;c<a.length;c++)if(b==a[c].wa())return a[c];return null};

  return D;
});