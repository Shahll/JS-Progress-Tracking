function filterArray (number, arr) {
    let wasFound = false;
    arr.forEach(element => {
        if (arr[element] > number && arr[element] % number == 0) {
            console.log(arr[element]);
            wasFound = true;
        }
    });
    console.log(!wasFound ? "Немає відповідних чисел" : "")
}

let number = 3;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterArray(number, arr);