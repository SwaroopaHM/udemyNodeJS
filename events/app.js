
var events = require('./config').events
// below require is for our custom emitter.js file we wrote.
// var Emitter = require('./emitter');

//below requier is for using the nodejs events folder(Emitters)
var Emitter = require('events')

var emtr = new Emitter();

emtr.on(events.GREET, function(){
    console.log('First hello')
});

emtr.on(events.GREET, function(){
    console.log('Seconde hello')
});


console.log('Hello')
emtr.emit('greet');