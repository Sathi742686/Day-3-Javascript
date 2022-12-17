// // 1.Comparison operators
// // ==
// console.log(9 == 9);
// console.log(9 == 8);
// console.log(9 == "9");

// //===
// console.log(9 === "9");
// console.log("9" === "9");

// // !=
// console.log(9 != 9);
// console.log(9 != 8);

// // !==
// console.log(9 !== 9);
// console.log(9 !== "9");

// // >
// console.log(9 > 7);
// console.log(7 > 9);

// // <
// console.log(10 < 9);
// console.log(9 < 10);

// // >=
// console.log(9 >= 9);
// console.log(9 >= 10);
// console.log(9 >= 8);

// //<=
// console.log(8 <= 8);
// console.log(8 <= 7);
// console.log(6 <= 8);

// 2. Logical Operator
// &&
// ||
// !
// Data && Data;
// let x = 6;
// let y = 5;
// console.log(x < 9);
// console.log(y > 3);
// console.log(x < 9 && y > 3);

// console.log(x < 9);
// console.log(y > 7);
// console.log(x < 9 && y > 7);

// // ||
// console.log(x < 9 || y > 7);
// console.log(x < 4 || y > 7);

// // !
// console.log(x == y);
// console.log(!(x == y));

// 3. Operator Precedence
// B O D M A S

console.log((36 / 6) * 3 + 2 ** 2 - (3 + 5));
6 * 3 + 2 ** 2 - 8;
6 * 3 + 4 - 8;
18 + 4 - 8;
22 - 8;
18;

// 4. template literals
const firstName = "Farzana";
const lastName = "Ahmmed";
let age = 21;
let job = "Web Developer";
const country = "Bangladesh !";

//I'm Farzana Ahmmed, 21 years old Web Developer !
console.log("I'm Farzana Ahmmed, 21 years old Web Developer !");
console.log(`I'm ${firstName} ${lastName}, ${age} years old ${job} !`);
console.log(`I love ${country} !`);

console.log(`First line
Second line
third line`);

console.log(`Bangladesh win ${2 + 1} series`);

// 5. if / else statements
// if(){

//} else {

//}

if (10 < 15) {
  console.log("Display 10");
} else {
  console.log("Something else");
}

if (10 < 9) {
  console.log("Display 10");
} else {
  console.log("Something else");
}

let adritaAge = 5;
if (adritaAge >= 5) {
  console.log("adrita can start school");
} else {
  console.log("adrita can't start school");
}

adritaAge = 4;
if (adritaAge >= 5) {
  console.log("adrita can start school");
} else {
  console.log("adrita can't start school");
}
