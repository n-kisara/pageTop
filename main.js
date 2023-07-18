"use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let scrollToTop = {
    top: 0,
    behavior: "smooth",
  };
  window.scrollTo(scrollToTop);
});
