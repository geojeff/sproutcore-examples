// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills Forms */

sc_require('flot.core.js');
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

        //graph: Flot.GraphView.design({
        graph: SC.View.extend(SC.ContentDisplay, {
            layout: { top: 50, right: 40, bottom: 400, left: 40 } ,
            dataBinding: 'FlotOilSpills.graphController.selection',
            optionsBinding: 'FlotOilSpills.graphController.options',
            contentBinding: 'FlotOilSpills.graphController.selection',
            selectionBinding: 'FlotOilSpills.spillController.selectedIndex',
             
            showTooltip: function(x, y, contents) {
                SC.RunLoop.begin();
                $('<div id="tooltip">' + contents + '</div>').css( {
                    position: 'absolute',
                    display: 'none',
                    top: y + 5,
                    left: x + 5,
                    border: '1px solid #fdd',
                    padding: '2px',
                    'background-color': '#fee',
                    opacity: 0.80
                }).appendTo("body").fadeIn(200);
                SC.RunLoop.end();
            },

            removeTooltip: function(context, firstTime) {
                $("#tooltip").remove();
            },

            render: function(context, firstTime) {
                sc_super();

                var previousPoint = null;
                //var currentPoint = null;
                //if (this.timer){ this.timer.invalidate(); this.timer.destroy(); }

                if(this.get('layer') && this.get('isVisibleInWindow')) {
                    if((this.get('frame').width > 0) && (this.get('frame').height > 0)) {
                        if(this.get('data')) {
                            var placeholder = this.get('layer');
                            var plot = Flot.plot(placeholder, this.get('data').toArray(), this.get('options')) ;

                            $(placeholder).bind("plothover", function (event, pos, item) {
                                SC.RunLoop.begin();
                                if (FlotOilSpills.graphController.showTooltips === YES) {
                                    if (item) {
                                        if (SC.none(previousPoint) || ((previousPoint[0] !== item.datapoint[0]) && (previousPoint[1] !== item.datapoint[1]))) {
                                            //FlotOilSpills.graphController.setPreviousPoint(item.datapoint);
                                            previousPoint = item.datapoint;
                                            FlotOilSpills.mainPage.mainPane.graph.removeTooltip();
                                            FlotOilSpills.graphController.setTooltip(item);
                                            var oil_spill_name = FlotOilSpills.spillController.getName(item.dataIndex);
                                            FlotOilSpills.mainPage.mainPane.graph.showTooltip(item.pageX, item.pageY, oil_spill_name);
                                        }
                                    } else {
                                        FlotOilSpills.mainPage.mainPane.graph.removeTooltip();
                                        previousPoint = null;
                                    }
                                }
                                SC.RunLoop.end();
                            });

                            $(placeholder).bind("plotclick", function (event, pos, item) {
                                SC.RunLoop.begin();
                                if (item) {
                                    FlotOilSpills.spillController.selectSpill(plot, item);
                                }
                                SC.RunLoop.end();
                            });

                            $(placeholder).bind("mouseout", function (event, pos, item) {
                                SC.RunLoop.begin();
                                FlotOilSpills.mainPage.mainPane.graph.removeTooltip();
                                SC.RunLoop.end();
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
        spills: SC.ScrollView.design({
            layout: { left: 40, right: 40, bottom: 70, height: 300 },
            contentView: SC.ListView.design({ 
                layout: { top: 0, bottom: 0, left: 0, right: 0 }, 
                contentBinding: 'FlotOilSpills.spillController.arrangedObjects', 
                selectionBinding:'FlotOilSpills.spillController.selection',                                                                                                                                                                                      
                exampleView: FlotOilSpills.CustomListItemView, 
                rowHeight: 45, 
                rowSpacing: 0,
                actOnSelect: YES,
                action: FlotOilSpills.spillController.listItemSelected
            }), 
        }),
        explanation: SC.LabelView.design({
            layout: { left: 40, bottom: 0, right: 0, height: 40 },
            value: 'Data is from Wikipedia&#39;s <a href="http://en.wikipedia.org/wiki/List_of_oil_spills">List of Oil Spills page</a>. CSS styling is from <a href="http://frozencanuck.wordpress.com/2009/09/06/creating-a-simple-custom-list-item-view-part-1/">frozencanuck&#39;s blog page</a>.',
            escapeHTML: NO
        })
    })
});


//        tooltip: SC.LabelView.design({
//            //tagName: 'h1',
//            textAlign: SC.ALIGN_CENTER,
//            //classNames: ["tooltip"],
//            //layout: { left: 300, right: 0, height: 50, top: 200 },
//            layoutBinding: "FlotOilSpills.graphController.tooltipLayout",
//            valueBinding: "FlotOilSpills.graphController.tooltip",
//
//            layerDidChange: function() {
//                this.set('layerNeedsUpdate', YES);
//                this.set('layerLocationNeedsUpdate', YES);
//            }.observes('layer'),
//
//            render: function(context, firstTime) {
//                tooltip = this.get('value');
//                tooltipLayout = this.get('layout');
//                //tooltip = FlotOilSpills.graphController.tooltip;
//                context = context.begin('div');
//                context = context.id('tooltip');
//                context = context.addStyle('position', 'absolute')
//                                 .addStyle('display', 'none')
//                                 .addStyle('top', "%@".fmt(tooltipLayout.left+5))
//                                 .addStyle('left', "%@".fmt(tooltipLayout.top+5))
//                                 .addStyle('border', '1px solid #fdd')
//                                 .addStyle('padding', '2px')
//                                 .addStyle('background-color', '#fee')
//                                 .addStyle('opacity', 0.80);
//                context = context.push(tooltip.label);
//                context = context.end();
//                
//                sc_super();
//            }
//        }),

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
