// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       FlotHumanPopulation
// ==========================================================================
/*globals FlotHumanPopulation Forms */

FlotHumanPopulation.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'graphTitle graph checkboxesView explanation'.w(),
        graphTitle: SC.ToolbarView.design({
            layout: { top: 0, left: 0, right: 0, height: 36 },
            anchorLocation: SC.ANCHOR_TOP,
            childViews: 'labelView'.w(),
            labelView: SC.LabelView.design({
                layout: { centerY: 0, height: 24, left: 8, width: 500 },
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
                value: 'Human Population',
            })
        }),
        graph: Flot.GraphView.design({
            layout: { top: 50, right: 40, bottom: 310, left: 40 } ,
            dataBinding: 'FlotHumanPopulation.graphController.selection',
            //selectionBinding: 'FlotHumanPopulation.graphController.selection',
            optionsBinding: 'FlotHumanPopulation.graphController.options'
        }),
//        areasView: SC.ListView.design({
//            layout: { left: 38, right: 0, bottom: 20, top: 400},
//            contentBinding: 'FlotHumanPopulation.graphController.arrangedObjects',
//            selectionBinding: 'FlotHumanPopulation.graphController.selection',
//            contentValueKey: "label",
//            contentCheckboxKey: "isChecked"
//        }),
        checkboxesView: SC.View.design({
            childViews: "form".w(),
            form: SC.FormView.design({
                classNames: ["flot_human_population"],
                layout: { left: 38, right: 0, bottom: 20 },
                childViews: "header world africa asia europe latin_america northern_america oceania".w(),

                header: SC.LabelView.design({
                    layout: { width: 200, height: 24 },
                    classNames: "header".w(),
                    value: "Select Data To Show:"
                }),
                world: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "World",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                    valueBinding: 'FlotHumanPopulation.graphController.isWorldDataShowing'
                })),
                africa: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "Africa",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                    valueBinding: 'FlotHumanPopulation.graphController.isAfricaDataShowing'
                })),
                asia: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "Asia",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                    valueBinding: 'FlotHumanPopulation.graphController.isAsiaDataShowing',
                })),
                europe: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "Europe",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                    valueBinding: 'FlotHumanPopulation.graphController.isEuropeDataShowing',
                })),
                latin_america: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "Latin America",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                    valueBinding: 'FlotHumanPopulation.graphController.isLatinAmericaDataShowing'
                })),
                northern_america: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "Northern America",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                  valueBinding: 'FlotHumanPopulation.graphController.isNorthernAmericaDataShowing'
                })),
                oceania: SC.FormView.row(SC.CheckboxView.design({
                    layout: {width: 150, height: 24},
                    title: "Oceania",
                    controlSize: SC.SMALL_CONTROL_SIZE,
                    valueBinding: 'FlotHumanPopulation.graphController.isOceaniaDataShowing'
                }))
            })
        }),
        explanation: SC.LabelView.design({
            layout: { left: 400, bottom: 0, right: 0, height: 20 },
            value: 'Data from Wikipedia&#39;s <a href="http://en.wikipedia.org/wiki/World_population">World Population page</a>',
            escapeHTML: NO
        })
    })
});