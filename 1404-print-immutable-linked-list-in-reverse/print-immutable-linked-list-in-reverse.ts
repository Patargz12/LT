function printLinkedListInReverse(head) {
    if (!head) return;
    
    printLinkedListInReverse(head.getNext());
    head.printValue();
}