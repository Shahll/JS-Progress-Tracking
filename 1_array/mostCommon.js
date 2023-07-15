function mostCommon(arr){
    let mostCommonNumber = null;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++){
        let count = 0;

        for (let j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]){
                count ++;
            }
        }

        if (maxCount < count){
            maxCount = count;
            mostCommonNumber = arr[i];
        }

    }

    return mostCommonNumber;
}

const arr = [ 1, 1, 1, 2, 2, 4, 4, 4, 4, 4];
mostCommonNumber = mostCommon(arr)
console.log(mostCommonNumber)