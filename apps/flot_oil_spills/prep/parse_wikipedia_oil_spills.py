import datetime
import time
import calendar

# http://en.wikipedia.org/wiki/list_of_oil_spills, accessed June 4, 2010

def to_datetime(js_timestamp):
    return  datetime.datetime.fromtimestamp(js_timestamp/1000)

def js_timestamp_from_datetime(dt):
    return 1000 * time.mktime(dt.timetuple())

# header: Spill / Vessel | Location | Dates | Min Tonnage | Max Tonnage | Link(s)

data = []
references = []
for line in open('wikipedia_oil_spills.txt').readlines():
    line = line.strip()
    if line[0] != '#':
        if line[0] == '^':
            references.append(line.replace("'","&#39;"))
        else:
            print line
            items = line.split('|')
            name = items[0].strip()
            location = items[1].strip()
            start_date = datetime.datetime(*time.strptime(items[2].strip(), '%B %d, %Y')[0:5])
            timestamp = js_timestamp_from_datetime(start_date)
            min_tonnage = int(items[3].replace(',','').strip())
            max_tonnage = int(items[4].replace(',','').strip())
            reference_links = eval(items[5].strip())
            data.append((timestamp, name, location, min_tonnage, max_tonnage, reference_links))

print '/*globals FlotOilSpills */'
print
print 'sc_require(\'models/oil_spill_data\');'
print
print 'FlotOilSpills.oil_spill_data.FIXTURES = ['

guid = 0
for record in data:
    print '    { \'guid\': %2d, ' % guid, '\'timestamp\': %14d, \'name\': \'%s\', \'location\': \'%s\', \'min_tonnage\': %d, \'max_tonnage\': %d, \'references\': %s },' % record
    guid += 1

print '    ]'

print '/*globals FlotOilSpills */'
print
print 'sc_require(\'models/oil_spill_references\');'
print
print 'FlotOilSpills.oil_spill_references.FIXTURES = ['

# The reference links start at 1
guid = 1
for ref in references:
    print '    { \'guid\': %2d, ' % guid, '\'text\': \'%s\' },' % ref[2:]
    guid += 1

print '    ]'
