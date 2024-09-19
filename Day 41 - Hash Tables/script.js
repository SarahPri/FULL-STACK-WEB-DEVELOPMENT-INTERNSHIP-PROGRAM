class HashTable {
  constructor(size) {
      this.size = size;
      this.table = new Array(size);
  }

  // Hash function to calculate index
  hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i)) % this.size;
      }
      return hash;
  }

  // Method to add a key-value pair to the hash table
  set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
          this.table[index] = [];
      }
      // Update the value if the key already exists
      const bucket = this.table[index];
      for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
              bucket[i][1] = value;
              return;
          }
      }
      // Otherwise, add the new key-value pair
      bucket.push([key, value]);
  }

  // Method to get the value associated with a key
  get(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
      if (bucket) {
          for (let i = 0; i < bucket.length; i++) {
              if (bucket[i][0] === key) {
                  return bucket[i][1];
              }
          }
      }
      return undefined;
  }

  // Method to search if a key exists in the hash table
  search(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
      if (bucket) {
          for (let i = 0; i < bucket.length; i++) {
              if (bucket[i][0] === key) {
                  return true;
              }
          }
      }
      return false;
  }

  // Method to display all key-value pairs in the hash table
  display() {
      for (let i = 0; i < this.table.length; i++) {
          const bucket = this.table[i];
          if (bucket) {
              for (let j = 0; j < bucket.length; j++) {
                  console.log(bucket[j][1]);
              }
          }
      }
  }
}

// Example usage
const hashTable = new HashTable(10);

// Inserting key-value pairs
hashTable.set('DSA', 'DSA');
hashTable.set('FSWD', 'FSWD');

// Displaying values
hashTable.display();
