# Handler, Trap

## target

- target은 proxy 대상 오브젝트, array, object 등을 사용가능
- const obj = new Proxy(target, {}) 형태에서 
- 첫번째 파라미터에  target을 작성. 이렇게 Proxy 인스턴스를 생성하므로
proxy 인스턴스와 target 이 연결
  
## trap

- trap : OS 에서 사용하는 용어로 실행중인 프로그램에서 이상이 발생했을 때 실행을 중단하고 사전에 정의된 제어로 전환
- 가운데 사람이 밥을 받아 자신앞에 있는 수저를 같이 건네준다면 Proxy  에 수저를 건네주는 코드가 필요
- const handler = {}
