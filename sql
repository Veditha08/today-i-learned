# SQL & Databases

## Types of Databases

**Relational DB (SQL):** Data stored in **tables linked to each other** using relationships (foreign keys).
Examples: MySQL, PostgreSQL, Oracle

**Non-Relational DB (NoSQL):** Data stored as documents, key-value pairs, graphs, etc.
Examples: MongoDB, Redis, Cassandra

---

## SQL JOINs

| JOIN Type | What it returns |
|---|---|
| `INNER JOIN` | Only rows that match in **both** tables |
| `LEFT JOIN` | All rows from left + matched rows from right (NULL if no match) |
| `RIGHT JOIN` | All rows from right + matched rows from left |
| `FULL OUTER JOIN` | All rows from both tables |

---

## Subqueries
A query nested inside another query.

```sql
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

A **correlated subquery** references the outer query â€” runs once per outer row.

---

## Indexes
Speed up `SELECT` queries on the indexed column.

| Index Type | Best for |
|---|---|
| B-tree (default) | Range queries (`>`, `<`, `BETWEEN`) |
| Hash | Exact equality (`=`) |
| Composite | Queries filtering by multiple columns |

> âš ï¸ Indexes speed up reads but slow down `INSERT`, `UPDATE`, and `DELETE`.

---

## ACID Properties
Guarantees that database transactions are processed reliably.

| Property | Meaning |
|---|---|
| **Atomicity** | All or nothing â€” transaction fully completes or fully fails |
| **Consistency** | DB always moves from one valid state to another |
| **Isolation** | Concurrent transactions don't interfere with each other |
| **Durability** | Committed data persists even after crashes |
