function counter(arr){
    let minNum = arr[0];
    let maxNum = arr[0];

    let countZero = 0;
    let countMax = 0;
    let countMin = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (maxNum < arr[i]){
            maxNum = arr[i];
        }
        if (minNum > arr[i]){
            minNum = arr[i];
        }
    }     
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0){
            countZero +=1;
        }
        if (arr[i] == maxNum){
            countMax +=1;
        }
        if (arr[i] == minNum){
            countMin +=1;
        }
    }
       
    console.log(`In array: ${countZero} - Zero's, ${countMax} - Max numbers, ${countMin} - Min numbers`)
}   

arr = [1, 2, 3, 0, 4, 5, 6, 1, 2, 6]  
counter(arr)