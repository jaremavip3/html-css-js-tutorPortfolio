//Seting up Email.JS service with IIFE wrapper function
(function () {
  emailjs.init({
    publicKey: "ze3n2a-u0AV_1U4wH",
  });
})();

// Handle form submission when the DOM is loaded
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
          emailjs
            .sendForm("service_p9ou39s", "template_vrh3ydj", this)
            .then(console.log("Email Feeback sent successfully!"))
            .catch((error) => console.log("FAILED...", error));

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
/**
 * Displays a temporary message on the page after the contact form.
 * The message will automatically disappear after 5 seconds.
 * If there's an existing message, it will be removed before showing the new one.
 * @param {string} text - The message text to be displayed
 * @param {string} type - The type of message which determines its styling class
 * @example
 * // Show a success message
 * showMessage("Email sent successfully!", "success");
 * // Show an error message
 * showMessage("Failed to send email", "error");
 */
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
