---
title: API Gateway Pattern
subtitle: using API gateways for communication between clients and applications
description: Understand the uses of the API gateway pattern and when to use it in API Development to provide a single-entry point for groups of microservices.
summary: 
category:
  title: API Development
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /garywoodfine.png
  role: Founder & CTO
featureImage:
  url: /images/api-gateway.jpg
  title:  API Gateway Pattern
publishDate: 10 June 2023
publishDateTime: 2023-06-10:17:30
---
The _API Gateway pattern_ is a service that provides a single-entry point for certain groups of microservices. It's similar to the 
Facade pattern from object-oriented design, but in this case, it's part of a distributed system. The API Gateway pattern 
is often conceptually linked to [Backend for Frontend (BFF)](https://threenine.blog/posts/backend-for-frontend-design-pattern) 
because both patterns share a similar objectives, but they are actually two distinct patterns.


An _API Gateway_ is a server that is the single entry point into the system. The API Gateway encapsulates the internal 
system architecture and provides an API that is tailored to each client. It might have other responsibilities such as authentication, monitoring, load balancing, 
caching, request shaping and management, and static response handling.

The API Gateway is responsible for request routing, composition, and protocol translation. All requests from clients 
first go through the API Gateway. It then routes requests to the appropriate microservice. The API Gateway will often 
handle a request by invoking multiple microservices and aggregating the results. It can translate between web 
protocols such as HTTP and WebSocket and web‑unfriendly protocols that are used internally.

### Why use an API Gateway?


### Benefits of an API Gateway

A major benefit of using an API Gateway is that it encapsulates the internal structure of the application. Rather than 
having to invoke specific services, clients simply talk to the gateway. The API Gateway provides each kind of client 
with a specific API. This reduces the number of round trips between the client and application. It also simplifies 
the client code. 

A client that talks to multiple microservices has to deal with the additional complexity of orchestrating multiple
remote calls. A client that talks to an API Gateway only has to do a single round trip to the API Gateway. This
reduces latency and bandwidth usage. It also helps to prevent [denial-of-service attacks](https://en.wikipedia.org/wiki/Denial-of-service_attack).

The API Gateway can also mask failures in the backend services by returning cached or default data. This can
reduce the number of calls a client makes to backend services. The API Gateway can handle requests that require
[server-side processing](https://en.wikipedia.org/wiki/Server-side_processing) or [load balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)).
The API Gateway can provide each application with API features that are suited to its specific needs. For example,
some applications may require low latency, while others may need high availability.

### Disadvantages of an API Gateway

The API Gateway pattern has some disadvantages and must be considered when designing your API Development strategy.

* **Increased complexity** - the API Gateway is yet another moving part that must be developed, deployed, and managed.
* **Increased response time** - due to the additional network hop through the API Gateway - however, for most applications, the cost of an extra roundtrip is insignificant.
* **Increased development effort** - developers must implement and test the API Gateway for each type of client.
* **Increased latency** - the API Gateway is a [single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure) for all clients. If it fails, all clients fail.
* **Increased security risk** - the API Gateway is the entry point for all clients. A security breach in the API Gateway has much more impact than a breach in a single application.
* **Increased cost** - the API Gateway is yet another piece of infrastructure that must be developed, deployed, and managed.
* **Increased operational complexity** - the API Gateway must be included in the operational environment, which increases operational complexity.
* **Increased operational risk** - the API Gateway is yet another moving part that can fail. This increases operational risk.
* **Increased operational cost** - the API Gateway must be developed, deployed, and managed, which increases operational cost.
* **Increased operational latency** - the API Gateway is a single point of failure for all clients. If it fails, all clients fail.
* **Increased operational security risk** - the API Gateway is the entry point for all clients. A security breach in the API Gateway has much more impact than a breach in a single application.

