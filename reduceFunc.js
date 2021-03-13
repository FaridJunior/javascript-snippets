reduce([1, 2, 3, 4], sum, 0);

const result = reduce(
  [{ a: 1 }, { b: 2 }, { c: 1 }, { d: 4 }],
  (result, item) => {
    let key = Object.keys(item)[0];
    let value = item[key];
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);

result;

// ******************************
function reduce(list, fn, acumlator) {
  let memo = acumlator;
  let ar = list;
  if (!memo) {
    memo = list[0];
    ar = list.slice(1);
  }
  for (let i = 0; i < ar.length; i++) {
    memo = fn(memo, ar[i]);
  }
  return memo;
}

function sum(n1, n2) {
  return n1 + n2;
}
