// your code goes here
// Smooth scroll to news section
function scrollToNews() {
  document.getElementById("news").scrollIntoView({ behavior: "smooth" });
}

// Tiny animation for hero text
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  setTimeout(() => {
    hero.style.transition = "opacity 1.2s ease";
    hero.style.opacity = 1;
  }, 200);
});
