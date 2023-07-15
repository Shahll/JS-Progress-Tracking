function quickSort(arr, low=0, high=NaN){
    if (isNaN(high)){
        high = arr.length - 1;
    }
    if (low < high){
        const wall = partition(arr, low, high)
        quickSort(arr, low, wall -1);
        quickSort(arr, wall + 1, high);
    }
    return arr;
}

function partition(arr, low, high){
    const pivot = arr[high];
    let wall = low;

    for (let i = low; i < high; i++){
        if (arr[i] < pivot){
            let temp = arr[i];
            arr[i] = arr[wall];
            arr[wall] = temp;
            wall++;
        }
    }
    var temp = arr[high];
    arr[high] = arr[wall];
    arr[wall] = temp;

    return wall;
}



const arr = [12, 1, 77, 34, 8, 56, 6, 17, 28, 39];
console.log(quickSort(arr));