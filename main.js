// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// day6

// operater conatin assignment, logical, arthemtic, comparison, compound assignment, string

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// arthemtic  operater contain /   +   -   %   **
const x =5;
const y =10;

console.log("addition: ", x + y);
console.log("subtraction: ", x - y);
console.log("division: ", x / y);
console.log("multiplication: ", x * y);
console.log("division remainder: ", x % y);
console.log("exponent: ", x ** y);

let n1=10;
let n2=10;
// add by 1
console.log(n1);
console.log(n1++);
console.log(n1);
// immedietly add 1 without using print again after
console.log(++n1);
// subtract by 1
console.log(n2--);
console.log(n2);
// subtract by 1 immedietly without using print again after
console.log(--n2);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// compound assignment operater

let c=10;
c+=2;
console.log(c);

c-=2;
console.log(c);

c*=2;
console.log(c);

c/=2;
console.log(c);

c**=2;
console.log(c);

c%=2;
console.log(c);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// string operater
let greeting= "hi";
console.log(greeting + " " + "alice");
let sentence= "happy new year";
let newsentence= sentence + 2024;
console.log(newsentence);


let sentences= "Happy New ";
sentences += "Year";
console.log(sentences);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// comparison operators


console.log(10 === "5"); // مقارنة القيمة و النوع  

console.log(10 == 10); // مقارنة القيمة فقط

console.log(0 == false);

console.log(undefined == false);

console.log(NaN == NaN);

console.log(10 > 100);

console.log(100 > 10);

console.log(10 == 10n);


// !=   !==
console.log(10 !== "5"); // مقارنة القيمة و النوع  

console.log(10 != 10); // مقارنة القيمة فقط

console.log(0 != false);

console.log(undefined !== false);

console.log(10 != 10n);

// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// comparison operaters

// AND  &&
// boolean values
console.log(true && true); // ->  true 
console.log(false && true); // ->  false 
console.log(false && false); // ->  false



// and &&  = false
// boolean and nonboolean values
console.log(true && 1991); // -> 1991

console.log(false && 1991); // -> false

console.log(2 && 5); // -> 5 both numbers are true so it neglect the first and take the second

console.log(0 && 5); // -> 0 is considered false 

console.log(1 && 2); // -> 2 both numbers are true so it neglect the first and take the second

console.log("farah" && "nouf");  // -> nouf   both numbers are true so it neglect the first and take the second

console.log("" &&  "nouf" ); // ->   empty string  



// OR || 

// boolean values
console.log(true || true); // ->  true 
console.log(false || true); // ->  true 
console.log(false || false); // ->  false


// or || = true
// boolean and nonboolean values
console.log(true || 1991); // ->  true

console.log(false || 1991); // ->  1991

console.log( 1 || 2); // -> 1 is true so it will take it immedietly

console.log("farah" || "nouf"); // -> farah is true so it will take it immedietly

console.log("" ||  "nouf" ); // ->   empty string is false so it will neglect it and take the second


// end
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>













