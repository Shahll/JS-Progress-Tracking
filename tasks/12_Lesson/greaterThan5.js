function arrayFilter(arr){
    let arrIsEmpty = true;
    arr.forEach(element => {
        if (element > 5)
            for (let i = 2; i < Math.sqrt(element); i++) 
                if (!(element % i == 0)) {
                    console.log(element);
                    arrIsEmpty = false;
                }
    });
    console.log(arrIsEmpty ? "Немає відповідних чисел" : "");
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayFilter(array)