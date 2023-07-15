function combSort(arr){
    var gap = arr.length;
    var sorted = false;
    
    while (!sorted){
        gap = Math.floor(gap / 1.3);
        if (gap <= 0){
            sorted = true;
        }

        i = 0;
        while (i + gap != arr.length || i + gap < arr.length){
            if (arr[i] > arr[i + gap]){
                var temp = arr[i];
                arr[i] = arr[i + gap];
                arr[i + gap] = temp;
            }
            i++;
        }
    }
    
    return arr
}

var arr = [8, 4, 13, 1, 11, 9, 45, 3]
console.log(combSort(arr))
