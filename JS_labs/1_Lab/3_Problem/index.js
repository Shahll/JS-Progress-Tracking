function changeDate(){
    const dateControl = document.querySelector('input[type="date"]');
    const textToChange = document.getElementById("textToChange");

    let timeStamp = dateControl.valueAsNumber;
    let previousDate = new Date(timeStamp - 86400000);
    let nextDate = new Date(timeStamp + 86400000);

    textToChange.innerText = `previous date is ${previousDate.toLocaleDateString()} and next date is ${nextDate.toLocaleDateString()}`;


}