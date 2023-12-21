const setCounter = (count)=>{
    console.log(count);
    setTimeout(()=>{
      setCounter(count+1)
    },1000)
}

setCounter(1);