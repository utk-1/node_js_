const fs = require("fs"); // normal fs
const fsp = require("fs").promises; // promise-based fs
const { promisify } = require("util");

const Utkarsh = promisify(fs.readFile);

// Callback style
fs.writeFile("cb.txt", "this is simple call_back file data", (error) => {
    if (error) {
        console.log("file is loading error", error);
    } else {
        console.log("File is created with simple call_back");
    }
});

// Async/await with promises
async function readFileWithPromises() {
    try {
        let data = await fsp.readFile("cb.txt", "utf-8");
        console.log("async file data:", data);
    } catch (error) {
        console.log("Error is loading async file:", error);
    }
}
readFileWithPromises();

async function readWithPromisify() {
    try {
        let fileData = await Utkarsh("cb.txt", "utf-8");
        console.log("Reading the filedata with custom:", fileData);
    } catch (error) {
        console.log(error);
    }
}
readWithPromisify();

fs.open("cb.txt", "r", (err, fd) => {
    if (err) {
        console.error("Error opening file:", err);
        return;
    }
    console.log("File opened successfully, descriptor:", fd);
});