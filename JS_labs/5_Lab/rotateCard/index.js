let image = document.getElementById("img");
let counter = 0;
let rotating = false;

image.addEventListener("click", () => {
  if(rotating) return;
    
  counter++;
  rotating = true

  if(counter % 2 == 1) {
    rotateImage(0, 180, "images/cat-card2.png")
  } else {
    rotateImage(180, 0, "images/cat-card1.png")
  }
});

function rotateImage(startDeg, endDeg, newImage) {
  let increment = startDeg < endDeg ? 1 : -1;
  let currentDegree = startDeg;

  let interval = setInterval(() => {
    currentDegree += increment;
    image.style.transform = `rotateY(${currentDegree}deg)`
    
    if(currentDegree === 90) {
      image.src = newImage;
    }
    if ((increment === 1 && currentDegree >= endDeg) || (increment === -1 && currentDegree <= endDeg)) {
      rotating = false;
      clearInterval(interval);
    }
  }, 10)
}
