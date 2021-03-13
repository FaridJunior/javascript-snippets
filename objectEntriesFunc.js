const obj = {
  pla: 'pla',
  pla1: 'pla1'
};

for (const [key, value] of entries(obj)) {
  console.log(`${key}: ${value}`);
}

// output
// 'pla: pla'
// 'pla1: pla1'

// ************************

function* entries(obj){
  for(let id in obj){
    yield [id , obj[id]]
  }
}