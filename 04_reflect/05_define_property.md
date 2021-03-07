## defineProperty

- target, key, descriptor (추가/변경할 descriptor)
- Reflect 에서는 true/false 리턴이 다르다.
- Object.defineProperty 는 try, catch (Object, TypeError)


## preventExtensions() 
- target 에 프로퍼티 추가 금지를 설정
- Reflect.preventExtensions() 형태

## isExtensible()
- 프로퍼티 추가 가능 여부에 따라 true/false
- Object.seal(), Object.freeze(), Object.preventExtensions() 실행뒤는 false

## getPrototypeOf()
- target.__proto__ 를 반환

## setPrototypeOf()
- target.__proto__ 에 prototype 에 연결된 메소드를 설정

## ownKeys()
- 파람 : target (대상오브젝트)
- 타깃 : Array : 프로퍼티 키

## getOwnPropertyDescriptor()
- 파라미터 : target (대상 오브젝트), keys (프로퍼티키)
- 반환 : 디스크립터 또는 undefined

