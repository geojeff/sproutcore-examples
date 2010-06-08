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

    selectSpill: function(plot, spill_item) {
        var selectedSpill = this.get('content').objectAt(spill_item.dataIndex);
        this.selectObject(selectedSpill);
        FlotOilSpills.mainPage.mainPane.spills.contentView.scrollToContentIndex(spill_item.dataIndex);
        plot.highlight(spill_item.series, spill_item.datapoint);
    },
});


