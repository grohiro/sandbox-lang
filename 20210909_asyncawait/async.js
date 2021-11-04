
function hello(msg) {
  console.log(msg)
  return "Hello: " + msg;
}

function async_hello(msg) {
  console.log(msg)
  return Promise.resolve("Hello: " + msg);
}


main();

function main() {
  (async () => {
    const res1 = hello('world');
    console.log(res1);

    const res2 = await hello('await world');
    console.log(res2);

    const res3 = hello('world');
    console.log(res3);

    const ares1 = async_hello('world');
    console.log(ares1);

    const ares2 = await hello('await world');
    console.log(ares2);

    const ares3 = hello('world');
    console.log(ares3);
  })();

}
