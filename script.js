const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".nav");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");  
    menuIcon.classList.toggle('bx-x');
};

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


