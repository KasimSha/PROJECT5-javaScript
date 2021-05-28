let lambda1=()=>{}

let lambda2=()=>("Hello Kasimsha");


let lambda3=(n1,n2)=>{
    return n1*n2;
}

let lambda4=(n1,n2)=>(n1*n2);

let out1=lambda1(10,30);
let out2=lambda2(10,30);
let out3=lambda3(10,30);
let out4=lambda4(10,30);


console.log(out1,out2,out3,out4);