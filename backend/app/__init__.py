# app/__init__.py

from flask import Flask
from flask_cors import CORS

# Initialize the app
app = Flask(__name__, instance_relative_config=True)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Load the views
from app import services

# Load the config file
app.config.from_object('config')
