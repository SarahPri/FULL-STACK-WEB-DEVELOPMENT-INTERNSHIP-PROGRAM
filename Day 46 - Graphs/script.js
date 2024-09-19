class Graph {
  constructor() {
      this.adjacencyList = {};
  }

  // Add a node to the graph
  addNode(node) {
      if (!this.adjacencyList[node]) {
          this.adjacencyList[node] = [];
      }
  }

  // Add an edge between two nodes
  addEdge(node1, node2) {
      if (!this.adjacencyList[node1]) {
          this.addNode(node1);
      }
      if (!this.adjacencyList[node2]) {
          this.addNode(node2);
      }
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1); // Assuming undirected graph
  }

  // Remove a node and all its edges
  removeNode(node) {
      if (!this.adjacencyList[node]) return;

      // Remove all edges connected to the node
      for (const neighbor of this.adjacencyList[node]) {
          this.removeEdge(node, neighbor);
      }

      // Remove the node itself
      delete this.adjacencyList[node];
  }

  // Remove an edge between two nodes
  removeEdge(node1, node2) {
      if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) return;

      this.adjacencyList[node1] = this.adjacencyList[node1].filter(neighbor => neighbor !== node2);
      this.adjacencyList[node2] = this.adjacencyList[node2].filter(neighbor => neighbor !== node1);
  }

  // Perform BFS starting from a source node
  BFS(start) {
      const visited = new Set();
      const queue = [start];
      const result = [];

      while (queue.length > 0) {
          const node = queue.shift();
          if (!visited.has(node)) {
              visited.add(node);
              result.push(node);
              queue.push(...this.adjacencyList[node].filter(neighbor => !visited.has(neighbor)));
          }
      }

      return result;
  }

  // Perform DFS starting from a source node
  DFS(start) {
      const visited = new Set();
      const result = [];

      const dfsHelper = (node) => {
          if (!visited.has(node)) {
              visited.add(node);
              result.push(node);
              this.adjacencyList[node].forEach(neighbor => {
                  if (!visited.has(neighbor)) {
                      dfsHelper(neighbor);
                  }
              });
          }
      };

      dfsHelper(start);
      return result;
  }
}

// Example usage
const graph = new Graph();

// Adding nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');

// Adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

// Display graph
console.log('Graph:', graph.adjacencyList);

// Perform BFS and DFS
console.log('BFS starting from A:', graph.BFS('A')); // Expected output: ['A', 'B', 'C']
console.log('DFS starting from A:', graph.DFS('A')); // Expected output: ['A', 'B', 'C']

// Remove a node and an edge
graph.removeEdge('A', 'C');
graph.removeNode('C');

// Display updated graph
console.log('Updated Graph:', graph.adjacencyList);

// Perform BFS and DFS after removal
console.log('BFS starting from A after removal:', graph.BFS('A')); // Expected output: ['A', 'B']
console.log('DFS starting from A after removal:', graph.DFS('A')); // Expected output: ['A', 'B']
