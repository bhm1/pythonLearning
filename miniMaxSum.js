#Given five positive integers, find the minimum and maximum values that can be calculated
#by summing exactly four of the five integers. Then print the respective minimum and 
#maximum values as a single line of two space-separated long integers.
#
#Example - arr = [1,3,5,7,9]
#
#The minimum sum is 1 + 3 + 5 + 7 = 16 and 
#the maximum sum is 3 + 5 + 7 + 9 = 24. 
#The function prints 16 24


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr){
    arr.sort((a,b) => a - b);
    
    let min = arr.slice(0, arr.length - 1).reduce((a,b) => a + b )
    let max = arr.slice(1).reduce((a,b) => a + b )
    
    console.log(min, max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
