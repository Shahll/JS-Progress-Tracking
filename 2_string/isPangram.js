function isPangram(string){
    if (typeof string !== "string"){
        throw new TypeError("The given value is not a string")
    }

    let letterSet = new Set();

    for (const letter of string.toUpperCase()){
        if(/[A-Z]/.test(letter)) {
            letterSet.add(letter)
        }
        
    }
    return (letterSet.size == 26);
}

const string = "The quick brown fox jumps over the lazy dog"
console.log(isPangram(string))