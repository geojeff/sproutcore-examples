// ==========================================================================
// Project:   FlotDualAxis - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotDualAxis */

FlotDualAxis.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
        childViews: 'graph'.w(),
        graph: Flot.GraphView.design({
            layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
            dataBinding: 'FlotDualAxis.graphController.arrangedObjects' ,
            optionsBinding: 'FlotDualAxis.graphController.options'
        })
    })
});
