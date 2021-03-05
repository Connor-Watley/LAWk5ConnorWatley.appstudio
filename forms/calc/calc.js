function Calculate (num1, num2){
   let total = num1 + num2
   return total;
   }
   
let n1 = parseInt(prompt("Please enter an integer "))
let n2 = parseInt(prompt("Please enter an integer "))


let summedNumbers = Calculate(n1,n2)

console.log(`The sum of ${n1} and ${n2} is ${summedNumbers}`)
 