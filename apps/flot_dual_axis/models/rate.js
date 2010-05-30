// ==========================================================================
// Project:   FlotDualAxis.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotDualAxis */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotDualAxis.rate = SC.Record.extend(
/** @scope FlotDualAxis.rate.prototype */ {

  epoch: SC.Record.attr(Number),
  rate: SC.Record.attr(Number),

}) ;
