/*function quickSort(arr, low=0, high=NaN){
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
            arr[wall++] = temp;
        }
    }
    let temp = arr[high];
    arr[high] = arr[wall];
    arr[wall] = temp;

    return wall;
}

*/

function quickSort(items){
    const length = items.length;

    if (length <= 1){
        return items;
    }
    const PIVOT = items[0];
    const GREATER = [];
    const LESSER = [];

    for (let i = 1; i < length; i++){
        if (items[i] > PIVOT){
            GREATER.push(items[i])
        } else {
            LESSER.push(items[i])
        }
    }

    const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)];
    return sorted;
}
