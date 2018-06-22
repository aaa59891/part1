
/**
 * First try: failed
 *  can not print the zero tail.
 *  result is too large.
 */
function factorialFirst(n){
    if(!Number.isInteger(n)){
        throw 'Input must an be integer!';
    }
    return factorialTail(n, 1);
}

function factorialTail(n, result){
    if(n === 1){
        return result;
    }
    return factorialTail(n-1, result * n);
}

/**
 * Second try: Failed
 *  even cut off the zeroes tail, the number is still too large!
 */
function factorialSecond(n){
    let zeroes = '';
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
        while(result % 10 === 0){
            zeroes += '0';
            result /= 10;
        }
    }
    return result.toString() + zeroes;
}


/**
 * Final try: Succeeded
 * 
 *  split the number into an array,
 *  then use Long Multiplication
 * 
 *        1 2
 *  X)    1 3
 * --------------
 *        3 6
 *      1 2
 * ---------------
 *      1 5 6
 * 
 */
function factorialFinal(n){
    if(!Number.isInteger(n)){
        throw 'Input must be an integer!';
    }
    let result = [1];
    for(let i = 2; i <= n; i++){
        const tempArr = getNumberArray(i);
        let arr = [];
        for(let j = 0; j < tempArr.length; j++){
            let plus = 0;
            for(let k = 0; k < result.length; k++){
                const tempNum = tempArr[j] * result[k] + plus + (arr[j + k]? arr[j + k]: 0);
                arr[j + k] = tempNum % 10;
                plus = parseInt(tempNum / 10);
            }
            if(plus !== 0){
                arr.push(plus);
            }
        }
        result = arr;
    }
    return result.reduce((pre, cur) => cur.toString() + pre, '');
}

function getNumberArray(number){
    let result = [];
    while(parseInt(number / 10) !== 0){
        result.push(number % 10);
        number = parseInt(number / 10);
    }
    result.push(number);
    return result;
}

const input = parseInt(process.argv[2]);
if(!Number.isInteger(input)){
    console.log('Input must an be integer.');
    return;
}
console.log(factorialFinal(input));
