// ==========================================================================                                                                                                                                                                                             
//   Project:   test_controls
// ==========================================================================
/*globals TestControls*/
TestControls.GroupsList = SC.ScrollView.extend({
    topToolbar: SC.NavigationBarView.design({
        layout: { top: 0, left: 0, right: 0, height: 32 },
        childViews: "label".w(),
        label: SC.LabelView.design({
            textAlign: SC.ALIGN_CENTER,
            layout: { left: 10, centerY: 0, height: 20, right: 10 },
            value: "Test Controls",
            classNames: "embossed".w()
            })
        }),
    
    classNames: ["sc-source-list-background"],
    contentView: SC.SourceListView.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        contentValueKey: "name",
        contentBinding: "TestControls.groupsController.arrangedObjects",
        selectionBinding: "TestControls.groupsController.selection",
        actOnSelect: YES,
        action: "groupSelect"
        })
});
