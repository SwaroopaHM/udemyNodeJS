var fs = require('fs');

//Sychronous file read
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');


//Asychronous file read
var greet2= fs.readFile(__dirname+'/greet.txt', 'utf8', function(err, data) {
    console.log(data)
} )

var readable = fs.createReadStream(__dirname+'/greetBig.txt', {encoding:'utf8', highWaterMark: 32*1024})

var writable = fs.createWriteStream(__dirname+'/greetBigCopy.txt')

//One way of copying from greetBig to greetBigCopy
readable.on('data', function(chunk){
    console.log(chunk)
    writable.write(chunk)
})

//Another and efficent way of copying from greetBig to greetBigCopy2(efficient way)
readable.pipe(writable);


