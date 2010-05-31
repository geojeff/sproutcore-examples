// ==========================================================================
// Project:   FlotCarbonDioxide - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotCarbonDioxide */

FlotCarbonDioxide.mainPage = SC.Page.design({

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
                value: 'Full Mauna Loa Carbon Dioxide Record',
            })
        }),
        graph: Flot.GraphView.design({
            layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
            dataBinding: 'FlotCarbonDioxide.graphController.arrangedObjects' ,
            optionsBinding: 'FlotCarbonDioxide.graphController.options'
        }),
        explanation: SC.LabelView.design({
            layout: { left: 8, bottom: 0, right: 0, height: 80 },
            value: 'See current graph, data, and data description at NOAA&#39;s <a href="http://www.esrl.no@.gov/gmd/ccgg/trends/" target="_blank">Trends in Atmospheric Carbon Dioxide</a>',
            escapeHTML: NO
        })
    })
});
