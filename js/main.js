let form = document.getElementById('form');

let submitBtn = document.getElementById("submit");
let fullName = document.getElementById("fn");
let emailEnter = document.getElementById("em");
let messageInput = document.getElementById("msg");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(happen) {
    
  happen.preventDefault();

    let formData = {};
    let errors = [];

    let fullNameValue = fullName.value.trim();
    let emailValue = emailEnter.value.trim();
    let messageValue = messageInput.value.trim();

    if (fullNameValue !== "") {
        formData.fn = fullNameValue;
    } else {
        alert("Please enter your full name!");
        errors.push("Full name is required.");
    }

    if (emailValue !== "") {
        if (emailRegex.test(emailValue)) {
          formData.em = emailValue;
        } else {
          alert("Please enter a valid email!");
          errors.push("Invalid email address.");
        }
      } else {
        alert("Please enter your email!");
        errors.push("Email address is required.");
      }

      if (messageValue !== "") {
        formData.msg = messageValue;
      } else {
        alert("Please enter your message!");
        errors.push("Message is required.");
      }

      if (errors.length > 0) {
        console.error("Form submission failed:", errors);
      } else {
        alert("Form submitted successfully!");
        console.log("Form submitted successfully:", formData);
        fullName.value = "";
        emailEnter.value = "";
        messageInput.value = "";
      }
    
  };
  
submitBtn.addEventListener('click', validateForm);
