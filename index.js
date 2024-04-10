window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".nav-bar");
  if (window.scrollY > 4) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});
