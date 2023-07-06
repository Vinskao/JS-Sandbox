//for loop
// for (let i = 0; i < 10 ; i++) {
//     // console.log('number' + i);
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }
    
//     console.log('number' + i);
// }

// if(i === 5){
//     console.log('stop the loop');
//     Break;
// }
//i++ ＞　i = i+1

//Do while
// let i=0;
// do{
//     console.log('number '+i);
//     i++;
// }

// while(i <10);

//loop through array
const cars = ['ford', 'chevy','honda']

// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }

//map
// const users =[
//     {id:1,name: 'John'},
//     {id:2,name: 'Sarah'},
//     {id:3,name: 'Karen'},
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

//foreach
cars.forEach (function(car, index, array){
    console.log(`${index} - ${cars}`);
});
//for in loop
const user = {
    firstname: 'John',
    lastname: 'Doe',
    age: 36
}
for ( let x in user){
    console.log(`${x} :  ${user[x]}`);
}

