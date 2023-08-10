class MinHeap {
  elements: number[];

  constructor() {
    this.elements = [];
  }

  insert(val: number) {
    //push into heap
    this.elements.push(val);

    //bubble up value if smaller than parent.
    let valIdx = this.elements.length - 1;
    let parentIdx = MinHeap.parent(valIdx);
    while (this.elements[parentIdx] > val && valIdx > 0) {
      let temp = this.elements[parentIdx];
      this.elements[parentIdx] = val;
      this.elements[valIdx] = temp;
      valIdx = parentIdx;
      parentIdx = MinHeap.parent(valIdx);
    }
  }

  pop(): number | undefined {
    let lastVal = this.elements.pop();
    if (lastVal) {
      let popped = this.elements[0];
      this.elements[0] = lastVal;

      let currentIdx = 0;
      let left = MinHeap.left(currentIdx);
      let right = MinHeap.right(currentIdx);
      let swappingIdx = this.elements[left] < this.elements[right] ? left : right;

      while (this.elements[currentIdx] > this.elements[swappingIdx]) {
        let temp = this.elements[swappingIdx];
        this.elements[swappingIdx] = this.elements[currentIdx];
        this.elements[currentIdx] = temp;
        currentIdx = swappingIdx;
        left = MinHeap.left(currentIdx);
        right = MinHeap.right(currentIdx);
        swappingIdx = this.elements[left] < this.elements[right] ? left : right;
      }
      return popped;
    } else {
      return undefined;
    }
  }

  size() {
    return this.elements.length;
  }

  static parent(child: number): number {
    return -1;
  }

  static left(parent: number): number {
    return -1;
  }

  static right(parent: number): number {
    return -1;
  }
}