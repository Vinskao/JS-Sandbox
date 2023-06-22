// // //log to console
// // console.log("Hello World!");
// // console.log(123);
// // console.log(true);
// // var greetings = "Hello World!";
// // console.log(greetings);
// // console.log([1,2,3,4]);
// // console.log({a:1,b:2,c:3});
// // console.table({a:1,b:2});

// // console.error('error');
// // console.clear();

// // console.warn('warning');
// // console.time('hello');
// //   console.log('hello');
// //   console.log('hello');
// //   console.log('hello');
// //   console.log('hello');
// //   console.log('hello');
// // console.timeEnd('hello');

// // //var,let,const
// // var name = 'John';
// // console.log(name);
// // name = 'Jane';

// // console.log(name);
// // //init var
// // var greeting;
// // console.log(greeting);
// // greeting = 'Hello';
// // console.log(greeting); 
// // //letters, numbers, _, $
// // //can not start with number
// // // multi word vars
// // var firstname = 'John';// camel case
// // var firstname = 'Jane';// underscore
// // var firstname = 'Tom';// pascal case


// //let
// //let name = 'John'
// //console.log(name);
// //name = 'Jane';
// //console.log(name);

// //const
// // const name = 'John';
// // console.log(name);

// // const person = {
// //   name: 'John',
// //     age: 20 
// // }

// // person.name = 'Jane';
// person.age = 30;

// // // console.log(person);

// // const numbers = [1,2,3,4,5,6,7,8,9,]
// // numbers.push(10);

// // console.log(numbers);

// // primitive
// // //string
// // const name = 'John';
// // //number
// // const age = 20;
// // //boolean
// // const haskids=true;
// //null
// // const car = null;
// // //undefined
// // let test;
// // //symbol
// // const sym = symbol();
// // console.log(typeof haskids);

// //refence types - objects
// //array
// const hobbies = [ 'coding', 'music' ]
// //object literal
// const address = {
//   city: 'New York',
//   state: 'NY'
// }
// let val

// //number to string

// //toString()
// val = (5).toString();
// val = (true).toString();
// val = String(new Date());
// //output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// name = 'fuck taipei'
// var = name + ' ' + age;

//string to number
// val = Number('5')
// val = Number(true);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3, 4];

//val = parseInt('5');
//val = parseFloat('5');

//const val1 = String(5);
//const val2 = 5.5;
//const sum = Ｎumber(val1 + val2);

// const num1 = 5;
// const num2 = 5.5;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// //math object
// val = Math.pi;
// val = Math.e;
// val = Math.round(2.4);
// val = Math.floor(2.4);
// val = Math.ceil(2.4);
// val = Math.sqrt(2.4);
// val = Math.abs(2.4);
// val = Math.pow(2.4, 3);
// val = Math.max(2.4, 3.4);
// val = Math.min(2.4, 3.4);
// val = Math.random(); //will gives random number

// console.log(val);

// const firstname = 'John'; 
// const lastname = 'Doe';
// const str = 'hey you'
// const tags = 'maybe you should'

// let val;

// val = firstname + lastname;


// console.log(val);

// //concatenate
// val = firstname + ' ' + lastname
// //append
// val = 'max ';
// val += 'kao';

// val = 'hello, my name is ' + firstname

// //escaping
// val = "that\'s awesome";

// //length
// val = firstname.length;
// val = lastname.length;

// //concat
// val = firstname.concat(' ', lastname);

// //change case
// val = firstname.toUpperCase();
// val = lastname.toLowerCase();
// val = firstname[2]
// //indexof()
// val = firstname.indexOf('1');
// val = firstname.lastIndexOf('1');

// //charat()
// val = firstname.charAt(2);
// val = firstname.charCodeAt(2);
// val = firstname.charCodeAt(3);
// val = firstname.charCodeAt(4);
// val = firstname.charCodeAt(5);
// val = firstname.charCodeAt(6);

// //get last char
// val = firstname.charAt(firstname.length -1);
// //substring()
// val = firstname.substring(0, 4);
// //slice()
// val = firstname.slice(0, 4);
// //split()
// val = str.split()
// val = tags.split(',')
// console.log(val);

// //replace()
// val = str.replace('1', '2');

// //includes()
// val = str.includes('1');
// val = str.includes('2');
// val = str.includes('3');
// val = str.includes('4');
// val = str.includes('5');
// val = str.includes('6');

// console.log(val);

const name = 'john';
const age = 20;
const job = 'teacher';
const city = 'New York';
let html;
//without template strings(es5)
html = '<ul><li>Name:'+ name + '</li><li>Age:'+ age + '</li><li>Job:'+ job + '</li><li>City:'+ city + '</li></ul>';
html = '<ul>' +
        '<li>Name:'+ name + '</li>' +
        '<li>Age:'+ age + '</li>' +
        '<li>Job:'+ job + '</li>' +
        '<li>City:'+ city + '</li>'+
        '</ul>';

//with template strings(es6)
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${age>30}</li>
</ul>
`;
document.body.innerHTML = html;

//create some arrays
const numbers = [1,2,3,4,5,6,7,8,9];
const numbers2 = new Array(1,2,3,4,5,33);
const fruits = ['apple', 'banana', 'cherry'];
const mixed = [2, 'fuck', true];

let val;
//get array length
//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
val = numbers[2];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(100);

//mutating array
//add on to end
numbers.push(100);
//add on to front
numbers.unshift(100);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values
numbers.splice(1,1);
//reverse
numbers.reverse();
//concatenate array
val = numbers.concat(numbers2);

//sorting array
val = fruits.sort();
val = numbers.sort();
//use compare function
// val = numbers.sort(function(a,b){
//     return a-b;
// });

// val = numbers.sort(function(a,b){
//     return b-a;
// });

//find
function under50(num){
    return num < 50;
}

console.log(numbers);
console.log(val);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    email: 'envkt@example.com',
    hobbies: ['coding', 'music'],
    address: {
        city: 'New York',
        state: 'NY'
    },
    getBirthYear : function(){
        return 1994 - this.age;
    }

}

let val;

val = person;
//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();


console.log(val);

const people = [
    {name:'John', age: 30},
    {name:'Max', age:66},
    {name:'Moo', age:565},

];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}


