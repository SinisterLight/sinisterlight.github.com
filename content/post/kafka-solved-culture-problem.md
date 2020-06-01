---
title: "How Kafka Solved a Culture Problem at GOJEK"
date: 2019-02-14T01:59:43+05:30
Description: "Software stopped us from scaling, software set us free."
Tags: []
Categories: []
DisableComments: false
---
Software can solve cultural problems. While that might seem outlandish, if you’re a developer, you might just get what I mean. Think about it carefully; it can repeat mundane tasks, making people more productive. It can solve complex problems, so devs can focus on pressing tasks.

However, it can also complicate culture; like introducing a biometric system to track employee attendance, and have software track sick leaves.

>In essence, an organisation’s tech stack will reflect the health of the company.

If you’re focused on writing beautiful code, it’s likely that employees are disciplined, organised, and believe in the company’s values. It’s really not that far-fetched a correlation.

This is a similar story; the story of Kafka — an open source tool that solved culture for us. Will try and simplify this for a broad audience, so devs, please bear with me if some explanations seem obvious and trite.
Before the Law — Chaos

In late 2015, unprecedented scale and failures were routine at GOJEK. It also weighed heavily on culture — because firefighting when systems are down bogs down morale and creates a fractious lot. It was truly Kafkaesque. (See what I did there? 😉). These fractures were common in our early days, because all developers depended on our core systems.

We had about 10+ products at the time and about 60+ developers (Today, we have 18+ products with 250+ developers overseeing them). These 60 passionate devs saw the chance to build products, solve complex problems and moved fast to meet rapacious demand. Naturally, people were doing their own work, writing code in their own style, and had to sync with others to deploy what they wrote.

At the core of GOJEK is ‘Allocations’; — a classic matchmaking engine between the driver and the customer. All surrounding teams depended on this one team to add features, beta test their offerings, and much more. If GO-FOOD wanted to allocate a 4-star driver to some orders, they had to raise a ‘ticket’ with the Allocations team. The Allocations team then processed this for GO-FOOD.

>Now, think of 50 developers asking Allocations to push their features first.

Soon, the org was heavily dependent on relationships. If Ekta from GO-BOX had a strong relationship with Jane in Allocations, Ekta would get preference on her features. This became problematic for us and as the org scaled, it added more cultural biases. Jane also became the defacto gatekeeper.Everyone had to toe her line if they wanted to build and deploy their own features. To add to this, Allocations was pushing back and severely lagging behind, because 50-odd developers were adding and testing 10 features a day.

Before you knew it, Allocations became the bottleneck to scale the org. As if all that wasn’t enough, the team was not doing its own testing and experiments to make Allocations better and sharper. Things were spiralling downwards.
A patch would not do, we needed a fix

It was apparent we had to fix this problem — once and for all. The ‘Relationship-as-a-Service’ model was a disaster. RaaS was endemic in the org. Things were fine at a macro level, but at the base of it, we were failing.

We needed a solution that gave everyone the freedom to build and experiment. We wanted folks to think they’re building individual products from scratch without any reliance. Easier said that done, right?

>This was the genesis of GOJEK’s philosophy of building a #SuperApp — a chance to build startups within a startup.

We wanted to unleash our best minds to build, and not worry about RaaS.After some research and consensus across the board, we were all sold on Kafka. Software was going to solve our RaaS problem. Ambitious? Maybe. Pragmatic? Damn right.
gojek.jobs
Forget the morose writer

Every team was mandated to broadcast events on Kafka. If a driver booking was made, it was sent to Kafka. If a driver completed the ride, it was sent to Kafka. Kafka became the bus that carried the millions of events happening inside GOJEK.

>Anything and everything individual teams did was visible to anyone and everyone inside GO-JEK.

If a team wanted to test features or roll out updates, they merely had to rely on Kafka. No more RaaS. No more long waiting periods. This unleashed the productivity of every developer. The day we rolled out Kafka, we killed the gatekeeper. Information was free and accessible to all. We were solving software problems, but deep down, culture was the bigger fix.

>Today, we emit 350,000,000 messages on Kafka and it’s every engineers’ playground.

Our two-pizza team rule became far more efficient, and now we were solving bigger problems. This is also an example of how we look at Lean Engineering, but that’s a story for another day.
Das Urteil — But positive Metamorphosis

‘Das Urteil’ means ‘The Judgement’, and Franz Kafka published this book in 1913. Metamorphosis was published in 1915. The latter talks about how a salesman turned into an insect and struggles to live. It’s classic Franz Kafka; deeply sad, complex and incredibly gut-wrenching.

In our case, The Judgement was of an insect metamorphosing into a butterfly. It didn’t happen overnight, but this was our tipping point. Our tech stack began to reflect organisation culture.

Kafka solved a critical cultural problem for us. 💪

