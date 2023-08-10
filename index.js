console.log("hello world")
              // synchronous code
const fs = require('fs');
const http = require('http');
const url = require('url');
const EventEmitter = require('events');


// const text =  fs.readFileSync("./input.txt", "utf-8");
// console.log(text)

// const textWrite = `this what we know about javascript`;
// fs.writeFileSync("./input.txt", textWrite);
// console.log(textWrite);

                    // asynchronous code
// fs.readFile("./input.txt", "utf-8", (err, data1) => {
//     if(err) return console.log("error found")
// fs.readFile(`${data1}.txt`, "utf-8", (err, data2)=>{
//     console.log(data2);
// fs.readFile(`${data2}`,'utf-8', (err, data3)=>{
//     console.log(data3);
// fs.writeFile('./input.txt',`${data1} ${data3}`, 'utf-8', (err)=>{
//         if(err) throw err;
//         console.log("your file has been saved");
//     })
// })
// })
// })
                     // server
// const server =  http.createServer((req, res) =>{
//     // console.log(req.url);
//     const pathName = req.url;
//     if(pathName == '/'){
//         res.end("Welcome to the Home page");};
//     if(pathName == '/product'){
//         res.end("Welcome to the prduct page");

//     }
//     if(pathName == '/about'){
//         res.end("Welcome to the about page");

//     }
//     if(pathName == '/contact'){
//         res.end("Welcome to the contact page");

//     }else{
//         res.writeHead(404);
//         res.end("page was not found")
//     }
// })
// const port = 8000
// server.listen(port, '127.0.0.1', ()=>{
//     console.log('listening request from server on port 8000');
// })

                    // events
// const myNewEmitter = new EventEmitter();

// myNewEmitter.on("newSale", ()=>{
//     console.log("there was a new sale");
// });

// myNewEmitter.on("newSale", ()=>{
//     console.log("costumer name: jonas");
// });
// myNewEmitter.on("newSale", (stock)=>{
//     console.log(`there are now ${stock}`);
// });

// myNewEmitter.emit("newSale", 9)
