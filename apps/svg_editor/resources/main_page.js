// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       ScalableVectorGraphicsEditor
// ==========================================================================
/*globals ScalableVectorGraphicsEditor Forms */

ScalableVectorGraphicsEditor.mainPage = SC.Page.design({
    mainPane: SC.MainPane.design({
        childViews: 'editor'.w(),

        editor: SC.WebView.extend(SC.ContentDisplay, {
            layout: { width: 750, height: 650 },
            //value: 'http://svg-edit.googlecode.com/svn/tags/stable/editor/svg-editor.html',
            value: 'http://www.geojeff.com/svg-edit-read-only/editor/svg-editor.html',
        }),

    })
});
