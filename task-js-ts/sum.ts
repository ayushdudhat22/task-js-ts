let a: number = 10, b: number = 5;
console.log("Sum =", a + b);


//let a: number = 10, b: number = 5;
console.log("Difference =", a - b);


function multiply(x: number, y: number): number {
  return x * y;
}
console.log(multiply(4, 5));


let x: number = 10, y: number = 0;
if (y === 0) console.log("Cannot divide by zero");
else console.log(x / y);


let n: number = 4;
console.log("Square =", n * n);
console.log("Cube =", n * n * n);


let l: number = 10, w: number = 5;
console.log("Area =", l * w);


let r: number = 7;
console.log("Area =", Math.PI * r * r);


let c: number = 30;
console.log((c * 9/5) + 32);


let P: number = 1000, R: number = 5, T: number = 2;
console.log((P * R * T) / 100);


let num: number = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");


let n1: number = -5;
if (n1 > 0) console.log("Positive");
else if (n1 < 0) console.log("Negative");
else console.log("Zero");


//let a: number = 10, b: number = 5;
console.log(a > b ? a : b);


let a1: number = 10, b1: number = 20, c1: number = 15;
console.log(Math.max(a1, b1, c1));


let age: number = 18;
console.log(age >= 18 ? "Eligible" : "Not Eligible");


let marks: number = 82;
if (marks >= 90) console.log("A");
else if (marks >= 75) console.log("B");
else if (marks >= 50) console.log("C");
else console.log("Fail");


let year: number = 2024;
console.log(year % 4 === 0 ? "Leap Year" : "Not Leap Year");


let d: number = 55;
console.log(d % 5 === 0 && d % 11 === 0);


let op: string = "+", p: number = 10, q: number = 5;
switch (op) {
  case "+": console.log(p + q); break;
  case "-": console.log(p - q); break;
  case "*": console.log(p * q); break;
  case "/": console.log(p / q); break;
}


let weight: number = 70, height: number = 1.7;
let bmi: number = weight / (height * height);
console.log(bmi);


let units: number = 250, bill: number = 0;
if (units <= 100) bill = units * 5;
else if (units <= 200) bill = 100 * 5 + (units - 100) * 7;
else bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
console.log("Bill =", bill);

