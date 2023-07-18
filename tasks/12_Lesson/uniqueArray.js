function uniqueArray (firstArray, secondArray){
    let mixedArray = [];
    for (let i = 0; i < firstArray.length; i++){
        if (!secondArray.includes(firstArray[i]))
            mixedArray.push(firstArray[i]);
    }
    return mixedArray;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 4, 5, 6, 8, 9];

console.log(uniqueArray(arr1, arr2))