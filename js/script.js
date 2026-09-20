const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.textContent = "Gràcies,hem rebut el teu missatge!.";
  form.reset();
});
