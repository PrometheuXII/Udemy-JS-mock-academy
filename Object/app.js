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

// Other usage
var car = {
    model : "Racecar",
    brand : ["Ford", "Chevrolet", "Mazda"],
    working : true,
    MockFunc : function(){
        return "Model: " + this.model
    }
}

console.log(car.MockFunc())

