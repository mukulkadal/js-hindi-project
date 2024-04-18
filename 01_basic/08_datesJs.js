// Dates

let myDate = new Date()
// console.log(myDate.toString()); // ans  => Thu Apr 18 2024 07:10:20 GMT+0000 (Coordinated Universal Time)     
// console.log(myDate.toDateString()); // ans => Thu Apr 18 2024
// console.log(myDate.toLocaleString()); // ans => 4/18/2024, 7:10:20 AM        
// console.log(typeof myDate);// ans => object                                 

//  let myCreatedDate = new Date (2023, 0, 23)
//  console.log(myCreatedDate); //. ans => 2023-01-23T00:00:00.000Z

//  let myCreatedDate = new Date (2023, 0, 23, 5, 3)
//  console.log(myCreatedDate.toString());  // ans => Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date ('23-01-14') // 
// console.log(myCreatedDate) // ans => Invalid Date ye india ke hisab se likha hua nhi hai
// let myCreatedDate = new Date ('01-14-2023') // dd/mm/year.  it's a true 
// console.log(myCreatedDate.toLocaleString()); // ans => 1/14/2023, 12:00:00 AM

// let myCreatedDate = new Date ('01-14-2023')
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // ans => 1713424855164
// console.log(myCreatedDate.getTime()); // ans => 1673654400000
// console.log(Date.now()/1000); // ans => 1713425065.689
// console.log(Math.floor(Date.now()/1000)); // <==> last ki value cut krne ke liye  now answer =>  (1713425179)

let newDate = new Date()
// console.log(newDate); // ans => 2024-04-18T07:29:23.017Z
// console.log(newDate.getDay()); // ans => 4
console.log(newDate.getTime()); // ans => 1713425484556


