document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const subscribeButton = document.getElementById("subscribeButton");
    const ValidEmail = document.querySelector('.valid');
  
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
    }
  
    function validate() {
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
        emailInput.classList.add("bg-red-300", "text-primary-tomato", "border-primary-tomato", "focus:outline-primary-tomato");
        emailInput.classList.remove("bg-white", "border-secondary-grey", "focus:outline-secondary-charcoal-grey");
        ValidEmail.classList.add('block');
        ValidEmail.classList.remove('hidden');
        emailInput.focus();
      } else {
        emailInput.classList.remove("bg-red-300", "text-primary-tomato", "border-primary-tomato", "focus:outline-primary-tomato");
        emailInput.classList.add("bg-white", "border-secondary-grey", "focus:outline-secondary-charcoal-grey");
        ValidEmail.classList.add('hidden');
        ValidEmail.classList.remove('block');
        // Add success logic here, e.g., showing the success message
      }
    }
  
    subscribeButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission to handle validation
      validate();
    });
  });
  