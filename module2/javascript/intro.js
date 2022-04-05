console.log("hey everyone")

// variables in js
let a = 10;
console.log(a);

// loops
let n = 2;
let isPrime = true;

for(let i =2; i*i<= n; i++){
    if (n%i == 0) {
        isPrime = false;
        
    }
}
    if (isPrime == true)
{
    console.log("no is prime");
    
}
else{
    console.log("no is not prime");
}