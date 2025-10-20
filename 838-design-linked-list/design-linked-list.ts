class MyLinkedList {
  private head: ListNode | null;
  private tail: ListNode | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.val;
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    if (this.size === 0) this.tail = newNode;
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new ListNode(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    const newNode = new ListNode(val, current!.next);
    current!.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head!.next;
      if (this.size === 1) this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    current!.next = current!.next!.next;
    if (index === this.size - 1) this.tail = current;
    this.size--;
  }
}