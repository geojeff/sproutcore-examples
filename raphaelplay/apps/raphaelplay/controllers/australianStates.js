// ==========================================================================
// Project:   RaphaelPlay.australianStatesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals RaphaelPlay */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
RaphaelPlay.australianStatesController = SC.ArrayController.create(
//SC.CollectionViewDelegate,
/** @scope RaphaelPlay.australianStatesController.prototype */
{
    //selection: null,

    listEnabled: YES,

    raphaelView: null,

    listView: null,

    /**
     *     Note: This is a hack. Currently the SC.CollectionView does not correctly respond to
     *         changes made to its isEnabled property. Therefore we have to force the collection
     *             view to reload to make sure the view and its list item views correctly receive the
     *                 changes. 
     *
     *                     In addition, the SC.CollectionView does not handle changes to its isSelectable
     *                         property either. Sigh.
     *
     *                             Such is life working with a beta release. [Sept 6, 2009]
     *                               */
    listEnabledChanged: function() {
        var list = this.get('listView');
        list.set('isEnabled', this.get('listEnabled'));
        list.reload();
    }.observes('listEnabled'),

    highlightRaphaelPath:  function(p) {
        p.animate({ fill: "#333", stroke: "#666" }, 500);
        p.animate({ fill: st.color, stroke: "#ccc" }, 500);
        p.toFront();
        r.safari();
    },

    summary: function() {
        var len = this.get('length'),
        ret;

        if (len && len > 0) {
            ret = len === 1 ? "1 australianState": "%@ australianStates".fmt(len);
        } else ret = "No australianStates";

        return ret;
    }.property('length').cacheable(),

    selectAustralianState: function(australianState) {
        SC.RunLoop.begin();
        var selectedState = RaphaelPlay.store.find(RaphaelPlay.australianState, australianState);
        this.selectObject(selectedState);
        SC.RunLoop.end();
    },

    unselectAustralianState: function(australianState) {
        SC.RunLoop.begin();
        this.selectObject(null);
        SC.RunLoop.end();
    },

});
