//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr){
    for (var i=arr.length-1; i>=0; i--){//4,3, 2, 1, 0
        if(arr[i]<0){//5, -4, -3, 2, -1
            arr[i] = arr[i+1];//-4 = 5, -3 =5, 
            if(arr[i+1]>0){
                arr[i+1] = arr[i+2];
            }
            arr.length = arr.length-1;
            console.log(arr);
        }
    }
    return arr;

    // for (var i=0; i<arr.length; i++){
    //     if(arr[i]<0){
    //         arr[i] = arr[i+1];
    //     }
    // }
    // arr.length = arr.length-1;
    // return arr;
}
console.log(removeNegatives([-1,2,-3,-4,5]));