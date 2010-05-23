/*globals TestControls */
TestControls.CategoriesList = SC.ScrollView.design({
    topToolbar: SC.NavigationBarView.design({
        layout: { top: 0, left: 0, right: 0, height: 32 },
        childViews: "label back".w(),
        back: SC.ButtonView.design({
            title: "Groups",
            theme: "point-left",
            action: "back",
            isSwipeLeft: YES,
            layout: {left: 7, centerY: 0, height: 44, width: 80 },
            controlSize: SC.HUGE_CONTROL_SIZE
            }),

        label: SC.LabelView.design({
            textAlign: SC.ALIGN_CENTER,
            layout: { left: 30, centerY: 0, height: 20, right: 10 },
            value: "Categories",
            classNames: "embossed".w()
            })
        }),
          
    classNames: ["sc-source-list-background"],
    contentView: SC.SourceListView.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
            contentValueKey: "name",
            contentBinding: "TestControls.categoriesController.arrangedObjects",
            selectionBinding: "TestControls.categoriesController.selection"
        })
    });

