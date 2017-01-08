+++
title = "Minimizing CSS and compressing images with Gulp"
draft = false
date = "2017-01-08T16:35:57+01:00"
categories = ["code"]
tags = ["gulp", "boilerplate", "css", "optimization", "compression", "hugo"]
+++
The Victor Hugo boilerplate is a fine foundation for a Hugo blog. It has a solid Gulp configuration that does a lot of the basic functionality you might come to expect from a modern front-end project. However Gulp is powerful and boasts many plugins. With the latest commit I've added a few plugins to add extra optimization to my site.

Let's start with explaining a bit about Gulp itself. Gulp is a toolkit for automating tasks. Its goal is to take a bunch of tasks out of the hands of the developer and it does that well. Maybe you're thinking... what kinds of tasks? Well, why don't I tell you what Gulp does for this very website.

* spawns a server
* converts cssnext to plain ol' css
* minimizes that css
* puts webpack to work
* optimizes my images
* turns hugo on

Maybe that doesn't mean anything to you. Or too little to make a lot of sense. Let me try to explain it, while assuming that you know a bit about HTML, CSS and Javascript. Enough to build a simple page.

Normally for a one page website with a bit of styling and maybe a simple interaction you'd write a bit of HTML, some CSS to make sure it looks nice and a couple of lines of Javascript to make hidden text appear on the click of a button. There's really nothing wrong with doing it like that. It's probably preferred if you keep it that minimal.

When you want to make the website a bit more elaborate, you might run into frustrations. I did. And even moreso after I tasted the fruits of modern web development. You see, it's not necessary anymore to write the same #ea44ff code when you need that specific color you always like to use. You can just turn that into a variable in CSS! Or how about this: everytime you make a change in your text editor, the browser will automatically refresh and show you the updated page. That's possible.

But 'post-production' is also part of today's web development. Your very nice looking CSS file is probably full of empty lines that a web browser will never come to appreciate. Same goes for your HTML and Javascript files. And talking about Javascript. That language is undergoing so much change in recent years that you're practically always working with outdated syntax. In fact, it goes so fast that browsers don't keep up either. That means that all that new syntax needs to be transformed into regular syntax.

Webpack is a powerful, albeit somewhat moody and complex, module bundler which will take all the new stuff and make one browser-readable thing out of it. And Webpack, you can give it marching orders through Gulp! Although you don't have to. You could also not use Gulp, but that's something for another day.

## Improving Victor Hugo
Back to this site. Like I mentioned in the beginning, I was out to make my Gulp configuration better than it was. There were a couple of things I missed, so now I've added some of it. It's not yet perfect, but what I added does work.

First I really wanted my CSS to be minified in production. That simply means that all the unnecessary 'formatting' is removed out of the .css file that is uploaded to the server. The result is that the browser can load the CSS a bit faster. Since images take up the most space I wanted those to be optimized too. I think it's really unfriendly for the visitor if you serve them uncompressed images. Especially since compression techniques are quite good and you hardly see any loss of quality.

Adding CSS minification was extremely easy. The thing about Gulp is that it's much like a buffet. You can pick and choose ready made stuff, but since there's so much out there it can be a bit hard to choose the right things. A lot of the stuff just looks like each other upon first inspection.

I went with 'gulp-clean-css' by the way. I just installed it via the command line, defined it in my Gulp file and then placed the 'pipe' function after the CSSNext pipe function. So far so good.

The troubles came when I wanted to optimize my images. Originally I went with the 'gulp-imagemin' and the 'gulp-cache' plugins. The first handles the actual optimization of the images and the second one makes sure you don't optimize the same images every freckin' time you build your site. Compressing images can take a long time, especially when the amount of images grows, so there's no way that you only configure the image optimization plugin. You NEED a way to make sure that only new or changed images are compressed.

Somehow the cache plugin didn't work for me. It failed on me quietly by simply always bypassing the image optimization plugin. I didn't bother too much with looking for the problem, since Gulp is a buffet. You can simply walk to another section and get a similar looking thing. I tried 'gulp-cached' and soon ran into the same problem. Maybe this was me and not them.

Whatever the case, I again went out to look for an alternative. I thought of 'gulp-if'. That plugin gives you the classic 'if this then that' abilities. My thinking was that with that plugin I could make Gulp check the production folder to see what images were already in there, so it could then go ahead and avoid putting those in the image optimization stream. It didn't work for me.

I surely hope that all this doesn't reflect too badly on my mentality or skill level. Anyway, in the mean time I checked to see if 'gulp-imagemin' was working fine on itself. While it did work, I was disappointed by the amount of compression it delivered. The files hardly decreased in size, making the whole thing a bit of a useless journey.

Through a bit of Googling I stumbled upon 'gulp-image', a plugin by Shogo Sensui. He has also written a bit about why we should optimize our images on Medium and included interesting links (https://medium.com/@1000ch/we-should-optimize-images-8435760e0ec9#.5vkm3yqhk). I tried the plugin and am happy to report that my images saw about 60% drops in file size, while still looking good. So obviously that was a winner. At the same time the need for a method to only compress new or changed images only became more clear. Good compression takes time.

I can't remember clearly how I ended up there, but I finally landed on a Chinese website. On the page a Gulp configuration, with in fact a few comments in English. Image optimization was part of the configuration, as well as a little plugin called 'gulp-changed'. What it does is perfect: it looks for any files that are changed or new, and then puts those in the stream. Exactly what I needed. And even better: it worked directly.

So right now in production I have minified CSS and compressed images. A great first step. I'm satisfied with my Gulp configuration for the moment, but am already plotting on more optimization. I'll experiment with that in another project though. What's a good takeaway from this is that it's not necessary to be discouraged if one option doesn't work. In web development there are often multiple solutions to the same problem. While it can be worthwile to dig deep into one road, sometimes that time is better spent finding a different one. At least, that's how this thing turned out. :smile: