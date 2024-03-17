// first task

// let numb = 0;
// while(numb<=100){
//     console.log(numb++);
// }

// second task
// let  numb = 0;
// while(numb<=10){
//     if(numb==0){
//         console.log(numb +" -- this is zero");
//     }
//     else if(numb%2==0){
//         console.log(numb+" -- this is an even number");
//     }
//     else{
//         console.log(numb+" -- this is not an even number");
//     }
//     numb++;
// }

//third task
// for(let i=0;i<=9;console.log(i++)){}

// fourth task 

// let star="";
// for(let i=0;i<6;i++){
//     console.log(star+="*");
// }


// piramid

// let rows = 5;
// let star = '*';
// let space = ' ';
// for (let i = 1; i <= rows; i++) {
//     let result = '';
    
//     for (let j = 1; j <= rows - i; j++) {
//         result += space;
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//         result += star;
//     }
//     console.log(result);
// }

//romb
// let rows = 3;
// let star = '*';
// let space = ' ';

// for (let i = 1; i <= rows; i++) {
//     let result = '';
    
//     for (let j = 1; j <= rows - i; j++) {
//         result += space;
//     }
    
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         result += star;
//     }

//     console.log(result);
// }
// //lower part
// for (let i = rows - 1; i >= 1; i--) {
//     let result = '';
//     for (let j = 1; j <= rows - i; j++) {
//         result += space;
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         result += star;
//     }
//     console.log(result);
// }

// //fifth taask
// let numb = 10000;
// let count =0;
// let result=0;
// while(numb>50){
//     result=numb/=2;
//     count++;
// }
// console.log("count :"+ count+"\nresult:" +result);

//sixth task
// let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));

// if(month<1 || month>12){
//     alert("Невірний номер місяця!");
// }
// switch(month){
//     case 12,1,2:alert("Winter")
//     break;
//     case 3,4,5:alert("Spring")
//     break;
//     case 6,7,8:alert("Summer")
//     break;
//     case 9,10,11:alert("Fall")
//     break;
// }

//seventh task
let temperature= parseInt(prompt("Enter the temperature"));
let temperature_in_Fahrenheit=(9/5)*temperature+32;
alert("temperature_in_Fahrenheit:"+temperature_in_Fahrenheit)



//eigth task
//  let day_of_week= parseInt(prompt("Enter a number day"));
//  if(day_of_week<1||day_of_week>7){
//     alert("Error")
//  }
// switch (day_of_week){
//     case 1: alert("Monday"); break;
//     case 2: alert("Tuesday"); break;
//     case 3: alert("Wednesday"); break;
//     case 4: alert("Thursday"); break;
//     case 5: alert("Friday"); break;
//     case 6: alert("Saturday"); break;
//     case 7: alert("Sunday"); break;

// }