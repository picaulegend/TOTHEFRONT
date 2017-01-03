+++
title = "working with hugo, foundation and css next"
date = "2017-01-02T10:30:10+01:00"
draft = false
categories = ["code", "design"]
tags = ["hugo", "cssnext", "foundation", "gulp", "webpack", "html5"]

+++
Okay, let me start with explaining a bit about the technology behind the site. What you're looking at is nothing more than a collection of static HTML pages with a bit of CSS. About the oldest technologies you can find on the web. Also fast, safe and simple technologies. Still, if you know a bit about HTML and CSS you know that running a blog with <em>just that</em> is madness. Manually creating new pages for posts and then editing all old pages to show a link to the newly made post is something I did 15 years ago. And not something I want to do again.

I don't have to. Since then blogging software has made our lives much easier. Plugging into a database, using serverside code to pick up new posts and then showing them in ready-made templates; blogs have come a long way. Easy, great, and still the preferred method for virtually every site with posts you'll encounter on the internet. But like I stated, this site doesn't use a database, nor any serverside programming language. In fact, it currently doesn't even use any Javascript.

Okay, technically I am using a serverside language as well as Javascript. I was lying and telling the truth. The site you are looking at, which resides comfortably on <a href="https://netlify.com">Netlify's</a> server is really nothing more than HTML and CSS. But it was generated using a language called Go and involves compiling made possible by Javascript via NodeJS. 

## Victor Hugo
It would've been cool to have the famed dramatist of the Romantic movement responsible for the piece of software that powers TOTHEFRONT, but instead he's only the namegiver. That doesn't diminish the great technology that the <a href="https://github.com/netlify/victor-hugo">Victor Hugo boilerplate</a> provides at all.

To clarify, Victor Hugo is a boilerplate. It combines a set of different technologies into one fluid NPM process. NPM is the Node Package Manager, which actually does a bit more than just manage packages for NodeJS. If you're not familiar with all of this, don't worry too much about it. I'll cover it in another post. 

What is important to understand is that in order to get those static HTML pages with CSS markup online, there are a bunch of steps necessary to take first. The Victor Hugo boilerplate takes care of most of those steps. Firstly it calls upon Hugo to do its generation magic and secondly it calls upon Gulp and Webpack to do their task running and modulation magic. Together those three technologies deliver us our final product, which is then be deployed via a combination of Github and Netlify.

Those are a lot of names, doing a lot of work. The whole thing sounds a bit opaque, but for now, just accept it for what it is, and later we'll dive into the how, what and why's of it all. At the very least, I want to explain that Hugo (a static site generator written in Go) generates static HTML pages based on the template you provide. Gulp runs a bunch of plugins that allow us to write next-gen CSS and Webpack bundles our modules.

## Foundation
I mentioned that Hugo generates the HTML pages based on the template that the user provides. In this case that would be me. That means that I only have to design and construct the layout one time and in one place. Hugo simply takes it and attaches it to the (new) content when it generates the site. So if I would make a change to the layout, Hugo will take it, and re-attach it to all the content. I hope you can see the advantage of that.

<img src="/img/tothefront-design.jpg" alt="TOTHEFRONT design">

Earlier on I designed a simple two column layout I want to implement for my blog. I need to write some HTML and CSS for that so Hugo can use it. Luckily, I don't have to come up with everything myself. I could, but I won't. Instead I'll use a professionally made grid-system called Foundation, as well as the normalization they provide, their visibility classes, and some of their typography styling.

The reason I'm not writing everything from scratch is that I need production-ready code and don't want to spend my limited time on non-unique design work I couldn't do better even if I wanted to. Professional grid systems are often made by talented teams and have been battle-tested across browsers and devices. If you value time and quality, I couldn't recommend using a premade grid system any more than I'm already doing.

## CSSNext
There <i>is</i> some custom CSS necessary to make sure the site is somewhat presentable and identifiable as a unique blog. Thankfully the Victor Hugo boilerplate allows us to use CSSNext, a plugin for PostCSS (run via Gulp). Now I'm not limited anymore to oldschool CSS, but instead can use features like variables and nesting. Also, I need not worry about different browsers since CSSNext will automatically add vendor prefixes. It does a bunch more, but for now those three features are of special interest to me.

The design has two columns on wider screens, but only one column on a small screen. Furthermore, the header image and navigation are not visible on smaller screens. There are also differences in font sizes across the differently sized screens. Getting those things right will get us off to a great start in making the site presentable.

### Variables
I like to start out with defining variables. Colors always make a great use-case. Just consider the carnage that occurs when you constantly have to copy and paste colors code into your CSS. Especially when at some point you start to become arrogant and think you can type out the color code from memory. Or when you think that you can identify colors just by looking at the code. Or have to change a certain color and have to find all the places you used that color code.

Variables can provide a solution. They work by defining them. Really, the complex part is what variable philosophy you want to use. Are we going to name the variables after the color they represent or are we going to name them after the role they play? There are arguments to make for both ways of working, but I prefer to just name the color variables after the color they represent. So for this design there is black, dark, light, white, red, blue, green and yellow.

Colors are just one use-case. Variables can be defined for spacing, fonts, screen sizes, whatever. I'm just sticking to colors for now, but don't be afraid to go wild with your variables. In fact, CSSNext even allows you to define mini-themes through setting multiple properties in one variable. Try it out!

### Typography
When your site features multiple paragraphs and headers you will need to think about formatting. You can then decide to do nothing, and the browser will render texts that are still fairly readable, but you can also decide to make it even more readable. And maybe also a bit more beautiful. In fact the design already tells us to use two different fonts and multiple styles.

We'll follow the design for now. The two fonts are Roboto (black) and Domine (regular and italic), both via Google Fonts. They are used for paragraphs, h1, 2 and 3's. There is also a class necessary for the post details just under the header.

Typography is really a field in itself that is best explored outside of the web. But web typography is also a beast in its own right, of course heavily indebted to the typography you've come to known from magazines, billboards and such. For now we'll just cover some basics. Also because going further than just the basics is above my skill level.

So Roboto is for the big fat sans-serif headers and Domine is for the long waves of serif paragraphs I want my readers to surf over. As I mentioned before, Foundation comes with a few typography basics like somewhat responsive font sizes. The styles are not completely to my taste, but for this first version of the site, they more than suffice. What I do need to do is make sure that the headers are always uppercase, have the right font-weight and color.

Finally I need to make the special class for displaying the time and date the post was published. I can choose to call this class after the role it plays in the layout (subheader, post-details, etc.) or I can choose to call it after the style I apply to it (fat-roboto, small-fat). Again, I could make up arguments for both options. Seeing as I probably won't be reusing the style for a text with a different semantic function, I'll give it the name of 'post-details'.

### Responsive structure
Earlier on I talked about using Foundation for the grid. Foundation, developed by Zurb, is far more than just a grid. It's a front-end framework that offers all kinds of common components right out of the box. Think forms, navigational elements and media handling. We're not going to use all that for now. Because if you look at the design, it doesn't need any of that, so there's no use in including that code on our website.

I have included the grid. It's very simple in use. It provides a 'row' class and a 'column' class. You use the 'row' to contain 'columns' and 'columns' to hold your content. Foundation works with a 12-column system, which means that if you want a column to be full-width you need to give it a value of 12. If you want it to be a third of the row, you give it a value of 4. Hope that makes sense. 

Furthermore, the grid allows you to specify the value of a column based on the size of the screen (small, medium or large). That's good news, because we need that. Looking at the design we can identify the following semantic structure to hold all the headers and paragraphs.

<img src="/img/semantic-html-structure.png" alt="semantic html site structure">

If I now just give all the elements the right grid classes, I will most definitely end up with the intended structure. And as you might have noticed, that worked out fine. The only thing that rests is assigning unique formatting to a couple of elements. We can use ID's for that. As opposed to classes, ID's are only meant to use once. Probably part of the reason its called an ID.




And with that we finished the basic layout. Now you might disagree with some of my explanations or decisions. Or maybe you want to commend me on them. It's fine either way. Below is my contact info.