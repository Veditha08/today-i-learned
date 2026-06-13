# Graph Theory

## Representations
1. Adjacency Matrix: O(V^2) space, O(1) edge lookup
2. Adjacency List: O(V+E) space, O(degree) edge lookup

## BFS - Breadth First Search
- Uses queue (FIFO)
- Level-order traversal
- Shortest path in unweighted graph
- Time: O(V+E)

## DFS - Depth First Search
- Uses stack or recursion
- Explores deeply before backtracking
- Cycle detection, topological sort
- Time: O(V+E)

## Graph Algorithms

### Dijkstra
Shortest path in weighted graph (non-negative weights)
Uses min-heap (priority queue)
Time: O((V+E) log V)

### Bellman-Ford
Handles negative weights
Detects negative cycles
Time: O(V * E)

### Floyd-Warshall
All pairs shortest path
Time: O(V^3), Space: O(V^2)

### Topological Sort (Kahn's BFS)
For DAG - Directed Acyclic Graph
Used in: build systems, course scheduling

### Union-Find (Disjoint Set)
Detect cycle in undirected graph
Find connected components
Kruskal's MST algorithm
