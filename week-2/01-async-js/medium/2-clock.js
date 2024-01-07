// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// first
setInterval(()=>{
    const date = new Date();
    let sess = "AM";
    const hh = date.getHours();
    if(hh>=12)
    {
        sess = "PM";
    }

    console.log(`${date.getHours()}:: ${date.getMinutes()}:: ${date.getSeconds()} ${sess}`);
    
} , 1000);

//second

const time = ()=>{
    setTimeout(()=>{
        const date = new Date();
    console.log(`${date.getHours()}:: ${date.getMinutes()}:: ${date.getSeconds()}`);time();
    },1000);
}

time();
