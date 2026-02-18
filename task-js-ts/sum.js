let a = 10, b = 5;
console.log("Sum =", a + b);


// let a = 10, b = 5;
console.log("Difference =", a - b);


function multiply(x, y) {
  return x * y;
}
console.log(multiply(4, 5));


let x = 10, y = 0;
if (y === 0) console.log("Cannot divide by zero");
else console.log(x / y);


let n = 4;
console.log("Square =", n * n);
console.log("Cube =", n * n * n);


let l = 10, w = 5;
console.log("Area =", l * w);


let r = 7;
console.log("Area =", Math.PI * r * r);


let c = 30;
console.log((c * 9/5) + 32);


let P = 1000, R = 5, T = 2;
console.log((P * R * T) / 100);


let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");

 
let n1 = -5;
if (n1 > 0) console.log("Positive");
else if (n1 < 0) console.log("Negative");
else console.log("Zero");


// let a = 10, b = 5;
console.log(a > b ? a : b);


let a1 = 10, b1 = 20, c1 = 15;
console.log(Math.max(a1, b1, c1));


let age = 18;
console.log(age >= 18 ? "Eligible" : "Not Eligible");


let marks = 82;
if (marks >= 90) console.log("A");
else if (marks >= 75) console.log("B");
else if (marks >= 50) console.log("C");
else console.log("Fail");


let year = 2024;
console.log(year % 4 === 0 ? "Leap Year" : "Not Leap Year");


let d = 55;
console.log(d % 5 === 0 && d % 11 === 0);


let op = "+", p = 10, q = 5;
switch (op) {
  case "+": console.log(p + q); break;
  case "-": console.log(p - q); break;
  case "*": console.log(p * q); break;
  case "/": console.log(p / q); break;
}


let weight = 70, height = 1.7;
let bmi = weight / (height * height);
console.log(bmi);


let units = 250, bill = 0;
if (units <= 100) bill = units * 5;
else if (units <= 200) bill = 100 * 5 + (units - 100) * 7;
else bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
console.log("Bill =", bill);



