class Vertex {
  value: number;

  constructor(data: number) {
    this.value = data;
  }
}

class Edge {
  endVertex: [number, number];
  weight: number;

  constructor(vertex, weight) {
    this.endVertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  size: number;
  adjacencyList: Map<Vertex, Edge[]>;

  constructor() {
    this.adjacencyList = new Map<Vertex, Edge[]>();
    this.size = 0;
  }

  addVertex(value): Vertex {
    let vertex = new Vertex(value);
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
      this.size++;
    }
    return vertex;
  }

  addEdge(vertex1, vertex2, weight = 0): Edge | null {
    let edge = new Edge(vertex2, weight);
    if (!this.adjacencyList.has(vertex1)) {
      let neighbors = this.adjacencyList.get(vertex1);
      neighbors?.push(edge);
      return edge;
    } else {
      return null;
    }
  }

  getVertices(): Array<Vertex> {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vert): Edge[] | null {
    return this.adjacencyList.get(vert) || null;
  }
}