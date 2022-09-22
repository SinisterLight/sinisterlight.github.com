---
title: "Evolution of Microservices"
date: 2022-05-03T17:58:54+05:30
Description: "How microservices evolved over time"
Tags: ["microservices","history", "evolution"]
Categories: []
DisableComments: false
---

Since the dawn of time, we have been finding better ways of building systems. The whole process of improvement has been evolutionary in nature. Learning from what came before and building and extending whatever is working. Accelerating change is challenging companies to keep customers & teams happy.

In this endless churn, microservices have emerged as a leading pattern. Over last decade, we've seen many projects use this style. Successful results has made this the default style for building applications.

In short, the microservice architectural style is an approach to developing a single application as a suite of small services. Each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.

> Sam Newman in his excellent book, Building microservices mentions -
>
> "Domain-driven design. Continuous delivery. On-demand virtualization. Infrastructure automation. Small autonomous teams. Systems at scale. Microservices have emerged from this world. They weren’t invented or described before the fact; they emerged as a trend, or a pattern, from real-world use. But they exist only because of all that has gone before."

Simply put, Microservices is a decompositional technique, with goal of providing focus.
With benefits being

* Technical Heterogeneity
* Resilience
* Scaling
* Composability
* Optimising for replaceability
* Ease of deployment
* Organisational alignment

The term "microservice" was discussed at a workshop of software architects near Venice in May, 2011. It was used to describe what the participants saw as a common architectural style that many of them had been recently exploring. In May 2012, the same group decided on "microservices" as the most appropriate name. But the term could be tracked back as early as 2005, Peter Rodgers introduced the term "Micro-Web-Services" during a presentation at the Web Services Edge conference right in middle of popularity peak of SOA.

In spite of such long history, there is still some confusion about how they are different from previous generation of design called "Service -oriented Architecture" (SOA). Some people believe Microservices is SOA done right. Alexander Pasik of Gartner coined the term "SOA" in 1994. In early 2000s, Microsoft came up with a big push on webservices, and SOA was natural architecture style that worked well with webservices. As webservices became popular, SOA became popular. Although they were two independent ideas. SOA is architectural style while webservices was implementation.

But SOA was not invented in 90s, Alexander Pasik gave name to something that already existed. He wanted a new name to describe what they were doing and differentiate from "Client-server", which by then had become meaningless as a term. And the pattern was repeating itself with SOA in 2000s.

> "Service-Oriented Architecture (SOA) is a very broad term and practically meaningless. Microservices is a subset of SOA with the value being that it allows us to put label on this useful subset of a SOA terminology." - Martin Fowler

Fowler ended up defining key attributes of Microservices-

* Componentisation - the ability to replace parts of a system. Comparing with stereo components where each piece can be replaced independently from the others.
* Organisation around business capabilities instead of technology.
* Smart endpoints and dumb pipes, explicitly avoiding the use of an Enterprise Service Bus(ESB).
* Decentralised data management with one databased for each service instead of one database for the whole company.
* Infrastructure automation with continuous delivery being mandatory.

But all these properties were aspects of SOA done right. In fact, Jim webber defined these as part of his design called "guerrilla SOA".

SOA were not too different from microservices, but the term got too over loaded. And thus a new term was needed to articulate similar core ideas. Probably same thing will happen to "microservices" as a term (Some may argue, it has happened already).

Technology like fashion can come in cycles, and this is not only limited to microservices. Even the origins of popular concepts like "event sourcing" have roots back to mainframe system's "transaction file" in 60s.

For engineers, it is important to not get lost in the latest fad and understand the core principles on which the ideas are built. The ideas on which microservices are being built have passed the test of time. All the roots lead back to Distributed system, concurrency patterns, queuing theory etc. To master them, it is important to understand these foundations.

When done right microservices can be essential in accelerating growth of any organisation. But only when done right! Everything is a trade-off. Watch this space for consequent posts on doing microservices right.

## References

* https://en.wikipedia.org/wiki/Microservices
* https://en.wikipedia.org/wiki/Service-oriented_architecture
* https://martinfowler.com/articles/microservices.html
* https://dzone.com/articles/microservices-vs-soa-whats-the-difference
* https://www.infoq.com/news/2014/11/gotober-fowler-microservices/
* https://www.infoq.com/news/2016/11/microservices-history/
* https://www.infoq.com/interviews/jim-webber-qcon-london/
* https://www.infoq.com/presentations/webber-guerilla-soa/
* https://samnewman.io/books/building_microservices/
