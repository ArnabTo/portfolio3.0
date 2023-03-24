"use strict";

const circle = document.querySelector('.circle');
const link = document.querySelector('.link');
window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);
link.addEventListener('mouseenter', linkEnterHandler);
link.addEventListener('mouseleave', linkLeaveHandler);

function mouseMoveHandler(e) {
  circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  circle.style.opacity = 1;
}

function mouseUpHandler(e) {
  circle.style.transform = "scale(1)";

  if (e.target.classList.contains('link')) {
    circle.style.transform = 'scale(5)';
    circle.style.opacity = 0;
  }
}

function mouseDownHandler() {
  circle.style.transform = "scale(1.5)";
}

function linkEnterHandler() {
  circle.style.transform = "scale(1.5)";
  circle.style.borderColor = '#e71d36';
  circle.style.backgroundColor = "rgba(255, 0, 0, .2)";
}

function linkLeaveHandler() {
  circle.style.transform = "scale(1)";
  circle.style.borderColor = '#fdfffc';
  circle.style.backgroundColor = "rgba(255, 0, 0, 0)";
  ;
}