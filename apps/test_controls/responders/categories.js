/*globals TestControls*/
require("responders/groups");
TestControls.CATEGORIES = SC.Responder.create({
    categoriesList: null,
    nextResponder: TestControls.GROUPS,
      
    didBecomeFirstResponder: function() {
        // create the categories list if it is not already there
        if (!this.categoriesList) this.categoriesList = TestControls.CategoriesList.create();
            
        // push it onto the navigation view
        TestControls.mainPage.getPath("mainPane.split.masterView").push(this.categoriesList);
        },
          
    back: function() {
        TestControls.makeFirstResponder(TestControls.GROUPS);
        },
          
    willLoseFirstResponder: function() {
        // pop back to original view
        TestControls.mainPage.getPath("mainPane.split.masterView").pop();
        }
    });

