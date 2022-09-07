import subprocess

from flask import Flask , render_template, jsonify, request, redirect, url_for
from scrapy import signals
from scrapy.crawler import CrawlerRunner
from scrapy.signalmanager import dispatcher
import time

from spellingbeenyt.spiders.spellingbeenyt import SpellingbeespiderSpider


# Creating Flask App Variable

app = Flask(__name__)

@app.route("/")
def home():
    return "<h2>Flask app</h2>"

@app.route("/scrape")
def scrape():
    subprocess.check_output(['scrapy', 'crawl', 'spellingbeespider', '-o', 'output.json'])
    with open("output.json") as items_file:
        return items_file.read()


if __name__== "__main__":
    app.run(debug=True)