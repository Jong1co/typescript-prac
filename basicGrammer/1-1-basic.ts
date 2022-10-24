{
    /**
     *
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array, ...
     */

    //number
    const num: number = 0;

    //string
    const str: string = "hello";

    //boolean
    const bool: boolean = false;

    //undefined
    let name: string | undefined;
    name = "hello";
    name = undefined;
    function find(): number | undefined {
        return undefined;
    }

    //null
    let person: string | null;

    //unknown => 라이브러리에서 리턴하는게 뭔지 모를 때 가끔 사용 거의 사용하지마
    let notSure: unknown = 0;
    notSure = "he";
    notSure = true;

    //any
    let anything: any = 0;
    anything = "hello";

    // void : 아무 것도 리턴하지 않을 때 => 생략 가능
    function print(): void {
        console.log("hello");
        return;
    }

    // never : 아무 것도 리턴하지 않을 때 void는 빈거 리턴 이거는 아무 것도 리턴 X
    function throwError(message: string): never {
        //message -> server (log)
        throw new Error(message);
    }

    //obj
    let obj: object; // 똥
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: "ellie" });
}
