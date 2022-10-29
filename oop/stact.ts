// interface Stack {
//   readonly size: number;
//   push(value: string): void;
//   pop(): string;
// }

// type StackNode = {
//   //불변성 유지를 위한 readonly
//   readonly value: string;
//   readonly next?: StackNode;
// };

// class StackImpl implements Stack {
//   constructor(private capacity: number) {}
//   private _size: number = 0;
//   private head?: StackNode;
//   get size(): number {
//     return this._size;
//   }
//   push(value: string) {
//     if (this.size === this.capacity) {
//       throw new Error("Stack is full!");
//     }
//     const node: StackNode = { value, next: this.head };
//     console.log(node);
//     this.head = node;
//     this._size++;
//   }
//   pop(): string {
//     if (this.head == null) {
//       throw new Error("Stack is empty!");
//     }
//     const node = this.head;
//     console.log(node);
//     console.log(node.next);
//     this.head = node.next;
//     this._size--;
//     return node.value;
//   }
// }

// const stack = new StackImpl(10);
// stack.push("ellie");
// stack.push("ellie");
// stack.push("ellie");
// console.log("---");
// stack.pop();
// console.log(stack.size);
