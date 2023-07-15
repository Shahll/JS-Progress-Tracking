function bubbleSort(arr){
    var len = arr.length;
    var swapped;

    do {
        swapped = false;

        for(let i = 0; i < len - 1; i++){
            if (arr[i] > arr[i + 1]){

                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }
        len --;

    } while(swapped);

    return arr;
}

var array = [4, 0, 8, 3, 8, 11, 1];
console.log(bubbleSort(array)); // [0, 1, 3, 4, 8, 8, 11]
  
