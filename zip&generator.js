console.time("t1");
for (let i of zip([1, 2, 5, 2, 2], [1, 2, 3, 4, 5, 6, 7])) {
  console.log(i);
}
console.timeEnd("t1");

console.time("t2");
for (let i of zipGenerator([1, 2, 5, 2, 2], [1, 2, 3, 4, 5, 6, 7])) {
  console.log(i);
}
console.timeEnd("t2");

// *****************************

function zip(array1, array2) {
  let count = 0;
  let res = [];
  let minLen = Math.min(array1.length, array2.length);
  for (let i = 0; i < minLen; i++) {
    res.push(next());
  }
  return res;
  // ************************
  function next() {
    let res = [array1[count], array2[count]];
    count++;
    return res;
  }
}

function* zipGenerator(arr1, arr2) {
  let minLen = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < minLen; i++) {
    yield [arr1[i], arr2[i]];
  }
}

function* called() {
  yield "first";
  yield "second";
}

for (i of called()) {
  console.log(i);
}
