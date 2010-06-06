// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills Table Forms */

sc_require('flot.core.js');
FlotOilSpills.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'graphTitle hovered_spill graph spills explanation'.w(),
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

        hovered_spill: SC.LabelView.design({
            //tagName: 'h1',
            textAlign: SC.ALIGN_CENTER,
            classNames: "embossed".w(),
            layout: { left: 300, right: 0, height: 50, top: 200 },
            valueBinding: "FlotOilSpills.graphController.tooltip"
        }),


        //graph: Flot.GraphView.design({
        graph: SC.View.extend(SC.ContentDisplay, {
            layout: { top: 50, right: 40, bottom: 400, left: 40 } ,
            dataBinding: 'FlotOilSpills.graphController.selection',
            optionsBinding: 'FlotOilSpills.graphController.options',
            contentBinding: 'FlotOilSpills.graphController.selection',
             
            showTooltip: function(context, firstTime) {
                tooltip = FlotOilSpills.graphController.tooltip;
                //console.error(tooltip);
                context = context.begin('div');
                context = context.id('tooltip');
                context = context.addStyle('position', 'absolute');
                context = context.addStyle('display', 'none');
                context = context.addStyle('top', "%@".fmt(tooltip.y+5));
                context = context.addStyle('left', "%@".fmt(tooltip.x+5));
                context = context.addStyle('border', '1px solid #fdd');
                context = context.addStyle('padding', '2px');
                context = context.addStyle('background-color', '#fee');
                context = context.addStyle('opacity', 0.80);
                context = context.push(tooltip.label);
                context = context.end();
            },

            removeTooltip: function(context, firstTime) {
                this.set('tooltip', NO);
            },

            render: function(context, firstTime) {
                sc_super();
                 
                if(this.get('layer') && this.get('isVisibleInWindow')) {
                    if((this.get('frame').width > 0) && (this.get('frame').height > 0)) {
                        if(this.get('data')) {
                            placeholder = this.get('layer');
                            Flot.plot(this.get('layer'), this.get('data').toArray(), this.get('options')) ;

                            $(placeholder).bind("plothover", function (event, pos, item) {
                                FlotOilSpills.graphController.setHoverPoint(pos.x.toFixed(2), pos.y.toFixed(2));
                            
                                previousPoint = FlotOilSpills.graphController.get('previousPoint');

                                if (FlotOilSpills.graphController.showTooltips === YES) {
                                    if (item) {
                                        if (previousPoint != item.datapoint) {
                                            FlotOilSpills.graphController.setPreviousPoint(item.datapoint);
                                            FlotOilSpills.mainPage.mainPane.graph.removeTooltip();
                                            var x = item.datapoint[0].toFixed(2), 
                                                y = item.datapoint[1].toFixed(2);
                                            oil_spill_name = FlotOilSpills.spillController.getName(item.dataIndex);
                                            // item.series.label is the name of the data series (handy if more than one series)
                                            if (FlotOilSpills.graphController.tooltip !== oil_spill_name) {
                                                FlotOilSpills.graphController.setTooltip(item.pageX, item.pageY, oil_spill_name);
                                            }
                                            //FlotOilSpills.graphController.setTooltip(item.pageX, item.pageY, oil_spill_name + " of " + x + " = " + y);
                                            FlotOilSpills.mainPage.mainPane.graph.showTooltip(context, firstTime);
                                        }
                                    }
                                } else {
                                    FlotOilSpills.graphController.setTooltip(0, 0, 'Hover over points to see spill name here.');
                                    FlotOilSpills.mainPage.mainPane.graph.removeTooltip();
                                    FlotOilSpills.graphController.setPreviousPoint(null);
                                }
                            });

                            $(placeholder).bind("plotclick", function (event, pos, item) {
                                if (item) {
                                    clicked_oil_spill = FlotOilSpills.spillController.objectAt(item.dataIndex);
                                    FlotOilSpills.spillController.selectObject(clicked_oil_spill);
                                    FlotOilSpills.mainPage.mainPane.spills.contentView.scrollToContentIndex(item.dataIndex);
                                    //FlotOilSpills.graphController.setDataPointClick(item.dataIndex, item.series.label);
                                    //$().highlight(item.series, item.datapoint);
                                }
                            });
                        }
                    }
                }
            },
    
            viewDidResize: function() {
                sc_super() ;
                this.setLayerNeedsUpdate() ;
            },    
    
            plotDataDidChange: function() {
                this.setLayerNeedsUpdate() ;
            }.observes('.data','.data.[]'),
    
            plotOptionsDidChange: function() {
                this.setLayerNeedsUpdate() ;
            }.observes('.options'),
    
            visibilityDidChange: function() {
                if(this.get('isVisibleInWindow') && this.get('isVisible')) {
                    this.setLayerNeedsUpdate() ;
                }        
            }.observes('isVisibleInWindow','isVisible'),
    
            layerDidChange: function() {
                this.setLayerNeedsUpdate() ;    
            }.observes('layer'),

            layoutDidChange: function() {
                sc_super() ;
                this.setLayerNeedsUpdate() ;
            },
    
            updateLayerLocationIfNeeded: function() {
                sc_super() ;
                this.setLayerNeedsUpdate() ;
            },
    
            setLayerNeedsUpdate: function() {
                this.invokeOnce(function() {
                    this.set('layerNeedsUpdate', YES);
                }) ;
            },
        }),


//        tooltips: SC.View.design({
//            layout: { left: 50, right: 0, bottom: 340, top: 10},
//            childViews: "form".w(),
//            form: SC.FormView.design({
//                classNames: ["flot_oil_spill"],
//                layout: { left: 38, right: 0, bottom: 20 },
//                childViews: "show_tooltips".w(),
//
//                show_tooltips: SC.FormView.row(SC.CheckboxView.design({
//                    layout: {width: 150, height: 24},
//                    controlSize: SC.SMALL_CONTROL_SIZE,
//                    valueBinding: 'FlotOilSpills.graphController.showTooltips'
//                })),
//            })
//        }),
    

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
        explanation: SC.LabelView.design({
            layout: { left: 40, bottom: 0, right: 0, height: 40 },
            value: 'Data is from Wikipedia&#39;s <a href="http://en.wikipedia.org/wiki/List_of_oil_spills">List of Oil Spills page</a>. CSS styling is from <a href="http://frozencanuck.wordpress.com/2009/09/06/creating-a-simple-custom-list-item-view-part-1/">frozencanuck&#39;s blog page</a>.',
            escapeHTML: NO
        })
    })
});
