(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n,o){"use strict";o.r(n);o("TKt4")},TKt4:function(t,n){var o,e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],s={startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")};s.startBtn.addEventListener("click",(function(){if(s.startBtn.classList.contains("isActive"))return;s.startBtn.classList.add("isActive"),o=setInterval((function(){var t=a(0,e.length-1);s.body.style.backgroundColor=e[t]}),1e3)})),s.stopBtn.addEventListener("click",(function(){clearInterval(o),s.startBtn.classList.remove("isActive")})),console.log(s);var a=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}}},[["QfWi",1]]]);
//# sourceMappingURL=main.1b1cf03ac58d055573e6.js.map