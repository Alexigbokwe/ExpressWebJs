const EventEmitter = require("events");
const emitter = new EventEmitter();

class emitEvent {
  constructor() {
    return emitter;
  }
}

module.exports = new emitEvent();
