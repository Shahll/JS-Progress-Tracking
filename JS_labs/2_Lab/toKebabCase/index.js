function toKebabCase(name){
    let letters = name.split("");

    for (let i = 0; i < letters.length; i++){
        if (letters[i] == letters[i].toUpperCase()){
            name = name.replace(letters[i], "-" + letters[i].toLowerCase());
        }
    }
    return name;
}

console.log(toKebabCase("fontSize"));
console.log(toKebabCase("backgroundColor"));
console.log(toKebabCase("textAlign"));