// h.m.a Handicrafts — landing page interactions

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');

  // Add a subtle shadow to the header once the page scrolls
  function handleScroll() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Smooth-scroll for in-page nav links (currently all placeholders)
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});
