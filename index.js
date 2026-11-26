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

// const siffror = [18, 2, 5, 28, 0]

// const over10 = siffror.filter((siffra, i) => {
//   console.log(i + " - " + siffra);
//   return siffra < 10
// })

// console.log(over10);

// console.log(siffror);

// const versaler = (str) => str.toUpperCase();

// const citera = (str) => `"${str}"`;

// const formateraText = (text, callback) => {
//   return callback(text)
// }

// console.log(formateraText("Hej", versaler));
// console.log(formateraText("hej", citera));

// const tal = [4, 15, 8, 25, 2];

// const over10 = tal.filter((numb) => numb > 10)

// const plus5 = over10.map((numb) => numb + 5)

// console.log(over10)
// console.log(plus5)

// const tal = [4, 15, 8, 25, 2];

// const filtrera = (filtreras, arr) => {
//   const result = []
//   for ( const i of arr) {
//     if (filtreras(i)) result.push(i)
//   }
//   return result
// }

// console.log(filtrera((numb) => numb > 10,tal))

// const firstName = "Viktor"
// const age = 29
// const isStudent = true

// console.log("Hej mitt namn är " + ", jag är " + age + " och är student = " + isStudent);

// const favoriteFoods = ["Kåldolmar", "Köttbullar", "Ett stekt ägg"]

// console.log(favoriteFoods[0]);

// favoriteFoods.push("Hallonsylt")

// console.log(favoriteFoods.length + " " + favoriteFoods[3]);

// const car = { brand: "Volvo", model: "740", year: 1994 }

// console.log(car.brand);

// console.log(car);

// car.year = 2024

// console.log(car);

// const weather = "Sol"

// switch (weather) {
//   case "Snö":
//     console.log("Ta på dig jacka");
//     break;
//   case "Regn":
//     console.log("Ta på dig regnjacka");
//     break;
//   case "Sol":
//     console.log("Ta på dig solglasögon lil bro");
//     break;
//     default:
//       console.log("Kolla väderappen igen")
// }

// const season = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

// switch (season) {
//   case "Vinter":
//     console.log("Skotta snö");
//     break;
//   case "Sommar":
//     console.log("Klipp gräset");
//     break;
//   case "Vår":
//     console.log("Vårstäda huset och spela frisbeegolf");
//     break;
//   case "Höst":
//     console.log("Kratta löv");
//     break;
//   default:
//     console.log("Gå ut o kolla vad det är för årstid");

// }

// for (let i = 5; i >= 1; i--) {
//   if (i === 3) {
//     console.log("Halvvägs kvar! " + i)
//   } else {
//     console.log("Sekunder kvar: " + i)
//   }
// }
// console.log("LIFTOFF!")

// const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"]

// for (item of cart) {
//   if (item === "Godis") {
//     console.log("Onödig vara, köp inte")
//   } else {
//     console.log("Köp: " + item)
//   }
// }

// const valkommen = (namn, titel = "Medlem") => {
//   return `Välkommen ${namn} ${titel}`
// }

// console.log(valkommen("klara", "Admin"));
// console.log(valkommen("Leo"));

// const provPoang = [18, 22, 15, 28, 20]

// const rakenaMedel = (arr) => {
//   let summa = 0
//   for (const poang of arr) {
//    summa += poang
//   }
//   return summa / arr.length
// }

// console.log("Medelpoäng på provet: ", (rakenaMedel(provPoang)))

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200},
//   { namn: "Sam", arVip: false, kopSumma: 450},
//   { namn: "Robin", arVip: true, kopSumma: 800}
// ]

// const getVipBonus = (arr) => {
//   const resultat = []

//   for (const i of arr) {
//     if (i.arVip) {
//       const rabatt = i.kopSumma * 0.9
//       resultat.push({ namn: i.namn, nyttPris: rabatt })
//   }

// }
//  return resultat
// }

// const vipRabatter = getVipBonus(kunder)

// console.log(vipRabatter)

// const firstName = "Viktor"
// const age = 29
// const isStudent = true

// console.log("Hej mitt namn är " + firstName + " och är " + age + " år gammal " + " är jag student? " + isStudent);

// const favoriteFoods = ["Kebab", "Köttbulle", "Köttfärs"]

// console.log(favoriteFoods[0])

// favoriteFoods.push("Bröd")

// console.log(favoriteFoods.length);
// console.log(favoriteFoods);

// const foodList = (arr) => {
// for (i of arr) {
//   console.log(i)
// }
// }

// foodList(favoriteFoods)

// const car = {brand: "Volvo", model: "v70", year: 2014}

// console.log(car.brand);

// console.log(car.year);

// car.year = 2024

// console.log(car.year);

// const weather = "Snö"

// switch (weather) {
//   case "Regn":
//     console.log("Ta på dig regnjacka");
//     break;
//   case "Snö":
//     console.log("Ta på dig vinterjacka");
//     break;
//   case "Blåsigt":
//     console.log("Ta på dig vindjacka");
//     break;
//   default:
//     console.log("Kolla väderappen igen");
// }

// let energi = 5;

// while (energi > 0) {
//   console.log("Sprang ett varv! Energi kvar! " + energi)
//   energi--
// }

// console.log("Slut på energi!")

// for (i = 5; i >= 1; i--) {
//   if (i === 3) {
//     console.log("Halvvägs kvar! " + i);
//   } else {
//       console.log("Sekunder kvar: " + i);
//   }
// }

// console.log("Liftoff!");

// const cart = ["Mjök", "Godis", "Bröd", "Godis", "Äpple"]

// for (item of cart) {
//   if (item === "Godis") {
//     console.log("Onödig vara, köp inte!");
//   } else {
//     console.log("Köp: " + item);

//   }
// }

// const valkommen = (namn, titel = "Medlem") => {
//   return `Välkommen ${titel} ${namn}`
// }

// console.log(valkommen("Klara", "Admin"))
// console.log(valkommen("Leo"))

// const siffror = [18, 22, 15, 28, 20]

// const rakenaMedel = (arr) => {
//   let summa = 0
//   for (numb of arr) {
//     summa += numb
//   }
//   return summa / arr.length
// }

// console.log("Medelpoäng på provet: ", rakenaMedel(siffror));

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = (kundLista) => {
//   const resultat = []
//     for (const kunder of kundLista) {
//       if (kunder.arVip) {
//         const rabatt = kunder.kopSumma * 0.9
//         resultat.push({namn: kunder.namn, nyttPris: rabatt})
//       }
//     }
//     return resultat
// }

// console.log(getVipBonus(kunder))

// const tal = [10, 20, 30, 40];

// // push & pop (Muterar)
// tal.push(50); // [10, 20, 30, 40, 50]
// console.log(tal);
// tal.pop(); // [10, 20, 30, 40]
// console.log(tal);

// // slice (Icke-muterande)
// const del = tal.slice(1, 3); // ➔ [20, 30]
// console.log(del);

// splice (Muterar: starta vid index 1, ta bort 2)
// tal.splice(1, 2); // tal är nu [10, 40]
// console.log(tal);

// const poang = [8, 15, 22, 12, 45, 65, 87];

// 1. forEach: Skriv ut varje tal
// poang.forEach(p => console.log(p));

// // 2. map: Plussa på 2 poäng på alla
// const uppdaterade = poang.map(p => p + 2);
// // ➔ [10, 17, 24, 14]
// console.log(uppdaterade);

// // 3. filter: Behåll endast poäng >= 15
// const godkanda = poang.filter(p => p >= 15);
// // ➔ [15, 22]

// const godkanda = poang.filter(p => p <= 15)

// console.log(godkanda);

// const uppdaterade = poang.map(p => p * 2)
// console.log(uppdaterade);

// poang.forEach(p => console.log(p))

// const stader = ["Stockholm", "Göteborg", "Malmö"]

// console.log(stader);

// stader.push("Uppsala")

// console.log(stader);

// const tvaStader = stader.slice(0, 2)

// console.log(tvaStader);

// const temp = [12, 18, 25, 8, 30, 15]

// console.log(temp);

// const over15 = temp.filter(p => p > 15)

// console.log(over15)

// const dubbel = over15.map(p => p * 2)

// console.log(dubbel);

// const temp = [12, 18, 25, 8, 30, 15]

// temp.push(16)

// console.log(temp);

// temp.pop()

// temp.pop()

// console.log(temp);

// temp.splice(1, 2)

// console.log(temp);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);

// const weather = "Sol"

// switch (weather){
//     case "Snö":
//         console.log("Ta på dig vinterjacka")
//         break;
//     case "Sol":
//         console.log("Ta på dig solglasögon")
//         break;
//     default:
//         console.log("Kolla vädret igen")

// }

// for (i = 5; i >= 1; i--) {
//     if (i === 3){
//         console.log("Halvvägs där! " + i);
//     } else {
//         console.log("Sekunder kvar: " + i)
//     }
// }
// console.log("LIFTOFF!");

// const valkommen = (namn, titel = "Medlem") => {
//     return `Välkommen ${namn} ${titel}`
// }

// console.log(valkommen("Viktor", "Admin"))
// console.log(valkommen("Leo"));

// const provPoang = [18, 22, 15, 28, 20]

// const rakenaMedel = (provPoangArr) => {
//     let summa = 0
//     for (const p of provPoangArr) {
//         summa += p
//     }
//     return summa / provPoangArr.length
// }

// const medel = rakenaMedel(provPoang)

// console.log(medel)

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = (kundArr) => {
//     const resultat = []
//     for (const p of kundArr) {
//         if (p.arVip){
//             const nyPris = p.kopSumma * 0.9
//             resultat.push({ namn: p.namn, nyPris})
//         }
//     }
//     return resultat
// }

// console.log(getVipBonus(kunder))

// const car = {brand: "volvo", model: "v70", age: 1998}
// console.log(car.brand)
// car.year = 2005

// console.log(car.year);

// const firstName = "Viktor"
// const age = 29
// const isStudent = true

// console.log("Hej " + firstName + " " + age + " år är du student? " + isStudent);

// const fruits = ["Köttbulle", "RIlle", "Wictor"]
// fruits.push("JOel")

// console.log(fruits.length);

// const weather = "Rgn"

// switch (weather) {
//     case "Regn":
//     console.log("Ta på dig regnjacka");
//     break;
//     default:
//     console.log("Kolla vädret igen");

// }

// for (let i = 5; i >= 1; i--) {
//     if (i === 3){
//         console.log("Halvvägs där" + i);
//     } else {
//         console.log(i);

//     }
// }
// console.log("Liftoff!!!");

// const cart = ["Mjök", "Godis", "Köttabulle", "Godis", "Bannizz", "Godis"]

// for (item of cart) {
//     if (item === "Godis"){
//         console.log("Varning, onödig vara!");
//     } else if (item === "Bannizz") {
//         console.log("spring förfan")
//     } else {
//         console.log("Köp förfan: " + item);
//     }
// }

// const valkommen = (namn, titel = "Medlem") => {
//     return `Välkommen ${titel} ${namn}`
// }

// console.log(valkommen("Viktor", "Admin"));
// console.log(valkommen("Rille"));

// const provPoang = [18, 22, 15, 28, 20]

// const rakenaMedel = (arr) => {
//     let summa = 0

//     for (p of arr) {
//         summa += p
//     }
//     return summa / arr.length
// }

// console.log("Medelpoäng på provet: ", rakenaMedel(provPoang));

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = (kundArr) => {
//     let result = []

//     for (const k of kundArr) {
//         if (k.arVip){
//            const nyttPris = k.kopSumma * 0.9
//             result.push({ namn: k.namn, arVip: true, nyttPris });
//         }
//     }
//     return result
// }

// console.log(getVipBonus(kunder))

// const weather = "Ren"

// switch (weather) {
//     case "Regn":
//     console.log("Ta på dig regnkläder");
//     break;
//     default:
//         console.log("Kolla väderappen igen");

// }

// const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"];

// for (i of cart) {
//     if (i === "Godis") {
//         console.log("Onödig vara");

//     } else {
//         console.log("Köp: " + i);

//     }
// }

// for (i = 5; i >= 1; --i) {
//     if (i === 3) {
//         console.log("Halvvägs där " + i);
//     } else {
//         console.log("Sekunder kvar " + i);
//     }
// }
// console.log("LIFTOFF");

// const valkommen = (namn, titel = "Gäst") => {
//     return `Välkommen ${titel} ${namn}`
// }

// console.log(valkommen("Viktor", "Admin"));
// console.log(valkommen("Leo"));

// const provPoang = [18, 22, 15, 28, 20];

// const rakenaMedel = (arr) => {
//     let sum = 0

//     for (p of arr) {
//         sum += p
//     }
//     return sum / arr.length
// }

// console.log(rakenaMedel(provPoang));

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = (kundArr) => {
//     const result = []

//     for(const k of kundArr) {
//     if (k.arVip) {
//         const nySumma = k.kopSumma * 0.9
//         result.push({namn: k.namn, nySumma})
//     }
// }
//     return result
// }

// const vipRabatter = getVipBonus(kunder)
// console.log(vipRabatter);

// const versaler = (str) => str.toUpperCase()
// const citera = (str) => `"${str}"`

// const formateraText = (text, callback) => callback(text)

// console.log(formateraText("viktor", citera));
// console.log(formateraText("viktor", versaler));

// const versaler = (str) => str.toUpperCase()
// const citera = (str) => `"${str}"`

// const formateraText= (text, callback) => callback(text)

// console.log(formateraText("Viktor", versaler));
// console.log(formateraText("Viktor", citera));

// const tal = [4, 15, 8, 25, 2];

// const arr = tal.filter(n => n > 10)

// console.log(arr);

// const plus5 = arr.map(n => n += 5)

// console.log(plus5);

// const stader = ["Stockholm", "Göteborg", "Malmö"];

// stader.push("Uppsala")

// const tvaStader = stader.slice(0, 2)

// console.log(stader);
// console.log(tvaStader);

// const temp = [12, 18, 25, 8, 30, 15];

// const over15 = temp.filter(t => t > 15)

// const dubblera = over15.map(t => t * 2)

// console.log(over15);
// console.log(dubblera);

// const cities = ["stockholm", "Göteborg", "Malmö"]

// cities.push("Uppsala")

// const tvaStader = cities.slice(0, 2)

// console.log(cities);

// console.log(tvaStader);

// const temp = [12, 18, 25, 8, 30, 15]

// const over15 = temp.filter((t) => t > 15)

// console.log(over15);

// const dubblerade = over15.map((t) => t * 2)

// console.log(dubblerade);

// console.log(temp);

// const kund = {
//     namn: "Erik",
//     bestallningar: [
//             {
//             artiklar: [
//                 { titel: "Skärm", pris: 3000},
//                 { titel: "Mus", pris: 500}
//             ]
//         }
//     ]
// }

// const kundArtiklar = kund.bestallningar[0].artiklar

// const priset = kundArtiklar[1].pris
// console.log(priset);

// let totalPrice = 0
// kundArtiklar.forEach(artikel => {
//     totalPrice += artikel.pris
// })

// console.log(totalPrice);

// const foretag = [
//     {
//         avdelningar: [
//             {
//                 anstallda: [
//                     {namn: "Anna", roll: "Utvecklare"}
//                 ]
//             }
//         ]
//     }
// ]

// const anstalld = foretag[0].avdelningar[0].anstallda

// // console.log(anstalld[0].roll);

// const skrivUtAllaNamn = (anstalldaArray) => {
//     const anstalldaNamn = anstalldaArray.map(a => {
//         return a.namn
//     })

//     return anstalldaNamn
// }

// const skrivUtAllaNamnIgen = skrivUtAllaNamn(anstalld)

// console.log(skrivUtAllaNamnIgen);

// const soundifyApp = {
//   artister: [
//     {
//       namn: "Luna",
//       album: [
//         {
//           titel: "Midnight Sessions",
//           latar: [
//             { nr: 1, titel: "Night Walk", sekunder: 210 },
//             { nr: 2, titel: "Starlight", sekunder: 195 }
//           ]
//         }
//       ]
//     },
//     {
//       namn: "Daniel",
//       album: [
//         {
//           titel: "ETTERAYERGA",
//           latar: [
//             { nr: 1, titel: "yrtj", sekunder: 210 },
//             { nr: 2, titel: "grta", sekunder: 195 }
//           ]
//         }
//       ]
//     },
//     {
//       namn: "Philip",
//       album: [
//         {
//           titel: "gjhatdstzy",
//           latar: [
//             { nr: 1, titel: "Nrsdfffh", sekunder: 210 },
//             { nr: 2, titel: "Sgfho", sekunder: 195 }
//           ]
//         }
//       ]
//     }
//   ]
// };

// // Uppgift 1: Snabb-navigering
// // Hämta sekunder för "Starlight".

// const seconds = soundifyApp.artister[0].album[0].latar[1].sekunder

// console.log(seconds);

// // Uppgift 2: Räkna Speltid
// // Skriv funktion som räknar ihop total speltid i sekunder.

// const latar = soundifyApp.artister[0].album[0].latar

// const getSpeltid = ((latarArr) => {
//     let totalTime = 0
//     for (let i = 0; i < latarArr.length; i++) {
//         totalTime += latarArr[i].sekunder
//     }
//     return totalTime
// })

// const speltid = getSpeltid(latar)

// console.log(speltid);

// // Uppgift 3: Lägg till ny låt
// // Lägg till en ny låt i albumet.

// const newSong = { nr: 3, titel: "a", sekunder: 1234495 }

// latar.push(newSong)

// console.log(latar);

// // Uppgift 4: Sök Artist
// // Hämta album baserat på artistnamn.

// const artisterNamn = soundifyApp.artister

// const getAlbum = ((artist) => {
//     for (let name of artisterNamn) {
//         if (name.namn === artist) {
//             return name.album
//         }
//     }
//     return "Kunde inte hitta artist"
// })

// const album = getAlbum("Daniel")

// console.log(album);

// let braJson = '{"namn": "anna", "alder": 25}';
// let daligJson = "Detta är inte JSON";

// function parseUser(str) {
//   try {
//     const data = JSON.parse(str);
//     console.log("Success:", data);
//     return data;
//   } catch (error) {
//     console.error("Ogiltig data");
//     return "Ogiltig data"
//   } finally {
//     console.log("Det är OK");
//   }
// }

// console.log("Test 1:", parseUser(braJson));
// console.log("Test 2", parseUser(daligJson));

// // Case A:
// const scores = [10, 20, 30];
// scores.toLowerCase();

// Case B:
// const greetUser = () => {
//   console.log(welcomeMessage);
// };
// greetUser();

// // Case C:
// const profile = { firstName: "Leo" lastName: "Smith" };

// let allaAnvandera = [
//   { id: 1, namn: "Bo" },
//   { id: 2, namn: "Sara" },
// ];

// const sokID = (id, lista) => {
//   try {
//     const anvandare = lista.find((item) => {
//       return id === item.id;
//     });

//     if (!anvandare) {
//       throw new Error("Användare hittades inte");
//     }
//     return anvandare.namn;
//   } catch (error) {
//     return error.message;
//   }
// };

// const kor = sokID(2, allaAnvandera);
// console.log(kor);

// let braJson = '{"namn": "Anna", "alder": 25}'
// let daligJson = "Detta är inte JSON"

// const parseUser = (str) => {
//     try{
//         return JSON.parse(str)
//     } catch (error) {
//         return "Ogiltig data"
//     }

// }

// console.log("Test 1:", parseUser(braJson));
// console.log("Test 2:", parseUser(daligJson));

// let allaAnvandera = [
//     { id: 1, namn:"Bo"},
//     { id: 2, namn:"Sara"}
// ]

// const sokID = (id, lista) => {
//     try{
//         const found = lista.find( item => {
//             return item.id === id
//         })
//         if(found === undefined) {
//             throw new Error("Användare hittades inte!")
//         }
//         return found.namn
//     } catch (error) {
//         return error.message
//     }

// }

// const kor = sokID(1, allaAnvandera)
// console.log(kor);

// let allaAnvandera = [
//   { id: 1, namn: "Bo" },
//   { id: 2, namn: "Sara" },
// ];

// const sokID = (id, lista) => {
//   try {
//     const anvandare = lista.find((item) => id === item.id);
//     if (!anvandare) {
//       throw new Error("Användare hittades inte");
//     }
//     return anvandare.namn;
//   } catch (error) {
//     return error.message;
//   }
// };

// const kor = sokID(2, allaAnvandera);
// console.log(kor);

// const parseUserData = (jsonString) => {
//   // Write your try / catch / finally block here
//   try{
//     const parse = JSON.parse(jsonString)
//     return parse
//   } catch (err) {
//     console.error("failed to parse", err.message);
//     return null
//   }
//   finally{
//     console.log("JSON parsing finished.");

//   }
// };

// // Test calls:
// parseUserData('{"username": "alex99"}'); // Returns object
// parseUserData('Invalid JSON'); // Returns null

// const divide = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new TypeError("Both arguments must be numbers!");
//   }

//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }

//   return a / b;
// };

// try {
//   console.log(divide(15, 0));
// } catch (error) {
//   console.error(`${error.name}, ${error.message}`);
// } finally {
//     console.log("Färdig");
// }

// console.log(0.1 + 0.2);

// const divide = (a, b) => {
//     if (typeof a !== "number" || typeof b !== "number"){
//         throw new TypeError("Both arguments must be numbers!")
//     } if (b === 0) {
//         throw new   Error("Cannot divide by zero!")
//     }
//     return a / b
// }

// try {
//     console.log(divide(10, 2));
// } catch (error){
//     console.error(`${error.name} ${error.message}`)
// } finally {
//     console.log("Färdig");
// }

// const valkommen = (namn, titel = "Medlem") => {
//     return (`Välkommen ${namn} ${titel}`)
// }

// const kor = valkommen("Viktor")

// console.log(kor);

// const provPoang = [18, 22, 15, 28, 20];

// const rakenaMedel = (siffror) => {
//   let summa = 0;
//   for (const siffra of siffror) {
//     summa += siffra;
//   }
//   return summa / siffror.length;
// };

// const resultat = rakenaMedel(provPoang);
// console.log(resultat);

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = (kundArr) => {
//     const resultat = []
//     for (const kund of kundArr) {
//         if (kund.arVip === true) {
//            const nySumma = kund.kopSumma * 0.9
//            resultat.push({namn: kund.namn, nyttPris: nySumma})
//         }
//     }
//     return resultat
// }

// const kor = getVipBonus(kunder)
// console.log(kor);

// const firstName = "viktor";
// const age = 29
// const isStudent = true

// console.log("Hej jag heter " + firstName + " och jag är " + age + ". Är jag student? " + isStudent);

// const favoriteFoods = ["äpple", "banan", "päron"];

// console.log(favoriteFoods[0]);

// favoriteFoods.push("Apelsin");

// console.log(favoriteFoods.length);
// console.log(favoriteFoods);

// const car = {
//   brand: "Volvo",
//   model: "xc70",
//   year: 2009,
// };

// console.log(car);

// car.year = 1997

// console.log(car);

// const weather = "Regn"

// switch(weather) {
//     case "Sol":
//         console.log("Solglasögon");
//     break

//     case "Regn":
//         console.log("Regnjacka");
//     break

//     default:
//         console.log("Kolla vädret");

// }

// for (let i = 5; i >= 1; i--) {
//   if (i === 3) {
//     console.log("Halvvägs där");
//   } else {
//     console.log("Sekunder kvar " + i);
//   }
// }

// console.log("Liftoff");

// for (let i = 0; i <= 11; i++) {
//   console.log("Hej");
//   console.log("Hejdå");
// }

// const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"];

// for (const item of cart) {
//     if(item === "Godis"){
//         console.log("⚠️ Varning: Onödig vara! " + item);
//     } else {
//         console.log("Köp: " + item);

//     }
// }

// const valkommen = (namn, titel = "Gäst") => {
//     return `Hej ${titel} ${namn}`
// }

// const getValkommen = valkommen("viktor")

// console.log(getValkommen);

// const provPoang = [18, 22, 15, 28, 20]

// function rakenaMedel(arr) {
//     let totalSumma = 0
//     for(const num of arr) {
//         totalSumma += num
//     }
//     return totalSumma / arr.length
// }

// const medelvärde = rakenaMedel(provPoang)

// console.log("Medelpoäng på provet: " + medelvärde);

// const kunder = [
//   { namn: "Mia", arVip: true, kopSumma: 1200 },
//   { namn: "Sam", arVip: false, kopSumma: 450 },
//   { namn: "Robin", arVip: true, kopSumma: 800 }
// ];

// const getVipBonus = (kundArr) => {
//     const result = []
//     for (const kund of kundArr){
//         if(kund.arVip === true){
//             const nyPris = kund.kopSumma * 0.9
//             result.push({namn: kund.namn, nyttPris: nyPris})
//         }
//     }
//     return result
// }

// const vipRabatter = getVipBonus(kunder)

// console.log(vipRabatter);

// const versaler = (str) => str.toUpperCase()
// const citera = (str) => `"${str}"`

// const formateraText = (text, callback) => callback(text)

// console.log(formateraText("Jag heter Rille och är tolv år gammal", versaler));
// console.log(formateraText("Jag heter Rille och är tolv år gammal", citera));

// const tal = [4, 15, 8, 25, 2];

// const storeAn10 = tal.filter((n) => n > 10);
// const plus5 = storeAn10.map((n) => n + 5);

// console.log(storeAn10);
// console.log(plus5);

// const stader = ["Stockholm", "Göteborg", "Malmö"];

// stader.push("Uppsala")

// const tvaStader = stader.slice(0, 2)

// console.log(stader);
// console.log(tvaStader);

// const temp = [12, 18, 25, 8, 30, 15];

// const over15 = temp.filter((t) => t > 15);

// const dubblera = over15.map(t => t * 2)

// console.log(temp);

// console.log(over15);

// console.log(dubblera);

// const kund = {
//   namn: "Erik",
//   bestallningar: [
//     {
//       artiklar: [
//         { titel: "Skärm", pris: 3000 },
//         { titel: "Mus", pris: 500 },
//       ],
//     },
//   ],
// };

// const getPris = (arr) => {
//   const artikel = arr.bestallningar[0].artiklar;
//   let totalPris = 0;
//   for (const tid of artikel) {
//     totalPris += tid.pris;
//   }
//   return totalPris;
// };

// const artiklarPris = getPris(kund);

// console.log(artiklarPris);

// const kundArtiklar = kund.bestallningar[0].artiklar;

// let total = 0

// for (const a of kund.bestallningar[0].artiklar){
//     total += a.pris
// }

// console.log(total);

// const foretag = [
//   {
//     avdelningar: [
//       {
//         anstallda: [
//           { namn: "Anna", roll: "Utvecklare" },
//           { namn: "Joel", roll: "Utvecklare" },
//           { namn: "Daniel", roll: "Utvecklare" },
//           { namn: "Lennart", roll: "Utvecklare" },
//           { namn: "Joar", roll: "Utvecklare" },
//         ]
//       }
//     ]
//   }
// ];

// const anstallda = foretag[0].avdelningar[0].anstallda

// const allaNamn = (anstalldaNamn) => {
//   const namn = []
//   for (const n of anstalldaNamn){
//     namn.push(n.namn)
//   }
//   return namn
// }

// const namnetPaAnstallda = allaNamn(anstallda)

// console.log(namnetPaAnstallda);

// const soundifyApp = {
//   artister: [
//     {
//       namn: "Luna",
//       album: [
//         {
//           titel: "Midnight Sessions",
//           latar: [
//             { nr: 1, titel: "Night Walk", sekunder: 210 },
//             { nr: 2, titel: "Starlight", sekunder: 195 },
//           ],
//         },
//       ],
//     },
//   ],
// };

// 1.
// const playtime = soundifyApp.artister[0].album[0].latar

// const soundifyAppGetPlaytime = (searchPlaytime, song) => {
//     for (let t of searchPlaytime){
//         if(t.titel === song){
//             return t.sekunder
//         }
//     }
//     return "Kunde inte hitta låten"
// }

// const search = soundifyAppGetPlaytime(playtime, "Starlight")

// console.log(search);

// 2.
// const playtime = soundifyApp.artister[0].album[0].latar

// const soundifyAppGetPlaytime = (searchPlaytime) => {
//     let time = 0
//     for (const t of searchPlaytime){
//         time +=  t.sekunder
//     }
//     return time
// }

// const totalPlaytime = soundifyAppGetPlaytime(playtime)

// console.log(totalPlaytime);

// 3.

// const parseUserData = (jsonString) => {
//   try {
//     return JSON.parse(jsonString);
//   } catch (error) {
//     console.error("Failed to parse JSON:", error.message);
//     return null;
//   } finally {
//     console.log("JSON parsing finished.");
//   }
// };

// // Test calls:
// const log = parseUserData('{"username": "alex99", "year": "1998"}'); // Returns object
// const log2 = parseUserData("Invalid JSON"); // Returns null

// console.log(log);
// console.log(log2);

// const parseUserData = (jsonString) => {
//   try {
//     return JSON.parse(jsonString);
//   } catch (error) {
//     console.error("Nu blev det fel här " + error.message);
//     return null;
//   } finally {
//     console.log("Json parsing finished");
//   }
// };

// // Test calls:
// console.log(parseUserData('{"username": "alex99"}')); // Returns object
// console.log(parseUserData("Invalid JSON")); // Returns null

// const divide = (a, b) => {
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         throw new TypeError("Both arguments must be numbers!")
//     }
//     if(b === 0){
//         throw new Error("Cannot divide be zero!")
//     }
//     return a / b
// }

// try{
//    console.log(divide(10, 4))
// } catch (error) {
//     console.error(`[${error.name} ${error.message}]`);
// } finally{
//     console.log("Färdig");
// }

// const divide = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new TypeError("Both arguments must be numbers!");
//   }
//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }
//   return a / b;
// };

// try {
//   console.log(divide(10, 5));
// } catch (error) {
//   console.error(`${error.message} ${error.name}`);
// } finally {
//   console.log("Färdig");
// }

// const processPayment = (balance, amount) => {
//   if (
//     typeof balance !== "number" ||
//     typeof amount !== "number"  ||
//     Number.isNaN(balance) ||
//     Number.isNaN(amount)
//   ){
//     throw new Error("Belopp måste vara siffror")
//   }
//   if(amount <= 0){
//     throw new Error("Belopp får inte vara 0 eller mindre")
//   }
//   if(amount > balance){
//     throw new Error("amount får inte vara större än balance")
//   }
//   return balance - amount
// }

// console.log(processPayment(500, 100));
// console.log(processPayment(500, -100))
// console.log(processPayment(500, 900));
// console.log(processPayment("500", null));

// const divide = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new TypeError("Cannot divide by zero!");
//   }
//   if (b === 0) {
//     throw new Error("Cannot divide by 0");
//   }
//   return a / b;
// };

// try {
//   const siffror = divide(10, 2);
//   console.log("Det blev", siffror);
// } catch (error) {
//   console.error(error.message + error.name);
// } finally {
//   console.log("Klar");
// }

// const calculateTax = (price) => price * 0.25
// console.log(calculateTax("100kr"));

// const calculateTaxSafe = (price) => {
//   if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
//     throw new Error("Vill ha en positiv siffra");
//   }
//   return price * 0.25;
// };

// const calculate = calculateTaxSafe(10)

// console.log(calculate);

// const registerUser = (user) => {
//     if(!user || typeof user !== "object"){
//         return {ok: false, error: "Missing user object"}
//     }
//     if(!user.email?.includes("@")){
//         return {ok: false, error: "Invlaid email format"}
//     }
// const cleanEmail = user.email.trim().toLowerCase()
//     return {ok: true, email: cleanEmail}
// }

// const registerUser = (user) => {
//   if (!user || typeof user !== "object") {
//     return { ok: false, error: "Missing user object" };
//   }
//   if (!user.email?.includes("@")) {
//     return { ok: false, error: "Invalid email format" };
//   }
//   const cleanEmail = user.email.trim().toLowerCase();
//   return { ok: true, email: cleanEmail };
// };

// const anvandare = registerUser({mail: "Viktor@hotmail.com"})
// console.log(anvandare);

// const orderBtn = document.querySelector("#viktors-btn")

// console.log("1. Här fortsätter koden");

// orderBtn.addEventListener("click", () => {
//   console.log("3. Klickades");
// })

// console.log("2. Koden slutar");

// console.log("Apple");

// setTimeout(() => {
//   console.log("Banana");
// }, 1000)

// setTimeout(() => {
//   console.log("Cherry");
// }, 0)

// console.log("Date");

// const products = [
//   { name: "Banana", price: 100},
//   { name: "Apple", price: 20},
//   { name: "Ananas", price: 70},
//   { name: "Pear", price: 50},
// ];

// setTimeout(() => {
//   const cheapProducts = products.filter((p) => p.price < 100);
//   for(const product of cheapProducts){
//     console.log(`${product.name} ${product.price}`);
//   }
// }, 2000)

// const product = { name: "Mouse", stock: 10 };

// const a = product;
// const b = { ...product };

// a.stock += 5;
// b.stock += 2;

// console.log(product.stock);
// console.log(a.stock);
// console.log(b.stock);

// const product = { name: "Mouse", stock: 5 };

// const text = JSON.stringify(product);
// const result = JSON.parse(text);

// console.log(text);
// console.log(result);

// const text = {name: "trasig json"};

// textbit = JSON.parse(text)

// const coffeePromise = "latte"

// coffeePromise
// .then((coffee) => {
//   console.log("drick kaffe");
// })
// .catch(error => {
//   console.log("finns inget kaffe");
// })
// .finally(() => {
//   console.log("Klar");
// })

// const start = Date.now()

// setTimeout(() => console.log("A"), 100)
// setTimeout(() => {
//   console.log("B")
//   setTimeout(() => console.log("C"), 0)  
// }, 50)
// setTimeout(() => console.log("D"), 0)

// while (Date.now() - start < 200) {}

// console.log("E");

// const showProfile = (userId) => {
//   getUser(userId)
//     .then((user) => getBadges(user.name))
//     .then((badges) => {
//       console.log("Badges:", badges);
//     })
//     .catch((error) => {
//       console.error("Failed:",
//         error.massege)
//     })
// }

// const showProfile = async (userId) => {
//   try{
//   const user = await getUser(userId)
//   const badges = await getBadges(user.name)

//   console.log("Badges:", badges);
    
//   }catch(error){
//       console.error("Failed:",
//         error.massege)
//     }
// }


// const stepOne = async () => "Step 1 OK";
// const stepTwo = async () => {
//   throw new Error("Database timeout");
// };

// const runApp = async () => {
//   try {
//     const res1 = await stepOne();
//     console.log(res1);
//     const res2 = await stepTwo();
//     console.log(res2);
//   } catch (error) {
//     console.log("Caught:", error.message);
//   } finally {
//     console.log("Done!");
//   }
// };

// runApp();

// const showProfile = async (userId) => {
//   try{
//     const user = await getUser(userId)
//     const badges = await getBadges(user.name)

//     console.log("Badges:", badges);
//   }catch(error){
//       console.error("Failed:", error.message);
//     }
// };

