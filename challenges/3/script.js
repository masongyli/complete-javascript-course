const dolphins1 = Number(prompt("Enter Dlphins` first score."));
const dolphins2 = Number(prompt("Enter Dlphins` second score."));
const dolphins3 = Number(prompt("Enter Dlphins` third score."));
const dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;

const Koalas1 = Number(prompt("Enter Koalas' first score."));
const Koalas2 = Number(prompt("Enter Koalas' second score."));
const Koalas3 = Number(prompt("Enter Koalas' third score."));
const KoalasAvg = (Koalas1 + Koalas2 + Koalas3) / 3;

if (dolphinsAvg < 100 && KoalasAvg < 100) {
    console.log("No one wins.");
} else if (dolphinsAvg > KoalasAvg) {
    console.log("Dolphins wins!");
} else if (dolphinsAvg < KoalasAvg) {
    console.log("Koalas wins!");
} else {
    console.log("Draw!");
}