// ==========================================================================
// Project:   FlotOilSpills
// ==========================================================================
/*globals FlotOilSpills */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotOilSpills.oil_spill_data = SC.Record.extend(
/** @scope FlotOilSpills.oil_spill_data.prototype */ {

  guid: SC.Record.attr(Number),
  timestamp: SC.Record.attr(Number),
  name: SC.Record.attr(String),
  location: SC.Record.attr(String),
  min_tonnage: SC.Record.attr(Number),
  max_tonnage: SC.Record.attr(Number),
  references: SC.Record.attr(Array)

}) ;
