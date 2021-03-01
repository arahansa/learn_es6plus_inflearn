

# get()

## 
- 값을 구하는 트랩
- get() 트랩이 호출되면 파라미터 값을 설정
- get() 트랩 활용 형태 : 조건 체크
- get() 트랩 활용 형태 : 데이터 변경


## get() 트랩 호출
- get()트랩이 호출되는 형태 
- proxy[key]
- Object.create(proxy, {프로퍼티})
- Reflect.get()


## get 트랩 준수사항
- target 의 프로퍼티가 data 디스크립터일때 writable : false 똔느 configurable : false 이면 
반환값을 변경하여 return 불가
- target 의 프로퍼티가 악세서 디스크립터일때 configuratble false 이면 반환값을 변경하여 return 불가


