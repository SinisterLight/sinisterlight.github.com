---
title: "Engineering Governance"
date: 2020-08-09T22:58:21+05:30
Description: ""
Tags: []
Categories: []
DisableComments: false
---

*Last 5 years, I have been busy building Gojek, seeing this rocket ship grow from 10 million to 10 billion. Gojek is an South-east Asian superapp, with an army of products, the biggest ones being Transport, Food and Pay. In my time there, I kept moving teams and products building several of those Ground up by leading their engineering and product. I was also part of the CTO office, looking after the overall Engineering function and India office.*

*I wrote the following note sometime in the middle of 2018, after working on a barrage of problems at Gojek. Each of those problems were critical in nature but each of them also revealed deeper patterns of problems. Hence, I was building the “Kernel” team (Codename for Gojek’s Engineering platform), and thus wrote this vision doc, to keep guiding me and the team on what we were working towards. Today 2 years later, almost all of the items on the list are yet to be achieved. But the direction still holds true, it keeps guiding us and serves its purpose.*

A year ago, I moved from being responsible from Marketplace to Transport. Being new to understanding what that means, my conclusion was “I should just focus on the biggest problem”. That kept me busy for a while.Those “Biggest problems” changed all the time, Uptime, Education/Training, Org structure, Team collaboration, Morale, Hiring, Momentum. Hence, focus switched all the time, from one fire to another.

We were changing so quickly that we were practically a new company every 6 months, or on the flip side, this meant our processes and systems were always at least 6 months behind what was needed to support the growth and headcount. Training, coordination and context were always failing to scale. Entropy keeps on increasing, and managing it is the challenge.

Over the course of the year, I started wondering if there is any difference between running a part of a company and running a country’s government. You have to stand up within Global economy. You have border disputes and diplomacy. Budget allocation, Finance, Education, Health, Law, policies are all real problems in running a company. This made me wonder if my role is similar to that of a government.

And what should the governments do? All successful ones have been thinking long-term. They always believe in their people and empower them to succeed. And whenever they have capital they build infrastructure and a fair market. And then people take care of progress.

What's the point of hiring better people than yourself, if you want to tell them about everything they should do. Instead I should be focusing on what they need, and help them chase whatever they want to. Stating the objectives is very necessary, so that they can make their plans and see if everything fits together.

## Infrastructure

So what is infrastructure? Roads, highways, airways, internet, telecom, power stations. 3 fundamental type
* Communication
* Movement
* Energy

Globalization and Industrialization in the world was achieved on this type of infrastructure. So the two big questions remain
* So how do we scale this?
* And what does it mean with respect to us?

#### Communication

Communication for me is scaling the shared understanding of the problem at hand. All of us are trying to put in the best of our efforts in response to a problem at hand. Everyone has the right intentions and are passionate about what they are doing, but understanding each other comes in the way. There are analysts, engineers, designers, operations managers on a team, all of them are working on the same problem. They need to have a clear shared language.

I experienced this super power when working on the “marketplace” team, everyone was focused on one goal: “[New] Allocation Dashboard” - a single dashboard which everyone on the team, right from an engineer and analyst to the CEO would everyday be glued to. They would remember the shape of the curves and notice even subtle deviation. This bonded the team together, gave it a purpose. Everyone in the team understood what “Conversion rate” meant and why improving it was necessary. Each person on the team had things to discuss on this data across skill-sets. This power should be in reach of everyone.

#### Movement

Movement for me is all about “speed”. Our capability to induce change into the system. We are planning features which span out over months. What if we are able to come in the morning and decide to do something and by end of the day deliver to the customer? There will be no waste, no blockage. Flow will be achieved. **Momentum is necessary for motivation.**

Back in allocation days, we used to have a “Tactical” bucket in our backlog. This bucket consisted of quickly shippable items which were quick wins for everyone.

There was blockage everywhere, small features took ages. Infrastructure - especially in a post Trifecta world - has taken over the energy of backend developers, causing chain reaction blocking from Frontend to QA and design. A Fake class system is being perceived, all of it caused by “solutions” of the past, now coming back to haunt us.

Ideas like Continuous Delivery and Kanban facilitate speed, but confidence in embracing these practices is key. Today infrastructure is scary, we need to undo that. Better deployment tooling and standardization is important. No optimization can come before standardization. We need to help new folks coming in, and simplification is key.

#### Energy

Energy for me is about exponential returns. How can we get more out of the same amount of work we do? i.e Vertical scaling. How do we give everyone super powers? How can we focus on each user? Problem space is growing much faster than head counts. How can we still be on top of it? Personalization for every go-jek user is needed. Our Thinking space needs to expand to include them. Scientific mindset and the infrastructure to enable it needs to be built. Right behaviour should be easy to follow.

## Fair Market

But again just building infra of Communication, Movement and Energy won’t be enough. Government also needs to ensure the right environment for the citizens. Fair market, Freedom to experiment & challenge and safety are all essential. Nurturing Research and deep specializations is how frontiers will be pushed. That needs to be supported with a healthy environment. Creating the right conditions for progress to happen is the government's role. Right culture is needed.

#### Currency

Today most of the people in the company are working on a week on week roadmap, making their focus very short-term. We are risking our people being jaded. Several new hires are being staffed on a new product line, spreading us wider and wider, which is a linear scaling model. Go-jek is not what it is because of linear scaling. Exponential is what we need to aim for. We are heavily under-invested in exponential. We need much stronger tooling. There are only 2 kinds of system scaling - vertical or horizontal. Horizontal is about increasing headcount, which we are doing - but only with better people. Vertical scaling needs to happen all around, improving weapons our teams have in their hand. Teams like Asphalt, Systems, DE, Lambda exist solely for this purpose. Any investment  in such teams causes an exponential growth everywhere else.

Currency can be too inclined towards economics, but today’s need is to start valuing efficiency. We need to reflect on how we are setting up teams, this currency needs to be reflected in that. Anyone who helps everyone should be organically more valued in the ecosystem. ‘Collaborate with compassion’ is part of our value system.

#### Policy

Market policies should be favorable for growth. Policy for me is the territory of ‘cultural values’ territory. And I strongly believe in ‘Ask for forgiveness over permission’. Environment has to be built on trust, where we believe everyone has the right intentions and is aiming for greater good, while doing this, mistakes will happen. And it's Okay! We don’t need gate-keeping, but instead a safety net, so no one is afraid to “Shoot for greatness”. Engineers and everyone need freedom to run their ideas, and they should be allowed to. A good chunk of their time should be owned by them.

## Honeypot

Right policies and infrastructure will guarantee our optimization and evolution in the right direction. But we have to worry about a local optima. How do we know we are not at a false dawn? We have to always compare ourselves to the world's best.

The USA at its peak attracted the world's top talent and has led innovation from front. Simply saying, **Top Talent attracts Top Talent.** And we need to create the honeypot to do so.

Comparing ourselves to the world's best is necessary. Or else how do we know how good or bad we are? Companies such as LinkedIn, Lyft have built technologies Kafka and Envoy, both creating ideas which have potential to outlive these companies, and we need proof like that. Can we build something which will define how future engineers will think? Sky's the limit.

## Objectives for Engineering Function

An engineering team exists for one aim, “Making impossible, possible” - of course within laws of nature. Keeping this in mind and our current situations, we should chase:
* Metrics, visibility and monitoring for everyone - Display monitors everywhere
* Capability to bring change - iteration time is 1 day
* Every customer in an experiment bucket
* 20% personal time for everyone to try their ideas
* Most of our top talent to be focused on long term roadmap, instead of immediate economics
* Build something which will push frontiers of Engineering

