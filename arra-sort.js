const numbers = [1,3,65,0,2,55,4,5,22,6,11,7,12,8,9,13,10];
/* const reversedArray =[];
for(const number in numbers){
    reversedArray.unshift(number);
}
console.log(reversedArray); */


// sort array

/* const sortedArray = numbers.sort();
console.log(sortedArray); */

const sortedNumbers = numbers.sort(function (a,b){
    return a - b;
})
console.log(sortedNumbers);


// reverse array

/* const reversedArray = numbers.reverse();
console.log(reversedArray); */