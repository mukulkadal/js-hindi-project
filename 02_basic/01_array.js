// array

// const myArr = [0,1,2,3,4,5]
// console.log(myArr); // ans => [ 0, 1, 2, 3, 4, 5 ]


// const myHeros = ['saktimaan', 'naagdevta', 'naagraja']
// console.log(myHeros); // ans => [ 'saktimaan', 'naagdevta', 'naagraja' ]


// const myArr2 = new Array(1,2,3,4,)
// console.log(myArr2[0]); // ans =>  1


// Array Methor

const myArr = [0,1,2,3,4,5]
// myArr.push(6) // ans => [  0, 1, 2, 3, 4, 5, 6] => push ka ka hota hai array ke andhar last main element add krna 
// myArr.pop() // ans => [ 0, 1, 2, 3, 4 ] => pop ka kaam hai last ki value ko cut krna

// myArr.unshift(9)  // ans => [  9, 0, 1, 2, 3, 4, 5, 6] => unshift ka ka hota hai array main starting main element add krna 
// myArr.shift() // ans => [ 1, 2, 3, 4, 5, ] => shift ka ka hota hai array main starting main element Cut krna 


// console.log(myArr.includes(11)); // ans => false => iska ans false is liye aaya kyuki array main value (11) pss hi nhi hai to iska answer boolean  mian aata hai
// console.log(myArr.indexOf(2)); // ans => 2 => agar array main (2) value hogi to iska answer aayega or nhi hua element array ke andar to iska answer -1 aayega

// const newArr = myArr.join()
// console.log(myArr);// ans => [ 0, 1, 2, 3, 4, 5 ] iska answer ase aata hai
// console.log(newArr); // ans =>  0,1,2,3,4,5 iska answer ase aata hai ye sb join se hua hai
// console.log(typeof newArr); // ans => string => join se in number element ko string main change kr diya hai




// ============================= slice, splice methor ==============================
console.log('a', myArr); // ans => a [ 0, 1, 2, 3, 4, 5 ] 

const myn1 = myArr.slice(1,3)
// console.log(myn1); // ans => [ 1, 2 ] slice main difrence hota hai ki isme last rang include nhi hoti

console.log(myn1);
console.log('b',myArr); // ans => b [ 0, 1, 2, 3, 4, 5 ] 

const myn2 = myArr.splice(1,3)
console.log(myn2); // ans => [ 1, 2, 3 ] splice main difrence hota hai ki isme last rang include ho jati hai 





