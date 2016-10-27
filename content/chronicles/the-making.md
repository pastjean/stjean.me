---
title: "The making"
date: "2016-10-25T14:00:00-05:00"
tags:
  - Go
  - Hugo
  - Static
  - Blog
---

The making of a blog, not too ugly, with somewhat interesting content.

A software engineer needs a website. At least, I was told so. 
I'll keep it short and simple. I'm more of a backend and infrastructure guy but I try
to keep up to date with recent developments in front-end, web and user experience world.

## Old site

I started with a complex design, where we couldn't see everything.

<div class="tc">
  <img alt="Startup iteration" src="/images/chronicles/the-making/v0.png">
</div>

## Redesign

Redoing the design was an interesting experience and I decided to make things with a 
more minimalistic approach.

<div class="tc">
  <img alt="Redesign iteration" src="/images/chronicles/the-making/v1.png">
</div>

The final product will look like this. It sure doesn't look like it now but with the 
incremental approach it fits well.

<div class="tc">
  <img alt="Final design" src="/images/chronicles/the-making/v2.png">
</div>

## Implementation

From the final design, I am implementing as incremental baby steps.
Trying to deliver, as often as I can, with small iterations over here and there.

The first iteration of this site was made using jekyll, but since I'm a
[go](https://golang.org) fanboy, I recently switched it to [hugo](https://gohugo.io)
for the latest do-over. Hugo also being way faster and easier to install than a any ruby
software.

Here's the basic stack:

- [hugo](https://gohugo.io) - The static site generator
- [tachyons](http://tachyons.io/) - The revolutionary css framework
- [highlight.js](https://highlightjs.org) - Simple syntax highlighting

That's all. Nothing more.

I still have in mind to build my own cms or simple engine with an embedded search.
Tough I wanted to learn more about writing than programming. And there are no better
ways to learn writing than to write.

<div class="pa4">
  <blockquote class="athelas ml0 mt0 pl4 bl bw2 b--blue">
    <p class="f5 f4-m f3-l lh-copy measure mt0">  
      Start small, make it usable, build over it, refactor as you pass through strange things.
    </p>
  </blockquote>
</div>