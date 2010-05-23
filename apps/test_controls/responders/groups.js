/*globals TestControls*/
TestControls.GROUPS = SC.Responder.create({
    groupsList: null,
      
    didBecomeFirstResponder: function() {
        // create the groups list if we have not already
        if (!this.groupsList) this.groupsList = TestControls.GroupsList.create();
            
        // push it onto navigation view
        TestControls.mainPage.getPath("mainPane.split.masterView").push(this.groupsList);
        },
          
    groupSelect: function() {
        TestControls.makeFirstResponder(TestControls.CATEGORIES);
        },
          
    willLoseFirstResponder: function() {
            
        }
    });

