// ==========================================================================
// Project:   FlotHumanPopulation
// ==========================================================================
/*globals FlotHumanPopulation */

FlotHumanPopulation.main = function main() {

    FlotHumanPopulation.getPath('mainPage.mainPane').append();

	var query = SC.Query.local(FlotHumanPopulation.human_population_data, { orderBy: 'timestamp' });
	var human_population_data = FlotHumanPopulation.store.find(query);

    FlotHumanPopulation.graphController.addData(human_population_data);
};

function main() {
    FlotHumanPopulation.main();
}


