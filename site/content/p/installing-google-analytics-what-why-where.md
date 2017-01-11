+++
title = "installing google analytics: what, why and where"
draft = false
date = "2017-01-11T09:53:51+01:00"
categories = ["code"]
tags = ["google analytics", "web analysis", "tracking", "html", "async", "asynchronous"]
+++
When you have your site in the air, it's time to track who's coming through. There are some options for tracking visitors, but Google Analytics is the number one choice. Unless, you have principal objections to using a Google product, I would recommend setting up an account by heading on over to https://www.google.nl/intl/nl/analytics/.

Google Analytics is a web analysis and reporting tool. It has loads of options and in conjuction with Google Tag Manager, another Google service, you could virtually track anything on your website. So you'd know how many people visit your site, where they are from, how they ended up on your page, which pages they landed on.

Aside from satiating the curiosity of knowing what people were doing on your site, the information Google Analytics provides can also help you make better decision about your site. I'm not saying your instincts, wisdom and vision are not enough to build a superb webpage, but it's truly interesting what kinds of numbers Google Analytics can generate for you.

## How to install
Let's install this thing first. In its most basic form it's nothing more than a Javascript snippet you copy from you Google Analytics account to your website. You need to paste it in your HTML, so I really hope you know what HTML is.

Google recommends pasting it high up in the `<head>` of your site before any CSS you might want to load into your site. And make sure you paste it on every page on your site. Not just the index.html or whatever you called your page.

Normally Javascript is loaded onto the page just before the closing `</body>` tag. In that way it won't block your page from rendering properly. The Google Analytics code snippet is loaded and executed asynchronously however, so no need to worry about that.

### More async?
Google does provide an alternative async snippet. That may seem a little confusing since the original snippet already loads asynchronously. The reason for two snippets however is that the second snippet uses a relatively new HTML5 attribute named `async`. In developer world it's not that new, but across the internet many users still have to catch up with the latest browsers.

The `async` attribute allows modern browsers to preload the script and that will give your site a small performance boost. The downside is that older browsers (IE9 and some older mobile browsers), might freak out and instead load the script synchronous. That could mean slowing down or even blocking the rendering of your page.

Now you could instead put the `async` snippet at the bottom of your page just before the `</body>` tag. That will garantuee that your page is loaded in its entirety, even if the script stutters on an older browser. But the flipside is that Google might not get your page loads correct. And skewed data is bad.

So it's really down to you. You can safely load it asynchronously with the original snippet or live a little wild and risk slowing the page down for users with an old browser.


