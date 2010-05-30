// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*global PhoneControls tile Forms */

require("resources/progress_page");
require("resources/buttons_page");
require("resources/checkboxes_page");
require("resources/radio_page");
require("resources/select_page");
require("resources/segmented_page");
require("resources/sliders_page");
require("resources/text_field_page");
require("resources/flow_layout_page");
require("resources/scroll_page");
require("resources/list_page");
require("resources/tab_page");

PhoneControls.mainPage = SC.Page.create({
  
  mainPane: SC.MainPane.design(SC.Animatable, {
    defaultResponder: PhoneControls,
    wantsAcceleratedLayer: YES,
    childViews: "navigationView".w(),
    navigationView: SC.NavigationView.design({ })
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'welcome-tab',
    value: "<h1>Phone Controls</h1><p>SproutCore comes bundled with a wide array of controls that you can use in your own applications. Most of these controls can be created very easily using the built-in view helper functions. Consult the source code of this application for samples code to use in your own application.</p>"
  }),
  
  progress_page: PhoneControls.progressPage,
  
  buttons_page: PhoneControls.buttonsPage,
  
  checkboxes_page: PhoneControls.checkboxesPage,
  
  radio_page: PhoneControls.radioPage,
  
  select_page: PhoneControls.selectPage,

  sliders_page: PhoneControls.slidersPage,
  
  text_field_page: PhoneControls.textFieldPage,
  
  segmented_page: PhoneControls.segmentedPage,
  
  flow_layout_page: PhoneControls.flowLayoutPage,

  scroll_page: PhoneControls.scrollPage,
  
  list_page: PhoneControls.listPage,
  
  tab_page: PhoneControls.tabPage
});
