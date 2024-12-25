type QNode<T> = {
    value: T,
    next?: QNode<T>,
    previous?: QNode<T>
}
export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;


    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as QNode<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;

    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const tmp = this.head;
        this.head = this.head?.next;
        tmp.next = undefined;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return tmp.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}