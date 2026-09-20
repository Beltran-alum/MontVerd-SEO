const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.textContent = "¡Gracias! Hemos recibido tu mensaje.";
  form.reset();
});
