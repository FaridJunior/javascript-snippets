function main(){
  const function2X2Plus3X = makeFunction(0, 3, 2)
  // y(x) = 2x^2 + 3

  function2X2Plus3X(2) // 14 
  // y = 2*2**2 + 3*2 // 14
}

main()


/**
* @params any number of numbers
* @returns {function} make polynomial function 
*/ 

function  makeFunction(...args){
    return (x)=> args.reduce((ac, val, index)=> {
      return val * (x** (index) ) + ac
    })
}

