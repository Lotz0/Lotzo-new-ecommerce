const filterAll = document.getElementById("filterAll")
const filterShirt = document.getElementById("filterShirt")
const filterPant = document.getElementById("filterPant")
const filterHoodie = document.getElementById("filterHoodie")
const filterAccesories = document.getElementById("filterAccesories")
const card = document.querySelector('card')






filterAll.addEventListener("click", () => {
    const newArray1 = stockProducts.filter( prod =>{
        
        return stockProducts
    } ) 
    console.log(newArray1)

    newArray1.forEach((prod) =>{
        const {id, name, description, price, image, amount, category } = prod
  container.innerHTML +=`<div class="card">
  <img class="cardImage" src="${image}" alt="imagee">
  <div class="cardbody">
      <h2 class="name">${name}</h2>
      <h3 class="price">$${price}</h3>
      <p class="description">${description}</p>
      
    </div>
    <button onclick="addProduct(${id})" class="buyButton">Agregar al carrito</button>
  </div>
  `
    })
});

filterShirt.addEventListener("click", () => {
    const newArray2 = stockProducts.filter( prod =>{
        
        return prod.category == "Shirt"
    } ) 
    console.log(newArray2)

    newArray2.forEach((prod) =>{
        const {id, name, description, price, image, amount, category } = prod
  container.innerHTML ==`<div class="card">
  <img class="cardImage" src="${image}" alt="imagee">
  <div class="cardbody">
      <h2 class="name">${name}</h2>
      <h3 class="price">$${price}</h3>
      <p class="description">${description}</p>
      
    </div>
    <button onclick="addProduct(${id})" class="buyButton">Agregar al carrito</button>
  </div>
  `
  
    })
});

filterPant.addEventListener("click", () => {
    const newArray3 = stockProducts.filter( prod =>{
    
        return prod.category == "Pants"
    } ) 
    console.log(newArray3)
});


filterHoodie.addEventListener("click", () => {
    const newArray4 = stockProducts.filter( prod =>{
    
        return prod.category == "Hoodies"
    } ) 
    console.log(newArray4)
});


filterAccesories.addEventListener("click", () => {
    const newArray5 = stockProducts.filter( prod =>{
    
        return prod.category == "Accesories"
    } ) 
    console.log(newArray5)
});








