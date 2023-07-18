/*function mergeSort(array){
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

    while(leftIndex < left.length && rightIndex < right.length)
        if (left[leftIndex] < right[rightIndex])
            result.push(left[leftIndex++]);
        else 
            result.push(right[rightIndex++]);
        
    

    while (leftIndex < left.length)
        result.push(left[leftIndex++]);

    while (rightIndex < right.length)
        result.push(right[rightIndex++]);

    return result;
}
*/

function merge(list1, list2){
    const results = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length){
        if (list1[i] < list2[j]) {
            results.push(list1[i++])
        } else {
            results.push(list2[j++])
        }
    }

    return results.concat(list1.slice(i), list2.slice(j));
}

function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }

    const listHalf = Math.floor(list.length / 2);
    const subList1 = list.slice(0, listHalf);
    const subList2 = list.slice(listHalf, list.length);

    return merge(mergeSort(subList1), mergeSort(subList2));
}



const array = [8, 3, 5, 1, 9, 2, 7, 4, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray);

