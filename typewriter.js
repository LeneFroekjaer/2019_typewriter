"use strict";

document.addEventListener("DOMContentLoaded", init);
const typewriter = document.querySelector("#typewriter").innerHTML;
let counter = typewriter.length;

function init() {
  document.querySelector("#typewriter").innerHTML = "";
  typewriterloop((counter = 0));
}

function typewriterloop() {
  // FOR SOUNDS
  let lastCharacter = typewriter.charAt(counter - 1);
  const soundSpace = document.querySelector("#typespace");
  const soundLetter = document.querySelector("#typekey2");
  //

  document.querySelector("#typewriter").innerHTML = typewriter.slice(
    0,
    counter
  );

  // FOR SOUNDS
  if (lastCharacter == "") {
    soundSpace.play();
  } else {
    soundLetter.play();
  }
  //

  counter++;

  if (typewriter.length + 1 > counter) {
    window.setTimeout(typewriterloop, 400);
  }
}
