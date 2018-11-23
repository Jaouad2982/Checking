const  EventEmitter = require('events');
const Logger = require("./logger");
const lo = new Logger();
lo.on('MessageDisplayed',(arg)=>{
console.log("List of args :" , arg);
})
lo.log("Salutations");