RaphaelPlay.CustomListItemView = SC.View.extend(SC.ContentDisplay, {
    classNames: ['custom-list-item-view'],
    contentDisplayProperties: 'name'.w(),
    displayProperties: 'isSelected'.w(),

    render: function(context, firstTime) {
        var content = this.get('content');
        var name = content.get('name');
        var isSelected = this.get('isSelected');

        var standard = !isSelected;
        var selected = isSelected;
        var classes = { 'standard': standard, 'selected': selected };

        context = context.begin().addClass('row').setClass(classes);
        context = context.begin('p').addClass('name').push(name).end();
        context = context.end(); // div.row

        sc_super();
    }

});

