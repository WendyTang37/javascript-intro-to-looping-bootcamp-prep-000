function forLoop(arr) {
  for(let i = 0; i < 25; i++) {
    var addstring = `"I am ${i} strange loop${i === 0 ? '':'s'}."`;
    arr.push(addstring);
  }
  return arr;
}

function whileLoop(n) {
  while(n >= 0) {
    console.log(n);
    n--;
  }
}