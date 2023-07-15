let arr = [1, 2, 3, 4, 5, 6, 7, 8, 3];
let target = 3;

for (let i = 0; i < arr.length; i ++){
    if (arr[i] == target){
        arr.splice(i, 1);
    }
}

for (let i = 0; i < arr.length; i ++){
    console.log(arr[i]);
}
