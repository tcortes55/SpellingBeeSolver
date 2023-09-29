# SpellingBeeSolver

Check it out at https://spelling-bee-solver.vercel.app/

I play Spelling Bee every day. It is [a game from The New York Times](https://www.nytimes.com/puzzles/spelling-bee) which presents, each day, 7 different letters, and you are challenged to write as many words as possible using only these letters, and necessarily using the center letter.

![image](https://user-images.githubusercontent.com/35512873/189464825-6d7ae203-51f6-4c28-8b50-e3510ad9bf36.png)

I thought that writing an application to solve the game could be an interesting way to demonstrate the use of parallelism. The way it works is quite simple: there is a dataset with all existing words in English language, and the program evaluates whether each one of them satisfies the letters criteria. This consists in thousands of independent operations that could run in parallel.

## The solution

At first, this was supposed to be a simple console application where the user inputs 7 letters and receives the corresponding answers. However, it was finished very quickly so I decided to add some other features.

### ASP.NET Core Web API

Besides the console application, I also implemented an ASP.NET Core Web API that receives the 7 letters and returns a JSON object with the answers. I used Docker to deploy it to ~Heroku for free (that is, [until November/2022, then I'll have to search for a different host </3 RIP Heroku free tier](https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq))~ Render.com for free.

### React client

What we got so far was interesting but I thought it could be more user-friendly. So I created a React client to consume the API, with an interface very similar to the one from New York Times, and [deployed it for free with Vercel](https://spelling-bee-solver.vercel.app/).

At this point, we have a website where you can input 7 letters and get the corresponding answers. This is quite good, but I thought it could still be improved.

### Consuming from FreeBee API

The NYT Spelling Bee game is restricted to subscribers; you can play it for free but after a certain number of points, the page is blocked and you have to log in to continue (or wait until the next day).

I searched for a free alternative and found [FreeBee](https://freebee.fun/), which is a free version of the game which also has an API that returns the current day's challenge and its answers. We do not use the answers here, but I thought it would be nice to get FreeBee's challenge, run it through our app and present the solution in the client. So the client now has a panel that automatically loads the answers to FreeBee's challenge of the day.

### Crawling NYT's website

Now, it does not seem fair to present the answers to FreeBee but not the ones from NYT's original game. NYT does not provide an API to consume today's challenge, so the solution I found for that was to implement a web scraper to crawl NYT's website and return the challenge of the day.

The web scraper was implemented in Python, using Scrapy. It is very simple since our goal is very simple, but I don't think that makes it less interesting. I then used Flask to integrate the scraper into an API, and once more deployed it to Heroku using Docker.

### Deploy

Docker made it much, much easier to deploy both APIs since I mostly didn't have to deal with the specifics of ~Heroku~ Render.com (also, ~Heroku~ Render.com doesn't provide hosting for .NET Core applications, but we can circumvent this by deploying a Docker container).

## TL;DR

At the end of the day, we have:
- an API that returns answers for Spelling Bee game...
    - ...based on a challenge input by user
    - ...based on a challenge that is fetched from FreeBee's API
    - ...based on a challenge that is fetched from a custom API which gets the letters by scraping NYT's website
- a React client that presents all answers

The initial idea, meant to aid me in solving the Spelling Bee game, resulted in a solution that, although simple, demonstrates the usage of:
- ASP.NET Core Web API
- Asynchronous programming and parallelism in C#
- Docker/Containerization
- React
- Python/web scraping

![spellingbee3](https://user-images.githubusercontent.com/35512873/189465219-c14a25fd-4d4b-4952-ad19-841b0d6b22bb.gif)

Check it out at https://spelling-bee-solver.vercel.app/

