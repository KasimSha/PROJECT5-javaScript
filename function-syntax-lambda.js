function multiply1(n1,n2){
    return n1*n2;
}

let multiply2=function(n1,n2){
    return n1*n2;
}

//lambda

let multiply3=(n1,n2) =>{
    return n1*n2;
}

let multiply4=(n1,n2) => n1*n2;


let output1=multiply1(10,20);
let output2=multiply2(10,20);
let output3=multiply3(10,20);
let output4=multiply4(10,20);

console.log(output1 ,output2,output3,output4);
