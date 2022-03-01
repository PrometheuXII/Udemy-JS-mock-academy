//create Object

var obj = {
    Name : "Mock Academy",
    languages : ["PHP", "JavaScript", "Python"],
    working : true,
    Age : 27,
    Age: 22, //Overrides previous
}
// use example
console.log(obj)
console.log(obj.languages[1])
console.log(obj["languages"][2])

// change
    // obj.Name = false
obj["working"] = false
console.log(obj)

// Other usage
var car = {
    model : "Racecar",
    brand : ["Ford", "Chevrolet", "Mazda"],
    working : true,
    MockFunc : function(){
        return "Model: " + this.model
    }
}

console.log(car)
console.log(car.MockFunc())

// delete key & value

// delete car["working"] -- you can also do this..
delete car.working
console.log(car)

// Add New key & value

// car.transmission = ["automatic", "manual"] -- you can also do this..
car["transmission"] = ["automatic", "manual"]
console.log(car)