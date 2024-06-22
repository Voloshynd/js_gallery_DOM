var e=document.querySelector("#largeImg");function t(e){var t=e.lastIndexOf("-");return"./images/".concat(e.slice(0,t),".png")}document.querySelector(".gallery__list").addEventListener("click",function(r){r.preventDefault();var c=r.target;"A"===c.tagName?e.src=t(c.firstElementChild.getAttribute("src")):e.src=t(c.getAttribute("src"))});
//# sourceMappingURL=index.7c83f661.js.map
