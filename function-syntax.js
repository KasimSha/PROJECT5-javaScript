// JS everything is object.
let username = "rohit";
let counter = 100;

function multiply1(n1,n2){
    return n1*n2;
}

// the way string is object, and assign to a variable
// the way number is object, , and assign to a variable
// function is also a object; , and assign to a variable
// Annonymous function :: function with No Name
let mutliply2=function(n1,n2){
    return n1*n2;
}

let output1=multiply1(20,30);
let output2=mutliply2(30,40);// calling annonymous function 

console.log(output1,output2);

