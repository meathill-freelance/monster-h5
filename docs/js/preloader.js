!function(i){function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return i[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var e={};n.m=i,n.c=e,n.d=function(i,e,o){n.o(i,e)||Object.defineProperty(i,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(e,"a",e),e},n.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},n.p="",n(n.s=3)}({3:function(i,n,e){"use strict";function o(i,n){var e=document.createElement("script");e.async=!0,e.src=i,e.onload=n,document.body.appendChild(e)}function c(i){if("wukong"===i.item.id){var n=u.getElementsByTagName("footer")[0].appendChild(i.result);setTimeout(function(){var i=d.getResult("wukong",!0),e=URL.createObjectURL(i);l.style.backgroundSize=n.clientWidth+"px",n.className="in",n.addEventListener("transitionend",function(){l.style.backgroundImage="url("+e+")",g=!0},!1)},50)}}function r(i){console.log(i.progress),g&&(l.style.width=82*i.progress+"%")}function t(){(d=new createjs.LoadQueue(!0,"http://qiniu.meathill.com/wukong/")).installPlugin(createjs.Sound),d.on("fileload",c),d.on("progress",r),d.on("complete",s),d.loadFile({id:"wukong",src:"./img/wukong.png"}),d.loadManifest(["//rawgit.com/flatiron/director/master/build/director.min.js",{id:"homepage",src:"./img/homepage.jpg"},{id:"faxing",src:"./img/faxing.png"},{id:"bufu",src:"./img/bufu.png"},{id:"music",src:"./audio/qitian.mp3"},{id:"js",src:"./js/main.js"},{id:"css",src:"./css/screen.css"},{id:"nav",src:"./img/nav.jpg"},{id:"link1",src:"./img/link1.png"},{id:"link2",src:"./img/link2.png"},{id:"link3",src:"./img/link3.png"},{id:"link4",src:"./img/link4.png"},{id:"link5",src:"./img/link5.png"},{id:"link6",src:"./img/link6.png"},{id:"about",src:"./img/about.jpg"},{id:"chupin",src:"./img/chupin.jpg"},{id:"intro",src:"./img/intro.jpg"},{id:"zhuchuang",src:"./img/zhuchuang.jpg"},{id:"price",src:"./img/price.jpg"},{id:"video",src:"./img/video.jpg"},{id:"back-button",src:"./img/back-button.png"},{id:"cloud1",src:"./img/cloud1.png"},{id:"cloud2",src:"./img/cloud2.png"},{id:"cloud3",src:"./img/cloud3.png"},{id:"cloud4",src:"./img/cloud4.png"},{id:"cloud5",src:"./img/cloud5.png"},{id:"poster",src:"./img/poster.jpg"}])}function s(){console.log("homepage"),l.style.width="82%";var i=void 0,n=setInterval(function(){g&&(clearInterval(n),i=new App(d))},1e3)}var d=void 0,g=!1,u=document.getElementById("loading"),l=u.getElementsByClassName("bar")[0];o("//code.createjs.com/createjs-2015.11.26.min.js",function(){"Promise"in window&&window.Promise instanceof Function?t():o("//cdn.staticfile.org/bluebird/3.5.0/bluebird.min.js",t)})}});