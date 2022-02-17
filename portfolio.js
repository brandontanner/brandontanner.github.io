var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

const parallax = document.getElementById ("parallax")

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.9 + "px";
});