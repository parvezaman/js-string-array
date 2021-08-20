// TypeError: Assignment to constant variable.
/* const name = 'ami';
name = 'tumi';
console.log(name);
 */


// SyntaxError:  Unexpected identifier
/* for(let i = 0; i<10 i++){
    console.log(i);
}
 */

// SyntaxError: Missing initializer in const declaration | variable er sathe array or something kisui assign kori nai 
/* const student;
console.log(student.name); */



// lets assign some rubbish value
// TypeError: Cannot read property 'name' of undefined
/* const student = undefined;
console.log(student.name);
 */


// TypeError: student is not a function
/* const student = undefined;
console.log(student()); */


// search for: javaScript error; mozila developers

// try-catch

// const name = 'ami';
const name = 'ami';

try {
    name = 'tumi';
}
catch(error){
    console.log('getting error', error);
}

console.log(name);