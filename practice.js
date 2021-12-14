console.log("Hello world");
function myFullName(first,second,third){
    console.log(first + " " + second + " " + third);
    
};
myFullName("Ademola","Israel","Ogunmokun");


function sayHello(){
    message = "Hello ademola";
    // remove var it becomes global
};
console.log(message);
sayHello()
console.log(message);

function myAge() {
    age = 20
    console.log(age);
    // returned undefined
    var age = 15
}

myAge()

if(true){
    var name = "matt"
    console.log(name);
}

console.log(name);

if(true){
    let name = "matt"
    console.log(name);
}
// this trhow error
console.log(name);
