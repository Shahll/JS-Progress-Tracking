var text = "";
function add(){
    const number = document.getElementById("textInput").value;
    const textToChange = document.getElementById("text");

    if (number == 0){
        text += " = " + eval(text);
        textToChange.innerText = text;
    } else if (text.length == 0)
        text = number;
    else {
        text += " + ";
        text += number;
    }


}
