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

    hoverPoint: null,
    previousPoint: null,
    clickedPoint: null,
    tooltip: 'Hover over points to see name of spill here.',

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
            //grid: { backgroundColor: { colors: ["#fff", "#eee"]}}, // not in original
            xaxis: { mode: 'time' },
            grid: { hoverable: true, clickable: true },
        });
        this.set('options', options);
    },

    getDataset: function(estimate) { return this.get('content').findProperty('estimate', estimate) },

    setHoverPoint: function(hover_x, hover_y) {
        this.hoverPoint = SC.Object.create({ x: hover_x, y: hover_y });
    },

    setPreviousPoint: function(pp) {
        this.set('previousPoint', pp);
    },

    setTooltip: function(tooltip_x, tooltip_y, tooltip_label) {
        //this.tooltip = SC.Object.create({ x: tooltip_x, y: tooltip_y, label: tooltip_label });
        this.set('tooltip', tooltip_label);
        console.error(this.get('tooltip'));
    },

    setDataPointClick: function(clicked_index, clicked_series) {
        this.clickedPoint = SC.Object.create({ index: clicked_index, series: clicked_series });
    },

    showTooltips: YES,
    showTooltipsObserver: function() {
        if (this.get('showTooltips') === NO ) {

        } else {

        }
        FlotOilSpills.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('showTooltips'),

});


