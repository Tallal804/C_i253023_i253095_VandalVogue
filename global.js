window.addEventListener("load", function () {
  console.log("Page loaded successfully");
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops the page from reloading / actually submitting
    alert("Your message has been submitted!");
  });
});
