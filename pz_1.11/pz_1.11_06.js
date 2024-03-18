function removeDuplicates(arr) {
    return arr.filter((item, index) => !arr.includes(item, index + 1));
  }
  
  const arr = [1, 1, 3, 4, 4, 1, 3, 2];
  const uniqueArray = removeDuplicates(arr);
  console.log(uniqueArray); 
  