function sortArray(arrays) {
  
  //функція перетворює двовимірний масив в одновимірний та сортує його

  let arr = arrays.reduce((acc, row) => [...acc, ...row], []);
  arr.sort((a, b) => a - b);
  return arr;
}

let array = [[3, 2, 1],[4, 6, 5],[],[9, 7, 8]];
let sortedArray = sortArray(array);
console.log(array+"==>"+sortedArray);
