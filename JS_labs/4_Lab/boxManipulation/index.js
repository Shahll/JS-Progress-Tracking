const inputElements = [
  document.getElementById("volume1"),
  document.getElementById("volume2"),
  document.getElementById("volume3"),
];

inputElements.forEach((element, index) => {
  element.addEventListener("input", function(event){
    document.getElementById(`volumeLevel${index + 1}`).textContent = event.target.value;
  });
});


let volume1 = document.getElementById("volume1");
let volume2 = document.getElementById("volume2");
let volume3 = document.getElementById("volume3");

volume1.addEventListener("input", function(event){
  document.getElementById("volumeLevel1").textContent = event.target.value; 
  document.getElementsByClassName("square")[0].style.width = event.target.value + "px";
});

volume2.addEventListener("input", function(event){
  document.getElementById("volumeLevel2").textContent = event.target.value; 
  document.getElementsByClassName("square")[0].style.height = event.target.value + "px";
});

volume3.addEventListener("input", function(event){
  document.getElementById("volumeLevel3").textContent = event.target.value; 
  document.getElementsByClassName("square")[0].style.rotate = event.target.value + "deg";
});