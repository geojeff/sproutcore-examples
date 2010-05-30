// ==========================================================================
// Project:   FlotGraphTypes.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotGraphTypes */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotGraphTypes.rate = SC.Record.extend(
/** @scope FlotGraphTypes.rate.prototype */ {

  epoch: SC.Record.attr(Number),
  rate: SC.Record.attr(Number),

}) ;
