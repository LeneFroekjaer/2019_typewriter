"use strict";

document.addEventListener("DOMContentLoaded", init);
const typewriter = document.querySelector("#typewriter").innerHTML;
let counter = typewriter.length;

function init() {
  document.querySelector("#typewriter").innerHTML = "";
  typewriterloop((counter = 0));
}

function typewriterloop() {
  document.querySelector("#typewriter").innerHTML = typewriter.slice(
    0,
    counter
  );
  counter++;

  if (typewriter.length + 1 > counter) {
    window.setTimeout(typewriterloop, 400);
  }
}
