let menuIcon=document.querySelector('#menu-icon');
let nav=document.querySelector('.nav');

menuIcon.onclick=()=>{
    menuIcon.classlist.toggle('bx-x')
    menuIcon.classlist.toggle('active')
}

const span = document.querySelector(".typewriter span");
const text = span.getAttribute("data-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    span.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40); // typing speed
  }
}

typeEffect();



