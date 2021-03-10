// const log = require('./logger');
// const fiu = require('./fileutil')

// console.log(log);
// log('Um teste')

// console.log(fiu.)

// const fs = require('fs')

// const files = fs.readdirSync('./')
// console.log(files)

const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.addListener("messageLogged", (arg) => {
    console.log('Evento emitido', arg)
})

emitter.emit('messageLogged', {id: 12345, url: 'http://mylabs.org'})