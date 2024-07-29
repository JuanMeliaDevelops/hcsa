
  // Get the button
  const backToTopButton = document.getElementById('backToTop');

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  backToTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
