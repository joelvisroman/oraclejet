/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(b,f){b.Bc={};o_("PullToRefreshUtils",b.Bc,b);b.Bc.Tpa=function(a,d,c){var e,g,h,k,l,m,n,p,r,s,q,t;e=f(document.createElement("div"));b.Bc.Qja(e,d,c);g=f(document.createElement("div")).addClass("oj-pulltorefresh-panel");e.append(g);h=f(a);h.prepend(e);h.on("touchstart.pulltorefresh",function(a){null==f.data(g[0],"data-pullstart")&&0===h[0].scrollTop&&(b.Bc.qX(a,g,c),n=g.find(".oj-pulltorefresh-icon"),
0<n.length&&(p=n.parent().outerHeight(!0)),c&&!isNaN(c.threshold)&&(k=parseInt(c.threshold,10)),k=isNaN(k)?g.outerHeight(!0):Math.max(0,Math.min(k,g.outerHeight(!0))),g.css("height",0),g.removeClass("oj-pulltorefresh-transition"),f.data(g[0],"data-pullstart",a.originalEvent.touches[0].clientY))}).on("touchmove.pulltorefresh",function(a){l=f.data(g[0],"data-pullstart");null!=l&&(m=a.originalEvent.touches[0].clientY-parseInt(l,10),0>m||(a.preventDefault(),null!=f.data(g[0],"data-loading")?g.css("height",
Math.max(m,k)):(g.css("height",m),b.Bc.lB(a,"pull",g,m),null!=n&&0<n.length&&(r=f.data(g[0],"data-lasticonclass"),null!=r&&n.removeClass(r),q=10*Math.round(m/k*10),100<=q?(t="oj-pulltorefresh-icon-full",s=b.ha.A("oj-pullToRefresh.titleIconFull")):(t="oj-pulltorefresh-icon-"+q+"-percent",s=b.ha.A("oj-pullToRefresh.titleIcon"+q+"percent")),n.addClass(t),n.attr("title",s),f.data(g[0],"data-lasticonclass",t),b.Bc.mla(g,m>p)))))}).on("touchcancel.pulltorefresh",function(){b.Bc.hk(g)}).on("touchend.pulltorefresh",
function(a){l=f.data(g[0],"data-pullstart");null!=l&&null==f.data(g[0],"data-loading")&&(g.outerHeight()<k?(g.addClass("oj-pulltorefresh-transition").css("height",0),b.Bc.hk(g)):b.Bc.rX(a,g,d))})};o_("PullToRefreshUtils.setupPullToRefresh",b.Bc.Tpa,b);b.Bc.qX=function(a,d,c){var e,g;b.Bc.lB(a,"pull",d,0);0==d.children().length&&(c&&(e=c.primaryText,g=c.secondaryText),b.Bc.Saa(d,e,g));d.prev().text(b.ha.A("oj-pullToRefresh.ariaRefreshingLink"));d.css("height","auto");f.data(d[0],"data-panelheight",
d.outerHeight())};b.Bc.rX=function(a,d,c){var e,g,h,k;e=f.data(d[0],"data-panelheight");d.addClass("oj-pulltorefresh-transition").css("height",e);b.Bc.lB(a,"release",d,e);f.data(d[0],"data-loading",!0);g=d.find(".oj-pulltorefresh-icon");0<g.length&&(h=f.data(d[0],"data-lasticonclass"),null!=h&&g.removeClass(h),g.addClass("oj-pulltorefresh-icon-full"));c().then(function(){k=function(){b.Bc.lB(a,"complete",d,e);b.Bc.hk(d);d.off("transitionend",k);d.prev().text("")};d.prev().text(b.ha.A("oj-pullToRefresh.ariaRefreshCompleteLink"));
d.prev().prev().css("position","");d.on("transitionend",k);d.css("height",0)})};b.Bc.gqa=function(a){f(a).children().first().remove();f(a).off(".pulltorefresh")};o_("PullToRefreshUtils.tearDownPullToRefresh",b.Bc.gqa,b);b.Bc.lB=function(a,b,c,e){b=f.Event("oj"+b);b.originalEvent=a;c.trigger(b,{content:c,distance:e})};b.Bc.Saa=function(a,b,c){var e,g;a.addClass("oj-pulltorefresh-content").attr("aria-hidden","true");e=f(document.createElement("div"));e.addClass("oj-pulltorefresh-icon oj-pulltorefresh-icon-initial");
g=f(document.createElement("div"));g.addClass("oj-pulltorefresh-icon-container");g.append(e);f.data(a[0],"data-lasticonclass","oj-pulltorefresh-icon-initial");a.append(g);null!=b&&(b=f(document.createElement("div")).addClass("oj-pulltorefresh-primary-text").text(b),a.append(b),null!=c&&(c=f(document.createElement("div")).addClass("oj-pulltorefresh-secondary-text").text(c),a.append(c)))};b.Bc.mla=function(a,b){var c,e;c=a.find(".oj-pulltorefresh-primary-text");e=a.find(".oj-pulltorefresh-secondary-text");
b?(c&&c.show(),e&&e.show()):(c&&c.hide(),e&&e.hide())};b.Bc.Qja=function(a,d,c){var e,g,h;e=f(document.createElement("a"));e.text(b.ha.A("oj-pullToRefresh.ariaRefreshLink"));e.addClass("oj-helper-hidden-accessible").attr("href","#").focus(function(){e.css("position","static")}).blur(function(a){null!=a.relatedTarget&&e.css("position","")}).click(function(e){g=a.children().last();b.Bc.qX(e,g,c);b.Bc.rX(e,g,d);d()});h=f(document.createElement("div"));h.addClass("oj-helper-hidden-accessible").attr("aria-live",
"polite");a.append(e);a.append(h)};b.Bc.hk=function(a){f.removeData(a[0],"data-pullstart");f.removeData(a[0],"data-loading");0<a.find(".oj-pulltorefresh-icon").length&&a.empty()}});