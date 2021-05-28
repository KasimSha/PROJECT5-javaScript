let list1=["kasim","Roshan","keyan"];

//adding new element to list::end

list1.push("siraj");


console.log(list1);


//add element at the begining

list1.unshift("Ameer");

console.log(list1);


//add element in between 

list1.splice(3,0,"karim");
console.log(list1);



//remove element form the list::at end

list1.pop();

console.log(list1);

//remove element from begining

list1.shift();

console.log(list1);

//remove element in between

list1.splice(2,1);

console.log(list1);