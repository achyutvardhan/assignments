// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('node:fs')

const creatingPromise = ()=>{
    return new Promise((res,rej)=>{
        fs.readFile('a.txt','utf-8',(err,data)=>{
            res(data);
        })
    })
}

const writefile = (str)=>{
    return new Promise((res,rej)=>{
        fs.writeFile('a.txt',str,(err,data)=>{
            fs.readFile('a.txt','utf-8', (err,data)=>{
                res(data);
            })
        })
    })
}
const callback = async()=>{
    const  result = await creatingPromise();
     console.log(result);
     const result2 = await writefile(result.split(' ').join(''));
     console.log(result2);
     
}

callback();