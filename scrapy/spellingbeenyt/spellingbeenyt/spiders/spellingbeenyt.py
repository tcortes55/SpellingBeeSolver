import scrapy
from scrapy import Request
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class SpellingBeeGame(scrapy.Item):
    centerLetter = scrapy.Field()
    letters = scrapy.Field()

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
        center = response.xpath("//div")
        outerLetters = response.xpath("//div[@class='hive']/*[name()='svg' and @class='hive-cell outer']/*[name()='text' and @class='cell-letter']")

        # center = response.xpath("//div")
        # outerLetters = response.xpath("//div")


        yield SpellingBeeGame (centerLetter = center, letters = outerLetters)
        # yield response.xpath("//div")


# $x("//div[@class='hive']/*[name()='svg' and @class='hive-cell outer']/*[name()='text' and @class='cell-letter']")[0].innerHTML
# $x("//div[@class='hive']/*[name()='svg' and @class='hive-cell center']/*[name()='text' and @class='cell-letter']")[0].innerHTML