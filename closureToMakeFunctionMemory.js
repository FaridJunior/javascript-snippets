const pow = powGenerator();

console.time("pow");
for (let i = 2; i < 244; i++) {
  pow(9, i);
}
console.timeEnd("pow");

// it save some time in the second execution put it is dangerous if you saved every calculation

console.time("pow1");
for (let i = 2; i < 244; i++) {
  pow(9, i);
}
console.timeEnd("pow1");

function addTwo(x) {
  return x + 2;
}
const addTwoOnceCall = generateOnceCallFunc(addTwo);

console.log(addTwoOnceCall(2));
console.log(addTwoOnceCall(4));

// **********************************

function powGenerator() {
  const store = {};
  return function (num1, num2) {
    const val = store[`${num1},${num2}`];
    if (val) return val;
    const result = Math.pow(num1, num2);
    store[`${num1},${num2}`] = result;
    return result;
  };
}

function generateOnceCallFunc(fn) {
  let flag = false;
  return (...args) => {
    if (flag) return "can't call again";
    flag = true;
    return fn(...args);
  };
}
