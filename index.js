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


// for (let i = 10; i >= 0; i--)

// if (i === 5) {
//     console.log(i + " - Halvvägs kvar!")
// } else {
//     console.log("Sekunder kvar: " + i)
// }
// console.log("LIFTOFF!");



// const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"]

// for ( const item of cart) {
//     if (item === "Godis") {
//         console.log("Varning Onödig vara!")
//     } else {
//         console.log("Köp: " + item)
//     }
// }

// const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"];

// for ( const item of cart) {
//     if (item === "Godis"){
//         console.log("Varning onödig vara!");
//     } else {
//         console.log("Köp: " + item);
//     }
// }



// const weather = "sol";

// switch (weather) {
//     case "regn":
//         console.log("Ta med ett paraply");
//         break;

//     case "sol":
//         console.log("Ta på dig solglasögon");
//         break;

//     case "snö":
//         console.log("Ta på dig vinterjacka");
//         break;
//     default:
//     console.log("Kolla väderappen igen");
// }

// for (let i = 1; i <= 4; i++){
//     console.log("Varv " + i)
// }

// let varv = 10;

// while (varv > 0) {
//     console.log("Du har sprungit " + varv + " varv");

//     varv--;
// }

// console.log("Du har sprungit klart!");


// for (let j = 1; j <= 4; j++){
//     console.log("Du har så här mycket energi kvar: " + j);
// }

// console.log("Du har slut på energi");

// const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"];

// for (let i = 0; i < cart.length; i++) {
//     if (cart[i] === "Godis"){
//         console.log("Varning onödig produkt!");
//     } else {
//         console.log("Köp: " + cart[i]);
//     }
// }


// function halsa (namn) {
//     return "hej ${namn}"
// }

// const halsa = (name, age, job) => {
//     console.log("Hej " + name + " " + age + " " + job);
// }



// const halsa = (namn) => `Hej ${namn}`;

// halsa();

// const halsa = (name, age) => {
//     console.log("Hej " + name + age)

//     if (age < 18) {
//         console.log("Du är inte myndig")
//         return 
//     }

//     console.log("Du är myndig");
// }

// halsa("Viktor ", 29)

const skapaKonto = (name, age, roll = "gäst") => {
    console.log("hej " + name, age, roll)

    if (age < 18){
        return { message: "Du är inte myndig"}
    }
    return { message: "Du är myndig"}
}

const skapaKontoObject = skapaKonto("Viktor", 28, "Student")

console.log(skapaKontoObject.message)