function addNumbers (num1, num2){
    console.log(arguments);
    let result = 0;
    for(const num of arguments){
        // console.log(num);
        result = result + num;
    }

    // const result = num1 + num2;
    return result;
}

// const sum = addNumbers(23, 13);
const sum = addNumbers(23, 13,35,854,354,5,82,64,58);

console.log(sum);
// what if i put const sum = addNumbers(23, 13,35,854,354); somthing like this | jekhane parameter declare korchilam only 2 ta kintu pass koracchi onek

function getFullName(firstName, LastName){
    console.log(arguments);
    let fullName = '';
    for(const name of arguments){
        fullName = fullName + name + " " ;
        // fullName = name.concat(name);
        // console.log(name);
    }
    // const fullName = firstName + ' ' + LastName;
    return fullName;
}

const myName = getFullName('md','amanullah', 'parvez', 'ibn', 'shahidul', 'islam', 'ibn', 'khed', 'ali', 'mondol');
console.log(myName);