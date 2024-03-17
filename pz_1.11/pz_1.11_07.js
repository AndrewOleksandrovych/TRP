function Calculate(arr){
    let element=0;
    for (let index = 0; index < arr.length; index++) {
         element += arr[index];
    }
    return element/arr.length;
}

let arr =[1,2,3];
console.log(Calculate(arr));