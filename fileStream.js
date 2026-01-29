// const stream=require("stream");
const {Readable}=require("stream");

const inStream=new Readable({
    read() {}
});
inStream.push("welcome to file_stream class\n");
inStream.push("Data are there in the form of chunk");
inStream.push(null);
inStream.pipe(process.stdout);

