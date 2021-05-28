//function without default params
function multiply(n1,n2){
    return n1*n2;
}

let output1=multiply();
let output2=multiply(10);
let output3=multiply(10,30);
let output4=multiply(10,20,30);

console.log("function without default params");
console.log(output1,output2,output3,output4);


//function with default params
function multiply1(n1=0,n2=0){
    return n1*n2;
}

let output5=multiply1();
let output6=multiply1(10);
let output7=multiply1(10,30);
let output8=multiply1(10,20,30);

console.log("function with default params");
console.log(output5,output6,output7,output8);


