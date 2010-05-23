// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls*/

PhoneControls.GROUPS = SC.Responder.create({
    groupsList: null,

    back: function () {
        return YES;
        },
      
    didBecomeFirstResponder: function() {
        // create the groups list if we have not already
        if (!this.groupsList) this.groupsList = PhoneControls.GroupsList.create();

        // push it onto navigation view
        PhoneControls.mainPage.getPath("mainPane.navigationView").push(this.groupsList);
        },
          
    groupSelect: function() {
        PhoneControls.makeFirstResponder(PhoneControls.CATEGORIES);
        },
          
    willLoseFirstResponder: function() {
            
        }
    });

