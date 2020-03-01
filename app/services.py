# services.py
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from flask import jsonify

from app import app

@app.route('/api/v1/soup/getsoup/<url>',  methods=["GET"])
def getPage(url):
  try:
    # make the request
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})

    # query the website and return the html to the variable ‘page’
    page = urlopen(req)

    # parse the html using beautiful soup and store in variable `soup`
    soup = BeautifulSoup(page, 'html.parser')

    return soup.prettify()
  except Exception as e:
    print(e)
    return jsonify({"error": "Unexpected error"}), 500
