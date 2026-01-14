const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".nav");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");  
    menuIcon.classList.toggle('bx-x');
};
window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x')
};

const span = document.querySelector(".typewriter span");
const text = span.getAttribute("data-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    span.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 30); // typing speed
  }
}

typeEffect();


