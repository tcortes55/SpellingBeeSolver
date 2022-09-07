import asyncio
import subprocess
import crochet
crochet.setup()

from flask import Flask , render_template, jsonify, request, redirect, url_for
from scrapy import signals
from scrapy.crawler import CrawlerRunner
from scrapy.signalmanager import dispatcher
import time

from spellingbeenyt.spellingbeenyt.spiders.spellingbeenyt import SpellingbeespiderSpider


# Creating Flask App Variable

app = Flask(__name__)

output_data = []
crawl_runner = CrawlerRunner()

@app.route("/")
def home():
    return "<h2>Flask app</h2>"

@app.route("/scrape")
def scrape():

    # baseURL = "https://www.nytimes.com/puzzles/spelling-bee"
    # scrape_with_crochet(baseURL=baseURL) # Passing that URL to our Scraping Function
    subprocess.check_output(['scrapy', 'crawl', 'spellingbeespider', '-o', 'output.json'])
    with open("output.json") as items_file:
        return items_file.read()

    # time.sleep(5) # Pause the function while the scrapy spider is running
    
    # return jsonify(output_data) # Returns the scraped data after being running for 20 seconds.

@crochet.run_in_reactor
def scrape_with_crochet(baseURL):
    # This will connect to the dispatcher that will kind of loop the code between these two functions.
    dispatcher.connect(_crawler_result, signal=signals.item_scraped)
    
    # This will connect to the ReviewspiderSpider function in our scrapy file and after each yield will pass to the crawler_result function.
    eventual = crawl_runner.crawl(SpellingbeespiderSpider, category = baseURL)
    return eventual

#This will append the data to the output data list.
def _crawler_result(item, response, spider):
    output_data.append(dict(item))


if __name__== "__main__":
    app.run(debug=True)