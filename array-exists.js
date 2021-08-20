function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return "please provise an array";
    }

    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['aman', 'rakib', 'alvee','raihan', 'zannatul', 'tanvee', 'zaraa'];
const myBigBuddy = megaFriend(125);
// console.log(myBigBuddy);


// check if a particular friend exist in your list

const aParticularFriend = 'zaraaa';
/* if(friends.indexOf(aParticularFriend) != -1){
    console.log("your particular friend exists!");
}
else{
    console.log('that person doesnt exist!!');
} */

// same thing another way

if(friends.includes(aParticularFriend)){
    console.log('that person doesnt exist!!');
}
else{
    console.log('that person does not exist!!');
}


// array concatination
const firstArray = [1,2,5,6];
const secondArray = [85,5,8,6,798,5];

const combinedArray =  firstArray.concat(secondArray);
console.log(combinedArray);