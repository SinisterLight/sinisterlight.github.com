---
title: "Team Focused on Eventually Automating Everything"
date: 2018-10-30T12:59:09+05:30
Description: "Lessons in untying dependencies and letting machines do the work"
Tags: []
Categories: []
DisableComments: false
---

Lessons in untying dependencies and letting machines do the work

This is Part 1 of a feature story on Team Lambda and what it aims to do. For Part 2, click [here]({{< ref "/post/team-focused-on-eventually-automating-everything-2" >}})

2015 to 2018 now is about 6600x growth in total order volume. Impressive as these numbers may be, it doesn’t tell you the decision-making in the backend for 500+ microservices. If you’ve been following some of the articles on our blog, you’d notice a pattern of sorts; failures are routine. A lot of us shy to talk about our failures, but being vocal about it makes us better, stronger, more eager to build and solve.

This is the story of Team Lambda; a team built out of part desperation, part necessity.
How to architect a solution

GO-JEK’s most integral service is transportation, and the Transport team was facing downtimes. This was my first ever team when I joined GO-JEK back in 2015. Since then, we’ve added thousands of drivers and multiple products growing faster than anyone could predict. Naturally, our systems were failing and uptime was a routine challenge. We had to address root causes and fix this once and for all or our customers would get irritated. We had to go back to the drawing board and nip this one in the bud.

>During this exercise, we created a SWAT team of sorts to solve routine issues for multiple products and teams. And that’s how Team Lambda was born. But i’m jumping the gun.

The first step of solving any problem is to articulate it. After a basic audit of our Transport team, we realised how interlinked each team is. For example, the Ride Service team is dependent on 34 other components. These dependencies bogged down our product and services. But how?
A House of Cards

Imagine this scenario: A customer finishes a ride and the payment needs to be made immediately. But the ride service is dependent on GO-PAY to complete its role of making this payment. And if that fails, then ride service is held up. So, deducting money from a consumer should ideally not be the concern of a ride service. Ideally, once the ride is done, the role of Team Ride Service is completed. (Now the driver can NEVER close the order — both are stranded waiting for GO-PAY to respond)

In this example, GO-PAY is a dependency on Ride. Because until the payment is not completed, the ‘ride’ is not completed. This is further compounded when you understand that should GO-PAY change a small line of code, everything on RIDE needs to be changed as well. Now, imagine 34 dependencies. You get the idea.

>This is again, obviously unique to GO-JEK because of our Super App status of 18 products and how each of them depend on the other.

Dependencies are the biggest enemies of uptime. So, if Ride Service has to give 99.9999% uptime, every other component needs to be up at same time. So how much uptime do all 34 of them need to give? It got us pulling hairs. The obvious solution was to reduce this number. The lesser the dependencies on other teams, the more focused each team is.

We began experimenting with the Transport team to write a simple notification service. It took us 2 months to write it. We projected it for 18 other products and realised this would take us at least 2 years for individual teams. And by the time we finish, it’d be useless — because that’s the nature of technology.

If we wanted to automate it all, we had to rethink scale, rethink the scope of automation and above all, the idea of the team was to make things easier for all developers. But our initial experiments taught us we weren’t thinking right. 2 months later, we were back to square one: We failed. Our strategy was half baked.

>Back to the drawing board…

More to come in the second part.
