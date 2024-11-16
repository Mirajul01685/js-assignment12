let inputNumber =[10,15,20,13,16,19,36,78]
let arr=[];
console.log("all array elements:",inputNumber.length);
for(let i=0; i<inputNumber.length;i++){
    // console.log(inputNumber[i]);
    if(inputNumber[i]%2===0){
        const updateValue = inputNumber[i];
        arr.push(updateValue);
    }
}
console.log(arr);
