const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
// Function to validate the form
const validate = (e) => {
  e.preventDefault();
 
  // Check if name input is valid
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  // Check if email input is valid using basic format validation
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  // Check if email input is valid using regular expression validation
  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  // Check if message input is valid
  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  // Clear any previous error messages
  errorElement.innerHTML = '';

  // Display success message and clear form after 6 seconds
  successMsg.innerHTML = 'Thank you! We will get back to you as soon as possible.'; 
  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;
}

// Function to validate email format using regular expression
const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Add event listener to the submit button, triggering the validate function on click
submitBtn.addEventListener('click', validate);
