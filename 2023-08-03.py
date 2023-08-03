from flask import Flask, jsonify
import pymysql
from dotenv import load_dotenv
import os

load_dotenv()

host = os.environ.get('HOST')
port = os.environ.get('PORT')
user = os.environ.get('USER')
password = os.environ.get('PW')


app = Flask(__name__)

db = pymysql.connect(host=host, port=int(port), user=user,
                     passwd=password, db='myschool', charset='utf8')


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/school', methods=['GET'])
def get_all_tables():
    cursor = db.cursor()

    cursor.execute("SHOW TABLES")
    tables = cursor.fetchall()
    data = [table[0] for table in tables]

    db.close()

    return jsonify(data)


if __name__ == '__main__':
    app.run()
