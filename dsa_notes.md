# DSA Notes

## Time Complexity
- O(1) Constant
- O(log n) Logarithmic - Binary Search
- O(n) Linear
- O(n log n) Merge Sort, Heap Sort
- O(n^2) Bubble Sort, Selection Sort
- O(2^n) Backtracking

## Space Complexity
Always consider auxiliary space alongside time complexity.
Memory-time tradeoff is a key consideration.

## Arrays
- Random access: O(1)
- Search unsorted: O(n)
- Insert at end: O(1) amortized
- Insert at middle: O(n)
- Two-pointer technique: for sorted arrays problems

Two Pointer pattern:
  left = 0, right = n-1
  while left < right: process, move pointers

## Linked List
- Singly: data + next pointer
- Doubly: data + next + prev pointer
- Insert at head: O(1)
- Delete node: O(n) to find, O(1) to remove
- No random access (no index)

When to use:
- Frequent insertions at beginning
- Unknown size at compile time
- Implementing stacks/queues

## Stack - LIFO (Last In First Out)
Operations: push, pop, peek/top, isEmpty
Time: O(1) for all operations

Applications:
- Function call stack
- Undo/Redo operations
- Balanced parentheses check
- Browser back/forward

## Queue - FIFO (First In First Out)
Operations: enqueue, dequeue, front, isEmpty
Time: O(1) for all operations

Applications:
- BFS traversal
- Task scheduling / print queue
- Level order traversal of tree

## Deque (Double-Ended Queue)
Insert/delete from both ends.
Sliding window maximum problem.

## Monotonic Stack
Maintains elements in monotonic order (increasing or decreasing).
Used for: Next Greater Element, Stock Span, Largest Rectangle in Histogram.
