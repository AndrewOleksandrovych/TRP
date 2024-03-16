function findUniqueNumber(numbers) {
  if(numbers.length%2==1){
    let uniqueNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      uniqueNumber ^= numbers[i];
    }
    return uniqueNumber;
  }
  else{
    console.log("array length is not correct");
  }
}
  let arr=[17,18,18,19,15,19,17];
  console.log(findUniqueNumber(arr));