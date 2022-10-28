{
  /**
   * encapsulations(캡슐화)
   * 커피 콩 개수를 -32개로 설정할 수가 있을까요?
   * 절대 불가능하죠.
   * 그래서 invalid한 상황을 막기 위해 encapsulations를 하는 거에요 !
   *
   * public, private, protected로 정보를 은닉할 수 있어요
   * public => 일반적으로 멤버에 아무 것도 쓰지 않으면 설정되어 있음
   * protected => 자식 클래스에서만 접근이 가능함
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    /**
     * 외부에서 마음대로 샷당 커피 콩의 개수를 설정할 수 있는 것은 위험합니다.
     * 그래서 외부에서 접근하지 못하도록, 재설정하지 못하도록 private를 이용하는 것 !
     */
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    //constructor를 private로 두어 new Class() 로 생성하는 것이 아닌 makeCoffee 함수를 사용해서 생성하도록 유도
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffee(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // 외부에서 현재 coffeeBeans를 수정할 수 없게 private로 해놨기 때문에
    // fillCoffeeBeans method를 사용하여 채울 수 밖에 없음
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMachine.makeCoffee(30);
  maker.fillCoffeeBeans(32);
  console.log(maker);

  class User {
    // fullName: string; -> fullName이 변경되지 않기 때문
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
  // Ellie로 바꿨는데도 Steve Jobs가 두 번 나옴
  console.log(user.fullName);
}
