// Your calculator is going to contain functions for all of the basic math operators you typically find on 
// calculators, so start by creating functions for the following items and testing them in your browser’s
//  console:
// add
// subtract
// multiply
// divide
// A calculator operation will consist of a number, an operator, and another number. 
// For example, 3 + 5. Create three variables, one for each part of the operation. 
// You’ll use these variables to update your display later.



function addition(num1,num2) {
    const a = parseInt(num1);
    const b = parseInt(num2);
    console.log(a+b);
    // return a+b;
    // return result;
}


function subtract(num1,num2) {
    const a = parseInt(num1);
    const b = parseInt(num2);
    console.log(a-b);
}


function multiply(num1,num2) {
     const a = parseInt(num1);
    const b = parseInt(num2);
    console.log(a*b);
}


function divide(num1,num2) {
    const a = parseInt(num1);
    const b = parseInt(num2);
    console.log(a/b);
}

// const num1 = window.prompt("Enter number a: ");
// const operator = window.prompt("Enter Operation = ");
// const num2 = window.prompt("Enter number b: ");

// addition(num1,num2);

// console.log(  addition(num1,num2));

// console.log(subtract(num1,num2));

// console.log(multiply(num1,num2));

// console.log(divide(num1,num2));


// function operate(operator, num1, num2) {

//     if (operator === "+") {

//         return addition(num1, num2);
        
//     } else if (operator === "-") {

//         return subtract(num1,num2);

//     }else if (operator === "x") {

//         return multiply(num1, num2);

//     } else if (operator === "/") {

//         return divide(num1, num2);
//     }
    
// }

// operate(operator,num1,num2);

