
// //Function statement
// function greet() {
//     console.log('hi')
// }
// greet();

// //Functions are first-class
// function greeting(fn) {
//     fn()
// }
// greeting(greet);

// //Function expression
// var greetMe = function () {
//     console.log('hi toni')
// }

// greetMe()

// //It's first class
// greeting(greetMe)

// //use function on a fly
// logGreeting(function () {
//     console.log('first-class on fly')
// })




//Constructors
// function Person(firstName, secondName){
//  this.firstName = firstName;
//  this.secondName = secondName;
// }

// var john = new Person('John', 'Doe');
// var jane = new Person('Jane', 'Doe');

// Person.prototype.greet = function() {
//     console.log('Hello' + this.firstName + this.secondName)
// }

// john.greet()
// jane.greet()

// console.log(john.__proto__)
// console.log(jane.__proto__)





// Pass by value and pass by reference
// Pass by value 
function change(b){
    b=2;
}

var a=1;
change(a)
console.log(a)    //'a' value remains to be 1

//Pass by reference
function changeObj(d) {
    d.prop1= function(){}
    d.prop2={}
}
var c={}
c.prop1 ={};
changeObj(c);
console.log(c);   //prop1 is changed

