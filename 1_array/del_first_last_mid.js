let arr = [1, 2, 3, 4, 5, 6, 7];
let mid;

arr.splice(0, 1);
arr.splice(arr.length -1, 1);
mid = arr.length / 2;
arr.splice(mid, 1);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
