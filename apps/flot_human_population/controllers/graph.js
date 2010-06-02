// ==========================================================================
// Project:   FlotHumanPopulation.graphController
// ==========================================================================
/*globals FlotHumanPopulation */

/** @class

  @extends SC.Object
*/
FlotHumanPopulation.graphController = SC.ArrayController.create(
/** @scope FlotHumanPopulation.graphController.prototype */ {

    content: [
        SC.Object.create({area: 'wo', label: 'set1', data:[], 'isShowing': YES }),
        SC.Object.create({area: 'af', label: 'set2', data:[], 'isShowing': YES }),
        SC.Object.create({area: 'as', label: 'set3', data:[], 'isShowing': YES }),
        SC.Object.create({area: 'eu', label: 'set4', data:[], 'isShowing': YES }),
        SC.Object.create({area: 'la', label: 'set5', data:[], 'isShowing': YES }),
        SC.Object.create({area: 'na', label: 'set6', data:[], 'isShowing': YES }),
        SC.Object.create({area: 'oc', label: 'set7', data:[], 'isShowing': YES })
    ],

    options: SC.Object.create({}),

    addData: function(human_population_data) {
        var data = this.get('content').copy();

        for (i = 0; i < human_population_data.get('length'); i++) {
            data.objectAt(0).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('world')]);
            data.objectAt(1).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('africa')]);
            data.objectAt(2).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('asia')]);
            data.objectAt(3).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('europe')]);
            data.objectAt(4).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('latin_america')]);
            data.objectAt(5).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('northern_america')]);
            data.objectAt(6).get('data').pushObject([human_population_data.objectAt(i).get('timestamp'), human_population_data.objectAt(i).get('oceania')]);
        }
        data.objectAt(0).set('label', 'World (m)');
        data.objectAt(1).set('label', 'Africa (m)');
        data.objectAt(2).set('label', 'Asia (m)');
        data.objectAt(3).set('label', 'Europe (m)');
        data.objectAt(4).set('label', 'Latin America (m)');
        data.objectAt(5).set('label', 'Northern America (m)');
        data.objectAt(6).set('label', 'Oceania (m)');

        data.objectAt(0).set('color', 1 );
        data.objectAt(1).set('color', 2 );
        data.objectAt(2).set('color', 3 );
        data.objectAt(3).set('color', 4 );
        data.objectAt(4).set('color', 5 );
        data.objectAt(5).set('color', 6 );
        data.objectAt(6).set('color', 7 );

        this.set('content', data);

        this.selectObjects(data);

        var options = SC.Object.create({
            legend: { position: 'nw' },
            grid: { backgroundColor: { colors: ["#fff", "#eee"]}}, // not in original
            xaxis: { mode: 'time' },
        });
        this.set('options', options);
    },

    getDataset: function(area) { return this.get('content').findProperty('area', area) },

    isWorldDataShowing: YES,
    worldDataObserver: function() {
        dataset = this.getDataset('wo');
        if (this.get('isWorldDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isWorldDataShowing'),

    isAfricaDataShowing: YES,
    africaDataObserver: function() {
        dataset = this.getDataset('af');
        if (this.get('isAfricaDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isAfricaDataShowing'),

    isAsiaDataShowing: YES,
    asiaDataObserver: function() {
        dataset = this.getDataset('as');
        if (this.get('isAsiaDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isAsiaDataShowing'),

    isEuropeDataShowing: YES,
    europeDataObserver: function() {
        dataset = this.getDataset('eu');
        if (this.get('isEuropeDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isEuropeDataShowing'),

    isLatinAmericaDataShowing: YES,
    latinAmericaDataObserver: function() {
        dataset = this.getDataset('la');
        if (this.get('isLatinAmericaDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isLatinAmericaDataShowing'),

    isNorthernAmericaDataShowing: YES,
    northernAmericaDataObserver: function() {
        dataset = this.getDataset('na');
        if (this.get('isNorthernAmericaDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isNorthernAmericaDataShowing'),

    isOceaniaDataShowing: YES,
    oceaniaDataObserver: function() {
        dataset = this.getDataset('oc');
        if (this.get('isOceaniaDataShowing') === NO ) {
            this.deselectObject(dataset);
        } else {
            this.selectObject(dataset, extend = YES);
        }
        FlotHumanPopulation.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('isOceaniaDataShowing'),

});


