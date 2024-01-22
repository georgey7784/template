// Login Popup
function openPopup() {
  document.getElementById('loginPopup').style.display = 'flex';
}

// Function to close the login popup
function closePopup() {
  document.getElementById('loginPopup').style.display = 'none';
}

// Function to submit login (you can replace this with your actual login logic)
function submitLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }


  // For demonstration purposes, just close the popup
  alert('Login successful!'); // Replace this with your actual login logic
  closePopup();
}
function openLoginBox() {
    document.getElementById('loginBox').style.display = 'block';
}

function closeLoginBox() {
    document.getElementById('loginBox').style.display = 'none';
}

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Perform login logic here (e.g., send data to server)
    // For demonstration purposes, just close the login box
    alert('Login successful!'); // Replace this with your actual login logic
    closeLoginBox();
}


// Open the login popup after 3 seconds
setTimeout(openPopup, 3000);



let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");
navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

function validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Basic validation for demonstration purposes
  if (!username || !email || !password || !confirmPassword) {
    alert('All fields are required.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Password and Confirm Password do not match.');
    return;
  }

  // Additional validation and form submission logic can be added here
  alert('Form submitted successfully!');
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
    alert('All fields are required.');
    return;
  }

  // Additional actions (e.g., sending data to the server) can be added here
  alert('Form submitted successfully!');
  // You can add logic to send form data to the server using AJAX or fetch
}

function toggleCard(card) {
  card.classList.toggle('expanded');
}

