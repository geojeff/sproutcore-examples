// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls*/

require("responders/categories");
PhoneControls.CATEGORY_DISPLAY = SC.Responder.create({
    display_page : null,
    nextResponder: PhoneControls.CATEGORIES,
      
    didBecomeFirstResponder: function() {
        // create the display page if it is not already there
        if (!this.display_page) this.display_page = PhoneControls.CategoryDisplay.create();

        PhoneControls.mainPage.getPath("mainPane.navigationView").push(this.display_page);
        },
          
    back: function() {
        PhoneControls.makeFirstResponder(PhoneControls.CATEGORIES);
        return YES;
        },
          
    willLoseFirstResponder: function() {
        PhoneControls.mainPage.getPath("mainPane.navigationView").pop();
        }
    });

