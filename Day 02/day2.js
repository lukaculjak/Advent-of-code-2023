import fs from "fs";

const data = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

let jedanGame;
let index = 1;
let suma = 0;

let broj;
let boja;

let mak;

let crvenaNajveca = 0;
let plavaNajveca = 0;
let zelenaNajveca = 0;

let sumaNajvecih = 0;

let sumaSvih = 0;

function reset() {}

data.forEach((d) => {
  jedanGame = d
    .split(",")
    .join(",")
    .replaceAll(";", ",")
    .replace(`Game ${index}:`, "")
    .split(",");

  jedanGame.forEach((game) => {
    broj = Number(game.slice(1, 3));
    boja = game.slice(3, 6).trim();

    if (boja.startsWith("r")) {
      if (broj > crvenaNajveca) {
        crvenaNajveca = broj;
      } else {
        crvenaNajveca = crvenaNajveca;
      }
    }
    console.log(crvenaNajveca);

    if (boja.startsWith("b")) {
      if (broj > plavaNajveca) {
        plavaNajveca = broj;
      }
    }

    if (boja.startsWith("g")) {
      if (broj > zelenaNajveca) {
        zelenaNajveca = broj;
      }
    }
  });

  sumaNajvecih = crvenaNajveca * plavaNajveca * zelenaNajveca;
  sumaSvih += sumaNajvecih;

  crvenaNajveca = 0;
  plavaNajveca = 0;
  zelenaNajveca = 0;
  sumaNajvecih = 0;

  index++;
});

console.log(sumaSvih);

// const maxCount = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };

// function partOne(file) {
//   const lines = fs.readFileSync(file, "utf-8").trim().split("\n");
//   return lines.map((line) => {
//     return line
//       .split(": ")[1]
//       .split("; ")
//       .map((set) => {
//         const pulls = set.split(", ");
//         return pulls.every((pull) => {
//           const [count, color] = pull.split(" ");
//           return maxCount[color] >= Number(count);
//         });
//       })
//       .every((p) => p);
//   });
// }
