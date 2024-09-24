document.querySelectorAll(".tree li").forEach(function(e){var t=e.querySelector("ul");if(t){var l=document.createElement("span");l.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(l),t.style.display="block",l.addEventListener("click",function(){t.style.display="block"===t.style.display?"none":"block"})}});
//# sourceMappingURL=index.1155f32b.js.map
