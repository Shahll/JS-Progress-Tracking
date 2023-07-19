function toCamelCase(string){
    if (typeof string !== 'string') {
        throw new TypeError("The given value is not a string");
    }
    let words = string.split("_")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join("");
}

let string = "some_text_in_snake_notation";
console.log(toCamelCase(string));