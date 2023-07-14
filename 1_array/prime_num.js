function is_prime(number){
    if (number < 2){
        return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false
        }
    }
    return true
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (j = 0; j < arr.length; j++){
    if (is_prime(arr[j])){
        console.log(arr[j])
    }
}
