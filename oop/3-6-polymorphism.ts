{
  /**
   * polymorphism(다형성) 의 장점
   * 같은 부모 클래스를 받아왔기 때문에 같은 api를 사용해 재사용성을 높일 수 있음
   * 그래서 아래 forEach를 돌려서 makeCoffee를 실행시켰을 때
   * 서로 반환하는 값은 다르지만 에러가 발생하지 않고 사용할 수 있는 것 !
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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
  class CaffeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log("Steaming some milk");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }
  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  const machines = [
    new CoffeeMachine(16),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("---------------");
    machine.makeCoffee(2);
  });
}
