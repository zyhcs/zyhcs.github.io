"use strict";!function(s){s.fn.snow=function(m){var r=s('<div id="snowbox" />').css({position:"absolute","z-index":"9999",top:"-50px"}).html("❄"),c=s(document).height(),d=s(document).width(),m=s.extend({},{minSize:10,maxSize:20,newOn:1e3,flakeColor:"#AFDAEF"},m);setInterval(function(){var n=Math.random()*d-100,o=.5+Math.random(),e=m.minSize+Math.random()*m.maxSize,t=c-200,i=n-500+500*Math.random(),a=10*c+5e3*Math.random();r.clone().appendTo("body").css({left:n,opacity:o,"font-size":e,color:m.flakeColor}).animate({top:t,left:i,opacity:.2},a,"linear",function(){s(this).remove()})},m.newOn)}}(jQuery),$(function(){$.fn.snow({minSize:5,maxSize:50,newOn:300})});