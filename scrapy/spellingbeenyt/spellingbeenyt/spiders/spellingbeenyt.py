import scrapy
from scrapy import Request
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
import json

class SpellingBeeGame(scrapy.Item):
    center = scrapy.Field()
    letters = scrapy.Field()
    words = scrapy.Field()
    wordlist = scrapy.Field()

class SpellingbeespiderSpider(scrapy.Spider):
    name = 'spellingbeespider'
    allowed_domains = ["nytimes.com"]
    start_urls = ["https://www.nytimes.com/puzzles/spelling-bee"]

    def parse(self, response):
        # all_letters = response.xpath('//div//svg').getall()

        # for (letter) in zip(all_letters):
        #     yield SpellingBeeGame(centerLetter=letter, letters = letter)
        link = "https://www.nytimes.com/puzzles/spelling-bee"
        yield response.follow(url=link, callback=self.parse_game)

    def parse_game(self, response):
        rawGameData = response.xpath('//div[@class="pz-game-screen"]/script/text()').get()
        gameDataStr = rawGameData.replace("window.gameData = ", "")
        gameData = json.loads(gameDataStr)

        center = gameData['today']['centerLetter']
        letters = ''.join(gameData['today']['outerLetters'])
        wordlist = gameData['today']['answers']
        words = len(wordlist)

        yield SpellingBeeGame (center = center, letters = letters, words = words, wordlist = wordlist)