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
