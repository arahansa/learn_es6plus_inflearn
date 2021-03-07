# 개요

- async/await 개요


## async 함수
- 비동기 함수를 뜻하며 AsyncFunction 오브젝트를 생성하여 반환
- async 함수가 호출되면 Promise 인스턴스를 반환
- async 함수의 return 값을 처리하려면 then() 을 함수호출에 연결하여 작성
- async 함수에서 throw 가 발생하면 reject()로 처리

## await 
- 표현식이 Promise 오브젝트이면 resolve 의 파라미터값을 반환
- 표현식이 Promise 오브젝트가 아니면 표현식의 평가결과를 반환

## await
- 에러가 발생했을 때 try-catch 형태
- await 에 catch를 연결한 형태
- Promise 가 아닌 값을 발생한 경우는? 

## for-await-of
- 일반적으로 비동기 반복에 사용


## Symbol.asyncIterator
- for-await-of 에 대응하는 Well-known Symbol
