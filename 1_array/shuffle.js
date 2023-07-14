function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < 100; i++){
    let index = random(0, arr.length);
    let temp = arr[0]
    arr[0] = arr[index]
    arr[index] = temp

}

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}