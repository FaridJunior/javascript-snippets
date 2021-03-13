function abc(a, b, c) {
  return [a, b, c];
}

let curriedABC = makeCurriedCopyOfFunc(abc);

curriedABC(1, 2, 3);
curriedABC(1, 2)(3);
curriedABC(1)(2, 3);
curriedABC(1)(2)(3);

// *************************************

function makeCurriedCopyOfFunc(fn) {
  let currentArgs = [];
  return function take(...i) {
    currentArgs = currentArgs.concat(i);
    if (currentArgs.length < fn.length) {
      return take;
    } else {
      const res = fn(...currentArgs);
      currentArgs = [];
      return res;
    }
  };
}
