---
title: What is an API?
subtitle: Discover how APIs enable revolutionise your business and how they relate to the products of your organization.
description: What is API First? Discover how developing your API first will enable developing better and more products of your organization.
summary: 
category:
  title: API Development
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /garywoodfine.png
  role: Founder & CTO
featureImage:
  url: /images/what-is-an-api.jpg
  title:  What is an API?
publishDate: 01 June 2023
publishDateTime: 2023-06-01:17:30
---

In today's competitive digital world, APIs are the foundation of digital transformation. They enable organizations to 
deliver new products and services to customers, partners, and employees. They are more than just a new software project
or technology. They are a business strategy that enables organizations to create new business models, accelerate 
innovation, and unlock hidden value in existing systems and data.

Although your organisation may think that handing control of the development of your API to a third party or internal enterprise development
may be a good idea, it is not.  You need to be in control of your API development and ensure that you are following 
best practices and standards.  You need to ensure that you are following an [API First approach](https://threenine.blog/posts/what-is-api-first "What is API first | threenine.co.uk").

It also recommended that non-technical stakeholders within your organisation also understand the basics of APIs and
how they can be used to help your organisation achieve its goals. This article is designed to help you understand
the basics of APIs and how they can be used to help your organisation achieve its goals, and more importantly help
non-technical stakeholder drive and steer the API development process.

## What is an API?

An API, or _Application Programming Interface_, is a set of defined rules that enable different applications to 
communicate with each other, acting as an intermediary layer to processes that transfer and transform data between systems, enabling 
organisations to open their application data and functionality to external third-party developers, business partners, and 
internal departments.

The definitions and protocols within an API help businesses connect the many different applications they use in
day-to-day operations, saving employee time and breaking down silos hindering collaboration and innovation. For 
developers, API documentation provides the interface for communication between applications, simplifying application 
integration.

::get-started
::

### How do API's work?

The best way to try and understand how API's work is to consider this contrived and simple and relatively common example,
taking a look at _third-party payment processing_.

* A user initiates a purchase of a product from an ecommerce vendor website, they may be prompted to make a payment making 
a choice from a number of third-party payment processing system. This function relies on APIs to make the connection.

* When the buyer clicks the payment button, an API calls to retrieve information—also known as a request. This request 
is processed from an application to the web server via the API’s _Uniform Resource Identifier (URI)_ and includes a
request verb, headers, and sometimes, a request body.

* What is often forgotten, is that under the hood, these third party payment processes will also initiate further API 
requests to other systems and third-parties to enable payments. The average payment process may actually initiate several 
additional requests to a number of different systems and partners

* After receiving a valid request from the product webpage, the API makes a call to the external program or web server, 
in this case, the third-party payment system.


* The server sends a response to the API with the requested information.


* The API transfers the data to the initial requesting application, here the product website.

While the data transfer will differ depending on the web service being used, the requests and responses all happen 
through an API. There is no visibility on the user interface, meaning APIs exchange data within the computer or 
application, and appear to the user as a seamless connection.  The user is not aware of the complexity of the process
and the number of systems involved in the process, they are only aware of the final outcome.

![Payment Processing API](/images/payment-processing-flow.png)

### Why are APIs important?

Ultimately APIs simplify design and development of new applications and services, and integration and management of existing ones. 
However, they also offer a number of significant benefits to developers and organizations.

#### Enabled improved and closer collaboration

The average enterprise utilises a myriad of cloud applications, and 92% of organizations say they have a multi-cloud
environments many of which are disconnected. APIs enable integration so that these platforms and apps can seamlessly communicate 
with one another. Through this integration, companies are enabled to automate workflows and improve workplace collaboration. 
Without APIs, many enterprises would lack connectivity, causing information silos that compromise productivity and 
performance.

#### Accelerate innovation

APIs provide flexibility, enabling organisations to develop connections with new business partners, 
offer new services to their existing market, and, ultimately, access new markets to generate additional revenue streams. 

An example of a company starting with just seven lines of code, [Stripe](https://stripe.com/gb). The company
has since partnered with many of the biggest enterprises in the world, diversified to offer loans and corporate cards, 
and was valued as much USD 95 billion in 2022.

#### Data monetization 

Many companies choose to offer APIs for free, at least initially, to enable them to build an 
audience of developers around their brand and forge relationships with potential business partners. If the API grants 
access to valuable digital assets, the business may monetize it by selling access. This is often referred to as the _API 
Economy_. 

AccuWeather, a private-sector American media company that provides commercial weather forecasting services worldwide,
launched its self-service developer portal to sell a wide range of API packages, it took just 10 months to attract 
**24,000 developers**, selling 11,000 API keys and building a thriving community in the process.

#### System security

APIs separate the requesting application from the infrastructure of the responding service, and offer 
layers of security between the two as they communicate. For example, API calls typically require authentication 
credentials; HTTP headers, cookies or query strings can provide additional security during data exchange and an 
[API gateway](https://threenine.blog/posts/api-gateway-pattern) can control access to further minimize security threats.

#### End-user security and privacy

APIs not only provide protection within a network, they can also provide additional layers of security and protection for end users.
When a website requests a user’s location, which is provided via a location API, the user can then decide whether to 
allow or deny this request. Many web browsers and mobile operating systems, like iOS, have permission structures 
built-in when APIs request access to applications and their data. When the app must access files through an API, file 
systems such as windows, Mac and Linux use permissions for that access.

#### Improved user experience

APIs enable developers to create applications that are more user-friendly and intuitive. For example, 
when a user enters a destination into a navigation app, the app uses a location API to determine the user’s current
location and provide directions to the destination. The app can also use a weather API to provide real-time weather
updates along the route.

#### Improved developer experience

APIs enable developers to build applications faster and more efficiently. For example, a developer can use a
payment API to integrate a payment gateway into an application, rather than building the payment gateway from scratch.
This saves time and resources, and enables developers to focus on other more business focused aspects of the application.

#### Improved business agility

APIs enable organizations to quickly adapt to changing market conditions and customer needs. For example,
a company can use a payment API to quickly add new payment methods to its website or mobile app, or a weather API to
provide real-time weather updates to its customers.

### What the types of APIs?

APIs enable applications to expose data and functionality over the internet. APIs can be grouped and categorised into 
four main types:

#### Open APIs 

These are open-source application programming interfaces you can access with the HTTP protocol. Also known as public 
APIs, they have defined API endpoints and request and response formats.


#### Partner APIs 

Enable connectivity with strategic business partners. Typically, developers access these APIs in self-service mode 
through a public API developer portal. Still, they need to complete an onboarding process and get login credentials to
access partner APIs.


#### Internal APIs 

Typically, these API remain hidden from external users, and therefore aren't available for users outside of an organisation
and are instead intended to improve productivity and communication across different internal development teams.


#### Composite APIs 

This type of API combine multiple data or service APIs, Enabling developers to access several endpoints in a single call. 
Composite APIs are useful in microservices architecture where performing a single task may require information from 
several sources.