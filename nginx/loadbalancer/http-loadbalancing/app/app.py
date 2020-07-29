import os
from redis import Redis
from flask import Flask

application = app = Flask(__name__)
redis = Redis(host="redis", port=6379)

@app.route('/')
def index():
    count = redis.incr('views')
    return "Hello World! This is a Flask app in a docker container, visited {}".format(count)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(debug=True,host="0.0.0.0",port=port)