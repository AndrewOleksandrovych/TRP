function Add(el1,el2){
    if (isNaN(el1) || isNaN(el2)|| el1== null||el2==null) {
      console.error( "Помилка: Невірний тип аргументу");
    }
   else
      return 'add result => '+(el1 + el2);
}

function Sub(el1,el2){
  if (isNaN(el1) || isNaN(el2)|| el1== null||el2==null) {
    console.error( "Помилка: Невірний тип аргументу");
  }
  else
    return "sub result => "+(el1 - el2);
}

function Mul(el1,el2){
  if (isNaN(el1) || isNaN(el2)|| el1== null||el2==null) {
    console.error( "Помилка: Невірний тип аргументу");
  }
  else
    return "mul result => "+(el1 * el2);
}
function Div(el1 , el2){
  // Перший аргумент - чисельник , другий - знаменник
  if (isNaN(el1) || isNaN(el2)|| el1== null||el2==null||el2==0) {
    console.error( "Помилка: Невірний тип аргументу");
  }
  else
    return "div result => "+(el1/el2);

}

function Calc(el1 , el2 , Anyfunction){
  return "Calc function => "+ Anyfunction(el1,el2);
}
console.log(Calc(25,6,Div));
console.log(Div(25,6));
console.log(Mul(25,6));
console.log(Sub(25,6));
console.log(Add(25,6));