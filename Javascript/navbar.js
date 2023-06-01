// To store the previous scroll position
var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.fixed-navbar');


window.addEventListener('scroll', function() {
  // To get the current scroll position
  var currentScrollPos = window.pageYOffset;

  // To check if scrolling up
  if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    // Hiding the header by setting the top position to a negative value
    header.style.top = '-200px';
  }

  if (currentScrollPos === 0 || currentScrollPos < prevScrollPos) {
    // Setting the background color and margin of the header
    header.style.backgroundColor = '#cdcdcd';
    header.style.margin = '-3%';
  } else {
    // Setting the background color of the header as transparent
    header.style.backgroundColor = 'transparent';
  }


  prevScrollPos = currentScrollPos;
});

header.addEventListener('mouseenter', function() {
  // Showing the header by setting the top position to 0
  header.style.top = '0';
});


header.addEventListener('mouseleave', function() {
  // To check if the user scrolled
  if (prevScrollPos > 0) {
    // Hiding the header by setting the top position to a negative value
    header.style.top = '-555px';
  }
});
