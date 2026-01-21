const fs = require("fs");

// fs.readFile("read.txt", { flag: "r", encoding: "utf8" }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//lab 2
fs.writeFile("write.txt","Hellow World",{flag:"w"},()=>{
    console.log("File written");
});

//lab 3
//Append data using a flag
fs.writeFile("log.txt","Long Entry\n",{flag:"a"},()=>{
    console.log("Log appended");
});

