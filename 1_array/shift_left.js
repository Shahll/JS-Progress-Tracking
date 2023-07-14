let arr = [1, 2, 3, 4, 5]

for (let i = 1; i < arr.length; i++){
    temp = arr[i - 1]
    arr[i - 1] = arr[i]
    arr[i] = temp
}
arr[arr.length - 1] = 0

for (let j = 0; j < arr.length; j++){
    console.log(arr[j])
}

