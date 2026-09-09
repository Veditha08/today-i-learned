# Algorithms

## Sorting

### Merge Sort
- Time: O(n log n), Space: O(n)
- Divide and conquer, stable sort
- Best for linked lists

### Quick Sort
- Time: O(n log n) avg, O(n^2) worst
- Pivot-based partitioning
- In-place, not stable

### Heap Sort
- Time: O(n log n), Space: O(1)
- Uses max-heap structure

### Counting Sort
- Time: O(n+k), Space: O(k)
- Only for integers in known range

## Binary Search

Search sorted array in O(log n).
lo=0, hi=n-1, mid = lo + (hi-lo)/2

Standard: find exact target
Lower bound: first position where arr[mid] >= target
Upper bound: first position where arr[mid] > target

Applications:
- Find square root
- Peak element
- Search in rotated sorted array
- Minimize the maximum (binary search on answer)

## Common Coding Problem Patterns

Sliding Window:
- Fixed window: maintain sum/count in window of size k
- Variable window: expand/shrink based on condition

Two Pointers:
- Sorted array problems
- Palindrome check, 3Sum, Container With Most Water

Fast and Slow Pointers:
- Detect cycle in linked list (Floyd's algorithm)
- Find middle of linked list

Merge Intervals:
- Sort by start, merge overlapping intervals

Top K Elements:
- Min-heap of size K
- O(n log k) instead of sorting full array O(n log n)

Backtracking:
- Generate all subsets, permutations, combinations
- N-Queens, Sudoku solver
- Template: choose, explore, unchoose
