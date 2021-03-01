# set()

## set()

- 프로퍼티를 설정하는 트랩
- target 또는 receiver 에 프로퍼티를 설정


## set() 트랩 호출
- 아래처럼 값을 할당하면 set() 트랩이 호출됩니다.
- 프로퍼티에 값을 할당할 때
- Object.create(proxy, {프로퍼티})
- Reflect.set()
- set() 트랩에서 target 에 값을 설정해야 합니다.

## set() 트랩 준수사항

- 트랩 준수사항
- 트랩에서 준수사항을 지키지 않으면 에러가 발생되거나 처리되지 않습니다 
- target 의 프로퍼티가 data 디스크립터일 때
  :: writable false 또는 configurable false 이면 프로퍼티 값을 설정할 수 없다.
- target 의 프로퍼티가 악세서 디스크립터일떄
  :: Configurable false 이면 프로퍼티 값을 설정할 수가 없다.
