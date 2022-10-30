// interface IStack {
//   readonly size: number;
//   push(value: string): void;
//   pop(): string;
// }

// type StackNode = {
//   readonly value: string;
//   readonly next?: StackNode;
// };

// class Stack implements IStack {
//   private _size: number = 0;
//   private head?: StackNode;
//   get size(): number {
//     return this._size;
//   }
//   push(value: string): void {
//     const node: StackNode = { value, next: this.head };
//     console.log(node);
//     this.head = node;
//     this._size++;
//   }
//   pop(): string {
//     //이렇게 타입 검사를 해주지 않으면 node.next가 undefined가 나올 수 있기 때문에 미리 타입검사를 해주는 것.
//     if (this.head == null) {
//       throw new Error("Stack is empty!");
//     }
//     const node = this.head;
//     this.head = node.next;
//     this._size--;
//     return node.value;
//   }
// }

// const stack = new Stack();
// stack.push("ellie");
// stack.push("peter");
// console.log(stack.pop());
// console.log(stack.pop());
