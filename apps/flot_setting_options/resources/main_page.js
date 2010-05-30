// ==========================================================================
// Project:   FlotSettingOptions - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotSettingOptions */

FlotSettingOptions.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'graph'.w(),
        graph: Flot.GraphView.design({
            layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
            dataBinding: 'FlotSettingOptions.graphController.arrangedObjects' ,
            optionsBinding: 'FlotSettingOptions.graphController.options'
        })
    })
});
