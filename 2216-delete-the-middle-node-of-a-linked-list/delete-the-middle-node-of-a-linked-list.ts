function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  let slow = head
  let fast = head
  let prev: ListNode | null = null

  while (fast && fast.next) {
    prev = slow
    slow = slow!.next!
    fast = fast.next.next
  }

  prev!.next = slow!.next
  return head
}
