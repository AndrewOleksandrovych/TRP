function findUniqueNumber(numbers) {
    let uniqueNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      uniqueNumber &= numbers[i];
    }
    return uniqueNumber;
  }
  let arr=[17,18,18,19,15,19,17];
  console.log(findUniqueNumber(arr));