---
layout: post
title: "Digital Ocean wants you to use larger droplets ?"
date: 2014-01-31 00:17
comments: true
categories: swap linux ram digitalocean cloud product
---

Digital ocean is a hugely popular cloud services provider. Recently
crossing 1 million launched VMs. With sophisticated UI and cheapest prices on the
block, they are providing an awesome service. They are frequently giving out
coupon codes making it easier/attractive to get started.

Digital ocean have several limitations as a cloud service provider,
but one thing they can boast of is *__less than a cent per hour hosting__*. 
Their lowest droplet plan is of $5 per month, with respectable 512MB RAM.
SSD is the MVP for digital ocean, you see that written in big bold letters 
on every advertisement out there. But interesting thing is that they give
 **O swap space** by default.

Swap space is a dedicated memory for OS on disk, and their disk being SSDs should
be a lot faster than HDDs considering 0 seek time and multiple reads.
Technically there machines should have a very fast swap
space compared to other HDD based cloud services providers like, AWS.
But their default configuration has no swap. Their forums are cluttered user 
complaining about 'out of memory' issues of MySql and what not.

They are giving these cheap plans for the sake of **"Cheapest provider
in market"** tag. But they want their users to use larger machines.
They have written [blog posts](https://www.digitalocean.com/community/articles/how-to-configure-virtual-memory-swap-file-on-a-vps)
about how to enable swap space but they won't do it by default, knowing 
very well most of the user won't do it at all and will just go for larger droplets 
even if there RAM needs are minimal. This a silent way for them for discouraging 
$5-10 low memory VMs.

Users are coming to there platform because they are most cost efficient.
They start working on their lower performance VMs. This is a quiet intelligent and 
disguised way for pushing them to use larger VMs. Cheaper VMs serve the
purpose of bringing users to there service and this is an intelligent
way to make them feel that they need bigger droplets.

It would be interesting to see some metrics on how many users upgrade
there VMs from these smaller sizes compared to other service providers.

PS. - [To learn how to enable swap space on your digital ocean droplets, visit this.](https://www.digitalocean.com/community/articles/how-to-add-swap-on-centos-6)
