// ==========================================================================
// Project:   FlotOilSpills.graphController
// ==========================================================================
/*globals FlotOilSpills */

/** @class

  @extends SC.Object
*/
FlotOilSpills.graphController = SC.ArrayController.create(
/** @scope FlotOilSpills.graphController.prototype */ {

    content: [
        SC.Object.create({estimate: 'max', label: 'set1', data:[], bars: { show: true }, points: { show: true } })
    ],

    options: SC.Object.create({}),

    addData: function(oil_spill_data) {
        var data = this.get('content').copy();

        for (i = 0; i < oil_spill_data.get('length'); i++) {
            var tonnes = oil_spill_data.objectAt(i).get('max_tonnage');
            var barrels = Math.round(tonnes / 0.136)
            var gallons = barrels * 42
            data.objectAt(0).get('data').pushObject([oil_spill_data.objectAt(i).get('timestamp'), gallons]);
        }
        data.objectAt(0).set('label', 'Maximum estimate, or known size (gallons)');

        data.objectAt(0).set('color', 1 );

        this.set('content', data);

        this.selectObjects(data);

        var options = SC.Object.create({
            legend: { position: 'nw' },
            grid: { backgroundColor: { colors: ["#fff", "#eee"]}}, // not in original
            xaxis: { mode: 'time' },
        });
        this.set('options', options);
    },

    getDataset: function(estimate) { return this.get('content').findProperty('estimate', estimate) },

//    isMinimumTonnageShowing: YES,
//    minimumTonnageObserver: function() {
//        dataset = this.getDataset('min');
//        if (this.get('isMinimumTonnageShowing') === NO ) {
//            this.deselectObject(dataset);
//        } else {
//            this.selectObject(dataset, extend = YES);
//        }
//        FlotOilSpills.mainPage.mainPane.graph.plotDataDidChange()
//    }.observes('isMinimumTonnageShowing'),

    isMaximumTonnageShowing: YES,
    maximumTonnageObserver: function() {
        dataset = this.getDataset('max');
        if (this.get('isMaximumTonnageShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotOilSpills.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isMaximumTonnageShowing'),

});


