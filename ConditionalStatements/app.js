//conditional sentences & logic

console.log(2>1) // returns true
console.log(2<1) // returns false

var n1 = 1;
var n2 = 2
console.log(n1 <= n2)
console.log(n1 >= n2)

// === checks for the data type
console.log(3 === "3") // false as it checks the data type
console.log(3 == "3") //  will return true

// Logical Operators

// || or
console.log(3<=2 || 3>=2) // return true if any condition is true
console.log(3 == 2 || 2>=3)

// && and
console.log(3 == 2 && 2>=3) // Only returns true if all condition is true

// != Not Equal
console.log(1 != 3) //true
console.log(3 != 3)

// !== Not Equal and Not Have the Same Data Types
console.log(3 !== "3")
console.log(1 !== "3")

// if statement

// if(true){  --executes since true
//     alert("Mock")
// }
if(false){  // doesn't execute since false
    alert("Mock")
}