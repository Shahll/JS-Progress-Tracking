function selectionSort(arr){
    n = arr.length;

    for (let i = 0; i < n; i++){
        minIndex = i;

        for(let j = i; j < n; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr
}
const arr = [1,3,6,-1,0,34,7,0,123,9];
console.log(selectionSort(arr))