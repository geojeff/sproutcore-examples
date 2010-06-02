import datetime
import time
import calendar

def to_datetime(js_timestamp):
    return  datetime.datetime.fromtimestamp(js_timestamp/1000)

def js_timestamp_from_datetime(dt):
    return 1000 * time.mktime(dt.timetuple())

#now = js_timestamp_from_datetime(datetime.datetime.now())
#print "%d" % now
#print to_datetime(now)
#print calendar.timegm(time.localtime())
#print calendar.timegm(time.strptime("30 Nov 1958", "%d %b %Y"))

#for year in range(1958, 2010):
#    print time.strptime(

#  (-99.99 missing data;  -1 no data for #daily means in month)
#
#            decimal     average   interpolated    trend    #days
#             date                             (season corr)
# 2010   4    2010.292      392.39      392.39      389.64     27

co2_data = []
for line in open('co2_mm_mlo.txt').readlines():
    line = line.strip()
    if line[0] != '#':
        data_item_strings = line.split()
        year = int(data_item_strings[0])
        month = int(data_item_strings[1])
        decimal_date_string = data_item_strings[2]
        decimal_date = float(decimal_date_string)
        day_in_year = int(float(decimal_date_string[decimal_date_string.find('.'):]) * 366.0)
        average_co2 = float(data_item_strings[3])
        interpolated_co2 = float(data_item_strings[4])
        trend_co2 = float(data_item_strings[5])
        number_of_days = int(data_item_strings[6])

        decimal_year_string = "%d %d" % (year, day_in_year)
        struct_time = time.strptime(decimal_year_string, "%Y %j")
        dt_from_struct_time = datetime.datetime(struct_time.tm_year, struct_time.tm_mon, struct_time.tm_mday)
        co2_data.append((js_timestamp_from_datetime(dt_from_struct_time), year, month, average_co2, interpolated_co2, trend_co2, number_of_days))

        # this way is one day less, for some reason
        # dt_from_timegm = to_datetime(seconds*1000)
        # seconds = calendar.timegm(struct_time)
        # print dt_from_struct_time.strftime("%Y-%m-%d"), dt_from_timegm.strftime("%Y-%m-%d")

print '/*globals FlotCarbonDioxide */'
print
print 'sc_require(\'models/co2data\');'
print
print 'FlotCarbonDioxide.co2data.FIXTURES = ['

index = 0
for data in co2_data:
    print '    { \'guid\': %d, ' % index, '\'timestamp\': %d, \'year\': %d, \'month\': %2d, \'averageCO2\': %6.2f, \'interpolatedCO2\': %6.2f, \'trendCO2\': %6.2f, \'numberOfDays\': %d },' % data
    index += 1

print ']'
