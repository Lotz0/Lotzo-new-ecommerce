document.addEventListener("DOMContentLoaded", bringProducts)
const container = document.querySelector("#cards")


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


async function bringProducts(){
    const url = 'https://api.escuelajs.co/api/v1/categories'

    try {
        const result = await fetch(url)
        const response = await result.json()
        printProducts(response)

    } catch (error){
        console.log(error)
    }
}

function printProducts(products){
    console.log(products)
    products.forEach((prod) => {
      const{id, name, price, category, description, image} = prod
        container.innerHTML +=  `
        <div class="card">
        <img src=${image} alt=${image}>
        <h2>${name}</h2>
      </div>
      
        `;       
    });
}

let button = document.getElementById("icon-menu");
let sidebar = document.querySelector(".sidebar");

button.addEventListener("click", function() {
  sidebar.classList.toggle("open");
});