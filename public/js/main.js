$(".navbar__toggle").click(function () {
  const visibility = $(".navbar__toggle").attr("aria-pressed");
  if (visibility === "false") {
    $(".navbar__toggle").attr("aria-pressed", "true");
    $(".sub__header").attr("data-visible", "true");
  } else if (visibility === "true") {
    $(".navbar__toggle").attr("aria-pressed", "false");
    $(".sub__header").attr("data-visible", "false");
  }
});

/* animation stopper while resizing the window */
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
/* animation stopper while resizing the window */

// Simple example of OwlCarousel.js
