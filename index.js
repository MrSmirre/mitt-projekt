// // console.log("kör");

// // const fruits = ["äpple", "päron", "banan"];

// // console.log(fruits[2]);

// // const city = "Stockholm";



// // fruits[2] = "Jordgubbe";

// // console.log(fruits[2]);
// // console.log(fruits.length);

// // const person = {
// //     name: "Linda",
// //     city: "London",
// //     age: 45,
// // }

// // console.log(person.city);
// // console.log(person.age);
// // console.log(person);

// // person.age = 46;

// // console.log(person.age);

// // let age = 16;
// // let hasTicket = false;
// // let withAdult = true;

// // if (age >= 15 || withAdult === true && hasTicket === true) {
// //     console.log("Välkommen in")
// // } else { 
// //         console.log("Du får inte komma in")
// //     }

// // const isLoggedIn = true;
// // const userRole = "admin";

// // if (isLoggedIn) {
// //     if (userRole === "admin") {
// //             console.log("Välkommen till adminpanelen!")
// //         } else { 
// //             console.log("välkommen vanlig användare!")  
// //         } 
// //     } else {
// //         console.log("Du måste logga in först!")
// // }

// // const trafficLight = "gul";

// // switch (trafficLight) {
// //     case "grön": console.log("kör");
// //         break;
// //     case "gul": 
// //         console.log("Gör dig redo..."); 
// //         break;
// //     case "röd": 
// //         console.log("stanna!"); 
// //         break;

// //     default: 
// //         console.log("okänd signal");
// // }

// // const weather = "sol";

// // switch (weather) {
// //     case "regn":
// //         console.log("Ta med paraply")
// //         break
// //     case "sol":
// //         console.log("Glöm inte solglasögon")
// //         break
// //     case "snö":
// //         console.log("Ta på dig en varm jacka")
// //         break
// //     default:
// //         console.log("Kolla väderappen igen")
// // }







// // = --> tilldela nytt värde
// // == --> Kolla om värdet är truthy
// // === --> kollar om värdet och datatypen är truthy


// // for-loop


// for (let i = 1; i < 101; i++) {
//     console.log(i)
// }

// for (let i = 10; i > 0; i--) {
//     console.log()
// }

// // // i++
// // i = i + 1

// // // i--
// // i = i -1

// const fruit = ["banan", "äpple", "körsbär", "päron", "apelsin"]

// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
//     console.log(fruit[3])
// }


// let energi = 6;

// while (energi > 0){
//     console.log("sprang ett varv! Energi kvar: " +
//     energi--); 
// }
// console.log("Slut på energi! Måste vila.")



// const elever = [
//     { name: "Anna", poang: 85 },
//     { name: "Bosse", poang: 2684 },
//     { name: "Lennart", poang: 472 },
//     { name: "Jakob", poang: 53 }
// ]

// for (const elev of elever) {
//     console.log(elev.name + " fick " + elev.poang + " poäng!");
// }





// let energy = 10;

// while (energy > 0) {
//     console.log("Sprang ett varv " + energy);
//     energy--
// }
// console.log("färdig!")

// let vatten = 10;

// for (let i = vatten; i > 0; i--){
//     console.log("Vattnet finns kvar" + vatten ) 
// }



// let elever = [
//     { namn: "daniel", alder: 29},
//     { namn: "Lovisa", alder: 89},
//     { namn: "Joel", alder: 56}
// ]

// for (let i = 0; i < elever.length; i++){
//     console.log(elever[i].namn + " - " + elever[i].alder)
// }

// for (const elev of elever) {
//     console.log(elev.namn, elev.alder)
// }


for (let i = 10; i >= 0; i--)

if (i === 5) {
    console.log(i + " - Halvvägs kvar!")
} else {
    console.log("Sekunder kvar: " + i)
}
console.log("LIFTOFF!");



const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"]

for ( const item of cart) {
    if (item === "Godis") {
        console.log("Onödig vara")
    } else {
        console.log("Köp: " + item)
    }
}