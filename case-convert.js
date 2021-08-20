const string = 'Aman Sonar Bangla Ami Tomai Valobasi';


const userInput = 'blACkPink';
const savedUserName = 'blackPink';

if( userInput == savedUserName){
    console.log('unconverted string case showed up');
}
if(userInput.toLowerCase() == savedUserName.toLowerCase()){
    console.log('converted toLowerCase showed up');
}
else if(userInput.toUpperCase() == savedUserName.toUpperCase()){
    console.log('converted toUpperCase showed up');
}