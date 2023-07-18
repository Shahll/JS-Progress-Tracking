let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr = arr.filter((number) => number % 2 == 0);
arr = arr.map((number) => number * 2);
arr = arr.reduce((accu, number) => accu + number, 0);

console.log(arr)