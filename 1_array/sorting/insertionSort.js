function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        j = i
        while (j > 0 && arr[j - 1] > arr[j]) {
            var temp = arr[j];
            arr[j] = arr[j -1];
            arr[j - 1] = temp;
            j --;
        }
    
    }
    return arr
}
var arr  = [4,3,2,10,1,12,8]
console.log(insertionSort(arr))
