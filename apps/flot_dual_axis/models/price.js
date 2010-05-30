// ==========================================================================
// Project:   FlotDualAxis.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotDualAxis */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotDualAxis.price = SC.Record.extend(
/** @scope FlotDualAxis.price.prototype */ {

  epoch: SC.Record.attr(Number),
  price: SC.Record.attr(Number),

}) ;
