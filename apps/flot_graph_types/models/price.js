// ==========================================================================
// Project:   FlotGraphTypes.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotGraphTypes */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotGraphTypes.price = SC.Record.extend(
/** @scope FlotGraphTypes.price.prototype */ {

  epoch: SC.Record.attr(Number),
  price: SC.Record.attr(Number)

});
