{
  type CoffeeCup = {
    shots: number;
    hasMilk: false;
  };

  class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT: number = 7; // static으로 class level로 만든 것임
    coffeeBeans: number = 0; // 이건 instance level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    // 커피를 만들었을 때 샷 몇 번 넣을지 정해서 커피콩의 개수가 더 많아야 실행되는 메서드
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

  const maker = new CoffeeMachine(32);
  console.log(maker);
  maker.makeCoffee(2);
  console.log(maker);
}
