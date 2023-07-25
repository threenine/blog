---
title: Backend for Frontend Design Pattern
subtitle: improving end-user experience on User Interfaces by implementing the
  Backend for Frontend pattern
description: The backend for frontend (BFF) is a software architecture pattern
  relevant for microservices & domain-driven design to simplify the
  communication between the frontend and backend
summary: The backend for frontend (BFF) is a software architecture pattern
  relevant for microservices & domain-driven design to simplify the
  communication between the frontend and backend
featureImage:
  url: https://res.cloudinary.com/threenine-co-uk/image/upload/v1690313879/back-end-for-front-end_bl2ks3.png
  title: Backend for Frontend Design Pattern
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /garywoodfine.png
  role: Founder & CTO
  Image: https://res.cloudinary.com/threenine-co-uk/image/upload/v1690315793/garywoodfine_tlccjw.png
publishDate: 10 June 2023
publishDateTime: 2023-06-10:17:30
category:
  title: API Development
---

The _backend for frontend (BFF)_ is a software architecture pattern relevant for microservices & domain-driven design to 
simplify the communication between the frontend and backend. The pattern was first introduced by [Phil Calcado](https://philcalcado.com/about/)
and colleagues at SoundCloud in 2011, and has also been discussed further by [Sam Newman](https://samnewman.io/) in his book
[Building Microservices](https://amzn.to/3D8bFGc) and [Chris Richardson](https://microservices.io/about.html) in his book [Microservices Patterns](https://amzn.to/3JSLZ42).

The BFF pattern has also been referred to as the [API Gateway pattern](https://threenine.blog/posts/api-gateway-pattern), but this is not strictly correct. The API Gateway
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
dedicated team that are responsible for both backend and frontend development, therefor making it easier to implement, maintain,
define and adapt the API contract between the frontend and backend.

We have briefly discussed the [Backends for Frontends pattern](https://www.apitemplatepack.com/docs/introduction/backends-for-frontends-pattern/) 
in relation to the [API Template Pack](https://www.apitemplatepack.com/) and it is a fairly common pattern that is used in
within the Enterprise API space.

::get-started
::

### Backend for Frontend (BFF) Pattern Example

Let's consider a simple example of a BFF pattern in action. 

A Backend for Frontend (BFF) is a type of API gateway that is used to aggregate multiple backend services into a single 
API for a specific frontend applications or clients. For instance, a BFF can be used to aggregate multiple backend microservices
into a single API for web and mobile applications.

A single BFF can be focused and targeted towards  single User Interface (UI). As a result, it will help keep the codebase
for the frontends simple and enabling a unified view of data through the BFF.

![Backend for frontend pattern example](/images/bff-pattern-example.png)

In the above example, we have a simple BFF that is used to aggregate data from two backend services. The BFF is used to
aggregate data from the two backend services and provide a single API for the frontend application to consume.  


### Benefits of the Backend for Frontend (BFF) Pattern

* **Separation of concerns:** Your application is easier to maintain when the front-end and back-end applications are disentangled.
* **Improved security:** The BFF pattern can conceal sensitive information and send the response back to clients.
* **Shared team responsibility:** As front-end and back-end applications are isolated; several teams may work on different aspects of the application. The front-end team doesn't have to wait till another team has completed the BFF code.
* **Better security:** You can take advantage of the BFF pattern to hide certain sensitive information while sending the response back to the client. Additionally, this abstraction makes it extremely difficult for intruders, and your sensitive data won't be compromised.
* **Rapid development:** The BFF pattern encourages having a back-end API for each client and having the front-end development team control the development, thus increasing development velocity.
* **Request aggregator:** BFF can function as a request aggregator, reducing the chattiness of your client applications by acting as a front-end for downstream services.
* **Consistent error management:** BFF can play a crucial role in implementing consistent error handling in your application.
* **Better Autonomy and Agility:** Instead of waiting for the back-end team to build the API, the client development team has complete control, allowing it to be at the forefront of the delivery schedule.


### When to use the Backend for Frontend (BFF) Pattern

* The user interfaces need to consume data that requires a lot of aggregation on the back-end code.
* When teams find themselves incorporating customizations to the general-purpose back-end code to serve multiple interfaces.
* optimising the back-end code to satisfy the requirements of specific client interfaces.
