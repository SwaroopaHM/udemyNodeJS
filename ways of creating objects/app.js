//One way
class Person {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    greet() {
        console.log('Hello ' + this.firstName + ' ' + this.secondName);
    }
}

var john = new Person('John', 'Doe');
var jane = new Person('jane', 'Doe');

jane.greet();


//Another way
function Person1(firstName, secondName) {
    this.firstName= firstName;
    this.secondName=secondName;
}

Person1.prototype.greet= function(){
    console.log('Hello ' + this.firstName + ' ' + this.secondName);
}

var john = new Person1('John', 'Doe');
var jane = new Person1('jane', 'Doe');

jane.greet();



