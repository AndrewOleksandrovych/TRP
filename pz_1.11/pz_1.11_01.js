function retutn_number(numb){
    let arr=[];
    for(let i=numb ; i>0;i--){
        arr.push(i);
    }
    console.log("n = "+numb+" ==> "+arr);
}
let count= parseInt(prompt("Enter the count for arr"));
retutn_number(count);