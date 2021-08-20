const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


/* 
// slice doesn't remove elements from an Array

const numberSliced = numbers.slice(4,6);
console.log('Example of slice:', numbers, numberSliced);

// slice doesn't remove elements from an Array

const splicedElements = numbers.splice(5,3);
console.log('Example of splice:', numbers, splicedElements);
 */

// insert elemet into array with splice method
const addedArray = numbers.splice(3,3,111,222,333);
console.log(addedArray);
console.log(numbers);