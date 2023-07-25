---
title: What is a REST API?
subtitle: A flexible, lightweight approach to connecting and integrating applications.
description: A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.
summary: 
category:
  title: API Development
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /garywoodfine.png
  role: Founder & CTO
featureImage:
  url: /images/what-is-a-rest-api.jpg
  title:  What is an API?
publishDate: 05 June 2023
publishDateTime: 2023-06-05:17:30
---

In [What is an API](https://threenine.blog/posts/what-is-an-api "What is an API | threenine.co.uk") we introduced and discussed some of the
basics concepts and terms associated with what is defined as an API or _Application Programming Interface_. 

A REST API is an API that conforms to the design principles of the *_Representational State Transfer (REST)_*
architecture, a software architecture pattern initially created to guide the design and development of the
World Wide Web. REST defines a set of constraints for how the architecture of an Internet-scale 
distributed hypermedia system, such as the Web, should behave. The REST architectural style emphasises the scalability 
of interactions between components, uniform interfaces, independent deployment of components, and the creation of a 
layered architecture to facilitate caching of components to reduce user-perceived latency, enforce security, and 
encapsulate legacy systems. 

The REST Architectural style was first defined in 2000 by computer scientist Dr. Roy Fielding in his doctoral 
dissertation, to provides a relatively high level of flexibility and freedom for developers. This flexibility is just 
one reason why REST APIs have emerged as a common method for connecting components and applications in a microservices 
architecture.

In the [API Template Pack](https://www.apitemplatepack.com/) we discussed some high level technical basics in [What is REST](https://www.apitemplatepack.com/docs/introduction/what-is-rest/),
but in this article we will delve a little deeper into the concepts and principles of REST, focusing more on the business
perspective of REST.

In [What is an API](https://threenine.blog/posts/what-is-an-api) we discussed the concept of an API being an API a 
mechanism  enabling applications or services to access resources within other applications or services. The application 
or service doing the accessing is called the client, and the application or service containing the resource is called 
the server.

REST Base API typically follow 6 Design Principles, which are often referred to Architectural Constraints. These
constraints are the guiding principles that define the REST architectural style and must be satisfied for an interface
to be considered RESTful.

### REST API Design Principles

#### 1 . Uniform interface

All API requests for the same resource should look the same, no matter where the request comes from. The REST API 
should ensure that the same piece of data belongs to only one uniform resource identifier (URI). Resources shouldn’t be 
too large but should contain every piece of information that the client might need.

#### 2. Client-server decoupling


The client and server applications are completely independent of each other. The only information 
the client application should know is the URI of the requested resource; it can't interact with the server application 
in any other ways. Similarly, a server application shouldn't modify the client application other than passing it to 
the requested data via HTTP.

#### 3. Stateless

REST APIs are stateless, meaning that server does not remember anything about the user who used the API. This means
that the server does not store any session data about the client. The client must send all the information that the
server needs to fulfill the request. The server will then return a response to the client, but won’t store any session
data about the client. This makes REST APIs very fast and scalable.

#### 4. Cacheable

Resources should be cacheable on the client or server side. Server responses also need to contain information about 
whether caching is allowed for the delivered resource. The goal is to improve performance on the client side, while 
increasing scalability on the server side.

#### 5. Layered system architecture

In REST APIs, the calls and responses go through different layers. As a rule of thumb, don’t assume that the client 
and server applications connect directly to each other. There may be a number of different intermediaries in the 
communication loop. REST APIs need to be designed so that neither the client nor the server can tell whether it 
communicates with the end application or an intermediary.

#### 6. Code on demand 

REST APIs usually send static resources, but in certain cases, responses can also contain executable code. In these 
cases, the code should only run on-demand.


### REST API Resources

The key abstraction of information in REST is a _resource_.  A resource is a conceptual mapping to a set of entities, 
not the entity that corresponds to the mapping at any particular point in time.

Any information that can be named can be a resource: 
* document 
* image
* a temporal service (e.g. "today's weather in London") 
* a collection of other resources
* a non-virtual object or a digital representation of anything in the real world  (e.g. a person)

In other words, any concept that might be the target of a hypertext reference must fit within the definition of a resource,
and every resource should have a unique identifier. In the case of HTTP, URIs are used to identify resources.


### REST API Methods

There are typically five methods that are commonly used in a REST-based Architecture:

| Method      | Description |
|-------------| ----------- |
| **GET**     | Retrieves a representation of the resource at the specified URI. |
| **POST**    | Creates a new resource at the specified URI. |
| **PUT**     | Updates the capabilities of the resource at the specified URI. |
| **PATCH**   | Updates the capabilities of the resource at the specified URI. |
| **DELETE**  | Deletes the resource at the specified URI. |
| **HEAD**    | Retrieves the headers of the resource at the specified URI. |
| **OPTIONS** | Retrieves the options available for the resource at the specified URI. |



::warning
Many may intuitively think that the HTTP method names are used to indicate CRUD based operations, but this is not the case.
The idea of an HTTP resource is very abstract and is not really directly related to database design at all.

The HTTP methods are used to indicate the desired action to be performed on the resource. *The HTTP methods are not directly related to CRUD operations.*

**CRUD operations are not a requirement for a REST based API**

#title 
  REST is not about CRUD
::

### When to use REST

::quote
 The REST interface is designed to be efficient for large-grain hypermedia data transfer, optimizing for the common case
    of the Web, but resulting in an interface that is not optimal for other forms of architectural interaction.
::

REST API's are great architectural pattern to use when interaction level requires course-grained resources over a HTTP based network.
This is common for APIs exposed over the internet that are consumed by web applications, mobile applications or other
internet connected devices, where the network latency is high and the bandwidth is low.

REST is defacto standard for exposing APIs over the internet and is the most common architectural pattern used for
exposing APIs over the internet. A large majority of organisations have adopted REST as their standard for exposing
APIs to develop customer and partner facing Web APIs, and also for exposing internal APIs to support their internal
applications.

This is because REST APIs are easy to understand, easy to implement, and easy to consume. REST APIs are also very
flexible and can be used to expose a wide variety of data and functionality. REST APIs are also very scalable and
performant, and can be used to support a large number of clients.  However, unfortunately not all developers or 
organisations understand the principles of REST and often misuse the term REST to describe any HTTP based API, and worse
misimplement their APIs often leading to poor performance and scalability issues, and what is called a REST Anti-Patterns.

::get-started
::
