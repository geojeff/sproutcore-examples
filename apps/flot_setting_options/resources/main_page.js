// ==========================================================================
// Project:   FlotSettingOptions - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotSettingOptions */

FlotSettingOptions.mainPage = SC.Page.design({

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
                value: 'Flot Setting Options Example',
            })
        }),
        graph: Flot.GraphView.design({
            layout: { top: 70, right: 40, bottom: 160, left: 40 } ,
            dataBinding: 'FlotSettingOptions.graphController.arrangedObjects' ,
            optionsBinding: 'FlotSettingOptions.graphController.options'
        }),
        explanation: SC.LabelView.design({
            layout: { left: 50, bottom: 0, right: 40, height: 140 },
            value: '<p>There are plenty of options you can set to control the precise looks of your plot. You can control the axes, the legend, the default graph type, the look of grid, etc.</p><p>The idea is that Flot goes to great lengths to provide <b>sensible defaults</b> which you can then customize as needed for your particular application. If you&#39;ve found a use case where the defaults can be improved, please don&#39;t hesitate to give your feedback.</p><p>This is a clone of the <a href="http://people.iola.dk/olau/flot/examples/setting-options.html">Flot Setting Options Graph</a>.</p>',
            escapeHTML: NO
        })
    })
});
