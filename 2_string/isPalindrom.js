function isPalindrom(string){
    if (typeof string !== "string") {
        throw new TypeError("The given value is not a string");
    }
    string = (string.replaceAll(" ", "")).toLowerCase();
    let reveredString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reveredString += string[i];
    }
    return (string == reveredString);
}

let string = "A man a plan a canal Panama";
console.log(isPalindrom(string));