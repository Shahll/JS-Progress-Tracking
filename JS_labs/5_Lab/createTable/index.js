let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let count = 0;
let table = document.getElementById("my-table");

function addToTable(){
  if(firstName.value && lastName.value) {
    let row = table.insertRow(++count);

    let ceil1 = row.insertCell(0);
    let ceil2 = row.insertCell(1);
    let ceil3 = row.insertCell(2);

    ceil1.innerHTML = count;
    ceil2.innerHTML = String(firstName.value)
    ceil3.innerHTML = String(lastName.value)

    firstName.value = ""
    lastName.value = ""
  } else {
    alert("please fill in your first and last name")
  }
}