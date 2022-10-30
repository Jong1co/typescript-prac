/**
 * 1. 스택 구현
 * 2. generic을 사용해서 문자 -> 문자가 아닌 아무 타입-> 아무 타입으로 반환하는 class 생성
 *
 */

interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

interface StackNode<T> {
  readonly value: T;
  readonly next?: StackNode<T>;
}

class StackImpl<T> implements Stack<T> {
  constructor() {}
  private _size: number = 0;
  private head?: StackNode<T>;
  get size(): number {
    return this._size;
  }
  push(value: T): void {
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>();
stack.push("hihi");
console.log(stack);
stack.push("bye");
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());

const stack2 = new StackImpl<number>();
stack2.push(2);
console.log(stack2);
