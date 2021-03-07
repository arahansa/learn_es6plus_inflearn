## get

- target의 프로퍼티 값을 반환


## set
- target 대상 오브젝트
- key
- value,
- receiver (선택)
- true, false 반환

## has
- param : target, key
- return : true , false (존재 여부에 따라)
- 상속받은 prototype, __proto__ 도 검색
- 핸들러의 has() 트랩 호출

## deleteProperty()
- target 대상 오브젝트 keys, property 키
- 인덱스로 배열 엘리먼트 삭제 가능하지만, 인덱스를 당기진 않는다. 

