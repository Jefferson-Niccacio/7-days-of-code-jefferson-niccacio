const area = prompt("Para qual área você pretende ir, Front-End ou Back-End? ");
let lingProg = "";

if (area.toLowerCase() === "front-end") {
    lingProg = prompt("Você quer aprender React ou Vue?");
} else if (area.toLowerCase() === "back-end") {
    lingProg = prompt("Você quer aprender C# ou Java?");
} else {
    alert("Escolha entre as duas opções");
}

const espFull = prompt("Para se especializar em uma área digite 1, para ser FullStack digite 2");
if (espFull == 1) {
    alert(`Para se especializar em ${area}, se aprofunde em ${lingProg}`);
} else if (espFull == 2) {
    alert("Para ser Full Stack, aprenda novas linguagens!");
} else {
    alert("Insira uma das opções.");
}

let continuar = prompt("Existem mais tecnologias que você gostaria de se especializar? Digite 'sim' para continuar:");

while (continuar.toLowerCase() === "sim") {
    let maisTec = prompt("Diga uma:");
    alert(`${maisTec} pode ser usada de várias formas!`);
    continuar = prompt("Você tem outro interesse? Digite 'sim' para continuar:");
}