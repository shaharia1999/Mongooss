const fs=require('fs');

const readstrim=fs.createReadStream('./strim.txt');
readstrim.on('data',(chunk)=>{
    console.log('....................');
    console.log(chunk);
})
readstrim.on('open',()=>{
    console.log('strim is open');
})
setTimeout(()=>{
    readstrim.pause('pause')
    console.log('strimig pause now');
},10)
setTimeout(()=>{
    readstrim.resume('pause')
    console.log('strimig is resume');
},8000)
