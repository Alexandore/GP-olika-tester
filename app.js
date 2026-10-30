// Jobba med Arrayer

const bilar = ["bmw", "audi", "volvo"]; //array lista

console.log(bilar); // loggar listan i devtools

bilar.push("mercedes"); // pushar in nya bilen i array listan

console.log(bilar) // loggar den uppdaterade listan i devtools

console.log (bilar.length); // skriver längden på arrayen

// test arrayer
const frukt = ["banan", "äpple", "kiwi"];

console.log(frukt);
console.log(frukt[1]);

frukt.push("granatäpple");
frukt[1] = "papuqe"

console.log(frukt);


// Bygg ett objekt

const car = { brand: "bmw", model: "m5", year: 2017 };

console.log(car.brand)

car.year = 2025;
console.log(car);

// test objekt

const djur = { ras: "katt", older: 7, namn: "albiona"};

console.log(djur)

djur.older = 20;

console.log(djur);

console.log(djur.namn);

// Väderassistenten

const weather = "snö";

switch(weather) {
    case "regn":
        console.log("Ta med paraply");
        break;
    case "sol":
        console.log("Du kan ha på dig shorts");
        break;
    case "snö":
        console.log("Ta på dig vinterjacka");
        break;
        default:
            console.log("Kolla väderappen igen");
}

// test Väderassistenten

const button = "replay"

switch(button) {
    case "replay":
    console.log("kör om koden");
    break;
    case "paus":
        console.log("pausar koden");
        break;
    default:
        console.log("testa knappen igen");
}

// Betygsräknare