function count(string){
    if (typeof string !== "string"){
        throw new TypeError("The given value is not a string")
    }
    string = string.replaceAll(/[^a-zA-Z]/g, "");
    let arrLower = Array(26).fill(0); // 97 - 122
    let arrUpper = Array(26).fill(0); // 65 - 90

    for(let i = 0; i < string.length; i++){
        if(string[i] == string[i].toLowerCase() && string[i]){            
            let index = string.charCodeAt(i) - 97;
            arrLower[index] = arrLower[index] + 1;
        } else if(string[i] == string[i].toUpperCase()){
            let index = string.charCodeAt(i) - 65;
            arrUpper[index] = arrUpper[index] + 1;
        }
    }
    let answerString = ``;
    for(let i = 0; i < 26; i++){
        answerString += `${String.fromCharCode(i + 65)}: ${arrUpper[i]}` + "   " + 
        `${String.fromCharCode(i + 97)}: ${arrLower[i]}` + "\n";
    }

    return answerString;
}

let string = "Some Text with a lot of different letters that will count this code lmao FFFFFFF";
console.log(count(string));