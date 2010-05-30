// ==========================================================================
// Project:   FlotCarbonDioxide.graphController
// ==========================================================================
/*globals FlotCarbonDioxide */

/** @class

  @extends SC.Object
*/
FlotCarbonDioxide.graphController = SC.ArrayController.create(
/** @scope FlotCarbonDioxide.pricesController.prototype */ {
    
    content: [
        SC.Object.create({label: 'set1', data:[]}),
        SC.Object.create({label: 'set2', data:[]})
    ],

    options: SC.Object.create({}),

    addData: function(co2data) {
        var data = this.get('content').copy();

        for (i = 0; i < co2data.get('length'); i++) {
            data.objectAt(0).get('data').pushObject([co2data.objectAt(i).get('timestamp'), co2data.objectAt(i).get('interpolatedCO2')]);
            data.objectAt(1).get('data').pushObject([co2data.objectAt(i).get('timestamp'), co2data.objectAt(i).get('trendCO2')]);
        }
        data.objectAt(0).set('label', 'Monthly CO2 (ppm)');
        data.objectAt(1).set('label', 'Trend CO2 (ppm)');

        // set yaxis = 2, for data set 2
        // data.objectAt(1).set('yaxis', 2); //(couldn't figure it out, so set directly in controller)

        this.set('content', data);

        var options = SC.Object.create({
            legend: { position: 'se' },
            grid: { backgroundColor: { colors: ["#fff", "#eee"]}}, // not in original
            xaxis: { mode: 'time' },
            // yaxis: { min: 0 },
            // NOTE: had to set color, otherwise color undefined in drawGrid() for axis.options.color, in jquery.flot.js
            // y2axis: { color: "#000", tickColor: "#000", tickFormatter: function (v, axis) { return v.toFixed(axis.tickDecimals) +"€" }}
        });
        this.set('options', options);
    }
});


