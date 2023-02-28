
const stockProducts = [
    {
      id:1,
      name:"black T-shirt",
      description:"Basic slim fit, made of stretchy cotton. Round neck and short sleeves.",
      price:20,
      image: "images/T-shirt1.jpg",
      amount: 1,
      category: {
        id :"shirt"
      },
    },
    {
      id:2,
      name:"white T-shirt",
      description:"Basic slim fit, made of stretchy cotton. Round neck and short sleeves.",
      price:20,
      image: "images/T-shirt2.jpg",
      amount: 1,
      category: {
        id :"shirt"
      },
    },
    {
      id:3,
      name:"Basic T-shirt",
      description:"Regular fit T-shirt. Round neck and short sleeves.",
      price:26,
      image: "images/T-shirt3.jpg",
      amount: 1,
      category: {
        id :"shirt"
      },
    },
    {
      id:4,
      name:"Blue basic T-shirt",
      description:"Regular fit T-shirt. Round neck and short sleeves.",
      price:23,
      image: "images/T-shirt4.jpg",
      amount: 1,
      category: {
        id :"shirt"
      },
    },
    {
      id:5,
      name:"Long sleeve slim T-shirt",
      description:"Slim fit shirt. Round neck and long sleeves.",
      price:33,
      image: "images/T-shirt5.jpg",
      amount: 1,
      category: {
        id :"shirt"
      },
    },
    {
      id:6,
      name:"Blue long sleeve slim T-shirt",
      description:"Slim fit shirt. Round neck and long sleeves.",
      price:38,
      image: "images/T-shirt6.jpg",
      amount: 1,
      category: {
        id :"shirt"
      },
    },
    {
      id:7,
      name:"Skinny black chino pants",
      description:"Front pockets and back welt pockets. Front zip and button closure.",
      price:50,
      image: "images/pants1.jpg",
      amount: 1,
      category: {
        id :"pants"
      },
    },
    {
      id:8,
      name:"Skinny white chino pants",
      description:"Front pockets and back welt pockets. Front zip and button closure.",
      price:52,
      image: "images/pants2.jpg",
      amount: 1,
      category: {
        id :"pants"
      },
    },
    {
      id:9,
      name:"Slim fit black stretch pants",
      description:"Elastic waist. Front pockets and back welt pockets. Front zip and button closure.",
      price:65,
      image: "images/pants3.jpg",
      amount: 1,
      category: {
        id :"pants"
      },
    },
    {
      id:10,
      name:"Slim fit grey stretch pants",
      description:"Regular fit T-shirt. Round neck and short sleeves.",
      price:78,
      image: "images/pants4.jpg",
      amount: 1,
      category: {
        id :"pants"
      },
    },
    {
      id:11,
      name:"Easy care black jogger pants",
      description:"Side pockets and back welt pockets. Turned up cuffs.",
      price:33,
      image: "images/pants5.jpg",
      amount: 1,
      category: {
        id :"pants"
      },
    },
    {
      id:12,
      name:"Easy care gray jogger pants",
      description:"Side pockets and back welt pockets. Turned up cuffs.",
      price:38,
      image: "images/pants6.jpg",
      amount: 1,
      category: {
        id :"pants"
      },
    },
    {
      id:13,
      name:"Basic black hoodie",
      description:"Hoodie sweatshirt with adjustable hooded collar and long sleeves.",
      price:46,
      image: "images/hoodie1.jpg",
      amount: 1,
      category: {
        id :"hoodies"
      },
    },
    {
      id:14,
      name:"Basic white hoodie",
      description:"Hoodie sweatshirt with adjustable hooded collar and long sleeves.",
      price:47,
      image: "images/hoodie2.jpg",
      amount: 1,
      category: {
        id :"hoodies"
      },
    },
    {
      id:15,
      name:"Zip black collar sweathshirt",
      description:"High collar sweatshirt with front zip closure. Long sleeves. Rib trim.",
      price:52,
      image: "images/hoodie3.jpg",
      amount: 1,
      category: {
        id :"hoodies"
      },
    },
    {
      id:16,
      name:"Zip green collar sweathshirt",
      description:"High collar sweatshirt with front zip closure. Long sleeves. Rib trim.",
      price:65,
      image: "images/hoodie4.jpg",
      amount: 1,
      category: {
        id :"hoodies"
      },
    },
    {
      id:17,
      name:"Basic white sweathshirt",
      description:"Round neck sweatshirt with long sleeves. Rib trim.",
      price:78,
      image: "images/hoodie5.jpg",
      amount: 1,
      category: {
        id :"hoodies"
      },
    },
    {
      id:18,
      name:"Basic blue sweathshirt",
      description:"Round neck sweatshirt with long sleeves. Rib trim.",
      price:73,
      image: "images/hoodie6.jpg",
      amount: 1,
      category: {
        id :"hoodies"
      },
    },
    {
      id:19,
      name:"Black cap",
      description:"Cap with visor. Back fit adjustment.",
      price:23,
      image: "images/acc1.jpg",
      amount: 1,
      category: {
        id :"accesories"
      },
    },
    {
      id:20,
      name:"Sand cap",
      description:"Cap with visor. Back fit adjustment.",
      price:24,
      image: "images/acc2.jpg",
      amount: 1,
      category: {
        id :"accesories"
      },
    },
    {
      id:21,
      name:"Black knit hat",
      description:"Short hat made of cotton blend yarn. Cuffed.",
      price:21,
      image: "images/acc3.jpg",
      amount: 1,
      category: {
        id :"accesories"
      },
    },
    {
      id:22,
      name:"Leather belt",
      description:"Leather belt. Metal buckle and loop closure.",
      price:40,
      image: "images/acc4.jpg",
      amount: 1,
      category: {
        id :"accesories"
      },
    },
    {
      id:23,
      name:"3-pack ribbed socks",
      description:"Pack of three pairs of ribbed knit socks. Rib trim.",
      price:16,
      image: "images/acc5.jpg",
      amount: 1,
      category: {
        id :"accesories"
      },
    },
    {
      id:24,
      name:"Boxers",
      description:"Boxers made of cotton poplin fabric. Elastic waist.",
      price:23,
      image: "images/acc6.jpg",
      amount: 1,
      category: {
        id :"accesories"
      },
    },

]
const container = document.querySelector("#container");
const cleanCart = document.getElementById("cleanCart");
const totalPrice = document.querySelector("#totalPrice");
const cartAmount = document.querySelector("#cartAmount");
const purchaseButton = document.querySelector("#checkBuy");
let cart = []

document.addEventListener("DOMContentLoaded", () =>{
  cart = JSON.parse(localStorage.getItem("cart")) || []
  showCart()
})

function loadProducts(productosElegidos){


    container.innerHTML = ""


  productosElegidos.forEach((prod)=>{
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
} 
;

loadProducts(stockProducts)


purchaseButton.addEventListener("click" , () => {
    if(cart.length === 0){
      Swal.fire({
        title: "its empty",
        text: "buy something",
        icon: "error",
        confirmButtonText:"ok",
      }) 
        } else {
          Swal.fire({
            title: "Your purchase is confirm",
            text: "Thank you for support us",
            icon: "success",
            confirmButtonText:"ok",
            
            
        })
        cart.length = []
            showCart()
      }
})


cleanCart.addEventListener("click", () => {
  cart.length = []
  showCart()
})

 function addProduct(id){

    const exist = cart.some(prod => prod.id === id)
      if(exist){
        const prod = cart.map(prod => {
          if(prod.id ===id){
            prod.amount++
          }
        })
      } else {

      

    const item = stockProducts.find((prod) => prod.id === id)
    cart.push(item)
    }
    showCart()
 }



const showCart = () => {
  const cartBody = document.querySelector('.cartBody') 
  
  cartBody.innerHTML = ""
  cart.forEach((prod) => {
    const {id, name, description, price, image, amount} = prod
    cartBody.innerHTML += `<div class"cartContainer">
    <div>
      <img class="img-cart" src="${image}"/>
      </div>

      <div class="cartInfo">
      <p class:"productName">${name}</p>
      <p class:"productAmount"> x${amount} </p>
      <p class:"productPrice"> 1 x $${price}</p>
      <button onclick="deleteProduct(${id})" class="delete">Delete</button>
    </div>
    </div>
    `
  })
  
  cartAmount.textContent = cart.length


  totalPrice.innerText = cart.reduce((acc, prod) => acc + prod.amount * prod.price, 0)


  saveStorage()
}






function deleteProduct(id){
  const productID = id
  cart = cart.filter((product)=> product.id !== productID)
  showCart()
  
}

function saveStorage(){
  localStorage.setItem("cart", JSON.stringify(cart))
};























