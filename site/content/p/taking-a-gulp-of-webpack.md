+++
title = "Taking a big Gulp of Webpack"
draft = false
date = "2017-01-21T09:53:51+01:00"
categories = ["code"]
tags = ["gulp", "webpack", "javascript", "boilerplate", "es6", "nunjucks"]
+++
The last two weeks I've been struggling to understand Webpack. My lack of understanding of it left me to struggle even more with trying to configure it to work together with Gulp. It's been frustrating to say the least.

All was well before Webpack.

A little while ago I needed to build a small one page website. A few months ago that meant I would write some HTML and CSS and be done with it. If I wanted some animation or interaction I would have included JQuery, but it never get more complicated than that.

Working with Jekyll (a static site generator, not unlike Hugo) introduced me to a workflow that involved a dev environment and a production environment. The one environment gave me all these dope tricks and tools like Sass and live reloads, while the other gave me fully  optimized files, ready for web.
Once you get used to something like that, it's hard to go back. Even if it involves just a small website with one or two pages.

After doing a bit of research I discovered Gulp was responsible for most of the cool things I had been enjoying. So if I wanted to have Sass, image optimization, minification, live reloads and all that, I needed to learn about Gulp.

That's what I did. And it was joyful.

I'm not super experienced when it comes to web development, but Gulp didn't seem to care. After reading <a href="https://css-tricks.com/gulp-for-beginners/">this tutorial</a> by Zell Liew, I was up and running in a morning. And best of all, I sort of understood what was happening. Soon enough I was writing my own Gulp files-picking and choosing the plugins I liked best.

That led me to add a bit to the Victor Hugo boilerplate I am still using for this website.
I wrote about this earlier over <a href="https://www.tothefront.co/p/minimizing-css-compressing-images-gulp/">here</a>

All those successes led me to start from scratch with my own view on a Gulp Boilerplate. A little starterkit that I could use anytime I needed to build a website. A basic one would involve just the bare stuff like sass and optimization, while the more involved one would also give me the powers of ES6.

I also discovered Nunjucks, so I planned to make one with Nunjucks too, and while I was ahead I also planned to redo the entire Victor Hugo Boilerplate.

Then Webpack showed up. If you want to modularize your Javascript and have the latest syntax it would be a wise choice to get to know Webpack. That's what I understood from browsing the internet. But getting to know Webpack is nothing casual. It involves being blown off often, many awkward moments, and a whole bunch of self-motivation.

Is it worth it? Probably, if you see yourself being with Webpack for the long term. 

The problem for me was mainly that the idea of Webpack is a bit opaque, the docs are not the most beginner-friendly ever and that tutorials on the internet all take a bit of a different approach to setting up the beast.

That last part is not necessarily Webpack's problem. And the first part, well, that's mainly because Webpack simply plays a role in something much larger. It makes more sense when you understand everything around it.

So the only thing you can really do is fill up the gaps at the fringes, and then slowly move back to the center. Read wide, understand why people take different approaches, look at the accompanying configurations and see what makes sense.

Hopefully somewhere you manage to get a grasp on what's going on. To be honest, it remains quite difficult. I can't say I have really got a solid grip on it at this point. But yeah... I'll get there. Maybe in part two.