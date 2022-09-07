import subprocess
import os
from datetime import datetime
import scrapy
from flask import Flask , render_template, jsonify, request, redirect, url_for
import json

from spellingbeenyt.spiders.spellingbeenyt import SpellingbeespiderSpider

app = Flask(__name__)

@app.route("/")
def home():
    return "<h2>Flask app - access /scrape to get today's game from NYT</h2>"

@app.route("/scrape")
def scrape():
    filename = generateFilename()
    subprocess.check_output(['scrapy', 'crawl', 'spellingbeespider', '-O', filename])
    result = {}
    with open(filename) as items_file:
        result = items_file.read()
        resultJson = json.loads(result)
    os.remove(filename)
    return resultJson[0]

def generateFilename():
    now = datetime.now()
    filename = "./results/" + now.strftime("%Y%m%d_%H%M%S_%f") + '.json'
    return filename

if __name__== "__main__":
    app.run(host='0.0.0.0', port=os.environ.get("PORT", 5000))

