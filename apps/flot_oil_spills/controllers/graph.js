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
        SC.Object.create({estimate: 'max', label: 'set1', data:[], points: { show: true }, highlight: YES })
    ],

    options: SC.Object.create({}),

    //hellohook: function(plot, canvascontext) { alert("hello!"); },
    //hellohook: function(plot, canvascontext) { SC.RunLoop().begin(); plot.highlight(0, 1); SC.RunLoop().end(); },
    //hellohook: function(plot, canvascontext) { SC.RunLoop().begin(); alert("hello!"); SC.RunLoop().end(); },   
    
    highlighted_spill_index: null,

    highlightHook: function(plot, canvascontext) {
        var selection_set = FlotOilSpills.mainPage.mainPane.spills.contentView.get('selection');
        var item = selection_set.firstObject();
        if (! SC.none(item)) {
            var index = FlotOilSpills.spillController.indexOf(item);
            var current_index = FlotOilSpills.graphController.get('highlighted_spill_index');
            if (!SC.none(current_index)) {
                FlotOilSpills.mainPage.mainPane.graph.plot.unhighlight(0, current_index);
            }
            FlotOilSpills.graphController.drawPointHighlight(plot, canvascontext, 0, index);
            FlotOilSpills.graphController.set('highlighted_spill_index', index);
        }
    },

    drawPointHighlight: function(plot, canvascontext, series_index, point_index) {
        var series = plot.getData();
        var x = series[series_index].datapoints.points[point_index*2],
            y = series[series_index].datapoints.points[(point_index*2)+1];

        var axisx = series[series_index].xaxis, 
            axisy = series[series_index].yaxis;

        if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
            return;
                     
        var offset = plot.getPlotOffset();
        var x_plot = axisx.p2c(x) + offset.left;
        var y_plot = axisy.p2c(y) + offset.top;

        var pointRadius = series[series_index].points.radius + series[series_index].points.lineWidth / 2;
        canvascontext.lineWidth = pointRadius;
        canvascontext.strokeStyle = $.color.parse('rgb(255, 100, 123)').scale('a', 0.5).toString();
        var radius = 5 * pointRadius;
        canvascontext.beginPath();
        canvascontext.arc(x_plot, y_plot, radius, 0, 2 * Math.PI, false);
        canvascontext.stroke();
    },

    addData: function(oil_spill_data) {
        var series = this.get('content').copy();

        for (i = 0; i < oil_spill_data.get('length'); i++) {
            var tonnes = oil_spill_data.objectAt(i).get('max_tonnage');
            //var barrels = Math.round(tonnes / 0.136)
            // or you can also multiply tonnes by 307.86 directly, for gallons (http://www.bp.com/conversionfactors.jsp)
            var barrels = Math.round(tonnes * 7.33)
            var gallons = barrels * 42
            series.objectAt(0).get('data').pushObject([oil_spill_data.objectAt(i).get('timestamp'), gallons]);
        }
        series.objectAt(0).set('label', 'Maximum estimate, or known size (gallons)');

        series.objectAt(0).set('color', 'rgb(128, 100, 123)' );

        this.set('content', series);

        this.selectObjects(series);

        var options = SC.Object.create({
            legend: { position: 'nw' },
            xaxis: { mode: 'time' },
            grid: { hoverable: true, clickable: true, autoHighlight: YES, backgroundColor: { colors: ["#fff", "#eee"]}},
            hooks: { drawOverlay: [this.get('highlightHook')] },
        });
        this.set('options', options);
    },

    getDataset: function(estimate) { return this.get('content').findProperty('estimate', estimate) },

    showTooltips: YES,
    showTooltipsObserver: function() {
        if (this.get('showTooltips') === NO ) {

        } else {

        }
        FlotOilSpills.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('showTooltips'),

});


