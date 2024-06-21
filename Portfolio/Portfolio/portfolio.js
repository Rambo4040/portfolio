
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
window.onload = function() {
  const fadeInText = document.getElementById('fadeInText');
  
  // Remove 'hidden' class to fade in the text
  fadeInText.classList.remove('site-title');
  
  // Set a timer to add 'hidden' class back after 3 seconds
  setTimeout(function() {
    fadeInText.classList.add('site-title');
  }, 3000); // 3000 milliseconds = 10 seconds
};
