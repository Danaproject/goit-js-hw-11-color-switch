(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n,e){"use strict";e.r(n);e("TKt4")},TKt4:function(t,n){var e,o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")};a.startBtn.addEventListener("click",(function(){if(a.startBtn.classList.contains("isActive"))return;a.startBtn.classList.add("isActive"),e=setInterval((function(){var t=r(0,o.length-1);a.body.style.backgroundColor=o[t]}),1e3)})),a.stopBtn.addEventListener("click",(function(){clearInterval(e),a.startBtn.classList.remove("isActive")}));var r=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}}},[["QfWi",1]]]);
//# sourceMappingURL=main.321ffdb0f6619cedcbc2.js.map