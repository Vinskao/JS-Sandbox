//function declaration
function greet(firstname = 'm',lastname = 'kao'){
    // if(typeof firstname === 'undefined'){firstname= 'mk'}
    // console.log('Hello');
    return 'hello '+ firstname + ' ' + lastname;
}

// console.log(greet('mkao'));

const square = function (x = 3 ){
    return x*x;
};

// console.log(square());

//immediately invoable function expressions - IIFES
// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('hello '+  name );
// })('brad');

//property methods

const todo = {
    add: function (){
        console.log('add todo..');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();
