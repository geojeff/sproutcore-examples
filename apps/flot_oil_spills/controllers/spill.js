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
        //debugger;
        console.error(spill_item.series, spill_item.datapoint);
        plot.highlight(spill_item.series, spill_item.datapoint);
        //this.dumpProps(plot);
    },

    dumpProps: function(obj, parent) {
        for (var i in obj) {
            // if a parent (2nd parameter) was passed in, then use that to 
            // build the message. Message includes i (the object's property name) 
            // then the object's property value on a new line 
            if (parent) { var msg = parent + "." + i + "\n" + obj[i]; } else { var msg = i + "\n" + obj[i]; }
            // Display the message. If the user clicks "OK", then continue. If they 
            // click "CANCEL" then quit this level of recursion 
            if (!confirm(msg)) { return; }
            // If this property (i) is an object, then recursively process the object 
            if (typeof obj[i] == "object") { 
                if (parent) { this.dumpProps(obj[i], parent + "." + i); } else { this.dumpProps(obj[i], i); }
            }
        }
    },
});


