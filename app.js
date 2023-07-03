const id = 100;

if(id == 101){
    console.log("correct");
} else {
    console.log("wrong");
} 

//!means not equal to
if(id !=101){
    console.log("correct");
} else {
    console.log("wrong");
} 

if(id === 100){
    console.log("correct");
} else {
    console.log("wrong");
} 

if(id !== 100){
    console.log("correct");
} else {
    console.log("wrong");
} 

if(typeof id !== 'undefined') {
    console.log(`the id is ${id}`);
} else {
    console.log("no id");
}


//greater or less than
if(id >= 100){
    console.log("correct");
} else {
    console.log("wrong");
} 

//if else
const color = 'yellow';
if(color === 'yellow'){
    console.log("color is yellow");
} else if (color === 'blue'){
    console.log("color is blue");
} 
//logical operators
const name = 'kao';
const age = 17;
//and &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age < 19){
    console.log(`${name} is a teen`);
} else {
    console.log(`${name} is an adult`);
}

//or|| just one is true
if (age < 16 || age> 65){
    console.log(`${name} can not run in race`);
}else {
    console.log(`${name} can run in a race`);
}


//ternary operator 
console.log(id === 100 ? 'correct' : 'wrong');