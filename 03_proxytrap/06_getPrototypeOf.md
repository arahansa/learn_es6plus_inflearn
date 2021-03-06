## GetProtoTypeOf

- target 의 프로토타입을 반환
- target 이 확장불가이더라도 prototype 을 반환

## 트랩 준수사항
- target 이 확장 불가일 때, Object.getPrototypeOf(target) 와 같은 값을 반환해야함.

## getPrototypeOf() 트랩이 호출되는 형태
- Object.getPrototypeOf()
- __proto__
- instanceof
- Object.prototype.isPrototypeOf()
- Reflect.getPrototypeOf()

## setPrototypeOf()

### Object.setPrototypeOf() 의 특징
- target 의 __proto__ 에 두번째 파라미터를 설정
- Object.setPrototypeOf() 의 트랩

### 트랩 준수사항
- target 이 확장불가일 때
- 두번째 파라미터의 prototype과 Object.getPrototypeOf(target)로 구한 것과 같아야 합니다.

## setPrototypeOf() 트랩 호출
- Object.setPrototypeOf()
- Reflect.setPrototypeOf()
