# Headless React with Flask API example

## Installation

Mininum requirements

- [Python 3](https://www.python.org/)
- [virtualenv](https://virtualenv.pypa.io/en/stable/)
- [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)
- [Flask](https://palletsprojects.com/p/flask/)

Step 1. Clone this repo `$ git clone https://github.com/jqn/react-flask-headless.git`

Step 2. Navigate to the root of this project from your terminal `$ cd react-flask-headless`

Step 3. Create and activate a new virtual environment `$ mkvirtualenv react_flask` and `$ workon react_flask`

Step 4. Install requirements `$ pip install -r requirements.txt`

Step 5. Run the application

- `$ export FLASK_APP=run.py`
- `$ export FLASK_ENV=development`
- `$ flask run`

Step 6. Open your browser and point it to this url `http://127.0.0.1:5000/api/v1/soup/getsoup/<add-url-here>`

Example: `http://127.0.0.1:5000/api/v1/soup/getsoup/https://www.ventureharbour.com/10-lead-capture-page-examples-help-capture-leads/`
