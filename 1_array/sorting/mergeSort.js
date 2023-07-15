function mergeSort(array){
    if (array.length <= 1){
        return array;
    }
        
    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);

    const leftSortedHalf = mergeSort(leftHalf);
    const rightSortedHalf = mergeSort(rightHalf);

    return merge(leftSortedHalf, rightSortedHalf);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length){
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

const array = [8, 3, 5, 1, 9, 2, 7, 4, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray);