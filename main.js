// Variables
//

// Globals
const console = this.console;
const dev = true; // Set to false for less verbose console logs

// Selectors
const container = document.querySelector('.container'); // main container for dev testing
const buttons = document.querySelectorAll('.btn'); // almost always want .btn

// Main instance
const main = {
  init: function() {
    console.log('ran init...');
  },
  runFunction: function(f = function() {}, label) {
    dev ? main.runFunctionDev(f, label) : f();
  },
  runFunctionDev: function(f = function() {}, label) {
    console.log('//** \n\r//  ' + label + ' executed at...');
    console.log(
      '//  ' +
        new Date().toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          millisecond: '2-digit'
        })
    );
    console.time('Duration');
    f();
    console.timeEnd('Duration');
    console.log('//  ' + label + ' completed.\n\r//**');
  },
  runEvent: function(e) {
    dev ? main.runEventDev(e) : main.runEvent_(e);
  },
  runEvent_: function(e) {
    e.preventDefault();
  },
  runEventDev: function(e) {
    console.log(`${e.type} EVENT | x:${e.offsetX} y:${e.offsetY}`);
    e.target ? console.log(`Target: ${e.target}`) : console.log('No Target...');
    e.preventDefault();
  }
};

// Events
//

// Ready
document.addEventListener('ready', main.runFunction(main.init, 'main.init()'));

// Dev
if (dev) {
  container.addEventListener('click', main.runEvent);
}

// Button Events
buttons.forEach(function(button, index, array) {
  button.addEventListener('click', main.runEvent);
});
