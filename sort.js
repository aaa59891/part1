let arraySize = 0; // array size
let arrayStr = '' // assume use string contains integers separated by space. ex: '1 2 3 4'

/**
 * Define unsorted numbers is 
 * Count the number of times when a number is greater than its subsequent number 
 *  then record the smallest index and the largest index in the unsorted pairs.
 * 
 *  When the number of times is zero, the array is already sorted.
 *  When the number of times is less than or equal to two, we can only use swap method to check if the array can be sorted.
 *      if the smallest index and the largest index in the unsorted pairs are next to each other,
 *      the number of unsorted pairs is 1. If not the number of unsorted pairs is 2,
 *      (array[1, 3, 2, 4, 5] => unsorted pair: [3, 2], array[1, 4, 3, 2, 5] => unsorted pairs: [4, 3], [3, 2])
 *      (array[3, 2, 1] can use swap or reverse, but in this condition just stick to the swap method)
 *  When the number of times is greater than two, we can only use reverse method to check if the array can be sorted.
 *      find the smallest index and the largest index, then check the sub-segment to see if each element is greater than its subsequent element.
 */

function isSort(n, arr){
    let right = -1;
    let left = -1;
    let count = 0;
    for(let i = 0; i < n - 1; i++){
        if(arr[i] < arr[i + 1]){
            continue;
        }
        count++;
        if(left === -1){
            left = i;
        }
        right = i + 1;
    }
    if(count === 0){
        console.log('yes');
        return;
    }
    if(count <= 2){
        swap(arr, left, right);
        const leftNum = arr[left], rightNum = arr[right];
        let leftOk = left === 0? 
            leftNum < arr[left + 1] 
            :
            (leftNum > arr[left - 1] && leftNum < arr[left + 1]);
        let rightOk = right === n - 1?
            rightNum > arr[right - 1]
            :
            (rightNum > arr[right - 1] && rightNum < arr[right + 1]);
        if(leftOk && rightOk){
            console.log('yes');
            console.log('swap', left + 1, right + 1);
        }else{
            console.log('no');
        }
        return;
    }

    for(let i = left; i < right; i++){
        if(arr[i] < arr[i + 1]){
            console.log('no');
            return;
        }
    }
    console.log('yes');
    console.log('reverse', left + 1, right + 1);
}

function swap(arr, left, right){
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const arr = arrayStr.split(' ').map((d) => parseInt(d));

isSort(arraySize, arr);