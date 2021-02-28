# BuildIn 오브젝트 상속 등등

- 빌트인 오브젝트를 상속받을 수 있다. 
- 인스턴스가 빌트인 오브젝트의 특징을 갖게 되며, this로 빌트인 오브젝트에 접근할 수 있다. 
- extends 키워드로 구현

## Object 상속

- Object 는 클래스가 아니므로 다른 Object 를 상속받을 수 없지만
- 상속받으면 __proto__ 구조가 되는 것을 활용하여 상속을 구현할 수 있습니다.

## Object 상속
- Object.setPrototypeOf() 으로 __proto__ 구조를 만든다.
