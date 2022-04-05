

let obj = {}; // Empty object syntax

let myobj = {
    "name": "Nancy Negi" ,
    phoneNo : 7905395096 ,
    address : {
        State : 'Gujarat',
        city : "Ahemedabad"     // object inside an object
    },
    intro : function(){
        console.log("Hello everyone !!");   // assign function to a key
    }
}

console.log(myobj);  // for the whole object

console.log(myobj.phoneNo); // for accessing a single key
myobj.intro();  // for calling the function


myobj.intro = "IT is nice to meet you"; // to update any value
console.log(myobj.intro);
console.log(myobj);

myobj.family = ['Mother', 'Father', 'Brother']; // insert an new key
console.log(myobj);

delete myobj.family // to delete any key