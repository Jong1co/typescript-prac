{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * interface를 통한 추상화 또한 가능
   * class 내부에 여러 함수를 구현해 놓고, 생성한 후
   * const maker:CoffeeMaker = CoffeeMachine.makeMachine(30) 로 구현하게 되면
   * maker는 CoffeeMaker interface에 구현되어 있는 makeCoffee밖에 접근하지 못함
   */
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  /**
   * grindBeans, preheat, extract등 함수를 추가했을 때
   * 아래에서 maker. 을 입력하면 모든 함수가 전부 등장한다.
   * 그렇게 되면 어떤 함수를 사용해야할지 모를 수 있기 때문에 추상화를 진행시켜 주는 것 !
   * 그 중 하나가 정보은닉(캡슐화)를 통해서 하는 것도 추상화의 일종임
   * private를 사용하면 외부에서 접근이 불가능 하기 때문에 추상화 되는 것
   */
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating..");
    }

    private extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: false,
      };
    }

    clean(): void {
      console.log("cleaning...!");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMaker = CoffeeMachine.makeMachine(30);
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(40);
  maker2.clean();
}
