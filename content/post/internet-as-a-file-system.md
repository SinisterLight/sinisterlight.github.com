---
title: "Internet as a File System"
date: 2023-11-07T17:58:54+05:30
Description: "How file system view of internet has evolved over time"
Tags: ["internet", "file system", "history", "evolution"]
Categories: []
DisableComments: false
---

reposting from - [https://blog.shovel.company/p/internet-as-a-file-system](https://blog.shovel.company/p/internet-as-a-file-system)

## Web1.0 - Genesis
August 6, 1991, Tim Berners-Lee announced the “WorldWideWeb” to a newsgroup called alt.hypertext. He wrote -

> “The WorldWideWeb (WWW) project aims to allow links to be made to any information anywhere.”

The WorldWideWeb project had 4 key components - HTML, HTTP, Browser and a Server. It was the beginning of a revolution. Soon, people around the world started extending the core ideas of the project.

In 1993, building on Tim Berners-Lee’s initial browser prototype, a team at the National Center of Supercomputing Applications (NCSA) decided to implement their version. With that, the first popular browser was born: NCSA Mosaic.

While WorldWideWeb had a WYSIWYG (what you see is what you get) editor, with Mosaic you could only open and browse HTML pages. All the editing features disappeared in this browser. It introduced the URL bar which wasn't visible in WorldWideWeb. You could only open the HTML sources (via the view source feature) or via an external editor application.

Mosaic influenced the long-term future of web browsers and the influence is visible even in today's browser UI. It was very early days for the Web and it was a read-only medium. HTTP had no spec and it just supported GET method.

## Web2.0 - WebDAV
HTTP/1.0 became a formal RFC in 1996. At the same time, Jim Whitehead - a PhD student from the University of Irvine - started working with W3C on the problem of, “distributed authoring”. The original vision of the web involved the mediums of both reading and writing. Jim and several other like-minded people wanted to break the limitations of Web 1.0, which was read-only, and move towards Web 2.0; which would be both read & write.

This led to the creation of “Web Distributed Authoring and Versioning” (WebDAV a.k.a DAV) as a set of extensions to HTTP. Jim wrote -

> "WebDAV is extending HTTP to provide a standard infrastructure for asynchronous collaborative authoring across the Internet. The WebDAV extensions support the use of HTTP for interoperable publishing of a variety of content, providing a common interface to many types of repositories and making the Web analogous to a large-grain, network-accessible file system.”

WebDAV had a filesystem view of the internet. The WebDAV protocol provides a framework for users to create, change and move documents on a server. The most important features include the maintenance of properties about an author or modification date, namespace management, collections, and overwrite protection.

The vision of WebDAV was huge and the protocol working group took a phased approach. It became an Internet standard in 1999, the first RFC focused on “distributed authoring”. WebDAV extended HTTP to introduce new methods like LOCK/UNLOCK/MKCOL etc for easier design of the servers. This approach moved most of the heavy lifting to the protocol layer and standardised the interfaces for servers. Right from its inception, WebDAV received great reception, and Microsoft Office 2000 was shipping it.

The next RFC of protocol focused on the “versioning”. They set out to build protocol by improving the design of CVS (Concurrent version systems) - which was the dominant version control system of the time. The chosen design was server-first in nature, without even a local checkout of files. Iterations continued on WebDAV till 2007 and a total of 5 RFCs focused on various aspects of protocol.

The design choice of extending HTTP and introducing new methods eventually turned out to be its limitation. Companies building APIs focused on basic features of HTTP/1.1 and ended up their own proprietary ways of updating data on the servers. People who were looking for some sanity in API design settled on REST (2005) which was a more convention-driven way of building APIs than a protocol.

This was the end of WebDAV becoming a general-purpose protocol, but it found adoption in specific problems. Personal information management (PIM) category products like calendars, notes & address books adopted it. It became a base layer for other successful protocols working on data interoperability like CardDAV (address book protocol) and CalDAV (calendaring protocol).

CalDAV (2007) and CardDAV (2011) were both led by Cyrus Daboo, from Apple. Apple being a hardware-first company, had a more “synchronisation” layer view of the cloud - not so different from the emerging “Local-first” paradigm. Google also adopted these protocols for their ecosystem, although they also offered alternative proprietary APIs for the same data. Both protocols have been very successful, providing a foundation for the App ecosystem. Yet far from the original vision of WebDAV for the end-users.

In the world of APIs, a lot of interoperability is sacrificed. Tim Berners-Lee, since 1999 has talked about the idea of the “Semantic Web”. It would make Internet data machine-readable and interoperability standards to enable context-understanding programs to intelligently select information for users. In 2006, he mentioned Semantic Web to be an essential part of Web3.0 but, it never took off.

## Web3 - IPFS
In 2008, Bitcoin was invented. It was the first practical application of blockchain technology, and it started a new technological movement. This movement was later termed “Web3” by the Ethereum co-founder Gavin Wood in 2014. It also became an umbrella term for the revival of old ideas of improving the web. Decentralisation & interoperability became the ideas of the movement.

Juan Bennet built the “Inter-planetary File System” (IPFS) in 2014. IPFS was another attempt at building a global distributed file system. Instead of extending HTTP - like WebDAV - It set out to be an alternative to HTTP for several data distribution use cases.

IPFS was heavily influenced by the version control system - Git, due to its decentralised design. Linus Torvalds created Git in 2005. He was looking for a decentralised version control system for managing the development of Linux. He mentioned -

> ”In many ways you can just see git as a filesystem—it's content-addressable, and it has a notion of versioning”.

IPFS took the idea of “content-addressing” and redefined the URLs to point to data rather than location which keeps data. Making data available over a globally decentralised address space.

It is very early days for IPFS and Web3. Most of Web3's adoption has come from “Wild West” style cryptocurrency projects. IPFS has seen adoption for “permanent web” hosting use cases, like running Wikipedia mirrors, and also immutable hyperlinks in blockchain records, like NFT.

Browsers are showing interest in using IPFS and the famous toolkit - Curl, recently added support for IPFS.

## Internet as a File System
Many new perspectives of the “future of the internet” are popping up and gaining mainstream momentum like “Internet computer”, “Personal cloud”, “local-first” etc. All of them are quite similar as they are working towards the same vision of “decentralising web”.

Platforms of Web2.0 are the largest as they have ever been and the APIs are “server-first” in nature. As the design of the Web is moving forward, we are looking to bake in “Credible-exit” for the end-users. Currently, data for end-users is locked in by the vendors.

Government regulations like GDPR, have forced companies to provide a solution to this problem. As a result, we are seeing “export as a zip” options on several platforms, which is largely useless for the majority of end-users.

This is where a file system which supports interoperability between the apps becomes extremely critical to the design of the web. We believe many protocols will emerge on top of such a file system to solve problems around specific data types. At Shovel, we are accelerating this future by designing an address book protocol for this world.

## Sources
* https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt
* https://techno-barje.fr/post/2023/10/20/history-of-edition-and-publishing-in-web-browsers/
* https://en.wikipedia.org/wiki/WebDAV
* https://users.soe.ucsc.edu/~ejw/papers/webdav_intro_ic.pdf
* http://www.webdav.org/deltav/WWW10/deltav-www10.pdf
* [http://www.dsc.ufcg.edu.br/~garcia/cursos/dglobal_software/Textos_Sem/Future of Distributed Software Development.htm](http://www.dsc.ufcg.edu.br/~garcia/cursos/dglobal_software/Textos_Sem/Future of Distributed Software Development.htm)
* https://docs.ipfs.tech/concepts/what-is-ipfs/
* https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf
* https://en.wikipedia.org/wiki/Git