// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals PhoneControls */

PhoneControls.CategoryDisplay = SC.View.design({
    wantsAcceleratedLayer: YES,
    topToolbar: SC.NavigationBarView.design({
        layout: { top: 0, left: 0, right: 0, height: 32 },
        childViews: "label back".w(),
        back: SC.ButtonView.design({
            contentTitleKey: "name",
            contentBinding: "PhoneControls.groupController",
            theme: "point-left",
            action: "back",
            isSwipeLeft: YES,
            layout: {left: 7, centerY: 0, height: 44, width: 110 },
            controlSize: SC.HUGE_CONTROL_SIZE
            }),

        label: SC.LabelView.design({
            textAlign: SC.ALIGN_CENTER,
            layout: { left: 30, centerY: 0, height: 20, right: 10 },
            valueBinding: "PhoneControls.categoryController.name",
            classNames: "embossed".w()
            })
        }),
          
    classNames: ["sc-source-list-background"],
    childViews: "contentView".w(),
    contentView: SC.ContainerView.design({ 
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        nowShowingBinding: "PhoneControls.categoryDisplayController.nowShowing",
        })
    });

