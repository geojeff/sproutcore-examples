// ==========================================================================
// Project:   raphaelplay - mainPage
// ==========================================================================
/*globals RaphaelPlay Raphael */

RaphaelPlay.mainPage = SC.Page.design({

    mainPane: SC.MainPane.design({
        childViews: 'summaryLabel container raphaelView'.w(),

        summaryLabel: SC.LabelView.design({
            anchorLocation: SC.ANCHOR_TOP,
            displayValue: "Australian States",
            classNames: ['state-summary-label']
        }), 

        container: SC.ContainerView.design({
            layout: { left: 10, top: 60, height: 520, width: 900},

            // set by controller as either summaryView or helpView
            nowShowingBinding: "RaphaelPlay.australianStatesController.nowShowing"
        }),

        raphaelView: SC.View.extend(SC.ContentDisplay, {
            contentBinding: 'RaphaelPlay.australianStatesController.arrangedObjects',
            contentDisplayProperties: 'path'.w(),
            classNames: ['raphael-view'],

            layerDidChange: function() {
                this.set('layerNeedsUpdate', YES);
            }.observes('layer'),

            updateLayer: function() {
                sc_super();

                var r = new Raphael(100, 180, 640, 480, RaphaelPlay.australianStatesController);

                // fill and stroke for default view of Australian states
				var attr = { fill: "#333", stroke: "#666", "stroke-width": 1, "stroke-linejoin": "round" };
                
                // array for Raphael paths for the Australian states
				var aus = {};
                
                var australianStates = this.get('content');

                if (australianStates !== null) {
				    var current = null;
				
                    australianStates.forEach(function(australianState) {
                        var stateID = australianState.get('guid');
                        aus[stateID] = r.path(australianState.get('path')).attr(attr);
                        aus[stateID].color = Raphael.getColor(); 
					    (function(st, stateID) {
                            st[0].style.cursor = "pointer";
                            st[0].onmouseover = function() {
                                current && aus[current].animate({ fill: "#333", stroke: "#666" }, 500); 
                                st.animate({ fill: st.color, stroke: "#ccc" }, 500);
                                st.toFront();
                                r.safari();
                                Raphael.sproutcoreController.selectAustralianState(stateID);
                                current = stateID;
                            };
                            st[0].onmouseout = function() {
                                st.animate({ fill: "#333", stroke: "#666" }, 500);
                                st.toFront();
                                r.safari();
                                Raphael.sproutcoreController.unselectAustralianState();
                            };
                            if (stateID == "tas") {
                                st[0].onmouseover();
                            }
                        })(aus[stateID], stateID);
                    });
                }
            }
        }) 
	}),

    summaryView: SC.View.extend(SC.ContentDisplay, {
        layout: { left: 10, right: 0, height: 100, width: 880 },
        contentBinding: 'RaphaelPlay.australianStatesController.selection',
        classNames: ['state-summary-view'],

        contentDisplayProperties: 'name description population'.w(),

        render: function(context, firstTime) {
            var name = '';
            var description = '';
            var population = '';

            var selectionSet = this.get('content');
            if (selectionSet !== null) {
                var selectedRecord = selectionSet.firstObject();
                if (selectedRecord !== null) {
                    name = selectedRecord.get('name');
                    description = selectedRecord.get('description');
                    population = selectedRecord.get('population');
                    context = context.begin('div').addClass('state-summary-view-name').push(name).end();
                    context = context.begin('div').addClass('state-summary-view-desc').push(description).end();
                    context = context.begin('div').addClass('state-summary-view-population');
                    context = context.begin('div').addClass('state-summary-view-population-value').push(population).end();
                    context = context.begin('div').addClass('state-summary-view-population-capt').push('population').end();
                    context = context.end();
                }
            }

            sc_super();
        }
    }),

    helpView: SC.LabelView.design( {
        tagName: "h2",
        classNames: "state-summary-help",
        textAlign: SC.ALIGN_CENTER,
        controlSize: SC.HUGE_CONTROL_SIZE,
        layout: { left: 10, right: 0, height: 24, width: 880 },
        value: "Hover over a state to see its description."
    })
});
