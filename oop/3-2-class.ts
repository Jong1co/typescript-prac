{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT: number = 7; //메모리 낭비 방지를 위해 class level로 만듬
    coffeeBeans: number = 0; //instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffee(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
  console.log(maker);
}
