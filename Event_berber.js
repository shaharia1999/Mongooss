const events=require('events');
const eventemiter=new events.EventEmitter();

// create an event hendeler

const chitkerDibo=()=>{
    console.log('haw kaw !!!!!!!');
}
// assing the handler init an event
eventemiter.on('scream',chitkerDibo).chitkerDibo
eventemiter.emit('scream');