# super, constructor 호출

## super 키워드
- 슈퍼 클래스와 서브 클래스에 같은 이름의 메소드가 있으면 서브 클래스의 메소드가 호출
- super 키워드를 사용하여 슈퍼 클래스의 메소드를 호출할 수 있다.


## constructor 호출
- 서브와 슈퍼에 constructor 를 모두 작성하지 않으면 디폴트 contructor 가 호출됨.
- 서브에 작성하지 않고 슈퍼에만 작성하면 파라미터값을 슈퍼로 넘겨줌
- 서브에는 작성하고 슈퍼에 작성하지않으면 에러 발생
- 서브와 슈퍼에 모두 constructor 를 모두 작성하면 서브에서 super()로 호출

