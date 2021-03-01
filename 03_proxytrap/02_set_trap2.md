
# set() 의 4번째 파라미터

- set() 트랩의 4번째 파라미터에  Proxy 인스턴스가 설정됨.

- const obj = Object.create(proxy, {})

- Object.create() 와 인스턴스 구조

# set() 과 this
- set() 트랩에서 this 는 handler 오브젝트를 참조한다.

