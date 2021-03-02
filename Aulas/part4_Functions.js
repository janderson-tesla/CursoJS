


//Lecture: Introduction to Functions
//-----------------------------------
// LECTURE : Introduction to Functions // aula 04 
//-----------------------------------
//Functions

//Declarando Função

// const MyName ="Janderson";

// function sayHi(username, lastname){
// 	console.log("HI" + " " + MyName + " " +lastname);
// }
// // não precisa tipar os parametros com C++ string firstname , int age

// function sayBye(firstname,age){
// 	console.log("Bye" + " " + firstname + "you are" + " " +age);
// }
// //chamando função
// sayHi("Janderson","Barbosa");
// sayHi("josé","Joaquino");
// sayHi("Maria","Madalena");


// const billy = "Billy";
// const Janderson = "Janderson";
// const sally = "sally";


// sayBye(billy,20);
// sayBye(Janderson,25);
// sayBye(sally,10);

// function numberDoubler(num){
// 	 // console.log(num *2);
// 	 const doubledValue = num *2;
// 	 //return num *2
// 	 return doubledValue;
// }


// //numberDoubler(10);
// console.log(numberDoubler(10));

// const numTwoDoubled = numberDoubler(2);
// const numFiveDoubled = numberDoubler(5);
// console.log(numTwoDoubled); //4
// console.log(numFiveDoubled); //10
// console.log(numTwoDoubled + numFiveDoubled);//14

// function numberAdder(num1,num2){
// 	return num1 + num2;
// }

// console.log(numberAdder(numFiveDoubled,numTwoDoubled);//14


// const myName - "Chris";

// //25:00

// function sayHi(){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

//sayHi("Janderson");

// var sayHi = function(myName){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

// sayHi("Janderson"); // Não funcina

//29:28

// const squarednumber = function (num){
// 	return num * num;
// }

// const numberAdder = function (num1,num2){
// 	return num1 + num2
// }
// const numberAdder = function (squarer,num2){
// 	const squared = squarer(4);// função nativa 4^4
// 	return squared + num2;
// }
// console.log(numberAdder(squarednumber(4),10))//26

// //34:17

// let myNumber = 100;
// let myString = "Eu sou uma string"

// function add20(num){
// 	return num + 20
// }
// function addHello(string){
// 	return "Ola" + "" + string;
// }

// console.log(add20(myNumber));//120
// console.log(addHello(myString));


// //36:35
// const myInfo = {name: "Janderson",age:25};

// function chageAgeTo100(myObj){
// 	myObj.age = 100;
// }
// console.log(myInfo); //25
// chageAgeTo100(myInfo);
// console.log(myInfo);//100

// const myNumbers=[1,2,3,4];

// function addToArray(myArr){
// 	myArr.push(6);
// }
// console.log(myNumbers);
// addToArray(myNumbers);
// console.log(myNumbers);

// //Lecture: 

//-----------------------------------
// LECTURE :Nested Functions (Closures) aula 2
//-----------------------------------

// function squareAndMultiply(num1,num2){

// 	let testLet = "I am a test";

// 	function squarer(X){
// 		console.log(testLet); //imprime
// 		return x*x;
// 	}
// 	function multiplyBy10(y){
// 		return y *10;
// 	}
// 	return squarer(num1) * multiplyBy10(num2);//squarer(num2);
// }

// console.log(squareAndMultiply(4,4));//640
//  const first = squareAndMultiply(4,4);
//  const second = squareAndMultiply(5,5);
//  const third = squareAndMultiply(4,200);

//  console.log(second);
   
// // funcoes aninhadas ok
// function personFormatter(firstName,lastName,age){

// 	function formatNames(arg1,arg2){
// 		return arg1 + " " + arg2;
// 	}
// 	function dataFormatter(fullName,num){
// 		const formattedData = {
// 			name : fullName,
// 			age : num,
// 		}
// 		return formattedData;
// 	}
// 	const formattedName = formatNames(firstName,lastName);
// 	//return formattedName;
// 	return dataFormatter (formattedName,age);
// }
// console.log(personFormatter("Janderson","Barbosa",25));
 
// aula 04 

//Lecture: Introduction to Functions

//Functions

//Declarando Função

// const MyName ="Janderson";

// function sayHi(username, lastname){
// 	console.log("HI" + " " + MyName + " " +lastname);
// }
// // não precisa tipar os parametros com C++ string firstname , int age
// function sayBye(firstname,age){
// 	console.log("Bye" + " " + firstname + "you are" + " " +age);
// }
// //chamando função
// sayHi("Janderson","Barbosa");
// sayHi("josé","Joaquino");
// sayHi("Maria","Madalena");


// const billy = "Billy";
// const Janderson = "Janderson";
// const sally = "sally";


// sayBye(billy,20);
// sayBye(Janderson,25);
// sayBye(sally,10);

// function numberDoubler(num){
// 	 // console.log(num *2);
// 	 const doubledValue = num *2;
// 	 //return num *2
// 	 return doubledValue;
// }


// //numberDoubler(10);
// console.log(numberDoubler(10));

// const numTwoDoubled = numberDoubler(2);
// const numFiveDoubled = numberDoubler(5);
// console.log(numTwoDoubled); //4
// console.log(numFiveDoubled); //10
// console.log(numTwoDoubled + numFiveDoubled);//14

// function numberAdder(num1,num2){
// 	return num1 + num2;
// }

// console.log(numberAdder(numFiveDoubled,numTwoDoubled);//14


// const myName - "Chris";

// //25:00

// function sayHi(){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

//sayHi("Janderson");

// var sayHi = function(myName){
// 	if (!myName) {
// 		var myName ="Bob";
// 	}
// 	console.log("Hi " + MyName);
// }

// sayHi("Janderson"); // Não funcina

//29:28

// const squarednumber = function (num){
// 	return num * num;
// }

// const numberAdder = function (num1,num2){
// 	return num1 + num2
// }
// const numberAdder = function (squarer,num2){
// 	const squared = squarer(4);// função nativa 4^4
// 	return squared + num2;
// }
// console.log(numberAdder(squarednumber(4),10))//26

// //34:17

// let myNumber = 100;
// let myString = "Eu sou uma string"

// function add20(num){
// 	return num + 20
// }
// function addHello(string){
// 	return "Ola" + "" + string;
// }

// console.log(add20(myNumber));//120
// console.log(addHello(myString));


// //36:35
// const myInfo = {name: "Janderson",age:25};

// function chageAgeTo100(myObj){
// 	myObj.age = 100;
// }
// console.log(myInfo); //25
// chageAgeTo100(myInfo);
// console.log(myInfo);//100

// const myNumbers=[1,2,3,4];

// function addToArray(myArr){
// 	myArr.push(6);
// }
// console.log(myNumbers);
// addToArray(myNumbers);
// console.log(myNumbers);

// //Lecture: Nested Functions (Closures) aula 2

// function squareAndMultiply(num1,num2){

// 	let testLet = "I am a test";

// 	function squarer(X){
// 		console.log(testLet); //imprime
// 		return x*x;
// 	}
// 	function multiplyBy10(y){
// 		return y *10;
// 	}
// 	return squarer(num1) * multiplyBy10(num2);//squarer(num2);
// }

// console.log(squareAndMultiply(4,4));//640
//  const first = squareAndMultiply(4,4);
//  const second = squareAndMultiply(5,5);
//  const third = squareAndMultiply(4,200);

//  console.log(second);
   
// // funcoes aninhadas ok
// function personFormatter(firstName,lastName,age){

// 	function formatNames(arg1,arg2){
// 		return arg1 + " " + arg2;
// 	}
// 	function dataFormatter(fullName,num){
// 		const formattedData = {
// 			name : fullName,
// 			age : num,
// 		}
// 		return formattedData;
// 	}
// 	const formattedName = formatNames(firstName,lastName);
// 	//return formattedName;
// 	return dataFormatter (formattedName,age);
// }
// console.log(personFormatter("Janderson","Barbosa",25));

// funções formatnames e dataformatter fora do person funcionam no top  

// Concatenates strings to one string
// function formatNames(arg1,arg2){
// 		return arg1 + " " + arg2;
// 	}

// // Formats data into an object, with an age value
// function dataFormatter(fullName,num){
// 	const formattedData = {
// 		name : fullName,
// 		age : num,
// 		}
// 	return formattedData;
// }

// // Formats data into object by invoking other functions
// function personFormatter(firstName,lastName,age){

// 	const formattedName = formatNames(firstName,lastName);

// 	//return formattedName;
// 	//return dataFormatter (formattedName,age);
// 	const formattedData = dataformatter(formattedName,age);
// 	return formattedData;
// }
// console.log(personFormatter("Janderson","Barbosa",25));


//-----------------------------------
// LECTURE : Lecture: Advanced Functions // aula 05
//-----------------------------------

/* Arrow Functions*/

var sayHi = () =>{
	console.log("Hi, I'm using an arrow function");

}

sayHi();


const multiplier = function (num1 , num2) =>{
	return num1 * num2;
}

console.log(multiplier(5,10));

const users = [
	{name : "Chris", age:20},
	{name : "Janderson", age: 25},
	{name : "Naiara", age:24}
];
///O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

const userNameList = users.map(function(user){
 		return user.name; // retorna somente o paramentro nome
 	});
console.log(userNameList);



function mapUserNames(myArr){

//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
	const userNameList = myArr.map(function(user){
		return user.name; // retorna somente o paramentro nome
	});
	return userNameList;
}

function mapUserNames(myArr){

//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
	const userNameList = myArr.map((user) => {
		return user.name; // retorna somente o paramentro nome
	});
	return userNameList;
}

const mapUserNames = (myArr) => {

//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
	const userNameList = myArr.map((user) => {
		return user.name; // retorna somente o paramentro nome
	});
	return userNameList;
}

const mapUserNames = (myArr) => myArr.map((user) =>{

	return user.name;	
});


const mapUserNames = (myArr) => 
 myArr.map((user)=> user.name);

const mapUserNames = (myArr) => 
 myArr.map((user)=> user.age;
 

console.log(mapUserNames(users));

/*----------------------9:40--------------------------------*/

// sem chaves não se coloca return 
const multiplier2 = (x,y) => x*y;

// com chaves  coloca return 
const multiplier2 = (x,y) => { return x*y ; };

// com paratenses
const squarer = (num) => num * num ;
// sem chaves e sem paratenses
const squarer = num => num * num ;

const sayHi = () =>{
	console.log("Say hi");
}

console.log(multiplier2(2,3)); //imprime ok
sayHi();
//--------------------------------------------------------------

const numbers =[1,2,3,4,5,6,7,8,9,10];

const filteredNumbers = numbers.filter(function(num){
	return num === 5;
	return num % 2 ===0;
	return num % 2 !==0;
}); 

console.log(filteredNumbers);

const doubledNumbers = (num) =>{
	const numberContainer = [];
	num.forEach((n)=>{
		const doubled = n*2;
		numberContainer.push(doubled);
	});
	return numberContainer;
}

console.log(doubledNumbers(numbers));
