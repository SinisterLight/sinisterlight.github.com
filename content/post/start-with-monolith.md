---
title: "Why you should be making monolith?"
date: 2021-06-02T12:26:20+05:30
Description: "Premature optimisation is source of evil"
Tags: []
Categories: []
DisableComments: false
---
My primary guideline would be **"don't even consider micro-services unless you have a system that's too complex to manage as a monolith."** The majority of software systems should be built as a single monolithic application. Do pay attention to good modularity within that monolith, but don't try to separate it into separate services.

The first reason for this is classic [Yagni](https://martinfowler.com/bliki/Yagni.html). When you begin a new application, how sure are you that it will be useful to your users? It may be hard to scale a poorly designed but successful software system, but that's still a better place to be than its inverse. As we're now recognizing, often the best way to find out if a software idea is useful is to build a simplistic version of it and see how well it works out. During this first phase you need to prioritize speed (and thus cycle time for feedback), so the premium of microservices is a drag you should do without.

The second issue with starting with microservices is that they only work well if you come up with good, stable boundaries between the services - which is essentially the task of drawing up the right set of [BoundedContexts](https://martinfowler.com/bliki/BoundedContext.html). Any refactoring of functionality between services is much harder than it is in a monolith. But even experienced architects working in familiar domains have great difficulty getting boundaries right at the beginning. By building a monolith first, you can figure out what the right boundaries are, before a microservices design brushes a layer of treacle over them.

![monolith](/images/monolith.png)

The complexity that drives us to microservices can come from many sources

- dealing with large teams,
- multi-tenancy,
- supporting many user interaction models,
- allowing different business functions to evolve independently,
- scaling.
- But the biggest factor is that of sheer size - people finding they have a monolith that's too big to modify and deploy.

Microservices comes with its own set of complexities it requires a significant investment into

- Cloud infrastructure provisioning.
- Monitoring, specially given distributed nature of system
- Rapid application deployments.
- Significant upgrade in discipline and Software engineering practices of team.

Going beyond a handful of services requires more. You'll need to trace business transactions through multiple services and automate your provisioning and deployment by fully embracing [ContinuousDelivery](https://martinfowler.com/bliki/ContinuousDelivery.html). There's also the shift to [product centered teams](https://martinfowler.com/articles/microservices.html#OrganizedAroundBusinessCapabilities) that needs to be started. You'll need to organize your development environment so developers can easily swap between multiple repositories, libraries, and languages.

YAGNI!
