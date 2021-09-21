


const OK      = 0b0001
const READY   = 0b0010
const STOP    = 0b0100

for (let status of [OK, READY, STOP]) {
  if (status & OK) {
    console.log('OK');
  }
  if (status & READY) {
    console.log('READY');
  }
  if (status & STOP) {
    console.log('STOP');
  }
}

console.log(OK);
console.log(String(OK));

