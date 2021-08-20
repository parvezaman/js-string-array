const anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';

// split method
const words = anthem.split(' ');
const withoutA = anthem.split('a');


console.log(words,anthem.length, words.length);
console.log(withoutA,anthem.length, withoutA.length);

// slice method
const smallSlice = anthem.slice(5,15);
console.log(smallSlice, typeof(smallSlice));

// substr ,method
const subStrExample = anthem.substr(5,3);
console.log(subStrExample, typeof(subStrExample));


// subString example
const subStringExample = anthem.substring(3,6);
console.log(subStringExample, typeof(subStringExample));


// concat
const first = 'Amader';
const second = 'City';

// const fullString = first + second;
// const fullString = first.concat(second);
const fullString = first.concat( second).concat('whatever text').concat('from whatever author');

console.log(fullString);


// join method

const fragmented = [
'A', 'm', 'a', 'r', ' ', 'S', 'o', 'n', 'a', 'r', ' ', 'B', 'a', 'n', 'g', 'l', 'a', ' ', 'A', 'm', 'i',
' ', 'T', 'o', 'm', 'a', 'i', ' ', 'V', 'a', 'l', 'o', 'b', 'a', 's', 'i'
]

const fullAnthem = fragmented.join('');

console.log(fullAnthem);

const names =['aman','rakib', 'alvee', 'tanvee', 'zaraa'];
// const nameList = names.join('');
// const nameList = names.join(' ');
// const nameList = names.join(',');
// const nameList = names.join(', ');
// const nameList = names.join(' , ');
const nameList = names.join(' nameAgain ');
console.log(nameList);