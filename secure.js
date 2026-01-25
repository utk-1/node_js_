//flag and mode
const fs=require("fs");
fs.writeFile(
    "secure.txt",
    "Private Data",
    {flag:"w",mode:0o600},
    ()=>console.log("Secure file created")
);


