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

    getName: function(index) { return this.get('content').objectAt(index).get('name') },

    selectSpill: function(spill_item) {
        var selectedSpill = this.get('content').objectAt(spill_item.dataIndex);
        this.selectObject(selectedSpill);
        this.set('selected_spill', selectedSpill);
    },

//    listItemSelected: function() {
//        obj = FlotOilSpills.spillController.get('selection');
//        if (! SC.none(obj)) {
//            idx = FlotOilSpills.spillController.indexOf(obj);
//            console.error(idx);
//        }
//    }.observes(this.selected_spill)

});


