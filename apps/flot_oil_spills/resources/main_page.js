// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills Forms */

FlotOilSpills.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'graphTitle graph directions spills explanation'.w(),
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
            layout: { top: 50, right: 40, bottom: 430, left: 40 } ,
            dataBinding: 'FlotOilSpills.graphController.selection',
            optionsBinding: 'FlotOilSpills.graphController.options',
            contentBinding: 'FlotOilSpills.graphController.selection',
            selectionBinding: 'FlotOilSpills.spillController.selectedIndex',
            plot: null,
             
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

                if(this.get('layer') && this.get('isVisibleInWindow')) {
                    if((this.get('frame').width > 0) && (this.get('frame').height > 0)) {
                        if(this.get('data')) {
                            var placeholder = this.get('layer');

                            // This variable, plot, could be passed to functions in here if needed.
                            var plot = Flot.plot(placeholder, this.get('data').toArray(), this.get('options'));
                            this.set('plot', plot);

                            $(placeholder).bind("plothover", function (event, pos, item) {
                                SC.RunLoop.begin();
                                if (FlotOilSpills.graphController.showTooltips === YES) {
                                    if (item) {
                                        if (SC.none(previousPoint) || ((previousPoint[0] !== item.datapoint[0]) && (previousPoint[1] !== item.datapoint[1]))) {
                                            previousPoint = item.datapoint;
                                            FlotOilSpills.mainPage.mainPane.graph.removeTooltip();
                                            var oil_spill_name = FlotOilSpills.spillController.getName(item.dataIndex);
                                            var plot_x = item.pageX - plot.offset().left;
                                            var plot_width = plot.width();
                                            var margin = plot_width * 0.05
                                            var x = item.pageX;
                                            if (plot_x >= (plot_width - margin)) {
                                                x = x - margin;
                                            }
                                            FlotOilSpills.mainPage.mainPane.graph.showTooltip(x, item.pageY, oil_spill_name);
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
                                    FlotOilSpills.spillController.selectSpill(item);
                                    plot.highlight(item.series, item.datapoint);
                                    FlotOilSpills.mainPage.mainPane.spills.contentView.scrollToContentIndex(item.dataIndex);
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
        directions: SC.LabelView.design({
            layout: { left: 40, bottom: 380, right: 0, height: 40 },
            value: 'Hover over data points on the graph for oil spill names. Click data points to identify spills in the list. Click spills in the list to highlight data points on the graph.'
        }),
        spills: SC.ScrollView.design({
            layout: { left: 40, right: 40, bottom: 70, height: 320 },
            contentView: SC.ListView.design({ 
                layout: { top: 0, bottom: 0, left: 0, right: 0 }, 
                contentBinding: 'FlotOilSpills.spillController.arrangedObjects', 
                selectionBinding:'FlotOilSpills.spillController.selection',                                                                                                                                                                                      
                exampleView: FlotOilSpills.CustomListItemView, 
                rowHeight: 45, 
                rowSpacing: 0,
                actOnSelect: YES,
                action: 'FlotOilSpills.spillController.listItemSelected'
            }), 
        }),
        explanation: SC.LabelView.design({
            layout: { left: 40, bottom: 0, right: 0, height: 40 },
            value: 'Data is from Wikipedia&#39;s <a href="http://en.wikipedia.org/wiki/List_of_oil_spills">List of Oil Spills page</a>. CSS styling is from <a href="http://frozencanuck.wordpress.com/2009/09/06/creating-a-simple-custom-list-item-view-part-1/">frozencanuck&#39;s blog page</a>. The graph illustrates interactivity like this <a href="http://people.iola.dk/olau/flot/examples/interacting.html">Flot example</a>.',
            escapeHTML: NO
        }),

    })
});
