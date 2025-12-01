document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Login successful");
      console.log("Login successful");
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Signup successful");
      console.log("Signup successful");
    });
  }
});
