import requests 
import csv
import random
import time
import sys
import ast

movieDB = []
with open('/Users/cajoshuapark/Dev/projects/web/movie-react/src/restAPI/titleBasics.tsv') as file:
    tsv_file = csv.reader(file, delimiter="\t")
    for line in tsv_file:
        if 'movie' in line:
            movieDB.append(line)
rand = random.randint(0, len(movieDB))
time.sleep(1)

query = {'t':movieDB[rand][2]}
response = requests.get('http://www.omdbapi.com/?i=tt3896198&apikey=52461261', params=query)
if (response.status_code == 200):
    # print("The request was a success!")
    print(response.json())
    print(response.json()["Title"])
# elif (response.status_code == 404):
#     print("Result not found!")
# elif (response.status_code == 401):
#     print("invalid request!")

sys.stdout.flush()