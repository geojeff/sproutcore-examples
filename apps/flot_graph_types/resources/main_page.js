// ==========================================================================
// Project:   FlotGraphTypes - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FlotGraphTypes */

FlotGraphTypes.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'graph'.w(),
    classNames: ['flot-view'],
    graph: Flot.GraphView.design({
	  layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
	  dataBinding: 'FlotGraphTypes.graphController.arrangedObjects' ,
	  optionsBinding: 'FlotGraphTypes.graphController.options'
	})
  })
});
