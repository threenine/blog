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