// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls*/

PhoneControls.START = SC.Responder.create({
    didBecomeFirstResponder: function() {
        PhoneControls.getPath('mainPage.mainPane').append() ;
        PhoneControls.groupsController.set("content", PhoneControls.groups);

        PhoneControls.invokeLater("makeFirstResponder", 1, PhoneControls.GROUPS);
        },
          
    back: function() {
        return YES;
        },

    willLoseFirstResponder: function() {
            
        }
    });

