//icono menu
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}


let main = document.querySelector('.main')

let button = document.getElementById("icon-menu");
let sidebar = document.querySelector(".sidebar");
let header = document.querySelector(".head");
let text = document.querySelector(".videoText");


button.addEventListener("click", function() {
  sidebar.classList.toggle("open");
  main.classList.toggle("opacity");
  header.classList.toggle("opacity");
  text.classList.toggle("none");
});