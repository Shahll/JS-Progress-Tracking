let name = document.getElementById("name");
let text = document.getElementById("text");
const tableContainer = document.querySelector(".container");

function showComment() {
  let date = new Date();
  const table = document.createElement("table");

  const firstRow = document.createElement("tr");
  const nameAndDateCell = document.createElement("td");
  nameAndDateCell.textContent = name.value + "        " + date.toLocaleString(); 
  firstRow.appendChild(nameAndDateCell);
  table.appendChild(firstRow);


  const secondRow = document.createElement("tr");
  const commentCell = document.createElement("td");
  commentCell.textContent = text.value;
  secondRow.appendChild(commentCell);
  table.appendChild(secondRow);

  tableContainer.appendChild(table);
}