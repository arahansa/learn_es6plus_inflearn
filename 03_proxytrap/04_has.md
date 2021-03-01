# has

## in 연산자의 트랩
- target 에 key 의 존재 여부를 반환
- 프로퍼티 값을 true/false 변환하여 반환
- 두번째 파라미터에 Symbol 가능

# has() 트랩 호출되는 형태
- key in proxy
- key in Object.create(proxy, {})
- Reflect.has()

# deleteProperty()

- delete 연산자의 트랩
- 프로퍼티가 없어도 true 를 반환하므로 코드처럼 조건을 체크하여 true/false 를 반환하면 완전하게 처리

