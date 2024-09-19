class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Insert a new node at the end of the doubly linked list
  insert(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          // If the list is empty, set head and tail to the new node
          this.head = newNode;
          this.tail = newNode;
      } else {
          // Otherwise, add the new node at the end
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
  }

  // Traverse the doubly linked list and print all values
  traverse() {
      let current = this.head;
      const result = [];
      while (current) {
          result.push(current.value);
          current = current.next;
      }
      console.log(result.join(' '));
  }
}

// Example usage
const dll = new DoublyLinkedList();

// Inserting values
dll.insert(1);
dll.insert(99);
dll.insert(2);
dll.insert(2.5);
dll.insert(3);
dll.insert(4);

// Traversing the list
dll.traverse();  // Expected output: 1 99 2 2.5 3 4
