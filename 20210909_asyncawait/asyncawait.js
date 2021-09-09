
async function getRawValue() {
  console.log(1, '---- getRawValue()');
  return 1;
}

async function getDoubleValueBug() {
  console.log('---- getDoubleValueBug()');
  const raw = getRawValue();
  console.log(2, raw);

  return raw * 2;
}

async function getDoubleValueAwait() {
  console.log(3, '---- getDoubleValueAwait()');
  const raw = await getRawValue();
  console.log(3, raw);

  return raw * 2;
}

async function getDoubleValuePromise() {
  console.log(4, '---- getDoubleValuePromise()');
  const raw = getRawValue();
  console.log(4, raw);

  return raw.then(v => v * 3);
}

(async () => {
  console.log(5, getRawValue());
  console.log(5, '-------');
  console.log(5, getDoubleValueBug());
  console.log(5, '-------');
  const doubleValue = getDoubleValueAwait();
  console.log(5, doubleValue);
  console.log(5, '-------');
  const promisedDoubleValue = getDoubleValuePromise();
  console.log(5, promisedDoubleValue);
  console.log(5, '-------');
  
  console.log(5, '======');
  //doubleValue.then(v => console.log(5, v));
  //promisedDoubleValue.then(v => console.log(5, v));
})();


