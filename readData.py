mport json
from datetime import datetime, date
import re

file = open('keys.json')
locationData = open("data.txt", "w")

jsonData = json.load(file)

data = {}
for i in jsonData['features']:
	day = re.split('-| ', i["properties"]["LOCAL_DATE"])
	dayOfYear = date(int(day[0]), int(day[1]), int(day[2])).timetuple().tm_yday
	year = int(day[0])
	temp = i["properties"]["MEAN_TEMPERATURE"] or ''

	if i["properties"]["STATION_NAME"] not in data: 
		data[i["properties"]["STATION_NAME"]] = {}

	if year not in data[i["properties"]["STATION_NAME"]]:
		data[i["properties"]["STATION_NAME"]][year] = [''] * 365

	if dayOfYear <= 365:
		data[i["properties"]["STATION_NAME"]][year][dayOfYear - 1] = temp


file.close()

id = 8
for location in data:
	locationData.write(str(id) + ': {\n')
	locationData.write('name: "' + location + '",\n')
	locationData.write('data: ' + str(data[location]) + ',\n')
	locationData.write('},\n')
	id = id + 1

locationData.close()