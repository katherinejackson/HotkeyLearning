import csv
import json

data = []

with open('keys.csv', encoding='utf-8-sig') as csvf:
    csvReader = csv.DictReader(csvf)
    for row in csvReader:
        data.append(row)


with open('keyData.json', 'w', encoding='utf-8-sig') as jsonf:
    jsonf.write(json.dumps(data, indent=4))
