// 🎈 Button Click – Change background color
document.getElementById("color-button").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// 🤫 Double-click for secret
document.getElementById("dblclick-button").addEventListener("dblclick", () => {
  alert("Thou hast discovered the hidden double-click scroll!");
});

// 🎮 Accordion Toggle
const accBtn = document.querySelector(".accordion-toggle");
const accContent = document.querySelector(".accordion-content");

accBtn.addEventListener("click", () => {
  accContent.style.display =
    accContent.style.display === "block" ? "none" : "block";
});

// ⌨️ Keypress Detection
document.getElementById("key-input").addEventListener("keyup", (e) => {
  document.getElementById(
    "keypress-output"
  ).textContent = `Thou hast typed: ${e.key}`;
});

// 📋✅ Form Validation
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailFeedback = document.getElementById("email-feedback");
const passwordFeedback = document.getElementById("password-feedback");

// Real-time validation
emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  if (!email.includes("@")) {
    emailFeedback.textContent = "This email is most improper!";
  } else {
    emailFeedback.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  passwordFeedback.textContent =
    pwd.length < 8 ? "Password must be at least 8 characters, good sir." : "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (!emailInput.value.includes("@")) {
    emailFeedback.textContent = "This email is most improper!";
    valid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters!";
    valid = false;
  }

  if (valid) {
    alert("Huzzah! Thou hast submitted the form successfully.");
    form.reset();
  }
});
