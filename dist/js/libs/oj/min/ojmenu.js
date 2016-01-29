/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore"],function(b,f){(function(){b.ya("oj.ojMenu",f.oj.baseComponent,{defaultElement:"\x3cul\x3e",delay:300,role:"menu",widgetEventPrefix:"oj",options:{menuSelector:"ul",openOptions:{initialFocus:"menu",launcher:null,position:{my:"start top",at:"start bottom",collision:"flipfit"}},submenuOpenOptions:{position:{my:"start top",at:"end top",collision:"flipfit"}},beforeOpen:null,select:null},_ComponentCreate:function(){this._super();this._focusForTesting=
this.jg;this._nextForTesting=this.aZ;this._selectForTesting=this.yj;this.Vq=this.element;this.zO=!1;this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role,tabIndex:"0"});this._on(!0,{"mousedown .oj-menu-item":function(a){this.options.disabled&&a.preventDefault()},click:function(a){this.options.disabled&&a.preventDefault()},keydown:function(a){!this.options.disabled||a.keyCode!==f.ui.keyCode.ESCAPE&&a.keyCode!==f.ui.keyCode.TAB||(a.keyCode===f.ui.keyCode.TAB&&a.preventDefault(),
this.kc&&this.pB(a))}});this.options.disabled&&this.element.addClass("oj-disabled").attr("aria-disabled","true");var a=function(a){if(!this.uN){this.uN=!0;var b=f(a.currentTarget);b.siblings().removeClass("oj-focus-ancestor");this.jg(a,b)}}.bind(this);this._on({"mousedown .oj-menu-item \x3e a":function(a){a.preventDefault()},"click .oj-disabled \x3e a":function(a){a.preventDefault()},click:function(){this.zO=!1},touchstart:function(){this.uN=!1},mouseover:function(){this.uN=!1},"click .oj-menu-item:has(a)":function(a){var b=
f(a.target).closest(".oj-menu-item");!this.zO&&b.not(".oj-disabled").length&&(this.zO=!0,a.preventDefault(),this.Da&&this.Da.closest(b).length&&this.Da.get(0)!=b.get(0)||(b.has(".oj-menu").length?this.Zd(a):(this.yj(a),this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.Da&&1===this.Da.parents(".oj-menu").length&&clearTimeout(this.$c)))))},"mouseenter .oj-menu-item":a,"touchstart .oj-menu-item":a,mouseleave:function(a){this.jk(a,"eventSubtree")},"mouseleave .oj-menu":function(a){this.jk(a,
"eventSubtree")},focus:function(a,b){if(!b){var c=this.Da||this.element.children(".oj-menu-item").eq(0);this.jg(a,c)}},keydown:this.Aq,keyup:function(a){if(a.keyCode==f.ui.keyCode.ENTER||a.keyCode==f.ui.keyCode.SPACE)this.pA=!1}});this.fy=f.proxy(this.gy,this);this.Aa()},Es:function(a){if(arguments.length)d=a;else return d},IH:function(b){if(("focus"===b.type||"mousedown"===b.type||"touchstart"===b.type||93==b.which||121==b.which&&b.shiftKey||93==b.keyCode)&&("mousedown"!==b.type||!d)){var e=a.slice(0,
a.length);f.each(e,function(a,d){!f(b.target).closest(d.element).length&&("keydown"===b.type||"mousedown"===b.type&&3===b.which||!f(b.target).closest(d.kc).length||d.oha&&("mousedown"===b.type&&3!==b.which||"touchstart"===b.type))&&(d.jk(b,"eventSubtree"),d.kc&&d.Lp(b))})}},_setOption:function(a,d){this._superApply(arguments);this.kc||("submenuOpenOptions"===a?this.hD=b.pc.Cg(d.position,this.Of):"submenuOpenOptions.position"===a&&(this.hD=b.pc.Cg(d,this.Of)))},_destroy:function(){this.element.is(":visible")&&
this.Lp();clearTimeout(this.$c);delete this.$c;this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=
f(this);a.data("oj-ojMenu-submenu-icon")&&a.remove()});this.element.find("a").removeAttr("aria-expanded");this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");0<=a.indexOf(this)&&a.splice(a.indexOf(this),1);delete this.vj;delete this.fy;var b=this.An;isNaN(b)||(delete this.An,window.clearTimeout(b));this._super()},Aq:function(a){function b(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$\x26")}var d,h,k,l,m=!0;switch(a.keyCode){case f.ui.keyCode.HOME:this.zC("first",
"first",a);break;case f.ui.keyCode.END:this.zC("last","last",a);break;case f.ui.keyCode.UP:this.Hia(a);break;case f.ui.keyCode.DOWN:this.aZ(a);break;case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.keyCode===f.ui.keyCode.RIGHT^this.Of?this.Da&&!this.Da.is(".oj-disabled")&&this.Zd(a):this.jk(a,"active");break;case f.ui.keyCode.ENTER:case f.ui.keyCode.SPACE:this.dfa(a);this.pA=!0;var n=this;setTimeout(function(){n.pA=!1},100);break;case f.ui.keyCode.TAB:a.preventDefault();this.kc&&this.pB(a);break;
case f.ui.keyCode.ESCAPE:this.kc?(h=this.element.attr("aria-activedescendant"),k="#"+this.element.attr("id")+"\x3e*\x3ea",h&&!f("#"+h).is(k)?this.jk(a,"active"):this.pB(a)):this.jk(a,"active");break;default:m=!1,d=this.FE||"",h=String.fromCharCode(a.keyCode),k=!1,clearTimeout(this.Lna),h===d?k=!0:h=d+h,l=new RegExp("^"+b(h),"i"),d=this.Vq.children(".oj-menu-item").filter(function(){return l.test(f(this).children("a").text())}),d=k&&-1!==d.index(this.Da.next())?this.Da.nextAll(".oj-menu-item"):d,d.length||
(h=String.fromCharCode(a.keyCode),l=new RegExp("^"+b(h),"i"),d=this.Vq.children(".oj-menu-item").filter(function(){return l.test(f(this).children("a").text())})),d.length?(this.jg(a,d),1<d.length?(this.FE=h,this.Lna=this._delay(function(){delete this.FE},1E3)):delete this.FE):delete this.FE}m&&a.preventDefault()},dfa:function(a){this.Da&&!this.Da.is(".oj-disabled")&&(this.Da.children("a[aria-haspopup\x3d'true']").length?this.Zd(a):this.yj(a))},refresh:function(){this._super();this.Aa();var a=this.element;
if(a.is(":visible")){var b=a.data("oj-menu-position");b&&a.position(b);a.find(".oj-menu").each(function(){var a=f(this);a.is(":visible")&&(b=a.data("oj-menu-position"))&&a.position(b)})}},Aa:function(){this.Of="rtl"===this.dc();this.hD=b.pc.Cg(this.options.submenuOpenOptions.position,this.Of);var a=this,d=this.element.find(this.options.menuSelector),g=d.add(this.element),h=g.children();h.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");h.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role",
"presentation").children("a").uniqueId().attr({tabIndex:"-1",role:"menuitem"});h.filter(":not(.oj-menu-item)").each(function(){var a=f(this);/[^\-\u2014\u2013\s]/.test(a.text())||a.addClass("oj-menu-divider").attr("role","separator")});h.filter(".oj-disabled").children("a").attr("aria-disabled","true");h.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");d.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role,"aria-hidden":"true"}).each(function(){var b=
f(this),d=a.vJ(b),e=f("\x3cspan\x3e");e.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0);d.attr("aria-haspopup","true").attr("aria-expanded","false").append(e);d=d.attr("id");b.attr("aria-labelledby",d)});g.each(function(){var a=f(this),b=a.children().children().children(".oj-menu-item-icon").length;a.toggleClass("oj-menu-icons",!!b).toggleClass("oj-menu-text-only",!b)});this.Da&&!f.contains(this.element[0],this.Da[0])&&this.eH()},vJ:function(a){return a.prev("a")},
xra:function(){return"menuitem"},rA:function(a){return a.add(a.prev(".oj-menu-divider")).add(a.next(".oj-menu-divider"))},jg:function(a,b){a&&"focus"===a.type||clearTimeout(this.$c);b=b.first();this.LY(b,a);var d=b.parent().closest(".oj-menu-item");this.rA(d).addClass("oj-focus-ancestor");a&&"keydown"===a.type?this.yl():this.$c=this._delay(function(){delete this.$c;this.yl()},this.delay);d=b.children(".oj-menu");d.length&&a&&/^mouse/.test(a.type)&&!this.Da.hasClass("oj-disabled")&&this.tla(d);this.Vq=
b.parent()},LY:function(a,b){if(!a.is(this.Da)){var d=this.Da?this.Da:f(),h=a.children("a");this.Da=a;this.element.attr("aria-activedescendant",h.attr("id"));this.rA(d).removeClass("oj-focus");this.rA(a).addClass("oj-focus");this._trigger("_activeItem",b,{previousItem:d,item:a,privateNotice:"The _activeItem event is private.  Do not use."})}},rja:function(a){if(this.Da){var b=this.Da;this.Da=null;this.element.removeAttr("aria-activedescendant");this.rA(b).removeClass("oj-focus");this._trigger("_activeItem",
a,{previousItem:b,item:f(),privateNotice:"The _activeItem event is private.  Do not use."})}},eH:function(a){clearTimeout(this.$c);this.rja(a)},pB:function(a){this.kc.focus();this.Lp(a)},Lp:function(c){var d={};d[b.N.Qa.ef]=this.element;b.N.oe().close(d);this.element.removeData("oj-menu-position");this.kc=void 0;this._trigger("__dismiss",c,{});0<=a.indexOf(this)&&a.splice(a.indexOf(this),1)},open:function(c,d,g){this.element.is(":visible")&&this.Lp();d=f.extend({},this.options.openOptions,d);d.position=
f.extend({},d.position);g=f.extend({},this.options.submenuOpenOptions,g);b.pc.fia(c);this.oha=this.oA;if(this._trigger("beforeOpen",c,{openOptions:d})){var h=d.launcher;if((h="string"===f.type(h)?f(h):h)&&h.length){var k=b.pc.Cg(d.position,this.Of);k.of=b.pc.lpa(k.of,h,c);if(null==k.of)b.r.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");else{var l=this.element[0],m=a.slice(0,a.length);f.each(m,function(a,b){b.element[0]!==l&&(b.jk(c,"eventSubtree"),
b.kc&&b.Lp(c))});this.hD=b.pc.Cg(g.position,this.Of);g=this.fy;f.isFunction(k.using)&&k.using!==g&&(k.origUsing=k.using);k.using=g;g={};g[b.N.Qa.ef]=this.element;g[b.N.Qa.gv]=h;g[b.N.Qa.kv]=k;g[b.N.Qa.jp]=this.mt();g[b.N.Qa.Vm]="oj-menu-layer";b.N.oe().open(g);this.element.data("oj-menu-position",k);d=d.initialFocus;((k="firstItem"===d)||"menu"===d)&&this.element.focus();k?this.jg(c,this.element.children().first()):this.eH(c);this.kc=h;a.push(this)}}else b.r.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.")}},
tla:function(a){clearTimeout(this.$c);"true"===a.attr("aria-hidden")&&(this.$c&&clearTimeout(this.$c),this.$c=this._delay(function(){delete this.$c;this.yl();this.hZ(a)},this.delay))},hZ:function(b){var d=f.extend({of:this.Da},this.hD);clearTimeout(this.$c);this.element.find(".oj-menu").not(b.parents(".oj-menu")).hide().attr("aria-hidden","true").removeData("oj-menu-position");b.show().removeAttr("aria-hidden").position(d).data("oj-menu-position",d);this.vJ(b).attr("aria-expanded","true");!this.kc&&
0>a.indexOf(this)&&a.push(this)},PG:function(a,b,d){function h(){delete k.$c;var d=b?k.element:f(a&&a.target).closest(k.element.find(".oj-menu"));d.length||(d=k.element);k.yl(d);k.eH(a);k.Vq=d}clearTimeout(this.$c);var k=this;d?this.$c=this._delay(h,d):h()},yl:function(b){b||(b=this.Da?this.Da.parent():this.element);var d=b.find(".oj-menu");d.hide().attr("aria-hidden","true").removeData("oj-menu-position");this.vJ(d).attr("aria-expanded","false");b.find("oj-focus-ancestor").removeClass("oj-focus-ancestor");
this.kc||0<=a.indexOf(this)&&b===this.element&&a.splice(a.indexOf(this),1)},jk:function(a,d){if(null==d||"active"===d){var f=this.Vq&&this.Vq.closest(".oj-menu-item",this.element);f&&f.length&&(this.yl(),this.jg(a,f))}else"all"===d||"eventSubtree"===d?this.PG(a,"all"===d,this.delay):b.r.warn("Invalid param "+d+" passed to Menu._collapse().  Ignoring the call.")},Zd:function(a){var b=this.Da&&this.Da.children(".oj-menu ").children(".oj-menu-item").first();b&&b.length&&(this.hZ(b.parent()),this.$c&&
clearTimeout(this.$c),this.$c=this._delay(function(){delete this.$c;this.jg(a,b)}))},aZ:function(a){this.zC("next","first",a)},Hia:function(a){this.zC("prev","last",a)},tra:function(){return this.Da&&!this.Da.prevAll(".oj-menu-item").length},ura:function(){return this.Da&&!this.Da.nextAll(".oj-menu-item").length},zC:function(a,b,d){var f;this.Da&&(f="first"===a||"last"===a?this.Da["first"===a?"prevAll":"nextAll"](".oj-menu-item").eq(-1):this.Da[a+"All"](".oj-menu-item").eq(0));f&&f.length&&this.Da||
(f=this.Vq.children(".oj-menu-item")[b]());this.jg(d,f)},yj:function(a){if(!this.Da&&a&&a.target){var d=f(a.target).closest(".oj-menu-item");d.closest(this.element).length&&this.LY(d,a)}this.Da?this.Da.has(".oj-menu").length||this.Da.is(".oj-disabled")?b.r.warn("Selecting a disabled menu item or parent menu item is not allowed."):(d={item:this.Da},this.PG(a,!0),this.kc&&this.pB(a),this._trigger("select",a,d)):b.r.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.")},
Qq:function(){this.element.remove()},mt:function(){if(!this.vj){var a=this.vj={};a[b.N.Ac.Vr]=f.proxy(this.ST,this);a[b.N.Ac.Wr]=f.proxy(this.Qq,this);a[b.N.Ac.Xm]=f.proxy(this.refresh,this);a[b.N.Ac.Ur]=f.proxy(this.IH,this)}return this.vj},ST:function(){this.yl(this.element);this.Lp(null)},gy:function(a,d){var g=d.element.element;g.css(a);(g=g.data("oj-menu-position"))&&(g=g.origUsing)&&g(a,d);b.pc.VN(d)&&(this.An=this._delay(f.proxy(this.ST,this),1))}});var a=[],d=!1})()});