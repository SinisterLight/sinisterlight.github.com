---
title: "Art of Writing Rcas"
date: 2020-03-29T01:56:47+05:30
Description: ""
Tags: []
Categories: []
DisableComments: false
---

Recently I have been reviewing RCAs filled by Engineers all over the company, to understand what are the common patterns that we need to improve on. One thing that stood out was how astonishingly high numbers of these RCAs were poorly done. First looking at a few of them, made me cringe on, How can people take this so lightly ? Or Why are their managers not pressing them ? But looking at the large pattern it made me question, do people even understand why we do what we do ? Why do we ask people to do RCAs ? Is it just a matter of compliance or an opportunity ?

In engineering, we have been always advocating “Design for failures”. After all words like fault tolerance, stress testing, chaos engineering etc. are part of Engineering literature. System design is the core of what we do. All stable systems are resilient. Murphy’s law states, “whatever can go wrong will go wrong”. Systems which accept failure as nature can learn and improve, while systems which turn blind eye to failures remain at standstill. Almost all practices we talk about in engineering keep this core idea in mind.

For example, Why do we advocate unit testing ? It definitely gives you confidence that whatever you are doing works. But the reality is whatever you are writing right now will change soon. Requirements change all the time, and that’s okay. How will we change this piece of code when the original guy is no longer there to tell you what he did ? Changing already running code is like performing surgery, you don’t want to leave anything behind.

Assuming reliability is top fallacy in computing. Believing that we will never make mistakes is naive idealism. Making mistakes is completely okay, but not learning from them is criminal, what these incidents provide us an opportunity with. Writing incident reports is a learning opportunity that we need to take with both hands. But somehow 20% of RCAs we do are just for the sake of compliance.

So when you notice your systems failing in some way, take this as an opportunity and volunteer. Writing a good RCA will help you understand the layers of onion on which it is built. It gives a peek into how something depends on others.

Good RCAs are blameless. Blame comes in the way of learning. It causes fear. Fear creates cover ups and hurts our risk taking. And in the long term our ability to innovate and solve problems effectively. How and Why are far more important than Who.

Good RCAs focus on the root cause rather than symptoms. They understand sometimes multiple things can contribute to failure. Real answers can be complicated. Five Whys? Is a good technique to follow.

Good RCAs are cognizant of our biases. Sometimes we already “know” what the failure is, this can mislead to wrong causes. Being methodological and sometimes mechanical is the key to truly understand the problems, or our mind itself can come in the way. Assumptions are not facts. Peer reviews are helpful, it is easier for other people to spot your assumptions than yourself.

Good RCAs provide both long term and short term solutions. Sometimes it could be tempting to suggest a rewrite as an action item, but what happens to customers in the short term ? All good teams champions for their customers. But this doesn’t mean we ignore the long term, after all tape on something fundamentally flawed will go so far.

We will always make mistakes, but the overall goal of the process is to make different mistakes. Keep learning.
