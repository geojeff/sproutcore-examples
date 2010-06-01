// ==========================================================================
// Project:   FlotGraphTypes - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotGraphTypes */

FlotGraphTypes.mainPage = SC.Page.design({

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
                value: 'Flot Graph Types',
            })
        }),
        graph: Flot.GraphView.design({
            layout: { top: 80, right: 40, bottom: 120, left: 40 } ,
            dataBinding: 'FlotGraphTypes.graphController.arrangedObjects' ,
            optionsBinding: 'FlotGraphTypes.graphController.options'
        }),
        explanation: SC.LabelView.design({
            layout: { left: 50, bottom: 0, right: 0, height: 100 },
            value: '<p>Flot supports lines, points, filled areas, bars and any combinations of these, in the same plot and even on the same data series.</p><p>This is a clone of the <a href="http://people.iola.dk/olau/flot/examples/graph-types.html">Flot Graph Types</a> example.</p>',
            escapeHTML: NO
        })
    })
});
