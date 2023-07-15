function countingSort(arr){
    var countingList = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++){
        countingList[arr[i]]++;
    }

    const result = [];

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < countingList[i]; j++){
            result.push(i);
        }
    }

    return result;
}

const arr = [7, 3, 9, 1, 5, 5, 2, 7, 1, 3, 7, 5, 9, 5];
console.log(countingSort(arr));