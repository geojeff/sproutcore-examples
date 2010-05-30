// ==========================================================================
// Project:   FlotDualAxis
// ==========================================================================
/*globals FlotDualAxis */

FlotDualAxis.main = function main() {

    FlotDualAxis.getPath('mainPage.mainPane').append();

	var query = SC.Query.local(FlotDualAxis.rate, { orderBy: 'epoch' });
	var rates = FlotDualAxis.store.find(query);

	var query = SC.Query.local(FlotDualAxis.price, { orderBy: 'epoch' });
	var prices = FlotDualAxis.store.find(query);

    FlotDualAxis.graphController.addData(rates, prices);
};

function main() {
    FlotDualAxis.main();
}


