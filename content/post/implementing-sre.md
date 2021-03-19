---
title: "Implementing SL{A, I, O}s"
date: 2021-03-19T17:56:42+05:30
Description: ""
Tags: []
Categories: []
DisableComments: false
---
*This document was written by me, [deba](https://twitter.com/deba_ghtk) and [prashant](https://twitter.com/prashant_mit) wrote this document for observability whitepaper written by [CNCF's](https://cncf.io) [sig-observability](https://github.com/cncf/sig-observability) group.*

## Purpose

* Objective measure : Lets you measure quality of service and customer happiness
* Common Grammar: Provides common language between business, engineering and product folks
* Solves prioritisation: Provides quantitative measure of when to prioritise feature delivery vs engineering reliability tasks
* Accountability: Everyone understand business consequences of breaching the SLO

## Definitions

* Service Level Indicator (SLI): An SLI is a service level indicator—a carefully defined quantitative measure of some aspect of the level of service that is provided.
* Service Level Objective (SLO): An SLO is a service level objective: objective for how often you can afford for it to fail. a target value or range of values for a service level that is measured by an SLI
* Service Level Agreement (SLA): a business contract that includes consequences of violating the SLO. This is a targeted percentage
* Error budget: tolerance for failed events over a period of time determined by SLO. This is 100% minus the SLO

## Implementation

### Getting buy-in from business stakeholders

* In order for a proposed SLO to be useful and effective, you will need to get all stakeholders to agree to it.
* The product managers have to agree that this threshold is good enough for users—performance below this value is unacceptably low and worth spending engineering time to fix.
* The product developers need to agree that if the error budget has been exhausted, they will take some steps to reduce risk to users until the service is back in budget.
* The team responsible for the production environment who are tasked with defending this SLO have agreed that it is defensible without Herculean effort, excessive toil, and burnout—all of which are damaging to the long-term health of the team and service.

### Lifecycle

![Lifecycle](/images/implementing-sre.svg)

## References

* [Google SRE book: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)
* [Google SRE workbook: Implementing SLOs](https://sre.google/workbook/implementing-slos/)
