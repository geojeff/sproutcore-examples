// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls*/

PhoneControls.GroupsList = SC.ScrollView.extend({
    topToolbar: SC.NavigationBarView.design({
        layout: { top: 0, left: 0, right: 0, height: 32 },
        childViews: "label".w(),
        label: SC.LabelView.design({
            textAlign: SC.ALIGN_CENTER,
            layout: { left: 10, centerY: 0, height: 20, right: 10 },
            value: "Phone Controls",
            classNames: "embossed".w()
            })
        }),
    
    classNames: ["sc-source-list-background"],
    contentView: SC.SourceListView.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        contentValueKey: "name",
        contentBinding: "PhoneControls.groupsController.arrangedObjects",
        selectionBinding: "PhoneControls.groupsController.selection",
        actOnSelect: YES,
        action: "groupSelect"
        })
});
