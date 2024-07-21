// Form Validation
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let errorMessage = document.getElementById('error-message');
  
  // Simple email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address';
    return;
  }
  
  // Password length validation
  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long';
    return;
  }
  
  errorMessage.textContent = '';
  alert('Form submitted successfully!');
});

// Interactive Menus
document.querySelectorAll('#menu li').forEach(item => {
  item.addEventListener('click', event => {
    alert(`You clicked on ${event.target.textContent}`);
  });
});

// Dynamic Content Updates
document.getElementById('updateContentButton').addEventListener('click', function() {
  let contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '<p>The content has been updated dynamically!</p>';
});