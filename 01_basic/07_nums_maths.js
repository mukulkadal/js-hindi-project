const score = 400
console.log(score); // or ye simple number hai bs // ans ==> 400; 

const balance = new Number(100)
console.log(balance) // ans => iska mtlab hai ki ye spacial number hi hai <==> [Number: 100]


console.log(balance.toString()) // hum number ko string main bhi change kr sakte hai or lenght bhi check kr sakte hai// ans => 100 //// lenght <==> 3
console.log(balance.toFixed(2)) // ans => 100.00 


const otherNumber = 123.89657
console.log(otherNumber.toPrecision(4)) // ans => 123.9


const hundreds = 10000000000

console.log(hundreds.toLocaleString('en-IN')) // ans => value kuch ase aati hai // 10,00,00,00,000, zero aaram se gin sakte hai

// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math); // ans => this is a object [Maths]{}
console.log(Math.abs(-8)); // ans => positive mian kr deta hai value ko (-8) ko (8) main kr diya
console.log(Math.round(4.6)); // ans => 5 iska use jada hota hai ye value ko round kr deta hai 
console.log(Math.ceil(4.2)); // ans => 5
console.log(Math.floor(4.9)); // ans => 4 
console.log(Math.min(4, 3, 6, 8)); // ans => 3 sabse chhoti value ko show krta hai
console.log(Math.max(4, 3, 6, 8)); // ans => 8 sabse badi value ko show krta hai


console.log(Math.random)// 0 se leakr 1 ke bich mian hi value hoti hai.......  0.9898902374897098 or har baar value change hoti rehti hai