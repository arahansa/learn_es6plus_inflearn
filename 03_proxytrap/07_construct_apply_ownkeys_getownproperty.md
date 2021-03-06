# construct(), apply(), ownKeys(), getOwnPropertyDescriptor() 트랩

## constructor
- new 연산자의 트랩
- Reflect.construct()

## apply
- 함수 호출 트랩
- 파라미터 : target, 호출할 함수 

## apply 트랩 호출 형태
- Function.prototype.apply()
- Function.prototype.call()
- proxy(...args): Proxy 인스턴스
- Reflect.apply()


## ownKeys() 
- Object.getOwnPropertyNames() 의 트랩
- target 의 모든 key 를 배열반환

## 호출형태
- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- Object.keys()
- Reflect.ownKeys()

## getOwnPropertyDescriptor()
- 파라미터 (target, 대상오브젝트)
- key, 프로퍼티 key

- getOwnPropertyDescriptor() 트랩이 호출되는 형태
- Object.getOwnPropertyDescriptor()
- Reflect.getOwnPropertyDescriptor()


