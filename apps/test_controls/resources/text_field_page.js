// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/*globals TestControls Forms*/
TestControls.textFieldPage = SC.View.design({
  childViews: "form".w(),
  form: SC.ScrollView.design({
    
    
    contentView: SC.FormView.design({
      theme: "iphone-form",
    
      classNames: ["sample_controls"],
      layout: { left: 20, top: 40, right: 20, bottom: 40 },
      childViews: "header1 normal1 disabled1 spacer1 header2 normal2 spacer2 disabled2".w(),
    
      header1: SC.LabelView.design({
        layout: { width: 400, height: 44 },
        classNames: "header".w(),
        value: "Text Fields, without spacer"
      }),
    
      normal1: SC.FormView.row(SC.TextFieldView.design({
        layout: { left: 0, width: 150, height: 44, centerY: 0},
        value: "Text",
        isSpacer: YES
      }), { classNames: ["first"] }),

      disabled1: SC.FormView.row(SC.TextFieldView.design({
        layout: { left: 0, width: 150, height: 44, centerY: 0},
        isEnabled: NO,
        value: "Disabled"
      }), { classNames: ["last"] }),

      spacer1: SC.View.design({
        layout: { left: 0, width: 150, height: 54, centerY: 0},
        value: "",
        flowSize: { widthPercentage: 1 }
      }), 
    
      header2: SC.LabelView.design({
        layout: { width: 400, height: 44 },
        classNames: "header".w(),
        value: "Text Fields, with spacer"
      }),
    
      normal2: SC.FormView.row(SC.TextFieldView.design({
        layout: { left: 0, width: 150, height: 44, centerY: 0},
        value: "Text",
        isSpacer: YES
      }), { classNames: ["first", "last"] }),

      spacer2: SC.View.design({
        layout: { left: 0, width: 150, height: 4, centerY: 0},
        value: ""
      }), 
    
      disabled2: SC.FormView.row(SC.TextFieldView.design({
        layout: { left: 0, width: 150, height: 44, centerY: 0},
        isEnabled: NO,
        value: "Disabled"
      }), { classNames: ["first"] })
    })
  })
});
