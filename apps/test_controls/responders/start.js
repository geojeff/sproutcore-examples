/*globals TestControls*/
TestControls.START = SC.Responder.create({
    didBecomeFirstResponder: function() {
        TestControls.getPath('mainPage.mainPane').append() ;
        TestControls.groupsController.set("content", TestControls.groups);
            
        TestControls.invokeLater("makeFirstResponder", 1, TestControls.FLOWLAYOUTHORIZONTAL);
        },
          
    willLoseFirstResponder: function() {
            
        }
    });

