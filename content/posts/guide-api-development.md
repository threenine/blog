---
title: An introductory guide to API Development
subtitle: Overview, Terminology, and Best Practices
description: threenine.co.uk cover introductory concept, terminologies & technologies related to API development in order to gain a basic understanding.
summary: 
category:
  title: API Development
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /garywoodfine.png
  role: Founder & CTO
featureImage:
  url: /images/api-development.jpg
  title:  API Development
publishDate: 05 June 2023
publishDateTime: 2023-06-05:17:30
---

A common requirement in modern software applications is to enable connectivity to data, services and other applications
and this is accomplished by using Application Programming Interfaces (APIs).  APIs are the glue that connects modern
applications together and enables them to share data and services. However, it is also the area where most software
projects fail.

In this article we will explore [API Development](https://threenine.co.uk/services/api-development "API Development | threenine.co.uk"), the terminology used and best practices to follow
to ensure your API development project have better chances of success.

### What is an API?

We have previously covered [What is an API?](https://threenine.blog/what-is-an-api "What is an API? | threenine.co.uk")
in a previous article, but to recap an API, or _Application Programming Interface_, is a set of defined rules that enable different applications to
software or app to use features, services or functionality of another app, platform or device to enhance functionality. In short, it’s 
something that lets apps communicate with each other.

An API is often the foundation of all the applications that deal with data or enable communication between different
products or services, empowering mobile applications or platforms to share its data with other apps and platforms and
ease the user experience without involving the developers. For the most APIs eliminate the need to build a similar 
program or platform from scratch; you can use the existing one or some other app/platform. Because of these factors, 
both app developers and business leaders focus on the API development process.

### API Development Terminology

There are a number of terms that are used in API development that you need to be familiar with, in order to ensure you
are able to communicate effectively with your development team and ensure you are able to understand the process.

* **API** - Application Programming Interface is a set of clearly defined methods of communication between various 
  software components.
* **API Documentation** - API documentation is a technical content deliverable, containing instructions about how to 
  effectively use and integrate with an API. It’s a concise reference manual containing all the information required to 
  work with the API, with details about the functions, classes, return types, arguments and more, supported by tutorials 
  and examples.
* **API Endpoint** - An API endpoint is a point at which an application program interface (API) -- the code that allows 
  two software programs to communicate with each other -- connects with the software program. APIs work by sending 
  requests for information from a web application or web server and receiving a response.
* **API Gateway** - An API gateway is an API management tool that sits between a client and a collection of backend 
  services. An API gateway acts as a reverse proxy to accept all application programming interface (API) calls, 
  aggregate the various services required to fulfill them, and return the appropriate result.
* **API Key** - An API key is a unique identifier that is used to authenticate a user, developer, or calling program to 
  an API. It is a secret alphanumeric code that gives developers access to the API. API keys are used to track and 
  control how the API is being used, for example to prevent malicious use or abuse of the API.
* **API Management** - API management is the process of creating and publishing web application programming interfaces 
  (APIs), enforcing their usage policies, controlling access, nurturing the subscriber community, collecting and 
  analyzing usage statistics, and reporting on performance. API management components provide mechanisms and tools to 
  support developer and subscriber community.
* **API Versioning** - API versioning is the process of creating and managing multiple versions of an API. API versioning 
  is important for managing changes to an API over time. It helps you avoid having to maintain multiple versions of 
  back-end services to support older clients, and it allows you to roll out new versions of an API gradually.
* **API Testing** - API testing is a type of software testing that involves testing application programming interfaces 
  (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, 
  reliability, performance, and security. Since APIs lack a GUI, API testing is performed at the message layer.
* **API Security** - API security is the protection of the integrity of APIs, the underlying infrastructure and the data 
  processed and transmitted by them. API security involves protecting API keys and tokens, authenticating users, and 
  authorizing third-party applications to access data or invoke functions on behalf of users.
* **API Lifecycle** - The API lifecycle is a process that defines the management of an API from creation to deprecation. 
  The API lifecycle is a term that describes the time an API is created until it is retired. The API lifecycle typically 
  consists of four stages: planning, development, implementation, and retirement.
* **API Monitoring** - API monitoring is the process of observing the functional and non-functional characteristics of an 
  API and alerting when there is a deviation from expected behavior. API monitoring is a critical part of API management 
  and is essential to ensure APIs are performing as expected and meeting business requirements.
* **API Design** - API design is the process of developing application programming interfaces (APIs) that expose data 
  and application functionality for use by developers and users. API design is important because a well-designed API 
  reduces the amount of work required to implement it, simplifies the development process, reduces the likelihood of 
  errors, and improves user experience.
* **API Economy** - The API economy is the commercial exchange of services and data between businesses, organizations, 
  and consumers via application programming interfaces (APIs). The API economy is a term that describes the way application 
  programming interfaces (APIs) can positively affect an organization's profitability.
* **API Governance** - API governance is the process of ensuring that an organization's API strategy and implementation 
  meets business and technical objectives. API governance is a term that describes the way application programming 
  interfaces (APIs) are managed and controlled within an organization.
* **API Orchestration** - API orchestration is the process of integrating two or more APIs to produce a desired outcome 
  or create a new service. API orchestration is a term that describes the way application programming interfaces (APIs) 
  are integrated to produce a desired outcome or create a new service.
* **API Virtualization** - API virtualization is the process of creating virtual representations of APIs and services 
  that simulate the behavior of actual components for use in development and testing. API virtualization is a term that 
  describes the way application programming interfaces (APIs) are simulated to test their behavior.
* **API Portal** - An API portal is a website that provides access to APIs and tools for API management. API portals are 
  used by developers to discover, evaluate, and consume APIs.
* **API Sandbox** - An API sandbox is a virtual testing environment that enables developers to test applications without 
  the risk of compromising a production environment. API sandboxes are used by developers to test applications without 
  the risk of compromising a production environment.
* **API Developer Portal** - An API developer portal is a website that provides access to APIs and tools for API 
  management. API developer portals are used by developers to discover, evaluate, and consume APIs.

::get-started
::

### API Development Technologies

* **REST** - REST (Representational State Transfer) is an architectural style for developing web services. REST is 
  popular due to its simplicity and the fact that it builds upon existing systems and features of the internet's HTTP 
  in order to achieve its objectives, as opposed to creating new standards, frameworks and technologies.
* **SOAP** - SOAP (Simple Object Access Protocol) is a messaging protocol that allows programs that run on disparate 
  operating systems (such as Windows and Linux) to communicate using Hypertext Transfer Protocol (HTTP) and its 
  Extensible Markup Language (XML).
* **GraphQL** - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 
  GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for 
  exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
* **gRPC** - gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any 
  environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, 
  tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect 
  devices, mobile applications and browsers to backend services.
* **Webhooks** - A webhook is a way for an app to provide other applications with real-time information. A webhook 
  delivers data to other applications as it happens, meaning you get data immediately. Unlike typical APIs where you 
  would need to poll for data very frequently in order to get it real-time. This makes webhooks much more efficient for 
  both provider and consumer.
* **WebSockets** - WebSockets is a computer communications protocol, providing full-duplex communication channels over 
  a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011, and the WebSocket 
  API in Web IDL is being standardized by the W3C.
* **OpenAPI** - The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which 
  allows both humans and computers to discover and understand the capabilities of the service without access to source 
  code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and 
  interact with the remote service with a minimal amount of implementation logic.
* **Swagger** - Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, 
  build, document and consume REST APIs. The major Swagger tools include: Swagger Editor – browser-based editor where 
  you can write OpenAPI specs. Swagger UI – renders OpenAPI specs as inter
* **RAML** - RAML (RESTful API Modeling Language) is a YAML-based language for describing RESTful APIs. It provides all 
  the information necessary to describe RESTful or practically RESTful APIs. RAML is similar to Swagger in that it 
  provides a way to document APIs and generate client libraries, but it is different in that it is a complete API 
  description language that is independent of any particular implementation.
* **WSDL** - WSDL (Web Services Description Language) is an XML-based interface description language that is used for 
  describing the functionality offered by a web service. The acronym is also used for any specific WSDL description of 
  a web service (also referred to as a WSDL file), which provides a machine-readable description of how the service can 
  be called, what parameters it expects, and what data structures it returns.
* **WADL** - WADL (Web Application Description Language) is a machine-readable XML description of HTTP-based web 
  applications (typically REST web services). It is an XML dialect for describing RESTful web services. WADL was 
  submitted to the World Wide Web Consortium (W3C) by Sun Microsystems on 2009-04-24 and was accepted as a "Note" on 
  2009-10-01.
* **JSON Schema** - JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. JSON Schema 
  documents are identified by URIs, which can be used in HTTP Link headers, and inside JSON Schema documents to allow 
  recursive definitions.
* **JSON API** - JSON API is a specification for how a client should request that resources be fetched or modified, and 
  how a server should respond to those requests. JSON API is designed to minimize both the number of requests and the 
  amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, 
  flexibility, or discoverability.
* **HAL** - HAL (Hypertext Application Language) is a simple format that gives a consistent and easy way to hyperlink
* **OData** - OData (Open Data Protocol) is an ISO/IEC approved, OASIS standard that defines a set of best practices 
  for building and consuming RESTful APIs. OData helps you focus on your business logic while building RESTful APIs 
  without having to worry about the various approaches to define request and response headers, status codes, HTTP 
  methods, URL conventions, media types, payload formats, query options, etc. OData also provides guidance for tracking 
  changes, defining functions/actions for reusable procedures, and sending asynchronous/batch requests.
* **JSON-LD** - JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight Linked Data format. It is easy 
  for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data 
  interoperate at Web-scale. JSON-LD is an ideal data format for programming environments, REST Web services, and 
  unstructured databases such as CouchDB and MongoDB.
* **XML** - XML (Extensible Markup Language) is a markup language that defines a set of rules for encoding documents in 
  a format that is both human-readable and machine-readable. The design goals of XML emphasize simplicity, generality, 
  and usability across the Internet. It is a textual data format with strong support via Unicode for different human 
  languages. Although the design of XML focuses on documents, the language is widely used for the representation of API Return Types.
* **JSON** - JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read 
  and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming 
  Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent 
  but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, 
  JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.
* **YAML** - YAML (YAML Ain't Markup Language) is a human-readable data-serialization language. It is commonly used for 
  configuration files and in applications where data is being stored or transmitted. YAML targets many of the same 
  communications applications as Extensible Markup Language (XML) but has a minimal syntax which intentionally differs 
  from SGML. It uses both Python-style indentation to indicate nesting, and a more compact format that uses 
  [] for lists and {} for maps making YAML 1.2 a superset of JSON.
* **XML Schema** - XML Schema is an XML-based (and more powerful) alternative to DTD. It is used to describe and validate 
  the structure and the content of XML data. XML Schema defines the elements, attributes and data types. XML Schema 
  defines the structure of an XML document, just like a DTD. XML Schema is written in XML, while DTD is in a 
  separate language.

## API Design

The most important part of designing an API is to understand the business problem that needs to be solved, and then 
design an API that solves that problem in the simplest way possible. The API should be designed to be easy to use,
and easy to understand. 

This part of the process is often the most difficult, because it requires a deep understanding of the business problem
and the business domain. It also requires a deep understanding of the technology that will be used to implement the API.
It is also the part is most often overlooked, because it is the most difficult.  Developers often want to jump right
into the implementation, and they don't want to spend the time to understand the business problem and the business
domain.  This is a mistake, because it leads to an API that is difficult to use and difficult to understand.

In most cases, when this happens the API often ends up being a poor solution to the business problem, and it ends up
being difficult to use and difficult to understand.  This leads to a lot of frustration for the developers who are 
trying to use the API, and it leads to a lot of frustration for the developers who are trying to maintain the API.

The API often ends up being tightly coupled to the implementation of 1 front end application without taking into consideration 
that the primary objective of an API is to be used by multiple front end applications and number of different services. 

It is in these situations that you'll discover that you have in effect developed a [Backend for Frontend (BFF)](https://threenine.blog/posts/backend-for-frontend-design-pattern) API, and not
a true API.  This is not necessarily a bad thing, but it is important to understand the difference between the two, and the
limitations and benefits of this pattern, which more often than not is not the best solution to the problem, and also not the original
business intention, requirement and need of the API.

### Why Build APIs?
APIs are a way for software to communicate with other software, enabling applications to share data and functionality 
with other applications. APIs are also a great approach for enabling the synchronization of data between applications, 
and for enabling the integration of data between applications.

APis don't always have to be externally facing and they can be used internally within an organization to enable the
integration of data between internal applications.  This is often the case when an organization has a number of legacy applications
that need to be integrated with a new application, or when an organization has a number of applications that need to be
integrated with a new application. This is also the case when an organization has a number of applications that need to
be integrated to create new applications that depend on legacy data.

The

**Enhance Security**

APIs not only provide the interface but also control the access, the control of data and information. APIs are 
programmed in such a way that only authorized and authentic users can perform certain functions and access the data. 
A well-designed and developed API acts as a shield against all types of attacks and breaches.

**Streamline architectures**

With good APIs, you can program your back-end code and develop the app without any worries and independently from the 
user interface. APIs allow you to work on algorithms as per your brand’s goal and let you launch the app on both the 
mobile platforms iOS and Android and web. You can even rewrite and redesign your app’s UI using a newer framework 
without tampering with the actual functioning of the application.

**Improved testability**

APIs don’t only make developing easy but also make the testing of the app easy before it gets deployed or launched 
for the public. It also helps to test the UI before the app actually goes into the development phase because once the 
back-end gets involved testing the UI is the biggest headache, luckily APIs save you from that. And there is also an 
automated API testing feature.

**Scalability**

Instead of developing big unitary applications that will be hard to document or test, you can build complex and yet 
fun applications through all the independent modules available or modules of other applications via APIs.

**Better integration**

Most businesses rely on variant sets of software modules and applications to make their one application work. Hence, 
integrating all the modules together is the best way to let the application function without any delay, and what’s 
better than the APIs for the integration. Big enterprises like Google, Apple have many of their APIs public but it 
need not to be the case with you if you’re developing a customized application. A well-designed and developed API 
obviously lifts the performance of your application up and so can help your business to boom.

**Easy to use new technologies**

APIs let you internally connect with all the new and latest technologies without creating much fuss about rewriting 
the codes and connections.

**Better experience**

APIs help enhance application functionalities which in turn provides a better user experience.

**Faster development**

APIs spare you from the headache of designing and developing everything from scratch, which means faster and reliable 
development. You can simply integrate all the important features and add data from other applications.
One of the most important positive effect APIs has on developers and programmers that save the extra time they don’t
need to spend the extra time programming all the functions and services they can access from other applications via 
APIs, this saves time and hence, the fast development and faster deployment and more revenue.

::here-to-help
::