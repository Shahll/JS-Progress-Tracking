const colors = ["darkred", "red", "orange", "yellow", "lightgreen", "green", "lightblue", "blue", "darkblue"];
let counter = -1;
let currentColor = "";

for (let i = 1; i <= 3; i++) {
  let tr = document.createElement("tr");

  for (let j = 1; j <= 3; j++) {
    counter++;
    let th = document.createElement("th");
    th.className = "square";
    th.style.backgroundColor = colors[counter];
    th.addEventListener("click", () => {
      currentColor = th.style.backgroundColor;  
      console.log(currentColor)
    })
    tr.appendChild(th);
  }
  document.body.appendChild(tr)
}

for(let i = 0; i < 8; i++) {
  let tr = document.createElement("tr");
  for(let j = 0; j < 8; j++){
    let th = document.createElement("th");
    th.className = "field"
    th.addEventListener("click", () => {
      th.style.backgroundColor = currentColor;
    })
    tr.appendChild(th);
  }
  document.body.appendChild(tr)
}
