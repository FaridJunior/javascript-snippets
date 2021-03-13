const composedFunc = compose(step1AddOne, step2AddTwo, step3AddThree);

composedFunc(0); // 6
composedFunc(2); // 8

// ****************** compose
function compose(...funs) {
  return (arg) =>
    funs.reduce((ac, fn) => {
      return fn(ac);
    }, arg);
}

// ******************* helpers

function step1AddOne(input) {
  return input + 1;
}

function step2AddTwo(input) {
  return input + 2;
}
function step3AddThree(input) {
  return input + 3;
}
