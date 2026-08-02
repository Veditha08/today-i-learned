# WebSockets and Real-Time Communication

## HTTP vs WebSocket
HTTP: half-duplex, client must initiate each request
WebSocket: full-duplex, persistent connection, low latency
Good for: chat apps, live notifications, collaborative tools, gaming

## Connection Lifecycle
1. HTTP handshake (upgrade request)
2. Server accepts - connection established
3. Bidirectional messages
4. Either side can close

## Socket.io
Abstraction over WebSocket with fallbacks.
Automatic reconnection built in.
Room and namespace support.

Server side: io.on('connection', handler)
Emit to one: socket.emit('event', data)
Emit to all: io.emit('event', data)
Emit to room: io.to('room').emit('event', data)

Client side: io('http://localhost:3000')
socket.on('event', handler)
socket.emit('event', data)
