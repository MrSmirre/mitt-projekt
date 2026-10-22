console.log("kör");

const fruits = ["äpple", "päron", "banan"];

console.log(fruits[2]);

const city = "Stockholm";



fruits[2] = "Jordgubbe";

console.log(fruits[2]);
console.log(fruits.length);

const person = {
    name: "Linda",
    city: "London",
    age: 45,
}

console.log(person.city);
console.log(person.age);
console.log(person);

person.age = 46;

console.log(person.age);

let age = 16;
let hasTicket = false;
let withAdult = true;

if (age >= 15 || withAdult === true && hasTicket === true) {
    console.log("Välkommen in")
} else { 
        console.log("Du får inte komma in")
    }

const isLoggedIn = true;
const userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
            console.log("Välkommen till adminpanelen!")
        } else { 
            console.log("välkommen vanlig användare!")  
        } 
    } else {
        console.log("Du måste logga in först!")
}

const trafficLight = "gul";

switch (trafficLight) {
    case "grön": console.log("kör");
        break;
    case "gul": 
        console.log("Gör dig redo..."); 
        break;
    case "röd": 
        console.log("stanna!"); 
        break;
        
    default: 
        console.log("okänd signal");
}









// = --> tilldela nytt värde
// == --> Kolla om värdet är truthy
// === --> kollar om värdet och datatypen är truthy