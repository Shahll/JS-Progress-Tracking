function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) { 
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } 
    }

    throw new Error("Target is not in the array");
}



const arr = [1, 4, 5 , 7, 13, 16, 18, 19, 22, 26, 29, 31, 40, 51]
console.log(binarySearch(arr, 1))
