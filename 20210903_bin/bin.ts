

console.log(0b0001);
console.log({n: 0b0001});

const l = [0b0, 0b1, 0b10, 0b11];

for (n of l) {
  console.log({n});
}

console.log(0b0 === 0);
console.log(0b1 === 1);
console.log(0b10 === 2);

console.log(String(0b10));

