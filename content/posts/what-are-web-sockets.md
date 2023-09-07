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


### How do WebSockets work ?

WebSockets effectively make use TCP _(Transport Control Protocol)_ to run as a transport layer using the WebSocket Protocol.

::top-tip
#message
WebSockets require a uniform resource identifier (URI) to use a `ws:` for unencrypted connections or `wss:`
which makes use of encrypted TLS connections.
::

In order to establish a connection, the client needs to make an initial HTTP Request, which is essentially a **_WebSocket
handshake_** . This request makes use of the **Upgrade**  header, which is  used to upgrade an already established 
client/server connection to a different protocol (over the same transport protocol).


```http request
GET /chat HTTP/1.1
Host: threenine.co.uk
Connection: Upgrade
Pragma: no-cache
Cache-Control: no-cache
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: b6gjhT32u488lpuRwKaOWs==
```
::note
#message 
 There are several features of WebSockets handshake request to take note of:
 * The `Connection` and `Upgrade` headers in the request and response indicate that this is a WebSocket handshake.
 * The `Sec-WebSocket-Version` request header specifies the WebSocket protocol version that the client wishes to use. This is typically 13. 
 * The `Sec-WebSocket-Key` request header contains a Base64-encoded random value, which should be randomly generated in each handshake request.
 * The `Sec-WebSocket-Accept` response header contains a hash of the value submitted in the Sec-WebSocket-Key request header, 
concatenated with a specific string defined in the protocol specification. This is done to prevent misleading responses resulting from 
misconfigured servers or caching proxies.
::

The server will determine to upgrade the connection and will respond with a `101 Switching Protocols` response

```http request
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: b6gjhT32u488lpuRwKaOWs==
```

All this processing is hugely simplified by making use of various libraries available. For Instance in JavaScript creating
a new WebSocket is as easy as:

```javascript
var ws = new WebSocket("wss://threenine.co.uk/feed");
```
Once the WebSocket has been established messages can be sent , messages can be sent asynchronously in either direction by the client or server.

A simple message could be sent from the browser using client-side JavaScript like the following:

```javascript
ws.send("Hello World!");
```
WebSocket messages can contain any content or data format. In modern applications, the convention is to make of JSON 
to send structured data within WebSocket messages.

### What makes WebSocket great for Real-Time Communication

WebSockets are generally a great fit for Real-Time communication for a number of reasons:

* Websockets provide real-time updates and open lines of communication.
* Websockets are HTML5 compliant, and offer backwards compatibility with older html documents. Therefore, they are supported by all modern web browsers—Google Chrome, Brave, Mozilla Firefox, Apple Safari, and more.
* WebSockets are also compatible across platforms—Android, iOS, web, and desktop apps.
* A single server can have multiple WebSocket connections open simultaneously, and can even have multiple connections with the same client, which opens the door for scalability.
* WebSockets can stream through many proxies and firewalls.


### Conclusion
WebSocket enables two-way interactive communication sessions between client and server without having to poll the server 
for a reply, providing both speed improvements and real-capabilities over other protocols. 

Hopefully this post covered the basics behind WebSockets and how and when to start using them in your applications to
enable Real-Time communications between client and server applications.