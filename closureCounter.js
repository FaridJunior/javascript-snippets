const counter= counterMaker(5,
                            onChange= (count)=>console.log(count),
                            onZero= ()=>console.log("count = 0")
                           )

counter.increase();
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()




function counterMaker(init= 0, onChange, onZero){
  let count = init;
  const publicApi = {increase, decrease, getCount};
  
  return publicApi
  // *****************************
  
  function increase(){
    setCount(count + 1)    
  }
  function decrease(){
    setCount(count - 1)
  }
  function getCount(){return count}
  
  
  function setCount(c){
    count = c;
    onChange(count)
    if(count === 0){
      onZero()
    }
  }
}
