const fs = require("fs");

let data;

try {
  data = fs.readFileSync("file.txt", "utf8");
} catch (error) {
  console.log({ error: error.stack });
}

const part_one = nums => {
  return nums
    .split("\n")
    .map(num => parseInt(num))
    .reduce((acc, curr) => Math.floor(curr / 3) - 2 + acc, 0);
};

console.log(part_one(data));

const part_two = nums => {
  const consolidated = nums
    .split("\n")
    .map(num => parseInt(num))
    .map(initMass => {
      let totalFuel = 0;
      let remainingMass = initMass;

      while (remainingMass > 0) {
        const fuel = Math.floor(remainingMass / 3) - 2;

        if (fuel <= 0) {
          break;
        }

        totalFuel += fuel;
        remainingMass = fuel;
      }

      return totalFuel;
    });

  return consolidated.reduce((acc, curr) => acc + curr, 0);
};

console.log(part_two(data));
