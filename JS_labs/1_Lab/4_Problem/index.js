function printAge(){
    const age = document.getElementById("age").value;
    const textToChange = document.getElementById("textToChange");
    let text = "";

    const dictionary = {
        1: "один",
        2: "два",
        3: "три",
        4: "чотири",
        5: "п'ять",
        6: "шість",
        7: "сім",
        8: "вісім",
        9: "дев'ять",
        10: "десять",
        11: "одинадцять",
        14: "чотирнадцять",
        20: "двадцять",
        30: "тридцять",
        40: "сорок",
        50: "п'ятдесят",
        60: "шістдесят"
    };
    
    if (age < 10){
        text = dictionary[age]
        if (age == 1)
        text += " рік";
        else if (age < 5)
        text += " роки";
        else 
        text += " років";

    } else if(age % 10 == 0 || age == 11 || age == 14)
        text = dictionary[age] + " років"

    else if(age > 11 && age < 20){
        let secondNum = Math.floor(age / 10) * 10;
        let firstNum = Math.floor(age - (secondNum));
        text = dictionary[firstNum] + "надцять" + " років"
        
    } else {
        let secondNum = Math.floor(age / 10) * 10;
        let firstNum = Math.floor(age - (secondNum));
        
        text = dictionary[secondNum] +" "+dictionary[firstNum];
        if (firstNum == 1)
        text += " рік";
        else if (firstNum < 5)
        text += " роки";
        else 
        text += " років";
    }
    textToChange.innerText = text;
}
