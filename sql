db- relational and no sql: means sql and no sql
in relational db: we store data in tables that are linked to each other using relationships
some rdbms: mysql, postgresql, oracle

## SQL JOINs
INNER JOIN: only matching rows in both tables
LEFT JOIN: all from left + matching from right (NULL if no match)
RIGHT JOIN: all from right + matching from left
FULL OUTER JOIN: all rows from both tables

## Subqueries
Nested query inside main query.
Correlated subquery: references outer query.

## Indexes
Speed up SELECT queries on indexed columns.
B-tree index (default): for range queries.
Hash index: for equality checks.
Composite index: multiple columns.
Note: indexes slow down INSERT/UPDATE/DELETE.

## ACID Properties
Atomicity: all or nothing
Consistency: DB stays valid state
Isolation: transactions don't interfere
Durability: committed data persists
