!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled",""),t.addEventListener("click",(function(o){var n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3);t.setAttribute("disabled",""),e.removeAttribute("disabled"),e.addEventListener("click",(function(r){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled","")}))}))}();
//# sourceMappingURL=01-color-switcher.535f5fe9.js.map