// TASK #24 (More Conditional Tests:)
// equallity with strings ..
console.log("Testing equality with strings.");
console.log("apple"=="apple"); //true
// Using lower case function ..
console.log("Testing with lower case.");
console.log("Crypto".toLowerCase()=="crypto"); //true
// numerical tests ..
console.log("Numerical tests.");
console.log(6 > 9); //false
console.log(6 < 9); //true
// testing using "and" & "or" operators..
console.log("Tests with 'and' & 'or'.");
console.log(true && false); //false
console.log(true||false); //true
// test whether an item is in an array ..
let guests = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
console.log("Is 'Ayan' in guests array?");
console.log(guests.includes("Ayan")); //true
// test whether an item is not in an array ..
console.log("Is 'Hamza' is not in guests array?");
console.log(!guests.includes("Hamza")); //true