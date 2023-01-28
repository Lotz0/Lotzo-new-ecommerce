const openButton = document.getElementById("open-popup-button");
const closeButton = document.getElementById("close-popup-button");
const popupSection = document.getElementById("popup-section");
const form = document.getElementById("registration-form");
openButton.addEventListener("click", function() {
  popupSection.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupSection.style.display = "none";
});






form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);


  alert("the account as been created successfully")

  popupSection.style.display = "none";

});
