import subprocess
import os
from datetime import datetime
import scrapy
from flask import Flask , render_template, jsonify, request, redirect, url_for

from spellingbeenyt.spiders.spellingbeenyt import SpellingbeespiderSpider


# Creating Flask App Variable

app = Flask(__name__)

@app.route("/")
def home():
    return "<h2>Flask app</h2>"

@app.route("/scrape")
def scrape():
    filename = generateFilename()
    subprocess.check_output(['scrapy', 'crawl', 'spellingbeespider', '-O', filename])
    result = ''
    with open(filename) as items_file:
        result = items_file.read()
    os.remove(filename)
    return result

def generateFilename():
    now = datetime.now()
    filename = "./results/" + now.strftime("%Y%m%d_%H%M%S_%f") + '.json'
    return filename

if __name__== "__main__":
    app.run(debug=True)

