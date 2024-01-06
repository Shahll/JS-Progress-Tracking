function calculate(){
    const number = document.getElementById("number").value;
    const degree = document.getElementById("degree").value;
    const textToChange = document.getElementById("answer");

    let text = "";
    text += number + " ** " + degree;
    textToChange.innerText = eval(text);
}