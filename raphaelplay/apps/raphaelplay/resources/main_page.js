// ==========================================================================
// Project:   RaphaelPlay - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals RaphaelPlay */

// This page describes the main user interface for your application.  
RaphaelPlay.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page 
    // load.
    mainPane: SC.MainPane.design({
        childViews: 'topView raphaelView list'.w(),

        topView: SC.View.extend(SC.ContentDisplay, {
            contentBinding: 'RaphaelPlay.australianStatesController.selection',
            anchorLocation: SC.ANCHOR_TOP,
            classNames: ['state-summary-view'],

            //var isSelected = YES;
            //var standard = !isSelected;
            //var selected = isSelected;
            //var classes = { 'standard': standard, 'selected': selected };

            contentDisplayProperties: 'name description population'.w(),

            render: function(context, firstTime) {
                var name = '';
                var description = '';
                var population = '';

                var selectionSet = this.get('content');
                if (selectionSet != null) {
                    selectedRecord = selectionSet.firstObject();
                    if (selectedRecord != null) {
                        this.set('isVisible', YES);
                        name = selectedRecord.get('name');
                        description = selectedRecord.get('description');
                        population = selectedRecord.get('population');
                        isSelected = selectedRecord.get('isSelected');
                        context = context.begin('div').addClass('state-summary-view-name').push(name).end();
                        context = context.begin('div').addClass('state-summary-view-desc').push(description).end();
                        context = context.begin('div').addClass('state-summary-view-population');
                        context = context.begin('div').addClass('state-summary-view-population-value').push(population).end();
                        context = context.begin('div').addClass('state-summary-view-population-capt').push('population').end();
                        context = context.end();
                    } else {
                        this.set('isVisible', NO);
                    }
                } else {
                    this.set('isVisible', NO);
                }

                sc_super();
                },
            }),

        raphaelView: SC.View.extend(SC.ContentDisplay, {
        //raphaelView: SC.View.design( {
            contentBinding: 'RaphaelPlay.australianStatesController.arrangedObjects',
            contentDisplayProperties: 'path'.w(),
            layout: {
                width: 600,
                height: 480,
                centerX: 0,
                centerY: 0
            },
            //didCreateLayer: function() {
            //    // Not sure about drawing here; See below.
            //},

            //didUpdateLayer: function() {
            //    // update drawing here
            //},

            //willDestroyLater: function() {
            //    // do cleanup here
            //},

            layerDidChange: function() {
                this.set('layerNeedsUpdate', YES);
            }.observes('layer'),

            updateLayer: function() {
                sc_super();

                var r = Raphael(100, 180, 640, 480, RaphaelPlay.australianStatesController);

                // fill and stroke for default view of Australian states
				var attr = {
                    fill: "#333",
                    stroke: "#666",
                    "stroke-width": 1,
                    "stroke-linejoin": "round"
                };
                
                // array for Raphael paths for the Australian states
				var aus = {};
                
                // the Australian state objects, from the datastore
                //var content = this.get('content');
                //var australianStates = RaphaelPlay.australianStatesController;
                var australianStates = this.get('content');

                if (australianStates != null) {
				    var current = null;
				
                    australianStates.forEach(function(australianState) {
                        stateID = australianState.get('guid');
                        aus[stateID] = r.path(australianState.get('path')).attr(attr);
                        aus[stateID].color = Raphael.getColor(); 
					    (function(st, stateID) {
                            st[0].style.cursor = "pointer";
                            st[0].onmouseover = function() {
                                current && aus[current].animate({ fill: "#333", stroke: "#666" }, 500); 
                                st.animate({ fill: st.color, stroke: "#ccc" }, 500);
                                st.toFront();
                                r.safari();
                                Raphael.sproutcoreController.selectAustralianState(stateID)
                                current = stateID;
                            };
                            st[0].onmouseout = function() {
                                st.animate({ fill: "#333", stroke: "#666" }, 500);
                                st.toFront();
                                r.safari();
                                Raphael.sproutcoreController.unselectAustralianState(stateID)
                            };
                            //if (stateID == "tas") {
                            //    st[0].onmouseover();
                            //}
                        })(aus[stateID], stateID);
                    })
                }
            }
        }),

        list: SC.ScrollView.design({ 
            layout: { top: 110, left: 500, width: 300, height: 245 }, 
            contentView: SC.ListView.design({ 
                layout: { top: 0, bottom: 0, left: 0, right: 0 }, 
                contentBinding: 'RaphaelPlay.australianStatesController', 
                selectionBinding:'RaphaelPlay.australianStatesController.selection', 
                exampleView: RaphaelPlay.CustomListItemView, 
                rowHeight: 35, 
                rowSpacing: 0 
            }), 
        })
	})
});
