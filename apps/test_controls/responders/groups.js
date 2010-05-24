// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
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

