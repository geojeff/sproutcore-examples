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
        childViews: 'summaryLabel summaryView raphaelView'.w(),

        summaryLabel: SC.LabelView.design({
            anchorLocation: SC.ANCHOR_TOP,
            displayValue: "Australian States",
            classNames: ['state-summary-label'],
            }), 

        summaryView: SC.View.extend(SC.ContentDisplay, {
            contentBinding: 'RaphaelPlay.australianStatesController.selection',
            classNames: ['state-summary-view'],

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
            contentBinding: 'RaphaelPlay.australianStatesController.arrangedObjects',
            contentDisplayProperties: 'path'.w(),
            classNames: ['raphael-view'],
            //layout: {
            //    width: 600,
            //    height: 480,
            //    centerX: 0,
            //    centerY: 0
            //},
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
                            if (stateID == "tas") {
                                st[0].onmouseover();
                            }
                        })(aus[stateID], stateID);
                    })
                }
            }
        })
	})
});
