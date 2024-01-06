const container = document.querySelector('.container');
const images = container.querySelectorAll('img.albumImage');
let index = 0;
const maxLength = images.length;

function showImages() {
  for (let i = 0; i < images.length; i++) {
    if (i !== index) {
      images[i].style.display = 'none';
    } else {
      images[i].style.display = 'block';
    }
  }
}

function previousImage() {
  if (index === 0) {
    index = maxLength - 1;
  } else {
    index--;
  }
  showImages();
}

function nextImage() {
  if (index === maxLength - 1) {
    index = 0;
  } else {
    index++;
  }
  showImages();
}

showImages();
