// use foreach to loop a data within an array
var languages = ["PHP", "JavaScript", "Python", "C++"];
var count = 0;
languages.forEach(lang => {
    document.getElementById("list").innerHTML += `
    <li>${lang}</li>
    `
        
})