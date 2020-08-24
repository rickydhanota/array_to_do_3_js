//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr){
    for (var i=arr.length-1; i>=0; i--){
        if(arr[i]<0){
            arr[i] = arr[i+1];
            if(arr[i+1]>0){
                arr[i+1] = arr[i+2];
            }
            arr.length = arr.length-1;
        }
    }
    return arr;
}
// console.log(removeNegatives([-1,2,-3,-4,5, -7, 8, -9]));

//Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function secondLargest(arr){
    var max = 0;
    for (var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            console.log(max);
        }
    }
    for (var i=0; i<arr.length; i++){
        var temp = max/arr[0];
        if(max == arr[i]){
            continue;
        }
        else if(max/arr[i]>= temp){
            temp = arr[i];
        }
    }
    return temp;
}
console.log(secondLargest([42,1,4,Math.PI, 7]));

