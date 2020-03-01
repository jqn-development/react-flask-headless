# services.py
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from flask import jsonify, request

from app import app

@app.route('/api/v1/soup/getsoup/<path:subpath>',  methods=["GET"])
def getPage(subpath):
  try:

    # make the request
    req = Request(subpath, headers={'User-Agent': 'Mozilla/5.0'})

    # query the website and return the html to the variable ‘page’
    page = urlopen(req)

    # parse the html using beautiful soup and store in variable `soup`
    soup = BeautifulSoup(page, 'html.parser')

    # initialize an empty list to hold subtitles
    subtitle_list = []

    for subtitle in soup.find_all('h2'):
      print(subtitle)
      print(type(subtitle))
      subtitle_list.append(str(subtitle))

    return jsonify(subtitles=subtitle_list)
  except Exception as e:
    print(e)
    return jsonify({"error": "Unexpected error"}), 500
