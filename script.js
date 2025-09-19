// Select elements
const showMessageBtn = document.getElementById('showMessageBtn');
const message = document.getElementById('message');
const colorBox = document.getElementById('colorBox');
const nameInput = document.getElementById('nameInput');
const displayName = document.getElementById('displayName');
const toggleContentBtn = document.getElementById('toggleContentBtn');
const content = document.getElementById('content');

// 1. Click event: show hidden message
showMessageBtn.addEventListener('click', () => {
  message.classList.toggle('hidden');
});

// 2. Mouseover event: change box color
colorBox.addEventListener('mouseover', () => {
  colorBox.style.backgroundColor = 'lightgreen';
});
colorBox.addEventListener('mouseout', () => {
  colorBox.style.backgroundColor = 'lightgray';
});

// 3. Keyboard input event: live update text
nameInput.addEventListener('input', () => {
  displayName.textContent = nameInput.value;
});

// 4. Toggle content visibility
toggleContentBtn.addEventListener('click', () => {
  if (content.style.display === 'none') {
    content.style.display = 'block';
    toggleContentBtn.textContent = 'Hide Content';
  } else {
    content.style.display = 'none';
    toggleContentBtn.textContent = 'Show Content';
  }
});



// Part Two

// 1. Light/Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggleBtn.textContent = 'Switch to Light Mode ☀️';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Mode 🌙';
  }
});

// 2. Counter Game
let count = 0;
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

increaseBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});

// 3. Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// 4. Tabbed Interface
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    // Add active to the clicked button and corresponding tab
    button.classList.add('active');
    const tabId = button.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});


// Part Three

// Select elements
const signupForm = document.getElementById('signupForm');
const nameInputs = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

// Validation functions
function validateName() {
  const name = nameInputs.value.trim();
  if (name === '') {
    nameError.textContent = 'Name is required.';
    return false;
  } else if (name.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters.';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required.';
    return false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  // at least 6 characters, one number
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (password === '') {
    passwordError.textContent = 'Password is required.';
    return false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent = 'Password must be at least 6 chars & include a number.';
    return false;
  } else {
    passwordError.textContent = '';
    return true;
  }
}

function validateConfirmPassword() {
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (confirmPassword === '') {
    confirmPasswordError.textContent = 'Please confirm your password.';
    return false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    return false;
  } else {
    confirmPasswordError.textContent = '';
    return true;
  }
}

// Real-time validation (on input)
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// On form submit
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form from submitting immediately

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    successMessage.textContent = '🎉 Form submitted successfully!';
    signupForm.reset();
    // clear errors after reset
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  } else {
    successMessage.textContent = '';
  }
});
