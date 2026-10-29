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

// const skapaKonto = (name, age, roll = "gäst") => {
//     console.log("hej " + name, age, roll)

//     if (age < 18){
//         return { message: "Du är inte myndig"}
//     }
//     return { message: "Du är myndig"}
// }

// const skapaKontoObject = skapaKonto("Viktor", 28, "Student")

// console.log(skapaKontoObject.message)


// const beraknaPris = (titel, pris, moms = 25) => {
//     const total = pris * (1 + moms / 100);
//     return { titel, totalPris: total };
// }



// En array med objekt (kundvagn)
// const varukorg = [
//   { namn: "Bok", pris: 120 },
//   { namn: "Penna", pris: 25 },
//   { namn: "Mapp", pris: 45 }
// ];

// // Arrow function som tar emot en array
// const beraknaTotal = (produkter) => {
//   let summa = 0;
//   for (const p of produkter) {
//     summa += p.pris; // Lägger till priset
//   }
//   return summa;
// };

// const totalt = beraknaTotal(varukorg);
// console.log(`Att betala: ${totalt} kr`); // "Att betala: 190 kr"



// const valkommen = (namn, titel = "Medlem") => {
//   return `Välkommen ${titel} ${namn}!`
// } 


// console.log(valkommen("Viktor"))
// console.log(valkommen("klara", "admin"))



// const addi = (siffraEtt, siffraTva) => {
//   return siffraEtt * siffraTva
// }

// console.log(addi(2, 30000))


// const weather = (season) => {
//   switch (season) {
//     case "Sol":
//       return "Ta på dig solglasögon"
//     case "Snö":
//       return "Ta på dig vinterjacka"
//     case "Blåsigt":
//       return "Ta på dig vindjacka"
      
//     default:
//       return "Kolla väderappen igen"
//   }
// }

// console.log(weather("Snö"));


// const provPoang = [18, 22, 15, 28, 20];

// const rakenaMedel = (poang) => {
//   let summa = 0;
//   for (let p of poang) {
//     summa += p;
//   }
//   return summa / poang.length;
// };

// const medel  = rakenaMedel(provPoang);
// console.log(`Medelpoäng på provet: ${medel}`);

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = ()


// const checkScore = (a) => {
//   if (a <= 50) {
//     return "Underkänd";
//   } else {
//     return "Godkänd";
//   }
// }
// console.log(checkScore(70));

// const checkKcore = (points) => {
//   if (points >= 50) {
//     return "Godkänd";
//   } else {
//     return "Underkänd";
//   }
// };

// console.log(checkScore(70));


// const checkScore = (a) => {
//   if (a <= 50) {
//     return "Underkänd";
//   } else {
//     return "Godkänd";
//   }
// }
// console.log(checkScore(2));
// console.log(checkScore(222));


// const words = "Välkommen"

// let emptyArray = []

// const count = (string) => {
//   for (i of string) {
//     emptyArray.push(i);
//   }
//   return emptyArray;
// }

// console.log(count(words))


// const arr = ["Joel", "Daniel", "Philip", "Kristoffer", "Wictor", "Viktor", "Philip"]

// const pedoFinder = (names) =>{
//   for (i of names) {
//     if (i === "Philip"){
//       console.log(i + " " + "Hittade pedo")
//     } else {
//       console.log(i + " " + "Inget konstigt här")
//     }
//   }
// }

// pedoFinder(arr)


//en arrow funktion som skriver ut underkänd om poängen är under 60

// const prov = (poang) => {
//   if (poang < 60) {
//     return "Underkänd"
//   } else {
//     return "Godkänd"
//   }
// }

// console.log(prov(60))

// const elever = [ 
//   {namn: "Daniel", point: 0}, 
//   {namn: "Johan", point: 4}, 
//   {namn: "Alex", point: 8},
//   {namn: "Kornelia", point: 5}
// ]

// const prov = (poang) => {
//   const resultat = []
//   for (let i of poang) {
//     if (poang >= 60) {
//       resultat.push(`${i.namn}: Godkänd`)
//     } else {
//       resultat.push(`${i.namn}: Underkänd`)
//     }
//   }
//   return resultat
// }

// console.log(prov(elever))


// const list = ["Mjölk", "vetemjöl", "Ägg", "Kebabrulle"]

// const cart = (items) => {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] === "Kebabrulle" || items[i] === "Ägg") {
//       console.log(`${items[i]}: Onödig vara`)
//     } else {
//       console.log(`${items[i]}: Köp förfan`)
//     }
//   }
// }

// cart(list)




// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }




// const welcome = (name = "Daniel", title = "Medlem") => {
//   return `Välkommen ${title} ${name}`
// }

// console.log(welcome("Klara", "Admin"))
// console.log(welcome("Leo"))
// console.log(welcome())



// const provPoang = [18, 22, 15, 28, 20]

// const rakenaMedel = (provPoangArr) => {
//   let sum = 0
//   for (const poang of provPoangArr) {
//     sum += poang 
//   }
//   return sum / provPoangArr.length
// }

// console.log("Medelpoäng på provet: ", rakenaMedel(provPoang))



// const kunder = [
//   { namn: "Mia", Vip: true, kopSumma: 1200 },
//   { namn: "Sam", Vip: false, kopSumma: 450 },
//   { namn: "Robin", Vip: true, kopSumma: 800 }
// ];


// const getVipBonus = (kundArr) => {
//   const resultat = []

//   for (const kund of kundArr) {
   
//     if (kund.Vip === true) {
//       const rabatt = kund.kopSumma * 0.9
//       const vipKund = {namn: kund.namn, kopSumma: rabatt}
//       resultat.push(vipKund)
//     }
//   }
//   return resultat
// }

// console.log(getVipBonus(kunder))

// const skrivUtTio = () => {
// return 10
// }

// const minFunktion = (callBackFn) => {
//   const result = callBackFn()

//   return result
// }

// const skrivUtResult = minFunktion(skrivUtTio)

// console.log(skrivUtResult)



// const firstName = "Viktor"

// const age = 28

// const isStudent = true

// console.log(firstName + " " + age + " Är grabben student? = " + isStudent)


// const favoriteFoods = ["Köttbullar", "Glas", "Blåbär"]

// console.log(favoriteFoods[0]);

// favoriteFoods.push("Lingon")

// console.log(favoriteFoods[3]);

// console.log(favoriteFoods.length);


// const car = { brand: "Toyota", year: 2023}

// console.log(car.brand);

// car.year = 2026

// console.log(car.year + " " + car.brand);



const siffror = [18, 2, 5, 28, 0]



const over10 = siffror.filter((siffra, i) => {
  console.log(i + " - " + siffra);
  return siffra < 10
})

console.log(over10);


console.log(siffror);
