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
 WebSockets enable data to be transmitted in both directions on a signal carrier at the same time
::

### WebSocket Protocol

WebSockets establish TCP-style connections in a browser-compatible fashion using HTTP during initial setup. Messages 
over websockets can be provided in any protocol, freeing the application from the sometimes unnecessary overhead of
handling HTTP requests and responses, which typically include headers, cookies, and other artifacts. However, the most 
critical aspect is the ability to deliver downstream (server-to-client) messages to connected clients. 

Websockets, provide a stateful protocol which means the connection between client and server will keep alive until it is 
terminated by either party (client or server). After closing the connection, it is terminated at both ends, regardless
of which side initiated the closure.

A WebSocket is initiated by making a common HTTP request to that server with an Upgrade header, which the server 
(after authenticating and authorizing the client) should confirm in its response. After the handshake process, the 
connection remains established between that physical client-server pair; if at some point the service needs to be 
redeployed or the load redistributed, its WebSocket connections needs to be re-established.

![Websockets](https://res.cloudinary.com/threenine-co-uk/image/upload/websockets_o7yfpi.png "WebSocket protocol")

In the browser, for instance, a similar approach was once only possible by polling a server resource, which is a 
comparatively racy, high-latency, and bandwidth-intensive affair.

WebSockets are available on many platforms, including the most common browsers and mobile devices. They're often 
applied to solve problems of millisecond-accurate state synchronization and publish-subscribe messaging, both of which 
leverage Websockets' provision for downstream pushes. 


#### Differences between HTTP Requests & WebSockets

Typically, communication between web browsers and websites is conducted via HTTP Requests, where the client sends a request
and the server returns a response, which is commonly referred to as the Request/Respond model.  The connection between
the web browser and the server is only active for the duration of the request response cycle. HTTP requests are transactional
in nature.

WebSocket connections on the other hand are initiated over HTTP and are typically long-lived, messages can be sent in 
either direction at any time and are not transactional in nature. The connection will stay open until either the client 
or the server or the server close the request.

WebSockets help to reduce unnecessary network traffic, as data can immediately travel both ways through a single open 
connection, providing speed and real-time capability on the web. Websockets also enable servers to keep track of 
clients and _**push**_ data to them as needed, which was not possible using only HTTP.

There are a number of situations where the use of WebSockets can be highly advantageous, where low latency or server
initiated  messages required.

The following types of applications can make use of WebSockets:

* Real-time feeds such financial data or stock prices etc
* Chat Programs
* Social Media platforms
* Gaming applications

WebSocket connections enable streaming of text strings and binary data via messages. WebSocket messages include a frame,
payload, and data portion. Very little non-payload data gets sent across the existing network connection this way, 
which helps to reduce latency and overhead, especially when compared to HTTP request and streaming models.

