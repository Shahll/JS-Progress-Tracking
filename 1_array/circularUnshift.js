function shiftRight(arr, times){
    for(let i = 0; i < times; i++){
        arr.splice(0, 0, arr.pop())
    }
}


let arr = [1, 2, 3, 4, 5]
shiftRight(arr, 1)
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}