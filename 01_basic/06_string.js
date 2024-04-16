const name = " Mukul"
 const age = 20

 console.log(name + age + " saal "); // this is old methor // ans => Mukul20 saal

 console.log(`Hello my name is ${name} and my age ${age} saal`); // this new methor // ans => Hello my name is mukul and my age 20 saal

 const gameName = new String('Mukul')

 console.log(gameName[0]); // ans => M
 console.log(gameName.__proto__); // ans => {}

 console.log(gameName.length)
 console.log(gameName.toUpperCase()) // ans => MUKUL
 console.log(gameName.charAt(2)) // ans => k
 console.log(gameName.indexOf('l')) // ans => 4

 const newString = gameName.substring(0, 4)
 console.log(newString) //  ans Muku

 const anotherString = gameName.slice(-5, 2) 
console.log(anotherString) // ans => Mu

const newStringOne = "      Mukul     "
console.log(newStringOne) // agar hum ase likhte hai to string main space aata hai // ans => (      Mukul    )
console.log(newStringOne.trim()) // ase likhte hai to hum string ka space cut ho jata hai // ans => (Mukul)

const url = "https://youtu.be/PLZUkp7rckA?si=dw3jbDKNC0x01DJZ"

 console.log(url.replace("01", "=====")) // ans => https://youtu.be/PLZUkp7rckA?si=dw3jbDKNC0x=====DJZ 
 console.log(url.includes('youtu')) // ans => True// ye check krne ke liye hota hai ki isme ye word link mian hai bhi ya nhi
 console.log(url.includes('mukul')) // ans => False// ab jese ye word nhi hai link main mukul to answer false aaya hai 


 console.log(gameName.split('-')) // ans => array return krta hai <=====> ['Mukul']



