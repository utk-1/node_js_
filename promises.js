const fs = require("fs").promises;

async function readFileExample() {
  try {
    const data = await fs.readFile('myfile.txt', 'utf8');
    console.log('File contents:', data);
    }catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileExample();

//or with until.promisify(Node.js 8.0.0.+)

const{promisify}=require('util');
const  readFileAsync=promisify(require('fs').readFile);
async function readWithPromisify(){
    try{
        const data=await readFileAsync('myfile.txt','utf8');
        console.log(data);
    }catch(err){
        console.error(err);
    }
}
readWithPromisify();


