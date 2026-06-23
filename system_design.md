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

## Microservices Architecture

### Advantages
- Independent deployment and scaling
- Technology flexibility per service
- Fault isolation (one service down doesn't crash all)
- Smaller, focused codebases

### Challenges
- Network latency between services
- Data consistency across services
- Service discovery complexity
- Distributed tracing and debugging

### Communication
Synchronous: REST APIs, gRPC
Asynchronous: Message queues (RabbitMQ, Apache Kafka)

### API Gateway
Single entry point for all clients
Handles auth, rate limiting, routing, load balancing
