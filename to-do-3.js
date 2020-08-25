//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]<0){
            for (var j=i; j<arr.length-1; j++){
                var temp = arr[j];//-1
                arr[j] = arr[j+1];//2
                arr[j+1] = temp;
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}
console.log(removeNegatives([-1,2,-3,-4,5, -7, 8, -9]));//[2,-1...]

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
// console.log(secondLargest([42,1,4,Math.PI, 7]));

//Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function fromArrayEnd(arr, val){
    // console.log(arr[arr.length-val]);
    return arr[arr.length-val];
}
// console.log(fromArrayEnd([5,2,3,6,4,9,7], 3));

//Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.
function Nth_largest(arr, N){
    for (var j=0; j<N; j++){
        console.log(j, "j value");
        var max = arr[0];
        var max_i = 0;
        for (var i=0; i<arr.length; i++){
            if (arr[i]> max){
                max_i = i;
                max = arr[i];
                console.log(arr[i], "here");
            }
        }
        arr[max_i] = -100;
    }   
    console.log(arr);
    return max;
}

// console.log(Nth_largest([-1,-3,-8,-1,-2,-20,-4,-2,-5,-6], 3));





//Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function buildingHeight(arr){
    var max = 0;
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        if(arr[i]<0){
            continue
        }
        else if (arr[i]>max){
            max = arr[i];
            newArr.push(max);
        }
    }
    return newArr;
}
// console.log(buildingHeight([1,-1,7,3]))