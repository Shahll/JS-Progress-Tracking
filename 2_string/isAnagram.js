function isAnagram(string1, string2) {
    let letters = string1.split();

    for (let i = 0; i < string2.length; i++) {
        if (letters.includes(string2[i])) {
            letters.splice(i, 1);
        } else {
            return false;
        }
    }
    return (letters.length == 0);
}

let string1 = "bebra";
let string2 = "barbe";
console.log(isAnagram(string1, string2));