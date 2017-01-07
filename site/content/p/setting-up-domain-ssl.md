+++
title = "setting up a domain and ssl"
draft = false
date = "2017-01-05T19:51:40+01:00"
categories = ["code"]
tags = ["domain", "ssl", "security", "deployment", "DNS", "SEO"]
+++
The layout is fine for now. The site has been deployed. Now it's time to set up our very own custom domain. Buying the domain is the easy part. Actually, it's all quite easy-you'll see. There are a lot of companies selling domain names and I don't think there is much difference between the vendors. Just pick one that gives you a good deal, and be careful that you just buy the domain and not hosting or any other unnecessary extra.

Once you have it, you need to configure it to point to your site. Depending on the service you use for hosting it'll be a bit different, but not too much. For Netlify it's incredibly easy. There's a guide here, but the summarized version is: add (or edit if they already exist) two DNS records, and add the domain name to your project. It should work almost immediately.

If you use an Amazon S3 bucket, there's a bit of extra configuration on the Amazon side-just follow this guide. The gist is that you need to make sure the right DNS info is listed in your domain's control panel, so the domain name points to the right server. DNS stands for Domain Name System by the way. And that system just associates the server's numerical address with the domain you bought.

And why did we buy that domain again? Well, because we humans like words we understand better than a collection of numbers that don't make a lot of sense to us. And that's what server addresses are: numbers that are loved by computers, but meaningless to us mortals. So go ahead, put that info in your control panel so the computers understand.

![SSL Security](/img/ssl-secure.jpg "SSL Security")

## SSL for security
We've got our domain working now. The next step is to add an SSL certificate. Before I dive into why SSL is also important for a static site that doesn't handle any sensitive info, let me first explain what SSL is and does. SSL is a security protocol. A technology that makes ure that any data transferred between the user (browser) and website (server) is impossible to read by others.

And a lot of data is transferred between the user and website. My server for example has sent HTML, CSS and Javascript to your local browser. And when you Googled what you Googled just now, you sent data to Google's server. We want that data to be secure and encrypted. Regular HTTP doesn't do that, HTTPS does do that. So it is importance.

### Why SSL for a static site
For the longest time you'd only see the green HTTPS padlock in the address bar on eCommerce websites. These days you'll see it on every modern security consious website. Now you might wonder why a static site that only sends you some code to render the page needs to be secure.

Well, if you're a webmaster... you might be delighted to hear that Google allegedly gives pages with HTTPS a little SEO bonus and that modern browsers that support HTTPS 2.0 could give your site a significant performance boost. But your visitors might also be happy that noone will be able to inject ads into the page.

The green padlock looks nice and gives your visitors the idea that you care about security. On top of that, it's free. Let's Encrypt is a non-profit organization that will hook you up with a modern SSL certificate for the public good. It's great and there's no reason you shouldn't add it to your domain. If you're using Netlify it's nothing more than a simple click. :smile::heart:

#### Resources:
* http://www.howtogeek.com/122845/htg-explains-what-is-dns/
* https://letsencrypt.org
* https://www.netlify.com/docs/ssl/
* https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html