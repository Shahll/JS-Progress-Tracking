function reverse(string){
    if (typeof string !== "string"){
        throw new TypeError("The given value is not a string")
    }

    let revereString = "";

    for (let index = string.length - 1; index >= 0; index--){
        revereString += string[index]
    }

    return revereString;
}

let string = "uoy evol I";
console.log(reverse(string));