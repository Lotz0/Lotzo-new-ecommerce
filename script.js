







const stockProducts = [
    {
      id:1,
      name:"black T-shirt",
      description:"Basic slim fit, made of stretchy cotton. Round neck and short sleeves.",
      price:20,
      image: "images/T-shirt1.jpg",
    },
    {
      id:2,
      name:"white T-shirt",
      description:"Basic slim fit, made of stretchy cotton. Round neck and short sleeves.",
      price:20,
      image: "images/T-shirt2.jpg",
    },
    {
      id:3,
      name:"Basic T-shirt",
      description:"Regular fit T-shirt. Round neck and short sleeves.",
      price:26,
      image: "images/T-shirt3.jpg",
    },
    {
      id:4,
      name:"Blue basic T-shirt",
      description:"Regular fit T-shirt. Round neck and short sleeves.",
      price:23,
      image: "images/T-shirt4.jpg",
    },
    {
      id:5,
      name:"Long sleeve slim T-shirt",
      description:"Slim fit shirt. Round neck and long sleeves.",
      price:33,
      image: "images/T-shirt5.jpg",
    },
    {
      id:6,
      name:"Blue long sleeve slim T-shirt",
      description:"Slim fit shirt. Round neck and long sleeves.",
      price:38,
      image: "images/T-shirt6.jpg",
    },
    {
      id:7,
      name:"Skinny black chino pants",
      description:"Front pockets and back welt pockets. Front zip and button closure.",
      price:50,
      image: "images/pants1.jpg",
    },
    {
      id:8,
      name:"Skinny white chino pants",
      description:"Front pockets and back welt pockets. Front zip and button closure.",
      price:52,
      image: "images/pants2.jpg",
    },
    {
      id:9,
      name:"Slim fit black stretch pants",
      description:"Elastic waist. Front pockets and back welt pockets. Front zip and button closure.",
      price:65,
      image: "images/pants3.jpg",
    },
    {
      id:10,
      name:"Slim fit grey stretch pants",
      description:"Regular fit T-shirt. Round neck and short sleeves.",
      price:78,
      image: "images/pants4.jpg",
    },
    {
      id:11,
      name:"Easy care black jogger pants",
      description:"Side pockets and back welt pockets. Turned up cuffs.",
      price:33,
      image: "images/pants5.jpg",
    },
    {
      id:12,
      name:"Easy care gray jogger pants",
      description:"Side pockets and back welt pockets. Turned up cuffs.",
      price:38,
      image: "images/pants6.jpg",
    },
    {
      id:13,
      name:"Basic black hoodie",
      description:"Hoodie sweatshirt with adjustable hooded collar and long sleeves.",
      price:46,
      image: "images/hoodie1.jpg",
    },
    {
      id:14,
      name:"Basic white hoodie",
      description:"Hoodie sweatshirt with adjustable hooded collar and long sleeves.",
      price:47,
      image: "images/hoodie2.jpg",
    },
    {
      id:15,
      name:"Zip black collar sweathshirt",
      description:"High collar sweatshirt with front zip closure. Long sleeves. Rib trim.",
      price:52,
      image: "images/hoodie3.jpg",
    },
    {
      id:16,
      name:"Zip green collar sweathshirt",
      description:"High collar sweatshirt with front zip closure. Long sleeves. Rib trim.",
      price:65,
      image: "images/hoodie4.jpg",
    },
    {
      id:17,
      name:"Basic white sweathshirt",
      description:"Round neck sweatshirt with long sleeves. Rib trim.",
      price:78,
      image: "images/hoodie5.jpg",
    },
    {
      id:18,
      name:"Basic blue sweathshirt",
      description:"Round neck sweatshirt with long sleeves. Rib trim.",
      price:73,
      image: "images/hoodie6.jpg",
    },
    {
      id:19,
      name:"Black cap",
      description:"Cap with visor. Back fit adjustment.",
      price:23,
      image: "images/acc1.jpg",
    },
    {
      id:20,
      name:"Sand cap",
      description:"Cap with visor. Back fit adjustment.",
      price:24,
      image: "images/acc2.jpg",
    },
    {
      id:21,
      name:"Black knit hat",
      description:"Short hat made of cotton blend yarn. Cuffed.",
      price:21,
      image: "images/acc3.jpg",
    },
    {
      id:22,
      name:"Leather belt",
      description:"Leather belt. Metal buckle and loop closure.",
      price:40,
      image: "images/acc4.jpg",
    },
    {
      id:23,
      name:"3-pack ribbed socks",
      description:"Pack of three pairs of ribbed knit socks. Rib trim.",
      price:16,
      image: "images/acc5.jpg",
    },
    {
      id:24,
      name:"Boxers",
      description:"Boxers made of cotton poplin fabric. Elastic waist.",
      price:23,
      image: "images/acc6.jpg",
    },

]
const container = document.querySelector("#container");



stockProducts.forEach((prod)=>{
  const {id, name, description, price, image} = prod
  container.innerHTML +=`<div class="card">
  <img class="cardImage" src="${image}" alt="imagee">
  <div class="cardbody">
      <h2 class="name">${name}</h2>
      <h3 class="price">$${price}</h3>
      <p class="description">${description}</p>
       
    </div>
    <a href="#" class="buyButton">Buy meee</a>
  </div>
  `
});





















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




let button = document.getElementById("icon-menu");
let sidebar = document.querySelector(".sidebar");

button.addEventListener("click", function() {
  sidebar.classList.toggle("open");
});