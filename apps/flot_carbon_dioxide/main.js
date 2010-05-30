// ==========================================================================
// Project:   FlotCarbonDioxide
// ==========================================================================
/*globals FlotCarbonDioxide */

FlotCarbonDioxide.main = function main() {

    FlotCarbonDioxide.getPath('mainPage.mainPane').append();

	var query = SC.Query.local(FlotCarbonDioxide.co2data, { orderBy: 'timestamp' });
	var co2data = FlotCarbonDioxide.store.find(query);

    FlotCarbonDioxide.graphController.addData(co2data);
};

function main() {
    FlotCarbonDioxide.main();
}


