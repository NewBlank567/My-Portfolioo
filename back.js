window.addEventListener('scroll', function() {
    var div = document.getElementById('left_body');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
    // Adjust the position of the div based on scroll position
    div.style.top = scrolled + 'px';
  });
