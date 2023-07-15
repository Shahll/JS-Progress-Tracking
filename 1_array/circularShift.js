function shiftLeft(arr, times){
    for(let i = 0; i < times; i++){
        temp = arr[0]
        arr.splice(0, 1)
        arr.push(temp)
    }
}


let arr = [1, 2, 3, 4, 5]
shiftLeft(arr, 1)
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}