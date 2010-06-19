// ==========================================================================
// Project:   FlotDualAxis - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotDualAxis Flot */

FlotDualAxis.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
        childViews: 'graphTitle graph explanation'.w(),
        graphTitle: SC.ToolbarView.design({
            layout: { top: 0, left: 0, right: 0, height: 36 },
            anchorLocation: SC.ANCHOR_TOP,
            childViews: 'labelView'.w(),
            labelView: SC.LabelView.design({
                layout: { centerY: 0, height: 24, left: 8, width: 500 },
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
                value: 'Flot Dual Axis Support'
            })
        }),
        graph: Flot.GraphView.design({
            layout: { top: 80, right: 40, bottom: 120, left: 40 } ,
            dataBinding: 'FlotDualAxis.graphController.arrangedObjects' ,
            optionsBinding: 'FlotDualAxis.graphController.options'
        }),
        explanation: SC.LabelView.design({
            layout: { left: 50, bottom: 0, right: 0, height: 100 },
            value: '<p>Dual axis support showing the raw oil price in US $/barrel of crude oil (left axis) vs. the exchange rate from US $ to € (right axis).</p><p>As illustrated, you can put in secondary y and x axes if you need to. For each data series, simply specify the axis number.</p><p>This is a clone of the <a href="http://people.iola.dk/olau/flot/examples/dual-axis.html">Flot Dual Axis Graph</a>.</p>',
            escapeHTML: NO
        })
    })
});
