const squares = document.querySelectorAll('.square');
const palette = document.querySelector(".color-palette");
let colors = "";

squares.forEach(square => {
  square.addEventListener("click", () => {
    if(square.style.borderColor != "black") {
      square.style.borderColor = "black";
      colors += `, ${square.id}`
    } else {
      square.style.borderColor = "white";
      colors = colors.replace(`, ${square.id}`, "");
    }
    palette.style.background = `linear-gradient(180deg${colors})`;

});
});
