class BinaryHeap {
  constructor() {
      this.heap = [];
  }

  // Push a value into the max-heap
  push(value) {
      this.heap.push(value);
      this._heapifyUp(this.heap.length - 1);
  }

  // Pop the maximum value from the max-heap
  popMax() {
      if (this.heap.length === 0) return null;

      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = end;
          this._heapifyDown(0);
      }
      return max;
  }

  // Heapify-up to maintain the max-heap property
  _heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
          [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
          this._heapifyUp(parentIndex);
      }
  }

  // Heapify-down to maintain the max-heap property
  _heapifyDown(index) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let largest = index;

      if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
          largest = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
          largest = rightChild;
      }
      if (largest !== index) {
          [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
          this._heapifyDown(largest);
      }
  }

  // Get the current state of the heap
  getHeap() {
      return this.heap;
  }
}

// Example usage
const heap = new BinaryHeap();

// Push values into the heap
heap.push(20);
heap.push(30);
heap.push(40);
heap.push(50);

// Display heap
console.log('Heap before popping max:', heap.getHeap());

// Pop the maximum value
heap.popMax();

// Display heap after popping max
console.log('Heap after popping max:', heap.getHeap()); // Expected output: [40, 20, 30]
