const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    // Emit an event
    this.emit('message', { id: 1, text: message });
  }
}

// module.exports = Logger;
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));
logger.log('Hello World');
;