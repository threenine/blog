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
  url: /20945800_fwzgcs.jpg
  title: What are Websockets
author: garywoodfine
publishDate: 06 September 2023
publishDateTime: 2023-09-06:17:30
---


A WebSocket is what is termed as a  bidirectional, a full-duplex protocol used in client-server communication channels, 
and although that line may make sense to some to others it may sound like complete jargon.  Let's try break this definition
down, so we can all understand it.

### What is full duplex protocol

In their simplest definitions Full-Duplex protocols enable applications to send and receive information concurrently, allowing
the application sending information to continue without waiting for a response, and the consumer application can also send 
data without waiting for the appropriate response.

::quote
  data can be transmitted in both directions on a signal carrier at the same time
::

### WebSocket Protocol

WebSockets establish TCP-style connections in a browser-compatible fashion using HTTP during initial setup. Messages 
over websockets can be provided in any protocol, freeing the application from the sometimes unnecessary overhead of
handling HTTP requests and responses, which typically include headers, cookies, and other artifacts. However, the most 
critical aspect is the ability to deliver downstream (server-to-client) messages to connected clients. 

Websockets, provide a stateful protocol which means the connection between client and server will keep alive until it is 
terminated by either party (client or server). After closing the connection, it is terminated at both ends, regardless
of which side initiated the closure.


In the browser, 
for instance, the same thing was once only possible by polling a server resource, which is a comparatively racy, high-latency, and bandwidth-intensive affair.
It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection the connection is terminated from both ends. 

### Web Socket Protocol

T﻿he webSocket Protocol enables w  because they allow for bidirectional realtime communication between servers and clients.



WebSockets are available on many platforms, including the most common browsers and mobile devices. They're often applied to solve problems of millisecond-accurate state synchronization and publish-subscribe messaging, both of which leverage Websockets' provision for downstream pushes. A challenge of operating a WebSocket-based system is the maintenance of a stateful gateway on the backend. A WebSocket is erected by making a common HTTP request to that server with an Upgrade header, which the server (after authentating and authorizing the client) should confirm in its response. After this, the connection remains established between that physical client-server pair; if at some point the service needs to be redeployed or the load redistributed, its WebSocket connections needs to be re-established.

and is typically
denoted as an address starting with `ws://` or `wss://`.  