---
title: "What does’t work initially only makes you stronger — Team Lambda"
date: 2018-12-03T13:12:56+05:30
Description: "This is Part 2 of a feature story on Team Lambda and what it aims to do. For Part 1, click here"
Tags: []
Categories: []
DisableComments: false
---
This is Part 2 of a feature story on Team Lambda and what it aims to do. For Part 1, click [here]({{< ref "/post/team-focused-on-eventually-automating-everything" >}})

### Back to the basics — Simplify

To break dependencies, we had to think granular. I took a step back and thought about what we’re trying to solve. It all boiled down to this: For every event, we created an action. What if we could target this core and simplify it? It seemed so obvious in hindsight 😝

For example:

* Booking created -> find a driver
* Booking completed -> make payment
* Customer opened the app -> push shuffle cards
* Driver created -> create a chat profile

So if we write ‘functions’ for individual teams, they can take our ‘actors’ — or our core framework for solving from an event to an action. Let’s say we write an actor for GO-RIDE when a customer books a ride. Now, GO-PAY can get this data from a data pipeline and create their own set of actions on it.

>Now think of breaking down 500+ microservices and no one is dependant on the other. We’re creating a far more scalable and sustainable solution for teams to operate synchronously, yet asynchronously.

We finally had a solution. And our product could have far reaching consequences inside GO-JEK. Nearly every team can play around with Lambda actors. Most importantly, it drastically reduces the time taken for developers to worry about a million things and focus on bigger fish. We failed the first time, now, we had to buckle up and get this one right. New day, new mission, new rules.

### The secondcoming — We have a new mission

Now, we had a better idea of how to scale what we’re building. Our mission: **“Make developers happier and faster.”**

We wanted to standardise code so developers can focus on customer features instead of worrying about the ingress and egress of data . The practical issues of dealing with this data consumes a devs entire life. Instead of worrying about new features and products, devs were being burdened with a feature that was shipped 6 months back and wondering how that’s scaling.

This accruing debt is frustrating for devs and makes shipping things to production slow. After our initial attempts, we knew exactly what we wanted. We were building a playbook to handle scale — the kind GO-JEK witnesses on a daily basis. We were building a product that gave developers a chance to put something into production within minutes.

>Underlying message to scale: **ASK FORGIVENESS, OVER PERMISSION**

6 months after our new avatar, here’s what adoption of Lambda actors looks like:
An explosion of Lambda Actors

>Our aim is transform the way everyone writes code at GO-JEK.

But as is with everything we tinker with, this exercise taught us a few lessons. The definition of our team was narrow. We were attempting to do a lot without hacking at the roots. It is now time to think bigger, reinvent the team, broaden its scope and capabilities.

And that’s precisely what makes GO-JEK an engineer’s playground. We fail fast and build faster. Team Lambda is a classic example of this ethos — don’t talk, show. Now, we’re in another phase of experimentation and in couple of months, things might go really well or we might fail entirely. Either way, we live another day to tell these fascinating stories of doing cool, fun, interesting things. Watch this space for more.
