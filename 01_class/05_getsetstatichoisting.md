# getter, setter, static 메서드

## getter

- 메소드를 호출하여 값을 구한다.


## setter

- 메소드를 호출하여 값을 설정함


## static

- syntax : static name () {...}
- static 메소드 작성방법
- static 메소드의 구조적 특징
-- prototype 이 아닌 클래스에 연결되며
-- 생성한 인스턴스에 할당되지 않습니다.

- 코드 설명

1. 메소드 이름 앞에 static 을 작성. 정적 메소드라고 부른다.
2. Point.getPoint() . Point 클래스 이름에 이어서 getPoint() 를 작성.
그러면 getPoint() 가 호출됨.
3. 인스턴스의 메소드로 호출하지 않습니다.
4. 호출하는 방법이 다므므로 ES5 에서는 함수와 메소드를 구분했지만,
ES6 에서는 static 메소드도 구분해야 합니다.
5. 클래스만 static 을 사용할 수 없습니다.


## 호이스팅

- 클래스는 호이스팅되지 않습니다. const, let 변수처럼 class 키워드가 작성된 위치에서 클래스 이름 선언과 오브젝트 생성을 동시에 하기 때문
- const obj = Point; 코드 아래에 Point 클래스가 있지만 Point 를 참조하지 못하므로 에러 발생
- Point.getPoint(); 코드 앞에서 Point 클래스를 오브젝트로 생성하므로 getPoint() 를 호출할 수 있다.


## new.target

- new.target 프로퍼티는 함수 또는 생성자가 new 연산자로 호출된 여부를 반환
- new 연산자로 constructor를 호출하면 new.target 은 constructor 를 참조
- 함수로 호출하면 undefined 반환
