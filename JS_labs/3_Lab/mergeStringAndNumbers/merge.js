function merge(arr) {
    let stringText = "";
    let sumOfNumbers = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string"){
            stringText += `${arr[i]} `
        } else {
            sumOfNumbers += arr[i]
        }
    }
    return sumOfNumbers, stringText;
}

console.log(merge(['Jane', 1,3,'like',5,9, 'read', 4,'books']));