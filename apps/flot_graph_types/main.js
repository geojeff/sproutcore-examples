// ==========================================================================
// Project:   FlotGraphTypes
// ==========================================================================
/*globals FlotGraphTypes */

FlotGraphTypes.main = function main() {

    FlotGraphTypes.getPath('mainPage.mainPane').append();

    var d1 = [];
    for (var i = 0; i < 14; i += 0.5)
        d1.push([i, Math.sin(i)]);

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

    var d3 = [];
    for (var i = 0; i < 14; i += 0.5)
        d3.push([i, Math.cos(i)]);

    var d4 = [];
    for (var i = 0; i < 14; i += 0.1)
        d4.push([i, Math.sqrt(i * 10)]);
                                
    var d5 = [];
    for (var i = 0; i < 14; i += 0.5)
        d5.push([i, Math.sqrt(i)]);

    var d6 = [];
    for (var i = 0; i < 14; i += 0.5 + Math.random())
        d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);
                                                                    
    var data = FlotGraphTypes.graphController.get('content').copy();
    data.pushObject(SC.Object.create({label: 'set1', data: d1, lines: { show: true, fill: true }}));
    data.pushObject(SC.Object.create({label: 'set2', data: d2, bars: { show: true }}));
    data.pushObject(SC.Object.create({label: 'set3', data: d3, points: { show: true }}));
    data.pushObject(SC.Object.create({label: 'set4', data: d4, lines: { show: true }}));
    data.pushObject(SC.Object.create({label: 'set5', data: d5, lines: { show: true }, points: { show: true }}));
    data.pushObject(SC.Object.create({label: 'set6', data: d6, lines: { show: true, steps: true }}));

    FlotGraphTypes.graphController.set('content', data);

};

function main() {
    FlotGraphTypes.main();
}


