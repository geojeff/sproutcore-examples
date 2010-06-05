// ==========================================================================
// Project:   FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills */

FlotOilSpills.main = function main() {

    FlotOilSpills.getPath('mainPage.mainPane').append();

	var query = SC.Query.local(FlotOilSpills.oil_spill_data, { orderBy: 'timestamp, DESC' });
	var oil_spill_data = FlotOilSpills.store.find(query);

    FlotOilSpills.graphController.addData(oil_spill_data);
    FlotOilSpills.spillController.set('content', oil_spill_data);

	var query = SC.Query.local(FlotOilSpills.oil_spill_references, { orderBy: 'guid' });
	var oil_spill_references = FlotOilSpills.store.find(query);

    FlotOilSpills.referenceController.set('content', oil_spill_references);
};

function main() {
    FlotOilSpills.main();
}


