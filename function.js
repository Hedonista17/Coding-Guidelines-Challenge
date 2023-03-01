
// bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
});


//good

let arrayOfNumbers= [1,2,3]
arrayOfNumbers.map(function(number){
    const suma =number + 1;
   console.log(number * suma) // o return(number*suma) -- el console log solo por probarlo en terminal aqui
})


// bad
//[1, 2, 3].map((number) => {
   // const nextNumber = number + 1;
 //`A string containing the ${nextNumber}.`;
//});

//good

let array =[1, 2, 3];
 array.map((number) => {
    const nextNumber = number + 1;
    console.log(`A string containing the ${nextNumber}.`) ; // o return -- el console log solo por probarlo en terminal aqui 
});
   
//bad
x = 5;
y = 3;
function sum(){
    return a + b;
}

//good

let firstNumber = 5;
let secondNumber = 3;
function sum(a,b){
    return a + b;
}
 
console.log(sum(firstNumber,secondNumber));
