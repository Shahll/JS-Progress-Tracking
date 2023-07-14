let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++){
    temp = arr[i]
    arr[i] = arr[arr.length -1]
    arr[arr.length - 1] = temp
}
arr[0] = 0

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}