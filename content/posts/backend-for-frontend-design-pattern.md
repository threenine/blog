---
title: Backend for Frontend Design Pattern
subtitle: improving end-user experience on User Interfaces by implementing the Backend for Frontend pattern
description: The backend for frontend (BFF) is a software architecture pattern relevant for microservices & domain-driven design to simplify the communication between the frontend and backend
summary: 
category:
  title: API Development
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /garywoodfine.png
  role: Founder & CTO
featureImage:
  url: /images/back-end-for-front-end.png
  title:  Backend for Frontend Design Pattern
publishDate: 10 June 2023
publishDateTime: 2023-06-10:17:30
---

The backend for frontend (BFF) is a software architecture pattern relevant for microservices & domain-driven design to 
simplify the communication between the frontend and backend. The pattern was first introduced by [Phil Calcado](https://philcalcado.com/about/)
and colleagues at SoundCloud in 2011, and has also been discussed further by [Sam Newman](https://samnewman.io/) in his book
[Building Microservices](https://amzn.to/3D8bFGc) and [Chris Richardson](https://microservices.io/about.html) in his book [Microservices Patterns](https://amzn.to/3JSLZ42).

The BFF pattern has also been referred to as the **API Gateway** pattern, but this is not strictly correct. The API Gateway
pattern is a more general pattern that can be used to aggregate multiple backend services into a single API. The BFF pattern
is a specific type of API Gateway that is used to aggregate multiple backend services into a single API for a specific frontend
application or client. 

The BFF pattern has been widely adopted by companies such as [Netflix](https://netflix.com), [Spotify](https://spotify.com),
[SoundCloud](https://soundcloud.com), [Zalando](https://zalando.com), [Amazon](https://amazon.com), [Uber](https://uber.com),
and [Twitter](https://twitter.com), and is often regarded as a key pattern for implementing microservices.

## What is the Backend for Frontend (BFF) Pattern?

The BFF pattern is a software architecture pattern that is used to simplify the communication between the frontend and backend.
The (BFF) pattern refers to having one backend per user experience, instead of having only one general-purpose API backend. This
is because the traditional approach to accommodating more than one type of UI is to provide a single, server-side API, 
and add more functionality as required over time to support new types of mobile interaction. 

The BFF is typically tightly coupled to a specific frontend application or client, and will typically be implemented by a
dedicated team that are responsible for both backend and frontend development, therefor making it easier to implement, maintain and 
define and adapt the API contract between the frontend and backend.

We have briefly discussed the [Backends for Frontends pattern](https://www.apitemplatepack.com/docs/introduction/backends-for-frontends-pattern/) 
in relation to the [API Template Pack](https://www.apitemplatepack.com/) and it is a fairly common pattern that is used in
within the Enterprise API space.

