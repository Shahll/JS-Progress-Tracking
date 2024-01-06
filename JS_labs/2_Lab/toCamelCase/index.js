function toCamelCase(name){
    let words = name.split("-");
    let camelCaseName = words[0];

    for (let i = 1; i < words.length; i++){
        camelCaseName += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return camelCaseName;
}

console.log(toCamelCase('font-size'));  // Output: fontSize
console.log(toCamelCase('background-color-button'));  // Output: backgroundColorButton
console.log(toCamelCase('text-align'));  // Output: textAlign
