//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = arr[i+1];
        }
    }
    arr.length = arr.length-1;
    return arr;
}
console.log(removeNegatives([1,2,-3,-4,5]));