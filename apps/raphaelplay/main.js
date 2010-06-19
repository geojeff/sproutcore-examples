// ==========================================================================
// Project:   RaphaelPlay
// ==========================================================================
/*globals RaphaelPlay */

RaphaelPlay.main = function main() {

    RaphaelPlay.getPath('mainPage.mainPane').append();

	var query = SC.Query.local(RaphaelPlay.australianState, { orderBy: 'name' });
	var australianStates = RaphaelPlay.store.find(query);
	
    RaphaelPlay.australianStatesController.set('content', australianStates);

};

function main() {
    RaphaelPlay.main();
}
