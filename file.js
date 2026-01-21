let fs=require('fs');
fs.writeFile("asyncFile.txt","Welcome to file system module",(err)=>{
    if(err){
        console.log("Error creating file");
    }else{
        console.log("Async file created");
    }
});

fs.writeFileSync("syncFile.txt","Welcomme tro file system module sync file");
console.log("Sync file created");

//read a file(Async)
fs.readFile("asyncFile.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error reading file");
    }else{
        console.log("Async File Data",data);
    }
})
//(Sync)
const data=fs.readFileSync("syncFile.txt","utf8");
console.log("Syn File data",data);

//append data Async
fs.appendFile("asyncFile.txt"," /nNew data added",(err)=>{
    if(err){
        console.log("Error appending");
    }else{
        console.log("Async data appended");
    }
});

//sync appended
fs.appendFileSync("syncFile.txt"," /nNew data added");
console.log("Sync data appended");

// Async rename
fs.rename("asyncFile.txt", "asyncRenamed.txt", (err) => {
  if (err) {
    console.log("Rename failed");
  } else {
    console.log("Async file renamed");
  }
});
// Sync rename
fs.renameSync("syncFile.txt", "syncRenamed.txt");
console.log("Sync file renamed");
