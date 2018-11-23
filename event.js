//console.log("check that");
const EventEmitter = require('events');
const emitter = new EventEmitter();

//register an event
emitter.on('messageDisplayed',function(arg){
console.log("List of arguments",arg);
});


//raise an event
emitter.emit('messageDisplayed',{id:'123',mark :'bmw'});
