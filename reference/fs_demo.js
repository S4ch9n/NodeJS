const fs = require('fs')
const path = require('path')


// create foldder
// fs.mkdir(path.join(__dirname, '/test'),{} , (err)=>{
//     if(err) throw err;
//     console.log("folder created..")
// })

// create and write to file
// fs.writeFile(path.join(__dirname, '/test' , 'hello.txt'),'Hello World' , 
// err=>{
//     if(err) throw err;
//     console.log("file writen to....")
// }
// );

// fs.writeFile(path.join(__dirname, '/test' , 'hello.txt'),'i love node js ' , 
// err=>{
//     if(err) throw err;
//     console.log("file writen to....")
// }
// );
// fs.writeFile(path.join(__dirname, '/test' , 'hello.txt'),'Hello World' , 
// err=>{
//     if(err) throw err;
//     console.log("file writen to....")
    
//     //file append file
//     fs.appendFile(path.join(__dirname, '/test' , 'hello.txt'),'i love NodeJS' , 
// err=>{
//     if(err) throw err;
//     console.log("file written to")
// }
// );
// }
// );



// Read file
// fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf-8' , (err, data)=>{
//         if(err) throw err;
//        console.log(data);
//     })



    //Rename file
    fs.rename(path.join(__dirname, '/test','hello.txt'),
    path.join(__dirname, '/test','helloWorld.txt'),
     err=>{
        if(err) throw err;
       console.log("file renamed");
    })