// ==========================================================================
// Project:   FlotDualAxis.graphController
// ==========================================================================
/*globals FlotDualAxis */

/** @class

  @extends SC.Object
*/
FlotDualAxis.graphController = SC.ArrayController.create(
/** @scope FlotDualAxis.pricesController.prototype */ {
	
	content: [
		SC.Object.create({label: 'set1', data:[]}),
		SC.Object.create({label: 'set2', data:[]})
	],

	options: SC.Object.create({}),

    addData: function(rates, prices) {
        var data = this.get('content').copy();

        for (i = 0; i < prices.get('length'); i++) {
            data.objectAt(0).get('data').pushObject([prices.objectAt(i).get('epoch'), prices.objectAt(i).get('price')]);
        }
        data.objectAt(0).set('label', 'Oil Price ($)');

        // Set rates data series
        for (i = 0; i < rates.get('length'); i++) {
            data.objectAt(1).get('data').pushObject([rates.objectAt(i).get('epoch'), rates.objectAt(i).get('rate')]);
        }
        data.objectAt(1).set('label', 'USD/EUR exchange rate');

        // set yaxis = 2, for data set 2
        data.objectAt(1).set('yaxis', 2); //(couldn't figure it out, so set directly in controller)

        this.set('content', data);

        var options = SC.Object.create({
            legend: { position: 'ne' },
            grid: { backgroundColor: { colors: ["#fff", "#eee"]}}, // not in original
            xaxis: { mode: 'time' },
            yaxis: { min: 0 },
            // NOTE: had to set color, otherwise color undefined in drawGrid() for axis.options.color, in jquery.flot.js
            y2axis: { color: "#000", tickColor: "#000", tickFormatter: function (v, axis) { return v.toFixed(axis.tickDecimals) +"€" }}
        });
        this.set('options', options);
    }
});


