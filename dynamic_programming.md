# Dynamic Programming

## Core Concept
Solve complex problems by breaking into overlapping subproblems.
Store results to avoid redundant computation.

## Two Approaches
Top-down (Memoization): Recursion + cache array/hashmap
Bottom-up (Tabulation): Build solution iteratively

## Identify DP Problems
- Overlapping subproblems
- Optimal substructure
- Count ways / find min-max / check possibility

## Fibonacci
Naive: O(2^n), DP: O(n) time, O(n) space, Optimized: O(1) space

## 0/1 Knapsack
For each item: include or exclude
dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w-wt[i]])
