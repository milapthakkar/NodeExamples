const EventEmitter = require("events")
// const emitter = new EventEmitter()

class Logger extends EventEmitter {
    log(message) {
        //console.log(message);
        this.emit("logevent",message);
    }
}

module.exports = Logger;