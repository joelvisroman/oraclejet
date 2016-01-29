/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.YQ=(0,D.j)();D.w.l(D.YQ,D.w,"DvtAttrGroups");D.YQ.prototype.get=(0,D.j)();
D.$Q=function(){this.QQ=[]};D.w.l(D.$Q,D.YQ,"DvtDiscreteAttrGroups");D.$Q.prototype.add=function(a,b,c){this.QQ.push({group:a,ZKa:b,yca:c})};D.$Q.prototype.get=function(a){if(null===a)return null;for(var b=0;b<this.QQ.length;b++)if(this.QQ[b].group==a)return this.QQ[b].yca;return null};
D.ZQ=function(a,b,c,d,e){this.Qj=a;this.ok=b;this.yDa=c?c:this.Qj;this.sDa=d?d:this.ok;this.SK=e;this.Rna=this.ok-this.Qj};D.w.l(D.ZQ,D.YQ,"DvtContinuousAttrGroups");D.ZQ.prototype.get=function(a){if((0,window.isNaN)(a)||null===a)return null;a=0<this.Rna?(a-this.Qj)/this.Rna:0.5;a=window.Math.max(window.Math.min(a,1),0);a*=this.SK.length-1;return a===window.Math.round(a)?this.SK[a]:D.M.sM(this.SK[window.Math.floor(a)],this.SK[window.Math.ceil(a)],a-window.Math.floor(a))};D.ZQ.prototype.bS=(0,D.s)("yDa");
D.aR=(0,D.j)();D.w.l(D.aR,D.w,"DvtLegendAttrGroupsRenderer");D.aR.Kxa=0.4;D.aR.Sga=1;D.aR.Uga=50;D.aR.Tga=10;D.aR.C3=5;D.aR.Ixa=11;D.aR.hha="#636363";D.aR.AOa="#333333";D.aR.Qca=function(a,b,c,d,e,f,g){var h=null;f&&(f instanceof D.ZQ?h=D.aR.JEa(a,b,c,d,f,g):f instanceof D.$Q&&(h=D.aR.KEa(a,c,d,e,f,g)));return h};
D.aR.JEa=function(a,b,c,d,e,f){var g=(0,D.D)(a),h=D.aR.Tga/2+D.aR.Sga,i=new D.B(a);c.k(i);c=e.bS();var k=new D.Ff(a,c,0,h);k.Ha(f.Zv);k.uf();i.k(k);var l=new D.C(a,0,D.aR.Sga,D.aR.Uga,D.aR.Tga),m=g?e.SK.slice(0).slice().reverse():e.SK.slice(0);l.L(new D.ag(0,m));f.borderColor&&l.Qa(f.borderColor);i.k(l);m=D.aR.Uga+D.aR.C3;e=e.sDa;a=new D.Ff(a,e,0,h);a.Ha(f.Zv);a.uf();i.k(a);g?(f=a.Eb().e+D.aR.C3,l.I(f),k.ca(f+m)):(f=k.Eb().e+D.aR.C3,l.I(f),a.ca(f+m));b.Fa(l,new D.zj(c+" - "+e));i.F().e>d&&(i.removeChild(k),
i.removeChild(a),l.I(0));return i};D.aR.KEa=function(a,b,c,d,e,f){var g=new D.B(a);b.k(g);b=[];e=e.QQ.slice(0);for(var h=0;h<e.length;h++){var i=e[h];b.push({text:i.ZKa,color:i.yca.color,pattern:i.yca.pattern,borderColor:f.borderColor})}f={sections:[{items:b}],orientation:"horizontal",layout:{outerGapWidth:0,outerGapHeight:0},textStyle:f.Zv.toString()};b=(0,D.rn)(a);b.setId(null);g.k(b);d=b.Bp(f,c,d*D.aR.Kxa);b.P(f,c,d.g);c=b.es();a=new D.C(a,0,0,c.e,d.g);(0,D.qi)(a);g.Ma(a,0);return g};
D.Qs=function(a){this.Init("breadcrumbsDrill");this.Xa=a};D.w.l(D.Qs,D.Fi,"DvtBreadcrumbsDrillEvent");D.Qs.prototype.getId=(0,D.s)("Xa");
D.Lr=function(a,b,c,d){this.Init(a,b,c,d)};D.w.l(D.Lr,D.B,"DvtBreadcrumbs");D.u=D.Lr.prototype;D.u.Init=function(a,b,c,d){D.Lr.o.Init.call(this,a);this.de=D.bR.Tj(d);this.fb=new D.cR(this,a,b,c);this.fb.le(this);this.setId("breadcrumbs1000"+window.Math.floor(1E9*window.Math.random()));this.eC=-1;this.fW=this.x7=null};D.u.P=function(a,b){this.oa=a?D.il.Y(a):this.oa;this.Aj();this.fW=null;D.dR.P(this,this,b)};D.u.la=(0,D.s)("fb");D.u.ic=function(){var a=this.eC;this.eC=-1;this.lA(a,this.eC)};
D.u.lA=function(a,b){var c=this.x7,d=null,e=(0,D.Ht)(this,b);if(e){var f=(0,D.yj)(this.fb,e);f&&f.Sg&&f.Sg()?(d=this.j(),f=e.F(),e=e.ua(),this.x7=d=new D.vg(d,this,f,e)):this.x7=null}c&&c.zo();d&&d.show()};D.Ht=function(a,b){var c=a.fW;return 0>b||!c||b>=c.length?null:c[b]};D.Et=function(a,b){for(var c=a.fW,d=0;d<c.length;d++)if(c[d]==b)return d};
D.bR={};D.w.l(D.bR,D.w,"DvtBreadcrumbsDefaults");D.bR.pwa={labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;",disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;",PU:2,Uya:"\x3e"};D.bR.Tj=function(a){var b=D.bR.u6(a);return a?D.il.bd(a,b):b};D.bR.u6=function(){return D.il.Y(D.bR.pwa)};D.bR.Qaa=function(a,b){return window.Math.ceil(b*a.layout.gapRatio)};
D.cR=function(a,b,c,d){this.Init(b,c,d);this.Ym=a};D.w.l(D.cR,D.Jj,"DvtBreadcrumbsEventManager");D.cR.prototype.Hh=function(a){D.cR.o.Hh.call(this,a);(0,D.eR)(this,(0,D.yj)(this,a.target))};D.cR.prototype.or=function(a){(0,D.eR)(this,(0,D.yj)(this,a.target))};D.eR=function(a,b){if(b&&b instanceof D.fR&&b.Sg()){var c=new D.Qs(b.getId());a.Fh(c,a.Ym)}};
D.cR.prototype.Yq=function(a){var b=!0,c=a.keyCode;if(9==c){var c=this.Ym,d=c.eC,e;e=d;var f=!a.shiftKey;e=-1==e?f?0:c.oa.Rl.length-2:f?e==c.oa.Rl.length-2?-1:++e:0==e?-1:--e;c.eC=e;c.lA(d,c.eC);c=c.eC;-1==c?b=!1:this.Iw((0,D.Ht)(this.Ym,c))}else 13==c&&(0,D.eR)(this,(0,D.yj)(this,(0,D.Ht)(this.Ym,this.Ym.eC)));b&&(0,D.bi)(a);return b};
D.fR=function(a,b){this.Init();this.Xa=a;this.kO=!1;this.ug=b};D.w.l(D.fR,D.zj,"DvtBreadcrumbsPeer");D.fR.prototype.getId=(0,D.s)("Xa");D.fR.prototype.Sg=(0,D.s)("kO");D.fR.prototype.jda=(0,D.q)("kO");D.fR.prototype.ia=(0,D.s)("ug");
D.dR={};D.w.l(D.dR,D.w,"DvtBreadcrumbsRenderer");D.dR.LB=3;D.dR.P=function(a,b,c){for(var d=a.j(),e=(a.oa?a.oa:{}).Rl?(a.oa?a.oa:{}).Rl:[],f=a.de,g=a.la(),h=[],i=[],k=0;k<e.length;k++){var l=e[k];if(l){var m=D.dR.dF(d,l.label?l.label:"",f,k<e.length-1);h.push(m);l=new D.fR(l.id,m);g.Fa(m,l);i.push(l);k<e.length-1&&l.jda(!0)}}a.fW=h;(0,D.D)(d)?D.dR.rEa(a,b,c,h,i):D.dR.qEa(a,b,c,h,i)};
D.dR.aW=function(a,b,c){b=new D.Ff(a,b,0,0);b.qa(!1);b.Ha(c);var d=(0,D.Te)(c,"padding-top"),e=(0,D.Te)(c,"padding-right"),f=(0,D.Te)(c,"padding-bottom"),g=(0,D.Te)(c,"padding-left"),h=(0,D.lg)(a,b);a=new D.C(a,0,0,h.e+g+e,h.g+d+f);(0,D.qi)(a);a.Ha(c);(0,D.ik)(b,g,d);a.k(b);return a};
D.dR.dF=function(a,b,c,d){if(d&&(c.eca||c.dca)){var e=new D.F(c.Zv);d=new D.F(c.eca);c=new D.F(c.dca);e=D.dR.aW(a,b,e);d=D.dR.aW(a,b,d);c=D.dR.aW(a,b,c);a=new D.Ke(a,e,d,c);a.Td("link");a.Zb("label",b)}else d=new D.F(d?c.Zv:c.eqa),(0,D.Te)(d,"padding-left")||(0,D.Te)(d,"padding-right")||(0,D.Te)(d,"padding-top")||(0,D.Te)(d,"padding-bottom")?a=D.dR.aW(a,b,d):(a=new D.Ff(a,b,0,0),a.Ha(d));return a};D.dR.tka=function(a){if(a instanceof D.Ke)return a=a.$l.ha(0),a.Ad();a instanceof D.C&&(a=a.ha(0));return a.Ad()};
D.dR.ipa=function(a,b){if(a instanceof D.Ke){var c=a.$l.ha(0);D.Ve.Qb(c,window.Math.max(b-c.N(),0),window.Infinity,c.getParent());c=a.zj.ha(0);D.Ve.Qb(c,window.Math.max(b-c.N(),0),window.Infinity,c.getParent());c=a.Ui.ha(0);D.Ve.Qb(c,window.Math.max(b-c.N(),0),window.Infinity,c.getParent())}else a instanceof D.C?(c=a.ha(0),D.Ve.Qb(c,window.Math.max(b-c.N(),0),window.Infinity,c.getParent())):D.Ve.Qb(a,b,window.Infinity,a.getParent())};
D.dR.qEa=function(a,b,c,d,e){for(var f=a.de,g=a.la(),h=[],i=0,k=0;k<d.length;k++){b.k(d[k]);var l=d[k].F();h[k]=l;i=window.Math.max(l.g,i);b.removeChild(d[k])}for(var m=0,k=0;k<d.length;k++){b.k(d[k]);l=h[k];(0,D.ik)(d[k],m,0.5*(i-l.g));if((0,D.Ef)()){var n=new D.C(b.j(),-D.dR.LB,-D.dR.LB,l.e+2*D.dR.LB,l.g+2*D.dR.LB);(0,D.qi)(n);d[k].k(n);k<e.length&&g.Fa(n,e[k])}if(m+l.e>c){a=D.dR.tka(d[k]);D.dR.ipa(d[k],c-m);k<e.length?e[k].Dj(a):g.Fa(d[k],new D.zj(a));break}else m+=l.e+f.PU;if(k<d.length-1){l=
D.dR.Cma(a);b.k(l);n=l.F();(0,D.ik)(l,m,0.5*(i-n.g));n=n.e;if(m+n>c){b.removeChild(l);break}m+=n+f.PU}}};
D.dR.rEa=function(a,b,c,d,e){for(var f=a.de,g=a.la(),h=0;h<d.length;h++){b.k(d[h]);var i=d[h].F();if((0,D.Ef)()){var k=new D.C(b.j(),-D.dR.LB,-D.dR.LB,i.e+2*D.dR.LB,i.g+2*D.dR.LB);(0,D.qi)(k);d[h].k(k);h<e.length&&g.Fa(k,e[h])}if(0>c-i.e){a=D.dR.tka(d[h]);D.dR.ipa(d[h],c);d[h].I(0);h<e.length?e[h].Dj(a):g.Fa(d[h],new D.zj(a));break}else d[h].I(c-i.e),c-=i.e+f.PU;if(h<d.length-1)if(i=D.dR.Cma(a),b.k(i),k=i.F().e,0>c-k){b.removeChild(i);break}else i.I(c-k),c-=k+f.PU}};
D.dR.Cma=function(a){var b=a.de;a=new D.Ff(a.j(),b.Uya,0,0);a.Ha(new D.F(b.Zv));return a};
D.mR=function(a,b){this.Init("dvtPanelDrawerEvent");this.ym=a;this.Xya=b};D.w.l(D.mR,D.Fi,"DvtPanelDrawerEvent");D.mR.prototype.vj=(0,D.s)("ym");
D.jr=function(a,b,c,d){this.Init(a,b,c,d)};D.w.l(D.jr,D.B,"DvtPanelDrawer");
D.jr.prototype.Init=function(a,b,c,d){D.jr.o.Init.call(this,a,null,"panelDrawer"+d);this.XFa=d;this.ea=new D.gR(a,b,c);this.ea.le(this);this.ea.uv.push(D.jr);this.ea.Fa(this,this);(0,D.Ef)()||(0,D.rj)(this.ea,new D.hR(this.ea,this));this.mb=b;this.sa=c;this.Gx={};this.Xr=[];this.Li=this.Sh=window.Number.MAX_VALUE;this.Tr=5;this.XP=0;this.bP;this.Tz;this.fq=this.ej=!1;this.ba;this.UI;this.Mf;this.f5;this.Oj;this.ik;this.mo={};this.Zu="left";this.iC="top";this.Hz=!1;this.Z=null;c&&(this.Z=c.hs());this.km=
(0,D.Vt)(this.Z,"backgroundAlpha",1);this.Ws=(0,D.Vt)(this.Z,"border-color","#bbc7d0");this.Lj=(0,window.parseInt)((0,D.Vt)(this.Z,"border-radius",2));this.jz=(0,D.Vt)(this.Z,"background-color","#ffffff");this.pia=(0,D.Vt)(this.Z,"tab-color-inactive","#dee4e7");this.qia=(0,D.Vt)(this.Z,"tab-border-color-inactive","#c1cede");(0,D.yi)(this);this.zr=10};D.nr=function(a,b,c,d,e,f,g){a.Gx[g]={panel:b,iconUp:c,iconOver:d,iconDown:e,tooltip:f};a.Xr.push(g);a.XP=15+42*a.Xr.length};D.u=D.jr.prototype;
D.u.uu=(0,D.q)("Sh");D.u.aS=function(){return this.Sh-2*this.zr};D.u.nT=(0,D.q)("Li");D.u.YL=function(){return this.Li-2*this.zr};D.u.tN=function(a){return this.Gx[a].icon};D.vr=function(a,b,c,d){a.Tz=a.bP;a.bP=b;a.Pa()&&(a.cN(),(0,D.iR)(a,b,c,d));a.Tz=null};D.ir=function(a){var b=a.bP;return!b&&0<a.Xr.length?a.Xr[0]:b};
D.jr.prototype.wf=function(a,b,c){if(!this.fq){var d=this.ej;this.ej=a;if(d!=a)if(this.fq=!0,a){(0,D.jR)(this,(0,D.ir)(this));a=-(0.8*this.Mf.getWidth());"right"==this.Zu&&(a=-a,this.Mf.ca((0.8-1)*this.Mf.getWidth()));if(b)this.ba.I(a),c&&c(),this.fq=!1;else if(b=new D.ar(this.j(),0.25),b.Vl(D.tD),(0,D.T)(b,"typeNumber",this.ba,this.ba.N,this.ba.I,a),c&&(0,D.al)(b,c),b){var e=this;(0,D.al)(b,function(){e.fq=!1});b.play()}this.cN()}else if(b)this.ba.I(0),this.gga(),c&&c(),this.cN(),this.fq=!1;else{b=
new D.ar(this.j(),0.25);b.Vl(D.vD);(0,D.T)(b,"typeNumber",this.ba,this.ba.N,this.ba.I,0);(0,D.al)(b,this.gga,this);(0,D.al)(b,this.cN,this);c&&(0,D.al)(b,c);var f=this;(0,D.al)(b,function(){f.fq=!1});b.play()}}};D.jr.prototype.Pa=(0,D.s)("ej");
D.jr.prototype.hr=function(){this.ba||(this.ba=new D.B(this.j(),"pd_contentPane"),this.k(this.ba),this.UI=new D.B(this.j(),"pdcp_activeContent"),this.ba.k(this.UI));if(!this.Hz){var a=-42;"right"==this.Zu&&(a=0);var b=15;if("top"==this.iC)for(var c=0;c<this.Xr.length;c++){var d=this.Xr[c],d=(0,D.kR)(this,d);(0,D.ik)(d,a,b);b+=42}else if("bottom"==this.iC){b=-57;for(c=this.Xr.length-1;0<=c;c--)d=this.Xr[c],d=(0,D.kR)(this,d),(0,D.ik)(d,a,b),b-=42}}};
D.kR=function(a,b){var c,d;switch(a.Zu){case "right":d=["M",0,0,"L",42-a.Lj,0,"A",a.Lj,a.Lj,0,0,1,42,a.Lj,"L",42,42-a.Lj,"A",a.Lj,a.Lj,0,0,1,42-a.Lj,42,"L",0,42];break;default:d=["M",42,0,"L",a.Lj,0,"A",a.Lj,a.Lj,0,0,0,0,a.Lj,"L",0,42-a.Lj,"A",a.Lj,a.Lj,0,0,0,a.Lj,42,"L",42,42]}c=d;d=new D.lR(a.j(),c,b,a);(0,D.yi)(d);d.setCursor("pointer");a.ba.Ma(d,0);d.pa(a.pia,a.km);d.Qa(a.qia,1,1);var e=a.Gx[b],f=new D.Dh(a.j(),c);(0,D.qi)(f);(0,D.ik)(e.iconUp,9,9);f.k(e.iconUp);var g=new D.Dh(a.j(),c);(0,D.qi)(g);
(0,D.ik)(e.iconOver,9,9);g.k(e.iconOver);c=new D.Dh(a.j(),c);(0,D.qi)(c);(0,D.ik)(e.iconDown,9,9);c.k(e.iconDown);f=new D.Ke(a.j(),f,g,c);f.WE=!0;e.icon=f;d.k(f);a.mo[b]=d;a.ea.Fa(d,{He:function(){a.Tz=(0,D.ir)(a);a.bP=b;var c=a.mo[b].oc(),d=function(){var b=a.j().fe();b&&b.Ac()};a.Pa()?a.Tz==b?a.wf(!1,!1,d):(a.cN(),(0,D.iR)(a,b,!1)):(a.wf(!0,!1,d),a.hE());a.Tz=null;a.wc(new D.mR(a.Pa()?"show":"hide",a.bP));c&&(0,D.Ml)(a.j(),a)},Gf:function(){return a.Gx[b].tooltip}});d.Iq();return d};
D.iR=function(a,b,c,d){var e=null;c||(e=new D.ar(a.j(),0.25));a.Tz&&(c=a.Gx[a.Tz].panel)&&a.ct.removeChild(c);(0,D.jR)(a,b,e);e?(a.hE(),d&&(0,D.al)(e,d),e.play()):d&&d()};D.jr.prototype.gga=function(){this.Mf&&(this.f5=null,this.ct.Aj(),(0,D.Mz)(this.UI),this.Mf.Q(),this.UI.removeChild(this.Mf),this.ik=this.Oj=this.ct=this.Mf=null)};
D.jR=function(a,b,c){a.Mf||(a.Mf=new D.C(a.j(),0,0,1,1,"pdcp_expandedContent"),a.UI.k(a.Mf),a.Mf.pa(a.jz,a.km),a.ct=new D.B(a.U),a.Mf.k(a.ct),(0,D.ik)(a.ct,a.zr,a.zr));var d=a.Gx[b].panel;if(d){a.ct.k(d);if(a.Tz){var e=a.Gx[a.Tz].panel;e&&e.Ya("dvtResizeEvent",a.kfa,!1,a)}d.ka("dvtResizeEvent",a.kfa,!1,a)}a.Oj||(a.Oj=new D.Dh(a.j(),["M",0,0,"L",1,1],"pdcp_expandedBorder"),a.ik=new D.Dh(a.j(),["M",0,0,"L",1,1],"pdcp_expandedBorderResizable"),a.Mf.k(a.Oj),a.Mf.k(a.ik),a.Oj.Qa(a.Ws,1),a.Oj.L(null),a.ik.Qa(a.Ws,
1),a.ik.L(null),(0,D.yi)(a.Oj),(0,D.yi)(a.ik));var f=a.Gx[b].panel,d=2*a.zr,e=2*a.zr,g=0,h=0;f&&(f=f.es?f.es():f.Am(),d=(0,D.nR)(a,f.e),e=(0,D.wr)(a,f.g),g=f.x,h=f.y);(0,D.oR)(a,b,c,d,e,g,h)};D.jr.prototype.kfa=function(a){var b=new D.ar(this.j(),0.25),c=a.getWidth(),d=a.getHeight(),c=(0,D.nR)(this,c),d=(0,D.wr)(this,d),e=a.ja()?a.ja():0;a=a.na()?a.na():0;(0,D.oR)(this,(0,D.ir)(this),b,c,d,e,a);b.play()};
D.oR=function(a,b,c,d,e,f,g){var h=a.Gx[b].panel;c?(0,D.T)(c,"typeNumber",h,h.N,h.I,-f):h.I(-f);c?(0,D.T)(c,"typeNumber",h,h.M,h.O,-g):h.O(-g);f=new D.y(a.zr,a.zr,d-2*a.zr,e-2*a.zr);g=1.25*d;c?((0,D.T)(c,"typeNumber",a.Mf,a.Mf.getWidth,a.Mf.ma,g),(0,D.T)(c,"typeNumber",a.Mf,a.Mf.getHeight,a.Mf.Da,e),(0,D.T)(c,"typeRectangle",a,a.GBa,a.yoa,f),"left"==a.Zu?(0,D.T)(c,"typeNumber",a.ba,a.ba.N,a.ba.I,-d):"right"==a.Zu&&((0,D.T)(c,"typeNumber",a.ba,a.ba.N,a.ba.I,d),(0,D.T)(c,"typeNumber",a.Oj,a.Oj.N,a.Oj.I,
d),(0,D.T)(c,"typeNumber",a.ik,a.ik.N,a.ik.I,d),(0,D.T)(c,"typeNumber",a.Mf,a.Mf.N,a.Mf.I,-d)),"bottom"==a.iC&&((0,D.T)(c,"typeNumber",a.Oj,a.Oj.M,a.Oj.O,e),(0,D.T)(c,"typeNumber",a.ik,a.ik.M,a.ik.O,e),(0,D.T)(c,"typeNumber",a.Mf,a.Mf.M,a.Mf.O,-e))):(a.Mf.ma(g),a.Mf.Da(e),"right"==a.Zu&&(a.Mf.I(-d),a.Oj.I(d),a.ik.I(d)),"bottom"==a.iC&&(a.Mf.O(-e),a.Oj.O(e),a.ik.O(e)),a.yoa(f));f=a.mo[b];var i;b=d;"right"==a.Zu&&(b=-d);"top"==a.iC?f?(i=["M",0,0,"L",0,f.M(),"M",0,f.M()+42],d=a.mo[a.Xr[a.Xr.length-1]],
i.push("L",0,d.M()+42),a.Oj.Do(i),i=["M",0,d.M()+42,"L",0,e,"L",1.25*b,e]):(i=["M",0,0,"L",0,e,"L",b,e],a.Oj.Do(i)):"bottom"==a.iC&&(f?(i=["M",0,0,"L",0,f.M()+42,"M",0,f.M()],d=a.mo[a.Xr[0]],i.push("L",0,d.M()),a.Oj.Do(i),b*=1.25,i=["M",0,d.M(),"L",0,-e,"L",b,-e]):(i=["M",0,0,"L",0,-e,"L",b,-e],a.Oj.Do(i)));c?(0,D.T)(c,"typePath",a.ik,a.ik.aH,a.ik.Do,i):a.ik.Do(i)};
D.jr.prototype.yoa=function(a){if(this.ct&&a){var b=new D.og("pdcp"+this.XFa);(0,D.qg)(b,a.x,a.y,a.e,a.g);(0,D.rg)(this.ct,b)}this.f5=a};D.jr.prototype.GBa=(0,D.s)("f5");D.nR=function(a,b){var c=b+2*a.zr;if((a.Tr||0==a.Tr)&&c<a.Tr)c=a.Tr;a.Sh&&c>a.Sh&&(c=a.Sh);return c};D.wr=function(a,b){var c=b+2*a.zr;if((a.XP||0==a.XP)&&c<a.XP)c=a.XP;a.Li&&c>a.Li&&(c=a.Li);return c};D.pR=function(a,b){if(a.Mf){var c=a.Mf.Rb().Y();c.B(b);a.Mf.L(c)}for(var d in a.mo){var e=a.mo[d];e&&(c=e.Rb().Y(),c.B(b),e.L(c))}};
D.qR=function(a){if(a.Oj){var b=a.Oj.Yb().Y();b.B(1);a.Oj.V(b)}a.ik&&(b=a.ik.Yb().Y(),b.B(1),a.ik.V(b));for(var c in a.mo){var d=a.mo[c];d&&(b=d.Yb().Y(),b.B(1),d.V(b))}};D.u=D.jr.prototype;D.u.faa=function(){this.qa(!1);(0,D.pR)(this,1);(0,D.qR)(this);this.ct&&this.ct.B(1);for(var a in this.mo){var b=this.tN(a);b&&b.B(1)}};D.u.eaa=function(){this.qa(!0);(0,D.pR)(this,this.km);(0,D.qR)(this);this.ct&&this.ct.B(1);for(var a in this.mo){var b=this.tN(a);b&&b.B(1)}this.Zp(null)};D.u.Gs=function(){this.hE()};
D.u.Zp=function(){this.SE||this.e1()};D.u.hE=function(){(0,D.pR)(this,1)};D.u.e1=function(){(0,D.pR)(this,this.km)};D.u.cN=function(){for(var a in this.mo){var b=this.mo[a];b&&(a==(0,D.ir)(this)&&this.Pa()?(b.pa(this.jz,this.km),b.Qa(this.Ws,1),b.wf(!0)):(b.pa(this.pia,this.km),b.Qa(this.qia,1),b.wf(!1)));var c=this.Pa()&&a==(0,D.ir)(this),d=this.tN(a);d&&(0,D.ch)(d,c);c?this.UI.k(b):this.ba.Ma(b,0)}};D.lr=function(a,b){if(!a.c8||a.c8<b)a.c8=b};
D.jr.prototype.F=function(a){a=D.jr.o.F.call(this,a);a.e/=1.25;return a};D.jr.prototype.la=(0,D.s)("ea");
D.lR=function(a,b,c,d){this.Init(a,b,c,d)};D.w.l(D.lR,D.Dh,"DvtPanelDrawerTab");D.u=D.lR.prototype;D.u.Init=function(a,b,c,d){D.lR.o.Init.call(this,a,b,"pdcp_tab_"+c);this.xb=d;this.EF=!1;this.mEa=c};D.u.Zj=function(a){var b=a.keyCode;if(13==b||32==b){var b=this.xb.la(),c=(0,D.Ze)(this,new D.E(0,0));a=D.$e.WG(a,this.U,c.x,c.y);a.target=this;b.EI(a)}};D.u.Pa=(0,D.s)("EF");D.u.wf=function(a){this.EF!=a?(this.EF=a,this.sda()):this.EF=a};
D.u.ec=function(){var a=[];a.push(this.Pa()?(0,D.P)("DvtUtilBundle","STATE_EXPANDED"):(0,D.P)("DvtUtilBundle","STATE_COLLAPSED"));return(0,D.hk)(this.xb.Gx[this.mEa].tooltip,a)};D.u.Iq=function(){this.Td("button");(0,D.Ye)()||this.Zb("label",this.ec())};D.u.sda=function(){(0,D.Ye)()||this.Zb("label",this.ec())};D.u.Ce=function(a){return this.F(a)};D.u.wj=function(){return this.ta()};D.u.Ud=function(){this.Ib=!0;this.tm||this.cW();this.tm.show();(0,D.ug)(this.U,this)};
D.u.ic=function(){this.Ib=!1;this.tm||this.cW();this.tm.zo()};D.u.oc=(0,D.s)("Ib");D.u.zd=function(a){return this.xb.la().Rf.zd(this,a)};D.u.cW=function(){var a=this.F();this.tm=new D.vg(this.j(),this,new D.y(a.x+1,a.y+1,a.e-2,a.g-2),null,null,!0)};
D.gR=function(a,b,c){this.Init(a,b,c)};D.w.l(D.gR,D.Jj,"DvtPanelDrawerEventManager");D.u=D.gR.prototype;D.u.Hh=function(a){var b=(0,D.yj)(this,(0,D.hm)(this,a));D.gR.o.Hh.call(this,a);b&&(b.He&&b.He(a),a.stopPropagation())};D.u.Iy=function(a){var b=(0,D.yj)(this,(0,D.hm)(this,a));b&&(b.Bh&&(b.Bh()&&b.Yp)&&b.Yp(a),a.stopPropagation())};D.u.Ly=function(a){D.gR.o.Ly.call(this,a);var b=(0,D.yj)(this,(0,D.hm)(this,a));b&&b.Gs&&b.Gs(a)};
D.u.Ky=function(a){D.gR.o.Ky.call(this,a);var b=(0,D.yj)(this,(0,D.hm)(this,a));b&&b.Zp&&b.Zp(a)};D.u.xB=function(a){var b=(0,D.yj)(this,(0,D.hm)(this,a));D.gR.o.xB.call(this,a);b&&(b.He&&b.He(a),a.stopPropagation())};
D.hR=function(a,b){this.Init(a,b)};D.w.l(D.hR,D.ck,"DvtPanelDrawerKeyboardHandler");D.hR.prototype.Init=function(a,b){D.hR.o.Init.call(this,a);this.xb=b};D.hR.prototype.Ch=function(a){var b=a.keyCode,c=this.ea.dd();return 9==b?(b=null,(0,D.bi)(a),b=c?c:this.xb.mo[this.xb.Xr[0]]):13==b||32==b?(c.Zj(a),null):D.hR.o.Ch.call(this,a)};
D.hR.prototype.zd=function(a,b){if(!(40==b.keyCode||38==b.keyCode))return a;for(var c=a,d=40==b.keyCode?!0:!1,e=this.xb.Xr,f=-1,g=0;g<e.length;g++)if(a==this.xb.mo[e[g]]){f=d?g==e.length-1?-1:g+1:0==g?-1:g-1;break}0<=f&&(c=this.xb.mo[e[f]]);return c};
D.zA=function(a,b,c,d,e,f,g){this.Init(a,b,c,d,e,f,g)};D.w.l(D.zA,D.B,"DvtAccordion");D.zA.prototype.Init=function(a,b,c,d,e,f,g){D.zA.o.Init.call(this,a,null,b);this.fn=f;this.Z=(new D.IQ).Tj(g);this.CY={};this.zv=[];this.Sh=c;this.Tr=0;this.Li=d;this.mV=this.m4=!1;this.ea=e};D.EA=function(a,b,c,d,e){e||(e="accordion_"+b.replace(/ /g,"_")+window.Math.floor(1E9*window.Math.random()));b=new D.KA(a.j(),c,b,d,!0,a,a.ea,e,a.fn,a.Z);a.CY[e]=b;a.zv.push(e);a.k(b)};
D.zA.prototype.P=function(){for(var a=(0,D.FA)(this),b=!1,c=0;c<this.zv.length;c++){var d=(0,D.JQ)(this,c);d.P(a);b&&!this.mV&&d.setActive(!1);d.Or&&d.DF&&(b=!0)}!b&&(0<this.zv.length&&!this.m4)&&(0,D.JQ)(this,0).setActive(!0);(0,D.KQ)(this)};D.zA.prototype.nT=(0,D.q)("Li");D.zA.prototype.uu=(0,D.q)("Sh");
D.zA.prototype.update=function(a){a=this.CY[a];var b=a.Or;if(b){if(b)if(a.DF)if(this.m4)b=!0;else{for(var c=0,d=0;d<this.zv.length;d++)b=(0,D.JQ)(this,d),b.Or&&c++;b=1<c}else b=!1;b&&a.setActive(!1)}else{if(!this.mV)for(b=0;b<this.zv.length;b++)(0,D.JQ)(this,b).setActive(!1);a.setActive(!0)}(0,D.KQ)(this)};
D.FA=function(a){if(!a.mma){for(var b=0,c=a.Z.paddingX,d=0;d<a.zv.length;d++){var e=(0,D.JQ)(a,d),f;f=e;if(!f.qL){var g=new D.Ff(f.U,f.oj);g.Ha(f.Yoa);if(g=g.Eb())g.e=g.e+f.bla+f.eGa;f.qL=g}f=f.qL;f.e>b&&(b=f.e);e=e.es().e+2*c;e>b&&(b=e)}b=window.Math.min(b,a.Sh);b=window.Math.max(b,a.Tr);a.mma=b}return a.mma};
D.zA.prototype.Paa=function(){if(!this.Li){for(var a=0,b=0,c=0;c<this.zv.length;c++){var d=(0,D.JQ)(this,c),e=d,f=null;0>e.Pf(e.uh)?(e.k(e.uh),e.uh.I(e.YX),e.uh.O(e.AF+e.ZX),f=e.Am(),e.removeChild(e.uh)):f=e.Am();e=f.g;if(d.DF&&e>a)a=e;else if(!d.DF||this.mV)b+=e}this.Li=a+b}return this.Li};D.JQ=function(a,b){return 0<=b&&b<a.zv.length?a.CY[a.zv[b]]:null};
D.KQ=function(a){for(var b=0,c=0;c<a.zv.length;c++){var d=(0,D.JQ)(a,c);d.O(b);d.Or?(d.expand(),b+=d.Am().g,b+=a.Z.paddingY):(d.collapse(),b+=a.Z.sectionHeader.headerHeight)}b=a.Am();a.wc(new D.jC(b.e,b.g,0,0))};D.zA.prototype.w_=function(){for(var a=[],b=0;b<this.zv.length;b++)a.push((0,D.JQ)(this,b));return a};
D.KA=function(a,b,c,d,e,f,g,h,i,k){this.Init(a,b,c,d,e,f,g,h,i,k)};D.w.l(D.KA,D.B,"DvtAccordionSection");D.u=D.KA.prototype;
D.u.Init=function(a,b,c,d,e,f,g,h,i,k){D.KA.o.Init.call(this,a,null,h);this.kg=f;this.fn=i;this.oj=c;this.Xa=h;this.uh=b;this.Vu=this.bv=null;this.Or=(this.DF=e)?d:!0;this.ea=g;this.Z=k;this.AF=this.Z.sectionHeader.headerHeight;this.YX=this.Z.paddingX;this.ZX=this.Z.paddingY;this.Yoa=this.Z.sectionHeader.styleEna;this.bla=this.Z.sectionHeader.imageWidth;this.LCa=this.Z.sectionHeader.imageHeight;this.eGa=this.Z.sectionHeader.textPadding};D.u.getId=(0,D.s)("Xa");D.u.Vv=(0,D.s)("oj");D.u.setActive=(0,D.q)("Or");
D.u.es=function(){var a=null;0>this.Pf(this.uh)?(this.k(this.uh),a=this.uh.F(),this.removeChild(this.uh)):a=this.uh.F();return a};
D.u.P=function(a){var b=this.AF;if(this.DF){var c,d,e;this.fn.v?(c=(0,D.NQ)(this,0,this.fn.v("sectionExpEna"),this.oj,a,b),d=(0,D.NQ)(this,1,this.fn.v("sectionExpOvr"),this.oj,a,b),e=(0,D.NQ)(this,2,this.fn.v("sectionExpDwn"),this.oj,a,b)):(c=(0,D.NQ)(this,0,this.fn.sectionExpEna,this.oj,a,b),d=(0,D.NQ)(this,1,this.fn.sectionExpOvr,this.oj,a,b),e=(0,D.NQ)(this,2,this.fn.sectionExpDwn,this.oj,a,b));this.bv=new D.Ke(this.U,c,d,e);this.bv.Td("button");c=(0,D.hk)(this.oj,[(0,D.P)("DvtUtilBundle","STATE_EXPANDED")]);
this.bv.Zb("label",c);this.fn.v?(c=(0,D.NQ)(this,0,this.fn.v("sectionColEna"),this.oj,a,b),d=(0,D.NQ)(this,1,this.fn.v("sectionColOvr"),this.oj,a,b),e=(0,D.NQ)(this,2,this.fn.v("sectionColDwn"),this.oj,a,b)):(c=(0,D.NQ)(this,0,this.fn.sectionColEna,this.oj,a,b),d=(0,D.NQ)(this,1,this.fn.sectionColOvr,this.oj,a,b),e=(0,D.NQ)(this,2,this.fn.sectionColDwn,this.oj,a,b));this.Vu=new D.Ke(this.U,c,d,e);this.Vu.Td("button");c=(0,D.hk)(this.oj,[(0,D.P)("DvtUtilBundle","STATE_COLLAPSED")]);this.Vu.Zb("label",
c);this.ea.Fa(this.bv,this);this.ea.Fa(this.Vu,this)}else a=(0,D.OQ)(this,3,a,b),b=(0,D.PQ)(this,this.oj),this.P6=new D.B(this.U),this.P6.k(a),this.P6.k(b);this.DF?this.Or?(this.Ma(this.bv,0),this.k(this.uh),this.uh.I(this.YX),this.uh.O(this.AF+this.ZX)):this.k(this.Vu):(this.Ma(this.P6,0),this.k(this.uh),this.uh.I(this.YX),this.uh.O(this.AF+this.ZX))};
D.u.collapse=function(){this.DF&&(0<=this.Pf(this.bv)&&this.removeChild(this.bv),0<=this.Pf(this.uh)&&this.removeChild(this.uh),this.k(this.Vu),this.setActive(!1),this.oc()&&this.Ud())};D.u.expand=function(){0<=this.Pf(this.Vu)&&this.removeChild(this.Vu);this.k(this.bv);this.k(this.uh);this.uh.I(this.YX);this.uh.O(this.AF+this.ZX);this.setActive(!0);this.oc()&&this.Ud()};
D.NQ=function(a,b,c,d,e,f){var g=a.bla,h=a.LCa,i=(a.AF-h)/2,k=new D.B(a.U);b=(0,D.OQ)(a,b,e,f);k.k(b);(c=c?new D.Pe(a.U,c,0,i,g,h):null)&&k.k(c);d=(0,D.PQ)(a,d,e-g-0,f,k);(0,D.D)(a.U)?(f=d.Eb(),d.I(e-f.e-g),c&&c.I(e-g)):d.I(g);a.tm||a.cW(c?c:d);return k};D.PQ=function(a,b,c,d,e){var f=null;if(b){f=new D.Ff(a.U,b);f.Ha(a.Yoa);D.Ve.Qb(f,c,d,e);b=f.Eb();if(!a.qL||a.qL.e<b.e||a.qL.g<b.g)a.qL=b;f.O((a.AF-b.g)/2)}return f};
D.OQ=function(a,b,c,d){var e=null;switch(b){case 1:e=a.Z.sectionHeader.styleOvr;break;case 2:e=a.Z.sectionHeader.styleDwn;break;case 3:e=a.Z.sectionHeader.styleDis;break;default:e=a.Z.sectionHeader.styleEna}a=new D.C(a.U,0,0,c,d);a.V((0,D.QQ)(e));a.L((0,D.RQ)(e));return a};D.RQ=function(a){var b=a.A("background-color");a=(0,D.$f)(a);var c=null;if(a&&a instanceof D.ze){var b=a.im,c=a.hm,d=a.Yy;a=a.Ll();c=new D.ag(a,b,c,d)}else b&&(c=new D.tn(b,1));return c};
D.QQ=function(a){a=a.A("border-color");return new D.I(a,1,1)};D.u=D.KA.prototype;D.u.Ce=function(){var a=this.Or?this.bv:this.Vu,b=a.F(),c=(0,D.Ze)(a,new D.E(b.x,b.y)),a=(0,D.Ze)(a,new D.E(b.x+b.e,b.y+b.g));return new D.y(c.x,c.y,a.x-c.x,a.y-c.y)};D.u.wj=function(){return(this.Or?this.bv:this.Vu).ta()};D.u.Ud=function(){this.Ib=!0;this.tm.show();(0,D.ug)(this.U,this.Or?this.bv:this.Vu)};D.u.ic=function(){this.Ib=!1;this.tm.zo()};D.u.oc=(0,D.s)("Ib");D.u.zd=function(a){return this.ea.Rf.zd(this,a)};
D.u.cW=function(a){var b=a.F(),c=a.N()||b.x;a=a.M()||b.y;this.tm=new D.vg(this.j(),this,new D.y(c,a,b.e,b.g),null,null,!0)};
D.IQ=function(){this.Init({skyros:D.LQ,alta:D.MQ})};D.w.l(D.IQ,D.Hj,"DvtAccordionDefaults");
D.LQ={skin:"alta",sectionHeader:{styleEna:new D.F("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleOvr:new D.F("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDwn:new D.F("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDis:new D.F("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),
headerHeight:33,imageWidth:24,imageHeight:24,textPadding:5},paddingX:0,paddingY:0};D.MQ={};
D.Zh=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.w.l(D.Zh,D.B,"DvtTrain");D.Zh.prototype.Init=function(a,b,c,d,e,f){D.Zh.o.Init.call(this,a,null,e);this.jA=a.fe();this.Al=c;this.YB=d;this.ZV=c.length;this.kz=(0,window.Array)(this.ZV);this.Dq=0;this.QCa=f;this.BE(b)};D.Zh.prototype.qT=function(a){0<=a&&a<this.ZV&&(0,D.VQ)(this,this.Dq,a)};
D.Zh.prototype.He=function(a){(0,D.bi)(a);for(var b=0;b<this.kz.length;b++){var c=a.target;if(this.kz[b]===c||this.kz[b]===c.getParent()){a=this.Dq;(0,D.VQ)(this,a,b);a!=b&&(b=new D.WQ(this.Dq),this.wc(b,!1));break}}};D.VQ=function(a,b,c){a.Dq=c;if(b=a.kz[b])b.zj&&b.zj.setCursor("pointer"),b.Ui&&b.Ui.setCursor("pointer"),(0,D.ch)(b,!1);if(b=a.kz[c])b.zj&&b.zj.setCursor("default"),b.Ui&&b.Ui.setCursor("default"),(0,D.ch)(b,!0)};
D.Zh.prototype.BE=function(a){var b=(0,D.D)(this.j()),c;if(!this.HV){if(this.YB&&(c=this.YB[0]))this.HV=(0,D.rq)(c.getWidth());this.HV||(this.HV=8)}c=this.HV;for(var d=0;d<this.ZV;d++){var e,f=e=this.uw(c,d==this.Dq,this.Al[d]);f.ka(D.eh,this.He,!1,this);(0,D.Ef)()||f.ka(D.dk,this.He,!1,this);f=d;b&&(f=this.ZV-1-d);a&&a.Fa(e,e);(0,D.ik)(e,f*(c+3),this.QCa?0:1);this.k(e);this.kz[d]=e}};D.Zh.prototype.As=function(a,b){return new D.Pe(this.j(),a,0,0,b,b)};
D.XQ=function(a,b,c,d){var e=a.YB?a.YB[c]:null;if(e=e?e.A("content"):null)a=a.As(e,b);else{var f,g,h;2==c?(h=0,g="#61bde3",e="#0066ff",a.YB&&(f=a.YB[2])):(h=1,g="#c0cbd5",e="#5d7891",a.YB&&(f=a.YB[0]));f&&(f.A("border-color")&&(e=f.A("border-color")),f.A("background-color")&&(g=f.A("background-color")));a=new D.C(a.j(),h,h,b-2*h,b-2*h);a.pa(g);a.Qa(e)}a.setCursor(0==c||d?"default":"pointer");return a};
D.Zh.prototype.uw=function(a,b,c){a=new D.Ke(this.j(),(0,D.XQ)(this,a,0,b),(0,D.XQ)(this,a,1,b),(0,D.XQ)(this,a,2,b),null);a.Dj(c);a.WE=!0;b&&(0,D.ch)(a,b);return a};
D.WQ=function(a){this.Init("dvtTrain");this.type=this.Ta();this.xl=a};(0,D.ca)("DvtTrainEvent",D.WQ);D.w.l(D.WQ,D.Fi,"DvtTrainEvent");D.WQ.TYPE="dvtTrain";D.WQ.prototype.wa=(0,D.s)("xl");D.WQ.prototype.getIndex=D.WQ.prototype.wa;
D.xx=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.w.l(D.xx,D.B,"DvtOverviewWindow");D.u=D.xx.prototype;D.u.Init=function(a,b,c,d,e,f){D.xx.o.Init.call(this,a,null,b);this.zb=c;this.Vb=d;this.pi=e;this.Ki=f;this.$C=null};
D.u.P=function(){this.VP=!1;this.N8=!0;this.kc&&((0,D.Ef)()?(this.kc.Ya(D.eh,this.EX,!1,this),this.kc.Ya(D.LB,this.FX,!1,this),this.kc.Ya(D.MB,this.$P,!1,this)):(this.kc.Ya(D.fh,this.EX,!1,this),this.kc.Ya(D.Jq,this.FX,!1,this),this.kc.Ya(D.Kq,this.$P,!1,this),this.kc.Ya(D.Pz,this.xma,!1,this)),(0,D.rg)(this.kc,null));this.Aj();this.kc=this.ze=null;var a=new D.og(this.getId());(0,D.qg)(a,0,0,this.pi,this.Ki);this.kc=new D.C(this.U,0,0,this.pi,this.Ki);(0,D.rg)(this.kc,a);(0,D.qi)(this.kc);this.k(this.kc);
this.ze=new D.C(this.U,0,0,0,0,this.getId()+":viewport");a=this.C_("viewport-bg-color");this.ze.Qa(this.C_("viewport-border-color"),null,2);this.ze.pa(a);this.ze.qa(!1);this.kc.k(this.ze);(0,D.Ef)()?(this.kc.ka(D.eh,this.EX,!1,this),this.kc.ka(D.LB,this.FX,!1,this),this.kc.ka(D.MB,this.$P,!1,this)):(this.kc.ka(D.fh,this.EX,!1,this),this.kc.ka(D.Jq,this.FX,!1,this),this.kc.ka(D.Kq,this.$P,!1,this),this.kc.ka(D.Pz,this.xma,!1,this))};D.u.Pa=(0,D.s)("EF");D.u.wf=(0,D.q)("EF");
D.u.es=function(){return new D.y(this.zb,this.Vb,this.pi,this.Ki)};D.ur=function(a,b,c){var d=(0,D.SQ)(a,b.x,b.y,c),e=(0,D.SQ)(a,b.x+b.e,b.y+b.g,c);b=d.x;var f=d.y,g=e.x-d.x,d=e.y-d.y;c?((0,D.T)(c,"typeNumber",a.ze,a.ze.ja,a.ze.ca,b),(0,D.T)(c,"typeNumber",a.ze,a.ze.na,a.ze.va,f),(0,D.T)(c,"typeNumber",a.ze,a.ze.getWidth,a.ze.ma,g),(0,D.T)(c,"typeNumber",a.ze,a.ze.getHeight,a.ze.Da,d)):(a.ze.ca(b),a.ze.va(f),a.ze.ma(g),a.ze.Da(d))};
D.Gr=function(a){var b=(0,D.TQ)(a,a.ze.ja(),a.ze.na());a=(0,D.TQ)(a,a.ze.ja()+a.ze.getWidth(),a.ze.na()+a.ze.getHeight());return new D.y(b.x,b.y,a.x-b.x,a.y-b.y)};D.u=D.xx.prototype;D.u.EX=function(a){if(!this.VP&&this.N8){this.VP=!0;var b=this.wg(a);a=new D.oF((0,D.Gr)(this),(0,D.UQ)(this,b),a);this.wc(a)}};D.u.FX=function(a){if(this.VP&&this.N8){var b=this.wg(a);a=new D.oF((0,D.Gr)(this),(0,D.UQ)(this,b),a);this.wc(a)}};D.u.$P=function(){this.VP&&this.N8&&(this.VP=!1)};D.u.xma=function(){this.$P()};
D.u.wg=function(a){var b,c;(0,D.Ef)()?(a=a.touches,0<a.length&&(b=a[0].pageX,c=a[0].pageY)):(b=a.pageX,c=a.pageY);return(0,D.Eu)(this.U,b,c)};D.TQ=function(a,b,c){var d=0,e=0,f=1,g=1;a.Gi&&(d=a.Gi.N(),e=a.Gi.M(),f=a.Gi.uc(),g=a.Gi.yc());return new D.E((b-d)/f,(c-e)/g)};
D.SQ=function(a,b,c,d){var e=0,f=0,g=1,h=1;a.Gi&&(e=d?(0,D.qp)(d,a.Gi,a.Gi.N,!0):a.Gi.N(),f=d?(0,D.qp)(d,a.Gi,a.Gi.M,!0):a.Gi.M(),g=d?(0,D.qp)(d,a.Gi,a.Gi.uc,!0):a.Gi.uc(),h=d?(0,D.qp)(d,a.Gi,a.Gi.yc,!0):a.Gi.yc());return new D.E(b*g+e,c*h+f)};D.xx.prototype.iM=(0,D.s)("$C");D.xx.prototype.bI=(0,D.q)("$C");D.xx.prototype.C_=function(a){return this.$C&&"undefined"!=this.$C[a]?this.$C[a]:null};
D.UQ=function(a,b){var c=(0,D.Ze)(a.kc,new D.E(0,0)),d=a.ze.F(),e=b.x-c.x-d.e/2,f=b.y-c.y-d.g/2,c=(0,D.TQ)(a,e,f),d=(0,D.TQ)(a,e+d.e,f+d.g);return new D.y(c.x,c.y,d.x-c.x,d.y-c.y)};D.xx.prototype.uga=function(a){this.ze.ca(a.x);this.ze.va(a.y);this.ze.ma(a.e);this.ze.Da(a.g)};D.xx.prototype.e2=function(){return new D.y(this.ze.ja(),this.ze.na(),this.ze.getWidth(),this.ze.getHeight())};D.xx.prototype.F=function(a){var b=new D.y(0,0,this.pi,this.Ki);return!a||a===this?b:(0,D.Bg)(this,b,a)};
D.xx.prototype.Am=function(a){return this.F(a)};
(0,D.xg)("DvtSubcomponentBundle",{CONTROL_PANEL:"Control Panel",CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center",CONTROL_PANEL_PAN:"Pan",CONTROL_PANEL_LAYOUT:"Layout",CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down",CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up",CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End",CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right",CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left",CONTROL_PANEL_LAYOUT_RADIAL:"Radial",CONTROL_PANEL_LAYOUT_TREE:"Tree",
CONTROL_PANEL_LAYOUT_CIRCLE:"Circle",CONTROL_PANEL_SYNC:"View",CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit",CONTROL_PANEL_ZOOMIN:"Zoom In",CONTROL_PANEL_ZOOMOUT:"Zoom Out",CONTROL_PANEL_RESET:"Reset Map",CONTROL_PANEL_DRILLUP:"Drill Up",CONTROL_PANEL_DRILLDOWN:"Drill Down",LEGEND:"Legend",OVERVIEW:"Overview",PALETTE:"Palette",SEARCH:"Search",SEARCH_TEXT:"Search",SEARCH_TEXT_ALTA:"Find",SEARCH_RESULTS:"Search Results [{0}]",SEARCH_RESULTS_ALTA:"{0} Results",SEARCH_RESULTS_CLOSE:"Close",SEARCH_RESULTS_NO_DATA:"No results to display"});

  return D;
});