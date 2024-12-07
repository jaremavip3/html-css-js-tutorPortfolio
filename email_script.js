(function () {
  emailjs.init({
    publicKey: "ze3n2a-u0AV_1U4wH",
  });
})();
// Wait for DOM to be fully loaded
// Handle form submission
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Add loading state to button
      const submitButton = this.querySelector(".select_button");
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      emailjs
        .sendForm("service_p9ou39s", "template_58bnaup", this)
        .then(() => {
          // Success message
          showMessage("Message sent successfully!", "success");
          this.reset(); // Clear the form
        })
        .catch((error) => {
          // Error message
          showMessage("Failed to send message. Please try again.", "error");
          console.log("FAILED...", error);
        })
        .finally(() => {
          // Reset button
          submitButton.disabled = false;
          submitButton.textContent = "SUBMIT";
        });
    });
};

// Function to show messages
function showMessage(text, type) {
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}-message`;
  messageDiv.textContent = text;

  const form = document.getElementById("contact-form");
  form.insertAdjacentElement("afterend", messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}
