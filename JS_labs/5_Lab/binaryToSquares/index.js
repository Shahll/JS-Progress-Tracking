document.getElementById('text-area').addEventListener('keydown', function (ev) {
  if (ev.key !== '0' && ev.key !== '1' && ev.key !== 'Backspace') {
    ev.preventDefault();
  }
  let newDiv = document.createElement("div");
  if (ev.key === '0')      newDiv.className = "white-box";
  else if (ev.key === '1') newDiv.className = "black-box";
    
  
  document.getElementById("container").append(newDiv);
});
