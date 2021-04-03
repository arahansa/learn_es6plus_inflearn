self.onmessage = (event) => {
 console.log("워커에서 온 메시지", event.data);
 const obj = new Int16Array(event.data);
 console.log("워커에서 obj :", obj);
 obj[2] = 30;
 console.log("워커 안의 데이터 :", event.data);
 self.postMessage(event.data);
};

