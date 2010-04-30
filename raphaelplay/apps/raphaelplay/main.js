// ==========================================================================
// Project:   RaphaelPlay
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals RaphaelPlay */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
RaphaelPlay.main = function main() {

    // Step 1: Instantiate Your Views
    // The default code here will make the mainPane for your application visible
    // on screen.  If you app gets any level of complexity, you will probably 
    // create multiple pages and panes.  
    RaphaelPlay.getPath('mainPage.mainPane').append();

    // Step 2. Set the content property on your primary controller.
    // This will make your app come alive!
    // TODO: Set the content property on your primary controller
    // ex: RaphaelPlay.contactsController.set('content',RaphaelPlay.contacts);
    
	var query = SC.Query.local(RaphaelPlay.australianState, { orderBy: 'name' });
	var australianStates = RaphaelPlay.store.find(query);

    RaphaelPlay.australianStatesController.set('content', australianStates);

    //alert(RaphaelPlay.australianStatesController.summary());

	//var vic = RaphaelPlay.store.find(RaphaelPlay.australianState, 'vic');
    //alert(vic);
    //RaphaelPlay.australianStatesController.set('selection', vic);
    //RaphaelPlay.australianStatesController.selectObject(vic);
    //alert(RaphaelPlay.australianStatesController.get('selection'));

    var raphaelView = RaphaelPlay.mainPage.mainPane.childViews[1].contentView;
    RaphaelPlay.australianStatesController.set('raphaelView', raphaelView);

    var listView = RaphaelPlay.mainPage.mainPane.childViews[2].contentView;
    RaphaelPlay.australianStatesController.set('listView', listView);

};

function main() {
    RaphaelPlay.main();
}
