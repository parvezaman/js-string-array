const products = [
    'Dell hardcore i29 200GB laptop',
    'iPhone 1TB camera wala phone',
    'Dell yellow laptop with black camera',
    '1X59 Lenovo commercial yoga Laptop',
    'LG supernova laptop',
    'HTC Low price Phone',
    'Dell Purple color phone with pink Laptop'
]

const searching = 'laptop';
const output = [];
const outputLowerCase = [];
const outputLowerCaseIncludes = [];
const outputUpperCase = [];
const outputLowerCaseStartsWith = [];


for(const product of products){
    if (product.indexOf(searching) != -1){
        output.push(product);
    }
} 
console.log(output, output.length , 'out of', products.length);

// this code doesnt show us all the outputs so we have to convert the strings into lower/ upper case

for(const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        outputLowerCase.push(product);
    }
}

console.log(outputLowerCase, outputLowerCase.length , 'out of', products.length);


// or

for(const product of products){
    if (product.toUpperCase().indexOf(searching.toUpperCase()) != -1){
        outputUpperCase.push(product);
    }
}

console.log(outputUpperCase, outputLowerCase.length , 'out of', products.length);


const toSearch ='amar sonar bangla ami tomai valobasi';

console.log(toSearch.includes('bangla'));


//ekhon ager loop ta .includes diye kora jak

for(const product of products){
    if (product.toLowerCase().includes(searching.toLowerCase())){ //== true dileo chole na dilew chole
        outputLowerCaseIncludes.push(product);
    }
}

console.log(outputLowerCaseIncludes, outputLowerCaseIncludes.length , 'out of', products.length);


// startsWith
const searchingDell = 'Dell';
for(const product of products){
    if (product.toLowerCase().startsWith(searchingDell.toLowerCase()) == true ){ //== true dileo chole na dilew chole
        outputLowerCaseStartsWith.push(product);
    }
}

console.log(outputLowerCaseStartsWith, outputLowerCaseStartsWith.length , 'out of', products.length);
