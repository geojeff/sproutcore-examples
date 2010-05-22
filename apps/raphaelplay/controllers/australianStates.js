// ==========================================================================
// Project:   RaphaelPlay.australianStatesController
// ==========================================================================
/*globals RaphaelPlay */

/** @class

  An ArrayController for the Australian states.

  @extends SC.ArrayController
*/
RaphaelPlay.australianStatesController = SC.ArrayController.create(
/** @scope RaphaelPlay.australianStatesController.prototype */
{
    selectAustralianState: function(australianState) {
        SC.RunLoop.begin();
        var selectedState = RaphaelPlay.store.find(RaphaelPlay.australianState, australianState);
        this.selectObject(selectedState);
        SC.RunLoop.end();
    },

    unselectAustralianState: function() {
        SC.RunLoop.begin();
        this.selectObject(null);
        SC.RunLoop.end();
    },

    nowShowing: function() {
        return this.get('hasSelection') ? 'summaryView' : 'helpView'
    }.property('hasSelection').cacheable()

});
