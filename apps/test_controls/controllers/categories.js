// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals TestControls */

/** @class
  @extends SC.CategoriesController
*/

TestControls.groups = [
    SC.Object.create({
        name: "Controls",
        categories: [
        SC.Object.create({
            name: "Buttons",
            show: "buttons_page"
            }),
        SC.Object.create({
            name: "Checkboxes",
            show: "checkboxes_page"
            }),
        SC.Object.create({
            name: "Progress",
            show: "progress_page"
            }),
        SC.Object.create({
            name: "Radio",
            show: "radio_page"
            }),
        SC.Object.create({
            name: "Segmented Button",
            show: "segmented_page"
            }),
        SC.Object.create({
            name: "Select Button",
            show: "select_page"
            }),
        SC.Object.create({
            name: "Sliders",
            show: "sliders_page"
            }),
        SC.Object.create({
            name: "Tabbed View",
            show: "tab_page"
            })
        ]
    }),

    SC.Object.create({
        name: "Collections",
        categories: [
            SC.Object.create({
                name: "List",
                show: "list_page"
            })
        ]
    }),
      
    SC.Object.create({
        name: "Fields",
        categories: [
            SC.Object.create({
                name: "Text Field",
                show: "text_field_page"
            })
        ]
    }),
      
    SC.Object.create({
        name: "Layout",
        categories: [
            SC.Object.create({
               name: "Flow Layout",
               show: "flow_layout_page"
            })
        ]
    }),
      
    SC.Object.create({
        name: "Scroll",
        categories: [
            SC.Object.create({
                name: "Simple",
                show: "scroll_page"
            })
        ]
    })
];
      
TestControls.groupsController = SC.ArrayController.create({
});
    
TestControls.groupController = SC.ObjectController.create({
    contentBinding: "TestControls.groupsController.selection",
    contentBindingDefault: SC.Binding.single()
});
 
TestControls.categoriesController = SC.ArrayController.create({
    contentBinding: "TestControls.groupController.categories"
});
