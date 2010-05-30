// ==========================================================================
// Project:   FlotSettingOptions.priceVersusExchangeRate.
// ==========================================================================
/*globals FlotSettingOptions */

/** @class

  @extends SC.Record
  @version 0.1
*/
FlotSettingOptions.price = SC.Record.extend(
/** @scope FlotSettingOptions.price.prototype */ {

  epoch: SC.Record.attr(Number),
  price: SC.Record.attr(Number),

}) ;
