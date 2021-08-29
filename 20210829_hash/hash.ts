Object.prototype.field = 'proto';

const obj = {
  foo: 'bar',
  hoge: 'fuga',
};

console.dir(obj);

obj.piyo = 'piyopiyo';

console.dir(obj);

delete obj.foo;

console.dir(obj);

console.log('hoge' in obj ? "found" : "not found");
console.log('unknown' in obj ? "found" : "not found");

for (let key in obj) {
  console.log(key + ' => ' + obj[key]);
}
/*
hoge => fuga
piyo => piyopiyo
field => proto  <----- look
*/
console.log('-----');

Object.keys(obj).forEach(key => {
  console.log(key + ' => ' + obj[key]);
});
console.log('-----');

for (let key of Object.keys(obj)) {
  console.log(key + ' => ' + obj[key]);
}
console.log('-----');

console.log(typeof Object.keys(obj));

