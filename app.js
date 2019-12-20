var toggler = document.querySelector(".toggle");
var navbar = document.querySelector(".nav-menu");

toggler.addEventListener("click", function() {
  navbar.classList.toggle("active");
});
