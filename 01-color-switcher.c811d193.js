!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body,n=null;function a(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){console.log("Start"),t.setAttribute("disabled",""),n=setInterval(a,1e3)})),e.addEventListener("click",(function(){console.log("Stop"),t.removeAttribute("disabled",""),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.c811d193.js.map
