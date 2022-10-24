{
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // function jsFetchNum(id: string): Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    function printName(firstName: string, lastName?: string): void {
        console.log(firstName);
        console.log(lastName);
    }
    printName("Steve", "jobs");
    printName("ellie");
    printName("Anna", undefined);

    function printMessage(message: string = "default message") {
        console.log(message);
    }
    printMessage();

    function addNumbers(...number: number[]): number {
        return number.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));
}
