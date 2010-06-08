// ==========================================================================
// Project:   FlotOilSpills.spillController
// ==========================================================================
/*globals FlotOilSpills */

/** @class

  @extends SC.Object
*/
FlotOilSpills.spillController = SC.ArrayController.create(
/** @scope FlotOilSpills.spillController.prototype */ {

    selected_spill: null,
    highlighted_spill_index: null,

    getName: function(index) { return this.get('content').objectAt(index).get('name') },

    selectSpill: function(spill_item) {
        var selectedSpill = this.get('content').objectAt(spill_item.dataIndex);
        this.selectObject(selectedSpill);
        this.set('selected_spill', selectedSpill);
    },

    listItemSelected: function() {
        var selection_set = FlotOilSpills.mainPage.mainPane.spills.contentView.get('selection');
        var item = selection_set.firstObject();
        //console.error(selection_set.toString());
        if (! SC.none(item)) {
            var index = FlotOilSpills.spillController.indexOf(item);
            var current_index = this.get('highlighted_spill_index');
            if (!SC.none(current_index)) {
                FlotOilSpills.mainPage.mainPane.graph.plot.unhighlight(0, current_index);
            }
            FlotOilSpills.mainPage.mainPane.graph.plot.highlight(0, index);
            this.set('highlighted_spill_index', index);
        }
    }.observes('FlotOilSpills.mainPage.mainPane.spills.contentView.selection')

});


