const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout
const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit('TAXATION_EVENT');
});


myEmitter.on('TAXATION_EVENT', () => {
  console.log('Taxation has occurred.');
});

myEmitter.on('TAXATION_EVENT', () => {
  console.log('Politically connected cronies get even fatter.');
});

myEmitter.on('TAXATION_EVENT', () => {
  console.log('Large percentage of the money never leaves the beltway.');
});

myEmitter.on('TAXATION_EVENT', () => {
  console.log('The Fed debases currency to cover the shortfall.');
});
