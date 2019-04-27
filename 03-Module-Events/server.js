//const EventEmitter = require("events")
//const emitter = new EventEmitter()

const Logger = require("./logger")
var logger = new Logger();

//logger("Message display in console.");

//Register Event Listener
logger.on("logevent",(res)=>{    
    console.log(res);
});

logger.log({title:"title 2",content:"Content 2"});

//Raise Event
// emitter.emit("logevent",{title:"title 2",content:"Content 2"});

