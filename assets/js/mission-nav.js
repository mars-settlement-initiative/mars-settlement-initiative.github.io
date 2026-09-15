(function () {
  function updateHeader() {
    document.querySelectorAll('.mission-header').forEach(function (header) {
      header.classList.toggle('is-scrolled', window.scrollY >= 60);
    });
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}());
