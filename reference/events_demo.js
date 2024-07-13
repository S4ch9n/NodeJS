const EventEmitter = require('events')

//create class
class MyEmitter extends EventEmitter { }

//init object 
const myEmitter = new MyEmitter()

//Event listener
myEmitter.on('event' , ()=> console.log('event fired'))

//init Event                 
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

