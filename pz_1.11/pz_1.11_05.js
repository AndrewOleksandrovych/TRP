function DescribeNumber(number) {
    let description = "";
  
    // Перевірка на число
    if (isNaN(number)) {
      return "Введено не число";
    }
  
    // Ознака позитивності
    if (number > 0) {
      description += "позитивне число";
    } else if (number < 0) {
      description += "негативне число";
    } else {
      description += "нуль";
    }
  
    // Перевірка на просте число
    if (CheckHowIsNumber(number)) {
      description += ", просте";
    } else {
      description += ", складене";
    }
  
    // Перевірка подільності на 2, 3, 5, 6, 9
    const divisibleBy = isDivisibleBy23569(number);
    if (divisibleBy) {
      description += ", ділиться на 2, 3, 5, 6, 9 без залишку";
    } else {
      description += ", не ділиться на 2, 3, 5, 6, 9 без залишку";
    }
  
    return description;
  }

function  CheckHowIsNumber(number){
    if (number <= 1) {
        return false;
      }
    
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
}

function isDivisibleBy23569(number) {
    const divisors = [2, 3, 5, 6, 9]; 
  
    for (const divisor of divisors) {
      if (number % divisor === 0) {
        return true;
      }
      else{
        return false;
        break;
      }
    }
    return false; 
  }
  

console.log(DescribeNumber(90));