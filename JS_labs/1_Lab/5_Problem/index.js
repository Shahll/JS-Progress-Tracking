function start(){
    const firstNumber = parseInt(document.getElementById("firstNum").value); 
    const operator = document.getElementById("operator").value;
    const secondNumber = parseInt(document.getElementById("secondNum").value); 
    const textToChange = document.getElementById("textToAnswer");
    const buttonContainer = document.getElementById("buttonContainer");
    const buttonStart = document.getElementById("button")
    
    let answer;

    if (operator == "-")
        answer = firstNumber - secondNumber;
    else if (operator == "+")
        answer = firstNumber + secondNumber;
    else if (operator == "/" || operator == ":")
        answer = firstNumber / secondNumber;
    else if (operator == "*" || operator == "x")
        answer = firstNumber * secondNumber;

    textToChange.innerText = answer;
     
    let button = document.createElement("button");
    button.innerText = "Click if you want to end";

    button.addEventListener("click", function() {
        window.close();
    });
    buttonContainer.appendChild(button);
}