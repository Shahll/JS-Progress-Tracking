function shellSorting(arr){
    var n = arr.length;
    var gap = Math.floor(n / 2);

    while (gap > 0){
        for(let i = gap; i < n; i++){
            temp = arr[i];
            j = i;

            while (j >= gap && arr[j - gap] > temp){
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}
const arr = [79, 28, 3, 7, 93, 55, 1, 0, 27, 69];
console.log(shellSorting(arr))