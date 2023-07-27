---
title: API Gateway Pattern
subtitle: using API gateways for communication between clients and applications
description: Understand the uses of the API gateway pattern and when to use it
  in API Development to provide a single-entry point for groups of
  microservices.
category: API Development
summary: Understand the uses of the API gateway pattern and when to use it in
  API Development to provide a single-entry point for groups of microservices.
  dfsdaf
featureImage:
  url: https://res.cloudinary.com/threenine-co-uk/image/upload/v1690313878/api-gateway_r7vd0m.jpg
  title: API Gateway Pattern
author: garywoodfine
publishDate: 10 June 2023
publishDateTime: 2023-06-10:17:30
---
The *API Gateway pattern* is a service that provides a single-entry point for certain groups of microservices. It's similar to the 
Facade pattern from object-oriented design, but in this case, it's part of a distributed system. The API Gateway pattern 
is often conceptually linked to [Backend for Frontend (BFF)](https://threenine.blog/posts/backend-for-frontend-design-pattern) 
because both patterns share a similar objectives, but they are actually two distinct patterns.

An API gateway sits between a client and a set of backend services. It is an API management service that provides a unified entry point for API calls. 

An *API Gateway* is a server that is the single entry point into the system. The API Gateway encapsulates the internal 
system architecture and provides an API that is tailored to each client. It might have other responsibilities such as authentication, monitoring, load balancing, 
caching, request shaping and management, and static response handling.

The API Gateway is responsible for request routing, composition, and protocol translation. All requests from clients 
first go through the API Gateway. It then routes requests to the appropriate microservice. The API Gateway will often 
handle a request by invoking multiple microservices and aggregating the results. It can translate between web 
protocols such as HTTP and WebSocket and web‑unfriendly protocols that are used internally.

### Why use an API Gateway?

The API Gateway can also provide each client with a custom API. It typically exposes a coarse‑grained API for mobile clients.
It may expose a finer‑grained API for desktop clients to conserve bandwidth. It may provide an API tailored to the needs of
each client. For example, some clients may require only a subset of the data that is available, so the API Gateway
can retrieve and return only that data.

 An API gateway manages the traffic between the client and the backend. This means it can handle requests and retrieve data and services, including routing, combining multiple API calls and enforcing policies

An API Gateway can offer multiple features. Depending on the product it might offer richer or simpler features, 
but the following are the most common features:

* **Authentication** - The API Gateway can handle authentication for all incoming requests and pass the request to the 
  services with a [valid authentication token](https://en.wikipedia.org/wiki/Authentication_token). This can simplify 
  the development of authentication for all of the microservices. It can also prevent certain types of [Denial of Service (DoS)](https://en.wikipedia.org/wiki/Denial-of-service_attack) attacks.
* **Backend** - services only if the request is authenticated. This can simplify the development of authentication for 
  all of the microservices. It can also prevent certain types of [Denial of Service (DoS)](https://en.wikipedia.org/wiki/Denial-of-service_attack) attacks.
* **Load balancing** - The API Gateway can act as a [load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)) to evenly distribute requests across the back‑end services.
* **Caching** - The API Gateway can cache backend responses. This can significantly improve performance metrics.
* **Monitoring** - The API Gateway can provide monitoring and tracking of requests and responses. It can also do 
  [application logging](https://en.wikipedia.org/wiki/Application_logging) and tracking.
* **Request Aggregation** - The API Gateway can aggregate multiple requests into a single request. This can reduce 
  chattiness and round trips.
* **Response Aggregation** - The API Gateway can aggregate multiple responses into a single response. This can reduce 
  chattiness and round trips.
* **Static Response Handling** - The API Gateway can handle responses for API calls that do not require a back‑end service. 
  For example, it can return a cached response.
* **Management** - The API Gateway can provide a set of management functions. For example, it can provide an API 
  browser that lists available APIs and their operations.
* **Protocol Translation** - The API Gateway can translate between web protocols such as HTTP and WebSocket and 
  web‑unfriendly protocols that are used internally.
* **Security** - The API Gateway can provide an extra layer of security by encapsulating the internal system architecture 
  and shielding the internal services from the public-facing API. It can also provide some [monitoring](https://en.wikipedia.org/wiki/Monitoring_(medicine)) of the incoming requests.
* ::get-started
  ::

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

### Types of API Gateway

There are two main types of API gateways to choose from: *cloud-based API gateways* and *on-premise API gateways*. You can also opt for a hybrid solution, where your API gateway provider hosts the API management layer while your edge gateways are deployed on your infrastructure. 

### Cloud-based API Gateway

A cloud-based API gateway can give you a head-start, as you don’t have to worry about infrastructure headaches. Typically these are made available by various Cloud Providers such as Digital Ocean, Netlify, AWS, Azure and GCP.
These API Gateways will typically help you to implement and leverage several benefits

* **API request management:** intercepting API requests, API gateways can combine, reformat, or otherwise manipulate both requests and the resulting response. This is useful if clients "say" one thing when calling an API but your microservices need to "hear" something different in order to respond. In this case, the API gateway serves essentially as a translation layer for API calls.
* **Rate limiting:** API gateways can "throttle" or rate-limit incoming requests, which means restricting the number of requests that clients can make in a given timeframe. Rate-limiting helps mitigate security abuse. It also protects against the risk that buggy or poorly managed clients will overwhelm applications by making large numbers of repeated, unnecessary requests.
*  **Load balancing:** Although API gateways do more than just load balancing, the ability to balance load by distributing traffic across multiple application instances or microservices is one of their features.
* **Monitoring and observability:** API gateways can monitor and log API requests, providing the data necessary to drive observability.
* **Security:** API gateways can also enforce security rules. For example, they could block malicious requests to prevent DDoS attacks.

### On premise API Gateways

an on-premise gateway is one that you install in your own infrastructure. This leaves you in complete control with no 
calling home and no usage limits.

Control is a huge deal for many organisations. For example, if you operate in a heavily regulated environment, you 
may need a gateway to be part of your own infrastructure rather than cloud-based. This is where an on-premise solution 
shines, giving you the API gateway you need while leaving you in total control. 