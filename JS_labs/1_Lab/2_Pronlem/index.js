function changeText(){
    const number = document.getElementById("mainInput");
    const text = document.getElementById("textToChange");
    let changedNumber = number.value;
    let firstNumber = 0;
    firstNumber = number.value - (Math.floor(number.value / 10) * 10);
    changedNumber = Math.floor(number.value / 10) + firstNumber * 10000;
    text.innerText = changedNumber;
}