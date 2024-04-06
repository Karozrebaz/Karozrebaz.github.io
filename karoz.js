document.querySelector(".toTopBtn").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); // This line was modified
});
