function detectCycle(head) {
  if (head) {
    let tortoise = head;
    let hare = head.next;
    while (tortoise && hare) {
        hare = hare?.next?.next;
        tortoise = tortoise.next;
        if (hare === tortoise) {
            return true;
        }
    }
  }
  return false;
}

module.exports = detectCycle;