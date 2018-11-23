const EventEmitter = require("events");


class Logger extends EventEmitter {
    log(message){
        console.log(message);    
        this.emit("MessageDisplayed",{id:123 , brand :"Mercees"});
    }
}
module.exports = Logger;