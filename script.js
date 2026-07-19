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

  // Reveal-on-scroll: fade + rise elements into view as the user scrolls
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 0.06 + 's';
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Smooth-scroll for in-page nav links (currently all placeholders)
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });
});
