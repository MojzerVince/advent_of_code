const fs = require("fs");

const fileContent = fs.readFileSync("day1/input.txt", "utf-8");
const commands = fileContent.split("\n");
//console.log(fileContent);
//console.log(commands);

let dialPos = 50;
let counter = 0;
//ha van 100 vagy nagyobb ditance megnézhetjük kell-e rekurzivitás
commands.forEach((c) => {
  let num = parseInt(c.slice(1)); //slice -> stringből kivágja az első karaktert
  num = num % 100;
  changeDial(c[0], num);
});
console.log(`A számláló értéke: ${counter}`);

function changeDial(direction, distance) {
  if (!["L", "R"].includes(direction)) {
    console.log("Invalid direction");
    console.log(direction);
    return;
  }
  if (direction === "L") {
    dialPos -= distance;
    if (dialPos < 0) {
      dialPos = 100 - Math.abs(dialPos);
    }
  } else {
    dialPos += distance;
    if (dialPos > 99) {
      dialPos = dialPos - 100;
    }
  }
  if (dialPos === 0) {
    counter++;
  }
}
