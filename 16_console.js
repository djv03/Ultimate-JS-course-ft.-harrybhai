//console 

console.log(console);

console.error("this is error");
console.warn("this is warning")
// console.clear()


let obj={
    key1:"value1",
    key2:"value2"
}

console.table(obj);//holy cow!!!this is beautiful...need to visit this often


console.time("forloop");//-------------------------time counting start

let arr=[1,2,3,4,4,5,6,66,];
let sum=0
for (let index = 0; index < 10; index++) {
   sum=sum+arr[index];
   console.log(sum);
}

console.timeEnd("forloop");//------------------------time counting end