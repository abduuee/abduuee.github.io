const imgContent = document.querySelectorAll('.img-content-hover');

// Function to show the image content on mouse movement
function showImgContent(e) {
  // Iterate through each images
  for (var i = 0; i < imgContent.length; i++) {
    // Get the current mouse coordinates
    x = e.pageX;
    y = e.pageY;
    // Applied a CSS transform to move the image content to the current mouse coordinates
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);
