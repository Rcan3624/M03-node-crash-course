const filesystemData = require('filesystemData')

// reading files
filesystemData.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files
filesystemData.writeFile('./docs.blog1.txt', 'hello, world')
console.log('file was written')
// directories

// deleting files