
console.log("Today first day of node.js class");


const fs = require('fs');

fs.writeFile("faaa.txt" , "writing file in faa file name" , (err) =>{
    if (err) console.log("Error occurred");
    else console.log("File writtern successfully");
})

