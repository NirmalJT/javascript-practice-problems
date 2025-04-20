// 14. The Window Scroller:
//You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop
// That smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
