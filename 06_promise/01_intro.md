## 개요

- 코드를 연속으로 처리(실행)하지 않고 중간에 흐름이 끊어졌다가 연결된 코드를 처리할 수 있는 환경이 되었을 때 실행
- DOM스펙 -> JavaScript 스펙으로 전환


## 상태
- 상태는 세가지 : pending, settled(fulfilled, rejected)
- 지금 호출하지 않고 끝까지 실행한 후 호출됨.


## then()
- 첫번째 파라미터 : 성공 이벤트 핸들러 , 두번째 : 실패 이벤트 핸들러
- 다수의 파라미터를 주려면, 배열 혹은 오브젝트

## then()의 리턴
- return 값을 [[PromiseValue]] 에 설정하고 값을 다음 then()의 파라미터 값으로 넘겨준다. 


## finally()
- ES2018 부터 지원
- then(),catch()의 같은 코드를 finally


## thenable
- Promise.resolve() 파라미터에 then()을 작성한 형태
Promise.resolve({then(resolve, reject){
  resolve([1,2])
);


## reject()
- reject 사유

## race()
resolve(), reject()에 관계없이 처음 한번만 then()을 실행하고 더 이상 실행하지 않는다.
