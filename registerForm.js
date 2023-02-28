const openButton = document.getElementById("open-popup-button");
const closeButton = document.getElementById("close-popup-button");
const popupSection = document.getElementById("popup-section");




openButton.addEventListener("click", function() {
  popupSection.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupSection.style.display = "none";
});

const name = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("registration-form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(name.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
      
      
      Swal.fire({
        title: "you registered successfully",
        text: "",
        icon: "success",
        confirmButtonText:"ok",  
    });
      
        parrafo.innerHTML = "Enviado"
        localStorage.setItem("name", (name.value))
        localStorage.setItem("email", (email.value))
        localStorage.setItem("password", (password.value))
        
        
    
    }
    
});









