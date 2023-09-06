---
title: What are Web Sockets
subtitle: An explanation of the WebSocket protocol and API's
description: WebSockets are a bi-directional, full duplex communications
  protocol initiated over HTTP. They are commonly used in modern web
  applications for streaming data and other asynchronous traffic.
category: API Development
summary: WebSocket is a bidirectional communication protocol based on TCP that
  standardizes communication between a client and a server, allowing for both
  parties to request data from one another. In contrast, a unidirectional
  protocol like HTTP only allows for the client to request data from the server.
featureImage:
  url: v1690313878/api-gateway_r7vd0m.jpg
  title: What are Websockets
author: garywoodfine
publishDate: 06 September 2023
publishDateTime: 2023-09-06:17:30
---
# What are Websockets

A WebSocket is bidirectional, a full-duplex protocol that is used in client-server communication, and is typically denoted as an address starting with `ws://` or `wss://`. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection the connection is terminated from both ends. 

WebSockets are extremely useful for developers because they allow for bidirectional realtime communication between servers and clients.

WebSockets establish TCP-style connections in a browser-compatible fashion using HTTP during initial setup. Messages over websockets can be provided in any protocol, freeing the application from the sometimes unnecessary overhead of HTTP requests and responses (including headers, cookies, and other artifacts). But most critical is the ability to deliver downstream (server-to-client) messages to connected clients. In the browser, for instance, the same thing was once only possible by polling a server resource, which is a comparatively racy, high-latency, and bandwidth-intensive affair.

WebSockets are available on many platforms, including the most common browsers and mobile devices. They're often applied to solve problems of millisecond-accurate state synchronization and publish-subscribe messaging, both of which leverage Websockets' provision for downstream pushes. A challenge of operating a WebSocket-based system is the maintenance of a stateful gateway on the backend. A WebSocket is erected by making a common HTTP request to that server with an Upgrade header, which the server (after authentating and authorizing the client) should confirm in its response. After this, the connection remains established between that physical client-server pair; if at some point the service needs to be redeployed or the load redistributed, its WebSocket connections needs to be re-established.