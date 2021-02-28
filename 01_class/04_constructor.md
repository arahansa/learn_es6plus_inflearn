# Constructor

## constructor

- 생성자로 인스턴스를 생성하고 초기화한다. 
- ES6 부터 작성가능


## 인스턴스 생성방법
1. new 연산자가 Point 클래스 오브젝트의 constructor를 호출
파라미터값인 100을 constructor 로 넘긴다. 
   
2. constructor(point){} point 파라미터값은 100이 된다. 

3. 엔진은 빈 오브젝트 {}를 생성. 이것이 인스턴스

4. 인스턴스에 프로퍼티 이름과 값을 설정하여 인스턴스 구조를 만든다.
__proto__ , __proto__.constructor 등
   
5. constructor 블록의 코드를 실행

6. this.point = point;
this 가 생성한 인스턴스를 참조합니다. 인스턴스{} 를 먼저 생성하므로
   this 로 참조할 수 있습니다.
   
7. point 는 인스턴스 프로퍼티가 됩니다. 
point 파라미터 값이 100 이므로 point  프로퍼티 값은 100 이 됩니다. 
   
8. 생성한 인스턴스를 반환합니다. 



## constructor 미작성

- 미작성한 상태에서 new 연산자로 인스턴스를 생성하면 prototype 에 연결된 constructor 가 호출됨

1. 엔진이 class 키워드를 만나 Point 클래스 오브젝트를 생성할 때 constructor에서
클래스 전체를 참조하도록 환경을 만든다.
   
2. constructor 를 작성하지 않으면 prototype.constructor 를 사용하므로
인스턴스를 생성할 수 있지만 인스턴스에 초깃값을 설정할 수 없다. 
   
3. 클래스에 constructor 를 작성하면 prototype.constructor 를 오버라이드하게 됨.

## constructor 반환

- constructor 에서 return 을 작성하지 않으면 생성한 인스턴스 반환
- Number, String 을 반환하면 이를 무시하고 인스턴스를 반환. 
- Object를 반환하면 인스턴스를 반환하지 않고 Object를 반환
