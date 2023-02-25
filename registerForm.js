const openButton = document.getElementById("open-popup-button");
const closeButton = document.getElementById("close-popup-button");
const popupSection = document.getElementById("popup-section");

const form = document.getElementById("registration-form");
const warnings = document.getElementById("warnings");
const names = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");


openButton.addEventListener("click", function() {
  popupSection.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupSection.style.display = "none";
});


form.addEventListener('submit', e =>{
  e.preventDefault()
  let warnings = ""
    if(names.value.length <6){
        warnings += "the name entered is not valid<br>"
    }
})







