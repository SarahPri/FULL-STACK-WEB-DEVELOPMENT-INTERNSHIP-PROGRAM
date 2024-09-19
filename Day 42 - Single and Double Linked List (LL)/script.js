class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  // Insert a new node at the end of the linked list
  insert(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  // Delete the first occurrence of a value in the linked list
  delete(value) {
      if (this.head === null) return;

      // Handle the case where the head node is to be deleted
      if (this.head.value === value) {
          this.head = this.head.next;
          return;
      }

      let current = this.head;
      while (current.next && current.next.value !== value) {
          current = current.next;
      }

      // If the value was found
      if (current.next && current.next.value === value) {
          current.next = current.next.next;
      }
  }

  // Search for a value in the linked list
  search(value) {
      let current = this.head;
      while (current) {
          if (current.value === value) {
              return true;
          }
          current = current.next;
      }
      return false;
  }

  // Traverse the linked list and print all values
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
const linkedList = new LinkedList();

// Inserting values
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(99);
linkedList.insert(2.5);
linkedList.insert(3);
linkedList.insert(4);

// Deleting a value
linkedList.delete(1);

// Traversing the list
linkedList.traverse();  // Expected output: 2 99 2.5 3 4
