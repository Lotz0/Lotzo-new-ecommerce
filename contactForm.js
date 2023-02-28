const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  let contactName = document.getElementById('inputName').value;
  let contactEmail = document.getElementById('email').value;
  let contactMessage = document.getElementById('message').value;
  
  Swal.fire({
    title: "We received your message",
    text: "please wait for our message",
    icon: "success",
    confirmButtonText:"ok",  
})
  
  
  form.reset();
}