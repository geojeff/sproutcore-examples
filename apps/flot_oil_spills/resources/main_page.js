// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills Table Forms */

FlotOilSpills.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'graphTitle graph spills explanation'.w(),
        graphTitle: SC.ToolbarView.design({
            layout: { top: 0, left: 0, right: 0, height: 36 },
            anchorLocation: SC.ANCHOR_TOP,
            childViews: 'labelView'.w(),
            labelView: SC.LabelView.design({
                layout: { centerY: 0, height: 24, left: 8, width: 500 },
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
                value: 'Oil Spills',
            })
        }),
        graph: Flot.GraphView.design({
            layout: { top: 50, right: 40, bottom: 400, left: 40 } ,
            //layout: { top: 50, right: 40, bottom: 310, left: 40 } ,
            dataBinding: 'FlotOilSpills.graphController.selection',
            optionsBinding: 'FlotOilSpills.graphController.options'
        }),
//        spills: SC.ScrollView.design({
//            layout: { left: 40, right: 40, bottom: 70, top: 470},
//            backgroundColor: "white",
//            contentView: SC.ListView.design({
//                contentBinding: 'FlotOilSpills.spillController.arrangedObjects',
//                contentValueKey: "name"
//            }),
//        }),
         spills: SC.ScrollView.design({
             layout: { left: 40, right: 40, bottom: 70, height: 300 },
             contentView: SC.ListView.design({ 
                 layout: { top: 0, bottom: 0, left: 0, right: 0 }, 
                 contentBinding: 'FlotOilSpills.spillController.arrangedObjects', 
                 selectionBinding:'FlotOilSpills.spillController.selection',                                                                                                                                                                                      
                 exampleView: FlotOilSpills.CustomListItemView, 
                 rowHeight: 45, 
                 rowSpacing: 0 
             }), 
         }),
//        spills: SC.TableView.design({
//            layout: { left: 40, right: 40, bottom: 70, top: 470},
//            backgroundColor: "white", 
//            columns: [ 
//                SC.TableColumn.create({ 
//                    key:   'timestamp', 
//                    label: 'Date', 
//                    width: 120 
//                }), 
//                SC.TableColumn.create({ 
//                    key:   'name', 
//                    label: 'Name', 
//                    width: 170 
//                }), 
//                SC.TableColumn.create({ 
//                    key:   'location', 
//                    label: 'Location', 
//                    width: 520 
//                }),
//                SC.TableColumn.create({ 
//                    key:   'min_tonnage', 
//                    label: 'Min. Tonnage', 
//                    width: 100 
//                }),
//                SC.TableColumn.create({ 
//                    key:   'max_tonnage', 
//                    label: 'Max. Tonnage', 
//                    width: 100 
//                }) 
//            ],
//            contentBinding:   'FlotOilSpills.spillController.arrangedObjects', 
//            selectOnMouseDown: YES,
//            exampleView: SC.TableRowView, 
//            recordType: FlotOilSpills.oil_spill_data,
//        }),
//        checkboxesView: SC.View.design({
//            layout: { left: 18, right: 0, bottom: 80, top: 10},
//            childViews: "form".w(),
//            form: SC.FormView.design({
//                classNames: ["flot_oil_spill"],
//                layout: { left: 38, right: 0, bottom: 20 },
//                childViews: "header minimum maximum".w(),
//
//                header: SC.LabelView.design({
//                    layout: { width: 200, height: 24 },
//                    classNames: "header".w(),
//                    value: "Select Data To Show:"
//                }),
//                minimum: SC.FormView.row(SC.CheckboxView.design({
//                    layout: {width: 150, height: 24},
//                    controlSize: SC.SMALL_CONTROL_SIZE,
//                    valueBinding: 'FlotOilSpills.graphController.isMinimumTonnageShowing'
//                })),
//                maximum: SC.FormView.row(SC.CheckboxView.design({
//                    layout: {width: 150, height: 24},
//                    controlSize: SC.SMALL_CONTROL_SIZE,
//                    valueBinding: 'FlotOilSpills.graphController.isMaximumTonnageShowing'
//                }))
//            })
//        }),
        explanation: SC.LabelView.design({
            layout: { left: 40, bottom: 0, right: 0, height: 40 },
            value: 'Data is from Wikipedia&#39;s <a href="http://en.wikipedia.org/wiki/List_of_oil_spills">List of Oil Spills page</a>. CSS styling is from <a href="http://frozencanuck.wordpress.com/2009/09/06/creating-a-simple-custom-list-item-view-part-1/">frozencanuck&#39;s blog page</a>.',
            escapeHTML: NO
        })
    })
});
