document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const subscribeButton = document.getElementById("subscribeButton");
  const validEmailMessage = document.querySelector('.valid');
  const successMessage = document.querySelector('.success');
  const updateSection = document.getElementById("update");
  const dismissButton = successMessage.querySelector('button');
  const successMessageParagraph = successMessage.querySelector('p');

  function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
  }

  function validate() {
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
          emailInput.classList.add("bg-red-300", "text-primary-tomato", "border-primary-tomato", "focus:outline-primary-tomato");
          emailInput.classList.remove("bg-white", "border-secondary-grey", "focus:outline-secondary-charcoal-grey");
          validEmailMessage.classList.remove('hidden');
          validEmailMessage.classList.add('block');
          emailInput.focus();
      } else {
          emailInput.classList.remove("bg-red-300", "text-primary-tomato", "border-primary-tomato", "focus:outline-primary-tomato");
          emailInput.classList.add("bg-white", "border-secondary-grey", "focus:outline-secondary-charcoal-grey");
          validEmailMessage.classList.add('hidden');
          validEmailMessage.classList.remove('block');
          
          // Update the success message with the user's email
          successMessageParagraph.innerHTML = `A confirmation email has been sent to <b>${emailValue}</b>. Please open it and click the button inside to confirm your subscription.`;

          // Hide the form and display the success message
          updateSection.classList.add('hidden');
          successMessage.classList.remove('hidden');
          successMessage.classList.add('flex');
      }
  }

  subscribeButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission to handle validation
      validate();
  });

  // Add event listener for dismiss button
  dismissButton.addEventListener("click", () => {
      // Redirect to the home page
      window.location.href = './index.html';
  });
});
