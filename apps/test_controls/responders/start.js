// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals TestControls*/

TestControls.START = SC.Responder.create({
    didBecomeFirstResponder: function() {
        TestControls.getPath('mainPage.mainPane').append() ;
        TestControls.groupsController.set("content", TestControls.groups);
            
        TestControls.invokeLater("makeFirstResponder", 1, TestControls.GROUPS);
        },
          
    willLoseFirstResponder: function() {
            
        }
    });

