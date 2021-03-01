

## define Property
- Object.defineProperty
- target 프로퍼티를 추가하거나 속성값을 변경

## defineProperty() 트랩 호출
- Object.defineProperty() 
- Reflect.defineProperty()

## defineProperty 준수사항
- strict mode 일때 - 트랩에서 false 를 반환하면 TypeError
- target 오브젝트가 확장 불가이면  프로퍼티를 추가할 수 없습니다. 
- Object.preventExtendsions(target);
- target 오브젝트의 프로퍼티가 [[writable]] : false 또는 [[Configurable]] : false 이면 프로퍼티 값을 변경할 수 없습니다. 


## preventExtensiions() 트랩 호출
- Object.preventExtensiions
- Reflect.preventExtensiions

## preventExtensiions() 트랩 준수사항
- target 오브젝트가 확장 불가일 때
- 즉 Object.isExtensible(target) 결과가 false 일 때
- false 를 반환하면 TypeError
- true 만 반환할 수 있습니다


## isExtensible()
- target 의 확장 가능 여부를 판단한다.
- Object.seal(), Object.freeze(), Object.preventExtensions(), 
- Reflect.preventExtensions()

## isExtensible() 호출되는 형태
- Object.isExtensible
- Reflect.isExtensible

## isExtensible() 트랩 준수사항
- 같은 값을 반환해야함. 같지 않으면 TypeError
