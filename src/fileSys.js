const fs = require("fs");

// //Sync
// fs.writeFileSync("./text.txt","Hello Hari Hari")

// // Async
// fs.writeFile("./text.txt","Hello Eons Async" , (err) => {});

// const result =fs.readFile("./contect.txt","utf-8", (err,result) => {
//     if (err) {
//         console.log("Error",err);
//     } else {
//         console.log(result);
//     }
// });
// console.log(result);

// fs.appendFileSync("./text.txt",`Hey Hari\n`);

// fs.appendFileSync("./text.txt",`${Date.now()}Hey Eons\n`);

// fs.cpSync("./text.txt","./copy.txt")

// fs.unlinkSync("./copy.txt")
// console.log(fs.statSync("./text.txt").isFile())

// fs.mkdirSync("my-docss/a/b",{ recursive:true })

// fs.mkdir("./src/asstets/Data",{recursive:true}, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("Create Folder");

// })

// fs.writeFile("./src/asstets/Data/Data.txt","Hello Eons", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log("Create File");
// });

// fs.appendFile("./src/asstets/Data/Data.txt","I am IIT Developer\n" ,(err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Update");
// })


// fs.readFile("./src/asstets/Data/Data.txt","utf-8",(err,Data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(Data);
// })

// fs.rename("./src/asstets/Data/Data.txt","./src/asstets/Data/Data1.txt",(err) => {

//     if (err) {
//         console.log(err);
//     }
//     console.log("Rename");
// })

// fs.unlink("./src/asstets/Data/Data1.txt",(err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("Delete");
// })

// fs.stat("./src/asstets/Data/Data1.txt", (err,stat) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(stat);
// })