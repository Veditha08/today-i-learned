# System Design Fundamentals

## Scalability
Vertical: bigger machine (scale up)
Horizontal: more machines (scale out)

## CAP Theorem
Consistency, Availability, Partition Tolerance
Can only guarantee 2 of 3 in distributed systems

## Load Balancing
Distribute traffic across multiple servers
Algorithms: Round Robin, Least Connections, IP Hash
Tools: Nginx, HAProxy, AWS ELB

## Caching
Reduces DB load, improves latency
Cache-aside: app checks cache first
Write-through: write to cache and DB simultaneously
TTL: time-to-live for cache invalidation

## CDN
Content Delivery Network
Serves static assets from edge servers closest to user
