// ==========================================================================
// Project:   FlotOilSpills.spillController
// ==========================================================================
/*globals FlotOilSpills */

/** @class

  @extends SC.Object
*/
FlotOilSpills.spillController = SC.ArrayController.create(
/** @scope FlotOilSpills.spillController.prototype */ {

    getName: function(index) { return this.get('content').objectAt(index).get('name') },

    selectSpill: function(spill_index) {
        // I thought the RunLoop calls were needed for immediacy, but something else,
        // probably Flot, is holding up this taking effect.
        SC.RunLoop.begin();
        var selectedSpill = this.get('content').objectAt(spill_index);
        this.selectObject(selectedSpill);
        FlotOilSpills.mainPage.mainPane.spills.contentView.scrollToContentIndex(spill_index);
        SC.RunLoop.end();
    },

});


