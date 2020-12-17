//-----------------------------------
// IF STATEMENT AULA 01
//-----------------------------------
// TELL THA CODE : IF THIS THING IS TRUE, RUN MORE CODE
// IF(EXPRESSION)


// IF
const shouldSayHi = true;

if (shouldSayHi== true) {
	console.log("Hi there")
}
//-----------------------------------
// LECTURE : COMPARISON OPERATORS AULA 02
//-----------------------------------

			/*Variables */
const numberFive = 5;// se for 4 dá false
const stringFive = "5";
console.log(typeof numberFive); // number

console.log(typeof stringFive); //string

console.log(numberFive === stringFive);//false
console.log(numberFive === stringFive); // true
console.log(numberFive + stringFive); // 55

const stringConversion = parseInt(stringFive);
console.log(numberFive + stringConversion);// 10

if (numberFive === stringFive) {
	console.log("Ola"); // imprime olá
}


			/*Arrays*/

const myArray =[1,2,3];
const myOtherArray = [1,2,3];

console.log(myArray === myOtherArray); // false
console.log(myArray == myOtherArray); // false

			/*Objects*/

const myObject = {name:"Janderson"};
const myOtherObject = {name : "Bob"};

console.log(myObject === myOtherObject); //false

			/*Operators*/

const bank = 123;
const item = 123;
const item2 = "123"
const tax= 0.50;

if (bank >= item) {
	console.log("You can purchase this item");

}
if (bank <= item) {
	console.log("You cannot purchase this item");
}
if (bank !== item) {
	console.log("diferente"); //false
console.log(bank != item2);//false
console.log(bank !== item2);//true

if (bank !== item + item2) {
	console.log("I am running"); // imprime
}

}
//-----------------------------------
// Lecture: Nested If Statements AULA 03
//-----------------------------------

