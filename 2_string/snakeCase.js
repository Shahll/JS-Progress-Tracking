function toSnakeCase(string) {
    if (typeof string !== 'string') {
        throw new TypeError("The given value is not a string");
    }
    let words = string.split(/(?=[A-Z])/);

    for (let i = 1; i < words.length; i++){
        words[i] = "_" + words[i][0].toLowerCase() + words[i].slice(1);
    }

    return words.join("");
}

let string = "someTextInCamelNotation";
console.log(toSnakeCase(string));