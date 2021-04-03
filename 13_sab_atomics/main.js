

const main = new Worker("worker.js");
// 10 바이트의 SAB 인스턴스를 생성
const sab = new SharedArrayBuffer(10);
// SAB를 사용하여서 Int16Array 인스턴스를 생성
const obj = new Int16Array(sab);
obj.set([10]);
console.log("포스트 메시지 이전", obj);
main.postMessage(sab);
obj[1] = 20;

main.onmessage = (event) => {
 obj.forEach((value) => { console.log("obj foreach 안에서 ",value);});
}
