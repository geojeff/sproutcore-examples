// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls*/

require("responders/groups");
PhoneControls.CATEGORIES = SC.Responder.create({
    categoriesList: null,
    nextResponder: PhoneControls.GROUPS,
      
    didBecomeFirstResponder: function() {
        // create the categories list if it is not already there
        if (!this.categoriesList) this.categoriesList = PhoneControls.CategoriesList.create();

        // push it onto the navigation view
        PhoneControls.mainPage.getPath("mainPane.navigationView").push(this.categoriesList);
        },
          
    back: function() {
        PhoneControls.makeFirstResponder(PhoneControls.GROUPS);
        return YES;
        },
          
    categorySelect: function() {
        PhoneControls.makeFirstResponder(PhoneControls.CATEGORY_DISPLAY);
        },

    willLoseFirstResponder: function() {
        PhoneControls.mainPage.getPath("mainPane.navigationView").pop();
        }
    });

