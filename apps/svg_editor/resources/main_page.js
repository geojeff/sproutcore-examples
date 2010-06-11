// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       ScalableVectorGraphicsEditor
// ==========================================================================
/*globals ScalableVectorGraphicsEditor Forms */

ScalableVectorGraphicsEditor.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'map_system'.w(),

        map_system: SC.View.design({
            layout: { width: 1200, height: 650 },
            childViews: 'editor map_controls'.w(),

            editor: SC.WebView.extend(SC.ContentDisplay, {
                layout: { width: 750, height: 650 },
                value: 'http://www.geojeff.com/svg-edit-read-only/editor/svg-editor.html',
                mapDataDidChange: function(){}
            }),
            map_controls: SC.View.design({
                layout: { left: 720, top: 40 },
                childViews: "form".w(),
                form: SC.FormView.design({
                    classNames: ["svg_editor"],
                    layout: { left: 38, right: 0, bottom: 20 },
                    childViews: "header roads demography streams water_features vegetation political_boundaries national_parks".w(),

                    header: SC.LabelView.design({
                        layout: { width: 100, height: 24 },
                        classNames: "header".w(),
                        value: "Map Layers:"
                    }),
                    roads: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                        valueBinding: 'ScalableVectorGraphicsEditor.mapController.isRoadsDataShowing'
                    })),
                    demography: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                        valueBinding: 'ScalableVectorGraphicsEditor.mapController.isDemographyDataShowing'
                    })),
                    streams: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                        valueBinding: 'ScalableVectorGraphicsEditor.mapController.isStreamsDataShowing',
                    })),
                    water_features: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                        valueBinding: 'ScalableVectorGraphicsEditor.mapController.isWaterFeaturesDataShowing',
                    })),
                    vegetation: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                        valueBinding: 'ScalableVectorGraphicsEditor.mapController.isVegetationDataShowing'
                    })),
                    political_boundaries: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                      valueBinding: 'ScalableVectorGraphicsEditor.mapController.isPoliticalBoundariesDataShowing'
                    })),
                    national_parks: SC.FormView.row(SC.CheckboxView.design({
                        layout: {width: 150, height: 24},
                        controlSize: SC.SMALL_CONTROL_SIZE,
                        valueBinding: 'ScalableVectorGraphicsEditor.mapController.isNationalParksDataShowing'
                    }))
                })
            })
        })
    })
});
