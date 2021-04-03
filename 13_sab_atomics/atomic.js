
const sab = new SharedArrayBuffer(10);
const obj = new Int16Array(sab);
console.log(Atomics.store(obj, 0, 100));

