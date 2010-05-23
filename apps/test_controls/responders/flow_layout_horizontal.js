/*globals TestControls*/
require("responders/groups");
TestControls.FLOWLAYOUTHORIZONTAL = SC.Responder.create({
    flowLayoutHorizontal: null,
    nextResponder: TestControls.GROUPS,
      
    didBecomeFirstResponder: function() {
        // create the categories list if it is not already there
        if (!this.flowLayoutHorizontal) this.flowLayoutHorizontal = TestControls.FlowLayoutHorizontal.create();
            
        // push it onto the navigation view
        TestControls.mainPage.getPath("mainPane.split.masterView").push(this.flowLayoutHorizontal);
        },
          
    back: function() {
        TestControls.makeFirstResponder(TestControls.GROUPS);
        },
          
    willLoseFirstResponder: function() {
        // pop back to original view
        TestControls.mainPage.getPath("mainPane.split.masterView").pop();
        }
    });

