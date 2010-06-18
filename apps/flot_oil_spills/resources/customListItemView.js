// ==========================================================================                                                                                                                                                                                             
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// App:       FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills Forms */

FlotOilSpills.CustomListItemView = SC.View.extend(SC.ContentDisplay, {
    classNames: ['custom-list-item-view'],
    contentDisplayProperties: 'name location min_tonnage max_tonnage timestamp'.w(),
    displayProperties: 'isSelected'.w(),

    numberFormat: function(nStr,prefix) {
        prefix = prefix || '';
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return prefix + x1 + x2;
    },

    render: function(context, firstTime) {
        var content = this.get('content');
        var name = content.get('name');
        var location = content.get('location');
        var min_tonnage = content.get('min_tonnage');
        var max_tonnage = content.get('max_tonnage');
        var date = new Date(content.get('timestamp'));
        var min_barrels = Math.round(min_tonnage / 0.136);
        var max_barrels = Math.round(max_tonnage / 0.136);

        var min_gallons = this.numberFormat((min_barrels * 42)+'');
        var max_gallons = this.numberFormat((max_barrels * 42)+'');

        var isSelected = this.get('isSelected');
        var contentIndex = this.get('contentIndex');

        var isEven = contentIndex % 2 ? YES : NO;

        context = context.setClass({ 'odd': !isEven, 'even': isEven });

        var standard = !isSelected;
        var selected = isSelected;
        var classes = { 'standard': standard, 'selected': selected };

        context = context.begin().addClass('row').setClass(classes);
        context = context.begin().addClass('top').setClass(classes);
        context = context.begin('p').addClass('name').push('%@, %@'.fmt(name, location)).end();
        context = context.end(); // div.top

        context = context.begin().addClass('bottom').setClass(classes);
        context = context.begin('p').addClass('item').addClass('date');
        context = context.begin('span').addClass('label').push('Date:').end();
        context = context.begin('span').addClass('value').push(date.getFullYear()).end();
        context = context.end(); // p.label.date
        context = context.begin('p').addClass('item').addClass('amount');
        context = context.begin('span').addClass('label').push('Min. Gallons:').end();
        context = context.begin('span').addClass('value').push(min_gallons).end();
        context = context.end(); // p.label.min_gallons
        context = context.begin('p').addClass('item').addClass('amount');
        context = context.begin('span').addClass('label').push('Max. Gallons:').end();
        context = context.begin('span').addClass('value').push(max_gallons).end();
        context = context.end(); // p.label.max_gallons
        context = context.end(); // div.bottom
        context = context.end(); // div.row

        sc_super();
    }

});

