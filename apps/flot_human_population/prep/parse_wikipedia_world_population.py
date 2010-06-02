import datetime
import time
import calendar

# http://en.wikipedia.org/wiki/World_population

def to_datetime(js_timestamp):
    return  datetime.datetime.fromtimestamp(js_timestamp/1000)

def js_timestamp_from_datetime(dt):
    return 1000 * time.mktime(dt.timetuple())

guids = ['wo', 'af', 'as', 'eu', 'la', 'na', 'oc']

data = []
for line in open('wikipedia_world_population.txt').readlines():
    items = line.split('|')
    year = items[0].strip()
    world,africa,asia,europe,latin_america,northern_america,oceania = [int(item.strip()) for item in items[1:] if len(item) > 0]
    if not year.endswith('BCE'):
        year = int(year[:year.find(' ')])
        if year > 1900:
            dt_year = datetime.datetime(year, 1, 1)
            timestamp = js_timestamp_from_datetime(dt_year)
            data.append((timestamp,year,world,africa,asia,europe,latin_america,northern_america,oceania))

print '/*globals FlotHumanPopulation */'
print
print 'sc_require(\'models/human_population_data\');'
print
print 'FlotHumanPopulation.human_population_data.FIXTURES = ['

for guid,record in zip(guids,data):
    print '    { \'guid\': \'%s\', ' % guid, '\'timestamp\': %14d, \'year\': %d, \'world\': %4d, \'africa\': %3d, \'asia\': %4d, \'europe\': %3d, \'latin_america\': %3d, \'northern_ameria\': %3d, \'oceania\': %2d },' % record

print '    ]'
