let arr = [1, 2, 3, 4, 5];
let len = arr.length - 1;

for (let i = 0; i < arr.length / 2; i++){
    temp = arr[i];
    arr[i] = arr[len];
    arr[len] = temp;
    len -= 1;
}

for (let j = 0; j < arr.length; j++){
    console.log(arr[j]);
}
