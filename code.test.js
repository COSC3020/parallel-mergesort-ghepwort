const fs = require('fs');
const assert = require('assert');

// Load the sorting algorithm from 'code.js'
eval(fs.readFileSync('code.js') + '');

// Wooo, test cases!!
// Wrote the test cases in a async function as that was the best way I found to run the rests
async function testMergeSortIterativeParallel() {
    let arr1 = [10, 3, 2, 7, 5, 8, 1, 6];
    let expected1 = [1, 2, 3, 5, 6, 7, 8, 10];
    assert.deepStrictEqual(await mergeSortIterativeParallel(arr1), expected1);


    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let expected2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.deepStrictEqual(await mergeSortIterativeParallel(arr2), expected2);


    let arr3 = [10, -5, 0, -1, 8, -7];
    let expected3 = [-7, -5, -1, 0, 8, 10];
    assert.deepStrictEqual(await mergeSortIterativeParallel(arr3), expected3);


    let arr4 = [];
    let expected4 = [];
    assert.deepStrictEqual(await mergeSortIterativeParallel(arr4), expected4);


    let arr5 = [3, 2, 2, 1, 1, 3];
    let expected5 = [1, 1, 2, 2, 3, 3];
    assert.deepStrictEqual(await mergeSortIterativeParallel(arr5), expected5);
}

// Run the tests
testMergeSortIterativeParallel();
