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

## LCS - Longest Common Subsequence
Classic 2D DP problem.
dp[i][j] = length of LCS of s1[0..i] and s2[0..j]
If s1[i]==s2[j]: dp[i][j] = 1 + dp[i-1][j-1]
Else: max(dp[i-1][j], dp[i][j-1])

## LIS - Longest Increasing Subsequence
dp[i] = length of LIS ending at index i
O(n^2) DP or O(n log n) with patience sorting

## Coin Change (Minimum Coins)
Unbounded knapsack variant
dp[amount] = min coins to make that amount
For each coin: dp[i] = min(dp[i], 1 + dp[i-coin])

## Matrix Chain Multiplication
Interval DP - dp[i][j] = min cost to multiply matrices i..j
